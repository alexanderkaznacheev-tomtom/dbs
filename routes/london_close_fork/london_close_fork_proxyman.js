/// This func is called if the Request Checkbox is Enabled. You can modify the Request Data here before the request hits to the server
/// e.g. Add/Update/Remove: host, scheme, port, path, headers, queries, comment, color and body (json, form, plain-text, base64 encoded string)
///
/// Use global object `sharedState` to share data between Requests/Response from different scripts (e.g. sharedState.data = "My-Data")
///
async function onRequest(context, url, request) {
  // console.log(request);
  console.log(url);

  // Update or Add new headers
  // request.headers["X-New-Headers"] = "My-Value";

  // Update or Add new queries
  // request.queries["name"] = "Proxyman";

  // Body
  // var body = request.body;
  // body["new-key"] = "new-value"
  // request.body = body;

  // Done
  return request;
}

var shortRoute = {
  "summary": {
    "lengthInMeters": 16656,
    "travelTimeInSeconds": 3284,
    "trafficDelayInSeconds": 0,
    "trafficLengthInMeters": 0,
    "departureTime": "2024-01-24T12:36:53Z",
    "arrivalTime": "2024-01-24T13:31:37Z"
  },
  "legs": [
    {
      "summary": {
        "lengthInMeters": 16656,
        "travelTimeInSeconds": 3284,
        "trafficDelayInSeconds": 0,
        "trafficLengthInMeters": 0,
        "departureTime": "2024-01-24T12:36:53Z",
        "arrivalTime": "2024-01-24T13:31:37Z"
      },
      "points": [
        {
          "latitude": 51.5656078,
          "longitude": -0.2789953
        },
        {
          "latitude": 51.5659538,
          "longitude": -0.2788666
        },
        {
          "latitude": 51.5657204,
          "longitude": -0.2769542
        },
        {
          "latitude": 51.5654522,
          "longitude": -0.2772546
        },
        {
          "latitude": 51.56542,
          "longitude": -0.2768227
        },
        {
          "latitude": 51.5654093,
          "longitude": -0.2766404
        },
        {
          "latitude": 51.5654334,
          "longitude": -0.2765277
        },
        {
          "latitude": 51.5654388,
          "longitude": -0.2764714
        },
        {
          "latitude": 51.5654495,
          "longitude": -0.2763775
        },
        {
          "latitude": 51.5654629,
          "longitude": -0.2758491
        },
        {
          "latitude": 51.565479,
          "longitude": -0.2752858
        },
        {
          "latitude": 51.5654844,
          "longitude": -0.2750257
        },
        {
          "latitude": 51.5654898,
          "longitude": -0.2748433
        },
        {
          "latitude": 51.5654951,
          "longitude": -0.2745402
        },
        {
          "latitude": 51.5655059,
          "longitude": -0.2739447
        },
        {
          "latitude": 51.5655032,
          "longitude": -0.273816
        },
        {
          "latitude": 51.5654817,
          "longitude": -0.2736443
        },
        {
          "latitude": 51.5654898,
          "longitude": -0.2728504
        },
        {
          "latitude": 51.5654844,
          "longitude": -0.2727753
        },
        {
          "latitude": 51.5654629,
          "longitude": -0.272212
        },
        {
          "latitude": 51.5654442,
          "longitude": -0.2717587
        },
        {
          "latitude": 51.5654361,
          "longitude": -0.2715093
        },
        {
          "latitude": 51.5654281,
          "longitude": -0.2713537
        },
        {
          "latitude": 51.5654334,
          "longitude": -0.2712813
        },
        {
          "latitude": 51.5654495,
          "longitude": -0.2710614
        },
        {
          "latitude": 51.5654737,
          "longitude": -0.2707019
        },
        {
          "latitude": 51.565538,
          "longitude": -0.2702701
        },
        {
          "latitude": 51.5655649,
          "longitude": -0.2701065
        },
        {
          "latitude": 51.5657473,
          "longitude": -0.2693394
        },
        {
          "latitude": 51.565817,
          "longitude": -0.269047
        },
        {
          "latitude": 51.5658921,
          "longitude": -0.2687278
        },
        {
          "latitude": 51.5659243,
          "longitude": -0.2685079
        },
        {
          "latitude": 51.5659189,
          "longitude": -0.2682209
        },
        {
          "latitude": 51.5659136,
          "longitude": -0.2679339
        },
        {
          "latitude": 51.5657607,
          "longitude": -0.2667966
        },
        {
          "latitude": 51.565758,
          "longitude": -0.266692
        },
        {
          "latitude": 51.5657875,
          "longitude": -0.2664748
        },
        {
          "latitude": 51.5657982,
          "longitude": -0.2658337
        },
        {
          "latitude": 51.5658116,
          "longitude": -0.2656943
        },
        {
          "latitude": 51.5658197,
          "longitude": -0.2655977
        },
        {
          "latitude": 51.5658411,
          "longitude": -0.2655762
        },
        {
          "latitude": 51.5658492,
          "longitude": -0.2655467
        },
        {
          "latitude": 51.5658519,
          "longitude": -0.2655146
        },
        {
          "latitude": 51.5658411,
          "longitude": -0.2654797
        },
        {
          "latitude": 51.5658304,
          "longitude": -0.2654448
        },
        {
          "latitude": 51.565817,
          "longitude": -0.2654314
        },
        {
          "latitude": 51.5657955,
          "longitude": -0.2654153
        },
        {
          "latitude": 51.5657285,
          "longitude": -0.2652544
        },
        {
          "latitude": 51.5657097,
          "longitude": -0.2652115
        },
        {
          "latitude": 51.5656158,
          "longitude": -0.2650908
        },
        {
          "latitude": 51.5655461,
          "longitude": -0.2649432
        },
        {
          "latitude": 51.5653181,
          "longitude": -0.2644604
        },
        {
          "latitude": 51.5650123,
          "longitude": -0.2638033
        },
        {
          "latitude": 51.5649533,
          "longitude": -0.2636719
        },
        {
          "latitude": 51.5647978,
          "longitude": -0.2633393
        },
        {
          "latitude": 51.5645108,
          "longitude": -0.2626875
        },
        {
          "latitude": 51.5642318,
          "longitude": -0.2620625
        },
        {
          "latitude": 51.563926,
          "longitude": -0.2613544
        },
        {
          "latitude": 51.5638912,
          "longitude": -0.2612713
        },
        {
          "latitude": 51.5637249,
          "longitude": -0.2608851
        },
        {
          "latitude": 51.5635532,
          "longitude": -0.2604854
        },
        {
          "latitude": 51.5635318,
          "longitude": -0.2604291
        },
        {
          "latitude": 51.5634942,
          "longitude": -0.2603459
        },
        {
          "latitude": 51.5634969,
          "longitude": -0.2602789
        },
        {
          "latitude": 51.5633655,
          "longitude": -0.2599731
        },
        {
          "latitude": 51.5632126,
          "longitude": -0.2596244
        },
        {
          "latitude": 51.5630946,
          "longitude": -0.2593508
        },
        {
          "latitude": 51.5630302,
          "longitude": -0.2592972
        },
        {
          "latitude": 51.5629953,
          "longitude": -0.2592167
        },
        {
          "latitude": 51.5628532,
          "longitude": -0.2588707
        },
        {
          "latitude": 51.5626574,
          "longitude": -0.2583718
        },
        {
          "latitude": 51.5626064,
          "longitude": -0.2582189
        },
        {
          "latitude": 51.5626037,
          "longitude": -0.2581358
        },
        {
          "latitude": 51.562483,
          "longitude": -0.2578247
        },
        {
          "latitude": 51.5623087,
          "longitude": -0.2574196
        },
        {
          "latitude": 51.5620592,
          "longitude": -0.2568644
        },
        {
          "latitude": 51.561968,
          "longitude": -0.256674
        },
        {
          "latitude": 51.5618366,
          "longitude": -0.2563521
        },
        {
          "latitude": 51.5616891,
          "longitude": -0.2560222
        },
        {
          "latitude": 51.561622,
          "longitude": -0.255872
        },
        {
          "latitude": 51.5615442,
          "longitude": -0.2558425
        },
        {
          "latitude": 51.5613833,
          "longitude": -0.2558532
        },
        {
          "latitude": 51.5613163,
          "longitude": -0.2558881
        },
        {
          "latitude": 51.5612546,
          "longitude": -0.2559552
        },
        {
          "latitude": 51.5611875,
          "longitude": -0.2559981
        },
        {
          "latitude": 51.5610883,
          "longitude": -0.2560222
        },
        {
          "latitude": 51.5610024,
          "longitude": -0.2560195
        },
        {
          "latitude": 51.5609461,
          "longitude": -0.2559954
        },
        {
          "latitude": 51.560871,
          "longitude": -0.2559364
        },
        {
          "latitude": 51.5608093,
          "longitude": -0.255872
        },
        {
          "latitude": 51.5607208,
          "longitude": -0.2557245
        },
        {
          "latitude": 51.5604392,
          "longitude": -0.2551049
        },
        {
          "latitude": 51.5602809,
          "longitude": -0.2547133
        },
        {
          "latitude": 51.5598598,
          "longitude": -0.253568
        },
        {
          "latitude": 51.5598035,
          "longitude": -0.2534178
        },
        {
          "latitude": 51.5596104,
          "longitude": -0.2529135
        },
        {
          "latitude": 51.5592939,
          "longitude": -0.252066
        },
        {
          "latitude": 51.5592,
          "longitude": -0.2517977
        },
        {
          "latitude": 51.559141,
          "longitude": -0.2516207
        },
        {
          "latitude": 51.558964,
          "longitude": -0.251044
        },
        {
          "latitude": 51.5587762,
          "longitude": -0.2503923
        },
        {
          "latitude": 51.5587601,
          "longitude": -0.2501321
        },
        {
          "latitude": 51.5587682,
          "longitude": -0.2500945
        },
        {
          "latitude": 51.5587816,
          "longitude": -0.2500489
        },
        {
          "latitude": 51.5587896,
          "longitude": -0.2499712
        },
        {
          "latitude": 51.5588701,
          "longitude": -0.2496225
        },
        {
          "latitude": 51.5588272,
          "longitude": -0.2495232
        },
        {
          "latitude": 51.558736,
          "longitude": -0.2493086
        },
        {
          "latitude": 51.5586716,
          "longitude": -0.2492067
        },
        {
          "latitude": 51.5586287,
          "longitude": -0.2491423
        },
        {
          "latitude": 51.5585965,
          "longitude": -0.2490941
        },
        {
          "latitude": 51.5582022,
          "longitude": -0.2485737
        },
        {
          "latitude": 51.5579769,
          "longitude": -0.2482304
        },
        {
          "latitude": 51.5578589,
          "longitude": -0.2480292
        },
        {
          "latitude": 51.5577623,
          "longitude": -0.2478924
        },
        {
          "latitude": 51.5576068,
          "longitude": -0.2476349
        },
        {
          "latitude": 51.5574029,
          "longitude": -0.2472916
        },
        {
          "latitude": 51.5570971,
          "longitude": -0.2467284
        },
        {
          "latitude": 51.5569308,
          "longitude": -0.2464011
        },
        {
          "latitude": 51.5564293,
          "longitude": -0.2454677
        },
        {
          "latitude": 51.5560135,
          "longitude": -0.2447355
        },
        {
          "latitude": 51.5558499,
          "longitude": -0.2445665
        },
        {
          "latitude": 51.5556595,
          "longitude": -0.2444753
        },
        {
          "latitude": 51.5551284,
          "longitude": -0.2443653
        },
        {
          "latitude": 51.5547314,
          "longitude": -0.2442634
        },
        {
          "latitude": 51.5546885,
          "longitude": -0.2442393
        },
        {
          "latitude": 51.5541333,
          "longitude": -0.243955
        },
        {
          "latitude": 51.5533957,
          "longitude": -0.2436921
        },
        {
          "latitude": 51.5533689,
          "longitude": -0.2436411
        },
        {
          "latitude": 51.5532079,
          "longitude": -0.2435526
        },
        {
          "latitude": 51.5530577,
          "longitude": -0.2434453
        },
        {
          "latitude": 51.5528941,
          "longitude": -0.24333
        },
        {
          "latitude": 51.5527949,
          "longitude": -0.2432576
        },
        {
          "latitude": 51.5527546,
          "longitude": -0.2432522
        },
        {
          "latitude": 51.5526688,
          "longitude": -0.243161
        },
        {
          "latitude": 51.5524623,
          "longitude": -0.2428928
        },
        {
          "latitude": 51.5522182,
          "longitude": -0.2425548
        },
        {
          "latitude": 51.5521619,
          "longitude": -0.2424932
        },
        {
          "latitude": 51.5521055,
          "longitude": -0.2424476
        },
        {
          "latitude": 51.5519768,
          "longitude": -0.242351
        },
        {
          "latitude": 51.5510407,
          "longitude": -0.2417234
        },
        {
          "latitude": 51.5510246,
          "longitude": -0.2416992
        },
        {
          "latitude": 51.5509576,
          "longitude": -0.2416107
        },
        {
          "latitude": 51.550802,
          "longitude": -0.2413344
        },
        {
          "latitude": 51.5505257,
          "longitude": -0.2409214
        },
        {
          "latitude": 51.5502146,
          "longitude": -0.2405137
        },
        {
          "latitude": 51.5500107,
          "longitude": -0.2402481
        },
        {
          "latitude": 51.5497237,
          "longitude": -0.2398914
        },
        {
          "latitude": 51.5494797,
          "longitude": -0.239591
        },
        {
          "latitude": 51.5493026,
          "longitude": -0.2393442
        },
        {
          "latitude": 51.5491551,
          "longitude": -0.2391377
        },
        {
          "latitude": 51.5491229,
          "longitude": -0.2390814
        },
        {
          "latitude": 51.5490478,
          "longitude": -0.2390546
        },
        {
          "latitude": 51.5489164,
          "longitude": -0.2390304
        },
        {
          "latitude": 51.5488493,
          "longitude": -0.2390116
        },
        {
          "latitude": 51.5488654,
          "longitude": -0.2390814
        },
        {
          "latitude": 51.5488708,
          "longitude": -0.2391618
        },
        {
          "latitude": 51.5488628,
          "longitude": -0.2392209
        },
        {
          "latitude": 51.5488413,
          "longitude": -0.2393952
        },
        {
          "latitude": 51.5488493,
          "longitude": -0.2394542
        },
        {
          "latitude": 51.5487233,
          "longitude": -0.2398404
        },
        {
          "latitude": 51.5484282,
          "longitude": -0.2403742
        },
        {
          "latitude": 51.5483156,
          "longitude": -0.2405539
        },
        {
          "latitude": 51.5482914,
          "longitude": -0.2405995
        },
        {
          "latitude": 51.548278,
          "longitude": -0.2405888
        },
        {
          "latitude": 51.5482673,
          "longitude": -0.2405834
        },
        {
          "latitude": 51.5482539,
          "longitude": -0.2405834
        },
        {
          "latitude": 51.5482458,
          "longitude": -0.2405861
        },
        {
          "latitude": 51.5482378,
          "longitude": -0.2405941
        },
        {
          "latitude": 51.5482298,
          "longitude": -0.2406049
        },
        {
          "latitude": 51.5482244,
          "longitude": -0.2406183
        },
        {
          "latitude": 51.5479213,
          "longitude": -0.2403152
        },
        {
          "latitude": 51.5478516,
          "longitude": -0.2402321
        },
        {
          "latitude": 51.5478462,
          "longitude": -0.2402267
        },
        {
          "latitude": 51.5472454,
          "longitude": -0.239532
        },
        {
          "latitude": 51.5469208,
          "longitude": -0.2391565
        },
        {
          "latitude": 51.5464756,
          "longitude": -0.2386281
        },
        {
          "latitude": 51.5458399,
          "longitude": -0.2378717
        },
        {
          "latitude": 51.5454242,
          "longitude": -0.2373996
        },
        {
          "latitude": 51.5452257,
          "longitude": -0.2371743
        },
        {
          "latitude": 51.544413,
          "longitude": -0.2361175
        },
        {
          "latitude": 51.5443781,
          "longitude": -0.2360719
        },
        {
          "latitude": 51.5442842,
          "longitude": -0.2359432
        },
        {
          "latitude": 51.5440857,
          "longitude": -0.2357098
        },
        {
          "latitude": 51.5440643,
          "longitude": -0.235675
        },
        {
          "latitude": 51.5440214,
          "longitude": -0.2356213
        },
        {
          "latitude": 51.5439543,
          "longitude": -0.2355838
        },
        {
          "latitude": 51.5438712,
          "longitude": -0.2355677
        },
        {
          "latitude": 51.5438685,
          "longitude": -0.2355382
        },
        {
          "latitude": 51.5438631,
          "longitude": -0.2355167
        },
        {
          "latitude": 51.5438551,
          "longitude": -0.2355033
        },
        {
          "latitude": 51.5438417,
          "longitude": -0.2354953
        },
        {
          "latitude": 51.5438309,
          "longitude": -0.2354953
        },
        {
          "latitude": 51.5438122,
          "longitude": -0.2355033
        },
        {
          "latitude": 51.5437934,
          "longitude": -0.2354014
        },
        {
          "latitude": 51.5437478,
          "longitude": -0.2353504
        },
        {
          "latitude": 51.5436915,
          "longitude": -0.2352941
        },
        {
          "latitude": 51.543619,
          "longitude": -0.2351975
        },
        {
          "latitude": 51.543037,
          "longitude": -0.2344358
        },
        {
          "latitude": 51.5429753,
          "longitude": -0.2343553
        },
        {
          "latitude": 51.5428439,
          "longitude": -0.2342373
        },
        {
          "latitude": 51.5426964,
          "longitude": -0.2341971
        },
        {
          "latitude": 51.542522,
          "longitude": -0.2342346
        },
        {
          "latitude": 51.5423182,
          "longitude": -0.2343339
        },
        {
          "latitude": 51.542227,
          "longitude": -0.2344117
        },
        {
          "latitude": 51.5420875,
          "longitude": -0.2338913
        },
        {
          "latitude": 51.5419936,
          "longitude": -0.2334997
        },
        {
          "latitude": 51.5418756,
          "longitude": -0.2330357
        },
        {
          "latitude": 51.5417871,
          "longitude": -0.2326924
        },
        {
          "latitude": 51.5416557,
          "longitude": -0.2321586
        },
        {
          "latitude": 51.541492,
          "longitude": -0.2315256
        },
        {
          "latitude": 51.5413687,
          "longitude": -0.2305359
        },
        {
          "latitude": 51.541256,
          "longitude": -0.2290928
        },
        {
          "latitude": 51.5412828,
          "longitude": -0.2284572
        },
        {
          "latitude": 51.5413311,
          "longitude": -0.2280816
        },
        {
          "latitude": 51.541374,
          "longitude": -0.2278993
        },
        {
          "latitude": 51.5415135,
          "longitude": -0.2273092
        },
        {
          "latitude": 51.5417066,
          "longitude": -0.226711
        },
        {
          "latitude": 51.5418407,
          "longitude": -0.2262819
        },
        {
          "latitude": 51.5418676,
          "longitude": -0.2261075
        },
        {
          "latitude": 51.5418756,
          "longitude": -0.2259681
        },
        {
          "latitude": 51.5418729,
          "longitude": -0.2259037
        },
        {
          "latitude": 51.5419239,
          "longitude": -0.2258956
        },
        {
          "latitude": 51.5420499,
          "longitude": -0.2258769
        },
        {
          "latitude": 51.5422028,
          "longitude": -0.2258581
        },
        {
          "latitude": 51.5423584,
          "longitude": -0.225834
        },
        {
          "latitude": 51.5424147,
          "longitude": -0.2258205
        },
        {
          "latitude": 51.5424979,
          "longitude": -0.2257937
        },
        {
          "latitude": 51.5425864,
          "longitude": -0.2257374
        },
        {
          "latitude": 51.5427017,
          "longitude": -0.2255818
        },
        {
          "latitude": 51.5427661,
          "longitude": -0.2254263
        },
        {
          "latitude": 51.5428117,
          "longitude": -0.225319
        },
        {
          "latitude": 51.5428385,
          "longitude": -0.2252573
        },
        {
          "latitude": 51.5430692,
          "longitude": -0.2247047
        },
        {
          "latitude": 51.5431041,
          "longitude": -0.2246189
        },
        {
          "latitude": 51.5431497,
          "longitude": -0.2245063
        },
        {
          "latitude": 51.5432274,
          "longitude": -0.2243212
        },
        {
          "latitude": 51.5433374,
          "longitude": -0.224053
        },
        {
          "latitude": 51.5438122,
          "longitude": -0.2228889
        },
        {
          "latitude": 51.5439624,
          "longitude": -0.2225456
        },
        {
          "latitude": 51.5443057,
          "longitude": -0.2222022
        },
        {
          "latitude": 51.544354,
          "longitude": -0.2221406
        },
        {
          "latitude": 51.5452713,
          "longitude": -0.2217785
        },
        {
          "latitude": 51.5455905,
          "longitude": -0.2216551
        },
        {
          "latitude": 51.5458265,
          "longitude": -0.2215612
        },
        {
          "latitude": 51.5457889,
          "longitude": -0.2213815
        },
        {
          "latitude": 51.5454537,
          "longitude": -0.2199063
        },
        {
          "latitude": 51.5454188,
          "longitude": -0.2197266
        },
        {
          "latitude": 51.5453625,
          "longitude": -0.2194288
        },
        {
          "latitude": 51.5453276,
          "longitude": -0.2193001
        },
        {
          "latitude": 51.5452015,
          "longitude": -0.2188441
        },
        {
          "latitude": 51.5449816,
          "longitude": -0.2179
        },
        {
          "latitude": 51.5448958,
          "longitude": -0.2175191
        },
        {
          "latitude": 51.5446731,
          "longitude": -0.2166018
        },
        {
          "latitude": 51.5443164,
          "longitude": -0.2156818
        },
        {
          "latitude": 51.5441823,
          "longitude": -0.2154028
        },
        {
          "latitude": 51.5441233,
          "longitude": -0.2152848
        },
        {
          "latitude": 51.5439892,
          "longitude": -0.2149791
        },
        {
          "latitude": 51.543898,
          "longitude": -0.2147377
        },
        {
          "latitude": 51.5439114,
          "longitude": -0.2147189
        },
        {
          "latitude": 51.5439168,
          "longitude": -0.2147001
        },
        {
          "latitude": 51.5439194,
          "longitude": -0.2146813
        },
        {
          "latitude": 51.5439168,
          "longitude": -0.2146652
        },
        {
          "latitude": 51.5439114,
          "longitude": -0.2146411
        },
        {
          "latitude": 51.5439007,
          "longitude": -0.2146304
        },
        {
          "latitude": 51.5438873,
          "longitude": -0.2146223
        },
        {
          "latitude": 51.5438765,
          "longitude": -0.2146223
        },
        {
          "latitude": 51.5438658,
          "longitude": -0.214625
        },
        {
          "latitude": 51.5438551,
          "longitude": -0.214633
        },
        {
          "latitude": 51.5438256,
          "longitude": -0.2145606
        },
        {
          "latitude": 51.5437263,
          "longitude": -0.2143568
        },
        {
          "latitude": 51.5436861,
          "longitude": -0.2142844
        },
        {
          "latitude": 51.5436298,
          "longitude": -0.2141717
        },
        {
          "latitude": 51.5434983,
          "longitude": -0.2139115
        },
        {
          "latitude": 51.5433481,
          "longitude": -0.2136138
        },
        {
          "latitude": 51.5431657,
          "longitude": -0.2132571
        },
        {
          "latitude": 51.5431631,
          "longitude": -0.213249
        },
        {
          "latitude": 51.5430236,
          "longitude": -0.213021
        },
        {
          "latitude": 51.5425703,
          "longitude": -0.2122593
        },
        {
          "latitude": 51.5425622,
          "longitude": -0.2121708
        },
        {
          "latitude": 51.542345,
          "longitude": -0.2118248
        },
        {
          "latitude": 51.542109,
          "longitude": -0.2114412
        },
        {
          "latitude": 51.5420392,
          "longitude": -0.2114305
        },
        {
          "latitude": 51.5418541,
          "longitude": -0.2111462
        },
        {
          "latitude": 51.5416691,
          "longitude": -0.2109262
        },
        {
          "latitude": 51.5414813,
          "longitude": -0.2106741
        },
        {
          "latitude": 51.541189,
          "longitude": -0.2102825
        },
        {
          "latitude": 51.540902,
          "longitude": -0.2099311
        },
        {
          "latitude": 51.5408376,
          "longitude": -0.2098292
        },
        {
          "latitude": 51.5406445,
          "longitude": -0.2096012
        },
        {
          "latitude": 51.5405962,
          "longitude": -0.2095449
        },
        {
          "latitude": 51.5405184,
          "longitude": -0.2094483
        },
        {
          "latitude": 51.5404835,
          "longitude": -0.2093813
        },
        {
          "latitude": 51.5403521,
          "longitude": -0.2092338
        },
        {
          "latitude": 51.5401724,
          "longitude": -0.2090728
        },
        {
          "latitude": 51.5401375,
          "longitude": -0.2090755
        },
        {
          "latitude": 51.5399122,
          "longitude": -0.2088663
        },
        {
          "latitude": 51.5397352,
          "longitude": -0.2087
        },
        {
          "latitude": 51.5394133,
          "longitude": -0.2084291
        },
        {
          "latitude": 51.5382761,
          "longitude": -0.2074796
        },
        {
          "latitude": 51.5376645,
          "longitude": -0.2069539
        },
        {
          "latitude": 51.5373588,
          "longitude": -0.2066991
        },
        {
          "latitude": 51.5370557,
          "longitude": -0.2064443
        },
        {
          "latitude": 51.5364441,
          "longitude": -0.2059346
        },
        {
          "latitude": 51.536243,
          "longitude": -0.2057549
        },
        {
          "latitude": 51.5358433,
          "longitude": -0.2054304
        },
        {
          "latitude": 51.535323,
          "longitude": -0.2050737
        },
        {
          "latitude": 51.5346283,
          "longitude": -0.2046955
        },
        {
          "latitude": 51.5344191,
          "longitude": -0.2045935
        },
        {
          "latitude": 51.5340731,
          "longitude": -0.2044058
        },
        {
          "latitude": 51.5339926,
          "longitude": -0.2043629
        },
        {
          "latitude": 51.5338129,
          "longitude": -0.2042636
        },
        {
          "latitude": 51.5337458,
          "longitude": -0.2042153
        },
        {
          "latitude": 51.5336439,
          "longitude": -0.2041376
        },
        {
          "latitude": 51.5334561,
          "longitude": -0.2039444
        },
        {
          "latitude": 51.5334132,
          "longitude": -0.2038962
        },
        {
          "latitude": 51.5333676,
          "longitude": -0.2038184
        },
        {
          "latitude": 51.5332603,
          "longitude": -0.2036628
        },
        {
          "latitude": 51.5331155,
          "longitude": -0.2034268
        },
        {
          "latitude": 51.5330458,
          "longitude": -0.2032685
        },
        {
          "latitude": 51.5328526,
          "longitude": -0.2030137
        },
        {
          "latitude": 51.5326917,
          "longitude": -0.2029815
        },
        {
          "latitude": 51.5325657,
          "longitude": -0.2029386
        },
        {
          "latitude": 51.5323055,
          "longitude": -0.2028501
        },
        {
          "latitude": 51.5322626,
          "longitude": -0.2028313
        },
        {
          "latitude": 51.5320989,
          "longitude": -0.2027267
        },
        {
          "latitude": 51.5318173,
          "longitude": -0.2026141
        },
        {
          "latitude": 51.531238,
          "longitude": -0.202311
        },
        {
          "latitude": 51.5306398,
          "longitude": -0.2019972
        },
        {
          "latitude": 51.5300605,
          "longitude": -0.2017933
        },
        {
          "latitude": 51.5297306,
          "longitude": -0.2016914
        },
        {
          "latitude": 51.5291619,
          "longitude": -0.2015465
        },
        {
          "latitude": 51.5288615,
          "longitude": -0.2014688
        },
        {
          "latitude": 51.5285745,
          "longitude": -0.2013883
        },
        {
          "latitude": 51.5285718,
          "longitude": -0.2013507
        },
        {
          "latitude": 51.5285584,
          "longitude": -0.2013212
        },
        {
          "latitude": 51.528537,
          "longitude": -0.2013078
        },
        {
          "latitude": 51.5285262,
          "longitude": -0.2013105
        },
        {
          "latitude": 51.5284753,
          "longitude": -0.2010155
        },
        {
          "latitude": 51.5283787,
          "longitude": -0.2004629
        },
        {
          "latitude": 51.5281507,
          "longitude": -0.199382
        },
        {
          "latitude": 51.5280917,
          "longitude": -0.1990575
        },
        {
          "latitude": 51.5279523,
          "longitude": -0.1982903
        },
        {
          "latitude": 51.5279201,
          "longitude": -0.198108
        },
        {
          "latitude": 51.5278557,
          "longitude": -0.1978746
        },
        {
          "latitude": 51.5278316,
          "longitude": -0.1977539
        },
        {
          "latitude": 51.5278208,
          "longitude": -0.197711
        },
        {
          "latitude": 51.527786,
          "longitude": -0.1975232
        },
        {
          "latitude": 51.5277645,
          "longitude": -0.1974267
        },
        {
          "latitude": 51.5277243,
          "longitude": -0.1972497
        },
        {
          "latitude": 51.5277055,
          "longitude": -0.1971504
        },
        {
          "latitude": 51.5276733,
          "longitude": -0.1969653
        },
        {
          "latitude": 51.5276143,
          "longitude": -0.1967132
        },
        {
          "latitude": 51.5275902,
          "longitude": -0.1965308
        },
        {
          "latitude": 51.5275043,
          "longitude": -0.1963243
        },
        {
          "latitude": 51.5271744,
          "longitude": -0.1953802
        },
        {
          "latitude": 51.5268794,
          "longitude": -0.1945728
        },
        {
          "latitude": 51.5266863,
          "longitude": -0.1940498
        },
        {
          "latitude": 51.5264744,
          "longitude": -0.1934704
        },
        {
          "latitude": 51.5258789,
          "longitude": -0.1922339
        },
        {
          "latitude": 51.5257341,
          "longitude": -0.1919362
        },
        {
          "latitude": 51.5254846,
          "longitude": -0.1914319
        },
        {
          "latitude": 51.5251225,
          "longitude": -0.1906836
        },
        {
          "latitude": 51.5249643,
          "longitude": -0.190351
        },
        {
          "latitude": 51.5249375,
          "longitude": -0.1902947
        },
        {
          "latitude": 51.5247658,
          "longitude": -0.1899433
        },
        {
          "latitude": 51.5247229,
          "longitude": -0.1898548
        },
        {
          "latitude": 51.5246719,
          "longitude": -0.1897421
        },
        {
          "latitude": 51.5243125,
          "longitude": -0.1890126
        },
        {
          "latitude": 51.5241086,
          "longitude": -0.1885915
        },
        {
          "latitude": 51.5236554,
          "longitude": -0.1876554
        },
        {
          "latitude": 51.5232986,
          "longitude": -0.1869044
        },
        {
          "latitude": 51.5232021,
          "longitude": -0.1870063
        },
        {
          "latitude": 51.523017,
          "longitude": -0.1872236
        },
        {
          "latitude": 51.5228373,
          "longitude": -0.1874086
        },
        {
          "latitude": 51.5227783,
          "longitude": -0.187473
        },
        {
          "latitude": 51.5227193,
          "longitude": -0.1875159
        },
        {
          "latitude": 51.5226871,
          "longitude": -0.187524
        },
        {
          "latitude": 51.5226683,
          "longitude": -0.187524
        },
        {
          "latitude": 51.5226442,
          "longitude": -0.1875132
        },
        {
          "latitude": 51.5226281,
          "longitude": -0.1874918
        },
        {
          "latitude": 51.5226147,
          "longitude": -0.1874703
        },
        {
          "latitude": 51.5226012,
          "longitude": -0.1874328
        },
        {
          "latitude": 51.5220353,
          "longitude": -0.1856947
        },
        {
          "latitude": 51.5220138,
          "longitude": -0.185633
        },
        {
          "latitude": 51.5219897,
          "longitude": -0.1855525
        },
        {
          "latitude": 51.5215713,
          "longitude": -0.1842865
        },
        {
          "latitude": 51.5215391,
          "longitude": -0.1841846
        },
        {
          "latitude": 51.5214854,
          "longitude": -0.1840049
        },
        {
          "latitude": 51.521405,
          "longitude": -0.1838011
        },
        {
          "latitude": 51.5213808,
          "longitude": -0.183785
        },
        {
          "latitude": 51.5213379,
          "longitude": -0.1837823
        },
        {
          "latitude": 51.5212843,
          "longitude": -0.1838198
        },
        {
          "latitude": 51.5212226,
          "longitude": -0.1838601
        },
        {
          "latitude": 51.5211555,
          "longitude": -0.1839083
        },
        {
          "latitude": 51.5211073,
          "longitude": -0.1839432
        },
        {
          "latitude": 51.5210402,
          "longitude": -0.1839888
        },
        {
          "latitude": 51.5205601,
          "longitude": -0.1843026
        },
        {
          "latitude": 51.5204823,
          "longitude": -0.1843375
        },
        {
          "latitude": 51.5204367,
          "longitude": -0.184359
        },
        {
          "latitude": 51.5199673,
          "longitude": -0.1846352
        },
        {
          "latitude": 51.5199217,
          "longitude": -0.184654
        },
        {
          "latitude": 51.5198761,
          "longitude": -0.1846594
        },
        {
          "latitude": 51.5198493,
          "longitude": -0.1846513
        },
        {
          "latitude": 51.5198144,
          "longitude": -0.1846272
        },
        {
          "latitude": 51.5197688,
          "longitude": -0.1845816
        },
        {
          "latitude": 51.5197232,
          "longitude": -0.1845199
        },
        {
          "latitude": 51.5197259,
          "longitude": -0.1843992
        },
        {
          "latitude": 51.5197635,
          "longitude": -0.1840264
        },
        {
          "latitude": 51.5197715,
          "longitude": -0.1839647
        },
        {
          "latitude": 51.5198466,
          "longitude": -0.1834443
        },
        {
          "latitude": 51.5198976,
          "longitude": -0.1832002
        },
        {
          "latitude": 51.5200129,
          "longitude": -0.1827523
        },
        {
          "latitude": 51.520206,
          "longitude": -0.1822212
        },
        {
          "latitude": 51.520603,
          "longitude": -0.1813468
        },
        {
          "latitude": 51.5206298,
          "longitude": -0.1812771
        },
        {
          "latitude": 51.5206593,
          "longitude": -0.181202
        },
        {
          "latitude": 51.5207613,
          "longitude": -0.1809955
        },
        {
          "latitude": 51.52078,
          "longitude": -0.1809525
        },
        {
          "latitude": 51.5208176,
          "longitude": -0.1808774
        },
        {
          "latitude": 51.5208685,
          "longitude": -0.1807702
        },
        {
          "latitude": 51.5209007,
          "longitude": -0.180679
        },
        {
          "latitude": 51.5209061,
          "longitude": -0.1806253
        },
        {
          "latitude": 51.5209088,
          "longitude": -0.1805717
        },
        {
          "latitude": 51.520882,
          "longitude": -0.1802123
        },
        {
          "latitude": 51.5207747,
          "longitude": -0.1800352
        },
        {
          "latitude": 51.5206486,
          "longitude": -0.1798636
        },
        {
          "latitude": 51.5204769,
          "longitude": -0.179598
        },
        {
          "latitude": 51.5202838,
          "longitude": -0.1792118
        },
        {
          "latitude": 51.5202409,
          "longitude": -0.1790857
        },
        {
          "latitude": 51.5202168,
          "longitude": -0.1789328
        },
        {
          "latitude": 51.5202141,
          "longitude": -0.1788631
        },
        {
          "latitude": 51.5202141,
          "longitude": -0.1782596
        },
        {
          "latitude": 51.5202141,
          "longitude": -0.1780236
        },
        {
          "latitude": 51.5202087,
          "longitude": -0.1775998
        },
        {
          "latitude": 51.5202034,
          "longitude": -0.1772162
        },
        {
          "latitude": 51.5201953,
          "longitude": -0.1767656
        },
        {
          "latitude": 51.5201899,
          "longitude": -0.1764384
        },
        {
          "latitude": 51.5201765,
          "longitude": -0.1757813
        },
        {
          "latitude": 51.5201631,
          "longitude": -0.1750597
        },
        {
          "latitude": 51.5201497,
          "longitude": -0.1745287
        },
        {
          "latitude": 51.520147,
          "longitude": -0.1744482
        },
        {
          "latitude": 51.5201175,
          "longitude": -0.1734129
        },
        {
          "latitude": 51.5201122,
          "longitude": -0.1732412
        },
        {
          "latitude": 51.5200987,
          "longitude": -0.1730025
        },
        {
          "latitude": 51.5200853,
          "longitude": -0.1721764
        },
        {
          "latitude": 51.5200746,
          "longitude": -0.1710552
        },
        {
          "latitude": 51.5200773,
          "longitude": -0.1708111
        },
        {
          "latitude": 51.5200773,
          "longitude": -0.1706797
        },
        {
          "latitude": 51.5200773,
          "longitude": -0.1703793
        },
        {
          "latitude": 51.5200853,
          "longitude": -0.1702237
        },
        {
          "latitude": 51.5199915,
          "longitude": -0.1700789
        },
        {
          "latitude": 51.5199164,
          "longitude": -0.1699662
        },
        {
          "latitude": 51.5198332,
          "longitude": -0.1698402
        },
        {
          "latitude": 51.5197688,
          "longitude": -0.1697597
        },
        {
          "latitude": 51.5196991,
          "longitude": -0.1696658
        },
        {
          "latitude": 51.5195864,
          "longitude": -0.1694915
        },
        {
          "latitude": 51.5194872,
          "longitude": -0.1693466
        },
        {
          "latitude": 51.5194416,
          "longitude": -0.1692688
        },
        {
          "latitude": 51.5193075,
          "longitude": -0.1690784
        },
        {
          "latitude": 51.5192512,
          "longitude": -0.169057
        },
        {
          "latitude": 51.519227,
          "longitude": -0.1690167
        },
        {
          "latitude": 51.5189561,
          "longitude": -0.1686439
        },
        {
          "latitude": 51.5188569,
          "longitude": -0.1684937
        },
        {
          "latitude": 51.5187845,
          "longitude": -0.1683837
        },
        {
          "latitude": 51.5187657,
          "longitude": -0.168314
        },
        {
          "latitude": 51.518704,
          "longitude": -0.1682174
        },
        {
          "latitude": 51.518645,
          "longitude": -0.1681289
        },
        {
          "latitude": 51.5186208,
          "longitude": -0.1680914
        },
        {
          "latitude": 51.5185645,
          "longitude": -0.1680565
        },
        {
          "latitude": 51.5183339,
          "longitude": -0.16774
        },
        {
          "latitude": 51.5181488,
          "longitude": -0.1674825
        },
        {
          "latitude": 51.5181246,
          "longitude": -0.1674423
        },
        {
          "latitude": 51.5181193,
          "longitude": -0.1673698
        },
        {
          "latitude": 51.5181112,
          "longitude": -0.1673484
        },
        {
          "latitude": 51.5180093,
          "longitude": -0.167174
        },
        {
          "latitude": 51.5179288,
          "longitude": -0.1670614
        },
        {
          "latitude": 51.5177706,
          "longitude": -0.1668388
        },
        {
          "latitude": 51.5176499,
          "longitude": -0.1666698
        },
        {
          "latitude": 51.5174836,
          "longitude": -0.1664257
        },
        {
          "latitude": 51.5171751,
          "longitude": -0.1659617
        },
        {
          "latitude": 51.5170088,
          "longitude": -0.1657203
        },
        {
          "latitude": 51.5169042,
          "longitude": -0.1655406
        },
        {
          "latitude": 51.5165314,
          "longitude": -0.1650417
        },
        {
          "latitude": 51.5164375,
          "longitude": -0.1649076
        },
        {
          "latitude": 51.5161666,
          "longitude": -0.1645026
        },
        {
          "latitude": 51.5160164,
          "longitude": -0.1642773
        },
        {
          "latitude": 51.5159279,
          "longitude": -0.16422900000000001
        },
        {
          "latitude": 51.5158904,
          "longitude": -0.1641807
        },
        {
          "latitude": 51.5158528,
          "longitude": -0.1641271
        },
        {
          "latitude": 51.5156356,
          "longitude": -0.1638132
        },
        {
          "latitude": 51.5154022,
          "longitude": -0.1634243
        },
        {
          "latitude": 51.5152305,
          "longitude": -0.1631749
        },
        {
          "latitude": 51.5151823,
          "longitude": -0.1631078
        },
        {
          "latitude": 51.5150213,
          "longitude": -0.1628718
        },
        {
          "latitude": 51.5147746,
          "longitude": -0.162515
        },
        {
          "latitude": 51.5145332,
          "longitude": -0.1621261
        },
        {
          "latitude": 51.5143535,
          "longitude": -0.1618525
        },
        {
          "latitude": 51.5143132,
          "longitude": -0.1617855
        },
        {
          "latitude": 51.5142167,
          "longitude": -0.161638
        },
        {
          "latitude": 51.5141711,
          "longitude": -0.1615602
        },
        {
          "latitude": 51.5141577,
          "longitude": -0.1614931
        },
        {
          "latitude": 51.5141416,
          "longitude": -0.161469
        },
        {
          "latitude": 51.5140852,
          "longitude": -0.1613805
        },
        {
          "latitude": 51.5139297,
          "longitude": -0.1611525
        },
        {
          "latitude": 51.5136266,
          "longitude": -0.1606455
        },
        {
          "latitude": 51.5135837,
          "longitude": -0.1605785
        },
        {
          "latitude": 51.51342,
          "longitude": -0.160329
        },
        {
          "latitude": 51.5132269,
          "longitude": -0.1600313
        },
        {
          "latitude": 51.5132457,
          "longitude": -0.1598436
        },
        {
          "latitude": 51.5132591,
          "longitude": -0.1597095
        },
        {
          "latitude": 51.5133476,
          "longitude": -0.1589397
        },
        {
          "latitude": 51.5133637,
          "longitude": -0.158878
        },
        {
          "latitude": 51.5133986,
          "longitude": -0.158709
        },
        {
          "latitude": 51.5133369,
          "longitude": -0.1584864
        },
        {
          "latitude": 51.5133128,
          "longitude": -0.1584354
        },
        {
          "latitude": 51.5132108,
          "longitude": -0.1582879
        },
        {
          "latitude": 51.5131733,
          "longitude": -0.1582342
        },
        {
          "latitude": 51.5129453,
          "longitude": -0.1581028
        },
        {
          "latitude": 51.5127468,
          "longitude": -0.1579821
        },
        {
          "latitude": 51.5126905,
          "longitude": -0.1579419
        },
        {
          "latitude": 51.5122023,
          "longitude": -0.1577139
        },
        {
          "latitude": 51.5115049,
          "longitude": -0.1573491
        },
        {
          "latitude": 51.5113842,
          "longitude": -0.1572901
        },
        {
          "latitude": 51.5110919,
          "longitude": -0.1571399
        },
        {
          "latitude": 51.5110114,
          "longitude": -0.1570916
        },
        {
          "latitude": 51.5109149,
          "longitude": -0.1570353
        },
        {
          "latitude": 51.5108076,
          "longitude": -0.1569709
        },
        {
          "latitude": 51.5106708,
          "longitude": -0.1569012
        },
        {
          "latitude": 51.5105769,
          "longitude": -0.1568422
        },
        {
          "latitude": 51.5104803,
          "longitude": -0.1567805
        },
        {
          "latitude": 51.5103972,
          "longitude": -0.1567188
        },
        {
          "latitude": 51.5103462,
          "longitude": -0.1566812
        },
        {
          "latitude": 51.5101933,
          "longitude": -0.156531
        },
        {
          "latitude": 51.5100968,
          "longitude": -0.1564237
        },
        {
          "latitude": 51.5099815,
          "longitude": -0.1562789
        },
        {
          "latitude": 51.5098822,
          "longitude": -0.1561421
        },
        {
          "latitude": 51.5091768,
          "longitude": -0.1551309
        },
        {
          "latitude": 51.5089568,
          "longitude": -0.154852
        },
        {
          "latitude": 51.5084901,
          "longitude": -0.154337
        },
        {
          "latitude": 51.5084043,
          "longitude": -0.1542512
        },
        {
          "latitude": 51.5082756,
          "longitude": -0.1541224
        },
        {
          "latitude": 51.5079832,
          "longitude": -0.1538086
        },
        {
          "latitude": 51.5079564,
          "longitude": -0.1537818
        },
        {
          "latitude": 51.507892,
          "longitude": -0.1536986
        },
        {
          "latitude": 51.5076882,
          "longitude": -0.1534733
        },
        {
          "latitude": 51.5068755,
          "longitude": -0.1525104
        },
        {
          "latitude": 51.5067253,
          "longitude": -0.1523361
        },
        {
          "latitude": 51.506567,
          "longitude": -0.1521617
        },
        {
          "latitude": 51.5064704,
          "longitude": -0.1520652
        },
        {
          "latitude": 51.5064302,
          "longitude": -0.1520142
        },
        {
          "latitude": 51.5061191,
          "longitude": -0.1516172
        },
        {
          "latitude": 51.5060627,
          "longitude": -0.1515502
        },
        {
          "latitude": 51.5060091,
          "longitude": -0.1514858
        },
        {
          "latitude": 51.5058669,
          "longitude": -0.1513302
        },
        {
          "latitude": 51.5057838,
          "longitude": -0.1512551
        },
        {
          "latitude": 51.5057033,
          "longitude": -0.1511854
        },
        {
          "latitude": 51.5055317,
          "longitude": -0.1510486
        },
        {
          "latitude": 51.5054861,
          "longitude": -0.151011
        },
        {
          "latitude": 51.5053681,
          "longitude": -0.1509708
        },
        {
          "latitude": 51.5051615,
          "longitude": -0.1509011
        },
        {
          "latitude": 51.5050596,
          "longitude": -0.1508904
        },
        {
          "latitude": 51.5049523,
          "longitude": -0.1509038
        },
        {
          "latitude": 51.5045393,
          "longitude": -0.1509628
        },
        {
          "latitude": 51.5043461,
          "longitude": -0.1510271
        },
        {
          "latitude": 51.5042523,
          "longitude": -0.1510647
        },
        {
          "latitude": 51.5042067,
          "longitude": -0.1511022
        },
        {
          "latitude": 51.5040216,
          "longitude": -0.1510915
        },
        {
          "latitude": 51.5039063,
          "longitude": -0.1510486
        },
        {
          "latitude": 51.50363,
          "longitude": -0.1509547
        },
        {
          "latitude": 51.5034288,
          "longitude": -0.1508796
        },
        {
          "latitude": 51.5033618,
          "longitude": -0.1508474
        },
        {
          "latitude": 51.5032893,
          "longitude": -0.1508099
        },
        {
          "latitude": 51.5032974,
          "longitude": -0.1507267
        },
        {
          "latitude": 51.5033135,
          "longitude": -0.1503834
        },
        {
          "latitude": 51.5032947,
          "longitude": -0.1501796
        },
        {
          "latitude": 51.5032759,
          "longitude": -0.1500937
        },
        {
          "latitude": 51.5032625,
          "longitude": -0.1500455
        },
        {
          "latitude": 51.503233,
          "longitude": -0.149973
        },
        {
          "latitude": 51.5031928,
          "longitude": -0.1498899
        },
        {
          "latitude": 51.5031445,
          "longitude": -0.1498362
        },
        {
          "latitude": 51.5030828,
          "longitude": -0.1498121
        },
        {
          "latitude": 51.5029514,
          "longitude": -0.149796
        },
        {
          "latitude": 51.5029004,
          "longitude": -0.1497987
        },
        {
          "latitude": 51.5028092,
          "longitude": -0.1498067
        },
        {
          "latitude": 51.502659,
          "longitude": -0.1498497
        },
        {
          "latitude": 51.5025678,
          "longitude": -0.1498979
        },
        {
          "latitude": 51.5025437,
          "longitude": -0.1499194
        },
        {
          "latitude": 51.5024874,
          "longitude": -0.1499811
        },
        {
          "latitude": 51.5024096,
          "longitude": -0.1501018
        },
        {
          "latitude": 51.5023425,
          "longitude": -0.1502761
        },
        {
          "latitude": 51.5022835,
          "longitude": -0.1504585
        },
        {
          "latitude": 51.502246,
          "longitude": -0.1505551
        },
        {
          "latitude": 51.5020448,
          "longitude": -0.1510862
        },
        {
          "latitude": 51.5020233,
          "longitude": -0.1511452
        },
        {
          "latitude": 51.5019965,
          "longitude": -0.1512095
        },
        {
          "latitude": 51.5019161,
          "longitude": -0.1512498
        },
        {
          "latitude": 51.5018222,
          "longitude": -0.151282
        },
        {
          "latitude": 51.501731,
          "longitude": -0.1512793
        },
        {
          "latitude": 51.5016022,
          "longitude": -0.1512203
        },
        {
          "latitude": 51.5015137,
          "longitude": -0.1511237
        },
        {
          "latitude": 51.5012187,
          "longitude": -0.1506624
        },
        {
          "latitude": 51.5010443,
          "longitude": -0.1503673
        },
        {
          "latitude": 51.5010309,
          "longitude": -0.1502788
        },
        {
          "latitude": 51.5006822,
          "longitude": -0.1496968
        },
        {
          "latitude": 51.5002236,
          "longitude": -0.1489913
        },
        {
          "latitude": 51.4999983,
          "longitude": -0.1487017
        },
        {
          "latitude": 51.4999312,
          "longitude": -0.1486239
        },
        {
          "latitude": 51.4991882,
          "longitude": -0.1478165
        },
        {
          "latitude": 51.4987484,
          "longitude": -0.147441
        },
        {
          "latitude": 51.498684,
          "longitude": -0.147441
        },
        {
          "latitude": 51.4983568,
          "longitude": -0.147146
        },
        {
          "latitude": 51.4982897,
          "longitude": -0.1469877
        },
        {
          "latitude": 51.4982656,
          "longitude": -0.1469126
        },
        {
          "latitude": 51.4982414,
          "longitude": -0.1467946
        },
        {
          "latitude": 51.4982361,
          "longitude": -0.1466927
        },
        {
          "latitude": 51.4982495,
          "longitude": -0.1465666
        },
        {
          "latitude": 51.4982548,
          "longitude": -0.1464137
        },
        {
          "latitude": 51.4982575,
          "longitude": -0.1462287
        },
        {
          "latitude": 51.4982602,
          "longitude": -0.1460838
        },
        {
          "latitude": 51.4982709,
          "longitude": -0.1454911
        },
        {
          "latitude": 51.4982709,
          "longitude": -0.1450887
        },
        {
          "latitude": 51.498228,
          "longitude": -0.144622
        },
        {
          "latitude": 51.4981636,
          "longitude": -0.1442412
        },
        {
          "latitude": 51.4981395,
          "longitude": -0.1440856
        },
        {
          "latitude": 51.4981288,
          "longitude": -0.1440185
        },
        {
          "latitude": 51.4980966,
          "longitude": -0.1439139
        },
        {
          "latitude": 51.4980724,
          "longitude": -0.1438308
        },
        {
          "latitude": 51.4980268,
          "longitude": -0.1436296
        },
        {
          "latitude": 51.4979732,
          "longitude": -0.1433587
        },
        {
          "latitude": 51.4979303,
          "longitude": -0.143128
        },
        {
          "latitude": 51.497823,
          "longitude": -0.1426211
        },
        {
          "latitude": 51.4977828,
          "longitude": -0.142495
        },
        {
          "latitude": 51.4976782,
          "longitude": -0.1422751
        },
        {
          "latitude": 51.497587,
          "longitude": -0.1422027
        },
        {
          "latitude": 51.4975467,
          "longitude": -0.1421732
        },
        {
          "latitude": 51.4975092,
          "longitude": -0.1421598
        },
        {
          "latitude": 51.4973214,
          "longitude": -0.1420256
        },
        {
          "latitude": 51.4971498,
          "longitude": -0.1419479
        },
        {
          "latitude": 51.4968306,
          "longitude": -0.1418298
        },
        {
          "latitude": 51.4967233,
          "longitude": -0.1416957
        },
        {
          "latitude": 51.4966857,
          "longitude": -0.1415858
        },
        {
          "latitude": 51.496667,
          "longitude": -0.141457
        },
        {
          "latitude": 51.4966723,
          "longitude": -0.141221
        },
        {
          "latitude": 51.4968064,
          "longitude": -0.1403251
        },
        {
          "latitude": 51.4968279,
          "longitude": -0.1401883
        },
        {
          "latitude": 51.4968574,
          "longitude": -0.1399738
        },
        {
          "latitude": 51.496895,
          "longitude": -0.139676
        },
        {
          "latitude": 51.4969271,
          "longitude": -0.1394534
        },
        {
          "latitude": 51.496954,
          "longitude": -0.139263
        },
        {
          "latitude": 51.496962,
          "longitude": -0.1392093
        },
        {
          "latitude": 51.4969701,
          "longitude": -0.1391476
        },
        {
          "latitude": 51.4969915,
          "longitude": -0.1390028
        },
        {
          "latitude": 51.4970344,
          "longitude": -0.1387078
        },
        {
          "latitude": 51.4971283,
          "longitude": -0.1381016
        },
        {
          "latitude": 51.4971927,
          "longitude": -0.1376617
        },
        {
          "latitude": 51.497249,
          "longitude": -0.1372969
        },
        {
          "latitude": 51.4973107,
          "longitude": -0.1369509
        },
        {
          "latitude": 51.4973322,
          "longitude": -0.1367578
        },
        {
          "latitude": 51.4973563,
          "longitude": -0.1365352
        },
        {
          "latitude": 51.4974099,
          "longitude": -0.13616230000000001
        },
        {
          "latitude": 51.4974609,
          "longitude": -0.1358244
        },
        {
          "latitude": 51.4974877,
          "longitude": -0.1356661
        },
        {
          "latitude": 51.4974958,
          "longitude": -0.1356125
        },
        {
          "latitude": 51.4975092,
          "longitude": -0.1355428
        },
        {
          "latitude": 51.4975253,
          "longitude": -0.1354435
        },
        {
          "latitude": 51.4975387,
          "longitude": -0.1353496
        },
        {
          "latitude": 51.497587,
          "longitude": -0.135068
        },
        {
          "latitude": 51.4976192,
          "longitude": -0.1349339
        },
        {
          "latitude": 51.4976352,
          "longitude": -0.1348561
        },
        {
          "latitude": 51.4977372,
          "longitude": -0.1344511
        },
        {
          "latitude": 51.4978498,
          "longitude": -0.1339978
        },
        {
          "latitude": 51.4978686,
          "longitude": -0.1339415
        },
        {
          "latitude": 51.4978981,
          "longitude": -0.1338583
        },
        {
          "latitude": 51.4983916,
          "longitude": -0.1325226
        },
        {
          "latitude": 51.4983031,
          "longitude": -0.1324394
        },
        {
          "latitude": 51.4981717,
          "longitude": -0.1323161
        },
        {
          "latitude": 51.4981583,
          "longitude": -0.1323026
        },
        {
          "latitude": 51.4981315,
          "longitude": -0.1322892
        },
        {
          "latitude": 51.4981073,
          "longitude": -0.1322865
        },
        {
          "latitude": 51.4980215,
          "longitude": -0.1323053
        },
        {
          "latitude": 51.4979625,
          "longitude": -0.1323161
        },
        {
          "latitude": 51.4978901,
          "longitude": -0.1323295
        },
        {
          "latitude": 51.497705,
          "longitude": -0.1323509
        },
        {
          "latitude": 51.497536,
          "longitude": -0.1323402
        },
        {
          "latitude": 51.4968386,
          "longitude": -0.1321122
        },
        {
          "latitude": 51.496844,
          "longitude": -0.1318359
        },
        {
          "latitude": 51.496844,
          "longitude": -0.1317501
        },
        {
          "latitude": 51.496844,
          "longitude": -0.1315972
        },
        {
          "latitude": 51.4968359,
          "longitude": -0.1313344
        },
        {
          "latitude": 51.4968467,
          "longitude": -0.1308355
        },
        {
          "latitude": 51.4968547,
          "longitude": -0.1304224
        },
        {
          "latitude": 51.4968601,
          "longitude": -0.1303312
        },
        {
          "latitude": 51.4968923,
          "longitude": -0.1298243
        },
        {
          "latitude": 51.4969218,
          "longitude": -0.1293737
        },
        {
          "latitude": 51.4969245,
          "longitude": -0.1293066
        },
        {
          "latitude": 51.4969298,
          "longitude": -0.1288614
        },
        {
          "latitude": 51.4969298,
          "longitude": -0.1287138
        },
        {
          "latitude": 51.4969271,
          "longitude": -0.1285502
        },
        {
          "latitude": 51.4969245,
          "longitude": -0.1277295
        },
        {
          "latitude": 51.4969271,
          "longitude": -0.1273727
        },
        {
          "latitude": 51.4969379,
          "longitude": -0.127134
        },
        {
          "latitude": 51.4969593,
          "longitude": -0.1266298
        },
        {
          "latitude": 51.4969781,
          "longitude": -0.1256078
        },
        {
          "latitude": 51.4971337,
          "longitude": -0.1256266
        },
        {
          "latitude": 51.4975736,
          "longitude": -0.1256669
        },
        {
          "latitude": 51.4976835,
          "longitude": -0.1256749
        },
        {
          "latitude": 51.4978632,
          "longitude": -0.125691
        },
        {
          "latitude": 51.4979464,
          "longitude": -0.125699
        },
        {
          "latitude": 51.4982548,
          "longitude": -0.125742
        },
        {
          "latitude": 51.4985526,
          "longitude": -0.1258144
        },
        {
          "latitude": 51.4987698,
          "longitude": -0.1258761
        },
        {
          "latitude": 51.4989415,
          "longitude": -0.1259297
        },
        {
          "latitude": 51.4994672,
          "longitude": -0.1261523
        },
        {
          "latitude": 51.4994967,
          "longitude": -0.1261899
        },
        {
          "latitude": 51.4996818,
          "longitude": -0.1262274
        },
        {
          "latitude": 51.5000331,
          "longitude": -0.1262301
        },
        {
          "latitude": 51.50006,
          "longitude": -0.1262355
        },
        {
          "latitude": 51.5000787,
          "longitude": -0.1262435
        },
        {
          "latitude": 51.5000948,
          "longitude": -0.1262596
        },
        {
          "latitude": 51.5001109,
          "longitude": -0.1262811
        },
        {
          "latitude": 51.5001137,
          "longitude": -0.1262861
        }
      ]
    }
  ],
  "sections": [
    {
      "startPointIndex": 3,
      "endPointIndex": 39,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-secondary",
          "shieldContent": "A4088"
        }
      ]
    },
    {
      "startPointIndex": 39,
      "endPointIndex": 46,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-secondary",
          "shieldContent": "A4140"
        },
        {
          "reference": "gbr-secondary",
          "shieldContent": "A4088"
        }
      ]
    },
    {
      "maxSpeedLimitInKmh": 48,
      "startPointIndex": 0,
      "endPointIndex": 76,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 48,
      "startPointIndex": 84,
      "endPointIndex": 104,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 46,
      "endPointIndex": 104,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-secondary",
          "shieldContent": "A4088"
        }
      ]
    },
    {
      "startPointIndex": 104,
      "endPointIndex": 111,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-secondary",
          "shieldContent": "B453"
        },
        {
          "reference": "gbr-secondary",
          "shieldContent": "A4088"
        }
      ]
    },
    {
      "startPointIndex": 111,
      "endPointIndex": 154,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-secondary",
          "shieldContent": "A4088"
        }
      ]
    },
    {
      "maxSpeedLimitInKmh": 32,
      "startPointIndex": 111,
      "endPointIndex": 163,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 154,
      "endPointIndex": 170,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-secondary",
          "shieldContent": "A407"
        }
      ]
    },
    {
      "maxSpeedLimitInKmh": 32,
      "startPointIndex": 170,
      "endPointIndex": 187,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 315,
      "endPointIndex": 319,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-secondary",
          "shieldContent": "B413"
        }
      ]
    },
    {
      "startPointIndex": 347,
      "endPointIndex": 353,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-secondary",
          "shieldContent": "B414"
        }
      ]
    },
    {
      "startPointIndex": 353,
      "endPointIndex": 371,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-secondary",
          "shieldContent": "B413"
        }
      ]
    },
    {
      "startPointIndex": 406,
      "endPointIndex": 432,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-primary",
          "shieldContent": "A404"
        }
      ]
    },
    {
      "startPointIndex": 432,
      "endPointIndex": 434,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-primary",
          "shieldContent": "A404"
        },
        {
          "reference": "gbr-secondary",
          "shieldContent": "A4206"
        }
      ]
    },
    {
      "startPointIndex": 434,
      "endPointIndex": 441,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-primary",
          "shieldContent": "A404"
        }
      ]
    },
    {
      "startPointIndex": 449,
      "endPointIndex": 450,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-secondary",
          "shieldContent": "A40"
        }
      ]
    },
    {
      "startPointIndex": 450,
      "endPointIndex": 508,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-primary",
          "shieldContent": "A5"
        },
        {
          "reference": "gbr-secondary",
          "shieldContent": "A40"
        }
      ]
    },
    {
      "startPointIndex": 508,
      "endPointIndex": 518,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-secondary",
          "shieldContent": "A40"
        }
      ]
    },
    {
      "startPointIndex": 530,
      "endPointIndex": 535,
      "sectionType": "TOLL_ROAD"
    },
    {
      "startPointIndex": 530,
      "endPointIndex": 535,
      "sectionType": "TOLL_VIGNETTE",
      "countryCode": "GBR"
    },
    {
      "startPointIndex": 518,
      "endPointIndex": 572,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-primary",
          "shieldContent": "A4202"
        }
      ]
    },
    {
      "startPointIndex": 572,
      "endPointIndex": 595,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-primary",
          "shieldContent": "A4202"
        },
        {
          "reference": "gbr-primary",
          "shieldContent": "A4"
        }
      ]
    },
    {
      "startPointIndex": 600,
      "endPointIndex": 674,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-secondary",
          "shieldContent": "A302"
        }
      ]
    },
    {
      "maxSpeedLimitInKmh": 32,
      "startPointIndex": 193,
      "endPointIndex": 721,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 0,
      "endPointIndex": 721,
      "sectionType": "COUNTRY",
      "countryCode": "GBR"
    },
    {
      "startPointIndex": 639,
      "endPointIndex": 721,
      "sectionType": "TOLL_VIGNETTE",
      "countryCode": "GBR"
    },
    {
      "startPointIndex": 0,
      "endPointIndex": 721,
      "sectionType": "TRAVEL_MODE",
      "travelMode": "car"
    },
    {
      "startPointIndex": 703,
      "endPointIndex": 721,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-secondary",
          "shieldContent": "A3212"
        }
      ]
    },
    {
      "startPointIndex": 0,
      "endPointIndex": 721,
      "sectionType": "URBAN"
    },
    {
      "startPointIndex": 639,
      "endPointIndex": 721,
      "sectionType": "TOLL_ROAD"
    },
    {
      "lanes": [
        {
          "directions": [
            "SHARP_LEFT"
          ],
          "follow": "SHARP_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 3,
      "endPointIndex": 3,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "DOUBLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 3,
      "endPointIndex": 4,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 4,
      "endPointIndex": 4,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 4,
      "endPointIndex": 5,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 5,
      "endPointIndex": 7,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 7,
      "endPointIndex": 7,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 7,
      "endPointIndex": 13,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 14,
      "endPointIndex": 16,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "DOUBLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 16,
      "endPointIndex": 17,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 17,
      "endPointIndex": 17,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 17,
      "endPointIndex": 18,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 18,
      "endPointIndex": 19,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 19,
      "endPointIndex": 20,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 20,
      "endPointIndex": 21,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 21,
      "endPointIndex": 23,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 23,
      "endPointIndex": 24,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 24,
      "endPointIndex": 26,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 26,
      "endPointIndex": 34,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 35,
      "endPointIndex": 37,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 37,
      "endPointIndex": 38,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 38,
      "endPointIndex": 39,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 39,
      "endPointIndex": 39,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "SLIGHT_LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 39,
      "endPointIndex": 40,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 40,
      "endPointIndex": 43,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT",
            "STRAIGHT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT",
            "STRAIGHT"
          ],
          "follow": "SLIGHT_LEFT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 43,
      "endPointIndex": 45,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 45,
      "endPointIndex": 47,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 47,
      "endPointIndex": 47,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 47,
      "endPointIndex": 49,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 49,
      "endPointIndex": 50,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 50,
      "endPointIndex": 52,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 53,
      "endPointIndex": 54,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 54,
      "endPointIndex": 71,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 73,
      "endPointIndex": 74,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 74,
      "endPointIndex": 74,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 74,
      "endPointIndex": 75,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 75,
      "endPointIndex": 75,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 75,
      "endPointIndex": 76,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 76,
      "endPointIndex": 76,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 76,
      "endPointIndex": 77,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 77,
      "endPointIndex": 77,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 77,
      "endPointIndex": 78,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 78,
      "endPointIndex": 79,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 79,
      "endPointIndex": 79,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 79,
      "endPointIndex": 81,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 81,
      "endPointIndex": 81,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 81,
      "endPointIndex": 83,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 83,
      "endPointIndex": 83,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 83,
      "endPointIndex": 90,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 90,
      "endPointIndex": 93,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 93,
      "endPointIndex": 94,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 94,
      "endPointIndex": 95,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 95,
      "endPointIndex": 96,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 96,
      "endPointIndex": 97,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 97,
      "endPointIndex": 98,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 98,
      "endPointIndex": 99,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 99,
      "endPointIndex": 100,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 100,
      "endPointIndex": 101,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 101,
      "endPointIndex": 103,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 103,
      "endPointIndex": 103,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 103,
      "endPointIndex": 105,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 105,
      "endPointIndex": 105,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 105,
      "endPointIndex": 105,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 105,
      "endPointIndex": 108,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 108,
      "endPointIndex": 108,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 108,
      "endPointIndex": 109,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 109,
      "endPointIndex": 109,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 109,
      "endPointIndex": 111,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 111,
      "endPointIndex": 111,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT",
            "SHARP_RIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 111,
      "endPointIndex": 112,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "SHARP_RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 112,
      "endPointIndex": 112,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 112,
      "endPointIndex": 114,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 114,
      "endPointIndex": 123,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 124,
      "endPointIndex": 126,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 126,
      "endPointIndex": 127,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 127,
      "endPointIndex": 129,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 129,
      "endPointIndex": 129,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 129,
      "endPointIndex": 130,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 130,
      "endPointIndex": 130,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 130,
      "endPointIndex": 131,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 131,
      "endPointIndex": 131,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 131,
      "endPointIndex": 132,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 132,
      "endPointIndex": 133,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 133,
      "endPointIndex": 141,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 143,
      "endPointIndex": 144,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": [
            "LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 144,
      "endPointIndex": 144,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 144,
      "endPointIndex": 145,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 145,
      "endPointIndex": 148,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 149,
      "endPointIndex": 149,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "RIGHT"
          ],
          "follow": "RIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "LONG_DASHED"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 149,
      "endPointIndex": 150,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "RIGHT"
          ],
          "follow": "RIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 150,
      "endPointIndex": 150,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ]
        },
        {
          "directions": [
            "RIGHT"
          ],
          "follow": "RIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 150,
      "endPointIndex": 153,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ]
        },
        {
          "directions": [
            "RIGHT"
          ],
          "follow": "RIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 153,
      "endPointIndex": 154,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 154,
      "endPointIndex": 155,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 155,
      "endPointIndex": 158,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 158,
      "endPointIndex": 162,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 162,
      "endPointIndex": 162,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT",
            "STRAIGHT"
          ],
          "follow": "SLIGHT_LEFT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 162,
      "endPointIndex": 163,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 163,
      "endPointIndex": 163,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 163,
      "endPointIndex": 178,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SHARP_LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 180,
      "endPointIndex": 180,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SHARP_LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 180,
      "endPointIndex": 181,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SHARP_LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 181,
      "endPointIndex": 181,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 181,
      "endPointIndex": 183,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 183,
      "endPointIndex": 184,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 184,
      "endPointIndex": 186,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 186,
      "endPointIndex": 186,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT",
            "STRAIGHT"
          ],
          "follow": "SLIGHT_LEFT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 186,
      "endPointIndex": 188,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 188,
      "endPointIndex": 188,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 188,
      "endPointIndex": 194,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 194,
      "endPointIndex": 196,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 196,
      "endPointIndex": 198,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 198,
      "endPointIndex": 198,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 198,
      "endPointIndex": 203,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ],
          "follow": "LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 203,
      "endPointIndex": 203,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 203,
      "endPointIndex": 205,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 205,
      "endPointIndex": 206,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 206,
      "endPointIndex": 207,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 207,
      "endPointIndex": 217,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "RIGHT"
          ],
          "follow": "LEFT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "DOUBLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 218,
      "endPointIndex": 219,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "RIGHT"
          ],
          "follow": "LEFT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 219,
      "endPointIndex": 220,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ],
          "follow": "LEFT"
        },
        {
          "directions": [
            "RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 220,
      "endPointIndex": 220,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 220,
      "endPointIndex": 220,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 220,
      "endPointIndex": 222,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "DOUBLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 222,
      "endPointIndex": 223,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 223,
      "endPointIndex": 223,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 223,
      "endPointIndex": 224,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 224,
      "endPointIndex": 224,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 224,
      "endPointIndex": 225,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 225,
      "endPointIndex": 233,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT",
            "RIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "DOUBLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 233,
      "endPointIndex": 234,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 234,
      "endPointIndex": 234,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT",
            "RIGHT"
          ],
          "follow": "RIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 234,
      "endPointIndex": 236,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT",
            "RIGHT"
          ],
          "follow": "RIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 236,
      "endPointIndex": 237,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT",
            "RIGHT"
          ],
          "follow": "RIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 237,
      "endPointIndex": 238,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT",
            "RIGHT"
          ],
          "follow": "RIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 238,
      "endPointIndex": 242,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT",
            "RIGHT"
          ],
          "follow": "RIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 242,
      "endPointIndex": 243,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT",
            "RIGHT"
          ],
          "follow": "RIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 243,
      "endPointIndex": 244,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "RIGHT"
          ],
          "follow": "RIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 244,
      "endPointIndex": 244,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 244,
      "endPointIndex": 245,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 245,
      "endPointIndex": 246,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 246,
      "endPointIndex": 247,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 247,
      "endPointIndex": 255,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 257,
      "endPointIndex": 258,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 258,
      "endPointIndex": 258,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 258,
      "endPointIndex": 258,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 258,
      "endPointIndex": 258,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT",
            "STRAIGHT"
          ],
          "follow": "SLIGHT_LEFT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 258,
      "endPointIndex": 263,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 263,
      "endPointIndex": 263,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 263,
      "endPointIndex": 267,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 267,
      "endPointIndex": 270,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 286,
      "endPointIndex": 287,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 287,
      "endPointIndex": 287,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 287,
      "endPointIndex": 289,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 289,
      "endPointIndex": 289,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 289,
      "endPointIndex": 290,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 290,
      "endPointIndex": 293,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 293,
      "endPointIndex": 293,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 293,
      "endPointIndex": 294,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 294,
      "endPointIndex": 294,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 294,
      "endPointIndex": 296,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 296,
      "endPointIndex": 297,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 297,
      "endPointIndex": 298,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 298,
      "endPointIndex": 306,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 307,
      "endPointIndex": 307,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 307,
      "endPointIndex": 308,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 308,
      "endPointIndex": 309,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 309,
      "endPointIndex": 309,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 309,
      "endPointIndex": 311,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 311,
      "endPointIndex": 312,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 312,
      "endPointIndex": 312,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 312,
      "endPointIndex": 314,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 314,
      "endPointIndex": 314,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 314,
      "endPointIndex": 314,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT",
            "SLIGHT_RIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "DOUBLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 314,
      "endPointIndex": 315,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT",
            "SLIGHT_RIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 315,
      "endPointIndex": 317,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "SLIGHT_RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 317,
      "endPointIndex": 318,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "SLIGHT_RIGHT"
          ],
          "follow": "SLIGHT_RIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 318,
      "endPointIndex": 318,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 318,
      "endPointIndex": 320,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 320,
      "endPointIndex": 320,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 320,
      "endPointIndex": 322,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 322,
      "endPointIndex": 331,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "DOUBLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 332,
      "endPointIndex": 333,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 333,
      "endPointIndex": 333,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 333,
      "endPointIndex": 334,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT",
            "STRAIGHT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_RIGHT",
            "RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 334,
      "endPointIndex": 334,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 334,
      "endPointIndex": 338,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 338,
      "endPointIndex": 349,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 349,
      "endPointIndex": 349,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "SLIGHT_RIGHT"
          ],
          "follow": "SLIGHT_RIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 349,
      "endPointIndex": 353,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ]
        },
        {
          "directions": [
            "SLIGHT_RIGHT"
          ],
          "follow": "SLIGHT_RIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 353,
      "endPointIndex": 353,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 353,
      "endPointIndex": 356,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT",
            "SHARP_RIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 357,
      "endPointIndex": 358,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "SHARP_RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 358,
      "endPointIndex": 358,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 358,
      "endPointIndex": 359,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 359,
      "endPointIndex": 360,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 360,
      "endPointIndex": 363,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT",
            "SHARP_RIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 363,
      "endPointIndex": 365,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT",
            "SHARP_RIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 365,
      "endPointIndex": 365,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "SHARP_RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 365,
      "endPointIndex": 366,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 366,
      "endPointIndex": 369,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT",
            "RIGHT"
          ],
          "follow": "RIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 370,
      "endPointIndex": 371,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "RIGHT"
          ],
          "follow": "RIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 371,
      "endPointIndex": 371,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 371,
      "endPointIndex": 372,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 372,
      "endPointIndex": 379,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 383,
      "endPointIndex": 383,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 383,
      "endPointIndex": 383,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 383,
      "endPointIndex": 384,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 384,
      "endPointIndex": 386,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 386,
      "endPointIndex": 386,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_RIGHT"
          ],
          "follow": "SLIGHT_RIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 386,
      "endPointIndex": 386,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_RIGHT"
          ],
          "follow": "SLIGHT_RIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 386,
      "endPointIndex": 387,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_RIGHT"
          ],
          "follow": "SLIGHT_RIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 387,
      "endPointIndex": 389,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_RIGHT"
          ],
          "follow": "SLIGHT_RIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 389,
      "endPointIndex": 389,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 389,
      "endPointIndex": 389,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 389,
      "endPointIndex": 391,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 391,
      "endPointIndex": 392,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 392,
      "endPointIndex": 393,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 393,
      "endPointIndex": 398,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SHARP_LEFT"
          ],
          "follow": "SHARP_LEFT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 400,
      "endPointIndex": 400,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 400,
      "endPointIndex": 405,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 405,
      "endPointIndex": 405,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 405,
      "endPointIndex": 408,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 408,
      "endPointIndex": 408,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 408,
      "endPointIndex": 414,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 414,
      "endPointIndex": 414,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 414,
      "endPointIndex": 415,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 415,
      "endPointIndex": 424,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "SLIGHT_RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 426,
      "endPointIndex": 427,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 427,
      "endPointIndex": 428,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 428,
      "endPointIndex": 430,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 430,
      "endPointIndex": 432,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT",
            "STRAIGHT"
          ],
          "follow": "SLIGHT_LEFT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 432,
      "endPointIndex": 432,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 432,
      "endPointIndex": 434,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT",
            "SLIGHT_RIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 434,
      "endPointIndex": 435,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT",
            "SLIGHT_RIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 435,
      "endPointIndex": 436,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT",
            "SLIGHT_RIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 436,
      "endPointIndex": 437,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT",
            "SLIGHT_RIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 437,
      "endPointIndex": 438,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT",
            "SLIGHT_RIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 438,
      "endPointIndex": 439,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT",
            "SLIGHT_RIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 439,
      "endPointIndex": 440,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "SLIGHT_RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 440,
      "endPointIndex": 440,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 440,
      "endPointIndex": 442,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 442,
      "endPointIndex": 442,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 442,
      "endPointIndex": 444,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 445,
      "endPointIndex": 445,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT",
            "SLIGHT_RIGHT"
          ],
          "follow": "SLIGHT_RIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 445,
      "endPointIndex": 446,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT",
            "SLIGHT_RIGHT"
          ],
          "follow": "SLIGHT_RIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 446,
      "endPointIndex": 447,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT",
            "SLIGHT_RIGHT"
          ],
          "follow": "SLIGHT_RIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 447,
      "endPointIndex": 447,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT",
            "SLIGHT_RIGHT"
          ],
          "follow": "SLIGHT_RIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 447,
      "endPointIndex": 449,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "SLIGHT_RIGHT"
          ],
          "follow": "SLIGHT_RIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 449,
      "endPointIndex": 449,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT",
            "SHARP_RIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 449,
      "endPointIndex": 451,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT",
            "SHARP_RIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 451,
      "endPointIndex": 451,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT",
            "SHARP_RIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 451,
      "endPointIndex": 453,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "SHARP_RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 453,
      "endPointIndex": 453,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 453,
      "endPointIndex": 459,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 459,
      "endPointIndex": 459,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "DOUBLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 459,
      "endPointIndex": 460,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 460,
      "endPointIndex": 460,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 460,
      "endPointIndex": 462,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 462,
      "endPointIndex": 463,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "DOUBLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 463,
      "endPointIndex": 464,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 464,
      "endPointIndex": 465,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 465,
      "endPointIndex": 466,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 466,
      "endPointIndex": 468,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 468,
      "endPointIndex": 470,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 470,
      "endPointIndex": 471,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 471,
      "endPointIndex": 471,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "DOUBLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 471,
      "endPointIndex": 471,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 471,
      "endPointIndex": 471,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_RIGHT"
          ],
          "follow": "SLIGHT_RIGHT"
        },
        {
          "directions": [
            "SLIGHT_RIGHT"
          ],
          "follow": "SLIGHT_RIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 471,
      "endPointIndex": 472,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_RIGHT"
          ],
          "follow": "SLIGHT_RIGHT"
        },
        {
          "directions": [
            "SLIGHT_RIGHT"
          ],
          "follow": "SLIGHT_RIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 472,
      "endPointIndex": 472,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 472,
      "endPointIndex": 485,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 486,
      "endPointIndex": 486,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "DOUBLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 486,
      "endPointIndex": 487,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 487,
      "endPointIndex": 487,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "DOUBLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 487,
      "endPointIndex": 488,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 488,
      "endPointIndex": 490,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 490,
      "endPointIndex": 492,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "SHARP_RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 494,
      "endPointIndex": 494,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT",
            "RIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 494,
      "endPointIndex": 495,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 495,
      "endPointIndex": 495,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT",
            "RIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 495,
      "endPointIndex": 496,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT",
            "RIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 496,
      "endPointIndex": 497,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT",
            "RIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 497,
      "endPointIndex": 497,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT",
            "RIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "DOUBLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 497,
      "endPointIndex": 499,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 499,
      "endPointIndex": 499,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 499,
      "endPointIndex": 499,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 499,
      "endPointIndex": 502,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 502,
      "endPointIndex": 504,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 504,
      "endPointIndex": 504,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 504,
      "endPointIndex": 505,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 505,
      "endPointIndex": 505,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 505,
      "endPointIndex": 507,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 507,
      "endPointIndex": 508,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 508,
      "endPointIndex": 508,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 508,
      "endPointIndex": 509,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "DOUBLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 509,
      "endPointIndex": 511,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "DOUBLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 513,
      "endPointIndex": 516,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 516,
      "endPointIndex": 516,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 516,
      "endPointIndex": 518,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 518,
      "endPointIndex": 518,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 518,
      "endPointIndex": 519,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 519,
      "endPointIndex": 519,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 519,
      "endPointIndex": 522,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 523,
      "endPointIndex": 523,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 523,
      "endPointIndex": 524,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 524,
      "endPointIndex": 524,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 524,
      "endPointIndex": 524,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 524,
      "endPointIndex": 524,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 524,
      "endPointIndex": 525,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 525,
      "endPointIndex": 527,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 527,
      "endPointIndex": 528,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 528,
      "endPointIndex": 528,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 528,
      "endPointIndex": 528,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 528,
      "endPointIndex": 529,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 529,
      "endPointIndex": 529,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT",
            "RIGHT_U_TURN"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 529,
      "endPointIndex": 530,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT",
            "RIGHT_U_TURN"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 530,
      "endPointIndex": 533,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "RIGHT_U_TURN"
          ]
        },
        {
          "directions": [
            "RIGHT_U_TURN"
          ]
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 533,
      "endPointIndex": 533,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 533,
      "endPointIndex": 534,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 534,
      "endPointIndex": 535,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 535,
      "endPointIndex": 535,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 535,
      "endPointIndex": 536,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 536,
      "endPointIndex": 537,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 537,
      "endPointIndex": 537,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 537,
      "endPointIndex": 546,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 547,
      "endPointIndex": 547,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 547,
      "endPointIndex": 548,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 548,
      "endPointIndex": 548,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 548,
      "endPointIndex": 549,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 549,
      "endPointIndex": 549,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 549,
      "endPointIndex": 549,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT",
            "SLIGHT_RIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 549,
      "endPointIndex": 551,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT",
            "SLIGHT_RIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 551,
      "endPointIndex": 551,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "SLIGHT_LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "LEFT",
            "SLIGHT_LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT",
            "RIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 551,
      "endPointIndex": 551,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 551,
      "endPointIndex": 552,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 552,
      "endPointIndex": 554,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT",
            "RIGHT_U_TURN"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 554,
      "endPointIndex": 554,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "RIGHT_U_TURN"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 554,
      "endPointIndex": 554,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 554,
      "endPointIndex": 555,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 555,
      "endPointIndex": 557,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 557,
      "endPointIndex": 562,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 563,
      "endPointIndex": 563,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 563,
      "endPointIndex": 564,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 564,
      "endPointIndex": 565,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "RIGHT"
          ]
        },
        {
          "directions": [
            "RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 565,
      "endPointIndex": 565,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 565,
      "endPointIndex": 568,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 568,
      "endPointIndex": 569,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 569,
      "endPointIndex": 569,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 569,
      "endPointIndex": 570,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 570,
      "endPointIndex": 570,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 570,
      "endPointIndex": 571,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 571,
      "endPointIndex": 571,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ]
        },
        {
          "directions": [
            "SLIGHT_LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 571,
      "endPointIndex": 572,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ]
        },
        {
          "directions": [
            "SLIGHT_LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 572,
      "endPointIndex": 576,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ]
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 576,
      "endPointIndex": 576,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 576,
      "endPointIndex": 577,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 577,
      "endPointIndex": 580,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 580,
      "endPointIndex": 580,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 580,
      "endPointIndex": 582,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 582,
      "endPointIndex": 585,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 585,
      "endPointIndex": 585,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 585,
      "endPointIndex": 586,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 586,
      "endPointIndex": 586,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 586,
      "endPointIndex": 589,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 589,
      "endPointIndex": 589,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 589,
      "endPointIndex": 590,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 590,
      "endPointIndex": 591,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 591,
      "endPointIndex": 591,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 591,
      "endPointIndex": 593,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 593,
      "endPointIndex": 593,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 593,
      "endPointIndex": 594,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 594,
      "endPointIndex": 594,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 594,
      "endPointIndex": 596,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 596,
      "endPointIndex": 597,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 597,
      "endPointIndex": 598,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 598,
      "endPointIndex": 599,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "DOUBLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 599,
      "endPointIndex": 605,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ],
          "follow": "LEFT"
        },
        {
          "directions": [
            "LEFT"
          ],
          "follow": "LEFT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 606,
      "endPointIndex": 608,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ],
          "follow": "LEFT"
        },
        {
          "directions": [
            "LEFT"
          ],
          "follow": "LEFT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 608,
      "endPointIndex": 609,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ],
          "follow": "LEFT"
        },
        {
          "directions": [
            "LEFT"
          ],
          "follow": "LEFT"
        },
        {
          "directions": [
            "LEFT"
          ],
          "follow": "LEFT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 609,
      "endPointIndex": 611,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ],
          "follow": "LEFT"
        },
        {
          "directions": [
            "LEFT"
          ],
          "follow": "LEFT"
        },
        {
          "directions": [
            "LEFT"
          ],
          "follow": "LEFT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 611,
      "endPointIndex": 611,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 611,
      "endPointIndex": 612,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 612,
      "endPointIndex": 614,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT",
            "RIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 614,
      "endPointIndex": 615,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT",
            "RIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 615,
      "endPointIndex": 617,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT",
            "RIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 617,
      "endPointIndex": 618,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 618,
      "endPointIndex": 618,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 618,
      "endPointIndex": 620,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT",
            "RIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 620,
      "endPointIndex": 622,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 622,
      "endPointIndex": 622,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ]
        },
        {
          "directions": [
            "SLIGHT_RIGHT"
          ],
          "follow": "SLIGHT_RIGHT"
        },
        {
          "directions": [
            "SLIGHT_RIGHT"
          ],
          "follow": "SLIGHT_RIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 622,
      "endPointIndex": 623,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT",
            "RIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 623,
      "endPointIndex": 624,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT",
            "RIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 624,
      "endPointIndex": 624,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT",
            "RIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 624,
      "endPointIndex": 625,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 625,
      "endPointIndex": 625,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 625,
      "endPointIndex": 626,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 626,
      "endPointIndex": 628,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 628,
      "endPointIndex": 629,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 629,
      "endPointIndex": 630,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 630,
      "endPointIndex": 630,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT",
            "STRAIGHT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 630,
      "endPointIndex": 631,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT",
            "STRAIGHT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 631,
      "endPointIndex": 634,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT",
            "STRAIGHT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 634,
      "endPointIndex": 634,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT",
            "STRAIGHT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 634,
      "endPointIndex": 635,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT",
            "STRAIGHT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 635,
      "endPointIndex": 637,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT",
            "STRAIGHT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 637,
      "endPointIndex": 638,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 638,
      "endPointIndex": 639,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 639,
      "endPointIndex": 644,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT",
            "RIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 646,
      "endPointIndex": 647,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT",
            "RIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 647,
      "endPointIndex": 648,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT",
            "RIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "DOUBLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 648,
      "endPointIndex": 649,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 649,
      "endPointIndex": 649,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "DOUBLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 649,
      "endPointIndex": 649,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "DOUBLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 649,
      "endPointIndex": 650,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "DOUBLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 650,
      "endPointIndex": 651,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 651,
      "endPointIndex": 653,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 653,
      "endPointIndex": 661,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 662,
      "endPointIndex": 662,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 662,
      "endPointIndex": 662,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 662,
      "endPointIndex": 663,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 663,
      "endPointIndex": 664,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 664,
      "endPointIndex": 665,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 665,
      "endPointIndex": 667,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 667,
      "endPointIndex": 668,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 668,
      "endPointIndex": 670,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 670,
      "endPointIndex": 671,
      "sectionType": "LANES"
    }
  ],
  "guidance": {
    "instructions": [
      {
        "drivingSide": "LEFT",
        "maneuver": "DEPART",
        "maneuverPoint": {
          "latitude": 51.5656078,
          "longitude": -0.2789953
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈbɑːn ˈɻa⁀ɪz",
            "phoneticLanguageCode": "en-GB",
            "text": "Barn Rise"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈbɑːn ˈɻa⁀ɪz",
            "phoneticLanguageCode": "en-GB",
            "text": "Barn Rise"
          }
        },
        "routeOffsetInMeters": 0,
        "routePath": [
          {
            "distanceInMeters": 0,
            "point": {
              "latitude": 51.5656078,
              "longitude": -0.2789953
            },
            "travelTimeInSeconds": 0
          }
        ],
        "sideRoads": []
      },
      {
        "changeOfAngleInDegrees": 84,
        "drivingSide": "LEFT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_RIGHT",
        "maneuverPoint": {
          "latitude": 51.5659538,
          "longitude": -0.2788666
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈgɻænd pə.ˈɻe⁀ɪd",
            "phoneticLanguageCode": "en-GB",
            "text": "Grand Parade"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈbɑːn ˈɻa⁀ɪz",
            "phoneticLanguageCode": "en-GB",
            "text": "Barn Rise"
          }
        },
        "routeOffsetInMeters": 39,
        "routePath": [
          {
            "distanceInMeters": 39,
            "point": {
              "latitude": 51.5659538,
              "longitude": -0.2788666
            },
            "travelTimeInSeconds": 10
          },
          {
            "distanceInMeters": 49,
            "point": {
              "latitude": 51.5659365,
              "longitude": -0.2787249
            },
            "travelTimeInSeconds": 14
          }
        ],
        "sideRoads": []
      },
      {
        "changeOfAngleInDegrees": 118,
        "drivingSide": "LEFT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_RIGHT",
        "maneuverPoint": {
          "latitude": 51.5657204,
          "longitude": -0.2769542
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈbɑːn ˈhɪl",
            "phoneticLanguageCode": "en-GB",
            "text": "Barn Hill"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈgɻænd pə.ˈɻe⁀ɪd",
            "phoneticLanguageCode": "en-GB",
            "text": "Grand Parade"
          }
        },
        "routeOffsetInMeters": 174,
        "routePath": [
          {
            "distanceInMeters": 174,
            "point": {
              "latitude": 51.5657204,
              "longitude": -0.2769542
            },
            "travelTimeInSeconds": 74
          },
          {
            "distanceInMeters": 184,
            "point": {
              "latitude": 51.5656459,
              "longitude": -0.2770377
            },
            "travelTimeInSeconds": 92
          }
        ],
        "sideRoads": []
      },
      {
        "changeOfAngleInDegrees": -123,
        "drivingSide": "LEFT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_LEFT",
        "maneuverPoint": {
          "latitude": 51.5654522,
          "longitude": -0.2772546
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A4088"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈfɔː.tɪ ˈle⁀ɪn",
            "phoneticLanguageCode": "en-GB",
            "text": "Forty Lane"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈbɑːn ˈhɪl",
            "phoneticLanguageCode": "en-GB",
            "text": "Barn Hill"
          }
        },
        "routeOffsetInMeters": 211,
        "routePath": [
          {
            "distanceInMeters": 211,
            "point": {
              "latitude": 51.5654522,
              "longitude": -0.2772546
            },
            "travelTimeInSeconds": 139
          },
          {
            "distanceInMeters": 241,
            "point": {
              "latitude": 51.56542,
              "longitude": -0.2768227
            },
            "travelTimeInSeconds": 157
          },
          {
            "distanceInMeters": 251,
            "point": {
              "latitude": 51.5654118,
              "longitude": -0.2766824
            },
            "travelTimeInSeconds": 158
          }
        ],
        "sideRoads": []
      },
      {
        "changeOfAngleInDegrees": 41,
        "drivingSide": "LEFT",
        "maneuver": "ROUNDABOUT_SLIGHT_RIGHT",
        "maneuverPoint": {
          "latitude": 51.5657955,
          "longitude": -0.2654153
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A4088"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈblæk.bɜːd ˈhɪl",
            "phoneticLanguageCode": "en-GB",
            "text": "Blackbird Hill"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A4088"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈfɔː.tɪ ˈle⁀ɪn",
            "phoneticLanguageCode": "en-GB",
            "text": "Forty Lane"
          }
        },
        "roundaboutExitNumber": 2,
        "routeOffsetInMeters": 1031,
        "routePath": [
          {
            "distanceInMeters": 1031,
            "point": {
              "latitude": 51.5658197,
              "longitude": -0.2655977
            },
            "travelTimeInSeconds": 256
          },
          {
            "distanceInMeters": 1034,
            "point": {
              "latitude": 51.5658411,
              "longitude": -0.2655762
            },
            "travelTimeInSeconds": 256
          },
          {
            "distanceInMeters": 1036,
            "point": {
              "latitude": 51.5658492,
              "longitude": -0.2655467
            },
            "travelTimeInSeconds": 256
          },
          {
            "distanceInMeters": 1039,
            "point": {
              "latitude": 51.5658519,
              "longitude": -0.2655146
            },
            "travelTimeInSeconds": 257
          },
          {
            "distanceInMeters": 1041,
            "point": {
              "latitude": 51.5658411,
              "longitude": -0.2654797
            },
            "travelTimeInSeconds": 257
          },
          {
            "distanceInMeters": 1044,
            "point": {
              "latitude": 51.5658304,
              "longitude": -0.2654448
            },
            "travelTimeInSeconds": 258
          },
          {
            "distanceInMeters": 1046,
            "point": {
              "latitude": 51.565817,
              "longitude": -0.2654314
            },
            "travelTimeInSeconds": 258
          },
          {
            "distanceInMeters": 1048,
            "point": {
              "latitude": 51.5657955,
              "longitude": -0.2654153
            },
            "travelTimeInSeconds": 258
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 765,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 665,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 652,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 514,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 219,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 83,
            "side": "RIGHT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": 18,
        "drivingSide": "LEFT",
        "maneuver": "ROUNDABOUT_STRAIGHT",
        "maneuverPoint": {
          "latitude": 51.5611875,
          "longitude": -0.2559981
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A4088"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "text": ""
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A4088"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈniːz.dən ˈle⁀ɪn ˈnɔːθ",
            "phoneticLanguageCode": "en-GB",
            "text": "Neasden Lane North"
          }
        },
        "roundaboutExitNumber": 3,
        "routeOffsetInMeters": 1793,
        "routePath": [
          {
            "distanceInMeters": 1793,
            "point": {
              "latitude": 51.561968,
              "longitude": -0.256674
            },
            "travelTimeInSeconds": 385
          },
          {
            "distanceInMeters": 1819,
            "point": {
              "latitude": 51.5618366,
              "longitude": -0.2563521
            },
            "travelTimeInSeconds": 391
          },
          {
            "distanceInMeters": 1848,
            "point": {
              "latitude": 51.5616891,
              "longitude": -0.2560222
            },
            "travelTimeInSeconds": 398
          },
          {
            "distanceInMeters": 1860,
            "point": {
              "latitude": 51.561622,
              "longitude": -0.255872
            },
            "travelTimeInSeconds": 401
          },
          {
            "distanceInMeters": 1869,
            "point": {
              "latitude": 51.5615442,
              "longitude": -0.2558425
            },
            "travelTimeInSeconds": 402
          },
          {
            "distanceInMeters": 1887,
            "point": {
              "latitude": 51.5613833,
              "longitude": -0.2558532
            },
            "travelTimeInSeconds": 404
          },
          {
            "distanceInMeters": 1895,
            "point": {
              "latitude": 51.5613163,
              "longitude": -0.2558881
            },
            "travelTimeInSeconds": 405
          },
          {
            "distanceInMeters": 1903,
            "point": {
              "latitude": 51.5612546,
              "longitude": -0.2559552
            },
            "travelTimeInSeconds": 406
          },
          {
            "distanceInMeters": 1912,
            "point": {
              "latitude": 51.5611875,
              "longitude": -0.2559981
            },
            "travelTimeInSeconds": 407
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 659,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 507,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 453,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 316,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 278,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 182,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 141,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 64,
            "side": "LEFT"
          }
        ]
      },
      {
        "drivingSide": "LEFT",
        "maneuver": "EXIT_ROUNDABOUT",
        "maneuverPoint": {
          "latitude": 51.5611875,
          "longitude": -0.2559981
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A4088"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "text": ""
          }
        },
        "offsetOfAmbiguousExitFromManeuverInMeters": 51,
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A4088"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈniːz.dən ˈle⁀ɪn ˈnɔːθ",
            "phoneticLanguageCode": "en-GB",
            "text": "Neasden Lane North"
          }
        },
        "routeOffsetInMeters": 1912,
        "routePath": [
          {
            "distanceInMeters": 1912,
            "point": {
              "latitude": 51.5611875,
              "longitude": -0.2559981
            },
            "travelTimeInSeconds": 407
          }
        ],
        "sideRoads": []
      },
      {
        "changeOfAngleInDegrees": 5,
        "drivingSide": "LEFT",
        "maneuver": "ROUNDABOUT_STRAIGHT",
        "maneuverPoint": {
          "latitude": 51.5582022,
          "longitude": -0.2485737
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A4088"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈdʌ.dən ˈhɪl ˈle⁀ɪn",
            "phoneticLanguageCode": "en-GB",
            "text": "Dudden Hill Lane"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A4088"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "text": ""
          }
        },
        "roundaboutExitNumber": 3,
        "routeOffsetInMeters": 2429,
        "routePath": [
          {
            "distanceInMeters": 2429,
            "point": {
              "latitude": 51.5587896,
              "longitude": -0.2499712
            },
            "travelTimeInSeconds": 448
          },
          {
            "distanceInMeters": 2455,
            "point": {
              "latitude": 51.5588701,
              "longitude": -0.2496225
            },
            "travelTimeInSeconds": 451
          },
          {
            "distanceInMeters": 2464,
            "point": {
              "latitude": 51.5588272,
              "longitude": -0.2495232
            },
            "travelTimeInSeconds": 452
          },
          {
            "distanceInMeters": 2482,
            "point": {
              "latitude": 51.558736,
              "longitude": -0.2493086
            },
            "travelTimeInSeconds": 454
          },
          {
            "distanceInMeters": 2492,
            "point": {
              "latitude": 51.5586716,
              "longitude": -0.2492067
            },
            "travelTimeInSeconds": 455
          },
          {
            "distanceInMeters": 2498,
            "point": {
              "latitude": 51.5586287,
              "longitude": -0.2491423
            },
            "travelTimeInSeconds": 456
          },
          {
            "distanceInMeters": 2503,
            "point": {
              "latitude": 51.5585965,
              "longitude": -0.2490941
            },
            "travelTimeInSeconds": 456
          },
          {
            "distanceInMeters": 2560,
            "point": {
              "latitude": 51.5582022,
              "longitude": -0.2485737
            },
            "travelTimeInSeconds": 463
          }
        ],
        "sideRoads": []
      },
      {
        "drivingSide": "LEFT",
        "maneuver": "EXIT_ROUNDABOUT",
        "maneuverPoint": {
          "latitude": 51.5582022,
          "longitude": -0.2485737
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A4088"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈdʌ.dən ˈhɪl ˈle⁀ɪn",
            "phoneticLanguageCode": "en-GB",
            "text": "Dudden Hill Lane"
          }
        },
        "offsetOfAmbiguousExitFromManeuverInMeters": 56,
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A4088"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "text": ""
          }
        },
        "routeOffsetInMeters": 2560,
        "routePath": [
          {
            "distanceInMeters": 2560,
            "point": {
              "latitude": 51.5582022,
              "longitude": -0.2485737
            },
            "travelTimeInSeconds": 463
          }
        ],
        "sideRoads": []
      },
      {
        "changeOfAngleInDegrees": 106,
        "drivingSide": "LEFT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_RIGHT",
        "maneuverPoint": {
          "latitude": 51.5488493,
          "longitude": -0.2390116
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A407"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈha⁀ɪ ˈɻə⁀ʊd",
            "phoneticLanguageCode": "en-GB",
            "text": "High Road"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A4088"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈdʌ.dən ˈhɪl ˈle⁀ɪn",
            "phoneticLanguageCode": "en-GB",
            "text": "Dudden Hill Lane"
          }
        },
        "routeOffsetInMeters": 3798,
        "routePath": [
          {
            "distanceInMeters": 3798,
            "point": {
              "latitude": 51.5491551,
              "longitude": -0.2391377
            },
            "travelTimeInSeconds": 642
          },
          {
            "distanceInMeters": 3803,
            "point": {
              "latitude": 51.5491229,
              "longitude": -0.2390814
            },
            "travelTimeInSeconds": 645
          },
          {
            "distanceInMeters": 3812,
            "point": {
              "latitude": 51.5490478,
              "longitude": -0.2390546
            },
            "travelTimeInSeconds": 648
          },
          {
            "distanceInMeters": 3826,
            "point": {
              "latitude": 51.5489164,
              "longitude": -0.2390304
            },
            "travelTimeInSeconds": 653
          },
          {
            "distanceInMeters": 3834,
            "point": {
              "latitude": 51.5488493,
              "longitude": -0.2390116
            },
            "travelTimeInSeconds": 656
          },
          {
            "distanceInMeters": 3839,
            "point": {
              "latitude": 51.5488654,
              "longitude": -0.2390814
            },
            "travelTimeInSeconds": 656
          },
          {
            "distanceInMeters": 3845,
            "point": {
              "latitude": 51.5488708,
              "longitude": -0.2391618
            },
            "travelTimeInSeconds": 657
          },
          {
            "distanceInMeters": 3849,
            "point": {
              "latitude": 51.5488628,
              "longitude": -0.2392209
            },
            "travelTimeInSeconds": 658
          },
          {
            "distanceInMeters": 3861,
            "point": {
              "latitude": 51.5488413,
              "longitude": -0.2393952
            },
            "travelTimeInSeconds": 660
          },
          {
            "distanceInMeters": 3865,
            "point": {
              "latitude": 51.5488493,
              "longitude": -0.2394542
            },
            "travelTimeInSeconds": 660
          },
          {
            "distanceInMeters": 3875,
            "point": {
              "latitude": 51.5488079,
              "longitude": -0.2395814
            },
            "travelTimeInSeconds": 662
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 945,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 876,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 833,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 773,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 658,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 551,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 389,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 276,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 264,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 238,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 196,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 122,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 47,
            "side": "RIGHT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": -81,
        "drivingSide": "LEFT",
        "maneuver": "ROUNDABOUT_LEFT",
        "maneuverPoint": {
          "latitude": 51.5482244,
          "longitude": -0.2406183
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈpa⁀ʊnd ˈle⁀ɪn",
            "phoneticLanguageCode": "en-GB",
            "text": "Pound Lane"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A407"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈha⁀ɪ ˈɻə⁀ʊd",
            "phoneticLanguageCode": "en-GB",
            "text": "High Road"
          }
        },
        "roundaboutExitNumber": 1,
        "routeOffsetInMeters": 3967,
        "routePath": [
          {
            "distanceInMeters": 3967,
            "point": {
              "latitude": 51.5482914,
              "longitude": -0.2405995
            },
            "travelTimeInSeconds": 682
          },
          {
            "distanceInMeters": 3969,
            "point": {
              "latitude": 51.548278,
              "longitude": -0.2405888
            },
            "travelTimeInSeconds": 683
          },
          {
            "distanceInMeters": 3970,
            "point": {
              "latitude": 51.5482673,
              "longitude": -0.2405834
            },
            "travelTimeInSeconds": 683
          },
          {
            "distanceInMeters": 3971,
            "point": {
              "latitude": 51.5482539,
              "longitude": -0.2405834
            },
            "travelTimeInSeconds": 683
          },
          {
            "distanceInMeters": 3972,
            "point": {
              "latitude": 51.5482458,
              "longitude": -0.2405861
            },
            "travelTimeInSeconds": 683
          },
          {
            "distanceInMeters": 3973,
            "point": {
              "latitude": 51.5482378,
              "longitude": -0.2405941
            },
            "travelTimeInSeconds": 684
          },
          {
            "distanceInMeters": 3975,
            "point": {
              "latitude": 51.5482298,
              "longitude": -0.2406049
            },
            "travelTimeInSeconds": 684
          },
          {
            "distanceInMeters": 3976,
            "point": {
              "latitude": 51.5482244,
              "longitude": -0.2406183
            },
            "travelTimeInSeconds": 684
          }
        ],
        "sideRoads": []
      },
      {
        "changeOfAngleInDegrees": -66,
        "drivingSide": "LEFT",
        "maneuver": "ROUNDABOUT_SLIGHT_LEFT",
        "maneuverPoint": {
          "latitude": 51.5438122,
          "longitude": -0.2355033
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈhɑːlz.dən ˈɻə⁀ʊd",
            "phoneticLanguageCode": "en-GB",
            "text": "Harlesden Road"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈhɑːlz.dən ˈɻə⁀ʊd",
            "phoneticLanguageCode": "en-GB",
            "text": "Harlesden Road"
          }
        },
        "roundaboutExitNumber": 1,
        "routeOffsetInMeters": 4576,
        "routePath": [
          {
            "distanceInMeters": 4576,
            "point": {
              "latitude": 51.5438712,
              "longitude": -0.2355677
            },
            "travelTimeInSeconds": 781
          },
          {
            "distanceInMeters": 4578,
            "point": {
              "latitude": 51.5438685,
              "longitude": -0.2355382
            },
            "travelTimeInSeconds": 782
          },
          {
            "distanceInMeters": 4579,
            "point": {
              "latitude": 51.5438631,
              "longitude": -0.2355167
            },
            "travelTimeInSeconds": 782
          },
          {
            "distanceInMeters": 4580,
            "point": {
              "latitude": 51.5438551,
              "longitude": -0.2355033
            },
            "travelTimeInSeconds": 782
          },
          {
            "distanceInMeters": 4582,
            "point": {
              "latitude": 51.5438417,
              "longitude": -0.2354953
            },
            "travelTimeInSeconds": 782
          },
          {
            "distanceInMeters": 4583,
            "point": {
              "latitude": 51.5438309,
              "longitude": -0.2354953
            },
            "travelTimeInSeconds": 782
          },
          {
            "distanceInMeters": 4585,
            "point": {
              "latitude": 51.5438122,
              "longitude": -0.2355033
            },
            "travelTimeInSeconds": 783
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 559,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 549,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 422,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 273,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 216,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 67,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 54,
            "side": "LEFT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": -90,
        "drivingSide": "LEFT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_LEFT",
        "maneuverPoint": {
          "latitude": 51.542227,
          "longitude": -0.2344117
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈdɒ.nɪŋ.tən ˈɻə⁀ʊd",
            "phoneticLanguageCode": "en-GB",
            "text": "Donnington Road"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈhɑːlz.dən ˈɻə⁀ʊd",
            "phoneticLanguageCode": "en-GB",
            "text": "Harlesden Road"
          }
        },
        "routeOffsetInMeters": 4797,
        "routePath": [
          {
            "distanceInMeters": 4797,
            "point": {
              "latitude": 51.542227,
              "longitude": -0.2344117
            },
            "travelTimeInSeconds": 809
          },
          {
            "distanceInMeters": 4807,
            "point": {
              "latitude": 51.5421912,
              "longitude": -0.2342782
            },
            "travelTimeInSeconds": 811
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 97,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 88,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 35,
            "side": "RIGHT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": -85,
        "drivingSide": "LEFT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_LEFT",
        "maneuverPoint": {
          "latitude": 51.5418729,
          "longitude": -0.2259037
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈt⁀ʃe⁀ɪm.bə.lɪn ˈɻə⁀ʊd",
            "phoneticLanguageCode": "en-GB",
            "text": "Chamberlayne Road"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈdɒ.nɪŋ.tən ˈɻə⁀ʊd",
            "phoneticLanguageCode": "en-GB",
            "text": "Donnington Road"
          }
        },
        "routeOffsetInMeters": 5419,
        "routePath": [
          {
            "distanceInMeters": 5419,
            "point": {
              "latitude": 51.5418729,
              "longitude": -0.2259037
            },
            "travelTimeInSeconds": 904
          },
          {
            "distanceInMeters": 5425,
            "point": {
              "latitude": 51.5419239,
              "longitude": -0.2258956
            },
            "travelTimeInSeconds": 907
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 582,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 518,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 493,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 453,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 405,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 106,
            "side": "LEFT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": 95,
        "drivingSide": "LEFT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "landmark": "AT_TRAFFIC_LIGHT",
        "maneuver": "TURN_RIGHT",
        "maneuverPoint": {
          "latitude": 51.5458265,
          "longitude": -0.2215612
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈbɻɒn.dəs.bə.ɻɪ ˈpɑːk",
            "phoneticLanguageCode": "en-GB",
            "text": "Brondesbury Park"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈsɪd.məθ ˈɻə⁀ʊd",
            "phoneticLanguageCode": "en-GB",
            "text": "Sidmouth Road"
          }
        },
        "routeOffsetInMeters": 5991,
        "routePath": [
          {
            "distanceInMeters": 5991,
            "point": {
              "latitude": 51.5458265,
              "longitude": -0.2215612
            },
            "travelTimeInSeconds": 1015
          },
          {
            "distanceInMeters": 6001,
            "point": {
              "latitude": 51.5457976,
              "longitude": -0.221423
            },
            "travelTimeInSeconds": 1022
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 534,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 501,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 473,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 460,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 451,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 446,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 400,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 384,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 249,
            "side": "LEFT_AND_RIGHT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": 8,
        "drivingSide": "LEFT",
        "maneuver": "ROUNDABOUT_STRAIGHT",
        "maneuverPoint": {
          "latitude": 51.5438551,
          "longitude": -0.214633
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈbɻɒn.dəs.bə.ɻɪ ˈpɑːk",
            "phoneticLanguageCode": "en-GB",
            "text": "Brondesbury Park"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈbɻɒn.dəs.bə.ɻɪ ˈpɑːk",
            "phoneticLanguageCode": "en-GB",
            "text": "Brondesbury Park"
          }
        },
        "roundaboutExitNumber": 2,
        "routeOffsetInMeters": 6514,
        "routePath": [
          {
            "distanceInMeters": 6514,
            "point": {
              "latitude": 51.543898,
              "longitude": -0.2147377
            },
            "travelTimeInSeconds": 1090
          },
          {
            "distanceInMeters": 6516,
            "point": {
              "latitude": 51.5439114,
              "longitude": -0.2147189
            },
            "travelTimeInSeconds": 1090
          },
          {
            "distanceInMeters": 6517,
            "point": {
              "latitude": 51.5439168,
              "longitude": -0.2147001
            },
            "travelTimeInSeconds": 1091
          },
          {
            "distanceInMeters": 6518,
            "point": {
              "latitude": 51.5439194,
              "longitude": -0.2146813
            },
            "travelTimeInSeconds": 1091
          },
          {
            "distanceInMeters": 6519,
            "point": {
              "latitude": 51.5439168,
              "longitude": -0.2146652
            },
            "travelTimeInSeconds": 1091
          },
          {
            "distanceInMeters": 6521,
            "point": {
              "latitude": 51.5439114,
              "longitude": -0.2146411
            },
            "travelTimeInSeconds": 1092
          },
          {
            "distanceInMeters": 6523,
            "point": {
              "latitude": 51.5439007,
              "longitude": -0.2146304
            },
            "travelTimeInSeconds": 1092
          },
          {
            "distanceInMeters": 6524,
            "point": {
              "latitude": 51.5438873,
              "longitude": -0.2146223
            },
            "travelTimeInSeconds": 1093
          },
          {
            "distanceInMeters": 6525,
            "point": {
              "latitude": 51.5438765,
              "longitude": -0.2146223
            },
            "travelTimeInSeconds": 1094
          },
          {
            "distanceInMeters": 6527,
            "point": {
              "latitude": 51.5438658,
              "longitude": -0.214625
            },
            "travelTimeInSeconds": 1095
          },
          {
            "distanceInMeters": 6528,
            "point": {
              "latitude": 51.5438551,
              "longitude": -0.214633
            },
            "travelTimeInSeconds": 1095
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 366,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 252,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 224,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 80,
            "side": "RIGHT"
          }
        ]
      },
      {
        "drivingSide": "LEFT",
        "intersectionName": {
          "text": ""
        },
        "maneuver": "KEEP_RIGHT",
        "maneuverPoint": {
          "latitude": 51.5330458,
          "longitude": -0.2032685
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈfɜːn.hɛd ˈɻə⁀ʊd",
            "phoneticLanguageCode": "en-GB",
            "text": "Fernhead Road"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "B413"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈkɑːl.tn̩ ˈve⁀ɪl",
            "phoneticLanguageCode": "en-GB",
            "text": "Carlton Vale"
          }
        },
        "routeOffsetInMeters": 7993,
        "routePath": [
          {
            "distanceInMeters": 7993,
            "point": {
              "latitude": 51.5330458,
              "longitude": -0.2032685
            },
            "travelTimeInSeconds": 1362
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 918,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 863,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 657,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 580,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 503,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 426,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 401,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 351,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 288,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 206,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 52,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 13,
            "side": "RIGHT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": -71,
        "drivingSide": "LEFT",
        "maneuver": "ROUNDABOUT_LEFT",
        "maneuverPoint": {
          "latitude": 51.5285262,
          "longitude": -0.2013105
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈʃɜː.lənd ˈɻə⁀ʊd",
            "phoneticLanguageCode": "en-GB",
            "text": "Shirland Road"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈfɜːn.hɛd ˈɻə⁀ʊd",
            "phoneticLanguageCode": "en-GB",
            "text": "Fernhead Road"
          }
        },
        "roundaboutExitNumber": 1,
        "routeOffsetInMeters": 8511,
        "routePath": [
          {
            "distanceInMeters": 8511,
            "point": {
              "latitude": 51.5285745,
              "longitude": -0.2013883
            },
            "travelTimeInSeconds": 1435
          },
          {
            "distanceInMeters": 8513,
            "point": {
              "latitude": 51.5285718,
              "longitude": -0.2013507
            },
            "travelTimeInSeconds": 1436
          },
          {
            "distanceInMeters": 8516,
            "point": {
              "latitude": 51.5285584,
              "longitude": -0.2013212
            },
            "travelTimeInSeconds": 1436
          },
          {
            "distanceInMeters": 8519,
            "point": {
              "latitude": 51.528537,
              "longitude": -0.2013078
            },
            "travelTimeInSeconds": 1437
          },
          {
            "distanceInMeters": 8520,
            "point": {
              "latitude": 51.5285262,
              "longitude": -0.2013105
            },
            "travelTimeInSeconds": 1437
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 233,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 167,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 130,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 65,
            "side": "LEFT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": 85,
        "drivingSide": "LEFT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_RIGHT",
        "maneuverPoint": {
          "latitude": 51.5232986,
          "longitude": -0.1869044
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "fɔː.ˈmə⁀ʊ.sə ˈstɻiːt",
            "phoneticLanguageCode": "en-GB",
            "text": "Formosa Street"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "B413"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈʃɜː.lənd ˈɻə⁀ʊd",
            "phoneticLanguageCode": "en-GB",
            "text": "Shirland Road"
          }
        },
        "routeOffsetInMeters": 9690,
        "routePath": [
          {
            "distanceInMeters": 9690,
            "point": {
              "latitude": 51.5232986,
              "longitude": -0.1869044
            },
            "travelTimeInSeconds": 1670
          },
          {
            "distanceInMeters": 9700,
            "point": {
              "latitude": 51.5232244,
              "longitude": -0.1869827
            },
            "travelTimeInSeconds": 1676
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 938,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 895,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 887,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 867,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 822,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 665,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 576,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 397,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 302,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 254,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 184,
            "side": "LEFT_AND_RIGHT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": 51,
        "drivingSide": "LEFT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": true,
        "maneuver": "TURN_RIGHT",
        "maneuverPoint": {
          "latitude": 51.5213808,
          "longitude": -0.183785
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈwɛst.bɔːn ˈtɛ.ɻəs ˈɻə⁀ʊd",
            "phoneticLanguageCode": "en-GB",
            "text": "Westbourne Terrace Road"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈblɒm.fiːld ˈɻə⁀ʊd",
            "phoneticLanguageCode": "en-GB",
            "text": "Blomfield Road"
          }
        },
        "routeOffsetInMeters": 10072,
        "routePath": [
          {
            "distanceInMeters": 10072,
            "point": {
              "latitude": 51.5213808,
              "longitude": -0.183785
            },
            "travelTimeInSeconds": 1734
          },
          {
            "distanceInMeters": 10076,
            "point": {
              "latitude": 51.5213379,
              "longitude": -0.1837823
            },
            "travelTimeInSeconds": 1734
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 342,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 311,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 147,
            "side": "LEFT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": -118,
        "drivingSide": "LEFT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_LEFT",
        "maneuverPoint": {
          "latitude": 51.5197232,
          "longitude": -0.1845199
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A404"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈhæ.ɻə⁀ʊ ˈɻə⁀ʊd",
            "phoneticLanguageCode": "en-GB",
            "text": "Harrow Road"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈwɛst.bɔːn ˈtɛ.ɻəs ˈɻə⁀ʊd",
            "phoneticLanguageCode": "en-GB",
            "text": "Westbourne Terrace Road"
          }
        },
        "routeOffsetInMeters": 10240,
        "routePath": [
          {
            "distanceInMeters": 10240,
            "point": {
              "latitude": 51.5199673,
              "longitude": -0.1846352
            },
            "travelTimeInSeconds": 1765
          },
          {
            "distanceInMeters": 10245,
            "point": {
              "latitude": 51.5199217,
              "longitude": -0.184654
            },
            "travelTimeInSeconds": 1766
          },
          {
            "distanceInMeters": 10250,
            "point": {
              "latitude": 51.5198761,
              "longitude": -0.1846594
            },
            "travelTimeInSeconds": 1768
          },
          {
            "distanceInMeters": 10253,
            "point": {
              "latitude": 51.5198493,
              "longitude": -0.1846513
            },
            "travelTimeInSeconds": 1770
          },
          {
            "distanceInMeters": 10258,
            "point": {
              "latitude": 51.5198144,
              "longitude": -0.1846272
            },
            "travelTimeInSeconds": 1773
          },
          {
            "distanceInMeters": 10264,
            "point": {
              "latitude": 51.5197688,
              "longitude": -0.1845816
            },
            "travelTimeInSeconds": 1778
          },
          {
            "distanceInMeters": 10270,
            "point": {
              "latitude": 51.5197232,
              "longitude": -0.1845199
            },
            "travelTimeInSeconds": 1783
          },
          {
            "distanceInMeters": 10279,
            "point": {
              "latitude": 51.5197259,
              "longitude": -0.1843992
            },
            "travelTimeInSeconds": 1788
          },
          {
            "distanceInMeters": 10280,
            "point": {
              "latitude": 51.5197281,
              "longitude": -0.1843778
            },
            "travelTimeInSeconds": 1788
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 127,
            "side": "RIGHT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": 79,
        "drivingSide": "LEFT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_RIGHT",
        "maneuverPoint": {
          "latitude": 51.520882,
          "longitude": -0.1802123
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A404"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈhæ.ɻə⁀ʊ ˈɻə⁀ʊd",
            "phoneticLanguageCode": "en-GB",
            "text": "Harrow Road"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A404"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈhæ.ɻə⁀ʊ ˈɻə⁀ʊd",
            "phoneticLanguageCode": "en-GB",
            "text": "Harrow Road"
          }
        },
        "routeOffsetInMeters": 10566,
        "routePath": [
          {
            "distanceInMeters": 10566,
            "point": {
              "latitude": 51.5208685,
              "longitude": -0.1807702
            },
            "travelTimeInSeconds": 1821
          },
          {
            "distanceInMeters": 10573,
            "point": {
              "latitude": 51.5209007,
              "longitude": -0.180679
            },
            "travelTimeInSeconds": 1822
          },
          {
            "distanceInMeters": 10577,
            "point": {
              "latitude": 51.5209061,
              "longitude": -0.1806253
            },
            "travelTimeInSeconds": 1822
          },
          {
            "distanceInMeters": 10580,
            "point": {
              "latitude": 51.5209088,
              "longitude": -0.1805717
            },
            "travelTimeInSeconds": 1822
          },
          {
            "distanceInMeters": 10605,
            "point": {
              "latitude": 51.520882,
              "longitude": -0.1802123
            },
            "travelTimeInSeconds": 1825
          },
          {
            "distanceInMeters": 10615,
            "point": {
              "latitude": 51.5208201,
              "longitude": -0.1801103
            },
            "travelTimeInSeconds": 1826
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 260,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 49,
            "side": "LEFT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": -12,
        "drivingSide": "LEFT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "SLIGHT_LEFT",
        "maneuverPoint": {
          "latitude": 51.5204769,
          "longitude": -0.179598
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A404"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈhæ.ɻə⁀ʊ ˈɻə⁀ʊd",
            "phoneticLanguageCode": "en-GB",
            "text": "Harrow Road"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A404"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈhæ.ɻə⁀ʊ ˈɻə⁀ʊd",
            "phoneticLanguageCode": "en-GB",
            "text": "Harrow Road"
          }
        },
        "routeOffsetInMeters": 10667,
        "routePath": [
          {
            "distanceInMeters": 10667,
            "point": {
              "latitude": 51.5204769,
              "longitude": -0.179598
            },
            "travelTimeInSeconds": 1832
          },
          {
            "distanceInMeters": 10677,
            "point": {
              "latitude": 51.5204204,
              "longitude": -0.1794848
            },
            "travelTimeInSeconds": 1833
          }
        ],
        "sideRoads": []
      },
      {
        "changeOfAngleInDegrees": -34,
        "drivingSide": "LEFT",
        "maneuver": "ROUNDABOUT_SLIGHT_LEFT",
        "maneuverPoint": {
          "latitude": 51.5202087,
          "longitude": -0.1775998
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A404"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈhæ.ɻə⁀ʊ ˈɻə⁀ʊd",
            "phoneticLanguageCode": "en-GB",
            "text": "Harrow Road"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A404"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈhæ.ɻə⁀ʊ ˈɻə⁀ʊd",
            "phoneticLanguageCode": "en-GB",
            "text": "Harrow Road"
          }
        },
        "roundaboutExitNumber": 1,
        "routeOffsetInMeters": 10769,
        "routePath": [
          {
            "distanceInMeters": 10769,
            "point": {
              "latitude": 51.5202141,
              "longitude": -0.1782596
            },
            "travelTimeInSeconds": 1848
          },
          {
            "distanceInMeters": 10786,
            "point": {
              "latitude": 51.5202141,
              "longitude": -0.1780236
            },
            "travelTimeInSeconds": 1850
          },
          {
            "distanceInMeters": 10815,
            "point": {
              "latitude": 51.5202087,
              "longitude": -0.1775998
            },
            "travelTimeInSeconds": 1854
          }
        ],
        "sideRoads": []
      },
      {
        "changeOfAngleInDegrees": 51,
        "drivingSide": "LEFT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_RIGHT",
        "maneuverPoint": {
          "latitude": 51.5200853,
          "longitude": -0.1702237
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A5"
              },
              "stateCode": ""
            },
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A40"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈɛd⁀ʒ.wɛ⁀ə ˈɻə⁀ʊd",
            "phoneticLanguageCode": "en-GB",
            "text": "Edgware Road"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈhæ.ɻə⁀ʊ ˈɻə⁀ʊd",
            "phoneticLanguageCode": "en-GB",
            "text": "Harrow Road"
          }
        },
        "routeOffsetInMeters": 11317,
        "routePath": [
          {
            "distanceInMeters": 11317,
            "point": {
              "latitude": 51.5200773,
              "longitude": -0.1703793
            },
            "travelTimeInSeconds": 2012
          },
          {
            "distanceInMeters": 11328,
            "point": {
              "latitude": 51.5200853,
              "longitude": -0.1702237
            },
            "travelTimeInSeconds": 2014
          },
          {
            "distanceInMeters": 11338,
            "point": {
              "latitude": 51.5200183,
              "longitude": -0.1701203
            },
            "travelTimeInSeconds": 2016
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 282,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 198,
            "side": "LEFT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": -29,
        "drivingSide": "LEFT",
        "maneuver": "ROUNDABOUT_SLIGHT_LEFT",
        "maneuverPoint": {
          "latitude": 51.5129453,
          "longitude": -0.1581028
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A4202"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈpɑːk ˈle⁀ɪn",
            "phoneticLanguageCode": "en-GB",
            "text": "Park Lane"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A5"
              },
              "stateCode": ""
            },
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A40"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈɛd⁀ʒ.wɛ⁀ə ˈɻə⁀ʊd",
            "phoneticLanguageCode": "en-GB",
            "text": "Edgware Road"
          }
        },
        "roundaboutExitNumber": 3,
        "routeOffsetInMeters": 12373,
        "routePath": [
          {
            "distanceInMeters": 12373,
            "point": {
              "latitude": 51.5132269,
              "longitude": -0.1600313
            },
            "travelTimeInSeconds": 2283
          },
          {
            "distanceInMeters": 12387,
            "point": {
              "latitude": 51.5132457,
              "longitude": -0.1598436
            },
            "travelTimeInSeconds": 2285
          },
          {
            "distanceInMeters": 12396,
            "point": {
              "latitude": 51.5132591,
              "longitude": -0.1597095
            },
            "travelTimeInSeconds": 2286
          },
          {
            "distanceInMeters": 12450,
            "point": {
              "latitude": 51.5133476,
              "longitude": -0.1589397
            },
            "travelTimeInSeconds": 2299
          },
          {
            "distanceInMeters": 12455,
            "point": {
              "latitude": 51.5133637,
              "longitude": -0.158878
            },
            "travelTimeInSeconds": 2300
          },
          {
            "distanceInMeters": 12467,
            "point": {
              "latitude": 51.5133986,
              "longitude": -0.158709
            },
            "travelTimeInSeconds": 2303
          },
          {
            "distanceInMeters": 12484,
            "point": {
              "latitude": 51.5133369,
              "longitude": -0.1584864
            },
            "travelTimeInSeconds": 2306
          },
          {
            "distanceInMeters": 12489,
            "point": {
              "latitude": 51.5133128,
              "longitude": -0.1584354
            },
            "travelTimeInSeconds": 2307
          },
          {
            "distanceInMeters": 12504,
            "point": {
              "latitude": 51.5132108,
              "longitude": -0.1582879
            },
            "travelTimeInSeconds": 2310
          },
          {
            "distanceInMeters": 12510,
            "point": {
              "latitude": 51.5131733,
              "longitude": -0.1582342
            },
            "travelTimeInSeconds": 2311
          },
          {
            "distanceInMeters": 12537,
            "point": {
              "latitude": 51.5129453,
              "longitude": -0.1581028
            },
            "travelTimeInSeconds": 2314
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 918,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 676,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 562,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 414,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 281,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 244,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 206,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 157,
            "side": "RIGHT"
          }
        ]
      },
      {
        "drivingSide": "LEFT",
        "maneuver": "EXIT_ROUNDABOUT",
        "maneuverPoint": {
          "latitude": 51.5129453,
          "longitude": -0.1581028
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A4202"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈpɑːk ˈle⁀ɪn",
            "phoneticLanguageCode": "en-GB",
            "text": "Park Lane"
          }
        },
        "offsetOfAmbiguousExitFromManeuverInMeters": 69,
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A5"
              },
              "stateCode": ""
            },
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A40"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈɛd⁀ʒ.wɛ⁀ə ˈɻə⁀ʊd",
            "phoneticLanguageCode": "en-GB",
            "text": "Edgware Road"
          }
        },
        "routeOffsetInMeters": 12537,
        "routePath": [
          {
            "distanceInMeters": 12537,
            "point": {
              "latitude": 51.5129453,
              "longitude": -0.1581028
            },
            "travelTimeInSeconds": 2314
          }
        ],
        "sideRoads": []
      },
      {
        "changeOfAngleInDegrees": 4,
        "drivingSide": "LEFT",
        "maneuver": "ROUNDABOUT_STRAIGHT",
        "maneuverPoint": {
          "latitude": 51.5019965,
          "longitude": -0.1512095
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈdjuːk əv ˈwɛ.lɪŋ.tn̩ ˈple⁀ɪs",
            "phoneticLanguageCode": "en-GB",
            "text": "Duke of Wellington Place"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A4202"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈpɑːk ˈle⁀ɪn",
            "phoneticLanguageCode": "en-GB",
            "text": "Park Lane"
          }
        },
        "roundaboutExitNumber": 3,
        "routeOffsetInMeters": 13762,
        "routePath": [
          {
            "distanceInMeters": 13762,
            "point": {
              "latitude": 51.5032893,
              "longitude": -0.1508099
            },
            "travelTimeInSeconds": 2530
          },
          {
            "distanceInMeters": 13768,
            "point": {
              "latitude": 51.5032974,
              "longitude": -0.1507267
            },
            "travelTimeInSeconds": 2531
          },
          {
            "distanceInMeters": 13792,
            "point": {
              "latitude": 51.5033135,
              "longitude": -0.1503834
            },
            "travelTimeInSeconds": 2534
          },
          {
            "distanceInMeters": 13806,
            "point": {
              "latitude": 51.5032947,
              "longitude": -0.1501796
            },
            "travelTimeInSeconds": 2536
          },
          {
            "distanceInMeters": 13812,
            "point": {
              "latitude": 51.5032759,
              "longitude": -0.1500937
            },
            "travelTimeInSeconds": 2537
          },
          {
            "distanceInMeters": 13816,
            "point": {
              "latitude": 51.5032625,
              "longitude": -0.1500455
            },
            "travelTimeInSeconds": 2538
          },
          {
            "distanceInMeters": 13822,
            "point": {
              "latitude": 51.503233,
              "longitude": -0.149973
            },
            "travelTimeInSeconds": 2539
          },
          {
            "distanceInMeters": 13829,
            "point": {
              "latitude": 51.5031928,
              "longitude": -0.1498899
            },
            "travelTimeInSeconds": 2540
          },
          {
            "distanceInMeters": 13836,
            "point": {
              "latitude": 51.5031445,
              "longitude": -0.1498362
            },
            "travelTimeInSeconds": 2541
          },
          {
            "distanceInMeters": 13843,
            "point": {
              "latitude": 51.5030828,
              "longitude": -0.1498121
            },
            "travelTimeInSeconds": 2542
          },
          {
            "distanceInMeters": 13857,
            "point": {
              "latitude": 51.5029514,
              "longitude": -0.149796
            },
            "travelTimeInSeconds": 2546
          },
          {
            "distanceInMeters": 13863,
            "point": {
              "latitude": 51.5029004,
              "longitude": -0.1497987
            },
            "travelTimeInSeconds": 2548
          },
          {
            "distanceInMeters": 13873,
            "point": {
              "latitude": 51.5028092,
              "longitude": -0.1498067
            },
            "travelTimeInSeconds": 2551
          },
          {
            "distanceInMeters": 13890,
            "point": {
              "latitude": 51.502659,
              "longitude": -0.1498497
            },
            "travelTimeInSeconds": 2556
          },
          {
            "distanceInMeters": 13901,
            "point": {
              "latitude": 51.5025678,
              "longitude": -0.1498979
            },
            "travelTimeInSeconds": 2558
          },
          {
            "distanceInMeters": 13904,
            "point": {
              "latitude": 51.5025437,
              "longitude": -0.1499194
            },
            "travelTimeInSeconds": 2559
          },
          {
            "distanceInMeters": 13912,
            "point": {
              "latitude": 51.5024874,
              "longitude": -0.1499811
            },
            "travelTimeInSeconds": 2560
          },
          {
            "distanceInMeters": 13924,
            "point": {
              "latitude": 51.5024096,
              "longitude": -0.1501018
            },
            "travelTimeInSeconds": 2562
          },
          {
            "distanceInMeters": 13938,
            "point": {
              "latitude": 51.5023425,
              "longitude": -0.1502761
            },
            "travelTimeInSeconds": 2565
          },
          {
            "distanceInMeters": 13952,
            "point": {
              "latitude": 51.5022835,
              "longitude": -0.1504585
            },
            "travelTimeInSeconds": 2568
          },
          {
            "distanceInMeters": 13960,
            "point": {
              "latitude": 51.502246,
              "longitude": -0.1505551
            },
            "travelTimeInSeconds": 2570
          },
          {
            "distanceInMeters": 14003,
            "point": {
              "latitude": 51.5020448,
              "longitude": -0.1510862
            },
            "travelTimeInSeconds": 2583
          },
          {
            "distanceInMeters": 14008,
            "point": {
              "latitude": 51.5020233,
              "longitude": -0.1511452
            },
            "travelTimeInSeconds": 2585
          },
          {
            "distanceInMeters": 14013,
            "point": {
              "latitude": 51.5019965,
              "longitude": -0.1512095
            },
            "travelTimeInSeconds": 2587
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 998,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 936,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 719,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 585,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 415,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 323,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 212,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 104,
            "side": "RIGHT"
          }
        ]
      },
      {
        "drivingSide": "LEFT",
        "maneuver": "EXIT_ROUNDABOUT",
        "maneuverPoint": {
          "latitude": 51.5019965,
          "longitude": -0.1512095
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈdjuːk əv ˈwɛ.lɪŋ.tn̩ ˈple⁀ɪs",
            "phoneticLanguageCode": "en-GB",
            "text": "Duke of Wellington Place"
          }
        },
        "offsetOfAmbiguousExitFromManeuverInMeters": 122,
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A4202"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈpɑːk ˈle⁀ɪn",
            "phoneticLanguageCode": "en-GB",
            "text": "Park Lane"
          }
        },
        "routeOffsetInMeters": 14013,
        "routePath": [
          {
            "distanceInMeters": 14013,
            "point": {
              "latitude": 51.5019965,
              "longitude": -0.1512095
            },
            "travelTimeInSeconds": 2587
          }
        ],
        "sideRoads": []
      },
      {
        "changeOfAngleInDegrees": -68,
        "drivingSide": "LEFT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_LEFT",
        "maneuverPoint": {
          "latitude": 51.4983568,
          "longitude": -0.147146
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A302"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈlə⁀ʊ.ə ˈgɻə⁀ʊv.nə ˈple⁀ɪs",
            "phoneticLanguageCode": "en-GB",
            "text": "Lower Grosvenor Place"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A302"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈgɻə⁀ʊv.nə ˈple⁀ɪs",
            "phoneticLanguageCode": "en-GB",
            "text": "Grosvenor Place"
          }
        },
        "routeOffsetInMeters": 14523,
        "routePath": [
          {
            "distanceInMeters": 14523,
            "point": {
              "latitude": 51.4983568,
              "longitude": -0.147146
            },
            "travelTimeInSeconds": 2665
          },
          {
            "distanceInMeters": 14536,
            "point": {
              "latitude": 51.4982897,
              "longitude": -0.1469877
            },
            "travelTimeInSeconds": 2669
          },
          {
            "distanceInMeters": 14542,
            "point": {
              "latitude": 51.4982656,
              "longitude": -0.1469126
            },
            "travelTimeInSeconds": 2672
          },
          {
            "distanceInMeters": 14551,
            "point": {
              "latitude": 51.4982414,
              "longitude": -0.1467946
            },
            "travelTimeInSeconds": 2674
          },
          {
            "distanceInMeters": 14558,
            "point": {
              "latitude": 51.4982361,
              "longitude": -0.1466927
            },
            "travelTimeInSeconds": 2675
          },
          {
            "distanceInMeters": 14567,
            "point": {
              "latitude": 51.4982495,
              "longitude": -0.1465666
            },
            "travelTimeInSeconds": 2676
          }
        ],
        "sideRoads": []
      },
      {
        "drivingSide": "LEFT",
        "intersectionName": {
          "text": ""
        },
        "maneuver": "KEEP_RIGHT",
        "maneuverPoint": {
          "latitude": 51.4981636,
          "longitude": -0.1442412
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A302"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈlə⁀ʊ.ə ˈgɻə⁀ʊv.nə ˈple⁀ɪs",
            "phoneticLanguageCode": "en-GB",
            "text": "Lower Grosvenor Place"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A302"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈlə⁀ʊ.ə ˈgɻə⁀ʊv.nə ˈple⁀ɪs",
            "phoneticLanguageCode": "en-GB",
            "text": "Lower Grosvenor Place"
          }
        },
        "routeOffsetInMeters": 14730,
        "routePath": [
          {
            "distanceInMeters": 14730,
            "point": {
              "latitude": 51.4981636,
              "longitude": -0.1442412
            },
            "travelTimeInSeconds": 2711
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 88,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 27,
            "side": "RIGHT"
          }
        ]
      },
      {
        "drivingSide": "LEFT",
        "intersectionName": {
          "text": ""
        },
        "maneuver": "KEEP_LEFT",
        "maneuverPoint": {
          "latitude": 51.4968306,
          "longitude": -0.1418298
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A302"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈbɻɛ.sn̩.dən ˈple⁀ɪs",
            "phoneticLanguageCode": "en-GB",
            "text": "Bressenden Place"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A302"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈbɻɛ.sn̩.dən ˈple⁀ɪs",
            "phoneticLanguageCode": "en-GB",
            "text": "Bressenden Place"
          }
        },
        "routeOffsetInMeters": 14977,
        "routePath": [
          {
            "distanceInMeters": 14977,
            "point": {
              "latitude": 51.4968306,
              "longitude": -0.1418298
            },
            "travelTimeInSeconds": 2794
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 223,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 165,
            "side": "LEFT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": 90,
        "drivingSide": "LEFT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_RIGHT",
        "maneuverPoint": {
          "latitude": 51.4983916,
          "longitude": -0.1325226
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈæ.bɪ ˈɔː.t⁀ʃəd ˈstɻiːt",
            "phoneticLanguageCode": "en-GB",
            "text": "Abbey Orchard Street"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A302"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "vɪk.ˈtɔː.ɻɪ.ə ˈstɻiːt",
            "phoneticLanguageCode": "en-GB",
            "text": "Victoria Street"
          }
        },
        "routeOffsetInMeters": 15665,
        "routePath": [
          {
            "distanceInMeters": 15665,
            "point": {
              "latitude": 51.4983916,
              "longitude": -0.1325226
            },
            "travelTimeInSeconds": 2977
          },
          {
            "distanceInMeters": 15675,
            "point": {
              "latitude": 51.4983179,
              "longitude": -0.1324533
            },
            "travelTimeInSeconds": 2984
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 498,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 241,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 118,
            "side": "LEFT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": -79,
        "drivingSide": "LEFT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_LEFT",
        "maneuverPoint": {
          "latitude": 51.4968386,
          "longitude": -0.1321122
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈgɻe⁀ɪt ˈpiː.tə ˈstɻiːt",
            "phoneticLanguageCode": "en-GB",
            "text": "Great Peter Street"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈpɜː.kɪnz ˈɻɛnts",
            "phoneticLanguageCode": "en-GB",
            "text": "Perkin's Rents"
          }
        },
        "routeOffsetInMeters": 15844,
        "routePath": [
          {
            "distanceInMeters": 15844,
            "point": {
              "latitude": 51.4968386,
              "longitude": -0.1321122
            },
            "travelTimeInSeconds": 3023
          },
          {
            "distanceInMeters": 15854,
            "point": {
              "latitude": 51.4968415,
              "longitude": -0.1319674
            },
            "travelTimeInSeconds": 3027
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 133,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 97,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 79,
            "side": "LEFT_AND_RIGHT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": -90,
        "drivingSide": "LEFT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_LEFT",
        "maneuverPoint": {
          "latitude": 51.4969781,
          "longitude": -0.1256078
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A3212"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈæ.bɪŋ.dən ˈstɻiːt",
            "phoneticLanguageCode": "en-GB",
            "text": "Abingdon Street"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈgɻe⁀ɪt ˈpiː.tə ˈstɻiːt",
            "phoneticLanguageCode": "en-GB",
            "text": "Great Peter Street"
          }
        },
        "routeOffsetInMeters": 16296,
        "routePath": [
          {
            "distanceInMeters": 16296,
            "point": {
              "latitude": 51.4969781,
              "longitude": -0.1256078
            },
            "travelTimeInSeconds": 3142
          },
          {
            "distanceInMeters": 16306,
            "point": {
              "latitude": 51.4970696,
              "longitude": -0.1256189
            },
            "travelTimeInSeconds": 3147
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 427,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 416,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 363,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 328,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 261,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 204,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 147,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 106,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 71,
            "side": "LEFT"
          }
        ]
      },
      {
        "drivingSide": "LEFT",
        "maneuver": "ARRIVE_RIGHT",
        "maneuverPoint": {
          "latitude": 51.5001137,
          "longitude": -0.1262861
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A3212"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈsn̩t ˈmɑː.gɻət ˈstɻiːt",
            "phoneticLanguageCode": "en-GB",
            "text": "Saint Margaret Street"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A3212"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈsn̩t ˈmɑː.gɻət ˈstɻiːt",
            "phoneticLanguageCode": "en-GB",
            "text": "Saint Margaret Street"
          }
        },
        "routeOffsetInMeters": 16651,
        "routePath": [
          {
            "distanceInMeters": 16651,
            "point": {
              "latitude": 51.5001137,
              "longitude": -0.1262861
            },
            "travelTimeInSeconds": 3283
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 288,
            "side": "LEFT"
          }
        ]
      }
    ]
  },
  "progress": [
    {
      "pointIndex": 0,
      "travelTimeInSeconds": 0,
      "distanceInMeters": 0
    },
    {
      "pointIndex": 1,
      "travelTimeInSeconds": 10,
      "distanceInMeters": 40
    },
    {
      "pointIndex": 2,
      "travelTimeInSeconds": 74,
      "distanceInMeters": 175
    },
    {
      "pointIndex": 3,
      "travelTimeInSeconds": 139,
      "distanceInMeters": 211
    },
    {
      "pointIndex": 5,
      "travelTimeInSeconds": 158,
      "distanceInMeters": 254
    },
    {
      "pointIndex": 16,
      "travelTimeInSeconds": 184,
      "distanceInMeters": 463
    },
    {
      "pointIndex": 20,
      "travelTimeInSeconds": 204,
      "distanceInMeters": 593
    },
    {
      "pointIndex": 36,
      "travelTimeInSeconds": 240,
      "distanceInMeters": 971
    },
    {
      "pointIndex": 50,
      "travelTimeInSeconds": 263,
      "distanceInMeters": 1094
    },
    {
      "pointIndex": 64,
      "travelTimeInSeconds": 340,
      "distanceInMeters": 1517
    },
    {
      "pointIndex": 69,
      "travelTimeInSeconds": 361,
      "distanceInMeters": 1614
    },
    {
      "pointIndex": 78,
      "travelTimeInSeconds": 399,
      "distanceInMeters": 1852
    },
    {
      "pointIndex": 110,
      "travelTimeInSeconds": 457,
      "distanceInMeters": 2507
    },
    {
      "pointIndex": 128,
      "travelTimeInSeconds": 550,
      "distanceInMeters": 3234
    },
    {
      "pointIndex": 135,
      "travelTimeInSeconds": 569,
      "distanceInMeters": 3349
    },
    {
      "pointIndex": 148,
      "travelTimeInSeconds": 627,
      "distanceInMeters": 3756
    },
    {
      "pointIndex": 157,
      "travelTimeInSeconds": 659,
      "distanceInMeters": 3856
    },
    {
      "pointIndex": 173,
      "travelTimeInSeconds": 698,
      "distanceInMeters": 4034
    },
    {
      "pointIndex": 202,
      "travelTimeInSeconds": 805,
      "distanceInMeters": 4770
    },
    {
      "pointIndex": 207,
      "travelTimeInSeconds": 833,
      "distanceInMeters": 4909
    },
    {
      "pointIndex": 219,
      "travelTimeInSeconds": 901,
      "distanceInMeters": 5414
    },
    {
      "pointIndex": 222,
      "travelTimeInSeconds": 918,
      "distanceInMeters": 5435
    },
    {
      "pointIndex": 241,
      "travelTimeInSeconds": 972,
      "distanceInMeters": 5829
    },
    {
      "pointIndex": 242,
      "travelTimeInSeconds": 991,
      "distanceInMeters": 5934
    },
    {
      "pointIndex": 244,
      "travelTimeInSeconds": 1018,
      "distanceInMeters": 5997
    },
    {
      "pointIndex": 245,
      "travelTimeInSeconds": 1032,
      "distanceInMeters": 6010
    },
    {
      "pointIndex": 268,
      "travelTimeInSeconds": 1096,
      "distanceInMeters": 6536
    },
    {
      "pointIndex": 283,
      "travelTimeInSeconds": 1143,
      "distanceInMeters": 6869
    },
    {
      "pointIndex": 286,
      "travelTimeInSeconds": 1164,
      "distanceInMeters": 6964
    },
    {
      "pointIndex": 302,
      "travelTimeInSeconds": 1240,
      "distanceInMeters": 7497
    },
    {
      "pointIndex": 306,
      "travelTimeInSeconds": 1292,
      "distanceInMeters": 7713
    },
    {
      "pointIndex": 307,
      "travelTimeInSeconds": 1332,
      "distanceInMeters": 7794
    },
    {
      "pointIndex": 321,
      "travelTimeInSeconds": 1375,
      "distanceInMeters": 8046
    },
    {
      "pointIndex": 337,
      "travelTimeInSeconds": 1441,
      "distanceInMeters": 8527
    },
    {
      "pointIndex": 343,
      "travelTimeInSeconds": 1479,
      "distanceInMeters": 8758
    },
    {
      "pointIndex": 347,
      "travelTimeInSeconds": 1510,
      "distanceInMeters": 8802
    },
    {
      "pointIndex": 357,
      "travelTimeInSeconds": 1560,
      "distanceInMeters": 9073
    },
    {
      "pointIndex": 358,
      "travelTimeInSeconds": 1585,
      "distanceInMeters": 9120
    },
    {
      "pointIndex": 364,
      "travelTimeInSeconds": 1622,
      "distanceInMeters": 9400
    },
    {
      "pointIndex": 367,
      "travelTimeInSeconds": 1640,
      "distanceInMeters": 9449
    },
    {
      "pointIndex": 371,
      "travelTimeInSeconds": 1671,
      "distanceInMeters": 9697
    },
    {
      "pointIndex": 372,
      "travelTimeInSeconds": 1685,
      "distanceInMeters": 9710
    },
    {
      "pointIndex": 390,
      "travelTimeInSeconds": 1735,
      "distanceInMeters": 10079
    },
    {
      "pointIndex": 393,
      "travelTimeInSeconds": 1744,
      "distanceInMeters": 10098
    },
    {
      "pointIndex": 401,
      "travelTimeInSeconds": 1770,
      "distanceInMeters": 10253
    },
    {
      "pointIndex": 407,
      "travelTimeInSeconds": 1789,
      "distanceInMeters": 10286
    },
    {
      "pointIndex": 436,
      "travelTimeInSeconds": 1862,
      "distanceInMeters": 10881
    },
    {
      "pointIndex": 444,
      "travelTimeInSeconds": 1908,
      "distanceInMeters": 11142
    },
    {
      "pointIndex": 445,
      "travelTimeInSeconds": 1928,
      "distanceInMeters": 11199
    },
    {
      "pointIndex": 446,
      "travelTimeInSeconds": 1984,
      "distanceInMeters": 11277
    },
    {
      "pointIndex": 448,
      "travelTimeInSeconds": 2010,
      "distanceInMeters": 11303
    },
    {
      "pointIndex": 456,
      "travelTimeInSeconds": 2041,
      "distanceInMeters": 11409
    },
    {
      "pointIndex": 461,
      "travelTimeInSeconds": 2068,
      "distanceInMeters": 11461
    },
    {
      "pointIndex": 476,
      "travelTimeInSeconds": 2124,
      "distanceInMeters": 11663
    },
    {
      "pointIndex": 484,
      "travelTimeInSeconds": 2160,
      "distanceInMeters": 11886
    },
    {
      "pointIndex": 488,
      "travelTimeInSeconds": 2192,
      "distanceInMeters": 11966
    },
    {
      "pointIndex": 491,
      "travelTimeInSeconds": 2207,
      "distanceInMeters": 12041
    },
    {
      "pointIndex": 494,
      "travelTimeInSeconds": 2229,
      "distanceInMeters": 12098
    },
    {
      "pointIndex": 506,
      "travelTimeInSeconds": 2266,
      "distanceInMeters": 12323
    },
    {
      "pointIndex": 508,
      "travelTimeInSeconds": 2283,
      "distanceInMeters": 12378
    },
    {
      "pointIndex": 520,
      "travelTimeInSeconds": 2318,
      "distanceInMeters": 12573
    },
    {
      "pointIndex": 536,
      "travelTimeInSeconds": 2364,
      "distanceInMeters": 12912
    },
    {
      "pointIndex": 545,
      "travelTimeInSeconds": 2395,
      "distanceInMeters": 13219
    },
    {
      "pointIndex": 555,
      "travelTimeInSeconds": 2443,
      "distanceInMeters": 13482
    },
    {
      "pointIndex": 563,
      "travelTimeInSeconds": 2474,
      "distanceInMeters": 13625
    },
    {
      "pointIndex": 573,
      "travelTimeInSeconds": 2532,
      "distanceInMeters": 13774
    },
    {
      "pointIndex": 592,
      "travelTimeInSeconds": 2572,
      "distanceInMeters": 13965
    },
    {
      "pointIndex": 600,
      "travelTimeInSeconds": 2596,
      "distanceInMeters": 14075
    },
    {
      "pointIndex": 608,
      "travelTimeInSeconds": 2643,
      "distanceInMeters": 14423
    },
    {
      "pointIndex": 623,
      "travelTimeInSeconds": 2713,
      "distanceInMeters": 14735
    },
    {
      "pointIndex": 638,
      "travelTimeInSeconds": 2774,
      "distanceInMeters": 14946
    },
    {
      "pointIndex": 641,
      "travelTimeInSeconds": 2805,
      "distanceInMeters": 15006
    },
    {
      "pointIndex": 646,
      "travelTimeInSeconds": 2837,
      "distanceInMeters": 15121
    },
    {
      "pointIndex": 651,
      "travelTimeInSeconds": 2861,
      "distanceInMeters": 15180
    },
    {
      "pointIndex": 659,
      "travelTimeInSeconds": 2888,
      "distanceInMeters": 15366
    },
    {
      "pointIndex": 662,
      "travelTimeInSeconds": 2929,
      "distanceInMeters": 15428
    },
    {
      "pointIndex": 670,
      "travelTimeInSeconds": 2948,
      "distanceInMeters": 15517
    },
    {
      "pointIndex": 674,
      "travelTimeInSeconds": 2978,
      "distanceInMeters": 15670
    },
    {
      "pointIndex": 675,
      "travelTimeInSeconds": 2992,
      "distanceInMeters": 15682
    },
    {
      "pointIndex": 686,
      "travelTimeInSeconds": 3034,
      "distanceInMeters": 15869
    },
    {
      "pointIndex": 692,
      "travelTimeInSeconds": 3054,
      "distanceInMeters": 15974
    },
    {
      "pointIndex": 695,
      "travelTimeInSeconds": 3092,
      "distanceInMeters": 16045
    },
    {
      "pointIndex": 702,
      "travelTimeInSeconds": 3119,
      "distanceInMeters": 16231
    },
    {
      "pointIndex": 703,
      "travelTimeInSeconds": 3143,
      "distanceInMeters": 16302
    },
    {
      "pointIndex": 704,
      "travelTimeInSeconds": 3156,
      "distanceInMeters": 16319
    },
    {
      "pointIndex": 710,
      "travelTimeInSeconds": 3194,
      "distanceInMeters": 16477
    },
    {
      "pointIndex": 715,
      "travelTimeInSeconds": 3247,
      "distanceInMeters": 16607
    },
    {
      "pointIndex": 721,
      "travelTimeInSeconds": 3284,
      "distanceInMeters": 16656
    }
  ]
};

