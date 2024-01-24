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
    "lengthInMeters": 11020,
    "travelTimeInSeconds": 1694,
    "trafficDelayInSeconds": 0,
    "trafficLengthInMeters": 0,
    "departureTime": "2024-01-24T13:17:02+01:00",
    "arrivalTime": "2024-01-24T13:45:16+01:00"
  },
  "legs": [
    {
      "summary": {
        "lengthInMeters": 11020,
        "travelTimeInSeconds": 1694,
        "trafficDelayInSeconds": 0,
        "trafficLengthInMeters": 0,
        "departureTime": "2024-01-24T13:17:02+01:00",
        "arrivalTime": "2024-01-24T13:45:16+01:00"
      },
      "points": [
        {
          "latitude": 51.0343507,
          "longitude": 16.9917941
        },
        {
          "latitude": 51.0343963,
          "longitude": 16.9917378
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
          "latitude": 51.068168,
          "longitude": 17.0089576
        },
        {
          "latitude": 51.0691872,
          "longitude": 17.0097032
        },
        {
          "latitude": 51.0706946,
          "longitude": 17.0108244
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
          "latitude": 51.0909399,
          "longitude": 17.0171329
        },
        {
          "latitude": 51.0910124,
          "longitude": 17.0169371
        },
        {
          "latitude": 51.0910633,
          "longitude": 17.0165804
        },
        {
          "latitude": 51.0910687,
          "longitude": 17.0163202
        },
        {
          "latitude": 51.0914978,
          "longitude": 17.0162264
        },
        {
          "latitude": 51.0920691,
          "longitude": 17.0160949
        },
        {
          "latitude": 51.0928336,
          "longitude": 17.0158884
        },
        {
          "latitude": 51.0930669,
          "longitude": 17.0158428
        },
        {
          "latitude": 51.0943088,
          "longitude": 17.0155048
        },
        {
          "latitude": 51.0951295,
          "longitude": 17.0152903
        },
        {
          "latitude": 51.0965484,
          "longitude": 17.0149389
        },
        {
          "latitude": 51.0970312,
          "longitude": 17.0148155
        },
        {
          "latitude": 51.09705,
          "longitude": 17.0148477
        },
        {
          "latitude": 51.0970715,
          "longitude": 17.0148718
        },
        {
          "latitude": 51.0971063,
          "longitude": 17.014896
        },
        {
          "latitude": 51.0971385,
          "longitude": 17.0149067
        },
        {
          "latitude": 51.0972244,
          "longitude": 17.0149094
        },
        {
          "latitude": 51.0972887,
          "longitude": 17.0148772
        },
        {
          "latitude": 51.0973424,
          "longitude": 17.0147994
        },
        {
          "latitude": 51.0973558,
          "longitude": 17.0147672
        },
        {
          "latitude": 51.0973692,
          "longitude": 17.0147243
        },
        {
          "latitude": 51.0977983,
          "longitude": 17.0145714
        },
        {
          "latitude": 51.0984635,
          "longitude": 17.0143756
        },
        {
          "latitude": 51.0985816,
          "longitude": 17.0143434
        },
        {
          "latitude": 51.0987103,
          "longitude": 17.0143139
        },
        {
          "latitude": 51.0999146,
          "longitude": 17.0139921
        },
        {
          "latitude": 51.1006469,
          "longitude": 17.013815
        },
        {
          "latitude": 51.1008587,
          "longitude": 17.0137641
        },
        {
          "latitude": 51.1013684,
          "longitude": 17.0136192
        },
        {
          "latitude": 51.1017814,
          "longitude": 17.0135146
        },
        {
          "latitude": 51.1020309,
          "longitude": 17.0134395
        },
        {
          "latitude": 51.1022481,
          "longitude": 17.013351
        },
        {
          "latitude": 51.1023957,
          "longitude": 17.0139733
        },
        {
          "latitude": 51.1026612,
          "longitude": 17.0150515
        },
        {
          "latitude": 51.103026,
          "longitude": 17.0164758
        },
        {
          "latitude": 51.1031306,
          "longitude": 17.0168942
        },
        {
          "latitude": 51.103195,
          "longitude": 17.0171705
        },
        {
          "latitude": 51.1036751,
          "longitude": 17.0192009
        },
        {
          "latitude": 51.1039647,
          "longitude": 17.0203865
        },
        {
          "latitude": 51.1041981,
          "longitude": 17.0213413
        },
        {
          "latitude": 51.1043161,
          "longitude": 17.0217785
        },
        {
          "latitude": 51.1044046,
          "longitude": 17.0220172
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
      "endPointIndex": 22,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 30,
      "startPointIndex": 22,
      "endPointIndex": 23,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 50,
      "startPointIndex": 23,
      "endPointIndex": 26,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 30,
      "startPointIndex": 26,
      "endPointIndex": 31,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 0,
      "endPointIndex": 37,
      "sectionType": "URBAN"
    },
    {
      "maxSpeedLimitInKmh": 50,
      "startPointIndex": 31,
      "endPointIndex": 38,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 90,
      "startPointIndex": 38,
      "endPointIndex": 41,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 40,
      "startPointIndex": 41,
      "endPointIndex": 50,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 30,
      "startPointIndex": 50,
      "endPointIndex": 53,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 41,
      "endPointIndex": 63,
      "sectionType": "URBAN"
    },
    {
      "maxSpeedLimitInKmh": 40,
      "startPointIndex": 53,
      "endPointIndex": 64,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 90,
      "startPointIndex": 64,
      "endPointIndex": 75,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 50,
      "startPointIndex": 89,
      "endPointIndex": 91,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 30,
      "startPointIndex": 91,
      "endPointIndex": 108,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 50,
      "startPointIndex": 108,
      "endPointIndex": 132,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 40,
      "startPointIndex": 132,
      "endPointIndex": 134,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 50,
      "startPointIndex": 134,
      "endPointIndex": 151,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 90,
      "startPointIndex": 151,
      "endPointIndex": 157,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 158,
      "endPointIndex": 174,
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
      "startPointIndex": 157,
      "endPointIndex": 182,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 50,
      "startPointIndex": 200,
      "endPointIndex": 240,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 40,
      "startPointIndex": 240,
      "endPointIndex": 249,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 50,
      "startPointIndex": 249,
      "endPointIndex": 277,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 0,
      "endPointIndex": 277,
      "sectionType": "COUNTRY",
      "countryCode": "POL"
    },
    {
      "startPointIndex": 0,
      "endPointIndex": 277,
      "sectionType": "TRAVEL_MODE",
      "travelMode": "car"
    },
    {
      "startPointIndex": 66,
      "endPointIndex": 277,
      "sectionType": "URBAN"
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
      "startPointIndex": 76,
      "endPointIndex": 76,
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
      "startPointIndex": 76,
      "endPointIndex": 84,
      "sectionType": "LANES"
    },
    {
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
      "startPointIndex": 84,
      "endPointIndex": 84,
      "sectionType": "LANES"
    },
    {
      "lanes": [
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
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 84,
      "endPointIndex": 89,
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
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 89,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 89,
      "endPointIndex": 91,
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
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 153,
      "endPointIndex": 154,
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
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 154,
      "endPointIndex": 154,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
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
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 155,
      "endPointIndex": 156,
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
      "startPointIndex": 156,
      "endPointIndex": 157,
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
      "startPointIndex": 157,
      "endPointIndex": 159,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 159,
      "endPointIndex": 160,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 160,
      "endPointIndex": 160,
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
      "startPointIndex": 160,
      "endPointIndex": 161,
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
      "startPointIndex": 161,
      "endPointIndex": 167,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
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
      "startPointIndex": 169,
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
      "startPointIndex": 170,
      "endPointIndex": 171,
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
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 171,
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
            "STRAIGHT",
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
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 173,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 175,
      "endPointIndex": 176,
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
      "startPointIndex": 176,
      "endPointIndex": 176,
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
      "startPointIndex": 176,
      "endPointIndex": 177,
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
      "startPointIndex": 177,
      "endPointIndex": 177,
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
      "startPointIndex": 177,
      "endPointIndex": 253,
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
        "SOLID_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 253,
      "endPointIndex": 261,
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
            "LEFT",
            "SLIGHT_RIGHT"
          ]
        },
        {
          "directions": [
            "SLIGHT_RIGHT",
            "SHARP_RIGHT"
          ],
          "follow": "SHARP_RIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SOLID_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 262,
      "endPointIndex": 264,
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
            "LEFT",
            "SLIGHT_RIGHT"
          ]
        },
        {
          "directions": [
            "SLIGHT_RIGHT",
            "SHARP_RIGHT"
          ],
          "follow": "SHARP_RIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SOLID_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 264,
      "endPointIndex": 265,
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
            "LEFT",
            "SLIGHT_RIGHT"
          ]
        },
        {
          "directions": [
            "SLIGHT_RIGHT",
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
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 265,
      "endPointIndex": 270,
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
        "DASHED_SOLID"
      ],
      "properties": [],
      "startPointIndex": 270,
      "endPointIndex": 271,
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
      "startPointIndex": 271,
      "endPointIndex": 276,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 277,
      "endPointIndex": 277,
      "sectionType": "LANES"
    }
  ],
  "guidance": {
    "instructions": [
      {
        "drivingSide": "RIGHT",
        "maneuver": "DEPART",
        "maneuverPoint": {
          "latitude": 51.0343507,
          "longitude": 16.9917941
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "tɛm.pla.ˈrju.ʃɨ",
            "phoneticLanguageCode": "pl-PL",
            "text": "Templariuszy"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "tɛm.pla.ˈrju.ʃɨ",
            "phoneticLanguageCode": "pl-PL",
            "text": "Templariuszy"
          }
        },
        "routeOffsetInMeters": 0,
        "routePath": [
          {
            "distanceInMeters": 0,
            "point": {
              "latitude": 51.0343507,
              "longitude": 16.9917941
            },
            "travelTimeInSeconds": 0
          }
        ],
        "sideRoads": []
      },
      {
        "changeOfAngleInDegrees": 79,
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_RIGHT",
        "maneuverPoint": {
          "latitude": 51.0346833,
          "longitude": 16.991145
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "text": ""
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "tɛm.pla.ˈrju.ʃɨ",
            "phoneticLanguageCode": "pl-PL",
            "text": "Templariuszy"
          }
        },
        "routeOffsetInMeters": 58,
        "routePath": [
          {
            "distanceInMeters": 58,
            "point": {
              "latitude": 51.0346833,
              "longitude": 16.991145
            },
            "travelTimeInSeconds": 17
          },
          {
            "distanceInMeters": 68,
            "point": {
              "latitude": 51.0347664,
              "longitude": 16.991208
            },
            "travelTimeInSeconds": 24
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 38,
            "side": "LEFT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": -90,
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_LEFT",
        "maneuverPoint": {
          "latitude": 51.0351929,
          "longitude": 16.9915822
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈgwu.vna",
            "phoneticLanguageCode": "pl-PL",
            "text": "Główna"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "tɛm.pla.ˈrju.ʃɨ",
            "phoneticLanguageCode": "pl-PL",
            "text": "Templariuszy"
          }
        },
        "routeOffsetInMeters": 123,
        "routePath": [
          {
            "distanceInMeters": 123,
            "point": {
              "latitude": 51.0351929,
              "longitude": 16.9915822
            },
            "travelTimeInSeconds": 45
          },
          {
            "distanceInMeters": 133,
            "point": {
              "latitude": 51.0352387,
              "longitude": 16.9914593
            },
            "travelTimeInSeconds": 49
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 44,
            "side": "LEFT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": 62,
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_RIGHT",
        "maneuverPoint": {
          "latitude": 51.0373655,
          "longitude": 16.9863573
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈpʃɛ.nːa",
            "phoneticLanguageCode": "pl-PL",
            "text": "Pszenna"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈgwu.vna",
            "phoneticLanguageCode": "pl-PL",
            "text": "Główna"
          }
        },
        "routeOffsetInMeters": 563,
        "routePath": [
          {
            "distanceInMeters": 563,
            "point": {
              "latitude": 51.0373655,
              "longitude": 16.9863573
            },
            "travelTimeInSeconds": 115
          },
          {
            "distanceInMeters": 573,
            "point": {
              "latitude": 51.0374536,
              "longitude": 16.986384
            },
            "travelTimeInSeconds": 116
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 375,
            "side": "RIGHT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": 10,
        "drivingSide": "RIGHT",
        "maneuver": "ROUNDABOUT_STRAIGHT",
        "maneuverPoint": {
          "latitude": 51.0596117,
          "longitude": 17.0072329
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ɔw.ta.ˈʃɨɲ.ska",
            "phoneticLanguageCode": "pl-PL",
            "text": "Ołtaszyńska"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ɔw.ta.ˈʃɨɲ.ska",
            "phoneticLanguageCode": "pl-PL",
            "text": "Ołtaszyńska"
          }
        },
        "roundaboutExitNumber": 2,
        "routeOffsetInMeters": 3468,
        "routePath": [
          {
            "distanceInMeters": 3468,
            "point": {
              "latitude": 51.0593355,
              "longitude": 17.0070961
            },
            "travelTimeInSeconds": 430
          },
          {
            "distanceInMeters": 3472,
            "point": {
              "latitude": 51.0593328,
              "longitude": 17.0071444
            },
            "travelTimeInSeconds": 431
          },
          {
            "distanceInMeters": 3476,
            "point": {
              "latitude": 51.0593355,
              "longitude": 17.007198
            },
            "travelTimeInSeconds": 432
          },
          {
            "distanceInMeters": 3479,
            "point": {
              "latitude": 51.0593462,
              "longitude": 17.0072463
            },
            "travelTimeInSeconds": 434
          },
          {
            "distanceInMeters": 3483,
            "point": {
              "latitude": 51.0593623,
              "longitude": 17.0072892
            },
            "travelTimeInSeconds": 435
          },
          {
            "distanceInMeters": 3486,
            "point": {
              "latitude": 51.0593864,
              "longitude": 17.0073268
            },
            "travelTimeInSeconds": 436
          },
          {
            "distanceInMeters": 3490,
            "point": {
              "latitude": 51.0594133,
              "longitude": 17.0073536
            },
            "travelTimeInSeconds": 437
          },
          {
            "distanceInMeters": 3494,
            "point": {
              "latitude": 51.0594454,
              "longitude": 17.0073697
            },
            "travelTimeInSeconds": 438
          },
          {
            "distanceInMeters": 3495,
            "point": {
              "latitude": 51.0594562,
              "longitude": 17.0073724
            },
            "travelTimeInSeconds": 438
          },
          {
            "distanceInMeters": 3498,
            "point": {
              "latitude": 51.0594803,
              "longitude": 17.0073751
            },
            "travelTimeInSeconds": 439
          },
          {
            "distanceInMeters": 3500,
            "point": {
              "latitude": 51.0595044,
              "longitude": 17.0073724
            },
            "travelTimeInSeconds": 440
          },
          {
            "distanceInMeters": 3504,
            "point": {
              "latitude": 51.059534,
              "longitude": 17.0073563
            },
            "travelTimeInSeconds": 440
          },
          {
            "distanceInMeters": 3508,
            "point": {
              "latitude": 51.0595661,
              "longitude": 17.0073268
            },
            "travelTimeInSeconds": 441
          },
          {
            "distanceInMeters": 3512,
            "point": {
              "latitude": 51.0595903,
              "longitude": 17.0072892
            },
            "travelTimeInSeconds": 442
          },
          {
            "distanceInMeters": 3516,
            "point": {
              "latitude": 51.0596117,
              "longitude": 17.0072329
            },
            "travelTimeInSeconds": 443
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 850,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 746,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 572,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 471,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 276,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 99,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 33,
            "side": "RIGHT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": -90,
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_LEFT",
        "maneuverPoint": {
          "latitude": 51.0675457,
          "longitude": 17.0111087
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "xip.ˈpit⁀ʃ.na",
            "phoneticLanguageCode": "pl-PL",
            "text": "Hippiczna"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ɔw.ta.ˈʃɨɲ.ska",
            "phoneticLanguageCode": "pl-PL",
            "text": "Ołtaszyńska"
          }
        },
        "routeOffsetInMeters": 4444,
        "routePath": [
          {
            "distanceInMeters": 4444,
            "point": {
              "latitude": 51.0675457,
              "longitude": 17.0111087
            },
            "travelTimeInSeconds": 554
          },
          {
            "distanceInMeters": 4454,
            "point": {
              "latitude": 51.0675832,
              "longitude": 17.0109791
            },
            "travelTimeInSeconds": 557
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 896,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 793,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 759,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 635,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 452,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 321,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 149,
            "side": "RIGHT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": 90,
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_RIGHT",
        "maneuverPoint": {
          "latitude": 51.068168,
          "longitude": 17.0089576
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "vɨ.ɕt⁀ɕi.ˈgɔ.va",
            "phoneticLanguageCode": "pl-PL",
            "text": "Wyścigowa"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "xip.ˈpit⁀ʃ.na",
            "phoneticLanguageCode": "pl-PL",
            "text": "Hippiczna"
          }
        },
        "routeOffsetInMeters": 4610,
        "routePath": [
          {
            "distanceInMeters": 4610,
            "point": {
              "latitude": 51.068168,
              "longitude": 17.0089576
            },
            "travelTimeInSeconds": 604
          },
          {
            "distanceInMeters": 4620,
            "point": {
              "latitude": 51.0682495,
              "longitude": 17.0090172
            },
            "travelTimeInSeconds": 606
          }
        ],
        "sideRoads": []
      },
      {
        "changeOfAngleInDegrees": -107,
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_LEFT",
        "maneuverPoint": {
          "latitude": 51.0840145,
          "longitude": 17.0252225
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "POL",
              "roadNumber": {
                "text": "94"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "a.ˈlɛ.ja vi.ˈɕɲɔ.va",
            "phoneticLanguageCode": "pl-PL",
            "text": "Aleja Wiśniowa"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈɕlɛ̃ʒ.na",
            "phoneticLanguageCode": "pl-PL",
            "text": "Ślężna"
          }
        },
        "routeOffsetInMeters": 6659,
        "routePath": [
          {
            "distanceInMeters": 6659,
            "point": {
              "latitude": 51.0832742,
              "longitude": 17.0245761
            },
            "travelTimeInSeconds": 860
          },
          {
            "distanceInMeters": 6683,
            "point": {
              "latitude": 51.0834593,
              "longitude": 17.0247611
            },
            "travelTimeInSeconds": 882
          },
          {
            "distanceInMeters": 6719,
            "point": {
              "latitude": 51.0837409,
              "longitude": 17.0249972
            },
            "travelTimeInSeconds": 893
          },
          {
            "distanceInMeters": 6726,
            "point": {
              "latitude": 51.0837999,
              "longitude": 17.0250508
            },
            "travelTimeInSeconds": 894
          },
          {
            "distanceInMeters": 6753,
            "point": {
              "latitude": 51.0840145,
              "longitude": 17.0252225
            },
            "travelTimeInSeconds": 897
          },
          {
            "distanceInMeters": 6775,
            "point": {
              "latitude": 51.0840547,
              "longitude": 17.0249194
            },
            "travelTimeInSeconds": 909
          },
          {
            "distanceInMeters": 6801,
            "point": {
              "latitude": 51.0841057,
              "longitude": 17.0245492
            },
            "travelTimeInSeconds": 912
          },
          {
            "distanceInMeters": 6811,
            "point": {
              "latitude": 51.0841244,
              "longitude": 17.0244104
            },
            "travelTimeInSeconds": 913
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 818,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 783,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 567,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 401,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 266,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 81,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 36,
            "side": "RIGHT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": 40,
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_RIGHT",
        "maneuverPoint": {
          "latitude": 51.0854521,
          "longitude": 17.0179376
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "su.ˈdɛ.t⁀ska",
            "phoneticLanguageCode": "pl-PL",
            "text": "Sudecka"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "POL",
              "roadNumber": {
                "text": "94"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "su.ˈdɛ.t⁀ska",
            "phoneticLanguageCode": "pl-PL",
            "text": "Sudecka"
          }
        },
        "routeOffsetInMeters": 7289,
        "routePath": [
          {
            "distanceInMeters": 7289,
            "point": {
              "latitude": 51.0854521,
              "longitude": 17.0179376
            },
            "travelTimeInSeconds": 971
          },
          {
            "distanceInMeters": 7299,
            "point": {
              "latitude": 51.0855311,
              "longitude": 17.0178631
            },
            "travelTimeInSeconds": 972
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 457,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 417,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 10,
            "side": "RIGHT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": 0,
        "drivingSide": "RIGHT",
        "maneuver": "ROUNDABOUT_STRAIGHT",
        "maneuverPoint": {
          "latitude": 51.0910687,
          "longitude": 17.0163202
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "za.pɔ.ˈrɔ.ska",
            "phoneticLanguageCode": "pl-PL",
            "text": "Zaporoska"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "su.ˈdɛ.t⁀ska",
            "phoneticLanguageCode": "pl-PL",
            "text": "Sudecka"
          }
        },
        "roundaboutExitNumber": 3,
        "routeOffsetInMeters": 7725,
        "routePath": [
          {
            "distanceInMeters": 7725,
            "point": {
              "latitude": 51.0892877,
              "longitude": 17.0168191
            },
            "travelTimeInSeconds": 1047
          },
          {
            "distanceInMeters": 7738,
            "point": {
              "latitude": 51.0893306,
              "longitude": 17.0170015
            },
            "travelTimeInSeconds": 1048
          },
          {
            "distanceInMeters": 7764,
            "point": {
              "latitude": 51.0894513,
              "longitude": 17.0173073
            },
            "travelTimeInSeconds": 1052
          },
          {
            "distanceInMeters": 7790,
            "point": {
              "latitude": 51.0896096,
              "longitude": 17.0175835
            },
            "travelTimeInSeconds": 1056
          },
          {
            "distanceInMeters": 7804,
            "point": {
              "latitude": 51.0897169,
              "longitude": 17.0176908
            },
            "travelTimeInSeconds": 1058
          },
          {
            "distanceInMeters": 7820,
            "point": {
              "latitude": 51.0898483,
              "longitude": 17.017774
            },
            "travelTimeInSeconds": 1060
          },
          {
            "distanceInMeters": 7840,
            "point": {
              "latitude": 51.0900253,
              "longitude": 17.0178384
            },
            "travelTimeInSeconds": 1064
          },
          {
            "distanceInMeters": 7853,
            "point": {
              "latitude": 51.0901487,
              "longitude": 17.0178625
            },
            "travelTimeInSeconds": 1067
          },
          {
            "distanceInMeters": 7865,
            "point": {
              "latitude": 51.0902506,
              "longitude": 17.0178598
            },
            "travelTimeInSeconds": 1071
          },
          {
            "distanceInMeters": 7881,
            "point": {
              "latitude": 51.0903955,
              "longitude": 17.0178276
            },
            "travelTimeInSeconds": 1077
          },
          {
            "distanceInMeters": 7892,
            "point": {
              "latitude": 51.0904947,
              "longitude": 17.0177901
            },
            "travelTimeInSeconds": 1081
          },
          {
            "distanceInMeters": 7909,
            "point": {
              "latitude": 51.0906261,
              "longitude": 17.0176774
            },
            "travelTimeInSeconds": 1088
          },
          {
            "distanceInMeters": 7919,
            "point": {
              "latitude": 51.0906959,
              "longitude": 17.0175889
            },
            "travelTimeInSeconds": 1092
          },
          {
            "distanceInMeters": 7922,
            "point": {
              "latitude": 51.0907146,
              "longitude": 17.0175648
            },
            "travelTimeInSeconds": 1092
          },
          {
            "distanceInMeters": 7938,
            "point": {
              "latitude": 51.0908219,
              "longitude": 17.0173985
            },
            "travelTimeInSeconds": 1094
          },
          {
            "distanceInMeters": 7961,
            "point": {
              "latitude": 51.0909399,
              "longitude": 17.0171329
            },
            "travelTimeInSeconds": 1098
          },
          {
            "distanceInMeters": 7977,
            "point": {
              "latitude": 51.0910124,
              "longitude": 17.0169371
            },
            "travelTimeInSeconds": 1100
          },
          {
            "distanceInMeters": 8003,
            "point": {
              "latitude": 51.0910633,
              "longitude": 17.0165804
            },
            "travelTimeInSeconds": 1104
          },
          {
            "distanceInMeters": 8021,
            "point": {
              "latitude": 51.0910687,
              "longitude": 17.0163202
            },
            "travelTimeInSeconds": 1107
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 153,
            "side": "LEFT_AND_RIGHT"
          }
        ]
      },
      {
        "drivingSide": "RIGHT",
        "maneuver": "EXIT_ROUNDABOUT",
        "maneuverPoint": {
          "latitude": 51.0910687,
          "longitude": 17.0163202
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "za.pɔ.ˈrɔ.ska",
            "phoneticLanguageCode": "pl-PL",
            "text": "Zaporoska"
          }
        },
        "offsetOfAmbiguousExitFromManeuverInMeters": 82,
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "su.ˈdɛ.t⁀ska",
            "phoneticLanguageCode": "pl-PL",
            "text": "Sudecka"
          }
        },
        "routeOffsetInMeters": 8021,
        "routePath": [
          {
            "distanceInMeters": 8021,
            "point": {
              "latitude": 51.0910687,
              "longitude": 17.0163202
            },
            "travelTimeInSeconds": 1107
          }
        ],
        "sideRoads": []
      },
      {
        "changeOfAngleInDegrees": -2,
        "drivingSide": "RIGHT",
        "maneuver": "ROUNDABOUT_STRAIGHT",
        "maneuverPoint": {
          "latitude": 51.0973692,
          "longitude": 17.0147243
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "za.pɔ.ˈrɔ.ska",
            "phoneticLanguageCode": "pl-PL",
            "text": "Zaporoska"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "za.pɔ.ˈrɔ.ska",
            "phoneticLanguageCode": "pl-PL",
            "text": "Zaporoska"
          }
        },
        "roundaboutExitNumber": 2,
        "routeOffsetInMeters": 8693,
        "routePath": [
          {
            "distanceInMeters": 8693,
            "point": {
              "latitude": 51.0970312,
              "longitude": 17.0148155
            },
            "travelTimeInSeconds": 1237
          },
          {
            "distanceInMeters": 8696,
            "point": {
              "latitude": 51.09705,
              "longitude": 17.0148477
            },
            "travelTimeInSeconds": 1237
          },
          {
            "distanceInMeters": 8699,
            "point": {
              "latitude": 51.0970715,
              "longitude": 17.0148718
            },
            "travelTimeInSeconds": 1238
          },
          {
            "distanceInMeters": 8703,
            "point": {
              "latitude": 51.0971063,
              "longitude": 17.014896
            },
            "travelTimeInSeconds": 1238
          },
          {
            "distanceInMeters": 8707,
            "point": {
              "latitude": 51.0971385,
              "longitude": 17.0149067
            },
            "travelTimeInSeconds": 1238
          },
          {
            "distanceInMeters": 8716,
            "point": {
              "latitude": 51.0972244,
              "longitude": 17.0149094
            },
            "travelTimeInSeconds": 1239
          },
          {
            "distanceInMeters": 8724,
            "point": {
              "latitude": 51.0972887,
              "longitude": 17.0148772
            },
            "travelTimeInSeconds": 1240
          },
          {
            "distanceInMeters": 8732,
            "point": {
              "latitude": 51.0973424,
              "longitude": 17.0147994
            },
            "travelTimeInSeconds": 1241
          },
          {
            "distanceInMeters": 8735,
            "point": {
              "latitude": 51.0973558,
              "longitude": 17.0147672
            },
            "travelTimeInSeconds": 1241
          },
          {
            "distanceInMeters": 8738,
            "point": {
              "latitude": 51.0973692,
              "longitude": 17.0147243
            },
            "travelTimeInSeconds": 1242
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 623,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 559,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 306,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 214,
            "side": "LEFT_AND_RIGHT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": 84,
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "landmark": "AT_TRAFFIC_LIGHT",
        "maneuver": "TURN_RIGHT",
        "maneuverPoint": {
          "latitude": 51.1022481,
          "longitude": 17.013351
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "gra.bi.ˈʃɨɲ.ska",
            "phoneticLanguageCode": "pl-PL",
            "text": "Grabiszyńska"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "za.pɔ.ˈrɔ.ska",
            "phoneticLanguageCode": "pl-PL",
            "text": "Zaporoska"
          }
        },
        "routeOffsetInMeters": 9289,
        "routePath": [
          {
            "distanceInMeters": 9289,
            "point": {
              "latitude": 51.1022481,
              "longitude": 17.013351
            },
            "travelTimeInSeconds": 1344
          },
          {
            "distanceInMeters": 9299,
            "point": {
              "latitude": 51.1022795,
              "longitude": 17.0134835
            },
            "travelTimeInSeconds": 1347
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 427,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 399,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 263,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 181,
            "side": "RIGHT"
          }
        ],
        "signpost": {
          "exitName": {
            "text": ""
          },
          "exitNumber": {
            "text": ""
          },
          "towardName": {
            "phonetic": "ˈpɔ.znaɲ",
            "phoneticLanguageCode": "pl-PL",
            "text": "Poznań"
          }
        }
      },
      {
        "changeOfAngleInDegrees": -90,
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_LEFT",
        "maneuverPoint": {
          "latitude": 51.1045334,
          "longitude": 17.0223176
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "mar.ˈʃaw.ka ju.ˈzɛ.fa piw.su.ˈt⁀skjɛ.gɔ",
            "phoneticLanguageCode": "pl-PL",
            "text": "Marszałka Józefa Piłsudskiego"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "gra.bi.ˈʃɨɲ.ska",
            "phoneticLanguageCode": "pl-PL",
            "text": "Grabiszyńska"
          }
        },
        "routeOffsetInMeters": 9942,
        "routePath": [
          {
            "distanceInMeters": 9942,
            "point": {
              "latitude": 51.1044046,
              "longitude": 17.0220172
            },
            "travelTimeInSeconds": 1470
          },
          {
            "distanceInMeters": 9968,
            "point": {
              "latitude": 51.1045334,
              "longitude": 17.0223176
            },
            "travelTimeInSeconds": 1473
          },
          {
            "distanceInMeters": 9992,
            "point": {
              "latitude": 51.1047211,
              "longitude": 17.0221406
            },
            "travelTimeInSeconds": 1484
          },
          {
            "distanceInMeters": 10002,
            "point": {
              "latitude": 51.1047994,
              "longitude": 17.0220703
            },
            "travelTimeInSeconds": 1486
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 606,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 525,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 385,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 213,
            "side": "RIGHT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": 112,
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_RIGHT",
        "maneuverPoint": {
          "latitude": 51.1114052,
          "longitude": 17.0221004
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈplat⁀s ˈja.na ˈpa.vwa dru.ˈgjɛ.gɔ",
            "phoneticLanguageCode": "pl-PL",
            "text": "Plac Jana Pawła II"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "pɔ.ˈdva.lɛ",
            "phoneticLanguageCode": "pl-PL",
            "text": "Podwale"
          }
        },
        "routeOffsetInMeters": 10728,
        "routePath": [
          {
            "distanceInMeters": 10728,
            "point": {
              "latitude": 51.1112174,
              "longitude": 17.0217571
            },
            "travelTimeInSeconds": 1628
          },
          {
            "distanceInMeters": 10740,
            "point": {
              "latitude": 51.111314,
              "longitude": 17.0218349
            },
            "travelTimeInSeconds": 1630
          },
          {
            "distanceInMeters": 10746,
            "point": {
              "latitude": 51.1113462,
              "longitude": 17.0218912
            },
            "travelTimeInSeconds": 1631
          },
          {
            "distanceInMeters": 10750,
            "point": {
              "latitude": 51.1113676,
              "longitude": 17.0219448
            },
            "travelTimeInSeconds": 1632
          },
          {
            "distanceInMeters": 10756,
            "point": {
              "latitude": 51.1113891,
              "longitude": 17.0220172
            },
            "travelTimeInSeconds": 1633
          },
          {
            "distanceInMeters": 10762,
            "point": {
              "latitude": 51.1114052,
              "longitude": 17.0221004
            },
            "travelTimeInSeconds": 1634
          },
          {
            "distanceInMeters": 10772,
            "point": {
              "latitude": 51.1113648,
              "longitude": 17.0222279
            },
            "travelTimeInSeconds": 1635
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 502,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 379,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 119,
            "side": "LEFT"
          }
        ]
      },
      {
        "drivingSide": "RIGHT",
        "maneuver": "ARRIVE",
        "maneuverPoint": {
          "latitude": 51.1105459,
          "longitude": 17.0255623
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈru.ska",
            "phoneticLanguageCode": "pl-PL",
            "text": "Ruska"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈru.ska",
            "phoneticLanguageCode": "pl-PL",
            "text": "Ruska"
          }
        },
        "routeOffsetInMeters": 11023,
        "routePath": [
          {
            "distanceInMeters": 11023,
            "point": {
              "latitude": 51.1105459,
              "longitude": 17.0255623
            },
            "travelTimeInSeconds": 0
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 39,
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
      "pointIndex": 3,
      "travelTimeInSeconds": 17,
      "distanceInMeters": 59
    },
    {
      "pointIndex": 4,
      "travelTimeInSeconds": 32,
      "distanceInMeters": 79
    },
    {
      "pointIndex": 6,
      "travelTimeInSeconds": 66,
      "distanceInMeters": 188
    },
    {
      "pointIndex": 23,
      "travelTimeInSeconds": 146,
      "distanceInMeters": 848
    },
    {
      "pointIndex": 51,
      "travelTimeInSeconds": 245,
      "distanceInMeters": 2221
    },
    {
      "pointIndex": 64,
      "travelTimeInSeconds": 324,
      "distanceInMeters": 3048
    },
    {
      "pointIndex": 66,
      "travelTimeInSeconds": 336,
      "distanceInMeters": 3120
    },
    {
      "pointIndex": 68,
      "travelTimeInSeconds": 372,
      "distanceInMeters": 3191
    },
    {
      "pointIndex": 73,
      "travelTimeInSeconds": 415,
      "distanceInMeters": 3434
    },
    {
      "pointIndex": 91,
      "travelTimeInSeconds": 450,
      "distanceInMeters": 3545
    },
    {
      "pointIndex": 107,
      "travelTimeInSeconds": 553,
      "distanceInMeters": 4440
    },
    {
      "pointIndex": 108,
      "travelTimeInSeconds": 604,
      "distanceInMeters": 4606
    },
    {
      "pointIndex": 109,
      "travelTimeInSeconds": 623,
      "distanceInMeters": 4731
    },
    {
      "pointIndex": 112,
      "travelTimeInSeconds": 669,
      "distanceInMeters": 4941
    },
    {
      "pointIndex": 132,
      "travelTimeInSeconds": 711,
      "distanceInMeters": 5411
    },
    {
      "pointIndex": 147,
      "travelTimeInSeconds": 791,
      "distanceInMeters": 6306
    },
    {
      "pointIndex": 149,
      "travelTimeInSeconds": 810,
      "distanceInMeters": 6410
    },
    {
      "pointIndex": 152,
      "travelTimeInSeconds": 839,
      "distanceInMeters": 6621
    },
    {
      "pointIndex": 154,
      "travelTimeInSeconds": 858,
      "distanceInMeters": 6657
    },
    {
      "pointIndex": 155,
      "travelTimeInSeconds": 881,
      "distanceInMeters": 6681
    },
    {
      "pointIndex": 160,
      "travelTimeInSeconds": 912,
      "distanceInMeters": 6800
    },
    {
      "pointIndex": 181,
      "travelTimeInSeconds": 1010,
      "distanceInMeters": 7571
    },
    {
      "pointIndex": 185,
      "travelTimeInSeconds": 1055,
      "distanceInMeters": 7789
    },
    {
      "pointIndex": 191,
      "travelTimeInSeconds": 1077,
      "distanceInMeters": 7881
    },
    {
      "pointIndex": 197,
      "travelTimeInSeconds": 1098,
      "distanceInMeters": 7961
    },
    {
      "pointIndex": 204,
      "travelTimeInSeconds": 1138,
      "distanceInMeters": 8245
    },
    {
      "pointIndex": 205,
      "travelTimeInSeconds": 1190,
      "distanceInMeters": 8385
    },
    {
      "pointIndex": 207,
      "travelTimeInSeconds": 1219,
      "distanceInMeters": 8637
    },
    {
      "pointIndex": 214,
      "travelTimeInSeconds": 1240,
      "distanceInMeters": 8723
    },
    {
      "pointIndex": 225,
      "travelTimeInSeconds": 1291,
      "distanceInMeters": 9188
    },
    {
      "pointIndex": 226,
      "travelTimeInSeconds": 1305,
      "distanceInMeters": 9234
    },
    {
      "pointIndex": 228,
      "travelTimeInSeconds": 1343,
      "distanceInMeters": 9287
    },
    {
      "pointIndex": 229,
      "travelTimeInSeconds": 1357,
      "distanceInMeters": 9334
    },
    {
      "pointIndex": 231,
      "travelTimeInSeconds": 1378,
      "distanceInMeters": 9523
    },
    {
      "pointIndex": 233,
      "travelTimeInSeconds": 1391,
      "distanceInMeters": 9575
    },
    {
      "pointIndex": 235,
      "travelTimeInSeconds": 1415,
      "distanceInMeters": 9816
    },
    {
      "pointIndex": 236,
      "travelTimeInSeconds": 1434,
      "distanceInMeters": 9888
    },
    {
      "pointIndex": 238,
      "travelTimeInSeconds": 1469,
      "distanceInMeters": 9940
    },
    {
      "pointIndex": 242,
      "travelTimeInSeconds": 1494,
      "distanceInMeters": 10065
    },
    {
      "pointIndex": 245,
      "travelTimeInSeconds": 1522,
      "distanceInMeters": 10225
    },
    {
      "pointIndex": 250,
      "travelTimeInSeconds": 1559,
      "distanceInMeters": 10349
    },
    {
      "pointIndex": 262,
      "travelTimeInSeconds": 1604,
      "distanceInMeters": 10677
    },
    {
      "pointIndex": 269,
      "travelTimeInSeconds": 1632,
      "distanceInMeters": 10753
    },
    {
      "pointIndex": 276,
      "travelTimeInSeconds": 1679,
      "distanceInMeters": 10981
    },
    {
      "pointIndex": 277,
      "travelTimeInSeconds": 1694,
      "distanceInMeters": 11020
    }
  ]
};

var longRoute = {
  "summary": {
    "lengthInMeters": 12304,
    "travelTimeInSeconds": 1700,
    "trafficDelayInSeconds": 0,
    "trafficLengthInMeters": 0,
    "departureTime": "2024-01-24T13:17:02+01:00",
    "arrivalTime": "2024-01-24T13:45:22+01:00",
    "deviationDistance": 563,
    "deviationTime": 115,
    "deviationPoint": {
      "latitude": 51.0373655,
      "longitude": 16.9863573
    }
  },
  "legs": [
    {
      "summary": {
        "lengthInMeters": 12304,
        "travelTimeInSeconds": 1700,
        "trafficDelayInSeconds": 0,
        "trafficLengthInMeters": 0,
        "departureTime": "2024-01-24T13:17:02+01:00",
        "arrivalTime": "2024-01-24T13:45:22+01:00"
      },
      "points": [
        {
          "latitude": 51.0343507,
          "longitude": 16.9917941
        },
        {
          "latitude": 51.0343963,
          "longitude": 16.9917378
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
          "latitude": 51.0506719,
          "longitude": 16.9740701
        },
        {
          "latitude": 51.0508892,
          "longitude": 16.9743249
        },
        {
          "latitude": 51.0511065,
          "longitude": 16.9746011
        },
        {
          "latitude": 51.051482,
          "longitude": 16.9751537
        },
        {
          "latitude": 51.051777,
          "longitude": 16.9756579
        },
        {
          "latitude": 51.0522839,
          "longitude": 16.9765565
        },
        {
          "latitude": 51.0529277,
          "longitude": 16.9776508
        },
        {
          "latitude": 51.0533327,
          "longitude": 16.9783536
        },
        {
          "latitude": 51.0537243,
          "longitude": 16.9790268
        },
        {
          "latitude": 51.0537913,
          "longitude": 16.9791448
        },
        {
          "latitude": 51.0538879,
          "longitude": 16.9793165
        },
        {
          "latitude": 51.0544914,
          "longitude": 16.9803974
        },
        {
          "latitude": 51.0546041,
          "longitude": 16.9805878
        },
        {
          "latitude": 51.0546255,
          "longitude": 16.9806281
        },
        {
          "latitude": 51.0546523,
          "longitude": 16.9806737
        },
        {
          "latitude": 51.0547006,
          "longitude": 16.9807568
        },
        {
          "latitude": 51.0547355,
          "longitude": 16.9808239
        },
        {
          "latitude": 51.055001,
          "longitude": 16.9812906
        },
        {
          "latitude": 51.0555589,
          "longitude": 16.982232
        },
        {
          "latitude": 51.0563153,
          "longitude": 16.9835383
        },
        {
          "latitude": 51.057069,
          "longitude": 16.9848633
        },
        {
          "latitude": 51.0576054,
          "longitude": 16.9858021
        },
        {
          "latitude": 51.0585201,
          "longitude": 16.9873899
        },
        {
          "latitude": 51.0588017,
          "longitude": 16.9878888
        },
        {
          "latitude": 51.0590565,
          "longitude": 16.9884548
        },
        {
          "latitude": 51.0591531,
          "longitude": 16.9886881
        },
        {
          "latitude": 51.0592979,
          "longitude": 16.9890931
        },
        {
          "latitude": 51.0594481,
          "longitude": 16.9895974
        },
        {
          "latitude": 51.0595715,
          "longitude": 16.9900694
        },
        {
          "latitude": 51.0599658,
          "longitude": 16.9917351
        },
        {
          "latitude": 51.0606122,
          "longitude": 16.9943181
        },
        {
          "latitude": 51.0607544,
          "longitude": 16.9948733
        },
        {
          "latitude": 51.0608563,
          "longitude": 16.9952649
        },
        {
          "latitude": 51.0609421,
          "longitude": 16.9955921
        },
        {
          "latitude": 51.0611299,
          "longitude": 16.9962144
        },
        {
          "latitude": 51.0612962,
          "longitude": 16.9967455
        },
        {
          "latitude": 51.0613498,
          "longitude": 16.9968823
        },
        {
          "latitude": 51.0615671,
          "longitude": 16.9974187
        },
        {
          "latitude": 51.0617012,
          "longitude": 16.9977406
        },
        {
          "latitude": 51.0619399,
          "longitude": 16.9983226
        },
        {
          "latitude": 51.062353,
          "longitude": 16.999315
        },
        {
          "latitude": 51.0627151,
          "longitude": 17.0001867
        },
        {
          "latitude": 51.0630047,
          "longitude": 17.0009136
        },
        {
          "latitude": 51.06334,
          "longitude": 17.0013455
        },
        {
          "latitude": 51.0636538,
          "longitude": 17.0017076
        },
        {
          "latitude": 51.0638711,
          "longitude": 17.0019007
        },
        {
          "latitude": 51.0640267,
          "longitude": 17.002016
        },
        {
          "latitude": 51.064209,
          "longitude": 17.0021313
        },
        {
          "latitude": 51.0644531,
          "longitude": 17.0022655
        },
        {
          "latitude": 51.0647964,
          "longitude": 17.0024532
        },
        {
          "latitude": 51.0681063,
          "longitude": 17.0042878
        },
        {
          "latitude": 51.0682324,
          "longitude": 17.0043549
        },
        {
          "latitude": 51.0688707,
          "longitude": 17.0047063
        },
        {
          "latitude": 51.069442,
          "longitude": 17.0050228
        },
        {
          "latitude": 51.0705337,
          "longitude": 17.0056209
        },
        {
          "latitude": 51.0712069,
          "longitude": 17.0059803
        },
        {
          "latitude": 51.0713786,
          "longitude": 17.0060635
        },
        {
          "latitude": 51.0720599,
          "longitude": 17.0063478
        },
        {
          "latitude": 51.0725078,
          "longitude": 17.0065624
        },
        {
          "latitude": 51.0729665,
          "longitude": 17.0068359
        },
        {
          "latitude": 51.0732856,
          "longitude": 17.007021
        },
        {
          "latitude": 51.0736075,
          "longitude": 17.0072141
        },
        {
          "latitude": 51.0737953,
          "longitude": 17.0073268
        },
        {
          "latitude": 51.0739186,
          "longitude": 17.0073885
        },
        {
          "latitude": 51.0741788,
          "longitude": 17.0074877
        },
        {
          "latitude": 51.0744095,
          "longitude": 17.0075387
        },
        {
          "latitude": 51.0747421,
          "longitude": 17.0075601
        },
        {
          "latitude": 51.0749754,
          "longitude": 17.0075601
        },
        {
          "latitude": 51.075123,
          "longitude": 17.0075601
        },
        {
          "latitude": 51.0752276,
          "longitude": 17.0075628
        },
        {
          "latitude": 51.0757452,
          "longitude": 17.0075601
        },
        {
          "latitude": 51.0770354,
          "longitude": 17.0075735
        },
        {
          "latitude": 51.0771802,
          "longitude": 17.0075816
        },
        {
          "latitude": 51.0777569,
          "longitude": 17.0076111
        },
        {
          "latitude": 51.0778669,
          "longitude": 17.0076165
        },
        {
          "latitude": 51.0781512,
          "longitude": 17.0076326
        },
        {
          "latitude": 51.0785562,
          "longitude": 17.0076701
        },
        {
          "latitude": 51.0788807,
          "longitude": 17.0077372
        },
        {
          "latitude": 51.0793206,
          "longitude": 17.0078954
        },
        {
          "latitude": 51.0797659,
          "longitude": 17.0081368
        },
        {
          "latitude": 51.0802218,
          "longitude": 17.0084292
        },
        {
          "latitude": 51.0809648,
          "longitude": 17.0088905
        },
        {
          "latitude": 51.0820511,
          "longitude": 17.0095369
        },
        {
          "latitude": 51.0827324,
          "longitude": 17.0099527
        },
        {
          "latitude": 51.0839152,
          "longitude": 17.0107037
        },
        {
          "latitude": 51.084339,
          "longitude": 17.0109531
        },
        {
          "latitude": 51.0854119,
          "longitude": 17.0116264
        },
        {
          "latitude": 51.0857794,
          "longitude": 17.0118329
        },
        {
          "latitude": 51.0858786,
          "longitude": 17.0118946
        },
        {
          "latitude": 51.0862219,
          "longitude": 17.0121548
        },
        {
          "latitude": 51.0864258,
          "longitude": 17.0123506
        },
        {
          "latitude": 51.0864767,
          "longitude": 17.0121145
        },
        {
          "latitude": 51.0865197,
          "longitude": 17.0119724
        },
        {
          "latitude": 51.0867584,
          "longitude": 17.0110792
        },
        {
          "latitude": 51.0868871,
          "longitude": 17.0105723
        },
        {
          "latitude": 51.0870132,
          "longitude": 17.0100787
        },
        {
          "latitude": 51.0871419,
          "longitude": 17.0096898
        },
        {
          "latitude": 51.0874102,
          "longitude": 17.00881
        },
        {
          "latitude": 51.0875872,
          "longitude": 17.0082012
        },
        {
          "latitude": 51.0876864,
          "longitude": 17.0078874
        },
        {
          "latitude": 51.0879895,
          "longitude": 17.0068359
        },
        {
          "latitude": 51.0880351,
          "longitude": 17.0066777
        },
        {
          "latitude": 51.0881022,
          "longitude": 17.0065784
        },
        {
          "latitude": 51.0881773,
          "longitude": 17.006439
        },
        {
          "latitude": 51.0882095,
          "longitude": 17.0063934
        },
        {
          "latitude": 51.0883167,
          "longitude": 17.0062834
        },
        {
          "latitude": 51.0883623,
          "longitude": 17.0063129
        },
        {
          "latitude": 51.0886171,
          "longitude": 17.0064846
        },
        {
          "latitude": 51.0887915,
          "longitude": 17.0066053
        },
        {
          "latitude": 51.0890785,
          "longitude": 17.0068011
        },
        {
          "latitude": 51.0891294,
          "longitude": 17.0068359
        },
        {
          "latitude": 51.0893279,
          "longitude": 17.0069674
        },
        {
          "latitude": 51.0897893,
          "longitude": 17.0072812
        },
        {
          "latitude": 51.0899904,
          "longitude": 17.0073992
        },
        {
          "latitude": 51.0904357,
          "longitude": 17.0076647
        },
        {
          "latitude": 51.0912994,
          "longitude": 17.008177
        },
        {
          "latitude": 51.0913584,
          "longitude": 17.0082119
        },
        {
          "latitude": 51.0914925,
          "longitude": 17.0082951
        },
        {
          "latitude": 51.0915703,
          "longitude": 17.0083353
        },
        {
          "latitude": 51.0916293,
          "longitude": 17.0083541
        },
        {
          "latitude": 51.0925224,
          "longitude": 17.0084211
        },
        {
          "latitude": 51.0927933,
          "longitude": 17.0084935
        },
        {
          "latitude": 51.0930321,
          "longitude": 17.0086116
        },
        {
          "latitude": 51.0931581,
          "longitude": 17.0086974
        },
        {
          "latitude": 51.0935444,
          "longitude": 17.008979
        },
        {
          "latitude": 51.0936838,
          "longitude": 17.0090997
        },
        {
          "latitude": 51.0939842,
          "longitude": 17.0094216
        },
        {
          "latitude": 51.0946843,
          "longitude": 17.0102021
        },
        {
          "latitude": 51.0954031,
          "longitude": 17.0111543
        },
        {
          "latitude": 51.095953,
          "longitude": 17.0119268
        },
        {
          "latitude": 51.096189,
          "longitude": 17.0123157
        },
        {
          "latitude": 51.0968086,
          "longitude": 17.0135012
        },
        {
          "latitude": 51.0968676,
          "longitude": 17.0136139
        },
        {
          "latitude": 51.096873,
          "longitude": 17.0136943
        },
        {
          "latitude": 51.0970151,
          "longitude": 17.014389
        },
        {
          "latitude": 51.096999,
          "longitude": 17.014432
        },
        {
          "latitude": 51.0969883,
          "longitude": 17.0144722
        },
        {
          "latitude": 51.0969803,
          "longitude": 17.0145392
        },
        {
          "latitude": 51.096985599999996,
          "longitude": 17.0146546
        },
        {
          "latitude": 51.0970017,
          "longitude": 17.014735
        },
        {
          "latitude": 51.0970312,
          "longitude": 17.0148155
        },
        {
          "latitude": 51.09705,
          "longitude": 17.0148477
        },
        {
          "latitude": 51.0970715,
          "longitude": 17.0148718
        },
        {
          "latitude": 51.0971063,
          "longitude": 17.014896
        },
        {
          "latitude": 51.0971385,
          "longitude": 17.0149067
        },
        {
          "latitude": 51.0972244,
          "longitude": 17.0149094
        },
        {
          "latitude": 51.0972887,
          "longitude": 17.0148772
        },
        {
          "latitude": 51.0973424,
          "longitude": 17.0147994
        },
        {
          "latitude": 51.0973558,
          "longitude": 17.0147672
        },
        {
          "latitude": 51.0973692,
          "longitude": 17.0147243
        },
        {
          "latitude": 51.0977983,
          "longitude": 17.0145714
        },
        {
          "latitude": 51.0984635,
          "longitude": 17.0143756
        },
        {
          "latitude": 51.0985816,
          "longitude": 17.0143434
        },
        {
          "latitude": 51.0987103,
          "longitude": 17.0143139
        },
        {
          "latitude": 51.0999146,
          "longitude": 17.0139921
        },
        {
          "latitude": 51.1006469,
          "longitude": 17.013815
        },
        {
          "latitude": 51.1008587,
          "longitude": 17.0137641
        },
        {
          "latitude": 51.1013684,
          "longitude": 17.0136192
        },
        {
          "latitude": 51.1017814,
          "longitude": 17.0135146
        },
        {
          "latitude": 51.1020309,
          "longitude": 17.0134395
        },
        {
          "latitude": 51.1022481,
          "longitude": 17.013351
        },
        {
          "latitude": 51.1023957,
          "longitude": 17.0139733
        },
        {
          "latitude": 51.1026612,
          "longitude": 17.0150515
        },
        {
          "latitude": 51.103026,
          "longitude": 17.0164758
        },
        {
          "latitude": 51.1031306,
          "longitude": 17.0168942
        },
        {
          "latitude": 51.103195,
          "longitude": 17.0171705
        },
        {
          "latitude": 51.1036751,
          "longitude": 17.0192009
        },
        {
          "latitude": 51.1039647,
          "longitude": 17.0203865
        },
        {
          "latitude": 51.1041981,
          "longitude": 17.0213413
        },
        {
          "latitude": 51.1043161,
          "longitude": 17.0217785
        },
        {
          "latitude": 51.1044046,
          "longitude": 17.0220172
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
      "endPointIndex": 14,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 30,
      "startPointIndex": 14,
      "endPointIndex": 18,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 0,
      "endPointIndex": 26,
      "sectionType": "URBAN"
    },
    {
      "maxSpeedLimitInKmh": 50,
      "startPointIndex": 18,
      "endPointIndex": 40,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 30,
      "startPointIndex": 40,
      "endPointIndex": 43,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 50,
      "startPointIndex": 43,
      "endPointIndex": 81,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 85,
      "endPointIndex": 89,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "pol-nationalroad",
          "shieldContent": "35"
        }
      ]
    },
    {
      "startPointIndex": 89,
      "endPointIndex": 90,
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
      "startPointIndex": 81,
      "endPointIndex": 94,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 90,
      "endPointIndex": 94,
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
      "startPointIndex": 94,
      "endPointIndex": 97,
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
      "maxSpeedLimitInKmh": 50,
      "startPointIndex": 94,
      "endPointIndex": 102,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 33,
      "endPointIndex": 102,
      "sectionType": "URBAN"
    },
    {
      "maxSpeedLimitInKmh": 90,
      "startPointIndex": 102,
      "endPointIndex": 106,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 60,
      "startPointIndex": 106,
      "endPointIndex": 115,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 90,
      "startPointIndex": 115,
      "endPointIndex": 119,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 60,
      "startPointIndex": 119,
      "endPointIndex": 125,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 50,
      "startPointIndex": 125,
      "endPointIndex": 135,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 60,
      "startPointIndex": 135,
      "endPointIndex": 177,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 50,
      "startPointIndex": 177,
      "endPointIndex": 187,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 40,
      "startPointIndex": 187,
      "endPointIndex": 188,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 97,
      "endPointIndex": 188,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
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
      "startPointIndex": 188,
      "endPointIndex": 199,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "pol-nationalroad",
          "shieldContent": "5"
        },
        {
          "reference": "pol-nationalroad",
          "shieldContent": "94"
        },
        {
          "reference": "european-road",
          "shieldContent": "E261"
        }
      ]
    },
    {
      "maxSpeedLimitInKmh": 50,
      "startPointIndex": 188,
      "endPointIndex": 270,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 40,
      "startPointIndex": 270,
      "endPointIndex": 279,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 50,
      "startPointIndex": 279,
      "endPointIndex": 307,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 0,
      "endPointIndex": 307,
      "sectionType": "COUNTRY",
      "countryCode": "POL"
    },
    {
      "startPointIndex": 0,
      "endPointIndex": 307,
      "sectionType": "TRAVEL_MODE",
      "travelMode": "car"
    },
    {
      "startPointIndex": 114,
      "endPointIndex": 307,
      "sectionType": "URBAN"
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
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 48,
      "endPointIndex": 48,
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
      "startPointIndex": 48,
      "endPointIndex": 50,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "DOUBLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 50,
      "endPointIndex": 54,
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
        "DOUBLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 54,
      "endPointIndex": 55,
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
        "DOUBLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 55,
      "endPointIndex": 56,
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
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 187,
      "endPointIndex": 198,
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
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 198,
      "endPointIndex": 199,
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
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 199,
      "endPointIndex": 199,
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
      "startPointIndex": 199,
      "endPointIndex": 204,
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
      "startPointIndex": 204,
      "endPointIndex": 204,
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
        "DOUBLE_SOLID",
        "SHORT_DASHED",
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
          "directions": []
        },
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "DOUBLE_SOLID",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 204,
      "endPointIndex": 205,
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
        "DOUBLE_SOLID",
        "SHORT_DASHED",
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
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 206,
      "endPointIndex": 283,
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
        "SOLID_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 283,
      "endPointIndex": 291,
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
            "LEFT",
            "SLIGHT_RIGHT"
          ]
        },
        {
          "directions": [
            "SLIGHT_RIGHT",
            "SHARP_RIGHT"
          ],
          "follow": "SHARP_RIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SOLID_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 292,
      "endPointIndex": 294,
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
            "LEFT",
            "SLIGHT_RIGHT"
          ]
        },
        {
          "directions": [
            "SLIGHT_RIGHT",
            "SHARP_RIGHT"
          ],
          "follow": "SHARP_RIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SOLID_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 294,
      "endPointIndex": 295,
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
            "LEFT",
            "SLIGHT_RIGHT"
          ]
        },
        {
          "directions": [
            "SLIGHT_RIGHT",
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
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 295,
      "endPointIndex": 300,
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
        "DASHED_SOLID"
      ],
      "properties": [],
      "startPointIndex": 300,
      "endPointIndex": 301,
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
      "startPointIndex": 301,
      "endPointIndex": 306,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 307,
      "endPointIndex": 307,
      "sectionType": "LANES"
    }
  ],
  "guidance": {
    "instructions": [
      {
        "drivingSide": "RIGHT",
        "maneuver": "DEPART",
        "maneuverPoint": {
          "latitude": 51.0343507,
          "longitude": 16.9917941
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "tɛm.pla.ˈrju.ʃɨ",
            "phoneticLanguageCode": "pl-PL",
            "text": "Templariuszy"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "tɛm.pla.ˈrju.ʃɨ",
            "phoneticLanguageCode": "pl-PL",
            "text": "Templariuszy"
          }
        },
        "routeOffsetInMeters": 0,
        "routePath": [
          {
            "distanceInMeters": 0,
            "point": {
              "latitude": 51.0343507,
              "longitude": 16.9917941
            },
            "travelTimeInSeconds": 0
          }
        ],
        "sideRoads": []
      },
      {
        "changeOfAngleInDegrees": 79,
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_RIGHT",
        "maneuverPoint": {
          "latitude": 51.0346833,
          "longitude": 16.991145
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "text": ""
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "tɛm.pla.ˈrju.ʃɨ",
            "phoneticLanguageCode": "pl-PL",
            "text": "Templariuszy"
          }
        },
        "routeOffsetInMeters": 58,
        "routePath": [
          {
            "distanceInMeters": 58,
            "point": {
              "latitude": 51.0346833,
              "longitude": 16.991145
            },
            "travelTimeInSeconds": 17
          },
          {
            "distanceInMeters": 68,
            "point": {
              "latitude": 51.0347664,
              "longitude": 16.991208
            },
            "travelTimeInSeconds": 24
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 38,
            "side": "LEFT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": -90,
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_LEFT",
        "maneuverPoint": {
          "latitude": 51.0351929,
          "longitude": 16.9915822
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈgwu.vna",
            "phoneticLanguageCode": "pl-PL",
            "text": "Główna"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "tɛm.pla.ˈrju.ʃɨ",
            "phoneticLanguageCode": "pl-PL",
            "text": "Templariuszy"
          }
        },
        "routeOffsetInMeters": 123,
        "routePath": [
          {
            "distanceInMeters": 123,
            "point": {
              "latitude": 51.0351929,
              "longitude": 16.9915822
            },
            "travelTimeInSeconds": 45
          },
          {
            "distanceInMeters": 133,
            "point": {
              "latitude": 51.0352387,
              "longitude": 16.9914593
            },
            "travelTimeInSeconds": 49
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 44,
            "side": "LEFT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": 79,
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_RIGHT",
        "maneuverPoint": {
          "latitude": 51.0395595,
          "longitude": 16.9690999
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "vrɔ.ˈt⁀swa.fska",
            "phoneticLanguageCode": "pl-PL",
            "text": "Wrocławska"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "kɔ.lɛ.ˈjɔ.va",
            "phoneticLanguageCode": "pl-PL",
            "text": "Kolejowa"
          }
        },
        "routeOffsetInMeters": 1865,
        "routePath": [
          {
            "distanceInMeters": 1865,
            "point": {
              "latitude": 51.0395595,
              "longitude": 16.9690999
            },
            "travelTimeInSeconds": 337
          },
          {
            "distanceInMeters": 1878,
            "point": {
              "latitude": 51.0396722,
              "longitude": 16.9691321
            },
            "travelTimeInSeconds": 344
          },
          {
            "distanceInMeters": 1884,
            "point": {
              "latitude": 51.0397232,
              "longitude": 16.9691133
            },
            "travelTimeInSeconds": 347
          },
          {
            "distanceInMeters": 1894,
            "point": {
              "latitude": 51.0398098,
              "longitude": 16.9691402
            },
            "travelTimeInSeconds": 348
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 930,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 807,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 728,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 673,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 542,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 529,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 520,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 342,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 287,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 266,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 259,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 190,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 167,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 120,
            "side": "LEFT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": -90,
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_LEFT",
        "maneuverPoint": {
          "latitude": 51.0864258,
          "longitude": 17.0123506
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "POL",
              "roadNumber": {
                "text": "5"
              },
              "stateCode": ""
            },
            {
              "countryCode": "POL",
              "roadNumber": {
                "text": "94"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "a.ˈlɛ.ja gɛ.nɛ.ˈra.wa ju.ˈzɛ.fa xa.ˈlːɛ.ra",
            "phoneticLanguageCode": "pl-PL",
            "text": "Aleja Generała Józefa Hallera"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "POL",
              "roadNumber": {
                "text": "5"
              },
              "stateCode": ""
            },
            {
              "countryCode": "POL",
              "roadNumber": {
                "text": "E261"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "pɔ.ˈfstaɲ.t⁀suf ˈɕlɔ̃.skix",
            "phoneticLanguageCode": "pl-PL",
            "text": "Powstańców Śląskich"
          }
        },
        "routeOffsetInMeters": 8273,
        "routePath": [
          {
            "distanceInMeters": 8273,
            "point": {
              "latitude": 51.0862219,
              "longitude": 17.0121548
            },
            "travelTimeInSeconds": 994
          },
          {
            "distanceInMeters": 8299,
            "point": {
              "latitude": 51.0864258,
              "longitude": 17.0123506
            },
            "travelTimeInSeconds": 999
          },
          {
            "distanceInMeters": 8317,
            "point": {
              "latitude": 51.0864767,
              "longitude": 17.0121145
            },
            "travelTimeInSeconds": 1008
          },
          {
            "distanceInMeters": 8328,
            "point": {
              "latitude": 51.0865197,
              "longitude": 17.0119724
            },
            "travelTimeInSeconds": 1009
          },
          {
            "distanceInMeters": 8338,
            "point": {
              "latitude": 51.0865548,
              "longitude": 17.011841
            },
            "travelTimeInSeconds": 1010
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 955,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 771,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 499,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 276,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 97,
            "side": "RIGHT"
          }
        ],
        "signpost": {
          "exitName": {
            "text": ""
          },
          "exitNumber": {
            "text": ""
          },
          "towardName": {
            "phonetic": "ˈpɔ.znaɲ",
            "phoneticLanguageCode": "pl-PL",
            "text": "Poznań"
          }
        }
      },
      {
        "changeOfAngleInDegrees": 90,
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_RIGHT",
        "maneuverPoint": {
          "latitude": 51.0883167,
          "longitude": 17.0062834
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ga.jɔ.ˈvi.t⁀ska",
            "phoneticLanguageCode": "pl-PL",
            "text": "Gajowicka"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "POL",
              "roadNumber": {
                "text": "5"
              },
              "stateCode": ""
            },
            {
              "countryCode": "POL",
              "roadNumber": {
                "text": "94"
              },
              "stateCode": ""
            },
            {
              "countryCode": "POL",
              "roadNumber": {
                "text": "E261"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "a.ˈlɛ.ja gɛ.nɛ.ˈra.wa ju.ˈzɛ.fa xa.ˈlːɛ.ra",
            "phoneticLanguageCode": "pl-PL",
            "text": "Aleja Generała Józefa Hallera"
          }
        },
        "routeOffsetInMeters": 8736,
        "routePath": [
          {
            "distanceInMeters": 8736,
            "point": {
              "latitude": 51.0880351,
              "longitude": 17.0066777
            },
            "travelTimeInSeconds": 1059
          },
          {
            "distanceInMeters": 8746,
            "point": {
              "latitude": 51.0881022,
              "longitude": 17.0065784
            },
            "travelTimeInSeconds": 1062
          },
          {
            "distanceInMeters": 8759,
            "point": {
              "latitude": 51.0881773,
              "longitude": 17.006439
            },
            "travelTimeInSeconds": 1066
          },
          {
            "distanceInMeters": 8764,
            "point": {
              "latitude": 51.0882095,
              "longitude": 17.0063934
            },
            "travelTimeInSeconds": 1067
          },
          {
            "distanceInMeters": 8778,
            "point": {
              "latitude": 51.0883167,
              "longitude": 17.0062834
            },
            "travelTimeInSeconds": 1073
          },
          {
            "distanceInMeters": 8783,
            "point": {
              "latitude": 51.0883623,
              "longitude": 17.0063129
            },
            "travelTimeInSeconds": 1075
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 301,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 264,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 117,
            "side": "RIGHT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": -80,
        "drivingSide": "RIGHT",
        "maneuver": "ROUNDABOUT_LEFT",
        "maneuverPoint": {
          "latitude": 51.0973692,
          "longitude": 17.0147243
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "za.pɔ.ˈrɔ.ska",
            "phoneticLanguageCode": "pl-PL",
            "text": "Zaporoska"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ga.jɔ.ˈvi.t⁀ska",
            "phoneticLanguageCode": "pl-PL",
            "text": "Gajowicka"
          }
        },
        "roundaboutExitNumber": 3,
        "routeOffsetInMeters": 9946,
        "routePath": [
          {
            "distanceInMeters": 9946,
            "point": {
              "latitude": 51.0970151,
              "longitude": 17.014389
            },
            "travelTimeInSeconds": 1240
          },
          {
            "distanceInMeters": 9950,
            "point": {
              "latitude": 51.096999,
              "longitude": 17.014432
            },
            "travelTimeInSeconds": 1240
          },
          {
            "distanceInMeters": 9953,
            "point": {
              "latitude": 51.0969883,
              "longitude": 17.0144722
            },
            "travelTimeInSeconds": 1240
          },
          {
            "distanceInMeters": 9958,
            "point": {
              "latitude": 51.0969803,
              "longitude": 17.0145392
            },
            "travelTimeInSeconds": 1241
          },
          {
            "distanceInMeters": 9966,
            "point": {
              "latitude": 51.096985599999996,
              "longitude": 17.0146546
            },
            "travelTimeInSeconds": 1242
          },
          {
            "distanceInMeters": 9972,
            "point": {
              "latitude": 51.0970017,
              "longitude": 17.014735
            },
            "travelTimeInSeconds": 1243
          },
          {
            "distanceInMeters": 9978,
            "point": {
              "latitude": 51.0970312,
              "longitude": 17.0148155
            },
            "travelTimeInSeconds": 1243
          },
          {
            "distanceInMeters": 9981,
            "point": {
              "latitude": 51.09705,
              "longitude": 17.0148477
            },
            "travelTimeInSeconds": 1244
          },
          {
            "distanceInMeters": 9984,
            "point": {
              "latitude": 51.0970715,
              "longitude": 17.0148718
            },
            "travelTimeInSeconds": 1244
          },
          {
            "distanceInMeters": 9988,
            "point": {
              "latitude": 51.0971063,
              "longitude": 17.014896
            },
            "travelTimeInSeconds": 1244
          },
          {
            "distanceInMeters": 9992,
            "point": {
              "latitude": 51.0971385,
              "longitude": 17.0149067
            },
            "travelTimeInSeconds": 1245
          },
          {
            "distanceInMeters": 10002,
            "point": {
              "latitude": 51.0972244,
              "longitude": 17.0149094
            },
            "travelTimeInSeconds": 1246
          },
          {
            "distanceInMeters": 10009,
            "point": {
              "latitude": 51.0972887,
              "longitude": 17.0148772
            },
            "travelTimeInSeconds": 1247
          },
          {
            "distanceInMeters": 10017,
            "point": {
              "latitude": 51.0973424,
              "longitude": 17.0147994
            },
            "travelTimeInSeconds": 1247
          },
          {
            "distanceInMeters": 10020,
            "point": {
              "latitude": 51.0973558,
              "longitude": 17.0147672
            },
            "travelTimeInSeconds": 1248
          },
          {
            "distanceInMeters": 10023,
            "point": {
              "latitude": 51.0973692,
              "longitude": 17.0147243
            },
            "travelTimeInSeconds": 1248
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 913,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 804,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 599,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 551,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 398,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 212,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 67,
            "side": "RIGHT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": 84,
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "landmark": "AT_TRAFFIC_LIGHT",
        "maneuver": "TURN_RIGHT",
        "maneuverPoint": {
          "latitude": 51.1022481,
          "longitude": 17.013351
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "gra.bi.ˈʃɨɲ.ska",
            "phoneticLanguageCode": "pl-PL",
            "text": "Grabiszyńska"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "za.pɔ.ˈrɔ.ska",
            "phoneticLanguageCode": "pl-PL",
            "text": "Zaporoska"
          }
        },
        "routeOffsetInMeters": 10575,
        "routePath": [
          {
            "distanceInMeters": 10575,
            "point": {
              "latitude": 51.1022481,
              "longitude": 17.013351
            },
            "travelTimeInSeconds": 1350
          },
          {
            "distanceInMeters": 10585,
            "point": {
              "latitude": 51.1022795,
              "longitude": 17.0134835
            },
            "travelTimeInSeconds": 1353
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 427,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 399,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 263,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 181,
            "side": "RIGHT"
          }
        ],
        "signpost": {
          "exitName": {
            "text": ""
          },
          "exitNumber": {
            "text": ""
          },
          "towardName": {
            "phonetic": "ˈpɔ.znaɲ",
            "phoneticLanguageCode": "pl-PL",
            "text": "Poznań"
          }
        }
      },
      {
        "changeOfAngleInDegrees": -90,
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_LEFT",
        "maneuverPoint": {
          "latitude": 51.1045334,
          "longitude": 17.0223176
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "mar.ˈʃaw.ka ju.ˈzɛ.fa piw.su.ˈt⁀skjɛ.gɔ",
            "phoneticLanguageCode": "pl-PL",
            "text": "Marszałka Józefa Piłsudskiego"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "gra.bi.ˈʃɨɲ.ska",
            "phoneticLanguageCode": "pl-PL",
            "text": "Grabiszyńska"
          }
        },
        "routeOffsetInMeters": 11228,
        "routePath": [
          {
            "distanceInMeters": 11228,
            "point": {
              "latitude": 51.1044046,
              "longitude": 17.0220172
            },
            "travelTimeInSeconds": 1476
          },
          {
            "distanceInMeters": 11253,
            "point": {
              "latitude": 51.1045334,
              "longitude": 17.0223176
            },
            "travelTimeInSeconds": 1481
          },
          {
            "distanceInMeters": 11277,
            "point": {
              "latitude": 51.1047211,
              "longitude": 17.0221406
            },
            "travelTimeInSeconds": 1491
          },
          {
            "distanceInMeters": 11287,
            "point": {
              "latitude": 51.1047994,
              "longitude": 17.0220703
            },
            "travelTimeInSeconds": 1492
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 606,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 525,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 385,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 213,
            "side": "RIGHT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": 112,
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_RIGHT",
        "maneuverPoint": {
          "latitude": 51.1114052,
          "longitude": 17.0221004
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈplat⁀s ˈja.na ˈpa.vwa dru.ˈgjɛ.gɔ",
            "phoneticLanguageCode": "pl-PL",
            "text": "Plac Jana Pawła II"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "pɔ.ˈdva.lɛ",
            "phoneticLanguageCode": "pl-PL",
            "text": "Podwale"
          }
        },
        "routeOffsetInMeters": 12014,
        "routePath": [
          {
            "distanceInMeters": 12014,
            "point": {
              "latitude": 51.1112174,
              "longitude": 17.0217571
            },
            "travelTimeInSeconds": 1634
          },
          {
            "distanceInMeters": 12026,
            "point": {
              "latitude": 51.111314,
              "longitude": 17.0218349
            },
            "travelTimeInSeconds": 1637
          },
          {
            "distanceInMeters": 12031,
            "point": {
              "latitude": 51.1113462,
              "longitude": 17.0218912
            },
            "travelTimeInSeconds": 1638
          },
          {
            "distanceInMeters": 12036,
            "point": {
              "latitude": 51.1113676,
              "longitude": 17.0219448
            },
            "travelTimeInSeconds": 1638
          },
          {
            "distanceInMeters": 12041,
            "point": {
              "latitude": 51.1113891,
              "longitude": 17.0220172
            },
            "travelTimeInSeconds": 1639
          },
          {
            "distanceInMeters": 12047,
            "point": {
              "latitude": 51.1114052,
              "longitude": 17.0221004
            },
            "travelTimeInSeconds": 1640
          },
          {
            "distanceInMeters": 12057,
            "point": {
              "latitude": 51.1113648,
              "longitude": 17.0222279
            },
            "travelTimeInSeconds": 1642
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 502,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 379,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 119,
            "side": "LEFT"
          }
        ]
      },
      {
        "drivingSide": "RIGHT",
        "maneuver": "ARRIVE",
        "maneuverPoint": {
          "latitude": 51.1105459,
          "longitude": 17.0255623
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈru.ska",
            "phoneticLanguageCode": "pl-PL",
            "text": "Ruska"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈru.ska",
            "phoneticLanguageCode": "pl-PL",
            "text": "Ruska"
          }
        },
        "routeOffsetInMeters": 12308,
        "routePath": [
          {
            "distanceInMeters": 12308,
            "point": {
              "latitude": 51.1105459,
              "longitude": 17.0255623
            },
            "travelTimeInSeconds": 0
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 39,
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
      "pointIndex": 3,
      "travelTimeInSeconds": 17,
      "distanceInMeters": 59
    },
    {
      "pointIndex": 4,
      "travelTimeInSeconds": 32,
      "distanceInMeters": 79
    },
    {
      "pointIndex": 6,
      "travelTimeInSeconds": 66,
      "distanceInMeters": 188
    },
    {
      "pointIndex": 20,
      "travelTimeInSeconds": 139,
      "distanceInMeters": 806
    },
    {
      "pointIndex": 40,
      "travelTimeInSeconds": 207,
      "distanceInMeters": 1554
    },
    {
      "pointIndex": 45,
      "travelTimeInSeconds": 227,
      "distanceInMeters": 1695
    },
    {
      "pointIndex": 46,
      "travelTimeInSeconds": 247,
      "distanceInMeters": 1742
    },
    {
      "pointIndex": 50,
      "travelTimeInSeconds": 346,
      "distanceInMeters": 1881
    },
    {
      "pointIndex": 74,
      "travelTimeInSeconds": 407,
      "distanceInMeters": 2496
    },
    {
      "pointIndex": 81,
      "travelTimeInSeconds": 431,
      "distanceInMeters": 2684
    },
    {
      "pointIndex": 86,
      "travelTimeInSeconds": 453,
      "distanceInMeters": 2776
    },
    {
      "pointIndex": 124,
      "travelTimeInSeconds": 581,
      "distanceInMeters": 4611
    },
    {
      "pointIndex": 130,
      "travelTimeInSeconds": 624,
      "distanceInMeters": 5078
    },
    {
      "pointIndex": 134,
      "travelTimeInSeconds": 662,
      "distanceInMeters": 5204
    },
    {
      "pointIndex": 163,
      "travelTimeInSeconds": 806,
      "distanceInMeters": 6897
    },
    {
      "pointIndex": 167,
      "travelTimeInSeconds": 826,
      "distanceInMeters": 6988
    },
    {
      "pointIndex": 181,
      "travelTimeInSeconds": 897,
      "distanceInMeters": 7851
    },
    {
      "pointIndex": 184,
      "travelTimeInSeconds": 938,
      "distanceInMeters": 8171
    },
    {
      "pointIndex": 187,
      "travelTimeInSeconds": 993,
      "distanceInMeters": 8268
    },
    {
      "pointIndex": 188,
      "travelTimeInSeconds": 996,
      "distanceInMeters": 8295
    },
    {
      "pointIndex": 190,
      "travelTimeInSeconds": 1008,
      "distanceInMeters": 8324
    },
    {
      "pointIndex": 202,
      "travelTimeInSeconds": 1066,
      "distanceInMeters": 8760
    },
    {
      "pointIndex": 208,
      "travelTimeInSeconds": 1084,
      "distanceInMeters": 8873
    },
    {
      "pointIndex": 221,
      "travelTimeInSeconds": 1140,
      "distanceInMeters": 9345
    },
    {
      "pointIndex": 228,
      "travelTimeInSeconds": 1193,
      "distanceInMeters": 9769
    },
    {
      "pointIndex": 231,
      "travelTimeInSeconds": 1209,
      "distanceInMeters": 9893
    },
    {
      "pointIndex": 235,
      "travelTimeInSeconds": 1241,
      "distanceInMeters": 9956
    },
    {
      "pointIndex": 255,
      "travelTimeInSeconds": 1297,
      "distanceInMeters": 10472
    },
    {
      "pointIndex": 256,
      "travelTimeInSeconds": 1311,
      "distanceInMeters": 10518
    },
    {
      "pointIndex": 258,
      "travelTimeInSeconds": 1349,
      "distanceInMeters": 10571
    },
    {
      "pointIndex": 259,
      "travelTimeInSeconds": 1363,
      "distanceInMeters": 10618
    },
    {
      "pointIndex": 263,
      "travelTimeInSeconds": 1397,
      "distanceInMeters": 10859
    },
    {
      "pointIndex": 265,
      "travelTimeInSeconds": 1421,
      "distanceInMeters": 11100
    },
    {
      "pointIndex": 266,
      "travelTimeInSeconds": 1440,
      "distanceInMeters": 11172
    },
    {
      "pointIndex": 268,
      "travelTimeInSeconds": 1475,
      "distanceInMeters": 11224
    },
    {
      "pointIndex": 272,
      "travelTimeInSeconds": 1500,
      "distanceInMeters": 11349
    },
    {
      "pointIndex": 275,
      "travelTimeInSeconds": 1528,
      "distanceInMeters": 11509
    },
    {
      "pointIndex": 280,
      "travelTimeInSeconds": 1565,
      "distanceInMeters": 11633
    },
    {
      "pointIndex": 292,
      "travelTimeInSeconds": 1610,
      "distanceInMeters": 11961
    },
    {
      "pointIndex": 298,
      "travelTimeInSeconds": 1638,
      "distanceInMeters": 12032
    },
    {
      "pointIndex": 306,
      "travelTimeInSeconds": 1685,
      "distanceInMeters": 12265
    },
    {
      "pointIndex": 307,
      "travelTimeInSeconds": 1700,
      "distanceInMeters": 12304
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
