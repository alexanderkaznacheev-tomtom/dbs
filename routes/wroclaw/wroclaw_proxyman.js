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
        "lengthInMeters": 11000,
        "travelTimeInSeconds": 1864,
        "trafficDelayInSeconds": 7,
        "trafficLengthInMeters": 21,
        "departureTime": "2023-12-06T11:27:27+01:00",
        "arrivalTime": "2023-12-06T11:58:31+01:00",
        "deviationDistance": 553,
        "deviationTime": 219,
        "deviationPoint": {
          "latitude": 51.0373655,
          "longitude": 16.9863573
        }
      },
      "legs": [
        {
          "summary": {
            "lengthInMeters": 11000,
            "travelTimeInSeconds": 1864,
            "trafficDelayInSeconds": 7,
            "trafficLengthInMeters": 21,
            "departureTime": "2023-12-06T11:27:27+01:00",
            "arrivalTime": "2023-12-06T11:58:31+01:00"
          },
          "points": [
            {
              "latitude": 51.0345365,
              "longitude": 16.9914519
            },
            {
              "latitude": 51.0344768,
              "longitude": 16.9915769
            },
            {
              "latitude": 51.0346833,
              "longitude": 16.991145
            },
            {
              "latitude": 51.0348496,
              "longitude": 16.9912711
            },
            {
              "latitude": 51.0351929,
              "longitude": 16.9915822
            },
            {
              "latitude": 51.0354906,
              "longitude": 16.9907829
            },
            {
              "latitude": 51.0363463,
              "longitude": 16.9883743
            },
            {
              "latitude": 51.0371241,
              "longitude": 16.9868052
            },
            {
              "latitude": 51.0373253,
              "longitude": 16.9864511
            },
            {
              "latitude": 51.0373655,
              "longitude": 16.9863573
            },
            {
              "latitude": 51.0375157,
              "longitude": 16.9864029
            },
            {
              "latitude": 51.0376203,
              "longitude": 16.9864056
            },
            {
              "latitude": 51.0377249,
              "longitude": 16.9863707
            },
            {
              "latitude": 51.0378456,
              "longitude": 16.9863063
            },
            {
              "latitude": 51.0381433,
              "longitude": 16.9861561
            },
            {
              "latitude": 51.0382506,
              "longitude": 16.9861454
            },
            {
              "latitude": 51.0383552,
              "longitude": 16.9861802
            },
            {
              "latitude": 51.0385698,
              "longitude": 16.9863197
            },
            {
              "latitude": 51.0386449,
              "longitude": 16.9863868
            },
            {
              "latitude": 51.038771,
              "longitude": 16.9865048
            },
            {
              "latitude": 51.0389668,
              "longitude": 16.9866872
            },
            {
              "latitude": 51.0392565,
              "longitude": 16.9870225
            },
            {
              "latitude": 51.0396561,
              "longitude": 16.9874811
            },
            {
              "latitude": 51.0401174,
              "longitude": 16.9880176
            },
            {
              "latitude": 51.0405895,
              "longitude": 16.9885325
            },
            {
              "latitude": 51.0407478,
              "longitude": 16.9887364
            },
            {
              "latitude": 51.0407746,
              "longitude": 16.9887686
            },
            {
              "latitude": 51.0411528,
              "longitude": 16.9891709
            },
            {
              "latitude": 51.0412467,
              "longitude": 16.9892809
            },
            {
              "latitude": 51.0412762,
              "longitude": 16.9893211
            },
            {
              "latitude": 51.0416007,
              "longitude": 16.98971
            },
            {
              "latitude": 51.0417375,
              "longitude": 16.9898736
            },
            {
              "latitude": 51.0424805,
              "longitude": 16.990732
            },
            {
              "latitude": 51.042864,
              "longitude": 16.9911745
            },
            {
              "latitude": 51.0434836,
              "longitude": 16.9919202
            },
            {
              "latitude": 51.044189,
              "longitude": 16.9928429
            },
            {
              "latitude": 51.0445002,
              "longitude": 16.9932559
            },
            {
              "latitude": 51.0445806,
              "longitude": 16.9933552
            },
            {
              "latitude": 51.0449615,
              "longitude": 16.9938111
            },
            {
              "latitude": 51.0457823,
              "longitude": 16.9948518
            },
            {
              "latitude": 51.0459405,
              "longitude": 16.9950852
            },
            {
              "latitude": 51.0460639,
              "longitude": 16.9952729
            },
            {
              "latitude": 51.0462731,
              "longitude": 16.9955868
            },
            {
              "latitude": 51.0470697,
              "longitude": 16.9968152
            },
            {
              "latitude": 51.0471663,
              "longitude": 16.996944
            },
            {
              "latitude": 51.047692,
              "longitude": 16.9977191
            },
            {
              "latitude": 51.0481024,
              "longitude": 16.9982851
            },
            {
              "latitude": 51.0483786,
              "longitude": 16.9986928
            },
            {
              "latitude": 51.0489097,
              "longitude": 16.9994572
            },
            {
              "latitude": 51.0490331,
              "longitude": 16.9996208
            },
            {
              "latitude": 51.0492101,
              "longitude": 16.9998434
            },
            {
              "latitude": 51.0495079,
              "longitude": 17.0002082
            },
            {
              "latitude": 51.049929,
              "longitude": 17.0007044
            },
            {
              "latitude": 51.0505244,
              "longitude": 17.0014179
            },
            {
              "latitude": 51.0507336,
              "longitude": 17.0016459
            },
            {
              "latitude": 51.0508355,
              "longitude": 17.0017558
            },
            {
              "latitude": 51.0514337,
              "longitude": 17.0023218
            },
            {
              "latitude": 51.0521793,
              "longitude": 17.0029387
            },
            {
              "latitude": 51.0530269,
              "longitude": 17.0035771
            },
            {
              "latitude": 51.0544458,
              "longitude": 17.0046043
            },
            {
              "latitude": 51.0548991,
              "longitude": 17.0048994
            },
            {
              "latitude": 51.0552934,
              "longitude": 17.0051381
            },
            {
              "latitude": 51.0554194,
              "longitude": 17.0052052
            },
            {
              "latitude": 51.0557467,
              "longitude": 17.0053312
            },
            {
              "latitude": 51.0561785,
              "longitude": 17.0054707
            },
            {
              "latitude": 51.0563797,
              "longitude": 17.0055404
            },
            {
              "latitude": 51.0566908,
              "longitude": 17.0056665
            },
            {
              "latitude": 51.0569912,
              "longitude": 17.0058247
            },
            {
              "latitude": 51.0578173,
              "longitude": 17.006329
            },
            {
              "latitude": 51.0584798,
              "longitude": 17.0067072
            },
            {
              "latitude": 51.0586247,
              "longitude": 17.0068038
            },
            {
              "latitude": 51.0586971,
              "longitude": 17.0068359
            },
            {
              "latitude": 51.0590458,
              "longitude": 17.0069861
            },
            {
              "latitude": 51.059137,
              "longitude": 17.0070237
            },
            {
              "latitude": 51.0593355,
              "longitude": 17.0070961
            },
            {
              "latitude": 51.0593328,
              "longitude": 17.0071444
            },
            {
              "latitude": 51.0593355,
              "longitude": 17.007198
            },
            {
              "latitude": 51.0593462,
              "longitude": 17.0072463
            },
            {
              "latitude": 51.0593623,
              "longitude": 17.0072892
            },
            {
              "latitude": 51.0593864,
              "longitude": 17.0073268
            },
            {
              "latitude": 51.0594133,
              "longitude": 17.0073536
            },
            {
              "latitude": 51.0594454,
              "longitude": 17.0073697
            },
            {
              "latitude": 51.0594562,
              "longitude": 17.0073724
            },
            {
              "latitude": 51.0594803,
              "longitude": 17.0073751
            },
            {
              "latitude": 51.0595044,
              "longitude": 17.0073724
            },
            {
              "latitude": 51.059534,
              "longitude": 17.0073563
            },
            {
              "latitude": 51.0595661,
              "longitude": 17.0073268
            },
            {
              "latitude": 51.0595903,
              "longitude": 17.0072892
            },
            {
              "latitude": 51.0596117,
              "longitude": 17.0072329
            },
            {
              "latitude": 51.0597217,
              "longitude": 17.0073026
            },
            {
              "latitude": 51.0598773,
              "longitude": 17.0073724
            },
            {
              "latitude": 51.0601589,
              "longitude": 17.0074931
            },
            {
              "latitude": 51.0607731,
              "longitude": 17.0077184
            },
            {
              "latitude": 51.0610735,
              "longitude": 17.0078284
            },
            {
              "latitude": 51.0613739,
              "longitude": 17.007941
            },
            {
              "latitude": 51.0618889,
              "longitude": 17.0081609
            },
            {
              "latitude": 51.0621491,
              "longitude": 17.0083058
            },
            {
              "latitude": 51.0636967,
              "longitude": 17.0091587
            },
            {
              "latitude": 51.0639167,
              "longitude": 17.0092767
            },
            {
              "latitude": 51.064437,
              "longitude": 17.0095637
            },
            {
              "latitude": 51.0644531,
              "longitude": 17.0095745
            },
            {
              "latitude": 51.0645685,
              "longitude": 17.0096576
            },
            {
              "latitude": 51.0647938,
              "longitude": 17.0098186
            },
            {
              "latitude": 51.0652953,
              "longitude": 17.0100492
            },
            {
              "latitude": 51.0662207,
              "longitude": 17.0102075
            },
            {
              "latitude": 51.0663146,
              "longitude": 17.0102584
            },
            {
              "latitude": 51.0675457,
              "longitude": 17.0111087
            },
            {
              "latitude": 51.0685784,
              "longitude": 17.0117792
            },
            {
              "latitude": 51.0691336,
              "longitude": 17.0121628
            },
            {
              "latitude": 51.0693777,
              "longitude": 17.0124096
            },
            {
              "latitude": 51.0701394,
              "longitude": 17.0117015
            },
            {
              "latitude": 51.0704747,
              "longitude": 17.0113394
            },
            {
              "latitude": 51.0706142,
              "longitude": 17.0111302
            },
            {
              "latitude": 51.0707054,
              "longitude": 17.010929
            },
            {
              "latitude": 51.0707349,
              "longitude": 17.0108512
            },
            {
              "latitude": 51.0708985,
              "longitude": 17.0109558
            },
            {
              "latitude": 51.0715449,
              "longitude": 17.0112965
            },
            {
              "latitude": 51.0717863,
              "longitude": 17.0114091
            },
            {
              "latitude": 51.0718292,
              "longitude": 17.0114332
            },
            {
              "latitude": 51.0718963,
              "longitude": 17.0114788
            },
            {
              "latitude": 51.0719714,
              "longitude": 17.0115432
            },
            {
              "latitude": 51.0720143,
              "longitude": 17.0115861
            },
            {
              "latitude": 51.0721269,
              "longitude": 17.0117337
            },
            {
              "latitude": 51.0722047,
              "longitude": 17.0118919
            },
            {
              "latitude": 51.0722584,
              "longitude": 17.0120367
            },
            {
              "latitude": 51.07232,
              "longitude": 17.0122406
            },
            {
              "latitude": 51.0723871,
              "longitude": 17.0124874
            },
            {
              "latitude": 51.0725212,
              "longitude": 17.0129594
            },
            {
              "latitude": 51.07265,
              "longitude": 17.0134047
            },
            {
              "latitude": 51.0729879,
              "longitude": 17.0145446
            },
            {
              "latitude": 51.0730228,
              "longitude": 17.0146385
            },
            {
              "latitude": 51.0731408,
              "longitude": 17.0148906
            },
            {
              "latitude": 51.0731864,
              "longitude": 17.0149738
            },
            {
              "latitude": 51.0733339,
              "longitude": 17.0151937
            },
            {
              "latitude": 51.0734224,
              "longitude": 17.0153037
            },
            {
              "latitude": 51.0736424,
              "longitude": 17.0155182
            },
            {
              "latitude": 51.073747,
              "longitude": 17.0156068
            },
            {
              "latitude": 51.0740635,
              "longitude": 17.0158964
            },
            {
              "latitude": 51.0744148,
              "longitude": 17.0162049
            },
            {
              "latitude": 51.0753804,
              "longitude": 17.0170686
            },
            {
              "latitude": 51.0763192,
              "longitude": 17.0179456
            },
            {
              "latitude": 51.0767028,
              "longitude": 17.0183077
            },
            {
              "latitude": 51.0769683,
              "longitude": 17.0185545
            },
            {
              "latitude": 51.0770676,
              "longitude": 17.0186484
            },
            {
              "latitude": 51.0772446,
              "longitude": 17.0188093
            },
            {
              "latitude": 51.0775664,
              "longitude": 17.0191178
            },
            {
              "latitude": 51.07887,
              "longitude": 17.0203489
            },
            {
              "latitude": 51.0789102,
              "longitude": 17.0203865
            },
            {
              "latitude": 51.0798463,
              "longitude": 17.0212582
            },
            {
              "latitude": 51.080195,
              "longitude": 17.02158
            },
            {
              "latitude": 51.0805893,
              "longitude": 17.0219368
            },
            {
              "latitude": 51.0812438,
              "longitude": 17.0225617
            },
            {
              "latitude": 51.0813859,
              "longitude": 17.0227012
            },
            {
              "latitude": 51.0820994,
              "longitude": 17.0234093
            },
            {
              "latitude": 51.0826465,
              "longitude": 17.0239645
            },
            {
              "latitude": 51.0829899,
              "longitude": 17.0243078
            },
            {
              "latitude": 51.0832313,
              "longitude": 17.0245358
            },
            {
              "latitude": 51.0832742,
              "longitude": 17.0245761
            },
            {
              "latitude": 51.0834593,
              "longitude": 17.0247611
            },
            {
              "latitude": 51.0837409,
              "longitude": 17.0249972
            },
            {
              "latitude": 51.0837999,
              "longitude": 17.0250508
            },
            {
              "latitude": 51.0840145,
              "longitude": 17.0252225
            },
            {
              "latitude": 51.0840547,
              "longitude": 17.0249194
            },
            {
              "latitude": 51.0841057,
              "longitude": 17.0245492
            },
            {
              "latitude": 51.0841486,
              "longitude": 17.0242301
            },
            {
              "latitude": 51.0841674,
              "longitude": 17.0241281
            },
            {
              "latitude": 51.0842586,
              "longitude": 17.0235622
            },
            {
              "latitude": 51.0846314,
              "longitude": 17.0216739
            },
            {
              "latitude": 51.0847038,
              "longitude": 17.0212555
            },
            {
              "latitude": 51.0847467,
              "longitude": 17.020998
            },
            {
              "latitude": 51.084787,
              "longitude": 17.0207351
            },
            {
              "latitude": 51.0849345,
              "longitude": 17.0198339
            },
            {
              "latitude": 51.0850418,
              "longitude": 17.0193592
            },
            {
              "latitude": 51.0851625,
              "longitude": 17.0189568
            },
            {
              "latitude": 51.0852832,
              "longitude": 17.0185867
            },
            {
              "latitude": 51.0854146,
              "longitude": 17.018128
            },
            {
              "latitude": 51.0854226,
              "longitude": 17.0180878
            },
            {
              "latitude": 51.0854521,
              "longitude": 17.0179376
            },
            {
              "latitude": 51.0855943,
              "longitude": 17.0178035
            },
            {
              "latitude": 51.0857633,
              "longitude": 17.0177364
            },
            {
              "latitude": 51.0858813,
              "longitude": 17.0176908
            },
            {
              "latitude": 51.0862488,
              "longitude": 17.017597
            },
            {
              "latitude": 51.0864258,
              "longitude": 17.017554
            },
            {
              "latitude": 51.0869032,
              "longitude": 17.0174387
            },
            {
              "latitude": 51.0879305,
              "longitude": 17.0171812
            },
            {
              "latitude": 51.0892877,
              "longitude": 17.0168191
            },
            {
              "latitude": 51.0893306,
              "longitude": 17.0170015
            },
            {
              "latitude": 51.0894513,
              "longitude": 17.0173073
            },
            {
              "latitude": 51.0896096,
              "longitude": 17.0175835
            },
            {
              "latitude": 51.0897169,
              "longitude": 17.0176908
            },
            {
              "latitude": 51.0898483,
              "longitude": 17.017774
            },
            {
              "latitude": 51.0900253,
              "longitude": 17.0178384
            },
            {
              "latitude": 51.0901487,
              "longitude": 17.0178625
            },
            {
              "latitude": 51.0902506,
              "longitude": 17.0178598
            },
            {
              "latitude": 51.0903955,
              "longitude": 17.0178276
            },
            {
              "latitude": 51.0904947,
              "longitude": 17.0177901
            },
            {
              "latitude": 51.0906261,
              "longitude": 17.0176774
            },
            {
              "latitude": 51.0906959,
              "longitude": 17.0175889
            },
            {
              "latitude": 51.0907146,
              "longitude": 17.0175648
            },
            {
              "latitude": 51.0908219,
              "longitude": 17.0173985
            },
            {
              "latitude": 51.0923696,
              "longitude": 17.0192546
            },
            {
              "latitude": 51.0933405,
              "longitude": 17.0204186
            },
            {
              "latitude": 51.0945797,
              "longitude": 17.0218831
            },
            {
              "latitude": 51.095379,
              "longitude": 17.0228139
            },
            {
              "latitude": 51.0969615,
              "longitude": 17.0246834
            },
            {
              "latitude": 51.0974175,
              "longitude": 17.0252198
            },
            {
              "latitude": 51.0975194,
              "longitude": 17.0253298
            },
            {
              "latitude": 51.0979915,
              "longitude": 17.0258421
            },
            {
              "latitude": 51.0981256,
              "longitude": 17.0260003
            },
            {
              "latitude": 51.0983321,
              "longitude": 17.0262229
            },
            {
              "latitude": 51.0987478,
              "longitude": 17.0266414
            },
            {
              "latitude": 51.098882,
              "longitude": 17.0267728
            },
            {
              "latitude": 51.098949,
              "longitude": 17.0268479
            },
            {
              "latitude": 51.0990429,
              "longitude": 17.0269579
            },
            {
              "latitude": 51.0990939,
              "longitude": 17.0270249
            },
            {
              "latitude": 51.0991529,
              "longitude": 17.0270893
            },
            {
              "latitude": 51.0992467,
              "longitude": 17.0271859
            },
            {
              "latitude": 51.0992736,
              "longitude": 17.0270678
            },
            {
              "latitude": 51.0993379,
              "longitude": 17.0268962
            },
            {
              "latitude": 51.0994613,
              "longitude": 17.0263544
            },
            {
              "latitude": 51.0994586,
              "longitude": 17.0262471
            },
            {
              "latitude": 51.099515,
              "longitude": 17.0260352
            },
            {
              "latitude": 51.099692,
              "longitude": 17.0253754
            },
            {
              "latitude": 51.0998341,
              "longitude": 17.0248845
            },
            {
              "latitude": 51.0998744,
              "longitude": 17.0247316
            },
            {
              "latitude": 51.100046,
              "longitude": 17.0240718
            },
            {
              "latitude": 51.100215,
              "longitude": 17.0234281
            },
            {
              "latitude": 51.1002606,
              "longitude": 17.0233852
            },
            {
              "latitude": 51.100376,
              "longitude": 17.0233369
            },
            {
              "latitude": 51.1004591,
              "longitude": 17.0233288
            },
            {
              "latitude": 51.100502,
              "longitude": 17.0233235
            },
            {
              "latitude": 51.100561,
              "longitude": 17.0233932
            },
            {
              "latitude": 51.1007166,
              "longitude": 17.0235595
            },
            {
              "latitude": 51.101135,
              "longitude": 17.0240182
            },
            {
              "latitude": 51.1012369,
              "longitude": 17.0241174
            },
            {
              "latitude": 51.1013308,
              "longitude": 17.0242435
            },
            {
              "latitude": 51.1014274,
              "longitude": 17.0243722
            },
            {
              "latitude": 51.1014596,
              "longitude": 17.0244017
            },
            {
              "latitude": 51.101481,
              "longitude": 17.0245063
            },
            {
              "latitude": 51.1016259,
              "longitude": 17.0247558
            },
            {
              "latitude": 51.1016956,
              "longitude": 17.024855
            },
            {
              "latitude": 51.1019611,
              "longitude": 17.025252
            },
            {
              "latitude": 51.1021087,
              "longitude": 17.0254907
            },
            {
              "latitude": 51.102173,
              "longitude": 17.0255685
            },
            {
              "latitude": 51.1022455,
              "longitude": 17.0255873
            },
            {
              "latitude": 51.1022776,
              "longitude": 17.0255873
            },
            {
              "latitude": 51.1022964,
              "longitude": 17.0255926
            },
            {
              "latitude": 51.1023447,
              "longitude": 17.0255873
            },
            {
              "latitude": 51.1023661,
              "longitude": 17.0255819
            },
            {
              "latitude": 51.1024359,
              "longitude": 17.0255202
            },
            {
              "latitude": 51.1024976,
              "longitude": 17.0254049
            },
            {
              "latitude": 51.1030635,
              "longitude": 17.0243347
            },
            {
              "latitude": 51.1034659,
              "longitude": 17.0236239
            },
            {
              "latitude": 51.1036402,
              "longitude": 17.0232967
            },
            {
              "latitude": 51.1042383,
              "longitude": 17.0225859
            },
            {
              "latitude": 51.1045334,
              "longitude": 17.0223176
            },
            {
              "latitude": 51.1047211,
              "longitude": 17.0221406
            },
            {
              "latitude": 51.1051986,
              "longitude": 17.0217115
            },
            {
              "latitude": 51.1053166,
              "longitude": 17.0216605
            },
            {
              "latitude": 51.1053595,
              "longitude": 17.0216551
            },
            {
              "latitude": 51.1061025,
              "longitude": 17.0216364
            },
            {
              "latitude": 51.1067542,
              "longitude": 17.021639
            },
            {
              "latitude": 51.1073953,
              "longitude": 17.021639
            },
            {
              "latitude": 51.1076769,
              "longitude": 17.0216444
            },
            {
              "latitude": 51.1077869,
              "longitude": 17.0216498
            },
            {
              "latitude": 51.1078513,
              "longitude": 17.0216525
            },
            {
              "latitude": 51.1078808,
              "longitude": 17.0216551
            },
            {
              "latitude": 51.1079746,
              "longitude": 17.0216793
            },
            {
              "latitude": 51.1083984,
              "longitude": 17.0218107
            },
            {
              "latitude": 51.1084038,
              "longitude": 17.0218107
            },
            {
              "latitude": 51.1084762,
              "longitude": 17.0217785
            },
            {
              "latitude": 51.1088195,
              "longitude": 17.021867
            },
            {
              "latitude": 51.10912,
              "longitude": 17.0219475
            },
            {
              "latitude": 51.1092862,
              "longitude": 17.021977
            },
            {
              "latitude": 51.1095035,
              "longitude": 17.0219797
            },
            {
              "latitude": 51.109938,
              "longitude": 17.021926
            },
            {
              "latitude": 51.110166,
              "longitude": 17.0218751
            },
            {
              "latitude": 51.1104396,
              "longitude": 17.0218027
            },
            {
              "latitude": 51.1107829,
              "longitude": 17.02169
            },
            {
              "latitude": 51.1108714,
              "longitude": 17.0217544
            },
            {
              "latitude": 51.1109546,
              "longitude": 17.021741
            },
            {
              "latitude": 51.1112174,
              "longitude": 17.0217571
            },
            {
              "latitude": 51.111314,
              "longitude": 17.0218349
            },
            {
              "latitude": 51.1113462,
              "longitude": 17.0218912
            },
            {
              "latitude": 51.1113676,
              "longitude": 17.0219448
            },
            {
              "latitude": 51.1113891,
              "longitude": 17.0220172
            },
            {
              "latitude": 51.1114052,
              "longitude": 17.0221004
            },
            {
              "latitude": 51.1110941,
              "longitude": 17.0230821
            },
            {
              "latitude": 51.1110377,
              "longitude": 17.0232779
            },
            {
              "latitude": 51.1109921,
              "longitude": 17.023471
            },
            {
              "latitude": 51.110909,
              "longitude": 17.0238385
            },
            {
              "latitude": 51.11085,
              "longitude": 17.0241067
            },
            {
              "latitude": 51.1106595,
              "longitude": 17.025032
            },
            {
              "latitude": 51.1105459,
              "longitude": 17.0255623
            }
          ]
        }
      ],
      "sections": [
        {
          "maxSpeedLimitInKmh": 50,
          "startPointIndex": 0,
          "endPointIndex": 21,
          "sectionType": "SPEED_LIMIT"
        },
        {
          "maxSpeedLimitInKmh": 30,
          "startPointIndex": 21,
          "endPointIndex": 22,
          "sectionType": "SPEED_LIMIT"
        },
        {
          "maxSpeedLimitInKmh": 50,
          "startPointIndex": 22,
          "endPointIndex": 25,
          "sectionType": "SPEED_LIMIT"
        },
        {
          "maxSpeedLimitInKmh": 30,
          "startPointIndex": 25,
          "endPointIndex": 30,
          "sectionType": "SPEED_LIMIT"
        },
        {
          "startPointIndex": 0,
          "endPointIndex": 36,
          "sectionType": "URBAN"
        },
        {
          "maxSpeedLimitInKmh": 50,
          "startPointIndex": 30,
          "endPointIndex": 37,
          "sectionType": "SPEED_LIMIT"
        },
        {
          "maxSpeedLimitInKmh": 90,
          "startPointIndex": 37,
          "endPointIndex": 40,
          "sectionType": "SPEED_LIMIT"
        },
        {
          "maxSpeedLimitInKmh": 40,
          "startPointIndex": 40,
          "endPointIndex": 49,
          "sectionType": "SPEED_LIMIT"
        },
        {
          "maxSpeedLimitInKmh": 30,
          "startPointIndex": 49,
          "endPointIndex": 52,
          "sectionType": "SPEED_LIMIT"
        },
        {
          "startPointIndex": 40,
          "endPointIndex": 62,
          "sectionType": "URBAN"
        },
        {
          "maxSpeedLimitInKmh": 40,
          "startPointIndex": 52,
          "endPointIndex": 63,
          "sectionType": "SPEED_LIMIT"
        },
        {
          "maxSpeedLimitInKmh": 90,
          "startPointIndex": 63,
          "endPointIndex": 74,
          "sectionType": "SPEED_LIMIT"
        },
        {
          "maxSpeedLimitInKmh": 50,
          "startPointIndex": 88,
          "endPointIndex": 90,
          "sectionType": "SPEED_LIMIT"
        },
        {
          "maxSpeedLimitInKmh": 30,
          "startPointIndex": 90,
          "endPointIndex": 110,
          "sectionType": "SPEED_LIMIT"
        },
        {
          "maxSpeedLimitInKmh": 50,
          "startPointIndex": 110,
          "endPointIndex": 135,
          "sectionType": "SPEED_LIMIT"
        },
        {
          "maxSpeedLimitInKmh": 40,
          "startPointIndex": 135,
          "endPointIndex": 137,
          "sectionType": "SPEED_LIMIT"
        },
        {
          "maxSpeedLimitInKmh": 50,
          "startPointIndex": 137,
          "endPointIndex": 154,
          "sectionType": "SPEED_LIMIT"
        },
        {
          "maxSpeedLimitInKmh": 90,
          "startPointIndex": 154,
          "endPointIndex": 160,
          "sectionType": "SPEED_LIMIT"
        },
        {
          "startPointIndex": 161,
          "endPointIndex": 177,
          "sectionType": "ROAD_SHIELDS",
          "roadShieldReferences": [
            {
              "reference": "pol-nationalroad",
              "shieldContent": "94"
            }
          ]
        },
        {
          "maxSpeedLimitInKmh": 50,
          "startPointIndex": 160,
          "endPointIndex": 185,
          "sectionType": "SPEED_LIMIT"
        },
        {
          "maxSpeedLimitInKmh": 50,
          "startPointIndex": 199,
          "endPointIndex": 235,
          "sectionType": "SPEED_LIMIT"
        },
        {
          "maxSpeedLimitInKmh": 30,
          "startPointIndex": 235,
          "endPointIndex": 245,
          "sectionType": "SPEED_LIMIT"
        },
        {
          "maxSpeedLimitInKmh": 50,
          "startPointIndex": 245,
          "endPointIndex": 256,
          "sectionType": "SPEED_LIMIT"
        },
        {
          "maxSpeedLimitInKmh": 40,
          "startPointIndex": 256,
          "endPointIndex": 265,
          "sectionType": "SPEED_LIMIT"
        },
        {
          "maxSpeedLimitInKmh": 50,
          "startPointIndex": 265,
          "endPointIndex": 293,
          "sectionType": "SPEED_LIMIT"
        },
        {
          "startPointIndex": 0,
          "endPointIndex": 293,
          "sectionType": "COUNTRY",
          "countryCode": "POL"
        },
        {
          "startPointIndex": 0,
          "endPointIndex": 293,
          "sectionType": "TRAVEL_MODE",
          "travelMode": "car"
        },
        {
          "startPointIndex": 65,
          "endPointIndex": 293,
          "sectionType": "URBAN"
        },
        {
          "startPointIndex": 82,
          "endPointIndex": 88,
          "sectionType": "TRAFFIC",
          "simpleCategory": "JAM",
          "effectiveSpeedInKmh": 8,
          "delayInSeconds": 7,
          "magnitudeOfDelay": 2,
          "tec": {
            "causes": [
              {
                "mainCauseCode": 1
              }
            ],
            "effectCode": 5
          }
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
                "SLIGHT_RIGHT"
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
          "startPointIndex": 156,
          "endPointIndex": 157,
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
            "SINGLE_SOLID",
            "SINGLE_SOLID"
          ],
          "startPointIndex": 176,
          "endPointIndex": 177,
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
          "startPointIndex": 197,
          "endPointIndex": 199,
          "sectionType": "LANES"
        }
      ],
      "guidance": {
        "instructions": [
          {
            "routeOffsetInMeters": 0,
            "travelTimeInSeconds": 0,
            "point": {
              "latitude": 51.03454,
              "longitude": 16.99145
            },
            "pointIndex": 0,
            "instructionType": "LOCATION_DEPARTURE",
            "street": "Templariuszy",
            "phoneticStreet": "tɛm.pla.ˈrju.ʃɨ",
            "phoneticStreetLanguageCode": "pl-PL",
            "countryCode": "POL",
            "possibleCombineWithNext": false,
            "drivingSide": "RIGHT",
            "maneuver": "DEPART",
            "message": "Leave from <street>Templariuszy</street>",
            "confirmationAnnouncement": {
              "point": {
                "latitude": 51.034539,
                "longitude": 16.9914468
              },
              "pointIndex": 0,
              "maneuver": "DEPART",
              "distanceInMeters": 0
            }
          },
          {
            "routeOffsetInMeters": 11,
            "travelTimeInSeconds": 3,
            "point": {
              "latitude": 51.03448,
              "longitude": 16.99158
            },
            "pointIndex": 1,
            "instructionType": "TURN",
            "street": "Templariuszy",
            "phoneticStreet": "tɛm.pla.ˈrju.ʃɨ",
            "phoneticStreetLanguageCode": "pl-PL",
            "countryCode": "POL",
            "junctionType": "REGULAR",
            "turnAngleInDecimalDegrees": -180,
            "possibleCombineWithNext": true,
            "drivingSide": "RIGHT",
            "maneuver": "TRY_MAKE_UTURN",
            "message": "Try to make a U-turn at <street>Templariuszy</street>",
            "combinedMessage": "Try to make a U-turn at <street>Templariuszy</street> then turn right onto <street>Templariuszy</street>",
            "confirmationAnnouncement": {
              "point": {
                "latitude": 51.034539,
                "longitude": 16.9914468
              },
              "pointIndex": 0,
              "maneuver": "TRY_MAKE_UTURN",
              "distanceInMeters": 200
            }
          },
          {
            "routeOffsetInMeters": 49,
            "travelTimeInSeconds": 133,
            "point": {
              "latitude": 51.03468,
              "longitude": 16.99115
            },
            "pointIndex": 2,
            "instructionType": "TURN",
            "street": "Templariuszy",
            "phoneticStreet": "tɛm.pla.ˈrju.ʃɨ",
            "phoneticStreetLanguageCode": "pl-PL",
            "countryCode": "POL",
            "junctionType": "REGULAR",
            "turnAngleInDecimalDegrees": 90,
            "possibleCombineWithNext": true,
            "drivingSide": "RIGHT",
            "maneuver": "TURN_RIGHT",
            "message": "Turn right onto <street>Templariuszy</street>",
            "combinedMessage": "Turn right onto <street>Templariuszy</street> then turn left onto <street>Główna</street>",
            "confirmationAnnouncement": {
              "point": {
                "latitude": 51.0345203,
                "longitude": 16.9914859
              },
              "pointIndex": 1,
              "maneuver": "TURN_RIGHT",
              "distanceInMeters": 30
            }
          },
          {
            "routeOffsetInMeters": 113,
            "travelTimeInSeconds": 161,
            "point": {
              "latitude": 51.03519,
              "longitude": 16.99158
            },
            "pointIndex": 4,
            "instructionType": "TURN",
            "street": "Główna",
            "phoneticStreet": "ˈgwu.vna",
            "phoneticStreetLanguageCode": "pl-PL",
            "countryCode": "POL",
            "junctionType": "REGULAR",
            "turnAngleInDecimalDegrees": -90,
            "possibleCombineWithNext": false,
            "drivingSide": "RIGHT",
            "maneuver": "TURN_LEFT",
            "message": "Turn left onto <street>Główna</street>",
            "confirmationAnnouncement": {
              "point": {
                "latitude": 51.0349588,
                "longitude": 16.9913701
              },
              "pointIndex": 3,
              "maneuver": "TURN_LEFT",
              "distanceInMeters": 30
            }
          },
          {
            "routeOffsetInMeters": 553,
            "travelTimeInSeconds": 219,
            "point": {
              "latitude": 51.03737,
              "longitude": 16.98636
            },
            "pointIndex": 9,
            "instructionType": "TURN",
            "street": "Pszenna",
            "phoneticStreet": "ˈpʃɛ.nːa",
            "phoneticStreetLanguageCode": "pl-PL",
            "countryCode": "POL",
            "junctionType": "REGULAR",
            "turnAngleInDecimalDegrees": 90,
            "possibleCombineWithNext": false,
            "drivingSide": "RIGHT",
            "maneuver": "TURN_RIGHT",
            "message": "Turn right onto <street>Pszenna</street>",
            "mainAnnouncement": {
              "point": {
                "latitude": 51.0367981,
                "longitude": 16.9874628
              },
              "pointIndex": 6,
              "maneuver": "TURN_RIGHT",
              "distanceInMeters": 100
            },
            "confirmationAnnouncement": {
              "point": {
                "latitude": 51.0372528,
                "longitude": 16.9865788
              },
              "pointIndex": 7,
              "maneuver": "TURN_RIGHT",
              "distanceInMeters": 20
            }
          },
          {
            "routeOffsetInMeters": 3457,
            "travelTimeInSeconds": 546,
            "point": {
              "latitude": 51.05934,
              "longitude": 17.0071
            },
            "pointIndex": 74,
            "instructionType": "TURN",
            "street": "Ołtaszyńska",
            "phoneticStreet": "ɔw.ta.ˈʃɨɲ.ska",
            "phoneticStreetLanguageCode": "pl-PL",
            "countryCode": "POL",
            "junctionType": "ROUNDABOUT",
            "turnAngleInDecimalDegrees": 0,
            "roundaboutExitNumber": 2,
            "possibleCombineWithNext": false,
            "drivingSide": "RIGHT",
            "maneuver": "ROUNDABOUT_CROSS",
            "message": "At the roundabout take the <roundaboutExitNumber>second</roundaboutExitNumber> exit onto <street>Ołtaszyńska</street>",
            "mainAnnouncement": {
              "point": {
                "latitude": 51.0576254,
                "longitude": 17.0062118
              },
              "pointIndex": 67,
              "maneuver": "ROUNDABOUT_CROSS",
              "distanceInMeters": 200
            },
            "confirmationAnnouncement": {
              "point": {
                "latitude": 51.0590731,
                "longitude": 17.0069974
              },
              "pointIndex": 72,
              "maneuver": "ROUNDABOUT_CROSS",
              "distanceInMeters": 30
            }
          },
          {
            "routeOffsetInMeters": 4653,
            "travelTimeInSeconds": 701,
            "point": {
              "latitude": 51.06938,
              "longitude": 17.01241
            },
            "pointIndex": 109,
            "instructionType": "TURN",
            "street": "Wojszycka",
            "phoneticStreet": "vɔj.ˈʃɨ.t⁀ska",
            "phoneticStreetLanguageCode": "pl-PL",
            "countryCode": "POL",
            "junctionType": "REGULAR",
            "turnAngleInDecimalDegrees": -90,
            "possibleCombineWithNext": true,
            "drivingSide": "RIGHT",
            "maneuver": "TURN_LEFT",
            "message": "Turn left onto <street>Wojszycka</street>",
            "combinedMessage": "Turn left onto <street>Wojszycka</street> then turn right onto <street>Wyścigowa</street>",
            "mainAnnouncement": {
              "point": {
                "latitude": 51.0677372,
                "longitude": 17.0112331
              },
              "pointIndex": 106,
              "maneuver": "TURN_LEFT",
              "distanceInMeters": 200
            },
            "confirmationAnnouncement": {
              "point": {
                "latitude": 51.0689845,
                "longitude": 17.0120598
              },
              "pointIndex": 107,
              "maneuver": "TURN_LEFT",
              "distanceInMeters": 50
            }
          },
          {
            "routeOffsetInMeters": 4841,
            "travelTimeInSeconds": 770,
            "point": {
              "latitude": 51.07073,
              "longitude": 17.01085
            },
            "pointIndex": 114,
            "instructionType": "TURN",
            "street": "Wyścigowa",
            "phoneticStreet": "vɨ.ɕt⁀ɕi.ˈgɔ.va",
            "phoneticStreetLanguageCode": "pl-PL",
            "countryCode": "POL",
            "junctionType": "REGULAR",
            "turnAngleInDecimalDegrees": 90,
            "possibleCombineWithNext": false,
            "drivingSide": "RIGHT",
            "maneuver": "TURN_RIGHT",
            "message": "Turn right onto <street>Wyścigowa</street>",
            "mainAnnouncement": {
              "point": {
                "latitude": 51.0700617,
                "longitude": 17.0117737
              },
              "pointIndex": 109,
              "maneuver": "TURN_RIGHT",
              "distanceInMeters": 100
            },
            "confirmationAnnouncement": {
              "point": {
                "latitude": 51.0706334,
                "longitude": 17.0110876
              },
              "pointIndex": 112,
              "maneuver": "TURN_RIGHT",
              "distanceInMeters": 20
            }
          },
          {
            "routeOffsetInMeters": 6577,
            "travelTimeInSeconds": 978,
            "point": {
              "latitude": 51.08327,
              "longitude": 17.02458
            },
            "pointIndex": 157,
            "instructionType": "TURN",
            "roadNumbers": [
              "94"
            ],
            "phoneticRoadNumbers": [
              "d⁀ʑɛ.vjɛɲ.d⁀ʑɛ.ɕɔnt.ˈt⁀ʃtɛ.rɨ"
            ],
            "phoneticRoadNumberLanguageCodes": [
              "pl-PL"
            ],
            "street": "Aleja Wiśniowa",
            "phoneticStreet": "a.ˈlɛ.ja vi.ˈɕɲɔ.va",
            "phoneticStreetLanguageCode": "pl-PL",
            "countryCode": "POL",
            "junctionType": "REGULAR",
            "turnAngleInDecimalDegrees": -90,
            "possibleCombineWithNext": false,
            "drivingSide": "RIGHT",
            "maneuver": "TURN_LEFT",
            "message": "Turn left onto <street>Aleja Wiśniowa</street>/<roadNumber>94</roadNumber>",
            "earlyWarningAnnouncement": {
              "point": {
                "latitude": 51.078654,
                "longitude": 17.0201449
              },
              "pointIndex": 145,
              "maneuver": "AHEAD_LEFT_TURN",
              "distanceInMeters": 600
            },
            "mainAnnouncement": {
              "point": {
                "latitude": 51.0802029,
                "longitude": 17.0215872
              },
              "pointIndex": 149,
              "maneuver": "TURN_LEFT",
              "distanceInMeters": 400
            },
            "confirmationAnnouncement": {
              "point": {
                "latitude": 51.0826542,
                "longitude": 17.0239722
              },
              "pointIndex": 154,
              "maneuver": "TURN_LEFT",
              "distanceInMeters": 80
            },
            "roadShieldReferences": [
              {
                "reference": "pol-nationalroad",
                "shieldContent": "94"
              }
            ]
          },
          {
            "routeOffsetInMeters": 7208,
            "travelTimeInSeconds": 1083,
            "point": {
              "latitude": 51.08545,
              "longitude": 17.01794
            },
            "pointIndex": 177,
            "instructionType": "TURN",
            "street": "Sudecka",
            "phoneticStreet": "su.ˈdɛ.t⁀ska",
            "phoneticStreetLanguageCode": "pl-PL",
            "countryCode": "POL",
            "junctionType": "REGULAR",
            "turnAngleInDecimalDegrees": 45,
            "possibleCombineWithNext": false,
            "drivingSide": "RIGHT",
            "maneuver": "BEAR_RIGHT",
            "message": "Bear right at <street>Sudecka</street>",
            "mainAnnouncement": {
              "point": {
                "latitude": 51.0843043,
                "longitude": 17.0233306
              },
              "pointIndex": 166,
              "maneuver": "TURN_RIGHT",
              "distanceInMeters": 400
            },
            "confirmationAnnouncement": {
              "point": {
                "latitude": 51.0853544,
                "longitude": 17.0183382
              },
              "pointIndex": 174,
              "maneuver": "BEAR_RIGHT",
              "distanceInMeters": 30
            }
          },
          {
            "routeOffsetInMeters": 7644,
            "travelTimeInSeconds": 1161,
            "point": {
              "latitude": 51.08929,
              "longitude": 17.01682
            },
            "pointIndex": 185,
            "instructionType": "TURN",
            "street": "Powstańców Śląskich",
            "phoneticStreet": "pɔ.ˈfstaɲ.t⁀suf ˈɕlɔ̃.skix",
            "phoneticStreetLanguageCode": "pl-PL",
            "countryCode": "POL",
            "junctionType": "ROUNDABOUT",
            "turnAngleInDecimalDegrees": 45,
            "roundaboutExitNumber": 2,
            "possibleCombineWithNext": false,
            "drivingSide": "RIGHT",
            "maneuver": "ROUNDABOUT_CROSS",
            "message": "At the roundabout take the <roundaboutExitNumber>second</roundaboutExitNumber> exit onto <street>Powstańców Śląskich</street>",
            "mainAnnouncement": {
              "point": {
                "latitude": 51.0875143,
                "longitude": 17.0172856
              },
              "pointIndex": 183,
              "maneuver": "ROUNDABOUT_CROSS",
              "distanceInMeters": 200
            },
            "confirmationAnnouncement": {
              "point": {
                "latitude": 51.0887554,
                "longitude": 17.0169611
              },
              "pointIndex": 184,
              "maneuver": "ROUNDABOUT_CROSS",
              "distanceInMeters": 60
            }
          },
          {
            "routeOffsetInMeters": 7858,
            "travelTimeInSeconds": 1208,
            "point": {
              "latitude": 51.09082,
              "longitude": 17.0174
            },
            "pointIndex": 199,
            "instructionType": "TURN",
            "street": "Powstańców Śląskich",
            "phoneticStreet": "pɔ.ˈfstaɲ.t⁀suf ˈɕlɔ̃.skix",
            "phoneticStreetLanguageCode": "pl-PL",
            "countryCode": "POL",
            "junctionType": "ROUNDABOUT",
            "turnAngleInDecimalDegrees": 45,
            "roundaboutExitNumber": 0,
            "possibleCombineWithNext": false,
            "drivingSide": "RIGHT",
            "maneuver": "TAKE_EXIT",
            "message": "Take the exit onto <street>Powstańców Śląskich</street>",
            "confirmationAnnouncement": {
              "point": {
                "latitude": 51.0902022,
                "longitude": 17.0178611
              },
              "pointIndex": 192,
              "maneuver": "TAKE_EXIT",
              "distanceInMeters": 79
            }
          },
          {
            "routeOffsetInMeters": 9008,
            "travelTimeInSeconds": 1399,
            "point": {
              "latitude": 51.09915,
              "longitude": 17.02709
            },
            "pointIndex": 215,
            "instructionType": "TURN",
            "street": "Swobodna",
            "phoneticStreet": "sfɔ.ˈbɔ.dna",
            "phoneticStreetLanguageCode": "pl-PL",
            "countryCode": "POL",
            "junctionType": "REGULAR",
            "turnAngleInDecimalDegrees": -90,
            "possibleCombineWithNext": true,
            "drivingSide": "RIGHT",
            "maneuver": "TURN_LEFT",
            "message": "Turn left onto <street>Swobodna</street>",
            "combinedMessage": "Turn left onto <street>Swobodna</street> then turn right onto <street>Tadeusza Zielińskiego</street>",
            "earlyWarningAnnouncement": {
              "point": {
                "latitude": 51.0962245,
                "longitude": 17.0238126
              },
              "pointIndex": 203,
              "maneuver": "AHEAD_LEFT_TURN",
              "distanceInMeters": 400
            },
            "mainAnnouncement": {
              "point": {
                "latitude": 51.0976743,
                "longitude": 17.0254978
              },
              "pointIndex": 206,
              "maneuver": "TURN_LEFT",
              "distanceInMeters": 200
            },
            "confirmationAnnouncement": {
              "point": {
                "latitude": 51.09871,
                "longitude": 17.0266033
              },
              "pointIndex": 209,
              "maneuver": "TURN_LEFT",
              "distanceInMeters": 60
            }
          },
          {
            "routeOffsetInMeters": 9307,
            "travelTimeInSeconds": 1468,
            "point": {
              "latitude": 51.10022,
              "longitude": 17.02343
            },
            "pointIndex": 226,
            "instructionType": "TURN",
            "street": "Tadeusza Zielińskiego",
            "phoneticStreet": "ta.dɛ.ˈu.ʃa ʑɛ.liɲ.ˈskjɛ.gɔ",
            "phoneticStreetLanguageCode": "pl-PL",
            "countryCode": "POL",
            "junctionType": "REGULAR",
            "turnAngleInDecimalDegrees": 90,
            "possibleCombineWithNext": true,
            "drivingSide": "RIGHT",
            "maneuver": "TURN_RIGHT",
            "message": "Turn right onto <street>Tadeusza Zielińskiego</street>",
            "combinedMessage": "Turn right onto <street>Tadeusza Zielińskiego</street> then turn left onto <street>Marszałka Józefa Piłsudskiego</street>",
            "mainAnnouncement": {
              "point": {
                "latitude": 51.0995114,
                "longitude": 17.0260484
              },
              "pointIndex": 220,
              "maneuver": "TURN_RIGHT",
              "distanceInMeters": 200
            },
            "confirmationAnnouncement": {
              "point": {
                "latitude": 51.1001116,
                "longitude": 17.0238222
              },
              "pointIndex": 225,
              "maneuver": "TURN_RIGHT",
              "distanceInMeters": 30
            }
          },
          {
            "routeOffsetInMeters": 9588,
            "travelTimeInSeconds": 1547,
            "point": {
              "latitude": 51.10217,
              "longitude": 17.02557
            },
            "pointIndex": 243,
            "instructionType": "TURN",
            "street": "Marszałka Józefa Piłsudskiego",
            "phoneticStreet": "mar.ˈʃaw.ka ju.ˈzɛ.fa piw.su.ˈt⁀skjɛ.gɔ",
            "phoneticStreetLanguageCode": "pl-PL",
            "countryCode": "POL",
            "junctionType": "REGULAR",
            "turnAngleInDecimalDegrees": -90,
            "possibleCombineWithNext": false,
            "drivingSide": "RIGHT",
            "maneuver": "TURN_LEFT",
            "message": "Turn left onto <street>Marszałka Józefa Piłsudskiego</street>",
            "mainAnnouncement": {
              "point": {
                "latitude": 51.10153,
                "longitude": 17.0245907
              },
              "pointIndex": 238,
              "maneuver": "TURN_LEFT",
              "distanceInMeters": 100
            },
            "confirmationAnnouncement": {
              "point": {
                "latitude": 51.1020394,
                "longitude": 17.0253786
              },
              "pointIndex": 241,
              "maneuver": "TURN_LEFT",
              "distanceInMeters": 20
            }
          },
          {
            "routeOffsetInMeters": 10706,
            "travelTimeInSeconds": 1793,
            "point": {
              "latitude": 51.11122,
              "longitude": 17.02176
            },
            "pointIndex": 281,
            "instructionType": "TURN",
            "street": "Plac Jana Pawła II",
            "phoneticStreet": "ˈplat⁀s ˈja.na ˈpa.vwa dru.ˈgjɛ.gɔ",
            "phoneticStreetLanguageCode": "pl-PL",
            "countryCode": "POL",
            "junctionType": "REGULAR",
            "turnAngleInDecimalDegrees": 90,
            "possibleCombineWithNext": true,
            "drivingSide": "RIGHT",
            "maneuver": "TURN_RIGHT",
            "message": "Turn right onto <street>Plac Jana Pawła II</street>",
            "combinedMessage": "Turn right onto <street>Plac Jana Pawła II</street> then you have arrived at <street>Ruska</street>",
            "earlyWarningAnnouncement": {
              "point": {
                "latitude": 51.1058608,
                "longitude": 17.0216425
              },
              "pointIndex": 259,
              "maneuver": "AHEAD_RIGHT_TURN",
              "distanceInMeters": 600
            },
            "mainAnnouncement": {
              "point": {
                "latitude": 51.1085554,
                "longitude": 17.021799
              },
              "pointIndex": 270,
              "maneuver": "TURN_RIGHT",
              "distanceInMeters": 300
            },
            "confirmationAnnouncement": {
              "point": {
                "latitude": 51.110598,
                "longitude": 17.0217507
              },
              "pointIndex": 277,
              "maneuver": "TURN_RIGHT",
              "distanceInMeters": 70
            }
          },
          {
            "routeOffsetInMeters": 11000,
            "travelTimeInSeconds": 1864,
            "point": {
              "latitude": 51.11055,
              "longitude": 17.02556
            },
            "pointIndex": 293,
            "instructionType": "LOCATION_ARRIVAL",
            "street": "Ruska",
            "phoneticStreet": "ˈru.ska",
            "phoneticStreetLanguageCode": "pl-PL",
            "countryCode": "POL",
            "possibleCombineWithNext": false,
            "drivingSide": "RIGHT",
            "maneuver": "ARRIVE",
            "message": "You have arrived at <street>Ruska</street>",
            "mainAnnouncement": {
              "point": {
                "latitude": 51.1111587,
                "longitude": 17.0228781
              },
              "pointIndex": 286,
              "maneuver": "ARRIVE",
              "distanceInMeters": 200
            },
            "confirmationAnnouncement": {
              "point": {
                "latitude": 51.1106333,
                "longitude": 17.0251544
              },
              "pointIndex": 292,
              "maneuver": "ARRIVE",
              "distanceInMeters": 30
            }
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
          "travelTimeInSeconds": 3,
          "distanceInMeters": 11
        },
        {
          "pointIndex": 2,
          "travelTimeInSeconds": 133,
          "distanceInMeters": 49
        },
        {
          "pointIndex": 3,
          "travelTimeInSeconds": 148,
          "distanceInMeters": 69
        },
        {
          "pointIndex": 5,
          "travelTimeInSeconds": 180,
          "distanceInMeters": 178
        },
        {
          "pointIndex": 26,
          "travelTimeInSeconds": 264,
          "distanceInMeters": 992
        },
        {
          "pointIndex": 50,
          "travelTimeInSeconds": 351,
          "distanceInMeters": 2211
        },
        {
          "pointIndex": 64,
          "travelTimeInSeconds": 435,
          "distanceInMeters": 3087
        },
        {
          "pointIndex": 66,
          "travelTimeInSeconds": 462,
          "distanceInMeters": 3146
        },
        {
          "pointIndex": 67,
          "travelTimeInSeconds": 482,
          "distanceInMeters": 3181
        },
        {
          "pointIndex": 71,
          "travelTimeInSeconds": 514,
          "distanceInMeters": 3383
        },
        {
          "pointIndex": 90,
          "travelTimeInSeconds": 572,
          "distanceInMeters": 3535
        },
        {
          "pointIndex": 109,
          "travelTimeInSeconds": 701,
          "distanceInMeters": 4653
        },
        {
          "pointIndex": 110,
          "travelTimeInSeconds": 726,
          "distanceInMeters": 4751
        },
        {
          "pointIndex": 115,
          "travelTimeInSeconds": 774,
          "distanceInMeters": 4861
        },
        {
          "pointIndex": 126,
          "travelTimeInSeconds": 806,
          "distanceInMeters": 5071
        },
        {
          "pointIndex": 143,
          "travelTimeInSeconds": 864,
          "distanceInMeters": 5771
        },
        {
          "pointIndex": 150,
          "travelTimeInSeconds": 904,
          "distanceInMeters": 6226
        },
        {
          "pointIndex": 152,
          "travelTimeInSeconds": 925,
          "distanceInMeters": 6330
        },
        {
          "pointIndex": 154,
          "travelTimeInSeconds": 942,
          "distanceInMeters": 6496
        },
        {
          "pointIndex": 155,
          "travelTimeInSeconds": 955,
          "distanceInMeters": 6541
        },
        {
          "pointIndex": 158,
          "travelTimeInSeconds": 998,
          "distanceInMeters": 6601
        },
        {
          "pointIndex": 161,
          "travelTimeInSeconds": 1013,
          "distanceInMeters": 6672
        },
        {
          "pointIndex": 162,
          "travelTimeInSeconds": 1025,
          "distanceInMeters": 6694
        },
        {
          "pointIndex": 183,
          "travelTimeInSeconds": 1105,
          "distanceInMeters": 7375
        },
        {
          "pointIndex": 184,
          "travelTimeInSeconds": 1124,
          "distanceInMeters": 7491
        },
        {
          "pointIndex": 187,
          "travelTimeInSeconds": 1166,
          "distanceInMeters": 7683
        },
        {
          "pointIndex": 193,
          "travelTimeInSeconds": 1185,
          "distanceInMeters": 7784
        },
        {
          "pointIndex": 199,
          "travelTimeInSeconds": 1208,
          "distanceInMeters": 7858
        },
        {
          "pointIndex": 200,
          "travelTimeInSeconds": 1238,
          "distanceInMeters": 8074
        },
        {
          "pointIndex": 201,
          "travelTimeInSeconds": 1273,
          "distanceInMeters": 8209
        },
        {
          "pointIndex": 209,
          "travelTimeInSeconds": 1360,
          "distanceInMeters": 8898
        },
        {
          "pointIndex": 211,
          "travelTimeInSeconds": 1384,
          "distanceInMeters": 8971
        },
        {
          "pointIndex": 215,
          "travelTimeInSeconds": 1399,
          "distanceInMeters": 9008
        },
        {
          "pointIndex": 216,
          "travelTimeInSeconds": 1401,
          "distanceInMeters": 9021
        },
        {
          "pointIndex": 217,
          "travelTimeInSeconds": 1411,
          "distanceInMeters": 9030
        },
        {
          "pointIndex": 225,
          "travelTimeInSeconds": 1446,
          "distanceInMeters": 9258
        },
        {
          "pointIndex": 231,
          "travelTimeInSeconds": 1482,
          "distanceInMeters": 9349
        },
        {
          "pointIndex": 240,
          "travelTimeInSeconds": 1513,
          "distanceInMeters": 9515
        },
        {
          "pointIndex": 247,
          "travelTimeInSeconds": 1550,
          "distanceInMeters": 9607
        },
        {
          "pointIndex": 253,
          "travelTimeInSeconds": 1581,
          "distanceInMeters": 9825
        },
        {
          "pointIndex": 255,
          "travelTimeInSeconds": 1638,
          "distanceInMeters": 9946
        },
        {
          "pointIndex": 260,
          "travelTimeInSeconds": 1665,
          "distanceInMeters": 10133
        },
        {
          "pointIndex": 261,
          "travelTimeInSeconds": 1682,
          "distanceInMeters": 10205
        },
        {
          "pointIndex": 265,
          "travelTimeInSeconds": 1721,
          "distanceInMeters": 10326
        },
        {
          "pointIndex": 277,
          "travelTimeInSeconds": 1757,
          "distanceInMeters": 10618
        },
        {
          "pointIndex": 280,
          "travelTimeInSeconds": 1775,
          "distanceInMeters": 10677
        },
        {
          "pointIndex": 283,
          "travelTimeInSeconds": 1796,
          "distanceInMeters": 10723
        },
        {
          "pointIndex": 291,
          "travelTimeInSeconds": 1829,
          "distanceInMeters": 10893
        },
        {
          "pointIndex": 293,
          "travelTimeInSeconds": 1864,
          "distanceInMeters": 11000
        }
      ]
    };