var longRoute = {
  "summary": {
    "lengthInMeters": 18575,
    "travelTimeInSeconds": 3376,
    "trafficDelayInSeconds": 0,
    "trafficLengthInMeters": 0,
    "departureTime": "2024-01-24T12:36:53Z",
    "arrivalTime": "2024-01-24T13:33:09Z",
    "deviationDistance": 1865,
    "deviationTime": 402,
    "deviationPoint": {
      "latitude": 51.561622,
      "longitude": -0.255872
    }
  },
  "legs": [
    {
      "summary": {
        "lengthInMeters": 18575,
        "travelTimeInSeconds": 3376,
        "trafficDelayInSeconds": 0,
        "trafficLengthInMeters": 0,
        "departureTime": "2024-01-24T12:36:53Z",
        "arrivalTime": "2024-01-24T13:33:09Z"
      },
      "points": [
        {
          "latitude": 51.5656078,
          "longitude": -0.2789953
        },
        {
          "latitude": 51.5659538,
          "longitude": -0.2788666
        },
        {
          "latitude": 51.5657204,
          "longitude": -0.2769542
        },
        {
          "latitude": 51.5654522,
          "longitude": -0.2772546
        },
        {
          "latitude": 51.56542,
          "longitude": -0.2768227
        },
        {
          "latitude": 51.5654093,
          "longitude": -0.2766404
        },
        {
          "latitude": 51.5654334,
          "longitude": -0.2765277
        },
        {
          "latitude": 51.5654388,
          "longitude": -0.2764714
        },
        {
          "latitude": 51.5654495,
          "longitude": -0.2763775
        },
        {
          "latitude": 51.5654629,
          "longitude": -0.2758491
        },
        {
          "latitude": 51.565479,
          "longitude": -0.2752858
        },
        {
          "latitude": 51.5654844,
          "longitude": -0.2750257
        },
        {
          "latitude": 51.5654898,
          "longitude": -0.2748433
        },
        {
          "latitude": 51.5654951,
          "longitude": -0.2745402
        },
        {
          "latitude": 51.5655059,
          "longitude": -0.2739447
        },
        {
          "latitude": 51.5655032,
          "longitude": -0.273816
        },
        {
          "latitude": 51.5654817,
          "longitude": -0.2736443
        },
        {
          "latitude": 51.5654898,
          "longitude": -0.2728504
        },
        {
          "latitude": 51.5654844,
          "longitude": -0.2727753
        },
        {
          "latitude": 51.5654629,
          "longitude": -0.272212
        },
        {
          "latitude": 51.5654442,
          "longitude": -0.2717587
        },
        {
          "latitude": 51.5654361,
          "longitude": -0.2715093
        },
        {
          "latitude": 51.5654281,
          "longitude": -0.2713537
        },
        {
          "latitude": 51.5654334,
          "longitude": -0.2712813
        },
        {
          "latitude": 51.5654495,
          "longitude": -0.2710614
        },
        {
          "latitude": 51.5654737,
          "longitude": -0.2707019
        },
        {
          "latitude": 51.565538,
          "longitude": -0.2702701
        },
        {
          "latitude": 51.5655649,
          "longitude": -0.2701065
        },
        {
          "latitude": 51.5657473,
          "longitude": -0.2693394
        },
        {
          "latitude": 51.565817,
          "longitude": -0.269047
        },
        {
          "latitude": 51.5658921,
          "longitude": -0.2687278
        },
        {
          "latitude": 51.5659243,
          "longitude": -0.2685079
        },
        {
          "latitude": 51.5659189,
          "longitude": -0.2682209
        },
        {
          "latitude": 51.5659136,
          "longitude": -0.2679339
        },
        {
          "latitude": 51.5657607,
          "longitude": -0.2667966
        },
        {
          "latitude": 51.565758,
          "longitude": -0.266692
        },
        {
          "latitude": 51.5657875,
          "longitude": -0.2664748
        },
        {
          "latitude": 51.5657982,
          "longitude": -0.2658337
        },
        {
          "latitude": 51.5658116,
          "longitude": -0.2656943
        },
        {
          "latitude": 51.5658197,
          "longitude": -0.2655977
        },
        {
          "latitude": 51.5658411,
          "longitude": -0.2655762
        },
        {
          "latitude": 51.5658492,
          "longitude": -0.2655467
        },
        {
          "latitude": 51.5658519,
          "longitude": -0.2655146
        },
        {
          "latitude": 51.5658411,
          "longitude": -0.2654797
        },
        {
          "latitude": 51.5658304,
          "longitude": -0.2654448
        },
        {
          "latitude": 51.565817,
          "longitude": -0.2654314
        },
        {
          "latitude": 51.5657955,
          "longitude": -0.2654153
        },
        {
          "latitude": 51.5657285,
          "longitude": -0.2652544
        },
        {
          "latitude": 51.5657097,
          "longitude": -0.2652115
        },
        {
          "latitude": 51.5656158,
          "longitude": -0.2650908
        },
        {
          "latitude": 51.5655461,
          "longitude": -0.2649432
        },
        {
          "latitude": 51.5653181,
          "longitude": -0.2644604
        },
        {
          "latitude": 51.5650123,
          "longitude": -0.2638033
        },
        {
          "latitude": 51.5649533,
          "longitude": -0.2636719
        },
        {
          "latitude": 51.5647978,
          "longitude": -0.2633393
        },
        {
          "latitude": 51.5645108,
          "longitude": -0.2626875
        },
        {
          "latitude": 51.5642318,
          "longitude": -0.2620625
        },
        {
          "latitude": 51.563926,
          "longitude": -0.2613544
        },
        {
          "latitude": 51.5638912,
          "longitude": -0.2612713
        },
        {
          "latitude": 51.5637249,
          "longitude": -0.2608851
        },
        {
          "latitude": 51.5635532,
          "longitude": -0.2604854
        },
        {
          "latitude": 51.5635318,
          "longitude": -0.2604291
        },
        {
          "latitude": 51.5634942,
          "longitude": -0.2603459
        },
        {
          "latitude": 51.5634969,
          "longitude": -0.2602789
        },
        {
          "latitude": 51.5633655,
          "longitude": -0.2599731
        },
        {
          "latitude": 51.5632126,
          "longitude": -0.2596244
        },
        {
          "latitude": 51.5630946,
          "longitude": -0.2593508
        },
        {
          "latitude": 51.5630302,
          "longitude": -0.2592972
        },
        {
          "latitude": 51.5629953,
          "longitude": -0.2592167
        },
        {
          "latitude": 51.5628532,
          "longitude": -0.2588707
        },
        {
          "latitude": 51.5626574,
          "longitude": -0.2583718
        },
        {
          "latitude": 51.5626064,
          "longitude": -0.2582189
        },
        {
          "latitude": 51.5626037,
          "longitude": -0.2581358
        },
        {
          "latitude": 51.562483,
          "longitude": -0.2578247
        },
        {
          "latitude": 51.5623087,
          "longitude": -0.2574196
        },
        {
          "latitude": 51.5620592,
          "longitude": -0.2568644
        },
        {
          "latitude": 51.561968,
          "longitude": -0.256674
        },
        {
          "latitude": 51.5618366,
          "longitude": -0.2563521
        },
        {
          "latitude": 51.5616891,
          "longitude": -0.2560222
        },
        {
          "latitude": 51.561622,
          "longitude": -0.255872
        },
        {
          "latitude": 51.5614316,
          "longitude": -0.2553892
        },
        {
          "latitude": 51.5609649,
          "longitude": -0.2541903
        },
        {
          "latitude": 51.5608951,
          "longitude": -0.2540374
        },
        {
          "latitude": 51.5607557,
          "longitude": -0.253737
        },
        {
          "latitude": 51.5606993,
          "longitude": -0.2535304
        },
        {
          "latitude": 51.5606859,
          "longitude": -0.2534339
        },
        {
          "latitude": 51.5606913,
          "longitude": -0.2533481
        },
        {
          "latitude": 51.5607423,
          "longitude": -0.2531576
        },
        {
          "latitude": 51.5608495,
          "longitude": -0.2531067
        },
        {
          "latitude": 51.5612733,
          "longitude": -0.2529082
        },
        {
          "latitude": 51.5614101,
          "longitude": -0.2528438
        },
        {
          "latitude": 51.5618446,
          "longitude": -0.2526426
        },
        {
          "latitude": 51.5622443,
          "longitude": -0.2524629
        },
        {
          "latitude": 51.5629336,
          "longitude": -0.252125
        },
        {
          "latitude": 51.56299,
          "longitude": -0.2520901
        },
        {
          "latitude": 51.5630355,
          "longitude": -0.2520686
        },
        {
          "latitude": 51.5636015,
          "longitude": -0.251736
        },
        {
          "latitude": 51.5641621,
          "longitude": -0.2514035
        },
        {
          "latitude": 51.5645805,
          "longitude": -0.2510279
        },
        {
          "latitude": 51.5649614,
          "longitude": -0.2505907
        },
        {
          "latitude": 51.5650633,
          "longitude": -0.2504727
        },
        {
          "latitude": 51.5651143,
          "longitude": -0.2504003
        },
        {
          "latitude": 51.5653825,
          "longitude": -0.2500114
        },
        {
          "latitude": 51.5655407,
          "longitude": -0.249778
        },
        {
          "latitude": 51.5656427,
          "longitude": -0.2495742
        },
        {
          "latitude": 51.5658277,
          "longitude": -0.249204
        },
        {
          "latitude": 51.5658492,
          "longitude": -0.2491531
        },
        {
          "latitude": 51.5660289,
          "longitude": -0.2487212
        },
        {
          "latitude": 51.566155,
          "longitude": -0.2483457
        },
        {
          "latitude": 51.5664232,
          "longitude": -0.2475679
        },
        {
          "latitude": 51.5671608,
          "longitude": -0.2453443
        },
        {
          "latitude": 51.5675497,
          "longitude": -0.2441695
        },
        {
          "latitude": 51.567724,
          "longitude": -0.2436626
        },
        {
          "latitude": 51.5680486,
          "longitude": -0.2428204
        },
        {
          "latitude": 51.5682444,
          "longitude": -0.2423483
        },
        {
          "latitude": 51.5682659,
          "longitude": -0.2422974
        },
        {
          "latitude": 51.5683088,
          "longitude": -0.2421981
        },
        {
          "latitude": 51.5685368,
          "longitude": -0.2416992
        },
        {
          "latitude": 51.5686414,
          "longitude": -0.2414712
        },
        {
          "latitude": 51.5687165,
          "longitude": -0.2413103
        },
        {
          "latitude": 51.5688345,
          "longitude": -0.241034
        },
        {
          "latitude": 51.5691054,
          "longitude": -0.2403662
        },
        {
          "latitude": 51.5691939,
          "longitude": -0.2401382
        },
        {
          "latitude": 51.5693066,
          "longitude": -0.2398244
        },
        {
          "latitude": 51.5695077,
          "longitude": -0.2391806
        },
        {
          "latitude": 51.5696231,
          "longitude": -0.2387863
        },
        {
          "latitude": 51.5697411,
          "longitude": -0.2383465
        },
        {
          "latitude": 51.5698242,
          "longitude": -0.237979
        },
        {
          "latitude": 51.5699181,
          "longitude": -0.2375498
        },
        {
          "latitude": 51.5700468,
          "longitude": -0.2368444
        },
        {
          "latitude": 51.570181,
          "longitude": -0.2359271
        },
        {
          "latitude": 51.570358,
          "longitude": -0.2345404
        },
        {
          "latitude": 51.5704706,
          "longitude": -0.2338859
        },
        {
          "latitude": 51.5705779,
          "longitude": -0.2334729
        },
        {
          "latitude": 51.5706745,
          "longitude": -0.2331617
        },
        {
          "latitude": 51.5709132,
          "longitude": -0.2325046
        },
        {
          "latitude": 51.57094,
          "longitude": -0.2324188
        },
        {
          "latitude": 51.5709588,
          "longitude": -0.2323732
        },
        {
          "latitude": 51.5710044,
          "longitude": -0.2322766
        },
        {
          "latitude": 51.5710339,
          "longitude": -0.2322096
        },
        {
          "latitude": 51.5710929,
          "longitude": -0.2320674
        },
        {
          "latitude": 51.5711519,
          "longitude": -0.2319199
        },
        {
          "latitude": 51.5713209,
          "longitude": -0.23148
        },
        {
          "latitude": 51.5713558,
          "longitude": -0.2313861
        },
        {
          "latitude": 51.5714282,
          "longitude": -0.2312198
        },
        {
          "latitude": 51.5714979,
          "longitude": -0.2310267
        },
        {
          "latitude": 51.5716213,
          "longitude": -0.2307102
        },
        {
          "latitude": 51.571683,
          "longitude": -0.2305573
        },
        {
          "latitude": 51.5717822,
          "longitude": -0.2302891
        },
        {
          "latitude": 51.5718976,
          "longitude": -0.2299833
        },
        {
          "latitude": 51.5719458,
          "longitude": -0.2298653
        },
        {
          "latitude": 51.5722167,
          "longitude": -0.2291679
        },
        {
          "latitude": 51.5725037,
          "longitude": -0.2281192
        },
        {
          "latitude": 51.5725172,
          "longitude": -0.2280548
        },
        {
          "latitude": 51.5726593,
          "longitude": -0.2274781
        },
        {
          "latitude": 51.5728498,
          "longitude": -0.2265608
        },
        {
          "latitude": 51.5729704,
          "longitude": -0.22585
        },
        {
          "latitude": 51.5730885,
          "longitude": -0.2251473
        },
        {
          "latitude": 51.573287,
          "longitude": -0.2239242
        },
        {
          "latitude": 51.5733942,
          "longitude": -0.2234629
        },
        {
          "latitude": 51.5735766,
          "longitude": -0.2229157
        },
        {
          "latitude": 51.5737751,
          "longitude": -0.2224302
        },
        {
          "latitude": 51.5738985,
          "longitude": -0.2221593
        },
        {
          "latitude": 51.5742391,
          "longitude": -0.2216068
        },
        {
          "latitude": 51.5744108,
          "longitude": -0.2213654
        },
        {
          "latitude": 51.5746978,
          "longitude": -0.2210274
        },
        {
          "latitude": 51.5747863,
          "longitude": -0.2209309
        },
        {
          "latitude": 51.5751779,
          "longitude": -0.2205822
        },
        {
          "latitude": 51.575481,
          "longitude": -0.2202657
        },
        {
          "latitude": 51.5755427,
          "longitude": -0.2202603
        },
        {
          "latitude": 51.5759236,
          "longitude": -0.2199304
        },
        {
          "latitude": 51.5759584,
          "longitude": -0.2198902
        },
        {
          "latitude": 51.5760791,
          "longitude": -0.2197561
        },
        {
          "latitude": 51.5761006,
          "longitude": -0.2197266
        },
        {
          "latitude": 51.5763527,
          "longitude": -0.2194074
        },
        {
          "latitude": 51.5764439,
          "longitude": -0.219276
        },
        {
          "latitude": 51.5765807,
          "longitude": -0.2190775
        },
        {
          "latitude": 51.5766692,
          "longitude": -0.2189997
        },
        {
          "latitude": 51.5768087,
          "longitude": -0.2189541
        },
        {
          "latitude": 51.5768489,
          "longitude": -0.2189809
        },
        {
          "latitude": 51.5768918,
          "longitude": -0.2189943
        },
        {
          "latitude": 51.5769106,
          "longitude": -0.2189943
        },
        {
          "latitude": 51.5769723,
          "longitude": -0.2189782
        },
        {
          "latitude": 51.5770099,
          "longitude": -0.2189595
        },
        {
          "latitude": 51.5770715,
          "longitude": -0.2188843
        },
        {
          "latitude": 51.5771011,
          "longitude": -0.218828
        },
        {
          "latitude": 51.5771413,
          "longitude": -0.2186778
        },
        {
          "latitude": 51.5771386,
          "longitude": -0.2185786
        },
        {
          "latitude": 51.5771198,
          "longitude": -0.2185357
        },
        {
          "latitude": 51.5769723,
          "longitude": -0.218195
        },
        {
          "latitude": 51.5769079,
          "longitude": -0.2180636
        },
        {
          "latitude": 51.5768462,
          "longitude": -0.2179134
        },
        {
          "latitude": 51.5767658,
          "longitude": -0.2177659
        },
        {
          "latitude": 51.5767443,
          "longitude": -0.2177525
        },
        {
          "latitude": 51.5767255,
          "longitude": -0.2177498
        },
        {
          "latitude": 51.5766746,
          "longitude": -0.2176344
        },
        {
          "latitude": 51.5766478,
          "longitude": -0.2175808
        },
        {
          "latitude": 51.5765914,
          "longitude": -0.2174735
        },
        {
          "latitude": 51.5763178,
          "longitude": -0.2164811
        },
        {
          "latitude": 51.5762079,
          "longitude": -0.2161404
        },
        {
          "latitude": 51.5761837,
          "longitude": -0.2160439
        },
        {
          "latitude": 51.5759745,
          "longitude": -0.2156818
        },
        {
          "latitude": 51.5758914,
          "longitude": -0.2155825
        },
        {
          "latitude": 51.5757868,
          "longitude": -0.215435
        },
        {
          "latitude": 51.5756848,
          "longitude": -0.2152929
        },
        {
          "latitude": 51.5756232,
          "longitude": -0.2152017
        },
        {
          "latitude": 51.5751055,
          "longitude": -0.2143568
        },
        {
          "latitude": 51.5749767,
          "longitude": -0.2141449
        },
        {
          "latitude": 51.5748641,
          "longitude": -0.213984
        },
        {
          "latitude": 51.5747434,
          "longitude": -0.2139115
        },
        {
          "latitude": 51.5747112,
          "longitude": -0.213882
        },
        {
          "latitude": 51.5746361,
          "longitude": -0.2137801
        },
        {
          "latitude": 51.574569,
          "longitude": -0.2136943
        },
        {
          "latitude": 51.5743545,
          "longitude": -0.2134046
        },
        {
          "latitude": 51.5743169,
          "longitude": -0.2133644
        },
        {
          "latitude": 51.5734023,
          "longitude": -0.2123371
        },
        {
          "latitude": 51.5733352,
          "longitude": -0.2122647
        },
        {
          "latitude": 51.5722409,
          "longitude": -0.2110308
        },
        {
          "latitude": 51.5717018,
          "longitude": -0.210422
        },
        {
          "latitude": 51.5713799,
          "longitude": -0.2100572
        },
        {
          "latitude": 51.5705216,
          "longitude": -0.2091694
        },
        {
          "latitude": 51.5704653,
          "longitude": -0.2091157
        },
        {
          "latitude": 51.5703285,
          "longitude": -0.208987
        },
        {
          "latitude": 51.5699932,
          "longitude": -0.2086678
        },
        {
          "latitude": 51.5698242,
          "longitude": -0.208531
        },
        {
          "latitude": 51.5695855,
          "longitude": -0.2083379
        },
        {
          "latitude": 51.5694085,
          "longitude": -0.2081931
        },
        {
          "latitude": 51.5688077,
          "longitude": -0.2077076
        },
        {
          "latitude": 51.5686601,
          "longitude": -0.207603
        },
        {
          "latitude": 51.5685609,
          "longitude": -0.2075359
        },
        {
          "latitude": 51.5678635,
          "longitude": -0.2070504
        },
        {
          "latitude": 51.5676248,
          "longitude": -0.206919
        },
        {
          "latitude": 51.5675148,
          "longitude": -0.20686
        },
        {
          "latitude": 51.5673941,
          "longitude": -0.2067956
        },
        {
          "latitude": 51.5673056,
          "longitude": -0.2067393
        },
        {
          "latitude": 51.5672332,
          "longitude": -0.2066883
        },
        {
          "latitude": 51.5668014,
          "longitude": -0.2064443
        },
        {
          "latitude": 51.5666834,
          "longitude": -0.2063826
        },
        {
          "latitude": 51.5666485,
          "longitude": -0.20636379999999999
        },
        {
          "latitude": 51.5660316,
          "longitude": -0.2060392
        },
        {
          "latitude": 51.5645859,
          "longitude": -0.2052855
        },
        {
          "latitude": 51.5641889,
          "longitude": -0.205079
        },
        {
          "latitude": 51.5640038,
          "longitude": -0.2049825
        },
        {
          "latitude": 51.5637195,
          "longitude": -0.2048323
        },
        {
          "latitude": 51.5630302,
          "longitude": -0.2044567
        },
        {
          "latitude": 51.5626332,
          "longitude": -0.2042314
        },
        {
          "latitude": 51.5619788,
          "longitude": -0.203864
        },
        {
          "latitude": 51.5618822,
          "longitude": -0.2038103
        },
        {
          "latitude": 51.561614,
          "longitude": -0.2035904
        },
        {
          "latitude": 51.5614825,
          "longitude": -0.2034804
        },
        {
          "latitude": 51.5613323,
          "longitude": -0.2032954
        },
        {
          "latitude": 51.5611714,
          "longitude": -0.203062
        },
        {
          "latitude": 51.5610909,
          "longitude": -0.2029252
        },
        {
          "latitude": 51.5610507,
          "longitude": -0.2028555
        },
        {
          "latitude": 51.5609139,
          "longitude": -0.2025604
        },
        {
          "latitude": 51.5608603,
          "longitude": -0.2024317
        },
        {
          "latitude": 51.5604526,
          "longitude": -0.2011469
        },
        {
          "latitude": 51.5601656,
          "longitude": -0.2002296
        },
        {
          "latitude": 51.5599859,
          "longitude": -0.1996717
        },
        {
          "latitude": 51.5597284,
          "longitude": -0.1988214
        },
        {
          "latitude": 51.5596747,
          "longitude": -0.1986337
        },
        {
          "latitude": 51.5595889,
          "longitude": -0.1982528
        },
        {
          "latitude": 51.559546,
          "longitude": -0.1979497
        },
        {
          "latitude": 51.5595379,
          "longitude": -0.1978451
        },
        {
          "latitude": 51.5595326,
          "longitude": -0.197762
        },
        {
          "latitude": 51.5595326,
          "longitude": -0.1977539
        },
        {
          "latitude": 51.5595272,
          "longitude": -0.1976922
        },
        {
          "latitude": 51.5595299,
          "longitude": -0.1969922
        },
        {
          "latitude": 51.5595433,
          "longitude": -0.1968768
        },
        {
          "latitude": 51.559428,
          "longitude": -0.1968393
        },
        {
          "latitude": 51.5592107,
          "longitude": -0.1967213
        },
        {
          "latitude": 51.5591276,
          "longitude": -0.1966596
        },
        {
          "latitude": 51.5590444,
          "longitude": -0.1966006
        },
        {
          "latitude": 51.5588835,
          "longitude": -0.196445
        },
        {
          "latitude": 51.5585965,
          "longitude": -0.1961607
        },
        {
          "latitude": 51.5584168,
          "longitude": -0.1960239
        },
        {
          "latitude": 51.5580976,
          "longitude": -0.1958442
        },
        {
          "latitude": 51.5578052,
          "longitude": -0.1956993
        },
        {
          "latitude": 51.5576953,
          "longitude": -0.1956511
        },
        {
          "latitude": 51.5573788,
          "longitude": -0.1954982
        },
        {
          "latitude": 51.5570623,
          "longitude": -0.1953185
        },
        {
          "latitude": 51.5568772,
          "longitude": -0.1951736
        },
        {
          "latitude": 51.556609,
          "longitude": -0.1949
        },
        {
          "latitude": 51.5562549,
          "longitude": -0.1944628
        },
        {
          "latitude": 51.5560994,
          "longitude": -0.1942536
        },
        {
          "latitude": 51.5556407,
          "longitude": -0.1935053
        },
        {
          "latitude": 51.5554583,
          "longitude": -0.1931834
        },
        {
          "latitude": 51.5550962,
          "longitude": -0.1925236
        },
        {
          "latitude": 51.5548521,
          "longitude": -0.192073
        },
        {
          "latitude": 51.5546295,
          "longitude": -0.1916867
        },
        {
          "latitude": 51.5544525,
          "longitude": -0.1913407
        },
        {
          "latitude": 51.5542647,
          "longitude": -0.1910001
        },
        {
          "latitude": 51.5541011,
          "longitude": -0.1907158
        },
        {
          "latitude": 51.5540314,
          "longitude": -0.1906809
        },
        {
          "latitude": 51.5534252,
          "longitude": -0.1896375
        },
        {
          "latitude": 51.5532348,
          "longitude": -0.1892862
        },
        {
          "latitude": 51.5530819,
          "longitude": -0.1890045
        },
        {
          "latitude": 51.5530336,
          "longitude": -0.188916
        },
        {
          "latitude": 51.5529424,
          "longitude": -0.1887363
        },
        {
          "latitude": 51.5528888,
          "longitude": -0.1886237
        },
        {
          "latitude": 51.5527305,
          "longitude": -0.1881918
        },
        {
          "latitude": 51.5527037,
          "longitude": -0.1881087
        },
        {
          "latitude": 51.5526205,
          "longitude": -0.1877332
        },
        {
          "latitude": 51.5525374,
          "longitude": -0.1872638
        },
        {
          "latitude": 51.5524945,
          "longitude": -0.1869527
        },
        {
          "latitude": 51.5524381,
          "longitude": -0.1866308
        },
        {
          "latitude": 51.5524033,
          "longitude": -0.1864913
        },
        {
          "latitude": 51.5523496,
          "longitude": -0.1863089
        },
        {
          "latitude": 51.5522423,
          "longitude": -0.1859871
        },
        {
          "latitude": 51.5521216,
          "longitude": -0.1857376
        },
        {
          "latitude": 51.5520734,
          "longitude": -0.1855552
        },
        {
          "latitude": 51.5519822,
          "longitude": -0.1854157
        },
        {
          "latitude": 51.5518776,
          "longitude": -0.1852334
        },
        {
          "latitude": 51.551773,
          "longitude": -0.1851958
        },
        {
          "latitude": 51.5512499,
          "longitude": -0.184359
        },
        {
          "latitude": 51.5511373,
          "longitude": -0.1841792
        },
        {
          "latitude": 51.5509844,
          "longitude": -0.1839352
        },
        {
          "latitude": 51.5509066,
          "longitude": -0.1838118
        },
        {
          "latitude": 51.5508771,
          "longitude": -0.1837689
        },
        {
          "latitude": 51.5508208,
          "longitude": -0.183683
        },
        {
          "latitude": 51.5507698,
          "longitude": -0.1835972
        },
        {
          "latitude": 51.5504909,
          "longitude": -0.1831493
        },
        {
          "latitude": 51.5503836,
          "longitude": -0.1829696
        },
        {
          "latitude": 51.5503192,
          "longitude": -0.1828676
        },
        {
          "latitude": 51.5499222,
          "longitude": -0.182232
        },
        {
          "latitude": 51.5498954,
          "longitude": -0.182189
        },
        {
          "latitude": 51.5498874,
          "longitude": -0.1821166
        },
        {
          "latitude": 51.5497881,
          "longitude": -0.1819262
        },
        {
          "latitude": 51.5496567,
          "longitude": -0.1817492
        },
        {
          "latitude": 51.5495816,
          "longitude": -0.1816633
        },
        {
          "latitude": 51.5495414,
          "longitude": -0.1816177
        },
        {
          "latitude": 51.549485,
          "longitude": -0.1815668
        },
        {
          "latitude": 51.549426,
          "longitude": -0.1815239
        },
        {
          "latitude": 51.5493214,
          "longitude": -0.1814649
        },
        {
          "latitude": 51.5488333,
          "longitude": -0.1811752
        },
        {
          "latitude": 51.5487045,
          "longitude": -0.1810947
        },
        {
          "latitude": 51.5486723,
          "longitude": -0.1810706
        },
        {
          "latitude": 51.5485945,
          "longitude": -0.1810116
        },
        {
          "latitude": 51.5485597,
          "longitude": -0.1809821
        },
        {
          "latitude": 51.5483585,
          "longitude": -0.1808104
        },
        {
          "latitude": 51.548101,
          "longitude": -0.1805851
        },
        {
          "latitude": 51.5480179,
          "longitude": -0.1805046
        },
        {
          "latitude": 51.5478516,
          "longitude": -0.1803491
        },
        {
          "latitude": 51.547814,
          "longitude": -0.1803142
        },
        {
          "latitude": 51.5476906,
          "longitude": -0.1802015
        },
        {
          "latitude": 51.5475029,
          "longitude": -0.1800245
        },
        {
          "latitude": 51.5474734,
          "longitude": -0.1799977
        },
        {
          "latitude": 51.5474144,
          "longitude": -0.1799414
        },
        {
          "latitude": 51.5472159,
          "longitude": -0.179759
        },
        {
          "latitude": 51.5471622,
          "longitude": -0.1797107
        },
        {
          "latitude": 51.5471408,
          "longitude": -0.1796812
        },
        {
          "latitude": 51.5470845,
          "longitude": -0.1796356
        },
        {
          "latitude": 51.5470389,
          "longitude": -0.1795819
        },
        {
          "latitude": 51.5469638,
          "longitude": -0.1795176
        },
        {
          "latitude": 51.5468082,
          "longitude": -0.1793835
        },
        {
          "latitude": 51.546599,
          "longitude": -0.179193
        },
        {
          "latitude": 51.5464944,
          "longitude": -0.1790965
        },
        {
          "latitude": 51.5464032,
          "longitude": -0.1790133
        },
        {
          "latitude": 51.5459928,
          "longitude": -0.1786003
        },
        {
          "latitude": 51.5458748,
          "longitude": -0.1784581
        },
        {
          "latitude": 51.5457326,
          "longitude": -0.1782301
        },
        {
          "latitude": 51.5456656,
          "longitude": -0.1780987
        },
        {
          "latitude": 51.5455288,
          "longitude": -0.1777741
        },
        {
          "latitude": 51.5454966,
          "longitude": -0.1776937
        },
        {
          "latitude": 51.5454054,
          "longitude": -0.1774415
        },
        {
          "latitude": 51.5452605,
          "longitude": -0.1770526
        },
        {
          "latitude": 51.5449682,
          "longitude": -0.176307
        },
        {
          "latitude": 51.5448877,
          "longitude": -0.1761433
        },
        {
          "latitude": 51.5448341,
          "longitude": -0.1760414
        },
        {
          "latitude": 51.5447831,
          "longitude": -0.175969
        },
        {
          "latitude": 51.5447375,
          "longitude": -0.1759019
        },
        {
          "latitude": 51.5446919,
          "longitude": -0.1758456
        },
        {
          "latitude": 51.544641,
          "longitude": -0.1757893
        },
        {
          "latitude": 51.5446356,
          "longitude": -0.1757813
        },
        {
          "latitude": 51.5443003,
          "longitude": -0.1754111
        },
        {
          "latitude": 51.5442869,
          "longitude": -0.1754004
        },
        {
          "latitude": 51.5442359,
          "longitude": -0.1753575
        },
        {
          "latitude": 51.5440723,
          "longitude": -0.1752287
        },
        {
          "latitude": 51.5438631,
          "longitude": -0.1751134
        },
        {
          "latitude": 51.5437102,
          "longitude": -0.1749712
        },
        {
          "latitude": 51.5435976,
          "longitude": -0.1749122
        },
        {
          "latitude": 51.5434876,
          "longitude": -0.1748639
        },
        {
          "latitude": 51.5433991,
          "longitude": -0.1747862
        },
        {
          "latitude": 51.5432757,
          "longitude": -0.1746735
        },
        {
          "latitude": 51.5431389,
          "longitude": -0.174467
        },
        {
          "latitude": 51.5429619,
          "longitude": -0.1743221
        },
        {
          "latitude": 51.5428278,
          "longitude": -0.1742148
        },
        {
          "latitude": 51.5427822,
          "longitude": -0.1741692
        },
        {
          "latitude": 51.5426937,
          "longitude": -0.1740807
        },
        {
          "latitude": 51.5425569,
          "longitude": -0.1739466
        },
        {
          "latitude": 51.5424335,
          "longitude": -0.1738259
        },
        {
          "latitude": 51.5420955,
          "longitude": -0.1735201
        },
        {
          "latitude": 51.5419695,
          "longitude": -0.1735094
        },
        {
          "latitude": 51.5419051,
          "longitude": -0.1735443
        },
        {
          "latitude": 51.5418729,
          "longitude": -0.1735979
        },
        {
          "latitude": 51.5418005,
          "longitude": -0.1737884
        },
        {
          "latitude": 51.5417951,
          "longitude": -0.1738662
        },
        {
          "latitude": 51.5417576,
          "longitude": -0.1742658
        },
        {
          "latitude": 51.5417495,
          "longitude": -0.174357
        },
        {
          "latitude": 51.5417388,
          "longitude": -0.1744696
        },
        {
          "latitude": 51.5416959,
          "longitude": -0.1748666
        },
        {
          "latitude": 51.5416932,
          "longitude": -0.1749068
        },
        {
          "latitude": 51.5416932,
          "longitude": -0.1749471
        },
        {
          "latitude": 51.5416342,
          "longitude": -0.1750785
        },
        {
          "latitude": 51.541602,
          "longitude": -0.1751295
        },
        {
          "latitude": 51.5415671,
          "longitude": -0.17518039999999999
        },
        {
          "latitude": 51.5415403,
          "longitude": -0.1752099
        },
        {
          "latitude": 51.5415108,
          "longitude": -0.1752341
        },
        {
          "latitude": 51.5413767,
          "longitude": -0.1753065
        },
        {
          "latitude": 51.5411836,
          "longitude": -0.1753736
        },
        {
          "latitude": 51.5408215,
          "longitude": -0.1754701
        },
        {
          "latitude": 51.5407786,
          "longitude": -0.1754782
        },
        {
          "latitude": 51.5405828,
          "longitude": -0.1755211
        },
        {
          "latitude": 51.5404969,
          "longitude": -0.1755399
        },
        {
          "latitude": 51.5401724,
          "longitude": -0.1756069
        },
        {
          "latitude": 51.5397057,
          "longitude": -0.1757035
        },
        {
          "latitude": 51.5396038,
          "longitude": -0.1757276
        },
        {
          "latitude": 51.5395233,
          "longitude": -0.175741
        },
        {
          "latitude": 51.5394482,
          "longitude": -0.1757544
        },
        {
          "latitude": 51.5393007,
          "longitude": -0.1757813
        },
        {
          "latitude": 51.538901,
          "longitude": -0.1758617
        },
        {
          "latitude": 51.5381795,
          "longitude": -0.1759931
        },
        {
          "latitude": 51.5381125,
          "longitude": -0.1760039
        },
        {
          "latitude": 51.5379488,
          "longitude": -0.1760334
        },
        {
          "latitude": 51.5376833,
          "longitude": -0.1760763
        },
        {
          "latitude": 51.5372676,
          "longitude": -0.1761514
        },
        {
          "latitude": 51.5366265,
          "longitude": -0.1762104
        },
        {
          "latitude": 51.5364414,
          "longitude": -0.1762024
        },
        {
          "latitude": 51.5363395,
          "longitude": -0.1761729
        },
        {
          "latitude": 51.5362135,
          "longitude": -0.176138
        },
        {
          "latitude": 51.5361544,
          "longitude": -0.1761112
        },
        {
          "latitude": 51.5361089,
          "longitude": -0.176087
        },
        {
          "latitude": 51.5359774,
          "longitude": -0.1759797
        },
        {
          "latitude": 51.535736,
          "longitude": -0.1757813
        },
        {
          "latitude": 51.5357092,
          "longitude": -0.1757598
        },
        {
          "latitude": 51.5356073,
          "longitude": -0.1756793
        },
        {
          "latitude": 51.5353954,
          "longitude": -0.175446
        },
        {
          "latitude": 51.535323,
          "longitude": -0.1753709
        },
        {
          "latitude": 51.53528,
          "longitude": -0.1753601
        },
        {
          "latitude": 51.5352291,
          "longitude": -0.1753145
        },
        {
          "latitude": 51.5351486,
          "longitude": -0.1752126
        },
        {
          "latitude": 51.5350977,
          "longitude": -0.1751509
        },
        {
          "latitude": 51.5349904,
          "longitude": -0.1749954
        },
        {
          "latitude": 51.5347865,
          "longitude": -0.1747674
        },
        {
          "latitude": 51.534647,
          "longitude": -0.1745796
        },
        {
          "latitude": 51.5344808,
          "longitude": -0.1743919
        },
        {
          "latitude": 51.5343574,
          "longitude": -0.1742497
        },
        {
          "latitude": 51.5341696,
          "longitude": -0.1740378
        },
        {
          "latitude": 51.5341052,
          "longitude": -0.1739654
        },
        {
          "latitude": 51.5339658,
          "longitude": -0.1737991
        },
        {
          "latitude": 51.5338907,
          "longitude": -0.1737079
        },
        {
          "latitude": 51.5336198,
          "longitude": -0.173386
        },
        {
          "latitude": 51.5335715,
          "longitude": -0.173327
        },
        {
          "latitude": 51.5332925,
          "longitude": -0.1729381
        },
        {
          "latitude": 51.5330377,
          "longitude": -0.1726323
        },
        {
          "latitude": 51.5329224,
          "longitude": -0.1724821
        },
        {
          "latitude": 51.5327802,
          "longitude": -0.1723132
        },
        {
          "latitude": 51.5326166,
          "longitude": -0.1721066
        },
        {
          "latitude": 51.5321499,
          "longitude": -0.1715299
        },
        {
          "latitude": 51.5318039,
          "longitude": -0.1711115
        },
        {
          "latitude": 51.5314659,
          "longitude": -0.1707789
        },
        {
          "latitude": 51.5311736,
          "longitude": -0.1704007
        },
        {
          "latitude": 51.530216,
          "longitude": -0.1692393
        },
        {
          "latitude": 51.5301973,
          "longitude": -0.1691347
        },
        {
          "latitude": 51.5301704,
          "longitude": -0.1690623
        },
        {
          "latitude": 51.5301329,
          "longitude": -0.168955
        },
        {
          "latitude": 51.5301195,
          "longitude": -0.1688665
        },
        {
          "latitude": 51.5301141,
          "longitude": -0.168837
        },
        {
          "latitude": 51.5301087,
          "longitude": -0.1686546
        },
        {
          "latitude": 51.5301087,
          "longitude": -0.1685581
        },
        {
          "latitude": 51.5301141,
          "longitude": -0.1685151
        },
        {
          "latitude": 51.5301463,
          "longitude": -0.168322
        },
        {
          "latitude": 51.5301812,
          "longitude": -0.168137
        },
        {
          "latitude": 51.530216,
          "longitude": -0.1681101
        },
        {
          "latitude": 51.5302455,
          "longitude": -0.1680833
        },
        {
          "latitude": 51.530267,
          "longitude": -0.1680538
        },
        {
          "latitude": 51.5302885,
          "longitude": -0.1679948
        },
        {
          "latitude": 51.5303099,
          "longitude": -0.167909
        },
        {
          "latitude": 51.5303019,
          "longitude": -0.167748
        },
        {
          "latitude": 51.5302858,
          "longitude": -0.1676837
        },
        {
          "latitude": 51.5302643,
          "longitude": -0.1676273
        },
        {
          "latitude": 51.5302241,
          "longitude": -0.1675737
        },
        {
          "latitude": 51.5300739,
          "longitude": -0.1675388
        },
        {
          "latitude": 51.5299183,
          "longitude": -0.1674852
        },
        {
          "latitude": 51.5298486,
          "longitude": -0.1674503
        },
        {
          "latitude": 51.5297467,
          "longitude": -0.1673833
        },
        {
          "latitude": 51.5296394,
          "longitude": -0.1672786
        },
        {
          "latitude": 51.5291888,
          "longitude": -0.1667637
        },
        {
          "latitude": 51.5291244,
          "longitude": -0.1666939
        },
        {
          "latitude": 51.5290439,
          "longitude": -0.166592
        },
        {
          "latitude": 51.5289527,
          "longitude": -0.166482
        },
        {
          "latitude": 51.5288991,
          "longitude": -0.166415
        },
        {
          "latitude": 51.5288267,
          "longitude": -0.1663291
        },
        {
          "latitude": 51.5288106,
          "longitude": -0.166246
        },
        {
          "latitude": 51.5287784,
          "longitude": -0.1662084
        },
        {
          "latitude": 51.5286416,
          "longitude": -0.1660502
        },
        {
          "latitude": 51.5284726,
          "longitude": -0.1658383
        },
        {
          "latitude": 51.5284216,
          "longitude": -0.1657981
        },
        {
          "latitude": 51.5283626,
          "longitude": -0.1657042
        },
        {
          "latitude": 51.528258,
          "longitude": -0.1655728
        },
        {
          "latitude": 51.5281588,
          "longitude": -0.1654521
        },
        {
          "latitude": 51.5279844,
          "longitude": -0.1652429
        },
        {
          "latitude": 51.5279067,
          "longitude": -0.1651382
        },
        {
          "latitude": 51.5274265,
          "longitude": -0.1645267
        },
        {
          "latitude": 51.5273756,
          "longitude": -0.1644328
        },
        {
          "latitude": 51.5273005,
          "longitude": -0.1643389
        },
        {
          "latitude": 51.5272683,
          "longitude": -0.1642933
        },
        {
          "latitude": 51.5267962,
          "longitude": -0.1635316
        },
        {
          "latitude": 51.5267587,
          "longitude": -0.1634726
        },
        {
          "latitude": 51.526638,
          "longitude": -0.1632366
        },
        {
          "latitude": 51.5265602,
          "longitude": -0.1630971
        },
        {
          "latitude": 51.5264878,
          "longitude": -0.1629657
        },
        {
          "latitude": 51.5263885,
          "longitude": -0.1627082
        },
        {
          "latitude": 51.5262893,
          "longitude": -0.162448
        },
        {
          "latitude": 51.5259808,
          "longitude": -0.1617908
        },
        {
          "latitude": 51.5259191,
          "longitude": -0.1616862
        },
        {
          "latitude": 51.5258789,
          "longitude": -0.1616406
        },
        {
          "latitude": 51.5258709,
          "longitude": -0.1616326
        },
        {
          "latitude": 51.5258628,
          "longitude": -0.1616031
        },
        {
          "latitude": 51.5257555,
          "longitude": -0.1614797
        },
        {
          "latitude": 51.5257367,
          "longitude": -0.1614636
        },
        {
          "latitude": 51.525667,
          "longitude": -0.1614073
        },
        {
          "latitude": 51.5256295,
          "longitude": -0.1613858
        },
        {
          "latitude": 51.5255517,
          "longitude": -0.1613671
        },
        {
          "latitude": 51.5255302,
          "longitude": -0.1613832
        },
        {
          "latitude": 51.5254658,
          "longitude": -0.1613617
        },
        {
          "latitude": 51.525254,
          "longitude": -0.1612625
        },
        {
          "latitude": 51.525144,
          "longitude": -0.1612142
        },
        {
          "latitude": 51.5246397,
          "longitude": -0.1609862
        },
        {
          "latitude": 51.5244171,
          "longitude": -0.1608843
        },
        {
          "latitude": 51.523599,
          "longitude": -0.1605088
        },
        {
          "latitude": 51.5231726,
          "longitude": -0.160321
        },
        {
          "latitude": 51.5230277,
          "longitude": -0.1602566
        },
        {
          "latitude": 51.5228346,
          "longitude": -0.1601681
        },
        {
          "latitude": 51.5227005,
          "longitude": -0.1601118
        },
        {
          "latitude": 51.5226522,
          "longitude": -0.1600876
        },
        {
          "latitude": 51.5225771,
          "longitude": -0.1600528
        },
        {
          "latitude": 51.5224671,
          "longitude": -0.1600018
        },
        {
          "latitude": 51.5222499,
          "longitude": -0.1598865
        },
        {
          "latitude": 51.5220004,
          "longitude": -0.1597631
        },
        {
          "latitude": 51.52192,
          "longitude": -0.1597255
        },
        {
          "latitude": 51.5218207,
          "longitude": -0.1596826
        },
        {
          "latitude": 51.5216947,
          "longitude": -0.1596183
        },
        {
          "latitude": 51.5216115,
          "longitude": -0.1595807
        },
        {
          "latitude": 51.5213057,
          "longitude": -0.1594707
        },
        {
          "latitude": 51.5211797,
          "longitude": -0.1594117
        },
        {
          "latitude": 51.5211287,
          "longitude": -0.1593876
        },
        {
          "latitude": 51.5205252,
          "longitude": -0.159106
        },
        {
          "latitude": 51.5203053,
          "longitude": -0.159004
        },
        {
          "latitude": 51.5199244,
          "longitude": -0.1588297
        },
        {
          "latitude": 51.5196428,
          "longitude": -0.1586983
        },
        {
          "latitude": 51.5192807,
          "longitude": -0.158532
        },
        {
          "latitude": 51.5191492,
          "longitude": -0.1584703
        },
        {
          "latitude": 51.5190956,
          "longitude": -0.1584461
        },
        {
          "latitude": 51.5189132,
          "longitude": -0.1583657
        },
        {
          "latitude": 51.5177733,
          "longitude": -0.15784
        },
        {
          "latitude": 51.5173656,
          "longitude": -0.1576549
        },
        {
          "latitude": 51.5171644,
          "longitude": -0.1575637
        },
        {
          "latitude": 51.5171269,
          "longitude": -0.1575449
        },
        {
          "latitude": 51.5170866,
          "longitude": -0.1575288
        },
        {
          "latitude": 51.5170437,
          "longitude": -0.1575074
        },
        {
          "latitude": 51.5170088,
          "longitude": -0.1574913
        },
        {
          "latitude": 51.5167433,
          "longitude": -0.1573732
        },
        {
          "latitude": 51.5165904,
          "longitude": -0.1573035
        },
        {
          "latitude": 51.5163141,
          "longitude": -0.1571748
        },
        {
          "latitude": 51.5159816,
          "longitude": -0.1570487
        },
        {
          "latitude": 51.5159172,
          "longitude": -0.1570165
        },
        {
          "latitude": 51.515767,
          "longitude": -0.1569334
        },
        {
          "latitude": 51.5153888,
          "longitude": -0.1567563
        },
        {
          "latitude": 51.5150508,
          "longitude": -0.1566008
        },
        {
          "latitude": 51.5147156,
          "longitude": -0.1564398
        },
        {
          "latitude": 51.5145305,
          "longitude": -0.1563567
        },
        {
          "latitude": 51.5142381,
          "longitude": -0.1562145
        },
        {
          "latitude": 51.5141737,
          "longitude": -0.156185
        },
        {
          "latitude": 51.5138009,
          "longitude": -0.1559973
        },
        {
          "latitude": 51.5137339,
          "longitude": -0.1559624
        },
        {
          "latitude": 51.5136588,
          "longitude": -0.1565713
        },
        {
          "latitude": 51.5136158,
          "longitude": -0.1569495
        },
        {
          "latitude": 51.513522,
          "longitude": -0.1576871
        },
        {
          "latitude": 51.5135139,
          "longitude": -0.1578641
        },
        {
          "latitude": 51.5135086,
          "longitude": -0.1579526
        },
        {
          "latitude": 51.513463,
          "longitude": -0.1580331
        },
        {
          "latitude": 51.5134281,
          "longitude": -0.1581779
        },
        {
          "latitude": 51.5134093,
          "longitude": -0.1582181
        },
        {
          "latitude": 51.5133798,
          "longitude": -0.1582637
        },
        {
          "latitude": 51.5133476,
          "longitude": -0.1582906
        },
        {
          "latitude": 51.5132833,
          "longitude": -0.158304
        },
        {
          "latitude": 51.5132779,
          "longitude": -0.158304
        },
        {
          "latitude": 51.5132108,
          "longitude": -0.1582879
        },
        {
          "latitude": 51.5131733,
          "longitude": -0.1582342
        },
        {
          "latitude": 51.5129453,
          "longitude": -0.1581028
        },
        {
          "latitude": 51.5127468,
          "longitude": -0.1579821
        },
        {
          "latitude": 51.5126905,
          "longitude": -0.1579419
        },
        {
          "latitude": 51.5122023,
          "longitude": -0.1577139
        },
        {
          "latitude": 51.5115049,
          "longitude": -0.1573491
        },
        {
          "latitude": 51.5113842,
          "longitude": -0.1572901
        },
        {
          "latitude": 51.5110919,
          "longitude": -0.1571399
        },
        {
          "latitude": 51.5110114,
          "longitude": -0.1570916
        },
        {
          "latitude": 51.5109149,
          "longitude": -0.1570353
        },
        {
          "latitude": 51.5108076,
          "longitude": -0.1569709
        },
        {
          "latitude": 51.5106708,
          "longitude": -0.1569012
        },
        {
          "latitude": 51.5105769,
          "longitude": -0.1568422
        },
        {
          "latitude": 51.5104803,
          "longitude": -0.1567805
        },
        {
          "latitude": 51.5103972,
          "longitude": -0.1567188
        },
        {
          "latitude": 51.5103462,
          "longitude": -0.1566812
        },
        {
          "latitude": 51.5101933,
          "longitude": -0.156531
        },
        {
          "latitude": 51.5100968,
          "longitude": -0.1564237
        },
        {
          "latitude": 51.5099815,
          "longitude": -0.1562789
        },
        {
          "latitude": 51.5098822,
          "longitude": -0.1561421
        },
        {
          "latitude": 51.5091768,
          "longitude": -0.1551309
        },
        {
          "latitude": 51.5089568,
          "longitude": -0.154852
        },
        {
          "latitude": 51.5084901,
          "longitude": -0.154337
        },
        {
          "latitude": 51.5084043,
          "longitude": -0.1542512
        },
        {
          "latitude": 51.5082756,
          "longitude": -0.1541224
        },
        {
          "latitude": 51.5079832,
          "longitude": -0.1538086
        },
        {
          "latitude": 51.5079564,
          "longitude": -0.1537818
        },
        {
          "latitude": 51.507892,
          "longitude": -0.1536986
        },
        {
          "latitude": 51.5076882,
          "longitude": -0.1534733
        },
        {
          "latitude": 51.5068755,
          "longitude": -0.1525104
        },
        {
          "latitude": 51.5067253,
          "longitude": -0.1523361
        },
        {
          "latitude": 51.506567,
          "longitude": -0.1521617
        },
        {
          "latitude": 51.5064704,
          "longitude": -0.1520652
        },
        {
          "latitude": 51.5064302,
          "longitude": -0.1520142
        },
        {
          "latitude": 51.5061191,
          "longitude": -0.1516172
        },
        {
          "latitude": 51.5060627,
          "longitude": -0.1515502
        },
        {
          "latitude": 51.5060091,
          "longitude": -0.1514858
        },
        {
          "latitude": 51.5058669,
          "longitude": -0.1513302
        },
        {
          "latitude": 51.5057838,
          "longitude": -0.1512551
        },
        {
          "latitude": 51.5057033,
          "longitude": -0.1511854
        },
        {
          "latitude": 51.5055317,
          "longitude": -0.1510486
        },
        {
          "latitude": 51.5054861,
          "longitude": -0.151011
        },
        {
          "latitude": 51.5053681,
          "longitude": -0.1509708
        },
        {
          "latitude": 51.5051615,
          "longitude": -0.1509011
        },
        {
          "latitude": 51.5050596,
          "longitude": -0.1508904
        },
        {
          "latitude": 51.5049523,
          "longitude": -0.1509038
        },
        {
          "latitude": 51.5045393,
          "longitude": -0.1509628
        },
        {
          "latitude": 51.5043461,
          "longitude": -0.1510271
        },
        {
          "latitude": 51.5042523,
          "longitude": -0.1510647
        },
        {
          "latitude": 51.5042067,
          "longitude": -0.1511022
        },
        {
          "latitude": 51.5040216,
          "longitude": -0.1510915
        },
        {
          "latitude": 51.5039063,
          "longitude": -0.1510486
        },
        {
          "latitude": 51.50363,
          "longitude": -0.1509547
        },
        {
          "latitude": 51.5034288,
          "longitude": -0.1508796
        },
        {
          "latitude": 51.5033618,
          "longitude": -0.1508474
        },
        {
          "latitude": 51.5032893,
          "longitude": -0.1508099
        },
        {
          "latitude": 51.5032974,
          "longitude": -0.1507267
        },
        {
          "latitude": 51.5033135,
          "longitude": -0.1503834
        },
        {
          "latitude": 51.5032947,
          "longitude": -0.1501796
        },
        {
          "latitude": 51.5032759,
          "longitude": -0.1500937
        },
        {
          "latitude": 51.5032625,
          "longitude": -0.1500455
        },
        {
          "latitude": 51.503233,
          "longitude": -0.149973
        },
        {
          "latitude": 51.5031928,
          "longitude": -0.1498899
        },
        {
          "latitude": 51.5031445,
          "longitude": -0.1498362
        },
        {
          "latitude": 51.5030828,
          "longitude": -0.1498121
        },
        {
          "latitude": 51.5029514,
          "longitude": -0.149796
        },
        {
          "latitude": 51.5029004,
          "longitude": -0.1497987
        },
        {
          "latitude": 51.5028092,
          "longitude": -0.1498067
        },
        {
          "latitude": 51.502659,
          "longitude": -0.1498497
        },
        {
          "latitude": 51.5025678,
          "longitude": -0.1498979
        },
        {
          "latitude": 51.5025437,
          "longitude": -0.1499194
        },
        {
          "latitude": 51.5024874,
          "longitude": -0.1499811
        },
        {
          "latitude": 51.5024096,
          "longitude": -0.1501018
        },
        {
          "latitude": 51.5023425,
          "longitude": -0.1502761
        },
        {
          "latitude": 51.5022835,
          "longitude": -0.1504585
        },
        {
          "latitude": 51.502246,
          "longitude": -0.1505551
        },
        {
          "latitude": 51.5020448,
          "longitude": -0.1510862
        },
        {
          "latitude": 51.5020233,
          "longitude": -0.1511452
        },
        {
          "latitude": 51.5019965,
          "longitude": -0.1512095
        },
        {
          "latitude": 51.5019161,
          "longitude": -0.1512498
        },
        {
          "latitude": 51.5018222,
          "longitude": -0.151282
        },
        {
          "latitude": 51.501731,
          "longitude": -0.1512793
        },
        {
          "latitude": 51.5016022,
          "longitude": -0.1512203
        },
        {
          "latitude": 51.5015137,
          "longitude": -0.1511237
        },
        {
          "latitude": 51.5012187,
          "longitude": -0.1506624
        },
        {
          "latitude": 51.5010443,
          "longitude": -0.1503673
        },
        {
          "latitude": 51.5010309,
          "longitude": -0.1502788
        },
        {
          "latitude": 51.5006822,
          "longitude": -0.1496968
        },
        {
          "latitude": 51.5002236,
          "longitude": -0.1489913
        },
        {
          "latitude": 51.4999983,
          "longitude": -0.1487017
        },
        {
          "latitude": 51.4999312,
          "longitude": -0.1486239
        },
        {
          "latitude": 51.4991882,
          "longitude": -0.1478165
        },
        {
          "latitude": 51.4987484,
          "longitude": -0.147441
        },
        {
          "latitude": 51.498684,
          "longitude": -0.147441
        },
        {
          "latitude": 51.4983568,
          "longitude": -0.147146
        },
        {
          "latitude": 51.4982897,
          "longitude": -0.1469877
        },
        {
          "latitude": 51.4982656,
          "longitude": -0.1469126
        },
        {
          "latitude": 51.4982414,
          "longitude": -0.1467946
        },
        {
          "latitude": 51.4982361,
          "longitude": -0.1466927
        },
        {
          "latitude": 51.4982495,
          "longitude": -0.1465666
        },
        {
          "latitude": 51.4982548,
          "longitude": -0.1464137
        },
        {
          "latitude": 51.4982575,
          "longitude": -0.1462287
        },
        {
          "latitude": 51.4982602,
          "longitude": -0.1460838
        },
        {
          "latitude": 51.4982709,
          "longitude": -0.1454911
        },
        {
          "latitude": 51.4982709,
          "longitude": -0.1450887
        },
        {
          "latitude": 51.498228,
          "longitude": -0.144622
        },
        {
          "latitude": 51.4981636,
          "longitude": -0.1442412
        },
        {
          "latitude": 51.4981395,
          "longitude": -0.1440856
        },
        {
          "latitude": 51.4981288,
          "longitude": -0.1440185
        },
        {
          "latitude": 51.4980966,
          "longitude": -0.1439139
        },
        {
          "latitude": 51.4980724,
          "longitude": -0.1438308
        },
        {
          "latitude": 51.4980268,
          "longitude": -0.1436296
        },
        {
          "latitude": 51.4979732,
          "longitude": -0.1433587
        },
        {
          "latitude": 51.4979303,
          "longitude": -0.143128
        },
        {
          "latitude": 51.497823,
          "longitude": -0.1426211
        },
        {
          "latitude": 51.4977828,
          "longitude": -0.142495
        },
        {
          "latitude": 51.4976782,
          "longitude": -0.1422751
        },
        {
          "latitude": 51.497587,
          "longitude": -0.1422027
        },
        {
          "latitude": 51.4975467,
          "longitude": -0.1421732
        },
        {
          "latitude": 51.4975092,
          "longitude": -0.1421598
        },
        {
          "latitude": 51.4973214,
          "longitude": -0.1420256
        },
        {
          "latitude": 51.4971498,
          "longitude": -0.1419479
        },
        {
          "latitude": 51.4968306,
          "longitude": -0.1418298
        },
        {
          "latitude": 51.4967233,
          "longitude": -0.1416957
        },
        {
          "latitude": 51.4966857,
          "longitude": -0.1415858
        },
        {
          "latitude": 51.496667,
          "longitude": -0.141457
        },
        {
          "latitude": 51.4966723,
          "longitude": -0.141221
        },
        {
          "latitude": 51.4968064,
          "longitude": -0.1403251
        },
        {
          "latitude": 51.4968279,
          "longitude": -0.1401883
        },
        {
          "latitude": 51.4968574,
          "longitude": -0.1399738
        },
        {
          "latitude": 51.496895,
          "longitude": -0.139676
        },
        {
          "latitude": 51.4969271,
          "longitude": -0.1394534
        },
        {
          "latitude": 51.496954,
          "longitude": -0.139263
        },
        {
          "latitude": 51.496962,
          "longitude": -0.1392093
        },
        {
          "latitude": 51.4969701,
          "longitude": -0.1391476
        },
        {
          "latitude": 51.4969915,
          "longitude": -0.1390028
        },
        {
          "latitude": 51.4970344,
          "longitude": -0.1387078
        },
        {
          "latitude": 51.4971283,
          "longitude": -0.1381016
        },
        {
          "latitude": 51.4971927,
          "longitude": -0.1376617
        },
        {
          "latitude": 51.497249,
          "longitude": -0.1372969
        },
        {
          "latitude": 51.4973107,
          "longitude": -0.1369509
        },
        {
          "latitude": 51.4973322,
          "longitude": -0.1367578
        },
        {
          "latitude": 51.4973563,
          "longitude": -0.1365352
        },
        {
          "latitude": 51.4974099,
          "longitude": -0.13616230000000001
        },
        {
          "latitude": 51.4974609,
          "longitude": -0.1358244
        },
        {
          "latitude": 51.4974877,
          "longitude": -0.1356661
        },
        {
          "latitude": 51.4974958,
          "longitude": -0.1356125
        },
        {
          "latitude": 51.4975092,
          "longitude": -0.1355428
        },
        {
          "latitude": 51.4975253,
          "longitude": -0.1354435
        },
        {
          "latitude": 51.4975387,
          "longitude": -0.1353496
        },
        {
          "latitude": 51.497587,
          "longitude": -0.135068
        },
        {
          "latitude": 51.4976192,
          "longitude": -0.1349339
        },
        {
          "latitude": 51.4976352,
          "longitude": -0.1348561
        },
        {
          "latitude": 51.4977372,
          "longitude": -0.1344511
        },
        {
          "latitude": 51.4978498,
          "longitude": -0.1339978
        },
        {
          "latitude": 51.4978686,
          "longitude": -0.1339415
        },
        {
          "latitude": 51.4978981,
          "longitude": -0.1338583
        },
        {
          "latitude": 51.4983916,
          "longitude": -0.1325226
        },
        {
          "latitude": 51.4983031,
          "longitude": -0.1324394
        },
        {
          "latitude": 51.4981717,
          "longitude": -0.1323161
        },
        {
          "latitude": 51.4981583,
          "longitude": -0.1323026
        },
        {
          "latitude": 51.4981315,
          "longitude": -0.1322892
        },
        {
          "latitude": 51.4981073,
          "longitude": -0.1322865
        },
        {
          "latitude": 51.4980215,
          "longitude": -0.1323053
        },
        {
          "latitude": 51.4979625,
          "longitude": -0.1323161
        },
        {
          "latitude": 51.4978901,
          "longitude": -0.1323295
        },
        {
          "latitude": 51.497705,
          "longitude": -0.1323509
        },
        {
          "latitude": 51.497536,
          "longitude": -0.1323402
        },
        {
          "latitude": 51.4968386,
          "longitude": -0.1321122
        },
        {
          "latitude": 51.496844,
          "longitude": -0.1318359
        },
        {
          "latitude": 51.496844,
          "longitude": -0.1317501
        },
        {
          "latitude": 51.496844,
          "longitude": -0.1315972
        },
        {
          "latitude": 51.4968359,
          "longitude": -0.1313344
        },
        {
          "latitude": 51.4968467,
          "longitude": -0.1308355
        },
        {
          "latitude": 51.4968547,
          "longitude": -0.1304224
        },
        {
          "latitude": 51.4968601,
          "longitude": -0.1303312
        },
        {
          "latitude": 51.4968923,
          "longitude": -0.1298243
        },
        {
          "latitude": 51.4969218,
          "longitude": -0.1293737
        },
        {
          "latitude": 51.4969245,
          "longitude": -0.1293066
        },
        {
          "latitude": 51.4969298,
          "longitude": -0.1288614
        },
        {
          "latitude": 51.4969298,
          "longitude": -0.1287138
        },
        {
          "latitude": 51.4969271,
          "longitude": -0.1285502
        },
        {
          "latitude": 51.4969245,
          "longitude": -0.1277295
        },
        {
          "latitude": 51.4969271,
          "longitude": -0.1273727
        },
        {
          "latitude": 51.4969379,
          "longitude": -0.127134
        },
        {
          "latitude": 51.4969593,
          "longitude": -0.1266298
        },
        {
          "latitude": 51.4969781,
          "longitude": -0.1256078
        },
        {
          "latitude": 51.4971337,
          "longitude": -0.1256266
        },
        {
          "latitude": 51.4975736,
          "longitude": -0.1256669
        },
        {
          "latitude": 51.4976835,
          "longitude": -0.1256749
        },
        {
          "latitude": 51.4978632,
          "longitude": -0.125691
        },
        {
          "latitude": 51.4979464,
          "longitude": -0.125699
        },
        {
          "latitude": 51.4982548,
          "longitude": -0.125742
        },
        {
          "latitude": 51.4985526,
          "longitude": -0.1258144
        },
        {
          "latitude": 51.4987698,
          "longitude": -0.1258761
        },
        {
          "latitude": 51.4989415,
          "longitude": -0.1259297
        },
        {
          "latitude": 51.4994672,
          "longitude": -0.1261523
        },
        {
          "latitude": 51.4994967,
          "longitude": -0.1261899
        },
        {
          "latitude": 51.4996818,
          "longitude": -0.1262274
        },
        {
          "latitude": 51.5000331,
          "longitude": -0.1262301
        },
        {
          "latitude": 51.50006,
          "longitude": -0.1262355
        },
        {
          "latitude": 51.5000787,
          "longitude": -0.1262435
        },
        {
          "latitude": 51.5000948,
          "longitude": -0.1262596
        },
        {
          "latitude": 51.5001109,
          "longitude": -0.1262811
        },
        {
          "latitude": 51.5001137,
          "longitude": -0.1262861
        }
      ]
    }
  ],
  "sections": [
    {
      "startPointIndex": 3,
      "endPointIndex": 39,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-secondary",
          "shieldContent": "A4088"
        }
      ]
    },
    {
      "startPointIndex": 39,
      "endPointIndex": 46,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-secondary",
          "shieldContent": "A4140"
        },
        {
          "reference": "gbr-secondary",
          "shieldContent": "A4088"
        }
      ]
    },
    {
      "maxSpeedLimitInKmh": 48,
      "startPointIndex": 0,
      "endPointIndex": 76,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 46,
      "endPointIndex": 79,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-secondary",
          "shieldContent": "A4088"
        }
      ]
    },
    {
      "maxSpeedLimitInKmh": 48,
      "startPointIndex": 79,
      "endPointIndex": 87,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 87,
      "endPointIndex": 168,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-primary",
          "shieldContent": "A406"
        }
      ]
    },
    {
      "maxSpeedLimitInKmh": 64,
      "startPointIndex": 87,
      "endPointIndex": 174,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 48,
      "startPointIndex": 174,
      "endPointIndex": 194,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 64,
      "startPointIndex": 194,
      "endPointIndex": 263,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 48,
      "startPointIndex": 263,
      "endPointIndex": 269,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 210,
      "endPointIndex": 521,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-primary",
          "shieldContent": "A41"
        }
      ]
    },
    {
      "startPointIndex": 521,
      "endPointIndex": 542,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-primary",
          "shieldContent": "A4380"
        }
      ]
    },
    {
      "startPointIndex": 542,
      "endPointIndex": 575,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-secondary",
          "shieldContent": "A4380"
        }
      ]
    },
    {
      "startPointIndex": 547,
      "endPointIndex": 588,
      "sectionType": "TOLL_ROAD"
    },
    {
      "startPointIndex": 547,
      "endPointIndex": 588,
      "sectionType": "TOLL_VIGNETTE",
      "countryCode": "GBR"
    },
    {
      "startPointIndex": 575,
      "endPointIndex": 590,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-secondary",
          "shieldContent": "A40"
        }
      ]
    },
    {
      "startPointIndex": 602,
      "endPointIndex": 607,
      "sectionType": "TOLL_ROAD"
    },
    {
      "startPointIndex": 602,
      "endPointIndex": 607,
      "sectionType": "TOLL_VIGNETTE",
      "countryCode": "GBR"
    },
    {
      "startPointIndex": 590,
      "endPointIndex": 644,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-primary",
          "shieldContent": "A4202"
        }
      ]
    },
    {
      "startPointIndex": 644,
      "endPointIndex": 667,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-primary",
          "shieldContent": "A4202"
        },
        {
          "reference": "gbr-primary",
          "shieldContent": "A4"
        }
      ]
    },
    {
      "startPointIndex": 672,
      "endPointIndex": 746,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-secondary",
          "shieldContent": "A302"
        }
      ]
    },
    {
      "maxSpeedLimitInKmh": 32,
      "startPointIndex": 269,
      "endPointIndex": 793,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 0,
      "endPointIndex": 793,
      "sectionType": "COUNTRY",
      "countryCode": "GBR"
    },
    {
      "startPointIndex": 711,
      "endPointIndex": 793,
      "sectionType": "TOLL_VIGNETTE",
      "countryCode": "GBR"
    },
    {
      "startPointIndex": 0,
      "endPointIndex": 793,
      "sectionType": "TRAVEL_MODE",
      "travelMode": "car"
    },
    {
      "startPointIndex": 775,
      "endPointIndex": 793,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-secondary",
          "shieldContent": "A3212"
        }
      ]
    },
    {
      "startPointIndex": 0,
      "endPointIndex": 793,
      "sectionType": "URBAN"
    },
    {
      "startPointIndex": 711,
      "endPointIndex": 793,
      "sectionType": "TOLL_ROAD"
    },
    {
      "lanes": [
        {
          "directions": [
            "SHARP_LEFT"
          ],
          "follow": "SHARP_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 3,
      "endPointIndex": 3,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "DOUBLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 3,
      "endPointIndex": 4,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 4,
      "endPointIndex": 4,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 4,
      "endPointIndex": 5,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 5,
      "endPointIndex": 7,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 7,
      "endPointIndex": 7,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 7,
      "endPointIndex": 13,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 14,
      "endPointIndex": 16,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "DOUBLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 16,
      "endPointIndex": 17,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 17,
      "endPointIndex": 17,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 17,
      "endPointIndex": 18,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 18,
      "endPointIndex": 19,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 19,
      "endPointIndex": 20,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 20,
      "endPointIndex": 21,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 21,
      "endPointIndex": 23,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 23,
      "endPointIndex": 24,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 24,
      "endPointIndex": 26,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 26,
      "endPointIndex": 34,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 35,
      "endPointIndex": 37,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 37,
      "endPointIndex": 38,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 38,
      "endPointIndex": 39,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 39,
      "endPointIndex": 39,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "SLIGHT_LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 39,
      "endPointIndex": 40,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 40,
      "endPointIndex": 43,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT",
            "STRAIGHT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT",
            "STRAIGHT"
          ],
          "follow": "SLIGHT_LEFT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 43,
      "endPointIndex": 45,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 45,
      "endPointIndex": 47,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 47,
      "endPointIndex": 47,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 47,
      "endPointIndex": 49,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 49,
      "endPointIndex": 50,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 50,
      "endPointIndex": 52,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 53,
      "endPointIndex": 54,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 54,
      "endPointIndex": 71,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 73,
      "endPointIndex": 74,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 74,
      "endPointIndex": 74,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 74,
      "endPointIndex": 75,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 75,
      "endPointIndex": 75,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 75,
      "endPointIndex": 76,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 76,
      "endPointIndex": 76,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 76,
      "endPointIndex": 77,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 77,
      "endPointIndex": 77,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 77,
      "endPointIndex": 78,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 78,
      "endPointIndex": 79,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 79,
      "endPointIndex": 79,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT",
            "RIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 79,
      "endPointIndex": 80,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT",
            "RIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 80,
      "endPointIndex": 80,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT",
            "RIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 80,
      "endPointIndex": 81,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 81,
      "endPointIndex": 81,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ],
          "follow": "LEFT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 81,
      "endPointIndex": 82,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ],
          "follow": "LEFT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 82,
      "endPointIndex": 83,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ],
          "follow": "LEFT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 83,
      "endPointIndex": 84,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ],
          "follow": "LEFT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 84,
      "endPointIndex": 84,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 84,
      "endPointIndex": 87,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 87,
      "endPointIndex": 88,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 88,
      "endPointIndex": 88,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 88,
      "endPointIndex": 89,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 89,
      "endPointIndex": 90,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 90,
      "endPointIndex": 91,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 91,
      "endPointIndex": 92,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 92,
      "endPointIndex": 93,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 93,
      "endPointIndex": 94,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 136,
      "endPointIndex": 138,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 138,
      "endPointIndex": 141,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 141,
      "endPointIndex": 144,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 144,
      "endPointIndex": 145,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 145,
      "endPointIndex": 146,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 146,
      "endPointIndex": 148,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 148,
      "endPointIndex": 150,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 150,
      "endPointIndex": 151,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 151,
      "endPointIndex": 154,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 154,
      "endPointIndex": 156,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 156,
      "endPointIndex": 157,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 157,
      "endPointIndex": 158,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 158,
      "endPointIndex": 161,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 161,
      "endPointIndex": 164,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 164,
      "endPointIndex": 165,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 165,
      "endPointIndex": 168,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 168,
      "endPointIndex": 170,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 170,
      "endPointIndex": 172,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 172,
      "endPointIndex": 172,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 172,
      "endPointIndex": 174,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 174,
      "endPointIndex": 175,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 175,
      "endPointIndex": 178,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 178,
      "endPointIndex": 178,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "SLIGHT_LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 178,
      "endPointIndex": 178,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "SLIGHT_LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 178,
      "endPointIndex": 179,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 179,
      "endPointIndex": 186,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT",
            "SLIGHT_RIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT",
            "SLIGHT_RIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 186,
      "endPointIndex": 186,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 186,
      "endPointIndex": 187,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 187,
      "endPointIndex": 189,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 189,
      "endPointIndex": 190,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 190,
      "endPointIndex": 191,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 191,
      "endPointIndex": 192,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT",
            "STRAIGHT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT",
            "STRAIGHT"
          ],
          "follow": "SLIGHT_LEFT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 192,
      "endPointIndex": 192,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 192,
      "endPointIndex": 194,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 194,
      "endPointIndex": 195,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 195,
      "endPointIndex": 196,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 196,
      "endPointIndex": 198,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 198,
      "endPointIndex": 198,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 198,
      "endPointIndex": 199,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 199,
      "endPointIndex": 201,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 201,
      "endPointIndex": 203,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 203,
      "endPointIndex": 204,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 204,
      "endPointIndex": 204,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 204,
      "endPointIndex": 204,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 204,
      "endPointIndex": 206,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 206,
      "endPointIndex": 206,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 237,
      "endPointIndex": 244,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT",
            "RIGHT",
            "RIGHT_U_TURN"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 245,
      "endPointIndex": 246,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "RIGHT",
            "RIGHT_U_TURN"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 246,
      "endPointIndex": 249,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "RIGHT"
          ]
        },
        {
          "directions": [
            "RIGHT_U_TURN"
          ]
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 249,
      "endPointIndex": 249,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 249,
      "endPointIndex": 260,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 262,
      "endPointIndex": 262,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "RIGHT"
          ],
          "follow": "RIGHT"
        },
        {
          "directions": [
            "RIGHT",
            "RIGHT_U_TURN"
          ],
          "follow": "RIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 262,
      "endPointIndex": 263,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "RIGHT"
          ],
          "follow": "RIGHT"
        },
        {
          "directions": [
            "RIGHT",
            "RIGHT_U_TURN"
          ],
          "follow": "RIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 263,
      "endPointIndex": 263,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "RIGHT"
          ],
          "follow": "RIGHT"
        },
        {
          "directions": [
            "RIGHT",
            "RIGHT_U_TURN"
          ],
          "follow": "RIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 263,
      "endPointIndex": 263,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "RIGHT"
          ],
          "follow": "RIGHT"
        },
        {
          "directions": [
            "RIGHT",
            "RIGHT_U_TURN"
          ],
          "follow": "RIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 263,
      "endPointIndex": 265,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "RIGHT"
          ],
          "follow": "RIGHT"
        },
        {
          "directions": [
            "RIGHT",
            "RIGHT_U_TURN"
          ],
          "follow": "RIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 265,
      "endPointIndex": 267,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "RIGHT"
          ],
          "follow": "RIGHT"
        },
        {
          "directions": [
            "RIGHT"
          ],
          "follow": "RIGHT"
        },
        {
          "directions": [
            "RIGHT_U_TURN"
          ]
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 267,
      "endPointIndex": 269,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SHARP_LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT",
            "SLIGHT_RIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 269,
      "endPointIndex": 270,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SHARP_LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT",
            "SLIGHT_RIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 270,
      "endPointIndex": 271,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SHARP_LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT",
            "SLIGHT_RIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 271,
      "endPointIndex": 273,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SHARP_LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "SLIGHT_RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 273,
      "endPointIndex": 276,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SHARP_LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "SLIGHT_RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 276,
      "endPointIndex": 277,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SHARP_LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "SLIGHT_RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 277,
      "endPointIndex": 277,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 277,
      "endPointIndex": 278,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 278,
      "endPointIndex": 279,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 279,
      "endPointIndex": 280,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 336,
      "endPointIndex": 336,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 336,
      "endPointIndex": 337,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT",
            "RIGHT_U_TURN"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 337,
      "endPointIndex": 338,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "RIGHT_U_TURN"
          ]
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 338,
      "endPointIndex": 338,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 338,
      "endPointIndex": 352,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 353,
      "endPointIndex": 354,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 354,
      "endPointIndex": 354,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 354,
      "endPointIndex": 355,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 355,
      "endPointIndex": 356,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 356,
      "endPointIndex": 357,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 357,
      "endPointIndex": 357,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 357,
      "endPointIndex": 358,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 358,
      "endPointIndex": 359,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 359,
      "endPointIndex": 359,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 359,
      "endPointIndex": 360,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 360,
      "endPointIndex": 360,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 360,
      "endPointIndex": 375,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SHARP_LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 376,
      "endPointIndex": 377,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 377,
      "endPointIndex": 379,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 379,
      "endPointIndex": 380,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 380,
      "endPointIndex": 382,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 382,
      "endPointIndex": 383,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 383,
      "endPointIndex": 384,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 384,
      "endPointIndex": 390,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "SHARP_RIGHT"
          ],
          "follow": "SHARP_RIGHT"
        },
        {
          "directions": [
            "SHARP_RIGHT"
          ],
          "follow": "SHARP_RIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 391,
      "endPointIndex": 391,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_RIGHT"
          ],
          "follow": "SLIGHT_RIGHT"
        },
        {
          "directions": [
            "SLIGHT_RIGHT"
          ],
          "follow": "SLIGHT_RIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 391,
      "endPointIndex": 394,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_RIGHT"
          ],
          "follow": "SLIGHT_RIGHT"
        },
        {
          "directions": [
            "SLIGHT_RIGHT"
          ],
          "follow": "SLIGHT_RIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 394,
      "endPointIndex": 395,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_RIGHT"
          ],
          "follow": "SLIGHT_RIGHT"
        },
        {
          "directions": [
            "SLIGHT_RIGHT"
          ],
          "follow": "SLIGHT_RIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 395,
      "endPointIndex": 395,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 395,
      "endPointIndex": 396,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "SLIGHT_RIGHT"
          ]
        },
        {
          "directions": [
            "SLIGHT_RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 396,
      "endPointIndex": 397,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "SLIGHT_RIGHT"
          ]
        },
        {
          "directions": [
            "SLIGHT_RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 397,
      "endPointIndex": 398,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "SLIGHT_RIGHT"
          ]
        },
        {
          "directions": [
            "SLIGHT_RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 398,
      "endPointIndex": 399,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "SLIGHT_RIGHT"
          ]
        },
        {
          "directions": [
            "SLIGHT_RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 399,
      "endPointIndex": 401,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "SLIGHT_RIGHT"
          ]
        },
        {
          "directions": [
            "SLIGHT_RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 401,
      "endPointIndex": 402,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "SLIGHT_RIGHT"
          ]
        },
        {
          "directions": [
            "SLIGHT_RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 402,
      "endPointIndex": 402,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 402,
      "endPointIndex": 407,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 428,
      "endPointIndex": 432,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 432,
      "endPointIndex": 434,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 434,
      "endPointIndex": 434,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 434,
      "endPointIndex": 435,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 435,
      "endPointIndex": 443,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT",
            "RIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 444,
      "endPointIndex": 445,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT",
            "RIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "DOUBLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 445,
      "endPointIndex": 446,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 446,
      "endPointIndex": 446,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 446,
      "endPointIndex": 448,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 448,
      "endPointIndex": 448,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 448,
      "endPointIndex": 452,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 453,
      "endPointIndex": 453,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 453,
      "endPointIndex": 454,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 454,
      "endPointIndex": 455,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 455,
      "endPointIndex": 460,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 461,
      "endPointIndex": 463,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 463,
      "endPointIndex": 465,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 465,
      "endPointIndex": 467,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 467,
      "endPointIndex": 467,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 467,
      "endPointIndex": 469,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 469,
      "endPointIndex": 470,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 470,
      "endPointIndex": 471,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 471,
      "endPointIndex": 473,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 473,
      "endPointIndex": 473,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 473,
      "endPointIndex": 477,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 477,
      "endPointIndex": 481,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT",
            "STRAIGHT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT",
            "STRAIGHT"
          ],
          "follow": "SLIGHT_LEFT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 481,
      "endPointIndex": 482,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 482,
      "endPointIndex": 482,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 482,
      "endPointIndex": 485,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 485,
      "endPointIndex": 485,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "DOUBLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 485,
      "endPointIndex": 486,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 486,
      "endPointIndex": 486,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 486,
      "endPointIndex": 487,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT",
            "RIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 540,
      "endPointIndex": 541,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT",
            "RIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 541,
      "endPointIndex": 541,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT",
            "RIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 541,
      "endPointIndex": 542,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 542,
      "endPointIndex": 542,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 542,
      "endPointIndex": 547,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT",
            "RIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 548,
      "endPointIndex": 549,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 549,
      "endPointIndex": 549,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 549,
      "endPointIndex": 550,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 550,
      "endPointIndex": 551,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 551,
      "endPointIndex": 556,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 557,
      "endPointIndex": 559,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 559,
      "endPointIndex": 560,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 560,
      "endPointIndex": 560,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 560,
      "endPointIndex": 561,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 561,
      "endPointIndex": 561,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 561,
      "endPointIndex": 562,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 562,
      "endPointIndex": 567,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 568,
      "endPointIndex": 569,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 569,
      "endPointIndex": 569,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 569,
      "endPointIndex": 574,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 575,
      "endPointIndex": 576,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 576,
      "endPointIndex": 577,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 577,
      "endPointIndex": 578,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 578,
      "endPointIndex": 579,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 579,
      "endPointIndex": 580,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 580,
      "endPointIndex": 581,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 581,
      "endPointIndex": 587,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 587,
      "endPointIndex": 588,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 588,
      "endPointIndex": 589,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 589,
      "endPointIndex": 590,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 590,
      "endPointIndex": 590,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 590,
      "endPointIndex": 591,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 591,
      "endPointIndex": 592,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 592,
      "endPointIndex": 594,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 595,
      "endPointIndex": 595,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 595,
      "endPointIndex": 596,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 596,
      "endPointIndex": 596,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 596,
      "endPointIndex": 597,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 597,
      "endPointIndex": 597,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 597,
      "endPointIndex": 598,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 598,
      "endPointIndex": 599,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 599,
      "endPointIndex": 600,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 600,
      "endPointIndex": 600,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 600,
      "endPointIndex": 601,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 601,
      "endPointIndex": 602,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 602,
      "endPointIndex": 602,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT",
            "RIGHT_U_TURN"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 602,
      "endPointIndex": 603,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT",
            "RIGHT_U_TURN"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 603,
      "endPointIndex": 605,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "RIGHT_U_TURN"
          ]
        },
        {
          "directions": [
            "RIGHT_U_TURN"
          ]
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 605,
      "endPointIndex": 605,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 605,
      "endPointIndex": 606,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 606,
      "endPointIndex": 607,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 607,
      "endPointIndex": 607,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 607,
      "endPointIndex": 608,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 608,
      "endPointIndex": 609,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 609,
      "endPointIndex": 609,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 609,
      "endPointIndex": 618,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 619,
      "endPointIndex": 619,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 619,
      "endPointIndex": 620,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 620,
      "endPointIndex": 620,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 620,
      "endPointIndex": 621,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 621,
      "endPointIndex": 621,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 621,
      "endPointIndex": 622,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 622,
      "endPointIndex": 623,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 623,
      "endPointIndex": 624,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 624,
      "endPointIndex": 624,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT",
            "RIGHT_U_TURN"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 624,
      "endPointIndex": 625,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT",
            "RIGHT_U_TURN"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 625,
      "endPointIndex": 626,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT",
            "RIGHT_U_TURN"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 626,
      "endPointIndex": 627,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "RIGHT_U_TURN"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 627,
      "endPointIndex": 627,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 627,
      "endPointIndex": 628,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 628,
      "endPointIndex": 629,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 629,
      "endPointIndex": 634,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 635,
      "endPointIndex": 635,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 635,
      "endPointIndex": 636,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 636,
      "endPointIndex": 638,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "RIGHT"
          ]
        },
        {
          "directions": [
            "RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 638,
      "endPointIndex": 638,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 638,
      "endPointIndex": 640,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 640,
      "endPointIndex": 641,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 641,
      "endPointIndex": 641,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 641,
      "endPointIndex": 642,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 642,
      "endPointIndex": 643,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 643,
      "endPointIndex": 644,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 644,
      "endPointIndex": 644,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ]
        },
        {
          "directions": [
            "SLIGHT_LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 644,
      "endPointIndex": 645,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ]
        },
        {
          "directions": [
            "SLIGHT_LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 645,
      "endPointIndex": 649,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ]
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 649,
      "endPointIndex": 649,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 649,
      "endPointIndex": 650,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 650,
      "endPointIndex": 653,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 653,
      "endPointIndex": 653,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 653,
      "endPointIndex": 655,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 655,
      "endPointIndex": 657,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 657,
      "endPointIndex": 657,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 657,
      "endPointIndex": 659,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 659,
      "endPointIndex": 659,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 659,
      "endPointIndex": 661,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 661,
      "endPointIndex": 661,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 661,
      "endPointIndex": 662,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 662,
      "endPointIndex": 663,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 663,
      "endPointIndex": 664,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 664,
      "endPointIndex": 665,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 665,
      "endPointIndex": 666,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 666,
      "endPointIndex": 667,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 667,
      "endPointIndex": 667,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 667,
      "endPointIndex": 668,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 668,
      "endPointIndex": 669,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 669,
      "endPointIndex": 670,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 670,
      "endPointIndex": 671,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "DOUBLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 671,
      "endPointIndex": 677,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ],
          "follow": "LEFT"
        },
        {
          "directions": [
            "LEFT"
          ],
          "follow": "LEFT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 678,
      "endPointIndex": 680,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ],
          "follow": "LEFT"
        },
        {
          "directions": [
            "LEFT"
          ],
          "follow": "LEFT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 680,
      "endPointIndex": 682,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ],
          "follow": "LEFT"
        },
        {
          "directions": [
            "LEFT"
          ],
          "follow": "LEFT"
        },
        {
          "directions": [
            "LEFT"
          ],
          "follow": "LEFT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 682,
      "endPointIndex": 683,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ],
          "follow": "LEFT"
        },
        {
          "directions": [
            "LEFT"
          ],
          "follow": "LEFT"
        },
        {
          "directions": [
            "LEFT"
          ],
          "follow": "LEFT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 683,
      "endPointIndex": 683,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 683,
      "endPointIndex": 685,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 685,
      "endPointIndex": 687,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT",
            "RIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 687,
      "endPointIndex": 688,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT",
            "RIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 688,
      "endPointIndex": 689,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT",
            "RIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 689,
      "endPointIndex": 690,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 690,
      "endPointIndex": 691,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 691,
      "endPointIndex": 692,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT",
            "RIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 692,
      "endPointIndex": 694,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 694,
      "endPointIndex": 694,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ]
        },
        {
          "directions": [
            "SLIGHT_RIGHT"
          ],
          "follow": "SLIGHT_RIGHT"
        },
        {
          "directions": [
            "SLIGHT_RIGHT"
          ],
          "follow": "SLIGHT_RIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 694,
      "endPointIndex": 695,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT",
            "RIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 695,
      "endPointIndex": 696,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT",
            "RIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 696,
      "endPointIndex": 697,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT",
            "RIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 697,
      "endPointIndex": 698,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 698,
      "endPointIndex": 698,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 698,
      "endPointIndex": 699,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 699,
      "endPointIndex": 700,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 700,
      "endPointIndex": 701,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 701,
      "endPointIndex": 702,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 702,
      "endPointIndex": 702,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT",
            "STRAIGHT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 702,
      "endPointIndex": 703,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT",
            "STRAIGHT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 703,
      "endPointIndex": 706,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT",
            "STRAIGHT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 706,
      "endPointIndex": 707,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT",
            "STRAIGHT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 707,
      "endPointIndex": 708,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT",
            "STRAIGHT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 708,
      "endPointIndex": 709,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT",
            "STRAIGHT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 709,
      "endPointIndex": 710,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 710,
      "endPointIndex": 711,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 711,
      "endPointIndex": 717,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT",
            "RIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 718,
      "endPointIndex": 719,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT",
            "RIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 719,
      "endPointIndex": 720,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT",
            "RIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "DOUBLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 720,
      "endPointIndex": 721,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 721,
      "endPointIndex": 721,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "DOUBLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 721,
      "endPointIndex": 722,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "DOUBLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 722,
      "endPointIndex": 723,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "DOUBLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 723,
      "endPointIndex": 724,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 724,
      "endPointIndex": 725,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 725,
      "endPointIndex": 733,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT"
          ]
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 734,
      "endPointIndex": 734,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 734,
      "endPointIndex": 735,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 735,
      "endPointIndex": 736,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 736,
      "endPointIndex": 737,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 737,
      "endPointIndex": 738,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 738,
      "endPointIndex": 740,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 740,
      "endPointIndex": 741,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 741,
      "endPointIndex": 742,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 742,
      "endPointIndex": 743,
      "sectionType": "LANES"
    }
  ],
  "guidance": {
    "instructions": [
      {
        "drivingSide": "LEFT",
        "maneuver": "DEPART",
        "maneuverPoint": {
          "latitude": 51.5656078,
          "longitude": -0.2789953
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈbɑːn ˈɻa⁀ɪz",
            "phoneticLanguageCode": "en-GB",
            "text": "Barn Rise"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈbɑːn ˈɻa⁀ɪz",
            "phoneticLanguageCode": "en-GB",
            "text": "Barn Rise"
          }
        },
        "routeOffsetInMeters": 0,
        "routePath": [
          {
            "distanceInMeters": 0,
            "point": {
              "latitude": 51.5656078,
              "longitude": -0.2789953
            },
            "travelTimeInSeconds": 0
          }
        ],
        "sideRoads": []
      },
      {
        "changeOfAngleInDegrees": 84,
        "drivingSide": "LEFT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_RIGHT",
        "maneuverPoint": {
          "latitude": 51.5659538,
          "longitude": -0.2788666
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈgɻænd pə.ˈɻe⁀ɪd",
            "phoneticLanguageCode": "en-GB",
            "text": "Grand Parade"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈbɑːn ˈɻa⁀ɪz",
            "phoneticLanguageCode": "en-GB",
            "text": "Barn Rise"
          }
        },
        "routeOffsetInMeters": 39,
        "routePath": [
          {
            "distanceInMeters": 39,
            "point": {
              "latitude": 51.5659538,
              "longitude": -0.2788666
            },
            "travelTimeInSeconds": 10
          },
          {
            "distanceInMeters": 49,
            "point": {
              "latitude": 51.5659365,
              "longitude": -0.2787249
            },
            "travelTimeInSeconds": 14
          }
        ],
        "sideRoads": []
      },
      {
        "changeOfAngleInDegrees": 118,
        "drivingSide": "LEFT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_RIGHT",
        "maneuverPoint": {
          "latitude": 51.5657204,
          "longitude": -0.2769542
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈbɑːn ˈhɪl",
            "phoneticLanguageCode": "en-GB",
            "text": "Barn Hill"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈgɻænd pə.ˈɻe⁀ɪd",
            "phoneticLanguageCode": "en-GB",
            "text": "Grand Parade"
          }
        },
        "routeOffsetInMeters": 174,
        "routePath": [
          {
            "distanceInMeters": 174,
            "point": {
              "latitude": 51.5657204,
              "longitude": -0.2769542
            },
            "travelTimeInSeconds": 74
          },
          {
            "distanceInMeters": 184,
            "point": {
              "latitude": 51.5656459,
              "longitude": -0.2770377
            },
            "travelTimeInSeconds": 92
          }
        ],
        "sideRoads": []
      },
      {
        "changeOfAngleInDegrees": -123,
        "drivingSide": "LEFT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_LEFT",
        "maneuverPoint": {
          "latitude": 51.5654522,
          "longitude": -0.2772546
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A4088"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈfɔː.tɪ ˈle⁀ɪn",
            "phoneticLanguageCode": "en-GB",
            "text": "Forty Lane"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈbɑːn ˈhɪl",
            "phoneticLanguageCode": "en-GB",
            "text": "Barn Hill"
          }
        },
        "routeOffsetInMeters": 211,
        "routePath": [
          {
            "distanceInMeters": 211,
            "point": {
              "latitude": 51.5654522,
              "longitude": -0.2772546
            },
            "travelTimeInSeconds": 139
          },
          {
            "distanceInMeters": 241,
            "point": {
              "latitude": 51.56542,
              "longitude": -0.2768227
            },
            "travelTimeInSeconds": 157
          },
          {
            "distanceInMeters": 251,
            "point": {
              "latitude": 51.5654118,
              "longitude": -0.2766824
            },
            "travelTimeInSeconds": 158
          }
        ],
        "sideRoads": []
      },
      {
        "changeOfAngleInDegrees": 41,
        "drivingSide": "LEFT",
        "maneuver": "ROUNDABOUT_SLIGHT_RIGHT",
        "maneuverPoint": {
          "latitude": 51.5657955,
          "longitude": -0.2654153
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A4088"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈblæk.bɜːd ˈhɪl",
            "phoneticLanguageCode": "en-GB",
            "text": "Blackbird Hill"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A4088"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈfɔː.tɪ ˈle⁀ɪn",
            "phoneticLanguageCode": "en-GB",
            "text": "Forty Lane"
          }
        },
        "roundaboutExitNumber": 2,
        "routeOffsetInMeters": 1031,
        "routePath": [
          {
            "distanceInMeters": 1031,
            "point": {
              "latitude": 51.5658197,
              "longitude": -0.2655977
            },
            "travelTimeInSeconds": 256
          },
          {
            "distanceInMeters": 1034,
            "point": {
              "latitude": 51.5658411,
              "longitude": -0.2655762
            },
            "travelTimeInSeconds": 256
          },
          {
            "distanceInMeters": 1036,
            "point": {
              "latitude": 51.5658492,
              "longitude": -0.2655467
            },
            "travelTimeInSeconds": 256
          },
          {
            "distanceInMeters": 1039,
            "point": {
              "latitude": 51.5658519,
              "longitude": -0.2655146
            },
            "travelTimeInSeconds": 257
          },
          {
            "distanceInMeters": 1041,
            "point": {
              "latitude": 51.5658411,
              "longitude": -0.2654797
            },
            "travelTimeInSeconds": 257
          },
          {
            "distanceInMeters": 1044,
            "point": {
              "latitude": 51.5658304,
              "longitude": -0.2654448
            },
            "travelTimeInSeconds": 258
          },
          {
            "distanceInMeters": 1046,
            "point": {
              "latitude": 51.565817,
              "longitude": -0.2654314
            },
            "travelTimeInSeconds": 258
          },
          {
            "distanceInMeters": 1048,
            "point": {
              "latitude": 51.5657955,
              "longitude": -0.2654153
            },
            "travelTimeInSeconds": 258
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 765,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 665,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 652,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 514,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 219,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 83,
            "side": "RIGHT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": -40,
        "drivingSide": "LEFT",
        "maneuver": "ROUNDABOUT_SLIGHT_LEFT",
        "maneuverPoint": {
          "latitude": 51.561622,
          "longitude": -0.255872
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈniːz.dən ˈle⁀ɪn ˈnɔːθ",
            "phoneticLanguageCode": "en-GB",
            "text": "Neasden Lane North"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A4088"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈniːz.dən ˈle⁀ɪn ˈnɔːθ",
            "phoneticLanguageCode": "en-GB",
            "text": "Neasden Lane North"
          }
        },
        "roundaboutExitNumber": 2,
        "routeOffsetInMeters": 1793,
        "routePath": [
          {
            "distanceInMeters": 1793,
            "point": {
              "latitude": 51.561968,
              "longitude": -0.256674
            },
            "travelTimeInSeconds": 385
          },
          {
            "distanceInMeters": 1819,
            "point": {
              "latitude": 51.5618366,
              "longitude": -0.2563521
            },
            "travelTimeInSeconds": 391
          },
          {
            "distanceInMeters": 1848,
            "point": {
              "latitude": 51.5616891,
              "longitude": -0.2560222
            },
            "travelTimeInSeconds": 398
          },
          {
            "distanceInMeters": 1860,
            "point": {
              "latitude": 51.561622,
              "longitude": -0.255872
            },
            "travelTimeInSeconds": 401
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 659,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 507,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 453,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 316,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 278,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 182,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 141,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 64,
            "side": "LEFT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": -107,
        "drivingSide": "LEFT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_LEFT",
        "maneuverPoint": {
          "latitude": 51.5607423,
          "longitude": -0.2531576
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A406"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈnɔːθ ˈsɜː.kjə.lə ˈɻə⁀ʊd",
            "phoneticLanguageCode": "en-GB",
            "text": "North Circular Road"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈniːz.dən ˈle⁀ɪn ˈnɔːθ",
            "phoneticLanguageCode": "en-GB",
            "text": "Neasden Lane North"
          }
        },
        "routeOffsetInMeters": 2037,
        "routePath": [
          {
            "distanceInMeters": 2037,
            "point": {
              "latitude": 51.5607557,
              "longitude": -0.253737
            },
            "travelTimeInSeconds": 494
          },
          {
            "distanceInMeters": 2053,
            "point": {
              "latitude": 51.5606993,
              "longitude": -0.2535304
            },
            "travelTimeInSeconds": 504
          },
          {
            "distanceInMeters": 2060,
            "point": {
              "latitude": 51.5606859,
              "longitude": -0.2534339
            },
            "travelTimeInSeconds": 509
          },
          {
            "distanceInMeters": 2066,
            "point": {
              "latitude": 51.5606913,
              "longitude": -0.2533481
            },
            "travelTimeInSeconds": 513
          },
          {
            "distanceInMeters": 2080,
            "point": {
              "latitude": 51.5607423,
              "longitude": -0.2531576
            },
            "travelTimeInSeconds": 520
          },
          {
            "distanceInMeters": 2090,
            "point": {
              "latitude": 51.5608317,
              "longitude": -0.2531151
            },
            "travelTimeInSeconds": 522
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 39,
            "side": "RIGHT"
          }
        ]
      },
      {
        "drivingSide": "LEFT",
        "intersectionName": {
          "text": ""
        },
        "maneuver": "KEEP_LEFT",
        "maneuverPoint": {
          "latitude": 51.575481,
          "longitude": -0.2202657
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈnɔːθ ˈsɜː.kjə.lə ˈɻə⁀ʊd",
            "phoneticLanguageCode": "en-GB",
            "text": "North Circular Road"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A406"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈnɔːθ ˈsɜː.kjə.lə ˈɻə⁀ʊd",
            "phoneticLanguageCode": "en-GB",
            "text": "North Circular Road"
          }
        },
        "routeOffsetInMeters": 5039,
        "routePath": [
          {
            "distanceInMeters": 5039,
            "point": {
              "latitude": 51.575481,
              "longitude": -0.2202657
            },
            "travelTimeInSeconds": 700
          }
        ],
        "sideRoads": [],
        "signpost": {
          "exitName": {
            "text": ""
          },
          "exitNumber": {
            "text": ""
          },
          "towardName": {
            "phonetic": "ˈkɪl.bɜːn",
            "phoneticLanguageCode": "en-GB",
            "text": "Kilburn"
          }
        }
      },
      {
        "changeOfAngleInDegrees": 79,
        "drivingSide": "LEFT",
        "maneuver": "ROUNDABOUT_RIGHT",
        "maneuverPoint": {
          "latitude": 51.5767255,
          "longitude": -0.2177498
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈbɻɛnt.fiːld ˈgɑː.dn̩z",
            "phoneticLanguageCode": "en-GB",
            "text": "Brentfield Gardens"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈnɔːθ ˈsɜː.kjə.lə ˈɻə⁀ʊd",
            "phoneticLanguageCode": "en-GB",
            "text": "North Circular Road"
          }
        },
        "roundaboutExitNumber": 3,
        "routeOffsetInMeters": 5216,
        "routePath": [
          {
            "distanceInMeters": 5216,
            "point": {
              "latitude": 51.5768087,
              "longitude": -0.2189541
            },
            "travelTimeInSeconds": 754
          },
          {
            "distanceInMeters": 5220,
            "point": {
              "latitude": 51.5768489,
              "longitude": -0.2189809
            },
            "travelTimeInSeconds": 756
          },
          {
            "distanceInMeters": 5225,
            "point": {
              "latitude": 51.5768918,
              "longitude": -0.2189943
            },
            "travelTimeInSeconds": 756
          },
          {
            "distanceInMeters": 5227,
            "point": {
              "latitude": 51.5769106,
              "longitude": -0.2189943
            },
            "travelTimeInSeconds": 757
          },
          {
            "distanceInMeters": 5234,
            "point": {
              "latitude": 51.5769723,
              "longitude": -0.2189782
            },
            "travelTimeInSeconds": 758
          },
          {
            "distanceInMeters": 5239,
            "point": {
              "latitude": 51.5770099,
              "longitude": -0.2189595
            },
            "travelTimeInSeconds": 758
          },
          {
            "distanceInMeters": 5247,
            "point": {
              "latitude": 51.5770715,
              "longitude": -0.2188843
            },
            "travelTimeInSeconds": 760
          },
          {
            "distanceInMeters": 5252,
            "point": {
              "latitude": 51.5771011,
              "longitude": -0.218828
            },
            "travelTimeInSeconds": 760
          },
          {
            "distanceInMeters": 5264,
            "point": {
              "latitude": 51.5771413,
              "longitude": -0.2186778
            },
            "travelTimeInSeconds": 762
          },
          {
            "distanceInMeters": 5271,
            "point": {
              "latitude": 51.5771386,
              "longitude": -0.2185786
            },
            "travelTimeInSeconds": 763
          },
          {
            "distanceInMeters": 5274,
            "point": {
              "latitude": 51.5771198,
              "longitude": -0.2185357
            },
            "travelTimeInSeconds": 763
          },
          {
            "distanceInMeters": 5303,
            "point": {
              "latitude": 51.5769723,
              "longitude": -0.218195
            },
            "travelTimeInSeconds": 767
          },
          {
            "distanceInMeters": 5315,
            "point": {
              "latitude": 51.5769079,
              "longitude": -0.2180636
            },
            "travelTimeInSeconds": 768
          },
          {
            "distanceInMeters": 5327,
            "point": {
              "latitude": 51.5768462,
              "longitude": -0.2179134
            },
            "travelTimeInSeconds": 770
          },
          {
            "distanceInMeters": 5341,
            "point": {
              "latitude": 51.5767658,
              "longitude": -0.2177659
            },
            "travelTimeInSeconds": 771
          },
          {
            "distanceInMeters": 5343,
            "point": {
              "latitude": 51.5767443,
              "longitude": -0.2177525
            },
            "travelTimeInSeconds": 772
          },
          {
            "distanceInMeters": 5345,
            "point": {
              "latitude": 51.5767255,
              "longitude": -0.2177498
            },
            "travelTimeInSeconds": 772
          }
        ],
        "sideRoads": [],
        "signpost": {
          "exitName": {
            "text": ""
          },
          "exitNumber": {
            "text": ""
          },
          "towardName": {
            "phonetic": "ˈsɛn.tɻəl ˈlʌn.dən",
            "phoneticLanguageCode": "en-GB",
            "text": "C. London"
          }
        }
      },
      {
        "drivingSide": "LEFT",
        "maneuver": "EXIT_ROUNDABOUT",
        "maneuverPoint": {
          "latitude": 51.5767255,
          "longitude": -0.2177498
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈbɻɛnt.fiːld ˈgɑː.dn̩z",
            "phoneticLanguageCode": "en-GB",
            "text": "Brentfield Gardens"
          }
        },
        "offsetOfAmbiguousExitFromManeuverInMeters": 74,
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈnɔːθ ˈsɜː.kjə.lə ˈɻə⁀ʊd",
            "phoneticLanguageCode": "en-GB",
            "text": "North Circular Road"
          }
        },
        "routeOffsetInMeters": 5345,
        "routePath": [
          {
            "distanceInMeters": 5345,
            "point": {
              "latitude": 51.5767255,
              "longitude": -0.2177498
            },
            "travelTimeInSeconds": 772
          }
        ],
        "sideRoads": []
      },
      {
        "drivingSide": "LEFT",
        "intersectionName": {
          "text": ""
        },
        "maneuver": "KEEP_RIGHT",
        "maneuverPoint": {
          "latitude": 51.559546,
          "longitude": -0.1979497
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A41"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈhɛn.dən ˈwe⁀ɪ",
            "phoneticLanguageCode": "en-GB",
            "text": "Hendon Way"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A41"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈhɛn.dən ˈwe⁀ɪ",
            "phoneticLanguageCode": "en-GB",
            "text": "Hendon Way"
          }
        },
        "routeOffsetInMeters": 7800,
        "routePath": [
          {
            "distanceInMeters": 7800,
            "point": {
              "latitude": 51.559546,
              "longitude": -0.1979497
            },
            "travelTimeInSeconds": 996
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 766,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 711,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 630,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 445,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 386,
            "side": "LEFT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": 73,
        "drivingSide": "LEFT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_RIGHT",
        "maneuverPoint": {
          "latitude": 51.5595433,
          "longitude": -0.1968768
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A41"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈfɪnt⁀ʃ.lɪ ˈɻə⁀ʊd",
            "phoneticLanguageCode": "en-GB",
            "text": "Finchley Road"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A41"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈhɛn.dən ˈwe⁀ɪ",
            "phoneticLanguageCode": "en-GB",
            "text": "Hendon Way"
          }
        },
        "routeOffsetInMeters": 7867,
        "routePath": [
          {
            "distanceInMeters": 7867,
            "point": {
              "latitude": 51.5595299,
              "longitude": -0.1969922
            },
            "travelTimeInSeconds": 1015
          },
          {
            "distanceInMeters": 7875,
            "point": {
              "latitude": 51.5595433,
              "longitude": -0.1968768
            },
            "travelTimeInSeconds": 1017
          },
          {
            "distanceInMeters": 7888,
            "point": {
              "latitude": 51.559428,
              "longitude": -0.1968393
            },
            "travelTimeInSeconds": 1019
          },
          {
            "distanceInMeters": 7898,
            "point": {
              "latitude": 51.5593444,
              "longitude": -0.1967938
            },
            "travelTimeInSeconds": 1020
          }
        ],
        "sideRoads": []
      },
      {
        "changeOfAngleInDegrees": 112,
        "drivingSide": "LEFT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_RIGHT",
        "maneuverPoint": {
          "latitude": 51.5418729,
          "longitude": -0.1735979
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A41"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈæ.də.le⁀ɪd ˈɻə⁀ʊd",
            "phoneticLanguageCode": "en-GB",
            "text": "Adelaide Road"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A41"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈæ.və.njuː ˈɻə⁀ʊd",
            "phoneticLanguageCode": "en-GB",
            "text": "Avenue Road"
          }
        },
        "routeOffsetInMeters": 10485,
        "routePath": [
          {
            "distanceInMeters": 10485,
            "point": {
              "latitude": 51.5420955,
              "longitude": -0.1735201
            },
            "travelTimeInSeconds": 1466
          },
          {
            "distanceInMeters": 10500,
            "point": {
              "latitude": 51.5419695,
              "longitude": -0.1735094
            },
            "travelTimeInSeconds": 1471
          },
          {
            "distanceInMeters": 10507,
            "point": {
              "latitude": 51.5419051,
              "longitude": -0.1735443
            },
            "travelTimeInSeconds": 1474
          },
          {
            "distanceInMeters": 10512,
            "point": {
              "latitude": 51.5418729,
              "longitude": -0.1735979
            },
            "travelTimeInSeconds": 1476
          },
          {
            "distanceInMeters": 10528,
            "point": {
              "latitude": 51.5418005,
              "longitude": -0.1737884
            },
            "travelTimeInSeconds": 1479
          },
          {
            "distanceInMeters": 10533,
            "point": {
              "latitude": 51.5417951,
              "longitude": -0.1738662
            },
            "travelTimeInSeconds": 1482
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 918,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 904,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 758,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 709,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 628,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 535,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 524,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 251,
            "side": "LEFT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": -34,
        "drivingSide": "LEFT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "landmark": "AT_TRAFFIC_LIGHT",
        "maneuver": "TURN_LEFT",
        "maneuverPoint": {
          "latitude": 51.5416932,
          "longitude": -0.1749471
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A41"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈfɪnt⁀ʃ.lɪ ˈɻə⁀ʊd",
            "phoneticLanguageCode": "en-GB",
            "text": "Finchley Road"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A41"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈæ.də.le⁀ɪd ˈɻə⁀ʊd",
            "phoneticLanguageCode": "en-GB",
            "text": "Adelaide Road"
          }
        },
        "routeOffsetInMeters": 10609,
        "routePath": [
          {
            "distanceInMeters": 10609,
            "point": {
              "latitude": 51.5416932,
              "longitude": -0.1749471
            },
            "travelTimeInSeconds": 1492
          },
          {
            "distanceInMeters": 10619,
            "point": {
              "latitude": 51.541641,
              "longitude": -0.1750634
            },
            "travelTimeInSeconds": 1494
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 47,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 41,
            "side": "RIGHT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": -50,
        "drivingSide": "LEFT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_LEFT",
        "maneuverPoint": {
          "latitude": 51.530216,
          "longitude": -0.1692393
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A41"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈwɛ.lɪŋ.tn̩ ˈɻə⁀ʊd",
            "phoneticLanguageCode": "en-GB",
            "text": "Wellington Road"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A41"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈwɛ.lɪŋ.tn̩ ˈɻə⁀ʊd",
            "phoneticLanguageCode": "en-GB",
            "text": "Wellington Road"
          }
        },
        "routeOffsetInMeters": 12057,
        "routePath": [
          {
            "distanceInMeters": 12057,
            "point": {
              "latitude": 51.530216,
              "longitude": -0.1692393
            },
            "travelTimeInSeconds": 1746
          },
          {
            "distanceInMeters": 12064,
            "point": {
              "latitude": 51.5301973,
              "longitude": -0.1691347
            },
            "travelTimeInSeconds": 1749
          },
          {
            "distanceInMeters": 12070,
            "point": {
              "latitude": 51.5301704,
              "longitude": -0.1690623
            },
            "travelTimeInSeconds": 1750
          },
          {
            "distanceInMeters": 12079,
            "point": {
              "latitude": 51.5301329,
              "longitude": -0.168955
            },
            "travelTimeInSeconds": 1751
          },
          {
            "distanceInMeters": 12085,
            "point": {
              "latitude": 51.5301195,
              "longitude": -0.1688665
            },
            "travelTimeInSeconds": 1751
          },
          {
            "distanceInMeters": 12087,
            "point": {
              "latitude": 51.5301141,
              "longitude": -0.168837
            },
            "travelTimeInSeconds": 1752
          },
          {
            "distanceInMeters": 12095,
            "point": {
              "latitude": 51.5301108,
              "longitude": -0.1687256
            },
            "travelTimeInSeconds": 1753
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 941,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 838,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 795,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 720,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 665,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 637,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 577,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 469,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 428,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 356,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 333,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 175,
            "side": "LEFT_AND_RIGHT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": 58,
        "drivingSide": "LEFT",
        "maneuver": "ROUNDABOUT_SLIGHT_RIGHT",
        "maneuverPoint": {
          "latitude": 51.5300739,
          "longitude": -0.1675388
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A41"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈpɑːk ˈɻə⁀ʊd",
            "phoneticLanguageCode": "en-GB",
            "text": "Park Road"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A41"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈwɛ.lɪŋ.tn̩ ˈɻə⁀ʊd",
            "phoneticLanguageCode": "en-GB",
            "text": "Wellington Road"
          }
        },
        "roundaboutExitNumber": 2,
        "routeOffsetInMeters": 12137,
        "routePath": [
          {
            "distanceInMeters": 12137,
            "point": {
              "latitude": 51.5301812,
              "longitude": -0.168137
            },
            "travelTimeInSeconds": 1758
          },
          {
            "distanceInMeters": 12141,
            "point": {
              "latitude": 51.530216,
              "longitude": -0.1681101
            },
            "travelTimeInSeconds": 1758
          },
          {
            "distanceInMeters": 12145,
            "point": {
              "latitude": 51.5302455,
              "longitude": -0.1680833
            },
            "travelTimeInSeconds": 1759
          },
          {
            "distanceInMeters": 12148,
            "point": {
              "latitude": 51.530267,
              "longitude": -0.1680538
            },
            "travelTimeInSeconds": 1759
          },
          {
            "distanceInMeters": 12153,
            "point": {
              "latitude": 51.5302885,
              "longitude": -0.1679948
            },
            "travelTimeInSeconds": 1760
          },
          {
            "distanceInMeters": 12159,
            "point": {
              "latitude": 51.5303099,
              "longitude": -0.167909
            },
            "travelTimeInSeconds": 1761
          },
          {
            "distanceInMeters": 12170,
            "point": {
              "latitude": 51.5303019,
              "longitude": -0.167748
            },
            "travelTimeInSeconds": 1762
          },
          {
            "distanceInMeters": 12175,
            "point": {
              "latitude": 51.5302858,
              "longitude": -0.1676837
            },
            "travelTimeInSeconds": 1763
          },
          {
            "distanceInMeters": 12180,
            "point": {
              "latitude": 51.5302643,
              "longitude": -0.1676273
            },
            "travelTimeInSeconds": 1763
          },
          {
            "distanceInMeters": 12186,
            "point": {
              "latitude": 51.5302241,
              "longitude": -0.1675737
            },
            "travelTimeInSeconds": 1764
          },
          {
            "distanceInMeters": 12203,
            "point": {
              "latitude": 51.5300739,
              "longitude": -0.1675388
            },
            "travelTimeInSeconds": 1767
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 13,
            "side": "LEFT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": 101,
        "drivingSide": "LEFT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "landmark": "AT_TRAFFIC_LIGHT",
        "maneuver": "TURN_RIGHT",
        "maneuverPoint": {
          "latitude": 51.5137339,
          "longitude": -0.1559624
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A40"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈɒks.fəd ˈstɻiːt",
            "phoneticLanguageCode": "en-GB",
            "text": "Oxford Street"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A4380"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈpɔːt.mən ˈstɻiːt",
            "phoneticLanguageCode": "en-GB",
            "text": "Portman Street"
          }
        },
        "routeOffsetInMeters": 14243,
        "routePath": [
          {
            "distanceInMeters": 14243,
            "point": {
              "latitude": 51.5137339,
              "longitude": -0.1559624
            },
            "travelTimeInSeconds": 2339
          },
          {
            "distanceInMeters": 14253,
            "point": {
              "latitude": 51.5137164,
              "longitude": -0.156104
            },
            "travelTimeInSeconds": 2344
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 985,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 921,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 856,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 786,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 716,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 621,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 468,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 388,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 331,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 261,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 152,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 92,
            "side": "RIGHT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": -119,
        "drivingSide": "LEFT",
        "maneuver": "ROUNDABOUT_SHARP_LEFT",
        "maneuverPoint": {
          "latitude": 51.5129453,
          "longitude": -0.1581028
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A4202"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈpɑːk ˈle⁀ɪn",
            "phoneticLanguageCode": "en-GB",
            "text": "Park Lane"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A40"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈɒks.fəd ˈstɻiːt",
            "phoneticLanguageCode": "en-GB",
            "text": "Oxford Street"
          }
        },
        "roundaboutExitNumber": 1,
        "routeOffsetInMeters": 14430,
        "routePath": [
          {
            "distanceInMeters": 14430,
            "point": {
              "latitude": 51.5132108,
              "longitude": -0.1582879
            },
            "travelTimeInSeconds": 2404
          },
          {
            "distanceInMeters": 14435,
            "point": {
              "latitude": 51.5131733,
              "longitude": -0.1582342
            },
            "travelTimeInSeconds": 2405
          },
          {
            "distanceInMeters": 14462,
            "point": {
              "latitude": 51.5129453,
              "longitude": -0.1581028
            },
            "travelTimeInSeconds": 2408
          }
        ],
        "sideRoads": []
      },
      {
        "changeOfAngleInDegrees": 4,
        "drivingSide": "LEFT",
        "maneuver": "ROUNDABOUT_STRAIGHT",
        "maneuverPoint": {
          "latitude": 51.5019965,
          "longitude": -0.1512095
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈdjuːk əv ˈwɛ.lɪŋ.tn̩ ˈple⁀ɪs",
            "phoneticLanguageCode": "en-GB",
            "text": "Duke of Wellington Place"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A4202"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈpɑːk ˈle⁀ɪn",
            "phoneticLanguageCode": "en-GB",
            "text": "Park Lane"
          }
        },
        "roundaboutExitNumber": 3,
        "routeOffsetInMeters": 15688,
        "routePath": [
          {
            "distanceInMeters": 15688,
            "point": {
              "latitude": 51.5032893,
              "longitude": -0.1508099
            },
            "travelTimeInSeconds": 2624
          },
          {
            "distanceInMeters": 15693,
            "point": {
              "latitude": 51.5032974,
              "longitude": -0.1507267
            },
            "travelTimeInSeconds": 2625
          },
          {
            "distanceInMeters": 15717,
            "point": {
              "latitude": 51.5033135,
              "longitude": -0.1503834
            },
            "travelTimeInSeconds": 2628
          },
          {
            "distanceInMeters": 15732,
            "point": {
              "latitude": 51.5032947,
              "longitude": -0.1501796
            },
            "travelTimeInSeconds": 2630
          },
          {
            "distanceInMeters": 15738,
            "point": {
              "latitude": 51.5032759,
              "longitude": -0.1500937
            },
            "travelTimeInSeconds": 2631
          },
          {
            "distanceInMeters": 15742,
            "point": {
              "latitude": 51.5032625,
              "longitude": -0.1500455
            },
            "travelTimeInSeconds": 2632
          },
          {
            "distanceInMeters": 15748,
            "point": {
              "latitude": 51.503233,
              "longitude": -0.149973
            },
            "travelTimeInSeconds": 2633
          },
          {
            "distanceInMeters": 15755,
            "point": {
              "latitude": 51.5031928,
              "longitude": -0.1498899
            },
            "travelTimeInSeconds": 2634
          },
          {
            "distanceInMeters": 15761,
            "point": {
              "latitude": 51.5031445,
              "longitude": -0.1498362
            },
            "travelTimeInSeconds": 2635
          },
          {
            "distanceInMeters": 15768,
            "point": {
              "latitude": 51.5030828,
              "longitude": -0.1498121
            },
            "travelTimeInSeconds": 2637
          },
          {
            "distanceInMeters": 15783,
            "point": {
              "latitude": 51.5029514,
              "longitude": -0.149796
            },
            "travelTimeInSeconds": 2641
          },
          {
            "distanceInMeters": 15789,
            "point": {
              "latitude": 51.5029004,
              "longitude": -0.1497987
            },
            "travelTimeInSeconds": 2642
          },
          {
            "distanceInMeters": 15799,
            "point": {
              "latitude": 51.5028092,
              "longitude": -0.1498067
            },
            "travelTimeInSeconds": 2645
          },
          {
            "distanceInMeters": 15816,
            "point": {
              "latitude": 51.502659,
              "longitude": -0.1498497
            },
            "travelTimeInSeconds": 2650
          },
          {
            "distanceInMeters": 15827,
            "point": {
              "latitude": 51.5025678,
              "longitude": -0.1498979
            },
            "travelTimeInSeconds": 2652
          },
          {
            "distanceInMeters": 15830,
            "point": {
              "latitude": 51.5025437,
              "longitude": -0.1499194
            },
            "travelTimeInSeconds": 2653
          },
          {
            "distanceInMeters": 15837,
            "point": {
              "latitude": 51.5024874,
              "longitude": -0.1499811
            },
            "travelTimeInSeconds": 2654
          },
          {
            "distanceInMeters": 15849,
            "point": {
              "latitude": 51.5024096,
              "longitude": -0.1501018
            },
            "travelTimeInSeconds": 2656
          },
          {
            "distanceInMeters": 15863,
            "point": {
              "latitude": 51.5023425,
              "longitude": -0.1502761
            },
            "travelTimeInSeconds": 2659
          },
          {
            "distanceInMeters": 15878,
            "point": {
              "latitude": 51.5022835,
              "longitude": -0.1504585
            },
            "travelTimeInSeconds": 2662
          },
          {
            "distanceInMeters": 15886,
            "point": {
              "latitude": 51.502246,
              "longitude": -0.1505551
            },
            "travelTimeInSeconds": 2665
          },
          {
            "distanceInMeters": 15929,
            "point": {
              "latitude": 51.5020448,
              "longitude": -0.1510862
            },
            "travelTimeInSeconds": 2678
          },
          {
            "distanceInMeters": 15934,
            "point": {
              "latitude": 51.5020233,
              "longitude": -0.1511452
            },
            "travelTimeInSeconds": 2680
          },
          {
            "distanceInMeters": 15939,
            "point": {
              "latitude": 51.5019965,
              "longitude": -0.1512095
            },
            "travelTimeInSeconds": 2681
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 998,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 936,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 719,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 585,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 415,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 323,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 212,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 104,
            "side": "RIGHT"
          }
        ]
      },
      {
        "drivingSide": "LEFT",
        "maneuver": "EXIT_ROUNDABOUT",
        "maneuverPoint": {
          "latitude": 51.5019965,
          "longitude": -0.1512095
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈdjuːk əv ˈwɛ.lɪŋ.tn̩ ˈple⁀ɪs",
            "phoneticLanguageCode": "en-GB",
            "text": "Duke of Wellington Place"
          }
        },
        "offsetOfAmbiguousExitFromManeuverInMeters": 122,
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A4202"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈpɑːk ˈle⁀ɪn",
            "phoneticLanguageCode": "en-GB",
            "text": "Park Lane"
          }
        },
        "routeOffsetInMeters": 15939,
        "routePath": [
          {
            "distanceInMeters": 15939,
            "point": {
              "latitude": 51.5019965,
              "longitude": -0.1512095
            },
            "travelTimeInSeconds": 2681
          }
        ],
        "sideRoads": []
      },
      {
        "changeOfAngleInDegrees": -68,
        "drivingSide": "LEFT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_LEFT",
        "maneuverPoint": {
          "latitude": 51.4983568,
          "longitude": -0.147146
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A302"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈlə⁀ʊ.ə ˈgɻə⁀ʊv.nə ˈple⁀ɪs",
            "phoneticLanguageCode": "en-GB",
            "text": "Lower Grosvenor Place"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A302"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈgɻə⁀ʊv.nə ˈple⁀ɪs",
            "phoneticLanguageCode": "en-GB",
            "text": "Grosvenor Place"
          }
        },
        "routeOffsetInMeters": 16449,
        "routePath": [
          {
            "distanceInMeters": 16449,
            "point": {
              "latitude": 51.4983568,
              "longitude": -0.147146
            },
            "travelTimeInSeconds": 2760
          },
          {
            "distanceInMeters": 16462,
            "point": {
              "latitude": 51.4982897,
              "longitude": -0.1469877
            },
            "travelTimeInSeconds": 2765
          },
          {
            "distanceInMeters": 16468,
            "point": {
              "latitude": 51.4982656,
              "longitude": -0.1469126
            },
            "travelTimeInSeconds": 2766
          },
          {
            "distanceInMeters": 16476,
            "point": {
              "latitude": 51.4982414,
              "longitude": -0.1467946
            },
            "travelTimeInSeconds": 2768
          },
          {
            "distanceInMeters": 16483,
            "point": {
              "latitude": 51.4982361,
              "longitude": -0.1466927
            },
            "travelTimeInSeconds": 2769
          },
          {
            "distanceInMeters": 16492,
            "point": {
              "latitude": 51.4982495,
              "longitude": -0.1465666
            },
            "travelTimeInSeconds": 2770
          }
        ],
        "sideRoads": []
      },
      {
        "drivingSide": "LEFT",
        "intersectionName": {
          "text": ""
        },
        "maneuver": "KEEP_RIGHT",
        "maneuverPoint": {
          "latitude": 51.4981636,
          "longitude": -0.1442412
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A302"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈlə⁀ʊ.ə ˈgɻə⁀ʊv.nə ˈple⁀ɪs",
            "phoneticLanguageCode": "en-GB",
            "text": "Lower Grosvenor Place"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A302"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈlə⁀ʊ.ə ˈgɻə⁀ʊv.nə ˈple⁀ɪs",
            "phoneticLanguageCode": "en-GB",
            "text": "Lower Grosvenor Place"
          }
        },
        "routeOffsetInMeters": 16655,
        "routePath": [
          {
            "distanceInMeters": 16655,
            "point": {
              "latitude": 51.4981636,
              "longitude": -0.1442412
            },
            "travelTimeInSeconds": 2807
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 88,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 27,
            "side": "RIGHT"
          }
        ]
      },
      {
        "drivingSide": "LEFT",
        "intersectionName": {
          "text": ""
        },
        "maneuver": "KEEP_LEFT",
        "maneuverPoint": {
          "latitude": 51.4968306,
          "longitude": -0.1418298
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A302"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈbɻɛ.sn̩.dən ˈple⁀ɪs",
            "phoneticLanguageCode": "en-GB",
            "text": "Bressenden Place"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A302"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈbɻɛ.sn̩.dən ˈple⁀ɪs",
            "phoneticLanguageCode": "en-GB",
            "text": "Bressenden Place"
          }
        },
        "routeOffsetInMeters": 16903,
        "routePath": [
          {
            "distanceInMeters": 16903,
            "point": {
              "latitude": 51.4968306,
              "longitude": -0.1418298
            },
            "travelTimeInSeconds": 2890
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 223,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 165,
            "side": "LEFT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": 90,
        "drivingSide": "LEFT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_RIGHT",
        "maneuverPoint": {
          "latitude": 51.4983916,
          "longitude": -0.1325226
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈæ.bɪ ˈɔː.t⁀ʃəd ˈstɻiːt",
            "phoneticLanguageCode": "en-GB",
            "text": "Abbey Orchard Street"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A302"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "vɪk.ˈtɔː.ɻɪ.ə ˈstɻiːt",
            "phoneticLanguageCode": "en-GB",
            "text": "Victoria Street"
          }
        },
        "routeOffsetInMeters": 17590,
        "routePath": [
          {
            "distanceInMeters": 17590,
            "point": {
              "latitude": 51.4983916,
              "longitude": -0.1325226
            },
            "travelTimeInSeconds": 3072
          },
          {
            "distanceInMeters": 17600,
            "point": {
              "latitude": 51.4983179,
              "longitude": -0.1324533
            },
            "travelTimeInSeconds": 3084
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 498,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 241,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 118,
            "side": "LEFT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": -79,
        "drivingSide": "LEFT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_LEFT",
        "maneuverPoint": {
          "latitude": 51.4968386,
          "longitude": -0.1321122
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈgɻe⁀ɪt ˈpiː.tə ˈstɻiːt",
            "phoneticLanguageCode": "en-GB",
            "text": "Great Peter Street"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈpɜː.kɪnz ˈɻɛnts",
            "phoneticLanguageCode": "en-GB",
            "text": "Perkin's Rents"
          }
        },
        "routeOffsetInMeters": 17769,
        "routePath": [
          {
            "distanceInMeters": 17769,
            "point": {
              "latitude": 51.4968386,
              "longitude": -0.1321122
            },
            "travelTimeInSeconds": 3117
          },
          {
            "distanceInMeters": 17779,
            "point": {
              "latitude": 51.4968415,
              "longitude": -0.1319674
            },
            "travelTimeInSeconds": 3123
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 133,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 97,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 79,
            "side": "LEFT_AND_RIGHT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": -90,
        "drivingSide": "LEFT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_LEFT",
        "maneuverPoint": {
          "latitude": 51.4969781,
          "longitude": -0.1256078
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A3212"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈæ.bɪŋ.dən ˈstɻiːt",
            "phoneticLanguageCode": "en-GB",
            "text": "Abingdon Street"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈgɻe⁀ɪt ˈpiː.tə ˈstɻiːt",
            "phoneticLanguageCode": "en-GB",
            "text": "Great Peter Street"
          }
        },
        "routeOffsetInMeters": 18222,
        "routePath": [
          {
            "distanceInMeters": 18222,
            "point": {
              "latitude": 51.4969781,
              "longitude": -0.1256078
            },
            "travelTimeInSeconds": 3236
          },
          {
            "distanceInMeters": 18232,
            "point": {
              "latitude": 51.4970696,
              "longitude": -0.1256189
            },
            "travelTimeInSeconds": 3243
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 427,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 416,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 363,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 328,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 261,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 204,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 147,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 106,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 71,
            "side": "LEFT"
          }
        ]
      },
      {
        "drivingSide": "LEFT",
        "maneuver": "ARRIVE_RIGHT",
        "maneuverPoint": {
          "latitude": 51.5001137,
          "longitude": -0.1262861
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A3212"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈsn̩t ˈmɑː.gɻət ˈstɻiːt",
            "phoneticLanguageCode": "en-GB",
            "text": "Saint Margaret Street"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A3212"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈsn̩t ˈmɑː.gɻət ˈstɻiːt",
            "phoneticLanguageCode": "en-GB",
            "text": "Saint Margaret Street"
          }
        },
        "routeOffsetInMeters": 18576,
        "routePath": [
          {
            "distanceInMeters": 18576,
            "point": {
              "latitude": 51.5001137,
              "longitude": -0.1262861
            },
            "travelTimeInSeconds": 0
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 288,
            "side": "LEFT"
          }
        ]
      }
    ]
  },
  "progress": [
    {
      "pointIndex": 0,
      "travelTimeInSeconds": 0,
      "distanceInMeters": 0
    },
    {
      "pointIndex": 1,
      "travelTimeInSeconds": 10,
      "distanceInMeters": 40
    },
    {
      "pointIndex": 2,
      "travelTimeInSeconds": 74,
      "distanceInMeters": 175
    },
    {
      "pointIndex": 3,
      "travelTimeInSeconds": 139,
      "distanceInMeters": 211
    },
    {
      "pointIndex": 5,
      "travelTimeInSeconds": 158,
      "distanceInMeters": 254
    },
    {
      "pointIndex": 16,
      "travelTimeInSeconds": 184,
      "distanceInMeters": 463
    },
    {
      "pointIndex": 20,
      "travelTimeInSeconds": 204,
      "distanceInMeters": 593
    },
    {
      "pointIndex": 36,
      "travelTimeInSeconds": 240,
      "distanceInMeters": 971
    },
    {
      "pointIndex": 50,
      "travelTimeInSeconds": 263,
      "distanceInMeters": 1094
    },
    {
      "pointIndex": 64,
      "travelTimeInSeconds": 340,
      "distanceInMeters": 1517
    },
    {
      "pointIndex": 69,
      "travelTimeInSeconds": 361,
      "distanceInMeters": 1614
    },
    {
      "pointIndex": 78,
      "travelTimeInSeconds": 399,
      "distanceInMeters": 1852
    },
    {
      "pointIndex": 80,
      "travelTimeInSeconds": 419,
      "distanceInMeters": 1905
    },
    {
      "pointIndex": 87,
      "travelTimeInSeconds": 522,
      "distanceInMeters": 2085
    },
    {
      "pointIndex": 167,
      "travelTimeInSeconds": 697,
      "distanceInMeters": 5004
    },
    {
      "pointIndex": 173,
      "travelTimeInSeconds": 721,
      "distanceInMeters": 5123
    },
    {
      "pointIndex": 183,
      "travelTimeInSeconds": 759,
      "distanceInMeters": 5244
    },
    {
      "pointIndex": 212,
      "travelTimeInSeconds": 809,
      "distanceInMeters": 5728
    },
    {
      "pointIndex": 227,
      "travelTimeInSeconds": 862,
      "distanceInMeters": 6493
    },
    {
      "pointIndex": 235,
      "travelTimeInSeconds": 878,
      "distanceInMeters": 6682
    },
    {
      "pointIndex": 239,
      "travelTimeInSeconds": 896,
      "distanceInMeters": 6823
    },
    {
      "pointIndex": 245,
      "travelTimeInSeconds": 923,
      "distanceInMeters": 7221
    },
    {
      "pointIndex": 250,
      "travelTimeInSeconds": 955,
      "distanceInMeters": 7380
    },
    {
      "pointIndex": 260,
      "travelTimeInSeconds": 988,
      "distanceInMeters": 7754
    },
    {
      "pointIndex": 274,
      "travelTimeInSeconds": 1043,
      "distanceInMeters": 7996
    },
    {
      "pointIndex": 277,
      "travelTimeInSeconds": 1068,
      "distanceInMeters": 8089
    },
    {
      "pointIndex": 288,
      "travelTimeInSeconds": 1125,
      "distanceInMeters": 8512
    },
    {
      "pointIndex": 293,
      "travelTimeInSeconds": 1147,
      "distanceInMeters": 8646
    },
    {
      "pointIndex": 304,
      "travelTimeInSeconds": 1192,
      "distanceInMeters": 8963
    },
    {
      "pointIndex": 314,
      "travelTimeInSeconds": 1225,
      "distanceInMeters": 9197
    },
    {
      "pointIndex": 334,
      "travelTimeInSeconds": 1290,
      "distanceInMeters": 9548
    },
    {
      "pointIndex": 341,
      "travelTimeInSeconds": 1311,
      "distanceInMeters": 9651
    },
    {
      "pointIndex": 377,
      "travelTimeInSeconds": 1425,
      "distanceInMeters": 10233
    },
    {
      "pointIndex": 383,
      "travelTimeInSeconds": 1446,
      "distanceInMeters": 10330
    },
    {
      "pointIndex": 392,
      "travelTimeInSeconds": 1471,
      "distanceInMeters": 10498
    },
    {
      "pointIndex": 410,
      "travelTimeInSeconds": 1506,
      "distanceInMeters": 10715
    },
    {
      "pointIndex": 425,
      "travelTimeInSeconds": 1557,
      "distanceInMeters": 11112
    },
    {
      "pointIndex": 443,
      "travelTimeInSeconds": 1622,
      "distanceInMeters": 11414
    },
    {
      "pointIndex": 446,
      "travelTimeInSeconds": 1655,
      "distanceInMeters": 11474
    },
    {
      "pointIndex": 452,
      "travelTimeInSeconds": 1679,
      "distanceInMeters": 11582
    },
    {
      "pointIndex": 454,
      "travelTimeInSeconds": 1699,
      "distanceInMeters": 11658
    },
    {
      "pointIndex": 482,
      "travelTimeInSeconds": 1766,
      "distanceInMeters": 12199
    },
    {
      "pointIndex": 494,
      "travelTimeInSeconds": 1801,
      "distanceInMeters": 12375
    },
    {
      "pointIndex": 499,
      "travelTimeInSeconds": 1823,
      "distanceInMeters": 12448
    },
    {
      "pointIndex": 512,
      "travelTimeInSeconds": 1860,
      "distanceInMeters": 12738
    },
    {
      "pointIndex": 518,
      "travelTimeInSeconds": 1908,
      "distanceInMeters": 12835
    },
    {
      "pointIndex": 522,
      "travelTimeInSeconds": 1923,
      "distanceInMeters": 12865
    },
    {
      "pointIndex": 531,
      "travelTimeInSeconds": 1966,
      "distanceInMeters": 13148
    },
    {
      "pointIndex": 536,
      "travelTimeInSeconds": 1994,
      "distanceInMeters": 13217
    },
    {
      "pointIndex": 538,
      "travelTimeInSeconds": 2007,
      "distanceInMeters": 13256
    },
    {
      "pointIndex": 540,
      "travelTimeInSeconds": 2039,
      "distanceInMeters": 13294
    },
    {
      "pointIndex": 546,
      "travelTimeInSeconds": 2054,
      "distanceInMeters": 13385
    },
    {
      "pointIndex": 549,
      "travelTimeInSeconds": 2112,
      "distanceInMeters": 13525
    },
    {
      "pointIndex": 550,
      "travelTimeInSeconds": 2118,
      "distanceInMeters": 13558
    },
    {
      "pointIndex": 553,
      "travelTimeInSeconds": 2143,
      "distanceInMeters": 13621
    },
    {
      "pointIndex": 555,
      "travelTimeInSeconds": 2162,
      "distanceInMeters": 13774
    },
    {
      "pointIndex": 562,
      "travelTimeInSeconds": 2191,
      "distanceInMeters": 13892
    },
    {
      "pointIndex": 568,
      "travelTimeInSeconds": 2234,
      "distanceInMeters": 14050
    },
    {
      "pointIndex": 569,
      "travelTimeInSeconds": 2257,
      "distanceInMeters": 14089
    },
    {
      "pointIndex": 571,
      "travelTimeInSeconds": 2273,
      "distanceInMeters": 14149
    },
    {
      "pointIndex": 573,
      "travelTimeInSeconds": 2298,
      "distanceInMeters": 14190
    },
    {
      "pointIndex": 575,
      "travelTimeInSeconds": 2338,
      "distanceInMeters": 14242
    },
    {
      "pointIndex": 577,
      "travelTimeInSeconds": 2366,
      "distanceInMeters": 14312
    },
    {
      "pointIndex": 580,
      "travelTimeInSeconds": 2388,
      "distanceInMeters": 14382
    },
    {
      "pointIndex": 585,
      "travelTimeInSeconds": 2401,
      "distanceInMeters": 14413
    },
    {
      "pointIndex": 608,
      "travelTimeInSeconds": 2457,
      "distanceInMeters": 14831
    },
    {
      "pointIndex": 617,
      "travelTimeInSeconds": 2488,
      "distanceInMeters": 15138
    },
    {
      "pointIndex": 634,
      "travelTimeInSeconds": 2554,
      "distanceInMeters": 15498
    },
    {
      "pointIndex": 641,
      "travelTimeInSeconds": 2609,
      "distanceInMeters": 15648
    },
    {
      "pointIndex": 645,
      "travelTimeInSeconds": 2625,
      "distanceInMeters": 15693
    },
    {
      "pointIndex": 664,
      "travelTimeInSeconds": 2664,
      "distanceInMeters": 15884
    },
    {
      "pointIndex": 671,
      "travelTimeInSeconds": 2687,
      "distanceInMeters": 15982
    },
    {
      "pointIndex": 680,
      "travelTimeInSeconds": 2736,
      "distanceInMeters": 16342
    },
    {
      "pointIndex": 695,
      "travelTimeInSeconds": 2806,
      "distanceInMeters": 16654
    },
    {
      "pointIndex": 710,
      "travelTimeInSeconds": 2867,
      "distanceInMeters": 16865
    },
    {
      "pointIndex": 714,
      "travelTimeInSeconds": 2900,
      "distanceInMeters": 16934
    },
    {
      "pointIndex": 718,
      "travelTimeInSeconds": 2929,
      "distanceInMeters": 17040
    },
    {
      "pointIndex": 722,
      "travelTimeInSeconds": 2953,
      "distanceInMeters": 17095
    },
    {
      "pointIndex": 731,
      "travelTimeInSeconds": 2981,
      "distanceInMeters": 17285
    },
    {
      "pointIndex": 734,
      "travelTimeInSeconds": 3021,
      "distanceInMeters": 17347
    },
    {
      "pointIndex": 742,
      "travelTimeInSeconds": 3041,
      "distanceInMeters": 17436
    },
    {
      "pointIndex": 746,
      "travelTimeInSeconds": 3070,
      "distanceInMeters": 17589
    },
    {
      "pointIndex": 747,
      "travelTimeInSeconds": 3084,
      "distanceInMeters": 17601
    },
    {
      "pointIndex": 757,
      "travelTimeInSeconds": 3117,
      "distanceInMeters": 17769
    },
    {
      "pointIndex": 760,
      "travelTimeInSeconds": 3132,
      "distanceInMeters": 17805
    },
    {
      "pointIndex": 764,
      "travelTimeInSeconds": 3147,
      "distanceInMeters": 17893
    },
    {
      "pointIndex": 767,
      "travelTimeInSeconds": 3184,
      "distanceInMeters": 17964
    },
    {
      "pointIndex": 774,
      "travelTimeInSeconds": 3211,
      "distanceInMeters": 18150
    },
    {
      "pointIndex": 776,
      "travelTimeInSeconds": 3248,
      "distanceInMeters": 18238
    },
    {
      "pointIndex": 782,
      "travelTimeInSeconds": 3286,
      "distanceInMeters": 18396
    },
    {
      "pointIndex": 787,
      "travelTimeInSeconds": 3339,
      "distanceInMeters": 18526
    },
    {
      "pointIndex": 793,
      "travelTimeInSeconds": 3376,
      "distanceInMeters": 18575
    }
  ]
};

