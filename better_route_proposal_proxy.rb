#!/usr/bin/env ruby
require 'webrick'
require 'net/http'
require 'uri'
require 'zlib'
require 'stringio'
require 'json'
require 'time'
require 'cgi'

PORT = 8000
TARGET_BASE = "https://api.tomtom.com"

$processing_mode = :mode1

def clean_url(original_url)
  uri = URI.parse(original_url)
  if uri.query
    params = CGI.parse(uri.query)
    
    # Удаляем ненужные параметры
    params.delete('alternativeType')
    params.delete('minDeviationTime')
    params.delete('reconstructionMode')
    params.delete('supportingPointIndexOfOrigin')
    
    # Запрашиваем 2 альтернативных маршрута (итого 3 маршрута)
    params['maxAlternatives'] = ['2']
    
    # Перестраиваем строку запроса
    uri.query = URI.encode_www_form(params)
  end
  uri.to_s
end

def modify_route_summary(route, alt_route, delay)
  return unless route["summary"] && alt_route["summary"]
  
  # Update top-level summary from alternative route
  alt_summary = alt_route["summary"]
  summary = route["summary"]
  
  summary["travelTimeInSeconds"] = alt_summary["travelTimeInSeconds"].to_i + delay
  summary["trafficDelayInSeconds"] = alt_summary["trafficDelayInSeconds"].to_i + delay
  
  if alt_summary["arrivalTime"]
    begin
      dt = Time.iso8601(alt_summary["arrivalTime"])
      dt += delay
      summary["arrivalTime"] = dt.iso8601
    rescue
      # Keep original if parsing fails
    end
  end

  # Update each leg's summary from corresponding alternative leg
  if route["legs"] && alt_route["legs"]
    # Process up to the minimum number of legs
    min_legs = [route["legs"].size, alt_route["legs"].size].min
    
    min_legs.times do |i|
      leg = route["legs"][i]
      alt_leg = alt_route["legs"][i]
      
      next unless leg["summary"] && alt_leg["summary"]
      
      leg_summary = leg["summary"]
      alt_leg_summary = alt_leg["summary"]
      
      leg_summary["travelTimeInSeconds"] = alt_leg_summary["travelTimeInSeconds"].to_i + delay
      leg_summary["trafficDelayInSeconds"] = alt_leg_summary["trafficDelayInSeconds"].to_i + delay
      
      if alt_leg_summary["arrivalTime"]
        begin
          dt = Time.iso8601(alt_leg_summary["arrivalTime"])
          dt += delay
          leg_summary["arrivalTime"] = dt.iso8601
        rescue
          # Keep original if parsing fails
        end
      end
    end
  end
end

def ungzed_response_body(response)
  if response['content-encoding'] == 'gzip'
    sio = StringIO.new(response.body)
    gz  = Zlib::GzipReader.new(sio)
    decompressed_body = gz.read
    gz.close
    decompressed_body
  else
    response.body
  end
end

server = WEBrick::HTTPServer.new(
  Port: PORT,
  Logger: WEBrick::Log.new(File::NULL, WEBrick::Log::FATAL),
  AccessLog: []
)