var longRoute =    {
  "summary": {
    "lengthInMeters": 20380,
    "travelTimeInSeconds": 2047,
    "trafficDelayInSeconds": 0,
    "trafficLengthInMeters": 0,
    "departureTime": "2023-12-06T11:27:27+01:00",
    "arrivalTime": "2023-12-06T12:11:34+01:00",
    "deviationDistance": 3073,
    "deviationTime": 604,
    "deviationPoint": {
      "latitude": 51.049929,
      "longitude": 16.9732654
    }
  },
  "legs": [
    {
      "summary": {
        "lengthInMeters": 20380,
        "travelTimeInSeconds": 2047,
        "trafficDelayInSeconds": 0,
        "trafficLengthInMeters": 0,
        "departureTime": "2023-12-06T11:27:27+01:00",
        "arrivalTime": "2023-12-06T12:01:34+01:00"
      },
      "points": [
        {
          "latitude": 51.0345365,
          "longitude": 16.9914519
        },
        {
          "latitude": 51.0344768,
          "longitude": 16.9915769
        },
        {
          "latitude": 51.0346833,
          "longitude": 16.991145
        },
        {
          "latitude": 51.0348496,
          "longitude": 16.9912711
        },
        {
          "latitude": 51.0351929,
          "longitude": 16.9915822
        },
        {
          "latitude": 51.0354906,
          "longitude": 16.9907829
        },
        {
          "latitude": 51.0363463,
          "longitude": 16.9883743
        },
        {
          "latitude": 51.0371241,
          "longitude": 16.9868052
        },
        {
          "latitude": 51.0373253,
          "longitude": 16.9864511
        },
        {
          "latitude": 51.0373655,
          "longitude": 16.9863573
        },
        {
          "latitude": 51.0374084,
          "longitude": 16.9861561
        },
        {
          "latitude": 51.0374165,
          "longitude": 16.9859576
        },
        {
          "latitude": 51.0373923,
          "longitude": 16.9857699
        },
        {
          "latitude": 51.0373762,
          "longitude": 16.9857028
        },
        {
          "latitude": 51.037344,
          "longitude": 16.9855714
        },
        {
          "latitude": 51.0372555,
          "longitude": 16.985338
        },
        {
          "latitude": 51.0370705,
          "longitude": 16.9848633
        },
        {
          "latitude": 51.0367191,
          "longitude": 16.9839621
        },
        {
          "latitude": 51.0365018,
          "longitude": 16.9833827
        },
        {
          "latitude": 51.036475,
          "longitude": 16.9832915
        },
        {
          "latitude": 51.0364401,
          "longitude": 16.9831252
        },
        {
          "latitude": 51.036424,
          "longitude": 16.9828758
        },
        {
          "latitude": 51.036424,
          "longitude": 16.9827846
        },
        {
          "latitude": 51.0364509,
          "longitude": 16.98257
        },
        {
          "latitude": 51.0366762,
          "longitude": 16.9815534
        },
        {
          "latitude": 51.0368291,
          "longitude": 16.9808882
        },
        {
          "latitude": 51.0370651,
          "longitude": 16.9799012
        },
        {
          "latitude": 51.0373145,
          "longitude": 16.9788605
        },
        {
          "latitude": 51.0373923,
          "longitude": 16.9785386
        },
        {
          "latitude": 51.0374916,
          "longitude": 16.9781256
        },
        {
          "latitude": 51.0375693,
          "longitude": 16.9777983
        },
        {
          "latitude": 51.0377732,
          "longitude": 16.9769454
        },
        {
          "latitude": 51.0378322,
          "longitude": 16.976696
        },
        {
          "latitude": 51.0378698,
          "longitude": 16.9765431
        },
        {
          "latitude": 51.0379073,
          "longitude": 16.9763741
        },
        {
          "latitude": 51.0379475,
          "longitude": 16.9761997
        },
        {
          "latitude": 51.0379717,
          "longitude": 16.9760817
        },
        {
          "latitude": 51.0380495,
          "longitude": 16.9757465
        },
        {
          "latitude": 51.0385188,
          "longitude": 16.9736999
        },
        {
          "latitude": 51.03861,
          "longitude": 16.9732466
        },
        {
          "latitude": 51.0386878,
          "longitude": 16.9729543
        },
        {
          "latitude": 51.0387522,
          "longitude": 16.9726834
        },
        {
          "latitude": 51.0387737,
          "longitude": 16.9725895
        },
        {
          "latitude": 51.0389856,
          "longitude": 16.9716534
        },
        {
          "latitude": 51.0390526,
          "longitude": 16.971353
        },
        {
          "latitude": 51.0391974,
          "longitude": 16.9707227
        },
        {
          "latitude": 51.0394174,
          "longitude": 16.9697464
        },
        {
          "latitude": 51.0395595,
          "longitude": 16.9690999
        },
        {
          "latitude": 51.0396722,
          "longitude": 16.9691321
        },
        {
          "latitude": 51.0397232,
          "longitude": 16.9691133
        },
        {
          "latitude": 51.0398358,
          "longitude": 16.9691482
        },
        {
          "latitude": 51.0400155,
          "longitude": 16.9692019
        },
        {
          "latitude": 51.0401925,
          "longitude": 16.9692555
        },
        {
          "latitude": 51.04045,
          "longitude": 16.9692957
        },
        {
          "latitude": 51.0405412,
          "longitude": 16.9693118
        },
        {
          "latitude": 51.0406244,
          "longitude": 16.9693252
        },
        {
          "latitude": 51.0409838,
          "longitude": 16.9693869
        },
        {
          "latitude": 51.0411206,
          "longitude": 16.9694003
        },
        {
          "latitude": 51.0417482,
          "longitude": 16.9694647
        },
        {
          "latitude": 51.0417885,
          "longitude": 16.969462
        },
        {
          "latitude": 51.0418394,
          "longitude": 16.9695237
        },
        {
          "latitude": 51.0418931,
          "longitude": 16.9695345
        },
        {
          "latitude": 51.0424027,
          "longitude": 16.9696203
        },
        {
          "latitude": 51.0424805,
          "longitude": 16.969631
        },
        {
          "latitude": 51.0425636,
          "longitude": 16.9696444
        },
        {
          "latitude": 51.0428292,
          "longitude": 16.9696873
        },
        {
          "latitude": 51.0429767,
          "longitude": 16.9697115
        },
        {
          "latitude": 51.0434783,
          "longitude": 16.9698805
        },
        {
          "latitude": 51.0440013,
          "longitude": 16.9701111
        },
        {
          "latitude": 51.0441059,
          "longitude": 16.9701621
        },
        {
          "latitude": 51.0441515,
          "longitude": 16.970146
        },
        {
          "latitude": 51.0446718,
          "longitude": 16.9704223
        },
        {
          "latitude": 51.0448864,
          "longitude": 16.9704732
        },
        {
          "latitude": 51.0451546,
          "longitude": 16.9705215
        },
        {
          "latitude": 51.045396,
          "longitude": 16.9705215
        },
        {
          "latitude": 51.0456213,
          "longitude": 16.9705296
        },
        {
          "latitude": 51.0458708,
          "longitude": 16.9705403
        },
        {
          "latitude": 51.0460022,
          "longitude": 16.9705376
        },
        {
          "latitude": 51.0462034,
          "longitude": 16.9705349
        },
        {
          "latitude": 51.0464314,
          "longitude": 16.9705296
        },
        {
          "latitude": 51.0468471,
          "longitude": 16.9705456
        },
        {
          "latitude": 51.0469732,
          "longitude": 16.9705698
        },
        {
          "latitude": 51.0472038,
          "longitude": 16.9706288
        },
        {
          "latitude": 51.0472655,
          "longitude": 16.9706556
        },
        {
          "latitude": 51.047405,
          "longitude": 16.97072
        },
        {
          "latitude": 51.0476491,
          "longitude": 16.9708568
        },
        {
          "latitude": 51.0479575,
          "longitude": 16.9710982
        },
        {
          "latitude": 51.0480461,
          "longitude": 16.9711813
        },
        {
          "latitude": 51.048089,
          "longitude": 16.9712216
        },
        {
          "latitude": 51.0489741,
          "longitude": 16.9721738
        },
        {
          "latitude": 51.0490653,
          "longitude": 16.9722676
        },
        {
          "latitude": 51.0493791,
          "longitude": 16.9726056
        },
        {
          "latitude": 51.0494703,
          "longitude": 16.9727048
        },
        {
          "latitude": 51.0496044,
          "longitude": 16.972847
        },
        {
          "latitude": 51.0496178,
          "longitude": 16.9729114
        },
        {
          "latitude": 51.0497278,
          "longitude": 16.9730374
        },
        {
          "latitude": 51.049929,
          "longitude": 16.9732654
        },
        {
          "latitude": 51.0500336,
          "longitude": 16.9735122
        },
        {
          "latitude": 51.0500631,
          "longitude": 16.97359
        },
        {
          "latitude": 51.0501194,
          "longitude": 16.973775
        },
        {
          "latitude": 51.0501382,
          "longitude": 16.9738448
        },
        {
          "latitude": 51.050165,
          "longitude": 16.9740084
        },
        {
          "latitude": 51.0501757,
          "longitude": 16.9741639
        },
        {
          "latitude": 51.050165,
          "longitude": 16.9744644
        },
        {
          "latitude": 51.0501409,
          "longitude": 16.9746119
        },
        {
          "latitude": 51.0501248,
          "longitude": 16.9747031
        },
        {
          "latitude": 51.050055,
          "longitude": 16.9749767
        },
        {
          "latitude": 51.0494113,
          "longitude": 16.9770554
        },
        {
          "latitude": 51.0493228,
          "longitude": 16.977286
        },
        {
          "latitude": 51.0492235,
          "longitude": 16.9774577
        },
        {
          "latitude": 51.0491672,
          "longitude": 16.9775194
        },
        {
          "latitude": 51.049127,
          "longitude": 16.9775516
        },
        {
          "latitude": 51.0490841,
          "longitude": 16.9775838
        },
        {
          "latitude": 51.0490224,
          "longitude": 16.9776106
        },
        {
          "latitude": 51.0489285,
          "longitude": 16.9776267
        },
        {
          "latitude": 51.0488775,
          "longitude": 16.9776213
        },
        {
          "latitude": 51.0487756,
          "longitude": 16.9775811
        },
        {
          "latitude": 51.0487327,
          "longitude": 16.9775489
        },
        {
          "latitude": 51.0486817,
          "longitude": 16.9775006
        },
        {
          "latitude": 51.0486361,
          "longitude": 16.9774416
        },
        {
          "latitude": 51.0486013,
          "longitude": 16.9773853
        },
        {
          "latitude": 51.0485691,
          "longitude": 16.9773182
        },
        {
          "latitude": 51.0485208,
          "longitude": 16.9771841
        },
        {
          "latitude": 51.0484913,
          "longitude": 16.9770178
        },
        {
          "latitude": 51.0484859,
          "longitude": 16.9769213
        },
        {
          "latitude": 51.0484859,
          "longitude": 16.9768408
        },
        {
          "latitude": 51.0484886,
          "longitude": 16.9767603
        },
        {
          "latitude": 51.0485128,
          "longitude": 16.9765458
        },
        {
          "latitude": 51.0485262,
          "longitude": 16.9764814
        },
        {
          "latitude": 51.0486093,
          "longitude": 16.9762212
        },
        {
          "latitude": 51.0486174,
          "longitude": 16.9761783
        },
        {
          "latitude": 51.0486281,
          "longitude": 16.9761166
        },
        {
          "latitude": 51.0486549,
          "longitude": 16.9758591
        },
        {
          "latitude": 51.0488158,
          "longitude": 16.9753146
        },
        {
          "latitude": 51.0489982,
          "longitude": 16.974636
        },
        {
          "latitude": 51.0492852,
          "longitude": 16.9735309
        },
        {
          "latitude": 51.0494703,
          "longitude": 16.9727048
        },
        {
          "latitude": 51.049583,
          "longitude": 16.9722033
        },
        {
          "latitude": 51.0497761,
          "longitude": 16.9712216
        },
        {
          "latitude": 51.0500363,
          "longitude": 16.9696498
        },
        {
          "latitude": 51.0500845,
          "longitude": 16.9692877
        },
        {
          "latitude": 51.050224,
          "longitude": 16.9681129
        },
        {
          "latitude": 51.0502374,
          "longitude": 16.9679949
        },
        {
          "latitude": 51.0502508,
          "longitude": 16.9678688
        },
        {
          "latitude": 51.0503072,
          "longitude": 16.9672304
        },
        {
          "latitude": 51.0503662,
          "longitude": 16.966458
        },
        {
          "latitude": 51.0504252,
          "longitude": 16.9654575
        },
        {
          "latitude": 51.0504439,
          "longitude": 16.9650257
        },
        {
          "latitude": 51.0504466,
          "longitude": 16.9648406
        },
        {
          "latitude": 51.0504493,
          "longitude": 16.9647601
        },
        {
          "latitude": 51.0504574,
          "longitude": 16.9646099
        },
        {
          "latitude": 51.0504708,
          "longitude": 16.9638669
        },
        {
          "latitude": 51.0504735,
          "longitude": 16.9630784
        },
        {
          "latitude": 51.0504708,
          "longitude": 16.9628906
        },
        {
          "latitude": 51.0504547,
          "longitude": 16.9618902
        },
        {
          "latitude": 51.0504064,
          "longitude": 16.9607341
        },
        {
          "latitude": 51.0503367,
          "longitude": 16.959731
        },
        {
          "latitude": 51.0502616,
          "longitude": 16.9588861
        },
        {
          "latitude": 51.0501087,
          "longitude": 16.957545
        },
        {
          "latitude": 51.0499343,
          "longitude": 16.9563165
        },
        {
          "latitude": 51.0496983,
          "longitude": 16.9549727
        },
        {
          "latitude": 51.049473,
          "longitude": 16.9538811
        },
        {
          "latitude": 51.0485879,
          "longitude": 16.9501126
        },
        {
          "latitude": 51.0483277,
          "longitude": 16.9490531
        },
        {
          "latitude": 51.0475472,
          "longitude": 16.945703
        },
        {
          "latitude": 51.0474989,
          "longitude": 16.9452739
        },
        {
          "latitude": 51.0471824,
          "longitude": 16.9435868
        },
        {
          "latitude": 51.0469812,
          "longitude": 16.9425568
        },
        {
          "latitude": 51.046831,
          "longitude": 16.9418621
        },
        {
          "latitude": 51.0466057,
          "longitude": 16.940918
        },
        {
          "latitude": 51.0465226,
          "longitude": 16.9405639
        },
        {
          "latitude": 51.0464931,
          "longitude": 16.9403064
        },
        {
          "latitude": 51.0464019,
          "longitude": 16.9398826
        },
        {
          "latitude": 51.046367,
          "longitude": 16.9396949
        },
        {
          "latitude": 51.0463321,
          "longitude": 16.939432
        },
        {
          "latitude": 51.0463187,
          "longitude": 16.9393006
        },
        {
          "latitude": 51.046308,
          "longitude": 16.9390136
        },
        {
          "latitude": 51.0463133,
          "longitude": 16.9387615
        },
        {
          "latitude": 51.0463321,
          "longitude": 16.9384772
        },
        {
          "latitude": 51.0463965,
          "longitude": 16.9380453
        },
        {
          "latitude": 51.0464662,
          "longitude": 16.9377235
        },
        {
          "latitude": 51.0466191,
          "longitude": 16.9369403
        },
        {
          "latitude": 51.0467774,
          "longitude": 16.9362992
        },
        {
          "latitude": 51.0467881,
          "longitude": 16.9362402
        },
        {
          "latitude": 51.0467935,
          "longitude": 16.9361705
        },
        {
          "latitude": 51.0469303,
          "longitude": 16.9357735
        },
        {
          "latitude": 51.0471126,
          "longitude": 16.9353577
        },
        {
          "latitude": 51.0472333,
          "longitude": 16.9351271
        },
        {
          "latitude": 51.0474265,
          "longitude": 16.9348159
        },
        {
          "latitude": 51.0475874,
          "longitude": 16.9346014
        },
        {
          "latitude": 51.0478744,
          "longitude": 16.9342902
        },
        {
          "latitude": 51.0482204,
          "longitude": 16.934014
        },
        {
          "latitude": 51.0485047,
          "longitude": 16.9338503
        },
        {
          "latitude": 51.0485932,
          "longitude": 16.9338101
        },
        {
          "latitude": 51.0489231,
          "longitude": 16.9336814
        },
        {
          "latitude": 51.049127,
          "longitude": 16.9336277
        },
        {
          "latitude": 51.0493523,
          "longitude": 16.933566
        },
        {
          "latitude": 51.0496822,
          "longitude": 16.933381
        },
        {
          "latitude": 51.0499316,
          "longitude": 16.9333139
        },
        {
          "latitude": 51.0531691,
          "longitude": 16.9324771
        },
        {
          "latitude": 51.0540274,
          "longitude": 16.9322625
        },
        {
          "latitude": 51.0547704,
          "longitude": 16.932072
        },
        {
          "latitude": 51.0561973,
          "longitude": 16.9317126
        },
        {
          "latitude": 51.0581714,
          "longitude": 16.9312432
        },
        {
          "latitude": 51.0606444,
          "longitude": 16.9305995
        },
        {
          "latitude": 51.0608563,
          "longitude": 16.9305432
        },
        {
          "latitude": 51.0634956,
          "longitude": 16.9298083
        },
        {
          "latitude": 51.0636029,
          "longitude": 16.9297788
        },
        {
          "latitude": 51.06415,
          "longitude": 16.9296393
        },
        {
          "latitude": 51.064437,
          "longitude": 16.9295695
        },
        {
          "latitude": 51.0644531,
          "longitude": 16.9295669
        },
        {
          "latitude": 51.0649708,
          "longitude": 16.9294247
        },
        {
          "latitude": 51.0651746,
          "longitude": 16.9293711
        },
        {
          "latitude": 51.066497,
          "longitude": 16.9290197
        },
        {
          "latitude": 51.0667652,
          "longitude": 16.9289473
        },
        {
          "latitude": 51.0668671,
          "longitude": 16.9289204
        },
        {
          "latitude": 51.0669529,
          "longitude": 16.9288963
        },
        {
          "latitude": 51.0677844,
          "longitude": 16.9286844
        },
        {
          "latitude": 51.0685328,
          "longitude": 16.9284967
        },
        {
          "latitude": 51.0694903,
          "longitude": 16.9282445
        },
        {
          "latitude": 51.0710594,
          "longitude": 16.927869
        },
        {
          "latitude": 51.0712498,
          "longitude": 16.9278234
        },
        {
          "latitude": 51.0721216,
          "longitude": 16.9276249
        },
        {
          "latitude": 51.0728833,
          "longitude": 16.9274908
        },
        {
          "latitude": 51.0735565,
          "longitude": 16.9273889
        },
        {
          "latitude": 51.0743156,
          "longitude": 16.9273031
        },
        {
          "latitude": 51.0751846,
          "longitude": 16.9272575
        },
        {
          "latitude": 51.0762763,
          "longitude": 16.9272736
        },
        {
          "latitude": 51.076853,
          "longitude": 16.9273192
        },
        {
          "latitude": 51.0782719,
          "longitude": 16.9274962
        },
        {
          "latitude": 51.0793903,
          "longitude": 16.9277081
        },
        {
          "latitude": 51.0807529,
          "longitude": 16.9280541
        },
        {
          "latitude": 51.0810667,
          "longitude": 16.9281399
        },
        {
          "latitude": 51.0823756,
          "longitude": 16.9285074
        },
        {
          "latitude": 51.0834083,
          "longitude": 16.9287756
        },
        {
          "latitude": 51.0844114,
          "longitude": 16.9290572
        },
        {
          "latitude": 51.0845321,
          "longitude": 16.9290921
        },
        {
          "latitude": 51.0864258,
          "longitude": 16.9296312
        },
        {
          "latitude": 51.0868093,
          "longitude": 16.9297412
        },
        {
          "latitude": 51.0907575,
          "longitude": 16.9308811
        },
        {
          "latitude": 51.0926834,
          "longitude": 16.9314229
        },
        {
          "latitude": 51.0929462,
          "longitude": 16.9314846
        },
        {
          "latitude": 51.0944751,
          "longitude": 16.9319138
        },
        {
          "latitude": 51.0953173,
          "longitude": 16.9321552
        },
        {
          "latitude": 51.0985118,
          "longitude": 16.9330564
        },
        {
          "latitude": 51.1003062,
          "longitude": 16.9335634
        },
        {
          "latitude": 51.101414,
          "longitude": 16.9338691
        },
        {
          "latitude": 51.1021918,
          "longitude": 16.9340488
        },
        {
          "latitude": 51.1024922,
          "longitude": 16.9342071
        },
        {
          "latitude": 51.1027497,
          "longitude": 16.9342768
        },
        {
          "latitude": 51.1030152,
          "longitude": 16.9343948
        },
        {
          "latitude": 51.1031601,
          "longitude": 16.934478
        },
        {
          "latitude": 51.1034122,
          "longitude": 16.9346496
        },
        {
          "latitude": 51.1036804,
          "longitude": 16.9349179
        },
        {
          "latitude": 51.1039594,
          "longitude": 16.9352773
        },
        {
          "latitude": 51.1044234,
          "longitude": 16.9359156
        },
        {
          "latitude": 51.1045226,
          "longitude": 16.9360363
        },
        {
          "latitude": 51.1047748,
          "longitude": 16.9362938
        },
        {
          "latitude": 51.1050215,
          "longitude": 16.9365057
        },
        {
          "latitude": 51.1053488,
          "longitude": 16.9367203
        },
        {
          "latitude": 51.1055446,
          "longitude": 16.9368276
        },
        {
          "latitude": 51.105727,
          "longitude": 16.9368786
        },
        {
          "latitude": 51.1057994,
          "longitude": 16.9368866
        },
        {
          "latitude": 51.1062205,
          "longitude": 16.9370019
        },
        {
          "latitude": 51.1069795,
          "longitude": 16.9371951
        },
        {
          "latitude": 51.1077735,
          "longitude": 16.9373775
        },
        {
          "latitude": 51.1080873,
          "longitude": 16.9374472
        },
        {
          "latitude": 51.1083984,
          "longitude": 16.9375196
        },
        {
          "latitude": 51.1087015,
          "longitude": 16.9375893
        },
        {
          "latitude": 51.1089081,
          "longitude": 16.9377208
        },
        {
          "latitude": 51.10901,
          "longitude": 16.9378039
        },
        {
          "latitude": 51.1091065,
          "longitude": 16.9379219
        },
        {
          "latitude": 51.1091334,
          "longitude": 16.937989
        },
        {
          "latitude": 51.1091951,
          "longitude": 16.9382277
        },
        {
          "latitude": 51.1092487,
          "longitude": 16.9388473
        },
        {
          "latitude": 51.1091843,
          "longitude": 16.9397566
        },
        {
          "latitude": 51.1091441,
          "longitude": 16.9403198
        },
        {
          "latitude": 51.10912,
          "longitude": 16.9406605
        },
        {
          "latitude": 51.1091039,
          "longitude": 16.940918
        },
        {
          "latitude": 51.1091012,
          "longitude": 16.9409367
        },
        {
          "latitude": 51.1090744,
          "longitude": 16.9412103
        },
        {
          "latitude": 51.1090636,
          "longitude": 16.9413042
        },
        {
          "latitude": 51.1089134,
          "longitude": 16.9425595
        },
        {
          "latitude": 51.108613,
          "longitude": 16.9447026
        },
        {
          "latitude": 51.1085245,
          "longitude": 16.9453275
        },
        {
          "latitude": 51.1084467,
          "longitude": 16.9458613
        },
        {
          "latitude": 51.1083984,
          "longitude": 16.9461456
        },
        {
          "latitude": 51.1082268,
          "longitude": 16.9471058
        },
        {
          "latitude": 51.1080658,
          "longitude": 16.9480151
        },
        {
          "latitude": 51.1079317,
          "longitude": 16.9484979
        },
        {
          "latitude": 51.1078915,
          "longitude": 16.9486105
        },
        {
          "latitude": 51.1077359,
          "longitude": 16.9489136
        },
        {
          "latitude": 51.1077118,
          "longitude": 16.9489539
        },
        {
          "latitude": 51.1072183,
          "longitude": 16.9497746
        },
        {
          "latitude": 51.1070868,
          "longitude": 16.9499704
        },
        {
          "latitude": 51.1069742,
          "longitude": 16.9501045
        },
        {
          "latitude": 51.10695,
          "longitude": 16.9500723
        },
        {
          "latitude": 51.1068615,
          "longitude": 16.9500294
        },
        {
          "latitude": 51.1067837,
          "longitude": 16.9500241
        },
        {
          "latitude": 51.1067113,
          "longitude": 16.9500375
        },
        {
          "latitude": 51.106655,
          "longitude": 16.9500723
        },
        {
          "latitude": 51.1065933,
          "longitude": 16.9501448
        },
        {
          "latitude": 51.1065423,
          "longitude": 16.9502333
        },
        {
          "latitude": 51.1065128,
          "longitude": 16.9503191
        },
        {
          "latitude": 51.1064941,
          "longitude": 16.9504371
        },
        {
          "latitude": 51.1065102,
          "longitude": 16.9505498
        },
        {
          "latitude": 51.1065102,
          "longitude": 16.950649
        },
        {
          "latitude": 51.1065343,
          "longitude": 16.9507617
        },
        {
          "latitude": 51.1065772,
          "longitude": 16.9508448
        },
        {
          "latitude": 51.1066175,
          "longitude": 16.9508958
        },
        {
          "latitude": 51.1066818,
          "longitude": 16.9509414
        },
        {
          "latitude": 51.1067703,
          "longitude": 16.9509655
        },
        {
          "latitude": 51.1068508,
          "longitude": 16.9509682
        },
        {
          "latitude": 51.1069259,
          "longitude": 16.9509307
        },
        {
          "latitude": 51.1069903,
          "longitude": 16.9508636
        },
        {
          "latitude": 51.1071968,
          "longitude": 16.9509038
        },
        {
          "latitude": 51.1074087,
          "longitude": 16.9510058
        },
        {
          "latitude": 51.1074838,
          "longitude": 16.9510728
        },
        {
          "latitude": 51.1075911,
          "longitude": 16.9511667
        },
        {
          "latitude": 51.1080042,
          "longitude": 16.9515395
        },
        {
          "latitude": 51.1083233,
          "longitude": 16.9518533
        },
        {
          "latitude": 51.1083984,
          "longitude": 16.9519714
        },
        {
          "latitude": 51.1084414,
          "longitude": 16.9520411
        },
        {
          "latitude": 51.1085406,
          "longitude": 16.9521913
        },
        {
          "latitude": 51.1086103,
          "longitude": 16.9523227
        },
        {
          "latitude": 51.1089107,
          "longitude": 16.9528967
        },
        {
          "latitude": 51.1092219,
          "longitude": 16.9535458
        },
        {
          "latitude": 51.1099836,
          "longitude": 16.95519
        },
        {
          "latitude": 51.1100695,
          "longitude": 16.9553724
        },
        {
          "latitude": 51.1101285,
          "longitude": 16.9555011
        },
        {
          "latitude": 51.1110136,
          "longitude": 16.9573089
        },
        {
          "latitude": 51.1113301,
          "longitude": 16.9579715
        },
        {
          "latitude": 51.1117083,
          "longitude": 16.9589612
        },
        {
          "latitude": 51.1119443,
          "longitude": 16.9596934
        },
        {
          "latitude": 51.112065,
          "longitude": 16.9600582
        },
        {
          "latitude": 51.1121294,
          "longitude": 16.9602486
        },
        {
          "latitude": 51.1123574,
          "longitude": 16.960997
        },
        {
          "latitude": 51.1125103,
          "longitude": 16.9615442
        },
        {
          "latitude": 51.1127785,
          "longitude": 16.9626305
        },
        {
          "latitude": 51.112859,
          "longitude": 16.9628906
        },
        {
          "latitude": 51.1128643,
          "longitude": 16.962904
        },
        {
          "latitude": 51.1130816,
          "longitude": 16.9634646
        },
        {
          "latitude": 51.1133122,
          "longitude": 16.9639367
        },
        {
          "latitude": 51.1135483,
          "longitude": 16.9644517
        },
        {
          "latitude": 51.1136878,
          "longitude": 16.964795
        },
        {
          "latitude": 51.1138326,
          "longitude": 16.9651034
        },
        {
          "latitude": 51.1139506,
          "longitude": 16.9654521
        },
        {
          "latitude": 51.1141115,
          "longitude": 16.9659269
        },
        {
          "latitude": 51.1141276,
          "longitude": 16.9660074
        },
        {
          "latitude": 51.1141652,
          "longitude": 16.9661468
        },
        {
          "latitude": 51.1142188,
          "longitude": 16.9664741
        },
        {
          "latitude": 51.1142671,
          "longitude": 16.9667718
        },
        {
          "latitude": 51.1142832,
          "longitude": 16.9668978
        },
        {
          "latitude": 51.1142913,
          "longitude": 16.9671634
        },
        {
          "latitude": 51.1142886,
          "longitude": 16.9673324
        },
        {
          "latitude": 51.1142805,
          "longitude": 16.9678688
        },
        {
          "latitude": 51.1142752,
          "longitude": 16.9682309
        },
        {
          "latitude": 51.1142698,
          "longitude": 16.9683006
        },
        {
          "latitude": 51.1142644,
          "longitude": 16.9685608
        },
        {
          "latitude": 51.1142591,
          "longitude": 16.9689041
        },
        {
          "latitude": 51.1142617,
          "longitude": 16.969749
        },
        {
          "latitude": 51.1142832,
          "longitude": 16.9700897
        },
        {
          "latitude": 51.1142913,
          "longitude": 16.9703713
        },
        {
          "latitude": 51.1143154,
          "longitude": 16.9706368
        },
        {
          "latitude": 51.1143127,
          "longitude": 16.9708246
        },
        {
          "latitude": 51.1143342,
          "longitude": 16.9710553
        },
        {
          "latitude": 51.1143851,
          "longitude": 16.9714737
        },
        {
          "latitude": 51.114412,
          "longitude": 16.9717231
        },
        {
          "latitude": 51.1145112,
          "longitude": 16.972568
        },
        {
          "latitude": 51.1145192,
          "longitude": 16.9727424
        },
        {
          "latitude": 51.114538,
          "longitude": 16.9728014
        },
        {
          "latitude": 51.1145461,
          "longitude": 16.9737831
        },
        {
          "latitude": 51.1145005,
          "longitude": 16.9744456
        },
        {
          "latitude": 51.1143771,
          "longitude": 16.9753388
        },
        {
          "latitude": 51.1143234,
          "longitude": 16.9756338
        },
        {
          "latitude": 51.1142161,
          "longitude": 16.9757625
        },
        {
          "latitude": 51.1141974,
          "longitude": 16.9758403
        },
        {
          "latitude": 51.1141759,
          "longitude": 16.9759449
        },
        {
          "latitude": 51.114133,
          "longitude": 16.9762319
        },
        {
          "latitude": 51.1140981,
          "longitude": 16.9766182
        },
        {
          "latitude": 51.114082,
          "longitude": 16.9771385
        },
        {
          "latitude": 51.1141464,
          "longitude": 16.9784689
        },
        {
          "latitude": 51.1141625,
          "longitude": 16.9787425
        },
        {
          "latitude": 51.1142081,
          "longitude": 16.9795257
        },
        {
          "latitude": 51.114251,
          "longitude": 16.9796196
        },
        {
          "latitude": 51.1143771,
          "longitude": 16.9807675
        },
        {
          "latitude": 51.1145326,
          "longitude": 16.9824359
        },
        {
          "latitude": 51.1145192,
          "longitude": 16.9825485
        },
        {
          "latitude": 51.1145326,
          "longitude": 16.9827953
        },
        {
          "latitude": 51.1145729,
          "longitude": 16.983549
        },
        {
          "latitude": 51.1145675,
          "longitude": 16.984064
        },
        {
          "latitude": 51.1145729,
          "longitude": 16.9842464
        },
        {
          "latitude": 51.1145702,
          "longitude": 16.9842866
        },
        {
          "latitude": 51.1145219,
          "longitude": 16.9845656
        },
        {
          "latitude": 51.1144602,
          "longitude": 16.9848633
        },
        {
          "latitude": 51.1140901,
          "longitude": 16.9866845
        },
        {
          "latitude": 51.1140794,
          "longitude": 16.986765
        },
        {
          "latitude": 51.1140767,
          "longitude": 16.9869232
        },
        {
          "latitude": 51.1140847,
          "longitude": 16.9869876
        },
        {
          "latitude": 51.1140954,
          "longitude": 16.987052
        },
        {
          "latitude": 51.1141115,
          "longitude": 16.9871029
        },
        {
          "latitude": 51.1142081,
          "longitude": 16.987339
        },
        {
          "latitude": 51.1143556,
          "longitude": 16.9877252
        },
        {
          "latitude": 51.1143878,
          "longitude": 16.9878218
        },
        {
          "latitude": 51.114412,
          "longitude": 16.9879881
        },
        {
          "latitude": 51.1144066,
          "longitude": 16.9880927
        },
        {
          "latitude": 51.1143905,
          "longitude": 16.9881865
        },
        {
          "latitude": 51.1140123,
          "longitude": 16.9901687
        },
        {
          "latitude": 51.1139748,
          "longitude": 16.9905335
        },
        {
          "latitude": 51.1139613,
          "longitude": 16.9907561
        },
        {
          "latitude": 51.1139265,
          "longitude": 16.9913864
        },
        {
          "latitude": 51.1138862,
          "longitude": 16.9933766
        },
        {
          "latitude": 51.1138541,
          "longitude": 16.9945729
        },
        {
          "latitude": 51.1138433,
          "longitude": 16.9950369
        },
        {
          "latitude": 51.1138245,
          "longitude": 16.9958121
        },
        {
          "latitude": 51.1138138,
          "longitude": 16.9962063
        },
        {
          "latitude": 51.1137897,
          "longitude": 16.9972068
        },
        {
          "latitude": 51.113787,
          "longitude": 16.9973329
        },
        {
          "latitude": 51.1137843,
          "longitude": 16.9974536
        },
        {
          "latitude": 51.1137521,
          "longitude": 16.9976467
        },
        {
          "latitude": 51.1136609,
          "longitude": 16.99821
        },
        {
          "latitude": 51.113618,
          "longitude": 16.9984594
        },
        {
          "latitude": 51.1135429,
          "longitude": 16.9988912
        },
        {
          "latitude": 51.1133498,
          "longitude": 16.9999427
        },
        {
          "latitude": 51.1133096,
          "longitude": 17.0001572
        },
        {
          "latitude": 51.1132103,
          "longitude": 17.0006374
        },
        {
          "latitude": 51.1130977,
          "longitude": 17.0011872
        },
        {
          "latitude": 51.1129743,
          "longitude": 17.0018417
        },
        {
          "latitude": 51.1129045,
          "longitude": 17.0022735
        },
        {
          "latitude": 51.1128616,
          "longitude": 17.0024613
        },
        {
          "latitude": 51.112808,
          "longitude": 17.0025739
        },
        {
          "latitude": 51.1126766,
          "longitude": 17.0032445
        },
        {
          "latitude": 51.112631,
          "longitude": 17.0034805
        },
        {
          "latitude": 51.1125612,
          "longitude": 17.0038506
        },
        {
          "latitude": 51.1124218,
          "longitude": 17.0045078
        },
        {
          "latitude": 51.1122689,
          "longitude": 17.0053741
        },
        {
          "latitude": 51.1122206,
          "longitude": 17.0056102
        },
        {
          "latitude": 51.112175,
          "longitude": 17.0058516
        },
        {
          "latitude": 51.1121508,
          "longitude": 17.0059669
        },
        {
          "latitude": 51.1122394,
          "longitude": 17.0060098
        },
        {
          "latitude": 51.1124244,
          "longitude": 17.0060876
        },
        {
          "latitude": 51.1125693,
          "longitude": 17.0061386
        },
        {
          "latitude": 51.1127087,
          "longitude": 17.0062619
        },
        {
          "latitude": 51.1127678,
          "longitude": 17.0063263
        },
        {
          "latitude": 51.1127973,
          "longitude": 17.0063639
        },
        {
          "latitude": 51.1128268,
          "longitude": 17.0064202
        },
        {
          "latitude": 51.1128509,
          "longitude": 17.0065248
        },
        {
          "latitude": 51.1128643,
          "longitude": 17.0066428
        },
        {
          "latitude": 51.1128858,
          "longitude": 17.0068118
        },
        {
          "latitude": 51.1128831,
          "longitude": 17.0068359
        },
        {
          "latitude": 51.1128724,
          "longitude": 17.0068869
        },
        {
          "latitude": 51.1128402,
          "longitude": 17.0071846
        },
        {
          "latitude": 51.1128134,
          "longitude": 17.0075521
        },
        {
          "latitude": 51.1128134,
          "longitude": 17.0082548
        },
        {
          "latitude": 51.1127517,
          "longitude": 17.0106474
        },
        {
          "latitude": 51.1127275,
          "longitude": 17.0116988
        },
        {
          "latitude": 51.1127141,
          "longitude": 17.0120957
        },
        {
          "latitude": 51.1127007,
          "longitude": 17.0124766
        },
        {
          "latitude": 51.1126953,
          "longitude": 17.0127046
        },
        {
          "latitude": 51.1126873,
          "longitude": 17.0129728
        },
        {
          "latitude": 51.1126819,
          "longitude": 17.0131069
        },
        {
          "latitude": 51.1126685,
          "longitude": 17.0134959
        },
        {
          "latitude": 51.1126927,
          "longitude": 17.0145258
        },
        {
          "latitude": 51.1126283,
          "longitude": 17.0156336
        },
        {
          "latitude": 51.1126176,
          "longitude": 17.0160547
        },
        {
          "latitude": 51.11258,
          "longitude": 17.0167655
        },
        {
          "latitude": 51.1124271,
          "longitude": 17.0179832
        },
        {
          "latitude": 51.1123869,
          "longitude": 17.018289
        },
        {
          "latitude": 51.1123601,
          "longitude": 17.0184365
        },
        {
          "latitude": 51.1122045,
          "longitude": 17.0192814
        },
        {
          "latitude": 51.1121616,
          "longitude": 17.0195121
        },
        {
          "latitude": 51.1121589,
          "longitude": 17.0195201
        },
        {
          "latitude": 51.1120731,
          "longitude": 17.0198715
        },
        {
          "latitude": 51.1120409,
          "longitude": 17.0199761
        },
        {
          "latitude": 51.1119899,
          "longitude": 17.0201612
        },
        {
          "latitude": 51.1117646,
          "longitude": 17.0208853
        },
        {
          "latitude": 51.1116868,
          "longitude": 17.0211402
        },
        {
          "latitude": 51.1116546,
          "longitude": 17.0212314
        },
        {
          "latitude": 51.1116359,
          "longitude": 17.0212877
        },
        {
          "latitude": 51.1115634,
          "longitude": 17.0215532
        },
        {
          "latitude": 51.1114803,
          "longitude": 17.0218483
        },
        {
          "latitude": 51.1114052,
          "longitude": 17.0221004
        },
        {
          "latitude": 51.1110941,
          "longitude": 17.0230821
        },
        {
          "latitude": 51.1110377,
          "longitude": 17.0232779
        },
        {
          "latitude": 51.1109921,
          "longitude": 17.023471
        },
        {
          "latitude": 51.110909,
          "longitude": 17.0238385
        },
        {
          "latitude": 51.11085,
          "longitude": 17.0241067
        },
        {
          "latitude": 51.1106595,
          "longitude": 17.025032
        },
        {
          "latitude": 51.1105459,
          "longitude": 17.0255623
        }
      ]
    }
  ],
  "sections": [
    {
      "maxSpeedLimitInKmh": 50,
      "startPointIndex": 0,
      "endPointIndex": 13,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 30,
      "startPointIndex": 13,
      "endPointIndex": 17,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 0,
      "endPointIndex": 25,
      "sectionType": "URBAN"
    },
    {
      "maxSpeedLimitInKmh": 50,
      "startPointIndex": 17,
      "endPointIndex": 39,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 30,
      "startPointIndex": 39,
      "endPointIndex": 42,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 50,
      "startPointIndex": 42,
      "endPointIndex": 80,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 84,
      "endPointIndex": 88,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "pol-nationalroad",
          "shieldContent": "35"
        }
      ]
    },
    {
      "startPointIndex": 88,
      "endPointIndex": 89,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "pol-nationalroad",
          "shieldContent": "5"
        },
        {
          "reference": "global-fallback",
          "shieldContent": "35"
        }
      ]
    },
    {
      "maxSpeedLimitInKmh": 60,
      "startPointIndex": 80,
      "endPointIndex": 93,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 89,
      "endPointIndex": 93,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "pol-nationalroad",
          "shieldContent": "35"
        },
        {
          "reference": "pol-nationalroad",
          "shieldContent": "5"
        },
        {
          "reference": "european-road",
          "shieldContent": "E261"
        }
      ]
    },
    {
      "maxSpeedLimitInKmh": 50,
      "startPointIndex": 93,
      "endPointIndex": 96,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 93,
      "endPointIndex": 96,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "pol-nationalroad",
          "shieldContent": "5"
        },
        {
          "reference": "pol-nationalroad",
          "shieldContent": "35"
        },
        {
          "reference": "european-road",
          "shieldContent": "E261"
        }
      ]
    },
    {
      "maxSpeedLimitInKmh": 60,
      "startPointIndex": 96,
      "endPointIndex": 101,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 40,
      "startPointIndex": 101,
      "endPointIndex": 132,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 140,
      "startPointIndex": 132,
      "endPointIndex": 134,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 80,
      "startPointIndex": 134,
      "endPointIndex": 138,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 132,
      "endPointIndex": 141,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "pol-nationalroad",
          "shieldContent": "A4"
        },
        {
          "reference": "european-road",
          "shieldContent": "E40"
        }
      ]
    },
    {
      "startPointIndex": 32,
      "endPointIndex": 152,
      "sectionType": "URBAN"
    },
    {
      "startPointIndex": 141,
      "endPointIndex": 164,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "pol-nationalroad",
          "shieldContent": "A4"
        },
        {
          "reference": "pol-nationalroad",
          "shieldContent": "5"
        },
        {
          "reference": "european-road",
          "shieldContent": "E40"
        }
      ]
    },
    {
      "maxSpeedLimitInKmh": 140,
      "startPointIndex": 138,
      "endPointIndex": 166,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 70,
      "startPointIndex": 166,
      "endPointIndex": 174,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 60,
      "startPointIndex": 174,
      "endPointIndex": 180,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 40,
      "startPointIndex": 180,
      "endPointIndex": 197,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 132,
      "endPointIndex": 247,
      "sectionType": "MOTORWAY"
    },
    {
      "startPointIndex": 197,
      "endPointIndex": 247,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "pol-nationalroad",
          "shieldContent": "A8"
        },
        {
          "reference": "european-road",
          "shieldContent": "E67"
        }
      ]
    },
    {
      "maxSpeedLimitInKmh": 120,
      "startPointIndex": 197,
      "endPointIndex": 251,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 50,
      "startPointIndex": 251,
      "endPointIndex": 262,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 70,
      "startPointIndex": 262,
      "endPointIndex": 266,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 50,
      "startPointIndex": 266,
      "endPointIndex": 274,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 90,
      "startPointIndex": 274,
      "endPointIndex": 277,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 50,
      "startPointIndex": 277,
      "endPointIndex": 280,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 40,
      "startPointIndex": 280,
      "endPointIndex": 282,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 50,
      "startPointIndex": 282,
      "endPointIndex": 285,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 60,
      "startPointIndex": 285,
      "endPointIndex": 295,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 50,
      "startPointIndex": 314,
      "endPointIndex": 389,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 30,
      "startPointIndex": 389,
      "endPointIndex": 409,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 50,
      "startPointIndex": 409,
      "endPointIndex": 431,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 40,
      "startPointIndex": 431,
      "endPointIndex": 438,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 50,
      "startPointIndex": 438,
      "endPointIndex": 488,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 0,
      "endPointIndex": 488,
      "sectionType": "COUNTRY",
      "countryCode": "POL"
    },
    {
      "startPointIndex": 0,
      "endPointIndex": 488,
      "sectionType": "TRAVEL_MODE",
      "travelMode": "car"
    },
    {
      "startPointIndex": 284,
      "endPointIndex": 488,
      "sectionType": "URBAN"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 135,
      "endPointIndex": 138,
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
      "startPointIndex": 163,
      "endPointIndex": 164,
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
        "LONG_DASHED",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "startPointIndex": 211,
      "endPointIndex": 212,
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
        "LONG_DASHED",
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
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "startPointIndex": 266,
      "endPointIndex": 268,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "startPointIndex": 292,
      "endPointIndex": 295,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "startPointIndex": 304,
      "endPointIndex": 314,
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
      "startPointIndex": 436,
      "endPointIndex": 437,
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
            "SLIGHT_RIGHT"
          ],
          "follow": "SLIGHT_RIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "startPointIndex": 440,
      "endPointIndex": 441,
      "sectionType": "LANES"
    }
  ],
  "guidance": {
    "instructions": [
      {
        "routeOffsetInMeters": 0,
        "travelTimeInSeconds": 0,
        "point": {
          "latitude": 51.03454,
          "longitude": 16.99145
        },
        "pointIndex": 0,
        "instructionType": "LOCATION_DEPARTURE",
        "street": "Templariuszy",
        "phoneticStreet": "tɛm.pla.ˈrju.ʃɨ",
        "phoneticStreetLanguageCode": "pl-PL",
        "countryCode": "POL",
        "possibleCombineWithNext": false,
        "drivingSide": "RIGHT",
        "maneuver": "DEPART",
        "message": "Leave from <street>Templariuszy</street>",
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.034539,
            "longitude": 16.9914468
          },
          "pointIndex": 0,
          "maneuver": "DEPART",
          "distanceInMeters": 0
        }
      },
      {
        "routeOffsetInMeters": 11,
        "travelTimeInSeconds": 3,
        "point": {
          "latitude": 51.03448,
          "longitude": 16.99158
        },
        "pointIndex": 1,
        "instructionType": "TURN",
        "street": "Templariuszy",
        "phoneticStreet": "tɛm.pla.ˈrju.ʃɨ",
        "phoneticStreetLanguageCode": "pl-PL",
        "countryCode": "POL",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": -180,
        "possibleCombineWithNext": true,
        "drivingSide": "RIGHT",
        "maneuver": "TRY_MAKE_UTURN",
        "message": "Try to make a U-turn at <street>Templariuszy</street>",
        "combinedMessage": "Try to make a U-turn at <street>Templariuszy</street> then turn right onto <street>Templariuszy</street>",
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.034539,
            "longitude": 16.9914468
          },
          "pointIndex": 0,
          "maneuver": "TRY_MAKE_UTURN",
          "distanceInMeters": 200
        }
      },
      {
        "routeOffsetInMeters": 49,
        "travelTimeInSeconds": 133,
        "point": {
          "latitude": 51.03468,
          "longitude": 16.99115
        },
        "pointIndex": 2,
        "instructionType": "TURN",
        "street": "Templariuszy",
        "phoneticStreet": "tɛm.pla.ˈrju.ʃɨ",
        "phoneticStreetLanguageCode": "pl-PL",
        "countryCode": "POL",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": 90,
        "possibleCombineWithNext": true,
        "drivingSide": "RIGHT",
        "maneuver": "TURN_RIGHT",
        "message": "Turn right onto <street>Templariuszy</street>",
        "combinedMessage": "Turn right onto <street>Templariuszy</street> then turn left onto <street>Główna</street>",
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.0345203,
            "longitude": 16.9914859
          },
          "pointIndex": 1,
          "maneuver": "TURN_RIGHT",
          "distanceInMeters": 30
        }
      },
      {
        "routeOffsetInMeters": 113,
        "travelTimeInSeconds": 161,
        "point": {
          "latitude": 51.03519,
          "longitude": 16.99158
        },
        "pointIndex": 4,
        "instructionType": "TURN",
        "street": "Główna",
        "phoneticStreet": "ˈgwu.vna",
        "phoneticStreetLanguageCode": "pl-PL",
        "countryCode": "POL",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": -90,
        "possibleCombineWithNext": false,
        "drivingSide": "RIGHT",
        "maneuver": "TURN_LEFT",
        "message": "Turn left onto <street>Główna</street>",
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.0349588,
            "longitude": 16.9913701
          },
          "pointIndex": 3,
          "maneuver": "TURN_LEFT",
          "distanceInMeters": 30
        }
      },
      {
        "routeOffsetInMeters": 553,
        "travelTimeInSeconds": 219,
        "point": {
          "latitude": 51.03737,
          "longitude": 16.98636
        },
        "pointIndex": 9,
        "instructionType": "TURN",
        "street": "Przystankowa",
        "phoneticStreet": "pʃɨ.stan.ˈkɔ.va",
        "phoneticStreetLanguageCode": "pl-PL",
        "countryCode": "POL",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": -45,
        "possibleCombineWithNext": false,
        "drivingSide": "RIGHT",
        "maneuver": "BEAR_LEFT",
        "message": "Bear left at <street>Przystankowa</street>",
        "mainAnnouncement": {
          "point": {
            "latitude": 51.0367981,
            "longitude": 16.9874628
          },
          "pointIndex": 6,
          "maneuver": "BEAR_LEFT",
          "distanceInMeters": 100
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.0372528,
            "longitude": 16.9865788
          },
          "pointIndex": 7,
          "maneuver": "BEAR_LEFT",
          "distanceInMeters": 20
        }
      },
      {
        "routeOffsetInMeters": 1853,
        "travelTimeInSeconds": 447,
        "point": {
          "latitude": 51.03956,
          "longitude": 16.9691
        },
        "pointIndex": 47,
        "instructionType": "TURN",
        "street": "Wrocławska",
        "phoneticStreet": "vrɔ.ˈt⁀swa.fska",
        "phoneticStreetLanguageCode": "pl-PL",
        "countryCode": "POL",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": 90,
        "possibleCombineWithNext": false,
        "drivingSide": "RIGHT",
        "maneuver": "TURN_RIGHT",
        "message": "Turn right onto <street>Wrocławska</street>",
        "mainAnnouncement": {
          "point": {
            "latitude": 51.0389553,
            "longitude": 16.9717871
          },
          "pointIndex": 42,
          "maneuver": "TURN_RIGHT",
          "distanceInMeters": 200
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.0393813,
            "longitude": 16.9699069
          },
          "pointIndex": 45,
          "maneuver": "TURN_RIGHT",
          "distanceInMeters": 60
        }
      },
      {
        "routeOffsetInMeters": 3073,
        "travelTimeInSeconds": 604,
        "point": {
          "latitude": 51.04993,
          "longitude": 16.97327
        },
        "pointIndex": 96,
        "instructionType": "TURN",
        "roadNumbers": [
          "A4",
          "E40"
        ],
        "phoneticRoadNumbers": [
          "a.ˈt⁀ʃtɛ.rɨ",
          "ɛ.t⁀ʃtɛr.ˈd⁀ʑɛ.ɕt⁀ɕi"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "pl-PL",
          "pl-PL"
        ],
        "countryCode": "POL",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": 45,
        "possibleCombineWithNext": true,
        "drivingSide": "RIGHT",
        "maneuver": "BEAR_RIGHT",
        "message": "Bear right at <roadNumber>A4</roadNumber>/<roadNumber>E40</roadNumber>",
        "combinedMessage": "Bear right at <roadNumber>A4</roadNumber>/<roadNumber>E40</roadNumber> then keep straight on at <roadNumber>A4</roadNumber>/<roadNumber>E40</roadNumber> toward <signpostText>Wrocław</signpostText>",
        "earlyWarningAnnouncement": {
          "point": {
            "latitude": 51.0450384,
            "longitude": 16.9705006
          },
          "pointIndex": 72,
          "maneuver": "AHEAD_RIGHT_TURN",
          "distanceInMeters": 600
        },
        "mainAnnouncement": {
          "point": {
            "latitude": 51.0468381,
            "longitude": 16.9705453
          },
          "pointIndex": 79,
          "maneuver": "BEAR_RIGHT",
          "distanceInMeters": 400
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.0493642,
            "longitude": 16.9725895
          },
          "pointIndex": 90,
          "maneuver": "BEAR_RIGHT",
          "distanceInMeters": 80
        },
        "roadShieldReferences": [
          {
            "reference": "pol-nationalroad",
            "shieldContent": "A4"
          },
          {
            "reference": "european-road",
            "shieldContent": "E40"
          }
        ]
      },
      {
        "routeOffsetInMeters": 3939,
        "travelTimeInSeconds": 652,
        "point": {
          "latitude": 51.04978,
          "longitude": 16.97122
        },
        "pointIndex": 138,
        "instructionType": "TURN",
        "roadNumbers": [
          "A4",
          "E40"
        ],
        "phoneticRoadNumbers": [
          "a.ˈt⁀ʃtɛ.rɨ",
          "ɛ.t⁀ʃtɛr.ˈd⁀ʑɛ.ɕt⁀ɕi"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "pl-PL",
          "pl-PL"
        ],
        "countryCode": "POL",
        "signpostText": "Wrocław",
        "phoneticSignpostText": "ˈvrɔ.t⁀swaf",
        "phoneticSignpostTextLanguageCode": "pl-PL",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": 0,
        "possibleCombineWithNext": false,
        "drivingSide": "RIGHT",
        "maneuver": "STRAIGHT",
        "message": "Keep straight on at <roadNumber>A4</roadNumber>/<roadNumber>E40</roadNumber> toward <signpostText>Wrocław</signpostText>",
        "mainAnnouncement": {
          "point": {
            "latitude": 51.0501719,
            "longitude": 16.9741077
          },
          "pointIndex": 101,
          "maneuver": "STRAIGHT",
          "distanceInMeters": 800
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.0491349,
            "longitude": 16.9741098
          },
          "pointIndex": 134,
          "maneuver": "STRAIGHT",
          "distanceInMeters": 215
        },
        "roadShieldReferences": [
          {
            "reference": "pol-nationalroad",
            "shieldContent": "A4"
          },
          {
            "reference": "european-road",
            "shieldContent": "E40"
          }
        ],
        "signpostRoadShieldReferences": [
          {
            "reference": "pol-nationalroad",
            "shieldContent": "A8"
          },
          {
            "reference": "pol-nationalroad",
            "shieldContent": "A4"
          },
          {
            "reference": "european-road",
            "shieldContent": "E40"
          },
          {
            "reference": "pol-nationalroad",
            "shieldContent": "5"
          }
        ]
      },
      {
        "routeOffsetInMeters": 5785,
        "travelTimeInSeconds": 710,
        "point": {
          "latitude": 51.04755,
          "longitude": 16.9457
        },
        "pointIndex": 164,
        "instructionType": "TURN",
        "roadNumbers": [
          "A8",
          "E67"
        ],
        "phoneticRoadNumbers": [
          "a.ˈɔ.ɕɛm",
          "ɛ.ʃɛ.ʑd⁀ʑɛ.ɕɔnt.ˈɕɛ.dɛm"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "pl-PL",
          "pl-PL"
        ],
        "countryCode": "POL",
        "signpostText": "Wrocław",
        "phoneticSignpostText": "ˈvrɔ.t⁀swaf",
        "phoneticSignpostTextLanguageCode": "pl-PL",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": 45,
        "possibleCombineWithNext": true,
        "drivingSide": "RIGHT",
        "maneuver": "TAKE_EXIT",
        "message": "Take the exit onto <roadNumber>A8</roadNumber>/<roadNumber>E67</roadNumber> toward <signpostText>Wrocław</signpostText>",
        "combinedMessage": "Take the exit onto <roadNumber>A8</roadNumber>/<roadNumber>E67</roadNumber> toward <signpostText>Wrocław</signpostText> then take the exit onto <roadNumber>A8</roadNumber>/<roadNumber>E67</roadNumber> toward <signpostText>Warszawa</signpostText>",
        "earlyWarningAnnouncement": {
          "point": {
            "latitude": 51.0498901,
            "longitude": 16.9705327
          },
          "pointIndex": 138,
          "maneuver": "AHEAD_EXIT",
          "distanceInMeters": 1796
        },
        "mainAnnouncement": {
          "point": {
            "latitude": 51.0499534,
            "longitude": 16.9564504
          },
          "pointIndex": 158,
          "maneuver": "TAKE_EXIT",
          "distanceInMeters": 800
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.0488075,
            "longitude": 16.9510479
          },
          "pointIndex": 161,
          "maneuver": "TAKE_EXIT",
          "distanceInMeters": 400
        },
        "roadShieldReferences": [
          {
            "reference": "pol-nationalroad",
            "shieldContent": "A8"
          },
          {
            "reference": "european-road",
            "shieldContent": "E67"
          }
        ],
        "signpostRoadShieldReferences": [
          {
            "reference": "pol-nationalroad",
            "shieldContent": "S8"
          },
          {
            "reference": "european-road",
            "shieldContent": "E67"
          },
          {
            "reference": "pol-nationalroad",
            "shieldContent": "A8"
          }
        ]
      },
      {
        "routeOffsetInMeters": 6163,
        "travelTimeInSeconds": 726,
        "point": {
          "latitude": 51.04652,
          "longitude": 16.94056
        },
        "pointIndex": 170,
        "instructionType": "TURN",
        "roadNumbers": [
          "A8",
          "E67"
        ],
        "phoneticRoadNumbers": [
          "a.ˈɔ.ɕɛm",
          "ɛ.ʃɛ.ʑd⁀ʑɛ.ɕɔnt.ˈɕɛ.dɛm"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "pl-PL",
          "pl-PL"
        ],
        "countryCode": "POL",
        "signpostText": "Warszawa",
        "phoneticSignpostText": "var.ˈʃa.va",
        "phoneticSignpostTextLanguageCode": "pl-PL",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": 45,
        "possibleCombineWithNext": true,
        "drivingSide": "RIGHT",
        "maneuver": "TAKE_EXIT",
        "message": "Take the exit onto <roadNumber>A8</roadNumber>/<roadNumber>E67</roadNumber> toward <signpostText>Warszawa</signpostText>",
        "combinedMessage": "Take the exit onto <roadNumber>A8</roadNumber>/<roadNumber>E67</roadNumber> toward <signpostText>Warszawa</signpostText> then take the <roadNumber>A8</roadNumber>/<roadNumber>E67</roadNumber> motorway",
        "mainAnnouncement": {
          "point": {
            "latitude": 51.0473773,
            "longitude": 16.9446255
          },
          "pointIndex": 165,
          "maneuver": "TAKE_EXIT",
          "distanceInMeters": 300
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.0471184,
            "longitude": 16.9432593
          },
          "pointIndex": 166,
          "maneuver": "TAKE_EXIT",
          "distanceInMeters": 200
        },
        "roadShieldReferences": [
          {
            "reference": "pol-nationalroad",
            "shieldContent": "A8"
          },
          {
            "reference": "european-road",
            "shieldContent": "E67"
          }
        ],
        "signpostRoadShieldReferences": [
          {
            "reference": "pol-nationalroad",
            "shieldContent": "A8"
          }
        ]
      },
      {
        "routeOffsetInMeters": 6875,
        "travelTimeInSeconds": 763,
        "point": {
          "latitude": 51.04968,
          "longitude": 16.93338
        },
        "pointIndex": 197,
        "instructionType": "ROAD_CHANGE",
        "roadNumbers": [
          "A8",
          "E67"
        ],
        "phoneticRoadNumbers": [
          "a.ˈɔ.ɕɛm",
          "ɛ.ʃɛ.ʑd⁀ʑɛ.ɕɔnt.ˈɕɛ.dɛm"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "pl-PL",
          "pl-PL"
        ],
        "countryCode": "POL",
        "possibleCombineWithNext": false,
        "drivingSide": "RIGHT",
        "maneuver": "ENTER_MOTORWAY",
        "message": "Take the <roadNumber>A8</roadNumber>/<roadNumber>E67</roadNumber> motorway",
        "roadShieldReferences": [
          {
            "reference": "pol-nationalroad",
            "shieldContent": "A8"
          },
          {
            "reference": "european-road",
            "shieldContent": "E67"
          }
        ]
      },
      {
        "routeOffsetInMeters": 6975,
        "travelTimeInSeconds": 766,
        "point": {
          "latitude": 51.05057,
          "longitude": 16.93315
        },
        "pointIndex": 198,
        "instructionType": "DIRECTION_INFO",
        "roadNumbers": [
          "A8",
          "E67"
        ],
        "phoneticRoadNumbers": [
          "a.ˈɔ.ɕɛm",
          "ɛ.ʃɛ.ʑd⁀ʑɛ.ɕɔnt.ˈɕɛ.dɛm"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "pl-PL",
          "pl-PL"
        ],
        "countryCode": "POL",
        "signpostText": "Warszawa",
        "phoneticSignpostText": "var.ˈʃa.va",
        "phoneticSignpostTextLanguageCode": "pl-PL",
        "possibleCombineWithNext": false,
        "drivingSide": "RIGHT",
        "maneuver": "FOLLOW",
        "message": "Follow <roadNumber>A8</roadNumber>/<roadNumber>E67</roadNumber> toward <signpostText>Warszawa</signpostText>",
        "mainAnnouncement": {
          "point": {
            "latitude": 51.0496822,
            "longitude": 16.933381
          },
          "pointIndex": 197,
          "maneuver": "FOLLOW",
          "distanceInMeters": 100
        },
        "roadShieldReferences": [
          {
            "reference": "pol-nationalroad",
            "shieldContent": "A8"
          },
          {
            "reference": "european-road",
            "shieldContent": "E67"
          }
        ],
        "signpostRoadShieldReferences": [
          {
            "reference": "pol-nationalroad",
            "shieldContent": "A8"
          }
        ]
      },
      {
        "routeOffsetInMeters": 12790,
        "travelTimeInSeconds": 956,
        "point": {
          "latitude": 51.10219,
          "longitude": 16.93405
        },
        "pointIndex": 247,
        "instructionType": "TURN",
        "street": "Graniczna",
        "countryCode": "POL",
        "signpostText": "Wrocław",
        "phoneticSignpostText": "ˈvrɔ.t⁀swaf",
        "phoneticSignpostTextLanguageCode": "pl-PL",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": 45,
        "possibleCombineWithNext": false,
        "drivingSide": "RIGHT",
        "maneuver": "TAKE_EXIT",
        "message": "Take the exit onto <street>Graniczna</street> toward <signpostText>Wrocław</signpostText>",
        "earlyWarningAnnouncement": {
          "point": {
            "latitude": 51.0844804,
            "longitude": 16.9290772
          },
          "pointIndex": 235,
          "maneuver": "AHEAD_EXIT",
          "distanceInMeters": 2000
        },
        "mainAnnouncement": {
          "point": {
            "latitude": 51.0951046,
            "longitude": 16.9320942
          },
          "pointIndex": 242,
          "maneuver": "TAKE_EXIT",
          "distanceInMeters": 800
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.0986444,
            "longitude": 16.9330939
          },
          "pointIndex": 244,
          "maneuver": "TAKE_EXIT",
          "distanceInMeters": 400
        }
      },
      {
        "routeOffsetInMeters": 13573,
        "travelTimeInSeconds": 1012,
        "point": {
          "latitude": 51.1087,
          "longitude": 16.93759
        },
        "pointIndex": 268,
        "instructionType": "TURN",
        "street": "Graniczna",
        "countryCode": "POL",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": 90,
        "possibleCombineWithNext": false,
        "drivingSide": "RIGHT",
        "maneuver": "TURN_RIGHT",
        "message": "Turn right onto <street>Graniczna</street>",
        "mainAnnouncement": {
          "point": {
            "latitude": 51.1037163,
            "longitude": 16.9349641
          },
          "pointIndex": 253,
          "maneuver": "TURN_RIGHT",
          "distanceInMeters": 600
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.1080783,
            "longitude": 16.9374452
          },
          "pointIndex": 265,
          "maneuver": "TURN_RIGHT",
          "distanceInMeters": 70
        }
      },
      {
        "routeOffsetInMeters": 14538,
        "travelTimeInSeconds": 1123,
        "point": {
          "latitude": 51.10697,
          "longitude": 16.9501
        },
        "pointIndex": 295,
        "instructionType": "TURN",
        "street": "Strzegomska",
        "phoneticStreet": "stʃɛ.ˈgɔm.ska",
        "phoneticStreetLanguageCode": "pl-PL",
        "countryCode": "POL",
        "junctionType": "ROUNDABOUT",
        "turnAngleInDecimalDegrees": -90,
        "roundaboutExitNumber": 2,
        "possibleCombineWithNext": false,
        "drivingSide": "RIGHT",
        "maneuver": "ROUNDABOUT_LEFT",
        "message": "At the roundabout take the <roundaboutExitNumber>second</roundaboutExitNumber> exit onto <street>Strzegomska</street>",
        "mainAnnouncement": {
          "point": {
            "latitude": 51.1083305,
            "longitude": 16.9465255
          },
          "pointIndex": 286,
          "maneuver": "ROUNDABOUT_LEFT",
          "distanceInMeters": 300
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.1074319,
            "longitude": 16.9494193
          },
          "pointIndex": 292,
          "maneuver": "ROUNDABOUT_LEFT",
          "distanceInMeters": 70
        }
      },
      {
        "routeOffsetInMeters": 14688,
        "travelTimeInSeconds": 1143,
        "point": {
          "latitude": 51.10699,
          "longitude": 16.95086
        },
        "pointIndex": 314,
        "instructionType": "TURN",
        "street": "Strzegomska",
        "phoneticStreet": "stʃɛ.ˈgɔm.ska",
        "phoneticStreetLanguageCode": "pl-PL",
        "countryCode": "POL",
        "junctionType": "ROUNDABOUT",
        "turnAngleInDecimalDegrees": 45,
        "roundaboutExitNumber": 0,
        "possibleCombineWithNext": false,
        "drivingSide": "RIGHT",
        "maneuver": "TAKE_EXIT",
        "message": "Take the exit onto <street>Strzegomska</street>",
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.1065196,
            "longitude": 16.9502993
          },
          "pointIndex": 302,
          "maneuver": "TAKE_EXIT",
          "distanceInMeters": 91
        }
      },
      {
        "routeOffsetInMeters": 18903,
        "travelTimeInSeconds": 1775,
        "point": {
          "latitude": 51.11217,
          "longitude": 17.00585
        },
        "pointIndex": 437,
        "instructionType": "TURN",
        "street": "Plac Strzegomski",
        "phoneticStreet": "ˈplat⁀s stʃɛ.ˈgɔm.ski",
        "phoneticStreetLanguageCode": "pl-PL",
        "countryCode": "POL",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": -90,
        "possibleCombineWithNext": true,
        "drivingSide": "RIGHT",
        "maneuver": "TURN_LEFT",
        "message": "Turn left onto <street>Plac Strzegomski</street>",
        "combinedMessage": "Turn left onto <street>Plac Strzegomski</street> then turn right onto <street>Legnicka</street>",
        "earlyWarningAnnouncement": {
          "point": {
            "latitude": 51.1132585,
            "longitude": 17.0004042
          },
          "pointIndex": 424,
          "maneuver": "AHEAD_LEFT_TURN",
          "distanceInMeters": 400
        },
        "mainAnnouncement": {
          "point": {
            "latitude": 51.1127007,
            "longitude": 17.0031213
          },
          "pointIndex": 430,
          "maneuver": "TURN_LEFT",
          "distanceInMeters": 200
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.1123296,
            "longitude": 17.0050303
          },
          "pointIndex": 434,
          "maneuver": "TURN_LEFT",
          "distanceInMeters": 60
        }
      },
      {
        "routeOffsetInMeters": 18959,
        "travelTimeInSeconds": 1797,
        "point": {
          "latitude": 51.11257,
          "longitude": 17.00614
        },
        "pointIndex": 441,
        "instructionType": "TURN",
        "street": "Legnicka",
        "phoneticStreet": "lɛ.ˈgɲi.t⁀ska",
        "phoneticStreetLanguageCode": "pl-PL",
        "countryCode": "POL",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": 90,
        "possibleCombineWithNext": false,
        "drivingSide": "RIGHT",
        "maneuver": "TURN_RIGHT",
        "message": "Turn right onto <street>Legnicka</street>",
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.1123099,
            "longitude": 17.0060395
          },
          "pointIndex": 439,
          "maneuver": "TURN_RIGHT",
          "distanceInMeters": 30
        }
      },
      {
        "routeOffsetInMeters": 20380,
        "travelTimeInSeconds": 2047,
        "point": {
          "latitude": 51.11055,
          "longitude": 17.02556
        },
        "pointIndex": 488,
        "instructionType": "LOCATION_ARRIVAL",
        "street": "Ruska",
        "phoneticStreet": "ˈru.ska",
        "phoneticStreetLanguageCode": "pl-PL",
        "countryCode": "POL",
        "possibleCombineWithNext": false,
        "drivingSide": "RIGHT",
        "maneuver": "ARRIVE",
        "message": "You have arrived at <street>Ruska</street>",
        "mainAnnouncement": {
          "point": {
            "latitude": 51.1111587,
            "longitude": 17.0228781
          },
          "pointIndex": 481,
          "maneuver": "ARRIVE",
          "distanceInMeters": 200
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 51.1106333,
            "longitude": 17.0251544
          },
          "pointIndex": 487,
          "maneuver": "ARRIVE",
          "distanceInMeters": 30
        }
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
      "travelTimeInSeconds": 3,
      "distanceInMeters": 11
    },
    {
      "pointIndex": 2,
      "travelTimeInSeconds": 133,
      "distanceInMeters": 49
    },
    {
      "pointIndex": 3,
      "travelTimeInSeconds": 148,
      "distanceInMeters": 69
    },
    {
      "pointIndex": 5,
      "travelTimeInSeconds": 180,
      "distanceInMeters": 178
    },
    {
      "pointIndex": 26,
      "travelTimeInSeconds": 265,
      "distanceInMeters": 1048
    },
    {
      "pointIndex": 43,
      "travelTimeInSeconds": 332,
      "distanceInMeters": 1663
    },
    {
      "pointIndex": 45,
      "travelTimeInSeconds": 356,
      "distanceInMeters": 1732
    },
    {
      "pointIndex": 49,
      "travelTimeInSeconds": 459,
      "distanceInMeters": 1871
    },
    {
      "pointIndex": 72,
      "travelTimeInSeconds": 519,
      "distanceInMeters": 2456
    },
    {
      "pointIndex": 79,
      "travelTimeInSeconds": 537,
      "distanceInMeters": 2628
    },
    {
      "pointIndex": 84,
      "travelTimeInSeconds": 579,
      "distanceInMeters": 2737
    },
    {
      "pointIndex": 134,
      "travelTimeInSeconds": 644,
      "distanceInMeters": 3684
    },
    {
      "pointIndex": 172,
      "travelTimeInSeconds": 729,
      "distanceInMeters": 6213
    },
    {
      "pointIndex": 199,
      "travelTimeInSeconds": 776,
      "distanceInMeters": 7268
    },
    {
      "pointIndex": 254,
      "travelTimeInSeconds": 968,
      "distanceInMeters": 13008
    },
    {
      "pointIndex": 267,
      "travelTimeInSeconds": 1006,
      "distanceInMeters": 13539
    },
    {
      "pointIndex": 282,
      "travelTimeInSeconds": 1038,
      "distanceInMeters": 13953
    },
    {
      "pointIndex": 286,
      "travelTimeInSeconds": 1076,
      "distanceInMeters": 14211
    },
    {
      "pointIndex": 292,
      "travelTimeInSeconds": 1091,
      "distanceInMeters": 14423
    },
    {
      "pointIndex": 301,
      "travelTimeInSeconds": 1129,
      "distanceInMeters": 14584
    },
    {
      "pointIndex": 325,
      "travelTimeInSeconds": 1170,
      "distanceInMeters": 14951
    },
    {
      "pointIndex": 329,
      "travelTimeInSeconds": 1236,
      "distanceInMeters": 15178
    },
    {
      "pointIndex": 331,
      "travelTimeInSeconds": 1265,
      "distanceInMeters": 15396
    },
    {
      "pointIndex": 332,
      "travelTimeInSeconds": 1285,
      "distanceInMeters": 15477
    },
    {
      "pointIndex": 335,
      "travelTimeInSeconds": 1339,
      "distanceInMeters": 15579
    },
    {
      "pointIndex": 370,
      "travelTimeInSeconds": 1427,
      "distanceInMeters": 16524
    },
    {
      "pointIndex": 378,
      "travelTimeInSeconds": 1462,
      "distanceInMeters": 16774
    },
    {
      "pointIndex": 380,
      "travelTimeInSeconds": 1480,
      "distanceInMeters": 16838
    },
    {
      "pointIndex": 410,
      "travelTimeInSeconds": 1566,
      "distanceInMeters": 17865
    },
    {
      "pointIndex": 411,
      "travelTimeInSeconds": 1606,
      "distanceInMeters": 18004
    },
    {
      "pointIndex": 424,
      "travelTimeInSeconds": 1665,
      "distanceInMeters": 18485
    },
    {
      "pointIndex": 427,
      "travelTimeInSeconds": 1697,
      "distanceInMeters": 18608
    },
    {
      "pointIndex": 434,
      "travelTimeInSeconds": 1723,
      "distanceInMeters": 18805
    },
    {
      "pointIndex": 436,
      "travelTimeInSeconds": 1772,
      "distanceInMeters": 18885
    },
    {
      "pointIndex": 438,
      "travelTimeInSeconds": 1776,
      "distanceInMeters": 18911
    },
    {
      "pointIndex": 439,
      "travelTimeInSeconds": 1787,
      "distanceInMeters": 18921
    },
    {
      "pointIndex": 451,
      "travelTimeInSeconds": 1815,
      "distanceInMeters": 19048
    },
    {
      "pointIndex": 464,
      "travelTimeInSeconds": 1871,
      "distanceInMeters": 19671
    },
    {
      "pointIndex": 465,
      "travelTimeInSeconds": 1880,
      "distanceInMeters": 19721
    },
    {
      "pointIndex": 468,
      "travelTimeInSeconds": 1918,
      "distanceInMeters": 19841
    },
    {
      "pointIndex": 474,
      "travelTimeInSeconds": 1939,
      "distanceInMeters": 19968
    },
    {
      "pointIndex": 479,
      "travelTimeInSeconds": 1977,
      "distanceInMeters": 20076
    },
    {
      "pointIndex": 486,
      "travelTimeInSeconds": 2012,
      "distanceInMeters": 20273
    },
    {
      "pointIndex": 488,
      "travelTimeInSeconds": 2047,
      "distanceInMeters": 20380
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
    let coords = new URL(url).pathname.match(/\/((\d|\.)*)\,((\d|\.)*):((\d|\.)*)\,((\d|\.)*)\//);
    let startLat = coords[1];
    let startLon = coords[3];
    let shortClosestPointIndex = closestPointIndex(shortRoute, startLat, startLon);
    let cutShortRoute = cutRoute(shortRoute, shortClosestPointIndex);
    shortRoute = cutShortRoute;
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