const zip = (a, b) => Array.from(Array(Math.min(b.length, a.length)), (_, i) => [a[i], b[i]]);
const tail = ([, ...t]) => t;

Number.prototype.between = function(xs) { return xs[0] <= this && this < xs[1] };

Array.prototype.dropWhile = function(cb) {
    const n = this.length;
    let i = 0;

    for (; i < n; i++) {
        if (!cb(this[i])) {
            break;
        }
    }

    return this.slice(i);
}

function formatDate(plainDateTime) {
  const formatter = new Intl.DateTimeFormat('fr-CA', {
    dateStyle: 'short',
    timeStyle: 'long',
    timeZone: 'UTC'
  });

  const { year, month, day, hour, minute, second, timeZone } = formatter
    .formatToParts(plainDateTime)
    .reduce((result, { type, value }) => {
      if (type !== 'literal') {
        result[type] = value;
      }
      return result;
    }, {});

  return `${year}-${month}-${day}T${hour}:${minute}:${second}Z`;
}

function addSecondsToDate(date, seconds) {
  return new Date(Date.parse(date) + 1000*seconds);
}

function distance(point, lat, lon) {
  let dy = point.latitude - lat;
  let dx = point.longitude - lon;
  return dx*dx + dy*dy;
}

function closestPointIndex(route, lat, lon) {
  let ds = route.legs[0].points.map((p) => distance(p, lat, lon));
  return ds.indexOf(Math.min(...ds));
}

