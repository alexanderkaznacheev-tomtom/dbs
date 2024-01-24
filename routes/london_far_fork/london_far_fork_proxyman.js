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
    "lengthInMeters": 19488,
    "travelTimeInSeconds": 3643,
    "trafficDelayInSeconds": 0,
    "trafficLengthInMeters": 0,
    "departureTime": "2024-01-24T12:36:53Z",
    "arrivalTime": "2024-01-24T13:37:36Z",
    "deviationDistance": 2564,
    "deviationTime": 464,
    "deviationPoint": {
      "latitude": 51.5582022,
      "longitude": -0.2485737
    }
  },
  "legs": [
    {
      "summary": {
        "lengthInMeters": 19488,
        "travelTimeInSeconds": 3643,
        "trafficDelayInSeconds": 0,
        "trafficLengthInMeters": 0,
        "departureTime": "2024-01-24T12:36:53Z",
        "arrivalTime": "2024-01-24T13:37:36Z"
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
          "latitude": 51.5580869,
          "longitude": -0.2485523
        },
        {
          "latitude": 51.5580735,
          "longitude": -0.2485496
        },
        {
          "latitude": 51.5579823,
          "longitude": -0.2485818
        },
        {
          "latitude": 51.5579474,
          "longitude": -0.2486166
        },
        {
          "latitude": 51.5578723,
          "longitude": -0.2487615
        },
        {
          "latitude": 51.5578777,
          "longitude": -0.2490351
        },
        {
          "latitude": 51.5578803,
          "longitude": -0.2493677
        },
        {
          "latitude": 51.5578026,
          "longitude": -0.2496707
        },
        {
          "latitude": 51.5575826,
          "longitude": -0.2497512
        },
        {
          "latitude": 51.5572768,
          "longitude": -0.2497619
        },
        {
          "latitude": 51.5569147,
          "longitude": -0.2497163
        },
        {
          "latitude": 51.5567377,
          "longitude": -0.2497458
        },
        {
          "latitude": 51.5566841,
          "longitude": -0.2497646
        },
        {
          "latitude": 51.5563461,
          "longitude": -0.2499497
        },
        {
          "latitude": 51.5563005,
          "longitude": -0.2499738
        },
        {
          "latitude": 51.5561557,
          "longitude": -0.2499899
        },
        {
          "latitude": 51.5558714,
          "longitude": -0.2500221
        },
        {
          "latitude": 51.555689,
          "longitude": -0.2500409
        },
        {
          "latitude": 51.555225,
          "longitude": -0.2501348
        },
        {
          "latitude": 51.5549889,
          "longitude": -0.2500972
        },
        {
          "latitude": 51.5547234,
          "longitude": -0.2499524
        },
        {
          "latitude": 51.5541896,
          "longitude": -0.2496654
        },
        {
          "latitude": 51.5538517,
          "longitude": -0.2496064
        },
        {
          "latitude": 51.5537417,
          "longitude": -0.249593
        },
        {
          "latitude": 51.5536612,
          "longitude": -0.2495742
        },
        {
          "latitude": 51.5535298,
          "longitude": -0.2495018
        },
        {
          "latitude": 51.5533715,
          "longitude": -0.2493891
        },
        {
          "latitude": 51.5529397,
          "longitude": -0.249086
        },
        {
          "latitude": 51.552591,
          "longitude": -0.2488419
        },
        {
          "latitude": 51.5524811,
          "longitude": -0.2487776
        },
        {
          "latitude": 51.5524247,
          "longitude": -0.2487588
        },
        {
          "latitude": 51.5523577,
          "longitude": -0.2487347
        },
        {
          "latitude": 51.5523013,
          "longitude": -0.2487293
        },
        {
          "latitude": 51.5522745,
          "longitude": -0.2487373
        },
        {
          "latitude": 51.5522531,
          "longitude": -0.2487481
        },
        {
          "latitude": 51.5522155,
          "longitude": -0.2487776
        },
        {
          "latitude": 51.5520304,
          "longitude": -0.2489251
        },
        {
          "latitude": 51.5518588,
          "longitude": -0.2491289
        },
        {
          "latitude": 51.5516174,
          "longitude": -0.2494133
        },
        {
          "latitude": 51.5514725,
          "longitude": -0.2495822
        },
        {
          "latitude": 51.5513492,
          "longitude": -0.2496895
        },
        {
          "latitude": 51.5510997,
          "longitude": -0.2497995
        },
        {
          "latitude": 51.5508288,
          "longitude": -0.2497807
        },
        {
          "latitude": 51.5502602,
          "longitude": -0.2495259
        },
        {
          "latitude": 51.5500188,
          "longitude": -0.2494213
        },
        {
          "latitude": 51.5499759,
          "longitude": -0.2493998
        },
        {
          "latitude": 51.5498444,
          "longitude": -0.2493435
        },
        {
          "latitude": 51.5496808,
          "longitude": -0.2492738
        },
        {
          "latitude": 51.5496325,
          "longitude": -0.2492604
        },
        {
          "latitude": 51.5495655,
          "longitude": -0.249255
        },
        {
          "latitude": 51.5495414,
          "longitude": -0.2492577
        },
        {
          "latitude": 51.5494153,
          "longitude": -0.2492684
        },
        {
          "latitude": 51.5493348,
          "longitude": -0.249255
        },
        {
          "latitude": 51.5492302,
          "longitude": -0.2492148
        },
        {
          "latitude": 51.5492034,
          "longitude": -0.2491987
        },
        {
          "latitude": 51.5491712,
          "longitude": -0.2491799
        },
        {
          "latitude": 51.549131,
          "longitude": -0.2491531
        },
        {
          "latitude": 51.5490693,
          "longitude": -0.2490833
        },
        {
          "latitude": 51.5489835,
          "longitude": -0.2489573
        },
        {
          "latitude": 51.5489969,
          "longitude": -0.2489251
        },
        {
          "latitude": 51.5490022,
          "longitude": -0.2488902
        },
        {
          "latitude": 51.5490049,
          "longitude": -0.2488554
        },
        {
          "latitude": 51.5490049,
          "longitude": -0.2488285
        },
        {
          "latitude": 51.5490022,
          "longitude": -0.2488044
        },
        {
          "latitude": 51.5489888,
          "longitude": -0.2487507
        },
        {
          "latitude": 51.5489781,
          "longitude": -0.2487347
        },
        {
          "latitude": 51.5489674,
          "longitude": -0.2487159
        },
        {
          "latitude": 51.5489566,
          "longitude": -0.2487051
        },
        {
          "latitude": 51.5489352,
          "longitude": -0.2486944
        },
        {
          "latitude": 51.5489164,
          "longitude": -0.2486944
        },
        {
          "latitude": 51.5488923,
          "longitude": -0.2486971
        },
        {
          "latitude": 51.5488815,
          "longitude": -0.2487025
        },
        {
          "latitude": 51.5488467,
          "longitude": -0.2487347
        },
        {
          "latitude": 51.5488252,
          "longitude": -0.2487803
        },
        {
          "latitude": 51.5488091,
          "longitude": -0.2488339
        },
        {
          "latitude": 51.5486616,
          "longitude": -0.2489761
        },
        {
          "latitude": 51.5484631,
          "longitude": -0.2492416
        },
        {
          "latitude": 51.5484309,
          "longitude": -0.2492899
        },
        {
          "latitude": 51.5479052,
          "longitude": -0.2498987
        },
        {
          "latitude": 51.5478516,
          "longitude": -0.2499604
        },
        {
          "latitude": 51.5476424,
          "longitude": -0.2502018
        },
        {
          "latitude": 51.5472668,
          "longitude": -0.250521
        },
        {
          "latitude": 51.5471113,
          "longitude": -0.2506551
        },
        {
          "latitude": 51.5468672,
          "longitude": -0.2508643
        },
        {
          "latitude": 51.546489,
          "longitude": -0.2511862
        },
        {
          "latitude": 51.5463361,
          "longitude": -0.2513176
        },
        {
          "latitude": 51.5461859,
          "longitude": -0.2514437
        },
        {
          "latitude": 51.5459204,
          "longitude": -0.251669
        },
        {
          "latitude": 51.5457246,
          "longitude": -0.2518353
        },
        {
          "latitude": 51.5447617,
          "longitude": -0.2526399
        },
        {
          "latitude": 51.5443942,
          "longitude": -0.2529538
        },
        {
          "latitude": 51.5440723,
          "longitude": -0.25323
        },
        {
          "latitude": 51.543442,
          "longitude": -0.2537423
        },
        {
          "latitude": 51.5430021,
          "longitude": -0.2541044
        },
        {
          "latitude": 51.5425193,
          "longitude": -0.2545014
        },
        {
          "latitude": 51.5424335,
          "longitude": -0.2545711
        },
        {
          "latitude": 51.542286,
          "longitude": -0.2546945
        },
        {
          "latitude": 51.5422055,
          "longitude": -0.2548555
        },
        {
          "latitude": 51.5421411,
          "longitude": -0.254885
        },
        {
          "latitude": 51.5421331,
          "longitude": -0.2548876
        },
        {
          "latitude": 51.5420231,
          "longitude": -0.2549037
        },
        {
          "latitude": 51.5420151,
          "longitude": -0.2549037
        },
        {
          "latitude": 51.5420043,
          "longitude": -0.2549011
        },
        {
          "latitude": 51.5418676,
          "longitude": -0.2548125
        },
        {
          "latitude": 51.5414491,
          "longitude": -0.2545524
        },
        {
          "latitude": 51.5409341,
          "longitude": -0.2542385
        },
        {
          "latitude": 51.5408939,
          "longitude": -0.2542117
        },
        {
          "latitude": 51.5406793,
          "longitude": -0.2540749
        },
        {
          "latitude": 51.5403548,
          "longitude": -0.253855
        },
        {
          "latitude": 51.540277,
          "longitude": -0.2537826
        },
        {
          "latitude": 51.5401107,
          "longitude": -0.2536243
        },
        {
          "latitude": 51.5399605,
          "longitude": -0.2534688
        },
        {
          "latitude": 51.5398076,
          "longitude": -0.2532434
        },
        {
          "latitude": 51.5397245,
          "longitude": -0.2530316
        },
        {
          "latitude": 51.5396628,
          "longitude": -0.2528787
        },
        {
          "latitude": 51.539636,
          "longitude": -0.2527982
        },
        {
          "latitude": 51.5395394,
          "longitude": -0.2525353
        },
        {
          "latitude": 51.5394267,
          "longitude": -0.2521491
        },
        {
          "latitude": 51.5393999,
          "longitude": -0.2520606
        },
        {
          "latitude": 51.5392148,
          "longitude": -0.2514169
        },
        {
          "latitude": 51.5390646,
          "longitude": -0.2509019
        },
        {
          "latitude": 51.5389252,
          "longitude": -0.25047
        },
        {
          "latitude": 51.5388849,
          "longitude": -0.2503654
        },
        {
          "latitude": 51.5388206,
          "longitude": -0.2500704
        },
        {
          "latitude": 51.5388635,
          "longitude": -0.2496815
        },
        {
          "latitude": 51.5388823,
          "longitude": -0.2493569
        },
        {
          "latitude": 51.5388796,
          "longitude": -0.2492604
        },
        {
          "latitude": 51.5388715,
          "longitude": -0.2491826
        },
        {
          "latitude": 51.5388581,
          "longitude": -0.2491075
        },
        {
          "latitude": 51.538842,
          "longitude": -0.2490565
        },
        {
          "latitude": 51.5388367,
          "longitude": -0.2490458
        },
        {
          "latitude": 51.5388179,
          "longitude": -0.2490109
        },
        {
          "latitude": 51.5387589,
          "longitude": -0.2489385
        },
        {
          "latitude": 51.5378094,
          "longitude": -0.2479059
        },
        {
          "latitude": 51.5377584,
          "longitude": -0.2478066
        },
        {
          "latitude": 51.5376914,
          "longitude": -0.2476725
        },
        {
          "latitude": 51.5376619,
          "longitude": -0.2476028
        },
        {
          "latitude": 51.5374634,
          "longitude": -0.2471066
        },
        {
          "latitude": 51.5372595,
          "longitude": -0.2466801
        },
        {
          "latitude": 51.5371495,
          "longitude": -0.2465031
        },
        {
          "latitude": 51.5369752,
          "longitude": -0.2462509
        },
        {
          "latitude": 51.5369323,
          "longitude": -0.2461866
        },
        {
          "latitude": 51.5367258,
          "longitude": -0.2459344
        },
        {
          "latitude": 51.5362215,
          "longitude": -0.2453899
        },
        {
          "latitude": 51.5361062,
          "longitude": -0.2450734
        },
        {
          "latitude": 51.5360633,
          "longitude": -0.2449608
        },
        {
          "latitude": 51.5359667,
          "longitude": -0.2447274
        },
        {
          "latitude": 51.5357307,
          "longitude": -0.2443224
        },
        {
          "latitude": 51.5356985,
          "longitude": -0.2442715
        },
        {
          "latitude": 51.5350842,
          "longitude": -0.2434051
        },
        {
          "latitude": 51.534926,
          "longitude": -0.2431932
        },
        {
          "latitude": 51.5344352,
          "longitude": -0.2424502
        },
        {
          "latitude": 51.5341482,
          "longitude": -0.242013
        },
        {
          "latitude": 51.5339416,
          "longitude": -0.2416992
        },
        {
          "latitude": 51.5336788,
          "longitude": -0.2412996
        },
        {
          "latitude": 51.5333086,
          "longitude": -0.2406853
        },
        {
          "latitude": 51.5331718,
          "longitude": -0.2404574
        },
        {
          "latitude": 51.5330029,
          "longitude": -0.2402267
        },
        {
          "latitude": 51.532968,
          "longitude": -0.240165
        },
        {
          "latitude": 51.5329385,
          "longitude": -0.2401087
        },
        {
          "latitude": 51.5328178,
          "longitude": -0.2398887
        },
        {
          "latitude": 51.5326568,
          "longitude": -0.2395937
        },
        {
          "latitude": 51.5326354,
          "longitude": -0.2395535
        },
        {
          "latitude": 51.5325442,
          "longitude": -0.2392879
        },
        {
          "latitude": 51.5324396,
          "longitude": -0.2389929
        },
        {
          "latitude": 51.5324128,
          "longitude": -0.2389097
        },
        {
          "latitude": 51.5322599,
          "longitude": -0.2381024
        },
        {
          "latitude": 51.5322438,
          "longitude": -0.2379709
        },
        {
          "latitude": 51.532217,
          "longitude": -0.2377778
        },
        {
          "latitude": 51.5321982,
          "longitude": -0.2376303
        },
        {
          "latitude": 51.5321848,
          "longitude": -0.2373889
        },
        {
          "latitude": 51.5321955,
          "longitude": -0.2372521
        },
        {
          "latitude": 51.5321258,
          "longitude": -0.2372307
        },
        {
          "latitude": 51.5319219,
          "longitude": -0.2372038
        },
        {
          "latitude": 51.5317181,
          "longitude": -0.2371663
        },
        {
          "latitude": 51.5313613,
          "longitude": -0.2371046
        },
        {
          "latitude": 51.5312594,
          "longitude": -0.2370885
        },
        {
          "latitude": 51.5307257,
          "longitude": -0.2370241
        },
        {
          "latitude": 51.5306854,
          "longitude": -0.2370241
        },
        {
          "latitude": 51.5306371,
          "longitude": -0.2370805
        },
        {
          "latitude": 51.5302563,
          "longitude": -0.2370751
        },
        {
          "latitude": 51.5301543,
          "longitude": -0.237067
        },
        {
          "latitude": 51.5299237,
          "longitude": -0.237051
        },
        {
          "latitude": 51.5297198,
          "longitude": -0.2370375
        },
        {
          "latitude": 51.5296662,
          "longitude": -0.2370161
        },
        {
          "latitude": 51.529575,
          "longitude": -0.2369785
        },
        {
          "latitude": 51.5292585,
          "longitude": -0.2367532
        },
        {
          "latitude": 51.5287784,
          "longitude": -0.2363294
        },
        {
          "latitude": 51.5283465,
          "longitude": -0.2359486
        },
        {
          "latitude": 51.5283036,
          "longitude": -0.235911
        },
        {
          "latitude": 51.5281588,
          "longitude": -0.2358332
        },
        {
          "latitude": 51.5279871,
          "longitude": -0.235742
        },
        {
          "latitude": 51.5276223,
          "longitude": -0.2355489
        },
        {
          "latitude": 51.5275419,
          "longitude": -0.235498
        },
        {
          "latitude": 51.527499,
          "longitude": -0.2354684
        },
        {
          "latitude": 51.5272495,
          "longitude": -0.2353236
        },
        {
          "latitude": 51.5271664,
          "longitude": -0.2352673
        },
        {
          "latitude": 51.5268311,
          "longitude": -0.2349669
        },
        {
          "latitude": 51.5263563,
          "longitude": -0.2345431
        },
        {
          "latitude": 51.5263134,
          "longitude": -0.2345163
        },
        {
          "latitude": 51.5261069,
          "longitude": -0.2344707
        },
        {
          "latitude": 51.5260184,
          "longitude": -0.234468
        },
        {
          "latitude": 51.5259862,
          "longitude": -0.2344653
        },
        {
          "latitude": 51.5259486,
          "longitude": -0.2344626
        },
        {
          "latitude": 51.5258789,
          "longitude": -0.2344599
        },
        {
          "latitude": 51.5257046,
          "longitude": -0.2344492
        },
        {
          "latitude": 51.5255007,
          "longitude": -0.234417
        },
        {
          "latitude": 51.5254122,
          "longitude": -0.2343956
        },
        {
          "latitude": 51.5253559,
          "longitude": -0.2343822
        },
        {
          "latitude": 51.5251467,
          "longitude": -0.2342024
        },
        {
          "latitude": 51.5241086,
          "longitude": -0.2326414
        },
        {
          "latitude": 51.5240577,
          "longitude": -0.2326065
        },
        {
          "latitude": 51.5239531,
          "longitude": -0.2325314
        },
        {
          "latitude": 51.5237197,
          "longitude": -0.2324724
        },
        {
          "latitude": 51.5235105,
          "longitude": -0.2324215
        },
        {
          "latitude": 51.5232289,
          "longitude": -0.23227130000000001
        },
        {
          "latitude": 51.5223008,
          "longitude": -0.2308658
        },
        {
          "latitude": 51.5222016,
          "longitude": -0.2307478
        },
        {
          "latitude": 51.5216571,
          "longitude": -0.2300853
        },
        {
          "latitude": 51.5208149,
          "longitude": -0.229066
        },
        {
          "latitude": 51.5201202,
          "longitude": -0.2282131
        },
        {
          "latitude": 51.51997,
          "longitude": -0.228146
        },
        {
          "latitude": 51.5199056,
          "longitude": -0.2281192
        },
        {
          "latitude": 51.5197447,
          "longitude": -0.2280977
        },
        {
          "latitude": 51.5195516,
          "longitude": -0.2280951
        },
        {
          "latitude": 51.5193048,
          "longitude": -0.2280924
        },
        {
          "latitude": 51.519168,
          "longitude": -0.2280897
        },
        {
          "latitude": 51.5189937,
          "longitude": -0.2280897
        },
        {
          "latitude": 51.5189025,
          "longitude": -0.2280736
        },
        {
          "latitude": 51.5188542,
          "longitude": -0.2280495
        },
        {
          "latitude": 51.5185001,
          "longitude": -0.2278832
        },
        {
          "latitude": 51.5183043,
          "longitude": -0.227792
        },
        {
          "latitude": 51.5176365,
          "longitude": -0.2274674
        },
        {
          "latitude": 51.5174058,
          "longitude": -0.2273628
        },
        {
          "latitude": 51.5172905,
          "longitude": -0.2273092
        },
        {
          "latitude": 51.5171295,
          "longitude": -0.2272367
        },
        {
          "latitude": 51.5170249,
          "longitude": -0.2271831
        },
        {
          "latitude": 51.516813,
          "longitude": -0.2270705
        },
        {
          "latitude": 51.516569,
          "longitude": -0.226939
        },
        {
          "latitude": 51.5164161,
          "longitude": -0.2268586
        },
        {
          "latitude": 51.5161532,
          "longitude": -0.2267164
        },
        {
          "latitude": 51.5159494,
          "longitude": -0.2266064
        },
        {
          "latitude": 51.5158287,
          "longitude": -0.2265367
        },
        {
          "latitude": 51.5157831,
          "longitude": -0.2264428
        },
        {
          "latitude": 51.5156811,
          "longitude": -0.2263838
        },
        {
          "latitude": 51.5155819,
          "longitude": -0.2263221
        },
        {
          "latitude": 51.5154907,
          "longitude": -0.2262577
        },
        {
          "latitude": 51.5154076,
          "longitude": -0.2262068
        },
        {
          "latitude": 51.515311,
          "longitude": -0.2261585
        },
        {
          "latitude": 51.515319,
          "longitude": -0.2260137
        },
        {
          "latitude": 51.5153432,
          "longitude": -0.2256516
        },
        {
          "latitude": 51.515362,
          "longitude": -0.2253458
        },
        {
          "latitude": 51.5154049,
          "longitude": -0.2248549
        },
        {
          "latitude": 51.51548,
          "longitude": -0.2241173
        },
        {
          "latitude": 51.5155229,
          "longitude": -0.2237499
        },
        {
          "latitude": 51.5155363,
          "longitude": -0.2236345
        },
        {
          "latitude": 51.5155819,
          "longitude": -0.222964
        },
        {
          "latitude": 51.5156168,
          "longitude": -0.2224356
        },
        {
          "latitude": 51.5156382,
          "longitude": -0.2220306
        },
        {
          "latitude": 51.5157402,
          "longitude": -0.2216899
        },
        {
          "latitude": 51.5157536,
          "longitude": -0.2216122
        },
        {
          "latitude": 51.5157965,
          "longitude": -0.2215719
        },
        {
          "latitude": 51.5158179,
          "longitude": -0.2215531
        },
        {
          "latitude": 51.515834,
          "longitude": -0.2215371
        },
        {
          "latitude": 51.5158957,
          "longitude": -0.2214566
        },
        {
          "latitude": 51.5159842,
          "longitude": -0.2212903
        },
        {
          "latitude": 51.5160486,
          "longitude": -0.2210382
        },
        {
          "latitude": 51.5160513,
          "longitude": -0.2210274
        },
        {
          "latitude": 51.5160754,
          "longitude": -0.2207807
        },
        {
          "latitude": 51.5160647,
          "longitude": -0.2205956
        },
        {
          "latitude": 51.5160245,
          "longitude": -0.2204239
        },
        {
          "latitude": 51.5159762,
          "longitude": -0.2202898
        },
        {
          "latitude": 51.5158635,
          "longitude": -0.2201021
        },
        {
          "latitude": 51.5157777,
          "longitude": -0.2200136
        },
        {
          "latitude": 51.5157428,
          "longitude": -0.2199787
        },
        {
          "latitude": 51.5156221,
          "longitude": -0.2199063
        },
        {
          "latitude": 51.5155363,
          "longitude": -0.2198902
        },
        {
          "latitude": 51.5153807,
          "longitude": -0.2199143
        },
        {
          "latitude": 51.5152869,
          "longitude": -0.2199706
        },
        {
          "latitude": 51.5151849,
          "longitude": -0.2200672
        },
        {
          "latitude": 51.5151206,
          "longitude": -0.2201638
        },
        {
          "latitude": 51.5150937,
          "longitude": -0.220204
        },
        {
          "latitude": 51.5149784,
          "longitude": -0.2203166
        },
        {
          "latitude": 51.5148497,
          "longitude": -0.2204481
        },
        {
          "latitude": 51.5147531,
          "longitude": -0.2205366
        },
        {
          "latitude": 51.5145734,
          "longitude": -0.22066
        },
        {
          "latitude": 51.5144446,
          "longitude": -0.220719
        },
        {
          "latitude": 51.5142998,
          "longitude": -0.2207619
        },
        {
          "latitude": 51.5141308,
          "longitude": -0.2207914
        },
        {
          "latitude": 51.5139484,
          "longitude": -0.2207646
        },
        {
          "latitude": 51.5131921,
          "longitude": -0.2204749
        },
        {
          "latitude": 51.512787,
          "longitude": -0.2203113
        },
        {
          "latitude": 51.5121594,
          "longitude": -0.2200592
        },
        {
          "latitude": 51.5118858,
          "longitude": -0.2199438
        },
        {
          "latitude": 51.51158,
          "longitude": -0.2198204
        },
        {
          "latitude": 51.5113896,
          "longitude": -0.2197507
        },
        {
          "latitude": 51.5113333,
          "longitude": -0.2197266
        },
        {
          "latitude": 51.5109873,
          "longitude": -0.2195871
        },
        {
          "latitude": 51.5098822,
          "longitude": -0.2191848
        },
        {
          "latitude": 51.5096006,
          "longitude": -0.2190828
        },
        {
          "latitude": 51.509335,
          "longitude": -0.2189943
        },
        {
          "latitude": 51.5092304,
          "longitude": -0.2189514
        },
        {
          "latitude": 51.5079564,
          "longitude": -0.2184981
        },
        {
          "latitude": 51.5075997,
          "longitude": -0.2183586
        },
        {
          "latitude": 51.5074548,
          "longitude": -0.2182809
        },
        {
          "latitude": 51.5069371,
          "longitude": -0.2180502
        },
        {
          "latitude": 51.5064731,
          "longitude": -0.2177793
        },
        {
          "latitude": 51.5062076,
          "longitude": -0.2176237
        },
        {
          "latitude": 51.50617,
          "longitude": -0.2175996
        },
        {
          "latitude": 51.5053922,
          "longitude": -0.2170014
        },
        {
          "latitude": 51.5052688,
          "longitude": -0.2169156
        },
        {
          "latitude": 51.5052339,
          "longitude": -0.2168888
        },
        {
          "latitude": 51.5050676,
          "longitude": -0.2167332
        },
        {
          "latitude": 51.5050462,
          "longitude": -0.2166447
        },
        {
          "latitude": 51.505022,
          "longitude": -0.2165294
        },
        {
          "latitude": 51.5050086,
          "longitude": -0.2164704
        },
        {
          "latitude": 51.5049684,
          "longitude": -0.216237
        },
        {
          "latitude": 51.5049201,
          "longitude": -0.2161083
        },
        {
          "latitude": 51.504837,
          "longitude": -0.2159929
        },
        {
          "latitude": 51.5047216,
          "longitude": -0.2159205
        },
        {
          "latitude": 51.5046465,
          "longitude": -0.2159125
        },
        {
          "latitude": 51.5045902,
          "longitude": -0.2159205
        },
        {
          "latitude": 51.5044373,
          "longitude": -0.216009
        },
        {
          "latitude": 51.5043703,
          "longitude": -0.2160251
        },
        {
          "latitude": 51.5042871,
          "longitude": -0.2160278
        },
        {
          "latitude": 51.5042388,
          "longitude": -0.216001
        },
        {
          "latitude": 51.5042174,
          "longitude": -0.2159902
        },
        {
          "latitude": 51.5041101,
          "longitude": -0.2159151
        },
        {
          "latitude": 51.5040538,
          "longitude": -0.2158481
        },
        {
          "latitude": 51.5039143,
          "longitude": -0.2157113
        },
        {
          "latitude": 51.5039063,
          "longitude": -0.2157006
        },
        {
          "latitude": 51.5038124,
          "longitude": -0.2155879
        },
        {
          "latitude": 51.5034744,
          "longitude": -0.21514
        },
        {
          "latitude": 51.5034369,
          "longitude": -0.2150917
        },
        {
          "latitude": 51.5026402,
          "longitude": -0.2140349
        },
        {
          "latitude": 51.5006071,
          "longitude": -0.2112561
        },
        {
          "latitude": 51.5005857,
          "longitude": -0.211181
        },
        {
          "latitude": 51.5003604,
          "longitude": -0.210894
        },
        {
          "latitude": 51.5001994,
          "longitude": -0.2106687
        },
        {
          "latitude": 51.5001324,
          "longitude": -0.2106312
        },
        {
          "latitude": 51.49995,
          "longitude": -0.2103978
        },
        {
          "latitude": 51.4998454,
          "longitude": -0.2102637
        },
        {
          "latitude": 51.499781,
          "longitude": -0.210076
        },
        {
          "latitude": 51.4997542,
          "longitude": -0.2099445
        },
        {
          "latitude": 51.4997461,
          "longitude": -0.2098909
        },
        {
          "latitude": 51.499722,
          "longitude": -0.2097487
        },
        {
          "latitude": 51.499663,
          "longitude": -0.2095288
        },
        {
          "latitude": 51.4996147,
          "longitude": -0.2092499
        },
        {
          "latitude": 51.4996067,
          "longitude": -0.209164
        },
        {
          "latitude": 51.4995906,
          "longitude": -0.2088717
        },
        {
          "latitude": 51.4995933,
          "longitude": -0.2086142
        },
        {
          "latitude": 51.4995933,
          "longitude": -0.2085847
        },
        {
          "latitude": 51.4996201,
          "longitude": -0.2082092
        },
        {
          "latitude": 51.4996415,
          "longitude": -0.2079651
        },
        {
          "latitude": 51.4996389,
          "longitude": -0.2079007
        },
        {
          "latitude": 51.4996335,
          "longitude": -0.2078632
        },
        {
          "latitude": 51.4996147,
          "longitude": -0.2078229
        },
        {
          "latitude": 51.4995852,
          "longitude": -0.2078095
        },
        {
          "latitude": 51.4992768,
          "longitude": -0.2076513
        },
        {
          "latitude": 51.4992204,
          "longitude": -0.2076083
        },
        {
          "latitude": 51.4991936,
          "longitude": -0.2075762
        },
        {
          "latitude": 51.4991775,
          "longitude": -0.2075547
        },
        {
          "latitude": 51.4990863,
          "longitude": -0.2072811
        },
        {
          "latitude": 51.4989012,
          "longitude": -0.2066562
        },
        {
          "latitude": 51.498794,
          "longitude": -0.2063879
        },
        {
          "latitude": 51.4987618,
          "longitude": -0.2063021
        },
        {
          "latitude": 51.4986706,
          "longitude": -0.2061412
        },
        {
          "latitude": 51.4985955,
          "longitude": -0.2060205
        },
        {
          "latitude": 51.4976916,
          "longitude": -0.2050897
        },
        {
          "latitude": 51.4971766,
          "longitude": -0.2045587
        },
        {
          "latitude": 51.4971149,
          "longitude": -0.2044943
        },
        {
          "latitude": 51.4970747,
          "longitude": -0.2044594
        },
        {
          "latitude": 51.4969513,
          "longitude": -0.2043414
        },
        {
          "latitude": 51.4968896,
          "longitude": -0.2043173
        },
        {
          "latitude": 51.496785,
          "longitude": -0.2042019
        },
        {
          "latitude": 51.4966401,
          "longitude": -0.2039713
        },
        {
          "latitude": 51.4965114,
          "longitude": -0.2037701
        },
        {
          "latitude": 51.4958596,
          "longitude": -0.2030513
        },
        {
          "latitude": 51.4955404,
          "longitude": -0.2026811
        },
        {
          "latitude": 51.4953661,
          "longitude": -0.2023727
        },
        {
          "latitude": 51.4952454,
          "longitude": -0.2020803
        },
        {
          "latitude": 51.4951649,
          "longitude": -0.2018711
        },
        {
          "latitude": 51.4950925,
          "longitude": -0.2016646
        },
        {
          "latitude": 51.4950335,
          "longitude": -0.2014366
        },
        {
          "latitude": 51.4950174,
          "longitude": -0.20134
        },
        {
          "latitude": 51.4950013,
          "longitude": -0.2011737
        },
        {
          "latitude": 51.4949691,
          "longitude": -0.2007392
        },
        {
          "latitude": 51.4949423,
          "longitude": -0.2003047
        },
        {
          "latitude": 51.4949343,
          "longitude": -0.2001303
        },
        {
          "latitude": 51.4949182,
          "longitude": -0.1999694
        },
        {
          "latitude": 51.4949208,
          "longitude": -0.199905
        },
        {
          "latitude": 51.4949128,
          "longitude": -0.1998514
        },
        {
          "latitude": 51.4948645,
          "longitude": -0.1995671
        },
        {
          "latitude": 51.4953017,
          "longitude": -0.1982421
        },
        {
          "latitude": 51.4953634,
          "longitude": -0.1980489
        },
        {
          "latitude": 51.4954492,
          "longitude": -0.1977915
        },
        {
          "latitude": 51.49546,
          "longitude": -0.1977539
        },
        {
          "latitude": 51.4957067,
          "longitude": -0.1970109
        },
        {
          "latitude": 51.4957926,
          "longitude": -0.1967508
        },
        {
          "latitude": 51.4957899,
          "longitude": -0.1966622
        },
        {
          "latitude": 51.4957711,
          "longitude": -0.1965791
        },
        {
          "latitude": 51.4957148,
          "longitude": -0.1964664
        },
        {
          "latitude": 51.4955431,
          "longitude": -0.1963136
        },
        {
          "latitude": 51.4953017,
          "longitude": -0.1960909
        },
        {
          "latitude": 51.495004,
          "longitude": -0.1958469
        },
        {
          "latitude": 51.4949021,
          "longitude": -0.1957422
        },
        {
          "latitude": 51.4946365,
          "longitude": -0.1954928
        },
        {
          "latitude": 51.4945427,
          "longitude": -0.195407
        },
        {
          "latitude": 51.4945078,
          "longitude": -0.1953775
        },
        {
          "latitude": 51.4944676,
          "longitude": -0.195348
        },
        {
          "latitude": 51.494076,
          "longitude": -0.1950637
        },
        {
          "latitude": 51.4940169,
          "longitude": -0.1950234
        },
        {
          "latitude": 51.4938694,
          "longitude": -0.1949269
        },
        {
          "latitude": 51.4937434,
          "longitude": -0.1948518
        },
        {
          "latitude": 51.4936012,
          "longitude": -0.1947391
        },
        {
          "latitude": 51.4933813,
          "longitude": -0.1945674
        },
        {
          "latitude": 51.4932203,
          "longitude": -0.1944575
        },
        {
          "latitude": 51.4930969,
          "longitude": -0.1943475
        },
        {
          "latitude": 51.4929146,
          "longitude": -0.1941732
        },
        {
          "latitude": 51.4927644,
          "longitude": -0.1939988
        },
        {
          "latitude": 51.4926544,
          "longitude": -0.1938379
        },
        {
          "latitude": 51.4925605,
          "longitude": -0.1936716
        },
        {
          "latitude": 51.4923406,
          "longitude": -0.1932183
        },
        {
          "latitude": 51.4922762,
          "longitude": -0.1930922
        },
        {
          "latitude": 51.492244,
          "longitude": -0.1930466
        },
        {
          "latitude": 51.4921474,
          "longitude": -0.1928669
        },
        {
          "latitude": 51.4920482,
          "longitude": -0.1926953
        },
        {
          "latitude": 51.4919275,
          "longitude": -0.1925129
        },
        {
          "latitude": 51.4917397,
          "longitude": -0.1922446
        },
        {
          "latitude": 51.4916888,
          "longitude": -0.1921722
        },
        {
          "latitude": 51.4916244,
          "longitude": -0.1920837
        },
        {
          "latitude": 51.4915869,
          "longitude": -0.1920328
        },
        {
          "latitude": 51.491493,
          "longitude": -0.191904
        },
        {
          "latitude": 51.4913321,
          "longitude": -0.1917216
        },
        {
          "latitude": 51.4912918,
          "longitude": -0.191676
        },
        {
          "latitude": 51.4912328,
          "longitude": -0.1916036
        },
        {
          "latitude": 51.4911872,
          "longitude": -0.1915446
        },
        {
          "latitude": 51.4908627,
          "longitude": -0.1912147
        },
        {
          "latitude": 51.4907956,
          "longitude": -0.1911718
        },
        {
          "latitude": 51.4905596,
          "longitude": -0.1910108
        },
        {
          "latitude": 51.4900982,
          "longitude": -0.1906943
        },
        {
          "latitude": 51.4900339,
          "longitude": -0.190638
        },
        {
          "latitude": 51.4898917,
          "longitude": -0.1904905
        },
        {
          "latitude": 51.4897496,
          "longitude": -0.1903617
        },
        {
          "latitude": 51.4896798,
          "longitude": -0.1902974
        },
        {
          "latitude": 51.4896128,
          "longitude": -0.1902357
        },
        {
          "latitude": 51.4895752,
          "longitude": -0.190233
        },
        {
          "latitude": 51.4894867,
          "longitude": -0.1902169
        },
        {
          "latitude": 51.489366,
          "longitude": -0.1902142
        },
        {
          "latitude": 51.4892587,
          "longitude": -0.1901767
        },
        {
          "latitude": 51.4890629,
          "longitude": -0.1899728
        },
        {
          "latitude": 51.4888939,
          "longitude": -0.1897877
        },
        {
          "latitude": 51.4887866,
          "longitude": -0.1896831
        },
        {
          "latitude": 51.488741,
          "longitude": -0.1896375
        },
        {
          "latitude": 51.4884943,
          "longitude": -0.1893774
        },
        {
          "latitude": 51.4882368,
          "longitude": -0.1891252
        },
        {
          "latitude": 51.4881912,
          "longitude": -0.1890743
        },
        {
          "latitude": 51.4879632,
          "longitude": -0.1888543
        },
        {
          "latitude": 51.4877298,
          "longitude": -0.188621
        },
        {
          "latitude": 51.4867106,
          "longitude": -0.1875722
        },
        {
          "latitude": 51.4865845,
          "longitude": -0.1874435
        },
        {
          "latitude": 51.4861715,
          "longitude": -0.186958
        },
        {
          "latitude": 51.4856082,
          "longitude": -0.1862472
        },
        {
          "latitude": 51.4850289,
          "longitude": -0.185523
        },
        {
          "latitude": 51.4845756,
          "longitude": -0.1849383
        },
        {
          "latitude": 51.4843369,
          "longitude": -0.1846513
        },
        {
          "latitude": 51.484192,
          "longitude": -0.1844314
        },
        {
          "latitude": 51.4841384,
          "longitude": -0.1843321
        },
        {
          "latitude": 51.4841115,
          "longitude": -0.1842463
        },
        {
          "latitude": 51.4840874,
          "longitude": -0.1841229
        },
        {
          "latitude": 51.4840391,
          "longitude": -0.1840103
        },
        {
          "latitude": 51.4838916,
          "longitude": -0.1837742
        },
        {
          "latitude": 51.4837816,
          "longitude": -0.1836509
        },
        {
          "latitude": 51.4829046,
          "longitude": -0.1827684
        },
        {
          "latitude": 51.4827383,
          "longitude": -0.1825941
        },
        {
          "latitude": 51.4826176,
          "longitude": -0.1824331
        },
        {
          "latitude": 51.4822689,
          "longitude": -0.1820442
        },
        {
          "latitude": 51.4821589,
          "longitude": -0.1819423
        },
        {
          "latitude": 51.4819336,
          "longitude": -0.1817438
        },
        {
          "latitude": 51.4819255,
          "longitude": -0.1817358
        },
        {
          "latitude": 51.4817083,
          "longitude": -0.1815373
        },
        {
          "latitude": 51.4816493,
          "longitude": -0.181489
        },
        {
          "latitude": 51.4813221,
          "longitude": -0.1811913
        },
        {
          "latitude": 51.4811316,
          "longitude": -0.1810196
        },
        {
          "latitude": 51.4807346,
          "longitude": -0.1805824
        },
        {
          "latitude": 51.480343,
          "longitude": -0.1801264
        },
        {
          "latitude": 51.4802572,
          "longitude": -0.1800406
        },
        {
          "latitude": 51.4801687,
          "longitude": -0.1798099
        },
        {
          "latitude": 51.4801472,
          "longitude": -0.1797321
        },
        {
          "latitude": 51.4801902,
          "longitude": -0.1793405
        },
        {
          "latitude": 51.4802411,
          "longitude": -0.1788926
        },
        {
          "latitude": 51.4802706,
          "longitude": -0.1784581
        },
        {
          "latitude": 51.4803779,
          "longitude": -0.1780128
        },
        {
          "latitude": 51.4804208,
          "longitude": -0.177868
        },
        {
          "latitude": 51.4804664,
          "longitude": -0.1777607
        },
        {
          "latitude": 51.4805791,
          "longitude": -0.1775622
        },
        {
          "latitude": 51.4807937,
          "longitude": -0.1772511
        },
        {
          "latitude": 51.4810029,
          "longitude": -0.1769668
        },
        {
          "latitude": 51.481601,
          "longitude": -0.176087
        },
        {
          "latitude": 51.4816681,
          "longitude": -0.1759368
        },
        {
          "latitude": 51.481711,
          "longitude": -0.1758108
        },
        {
          "latitude": 51.4817163,
          "longitude": -0.1757813
        },
        {
          "latitude": 51.4817485,
          "longitude": -0.1756471
        },
        {
          "latitude": 51.4818183,
          "longitude": -0.1752448
        },
        {
          "latitude": 51.4818639,
          "longitude": -0.174813
        },
        {
          "latitude": 51.4819336,
          "longitude": -0.1744562
        },
        {
          "latitude": 51.4819685,
          "longitude": -0.1742712
        },
        {
          "latitude": 51.4820167,
          "longitude": -0.1740217
        },
        {
          "latitude": 51.482057,
          "longitude": -0.1738206
        },
        {
          "latitude": 51.4821562,
          "longitude": -0.1734155
        },
        {
          "latitude": 51.4823037,
          "longitude": -0.1727557
        },
        {
          "latitude": 51.4824459,
          "longitude": -0.1720986
        },
        {
          "latitude": 51.4825398,
          "longitude": -0.1716882
        },
        {
          "latitude": 51.4826739,
          "longitude": -0.1711223
        },
        {
          "latitude": 51.4827785,
          "longitude": -0.170508
        },
        {
          "latitude": 51.482867,
          "longitude": -0.1700091
        },
        {
          "latitude": 51.4829984,
          "longitude": -0.1692018
        },
        {
          "latitude": 51.4831325,
          "longitude": -0.168432
        },
        {
          "latitude": 51.4831781,
          "longitude": -0.1682281
        },
        {
          "latitude": 51.4832693,
          "longitude": -0.1679546
        },
        {
          "latitude": 51.4833015,
          "longitude": -0.1678821
        },
        {
          "latitude": 51.4833954,
          "longitude": -0.1677346
        },
        {
          "latitude": 51.4834839,
          "longitude": -0.1675522
        },
        {
          "latitude": 51.4835483,
          "longitude": -0.1673216
        },
        {
          "latitude": 51.4835536,
          "longitude": -0.1671928
        },
        {
          "latitude": 51.4835429,
          "longitude": -0.1670668
        },
        {
          "latitude": 51.4834946,
          "longitude": -0.1667234
        },
        {
          "latitude": 51.4834517,
          "longitude": -0.1663345
        },
        {
          "latitude": 51.4834544,
          "longitude": -0.1661977
        },
        {
          "latitude": 51.4834598,
          "longitude": -0.1659107
        },
        {
          "latitude": 51.4835483,
          "longitude": -0.1651302
        },
        {
          "latitude": 51.4836475,
          "longitude": -0.1643765
        },
        {
          "latitude": 51.4836797,
          "longitude": -0.1641163
        },
        {
          "latitude": 51.4837039,
          "longitude": -0.1639849
        },
        {
          "latitude": 51.4837521,
          "longitude": -0.1636094
        },
        {
          "latitude": 51.483956,
          "longitude": -0.1622146
        },
        {
          "latitude": 51.4839935,
          "longitude": -0.1618713
        },
        {
          "latitude": 51.4841384,
          "longitude": -0.1607689
        },
        {
          "latitude": 51.4841652,
          "longitude": -0.1605329
        },
        {
          "latitude": 51.484243,
          "longitude": -0.1600635
        },
        {
          "latitude": 51.4843476,
          "longitude": -0.1592401
        },
        {
          "latitude": 51.4844415,
          "longitude": -0.1585293
        },
        {
          "latitude": 51.4846507,
          "longitude": -0.1569709
        },
        {
          "latitude": 51.4847097,
          "longitude": -0.1565337
        },
        {
          "latitude": 51.4847338,
          "longitude": -0.1563245
        },
        {
          "latitude": 51.4848116,
          "longitude": -0.1557505
        },
        {
          "latitude": 51.4848626,
          "longitude": -0.1554555
        },
        {
          "latitude": 51.485002,
          "longitude": -0.1546213
        },
        {
          "latitude": 51.4850852,
          "longitude": -0.1541385
        },
        {
          "latitude": 51.4851335,
          "longitude": -0.1538086
        },
        {
          "latitude": 51.4851388,
          "longitude": -0.1537845
        },
        {
          "latitude": 51.4851817,
          "longitude": -0.1534975
        },
        {
          "latitude": 51.4852086,
          "longitude": -0.1533177
        },
        {
          "latitude": 51.4852944,
          "longitude": -0.1527411
        },
        {
          "latitude": 51.4853373,
          "longitude": -0.1524487
        },
        {
          "latitude": 51.4854231,
          "longitude": -0.1518989
        },
        {
          "latitude": 51.4854929,
          "longitude": -0.1515287
        },
        {
          "latitude": 51.4856431,
          "longitude": -0.1508984
        },
        {
          "latitude": 51.4856833,
          "longitude": -0.1508313
        },
        {
          "latitude": 51.4857665,
          "longitude": -0.1505175
        },
        {
          "latitude": 51.4857852,
          "longitude": -0.1504397
        },
        {
          "latitude": 51.4858148,
          "longitude": -0.1502493
        },
        {
          "latitude": 51.4858255,
          "longitude": -0.1502037
        },
        {
          "latitude": 51.4858362,
          "longitude": -0.1501313
        },
        {
          "latitude": 51.4858496,
          "longitude": -0.1500106
        },
        {
          "latitude": 51.4858603,
          "longitude": -0.1498765
        },
        {
          "latitude": 51.4858335,
          "longitude": -0.1493964
        },
        {
          "latitude": 51.4857826,
          "longitude": -0.1492971
        },
        {
          "latitude": 51.4857665,
          "longitude": -0.1489538
        },
        {
          "latitude": 51.4857531,
          "longitude": -0.148707
        },
        {
          "latitude": 51.4857584,
          "longitude": -0.1483262
        },
        {
          "latitude": 51.4857692,
          "longitude": -0.1478782
        },
        {
          "latitude": 51.4857826,
          "longitude": -0.147441
        },
        {
          "latitude": 51.4857933,
          "longitude": -0.1469931
        },
        {
          "latitude": 51.4857799,
          "longitude": -0.1464754
        },
        {
          "latitude": 51.4857692,
          "longitude": -0.1462314
        },
        {
          "latitude": 51.4857477,
          "longitude": -0.1459095
        },
        {
          "latitude": 51.4857236,
          "longitude": -0.1455635
        },
        {
          "latitude": 51.4856753,
          "longitude": -0.1451826
        },
        {
          "latitude": 51.4856592,
          "longitude": -0.1450539
        },
        {
          "latitude": 51.4855278,
          "longitude": -0.1439434
        },
        {
          "latitude": 51.4854258,
          "longitude": -0.1432487
        },
        {
          "latitude": 51.48523,
          "longitude": -0.1420578
        },
        {
          "latitude": 51.4851147,
          "longitude": -0.1414919
        },
        {
          "latitude": 51.4850181,
          "longitude": -0.1408803
        },
        {
          "latitude": 51.4849752,
          "longitude": -0.1406014
        },
        {
          "latitude": 51.4849028,
          "longitude": -0.1400086
        },
        {
          "latitude": 51.4848948,
          "longitude": -0.1395258
        },
        {
          "latitude": 51.4849028,
          "longitude": -0.1392844
        },
        {
          "latitude": 51.4849082,
          "longitude": -0.1392308
        },
        {
          "latitude": 51.484935,
          "longitude": -0.1389894
        },
        {
          "latitude": 51.4850315,
          "longitude": -0.1383805
        },
        {
          "latitude": 51.4851066,
          "longitude": -0.1379567
        },
        {
          "latitude": 51.485222,
          "longitude": -0.1373103
        },
        {
          "latitude": 51.4853212,
          "longitude": -0.1367605
        },
        {
          "latitude": 51.4853588,
          "longitude": -0.1365486
        },
        {
          "latitude": 51.485635,
          "longitude": -0.13506
        },
        {
          "latitude": 51.4856645,
          "longitude": -0.1348937
        },
        {
          "latitude": 51.4857262,
          "longitude": -0.1345262
        },
        {
          "latitude": 51.485745,
          "longitude": -0.1344109
        },
        {
          "latitude": 51.4859006,
          "longitude": -0.1335928
        },
        {
          "latitude": 51.485914,
          "longitude": -0.133507
        },
        {
          "latitude": 51.4860427,
          "longitude": -0.1328498
        },
        {
          "latitude": 51.4860588,
          "longitude": -0.1327613
        },
        {
          "latitude": 51.4861152,
          "longitude": -0.132654
        },
        {
          "latitude": 51.4862064,
          "longitude": -0.1322839
        },
        {
          "latitude": 51.4863566,
          "longitude": -0.1318359
        },
        {
          "latitude": 51.4863619,
          "longitude": -0.1318198
        },
        {
          "latitude": 51.4864799,
          "longitude": -0.1315382
        },
        {
          "latitude": 51.486614,
          "longitude": -0.1312941
        },
        {
          "latitude": 51.4867616,
          "longitude": -0.1311037
        },
        {
          "latitude": 51.4868259,
          "longitude": -0.1310474
        },
        {
          "latitude": 51.4868715,
          "longitude": -0.1309884
        },
        {
          "latitude": 51.4869359,
          "longitude": -0.130932
        },
        {
          "latitude": 51.4871398,
          "longitude": -0.1308113
        },
        {
          "latitude": 51.4876869,
          "longitude": -0.1305002
        },
        {
          "latitude": 51.4880651,
          "longitude": -0.130232
        },
        {
          "latitude": 51.4881268,
          "longitude": -0.1301757
        },
        {
          "latitude": 51.4882046,
          "longitude": -0.1301059
        },
        {
          "latitude": 51.4883253,
          "longitude": -0.1299986
        },
        {
          "latitude": 51.4883789,
          "longitude": -0.1299477
        },
        {
          "latitude": 51.488623,
          "longitude": -0.1296875
        },
        {
          "latitude": 51.4886579,
          "longitude": -0.1296446
        },
        {
          "latitude": 51.488741,
          "longitude": -0.1295346
        },
        {
          "latitude": 51.4889315,
          "longitude": -0.1291886
        },
        {
          "latitude": 51.4890495,
          "longitude": -0.1289526
        },
        {
          "latitude": 51.4893794,
          "longitude": -0.1283008
        },
        {
          "latitude": 51.489653,
          "longitude": -0.1275712
        },
        {
          "latitude": 51.4897388,
          "longitude": -0.1273674
        },
        {
          "latitude": 51.4898568,
          "longitude": -0.1271769
        },
        {
          "latitude": 51.4899293,
          "longitude": -0.1270992
        },
        {
          "latitude": 51.4900044,
          "longitude": -0.1270214
        },
        {
          "latitude": 51.490176,
          "longitude": -0.1268765
        },
        {
          "latitude": 51.4912248,
          "longitude": -0.1260075
        },
        {
          "latitude": 51.4915574,
          "longitude": -0.1257259
        },
        {
          "latitude": 51.4918068,
          "longitude": -0.1255918
        },
        {
          "latitude": 51.491839,
          "longitude": -0.1255757
        },
        {
          "latitude": 51.4924774,
          "longitude": -0.1253209
        },
        {
          "latitude": 51.4927751,
          "longitude": -0.125227
        },
        {
          "latitude": 51.492818,
          "longitude": -0.1252189
        },
        {
          "latitude": 51.492877,
          "longitude": -0.1252082
        },
        {
          "latitude": 51.4929843,
          "longitude": -0.1251197
        },
        {
          "latitude": 51.493113,
          "longitude": -0.1251438
        },
        {
          "latitude": 51.4939848,
          "longitude": -0.1251841
        },
        {
          "latitude": 51.4941725,
          "longitude": -0.1252002
        },
        {
          "latitude": 51.4943093,
          "longitude": -0.1251948
        },
        {
          "latitude": 51.4943656,
          "longitude": -0.1251921
        },
        {
          "latitude": 51.4946151,
          "longitude": -0.1251787
        },
        {
          "latitude": 51.4946178,
          "longitude": -0.1252377
        },
        {
          "latitude": 51.4946258,
          "longitude": -0.1252887
        },
        {
          "latitude": 51.4946419,
          "longitude": -0.1253235
        },
        {
          "latitude": 51.4946902,
          "longitude": -0.1253772
        },
        {
          "latitude": 51.4947116,
          "longitude": -0.1253879
        },
        {
          "latitude": 51.4947385,
          "longitude": -0.1253933
        },
        {
          "latitude": 51.4947626,
          "longitude": -0.1253933
        },
        {
          "latitude": 51.4948136,
          "longitude": -0.1253879
        },
        {
          "latitude": 51.4948404,
          "longitude": -0.1253718
        },
        {
          "latitude": 51.4948618,
          "longitude": -0.125353
        },
        {
          "latitude": 51.4948887,
          "longitude": -0.1253128
        },
        {
          "latitude": 51.4949048,
          "longitude": -0.1252726
        },
        {
          "latitude": 51.4949101,
          "longitude": -0.125227
        },
        {
          "latitude": 51.4949074,
          "longitude": -0.1251438
        },
        {
          "latitude": 51.4949986,
          "longitude": -0.1251626
        },
        {
          "latitude": 51.4950576,
          "longitude": -0.125176
        },
        {
          "latitude": 51.4952213,
          "longitude": -0.1252136
        },
        {
          "latitude": 51.4953366,
          "longitude": -0.1252404
        },
        {
          "latitude": 51.4954144,
          "longitude": -0.1252592
        },
        {
          "latitude": 51.4960769,
          "longitude": -0.125412
        },
        {
          "latitude": 51.49638,
          "longitude": -0.1254791
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
      "endPointIndex": 118,
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
      "startPointIndex": 118,
      "endPointIndex": 170,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-secondary",
          "shieldContent": "B453"
        }
      ]
    },
    {
      "startPointIndex": 170,
      "endPointIndex": 186,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-secondary",
          "shieldContent": "A407"
        },
        {
          "reference": "gbr-secondary",
          "shieldContent": "B453"
        }
      ]
    },
    {
      "startPointIndex": 186,
      "endPointIndex": 219,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-secondary",
          "shieldContent": "A407"
        }
      ]
    },
    {
      "maxSpeedLimitInKmh": 48,
      "startPointIndex": 118,
      "endPointIndex": 283,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 219,
      "endPointIndex": 283,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-primary",
          "shieldContent": "A404"
        }
      ]
    },
    {
      "startPointIndex": 301,
      "endPointIndex": 305,
      "sectionType": "TRAFFIC",
      "simpleCategory": "ROAD_WORK",
      "effectiveSpeedInKmh": 35,
      "delayInSeconds": 0,
      "magnitudeOfDelay": 4,
      "tec": {
        "causes": [
          {
            "mainCauseCode": 3
          }
        ],
        "effectCode": 1
      }
    },
    {
      "maxSpeedLimitInKmh": 32,
      "startPointIndex": 283,
      "endPointIndex": 360,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 283,
      "endPointIndex": 360,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-secondary",
          "shieldContent": "A219"
        }
      ]
    },
    {
      "maxSpeedLimitInKmh": 48,
      "startPointIndex": 360,
      "endPointIndex": 402,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 64,
      "startPointIndex": 402,
      "endPointIndex": 422,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 393,
      "endPointIndex": 424,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-primary",
          "shieldContent": "A3220"
        }
      ]
    },
    {
      "startPointIndex": 424,
      "endPointIndex": 434,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-primary",
          "shieldContent": "A3220"
        },
        {
          "reference": "gbr-secondary",
          "shieldContent": "A402"
        }
      ]
    },
    {
      "maxSpeedLimitInKmh": 48,
      "startPointIndex": 422,
      "endPointIndex": 521,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 434,
      "endPointIndex": 521,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-primary",
          "shieldContent": "A3220"
        }
      ]
    },
    {
      "maxSpeedLimitInKmh": 32,
      "startPointIndex": 521,
      "endPointIndex": 554,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 48,
      "startPointIndex": 554,
      "endPointIndex": 596,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 521,
      "endPointIndex": 621,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-primary",
          "shieldContent": "A3220"
        },
        {
          "reference": "european-road",
          "shieldContent": "E30"
        }
      ]
    },
    {
      "startPointIndex": 621,
      "endPointIndex": 735,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-primary",
          "shieldContent": "A3212"
        },
        {
          "reference": "european-road",
          "shieldContent": "E30"
        }
      ]
    },
    {
      "maxSpeedLimitInKmh": 32,
      "startPointIndex": 596,
      "endPointIndex": 799,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 0,
      "endPointIndex": 799,
      "sectionType": "COUNTRY",
      "countryCode": "GBR"
    },
    {
      "startPointIndex": 735,
      "endPointIndex": 799,
      "sectionType": "TOLL_VIGNETTE",
      "countryCode": "GBR"
    },
    {
      "startPointIndex": 0,
      "endPointIndex": 799,
      "sectionType": "TRAVEL_MODE",
      "travelMode": "car"
    },
    {
      "startPointIndex": 735,
      "endPointIndex": 799,
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
      "endPointIndex": 799,
      "sectionType": "URBAN"
    },
    {
      "startPointIndex": 735,
      "endPointIndex": 799,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 109,
      "endPointIndex": 111,
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
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 111,
      "endPointIndex": 116,
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
      "startPointIndex": 116,
      "endPointIndex": 116,
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
      "properties": [],
      "startPointIndex": 116,
      "endPointIndex": 117,
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
      "startPointIndex": 117,
      "endPointIndex": 118,
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
      "startPointIndex": 118,
      "endPointIndex": 118,
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
      "startPointIndex": 118,
      "endPointIndex": 119,
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
      "startPointIndex": 119,
      "endPointIndex": 119,
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
        "SHORT_DASHED"
      ],
      "properties": [],
      "startPointIndex": 119,
      "endPointIndex": 161,
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
        "LONG_DASHED"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 166,
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
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 170,
      "endPointIndex": 170,
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
      "startPointIndex": 170,
      "endPointIndex": 179,
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
      "startPointIndex": 179,
      "endPointIndex": 179,
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
      "properties": [],
      "startPointIndex": 179,
      "endPointIndex": 184,
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
      "startPointIndex": 184,
      "endPointIndex": 186,
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
            "LEFT",
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
            "LEFT",
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
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 187,
      "endPointIndex": 188,
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
            "RIGHT_U_TURN"
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
      "startPointIndex": 188,
      "endPointIndex": 190,
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
            "RIGHT_U_TURN"
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
      "startPointIndex": 190,
      "endPointIndex": 191,
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
            "RIGHT_U_TURN"
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
      "startPointIndex": 191,
      "endPointIndex": 192,
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
            "RIGHT_U_TURN"
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
      "startPointIndex": 192,
      "endPointIndex": 192,
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
      "startPointIndex": 192,
      "endPointIndex": 193,
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
      "startPointIndex": 193,
      "endPointIndex": 194,
      "sectionType": "LANES"
    },
    {
      "lanes": [
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
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 247,
      "endPointIndex": 248,
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
            "SHARP_RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 248,
      "endPointIndex": 249,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "SLIGHT_LEFT",
            "RIGHT"
          ],
          "follow": "SLIGHT_LEFT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 249,
      "endPointIndex": 251,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "SLIGHT_LEFT",
            "RIGHT"
          ],
          "follow": "SLIGHT_LEFT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 251,
      "endPointIndex": 252,
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
      "startPointIndex": 252,
      "endPointIndex": 255,
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
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 255,
      "endPointIndex": 255,
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
        "DOUBLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 255,
      "endPointIndex": 256,
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
      "startPointIndex": 256,
      "endPointIndex": 257,
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
      "startPointIndex": 257,
      "endPointIndex": 260,
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
      "startPointIndex": 261,
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
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 263,
      "endPointIndex": 264,
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
      "startPointIndex": 264,
      "endPointIndex": 265,
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
      "startPointIndex": 265,
      "endPointIndex": 266,
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
      "startPointIndex": 266,
      "endPointIndex": 266,
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
      "startPointIndex": 266,
      "endPointIndex": 267,
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
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 267,
      "endPointIndex": 268,
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
      "startPointIndex": 268,
      "endPointIndex": 268,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT",
            "RIGHT"
          ],
          "follow": "RIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 268,
      "endPointIndex": 269,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT",
            "RIGHT"
          ],
          "follow": "RIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
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
            "STRAIGHT",
            "RIGHT"
          ],
          "follow": "RIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
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
            "STRAIGHT",
            "RIGHT"
          ],
          "follow": "RIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 271,
      "endPointIndex": 272,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT",
            "RIGHT"
          ],
          "follow": "RIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 272,
      "endPointIndex": 273,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT",
            "RIGHT"
          ],
          "follow": "RIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 273,
      "endPointIndex": 273,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT",
            "RIGHT"
          ],
          "follow": "RIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 273,
      "endPointIndex": 275,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT",
            "RIGHT"
          ],
          "follow": "RIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 275,
      "endPointIndex": 276,
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
      "properties": [],
      "startPointIndex": 276,
      "endPointIndex": 278,
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
      "properties": [],
      "startPointIndex": 279,
      "endPointIndex": 280,
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
        "DOUBLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 280,
      "endPointIndex": 281,
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
        "DOUBLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 281,
      "endPointIndex": 282,
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
      "startPointIndex": 282,
      "endPointIndex": 283,
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
      "startPointIndex": 283,
      "endPointIndex": 284,
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
      "startPointIndex": 284,
      "endPointIndex": 284,
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
      "startPointIndex": 284,
      "endPointIndex": 285,
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
      "startPointIndex": 285,
      "endPointIndex": 286,
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
      "startPointIndex": 286,
      "endPointIndex": 296,
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
      "startPointIndex": 336,
      "endPointIndex": 336,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED"
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED"
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "DOUBLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 338,
      "endPointIndex": 340,
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
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 340,
      "endPointIndex": 340,
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
      "startPointIndex": 340,
      "endPointIndex": 341,
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
      "startPointIndex": 341,
      "endPointIndex": 342,
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
      "startPointIndex": 342,
      "endPointIndex": 344,
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
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 345,
      "endPointIndex": 346,
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
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 346,
      "endPointIndex": 347,
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
      "startPointIndex": 347,
      "endPointIndex": 347,
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
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "DOUBLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 347,
      "endPointIndex": 348,
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
      "startPointIndex": 348,
      "endPointIndex": 348,
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
        "DOUBLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 348,
      "endPointIndex": 349,
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
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 349,
      "endPointIndex": 350,
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
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 350,
      "endPointIndex": 351,
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
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 351,
      "endPointIndex": 351,
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
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 351,
      "endPointIndex": 356,
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
        "SINGLE_SOLID",
        "DOUBLE_SOLID",
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
        "SINGLE_SOLID",
        "DOUBLE_SOLID",
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
        "SINGLE_SOLID",
        "DOUBLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 359,
      "endPointIndex": 360,
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
      "startPointIndex": 360,
      "endPointIndex": 360,
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
      "startPointIndex": 360,
      "endPointIndex": 361,
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
      "startPointIndex": 361,
      "endPointIndex": 362,
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
      "startPointIndex": 362,
      "endPointIndex": 364,
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
      "startPointIndex": 364,
      "endPointIndex": 365,
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
      "startPointIndex": 365,
      "endPointIndex": 366,
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
      "startPointIndex": 366,
      "endPointIndex": 368,
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
      "startPointIndex": 368,
      "endPointIndex": 369,
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
      "startPointIndex": 369,
      "endPointIndex": 370,
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
        "NO_MARKING",
        "LONG_DASHED"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 370,
      "endPointIndex": 372,
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
      "startPointIndex": 372,
      "endPointIndex": 372,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 372,
      "endPointIndex": 373,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 373,
      "endPointIndex": 374,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 374,
      "endPointIndex": 378,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 378,
      "endPointIndex": 383,
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
      "startPointIndex": 383,
      "endPointIndex": 385,
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
      "startPointIndex": 385,
      "endPointIndex": 387,
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
      "startPointIndex": 387,
      "endPointIndex": 388,
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
      "startPointIndex": 388,
      "endPointIndex": 391,
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
      "startPointIndex": 391,
      "endPointIndex": 391,
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
      "properties": [],
      "startPointIndex": 391,
      "endPointIndex": 392,
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
      "startPointIndex": 392,
      "endPointIndex": 392,
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
      "startPointIndex": 392,
      "endPointIndex": 392,
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
      "startPointIndex": 392,
      "endPointIndex": 394,
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
      "startPointIndex": 394,
      "endPointIndex": 395,
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
      "startPointIndex": 395,
      "endPointIndex": 398,
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
      "startPointIndex": 398,
      "endPointIndex": 402,
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
      "startPointIndex": 402,
      "endPointIndex": 403,
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
      "startPointIndex": 403,
      "endPointIndex": 404,
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
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 404,
      "endPointIndex": 405,
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
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 405,
      "endPointIndex": 406,
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
      "startPointIndex": 406,
      "endPointIndex": 417,
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
        "SHORT_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 418,
      "endPointIndex": 419,
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
        "SHORT_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 419,
      "endPointIndex": 421,
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
        "SHORT_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 421,
      "endPointIndex": 422,
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
        "SHORT_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 422,
      "endPointIndex": 422,
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
        "SHORT_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 422,
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
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 424,
      "endPointIndex": 424,
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
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 424,
      "endPointIndex": 425,
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
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 425,
      "endPointIndex": 426,
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
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 426,
      "endPointIndex": 426,
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
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 426,
      "endPointIndex": 428,
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
      "startPointIndex": 428,
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
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 428,
      "endPointIndex": 432,
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
      "startPointIndex": 432,
      "endPointIndex": 434,
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
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 434,
      "endPointIndex": 434,
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
      "startPointIndex": 434,
      "endPointIndex": 437,
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
      "startPointIndex": 437,
      "endPointIndex": 441,
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
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 441,
      "endPointIndex": 441,
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
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 441,
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
      "startPointIndex": 443,
      "endPointIndex": 444,
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
      "startPointIndex": 444,
      "endPointIndex": 444,
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
      "startPointIndex": 444,
      "endPointIndex": 444,
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
        "LONG_DASHED"
      ],
      "properties": [],
      "startPointIndex": 444,
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
      "startPointIndex": 447,
      "endPointIndex": 449,
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
      "startPointIndex": 449,
      "endPointIndex": 450,
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
      "startPointIndex": 450,
      "endPointIndex": 452,
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
      "startPointIndex": 452,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 453,
      "endPointIndex": 455,
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
      "startPointIndex": 455,
      "endPointIndex": 457,
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
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 457,
      "endPointIndex": 462,
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
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 462,
      "endPointIndex": 464,
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
        "DOUBLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
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
      "properties": [
        "IS_MANEUVER"
      ],
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
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 468,
      "endPointIndex": 470,
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
      "startPointIndex": 470,
      "endPointIndex": 474,
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
      "startPointIndex": 474,
      "endPointIndex": 480,
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
      "startPointIndex": 481,
      "endPointIndex": 482,
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
            "STRAIGHT",
            "RIGHT"
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
      "startPointIndex": 482,
      "endPointIndex": 482,
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
      "startPointIndex": 482,
      "endPointIndex": 484,
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
      "startPointIndex": 484,
      "endPointIndex": 487,
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
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 488,
      "endPointIndex": 489,
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
        "DOUBLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 489,
      "endPointIndex": 498,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SHARP_LEFT",
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT",
            "SHARP_RIGHT"
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
      "startPointIndex": 499,
      "endPointIndex": 500,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SHARP_LEFT",
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        },
        {
          "directions": [
            "SLIGHT_LEFT",
            "SHARP_RIGHT"
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
      "startPointIndex": 500,
      "endPointIndex": 501,
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
      "startPointIndex": 501,
      "endPointIndex": 501,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SHARP_LEFT",
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
      "startPointIndex": 501,
      "endPointIndex": 502,
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
      "startPointIndex": 502,
      "endPointIndex": 504,
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
      "startPointIndex": 504,
      "endPointIndex": 504,
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
            "RIGHT"
          ],
          "follow": "RIGHT"
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
            "LEFT"
          ]
        },
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 505,
      "endPointIndex": 506,
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
            "RIGHT"
          ],
          "follow": "RIGHT"
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
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 506,
      "endPointIndex": 507,
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
            "RIGHT"
          ],
          "follow": "RIGHT"
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
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 507,
      "endPointIndex": 507,
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
            "RIGHT"
          ],
          "follow": "RIGHT"
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
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 507,
      "endPointIndex": 509,
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
            "RIGHT"
          ],
          "follow": "RIGHT"
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
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 509,
      "endPointIndex": 510,
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
      "startPointIndex": 510,
      "endPointIndex": 513,
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
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 513,
      "endPointIndex": 514,
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
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 514,
      "endPointIndex": 515,
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
      "startPointIndex": 515,
      "endPointIndex": 515,
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
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 515,
      "endPointIndex": 516,
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
            "STRAIGHT",
            "RIGHT"
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
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 516,
      "endPointIndex": 517,
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
            "STRAIGHT",
            "RIGHT"
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
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 517,
      "endPointIndex": 517,
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
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 517,
      "endPointIndex": 518,
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
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
            "RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SHORT_DASHED",
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
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 519,
      "endPointIndex": 519,
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
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 519,
      "endPointIndex": 520,
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
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 520,
      "endPointIndex": 521,
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
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 521,
      "endPointIndex": 521,
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
      "startPointIndex": 521,
      "endPointIndex": 522,
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
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 577,
      "endPointIndex": 579,
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
      "startPointIndex": 579,
      "endPointIndex": 579,
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
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 579,
      "endPointIndex": 582,
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
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 582,
      "endPointIndex": 584,
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
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 584,
      "endPointIndex": 585,
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
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 585,
      "endPointIndex": 587,
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
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 587,
      "endPointIndex": 589,
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
      "startPointIndex": 589,
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
      "startPointIndex": 590,
      "endPointIndex": 592,
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
      "startPointIndex": 592,
      "endPointIndex": 592,
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
        "SINGLE_SOLID",
        "SHORT_DASHED",
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
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 594,
      "endPointIndex": 595,
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
        "SINGLE_SOLID",
        "SHORT_DASHED",
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
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 596,
      "endPointIndex": 598,
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
      "startPointIndex": 598,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
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
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 599,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 599,
      "endPointIndex": 601,
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
      "startPointIndex": 601,
      "endPointIndex": 603,
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
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "DOUBLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 704,
      "endPointIndex": 705,
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
      "startPointIndex": 705,
      "endPointIndex": 705,
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
      "startPointIndex": 705,
      "endPointIndex": 706,
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
      "startPointIndex": 706,
      "endPointIndex": 706,
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
      "startPointIndex": 706,
      "endPointIndex": 707,
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
      "startPointIndex": 707,
      "endPointIndex": 708,
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
      "startPointIndex": 708,
      "endPointIndex": 708,
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
        "changeOfAngleInDegrees": 79,
        "drivingSide": "LEFT",
        "maneuver": "ROUNDABOUT_RIGHT",
        "maneuverPoint": {
          "latitude": 51.5578803,
          "longitude": -0.2493677
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "B453"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈniːz.dən ˈle⁀ɪn",
            "phoneticLanguageCode": "en-GB",
            "text": "Neasden Lane"
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
        "roundaboutExitNumber": 4,
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
          },
          {
            "distanceInMeters": 2573,
            "point": {
              "latitude": 51.5580869,
              "longitude": -0.2485523
            },
            "travelTimeInSeconds": 465
          },
          {
            "distanceInMeters": 2574,
            "point": {
              "latitude": 51.5580735,
              "longitude": -0.2485496
            },
            "travelTimeInSeconds": 465
          },
          {
            "distanceInMeters": 2585,
            "point": {
              "latitude": 51.5579823,
              "longitude": -0.2485818
            },
            "travelTimeInSeconds": 466
          },
          {
            "distanceInMeters": 2589,
            "point": {
              "latitude": 51.5579474,
              "longitude": -0.2486166
            },
            "travelTimeInSeconds": 467
          },
          {
            "distanceInMeters": 2602,
            "point": {
              "latitude": 51.5578723,
              "longitude": -0.2487615
            },
            "travelTimeInSeconds": 468
          },
          {
            "distanceInMeters": 2621,
            "point": {
              "latitude": 51.5578777,
              "longitude": -0.2490351
            },
            "travelTimeInSeconds": 470
          },
          {
            "distanceInMeters": 2644,
            "point": {
              "latitude": 51.5578803,
              "longitude": -0.2493677
            },
            "travelTimeInSeconds": 473
          }
        ],
        "sideRoads": []
      },
      {
        "drivingSide": "LEFT",
        "maneuver": "EXIT_ROUNDABOUT",
        "maneuverPoint": {
          "latitude": 51.5578803,
          "longitude": -0.2493677
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "B453"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈniːz.dən ˈle⁀ɪn",
            "phoneticLanguageCode": "en-GB",
            "text": "Neasden Lane"
          }
        },
        "offsetOfAmbiguousExitFromManeuverInMeters": 84,
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
        "routeOffsetInMeters": 2644,
        "routePath": [
          {
            "distanceInMeters": 2644,
            "point": {
              "latitude": 51.5578803,
              "longitude": -0.2493677
            },
            "travelTimeInSeconds": 473
          }
        ],
        "sideRoads": []
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
          "latitude": 51.5578026,
          "longitude": -0.2496707
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "B453"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈniːz.dən ˈle⁀ɪn",
            "phoneticLanguageCode": "en-GB",
            "text": "Neasden Lane"
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
                "text": "B453"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈniːz.dən ˈle⁀ɪn",
            "phoneticLanguageCode": "en-GB",
            "text": "Neasden Lane"
          }
        },
        "routeOffsetInMeters": 2667,
        "routePath": [
          {
            "distanceInMeters": 2667,
            "point": {
              "latitude": 51.5578026,
              "longitude": -0.2496707
            },
            "travelTimeInSeconds": 476
          },
          {
            "distanceInMeters": 2677,
            "point": {
              "latitude": 51.5577147,
              "longitude": -0.2497028
            },
            "travelTimeInSeconds": 477
          }
        ],
        "sideRoads": []
      },
      {
        "changeOfAngleInDegrees": 67,
        "drivingSide": "LEFT",
        "maneuver": "ROUNDABOUT_RIGHT",
        "maneuverPoint": {
          "latitude": 51.5488091,
          "longitude": -0.2488339
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
                "text": "B453"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈniːz.dən ˈle⁀ɪn",
            "phoneticLanguageCode": "en-GB",
            "text": "Neasden Lane"
          }
        },
        "roundaboutExitNumber": 2,
        "routeOffsetInMeters": 3701,
        "routePath": [
          {
            "distanceInMeters": 3701,
            "point": {
              "latitude": 51.5489835,
              "longitude": -0.2489573
            },
            "travelTimeInSeconds": 608
          },
          {
            "distanceInMeters": 3704,
            "point": {
              "latitude": 51.5489969,
              "longitude": -0.2489251
            },
            "travelTimeInSeconds": 609
          },
          {
            "distanceInMeters": 3706,
            "point": {
              "latitude": 51.5490022,
              "longitude": -0.2488902
            },
            "travelTimeInSeconds": 609
          },
          {
            "distanceInMeters": 3709,
            "point": {
              "latitude": 51.5490049,
              "longitude": -0.2488554
            },
            "travelTimeInSeconds": 610
          },
          {
            "distanceInMeters": 3710,
            "point": {
              "latitude": 51.5490049,
              "longitude": -0.2488285
            },
            "travelTimeInSeconds": 611
          },
          {
            "distanceInMeters": 3712,
            "point": {
              "latitude": 51.5490022,
              "longitude": -0.2488044
            },
            "travelTimeInSeconds": 611
          },
          {
            "distanceInMeters": 3716,
            "point": {
              "latitude": 51.5489888,
              "longitude": -0.2487507
            },
            "travelTimeInSeconds": 612
          },
          {
            "distanceInMeters": 3718,
            "point": {
              "latitude": 51.5489781,
              "longitude": -0.2487347
            },
            "travelTimeInSeconds": 612
          },
          {
            "distanceInMeters": 3719,
            "point": {
              "latitude": 51.5489674,
              "longitude": -0.2487159
            },
            "travelTimeInSeconds": 613
          },
          {
            "distanceInMeters": 3721,
            "point": {
              "latitude": 51.5489566,
              "longitude": -0.2487051
            },
            "travelTimeInSeconds": 613
          },
          {
            "distanceInMeters": 3723,
            "point": {
              "latitude": 51.5489352,
              "longitude": -0.2486944
            },
            "travelTimeInSeconds": 614
          },
          {
            "distanceInMeters": 3725,
            "point": {
              "latitude": 51.5489164,
              "longitude": -0.2486944
            },
            "travelTimeInSeconds": 614
          },
          {
            "distanceInMeters": 3728,
            "point": {
              "latitude": 51.5488923,
              "longitude": -0.2486971
            },
            "travelTimeInSeconds": 615
          },
          {
            "distanceInMeters": 3729,
            "point": {
              "latitude": 51.5488815,
              "longitude": -0.2487025
            },
            "travelTimeInSeconds": 615
          },
          {
            "distanceInMeters": 3734,
            "point": {
              "latitude": 51.5488467,
              "longitude": -0.2487347
            },
            "travelTimeInSeconds": 615
          },
          {
            "distanceInMeters": 3738,
            "point": {
              "latitude": 51.5488252,
              "longitude": -0.2487803
            },
            "travelTimeInSeconds": 616
          },
          {
            "distanceInMeters": 3742,
            "point": {
              "latitude": 51.5488091,
              "longitude": -0.2488339
            },
            "travelTimeInSeconds": 616
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 974,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 934,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 863,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 815,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 743,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 716,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 685,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 434,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 367,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 310,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 246,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 102,
            "side": "RIGHT"
          }
        ]
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
          "latitude": 51.5321955,
          "longitude": -0.2372521
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A219"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈskɻʌbz ˈle⁀ɪn",
            "phoneticLanguageCode": "en-GB",
            "text": "Scrubs Lane"
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
        "routeOffsetInMeters": 6324,
        "routePath": [
          {
            "distanceInMeters": 6324,
            "point": {
              "latitude": 51.5321848,
              "longitude": -0.2373889
            },
            "travelTimeInSeconds": 1168
          },
          {
            "distanceInMeters": 6334,
            "point": {
              "latitude": 51.5321955,
              "longitude": -0.2372521
            },
            "travelTimeInSeconds": 1170
          },
          {
            "distanceInMeters": 6342,
            "point": {
              "latitude": 51.5321258,
              "longitude": -0.2372307
            },
            "travelTimeInSeconds": 1178
          },
          {
            "distanceInMeters": 6352,
            "point": {
              "latitude": 51.5320372,
              "longitude": -0.237219
            },
            "travelTimeInSeconds": 1184
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 981,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 914,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 859,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 730,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 327,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 246,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 41,
            "side": "RIGHT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": -73,
        "drivingSide": "LEFT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "landmark": "AT_TRAFFIC_LIGHT",
        "maneuver": "TURN_LEFT",
        "maneuverPoint": {
          "latitude": 51.515311,
          "longitude": -0.2261585
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈwɛst.we⁀ɪ",
            "phoneticLanguageCode": "en-GB",
            "text": "Westway"
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
                "text": "A219"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈwʊd ˈle⁀ɪn",
            "phoneticLanguageCode": "en-GB",
            "text": "Wood Lane"
          }
        },
        "routeOffsetInMeters": 8430,
        "routePath": [
          {
            "distanceInMeters": 8430,
            "point": {
              "latitude": 51.515311,
              "longitude": -0.2261585
            },
            "travelTimeInSeconds": 1528
          },
          {
            "distanceInMeters": 8440,
            "point": {
              "latitude": 51.515319,
              "longitude": -0.2260137
            },
            "travelTimeInSeconds": 1536
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 656,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 516,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 422,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 353,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 275,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 216,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 204,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 102,
            "side": "LEFT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": 97,
        "drivingSide": "LEFT",
        "maneuver": "ROUNDABOUT_RIGHT",
        "maneuverPoint": {
          "latitude": 51.5150937,
          "longitude": -0.220204
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A3220"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈwɛst ˈkɻɒs ˈɻuːt",
            "phoneticLanguageCode": "en-GB",
            "text": "West Cross Route"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈwɛst.we⁀ɪ",
            "phoneticLanguageCode": "en-GB",
            "text": "Westway"
          }
        },
        "roundaboutExitNumber": 2,
        "routeOffsetInMeters": 8751,
        "routePath": [
          {
            "distanceInMeters": 8751,
            "point": {
              "latitude": 51.5157536,
              "longitude": -0.2216122
            },
            "travelTimeInSeconds": 1579
          },
          {
            "distanceInMeters": 8756,
            "point": {
              "latitude": 51.5157965,
              "longitude": -0.2215719
            },
            "travelTimeInSeconds": 1580
          },
          {
            "distanceInMeters": 8759,
            "point": {
              "latitude": 51.5158179,
              "longitude": -0.2215531
            },
            "travelTimeInSeconds": 1580
          },
          {
            "distanceInMeters": 8761,
            "point": {
              "latitude": 51.515834,
              "longitude": -0.2215371
            },
            "travelTimeInSeconds": 1581
          },
          {
            "distanceInMeters": 8770,
            "point": {
              "latitude": 51.5158957,
              "longitude": -0.2214566
            },
            "travelTimeInSeconds": 1581
          },
          {
            "distanceInMeters": 8785,
            "point": {
              "latitude": 51.5159842,
              "longitude": -0.2212903
            },
            "travelTimeInSeconds": 1583
          },
          {
            "distanceInMeters": 8804,
            "point": {
              "latitude": 51.5160486,
              "longitude": -0.2210382
            },
            "travelTimeInSeconds": 1585
          },
          {
            "distanceInMeters": 8805,
            "point": {
              "latitude": 51.5160513,
              "longitude": -0.2210274
            },
            "travelTimeInSeconds": 1585
          },
          {
            "distanceInMeters": 8822,
            "point": {
              "latitude": 51.5160754,
              "longitude": -0.2207807
            },
            "travelTimeInSeconds": 1587
          },
          {
            "distanceInMeters": 8835,
            "point": {
              "latitude": 51.5160647,
              "longitude": -0.2205956
            },
            "travelTimeInSeconds": 1588
          },
          {
            "distanceInMeters": 8848,
            "point": {
              "latitude": 51.5160245,
              "longitude": -0.2204239
            },
            "travelTimeInSeconds": 1589
          },
          {
            "distanceInMeters": 8859,
            "point": {
              "latitude": 51.5159762,
              "longitude": -0.2202898
            },
            "travelTimeInSeconds": 1590
          },
          {
            "distanceInMeters": 8877,
            "point": {
              "latitude": 51.5158635,
              "longitude": -0.2201021
            },
            "travelTimeInSeconds": 1592
          },
          {
            "distanceInMeters": 8888,
            "point": {
              "latitude": 51.5157777,
              "longitude": -0.2200136
            },
            "travelTimeInSeconds": 1593
          },
          {
            "distanceInMeters": 8893,
            "point": {
              "latitude": 51.5157428,
              "longitude": -0.2199787
            },
            "travelTimeInSeconds": 1593
          },
          {
            "distanceInMeters": 8907,
            "point": {
              "latitude": 51.5156221,
              "longitude": -0.2199063
            },
            "travelTimeInSeconds": 1595
          },
          {
            "distanceInMeters": 8916,
            "point": {
              "latitude": 51.5155363,
              "longitude": -0.2198902
            },
            "travelTimeInSeconds": 1596
          },
          {
            "distanceInMeters": 8934,
            "point": {
              "latitude": 51.5153807,
              "longitude": -0.2199143
            },
            "travelTimeInSeconds": 1598
          },
          {
            "distanceInMeters": 8945,
            "point": {
              "latitude": 51.5152869,
              "longitude": -0.2199706
            },
            "travelTimeInSeconds": 1599
          },
          {
            "distanceInMeters": 8958,
            "point": {
              "latitude": 51.5151849,
              "longitude": -0.2200672
            },
            "travelTimeInSeconds": 1600
          },
          {
            "distanceInMeters": 8968,
            "point": {
              "latitude": 51.5151206,
              "longitude": -0.2201638
            },
            "travelTimeInSeconds": 1601
          },
          {
            "distanceInMeters": 8972,
            "point": {
              "latitude": 51.5150937,
              "longitude": -0.220204
            },
            "travelTimeInSeconds": 1602
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
            "phonetic": "wɛs.ˈmɪn.stəɻ",
            "phoneticLanguageCode": "en-GB",
            "text": "Westminster"
          }
        }
      },
      {
        "drivingSide": "LEFT",
        "maneuver": "EXIT_ROUNDABOUT",
        "maneuverPoint": {
          "latitude": 51.5150937,
          "longitude": -0.220204
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A3220"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈwɛst ˈkɻɒs ˈɻuːt",
            "phoneticLanguageCode": "en-GB",
            "text": "West Cross Route"
          }
        },
        "offsetOfAmbiguousExitFromManeuverInMeters": 113,
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈwɛst.we⁀ɪ",
            "phoneticLanguageCode": "en-GB",
            "text": "Westway"
          }
        },
        "routeOffsetInMeters": 8972,
        "routePath": [
          {
            "distanceInMeters": 8972,
            "point": {
              "latitude": 51.5150937,
              "longitude": -0.220204
            },
            "travelTimeInSeconds": 1602
          }
        ],
        "sideRoads": []
      },
      {
        "changeOfAngleInDegrees": -18,
        "drivingSide": "LEFT",
        "maneuver": "ROUNDABOUT_STRAIGHT",
        "maneuverPoint": {
          "latitude": 51.5044373,
          "longitude": -0.216009
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A3220"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈhɒ.lənd ˈɻə⁀ʊd",
            "phoneticLanguageCode": "en-GB",
            "text": "Holland Road"
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
                "text": "A3220"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈwɛst ˈkɻɒs ˈɻuːt",
            "phoneticLanguageCode": "en-GB",
            "text": "West Cross Route"
          }
        },
        "roundaboutExitNumber": 2,
        "routeOffsetInMeters": 10139,
        "routePath": [
          {
            "distanceInMeters": 10139,
            "point": {
              "latitude": 51.5050676,
              "longitude": -0.2167332
            },
            "travelTimeInSeconds": 1694
          },
          {
            "distanceInMeters": 10146,
            "point": {
              "latitude": 51.5050462,
              "longitude": -0.2166447
            },
            "travelTimeInSeconds": 1694
          },
          {
            "distanceInMeters": 10154,
            "point": {
              "latitude": 51.505022,
              "longitude": -0.2165294
            },
            "travelTimeInSeconds": 1696
          },
          {
            "distanceInMeters": 10159,
            "point": {
              "latitude": 51.5050086,
              "longitude": -0.2164704
            },
            "travelTimeInSeconds": 1696
          },
          {
            "distanceInMeters": 10176,
            "point": {
              "latitude": 51.5049684,
              "longitude": -0.216237
            },
            "travelTimeInSeconds": 1699
          },
          {
            "distanceInMeters": 10186,
            "point": {
              "latitude": 51.5049201,
              "longitude": -0.2161083
            },
            "travelTimeInSeconds": 1702
          },
          {
            "distanceInMeters": 10198,
            "point": {
              "latitude": 51.504837,
              "longitude": -0.2159929
            },
            "travelTimeInSeconds": 1706
          },
          {
            "distanceInMeters": 10212,
            "point": {
              "latitude": 51.5047216,
              "longitude": -0.2159205
            },
            "travelTimeInSeconds": 1710
          },
          {
            "distanceInMeters": 10220,
            "point": {
              "latitude": 51.5046465,
              "longitude": -0.2159125
            },
            "travelTimeInSeconds": 1712
          },
          {
            "distanceInMeters": 10227,
            "point": {
              "latitude": 51.5045902,
              "longitude": -0.2159205
            },
            "travelTimeInSeconds": 1714
          },
          {
            "distanceInMeters": 10245,
            "point": {
              "latitude": 51.5044373,
              "longitude": -0.216009
            },
            "travelTimeInSeconds": 1718
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 758,
            "side": "LEFT"
          }
        ]
      },
      {
        "drivingSide": "LEFT",
        "maneuver": "EXIT_ROUNDABOUT",
        "maneuverPoint": {
          "latitude": 51.5044373,
          "longitude": -0.216009
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A3220"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈhɒ.lənd ˈɻə⁀ʊd",
            "phoneticLanguageCode": "en-GB",
            "text": "Holland Road"
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
                "text": "A3220"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈwɛst ˈkɻɒs ˈɻuːt",
            "phoneticLanguageCode": "en-GB",
            "text": "West Cross Route"
          }
        },
        "routeOffsetInMeters": 10245,
        "routePath": [
          {
            "distanceInMeters": 10245,
            "point": {
              "latitude": 51.5044373,
              "longitude": -0.216009
            },
            "travelTimeInSeconds": 1718
          }
        ],
        "sideRoads": []
      },
      {
        "changeOfAngleInDegrees": 17,
        "drivingSide": "LEFT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "SLIGHT_RIGHT",
        "maneuverPoint": {
          "latitude": 51.4996415,
          "longitude": -0.2079651
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A3220"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈæ.dɪ.sən ˈɻə⁀ʊd",
            "phoneticLanguageCode": "en-GB",
            "text": "Addison Road"
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
                "text": "A3220"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈæ.dɪ.sən ˈkɻɛ.sn̩t",
            "phoneticLanguageCode": "en-GB",
            "text": "Addison Crescent"
          }
        },
        "routeOffsetInMeters": 11065,
        "routePath": [
          {
            "distanceInMeters": 11065,
            "point": {
              "latitude": 51.4996415,
              "longitude": -0.2079651
            },
            "travelTimeInSeconds": 1831
          },
          {
            "distanceInMeters": 11069,
            "point": {
              "latitude": 51.4996389,
              "longitude": -0.2079007
            },
            "travelTimeInSeconds": 1832
          },
          {
            "distanceInMeters": 11072,
            "point": {
              "latitude": 51.4996335,
              "longitude": -0.2078632
            },
            "travelTimeInSeconds": 1832
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 693,
            "side": "LEFT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": 45,
        "drivingSide": "LEFT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": true,
        "maneuver": "TURN_RIGHT",
        "maneuverPoint": {
          "latitude": 51.4996335,
          "longitude": -0.2078632
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A3220"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈæ.dɪ.sən ˈɻə⁀ʊd",
            "phoneticLanguageCode": "en-GB",
            "text": "Addison Road"
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
                "text": "A3220"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈæ.dɪ.sən ˈɻə⁀ʊd",
            "phoneticLanguageCode": "en-GB",
            "text": "Addison Road"
          }
        },
        "routeOffsetInMeters": 11072,
        "routePath": [
          {
            "distanceInMeters": 11072,
            "point": {
              "latitude": 51.4996335,
              "longitude": -0.2078632
            },
            "travelTimeInSeconds": 1832
          },
          {
            "distanceInMeters": 11075,
            "point": {
              "latitude": 51.4996147,
              "longitude": -0.2078229
            },
            "travelTimeInSeconds": 1833
          },
          {
            "distanceInMeters": 11079,
            "point": {
              "latitude": 51.4995852,
              "longitude": -0.2078095
            },
            "travelTimeInSeconds": 1835
          }
        ],
        "sideRoads": []
      },
      {
        "changeOfAngleInDegrees": -34,
        "drivingSide": "LEFT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_LEFT",
        "maneuverPoint": {
          "latitude": 51.4948645,
          "longitude": -0.1995671
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A3220"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈpɛm.bɻʊk ˈɻə⁀ʊd",
            "phoneticLanguageCode": "en-GB",
            "text": "Pembroke Road"
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
                "text": "A3220"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈwɒɻ.ɪk ˈgɑː.dn̩z",
            "phoneticLanguageCode": "en-GB",
            "text": "Warwick Gardens"
          }
        },
        "routeOffsetInMeters": 11873,
        "routePath": [
          {
            "distanceInMeters": 11873,
            "point": {
              "latitude": 51.4949182,
              "longitude": -0.1999694
            },
            "travelTimeInSeconds": 1969
          },
          {
            "distanceInMeters": 11877,
            "point": {
              "latitude": 51.4949208,
              "longitude": -0.199905
            },
            "travelTimeInSeconds": 1971
          },
          {
            "distanceInMeters": 11881,
            "point": {
              "latitude": 51.4949128,
              "longitude": -0.1998514
            },
            "travelTimeInSeconds": 1973
          },
          {
            "distanceInMeters": 11902,
            "point": {
              "latitude": 51.4948645,
              "longitude": -0.1995671
            },
            "travelTimeInSeconds": 1978
          },
          {
            "distanceInMeters": 11912,
            "point": {
              "latitude": 51.4949066,
              "longitude": -0.1994397
            },
            "travelTimeInSeconds": 1980
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 723,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 653,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 631,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 619,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 499,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 427,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 418,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 402,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 206,
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
          "latitude": 51.4957926,
          "longitude": -0.1967508
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A3220"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈɜːlz ˈkɔːt ˈɻə⁀ʊd",
            "phoneticLanguageCode": "en-GB",
            "text": "Earl's Court Road"
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
                "text": "A3220"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈpɛm.bɻʊk ˈɻə⁀ʊd",
            "phoneticLanguageCode": "en-GB",
            "text": "Pembroke Road"
          }
        },
        "routeOffsetInMeters": 12122,
        "routePath": [
          {
            "distanceInMeters": 12122,
            "point": {
              "latitude": 51.4957926,
              "longitude": -0.1967508
            },
            "travelTimeInSeconds": 2049
          },
          {
            "distanceInMeters": 12129,
            "point": {
              "latitude": 51.4957899,
              "longitude": -0.1966622
            },
            "travelTimeInSeconds": 2052
          },
          {
            "distanceInMeters": 12135,
            "point": {
              "latitude": 51.4957711,
              "longitude": -0.1965791
            },
            "travelTimeInSeconds": 2054
          },
          {
            "distanceInMeters": 12145,
            "point": {
              "latitude": 51.4957148,
              "longitude": -0.1964664
            },
            "travelTimeInSeconds": 2057
          },
          {
            "distanceInMeters": 12155,
            "point": {
              "latitude": 51.4956367,
              "longitude": -0.196397
            },
            "travelTimeInSeconds": 2060
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 116,
            "side": "LEFT"
          }
        ]
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
          "latitude": 51.4801472,
          "longitude": -0.1797321
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "A3220"
              },
              "stateCode": ""
            },
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "E30"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "kɻɪ.ˈmɔːn ˈɻə⁀ʊd",
            "phoneticLanguageCode": "en-GB",
            "text": "Cremorne Road"
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
                "text": "A3220"
              },
              "stateCode": ""
            },
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "E30"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈiː.dɪθ ˈgɻə⁀ʊv",
            "phoneticLanguageCode": "en-GB",
            "text": "Edith Grove"
          }
        },
        "routeOffsetInMeters": 14230,
        "routePath": [
          {
            "distanceInMeters": 14230,
            "point": {
              "latitude": 51.4802572,
              "longitude": -0.1800406
            },
            "travelTimeInSeconds": 2502
          },
          {
            "distanceInMeters": 14248,
            "point": {
              "latitude": 51.4801687,
              "longitude": -0.1798099
            },
            "travelTimeInSeconds": 2507
          },
          {
            "distanceInMeters": 14254,
            "point": {
              "latitude": 51.4801472,
              "longitude": -0.1797321
            },
            "travelTimeInSeconds": 2509
          },
          {
            "distanceInMeters": 14264,
            "point": {
              "latitude": 51.4801626,
              "longitude": -0.1795922
            },
            "travelTimeInSeconds": 2512
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 893,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 820,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 740,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 658,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 594,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 522,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 311,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 192,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 185,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 143,
            "side": "LEFT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": 12,
        "drivingSide": "LEFT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "SLIGHT_RIGHT",
        "maneuverPoint": {
          "latitude": 51.488741,
          "longitude": -0.1295346
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
            "phonetic": "ˈmɪl.bæŋk",
            "phoneticLanguageCode": "en-GB",
            "text": "Millbank"
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
            },
            {
              "countryCode": "GBR",
              "roadNumber": {
                "text": "E30"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈgɻə⁀ʊv.nə ˈɻə⁀ʊd",
            "phoneticLanguageCode": "en-GB",
            "text": "Grosvenor Road"
          }
        },
        "routeOffsetInMeters": 18064,
        "routePath": [
          {
            "distanceInMeters": 18064,
            "point": {
              "latitude": 51.4886579,
              "longitude": -0.1296446
            },
            "travelTimeInSeconds": 3351
          },
          {
            "distanceInMeters": 18076,
            "point": {
              "latitude": 51.488741,
              "longitude": -0.1295346
            },
            "travelTimeInSeconds": 3353
          },
          {
            "distanceInMeters": 18086,
            "point": {
              "latitude": 51.4888006,
              "longitude": -0.1294265
            },
            "travelTimeInSeconds": 3354
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 706,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 666,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 543,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 531,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 496,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 437,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 382,
            "side": "LEFT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": 1,
        "drivingSide": "LEFT",
        "maneuver": "ROUNDABOUT_STRAIGHT",
        "maneuverPoint": {
          "latitude": 51.4949074,
          "longitude": -0.1251438
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
            "phonetic": "ˈmɪl.bæŋk",
            "phoneticLanguageCode": "en-GB",
            "text": "Millbank"
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
            "phonetic": "ˈmɪl.bæŋk",
            "phoneticLanguageCode": "en-GB",
            "text": "Millbank"
          }
        },
        "roundaboutExitNumber": 2,
        "routeOffsetInMeters": 18843,
        "routePath": [
          {
            "distanceInMeters": 18843,
            "point": {
              "latitude": 51.4946151,
              "longitude": -0.1251787
            },
            "travelTimeInSeconds": 3457
          },
          {
            "distanceInMeters": 18848,
            "point": {
              "latitude": 51.4946178,
              "longitude": -0.1252377
            },
            "travelTimeInSeconds": 3458
          },
          {
            "distanceInMeters": 18851,
            "point": {
              "latitude": 51.4946258,
              "longitude": -0.1252887
            },
            "travelTimeInSeconds": 3459
          },
          {
            "distanceInMeters": 18854,
            "point": {
              "latitude": 51.4946419,
              "longitude": -0.1253235
            },
            "travelTimeInSeconds": 3460
          },
          {
            "distanceInMeters": 18861,
            "point": {
              "latitude": 51.4946902,
              "longitude": -0.1253772
            },
            "travelTimeInSeconds": 3462
          },
          {
            "distanceInMeters": 18863,
            "point": {
              "latitude": 51.4947116,
              "longitude": -0.1253879
            },
            "travelTimeInSeconds": 3462
          },
          {
            "distanceInMeters": 18866,
            "point": {
              "latitude": 51.4947385,
              "longitude": -0.1253933
            },
            "travelTimeInSeconds": 3463
          },
          {
            "distanceInMeters": 18869,
            "point": {
              "latitude": 51.4947626,
              "longitude": -0.1253933
            },
            "travelTimeInSeconds": 3464
          },
          {
            "distanceInMeters": 18875,
            "point": {
              "latitude": 51.4948136,
              "longitude": -0.1253879
            },
            "travelTimeInSeconds": 3465
          },
          {
            "distanceInMeters": 18878,
            "point": {
              "latitude": 51.4948404,
              "longitude": -0.1253718
            },
            "travelTimeInSeconds": 3466
          },
          {
            "distanceInMeters": 18881,
            "point": {
              "latitude": 51.4948618,
              "longitude": -0.125353
            },
            "travelTimeInSeconds": 3466
          },
          {
            "distanceInMeters": 18885,
            "point": {
              "latitude": 51.4948887,
              "longitude": -0.1253128
            },
            "travelTimeInSeconds": 3467
          },
          {
            "distanceInMeters": 18888,
            "point": {
              "latitude": 51.4949048,
              "longitude": -0.1252726
            },
            "travelTimeInSeconds": 3467
          },
          {
            "distanceInMeters": 18891,
            "point": {
              "latitude": 51.4949101,
              "longitude": -0.125227
            },
            "travelTimeInSeconds": 3468
          },
          {
            "distanceInMeters": 18897,
            "point": {
              "latitude": 51.4949074,
              "longitude": -0.1251438
            },
            "travelTimeInSeconds": 3468
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 596,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 519,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 346,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 240,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 167,
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
        "routeOffsetInMeters": 19484,
        "routePath": [
          {
            "distanceInMeters": 19484,
            "point": {
              "latitude": 51.5001137,
              "longitude": -0.1262861
            },
            "travelTimeInSeconds": 3642
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 455,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 354,
            "side": "LEFT"
          },
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
      "pointIndex": 178,
      "travelTimeInSeconds": 613,
      "distanceInMeters": 3721
    },
    {
      "pointIndex": 196,
      "travelTimeInSeconds": 660,
      "distanceInMeters": 4050
    },
    {
      "pointIndex": 202,
      "travelTimeInSeconds": 707,
      "distanceInMeters": 4314
    },
    {
      "pointIndex": 215,
      "travelTimeInSeconds": 744,
      "distanceInMeters": 4631
    },
    {
      "pointIndex": 228,
      "travelTimeInSeconds": 816,
      "distanceInMeters": 4944
    },
    {
      "pointIndex": 235,
      "travelTimeInSeconds": 869,
      "distanceInMeters": 5133
    },
    {
      "pointIndex": 249,
      "travelTimeInSeconds": 924,
      "distanceInMeters": 5412
    },
    {
      "pointIndex": 253,
      "travelTimeInSeconds": 950,
      "distanceInMeters": 5500
    },
    {
      "pointIndex": 255,
      "travelTimeInSeconds": 999,
      "distanceInMeters": 5596
    },
    {
      "pointIndex": 263,
      "travelTimeInSeconds": 1067,
      "distanceInMeters": 5883
    },
    {
      "pointIndex": 270,
      "travelTimeInSeconds": 1123,
      "distanceInMeters": 6111
    },
    {
      "pointIndex": 278,
      "travelTimeInSeconds": 1148,
      "distanceInMeters": 6276
    },
    {
      "pointIndex": 282,
      "travelTimeInSeconds": 1168,
      "distanceInMeters": 6327
    },
    {
      "pointIndex": 283,
      "travelTimeInSeconds": 1170,
      "distanceInMeters": 6337
    },
    {
      "pointIndex": 284,
      "travelTimeInSeconds": 1183,
      "distanceInMeters": 6345
    },
    {
      "pointIndex": 303,
      "travelTimeInSeconds": 1244,
      "distanceInMeters": 6827
    },
    {
      "pointIndex": 309,
      "travelTimeInSeconds": 1276,
      "distanceInMeters": 6967
    },
    {
      "pointIndex": 321,
      "travelTimeInSeconds": 1302,
      "distanceInMeters": 7167
    },
    {
      "pointIndex": 325,
      "travelTimeInSeconds": 1347,
      "distanceInMeters": 7370
    },
    {
      "pointIndex": 335,
      "travelTimeInSeconds": 1412,
      "distanceInMeters": 7915
    },
    {
      "pointIndex": 339,
      "travelTimeInSeconds": 1440,
      "distanceInMeters": 7998
    },
    {
      "pointIndex": 346,
      "travelTimeInSeconds": 1478,
      "distanceInMeters": 8195
    },
    {
      "pointIndex": 349,
      "travelTimeInSeconds": 1496,
      "distanceInMeters": 8251
    },
    {
      "pointIndex": 357,
      "travelTimeInSeconds": 1521,
      "distanceInMeters": 8400
    },
    {
      "pointIndex": 360,
      "travelTimeInSeconds": 1528,
      "distanceInMeters": 8432
    },
    {
      "pointIndex": 361,
      "travelTimeInSeconds": 1538,
      "distanceInMeters": 8442
    },
    {
      "pointIndex": 370,
      "travelTimeInSeconds": 1571,
      "distanceInMeters": 8721
    },
    {
      "pointIndex": 388,
      "travelTimeInSeconds": 1596,
      "distanceInMeters": 8920
    },
    {
      "pointIndex": 420,
      "travelTimeInSeconds": 1669,
      "distanceInMeters": 10006
    },
    {
      "pointIndex": 443,
      "travelTimeInSeconds": 1728,
      "distanceInMeters": 10326
    },
    {
      "pointIndex": 446,
      "travelTimeInSeconds": 1763,
      "distanceInMeters": 10496
    },
    {
      "pointIndex": 477,
      "travelTimeInSeconds": 1856,
      "distanceInMeters": 11230
    },
    {
      "pointIndex": 480,
      "travelTimeInSeconds": 1886,
      "distanceInMeters": 11377
    },
    {
      "pointIndex": 483,
      "travelTimeInSeconds": 1919,
      "distanceInMeters": 11458
    },
    {
      "pointIndex": 500,
      "travelTimeInSeconds": 1966,
      "distanceInMeters": 11865
    },
    {
      "pointIndex": 508,
      "travelTimeInSeconds": 2010,
      "distanceInMeters": 12047
    },
    {
      "pointIndex": 513,
      "travelTimeInSeconds": 2058,
      "distanceInMeters": 12147
    },
    {
      "pointIndex": 516,
      "travelTimeInSeconds": 2094,
      "distanceInMeters": 12237
    },
    {
      "pointIndex": 518,
      "travelTimeInSeconds": 2134,
      "distanceInMeters": 12285
    },
    {
      "pointIndex": 531,
      "travelTimeInSeconds": 2202,
      "distanceInMeters": 12520
    },
    {
      "pointIndex": 561,
      "travelTimeInSeconds": 2305,
      "distanceInMeters": 13002
    },
    {
      "pointIndex": 574,
      "travelTimeInSeconds": 2360,
      "distanceInMeters": 13494
    },
    {
      "pointIndex": 579,
      "travelTimeInSeconds": 2411,
      "distanceInMeters": 13705
    },
    {
      "pointIndex": 589,
      "travelTimeInSeconds": 2451,
      "distanceInMeters": 13984
    },
    {
      "pointIndex": 593,
      "travelTimeInSeconds": 2471,
      "distanceInMeters": 14049
    },
    {
      "pointIndex": 599,
      "travelTimeInSeconds": 2508,
      "distanceInMeters": 14253
    },
    {
      "pointIndex": 617,
      "travelTimeInSeconds": 2663,
      "distanceInMeters": 14693
    },
    {
      "pointIndex": 621,
      "travelTimeInSeconds": 2710,
      "distanceInMeters": 14770
    },
    {
      "pointIndex": 630,
      "travelTimeInSeconds": 2763,
      "distanceInMeters": 15148
    },
    {
      "pointIndex": 638,
      "travelTimeInSeconds": 2803,
      "distanceInMeters": 15266
    },
    {
      "pointIndex": 642,
      "travelTimeInSeconds": 2823,
      "distanceInMeters": 15378
    },
    {
      "pointIndex": 645,
      "travelTimeInSeconds": 2850,
      "distanceInMeters": 15459
    },
    {
      "pointIndex": 658,
      "travelTimeInSeconds": 2922,
      "distanceInMeters": 16067
    },
    {
      "pointIndex": 668,
      "travelTimeInSeconds": 2969,
      "distanceInMeters": 16349
    },
    {
      "pointIndex": 677,
      "travelTimeInSeconds": 3005,
      "distanceInMeters": 16472
    },
    {
      "pointIndex": 694,
      "travelTimeInSeconds": 3075,
      "distanceInMeters": 17025
    },
    {
      "pointIndex": 704,
      "travelTimeInSeconds": 3112,
      "distanceInMeters": 17318
    },
    {
      "pointIndex": 726,
      "travelTimeInSeconds": 3186,
      "distanceInMeters": 17881
    },
    {
      "pointIndex": 727,
      "travelTimeInSeconds": 3216,
      "distanceInMeters": 17946
    },
    {
      "pointIndex": 729,
      "travelTimeInSeconds": 3262,
      "distanceInMeters": 18000
    },
    {
      "pointIndex": 732,
      "travelTimeInSeconds": 3320,
      "distanceInMeters": 18032
    },
    {
      "pointIndex": 734,
      "travelTimeInSeconds": 3352,
      "distanceInMeters": 18070
    },
    {
      "pointIndex": 758,
      "travelTimeInSeconds": 3452,
      "distanceInMeters": 18820
    },
    {
      "pointIndex": 773,
      "travelTimeInSeconds": 3469,
      "distanceInMeters": 18901
    },
    {
      "pointIndex": 775,
      "travelTimeInSeconds": 3480,
      "distanceInMeters": 18918
    },
    {
      "pointIndex": 786,
      "travelTimeInSeconds": 3533,
      "distanceInMeters": 19241
    },
    {
      "pointIndex": 792,
      "travelTimeInSeconds": 3596,
      "distanceInMeters": 19418
    },
    {
      "pointIndex": 799,
      "travelTimeInSeconds": 3643,
      "distanceInMeters": 19488
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
