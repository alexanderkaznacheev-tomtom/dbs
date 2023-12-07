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

var shortRoute =     {
  "summary": {
    "lengthInMeters": 16091,
    "travelTimeInSeconds": 3411,
    "trafficDelayInSeconds": 127,
    "trafficLengthInMeters": 259,
    "departureTime": "2023-12-06T12:10:27Z",
    "arrivalTime": "2023-12-06T13:07:17Z"
  },
  "legs": [
    {
      "summary": {
        "lengthInMeters": 16091,
        "travelTimeInSeconds": 3411,
        "trafficDelayInSeconds": 127,
        "trafficLengthInMeters": 259,
        "departureTime": "2023-12-06T12:10:27Z",
        "arrivalTime": "2023-12-06T13:07:17Z"
      },
      "points": [
        {
          "latitude": 51.5656613,
          "longitude": -0.2795505
        },
        {
          "latitude": 51.5656078,
          "longitude": -0.2789953
        },
        {
          "latitude": 51.5655863,
          "longitude": -0.2787298
        },
        {
          "latitude": 51.5655541,
          "longitude": -0.2783489
        },
        {
          "latitude": 51.565522,
          "longitude": -0.2779815
        },
        {
          "latitude": 51.5654951,
          "longitude": -0.2776623
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
          "latitude": 51.5489969,
          "longitude": -0.2482787
        },
        {
          "latitude": 51.5490317,
          "longitude": -0.2480614
        },
        {
          "latitude": 51.5491015,
          "longitude": -0.2477154
        },
        {
          "latitude": 51.5491337,
          "longitude": -0.2474552
        },
        {
          "latitude": 51.5491551,
          "longitude": -0.2472702
        },
        {
          "latitude": 51.5491873,
          "longitude": -0.2469563
        },
        {
          "latitude": 51.5492088,
          "longitude": -0.2466801
        },
        {
          "latitude": 51.54919,
          "longitude": -0.2460068
        },
        {
          "latitude": 51.5491739,
          "longitude": -0.2456903
        },
        {
          "latitude": 51.5491712,
          "longitude": -0.2456421
        },
        {
          "latitude": 51.5491658,
          "longitude": -0.245516
        },
        {
          "latitude": 51.5490907,
          "longitude": -0.2448428
        },
        {
          "latitude": 51.5490961,
          "longitude": -0.2442044
        },
        {
          "latitude": 51.5490988,
          "longitude": -0.2440488
        },
        {
          "latitude": 51.5491739,
          "longitude": -0.2431503
        },
        {
          "latitude": 51.5492168,
          "longitude": -0.2426085
        },
        {
          "latitude": 51.5492249,
          "longitude": -0.2425173
        },
        {
          "latitude": 51.5492195,
          "longitude": -0.2424771
        },
        {
          "latitude": 51.5492034,
          "longitude": -0.2424288
        },
        {
          "latitude": 51.5490156,
          "longitude": -0.2419594
        },
        {
          "latitude": 51.5488842,
          "longitude": -0.2416992
        },
        {
          "latitude": 51.5488493,
          "longitude": -0.2416295
        },
        {
          "latitude": 51.5485865,
          "longitude": -0.2412164
        },
        {
          "latitude": 51.5483639,
          "longitude": -0.2409402
        },
        {
          "latitude": 51.5483183,
          "longitude": -0.2408704
        },
        {
          "latitude": 51.5482968,
          "longitude": -0.2408302
        },
        {
          "latitude": 51.5482807,
          "longitude": -0.2407953
        },
        {
          "latitude": 51.5482727,
          "longitude": -0.2407256
        },
        {
          "latitude": 51.5482807,
          "longitude": -0.2407229
        },
        {
          "latitude": 51.5482914,
          "longitude": -0.2407148
        },
        {
          "latitude": 51.5482995,
          "longitude": -0.2406988
        },
        {
          "latitude": 51.5483049,
          "longitude": -0.2406827
        },
        {
          "latitude": 51.5483075,
          "longitude": -0.2406639
        },
        {
          "latitude": 51.5483075,
          "longitude": -0.2406424
        },
        {
          "latitude": 51.5483049,
          "longitude": -0.2406263
        },
        {
          "latitude": 51.5482995,
          "longitude": -0.2406102
        },
        {
          "latitude": 51.5482914,
          "longitude": -0.2405995
        },
        {
          "latitude": 51.5483156,
          "longitude": -0.2405539
        },
        {
          "latitude": 51.5484282,
          "longitude": -0.2403742
        },
        {
          "latitude": 51.5487233,
          "longitude": -0.2398404
        },
        {
          "latitude": 51.5488493,
          "longitude": -0.2394542
        },
        {
          "latitude": 51.5488896,
          "longitude": -0.2394032
        },
        {
          "latitude": 51.5489057,
          "longitude": -0.2393442
        },
        {
          "latitude": 51.5489164,
          "longitude": -0.2392933
        },
        {
          "latitude": 51.5489298,
          "longitude": -0.2390948
        },
        {
          "latitude": 51.5489164,
          "longitude": -0.2390304
        },
        {
          "latitude": 51.5488815,
          "longitude": -0.2389178
        },
        {
          "latitude": 51.5488601,
          "longitude": -0.2388641
        },
        {
          "latitude": 51.5488225,
          "longitude": -0.2388132
        },
        {
          "latitude": 51.5488064,
          "longitude": -0.2387756
        },
        {
          "latitude": 51.5487903,
          "longitude": -0.2387488
        },
        {
          "latitude": 51.5487608,
          "longitude": -0.2386978
        },
        {
          "latitude": 51.548667,
          "longitude": -0.2385718
        },
        {
          "latitude": 51.5483209,
          "longitude": -0.2378047
        },
        {
          "latitude": 51.5481895,
          "longitude": -0.2375203
        },
        {
          "latitude": 51.5478516,
          "longitude": -0.2366379
        },
        {
          "latitude": 51.5478301,
          "longitude": -0.2365842
        },
        {
          "latitude": 51.5477067,
          "longitude": -0.2361524
        },
        {
          "latitude": 51.5475726,
          "longitude": -0.2354872
        },
        {
          "latitude": 51.5474144,
          "longitude": -0.2344224
        },
        {
          "latitude": 51.5473205,
          "longitude": -0.2335587
        },
        {
          "latitude": 51.547291,
          "longitude": -0.23322879999999999
        },
        {
          "latitude": 51.5472266,
          "longitude": -0.2325824
        },
        {
          "latitude": 51.5472052,
          "longitude": -0.2323249
        },
        {
          "latitude": 51.5471327,
          "longitude": -0.2316624
        },
        {
          "latitude": 51.547071,
          "longitude": -0.2311903
        },
        {
          "latitude": 51.5470523,
          "longitude": -0.2310535
        },
        {
          "latitude": 51.5470415,
          "longitude": -0.2309677
        },
        {
          "latitude": 51.5470093,
          "longitude": -0.2307156
        },
        {
          "latitude": 51.5470093,
          "longitude": -0.2306861
        },
        {
          "latitude": 51.547004,
          "longitude": -0.2304125
        },
        {
          "latitude": 51.5470549,
          "longitude": -0.2299404
        },
        {
          "latitude": 51.5471113,
          "longitude": -0.2293932
        },
        {
          "latitude": 51.5471193,
          "longitude": -0.2292994
        },
        {
          "latitude": 51.5471515,
          "longitude": -0.2290124
        },
        {
          "latitude": 51.5470979,
          "longitude": -0.2289507
        },
        {
          "latitude": 51.5468806,
          "longitude": -0.2286315
        },
        {
          "latitude": 51.5467975,
          "longitude": -0.2285028
        },
        {
          "latitude": 51.5467519,
          "longitude": -0.2284357
        },
        {
          "latitude": 51.5467116,
          "longitude": -0.2283686
        },
        {
          "latitude": 51.5466151,
          "longitude": -0.2282104
        },
        {
          "latitude": 51.5464541,
          "longitude": -0.2278939
        },
        {
          "latitude": 51.5462664,
          "longitude": -0.2274916
        },
        {
          "latitude": 51.5461108,
          "longitude": -0.2271026
        },
        {
          "latitude": 51.5459526,
          "longitude": -0.2264857
        },
        {
          "latitude": 51.5458909,
          "longitude": -0.2261478
        },
        {
          "latitude": 51.5458775,
          "longitude": -0.2260727
        },
        {
          "latitude": 51.5458158,
          "longitude": -0.2254397
        },
        {
          "latitude": 51.545797,
          "longitude": -0.2247638
        },
        {
          "latitude": 51.5457755,
          "longitude": -0.2230981
        },
        {
          "latitude": 51.5458828,
          "longitude": -0.2221218
        },
        {
          "latitude": 51.5458775,
          "longitude": -0.2218187
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
          "latitude": 51.5329948,
          "longitude": -0.2031371
        },
        {
          "latitude": 51.5328258,
          "longitude": -0.2026945
        },
        {
          "latitude": 51.5326729,
          "longitude": -0.2022278
        },
        {
          "latitude": 51.5326568,
          "longitude": -0.2021447
        },
        {
          "latitude": 51.5326166,
          "longitude": -0.2018416
        },
        {
          "latitude": 51.5325898,
          "longitude": -0.201619
        },
        {
          "latitude": 51.5325817,
          "longitude": -0.2011013
        },
        {
          "latitude": 51.5325764,
          "longitude": -0.2008894
        },
        {
          "latitude": 51.5324745,
          "longitude": -0.1995295
        },
        {
          "latitude": 51.5324584,
          "longitude": -0.1993418
        },
        {
          "latitude": 51.5324503,
          "longitude": -0.1992291
        },
        {
          "latitude": 51.5324476,
          "longitude": -0.1990923
        },
        {
          "latitude": 51.5324369,
          "longitude": -0.1990038
        },
        {
          "latitude": 51.5324128,
          "longitude": -0.1985478
        },
        {
          "latitude": 51.5323618,
          "longitude": -0.1977539
        },
        {
          "latitude": 51.5323511,
          "longitude": -0.1975554
        },
        {
          "latitude": 51.5322626,
          "longitude": -0.1960239
        },
        {
          "latitude": 51.5322599,
          "longitude": -0.1959488
        },
        {
          "latitude": 51.5322384,
          "longitude": -0.1955572
        },
        {
          "latitude": 51.5322304,
          "longitude": -0.1952568
        },
        {
          "latitude": 51.5322062,
          "longitude": -0.1942912
        },
        {
          "latitude": 51.5321687,
          "longitude": -0.1938915
        },
        {
          "latitude": 51.5321606,
          "longitude": -0.1937038
        },
        {
          "latitude": 51.5321499,
          "longitude": -0.1935241
        },
        {
          "latitude": 51.5321472,
          "longitude": -0.1931915
        },
        {
          "latitude": 51.5321472,
          "longitude": -0.1931378
        },
        {
          "latitude": 51.5321553,
          "longitude": -0.1928589
        },
        {
          "latitude": 51.5321472,
          "longitude": -0.1926121
        },
        {
          "latitude": 51.5321419,
          "longitude": -0.1924351
        },
        {
          "latitude": 51.5321848,
          "longitude": -0.1917484
        },
        {
          "latitude": 51.5322089,
          "longitude": -0.1914588
        },
        {
          "latitude": 51.5322465,
          "longitude": -0.1911718
        },
        {
          "latitude": 51.5322679,
          "longitude": -0.1910591
        },
        {
          "latitude": 51.5323082,
          "longitude": -0.1908687
        },
        {
          "latitude": 51.5323779,
          "longitude": -0.1905361
        },
        {
          "latitude": 51.5324235,
          "longitude": -0.1903108
        },
        {
          "latitude": 51.5324932,
          "longitude": -0.190005
        },
        {
          "latitude": 51.5326032,
          "longitude": -0.1896483
        },
        {
          "latitude": 51.5326247,
          "longitude": -0.1895946
        },
        {
          "latitude": 51.5327266,
          "longitude": -0.1893237
        },
        {
          "latitude": 51.5328634,
          "longitude": -0.1889884
        },
        {
          "latitude": 51.5331101,
          "longitude": -0.1884547
        },
        {
          "latitude": 51.5331826,
          "longitude": -0.1883018
        },
        {
          "latitude": 51.5332791,
          "longitude": -0.1880845
        },
        {
          "latitude": 51.5334508,
          "longitude": -0.1877064
        },
        {
          "latitude": 51.5335232,
          "longitude": -0.1875481
        },
        {
          "latitude": 51.5334401,
          "longitude": -0.1874542
        },
        {
          "latitude": 51.5334025,
          "longitude": -0.1874113
        },
        {
          "latitude": 51.5331906,
          "longitude": -0.1871672
        },
        {
          "latitude": 51.5327185,
          "longitude": -0.1866254
        },
        {
          "latitude": 51.5326595,
          "longitude": -0.186561
        },
        {
          "latitude": 51.5320078,
          "longitude": -0.1858154
        },
        {
          "latitude": 51.531364,
          "longitude": -0.1850536
        },
        {
          "latitude": 51.5311494,
          "longitude": -0.1847988
        },
        {
          "latitude": 51.5308464,
          "longitude": -0.1844421
        },
        {
          "latitude": 51.5307257,
          "longitude": -0.1842973
        },
        {
          "latitude": 51.5305567,
          "longitude": -0.1840961
        },
        {
          "latitude": 51.5304601,
          "longitude": -0.1839888
        },
        {
          "latitude": 51.5302697,
          "longitude": -0.1837769
        },
        {
          "latitude": 51.5299907,
          "longitude": -0.1834524
        },
        {
          "latitude": 51.5297332,
          "longitude": -0.183152
        },
        {
          "latitude": 51.5296608,
          "longitude": -0.1830661
        },
        {
          "latitude": 51.5295589,
          "longitude": -0.1829347
        },
        {
          "latitude": 51.5293524,
          "longitude": -0.1826718
        },
        {
          "latitude": 51.5292719,
          "longitude": -0.1825699
        },
        {
          "latitude": 51.5291056,
          "longitude": -0.1823714
        },
        {
          "latitude": 51.5289956,
          "longitude": -0.1822132
        },
        {
          "latitude": 51.5289125,
          "longitude": -0.1821005
        },
        {
          "latitude": 51.5288562,
          "longitude": -0.1820201
        },
        {
          "latitude": 51.5287757,
          "longitude": -0.1819074
        },
        {
          "latitude": 51.5287086,
          "longitude": -0.1818162
        },
        {
          "latitude": 51.5284753,
          "longitude": -0.1814917
        },
        {
          "latitude": 51.5283841,
          "longitude": -0.1813629
        },
        {
          "latitude": 51.5282473,
          "longitude": -0.1811832
        },
        {
          "latitude": 51.5281346,
          "longitude": -0.1810303
        },
        {
          "latitude": 51.5280756,
          "longitude": -0.1809525
        },
        {
          "latitude": 51.5279898,
          "longitude": -0.1808399
        },
        {
          "latitude": 51.5276921,
          "longitude": -0.180459
        },
        {
          "latitude": 51.5276438,
          "longitude": -0.1804027
        },
        {
          "latitude": 51.5275177,
          "longitude": -0.1802579
        },
        {
          "latitude": 51.5273434,
          "longitude": -0.1800567
        },
        {
          "latitude": 51.527169,
          "longitude": -0.1798528
        },
        {
          "latitude": 51.5269196,
          "longitude": -0.1795739
        },
        {
          "latitude": 51.5267855,
          "longitude": -0.1794022
        },
        {
          "latitude": 51.5265307,
          "longitude": -0.1790991
        },
        {
          "latitude": 51.5263939,
          "longitude": -0.1789382
        },
        {
          "latitude": 51.5263295,
          "longitude": -0.1788604
        },
        {
          "latitude": 51.5261954,
          "longitude": -0.1787049
        },
        {
          "latitude": 51.5260318,
          "longitude": -0.1785144
        },
        {
          "latitude": 51.5259701,
          "longitude": -0.1784447
        },
        {
          "latitude": 51.5258789,
          "longitude": -0.1783374
        },
        {
          "latitude": 51.5257475,
          "longitude": -0.1781818
        },
        {
          "latitude": 51.5255517,
          "longitude": -0.1779699
        },
        {
          "latitude": 51.525498,
          "longitude": -0.1779082
        },
        {
          "latitude": 51.5251896,
          "longitude": -0.1775327
        },
        {
          "latitude": 51.5250286,
          "longitude": -0.1773369
        },
        {
          "latitude": 51.5248275,
          "longitude": -0.1770929
        },
        {
          "latitude": 51.5247792,
          "longitude": -0.1770365
        },
        {
          "latitude": 51.5247416,
          "longitude": -0.1769936
        },
        {
          "latitude": 51.5247068,
          "longitude": -0.1769426
        },
        {
          "latitude": 51.5246263,
          "longitude": -0.1768541
        },
        {
          "latitude": 51.5245941,
          "longitude": -0.1768219
        },
        {
          "latitude": 51.5245673,
          "longitude": -0.1767763
        },
        {
          "latitude": 51.5245244,
          "longitude": -0.1767147
        },
        {
          "latitude": 51.5241972,
          "longitude": -0.1761889
        },
        {
          "latitude": 51.5240657,
          "longitude": -0.1759797
        },
        {
          "latitude": 51.523945,
          "longitude": -0.1757813
        },
        {
          "latitude": 51.5239048,
          "longitude": -0.1757196
        },
        {
          "latitude": 51.523591,
          "longitude": -0.1752448
        },
        {
          "latitude": 51.5235615,
          "longitude": -0.1752046
        },
        {
          "latitude": 51.523304,
          "longitude": -0.1748291
        },
        {
          "latitude": 51.5231887,
          "longitude": -0.1746762
        },
        {
          "latitude": 51.5230653,
          "longitude": -0.1745099
        },
        {
          "latitude": 51.5229043,
          "longitude": -0.1742738
        },
        {
          "latitude": 51.5226844,
          "longitude": -0.1739278
        },
        {
          "latitude": 51.5225852,
          "longitude": -0.173783
        },
        {
          "latitude": 51.5222445,
          "longitude": -0.1733029
        },
        {
          "latitude": 51.5220943,
          "longitude": -0.1730883
        },
        {
          "latitude": 51.522038,
          "longitude": -0.1729971
        },
        {
          "latitude": 51.521869,
          "longitude": -0.1727182
        },
        {
          "latitude": 51.5215498,
          "longitude": -0.1722381
        },
        {
          "latitude": 51.5214291,
          "longitude": -0.1720449
        },
        {
          "latitude": 51.5212092,
          "longitude": -0.1717257
        },
        {
          "latitude": 51.5211341,
          "longitude": -0.1716292
        },
        {
          "latitude": 51.5209919,
          "longitude": -0.1714441
        },
        {
          "latitude": 51.5209517,
          "longitude": -0.1713932
        },
        {
          "latitude": 51.5209061,
          "longitude": -0.1712912
        },
        {
          "latitude": 51.5208632,
          "longitude": -0.1712456
        },
        {
          "latitude": 51.5207532,
          "longitude": -0.1711088
        },
        {
          "latitude": 51.5207076,
          "longitude": -0.1710606
        },
        {
          "latitude": 51.5204474,
          "longitude": -0.170728
        },
        {
          "latitude": 51.5203777,
          "longitude": -0.1706341
        },
        {
          "latitude": 51.5203241,
          "longitude": -0.170559
        },
        {
          "latitude": 51.5202168,
          "longitude": -0.1704061
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
          "latitude": 51.4974207,
          "longitude": -0.1356366
        },
        {
          "latitude": 51.4973643,
          "longitude": -0.1356098
        },
        {
          "latitude": 51.4972919,
          "longitude": -0.135591
        },
        {
          "latitude": 51.4970157,
          "longitude": -0.1356018
        },
        {
          "latitude": 51.4969486,
          "longitude": -0.1356071
        },
        {
          "latitude": 51.4964631,
          "longitude": -0.1356125
        },
        {
          "latitude": 51.49638,
          "longitude": -0.1352772
        },
        {
          "latitude": 51.4963183,
          "longitude": -0.1350358
        },
        {
          "latitude": 51.4963451,
          "longitude": -0.1349768
        },
        {
          "latitude": 51.4963478,
          "longitude": -0.1349312
        },
        {
          "latitude": 51.4963317,
          "longitude": -0.1348776
        },
        {
          "latitude": 51.4963156,
          "longitude": -0.1348454
        },
        {
          "latitude": 51.4962941,
          "longitude": -0.1348186
        },
        {
          "latitude": 51.4962459,
          "longitude": -0.1348051
        },
        {
          "latitude": 51.4962485,
          "longitude": -0.13473
        },
        {
          "latitude": 51.4962807,
          "longitude": -0.1345986
        },
        {
          "latitude": 51.4962888,
          "longitude": -0.1345745
        },
        {
          "latitude": 51.496321,
          "longitude": -0.1344511
        },
        {
          "latitude": 51.4964095,
          "longitude": -0.1341024
        },
        {
          "latitude": 51.4964604,
          "longitude": -0.1339146
        },
        {
          "latitude": 51.4964899,
          "longitude": -0.1337832
        },
        {
          "latitude": 51.4965007,
          "longitude": -0.1337859
        },
        {
          "latitude": 51.4965168,
          "longitude": -0.1337832
        },
        {
          "latitude": 51.4965302,
          "longitude": -0.1337725
        },
        {
          "latitude": 51.4965382,
          "longitude": -0.1337644
        },
        {
          "latitude": 51.4965463,
          "longitude": -0.1337457
        },
        {
          "latitude": 51.4965516,
          "longitude": -0.1337215
        },
        {
          "latitude": 51.4965516,
          "longitude": -0.1337108
        },
        {
          "latitude": 51.496549,
          "longitude": -0.133684
        },
        {
          "latitude": 51.4965436,
          "longitude": -0.1336706
        },
        {
          "latitude": 51.4965382,
          "longitude": -0.1336625
        },
        {
          "latitude": 51.4965275,
          "longitude": -0.1336518
        },
        {
          "latitude": 51.4965087,
          "longitude": -0.1336437
        },
        {
          "latitude": 51.4965409,
          "longitude": -0.1336142
        },
        {
          "latitude": 51.4965516,
          "longitude": -0.1335981
        },
        {
          "latitude": 51.4965597,
          "longitude": -0.1335821
        },
        {
          "latitude": 51.4966536,
          "longitude": -0.1331019
        },
        {
          "latitude": 51.4968199,
          "longitude": -0.1322731
        },
        {
          "latitude": 51.4968306,
          "longitude": -0.1321954
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
      "startPointIndex": 0,
      "endPointIndex": 42,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-secondary",
          "shieldContent": "A4088"
        }
      ]
    },
    {
      "startPointIndex": 42,
      "endPointIndex": 49,
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
      "endPointIndex": 79,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 48,
      "startPointIndex": 87,
      "endPointIndex": 107,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 49,
      "endPointIndex": 107,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-secondary",
          "shieldContent": "A4088"
        }
      ]
    },
    {
      "startPointIndex": 107,
      "endPointIndex": 121,
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
      "startPointIndex": 121,
      "endPointIndex": 173,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-secondary",
          "shieldContent": "B453"
        }
      ]
    },
    {
      "startPointIndex": 173,
      "endPointIndex": 183,
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
      "maxSpeedLimitInKmh": 48,
      "startPointIndex": 121,
      "endPointIndex": 211,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 183,
      "endPointIndex": 258,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-secondary",
          "shieldContent": "A407"
        }
      ]
    },
    {
      "startPointIndex": 347,
      "endPointIndex": 378,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-secondary",
          "shieldContent": "B413"
        }
      ]
    },
    {
      "maxSpeedLimitInKmh": 32,
      "startPointIndex": 220,
      "endPointIndex": 437,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 48,
      "startPointIndex": 437,
      "endPointIndex": 439,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 397,
      "endPointIndex": 443,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-secondary",
          "shieldContent": "A5"
        }
      ]
    },
    {
      "startPointIndex": 443,
      "endPointIndex": 486,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-primary",
          "shieldContent": "A5"
        }
      ]
    },
    {
      "startPointIndex": 486,
      "endPointIndex": 544,
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
      "startPointIndex": 544,
      "endPointIndex": 554,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-secondary",
          "shieldContent": "A40"
        }
      ]
    },
    {
      "startPointIndex": 566,
      "endPointIndex": 571,
      "sectionType": "TOLL_ROAD"
    },
    {
      "startPointIndex": 566,
      "endPointIndex": 571,
      "sectionType": "TOLL_VIGNETTE",
      "countryCode": "GBR"
    },
    {
      "startPointIndex": 554,
      "endPointIndex": 608,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-primary",
          "shieldContent": "A4202"
        }
      ]
    },
    {
      "startPointIndex": 608,
      "endPointIndex": 631,
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
      "startPointIndex": 636,
      "endPointIndex": 698,
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
      "startPointIndex": 439,
      "endPointIndex": 719,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 698,
      "endPointIndex": 731,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-secondary",
          "shieldContent": "B323"
        }
      ]
    },
    {
      "maxSpeedLimitInKmh": 48,
      "startPointIndex": 731,
      "endPointIndex": 737,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 32,
      "startPointIndex": 737,
      "endPointIndex": 774,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 0,
      "endPointIndex": 774,
      "sectionType": "COUNTRY",
      "countryCode": "GBR"
    },
    {
      "startPointIndex": 675,
      "endPointIndex": 774,
      "sectionType": "TOLL_ROAD"
    },
    {
      "startPointIndex": 675,
      "endPointIndex": 774,
      "sectionType": "TOLL_VIGNETTE",
      "countryCode": "GBR"
    },
    {
      "startPointIndex": 0,
      "endPointIndex": 774,
      "sectionType": "TRAVEL_MODE",
      "travelMode": "car"
    },
    {
      "startPointIndex": 756,
      "endPointIndex": 774,
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
      "endPointIndex": 774,
      "sectionType": "URBAN"
    },
    {
      "startPointIndex": 556,
      "endPointIndex": 619,
      "sectionType": "TRAFFIC",
      "simpleCategory": "JAM",
      "effectiveSpeedInKmh": 6,
      "delayInSeconds": 125,
      "magnitudeOfDelay": 2,
      "tec": {
        "causes": [
          {
            "mainCauseCode": 1
          }
        ],
        "effectCode": 6
      }
    },
    {
      "startPointIndex": 565,
      "endPointIndex": 620,
      "sectionType": "TRAFFIC",
      "simpleCategory": "JAM",
      "effectiveSpeedInKmh": 4,
      "delayInSeconds": 7,
      "magnitudeOfDelay": 3,
      "tec": {
        "causes": [
          {
            "mainCauseCode": 1
          }
        ],
        "effectCode": 6
      }
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
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "startPointIndex": 41,
      "endPointIndex": 42,
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
            "RIGHT"
          ],
          "follow": "RIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "SINGLE_SOLID"
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
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "startPointIndex": 85,
      "endPointIndex": 87,
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
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "startPointIndex": 105,
      "endPointIndex": 107,
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
      "startPointIndex": 120,
      "endPointIndex": 121,
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
        "SHORT_DASHED",
        "LONG_DASHED"
      ],
      "startPointIndex": 169,
      "endPointIndex": 173,
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
      "startPointIndex": 257,
      "endPointIndex": 258,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "LONG_DASHED"
      ],
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
            "SLIGHT_LEFT"
          ],
          "follow": "SLIGHT_LEFT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "startPointIndex": 543,
      "endPointIndex": 544,
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
      "startPointIndex": 553,
      "endPointIndex": 554,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "startPointIndex": 607,
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
      "startPointIndex": 630,
      "endPointIndex": 631,
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
      "startPointIndex": 646,
      "endPointIndex": 647,
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
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "startPointIndex": 658,
      "endPointIndex": 659,
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
        "SINGLE_SOLID"
      ],
      "startPointIndex": 674,
      "endPointIndex": 675,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "DOUBLE_SOLID"
      ],
      "startPointIndex": 697,
      "endPointIndex": 698,
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
      "startPointIndex": 705,
      "endPointIndex": 706,
      "sectionType": "LANES"
    }
  ],
  "guidance": {
    "instructions": [
      {
        "routeOffsetInMeters": 0,
        "travelTimeInSeconds": 0,
        "point": {
          "latitude": 51.56566,
          "longitude": -0.27955
        },
        "pointIndex": 0,
        "instructionType": "LOCATION_DEPARTURE",
        "roadNumbers": [
          "A4088"
        ],
        "phoneticRoadNumbers": [
          "e⁀ɪ.fɔː.tɪ.e⁀ɪ.tɪ.ˈe⁀ɪt"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "en-GB"
        ],
        "street": "Forty Avenue",
        "phoneticStreet": "ˈfɔː.tɪ ˈæ.və.njuː",
        "phoneticStreetLanguageCode": "en-GB",
        "countryCode": "GBR",
        "possibleCombineWithNext": false,
        "drivingSide": "LEFT",
        "maneuver": "DEPART",
        "message": "Leave from <street>Forty Avenue</street>/<roadNumber>A4088</roadNumber>",
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.565661,
            "longitude": -0.2795475
          },
          "pointIndex": 0,
          "maneuver": "DEPART",
          "distanceInMeters": 0
        },
        "roadShieldReferences": [
          {
            "reference": "gbr-secondary",
            "shieldContent": "A4088"
          }
        ]
      },
      {
        "routeOffsetInMeters": 983,
        "travelTimeInSeconds": 149,
        "point": {
          "latitude": 51.56582,
          "longitude": -0.2656
        },
        "pointIndex": 42,
        "instructionType": "TURN",
        "roadNumbers": [
          "A4088"
        ],
        "phoneticRoadNumbers": [
          "e⁀ɪ.fɔː.tɪ.e⁀ɪ.tɪ.ˈe⁀ɪt"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "en-GB"
        ],
        "street": "Blackbird Hill",
        "phoneticStreet": "ˈblæk.bɜːd ˈhɪl",
        "phoneticStreetLanguageCode": "en-GB",
        "countryCode": "GBR",
        "junctionType": "ROUNDABOUT",
        "turnAngleInDecimalDegrees": 45,
        "roundaboutExitNumber": 2,
        "possibleCombineWithNext": false,
        "drivingSide": "LEFT",
        "maneuver": "ROUNDABOUT_CROSS",
        "message": "At the roundabout take the <roundaboutExitNumber>second</roundaboutExitNumber> exit onto <street>Blackbird Hill</street>/<roadNumber>A4088</roadNumber>",
        "mainAnnouncement": {
          "point": {
            "latitude": 51.5656416,
            "longitude": -0.2697835
          },
          "pointIndex": 30,
          "maneuver": "ROUNDABOUT_CROSS",
          "distanceInMeters": 300
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.56579,
            "longitude": -0.266323
          },
          "pointIndex": 39,
          "maneuver": "ROUNDABOUT_CROSS",
          "distanceInMeters": 51
        },
        "roadShieldReferences": [
          {
            "reference": "gbr-secondary",
            "shieldContent": "A4088"
          }
        ]
      },
      {
        "routeOffsetInMeters": 1747,
        "travelTimeInSeconds": 281,
        "point": {
          "latitude": 51.56197,
          "longitude": -0.25667
        },
        "pointIndex": 79,
        "instructionType": "TURN",
        "roadNumbers": [
          "A4088"
        ],
        "phoneticRoadNumbers": [
          "e⁀ɪ.fɔː.tɪ.e⁀ɪ.tɪ.ˈe⁀ɪt"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "en-GB"
        ],
        "countryCode": "GBR",
        "junctionType": "ROUNDABOUT",
        "turnAngleInDecimalDegrees": 90,
        "roundaboutExitNumber": 3,
        "possibleCombineWithNext": false,
        "drivingSide": "LEFT",
        "maneuver": "ROUNDABOUT_RIGHT",
        "message": "At the roundabout take the <roundaboutExitNumber>third</roundaboutExitNumber> exit onto <roadNumber>A4088</roadNumber>",
        "mainAnnouncement": {
          "point": {
            "latitude": 51.5634689,
            "longitude": -0.2602138
          },
          "pointIndex": 66,
          "maneuver": "ROUNDABOUT_RIGHT",
          "distanceInMeters": 300
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.5621787,
            "longitude": -0.2571305
          },
          "pointIndex": 77,
          "maneuver": "ROUNDABOUT_RIGHT",
          "distanceInMeters": 40
        },
        "roadShieldReferences": [
          {
            "reference": "gbr-secondary",
            "shieldContent": "A4088"
          }
        ]
      },
      {
        "routeOffsetInMeters": 1866,
        "travelTimeInSeconds": 302,
        "point": {
          "latitude": 51.56119,
          "longitude": -0.256
        },
        "pointIndex": 87,
        "instructionType": "TURN",
        "roadNumbers": [
          "A4088"
        ],
        "phoneticRoadNumbers": [
          "e⁀ɪ.fɔː.tɪ.e⁀ɪ.tɪ.ˈe⁀ɪt"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "en-GB"
        ],
        "countryCode": "GBR",
        "junctionType": "ROUNDABOUT",
        "turnAngleInDecimalDegrees": -45,
        "roundaboutExitNumber": 0,
        "possibleCombineWithNext": false,
        "drivingSide": "LEFT",
        "maneuver": "TAKE_EXIT",
        "message": "Take the exit onto <roadNumber>A4088</roadNumber>",
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.5614463,
            "longitude": -0.255849
          },
          "pointIndex": 83,
          "maneuver": "TAKE_EXIT",
          "distanceInMeters": 31
        },
        "roadShieldReferences": [
          {
            "reference": "gbr-secondary",
            "shieldContent": "A4088"
          }
        ]
      },
      {
        "routeOffsetInMeters": 2384,
        "travelTimeInSeconds": 344,
        "point": {
          "latitude": 51.55879,
          "longitude": -0.24997
        },
        "pointIndex": 107,
        "instructionType": "TURN",
        "roadNumbers": [
          "B453"
        ],
        "phoneticRoadNumbers": [
          "biː.fɔː.fɪf.tɪ.ˈθɻiː"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "en-GB"
        ],
        "street": "Neasden Lane",
        "phoneticStreet": "ˈniːz.dən ˈle⁀ɪn",
        "phoneticStreetLanguageCode": "en-GB",
        "countryCode": "GBR",
        "junctionType": "ROUNDABOUT",
        "turnAngleInDecimalDegrees": 90,
        "roundaboutExitNumber": 4,
        "possibleCombineWithNext": false,
        "drivingSide": "LEFT",
        "maneuver": "ROUNDABOUT_RIGHT",
        "message": "At the roundabout take the <roundaboutExitNumber>fourth</roundaboutExitNumber> exit onto <street>Neasden Lane</street>/<roadNumber>B453</roadNumber>",
        "mainAnnouncement": {
          "point": {
            "latitude": 51.5599465,
            "longitude": -0.2538037
          },
          "pointIndex": 95,
          "maneuver": "ROUNDABOUT_RIGHT",
          "distanceInMeters": 300
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.5589264,
            "longitude": -0.2509137
          },
          "pointIndex": 102,
          "maneuver": "ROUNDABOUT_RIGHT",
          "distanceInMeters": 70
        },
        "roadShieldReferences": [
          {
            "reference": "gbr-secondary",
            "shieldContent": "B453"
          }
        ]
      },
      {
        "routeOffsetInMeters": 2598,
        "travelTimeInSeconds": 369,
        "point": {
          "latitude": 51.55788,
          "longitude": -0.24937
        },
        "pointIndex": 121,
        "instructionType": "TURN",
        "roadNumbers": [
          "B453"
        ],
        "phoneticRoadNumbers": [
          "biː.fɔː.fɪf.tɪ.ˈθɻiː"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "en-GB"
        ],
        "street": "Neasden Lane",
        "phoneticStreet": "ˈniːz.dən ˈle⁀ɪn",
        "phoneticStreetLanguageCode": "en-GB",
        "countryCode": "GBR",
        "junctionType": "ROUNDABOUT",
        "turnAngleInDecimalDegrees": -45,
        "roundaboutExitNumber": 0,
        "possibleCombineWithNext": false,
        "drivingSide": "LEFT",
        "maneuver": "TAKE_EXIT",
        "message": "Take the exit onto <street>Neasden Lane</street>/<roadNumber>B453</roadNumber>",
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.5580228,
            "longitude": -0.2485675
          },
          "pointIndex": 116,
          "maneuver": "TAKE_EXIT",
          "distanceInMeters": 64
        },
        "roadShieldReferences": [
          {
            "reference": "gbr-secondary",
            "shieldContent": "B453"
          }
        ]
      },
      {
        "routeOffsetInMeters": 3653,
        "travelTimeInSeconds": 508,
        "point": {
          "latitude": 51.54898,
          "longitude": -0.24896
        },
        "pointIndex": 173,
        "instructionType": "TURN",
        "roadNumbers": [
          "A407"
        ],
        "phoneticRoadNumbers": [
          "e⁀ɪ.fɔːɻ.ə⁀ʊ.ˈsɛ.vn̩"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "en-GB"
        ],
        "street": "High Road",
        "phoneticStreet": "ˈha⁀ɪ ˈɻə⁀ʊd",
        "phoneticStreetLanguageCode": "en-GB",
        "countryCode": "GBR",
        "junctionType": "ROUNDABOUT",
        "turnAngleInDecimalDegrees": -90,
        "roundaboutExitNumber": 1,
        "possibleCombineWithNext": false,
        "drivingSide": "LEFT",
        "maneuver": "ROUNDABOUT_LEFT",
        "message": "At the roundabout take the <roundaboutExitNumber>first</roundaboutExitNumber> exit onto <street>High Road</street>/<roadNumber>A407</roadNumber>",
        "mainAnnouncement": {
          "point": {
            "latitude": 51.5506824,
            "longitude": -0.2497151
          },
          "pointIndex": 157,
          "maneuver": "ROUNDABOUT_LEFT",
          "distanceInMeters": 200
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.5494692,
            "longitude": -0.2492638
          },
          "pointIndex": 165,
          "maneuver": "ROUNDABOUT_LEFT",
          "distanceInMeters": 60
        },
        "roadShieldReferences": [
          {
            "reference": "gbr-secondary",
            "shieldContent": "A407"
          }
        ]
      },
      {
        "routeOffsetInMeters": 4274,
        "travelTimeInSeconds": 613,
        "point": {
          "latitude": 51.54827,
          "longitude": -0.24073
        },
        "pointIndex": 211,
        "instructionType": "TURN",
        "roadNumbers": [
          "A407"
        ],
        "phoneticRoadNumbers": [
          "e⁀ɪ.fɔːɻ.ə⁀ʊ.ˈsɛ.vn̩"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "en-GB"
        ],
        "street": "High Road",
        "phoneticStreet": "ˈha⁀ɪ ˈɻə⁀ʊd",
        "phoneticStreetLanguageCode": "en-GB",
        "countryCode": "GBR",
        "junctionType": "ROUNDABOUT",
        "turnAngleInDecimalDegrees": -90,
        "roundaboutExitNumber": 1,
        "possibleCombineWithNext": true,
        "drivingSide": "LEFT",
        "maneuver": "ROUNDABOUT_LEFT",
        "message": "At the roundabout take the <roundaboutExitNumber>first</roundaboutExitNumber> exit onto <street>High Road</street>/<roadNumber>A407</roadNumber>",
        "combinedMessage": "At the roundabout take the <roundaboutExitNumber>first</roundaboutExitNumber> exit onto <street>High Road</street>/<roadNumber>A407</roadNumber> then turn right onto <street>High Road</street>/<roadNumber>A407</roadNumber>",
        "mainAnnouncement": {
          "point": {
            "latitude": 51.5490941,
            "longitude": -0.2444487
          },
          "pointIndex": 195,
          "maneuver": "ROUNDABOUT_LEFT",
          "distanceInMeters": 300
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.5484428,
            "longitude": -0.2410382
          },
          "pointIndex": 206,
          "maneuver": "ROUNDABOUT_LEFT",
          "distanceInMeters": 30
        },
        "roadShieldReferences": [
          {
            "reference": "gbr-secondary",
            "shieldContent": "A407"
          }
        ]
      },
      {
        "routeOffsetInMeters": 4387,
        "travelTimeInSeconds": 653,
        "point": {
          "latitude": 51.54885,
          "longitude": -0.23945
        },
        "pointIndex": 224,
        "instructionType": "TURN",
        "roadNumbers": [
          "A407"
        ],
        "phoneticRoadNumbers": [
          "e⁀ɪ.fɔːɻ.ə⁀ʊ.ˈsɛ.vn̩"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "en-GB"
        ],
        "street": "High Road",
        "phoneticStreet": "ˈha⁀ɪ ˈɻə⁀ʊd",
        "phoneticStreetLanguageCode": "en-GB",
        "countryCode": "GBR",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": 90,
        "possibleCombineWithNext": false,
        "drivingSide": "LEFT",
        "maneuver": "TURN_RIGHT",
        "message": "Turn right onto <street>High Road</street>/<roadNumber>A407</roadNumber>",
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.5485296,
            "longitude": -0.2401909
          },
          "pointIndex": 222,
          "maneuver": "TURN_RIGHT",
          "distanceInMeters": 63
        },
        "roadShieldReferences": [
          {
            "reference": "gbr-secondary",
            "shieldContent": "A407"
          }
        ]
      },
      {
        "routeOffsetInMeters": 5166,
        "travelTimeInSeconds": 859,
        "point": {
          "latitude": 51.54715,
          "longitude": -0.22901
        },
        "pointIndex": 258,
        "instructionType": "TURN",
        "street": "Brondesbury Park",
        "phoneticStreet": "ˈbɻɒn.dəs.bə.ɻɪ ˈpɑːk",
        "phoneticStreetLanguageCode": "en-GB",
        "countryCode": "GBR",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": 90,
        "possibleCombineWithNext": false,
        "drivingSide": "LEFT",
        "maneuver": "TURN_RIGHT",
        "message": "Turn right onto <street>Brondesbury Park</street>",
        "mainAnnouncement": {
          "point": {
            "latitude": 51.5472948,
            "longitude": -0.2332718
          },
          "pointIndex": 244,
          "maneuver": "TURN_RIGHT",
          "distanceInMeters": 300
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.5470472,
            "longitude": -0.2300119
          },
          "pointIndex": 254,
          "maneuver": "TURN_RIGHT",
          "distanceInMeters": 70
        }
      },
      {
        "routeOffsetInMeters": 6259,
        "travelTimeInSeconds": 1014,
        "point": {
          "latitude": 51.5439,
          "longitude": -0.21474
        },
        "pointIndex": 290,
        "instructionType": "TURN",
        "street": "Brondesbury Park",
        "phoneticStreet": "ˈbɻɒn.dəs.bə.ɻɪ ˈpɑːk",
        "phoneticStreetLanguageCode": "en-GB",
        "countryCode": "GBR",
        "junctionType": "ROUNDABOUT",
        "turnAngleInDecimalDegrees": 0,
        "roundaboutExitNumber": 2,
        "possibleCombineWithNext": false,
        "drivingSide": "LEFT",
        "maneuver": "ROUNDABOUT_CROSS",
        "message": "At the roundabout take the <roundaboutExitNumber>second</roundaboutExitNumber> exit onto <street>Brondesbury Park</street>",
        "mainAnnouncement": {
          "point": {
            "latitude": 51.5448178,
            "longitude": -0.2171979
          },
          "pointIndex": 284,
          "maneuver": "ROUNDABOUT_CROSS",
          "distanceInMeters": 200
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.544141,
            "longitude": -0.2153202
          },
          "pointIndex": 287,
          "maneuver": "ROUNDABOUT_CROSS",
          "distanceInMeters": 49
        }
      },
      {
        "routeOffsetInMeters": 8883,
        "travelTimeInSeconds": 1479,
        "point": {
          "latitude": 51.53352,
          "longitude": -0.18755
        },
        "pointIndex": 397,
        "instructionType": "TURN",
        "roadNumbers": [
          "A5"
        ],
        "phoneticRoadNumbers": [
          "e⁀ɪ.ˈfa⁀ɪv"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "en-GB"
        ],
        "street": "Maida Vale",
        "phoneticStreet": "ˈme⁀ɪ.də ˈve⁀ɪl",
        "phoneticStreetLanguageCode": "en-GB",
        "countryCode": "GBR",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": 90,
        "possibleCombineWithNext": false,
        "drivingSide": "LEFT",
        "maneuver": "TURN_RIGHT",
        "message": "Turn right onto <street>Maida Vale</street>/<roadNumber>A5</roadNumber>",
        "mainAnnouncement": {
          "point": {
            "latitude": 51.5325142,
            "longitude": -0.189937
          },
          "pointIndex": 388,
          "maneuver": "TURN_RIGHT",
          "distanceInMeters": 200
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.5332738,
            "longitude": -0.1880966
          },
          "pointIndex": 394,
          "maneuver": "TURN_RIGHT",
          "distanceInMeters": 47
        },
        "roadShieldReferences": [
          {
            "reference": "gbr-secondary",
            "shieldContent": "A5"
          }
        ]
      },
      {
        "routeOffsetInMeters": 11846,
        "travelTimeInSeconds": 2272,
        "point": {
          "latitude": 51.51323,
          "longitude": -0.16003
        },
        "pointIndex": 544,
        "instructionType": "TURN",
        "roadNumbers": [
          "A4202"
        ],
        "phoneticRoadNumbers": [
          "e⁀ɪ.fɔː.tiː.ˈtuː.ə⁀ʊ.ˈtuː"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "en-GB"
        ],
        "street": "Park Lane",
        "phoneticStreet": "ˈpɑːk ˈle⁀ɪn",
        "phoneticStreetLanguageCode": "en-GB",
        "countryCode": "GBR",
        "junctionType": "ROUNDABOUT",
        "turnAngleInDecimalDegrees": -45,
        "roundaboutExitNumber": 3,
        "possibleCombineWithNext": false,
        "drivingSide": "LEFT",
        "maneuver": "ROUNDABOUT_CROSS",
        "message": "At the roundabout take the <roundaboutExitNumber>third</roundaboutExitNumber> exit onto <street>Park Lane</street>/<roadNumber>A4202</roadNumber>",
        "mainAnnouncement": {
          "point": {
            "latitude": 51.5158121,
            "longitude": -0.1640682
          },
          "pointIndex": 525,
          "maneuver": "ROUNDABOUT_CROSS",
          "distanceInMeters": 400
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.5136582,
            "longitude": -0.1606984
          },
          "pointIndex": 540,
          "maneuver": "ROUNDABOUT_CROSS",
          "distanceInMeters": 67
        },
        "roadShieldReferences": [
          {
            "reference": "gbr-primary",
            "shieldContent": "A4202"
          }
        ]
      },
      {
        "routeOffsetInMeters": 12010,
        "travelTimeInSeconds": 2303,
        "point": {
          "latitude": 51.51295,
          "longitude": -0.1581
        },
        "pointIndex": 554,
        "instructionType": "TURN",
        "roadNumbers": [
          "A4202"
        ],
        "phoneticRoadNumbers": [
          "e⁀ɪ.fɔː.tiː.ˈtuː.ə⁀ʊ.ˈtuː"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "en-GB"
        ],
        "street": "Park Lane",
        "phoneticStreet": "ˈpɑːk ˈle⁀ɪn",
        "phoneticStreetLanguageCode": "en-GB",
        "countryCode": "GBR",
        "junctionType": "ROUNDABOUT",
        "turnAngleInDecimalDegrees": -45,
        "roundaboutExitNumber": 0,
        "possibleCombineWithNext": false,
        "drivingSide": "LEFT",
        "maneuver": "TAKE_EXIT",
        "message": "Take the exit onto <street>Park Lane</street>/<roadNumber>A4202</roadNumber>",
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.5133211,
            "longitude": -0.1584531
          },
          "pointIndex": 550,
          "maneuver": "TAKE_EXIT",
          "distanceInMeters": 50
        },
        "roadShieldReferences": [
          {
            "reference": "gbr-primary",
            "shieldContent": "A4202"
          }
        ]
      },
      {
        "routeOffsetInMeters": 13236,
        "travelTimeInSeconds": 2636,
        "point": {
          "latitude": 51.50329,
          "longitude": -0.15081
        },
        "pointIndex": 608,
        "instructionType": "TURN",
        "street": "Duke of Wellington Place",
        "phoneticStreet": "ˈdjuːk əv ˈwɛ.lɪŋ.tn̩ ˈple⁀ɪs",
        "phoneticStreetLanguageCode": "en-GB",
        "countryCode": "GBR",
        "junctionType": "ROUNDABOUT",
        "turnAngleInDecimalDegrees": 0,
        "roundaboutExitNumber": 3,
        "possibleCombineWithNext": false,
        "drivingSide": "LEFT",
        "maneuver": "ROUNDABOUT_CROSS",
        "message": "At the roundabout take the <roundaboutExitNumber>third</roundaboutExitNumber> exit onto <street>Duke of Wellington Place</street>",
        "mainAnnouncement": {
          "point": {
            "latitude": 51.5066047,
            "longitude": -0.1522032
          },
          "pointIndex": 583,
          "maneuver": "ROUNDABOUT_CROSS",
          "distanceInMeters": 400
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.5038505,
            "longitude": -0.1510297
          },
          "pointIndex": 604,
          "maneuver": "ROUNDABOUT_CROSS",
          "distanceInMeters": 64
        }
      },
      {
        "routeOffsetInMeters": 13486,
        "travelTimeInSeconds": 2699,
        "point": {
          "latitude": 51.502,
          "longitude": -0.15121
        },
        "pointIndex": 631,
        "instructionType": "TURN",
        "street": "Duke of Wellington Place",
        "phoneticStreet": "ˈdjuːk əv ˈwɛ.lɪŋ.tn̩ ˈple⁀ɪs",
        "phoneticStreetLanguageCode": "en-GB",
        "countryCode": "GBR",
        "junctionType": "ROUNDABOUT",
        "turnAngleInDecimalDegrees": -45,
        "roundaboutExitNumber": 0,
        "possibleCombineWithNext": false,
        "drivingSide": "LEFT",
        "maneuver": "TAKE_EXIT",
        "message": "Take the exit onto <street>Duke of Wellington Place</street>",
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.5024697,
            "longitude": -0.1500086
          },
          "pointIndex": 624,
          "maneuver": "TAKE_EXIT",
          "distanceInMeters": 98
        }
      },
      {
        "routeOffsetInMeters": 13996,
        "travelTimeInSeconds": 2782,
        "point": {
          "latitude": 51.49836,
          "longitude": -0.14715
        },
        "pointIndex": 647,
        "instructionType": "TURN",
        "roadNumbers": [
          "A302"
        ],
        "phoneticRoadNumbers": [
          "e⁀ɪ.θɻiː.ə⁀ʊ.ˈtuː"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "en-GB"
        ],
        "street": "Lower Grosvenor Place",
        "phoneticStreet": "ˈlə⁀ʊ.ə ˈgɻə⁀ʊv.nə ˈple⁀ɪs",
        "phoneticStreetLanguageCode": "en-GB",
        "countryCode": "GBR",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": -90,
        "possibleCombineWithNext": true,
        "drivingSide": "LEFT",
        "maneuver": "TURN_LEFT",
        "message": "Turn left onto <street>Lower Grosvenor Place</street>/<roadNumber>A302</roadNumber>",
        "combinedMessage": "Turn left onto <street>Lower Grosvenor Place</street>/<roadNumber>A302</roadNumber> then keep right at <street>Lower Grosvenor Place</street>/<roadNumber>A302</roadNumber>",
        "mainAnnouncement": {
          "point": {
            "latitude": 51.5011751,
            "longitude": -0.1505886
          },
          "pointIndex": 637,
          "maneuver": "TURN_LEFT",
          "distanceInMeters": 400
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.4989911,
            "longitude": -0.1476482
          },
          "pointIndex": 644,
          "maneuver": "TURN_LEFT",
          "distanceInMeters": 80
        },
        "roadShieldReferences": [
          {
            "reference": "gbr-secondary",
            "shieldContent": "A302"
          }
        ]
      },
      {
        "routeOffsetInMeters": 14203,
        "travelTimeInSeconds": 2830,
        "point": {
          "latitude": 51.49816,
          "longitude": -0.14424
        },
        "pointIndex": 659,
        "instructionType": "TURN",
        "roadNumbers": [
          "A302"
        ],
        "phoneticRoadNumbers": [
          "e⁀ɪ.θɻiː.ə⁀ʊ.ˈtuː"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "en-GB"
        ],
        "street": "Lower Grosvenor Place",
        "phoneticStreet": "ˈlə⁀ʊ.ə ˈgɻə⁀ʊv.nə ˈple⁀ɪs",
        "phoneticStreetLanguageCode": "en-GB",
        "countryCode": "GBR",
        "junctionType": "BIFURCATION",
        "turnAngleInDecimalDegrees": 45,
        "possibleCombineWithNext": true,
        "drivingSide": "LEFT",
        "maneuver": "KEEP_RIGHT",
        "message": "Keep right at <street>Lower Grosvenor Place</street>/<roadNumber>A302</roadNumber>",
        "combinedMessage": "Keep right at <street>Lower Grosvenor Place</street>/<roadNumber>A302</roadNumber> then bear left at <street>Bressenden Place</street>/<roadNumber>A302</roadNumber>",
        "mainAnnouncement": {
          "point": {
            "latitude": 51.4982678,
            "longitude": -0.1456646
          },
          "pointIndex": 655,
          "maneuver": "KEEP_RIGHT",
          "distanceInMeters": 100
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.4982113,
            "longitude": -0.1445233
          },
          "pointIndex": 658,
          "maneuver": "KEEP_RIGHT",
          "distanceInMeters": 20
        },
        "roadShieldReferences": [
          {
            "reference": "gbr-secondary",
            "shieldContent": "A302"
          }
        ]
      },
      {
        "routeOffsetInMeters": 14450,
        "travelTimeInSeconds": 2912,
        "point": {
          "latitude": 51.49683,
          "longitude": -0.14183
        },
        "pointIndex": 675,
        "instructionType": "TURN",
        "roadNumbers": [
          "A302"
        ],
        "phoneticRoadNumbers": [
          "e⁀ɪ.θɻiː.ə⁀ʊ.ˈtuː"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "en-GB"
        ],
        "street": "Bressenden Place",
        "phoneticStreet": "ˈbɻɛ.sn̩.dən ˈple⁀ɪs",
        "phoneticStreetLanguageCode": "en-GB",
        "countryCode": "GBR",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": -45,
        "possibleCombineWithNext": false,
        "drivingSide": "LEFT",
        "maneuver": "BEAR_LEFT",
        "message": "Bear left at <street>Bressenden Place</street>/<roadNumber>A302</roadNumber>",
        "mainAnnouncement": {
          "point": {
            "latitude": 51.4976824,
            "longitude": -0.142284
          },
          "pointIndex": 668,
          "maneuver": "BEAR_LEFT",
          "distanceInMeters": 100
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.4970079,
            "longitude": -0.1418954
          },
          "pointIndex": 674,
          "maneuver": "BEAR_LEFT",
          "distanceInMeters": 20
        },
        "roadShieldReferences": [
          {
            "reference": "gbr-secondary",
            "shieldContent": "A302"
          }
        ]
      },
      {
        "routeOffsetInMeters": 14896,
        "travelTimeInSeconds": 3043,
        "point": {
          "latitude": 51.49749,
          "longitude": -0.13567
        },
        "pointIndex": 698,
        "instructionType": "TURN",
        "roadNumbers": [
          "B323"
        ],
        "phoneticRoadNumbers": [
          "biː.θɻiː.twɛn.tɪ.ˈθɻiː"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "en-GB"
        ],
        "street": "Artillery Row",
        "phoneticStreet": "ɑː.ˈtɪ.lə.ɻɪ ˈɻə⁀ʊ",
        "phoneticStreetLanguageCode": "en-GB",
        "countryCode": "GBR",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": 90,
        "possibleCombineWithNext": true,
        "drivingSide": "LEFT",
        "maneuver": "TURN_RIGHT",
        "message": "Turn right onto <street>Artillery Row</street>/<roadNumber>B323</roadNumber>",
        "combinedMessage": "Turn right onto <street>Artillery Row</street>/<roadNumber>B323</roadNumber> then bear left at <street>Greycoat Place</street>/<roadNumber>B323</roadNumber>",
        "mainAnnouncement": {
          "point": {
            "latitude": 51.4968699,
            "longitude": -0.1398745
          },
          "pointIndex": 682,
          "maneuver": "TURN_RIGHT",
          "distanceInMeters": 300
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.4973442,
            "longitude": -0.1366465
          },
          "pointIndex": 694,
          "maneuver": "TURN_RIGHT",
          "distanceInMeters": 70
        },
        "roadShieldReferences": [
          {
            "reference": "gbr-secondary",
            "shieldContent": "B323"
          }
        ]
      },
      {
        "routeOffsetInMeters": 15011,
        "travelTimeInSeconds": 3075,
        "point": {
          "latitude": 51.49646,
          "longitude": -0.13561
        },
        "pointIndex": 704,
        "instructionType": "TURN",
        "roadNumbers": [
          "B323"
        ],
        "phoneticRoadNumbers": [
          "biː.θɻiː.twɛn.tɪ.ˈθɻiː"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "en-GB"
        ],
        "street": "Greycoat Place",
        "phoneticStreet": "ˈgɻe⁀ɪ.kə⁀ʊt ˈple⁀ɪs",
        "phoneticStreetLanguageCode": "en-GB",
        "countryCode": "GBR",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": -45,
        "possibleCombineWithNext": true,
        "drivingSide": "LEFT",
        "maneuver": "BEAR_LEFT",
        "message": "Bear left at <street>Greycoat Place</street>/<roadNumber>B323</roadNumber>",
        "combinedMessage": "Bear left at <street>Greycoat Place</street>/<roadNumber>B323</roadNumber> then at the roundabout take the <roundaboutExitNumber>first</roundaboutExitNumber> exit onto <street>Greycoat Place</street>/<roadNumber>B323</roadNumber>",
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.4967328,
            "longitude": -0.1356095
          },
          "pointIndex": 703,
          "maneuver": "BEAR_LEFT",
          "distanceInMeters": 30
        },
        "roadShieldReferences": [
          {
            "reference": "gbr-secondary",
            "shieldContent": "B323"
          }
        ]
      },
      {
        "routeOffsetInMeters": 15054,
        "travelTimeInSeconds": 3093,
        "point": {
          "latitude": 51.49632,
          "longitude": -0.13504
        },
        "pointIndex": 706,
        "instructionType": "TURN",
        "roadNumbers": [
          "B323"
        ],
        "phoneticRoadNumbers": [
          "biː.θɻiː.twɛn.tɪ.ˈθɻiː"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "en-GB"
        ],
        "street": "Greycoat Place",
        "phoneticStreet": "ˈgɻe⁀ɪ.kə⁀ʊt ˈple⁀ɪs",
        "phoneticStreetLanguageCode": "en-GB",
        "countryCode": "GBR",
        "junctionType": "ROUNDABOUT",
        "turnAngleInDecimalDegrees": -45,
        "roundaboutExitNumber": 1,
        "possibleCombineWithNext": true,
        "drivingSide": "LEFT",
        "maneuver": "ROUNDABOUT_CROSS",
        "message": "At the roundabout take the <roundaboutExitNumber>first</roundaboutExitNumber> exit onto <street>Greycoat Place</street>/<roadNumber>B323</roadNumber>",
        "combinedMessage": "At the roundabout take the <roundaboutExitNumber>first</roundaboutExitNumber> exit onto <street>Greycoat Place</street>/<roadNumber>B323</roadNumber> then at the roundabout take the <roundaboutExitNumber>first</roundaboutExitNumber> exit onto <street>Great Peter Street</street>",
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.4964199,
            "longitude": -0.1354381
          },
          "pointIndex": 704,
          "maneuver": "ROUNDABOUT_CROSS",
          "distanceInMeters": 30
        },
        "roadShieldReferences": [
          {
            "reference": "gbr-secondary",
            "shieldContent": "B323"
          }
        ]
      },
      {
        "routeOffsetInMeters": 15153,
        "travelTimeInSeconds": 3119,
        "point": {
          "latitude": 51.49649,
          "longitude": -0.13378
        },
        "pointIndex": 719,
        "instructionType": "TURN",
        "street": "Great Peter Street",
        "phoneticStreet": "ˈgɻe⁀ɪt ˈpiː.tə ˈstɻiːt",
        "phoneticStreetLanguageCode": "en-GB",
        "countryCode": "GBR",
        "junctionType": "ROUNDABOUT",
        "turnAngleInDecimalDegrees": 0,
        "roundaboutExitNumber": 1,
        "possibleCombineWithNext": false,
        "drivingSide": "LEFT",
        "maneuver": "ROUNDABOUT_CROSS",
        "message": "At the roundabout take the <roundaboutExitNumber>first</roundaboutExitNumber> exit onto <street>Great Peter Street</street>",
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.496389,
            "longitude": -0.1341829
          },
          "pointIndex": 716,
          "maneuver": "ROUNDABOUT_CROSS",
          "distanceInMeters": 30
        }
      },
      {
        "routeOffsetInMeters": 15737,
        "travelTimeInSeconds": 3263,
        "point": {
          "latitude": 51.49698,
          "longitude": -0.12561
        },
        "pointIndex": 756,
        "instructionType": "TURN",
        "roadNumbers": [
          "A3212"
        ],
        "phoneticRoadNumbers": [
          "e⁀ɪ.θɜː.tɪ.tuː.ˈtwɛlv"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "en-GB"
        ],
        "street": "Abingdon Street",
        "phoneticStreet": "ˈæ.bɪŋ.dən ˈstɻiːt",
        "phoneticStreetLanguageCode": "en-GB",
        "countryCode": "GBR",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": -90,
        "possibleCombineWithNext": false,
        "drivingSide": "LEFT",
        "maneuver": "TURN_LEFT",
        "message": "Turn left onto <street>Abingdon Street</street>/<roadNumber>A3212</roadNumber>",
        "mainAnnouncement": {
          "point": {
            "latitude": 51.4969269,
            "longitude": -0.1284782
          },
          "pointIndex": 751,
          "maneuver": "TURN_LEFT",
          "distanceInMeters": 200
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.4969667,
            "longitude": -0.1262268
          },
          "pointIndex": 755,
          "maneuver": "TURN_LEFT",
          "distanceInMeters": 43
        },
        "roadShieldReferences": [
          {
            "reference": "gbr-secondary",
            "shieldContent": "A3212"
          }
        ]
      },
      {
        "routeOffsetInMeters": 16091,
        "travelTimeInSeconds": 3411,
        "point": {
          "latitude": 51.50012,
          "longitude": -0.12629
        },
        "pointIndex": 774,
        "instructionType": "LOCATION_ARRIVAL",
        "roadNumbers": [
          "A3212"
        ],
        "phoneticRoadNumbers": [
          "e⁀ɪ.θɜː.tɪ.tuː.ˈtwɛlv"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "en-GB"
        ],
        "street": "Saint Margaret Street",
        "phoneticStreet": "ˈsn̩t ˈmɑː.gɻət ˈstɻiːt",
        "phoneticStreetLanguageCode": "en-GB",
        "countryCode": "GBR",
        "possibleCombineWithNext": false,
        "drivingSide": "LEFT",
        "maneuver": "ARRIVE_RIGHT",
        "message": "You have arrived at <street>Saint Margaret Street</street>/<roadNumber>A3212</roadNumber>. Your destination is on the right",
        "mainAnnouncement": {
          "point": {
            "latitude": 51.4983615,
            "longitude": -0.1257679
          },
          "pointIndex": 762,
          "maneuver": "ARRIVE_RIGHT",
          "distanceInMeters": 200
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.4998536,
            "longitude": -0.1262288
          },
          "pointIndex": 768,
          "maneuver": "ARRIVE_RIGHT",
          "distanceInMeters": 30
        },
        "roadShieldReferences": [
          {
            "reference": "gbr-secondary",
            "shieldContent": "A3212"
          }
        ]
      }
    ],
    "instructionGroups": [
      {
        "firstInstructionIndex": 0,
        "lastInstructionIndex": 3,
        "groupMessage": "Leave from <street>Forty Avenue</street>. Take the <street>Blackbird Hill</street>/<roadNumber>A4088</roadNumber>",
        "groupLengthInMeters": 2384
      },
      {
        "firstInstructionIndex": 4,
        "lastInstructionIndex": 5,
        "groupMessage": "Take the <street>Neasden Lane</street>/<roadNumber>B453</roadNumber>",
        "groupLengthInMeters": 1269
      },
      {
        "firstInstructionIndex": 6,
        "lastInstructionIndex": 8,
        "groupMessage": "Take the <street>High Road</street>/<roadNumber>A407</roadNumber>",
        "groupLengthInMeters": 1513
      },
      {
        "firstInstructionIndex": 9,
        "lastInstructionIndex": 11,
        "groupMessage": "Take the <street>Maida Vale</street>/<roadNumber>A5</roadNumber>",
        "groupLengthInMeters": 6680
      },
      {
        "firstInstructionIndex": 12,
        "lastInstructionIndex": 13,
        "groupMessage": "Take the <street>Park Lane</street>/<roadNumber>A4202</roadNumber>",
        "groupLengthInMeters": 1390
      },
      {
        "firstInstructionIndex": 14,
        "lastInstructionIndex": 15,
        "groupMessage": "Take the <street>Duke of Wellington Place</street>",
        "groupLengthInMeters": 760
      },
      {
        "firstInstructionIndex": 16,
        "lastInstructionIndex": 18,
        "groupMessage": "Take the <street>Lower Grosvenor Place</street>, <street>Bressenden Place</street>/<roadNumber>A302</roadNumber>",
        "groupLengthInMeters": 900
      },
      {
        "firstInstructionIndex": 19,
        "lastInstructionIndex": 22,
        "groupMessage": "Take the <street>Artillery Row</street>, <street>Greycoat Place</street>/<roadNumber>B323</roadNumber>",
        "groupLengthInMeters": 841
      },
      {
        "firstInstructionIndex": 23,
        "lastInstructionIndex": 24,
        "groupMessage": "Take the <street>Abingdon Street</street>/<roadNumber>A3212</roadNumber>. Continue to your destination at <street>Saint Margaret Street</street>",
        "groupLengthInMeters": 354
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
      "pointIndex": 3,
      "travelTimeInSeconds": 13,
      "distanceInMeters": 84
    },
    {
      "pointIndex": 6,
      "travelTimeInSeconds": 45,
      "distanceInMeters": 161
    },
    {
      "pointIndex": 19,
      "travelTimeInSeconds": 76,
      "distanceInMeters": 413
    },
    {
      "pointIndex": 22,
      "travelTimeInSeconds": 94,
      "distanceInMeters": 512
    },
    {
      "pointIndex": 39,
      "travelTimeInSeconds": 133,
      "distanceInMeters": 921
    },
    {
      "pointIndex": 53,
      "travelTimeInSeconds": 157,
      "distanceInMeters": 1044
    },
    {
      "pointIndex": 67,
      "travelTimeInSeconds": 236,
      "distanceInMeters": 1467
    },
    {
      "pointIndex": 72,
      "travelTimeInSeconds": 258,
      "distanceInMeters": 1564
    },
    {
      "pointIndex": 93,
      "travelTimeInSeconds": 307,
      "distanceInMeters": 1925
    },
    {
      "pointIndex": 107,
      "travelTimeInSeconds": 344,
      "distanceInMeters": 2384
    },
    {
      "pointIndex": 179,
      "travelTimeInSeconds": 512,
      "distanceInMeters": 3668
    },
    {
      "pointIndex": 195,
      "travelTimeInSeconds": 556,
      "distanceInMeters": 3946
    },
    {
      "pointIndex": 217,
      "travelTimeInSeconds": 616,
      "distanceInMeters": 4282
    },
    {
      "pointIndex": 226,
      "travelTimeInSeconds": 662,
      "distanceInMeters": 4397
    },
    {
      "pointIndex": 236,
      "travelTimeInSeconds": 684,
      "distanceInMeters": 4462
    },
    {
      "pointIndex": 247,
      "travelTimeInSeconds": 807,
      "distanceInMeters": 4932
    },
    {
      "pointIndex": 259,
      "travelTimeInSeconds": 861,
      "distanceInMeters": 5173
    },
    {
      "pointIndex": 267,
      "travelTimeInSeconds": 888,
      "distanceInMeters": 5343
    },
    {
      "pointIndex": 273,
      "travelTimeInSeconds": 919,
      "distanceInMeters": 5626
    },
    {
      "pointIndex": 277,
      "travelTimeInSeconds": 955,
      "distanceInMeters": 5748
    },
    {
      "pointIndex": 300,
      "travelTimeInSeconds": 1019,
      "distanceInMeters": 6274
    },
    {
      "pointIndex": 315,
      "travelTimeInSeconds": 1067,
      "distanceInMeters": 6607
    },
    {
      "pointIndex": 318,
      "travelTimeInSeconds": 1088,
      "distanceInMeters": 6702
    },
    {
      "pointIndex": 334,
      "travelTimeInSeconds": 1165,
      "distanceInMeters": 7235
    },
    {
      "pointIndex": 338,
      "travelTimeInSeconds": 1220,
      "distanceInMeters": 7451
    },
    {
      "pointIndex": 339,
      "travelTimeInSeconds": 1260,
      "distanceInMeters": 7532
    },
    {
      "pointIndex": 373,
      "travelTimeInSeconds": 1380,
      "distanceInMeters": 8403
    },
    {
      "pointIndex": 377,
      "travelTimeInSeconds": 1403,
      "distanceInMeters": 8456
    },
    {
      "pointIndex": 395,
      "travelTimeInSeconds": 1451,
      "distanceInMeters": 8837
    },
    {
      "pointIndex": 396,
      "travelTimeInSeconds": 1476,
      "distanceInMeters": 8869
    },
    {
      "pointIndex": 397,
      "travelTimeInSeconds": 1479,
      "distanceInMeters": 8883
    },
    {
      "pointIndex": 399,
      "travelTimeInSeconds": 1493,
      "distanceInMeters": 8899
    },
    {
      "pointIndex": 405,
      "travelTimeInSeconds": 1528,
      "distanceInMeters": 9209
    },
    {
      "pointIndex": 408,
      "travelTimeInSeconds": 1552,
      "distanceInMeters": 9291
    },
    {
      "pointIndex": 422,
      "travelTimeInSeconds": 1581,
      "distanceInMeters": 9551
    },
    {
      "pointIndex": 424,
      "travelTimeInSeconds": 1600,
      "distanceInMeters": 9599
    },
    {
      "pointIndex": 437,
      "travelTimeInSeconds": 1638,
      "distanceInMeters": 9877
    },
    {
      "pointIndex": 441,
      "travelTimeInSeconds": 1672,
      "distanceInMeters": 9935
    },
    {
      "pointIndex": 447,
      "travelTimeInSeconds": 1694,
      "distanceInMeters": 10064
    },
    {
      "pointIndex": 451,
      "travelTimeInSeconds": 1720,
      "distanceInMeters": 10109
    },
    {
      "pointIndex": 462,
      "travelTimeInSeconds": 1757,
      "distanceInMeters": 10323
    },
    {
      "pointIndex": 468,
      "travelTimeInSeconds": 1800,
      "distanceInMeters": 10481
    },
    {
      "pointIndex": 473,
      "travelTimeInSeconds": 1861,
      "distanceInMeters": 10606
    },
    {
      "pointIndex": 481,
      "travelTimeInSeconds": 1932,
      "distanceInMeters": 10712
    },
    {
      "pointIndex": 483,
      "travelTimeInSeconds": 1983,
      "distanceInMeters": 10759
    },
    {
      "pointIndex": 484,
      "travelTimeInSeconds": 1997,
      "distanceInMeters": 10767
    },
    {
      "pointIndex": 492,
      "travelTimeInSeconds": 2029,
      "distanceInMeters": 10877
    },
    {
      "pointIndex": 497,
      "travelTimeInSeconds": 2056,
      "distanceInMeters": 10929
    },
    {
      "pointIndex": 512,
      "travelTimeInSeconds": 2113,
      "distanceInMeters": 11131
    },
    {
      "pointIndex": 520,
      "travelTimeInSeconds": 2149,
      "distanceInMeters": 11354
    },
    {
      "pointIndex": 525,
      "travelTimeInSeconds": 2181,
      "distanceInMeters": 11440
    },
    {
      "pointIndex": 527,
      "travelTimeInSeconds": 2195,
      "distanceInMeters": 11509
    },
    {
      "pointIndex": 530,
      "travelTimeInSeconds": 2217,
      "distanceInMeters": 11566
    },
    {
      "pointIndex": 542,
      "travelTimeInSeconds": 2254,
      "distanceInMeters": 11791
    },
    {
      "pointIndex": 544,
      "travelTimeInSeconds": 2272,
      "distanceInMeters": 11846
    },
    {
      "pointIndex": 556,
      "travelTimeInSeconds": 2307,
      "distanceInMeters": 12041
    },
    {
      "pointIndex": 567,
      "travelTimeInSeconds": 2466,
      "distanceInMeters": 12310
    },
    {
      "pointIndex": 581,
      "travelTimeInSeconds": 2504,
      "distanceInMeters": 12687
    },
    {
      "pointIndex": 598,
      "travelTimeInSeconds": 2568,
      "distanceInMeters": 13047
    },
    {
      "pointIndex": 605,
      "travelTimeInSeconds": 2622,
      "distanceInMeters": 13197
    },
    {
      "pointIndex": 609,
      "travelTimeInSeconds": 2637,
      "distanceInMeters": 13242
    },
    {
      "pointIndex": 628,
      "travelTimeInSeconds": 2681,
      "distanceInMeters": 13433
    },
    {
      "pointIndex": 634,
      "travelTimeInSeconds": 2703,
      "distanceInMeters": 13516
    },
    {
      "pointIndex": 644,
      "travelTimeInSeconds": 2757,
      "distanceInMeters": 13891
    },
    {
      "pointIndex": 668,
      "travelTimeInSeconds": 2862,
      "distanceInMeters": 14332
    },
    {
      "pointIndex": 674,
      "travelTimeInSeconds": 2890,
      "distanceInMeters": 14414
    },
    {
      "pointIndex": 678,
      "travelTimeInSeconds": 2923,
      "distanceInMeters": 14483
    },
    {
      "pointIndex": 682,
      "travelTimeInSeconds": 2953,
      "distanceInMeters": 14589
    },
    {
      "pointIndex": 686,
      "travelTimeInSeconds": 2979,
      "distanceInMeters": 14644
    },
    {
      "pointIndex": 695,
      "travelTimeInSeconds": 3006,
      "distanceInMeters": 14834
    },
    {
      "pointIndex": 698,
      "travelTimeInSeconds": 3043,
      "distanceInMeters": 14896
    },
    {
      "pointIndex": 699,
      "travelTimeInSeconds": 3057,
      "distanceInMeters": 14904
    },
    {
      "pointIndex": 704,
      "travelTimeInSeconds": 3075,
      "distanceInMeters": 15011
    },
    {
      "pointIndex": 708,
      "travelTimeInSeconds": 3094,
      "distanceInMeters": 15062
    },
    {
      "pointIndex": 731,
      "travelTimeInSeconds": 3125,
      "distanceInMeters": 15171
    },
    {
      "pointIndex": 734,
      "travelTimeInSeconds": 3136,
      "distanceInMeters": 15178
    },
    {
      "pointIndex": 745,
      "travelTimeInSeconds": 3173,
      "distanceInMeters": 15409
    },
    {
      "pointIndex": 748,
      "travelTimeInSeconds": 3211,
      "distanceInMeters": 15480
    },
    {
      "pointIndex": 755,
      "travelTimeInSeconds": 3238,
      "distanceInMeters": 15666
    },
    {
      "pointIndex": 757,
      "travelTimeInSeconds": 3275,
      "distanceInMeters": 15754
    },
    {
      "pointIndex": 764,
      "travelTimeInSeconds": 3324,
      "distanceInMeters": 15937
    },
    {
      "pointIndex": 768,
      "travelTimeInSeconds": 3373,
      "distanceInMeters": 16042
    },
    {
      "pointIndex": 774,
      "travelTimeInSeconds": 3411,
      "distanceInMeters": 16091
    }
  ]
};