function cutProgress(progress, index) {
  const segments = zip(progress, tail(progress)).map(([a, b]) => {
    return {
      "pointIndices": [a.pointIndex, b.pointIndex],
      "travelTimeInSeconds": b.travelTimeInSeconds - a.travelTimeInSeconds,
      "distanceInMeters": b.distanceInMeters - a.distanceInMeters,
    }
  });
  
  const [matchSegment, ...notPassedSegments] = segments.dropWhile((s) => !index.between(s.pointIndices));
  const [from, to] = matchSegment.pointIndices;
  const total = to - from + 1;
  const alreadyPassed = index - from + 1;
  const passedRatio = alreadyPassed / total;
  const restSegmentPart = {
    "pointIndices": [index, to],
    "travelTimeInSeconds": Math.round((1-passedRatio)*matchSegment.travelTimeInSeconds),
    "distanceInMeters": Math.round((1-passedRatio)*matchSegment.distanceInMeters),
  };
  const segmentsWithFixedIndices = [restSegmentPart, ...notPassedSegments].map((s) => {
    return {
      "pointIndices": s.pointIndices.map((i) => i - index),
      "travelTimeInSeconds": s.travelTimeInSeconds,
      "distanceInMeters": s.distanceInMeters,
    }
  });
  
  return segmentsWithFixedIndices.reduce((acc, s) => {
    const last = [...acc].pop();
    const newElement = {
      "pointIndex": s.pointIndices[1],
      "travelTimeInSeconds": last.travelTimeInSeconds + s.travelTimeInSeconds,
      "distanceInMeters": last.distanceInMeters + s.distanceInMeters,
    }
    return [...acc, newElement]
  }, [{
    "pointIndex": 0,
    "travelTimeInSeconds": 0,
    "distanceInMeters": 0,
  }]);
}

