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
    "lengthInMeters": 12038,
    "travelTimeInSeconds": 1896,
    "trafficDelayInSeconds": 0,
    "trafficLengthInMeters": 0,
    "departureTime": "2024-01-24T13:17:02+01:00",
    "arrivalTime": "2024-01-24T13:48:38+01:00",
    "deviationDistance": 2178,
    "deviationTime": 240,
    "deviationPoint": {
      "latitude": 51.0489097,
      "longitude": 16.9994572
    }
  },
  "legs": [
    {
      "summary": {
        "lengthInMeters": 12038,
        "travelTimeInSeconds": 1896,
        "trafficDelayInSeconds": 0,
        "trafficLengthInMeters": 0,
        "departureTime": "2024-01-24T13:17:02+01:00",
        "arrivalTime": "2024-01-24T13:48:38+01:00"
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
          "latitude": 51.0488293,
          "longitude": 16.999712
        },
        {
          "latitude": 51.048443,
          "longitude": 17.0015413
        },
        {
          "latitude": 51.048156,
          "longitude": 17.0029843
        },
        {
          "latitude": 51.0480326,
          "longitude": 17.0036092
        },
        {
          "latitude": 51.0479844,
          "longitude": 17.003856
        },
        {
          "latitude": 51.0478985,
          "longitude": 17.0042986
        },
        {
          "latitude": 51.0478207,
          "longitude": 17.0046178
        },
        {
          "latitude": 51.0477296,
          "longitude": 17.0050147
        },
        {
          "latitude": 51.0475096,
          "longitude": 17.0059562
        },
        {
          "latitude": 51.0473755,
          "longitude": 17.0065704
        },
        {
          "latitude": 51.0473326,
          "longitude": 17.0067769
        },
        {
          "latitude": 51.0473192,
          "longitude": 17.0068359
        },
        {
          "latitude": 51.0470241,
          "longitude": 17.0081931
        },
        {
          "latitude": 51.0467532,
          "longitude": 17.0092982
        },
        {
          "latitude": 51.0466996,
          "longitude": 17.0094806
        },
        {
          "latitude": 51.0466298,
          "longitude": 17.0097515
        },
        {
          "latitude": 51.0465118,
          "longitude": 17.0101324
        },
        {
          "latitude": 51.0463268,
          "longitude": 17.0113045
        },
        {
          "latitude": 51.0462812,
          "longitude": 17.0117149
        },
        {
          "latitude": 51.0462677,
          "longitude": 17.0119375
        },
        {
          "latitude": 51.046131,
          "longitude": 17.0128173
        },
        {
          "latitude": 51.0460934,
          "longitude": 17.0130506
        },
        {
          "latitude": 51.0460317,
          "longitude": 17.0135924
        },
        {
          "latitude": 51.0460022,
          "longitude": 17.0138338
        },
        {
          "latitude": 51.0458788,
          "longitude": 17.0147136
        },
        {
          "latitude": 51.0462141,
          "longitude": 17.0149148
        },
        {
          "latitude": 51.0465333,
          "longitude": 17.0150784
        },
        {
          "latitude": 51.0469142,
          "longitude": 17.015301
        },
        {
          "latitude": 51.0471287,
          "longitude": 17.0154485
        },
        {
          "latitude": 51.0473675,
          "longitude": 17.0156282
        },
        {
          "latitude": 51.0478663,
          "longitude": 17.0160896
        },
        {
          "latitude": 51.0480836,
          "longitude": 17.0163068
        },
        {
          "latitude": 51.0485798,
          "longitude": 17.0167762
        },
        {
          "latitude": 51.0488561,
          "longitude": 17.0170337
        },
        {
          "latitude": 51.0493067,
          "longitude": 17.0173877
        },
        {
          "latitude": 51.0496607,
          "longitude": 17.0176452
        },
        {
          "latitude": 51.0506263,
          "longitude": 17.0183963
        },
        {
          "latitude": 51.0508731,
          "longitude": 17.0185384
        },
        {
          "latitude": 51.0510314,
          "longitude": 17.0186028
        },
        {
          "latitude": 51.051203,
          "longitude": 17.0186618
        },
        {
          "latitude": 51.0516831,
          "longitude": 17.0188683
        },
        {
          "latitude": 51.0519621,
          "longitude": 17.0190454
        },
        {
          "latitude": 51.0528043,
          "longitude": 17.0197293
        },
        {
          "latitude": 51.0533166,
          "longitude": 17.0201638
        },
        {
          "latitude": 51.0546926,
          "longitude": 17.0212823
        },
        {
          "latitude": 51.0550761,
          "longitude": 17.0214942
        },
        {
          "latitude": 51.0552049,
          "longitude": 17.021521
        },
        {
          "latitude": 51.0553953,
          "longitude": 17.021623
        },
        {
          "latitude": 51.0561061,
          "longitude": 17.0219958
        },
        {
          "latitude": 51.0562214,
          "longitude": 17.0220441
        },
        {
          "latitude": 51.0565782,
          "longitude": 17.0222184
        },
        {
          "latitude": 51.0570261,
          "longitude": 17.0224491
        },
        {
          "latitude": 51.0575008,
          "longitude": 17.0229131
        },
        {
          "latitude": 51.0591424,
          "longitude": 17.023868
        },
        {
          "latitude": 51.059837,
          "longitude": 17.024273
        },
        {
          "latitude": 51.0602394,
          "longitude": 17.0251903
        },
        {
          "latitude": 51.0607731,
          "longitude": 17.0265234
        },
        {
          "latitude": 51.0613766,
          "longitude": 17.0283902
        },
        {
          "latitude": 51.0614517,
          "longitude": 17.0286718
        },
        {
          "latitude": 51.061492,
          "longitude": 17.0288086
        },
        {
          "latitude": 51.0615644,
          "longitude": 17.0290634
        },
        {
          "latitude": 51.061846,
          "longitude": 17.0301604
        },
        {
          "latitude": 51.0619935,
          "longitude": 17.0305654
        },
        {
          "latitude": 51.0622805,
          "longitude": 17.0315203
        },
        {
          "latitude": 51.0624334,
          "longitude": 17.031987
        },
        {
          "latitude": 51.0624817,
          "longitude": 17.0321399
        },
        {
          "latitude": 51.0624495,
          "longitude": 17.0321748
        },
        {
          "latitude": 51.0624388,
          "longitude": 17.0321989
        },
        {
          "latitude": 51.0624281,
          "longitude": 17.0322284
        },
        {
          "latitude": 51.0624254,
          "longitude": 17.0322901
        },
        {
          "latitude": 51.0624361,
          "longitude": 17.032333
        },
        {
          "latitude": 51.0624549,
          "longitude": 17.0323679
        },
        {
          "latitude": 51.0624656,
          "longitude": 17.0323867
        },
        {
          "latitude": 51.062479,
          "longitude": 17.0324001
        },
        {
          "latitude": 51.062492399999996,
          "longitude": 17.0324054
        },
        {
          "latitude": 51.0625246,
          "longitude": 17.0324054
        },
        {
          "latitude": 51.0625327,
          "longitude": 17.0324054
        },
        {
          "latitude": 51.0625407,
          "longitude": 17.0324001
        },
        {
          "latitude": 51.0625756,
          "longitude": 17.0323706
        },
        {
          "latitude": 51.0626024,
          "longitude": 17.0323142
        },
        {
          "latitude": 51.0626024,
          "longitude": 17.0322928
        },
        {
          "latitude": 51.0625997,
          "longitude": 17.0322526
        },
        {
          "latitude": 51.062597,
          "longitude": 17.0322338
        },
        {
          "latitude": 51.0626936,
          "longitude": 17.0322204
        },
        {
          "latitude": 51.0629484,
          "longitude": 17.0321694
        },
        {
          "latitude": 51.0631147,
          "longitude": 17.0321533
        },
        {
          "latitude": 51.0633534,
          "longitude": 17.0321533
        },
        {
          "latitude": 51.0635519,
          "longitude": 17.0321426
        },
        {
          "latitude": 51.0643405,
          "longitude": 17.0322981
        },
        {
          "latitude": 51.0644531,
          "longitude": 17.0323142
        },
        {
          "latitude": 51.0649198,
          "longitude": 17.0323893
        },
        {
          "latitude": 51.0651264,
          "longitude": 17.0323893
        },
        {
          "latitude": 51.0659015,
          "longitude": 17.0322633
        },
        {
          "latitude": 51.0660464,
          "longitude": 17.0322391
        },
        {
          "latitude": 51.066218,
          "longitude": 17.0322177
        },
        {
          "latitude": 51.0665533,
          "longitude": 17.0321667
        },
        {
          "latitude": 51.0668859,
          "longitude": 17.0321184
        },
        {
          "latitude": 51.0676932,
          "longitude": 17.0320487
        },
        {
          "latitude": 51.0680848,
          "longitude": 17.0320648
        },
        {
          "latitude": 51.068176,
          "longitude": 17.0320648
        },
        {
          "latitude": 51.0687876,
          "longitude": 17.0321238
        },
        {
          "latitude": 51.0689887,
          "longitude": 17.0321426
        },
        {
          "latitude": 51.0705605,
          "longitude": 17.0323652
        },
        {
          "latitude": 51.0707402,
          "longitude": 17.032384
        },
        {
          "latitude": 51.070995,
          "longitude": 17.032392
        },
        {
          "latitude": 51.0711855,
          "longitude": 17.0324054
        },
        {
          "latitude": 51.0712686,
          "longitude": 17.0324081
        },
        {
          "latitude": 51.07173,
          "longitude": 17.0324698
        },
        {
          "latitude": 51.0719687,
          "longitude": 17.032502
        },
        {
          "latitude": 51.0731354,
          "longitude": 17.0326254
        },
        {
          "latitude": 51.0740367,
          "longitude": 17.0326576
        },
        {
          "latitude": 51.074152,
          "longitude": 17.032671
        },
        {
          "latitude": 51.0742217,
          "longitude": 17.0327541
        },
        {
          "latitude": 51.0749835,
          "longitude": 17.0328909
        },
        {
          "latitude": 51.0754099,
          "longitude": 17.0330438
        },
        {
          "latitude": 51.0757747,
          "longitude": 17.0331779
        },
        {
          "latitude": 51.0769281,
          "longitude": 17.033658
        },
        {
          "latitude": 51.0773385,
          "longitude": 17.033827
        },
        {
          "latitude": 51.0774752,
          "longitude": 17.0338753
        },
        {
          "latitude": 51.0775718,
          "longitude": 17.0339075
        },
        {
          "latitude": 51.0781512,
          "longitude": 17.0340577
        },
        {
          "latitude": 51.079098,
          "longitude": 17.0342293
        },
        {
          "latitude": 51.0796264,
          "longitude": 17.0343018
        },
        {
          "latitude": 51.0796934,
          "longitude": 17.0343125
        },
        {
          "latitude": 51.0798571,
          "longitude": 17.0343366
        },
        {
          "latitude": 51.0799187,
          "longitude": 17.0343474
        },
        {
          "latitude": 51.0800341,
          "longitude": 17.0343742
        },
        {
          "latitude": 51.0808307,
          "longitude": 17.0345271
        },
        {
          "latitude": 51.0814315,
          "longitude": 17.0346397
        },
        {
          "latitude": 51.0816354,
          "longitude": 17.0346853
        },
        {
          "latitude": 51.0819465,
          "longitude": 17.0347497
        },
        {
          "latitude": 51.0822925,
          "longitude": 17.0348248
        },
        {
          "latitude": 51.0826385,
          "longitude": 17.0348918
        },
        {
          "latitude": 51.0831079,
          "longitude": 17.0350179
        },
        {
          "latitude": 51.0833359,
          "longitude": 17.0350608
        },
        {
          "latitude": 51.0834861,
          "longitude": 17.0350957
        },
        {
          "latitude": 51.0838106,
          "longitude": 17.0351708
        },
        {
          "latitude": 51.0845697,
          "longitude": 17.0353076
        },
        {
          "latitude": 51.0849237,
          "longitude": 17.035321
        },
        {
          "latitude": 51.0853046,
          "longitude": 17.0353398
        },
        {
          "latitude": 51.0854709,
          "longitude": 17.0353451
        },
        {
          "latitude": 51.0863051,
          "longitude": 17.0353022
        },
        {
          "latitude": 51.0864258,
          "longitude": 17.0352593
        },
        {
          "latitude": 51.0864821,
          "longitude": 17.0352378
        },
        {
          "latitude": 51.0867208,
          "longitude": 17.0351011
        },
        {
          "latitude": 51.0867611,
          "longitude": 17.0350447
        },
        {
          "latitude": 51.0872251,
          "longitude": 17.0349213
        },
        {
          "latitude": 51.0873243,
          "longitude": 17.0348811
        },
        {
          "latitude": 51.0875121,
          "longitude": 17.0348033
        },
        {
          "latitude": 51.0879868,
          "longitude": 17.0346236
        },
        {
          "latitude": 51.0883087,
          "longitude": 17.0344841
        },
        {
          "latitude": 51.0884187,
          "longitude": 17.0344305
        },
        {
          "latitude": 51.0887325,
          "longitude": 17.0342535
        },
        {
          "latitude": 51.0889766,
          "longitude": 17.0341596
        },
        {
          "latitude": 51.0890946,
          "longitude": 17.0341274
        },
        {
          "latitude": 51.0894701,
          "longitude": 17.0340309
        },
        {
          "latitude": 51.090087,
          "longitude": 17.0338941
        },
        {
          "latitude": 51.0915703,
          "longitude": 17.033776
        },
        {
          "latitude": 51.0924688,
          "longitude": 17.0336956
        },
        {
          "latitude": 51.0927746,
          "longitude": 17.0336178
        },
        {
          "latitude": 51.0931098,
          "longitude": 17.0335293
        },
        {
          "latitude": 51.0941291,
          "longitude": 17.0332557
        },
        {
          "latitude": 51.0944027,
          "longitude": 17.0331377
        },
        {
          "latitude": 51.0945556,
          "longitude": 17.0330518
        },
        {
          "latitude": 51.0948613,
          "longitude": 17.0329177
        },
        {
          "latitude": 51.0949954,
          "longitude": 17.0328695
        },
        {
          "latitude": 51.0951,
          "longitude": 17.0328507
        },
        {
          "latitude": 51.0953066,
          "longitude": 17.0328453
        },
        {
          "latitude": 51.0969293,
          "longitude": 17.03284
        },
        {
          "latitude": 51.0974926,
          "longitude": 17.0328668
        },
        {
          "latitude": 51.0977527,
          "longitude": 17.0329097
        },
        {
          "latitude": 51.0978091,
          "longitude": 17.0325798
        },
        {
          "latitude": 51.0978734,
          "longitude": 17.0322847
        },
        {
          "latitude": 51.0981202,
          "longitude": 17.031303
        },
        {
          "latitude": 51.0983777,
          "longitude": 17.0302865
        },
        {
          "latitude": 51.0984716,
          "longitude": 17.0299163
        },
        {
          "latitude": 51.0984904,
          "longitude": 17.0297983
        },
        {
          "latitude": 51.0985655,
          "longitude": 17.0294872
        },
        {
          "latitude": 51.0987613,
          "longitude": 17.0288086
        },
        {
          "latitude": 51.0988659,
          "longitude": 17.0284465
        },
        {
          "latitude": 51.0989249,
          "longitude": 17.0283714
        },
        {
          "latitude": 51.0991985,
          "longitude": 17.0273387
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
      "endPointIndex": 56,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 41,
      "endPointIndex": 58,
      "sectionType": "URBAN"
    },
    {
      "maxSpeedLimitInKmh": 30,
      "startPointIndex": 56,
      "endPointIndex": 65,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 67,
      "endPointIndex": 74,
      "sectionType": "URBAN"
    },
    {
      "maxSpeedLimitInKmh": 40,
      "startPointIndex": 65,
      "endPointIndex": 74,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 50,
      "startPointIndex": 74,
      "endPointIndex": 85,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 40,
      "startPointIndex": 85,
      "endPointIndex": 101,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 50,
      "startPointIndex": 101,
      "endPointIndex": 115,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 50,
      "startPointIndex": 132,
      "endPointIndex": 251,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 30,
      "startPointIndex": 251,
      "endPointIndex": 261,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 50,
      "startPointIndex": 261,
      "endPointIndex": 272,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 40,
      "startPointIndex": 272,
      "endPointIndex": 281,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 50,
      "startPointIndex": 281,
      "endPointIndex": 309,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 0,
      "endPointIndex": 309,
      "sectionType": "COUNTRY",
      "countryCode": "POL"
    },
    {
      "startPointIndex": 0,
      "endPointIndex": 309,
      "sectionType": "TRAVEL_MODE",
      "travelMode": "car"
    },
    {
      "startPointIndex": 88,
      "endPointIndex": 309,
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
      "startPointIndex": 101,
      "endPointIndex": 101,
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
      "startPointIndex": 101,
      "endPointIndex": 113,
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
      "startPointIndex": 114,
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
        }
      ],
      "laneSeparators": [
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
      "startPointIndex": 116,
      "endPointIndex": 120,
      "sectionType": "LANES"
    },
    {
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
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 120,
      "endPointIndex": 120,
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
      "startPointIndex": 120,
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
      "startPointIndex": 129,
      "endPointIndex": 129,
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
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 129,
      "endPointIndex": 132,
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
      "startPointIndex": 132,
      "endPointIndex": 132,
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
      "startPointIndex": 132,
      "endPointIndex": 133,
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
      "startPointIndex": 133,
      "endPointIndex": 134,
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
      "startPointIndex": 284,
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
      "startPointIndex": 294,
      "endPointIndex": 296,
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
      "startPointIndex": 296,
      "endPointIndex": 297,
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
      "startPointIndex": 297,
      "endPointIndex": 302,
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
      "startPointIndex": 302,
      "endPointIndex": 303,
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
      "startPointIndex": 303,
      "endPointIndex": 308,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 309,
      "endPointIndex": 309,
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
        "changeOfAngleInDegrees": 73,
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_RIGHT",
        "maneuverPoint": {
          "latitude": 51.0489097,
          "longitude": 16.9994572
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "xa.ˈbrɔ.va",
            "phoneticLanguageCode": "pl-PL",
            "text": "Chabrowa"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ra.ˈdɔ.sna",
            "phoneticLanguageCode": "pl-PL",
            "text": "Radosna"
          }
        },
        "routeOffsetInMeters": 2179,
        "routePath": [
          {
            "distanceInMeters": 2179,
            "point": {
              "latitude": 51.0489097,
              "longitude": 16.9994572
            },
            "travelTimeInSeconds": 240
          },
          {
            "distanceInMeters": 2189,
            "point": {
              "latitude": 51.0488694,
              "longitude": 16.9995848
            },
            "travelTimeInSeconds": 242
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 803,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 701,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 644,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 399,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 261,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 182,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 79,
            "side": "LEFT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": -85,
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_LEFT",
        "maneuverPoint": {
          "latitude": 51.0458788,
          "longitude": 17.0147136
        },
        "nextRoadInfo": {
          "properties": [],
          "streetName": {
            "phonetic": "gɛ.nɛ.ˈra.wa ta.dɛ.ˈu.ʃa ku.ˈt⁀ʃʃɛ.bɨ",
            "phoneticLanguageCode": "pl-PL",
            "text": "Generała Tadeusza Kutrzeby"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "xa.ˈbrɔ.va",
            "phoneticLanguageCode": "pl-PL",
            "text": "Chabrowa"
          }
        },
        "routeOffsetInMeters": 3303,
        "routePath": [
          {
            "distanceInMeters": 3303,
            "point": {
              "latitude": 51.0458788,
              "longitude": 17.0147136
            },
            "travelTimeInSeconds": 373
          },
          {
            "distanceInMeters": 3313,
            "point": {
              "latitude": 51.0459626,
              "longitude": 17.0147639
            },
            "travelTimeInSeconds": 377
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 969,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 863,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 817,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 799,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 766,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 742,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 713,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 597,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 581,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 476,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 358,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 135,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 80,
            "side": "RIGHT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": -76,
        "drivingSide": "RIGHT",
        "maneuver": "ROUNDABOUT_LEFT",
        "maneuverPoint": {
          "latitude": 51.062597,
          "longitude": 17.0322338
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "gɛ.nɛ.ˈra.wa stɛ.ˈfa.na ˈgrɔ.ta rɔ.vɛ.ˈt⁀skjɛ.gɔ",
            "phoneticLanguageCode": "pl-PL",
            "text": "Generała Stefana Grota-Roweckiego"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "pa.ra.ˈfjal.na",
            "phoneticLanguageCode": "pl-PL",
            "text": "Parafialna"
          }
        },
        "roundaboutExitNumber": 3,
        "routeOffsetInMeters": 5628,
        "routePath": [
          {
            "distanceInMeters": 5628,
            "point": {
              "latitude": 51.0624817,
              "longitude": 17.0321399
            },
            "travelTimeInSeconds": 677
          },
          {
            "distanceInMeters": 5633,
            "point": {
              "latitude": 51.0624495,
              "longitude": 17.0321748
            },
            "travelTimeInSeconds": 679
          },
          {
            "distanceInMeters": 5635,
            "point": {
              "latitude": 51.0624388,
              "longitude": 17.0321989
            },
            "travelTimeInSeconds": 680
          },
          {
            "distanceInMeters": 5637,
            "point": {
              "latitude": 51.0624281,
              "longitude": 17.0322284
            },
            "travelTimeInSeconds": 681
          },
          {
            "distanceInMeters": 5641,
            "point": {
              "latitude": 51.0624254,
              "longitude": 17.0322901
            },
            "travelTimeInSeconds": 682
          },
          {
            "distanceInMeters": 5645,
            "point": {
              "latitude": 51.0624361,
              "longitude": 17.032333
            },
            "travelTimeInSeconds": 682
          },
          {
            "distanceInMeters": 5648,
            "point": {
              "latitude": 51.0624549,
              "longitude": 17.0323679
            },
            "travelTimeInSeconds": 683
          },
          {
            "distanceInMeters": 5650,
            "point": {
              "latitude": 51.0624656,
              "longitude": 17.0323867
            },
            "travelTimeInSeconds": 683
          },
          {
            "distanceInMeters": 5651,
            "point": {
              "latitude": 51.062479,
              "longitude": 17.0324001
            },
            "travelTimeInSeconds": 684
          },
          {
            "distanceInMeters": 5653,
            "point": {
              "latitude": 51.062492399999996,
              "longitude": 17.0324054
            },
            "travelTimeInSeconds": 684
          },
          {
            "distanceInMeters": 5657,
            "point": {
              "latitude": 51.0625246,
              "longitude": 17.0324054
            },
            "travelTimeInSeconds": 685
          },
          {
            "distanceInMeters": 5657,
            "point": {
              "latitude": 51.0625327,
              "longitude": 17.0324054
            },
            "travelTimeInSeconds": 685
          },
          {
            "distanceInMeters": 5658,
            "point": {
              "latitude": 51.0625407,
              "longitude": 17.0324001
            },
            "travelTimeInSeconds": 685
          },
          {
            "distanceInMeters": 5663,
            "point": {
              "latitude": 51.0625756,
              "longitude": 17.0323706
            },
            "travelTimeInSeconds": 686
          },
          {
            "distanceInMeters": 5668,
            "point": {
              "latitude": 51.0626024,
              "longitude": 17.0323142
            },
            "travelTimeInSeconds": 687
          },
          {
            "distanceInMeters": 5669,
            "point": {
              "latitude": 51.0626024,
              "longitude": 17.0322928
            },
            "travelTimeInSeconds": 687
          },
          {
            "distanceInMeters": 5672,
            "point": {
              "latitude": 51.0625997,
              "longitude": 17.0322526
            },
            "travelTimeInSeconds": 689
          },
          {
            "distanceInMeters": 5673,
            "point": {
              "latitude": 51.062597,
              "longitude": 17.0322338
            },
            "travelTimeInSeconds": 691
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 965,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 709,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 626,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 548,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 437,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 290,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 269,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 238,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 155,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 122,
            "side": "LEFT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": -79,
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_LEFT",
        "maneuverPoint": {
          "latitude": 51.0977527,
          "longitude": 17.0329097
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈsu.xa",
            "phoneticLanguageCode": "pl-PL",
            "text": "Sucha"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "bɔ.ˈrɔ.fska",
            "phoneticLanguageCode": "pl-PL",
            "text": "Borowska"
          }
        },
        "routeOffsetInMeters": 9597,
        "routePath": [
          {
            "distanceInMeters": 9597,
            "point": {
              "latitude": 51.0974926,
              "longitude": 17.0328668
            },
            "travelTimeInSeconds": 1354
          },
          {
            "distanceInMeters": 9626,
            "point": {
              "latitude": 51.0977527,
              "longitude": 17.0329097
            },
            "travelTimeInSeconds": 1362
          },
          {
            "distanceInMeters": 9636,
            "point": {
              "latitude": 51.0977762,
              "longitude": 17.0327722
            },
            "travelTimeInSeconds": 1368
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 830,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 665,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 530,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 377,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 272,
            "side": "LEFT_AND_RIGHT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": 101,
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_RIGHT",
        "maneuverPoint": {
          "latitude": 51.100215,
          "longitude": 17.0234281
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ta.dɛ.ˈu.ʃa ʑɛ.liɲ.ˈskjɛ.gɔ",
            "phoneticLanguageCode": "pl-PL",
            "text": "Tadeusza Zielińskiego"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "sfɔ.ˈbɔ.dna",
            "phoneticLanguageCode": "pl-PL",
            "text": "Swobodna"
          }
        },
        "routeOffsetInMeters": 10347,
        "routePath": [
          {
            "distanceInMeters": 10347,
            "point": {
              "latitude": 51.100215,
              "longitude": 17.0234281
            },
            "travelTimeInSeconds": 1521
          },
          {
            "distanceInMeters": 10353,
            "point": {
              "latitude": 51.1002606,
              "longitude": 17.0233852
            },
            "travelTimeInSeconds": 1522
          },
          {
            "distanceInMeters": 10366,
            "point": {
              "latitude": 51.100376,
              "longitude": 17.0233369
            },
            "travelTimeInSeconds": 1527
          },
          {
            "distanceInMeters": 10375,
            "point": {
              "latitude": 51.1004591,
              "longitude": 17.0233288
            },
            "travelTimeInSeconds": 1529
          },
          {
            "distanceInMeters": 10380,
            "point": {
              "latitude": 51.100502,
              "longitude": 17.0233235
            },
            "travelTimeInSeconds": 1531
          },
          {
            "distanceInMeters": 10388,
            "point": {
              "latitude": 51.100561,
              "longitude": 17.0233932
            },
            "travelTimeInSeconds": 1534
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 675,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 600,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 524,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 487,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 273,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 198,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 148,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 110,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 48,
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
          "latitude": 51.102173,
          "longitude": 17.0255685
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
            "phonetic": "ta.dɛ.ˈu.ʃa ʑɛ.liɲ.ˈskjɛ.gɔ",
            "phoneticLanguageCode": "pl-PL",
            "text": "Tadeusza Zielińskiego"
          }
        },
        "routeOffsetInMeters": 10626,
        "routePath": [
          {
            "distanceInMeters": 10626,
            "point": {
              "latitude": 51.102173,
              "longitude": 17.0255685
            },
            "travelTimeInSeconds": 1598
          },
          {
            "distanceInMeters": 10634,
            "point": {
              "latitude": 51.1022455,
              "longitude": 17.0255873
            },
            "travelTimeInSeconds": 1599
          },
          {
            "distanceInMeters": 10638,
            "point": {
              "latitude": 51.1022776,
              "longitude": 17.0255873
            },
            "travelTimeInSeconds": 1600
          },
          {
            "distanceInMeters": 10640,
            "point": {
              "latitude": 51.1022964,
              "longitude": 17.0255926
            },
            "travelTimeInSeconds": 1600
          },
          {
            "distanceInMeters": 10645,
            "point": {
              "latitude": 51.1023447,
              "longitude": 17.0255873
            },
            "travelTimeInSeconds": 1601
          },
          {
            "distanceInMeters": 10647,
            "point": {
              "latitude": 51.1023661,
              "longitude": 17.0255819
            },
            "travelTimeInSeconds": 1601
          },
          {
            "distanceInMeters": 10656,
            "point": {
              "latitude": 51.1024359,
              "longitude": 17.0255202
            },
            "travelTimeInSeconds": 1603
          },
          {
            "distanceInMeters": 10666,
            "point": {
              "latitude": 51.102492,
              "longitude": 17.0254153
            },
            "travelTimeInSeconds": 1604
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 216,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 133,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 72,
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
        "routeOffsetInMeters": 11744,
        "routePath": [
          {
            "distanceInMeters": 11744,
            "point": {
              "latitude": 51.1112174,
              "longitude": 17.0217571
            },
            "travelTimeInSeconds": 1829
          },
          {
            "distanceInMeters": 11756,
            "point": {
              "latitude": 51.111314,
              "longitude": 17.0218349
            },
            "travelTimeInSeconds": 1831
          },
          {
            "distanceInMeters": 11761,
            "point": {
              "latitude": 51.1113462,
              "longitude": 17.0218912
            },
            "travelTimeInSeconds": 1832
          },
          {
            "distanceInMeters": 11765,
            "point": {
              "latitude": 51.1113676,
              "longitude": 17.0219448
            },
            "travelTimeInSeconds": 1833
          },
          {
            "distanceInMeters": 11771,
            "point": {
              "latitude": 51.1113891,
              "longitude": 17.0220172
            },
            "travelTimeInSeconds": 1834
          },
          {
            "distanceInMeters": 11777,
            "point": {
              "latitude": 51.1114052,
              "longitude": 17.0221004
            },
            "travelTimeInSeconds": 1835
          },
          {
            "distanceInMeters": 11787,
            "point": {
              "latitude": 51.1113648,
              "longitude": 17.0222279
            },
            "travelTimeInSeconds": 1836
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 881,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 748,
            "side": "LEFT_AND_RIGHT"
          },
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
        "routeOffsetInMeters": 12038,
        "routePath": [
          {
            "distanceInMeters": 12038,
            "point": {
              "latitude": 51.1105459,
              "longitude": 17.0255623
            },
            "travelTimeInSeconds": 1896
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
      "pointIndex": 50,
      "travelTimeInSeconds": 243,
      "distanceInMeters": 2198
    },
    {
      "pointIndex": 52,
      "travelTimeInSeconds": 279,
      "distanceInMeters": 2439
    },
    {
      "pointIndex": 73,
      "travelTimeInSeconds": 358,
      "distanceInMeters": 3239
    },
    {
      "pointIndex": 74,
      "travelTimeInSeconds": 372,
      "distanceInMeters": 3302
    },
    {
      "pointIndex": 75,
      "travelTimeInSeconds": 389,
      "distanceInMeters": 3342
    },
    {
      "pointIndex": 99,
      "travelTimeInSeconds": 494,
      "distanceInMeters": 4568
    },
    {
      "pointIndex": 100,
      "travelTimeInSeconds": 520,
      "distanceInMeters": 4609
    },
    {
      "pointIndex": 101,
      "travelTimeInSeconds": 572,
      "distanceInMeters": 4661
    },
    {
      "pointIndex": 113,
      "travelTimeInSeconds": 664,
      "distanceInMeters": 5577
    },
    {
      "pointIndex": 132,
      "travelTimeInSeconds": 687,
      "distanceInMeters": 5670
    },
    {
      "pointIndex": 133,
      "travelTimeInSeconds": 697,
      "distanceInMeters": 5681
    },
    {
      "pointIndex": 152,
      "travelTimeInSeconds": 792,
      "distanceInMeters": 6560
    },
    {
      "pointIndex": 162,
      "travelTimeInSeconds": 841,
      "distanceInMeters": 6970
    },
    {
      "pointIndex": 164,
      "travelTimeInSeconds": 866,
      "distanceInMeters": 7104
    },
    {
      "pointIndex": 166,
      "travelTimeInSeconds": 891,
      "distanceInMeters": 7279
    },
    {
      "pointIndex": 169,
      "travelTimeInSeconds": 908,
      "distanceInMeters": 7353
    },
    {
      "pointIndex": 171,
      "travelTimeInSeconds": 932,
      "distanceInMeters": 7524
    },
    {
      "pointIndex": 175,
      "travelTimeInSeconds": 956,
      "distanceInMeters": 7615
    },
    {
      "pointIndex": 181,
      "travelTimeInSeconds": 984,
      "distanceInMeters": 7881
    },
    {
      "pointIndex": 183,
      "travelTimeInSeconds": 1019,
      "distanceInMeters": 7973
    },
    {
      "pointIndex": 197,
      "travelTimeInSeconds": 1072,
      "distanceInMeters": 8448
    },
    {
      "pointIndex": 201,
      "travelTimeInSeconds": 1111,
      "distanceInMeters": 8574
    },
    {
      "pointIndex": 210,
      "travelTimeInSeconds": 1184,
      "distanceInMeters": 9101
    },
    {
      "pointIndex": 211,
      "travelTimeInSeconds": 1250,
      "distanceInMeters": 9216
    },
    {
      "pointIndex": 218,
      "travelTimeInSeconds": 1325,
      "distanceInMeters": 9531
    },
    {
      "pointIndex": 221,
      "travelTimeInSeconds": 1374,
      "distanceInMeters": 9647
    },
    {
      "pointIndex": 224,
      "travelTimeInSeconds": 1399,
      "distanceInMeters": 9820
    },
    {
      "pointIndex": 228,
      "travelTimeInSeconds": 1420,
      "distanceInMeters": 9933
    },
    {
      "pointIndex": 230,
      "travelTimeInSeconds": 1429,
      "distanceInMeters": 9969
    },
    {
      "pointIndex": 232,
      "travelTimeInSeconds": 1467,
      "distanceInMeters": 10059
    },
    {
      "pointIndex": 241,
      "travelTimeInSeconds": 1500,
      "distanceInMeters": 10296
    },
    {
      "pointIndex": 248,
      "travelTimeInSeconds": 1536,
      "distanceInMeters": 10408
    },
    {
      "pointIndex": 256,
      "travelTimeInSeconds": 1564,
      "distanceInMeters": 10553
    },
    {
      "pointIndex": 263,
      "travelTimeInSeconds": 1601,
      "distanceInMeters": 10645
    },
    {
      "pointIndex": 269,
      "travelTimeInSeconds": 1630,
      "distanceInMeters": 10863
    },
    {
      "pointIndex": 271,
      "travelTimeInSeconds": 1682,
      "distanceInMeters": 10984
    },
    {
      "pointIndex": 277,
      "travelTimeInSeconds": 1723,
      "distanceInMeters": 11243
    },
    {
      "pointIndex": 282,
      "travelTimeInSeconds": 1760,
      "distanceInMeters": 11367
    },
    {
      "pointIndex": 294,
      "travelTimeInSeconds": 1805,
      "distanceInMeters": 11695
    },
    {
      "pointIndex": 300,
      "travelTimeInSeconds": 1833,
      "distanceInMeters": 11766
    },
    {
      "pointIndex": 308,
      "travelTimeInSeconds": 1881,
      "distanceInMeters": 11999
    },
    {
      "pointIndex": 309,
      "travelTimeInSeconds": 1896,
      "distanceInMeters": 12038
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
