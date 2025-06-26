#!/usr/bin/env ruby
require 'webrick'
require 'net/http'
require 'uri'
require 'zlib'
require 'stringio'
require 'json'
require 'time'

PORT = 8000
TARGET_BASE = "https://api.tomtom.com"

# Global variable for additional processing mode.
# Possible values: :mode1, :mode2, :mode3, :mode4, :mode5
# Modes meaning:
#  • mode1: Adds the first alternative (index 1) and sets a delay of 1 hour (3610 sec)
#  • mode2: Adds the first alternative (index 1) and sets a delay of 3 minutes (190 sec)
#  • mode3: Adds the second alternative (index 2) and sets a delay of 1.5 hours (5410 sec)
#  • mode4: Adds the second alternative (index 2) and sets a delay of 4 minutes (250 sec)
#  • mode5: Returns the response unmodified
$processing_mode = :mode1

def clean_url(original_url)
  uri = URI.parse(original_url)
  if uri.query
    new_params = uri.query.split('&').reject do |param|
      param.start_with?("alternativeType=") ||
      param.start_with?("minDeviationTime=") ||
      param.start_with?("reconstructionMode=") ||
      param.start_with?("supportingPointIndexOfOrigin=")
    end.map do |param|
      param == "maxAlternatives=1" ? "maxAlternatives=2" : param
    end
    uri.query = new_params.empty? ? nil : new_params.join('&')
  end
  uri.to_s
end

def pretty_print_request(req)
  output = "#{req.method} #{req.path} HTTP/1.1\n"
  req.each_header do |key, value|
    output << "#{key}: #{value}\n"
  end
  output << "\n"
  output << (req.body.nil? ? "" : req.body)
  output
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

server = WEBrick::HTTPServer.new(Port: PORT)

server.mount_proc '/' do |req, res|
  # Construct the URL for the outgoing request
  target_url = "#{TARGET_BASE}#{req.unparsed_uri}"
  target_uri = URI(target_url)

  # Set up HTTPS connection to the destination server
  http = Net::HTTP.new(target_uri.host, target_uri.port)
  http.use_ssl = (target_uri.scheme == "https")

  # Select the HTTP class (GET, POST, PUT, DELETE, etc.) based on the request method
  http_class = Net::HTTP.const_get(req.request_method.capitalize)
  request_forward = http_class.new(target_uri.request_uri)

  # Transfer request headers
  req.header.each do |key, values|
    if key.downcase == "host"
      request_forward[key] = target_uri.host
    else
      request_forward[key] = values.join(", ")
    end
  end

  # Transfer request body (if present)
  request_forward.body = req.body if req.body

  # Perform the request to the destination server
  response_forward = http.request(request_forward)

  # If the mode is not mode5, the request is POST, the URL contains "calculateRoute",
  # and the maxAlternatives parameter is not set to 0, perform an additional GET request
  # and modify the JSON response accordingly.
  if $processing_mode != :mode5 && req.request_method == "POST" &&
     req.unparsed_uri.include?("calculateRoute") && !req.unparsed_uri.include?("maxAlternatives=0")
    cleaned_url = clean_url(target_url)
    extra_uri = URI.parse(cleaned_url)
    extra_http = Net::HTTP.new(extra_uri.host, extra_uri.port)
    extra_http.use_ssl = (extra_uri.scheme == "https")
    extra_request = Net::HTTP::Get.new(extra_uri.request_uri)
    request_forward.each_header do |key, value|
      next if ["content-length", "content-type"].include?(key.downcase)
      extra_request[key] = value
    end

    begin
      extra_response = extra_http.request(extra_request)
      puts "\n### Extra GET request to #{cleaned_url} returned status code #{extra_response.code} ###\n\n"
    rescue => e
      puts "Extra GET request failed: #{e.message}"
      extra_response = nil
    end

    begin
      json_post = JSON.parse(ungzed_response_body(response_forward))
      json_get  = extra_response ? JSON.parse(ungzed_response_body(extra_response)) : nil

      delay = case $processing_mode
              when :mode1 then 3610   # 1 hour
              when :mode2 then 190    # 3 minutes
              when :mode3 then 5410   # 1.5 hours
              when :mode4 then 250    # 4 minutes
              end

      if json_post["routes"] && json_post["routes"].any?
        first_route = json_post["routes"][0]
        if first_route["summary"]
          first_route["summary"]["travelTimeInSeconds"] = first_route["summary"]["travelTimeInSeconds"].to_i + delay
          first_route["summary"]["trafficDelayInSeconds"] = first_route["summary"]["trafficDelayInSeconds"].to_i + delay
          if first_route["summary"]["arrivalTime"]
            begin
              dt = Time.iso8601(first_route["summary"]["arrivalTime"])
              dt += delay
              first_route["summary"]["arrivalTime"] = dt.iso8601
            rescue => e
              puts "Error parsing arrivalTime: #{e.message}"
            end
          end
        end

        if first_route["legs"]
          first_route["legs"].each do |leg|
            if leg["summary"]
              leg["summary"]["travelTimeInSeconds"] = leg["summary"]["travelTimeInSeconds"].to_i + delay
              leg["summary"]["trafficDelayInSeconds"] = leg["summary"]["trafficDelayInSeconds"].to_i + delay
              if leg["summary"]["arrivalTime"]
                begin
                  dt = Time.iso8601(leg["summary"]["arrivalTime"])
                  dt += delay
                  leg["summary"]["arrivalTime"] = dt.iso8601
                rescue => e
                  puts "Error parsing leg arrivalTime: #{e.message}"
                end
              end
            end
          end
        end
      end

      # Depending on the mode, choose the alternative route from the extra GET response.
      if json_get && json_get["routes"]
        case $processing_mode
        when :mode1, :mode2
          # Add the first alternative – index 1 (if available)
          if json_get["routes"].size > 1
            extra_route = json_get["routes"][1]
            if extra_route["summary"]
              extra_route["summary"]["planningReason"] = "Better_Proposal"
            end
            json_post["routes"] << extra_route
          end
        when :mode3, :mode4
          # Add the second alternative – index 2 (if available)
          if json_get["routes"].size > 2
            extra_route = json_get["routes"][2]
            if extra_route["summary"]
              extra_route["summary"]["planningReason"] = "Better_Proposal"
            end
            json_post["routes"] << extra_route
          end
        end
      end

      new_body = JSON.dump(json_post)
      response_forward.body = new_body
      # Remove the encoding header, as we are returning uncompressed content
      response_forward.delete("content-encoding")
      response_forward["content-length"] = new_body.bytesize.to_s
    rescue => e
      puts "JSON processing error: #{e.message}"
    end
  end

  # Construct the final response
  res.status = response_forward.code.to_i
  response_forward.each_header do |header, value|
    if header.downcase == "transfer-encoding" && value.downcase == "chunked"
      next
    end
    res[header] = value
  end

  res.body = response_forward.body
end

# Thread for processing console commands to switch additional processing modes.
Thread.new do
  help_msg = "Commands:
1 or 'mode1' - Add the first alternative and set delay to 1 hour
2 or 'mode2' - Add the first alternative and set delay to 3 minutes
3 or 'mode3' - Add the second alternative and set delay to 1.5 hours
4 or 'mode4' - Add the second alternative and set delay to 2 minutes
5 or 'mode5' - Return the response without modifications"
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