function cutRoute(route, index) {
  var newRoute = {};
  
  newRoute.progress = cutProgress(route.progress, index);
  
  newRoute.summary = { ...route.summary };
  newRoute.summary.lengthInMeters = [...newRoute.progress].pop().distanceInMeters;
  newRoute.summary.travelTimeInSeconds = [...newRoute.progress].pop().travelTimeInSeconds;
  newRoute.legs = [{}];
  newRoute.legs[0].summary = newRoute.summary;
  newRoute.legs[0].points = route.legs[0].points.slice(index);
  
  newRoute.sections = route.sections.map((oldS) => {
    let s = { ...oldS }
    s.startPointIndex -= index;
    s.endPointIndex -= index;
    return s;
  }).filter((s) => s.startPointIndex >= 0);
  
  const lengthDiff = route.summary.lengthInMeters - newRoute.summary.lengthInMeters;
  const timeDiff = route.summary.travelTimeInSeconds - newRoute.summary.travelTimeInSeconds;
  
  newRoute.guidance = {};
  newRoute.guidance.instructions = route.guidance.instructions.map((oldI) => {
    const i = { ...oldI };
    i.routeOffsetInMeters -= lengthDiff;
    i.travelTimeInSeconds -= timeDiff;
    i.pointIndex -= index;
    
    for (const [k, v] of Object.entries(i)) {
      if (/^.*Announcement$/.test(k)) {
        i[k].pointIndex -= index;
      }
    }

    return i;
  }).filter((i) => {
    return i.routeOffsetInMeters >= 0
      && i.travelTimeInSeconds >= 0
      && i.pointIndex >= 0
      && Object.entries(i).filter(([k,v]) => /^.*Announcement$/.test(k)).every(([k,v]) => i[k].pointIndex >= 0)
  });
  newRoute.guidance.instructionGroups = [ ...route.guidance.instructionGroups ];
  return newRoute;
}