server.mount_proc '/' do |req, res|
  target_url = "#{TARGET_BASE}#{req.unparsed_uri}"
  target_uri = URI(target_url)

  http = Net::HTTP.new(target_uri.host, target_uri.port)
  http.use_ssl = (target_uri.scheme == "https")

  http_class = Net::HTTP.const_get(req.request_method.capitalize)
  request_forward = http_class.new(target_uri.request_uri)

  req.header.each do |key, values|
    if key.downcase == "host"
      request_forward[key] = target_uri.host
    else
      request_forward[key] = values.join(", ")
    end
  end

  request_forward.body = req.body if req.body

  isReplanning = req.unparsed_uri.include?("alternativeType") && !req.unparsed_uri.include?("maxAlternatives=0")
  shouldProcess = $processing_mode != :mode5 && req.unparsed_uri.include?("calculateRoute") && isReplanning

  if shouldProcess
    cleaned_url = clean_url(target_url)
    cleaned_uri = URI(cleaned_url)

    http = Net::HTTP.new(cleaned_uri.host, cleaned_uri.port)
    http.use_ssl = (cleaned_uri.scheme == "https")
    request_forward = Net::HTTP::Post.new(cleaned_uri.request_uri)

    req.header.each do |key, values|
      next if key.downcase == "content-length"
      if key.downcase == "host"
        request_forward[key] = cleaned_uri.host
      else
        request_forward[key] = values.join(", ")
      end
    end

    # Модифицируем тело запроса
    if req['content-type']&.include?('application/json') && req.body
      begin
        body_json = JSON.parse(req.body)
        if body_json['legs']
          body_json['legs'].each do |leg|
            leg.delete('encodedPolylinePrecision')
            leg.delete('encodedPolyline')
          end
        end
        request_forward.body = JSON.generate(body_json)
      rescue
        request_forward.body = req.body
      end
    else
      request_forward.body = req.body
    end

    response_forward = http.request(request_forward)
    body = ungzed_response_body(response_forward)
    json_post = JSON.parse(body) rescue nil

    if response_forward.code == '200' && json_post && json_post["routes"] && json_post["routes"].size > 0
      delay = case $processing_mode
              when :mode1 then 3600 + 30   # 1 hour + 30 sec
              when :mode2 then 120 + 30    # 2 minutes + 30 sec
              when :mode3 then 5400 + 30   # 1.5 hours + 30 sec
              when :mode4 then 240 + 30    # 4 minutes + 30 sec
              else 0
              end

      # Выбираем альтернативный маршрут в зависимости от режима
      alt_route_index = case $processing_mode
                        when :mode1, :mode2 then 1
                        when :mode3, :mode4 then 2
                        else 0
                        end

      # Модифицируем первый маршрут с использованием альтернативного
      if json_post["routes"].size > alt_route_index
        alt_route = json_post["routes"][alt_route_index]
        modify_route_summary(json_post["routes"][0], alt_route, delay)
      end

      # Создаем новый массив маршрутов
      new_routes = [json_post["routes"][0]]

      # Добавляем альтернативный маршрут
      case $processing_mode
      when :mode1, :mode2
        if json_post["routes"].size > 1
          alt_route = json_post["routes"][1]
          alt_route["summary"]["planningReason"] = "Better_Proposal" if alt_route["summary"]
          new_routes << alt_route
        end
      when :mode3, :mode4
        if json_post["routes"].size > 2
          alt_route = json_post["routes"][2]
          alt_route["summary"]["planningReason"] = "Better_Proposal" if alt_route["summary"]
          new_routes << alt_route
        end
      end

      # Заменяем маршруты в ответе
      json_post["routes"] = new_routes

      # Формируем строку с временами прибытия
      arrivals = []
      new_routes.each_with_index do |route, i|
        if route["summary"] && route["summary"]["arrivalTime"]
          arrivals << "arrival#{i+1} #{route['summary']['arrivalTime']}"
        end
      end
      output_str = arrivals.join(", ")
      puts "=> POST...#{output_str}"

      new_body = JSON.dump(json_post)
      response_forward.body = new_body
      response_forward.delete('content-encoding')
      response_forward['content-length'] = new_body.bytesize.to_s
    else
      puts "=> POST...#{response_forward.code}"
    end
  else
    response_forward = http.request(request_forward)
    puts "=> (unmodified)POST...#{response_forward.code}"
    
    # Декодируем и выводим тело ответа если нужно
    if response_forward.code == '200' && 
       response_forward['content-type']&.include?('application/json')
      
      body = ungzed_response_body(response_forward)
      
      begin
        json_body = JSON.parse(body)
        pretty_json = JSON.pretty_generate(json_body)
        puts "Response Body:"
        puts pretty_json
      rescue => e
        puts "Failed to parse JSON: #{e}"
      end
    end
  end

  res.status = response_forward.code.to_i
  response_forward.each_header do |header, value|
    if header.downcase == "transfer-encoding" && value.downcase == "chunked"
      next
    end
    res[header] = value
  end

  res.body = response_forward.body
end

Thread.new do
  help_msg = "Commands:
1 or 'mode1' - Use second route and set delay to 1 hour
2 or 'mode2' - Use second route and set delay to 2 minutes
3 or 'mode3' - Use third route and set delay to 1.5 hours
4 or 'mode4' - Use third route and set delay to 4 minutes
5 or 'mode5' - Return response without modifications"
  puts help_msg
  puts "[Current mode: #{$processing_mode}]"
  loop do
    print "Enter command: "
    input = gets.strip.downcase rescue nil
    if input.nil?
      sleep 1
      next
    end
    case input
    when '1', 'mode1'
      $processing_mode = :mode1
      puts "[Current mode: mode1]"
    when '2', 'mode2'
      $processing_mode = :mode2
      puts "[Current mode: mode2]"
    when '3', 'mode3'
      $processing_mode = :mode3
      puts "[Current mode: mode3]"
    when '4', 'mode4'
      $processing_mode = :mode4
      puts "[Current mode: mode4]"
    when '5', 'mode5'
      $processing_mode = :mode5
      puts "[Current mode: mode5]"
    else
      puts "Unknown command '#{input}'. Valid commands: 'mode1'/'1', 'mode2'/'2', 'mode3'/'3', 'mode4'/'4', 'mode5'/'5'."
      puts "[Current mode: #{$processing_mode}]"
    end
  end
end

trap("INT") { server.shutdown }
server.start
