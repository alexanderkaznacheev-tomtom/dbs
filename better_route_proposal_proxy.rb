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

def modify_route_summary(route, delay)
  if route["summary"]
    summary = route["summary"]
    summary["travelTimeInSeconds"] = summary["travelTimeInSeconds"].to_i + delay
    summary["trafficDelayInSeconds"] = summary["trafficDelayInSeconds"].to_i + delay
    if summary["arrivalTime"]
      begin
        dt = Time.iso8601(summary["arrivalTime"])
        dt += delay
        summary["arrivalTime"] = dt.iso8601
      rescue
      end
    end
  end

  if route["legs"]
    route["legs"].each do |leg|
      if leg["summary"]
        leg_summary = leg["summary"]
        leg_summary["travelTimeInSeconds"] = leg_summary["travelTimeInSeconds"].to_i + delay
        leg_summary["trafficDelayInSeconds"] = leg_summary["trafficDelayInSeconds"].to_i + delay
        if leg_summary["arrivalTime"]
          begin
            dt = Time.iso8601(leg_summary["arrivalTime"])
            dt += delay
            leg_summary["arrivalTime"] = dt.iso8601
          rescue
          end
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

      # Модифицируем первый маршрут
      modify_route_summary(json_post["routes"][0], delay)

      # Создаем новый массив маршрутов
      new_routes = [json_post["routes"][0]]

      # Выбираем альтернативный маршрут в зависимости от режима
      case $processing_mode
      when :mode1, :mode2
        # Берем второй маршрут (индекс 1)
        if json_post["routes"].size > 1
          alt_route = json_post["routes"][1]
          alt_route["summary"]["planningReason"] = "Better_Proposal" if alt_route["summary"]
          new_routes << alt_route
        end
      when :mode3, :mode4
        # Берем третий маршрут (индекс 2)
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
    puts "Enter command: "
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