/// This func is called if the Response Checkbox is Enabled. You can modify the Response Data here before it goes to the client
/// e.g. Add/Update/Remove: headers, statusCode, comment, color and body (json, plain-text, base64 encoded string)
///
async function onResponse(context, url, request, response) {
  let now = new Date();

  if (request.method == "GET") {
  } else if (request.method == "POST") {
    // let coords = new URL(url).pathname.match(/\/((\d|\.)*)\,((\d|\.)*):((\d|\.)*)\,((\d|\.)*)\//);
    // let startLat = coords[1];
    // let startLon = coords[3];
    // let shortClosestPointIndex = closestPointIndex(shortRoute, startLat, startLon);
    // let cutShortRoute = cutRoute(shortRoute, shortClosestPointIndex);
    // shortRoute = cutShortRoute;
  }

  
  shortRoute.summary.departureTime = formatDate(now);
  shortRoute.summary.arrivalTime = formatDate(addSecondsToDate(now, shortRoute.summary.travelTimeInSeconds));

  let trafficDelayInSeconds = 2*60*60;
  longRoute.summary.trafficDelayInSeconds = trafficDelayInSeconds;
  longRoute.summary.travelTimeInSeconds = longRoute.summary.travelTimeInSeconds + trafficDelayInSeconds;
  longRoute.summary.departureTime = formatDate(now);
  longRoute.summary.arrivalTime = formatDate(addSecondsToDate(now, longRoute.summary.travelTimeInSeconds));

  response.body.routes = [longRoute, shortRoute];


  return response;
}