var longRoute =     {
  "summary": {
    "lengthInMeters": 21921,
    "travelTimeInSeconds": 3718,
    "trafficDelayInSeconds": 0,
    "trafficLengthInMeters": 0,
    "departureTime": "2023-12-06T12:10:27Z",
    "arrivalTime": "2023-12-06T13:12:25Z",
    "deviationDistance": 161,
    "deviationTime": 45,
    "deviationPoint": {
      "latitude": 51.5654522,
      "longitude": -0.2772546
    }
  },
  "legs": [
    {
      "summary": {
        "lengthInMeters": 21921,
        "travelTimeInSeconds": 3718,
        "trafficDelayInSeconds": 0,
        "trafficLengthInMeters": 0,
        "departureTime": "2023-12-06T12:10:27Z",
        "arrivalTime": "2023-12-06T13:12:25Z"
      },
      "points": [
        {
          "latitude": 51.5656613,
          "longitude": -0.2795505
        },
        {
          "latitude": 51.5656078,
          "longitude": -0.2789953
        },
        {
          "latitude": 51.5655863,
          "longitude": -0.2787298
        },
        {
          "latitude": 51.5655541,
          "longitude": -0.2783489
        },
        {
          "latitude": 51.565522,
          "longitude": -0.2779815
        },
        {
          "latitude": 51.5654951,
          "longitude": -0.2776623
        },
        {
          "latitude": 51.5654522,
          "longitude": -0.2772546
        },
        {
          "latitude": 51.5652081,
          "longitude": -0.2775335
        },
        {
          "latitude": 51.5651813,
          "longitude": -0.2775684
        },
        {
          "latitude": 51.5650713,
          "longitude": -0.2776569
        },
        {
          "latitude": 51.5649185,
          "longitude": -0.2777857
        },
        {
          "latitude": 51.5648702,
          "longitude": -0.2778259
        },
        {
          "latitude": 51.5641299,
          "longitude": -0.2784428
        },
        {
          "latitude": 51.5634218,
          "longitude": -0.2789122
        },
        {
          "latitude": 51.5632582,
          "longitude": -0.2790329
        },
        {
          "latitude": 51.5630677,
          "longitude": -0.2792045
        },
        {
          "latitude": 51.5628853,
          "longitude": -0.2794164
        },
        {
          "latitude": 51.5628049,
          "longitude": -0.2795237
        },
        {
          "latitude": 51.5627754,
          "longitude": -0.279564
        },
        {
          "latitude": 51.5627244,
          "longitude": -0.2796525
        },
        {
          "latitude": 51.5626332,
          "longitude": -0.2798349
        },
        {
          "latitude": 51.562416,
          "longitude": -0.2803311
        },
        {
          "latitude": 51.5623972,
          "longitude": -0.2803767
        },
        {
          "latitude": 51.562188,
          "longitude": -0.2808863
        },
        {
          "latitude": 51.562137,
          "longitude": -0.2810124
        },
        {
          "latitude": 51.5621021,
          "longitude": -0.2810392
        },
        {
          "latitude": 51.5620458,
          "longitude": -0.2811652
        },
        {
          "latitude": 51.561968,
          "longitude": -0.2813047
        },
        {
          "latitude": 51.5617749,
          "longitude": -0.2816883
        },
        {
          "latitude": 51.56174,
          "longitude": -0.2817526
        },
        {
          "latitude": 51.561622,
          "longitude": -0.2819565
        },
        {
          "latitude": 51.5615684,
          "longitude": -0.2820531
        },
        {
          "latitude": 51.5613887,
          "longitude": -0.2823374
        },
        {
          "latitude": 51.5613109,
          "longitude": -0.2824447
        },
        {
          "latitude": 51.5611526,
          "longitude": -0.2826673
        },
        {
          "latitude": 51.5610051,
          "longitude": -0.2828711
        },
        {
          "latitude": 51.5607584,
          "longitude": -0.2831903
        },
        {
          "latitude": 51.5604874,
          "longitude": -0.2834719
        },
        {
          "latitude": 51.5600717,
          "longitude": -0.2839038
        },
        {
          "latitude": 51.5596855,
          "longitude": -0.2842149
        },
        {
          "latitude": 51.559554,
          "longitude": -0.2843195
        },
        {
          "latitude": 51.5591651,
          "longitude": -0.2846146
        },
        {
          "latitude": 51.5589157,
          "longitude": -0.284797
        },
        {
          "latitude": 51.5587521,
          "longitude": -0.2849203
        },
        {
          "latitude": 51.5586716,
          "longitude": -0.2849767
        },
        {
          "latitude": 51.5583658,
          "longitude": -0.2851993
        },
        {
          "latitude": 51.5577275,
          "longitude": -0.2856204
        },
        {
          "latitude": 51.5576658,
          "longitude": -0.2856445
        },
        {
          "latitude": 51.5575987,
          "longitude": -0.2856714
        },
        {
          "latitude": 51.5575853,
          "longitude": -0.2856767
        },
        {
          "latitude": 51.5573412,
          "longitude": -0.2858296
        },
        {
          "latitude": 51.5572742,
          "longitude": -0.2858779
        },
        {
          "latitude": 51.5572608,
          "longitude": -0.2858591
        },
        {
          "latitude": 51.557242,
          "longitude": -0.285843
        },
        {
          "latitude": 51.5572178,
          "longitude": -0.2858323
        },
        {
          "latitude": 51.5571991,
          "longitude": -0.2858323
        },
        {
          "latitude": 51.5571776,
          "longitude": -0.2858403
        },
        {
          "latitude": 51.5571615,
          "longitude": -0.2858564
        },
        {
          "latitude": 51.5571427,
          "longitude": -0.2858859
        },
        {
          "latitude": 51.5571374,
          "longitude": -0.2859074
        },
        {
          "latitude": 51.5569791,
          "longitude": -0.2859396
        },
        {
          "latitude": 51.5568852,
          "longitude": -0.2859583
        },
        {
          "latitude": 51.5567297,
          "longitude": -0.2859932
        },
        {
          "latitude": 51.5565875,
          "longitude": -0.2860254
        },
        {
          "latitude": 51.5564212,
          "longitude": -0.286063
        },
        {
          "latitude": 51.5562925,
          "longitude": -0.2860764
        },
        {
          "latitude": 51.5561584,
          "longitude": -0.2860925
        },
        {
          "latitude": 51.5560323,
          "longitude": -0.2861059
        },
        {
          "latitude": 51.5558982,
          "longitude": -0.286122
        },
        {
          "latitude": 51.5555629,
          "longitude": -0.2861676
        },
        {
          "latitude": 51.5554932,
          "longitude": -0.2861837
        },
        {
          "latitude": 51.5553483,
          "longitude": -0.2862185
        },
        {
          "latitude": 51.5548843,
          "longitude": -0.286358
        },
        {
          "latitude": 51.554828,
          "longitude": -0.2863768
        },
        {
          "latitude": 51.5543291,
          "longitude": -0.2865243
        },
        {
          "latitude": 51.5542406,
          "longitude": -0.2865511
        },
        {
          "latitude": 51.5540877,
          "longitude": -0.2865967
        },
        {
          "latitude": 51.5539134,
          "longitude": -0.2866611
        },
        {
          "latitude": 51.5538812,
          "longitude": -0.2866691
        },
        {
          "latitude": 51.5538222,
          "longitude": -0.2866825
        },
        {
          "latitude": 51.5537256,
          "longitude": -0.2867147
        },
        {
          "latitude": 51.5536612,
          "longitude": -0.2867389
        },
        {
          "latitude": 51.5536103,
          "longitude": -0.2866906
        },
        {
          "latitude": 51.5535861,
          "longitude": -0.2866584
        },
        {
          "latitude": 51.5534762,
          "longitude": -0.2865484
        },
        {
          "latitude": 51.5532884,
          "longitude": -0.2862588
        },
        {
          "latitude": 51.5532535,
          "longitude": -0.2862024
        },
        {
          "latitude": 51.5531141,
          "longitude": -0.2858403
        },
        {
          "latitude": 51.5530336,
          "longitude": -0.2856445
        },
        {
          "latitude": 51.552937,
          "longitude": -0.2854139
        },
        {
          "latitude": 51.5527707,
          "longitude": -0.2851322
        },
        {
          "latitude": 51.5524167,
          "longitude": -0.2847567
        },
        {
          "latitude": 51.5520358,
          "longitude": -0.2843168
        },
        {
          "latitude": 51.5518856,
          "longitude": -0.2841425
        },
        {
          "latitude": 51.5516469,
          "longitude": -0.2838635
        },
        {
          "latitude": 51.5513465,
          "longitude": -0.2835283
        },
        {
          "latitude": 51.5511212,
          "longitude": -0.2831903
        },
        {
          "latitude": 51.5507618,
          "longitude": -0.2826297
        },
        {
          "latitude": 51.5502924,
          "longitude": -0.281994
        },
        {
          "latitude": 51.550279,
          "longitude": -0.2819109
        },
        {
          "latitude": 51.5497854,
          "longitude": -0.2812698
        },
        {
          "latitude": 51.5495038,
          "longitude": -0.2807978
        },
        {
          "latitude": 51.5490505,
          "longitude": -0.2799529
        },
        {
          "latitude": 51.5488869,
          "longitude": -0.2798027
        },
        {
          "latitude": 51.5488628,
          "longitude": -0.279741
        },
        {
          "latitude": 51.5487957,
          "longitude": -0.2795613
        },
        {
          "latitude": 51.5487367,
          "longitude": -0.2794057
        },
        {
          "latitude": 51.5486079,
          "longitude": -0.2790624
        },
        {
          "latitude": 51.5481976,
          "longitude": -0.2778769
        },
        {
          "latitude": 51.5479079,
          "longitude": -0.2770936
        },
        {
          "latitude": 51.5478516,
          "longitude": -0.2769461
        },
        {
          "latitude": 51.5473822,
          "longitude": -0.2757311
        },
        {
          "latitude": 51.5471756,
          "longitude": -0.2752778
        },
        {
          "latitude": 51.5470308,
          "longitude": -0.2749774
        },
        {
          "latitude": 51.5467089,
          "longitude": -0.274449
        },
        {
          "latitude": 51.5463012,
          "longitude": -0.2737811
        },
        {
          "latitude": 51.5460464,
          "longitude": -0.273478
        },
        {
          "latitude": 51.5459821,
          "longitude": -0.2734351
        },
        {
          "latitude": 51.5458587,
          "longitude": -0.2733305
        },
        {
          "latitude": 51.5457889,
          "longitude": -0.2732876
        },
        {
          "latitude": 51.545679,
          "longitude": -0.2731642
        },
        {
          "latitude": 51.5455207,
          "longitude": -0.2730408
        },
        {
          "latitude": 51.5450782,
          "longitude": -0.2726841
        },
        {
          "latitude": 51.544995,
          "longitude": -0.2726036
        },
        {
          "latitude": 51.5448985,
          "longitude": -0.2725017
        },
        {
          "latitude": 51.5448368,
          "longitude": -0.2724266
        },
        {
          "latitude": 51.5447858,
          "longitude": -0.2723649
        },
        {
          "latitude": 51.5447053,
          "longitude": -0.2722362
        },
        {
          "latitude": 51.5446034,
          "longitude": -0.2720994
        },
        {
          "latitude": 51.5445766,
          "longitude": -0.2721477
        },
        {
          "latitude": 51.5445149,
          "longitude": -0.2722576
        },
        {
          "latitude": 51.5442172,
          "longitude": -0.272837
        },
        {
          "latitude": 51.5438819,
          "longitude": -0.2733761
        },
        {
          "latitude": 51.5438095,
          "longitude": -0.2734968
        },
        {
          "latitude": 51.5436083,
          "longitude": -0.2738026
        },
        {
          "latitude": 51.5432355,
          "longitude": -0.27428
        },
        {
          "latitude": 51.5431711,
          "longitude": -0.27439
        },
        {
          "latitude": 51.5431443,
          "longitude": -0.2744597
        },
        {
          "latitude": 51.5431255,
          "longitude": -0.2745321
        },
        {
          "latitude": 51.5431067,
          "longitude": -0.2746367
        },
        {
          "latitude": 51.5426534,
          "longitude": -0.2751222
        },
        {
          "latitude": 51.5425301,
          "longitude": -0.2752322
        },
        {
          "latitude": 51.5424174,
          "longitude": -0.2753341
        },
        {
          "latitude": 51.5422913,
          "longitude": -0.2754548
        },
        {
          "latitude": 51.542058,
          "longitude": -0.2756372
        },
        {
          "latitude": 51.5416744,
          "longitude": -0.2759108
        },
        {
          "latitude": 51.5415376,
          "longitude": -0.2760047
        },
        {
          "latitude": 51.5410817,
          "longitude": -0.2763346
        },
        {
          "latitude": 51.5409422,
          "longitude": -0.2763507
        },
        {
          "latitude": 51.5407947,
          "longitude": -0.2764285
        },
        {
          "latitude": 51.5405104,
          "longitude": -0.2766591
        },
        {
          "latitude": 51.5398988,
          "longitude": -0.2771473
        },
        {
          "latitude": 51.5396655,
          "longitude": -0.277335
        },
        {
          "latitude": 51.5394509,
          "longitude": -0.2775845
        },
        {
          "latitude": 51.5393221,
          "longitude": -0.2776757
        },
        {
          "latitude": 51.5391988,
          "longitude": -0.2777159
        },
        {
          "latitude": 51.5390298,
          "longitude": -0.2777052
        },
        {
          "latitude": 51.5386382,
          "longitude": -0.2772143
        },
        {
          "latitude": 51.5384826,
          "longitude": -0.2770185
        },
        {
          "latitude": 51.5381044,
          "longitude": -0.2765894
        },
        {
          "latitude": 51.5378121,
          "longitude": -0.276297
        },
        {
          "latitude": 51.5376699,
          "longitude": -0.276171
        },
        {
          "latitude": 51.5376028,
          "longitude": -0.2761737
        },
        {
          "latitude": 51.5375009,
          "longitude": -0.2760932
        },
        {
          "latitude": 51.5373963,
          "longitude": -0.27601
        },
        {
          "latitude": 51.5373534,
          "longitude": -0.2759349
        },
        {
          "latitude": 51.5371844,
          "longitude": -0.2756533
        },
        {
          "latitude": 51.5371951,
          "longitude": -0.275597
        },
        {
          "latitude": 51.5371898,
          "longitude": -0.2755272
        },
        {
          "latitude": 51.5371737,
          "longitude": -0.2754655
        },
        {
          "latitude": 51.5371174,
          "longitude": -0.2753985
        },
        {
          "latitude": 51.5370584,
          "longitude": -0.2753824
        },
        {
          "latitude": 51.5370074,
          "longitude": -0.2754012
        },
        {
          "latitude": 51.536479,
          "longitude": -0.2753958
        },
        {
          "latitude": 51.5362376,
          "longitude": -0.2753019
        },
        {
          "latitude": 51.5359774,
          "longitude": -0.2752054
        },
        {
          "latitude": 51.5358433,
          "longitude": -0.2751544
        },
        {
          "latitude": 51.5356261,
          "longitude": -0.2751008
        },
        {
          "latitude": 51.5354517,
          "longitude": -0.2750552
        },
        {
          "latitude": 51.5353069,
          "longitude": -0.275031
        },
        {
          "latitude": 51.5351996,
          "longitude": -0.275023
        },
        {
          "latitude": 51.5345076,
          "longitude": -0.2749237
        },
        {
          "latitude": 51.5338451,
          "longitude": -0.2748191
        },
        {
          "latitude": 51.5332201,
          "longitude": -0.2746931
        },
        {
          "latitude": 51.5327534,
          "longitude": -0.2745214
        },
        {
          "latitude": 51.532681,
          "longitude": -0.2744973
        },
        {
          "latitude": 51.5325496,
          "longitude": -0.2747601
        },
        {
          "latitude": 51.5325093,
          "longitude": -0.2748379
        },
        {
          "latitude": 51.5324691,
          "longitude": -0.2759054
        },
        {
          "latitude": 51.5324637,
          "longitude": -0.276053
        },
        {
          "latitude": 51.5324289,
          "longitude": -0.2770212
        },
        {
          "latitude": 51.532402,
          "longitude": -0.2777508
        },
        {
          "latitude": 51.5322438,
          "longitude": -0.2780941
        },
        {
          "latitude": 51.5321258,
          "longitude": -0.278078
        },
        {
          "latitude": 51.5316322,
          "longitude": -0.2780405
        },
        {
          "latitude": 51.5313345,
          "longitude": -0.2780405
        },
        {
          "latitude": 51.5312567,
          "longitude": -0.2780887
        },
        {
          "latitude": 51.5311146,
          "longitude": -0.278239
        },
        {
          "latitude": 51.5311012,
          "longitude": -0.278255
        },
        {
          "latitude": 51.5309751,
          "longitude": -0.2784213
        },
        {
          "latitude": 51.5308625,
          "longitude": -0.2785662
        },
        {
          "latitude": 51.5308249,
          "longitude": -0.2786171
        },
        {
          "latitude": 51.5307176,
          "longitude": -0.2786949
        },
        {
          "latitude": 51.5306801,
          "longitude": -0.2785635
        },
        {
          "latitude": 51.5306398,
          "longitude": -0.2785152
        },
        {
          "latitude": 51.5305835,
          "longitude": -0.2784884
        },
        {
          "latitude": 51.5305647,
          "longitude": -0.2784884
        },
        {
          "latitude": 51.5305406,
          "longitude": -0.2784911
        },
        {
          "latitude": 51.530495,
          "longitude": -0.2785233
        },
        {
          "latitude": 51.5304574,
          "longitude": -0.2785769
        },
        {
          "latitude": 51.5304333,
          "longitude": -0.2786493
        },
        {
          "latitude": 51.5304199,
          "longitude": -0.2787217
        },
        {
          "latitude": 51.5301919,
          "longitude": -0.278703
        },
        {
          "latitude": 51.52998,
          "longitude": -0.2786949
        },
        {
          "latitude": 51.529626,
          "longitude": -0.2786896
        },
        {
          "latitude": 51.5294677,
          "longitude": -0.278703
        },
        {
          "latitude": 51.5293175,
          "longitude": -0.2787405
        },
        {
          "latitude": 51.5292504,
          "longitude": -0.2787808
        },
        {
          "latitude": 51.5290895,
          "longitude": -0.2789605
        },
        {
          "latitude": 51.5290171,
          "longitude": -0.2790758
        },
        {
          "latitude": 51.5289688,
          "longitude": -0.2791777
        },
        {
          "latitude": 51.5288696,
          "longitude": -0.2795184
        },
        {
          "latitude": 51.5288535,
          "longitude": -0.2796417
        },
        {
          "latitude": 51.5288347,
          "longitude": -0.2799153
        },
        {
          "latitude": 51.5288267,
          "longitude": -0.2801996
        },
        {
          "latitude": 51.5288293,
          "longitude": -0.2803043
        },
        {
          "latitude": 51.5288454,
          "longitude": -0.2807119
        },
        {
          "latitude": 51.5287837,
          "longitude": -0.2806824
        },
        {
          "latitude": 51.5287355,
          "longitude": -0.2806878
        },
        {
          "latitude": 51.5286765,
          "longitude": -0.2807119
        },
        {
          "latitude": 51.5286335,
          "longitude": -0.2807522
        },
        {
          "latitude": 51.528604,
          "longitude": -0.2808166
        },
        {
          "latitude": 51.5285799,
          "longitude": -0.2809185
        },
        {
          "latitude": 51.5285745,
          "longitude": -0.2810097
        },
        {
          "latitude": 51.5285906,
          "longitude": -0.281125
        },
        {
          "latitude": 51.5286094,
          "longitude": -0.2811787
        },
        {
          "latitude": 51.5286174,
          "longitude": -0.2811894
        },
        {
          "latitude": 51.5286443,
          "longitude": -0.2812323
        },
        {
          "latitude": 51.5286791,
          "longitude": -0.2812672
        },
        {
          "latitude": 51.5287569,
          "longitude": -0.2812967
        },
        {
          "latitude": 51.5287811,
          "longitude": -0.2815273
        },
        {
          "latitude": 51.5288106,
          "longitude": -0.2816722
        },
        {
          "latitude": 51.5288293,
          "longitude": -0.2817687
        },
        {
          "latitude": 51.5288535,
          "longitude": -0.2818921
        },
        {
          "latitude": 51.52895,
          "longitude": -0.2823481
        },
        {
          "latitude": 51.5290171,
          "longitude": -0.2829248
        },
        {
          "latitude": 51.5290171,
          "longitude": -0.2829328
        },
        {
          "latitude": 51.5289769,
          "longitude": -0.2832547
        },
        {
          "latitude": 51.5289527,
          "longitude": -0.283303
        },
        {
          "latitude": 51.5289474,
          "longitude": -0.2833271
        },
        {
          "latitude": 51.5289393,
          "longitude": -0.2833968
        },
        {
          "latitude": 51.528942,
          "longitude": -0.28348
        },
        {
          "latitude": 51.5289822,
          "longitude": -0.2836195
        },
        {
          "latitude": 51.5289152,
          "longitude": -0.2836543
        },
        {
          "latitude": 51.5288883,
          "longitude": -0.2836919
        },
        {
          "latitude": 51.5288749,
          "longitude": -0.283716
        },
        {
          "latitude": 51.5288454,
          "longitude": -0.2837723
        },
        {
          "latitude": 51.5287971,
          "longitude": -0.2838582
        },
        {
          "latitude": 51.5285558,
          "longitude": -0.2842981
        },
        {
          "latitude": 51.5284297,
          "longitude": -0.2845073
        },
        {
          "latitude": 51.5284216,
          "longitude": -0.2845234
        },
        {
          "latitude": 51.5283331,
          "longitude": -0.2847889
        },
        {
          "latitude": 51.5282607,
          "longitude": -0.2848881
        },
        {
          "latitude": 51.5282339,
          "longitude": -0.2849579
        },
        {
          "latitude": 51.5281963,
          "longitude": -0.2850759
        },
        {
          "latitude": 51.5281159,
          "longitude": -0.285379
        },
        {
          "latitude": 51.5280354,
          "longitude": -0.2855775
        },
        {
          "latitude": 51.5280113,
          "longitude": -0.285607
        },
        {
          "latitude": 51.5279603,
          "longitude": -0.2856204
        },
        {
          "latitude": 51.527904,
          "longitude": -0.2856204
        },
        {
          "latitude": 51.5278611,
          "longitude": -0.2856043
        },
        {
          "latitude": 51.5277216,
          "longitude": -0.2853897
        },
        {
          "latitude": 51.5275607,
          "longitude": -0.2849847
        },
        {
          "latitude": 51.5274641,
          "longitude": -0.2848184
        },
        {
          "latitude": 51.5273595,
          "longitude": -0.2844751
        },
        {
          "latitude": 51.5273434,
          "longitude": -0.2843839
        },
        {
          "latitude": 51.5272549,
          "longitude": -0.284054
        },
        {
          "latitude": 51.5271583,
          "longitude": -0.2836972
        },
        {
          "latitude": 51.5271288,
          "longitude": -0.2835846
        },
        {
          "latitude": 51.5270886,
          "longitude": -0.2834398
        },
        {
          "latitude": 51.5270457,
          "longitude": -0.2832815
        },
        {
          "latitude": 51.5269813,
          "longitude": -0.2830428
        },
        {
          "latitude": 51.5269411,
          "longitude": -0.2828792
        },
        {
          "latitude": 51.5268525,
          "longitude": -0.2825198
        },
        {
          "latitude": 51.5268338,
          "longitude": -0.2823374
        },
        {
          "latitude": 51.5267828,
          "longitude": -0.2818626
        },
        {
          "latitude": 51.5267721,
          "longitude": -0.2817312
        },
        {
          "latitude": 51.5267667,
          "longitude": -0.2814415
        },
        {
          "latitude": 51.5267614,
          "longitude": -0.2805242
        },
        {
          "latitude": 51.5267506,
          "longitude": -0.2795318
        },
        {
          "latitude": 51.5267372,
          "longitude": -0.2788344
        },
        {
          "latitude": 51.5267345,
          "longitude": -0.2786654
        },
        {
          "latitude": 51.5267265,
          "longitude": -0.2783516
        },
        {
          "latitude": 51.5267211,
          "longitude": -0.2781343
        },
        {
          "latitude": 51.5266594,
          "longitude": -0.2772546
        },
        {
          "latitude": 51.5266192,
          "longitude": -0.2768362
        },
        {
          "latitude": 51.5265897,
          "longitude": -0.2764955
        },
        {
          "latitude": 51.5265173,
          "longitude": -0.2758545
        },
        {
          "latitude": 51.5264207,
          "longitude": -0.2752456
        },
        {
          "latitude": 51.5263483,
          "longitude": -0.2748004
        },
        {
          "latitude": 51.5262651,
          "longitude": -0.2742505
        },
        {
          "latitude": 51.5262383,
          "longitude": -0.2741271
        },
        {
          "latitude": 51.5262383,
          "longitude": -0.2741137
        },
        {
          "latitude": 51.5261713,
          "longitude": -0.2738106
        },
        {
          "latitude": 51.5258789,
          "longitude": -0.2725929
        },
        {
          "latitude": 51.5258226,
          "longitude": -0.2723703
        },
        {
          "latitude": 51.5256214,
          "longitude": -0.2716139
        },
        {
          "latitude": 51.525372,
          "longitude": -0.2708012
        },
        {
          "latitude": 51.5253156,
          "longitude": -0.2706161
        },
        {
          "latitude": 51.5250877,
          "longitude": -0.2698678
        },
        {
          "latitude": 51.5247416,
          "longitude": -0.2687654
        },
        {
          "latitude": 51.5243071,
          "longitude": -0.2673653
        },
        {
          "latitude": 51.5241677,
          "longitude": -0.26692
        },
        {
          "latitude": 51.5240872,
          "longitude": -0.2667323
        },
        {
          "latitude": 51.5238538,
          "longitude": -0.2661905
        },
        {
          "latitude": 51.5238243,
          "longitude": -0.2661261
        },
        {
          "latitude": 51.5235615,
          "longitude": -0.2656862
        },
        {
          "latitude": 51.5235293,
          "longitude": -0.2656326
        },
        {
          "latitude": 51.5234756,
          "longitude": -0.2655253
        },
        {
          "latitude": 51.5233576,
          "longitude": -0.2653456
        },
        {
          "latitude": 51.523253,
          "longitude": -0.2651712
        },
        {
          "latitude": 51.523068,
          "longitude": -0.2649084
        },
        {
          "latitude": 51.522789,
          "longitude": -0.2645651
        },
        {
          "latitude": 51.5223196,
          "longitude": -0.264101
        },
        {
          "latitude": 51.5223089,
          "longitude": -0.2640903
        },
        {
          "latitude": 51.5220997,
          "longitude": -0.263932
        },
        {
          "latitude": 51.5219146,
          "longitude": -0.2638006
        },
        {
          "latitude": 51.5217188,
          "longitude": -0.2636719
        },
        {
          "latitude": 51.5215632,
          "longitude": -0.26357
        },
        {
          "latitude": 51.5215042,
          "longitude": -0.2635324
        },
        {
          "latitude": 51.5213808,
          "longitude": -0.2634627
        },
        {
          "latitude": 51.5212575,
          "longitude": -0.2633956
        },
        {
          "latitude": 51.5211797,
          "longitude": -0.26335
        },
        {
          "latitude": 51.5208605,
          "longitude": -0.2631569
        },
        {
          "latitude": 51.5205708,
          "longitude": -0.2629852
        },
        {
          "latitude": 51.5198037,
          "longitude": -0.2625293
        },
        {
          "latitude": 51.5196401,
          "longitude": -0.2624327
        },
        {
          "latitude": 51.5195328,
          "longitude": -0.2623603
        },
        {
          "latitude": 51.5192753,
          "longitude": -0.2621806
        },
        {
          "latitude": 51.5188515,
          "longitude": -0.2618694
        },
        {
          "latitude": 51.5184706,
          "longitude": -0.2616066
        },
        {
          "latitude": 51.5180442,
          "longitude": -0.2613491
        },
        {
          "latitude": 51.5177196,
          "longitude": -0.2611426
        },
        {
          "latitude": 51.5174675,
          "longitude": -0.2609119
        },
        {
          "latitude": 51.5170974,
          "longitude": -0.2605364
        },
        {
          "latitude": 51.5167353,
          "longitude": -0.260075
        },
        {
          "latitude": 51.5165609,
          "longitude": -0.2598095
        },
        {
          "latitude": 51.5163839,
          "longitude": -0.2594796
        },
        {
          "latitude": 51.5163222,
          "longitude": -0.2593696
        },
        {
          "latitude": 51.5162498,
          "longitude": -0.2592248
        },
        {
          "latitude": 51.5161666,
          "longitude": -0.2590612
        },
        {
          "latitude": 51.5160057,
          "longitude": -0.2587822
        },
        {
          "latitude": 51.5158367,
          "longitude": -0.2584147
        },
        {
          "latitude": 51.5158179,
          "longitude": -0.2583718
        },
        {
          "latitude": 51.515488,
          "longitude": -0.2575913
        },
        {
          "latitude": 51.5152279,
          "longitude": -0.2569529
        },
        {
          "latitude": 51.5151554,
          "longitude": -0.2567491
        },
        {
          "latitude": 51.5150106,
          "longitude": -0.2563843
        },
        {
          "latitude": 51.5148148,
          "longitude": -0.2557191
        },
        {
          "latitude": 51.5146726,
          "longitude": -0.2552363
        },
        {
          "latitude": 51.5144768,
          "longitude": -0.2545765
        },
        {
          "latitude": 51.5142274,
          "longitude": -0.2533159
        },
        {
          "latitude": 51.5140799,
          "longitude": -0.2523717
        },
        {
          "latitude": 51.5140584,
          "longitude": -0.2522001
        },
        {
          "latitude": 51.5140262,
          "longitude": -0.2518326
        },
        {
          "latitude": 51.5139833,
          "longitude": -0.2513659
        },
        {
          "latitude": 51.5139484,
          "longitude": -0.2502367
        },
        {
          "latitude": 51.5139377,
          "longitude": -0.2493945
        },
        {
          "latitude": 51.5139458,
          "longitude": -0.249027
        },
        {
          "latitude": 51.5139779,
          "longitude": -0.2486113
        },
        {
          "latitude": 51.5139833,
          "longitude": -0.2484825
        },
        {
          "latitude": 51.5139887,
          "longitude": -0.2483806
        },
        {
          "latitude": 51.513994,
          "longitude": -0.2483028
        },
        {
          "latitude": 51.5140074,
          "longitude": -0.2480936
        },
        {
          "latitude": 51.5141416,
          "longitude": -0.2457842
        },
        {
          "latitude": 51.5141469,
          "longitude": -0.2456743
        },
        {
          "latitude": 51.5143025,
          "longitude": -0.2430162
        },
        {
          "latitude": 51.5143052,
          "longitude": -0.2429518
        },
        {
          "latitude": 51.5143159,
          "longitude": -0.2427936
        },
        {
          "latitude": 51.5143347,
          "longitude": -0.2424315
        },
        {
          "latitude": 51.5143427,
          "longitude": -0.2423322
        },
        {
          "latitude": 51.5143803,
          "longitude": -0.2416992
        },
        {
          "latitude": 51.5143856,
          "longitude": -0.2415812
        },
        {
          "latitude": 51.5143964,
          "longitude": -0.2414095
        },
        {
          "latitude": 51.5144286,
          "longitude": -0.2408704
        },
        {
          "latitude": 51.5144259,
          "longitude": -0.2407578
        },
        {
          "latitude": 51.5144232,
          "longitude": -0.2405807
        },
        {
          "latitude": 51.5144125,
          "longitude": -0.2398485
        },
        {
          "latitude": 51.5143079,
          "longitude": -0.2387273
        },
        {
          "latitude": 51.5142998,
          "longitude": -0.2384779
        },
        {
          "latitude": 51.5142891,
          "longitude": -0.2379656
        },
        {
          "latitude": 51.5142837,
          "longitude": -0.2377027
        },
        {
          "latitude": 51.5143213,
          "longitude": -0.2372012
        },
        {
          "latitude": 51.5143427,
          "longitude": -0.2369249
        },
        {
          "latitude": 51.514383,
          "longitude": -0.2363724
        },
        {
          "latitude": 51.5143883,
          "longitude": -0.2363053
        },
        {
          "latitude": 51.5144554,
          "longitude": -0.2355999
        },
        {
          "latitude": 51.5144607,
          "longitude": -0.2355409
        },
        {
          "latitude": 51.5144661,
          "longitude": -0.2354658
        },
        {
          "latitude": 51.5144822,
          "longitude": -0.2352619
        },
        {
          "latitude": 51.5144929,
          "longitude": -0.2351573
        },
        {
          "latitude": 51.5145922,
          "longitude": -0.2339181
        },
        {
          "latitude": 51.5146405,
          "longitude": -0.2333549
        },
        {
          "latitude": 51.5147558,
          "longitude": -0.2319574
        },
        {
          "latitude": 51.5148255,
          "longitude": -0.2311018
        },
        {
          "latitude": 51.5148416,
          "longitude": -0.2309141
        },
        {
          "latitude": 51.5148845,
          "longitude": -0.2303964
        },
        {
          "latitude": 51.5149784,
          "longitude": -0.2292162
        },
        {
          "latitude": 51.5150213,
          "longitude": -0.22872
        },
        {
          "latitude": 51.5150535,
          "longitude": -0.2282292
        },
        {
          "latitude": 51.5150937,
          "longitude": -0.2277195
        },
        {
          "latitude": 51.5151983,
          "longitude": -0.2263463
        },
        {
          "latitude": 51.5152198,
          "longitude": -0.2259922
        },
        {
          "latitude": 51.5152681,
          "longitude": -0.2252358
        },
        {
          "latitude": 51.5153244,
          "longitude": -0.2243721
        },
        {
          "latitude": 51.5153834,
          "longitude": -0.2242112
        },
        {
          "latitude": 51.5154129,
          "longitude": -0.2240905
        },
        {
          "latitude": 51.5155014,
          "longitude": -0.2230069
        },
        {
          "latitude": 51.5155095,
          "longitude": -0.222913
        },
        {
          "latitude": 51.5155256,
          "longitude": -0.2227119
        },
        {
          "latitude": 51.5155444,
          "longitude": -0.2224651
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
          "latitude": 51.4972436,
          "longitude": -0.2043736
        },
        {
          "latitude": 51.4972892,
          "longitude": -0.2042583
        },
        {
          "latitude": 51.4974126,
          "longitude": -0.2038935
        },
        {
          "latitude": 51.4974743,
          "longitude": -0.2037084
        },
        {
          "latitude": 51.4974636,
          "longitude": -0.2035958
        },
        {
          "latitude": 51.4974958,
          "longitude": -0.2035126
        },
        {
          "latitude": 51.4976621,
          "longitude": -0.2030808
        },
        {
          "latitude": 51.4976969,
          "longitude": -0.2029976
        },
        {
          "latitude": 51.4977774,
          "longitude": -0.2027857
        },
        {
          "latitude": 51.4978445,
          "longitude": -0.2026141
        },
        {
          "latitude": 51.4979061,
          "longitude": -0.2024397
        },
        {
          "latitude": 51.4980644,
          "longitude": -0.2019757
        },
        {
          "latitude": 51.498169,
          "longitude": -0.2016753
        },
        {
          "latitude": 51.4982575,
          "longitude": -0.2014232
        },
        {
          "latitude": 51.4983326,
          "longitude": -0.2012059
        },
        {
          "latitude": 51.498405,
          "longitude": -0.200994
        },
        {
          "latitude": 51.4984453,
          "longitude": -0.200876
        },
        {
          "latitude": 51.498574,
          "longitude": -0.2004898
        },
        {
          "latitude": 51.4986169,
          "longitude": -0.2003154
        },
        {
          "latitude": 51.4986491,
          "longitude": -0.200192
        },
        {
          "latitude": 51.4987108,
          "longitude": -0.2000847
        },
        {
          "latitude": 51.4987269,
          "longitude": -0.2000043
        },
        {
          "latitude": 51.4988154,
          "longitude": -0.199661
        },
        {
          "latitude": 51.498861,
          "longitude": -0.1995429
        },
        {
          "latitude": 51.4989495,
          "longitude": -0.1992291
        },
        {
          "latitude": 51.4990354,
          "longitude": -0.1989099
        },
        {
          "latitude": 51.4990166,
          "longitude": -0.1987597
        },
        {
          "latitude": 51.4990354,
          "longitude": -0.1986927
        },
        {
          "latitude": 51.4990622,
          "longitude": -0.1986068
        },
        {
          "latitude": 51.499097,
          "longitude": -0.1984781
        },
        {
          "latitude": 51.4990434,
          "longitude": -0.1984808
        },
        {
          "latitude": 51.4989951,
          "longitude": -0.1984647
        },
        {
          "latitude": 51.49892,
          "longitude": -0.1984566
        },
        {
          "latitude": 51.4986518,
          "longitude": -0.1982984
        },
        {
          "latitude": 51.4981395,
          "longitude": -0.1980382
        },
        {
          "latitude": 51.4980885,
          "longitude": -0.1980114
        },
        {
          "latitude": 51.4980403,
          "longitude": -0.1979873
        },
        {
          "latitude": 51.4977774,
          "longitude": -0.1978102
        },
        {
          "latitude": 51.4976969,
          "longitude": -0.1977539
        },
        {
          "latitude": 51.4976218,
          "longitude": -0.1977029
        },
        {
          "latitude": 51.4973509,
          "longitude": -0.197542
        },
        {
          "latitude": 51.4972222,
          "longitude": -0.1974589
        },
        {
          "latitude": 51.4968789,
          "longitude": -0.1972416
        },
        {
          "latitude": 51.4967501,
          "longitude": -0.1971745
        },
        {
          "latitude": 51.496616,
          "longitude": -0.1970941
        },
        {
          "latitude": 51.4960232,
          "longitude": -0.1967427
        },
        {
          "latitude": 51.4958784,
          "longitude": -0.1965898
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
      "startPointIndex": 0,
      "endPointIndex": 6,
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
      "startPointIndex": 0,
      "endPointIndex": 9,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 32,
      "startPointIndex": 9,
      "endPointIndex": 21,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 6,
      "endPointIndex": 31,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-secondary",
          "shieldContent": "A4089"
        }
      ]
    },
    {
      "startPointIndex": 31,
      "endPointIndex": 86,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-secondary",
          "shieldContent": "B4565"
        }
      ]
    },
    {
      "maxSpeedLimitInKmh": 48,
      "startPointIndex": 21,
      "endPointIndex": 112,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 32,
      "startPointIndex": 112,
      "endPointIndex": 121,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 86,
      "endPointIndex": 128,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-primary",
          "shieldContent": "A404"
        }
      ]
    },
    {
      "maxSpeedLimitInKmh": 48,
      "startPointIndex": 121,
      "endPointIndex": 131,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 139,
      "endPointIndex": 147,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-primary",
          "shieldContent": "A406"
        }
      ]
    },
    {
      "maxSpeedLimitInKmh": 80,
      "startPointIndex": 131,
      "endPointIndex": 156,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 48,
      "startPointIndex": 156,
      "endPointIndex": 166,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 48,
      "startPointIndex": 172,
      "endPointIndex": 265,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 64,
      "startPointIndex": 265,
      "endPointIndex": 404,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 402,
      "endPointIndex": 414,
      "sectionType": "MOTORWAY"
    },
    {
      "startPointIndex": 273,
      "endPointIndex": 414,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-primary",
          "shieldContent": "A40"
        }
      ]
    },
    {
      "maxSpeedLimitInKmh": 48,
      "startPointIndex": 404,
      "endPointIndex": 453,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 64,
      "startPointIndex": 453,
      "endPointIndex": 473,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 444,
      "endPointIndex": 475,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-primary",
          "shieldContent": "A3220"
        }
      ]
    },
    {
      "startPointIndex": 475,
      "endPointIndex": 485,
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
      "startPointIndex": 473,
      "endPointIndex": 532,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 485,
      "endPointIndex": 532,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-primary",
          "shieldContent": "A3220"
        }
      ]
    },
    {
      "startPointIndex": 532,
      "endPointIndex": 562,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-secondary",
          "shieldContent": "A315"
        }
      ]
    },
    {
      "maxSpeedLimitInKmh": 32,
      "startPointIndex": 532,
      "endPointIndex": 579,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 565,
      "endPointIndex": 580,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "gbr-secondary",
          "shieldContent": "B316"
        }
      ]
    },
    {
      "maxSpeedLimitInKmh": 48,
      "startPointIndex": 579,
      "endPointIndex": 588,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 580,
      "endPointIndex": 588,
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
      "startPointIndex": 588,
      "endPointIndex": 621,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 48,
      "startPointIndex": 621,
      "endPointIndex": 663,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 588,
      "endPointIndex": 688,
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
      "startPointIndex": 688,
      "endPointIndex": 802,
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
      "startPointIndex": 663,
      "endPointIndex": 866,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 0,
      "endPointIndex": 866,
      "sectionType": "COUNTRY",
      "countryCode": "GBR"
    },
    {
      "startPointIndex": 802,
      "endPointIndex": 866,
      "sectionType": "TOLL_ROAD"
    },
    {
      "startPointIndex": 802,
      "endPointIndex": 866,
      "sectionType": "TOLL_VIGNETTE",
      "countryCode": "GBR"
    },
    {
      "startPointIndex": 0,
      "endPointIndex": 866,
      "sectionType": "TRAVEL_MODE",
      "travelMode": "car"
    },
    {
      "startPointIndex": 802,
      "endPointIndex": 866,
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
      "endPointIndex": 866,
      "sectionType": "URBAN"
    },
    {
      "startPointIndex": 256,
      "endPointIndex": 259,
      "sectionType": "TRAFFIC",
      "simpleCategory": "ROAD_WORK",
      "effectiveSpeedInKmh": 42,
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
      "startPointIndex": 414,
      "endPointIndex": 419,
      "sectionType": "TRAFFIC",
      "simpleCategory": "ROAD_WORK",
      "effectiveSpeedInKmh": 49,
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
            "RIGHT"
          ],
          "follow": "RIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED"
      ],
      "startPointIndex": 4,
      "endPointIndex": 5,
      "sectionType": "LANES"
    },
    {
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
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "startPointIndex": 27,
      "endPointIndex": 28,
      "sectionType": "LANES"
    },
    {
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
        "LONG_DASHED",
        "DOUBLE_SOLID"
      ],
      "startPointIndex": 50,
      "endPointIndex": 51,
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
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "startPointIndex": 127,
      "endPointIndex": 128,
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
        "SINGLE_SOLID"
      ],
      "startPointIndex": 146,
      "endPointIndex": 147,
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
        "SHORT_DASHED",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "startPointIndex": 151,
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
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "LONG_DASHED"
      ],
      "startPointIndex": 184,
      "endPointIndex": 185,
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
            "RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "startPointIndex": 190,
      "endPointIndex": 191,
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
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "startPointIndex": 245,
      "endPointIndex": 247,
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
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "startPointIndex": 296,
      "endPointIndex": 297,
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
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "startPointIndex": 407,
      "endPointIndex": 408,
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
      "startPointIndex": 413,
      "endPointIndex": 414,
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
          ],
          "follow": "STRAIGHT"
        },
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
      "startPointIndex": 421,
      "endPointIndex": 423,
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
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "startPointIndex": 474,
      "endPointIndex": 475,
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
            "RIGHT"
          ]
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
        "LONG_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "startPointIndex": 483,
      "endPointIndex": 485,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "DOUBLE_SOLID",
        "SINGLE_SOLID"
      ],
      "startPointIndex": 515,
      "endPointIndex": 516,
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
      "startPointIndex": 531,
      "endPointIndex": 532,
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
      "startPointIndex": 560,
      "endPointIndex": 561,
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
      "startPointIndex": 583,
      "endPointIndex": 584,
      "sectionType": "LANES"
    },
    {
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
        "SINGLE_SOLID"
      ],
      "startPointIndex": 663,
      "endPointIndex": 665,
      "sectionType": "LANES"
    }
  ],
  "guidance": {
    "instructions": [
      {
        "routeOffsetInMeters": 0,
        "travelTimeInSeconds": 0,
        "point": {
          "latitude": 51.56566,
          "longitude": -0.27955
        },
        "pointIndex": 0,
        "instructionType": "LOCATION_DEPARTURE",
        "roadNumbers": [
          "A4088"
        ],
        "phoneticRoadNumbers": [
          "e⁀ɪ.fɔː.tɪ.e⁀ɪ.tɪ.ˈe⁀ɪt"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "en-GB"
        ],
        "street": "Forty Avenue",
        "phoneticStreet": "ˈfɔː.tɪ ˈæ.və.njuː",
        "phoneticStreetLanguageCode": "en-GB",
        "countryCode": "GBR",
        "possibleCombineWithNext": false,
        "drivingSide": "LEFT",
        "maneuver": "DEPART",
        "message": "Leave from <street>Forty Avenue</street>/<roadNumber>A4088</roadNumber>",
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.565661,
            "longitude": -0.2795475
          },
          "pointIndex": 0,
          "maneuver": "DEPART",
          "distanceInMeters": 0
        },
        "roadShieldReferences": [
          {
            "reference": "gbr-secondary",
            "shieldContent": "A4088"
          }
        ]
      },
      {
        "routeOffsetInMeters": 132,
        "travelTimeInSeconds": 36,
        "point": {
          "latitude": 51.5655,
          "longitude": -0.27766
        },
        "pointIndex": 5,
        "instructionType": "TURN",
        "roadNumbers": [
          "A4089"
        ],
        "phoneticRoadNumbers": [
          "e⁀ɪ.fɔː.tɪ.e⁀ɪ.tɪ.ˈna⁀ɪn"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "en-GB"
        ],
        "street": "Bridge Road",
        "phoneticStreet": "ˈbɻɪd⁀ʒ ˈɻə⁀ʊd",
        "phoneticStreetLanguageCode": "en-GB",
        "countryCode": "GBR",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": 90,
        "possibleCombineWithNext": false,
        "drivingSide": "LEFT",
        "maneuver": "TURN_RIGHT",
        "message": "Turn right onto <street>Bridge Road</street>/<roadNumber>A4089</roadNumber>",
        "mainAnnouncement": {
          "point": {
            "latitude": 51.5656174,
            "longitude": -0.279095
          },
          "pointIndex": 0,
          "maneuver": "TURN_RIGHT",
          "distanceInMeters": 100
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.5655195,
            "longitude": -0.2779525
          },
          "pointIndex": 4,
          "maneuver": "TURN_RIGHT",
          "distanceInMeters": 20
        },
        "roadShieldReferences": [
          {
            "reference": "gbr-secondary",
            "shieldContent": "A4089"
          }
        ]
      },
      {
        "routeOffsetInMeters": 684,
        "travelTimeInSeconds": 140,
        "point": {
          "latitude": 51.56177,
          "longitude": -0.28169
        },
        "pointIndex": 28,
        "instructionType": "TURN",
        "roadNumbers": [
          "B4565"
        ],
        "phoneticRoadNumbers": [
          "ˈbiː fɔː.fa⁀ɪv.sɪks.ˈfa⁀ɪv"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "en-GB"
        ],
        "street": "Empire Way",
        "phoneticStreet": "ˈɛm.pa⁀ɪ.ə ˈwe⁀ɪ",
        "phoneticStreetLanguageCode": "en-GB",
        "countryCode": "GBR",
        "junctionType": "ROUNDABOUT",
        "turnAngleInDecimalDegrees": 0,
        "roundaboutExitNumber": 1,
        "possibleCombineWithNext": false,
        "drivingSide": "LEFT",
        "maneuver": "ROUNDABOUT_CROSS",
        "message": "At the roundabout take the <roundaboutExitNumber>first</roundaboutExitNumber> exit onto <street>Empire Way</street>/<roadNumber>B4565</roadNumber>",
        "mainAnnouncement": {
          "point": {
            "latitude": 51.56368,
            "longitude": -0.278741
          },
          "pointIndex": 12,
          "maneuver": "ROUNDABOUT_CROSS",
          "distanceInMeters": 300
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.5619453,
            "longitude": -0.2813498
          },
          "pointIndex": 27,
          "maneuver": "ROUNDABOUT_CROSS",
          "distanceInMeters": 30
        },
        "roadShieldReferences": [
          {
            "reference": "gbr-secondary",
            "shieldContent": "B4565"
          }
        ]
      },
      {
        "routeOffsetInMeters": 1268,
        "travelTimeInSeconds": 254,
        "point": {
          "latitude": 51.55727,
          "longitude": -0.28588
        },
        "pointIndex": 51,
        "instructionType": "TURN",
        "roadNumbers": [
          "B4565"
        ],
        "phoneticRoadNumbers": [
          "ˈbiː fɔː.fa⁀ɪv.sɪks.ˈfa⁀ɪv"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "en-GB"
        ],
        "street": "Empire Way",
        "phoneticStreet": "ˈɛm.pa⁀ɪ.ə ˈwe⁀ɪ",
        "phoneticStreetLanguageCode": "en-GB",
        "countryCode": "GBR",
        "junctionType": "ROUNDABOUT",
        "turnAngleInDecimalDegrees": 0,
        "roundaboutExitNumber": 1,
        "possibleCombineWithNext": false,
        "drivingSide": "LEFT",
        "maneuver": "ROUNDABOUT_CROSS",
        "message": "At the roundabout take the <roundaboutExitNumber>first</roundaboutExitNumber> exit onto <street>Empire Way</street>/<roadNumber>B4565</roadNumber>",
        "mainAnnouncement": {
          "point": {
            "latitude": 51.5597498,
            "longitude": -0.284163
          },
          "pointIndex": 38,
          "maneuver": "ROUNDABOUT_CROSS",
          "distanceInMeters": 300
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.5575296,
            "longitude": -0.2857116
          },
          "pointIndex": 49,
          "maneuver": "ROUNDABOUT_CROSS",
          "distanceInMeters": 30
        },
        "roadShieldReferences": [
          {
            "reference": "gbr-secondary",
            "shieldContent": "B4565"
          }
        ]
      },
      {
        "routeOffsetInMeters": 3134,
        "travelTimeInSeconds": 593,
        "point": {
          "latitude": 51.5446,
          "longitude": -0.2721
        },
        "pointIndex": 128,
        "instructionType": "TURN",
        "roadNumbers": [
          "A406"
        ],
        "phoneticRoadNumbers": [
          "e⁀ɪ.fɔːɻ.ə⁀ʊ.ˈsɪks"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "en-GB"
        ],
        "street": "North Circular Road",
        "phoneticStreet": "ˈnɔːθ ˈsɜː.kjə.lə ˈɻə⁀ʊd",
        "phoneticStreetLanguageCode": "en-GB",
        "countryCode": "GBR",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": 90,
        "possibleCombineWithNext": true,
        "drivingSide": "LEFT",
        "maneuver": "TURN_RIGHT",
        "message": "Turn right onto <street>North Circular Road</street>/<roadNumber>A406</roadNumber>",
        "combinedMessage": "Turn right onto <street>North Circular Road</street>/<roadNumber>A406</roadNumber> then bear left at <street>Abbey Road</street> toward <signpostText>Park Royal (N & W)</signpostText>",
        "earlyWarningAnnouncement": {
          "point": {
            "latitude": 51.548298,
            "longitude": -0.278167
          },
          "pointIndex": 107,
          "maneuver": "AHEAD_RIGHT_TURN",
          "distanceInMeters": 600
        },
        "mainAnnouncement": {
          "point": {
            "latitude": 51.5467912,
            "longitude": -0.274584
          },
          "pointIndex": 113,
          "maneuver": "TURN_RIGHT",
          "distanceInMeters": 300
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.5447734,
            "longitude": -0.2723451
          },
          "pointIndex": 126,
          "maneuver": "TURN_RIGHT",
          "distanceInMeters": 26
        },
        "roadShieldReferences": [
          {
            "reference": "gbr-primary",
            "shieldContent": "A406"
          }
        ]
      },
      {
        "routeOffsetInMeters": 3634,
        "travelTimeInSeconds": 634,
        "point": {
          "latitude": 51.54108,
          "longitude": -0.27633
        },
        "pointIndex": 147,
        "instructionType": "TURN",
        "street": "Abbey Road",
        "phoneticStreet": "ˈæ.bɪ ˈɻə⁀ʊd",
        "phoneticStreetLanguageCode": "en-GB",
        "countryCode": "GBR",
        "signpostText": "Park Royal (N & W)",
        "phoneticSignpostText": "ˈpɑːk ˈɻɔ⁀ɪ.əl ˈnɔːθ ənd ˈwɛst",
        "phoneticSignpostTextLanguageCode": "en-GB",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": -45,
        "possibleCombineWithNext": true,
        "drivingSide": "LEFT",
        "maneuver": "BEAR_LEFT",
        "message": "Bear left at <street>Abbey Road</street> toward <signpostText>Park Royal (N & W)</signpostText>",
        "combinedMessage": "Bear left at <street>Abbey Road</street> toward <signpostText>Park Royal (N & W)</signpostText> then turn left onto <street>Abbey Road</street>",
        "mainAnnouncement": {
          "point": {
            "latitude": 51.5433408,
            "longitude": -0.2741451
          },
          "pointIndex": 134,
          "maneuver": "BEAR_LEFT",
          "distanceInMeters": 300
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.5417319,
            "longitude": -0.2758698
          },
          "pointIndex": 144,
          "maneuver": "BEAR_LEFT",
          "distanceInMeters": 80
        }
      },
      {
        "routeOffsetInMeters": 3837,
        "travelTimeInSeconds": 651,
        "point": {
          "latitude": 51.53945,
          "longitude": -0.27758
        },
        "pointIndex": 153,
        "instructionType": "TURN",
        "street": "Abbey Road",
        "phoneticStreet": "ˈæ.bɪ ˈɻə⁀ʊd",
        "phoneticStreetLanguageCode": "en-GB",
        "countryCode": "GBR",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": -90,
        "possibleCombineWithNext": true,
        "drivingSide": "LEFT",
        "maneuver": "TURN_LEFT",
        "message": "Turn left onto <street>Abbey Road</street>",
        "combinedMessage": "Turn left onto <street>Abbey Road</street> then at the roundabout take the <roundaboutExitNumber>second</roundaboutExitNumber> exit onto <street>Abbey Road</street>",
        "earlyWarningAnnouncement": {
          "point": {
            "latitude": 51.540662,
            "longitude": -0.2765361
          },
          "pointIndex": 149,
          "maneuver": "AHEAD_LEFT_TURN",
          "distanceInMeters": 153
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.5402368,
            "longitude": -0.2768775
          },
          "pointIndex": 150,
          "maneuver": "TURN_LEFT",
          "distanceInMeters": 100
        }
      },
      {
        "routeOffsetInMeters": 4104,
        "travelTimeInSeconds": 693,
        "point": {
          "latitude": 51.5374,
          "longitude": -0.27601
        },
        "pointIndex": 164,
        "instructionType": "TURN",
        "street": "Abbey Road",
        "phoneticStreet": "ˈæ.bɪ ˈɻə⁀ʊd",
        "phoneticStreetLanguageCode": "en-GB",
        "countryCode": "GBR",
        "junctionType": "ROUNDABOUT",
        "turnAngleInDecimalDegrees": 45,
        "roundaboutExitNumber": 2,
        "possibleCombineWithNext": false,
        "drivingSide": "LEFT",
        "maneuver": "ROUNDABOUT_CROSS",
        "message": "At the roundabout take the <roundaboutExitNumber>second</roundaboutExitNumber> exit onto <street>Abbey Road</street>",
        "mainAnnouncement": {
          "point": {
            "latitude": 51.5381786,
            "longitude": -0.2766735
          },
          "pointIndex": 158,
          "maneuver": "ROUNDABOUT_CROSS",
          "distanceInMeters": 100
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.5375558,
            "longitude": -0.2761365
          },
          "pointIndex": 162,
          "maneuver": "ROUNDABOUT_CROSS",
          "distanceInMeters": 20
        }
      },
      {
        "routeOffsetInMeters": 4660,
        "travelTimeInSeconds": 818,
        "point": {
          "latitude": 51.53268,
          "longitude": -0.2745
        },
        "pointIndex": 185,
        "instructionType": "TURN",
        "street": "Whitby Avenue",
        "phoneticStreet": "ˈwɪt.bɪ ˈæ.və.njuː",
        "phoneticStreetLanguageCode": "en-GB",
        "countryCode": "GBR",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": 90,
        "possibleCombineWithNext": false,
        "drivingSide": "LEFT",
        "maneuver": "TURN_RIGHT",
        "message": "Turn right onto <street>Whitby Avenue</street>",
        "mainAnnouncement": {
          "point": {
            "latitude": 51.5344538,
            "longitude": -0.2749153
          },
          "pointIndex": 181,
          "maneuver": "TURN_RIGHT",
          "distanceInMeters": 200
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.5332066,
            "longitude": -0.2746881
          },
          "pointIndex": 183,
          "maneuver": "TURN_RIGHT",
          "distanceInMeters": 60
        }
      },
      {
        "routeOffsetInMeters": 4893,
        "travelTimeInSeconds": 859,
        "point": {
          "latitude": 51.5324,
          "longitude": -0.27775
        },
        "pointIndex": 191,
        "instructionType": "TURN",
        "street": "Rainsford Road",
        "phoneticStreet": "ˈɻe⁀ɪnz.fəd ˈɻə⁀ʊd",
        "phoneticStreetLanguageCode": "en-GB",
        "countryCode": "GBR",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": -90,
        "possibleCombineWithNext": true,
        "drivingSide": "LEFT",
        "maneuver": "TURN_LEFT",
        "message": "Turn left onto <street>Rainsford Road</street>",
        "combinedMessage": "Turn left onto <street>Rainsford Road</street> then at the roundabout take the <roundaboutExitNumber>second</roundaboutExitNumber> exit",
        "mainAnnouncement": {
          "point": {
            "latitude": 51.5324543,
            "longitude": -0.2763131
          },
          "pointIndex": 189,
          "maneuver": "TURN_LEFT",
          "distanceInMeters": 100
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.5324125,
            "longitude": -0.2774647
          },
          "pointIndex": 190,
          "maneuver": "TURN_LEFT",
          "distanceInMeters": 20
        }
      },
      {
        "routeOffsetInMeters": 5106,
        "travelTimeInSeconds": 882,
        "point": {
          "latitude": 51.53072,
          "longitude": -0.27869
        },
        "pointIndex": 202,
        "instructionType": "TURN",
        "countryCode": "GBR",
        "junctionType": "ROUNDABOUT",
        "turnAngleInDecimalDegrees": 0,
        "roundaboutExitNumber": 2,
        "possibleCombineWithNext": false,
        "drivingSide": "LEFT",
        "maneuver": "ROUNDABOUT_CROSS",
        "message": "At the roundabout take the <roundaboutExitNumber>second</roundaboutExitNumber> exit",
        "mainAnnouncement": {
          "point": {
            "latitude": 51.5314963,
            "longitude": -0.2780405
          },
          "pointIndex": 194,
          "maneuver": "ROUNDABOUT_CROSS",
          "distanceInMeters": 100
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.5308765,
            "longitude": -0.2785481
          },
          "pointIndex": 199,
          "maneuver": "ROUNDABOUT_CROSS",
          "distanceInMeters": 20
        }
      },
      {
        "routeOffsetInMeters": 5438,
        "travelTimeInSeconds": 924,
        "point": {
          "latitude": 51.52885,
          "longitude": -0.28071
        },
        "pointIndex": 226,
        "instructionType": "TURN",
        "street": "Coronation Road",
        "phoneticStreet": "kɒ.ɻə.ˈne⁀ɪ.ʃən ˈɻə⁀ʊd",
        "phoneticStreetLanguageCode": "en-GB",
        "countryCode": "GBR",
        "junctionType": "ROUNDABOUT",
        "turnAngleInDecimalDegrees": 0,
        "roundaboutExitNumber": 2,
        "possibleCombineWithNext": true,
        "drivingSide": "LEFT",
        "maneuver": "ROUNDABOUT_CROSS",
        "message": "At the roundabout take the <roundaboutExitNumber>second</roundaboutExitNumber> exit onto <street>Coronation Road</street>",
        "combinedMessage": "At the roundabout take the <roundaboutExitNumber>second</roundaboutExitNumber> exit onto <street>Coronation Road</street> then at the roundabout take the <roundaboutExitNumber>first</roundaboutExitNumber> exit onto <street>Western Avenue</street>",
        "mainAnnouncement": {
          "point": {
            "latitude": 51.5296839,
            "longitude": -0.2786904
          },
          "pointIndex": 213,
          "maneuver": "ROUNDABOUT_CROSS",
          "distanceInMeters": 200
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.5288396,
            "longitude": -0.2798437
          },
          "pointIndex": 222,
          "maneuver": "ROUNDABOUT_CROSS",
          "distanceInMeters": 60
        }
      },
      {
        "routeOffsetInMeters": 5654,
        "travelTimeInSeconds": 959,
        "point": {
          "latitude": 51.52898,
          "longitude": -0.28325
        },
        "pointIndex": 247,
        "instructionType": "TURN",
        "street": "Western Avenue",
        "phoneticStreet": "ˈwɛ.stən ˈæ.və.njuː",
        "phoneticStreetLanguageCode": "en-GB",
        "countryCode": "GBR",
        "junctionType": "ROUNDABOUT",
        "turnAngleInDecimalDegrees": -90,
        "roundaboutExitNumber": 1,
        "possibleCombineWithNext": false,
        "drivingSide": "LEFT",
        "maneuver": "ROUNDABOUT_LEFT",
        "message": "At the roundabout take the <roundaboutExitNumber>first</roundaboutExitNumber> exit onto <street>Western Avenue</street>",
        "mainAnnouncement": {
          "point": {
            "latitude": 51.5289032,
            "longitude": -0.282127
          },
          "pointIndex": 243,
          "maneuver": "ROUNDABOUT_LEFT",
          "distanceInMeters": 80
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.5290127,
            "longitude": -0.2829679
          },
          "pointIndex": 246,
          "maneuver": "ROUNDABOUT_LEFT",
          "distanceInMeters": 20
        }
      },
      {
        "routeOffsetInMeters": 6587,
        "travelTimeInSeconds": 1078,
        "point": {
          "latitude": 51.52652,
          "longitude": -0.27585
        },
        "pointIndex": 297,
        "instructionType": "TURN",
        "roadNumbers": [
          "A40"
        ],
        "phoneticRoadNumbers": [
          "e⁀ɪ.ˈfɔː.tɪ"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "en-GB"
        ],
        "street": "Western Avenue",
        "phoneticStreet": "ˈwɛ.stən ˈæ.və.njuː",
        "phoneticStreetLanguageCode": "en-GB",
        "countryCode": "GBR",
        "junctionType": "BIFURCATION",
        "turnAngleInDecimalDegrees": 45,
        "possibleCombineWithNext": false,
        "drivingSide": "LEFT",
        "maneuver": "KEEP_RIGHT",
        "message": "Keep right at <street>Western Avenue</street>/<roadNumber>A40</roadNumber>",
        "earlyWarningAnnouncement": {
          "point": {
            "latitude": 51.5273222,
            "longitude": -0.2843047
          },
          "pointIndex": 275,
          "maneuver": "AHEAD_KEEP_RIGHT",
          "distanceInMeters": 600
        },
        "mainAnnouncement": {
          "point": {
            "latitude": 51.5267694,
            "longitude": -0.2815871
          },
          "pointIndex": 286,
          "maneuver": "KEEP_RIGHT",
          "distanceInMeters": 400
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.5266345,
            "longitude": -0.2769949
          },
          "pointIndex": 294,
          "maneuver": "KEEP_RIGHT",
          "distanceInMeters": 80
        },
        "roadShieldReferences": [
          {
            "reference": "gbr-primary",
            "shieldContent": "A40"
          }
        ]
      },
      {
        "routeOffsetInMeters": 10807,
        "travelTimeInSeconds": 1509,
        "point": {
          "latitude": 51.51532,
          "longitude": -0.22437000000000001
        },
        "pointIndex": 414,
        "instructionType": "TURN",
        "street": "Westway",
        "phoneticStreet": "ˈwɛst.we⁀ɪ",
        "phoneticStreetLanguageCode": "en-GB",
        "countryCode": "GBR",
        "signpostText": "Westminster",
        "phoneticSignpostText": "wɛs.ˈmɪn.stəɻ",
        "phoneticSignpostTextLanguageCode": "en-GB",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": -45,
        "possibleCombineWithNext": true,
        "drivingSide": "LEFT",
        "maneuver": "TAKE_EXIT",
        "message": "Take the exit onto <street>Westway</street> toward <signpostText>Westminster</signpostText>",
        "combinedMessage": "Take the exit onto <street>Westway</street> toward <signpostText>Westminster</signpostText> then at the roundabout take the <roundaboutExitNumber>second</roundaboutExitNumber> exit onto <street>West Cross Route</street>/<roadNumber>A3220</roadNumber> toward <signpostText>Westminster</signpostText>",
        "earlyWarningAnnouncement": {
          "point": {
            "latitude": 51.5141797,
            "longitude": -0.2530104
          },
          "pointIndex": 361,
          "maneuver": "AHEAD_EXIT",
          "distanceInMeters": 2000
        },
        "mainAnnouncement": {
          "point": {
            "latitude": 51.5144362,
            "longitude": -0.2358015
          },
          "pointIndex": 395,
          "maneuver": "TAKE_EXIT",
          "distanceInMeters": 800
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.515145,
            "longitude": -0.2270472
          },
          "pointIndex": 410,
          "maneuver": "TAKE_EXIT",
          "distanceInMeters": 187
        },
        "signpostRoadShieldReferences": [
          {
            "reference": "gbr-primary",
            "shieldContent": "A3220"
          }
        ]
      },
      {
        "routeOffsetInMeters": 11006,
        "travelTimeInSeconds": 1537,
        "point": {
          "latitude": 51.51575,
          "longitude": -0.22161
        },
        "pointIndex": 423,
        "instructionType": "TURN",
        "roadNumbers": [
          "A3220"
        ],
        "phoneticRoadNumbers": [
          "e⁀ɪ.θɜː.tɪ.tuː.ˈtwɛn.tɪ"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "en-GB"
        ],
        "street": "West Cross Route",
        "phoneticStreet": "ˈwɛst ˈkɻɒs ˈɻuːt",
        "phoneticStreetLanguageCode": "en-GB",
        "countryCode": "GBR",
        "signpostText": "Westminster",
        "phoneticSignpostText": "wɛs.ˈmɪn.stəɻ",
        "phoneticSignpostTextLanguageCode": "en-GB",
        "junctionType": "ROUNDABOUT",
        "turnAngleInDecimalDegrees": 90,
        "roundaboutExitNumber": 2,
        "possibleCombineWithNext": false,
        "drivingSide": "LEFT",
        "maneuver": "ROUNDABOUT_RIGHT",
        "message": "At the roundabout take the <roundaboutExitNumber>second</roundaboutExitNumber> exit onto <street>West Cross Route</street>/<roadNumber>A3220</roadNumber> toward <signpostText>Westminster</signpostText>",
        "mainAnnouncement": {
          "point": {
            "latitude": 51.5155028,
            "longitude": -0.2229912
          },
          "pointIndex": 417,
          "maneuver": "ROUNDABOUT_RIGHT",
          "distanceInMeters": 100
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.5156846,
            "longitude": -0.2218756
          },
          "pointIndex": 421,
          "maneuver": "ROUNDABOUT_RIGHT",
          "distanceInMeters": 20
        },
        "roadShieldReferences": [
          {
            "reference": "gbr-primary",
            "shieldContent": "A3220"
          }
        ],
        "signpostRoadShieldReferences": [
          {
            "reference": "gbr-primary",
            "shieldContent": "A3220"
          }
        ]
      },
      {
        "routeOffsetInMeters": 11229,
        "travelTimeInSeconds": 1559,
        "point": {
          "latitude": 51.51509,
          "longitude": -0.2202
        },
        "pointIndex": 444,
        "instructionType": "TURN",
        "roadNumbers": [
          "A3220"
        ],
        "phoneticRoadNumbers": [
          "e⁀ɪ.θɜː.tɪ.tuː.ˈtwɛn.tɪ"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "en-GB"
        ],
        "street": "West Cross Route",
        "phoneticStreet": "ˈwɛst ˈkɻɒs ˈɻuːt",
        "phoneticStreetLanguageCode": "en-GB",
        "countryCode": "GBR",
        "junctionType": "ROUNDABOUT",
        "turnAngleInDecimalDegrees": -45,
        "roundaboutExitNumber": 0,
        "possibleCombineWithNext": false,
        "drivingSide": "LEFT",
        "maneuver": "TAKE_EXIT",
        "message": "Take the exit onto <street>West Cross Route</street>/<roadNumber>A3220</roadNumber>",
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.515829600000004,
            "longitude": -0.2200671
          },
          "pointIndex": 435,
          "maneuver": "TAKE_EXIT",
          "distanceInMeters": 92
        },
        "roadShieldReferences": [
          {
            "reference": "gbr-primary",
            "shieldContent": "A3220"
          }
        ]
      },
      {
        "routeOffsetInMeters": 12395,
        "travelTimeInSeconds": 1654,
        "point": {
          "latitude": 51.50507,
          "longitude": -0.21673
        },
        "pointIndex": 475,
        "instructionType": "TURN",
        "roadNumbers": [
          "A3220"
        ],
        "phoneticRoadNumbers": [
          "e⁀ɪ.θɜː.tɪ.tuː.ˈtwɛn.tɪ"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "en-GB"
        ],
        "street": "Holland Road",
        "phoneticStreet": "ˈhɒ.lənd ˈɻə⁀ʊd",
        "phoneticStreetLanguageCode": "en-GB",
        "countryCode": "GBR",
        "junctionType": "ROUNDABOUT",
        "turnAngleInDecimalDegrees": 0,
        "roundaboutExitNumber": 2,
        "possibleCombineWithNext": false,
        "drivingSide": "LEFT",
        "maneuver": "ROUNDABOUT_CROSS",
        "message": "At the roundabout take the <roundaboutExitNumber>second</roundaboutExitNumber> exit onto <street>Holland Road</street>/<roadNumber>A3220</roadNumber>",
        "mainAnnouncement": {
          "point": {
            "latitude": 51.50844,
            "longitude": -0.2186702
          },
          "pointIndex": 464,
          "maneuver": "ROUNDABOUT_CROSS",
          "distanceInMeters": 400
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.5057179,
            "longitude": -0.2172519
          },
          "pointIndex": 471,
          "maneuver": "ROUNDABOUT_CROSS",
          "distanceInMeters": 80
        },
        "roadShieldReferences": [
          {
            "reference": "gbr-primary",
            "shieldContent": "A3220"
          }
        ]
      },
      {
        "routeOffsetInMeters": 12501,
        "travelTimeInSeconds": 1678,
        "point": {
          "latitude": 51.50444,
          "longitude": -0.21601
        },
        "pointIndex": 485,
        "instructionType": "TURN",
        "roadNumbers": [
          "A3220"
        ],
        "phoneticRoadNumbers": [
          "e⁀ɪ.θɜː.tɪ.tuː.ˈtwɛn.tɪ"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "en-GB"
        ],
        "street": "Holland Road",
        "phoneticStreet": "ˈhɒ.lənd ˈɻə⁀ʊd",
        "phoneticStreetLanguageCode": "en-GB",
        "countryCode": "GBR",
        "junctionType": "ROUNDABOUT",
        "turnAngleInDecimalDegrees": -45,
        "roundaboutExitNumber": 0,
        "possibleCombineWithNext": false,
        "drivingSide": "LEFT",
        "maneuver": "TAKE_EXIT",
        "message": "Take the exit onto <street>Holland Road</street>/<roadNumber>A3220</roadNumber>",
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.5048555,
            "longitude": -0.2160187
          },
          "pointIndex": 480,
          "maneuver": "TAKE_EXIT",
          "distanceInMeters": 49
        },
        "roadShieldReferences": [
          {
            "reference": "gbr-primary",
            "shieldContent": "A3220"
          }
        ]
      },
      {
        "routeOffsetInMeters": 13321,
        "travelTimeInSeconds": 1795,
        "point": {
          "latitude": 51.49964,
          "longitude": -0.20797
        },
        "pointIndex": 516,
        "instructionType": "TURN",
        "roadNumbers": [
          "A3220"
        ],
        "phoneticRoadNumbers": [
          "e⁀ɪ.θɜː.tɪ.tuː.ˈtwɛn.tɪ"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "en-GB"
        ],
        "street": "Addison Road",
        "phoneticStreet": "ˈæ.dɪ.sən ˈɻə⁀ʊd",
        "phoneticStreetLanguageCode": "en-GB",
        "countryCode": "GBR",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": 45,
        "possibleCombineWithNext": true,
        "drivingSide": "LEFT",
        "maneuver": "BEAR_RIGHT",
        "message": "Bear right at <street>Addison Road</street>/<roadNumber>A3220</roadNumber>",
        "combinedMessage": "Bear right at <street>Addison Road</street>/<roadNumber>A3220</roadNumber> then turn left onto <street>Kensington High Street</street>/<roadNumber>A315</roadNumber>",
        "earlyWarningAnnouncement": {
          "point": {
            "latitude": 51.5040204,
            "longitude": -0.2158154
          },
          "pointIndex": 491,
          "maneuver": "AHEAD_RIGHT_TURN",
          "distanceInMeters": 770
        },
        "mainAnnouncement": {
          "point": {
            "latitude": 51.5014628,
            "longitude": -0.2124257
          },
          "pointIndex": 497,
          "maneuver": "BEAR_RIGHT",
          "distanceInMeters": 400
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.4996017,
            "longitude": -0.2090739
          },
          "pointIndex": 511,
          "maneuver": "BEAR_RIGHT",
          "distanceInMeters": 77
        },
        "roadShieldReferences": [
          {
            "reference": "gbr-primary",
            "shieldContent": "A3220"
          }
        ]
      },
      {
        "routeOffsetInMeters": 13698,
        "travelTimeInSeconds": 1881,
        "point": {
          "latitude": 51.49718,
          "longitude": -0.20456
        },
        "pointIndex": 532,
        "instructionType": "TURN",
        "roadNumbers": [
          "A315"
        ],
        "phoneticRoadNumbers": [
          "e⁀ɪ.θɻiː.fɪf.ˈtiːn"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "en-GB"
        ],
        "street": "Kensington High Street",
        "phoneticStreet": "ˈkɛn.zɪŋ.tn̩ ˈha⁀ɪ ˈstɻiːt",
        "phoneticStreetLanguageCode": "en-GB",
        "countryCode": "GBR",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": -90,
        "possibleCombineWithNext": false,
        "drivingSide": "LEFT",
        "maneuver": "TURN_LEFT",
        "message": "Turn left onto <street>Kensington High Street</street>/<roadNumber>A315</roadNumber>",
        "mainAnnouncement": {
          "point": {
            "latitude": 51.4991198,
            "longitude": -0.2073814
          },
          "pointIndex": 524,
          "maneuver": "TURN_LEFT",
          "distanceInMeters": 300
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.4974947,
            "longitude": -0.2048867
          },
          "pointIndex": 531,
          "maneuver": "TURN_LEFT",
          "distanceInMeters": 42
        },
        "roadShieldReferences": [
          {
            "reference": "gbr-secondary",
            "shieldContent": "A315"
          }
        ]
      },
      {
        "routeOffsetInMeters": 14167,
        "travelTimeInSeconds": 1980,
        "point": {
          "latitude": 51.49906,
          "longitude": -0.19861
        },
        "pointIndex": 561,
        "instructionType": "TURN",
        "roadNumbers": [
          "B316"
        ],
        "phoneticRoadNumbers": [
          "biː.θɻiː.sɪk.ˈstiːn"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "en-GB"
        ],
        "street": "Earl's Court Road",
        "phoneticStreet": "ˈɜːlz ˈkɔːt ˈɻə⁀ʊd",
        "phoneticStreetLanguageCode": "en-GB",
        "countryCode": "GBR",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": 90,
        "possibleCombineWithNext": true,
        "drivingSide": "LEFT",
        "maneuver": "TURN_RIGHT",
        "message": "Turn right onto <street>Earl's Court Road</street>/<roadNumber>B316</roadNumber>",
        "combinedMessage": "Turn right onto <street>Earl's Court Road</street>/<roadNumber>B316</roadNumber> then keep right at <street>Earl's Court Road</street>/<roadNumber>A3220</roadNumber>",
        "mainAnnouncement": {
          "point": {
            "latitude": 51.4979017,
            "longitude": -0.2024522
          },
          "pointIndex": 542,
          "maneuver": "TURN_RIGHT",
          "distanceInMeters": 300
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.4990219,
            "longitude": -0.1988018
          },
          "pointIndex": 558,
          "maneuver": "TURN_RIGHT",
          "distanceInMeters": 15
        },
        "roadShieldReferences": [
          {
            "reference": "gbr-secondary",
            "shieldContent": "B316"
          }
        ]
      },
      {
        "routeOffsetInMeters": 14684,
        "travelTimeInSeconds": 2174,
        "point": {
          "latitude": 51.4949,
          "longitude": -0.19574
        },
        "pointIndex": 584,
        "instructionType": "TURN",
        "roadNumbers": [
          "A3220"
        ],
        "phoneticRoadNumbers": [
          "e⁀ɪ.θɜː.tɪ.tuː.ˈtwɛn.tɪ"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "en-GB"
        ],
        "street": "Earl's Court Road",
        "phoneticStreet": "ˈɜːlz ˈkɔːt ˈɻə⁀ʊd",
        "phoneticStreetLanguageCode": "en-GB",
        "countryCode": "GBR",
        "junctionType": "BIFURCATION",
        "turnAngleInDecimalDegrees": 45,
        "possibleCombineWithNext": false,
        "drivingSide": "LEFT",
        "maneuver": "KEEP_RIGHT",
        "message": "Keep right at <street>Earl's Court Road</street>/<roadNumber>A3220</roadNumber>",
        "mainAnnouncement": {
          "point": {
            "latitude": 51.4981822,
            "longitude": -0.1980599
          },
          "pointIndex": 566,
          "maneuver": "KEEP_RIGHT",
          "distanceInMeters": 400
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.4951408,
            "longitude": -0.195959
          },
          "pointIndex": 582,
          "maneuver": "KEEP_RIGHT",
          "distanceInMeters": 31
        },
        "roadShieldReferences": [
          {
            "reference": "gbr-primary",
            "shieldContent": "A3220"
          }
        ]
      },
      {
        "routeOffsetInMeters": 16667,
        "travelTimeInSeconds": 2574,
        "point": {
          "latitude": 51.48026,
          "longitude": -0.18004
        },
        "pointIndex": 665,
        "instructionType": "TURN",
        "roadNumbers": [
          "A3220",
          "E30"
        ],
        "phoneticRoadNumbers": [
          "e⁀ɪ.θɜː.tɪ.tuː.ˈtwɛn.tɪ",
          "iː.ˈθɜː.tɪ"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "en-GB",
          "en-GB"
        ],
        "street": "Edith Grove",
        "phoneticStreet": "ˈiː.dɪθ ˈgɻə⁀ʊv",
        "phoneticStreetLanguageCode": "en-GB",
        "countryCode": "GBR",
        "junctionType": "BIFURCATION",
        "turnAngleInDecimalDegrees": -45,
        "possibleCombineWithNext": false,
        "drivingSide": "LEFT",
        "maneuver": "KEEP_LEFT",
        "message": "Keep left at <street>Edith Grove</street>/<roadNumber>A3220</roadNumber>/<roadNumber>E30</roadNumber>",
        "earlyWarningAnnouncement": {
          "point": {
            "latitude": 51.4860307,
            "longitude": -0.1867803
          },
          "pointIndex": 640,
          "maneuver": "AHEAD_KEEP_LEFT",
          "distanceInMeters": 800
        },
        "mainAnnouncement": {
          "point": {
            "latitude": 51.4832783,
            "longitude": -0.1831444
          },
          "pointIndex": 651,
          "maneuver": "KEEP_LEFT",
          "distanceInMeters": 400
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.480845,
            "longitude": -0.1807039
          },
          "pointIndex": 662,
          "maneuver": "KEEP_LEFT",
          "distanceInMeters": 80
        },
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
        "routeOffsetInMeters": 21281,
        "travelTimeInSeconds": 3527,
        "point": {
          "latitude": 51.49462,
          "longitude": -0.12518
        },
        "pointIndex": 826,
        "instructionType": "TURN",
        "roadNumbers": [
          "A3212"
        ],
        "phoneticRoadNumbers": [
          "e⁀ɪ.θɜː.tɪ.tuː.ˈtwɛlv"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "en-GB"
        ],
        "street": "Millbank",
        "phoneticStreet": "ˈmɪl.bæŋk",
        "phoneticStreetLanguageCode": "en-GB",
        "countryCode": "GBR",
        "junctionType": "ROUNDABOUT",
        "turnAngleInDecimalDegrees": 0,
        "roundaboutExitNumber": 2,
        "possibleCombineWithNext": false,
        "drivingSide": "LEFT",
        "maneuver": "ROUNDABOUT_CROSS",
        "message": "At the roundabout take the <roundaboutExitNumber>second</roundaboutExitNumber> exit onto <street>Millbank</street>/<roadNumber>A3212</roadNumber>",
        "mainAnnouncement": {
          "point": {
            "latitude": 51.491953,
            "longitude": -0.1255301
          },
          "pointIndex": 815,
          "maneuver": "ROUNDABOUT_CROSS",
          "distanceInMeters": 300
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.4939848,
            "longitude": -0.1251841
          },
          "pointIndex": 822,
          "maneuver": "ROUNDABOUT_CROSS",
          "distanceInMeters": 70
        },
        "roadShieldReferences": [
          {
            "reference": "gbr-secondary",
            "shieldContent": "A3212"
          }
        ]
      },
      {
        "routeOffsetInMeters": 21921,
        "travelTimeInSeconds": 3718,
        "point": {
          "latitude": 51.50012,
          "longitude": -0.12629
        },
        "pointIndex": 866,
        "instructionType": "LOCATION_ARRIVAL",
        "roadNumbers": [
          "A3212"
        ],
        "phoneticRoadNumbers": [
          "e⁀ɪ.θɜː.tɪ.tuː.ˈtwɛlv"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "en-GB"
        ],
        "street": "Saint Margaret Street",
        "phoneticStreet": "ˈsn̩t ˈmɑː.gɻət ˈstɻiːt",
        "phoneticStreetLanguageCode": "en-GB",
        "countryCode": "GBR",
        "possibleCombineWithNext": false,
        "drivingSide": "LEFT",
        "maneuver": "ARRIVE_RIGHT",
        "message": "You have arrived at <street>Saint Margaret Street</street>/<roadNumber>A3212</roadNumber>. Your destination is on the right",
        "mainAnnouncement": {
          "point": {
            "latitude": 51.4983615,
            "longitude": -0.1257679
          },
          "pointIndex": 854,
          "maneuver": "ARRIVE_RIGHT",
          "distanceInMeters": 200
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.4998536,
            "longitude": -0.1262288
          },
          "pointIndex": 860,
          "maneuver": "ARRIVE_RIGHT",
          "distanceInMeters": 30
        },
        "roadShieldReferences": [
          {
            "reference": "gbr-secondary",
            "shieldContent": "A3212"
          }
        ]
      }
    ],
    "instructionGroups": [
      {
        "firstInstructionIndex": 0,
        "lastInstructionIndex": 3,
        "groupMessage": "Leave from <street>Forty Avenue</street>. Take the <roadNumber>A4088</roadNumber> and follow <street>Bridge Road</street>/<roadNumber>A4089</roadNumber>. Then take the <street>Empire Way</street>/<roadNumber>B4565</roadNumber>",
        "groupLengthInMeters": 3134
      },
      {
        "firstInstructionIndex": 4,
        "lastInstructionIndex": 7,
        "groupMessage": "Take the <street>North Circular Road</street>/<roadNumber>A406</roadNumber>",
        "groupLengthInMeters": 1526
      },
      {
        "firstInstructionIndex": 8,
        "lastInstructionIndex": 10,
        "groupMessage": "Take the <street>Whitby Avenue</street>, <street>Rainsford Road</street>",
        "groupLengthInMeters": 778
      },
      {
        "firstInstructionIndex": 11,
        "lastInstructionIndex": 13,
        "groupMessage": "Take the <street>Western Avenue</street>/<roadNumber>A40</roadNumber>",
        "groupLengthInMeters": 5369
      },
      {
        "firstInstructionIndex": 14,
        "lastInstructionIndex": 20,
        "groupMessage": "Take the <street>West Cross Route</street>, <street>Holland Road</street>, <street>Addison Road</street>/<roadNumber>A3220</roadNumber> toward <signpostText>Westminster</signpostText> and continue to <street>Kensington High Street</street>/<roadNumber>A315</roadNumber>",
        "groupLengthInMeters": 3360
      },
      {
        "firstInstructionIndex": 21,
        "lastInstructionIndex": 23,
        "groupMessage": "Follow <street>Earl's Court Road</street>/<roadNumber>B316</roadNumber> then take the <street>Earl's Court Road</street>, <street>Edith Grove</street>/<roadNumber>A3220</roadNumber>/<roadNumber>E30</roadNumber>",
        "groupLengthInMeters": 7114
      },
      {
        "firstInstructionIndex": 24,
        "lastInstructionIndex": 25,
        "groupMessage": "Take the <street>Millbank</street>/<roadNumber>A3212</roadNumber>. Continue to your destination at <street>Saint Margaret Street</street>",
        "groupLengthInMeters": 640
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
      "pointIndex": 3,
      "travelTimeInSeconds": 13,
      "distanceInMeters": 84
    },
    {
      "pointIndex": 6,
      "travelTimeInSeconds": 45,
      "distanceInMeters": 161
    },
    {
      "pointIndex": 8,
      "travelTimeInSeconds": 73,
      "distanceInMeters": 198
    },
    {
      "pointIndex": 22,
      "travelTimeInSeconds": 128,
      "distanceInMeters": 570
    },
    {
      "pointIndex": 32,
      "travelTimeInSeconds": 151,
      "distanceInMeters": 746
    },
    {
      "pointIndex": 35,
      "travelTimeInSeconds": 167,
      "distanceInMeters": 802
    },
    {
      "pointIndex": 40,
      "travelTimeInSeconds": 191,
      "distanceInMeters": 992
    },
    {
      "pointIndex": 44,
      "travelTimeInSeconds": 220,
      "distanceInMeters": 1100
    },
    {
      "pointIndex": 60,
      "travelTimeInSeconds": 266,
      "distanceInMeters": 1304
    },
    {
      "pointIndex": 73,
      "travelTimeInSeconds": 349,
      "distanceInMeters": 1545
    },
    {
      "pointIndex": 78,
      "travelTimeInSeconds": 377,
      "distanceInMeters": 1653
    },
    {
      "pointIndex": 83,
      "travelTimeInSeconds": 390,
      "distanceInMeters": 1689
    },
    {
      "pointIndex": 100,
      "travelTimeInSeconds": 454,
      "distanceInMeters": 2259
    },
    {
      "pointIndex": 121,
      "travelTimeInSeconds": 542,
      "distanceInMeters": 3012
    },
    {
      "pointIndex": 123,
      "travelTimeInSeconds": 582,
      "distanceInMeters": 3078
    },
    {
      "pointIndex": 128,
      "travelTimeInSeconds": 593,
      "distanceInMeters": 3134
    },
    {
      "pointIndex": 129,
      "travelTimeInSeconds": 603,
      "distanceInMeters": 3139
    },
    {
      "pointIndex": 155,
      "travelTimeInSeconds": 655,
      "distanceInMeters": 3867
    },
    {
      "pointIndex": 174,
      "travelTimeInSeconds": 722,
      "distanceInMeters": 4260
    },
    {
      "pointIndex": 182,
      "travelTimeInSeconds": 793,
      "distanceInMeters": 4528
    },
    {
      "pointIndex": 185,
      "travelTimeInSeconds": 818,
      "distanceInMeters": 4660
    },
    {
      "pointIndex": 187,
      "travelTimeInSeconds": 835,
      "distanceInMeters": 4691
    },
    {
      "pointIndex": 203,
      "travelTimeInSeconds": 887,
      "distanceInMeters": 5116
    },
    {
      "pointIndex": 214,
      "travelTimeInSeconds": 907,
      "distanceInMeters": 5244
    },
    {
      "pointIndex": 228,
      "travelTimeInSeconds": 930,
      "distanceInMeters": 5451
    },
    {
      "pointIndex": 252,
      "travelTimeInSeconds": 962,
      "distanceInMeters": 5681
    },
    {
      "pointIndex": 255,
      "travelTimeInSeconds": 973,
      "distanceInMeters": 5695
    },
    {
      "pointIndex": 264,
      "travelTimeInSeconds": 999,
      "distanceInMeters": 5816
    },
    {
      "pointIndex": 271,
      "travelTimeInSeconds": 1023,
      "distanceInMeters": 5898
    },
    {
      "pointIndex": 298,
      "travelTimeInSeconds": 1084,
      "distanceInMeters": 6631
    },
    {
      "pointIndex": 303,
      "travelTimeInSeconds": 1102,
      "distanceInMeters": 6734
    },
    {
      "pointIndex": 320,
      "travelTimeInSeconds": 1155,
      "distanceInMeters": 7422
    },
    {
      "pointIndex": 331,
      "travelTimeInSeconds": 1219,
      "distanceInMeters": 7677
    },
    {
      "pointIndex": 364,
      "travelTimeInSeconds": 1332,
      "distanceInMeters": 8891
    },
    {
      "pointIndex": 366,
      "travelTimeInSeconds": 1355,
      "distanceInMeters": 9002
    },
    {
      "pointIndex": 369,
      "travelTimeInSeconds": 1385,
      "distanceInMeters": 9115
    },
    {
      "pointIndex": 420,
      "travelTimeInSeconds": 1521,
      "distanceInMeters": 10942
    },
    {
      "pointIndex": 430,
      "travelTimeInSeconds": 1542,
      "distanceInMeters": 11060
    },
    {
      "pointIndex": 460,
      "travelTimeInSeconds": 1592,
      "distanceInMeters": 11705
    },
    {
      "pointIndex": 471,
      "travelTimeInSeconds": 1627,
      "distanceInMeters": 12259
    },
    {
      "pointIndex": 493,
      "travelTimeInSeconds": 1686,
      "distanceInMeters": 12566
    },
    {
      "pointIndex": 497,
      "travelTimeInSeconds": 1727,
      "distanceInMeters": 12749
    },
    {
      "pointIndex": 527,
      "travelTimeInSeconds": 1819,
      "distanceInMeters": 13476
    },
    {
      "pointIndex": 531,
      "travelTimeInSeconds": 1851,
      "distanceInMeters": 13630
    },
    {
      "pointIndex": 534,
      "travelTimeInSeconds": 1893,
      "distanceInMeters": 13723
    },
    {
      "pointIndex": 549,
      "travelTimeInSeconds": 1927,
      "distanceInMeters": 13992
    },
    {
      "pointIndex": 557,
      "travelTimeInSeconds": 1956,
      "distanceInMeters": 14120
    },
    {
      "pointIndex": 561,
      "travelTimeInSeconds": 1980,
      "distanceInMeters": 14167
    },
    {
      "pointIndex": 562,
      "travelTimeInSeconds": 1981,
      "distanceInMeters": 14177
    },
    {
      "pointIndex": 563,
      "travelTimeInSeconds": 2003,
      "distanceInMeters": 14183
    },
    {
      "pointIndex": 575,
      "travelTimeInSeconds": 2059,
      "distanceInMeters": 14440
    },
    {
      "pointIndex": 579,
      "travelTimeInSeconds": 2123,
      "distanceInMeters": 14560
    },
    {
      "pointIndex": 582,
      "travelTimeInSeconds": 2142,
      "distanceInMeters": 14633
    },
    {
      "pointIndex": 584,
      "travelTimeInSeconds": 2174,
      "distanceInMeters": 14684
    },
    {
      "pointIndex": 585,
      "travelTimeInSeconds": 2202,
      "distanceInMeters": 14718
    },
    {
      "pointIndex": 596,
      "travelTimeInSeconds": 2255,
      "distanceInMeters": 14908
    },
    {
      "pointIndex": 606,
      "travelTimeInSeconds": 2304,
      "distanceInMeters": 15092
    },
    {
      "pointIndex": 629,
      "travelTimeInSeconds": 2378,
      "distanceInMeters": 15461
    },
    {
      "pointIndex": 641,
      "travelTimeInSeconds": 2431,
      "distanceInMeters": 15927
    },
    {
      "pointIndex": 645,
      "travelTimeInSeconds": 2477,
      "distanceInMeters": 16129
    },
    {
      "pointIndex": 656,
      "travelTimeInSeconds": 2520,
      "distanceInMeters": 16417
    },
    {
      "pointIndex": 661,
      "travelTimeInSeconds": 2545,
      "distanceInMeters": 16524
    },
    {
      "pointIndex": 667,
      "travelTimeInSeconds": 2582,
      "distanceInMeters": 16692
    },
    {
      "pointIndex": 685,
      "travelTimeInSeconds": 2741,
      "distanceInMeters": 17140
    },
    {
      "pointIndex": 688,
      "travelTimeInSeconds": 2782,
      "distanceInMeters": 17203
    },
    {
      "pointIndex": 697,
      "travelTimeInSeconds": 2836,
      "distanceInMeters": 17581
    },
    {
      "pointIndex": 705,
      "travelTimeInSeconds": 2874,
      "distanceInMeters": 17699
    },
    {
      "pointIndex": 710,
      "travelTimeInSeconds": 2910,
      "distanceInMeters": 17864
    },
    {
      "pointIndex": 719,
      "travelTimeInSeconds": 2957,
      "distanceInMeters": 18230
    },
    {
      "pointIndex": 734,
      "travelTimeInSeconds": 3032,
      "distanceInMeters": 18755
    },
    {
      "pointIndex": 737,
      "travelTimeInSeconds": 3055,
      "distanceInMeters": 18835
    },
    {
      "pointIndex": 743,
      "travelTimeInSeconds": 3076,
      "distanceInMeters": 18896
    },
    {
      "pointIndex": 760,
      "travelTimeInSeconds": 3139,
      "distanceInMeters": 19372
    },
    {
      "pointIndex": 771,
      "travelTimeInSeconds": 3185,
      "distanceInMeters": 19751
    },
    {
      "pointIndex": 793,
      "travelTimeInSeconds": 3258,
      "distanceInMeters": 20314
    },
    {
      "pointIndex": 794,
      "travelTimeInSeconds": 3287,
      "distanceInMeters": 20379
    },
    {
      "pointIndex": 796,
      "travelTimeInSeconds": 3331,
      "distanceInMeters": 20433
    },
    {
      "pointIndex": 799,
      "travelTimeInSeconds": 3388,
      "distanceInMeters": 20465
    },
    {
      "pointIndex": 801,
      "travelTimeInSeconds": 3419,
      "distanceInMeters": 20503
    },
    {
      "pointIndex": 823,
      "travelTimeInSeconds": 3516,
      "distanceInMeters": 21232
    },
    {
      "pointIndex": 840,
      "travelTimeInSeconds": 3538,
      "distanceInMeters": 21334
    },
    {
      "pointIndex": 842,
      "travelTimeInSeconds": 3549,
      "distanceInMeters": 21351
    },
    {
      "pointIndex": 853,
      "travelTimeInSeconds": 3603,
      "distanceInMeters": 21674
    },
    {
      "pointIndex": 858,
      "travelTimeInSeconds": 3664,
      "distanceInMeters": 21847
    },
    {
      "pointIndex": 866,
      "travelTimeInSeconds": 3718,
      "distanceInMeters": 21921
    }
  ]
};


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

/// This func is called if the Response Checkbox is Enabled. You can modify the Response Data here before it goes to the client
/// e.g. Add/Update/Remove: headers, statusCode, comment, color and body (json, plain-text, base64 encoded string)
///
async function onResponse(context, url, request, response) {
  let now = new Date();

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
