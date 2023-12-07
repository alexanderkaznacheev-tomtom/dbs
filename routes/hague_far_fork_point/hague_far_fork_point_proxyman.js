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
    "lengthInMeters": 58276,
    "travelTimeInSeconds": 3182,
    "trafficDelayInSeconds": 0,
    "trafficLengthInMeters": 0,
    "departureTime": "2023-12-07T14:21:13+01:00",
    "arrivalTime": "2023-12-07T15:14:14+01:00"
  },
  "legs": [
    {
      "summary": {
        "lengthInMeters": 58276,
        "travelTimeInSeconds": 3182,
        "trafficDelayInSeconds": 0,
        "trafficLengthInMeters": 0,
        "departureTime": "2023-12-07T14:21:13+01:00",
        "arrivalTime": "2023-12-07T15:14:14+01:00"
      },
      "points": [
        {
          "latitude": 52.3653473,
          "longitude": 4.8786175
        },
        {
          "latitude": 52.3654264,
          "longitude": 4.8785895
        },
        {
          "latitude": 52.365641,
          "longitude": 4.8784393
        },
        {
          "latitude": 52.3657724,
          "longitude": 4.8782918
        },
        {
          "latitude": 52.3660299,
          "longitude": 4.8779297
        },
        {
          "latitude": 52.3660836,
          "longitude": 4.8778492
        },
        {
          "latitude": 52.3662794,
          "longitude": 4.8775408
        },
        {
          "latitude": 52.3664001,
          "longitude": 4.8773772
        },
        {
          "latitude": 52.3665181,
          "longitude": 4.8772484
        },
        {
          "latitude": 52.3666066,
          "longitude": 4.877176
        },
        {
          "latitude": 52.3666844,
          "longitude": 4.8771116
        },
        {
          "latitude": 52.3668051,
          "longitude": 4.8770124
        },
        {
          "latitude": 52.3670599,
          "longitude": 4.8769024
        },
        {
          "latitude": 52.3672691,
          "longitude": 4.8768568
        },
        {
          "latitude": 52.3674434,
          "longitude": 4.8768595
        },
        {
          "latitude": 52.3676848,
          "longitude": 4.87683
        },
        {
          "latitude": 52.3678485,
          "longitude": 4.8767817
        },
        {
          "latitude": 52.368004,
          "longitude": 4.8766986
        },
        {
          "latitude": 52.3682401,
          "longitude": 4.8764706
        },
        {
          "latitude": 52.3683259,
          "longitude": 4.8763499
        },
        {
          "latitude": 52.3684117,
          "longitude": 4.8762184
        },
        {
          "latitude": 52.3686048,
          "longitude": 4.8758939
        },
        {
          "latitude": 52.3688623,
          "longitude": 4.8755586
        },
        {
          "latitude": 52.3691279,
          "longitude": 4.8753172
        },
        {
          "latitude": 52.3693559,
          "longitude": 4.8751697
        },
        {
          "latitude": 52.3698843,
          "longitude": 4.8749149
        },
        {
          "latitude": 52.3699674,
          "longitude": 4.8748693
        },
        {
          "latitude": 52.3708069,
          "longitude": 4.8745045
        },
        {
          "latitude": 52.3711556,
          "longitude": 4.874357
        },
        {
          "latitude": 52.3712656,
          "longitude": 4.8743597
        },
        {
          "latitude": 52.371271,
          "longitude": 4.8743597
        },
        {
          "latitude": 52.3713756,
          "longitude": 4.8743275
        },
        {
          "latitude": 52.3714587,
          "longitude": 4.8742899
        },
        {
          "latitude": 52.3715499,
          "longitude": 4.8742577
        },
        {
          "latitude": 52.3717564,
          "longitude": 4.8741639
        },
        {
          "latitude": 52.3718557,
          "longitude": 4.8741236
        },
        {
          "latitude": 52.3718289,
          "longitude": 4.874011
        },
        {
          "latitude": 52.3717377,
          "longitude": 4.8736328
        },
        {
          "latitude": 52.3716491,
          "longitude": 4.8732251
        },
        {
          "latitude": 52.3715714,
          "longitude": 4.8728845
        },
        {
          "latitude": 52.3715231,
          "longitude": 4.8726779
        },
        {
          "latitude": 52.3714748,
          "longitude": 4.8724848
        },
        {
          "latitude": 52.3714614,
          "longitude": 4.8724258
        },
        {
          "latitude": 52.3713648,
          "longitude": 4.8719993
        },
        {
          "latitude": 52.371338,
          "longitude": 4.871884
        },
        {
          "latitude": 52.371279,
          "longitude": 4.8716211
        },
        {
          "latitude": 52.3710349,
          "longitude": 4.8705509
        },
        {
          "latitude": 52.370992,
          "longitude": 4.8703873
        },
        {
          "latitude": 52.3707613,
          "longitude": 4.8693708
        },
        {
          "latitude": 52.3707238,
          "longitude": 4.8692018
        },
        {
          "latitude": 52.370635299999996,
          "longitude": 4.868829
        },
        {
          "latitude": 52.3705816,
          "longitude": 4.8685446
        },
        {
          "latitude": 52.3705575,
          "longitude": 4.8684561
        },
        {
          "latitude": 52.3704743,
          "longitude": 4.8680645
        },
        {
          "latitude": 52.3704475,
          "longitude": 4.8679626
        },
        {
          "latitude": 52.370418,
          "longitude": 4.8678392
        },
        {
          "latitude": 52.3702678,
          "longitude": 4.8671392
        },
        {
          "latitude": 52.3701337,
          "longitude": 4.8665518
        },
        {
          "latitude": 52.3701069,
          "longitude": 4.866415
        },
        {
          "latitude": 52.3700774,
          "longitude": 4.8662835
        },
        {
          "latitude": 52.3700532,
          "longitude": 4.866077
        },
        {
          "latitude": 52.3700425,
          "longitude": 4.8659
        },
        {
          "latitude": 52.3700505,
          "longitude": 4.8655567
        },
        {
          "latitude": 52.3700827,
          "longitude": 4.8653528
        },
        {
          "latitude": 52.3701042,
          "longitude": 4.865275
        },
        {
          "latitude": 52.3701283,
          "longitude": 4.8651999
        },
        {
          "latitude": 52.3701793,
          "longitude": 4.8650631
        },
        {
          "latitude": 52.3702276,
          "longitude": 4.8649049
        },
        {
          "latitude": 52.3702893,
          "longitude": 4.8647252
        },
        {
          "latitude": 52.3705602,
          "longitude": 4.8640546
        },
        {
          "latitude": 52.3707667,
          "longitude": 4.8636067
        },
        {
          "latitude": 52.3708606,
          "longitude": 4.8633626
        },
        {
          "latitude": 52.3709142,
          "longitude": 4.8631427
        },
        {
          "latitude": 52.3710939,
          "longitude": 4.8622066
        },
        {
          "latitude": 52.3712146,
          "longitude": 4.8615441
        },
        {
          "latitude": 52.3713273,
          "longitude": 4.8610452
        },
        {
          "latitude": 52.3713675,
          "longitude": 4.8608708
        },
        {
          "latitude": 52.3715553,
          "longitude": 4.8599267
        },
        {
          "latitude": 52.371558,
          "longitude": 4.8597202
        },
        {
          "latitude": 52.3715499,
          "longitude": 4.8596075
        },
        {
          "latitude": 52.3716921,
          "longitude": 4.8594922
        },
        {
          "latitude": 52.371743,
          "longitude": 4.8594654
        },
        {
          "latitude": 52.3719308,
          "longitude": 4.8593983
        },
        {
          "latitude": 52.3722795,
          "longitude": 4.8592883
        },
        {
          "latitude": 52.3732853,
          "longitude": 4.858996
        },
        {
          "latitude": 52.3745298,
          "longitude": 4.8585936
        },
        {
          "latitude": 52.3746371,
          "longitude": 4.8585615
        },
        {
          "latitude": 52.3746935,
          "longitude": 4.8585373
        },
        {
          "latitude": 52.3746827,
          "longitude": 4.8583576
        },
        {
          "latitude": 52.3746398,
          "longitude": 4.8578373
        },
        {
          "latitude": 52.3746237,
          "longitude": 4.8576629
        },
        {
          "latitude": 52.3745808,
          "longitude": 4.8573625
        },
        {
          "latitude": 52.3744547,
          "longitude": 4.8562199
        },
        {
          "latitude": 52.3744226,
          "longitude": 4.855957
        },
        {
          "latitude": 52.3744145,
          "longitude": 4.8558846
        },
        {
          "latitude": 52.3744065,
          "longitude": 4.8557907
        },
        {
          "latitude": 52.3744011,
          "longitude": 4.8557103
        },
        {
          "latitude": 52.3743662,
          "longitude": 4.8553911
        },
        {
          "latitude": 52.3743582,
          "longitude": 4.8553187
        },
        {
          "latitude": 52.3743474,
          "longitude": 4.8552087
        },
        {
          "latitude": 52.3742911,
          "longitude": 4.8549217
        },
        {
          "latitude": 52.3742026,
          "longitude": 4.8546508
        },
        {
          "latitude": 52.3741463,
          "longitude": 4.8545757
        },
        {
          "latitude": 52.3741168,
          "longitude": 4.8544979
        },
        {
          "latitude": 52.373583000000004,
          "longitude": 4.8532024
        },
        {
          "latitude": 52.3734704,
          "longitude": 4.8528242
        },
        {
          "latitude": 52.3733926,
          "longitude": 4.8524085
        },
        {
          "latitude": 52.3733819,
          "longitude": 4.8523334
        },
        {
          "latitude": 52.3733899,
          "longitude": 4.8522395
        },
        {
          "latitude": 52.3731136,
          "longitude": 4.8507696
        },
        {
          "latitude": 52.3729715,
          "longitude": 4.8500642
        },
        {
          "latitude": 52.3729447,
          "longitude": 4.8499382
        },
        {
          "latitude": 52.3728749,
          "longitude": 4.8494983
        },
        {
          "latitude": 52.3728508,
          "longitude": 4.8493534
        },
        {
          "latitude": 52.3727864,
          "longitude": 4.8489538
        },
        {
          "latitude": 52.3727757,
          "longitude": 4.8488626
        },
        {
          "latitude": 52.3727623,
          "longitude": 4.848758
        },
        {
          "latitude": 52.3726201,
          "longitude": 4.8478702
        },
        {
          "latitude": 52.3724699,
          "longitude": 4.8469716
        },
        {
          "latitude": 52.3724404,
          "longitude": 4.8467436
        },
        {
          "latitude": 52.3723787,
          "longitude": 4.8462179
        },
        {
          "latitude": 52.3723277,
          "longitude": 4.8458236
        },
        {
          "latitude": 52.3722929,
          "longitude": 4.8454508
        },
        {
          "latitude": 52.3722741,
          "longitude": 4.845027
        },
        {
          "latitude": 52.3722661,
          "longitude": 4.8445174
        },
        {
          "latitude": 52.3722714,
          "longitude": 4.8441258
        },
        {
          "latitude": 52.3722875,
          "longitude": 4.8432568
        },
        {
          "latitude": 52.3723009,
          "longitude": 4.8431388
        },
        {
          "latitude": 52.372309,
          "longitude": 4.8430637
        },
        {
          "latitude": 52.3723277,
          "longitude": 4.8429644
        },
        {
          "latitude": 52.3723814,
          "longitude": 4.8427257
        },
        {
          "latitude": 52.372427,
          "longitude": 4.8425326
        },
        {
          "latitude": 52.3724297,
          "longitude": 4.8425031
        },
        {
          "latitude": 52.3724538,
          "longitude": 4.8423743
        },
        {
          "latitude": 52.3724619,
          "longitude": 4.8422804
        },
        {
          "latitude": 52.3724779,
          "longitude": 4.8420525
        },
        {
          "latitude": 52.3724779,
          "longitude": 4.8418754
        },
        {
          "latitude": 52.3724082,
          "longitude": 4.8416984
        },
        {
          "latitude": 52.3723572,
          "longitude": 4.8416287
        },
        {
          "latitude": 52.3722902,
          "longitude": 4.841567
        },
        {
          "latitude": 52.3720703,
          "longitude": 4.8415563
        },
        {
          "latitude": 52.3716599,
          "longitude": 4.8415804
        },
        {
          "latitude": 52.369954,
          "longitude": 4.841795
        },
        {
          "latitude": 52.3695973,
          "longitude": 4.8418164
        },
        {
          "latitude": 52.3695168,
          "longitude": 4.8418245
        },
        {
          "latitude": 52.3694605,
          "longitude": 4.8418245
        },
        {
          "latitude": 52.3692808,
          "longitude": 4.8418191
        },
        {
          "latitude": 52.3689857,
          "longitude": 4.8418164
        },
        {
          "latitude": 52.3684332,
          "longitude": 4.8418969
        },
        {
          "latitude": 52.3681328,
          "longitude": 4.8419532
        },
        {
          "latitude": 52.3676687,
          "longitude": 4.84209
        },
        {
          "latitude": 52.3673818,
          "longitude": 4.8420954
        },
        {
          "latitude": 52.3665208,
          "longitude": 4.8421168
        },
        {
          "latitude": 52.3658904,
          "longitude": 4.8421356
        },
        {
          "latitude": 52.3654479,
          "longitude": 4.842149
        },
        {
          "latitude": 52.3647907,
          "longitude": 4.8421705
        },
        {
          "latitude": 52.3641685,
          "longitude": 4.8421893
        },
        {
          "latitude": 52.3641121,
          "longitude": 4.8421919
        },
        {
          "latitude": 52.3633906,
          "longitude": 4.8422107
        },
        {
          "latitude": 52.3631653,
          "longitude": 4.8422188
        },
        {
          "latitude": 52.3629695,
          "longitude": 4.8422214
        },
        {
          "latitude": 52.361784,
          "longitude": 4.842259
        },
        {
          "latitude": 52.3614809,
          "longitude": 4.8422697
        },
        {
          "latitude": 52.3608398,
          "longitude": 4.8422858
        },
        {
          "latitude": 52.3607057,
          "longitude": 4.8422885
        },
        {
          "latitude": 52.3593459,
          "longitude": 4.8423287
        },
        {
          "latitude": 52.3582596,
          "longitude": 4.8423636
        },
        {
          "latitude": 52.3577178,
          "longitude": 4.8423797
        },
        {
          "latitude": 52.3563069,
          "longitude": 4.8424146
        },
        {
          "latitude": 52.3561567,
          "longitude": 4.8424226
        },
        {
          "latitude": 52.3560655,
          "longitude": 4.8424253
        },
        {
          "latitude": 52.3558536,
          "longitude": 4.842428
        },
        {
          "latitude": 52.3556444,
          "longitude": 4.8424333
        },
        {
          "latitude": 52.3547834,
          "longitude": 4.8424575
        },
        {
          "latitude": 52.3542926,
          "longitude": 4.8424762
        },
        {
          "latitude": 52.3540351,
          "longitude": 4.8424897
        },
        {
          "latitude": 52.3538017,
          "longitude": 4.842487
        },
        {
          "latitude": 52.3528281,
          "longitude": 4.8424789
        },
        {
          "latitude": 52.352348,
          "longitude": 4.8424816
        },
        {
          "latitude": 52.3522165,
          "longitude": 4.8424789
        },
        {
          "latitude": 52.3520529,
          "longitude": 4.8424709
        },
        {
          "latitude": 52.3519966,
          "longitude": 4.8424602
        },
        {
          "latitude": 52.3519456,
          "longitude": 4.8424548
        },
        {
          "latitude": 52.3519,
          "longitude": 4.8424494
        },
        {
          "latitude": 52.3516184,
          "longitude": 4.8424226
        },
        {
          "latitude": 52.3514897,
          "longitude": 4.8424011
        },
        {
          "latitude": 52.3513609,
          "longitude": 4.8423797
        },
        {
          "latitude": 52.350972,
          "longitude": 4.8422858
        },
        {
          "latitude": 52.3507547,
          "longitude": 4.8422214
        },
        {
          "latitude": 52.3501298,
          "longitude": 4.8419854
        },
        {
          "latitude": 52.3500574,
          "longitude": 4.8419532
        },
        {
          "latitude": 52.3492312,
          "longitude": 4.8415697
        },
        {
          "latitude": 52.3487699,
          "longitude": 4.8413524
        },
        {
          "latitude": 52.34855,
          "longitude": 4.8412585
        },
        {
          "latitude": 52.3484856,
          "longitude": 4.8412344
        },
        {
          "latitude": 52.3479009,
          "longitude": 4.8410386
        },
        {
          "latitude": 52.3473939,
          "longitude": 4.8409232
        },
        {
          "latitude": 52.3469031,
          "longitude": 4.8408562
        },
        {
          "latitude": 52.3464471,
          "longitude": 4.8408294
        },
        {
          "latitude": 52.3462325,
          "longitude": 4.8408321
        },
        {
          "latitude": 52.3459643,
          "longitude": 4.8408374
        },
        {
          "latitude": 52.3455754,
          "longitude": 4.8408535
        },
        {
          "latitude": 52.345393,
          "longitude": 4.8408589
        },
        {
          "latitude": 52.3445132,
          "longitude": 4.8409072
        },
        {
          "latitude": 52.3442879,
          "longitude": 4.8409903
        },
        {
          "latitude": 52.34395,
          "longitude": 4.8410144
        },
        {
          "latitude": 52.3433438,
          "longitude": 4.8410681
        },
        {
          "latitude": 52.3423487,
          "longitude": 4.8411781
        },
        {
          "latitude": 52.3417479,
          "longitude": 4.8412558
        },
        {
          "latitude": 52.3414126,
          "longitude": 4.8412827
        },
        {
          "latitude": 52.3413375,
          "longitude": 4.84128
        },
        {
          "latitude": 52.3410317,
          "longitude": 4.8412371
        },
        {
          "latitude": 52.3407555,
          "longitude": 4.8411405
        },
        {
          "latitude": 52.340557,
          "longitude": 4.8410386
        },
        {
          "latitude": 52.3403639,
          "longitude": 4.8408964
        },
        {
          "latitude": 52.3402941,
          "longitude": 4.8408455
        },
        {
          "latitude": 52.3400822,
          "longitude": 4.840647
        },
        {
          "latitude": 52.339806,
          "longitude": 4.8402956
        },
        {
          "latitude": 52.3396638,
          "longitude": 4.8400515
        },
        {
          "latitude": 52.33946,
          "longitude": 4.8396143
        },
        {
          "latitude": 52.3394144,
          "longitude": 4.8394856
        },
        {
          "latitude": 52.3392776,
          "longitude": 4.8390403
        },
        {
          "latitude": 52.3392159,
          "longitude": 4.8387882
        },
        {
          "latitude": 52.3391542,
          "longitude": 4.8384449
        },
        {
          "latitude": 52.3390979,
          "longitude": 4.8379648
        },
        {
          "latitude": 52.339071,
          "longitude": 4.8375195
        },
        {
          "latitude": 52.3390496,
          "longitude": 4.8368034
        },
        {
          "latitude": 52.3390442,
          "longitude": 4.8363581
        },
        {
          "latitude": 52.3390174,
          "longitude": 4.8344538
        },
        {
          "latitude": 52.3390174,
          "longitude": 4.8339844
        },
        {
          "latitude": 52.339012,
          "longitude": 4.8324957
        },
        {
          "latitude": 52.3389959,
          "longitude": 4.8310956
        },
        {
          "latitude": 52.3389691,
          "longitude": 4.8306075
        },
        {
          "latitude": 52.3389289,
          "longitude": 4.8301971
        },
        {
          "latitude": 52.3389289,
          "longitude": 4.8299047
        },
        {
          "latitude": 52.3389289,
          "longitude": 4.8291993
        },
        {
          "latitude": 52.3389155,
          "longitude": 4.8284242
        },
        {
          "latitude": 52.3389155,
          "longitude": 4.8282927
        },
        {
          "latitude": 52.3389155,
          "longitude": 4.8281318
        },
        {
          "latitude": 52.3389155,
          "longitude": 4.827944
        },
        {
          "latitude": 52.3389155,
          "longitude": 4.8277321
        },
        {
          "latitude": 52.3389181,
          "longitude": 4.8276624
        },
        {
          "latitude": 52.3389155,
          "longitude": 4.8276436
        },
        {
          "latitude": 52.3389074,
          "longitude": 4.8256883
        },
        {
          "latitude": 52.3388994,
          "longitude": 4.8256186
        },
        {
          "latitude": 52.3388672,
          "longitude": 4.8254657
        },
        {
          "latitude": 52.3388618,
          "longitude": 4.8254442
        },
        {
          "latitude": 52.3388457,
          "longitude": 4.8253155
        },
        {
          "latitude": 52.3388377,
          "longitude": 4.8243713
        },
        {
          "latitude": 52.3387894,
          "longitude": 4.8220351
        },
        {
          "latitude": 52.3387867,
          "longitude": 4.8216408
        },
        {
          "latitude": 52.3387733,
          "longitude": 4.8209864
        },
        {
          "latitude": 52.3387572,
          "longitude": 4.8200288
        },
        {
          "latitude": 52.3387277,
          "longitude": 4.818036
        },
        {
          "latitude": 52.3386794,
          "longitude": 4.8167217
        },
        {
          "latitude": 52.3386016,
          "longitude": 4.8154932
        },
        {
          "latitude": 52.3384997,
          "longitude": 4.8146886
        },
        {
          "latitude": 52.3384756,
          "longitude": 4.8145169
        },
        {
          "latitude": 52.3384085,
          "longitude": 4.8140904
        },
        {
          "latitude": 52.3382825,
          "longitude": 4.8134065
        },
        {
          "latitude": 52.3382583,
          "longitude": 4.8132885
        },
        {
          "latitude": 52.3382449,
          "longitude": 4.8132133
        },
        {
          "latitude": 52.3382261,
          "longitude": 4.8131356
        },
        {
          "latitude": 52.3380277,
          "longitude": 4.8122853
        },
        {
          "latitude": 52.3379526,
          "longitude": 4.8120117
        },
        {
          "latitude": 52.3378077,
          "longitude": 4.8114833
        },
        {
          "latitude": 52.3374966,
          "longitude": 4.8105231
        },
        {
          "latitude": 52.3372391,
          "longitude": 4.8098499
        },
        {
          "latitude": 52.3368958,
          "longitude": 4.8090586
        },
        {
          "latitude": 52.3367321,
          "longitude": 4.8087126
        },
        {
          "latitude": 52.3362789,
          "longitude": 4.8078355
        },
        {
          "latitude": 52.3358819,
          "longitude": 4.8071381
        },
        {
          "latitude": 52.33556,
          "longitude": 4.8066044
        },
        {
          "latitude": 52.3352194,
          "longitude": 4.8060384
        },
        {
          "latitude": 52.3336369,
          "longitude": 4.8034152
        },
        {
          "latitude": 52.3335376,
          "longitude": 4.8032543
        },
        {
          "latitude": 52.3334438,
          "longitude": 4.8030961
        },
        {
          "latitude": 52.3333418,
          "longitude": 4.8029244
        },
        {
          "latitude": 52.3330361,
          "longitude": 4.8024711
        },
        {
          "latitude": 52.3329985,
          "longitude": 4.8024201
        },
        {
          "latitude": 52.3329476,
          "longitude": 4.8023504
        },
        {
          "latitude": 52.3328859,
          "longitude": 4.8022592
        },
        {
          "latitude": 52.3323521,
          "longitude": 4.8013875
        },
        {
          "latitude": 52.331813,
          "longitude": 4.800505
        },
        {
          "latitude": 52.3312739,
          "longitude": 4.7996253
        },
        {
          "latitude": 52.330437,
          "longitude": 4.7981688
        },
        {
          "latitude": 52.3297665,
          "longitude": 4.7968841
        },
        {
          "latitude": 52.3295063,
          "longitude": 4.7963315
        },
        {
          "latitude": 52.3291013,
          "longitude": 4.7954088
        },
        {
          "latitude": 52.3289645,
          "longitude": 4.7950682
        },
        {
          "latitude": 52.3288357,
          "longitude": 4.7947571
        },
        {
          "latitude": 52.3288035,
          "longitude": 4.7946712
        },
        {
          "latitude": 52.3284334,
          "longitude": 4.793703
        },
        {
          "latitude": 52.3278916,
          "longitude": 4.7920427
        },
        {
          "latitude": 52.3278621,
          "longitude": 4.7919381
        },
        {
          "latitude": 52.3277736,
          "longitude": 4.7916189
        },
        {
          "latitude": 52.3277146,
          "longitude": 4.7913963
        },
        {
          "latitude": 52.3276207,
          "longitude": 4.7910315
        },
        {
          "latitude": 52.3273927,
          "longitude": 4.7900391
        },
        {
          "latitude": 52.3271325,
          "longitude": 4.7887194
        },
        {
          "latitude": 52.3268321,
          "longitude": 4.7871128
        },
        {
          "latitude": 52.3267463,
          "longitude": 4.7865334
        },
        {
          "latitude": 52.3267034,
          "longitude": 4.7863322
        },
        {
          "latitude": 52.3266578,
          "longitude": 4.7860131
        },
        {
          "latitude": 52.3263788,
          "longitude": 4.7844762
        },
        {
          "latitude": 52.3263413,
          "longitude": 4.7842321
        },
        {
          "latitude": 52.3259416,
          "longitude": 4.7818637
        },
        {
          "latitude": 52.3258102,
          "longitude": 4.7808847
        },
        {
          "latitude": 52.3255903,
          "longitude": 4.7792834
        },
        {
          "latitude": 52.3255017,
          "longitude": 4.778645
        },
        {
          "latitude": 52.3252603,
          "longitude": 4.776974
        },
        {
          "latitude": 52.3250994,
          "longitude": 4.7757804
        },
        {
          "latitude": 52.3247588,
          "longitude": 4.7730929
        },
        {
          "latitude": 52.3242921,
          "longitude": 4.7690535
        },
        {
          "latitude": 52.3241499,
          "longitude": 4.7680664
        },
        {
          "latitude": 52.3241472,
          "longitude": 4.7680664
        },
        {
          "latitude": 52.3239943,
          "longitude": 4.7671759
        },
        {
          "latitude": 52.32382,
          "longitude": 4.7662693
        },
        {
          "latitude": 52.3237476,
          "longitude": 4.7659367
        },
        {
          "latitude": 52.3236349,
          "longitude": 4.7654861
        },
        {
          "latitude": 52.3232782,
          "longitude": 4.7640485
        },
        {
          "latitude": 52.3231736,
          "longitude": 4.7636756
        },
        {
          "latitude": 52.3228624,
          "longitude": 4.7626644
        },
        {
          "latitude": 52.3226291,
          "longitude": 4.7619778
        },
        {
          "latitude": 52.3225969,
          "longitude": 4.7618973
        },
        {
          "latitude": 52.3223233,
          "longitude": 4.7611758
        },
        {
          "latitude": 52.321921,
          "longitude": 4.7601888
        },
        {
          "latitude": 52.3215374,
          "longitude": 4.7593519
        },
        {
          "latitude": 52.3211887,
          "longitude": 4.7586519
        },
        {
          "latitude": 52.3206872,
          "longitude": 4.757697
        },
        {
          "latitude": 52.3206308,
          "longitude": 4.7576004
        },
        {
          "latitude": 52.32025,
          "longitude": 4.7569755
        },
        {
          "latitude": 52.3198611,
          "longitude": 4.756431
        },
        {
          "latitude": 52.319617,
          "longitude": 4.7561145
        },
        {
          "latitude": 52.3190805,
          "longitude": 4.7553742
        },
        {
          "latitude": 52.3190296,
          "longitude": 4.7553232
        },
        {
          "latitude": 52.3189411,
          "longitude": 4.7551998
        },
        {
          "latitude": 52.318579,
          "longitude": 4.7547573
        },
        {
          "latitude": 52.3179621,
          "longitude": 4.7540492
        },
        {
          "latitude": 52.3172271,
          "longitude": 4.7533143
        },
        {
          "latitude": 52.3168945,
          "longitude": 4.7530138
        },
        {
          "latitude": 52.3167711,
          "longitude": 4.7529039
        },
        {
          "latitude": 52.315819,
          "longitude": 4.7521555
        },
        {
          "latitude": 52.3150948,
          "longitude": 4.7516137
        },
        {
          "latitude": 52.3146495,
          "longitude": 4.7513616
        },
        {
          "latitude": 52.314266,
          "longitude": 4.7511658
        },
        {
          "latitude": 52.3138529,
          "longitude": 4.7508895
        },
        {
          "latitude": 52.3132601,
          "longitude": 4.7505274
        },
        {
          "latitude": 52.3116937,
          "longitude": 4.7495458
        },
        {
          "latitude": 52.3108783,
          "longitude": 4.7490978
        },
        {
          "latitude": 52.309362900000004,
          "longitude": 4.7483549
        },
        {
          "latitude": 52.3090544,
          "longitude": 4.7481886
        },
        {
          "latitude": 52.3089659,
          "longitude": 4.7481403
        },
        {
          "latitude": 52.30818,
          "longitude": 4.7476816
        },
        {
          "latitude": 52.3080781,
          "longitude": 4.7476119
        },
        {
          "latitude": 52.3057204,
          "longitude": 4.7460938
        },
        {
          "latitude": 52.3051491,
          "longitude": 4.7457317
        },
        {
          "latitude": 52.3032126,
          "longitude": 4.7445139
        },
        {
          "latitude": 52.3024374,
          "longitude": 4.744015
        },
        {
          "latitude": 52.3007584,
          "longitude": 4.7429368
        },
        {
          "latitude": 52.300356,
          "longitude": 4.7426498
        },
        {
          "latitude": 52.30023,
          "longitude": 4.7425506
        },
        {
          "latitude": 52.2999537,
          "longitude": 4.7423279
        },
        {
          "latitude": 52.2993207,
          "longitude": 4.7417673
        },
        {
          "latitude": 52.2991249,
          "longitude": 4.7415903
        },
        {
          "latitude": 52.2985724,
          "longitude": 4.741019
        },
        {
          "latitude": 52.2980252,
          "longitude": 4.7404021
        },
        {
          "latitude": 52.2977301,
          "longitude": 4.7400427
        },
        {
          "latitude": 52.2970971,
          "longitude": 4.7391978
        },
        {
          "latitude": 52.2960082,
          "longitude": 4.7376421
        },
        {
          "latitude": 52.2959143,
          "longitude": 4.737508
        },
        {
          "latitude": 52.2954288,
          "longitude": 4.7368294
        },
        {
          "latitude": 52.2949219,
          "longitude": 4.7360972
        },
        {
          "latitude": 52.294879,
          "longitude": 4.7360381
        },
        {
          "latitude": 52.2941414,
          "longitude": 4.7350484
        },
        {
          "latitude": 52.2938195,
          "longitude": 4.7345817
        },
        {
          "latitude": 52.2920921,
          "longitude": 4.7321087
        },
        {
          "latitude": 52.2893885,
          "longitude": 4.7282088
        },
        {
          "latitude": 52.2884095,
          "longitude": 4.7267389
        },
        {
          "latitude": 52.2880018,
          "longitude": 4.7261032
        },
        {
          "latitude": 52.2879294,
          "longitude": 4.7259879
        },
        {
          "latitude": 52.2877792,
          "longitude": 4.725768
        },
        {
          "latitude": 52.2876477,
          "longitude": 4.725599
        },
        {
          "latitude": 52.2873473,
          "longitude": 4.725202
        },
        {
          "latitude": 52.287173,
          "longitude": 4.7249767
        },
        {
          "latitude": 52.2868726,
          "longitude": 4.7245529
        },
        {
          "latitude": 52.2865668,
          "longitude": 4.7241211
        },
        {
          "latitude": 52.2865292,
          "longitude": 4.7240648
        },
        {
          "latitude": 52.2836459,
          "longitude": 4.7199529
        },
        {
          "latitude": 52.2834367,
          "longitude": 4.7196338
        },
        {
          "latitude": 52.2833025,
          "longitude": 4.7194353
        },
        {
          "latitude": 52.283265,
          "longitude": 4.7193843
        },
        {
          "latitude": 52.2831845,
          "longitude": 4.719277
        },
        {
          "latitude": 52.2831228,
          "longitude": 4.7191885
        },
        {
          "latitude": 52.2829378,
          "longitude": 4.7189417
        },
        {
          "latitude": 52.2819105,
          "longitude": 4.717437
        },
        {
          "latitude": 52.2815752,
          "longitude": 4.7169703
        },
        {
          "latitude": 52.2808269,
          "longitude": 4.7158706
        },
        {
          "latitude": 52.2801295,
          "longitude": 4.7148809
        },
        {
          "latitude": 52.2798559,
          "longitude": 4.7144812
        },
        {
          "latitude": 52.2784182,
          "longitude": 4.7124267
        },
        {
          "latitude": 52.2755241,
          "longitude": 4.70828
        },
        {
          "latitude": 52.2729492,
          "longitude": 4.7045892
        },
        {
          "latitude": 52.272386,
          "longitude": 4.7037873
        },
        {
          "latitude": 52.2722277,
          "longitude": 4.7035512
        },
        {
          "latitude": 52.2721392,
          "longitude": 4.7034386
        },
        {
          "latitude": 52.2720775,
          "longitude": 4.703342
        },
        {
          "latitude": 52.2712433,
          "longitude": 4.7021484
        },
        {
          "latitude": 52.2696877,
          "longitude": 4.6999168
        },
        {
          "latitude": 52.2690868,
          "longitude": 4.6990344
        },
        {
          "latitude": 52.2689152,
          "longitude": 4.6987849
        },
        {
          "latitude": 52.2685021,
          "longitude": 4.6982056
        },
        {
          "latitude": 52.2684565,
          "longitude": 4.6981385
        },
        {
          "latitude": 52.2682822,
          "longitude": 4.6978918
        },
        {
          "latitude": 52.2677618,
          "longitude": 4.6971515
        },
        {
          "latitude": 52.2672603,
          "longitude": 4.6964327
        },
        {
          "latitude": 52.267102,
          "longitude": 4.6962422
        },
        {
          "latitude": 52.2666326,
          "longitude": 4.6955261
        },
        {
          "latitude": 52.2645754,
          "longitude": 4.6925783
        },
        {
          "latitude": 52.263245,
          "longitude": 4.6906766
        },
        {
          "latitude": 52.2628105,
          "longitude": 4.6900597
        },
        {
          "latitude": 52.2618315,
          "longitude": 4.6886596
        },
        {
          "latitude": 52.2600934,
          "longitude": 4.6861625
        },
        {
          "latitude": 52.2580603,
          "longitude": 4.6832523
        },
        {
          "latitude": 52.2579449,
          "longitude": 4.6830887
        },
        {
          "latitude": 52.2577679,
          "longitude": 4.6828339
        },
        {
          "latitude": 52.2575989,
          "longitude": 4.6825871
        },
        {
          "latitude": 52.2559145,
          "longitude": 4.6801758
        },
        {
          "latitude": 52.2509766,
          "longitude": 4.6730947
        },
        {
          "latitude": 52.2502336,
          "longitude": 4.6720326
        },
        {
          "latitude": 52.2497159,
          "longitude": 4.671295
        },
        {
          "latitude": 52.2486457,
          "longitude": 4.6697903
        },
        {
          "latitude": 52.2476614,
          "longitude": 4.668366
        },
        {
          "latitude": 52.2469425,
          "longitude": 4.6673414
        },
        {
          "latitude": 52.2454834,
          "longitude": 4.6652707
        },
        {
          "latitude": 52.245014,
          "longitude": 4.6646163
        },
        {
          "latitude": 52.2447431,
          "longitude": 4.6642166
        },
        {
          "latitude": 52.2427019,
          "longitude": 4.6613011
        },
        {
          "latitude": 52.2415754,
          "longitude": 4.6597239
        },
        {
          "latitude": 52.2405267,
          "longitude": 4.6582031
        },
        {
          "latitude": 52.2399902,
          "longitude": 4.6574226
        },
        {
          "latitude": 52.2397059,
          "longitude": 4.6570444
        },
        {
          "latitude": 52.2387698,
          "longitude": 4.6557087
        },
        {
          "latitude": 52.238633,
          "longitude": 4.6555156
        },
        {
          "latitude": 52.2385204,
          "longitude": 4.6553627
        },
        {
          "latitude": 52.2384855,
          "longitude": 4.6553117
        },
        {
          "latitude": 52.2382951,
          "longitude": 4.6550649
        },
        {
          "latitude": 52.2374421,
          "longitude": 4.6538526
        },
        {
          "latitude": 52.2364256,
          "longitude": 4.6524739
        },
        {
          "latitude": 52.2356719,
          "longitude": 4.6514493
        },
        {
          "latitude": 52.2334617,
          "longitude": 4.648464
        },
        {
          "latitude": 52.2325122,
          "longitude": 4.6471256
        },
        {
          "latitude": 52.2312489,
          "longitude": 4.6453097
        },
        {
          "latitude": 52.2307312,
          "longitude": 4.6445373
        },
        {
          "latitude": 52.2304201,
          "longitude": 4.6440518
        },
        {
          "latitude": 52.2301278,
          "longitude": 4.6436387
        },
        {
          "latitude": 52.22902,
          "longitude": 4.6420482
        },
        {
          "latitude": 52.2290039,
          "longitude": 4.6420214
        },
        {
          "latitude": 52.2285104,
          "longitude": 4.641324
        },
        {
          "latitude": 52.2280732,
          "longitude": 4.6406803
        },
        {
          "latitude": 52.2279793,
          "longitude": 4.6405408
        },
        {
          "latitude": 52.2271907,
          "longitude": 4.6393874
        },
        {
          "latitude": 52.2271559,
          "longitude": 4.6393391
        },
        {
          "latitude": 52.226429,
          "longitude": 4.6382743
        },
        {
          "latitude": 52.2250262,
          "longitude": 4.6362305
        },
        {
          "latitude": 52.2229716,
          "longitude": 4.6332344
        },
        {
          "latitude": 52.2225049,
          "longitude": 4.6325827
        },
        {
          "latitude": 52.2218907,
          "longitude": 4.6317592
        },
        {
          "latitude": 52.2216386,
          "longitude": 4.63144
        },
        {
          "latitude": 52.2209573,
          "longitude": 4.6306676
        },
        {
          "latitude": 52.2203404,
          "longitude": 4.6300238
        },
        {
          "latitude": 52.2201473,
          "longitude": 4.6298441
        },
        {
          "latitude": 52.2197369,
          "longitude": 4.6294874
        },
        {
          "latitude": 52.2189832,
          "longitude": 4.6288919
        },
        {
          "latitude": 52.2183824,
          "longitude": 4.6284708
        },
        {
          "latitude": 52.2181329,
          "longitude": 4.6283153
        },
        {
          "latitude": 52.2158825,
          "longitude": 4.6270493
        },
        {
          "latitude": 52.2156841,
          "longitude": 4.6269366
        },
        {
          "latitude": 52.2154534,
          "longitude": 4.6268106
        },
        {
          "latitude": 52.215381,
          "longitude": 4.6267757
        },
        {
          "latitude": 52.2153085,
          "longitude": 4.6267328
        },
        {
          "latitude": 52.2141552,
          "longitude": 4.6261024
        },
        {
          "latitude": 52.2124493,
          "longitude": 4.6250913
        },
        {
          "latitude": 52.2119102,
          "longitude": 4.6247451999999996
        },
        {
          "latitude": 52.2113657,
          "longitude": 4.6243724
        },
        {
          "latitude": 52.2106415,
          "longitude": 4.6238655
        },
        {
          "latitude": 52.2099575,
          "longitude": 4.6233666
        },
        {
          "latitude": 52.2095981,
          "longitude": 4.6230796
        },
        {
          "latitude": 52.208477,
          "longitude": 4.6221703
        },
        {
          "latitude": 52.2075704,
          "longitude": 4.6213791
        },
        {
          "latitude": 52.2070313,
          "longitude": 4.6208856
        },
        {
          "latitude": 52.2066638,
          "longitude": 4.620553
        },
        {
          "latitude": 52.2058618,
          "longitude": 4.6197939
        },
        {
          "latitude": 52.2039387,
          "longitude": 4.6180022
        },
        {
          "latitude": 52.2032011,
          "longitude": 4.6173182
        },
        {
          "latitude": 52.2019243,
          "longitude": 4.6161139
        },
        {
          "latitude": 52.2016776,
          "longitude": 4.615894
        },
        {
          "latitude": 52.2008622,
          "longitude": 4.6151322
        },
        {
          "latitude": 52.2006235,
          "longitude": 4.6149069
        },
        {
          "latitude": 52.1999261,
          "longitude": 4.6142578
        },
        {
          "latitude": 52.1995586,
          "longitude": 4.6139118
        },
        {
          "latitude": 52.1994755,
          "longitude": 4.6138313
        },
        {
          "latitude": 52.1959591,
          "longitude": 4.6105725
        },
        {
          "latitude": 52.1933466,
          "longitude": 4.6081397
        },
        {
          "latitude": 52.1932313,
          "longitude": 4.6080297
        },
        {
          "latitude": 52.1924078,
          "longitude": 4.6072653
        },
        {
          "latitude": 52.1888191,
          "longitude": 4.6039018
        },
        {
          "latitude": 52.1886179,
          "longitude": 4.6037033
        },
        {
          "latitude": 52.1878025,
          "longitude": 4.602837
        },
        {
          "latitude": 52.1873116,
          "longitude": 4.6022791
        },
        {
          "latitude": 52.186676,
          "longitude": 4.6015066
        },
        {
          "latitude": 52.1858391,
          "longitude": 4.6003854
        },
        {
          "latitude": 52.1850586,
          "longitude": 4.5992401
        },
        {
          "latitude": 52.185013,
          "longitude": 4.5991758
        },
        {
          "latitude": 52.1842834,
          "longitude": 4.5979929
        },
        {
          "latitude": 52.1835378,
          "longitude": 4.5966625
        },
        {
          "latitude": 52.1829182,
          "longitude": 4.5954636
        },
        {
          "latitude": 52.18243,
          "longitude": 4.5944229
        },
        {
          "latitude": 52.1817997,
          "longitude": 4.5929477
        },
        {
          "latitude": 52.1816683,
          "longitude": 4.5926365
        },
        {
          "latitude": 52.1816361,
          "longitude": 4.5925587
        },
        {
          "latitude": 52.1815744,
          "longitude": 4.5924085
        },
        {
          "latitude": 52.1815503,
          "longitude": 4.5923388
        },
        {
          "latitude": 52.1815288,
          "longitude": 4.5922852
        },
        {
          "latitude": 52.1799195,
          "longitude": 4.5882055
        },
        {
          "latitude": 52.1792811,
          "longitude": 4.5866606
        },
        {
          "latitude": 52.1778113,
          "longitude": 4.5831898
        },
        {
          "latitude": 52.177248,
          "longitude": 4.5818084
        },
        {
          "latitude": 52.1764004,
          "longitude": 4.5796761
        },
        {
          "latitude": 52.17507,
          "longitude": 4.5761517
        },
        {
          "latitude": 52.175011,
          "longitude": 4.5759881
        },
        {
          "latitude": 52.1749654,
          "longitude": 4.5758566
        },
        {
          "latitude": 52.1744075,
          "longitude": 4.5742929
        },
        {
          "latitude": 52.1738979,
          "longitude": 4.5729491
        },
        {
          "latitude": 52.1734527,
          "longitude": 4.5718789
        },
        {
          "latitude": 52.1732354,
          "longitude": 4.57138
        },
        {
          "latitude": 52.1727285,
          "longitude": 4.5703125
        },
        {
          "latitude": 52.1726024,
          "longitude": 4.5700443
        },
        {
          "latitude": 52.1722725,
          "longitude": 4.5693845
        },
        {
          "latitude": 52.1716154,
          "longitude": 4.5681587
        },
        {
          "latitude": 52.1709394,
          "longitude": 4.5670214
        },
        {
          "latitude": 52.1705988,
          "longitude": 4.5664689
        },
        {
          "latitude": 52.1698049,
          "longitude": 4.5652834
        },
        {
          "latitude": 52.1694267,
          "longitude": 4.5647416
        },
        {
          "latitude": 52.168327,
          "longitude": 4.5633683
        },
        {
          "latitude": 52.1678147,
          "longitude": 4.5627594
        },
        {
          "latitude": 52.1677047,
          "longitude": 4.5626307
        },
        {
          "latitude": 52.1676081,
          "longitude": 4.5625234
        },
        {
          "latitude": 52.16712,
          "longitude": 4.5619735
        },
        {
          "latitude": 52.1665192,
          "longitude": 4.5613056
        },
        {
          "latitude": 52.1662214,
          "longitude": 4.5609972
        },
        {
          "latitude": 52.1653953,
          "longitude": 4.5600665
        },
        {
          "latitude": 52.1640918,
          "longitude": 4.5584384
        },
        {
          "latitude": 52.1637323,
          "longitude": 4.5579663
        },
        {
          "latitude": 52.1636921,
          "longitude": 4.5579073
        },
        {
          "latitude": 52.1636787,
          "longitude": 4.5578831
        },
        {
          "latitude": 52.1633917,
          "longitude": 4.557513
        },
        {
          "latitude": 52.1630859,
          "longitude": 4.5570919
        },
        {
          "latitude": 52.1628231,
          "longitude": 4.5567298
        },
        {
          "latitude": 52.162587,
          "longitude": 4.5563838
        },
        {
          "latitude": 52.1620077,
          "longitude": 4.5555443
        },
        {
          "latitude": 52.161777,
          "longitude": 4.5551795
        },
        {
          "latitude": 52.1610045,
          "longitude": 4.5539618
        },
        {
          "latitude": 52.1603528,
          "longitude": 4.5528513
        },
        {
          "latitude": 52.1597466,
          "longitude": 4.5517731
        },
        {
          "latitude": 52.1594113,
          "longitude": 4.5511535
        },
        {
          "latitude": 52.1588159,
          "longitude": 4.5499921
        },
        {
          "latitude": 52.1586362,
          "longitude": 4.5496434
        },
        {
          "latitude": 52.1579817,
          "longitude": 4.5483398
        },
        {
          "latitude": 52.1576974,
          "longitude": 4.5477739
        },
        {
          "latitude": 52.1565172,
          "longitude": 4.5452124
        },
        {
          "latitude": 52.1564099,
          "longitude": 4.5449764
        },
        {
          "latitude": 52.1556455,
          "longitude": 4.5433617
        },
        {
          "latitude": 52.1554229,
          "longitude": 4.5428681
        },
        {
          "latitude": 52.1548623,
          "longitude": 4.5416611
        },
        {
          "latitude": 52.154645,
          "longitude": 4.54124
        },
        {
          "latitude": 52.1537331,
          "longitude": 4.5393008
        },
        {
          "latitude": 52.1535265,
          "longitude": 4.538826
        },
        {
          "latitude": 52.1524644,
          "longitude": 4.5365676
        },
        {
          "latitude": 52.1523383,
          "longitude": 4.5362726
        },
        {
          "latitude": 52.1522927,
          "longitude": 4.5361599
        },
        {
          "latitude": 52.1522364,
          "longitude": 4.5360419
        },
        {
          "latitude": 52.1517643,
          "longitude": 4.5350441
        },
        {
          "latitude": 52.1512628,
          "longitude": 4.5339203
        },
        {
          "latitude": 52.1511233,
          "longitude": 4.5336333
        },
        {
          "latitude": 52.1509784,
          "longitude": 4.5332497
        },
        {
          "latitude": 52.1502972,
          "longitude": 4.5315921
        },
        {
          "latitude": 52.150155,
          "longitude": 4.5311952
        },
        {
          "latitude": 52.1500343,
          "longitude": 4.5308974
        },
        {
          "latitude": 52.1496856,
          "longitude": 4.5299587
        },
        {
          "latitude": 52.1496105,
          "longitude": 4.5297441
        },
        {
          "latitude": 52.1495676,
          "longitude": 4.5296261
        },
        {
          "latitude": 52.1494228,
          "longitude": 4.5292559
        },
        {
          "latitude": 52.1488729,
          "longitude": 4.5275983
        },
        {
          "latitude": 52.1484894,
          "longitude": 4.5263672
        },
        {
          "latitude": 52.1483767,
          "longitude": 4.5259997
        },
        {
          "latitude": 52.1481916,
          "longitude": 4.5253801
        },
        {
          "latitude": 52.1480307,
          "longitude": 4.52479
        },
        {
          "latitude": 52.1479529,
          "longitude": 4.5244655
        },
        {
          "latitude": 52.1478617,
          "longitude": 4.5240739
        },
        {
          "latitude": 52.1478376,
          "longitude": 4.5239693
        },
        {
          "latitude": 52.1478,
          "longitude": 4.5238352
        },
        {
          "latitude": 52.1477598,
          "longitude": 4.523693
        },
        {
          "latitude": 52.147631,
          "longitude": 4.5232826
        },
        {
          "latitude": 52.1474835,
          "longitude": 4.5227677
        },
        {
          "latitude": 52.1474513,
          "longitude": 4.522647
        },
        {
          "latitude": 52.1474245,
          "longitude": 4.5225585
        },
        {
          "latitude": 52.1474138,
          "longitude": 4.5225155
        },
        {
          "latitude": 52.1472099,
          "longitude": 4.5217565
        },
        {
          "latitude": 52.1466574,
          "longitude": 4.5198119
        },
        {
          "latitude": 52.1462739,
          "longitude": 4.5186237
        },
        {
          "latitude": 52.1460941,
          "longitude": 4.5181194
        },
        {
          "latitude": 52.1459386,
          "longitude": 4.5177063
        },
        {
          "latitude": 52.1457669,
          "longitude": 4.5172423
        },
        {
          "latitude": 52.1454692,
          "longitude": 4.5165101
        },
        {
          "latitude": 52.1453002,
          "longitude": 4.5161426
        },
        {
          "latitude": 52.1450937,
          "longitude": 4.5156786
        },
        {
          "latitude": 52.1450374,
          "longitude": 4.5155632
        },
        {
          "latitude": 52.144796,
          "longitude": 4.5150885
        },
        {
          "latitude": 52.1440825,
          "longitude": 4.5137286
        },
        {
          "latitude": 52.1437821,
          "longitude": 4.5132083
        },
        {
          "latitude": 52.1436962,
          "longitude": 4.5130822
        },
        {
          "latitude": 52.1428996,
          "longitude": 4.5119208
        },
        {
          "latitude": 52.1421137,
          "longitude": 4.510982
        },
        {
          "latitude": 52.1417356,
          "longitude": 4.5105475
        },
        {
          "latitude": 52.1411723,
          "longitude": 4.5099789
        },
        {
          "latitude": 52.1411133,
          "longitude": 4.5099172
        },
        {
          "latitude": 52.1410918,
          "longitude": 4.5098984
        },
        {
          "latitude": 52.1410167,
          "longitude": 4.5098206
        },
        {
          "latitude": 52.1409658,
          "longitude": 4.509767
        },
        {
          "latitude": 52.1403167,
          "longitude": 4.5091099
        },
        {
          "latitude": 52.1400404,
          "longitude": 4.5088363
        },
        {
          "latitude": 52.1399143,
          "longitude": 4.5086995
        },
        {
          "latitude": 52.138651,
          "longitude": 4.5073342
        },
        {
          "latitude": 52.1383908,
          "longitude": 4.5070526
        },
        {
          "latitude": 52.1382219,
          "longitude": 4.5068488
        },
        {
          "latitude": 52.137951,
          "longitude": 4.5065296
        },
        {
          "latitude": 52.1375808,
          "longitude": 4.5060521
        },
        {
          "latitude": 52.1372375,
          "longitude": 4.5055693
        },
        {
          "latitude": 52.136685,
          "longitude": 4.5046869
        },
        {
          "latitude": 52.1365052,
          "longitude": 4.5043945
        },
        {
          "latitude": 52.1363658,
          "longitude": 4.5041612
        },
        {
          "latitude": 52.1355209,
          "longitude": 4.502643
        },
        {
          "latitude": 52.1332598,
          "longitude": 4.498212
        },
        {
          "latitude": 52.1327797,
          "longitude": 4.4973028
        },
        {
          "latitude": 52.1327046,
          "longitude": 4.4971311
        },
        {
          "latitude": 52.1318355,
          "longitude": 4.4953716
        },
        {
          "latitude": 52.1313795,
          "longitude": 4.4944006
        },
        {
          "latitude": 52.1310148,
          "longitude": 4.4936094
        },
        {
          "latitude": 52.1309826,
          "longitude": 4.4935369
        },
        {
          "latitude": 52.130945,
          "longitude": 4.4934672
        },
        {
          "latitude": 52.1308833,
          "longitude": 4.4933331
        },
        {
          "latitude": 52.1307868,
          "longitude": 4.4931266
        },
        {
          "latitude": 52.1298051,
          "longitude": 4.4907555
        },
        {
          "latitude": 52.129494,
          "longitude": 4.4900635
        },
        {
          "latitude": 52.128928,
          "longitude": 4.4888753
        },
        {
          "latitude": 52.128633,
          "longitude": 4.4882315
        },
        {
          "latitude": 52.1284962,
          "longitude": 4.4879365
        },
        {
          "latitude": 52.1280187,
          "longitude": 4.4869226
        },
        {
          "latitude": 52.1276432,
          "longitude": 4.4861367
        },
        {
          "latitude": 52.1267125,
          "longitude": 4.4842914
        },
        {
          "latitude": 52.1262136,
          "longitude": 4.4833177
        },
        {
          "latitude": 52.1260795,
          "longitude": 4.4830549
        },
        {
          "latitude": 52.1257469,
          "longitude": 4.4824219
        },
        {
          "latitude": 52.1256638,
          "longitude": 4.4822636
        },
        {
          "latitude": 52.1254224,
          "longitude": 4.4818372
        },
        {
          "latitude": 52.1247384,
          "longitude": 4.4805658
        },
        {
          "latitude": 52.1233276,
          "longitude": 4.4780794
        },
        {
          "latitude": 52.1225283,
          "longitude": 4.476741
        },
        {
          "latitude": 52.1221286,
          "longitude": 4.476116
        },
        {
          "latitude": 52.1214822,
          "longitude": 4.4750485
        },
        {
          "latitude": 52.1204576,
          "longitude": 4.4733828
        },
        {
          "latitude": 52.1196583,
          "longitude": 4.4721463
        },
        {
          "latitude": 52.1194544,
          "longitude": 4.4718271
        },
        {
          "latitude": 52.1191406,
          "longitude": 4.4713685
        },
        {
          "latitude": 52.1182394,
          "longitude": 4.4700596
        },
        {
          "latitude": 52.1178532,
          "longitude": 4.4695339
        },
        {
          "latitude": 52.1177647,
          "longitude": 4.4694051
        },
        {
          "latitude": 52.1172228,
          "longitude": 4.468646
        },
        {
          "latitude": 52.1157959,
          "longitude": 4.4667149
        },
        {
          "latitude": 52.1154955,
          "longitude": 4.466334
        },
        {
          "latitude": 52.1143448,
          "longitude": 4.4648883
        },
        {
          "latitude": 52.1131942,
          "longitude": 4.4635391
        },
        {
          "latitude": 52.1126738,
          "longitude": 4.4628766
        },
        {
          "latitude": 52.112588,
          "longitude": 4.4627693
        },
        {
          "latitude": 52.1111745,
          "longitude": 4.4609535
        },
        {
          "latitude": 52.1107829,
          "longitude": 4.4604492
        },
        {
          "latitude": 52.1090287,
          "longitude": 4.4581935
        },
        {
          "latitude": 52.1070814,
          "longitude": 4.4556829
        },
        {
          "latitude": 52.1066201,
          "longitude": 4.455066
        },
        {
          "latitude": 52.1065557,
          "longitude": 4.4549775
        },
        {
          "latitude": 52.1057832,
          "longitude": 4.4538671
        },
        {
          "latitude": 52.1044904,
          "longitude": 4.4518554
        },
        {
          "latitude": 52.1037421,
          "longitude": 4.4505948
        },
        {
          "latitude": 52.102747,
          "longitude": 4.4487816
        },
        {
          "latitude": 52.1024117,
          "longitude": 4.4481406
        },
        {
          "latitude": 52.0996705,
          "longitude": 4.4425857
        },
        {
          "latitude": 52.0976374,
          "longitude": 4.4384766
        },
        {
          "latitude": 52.097168,
          "longitude": 4.4375244
        },
        {
          "latitude": 52.09315,
          "longitude": 4.4294134
        },
        {
          "latitude": 52.0923132,
          "longitude": 4.4277665
        },
        {
          "latitude": 52.0862541,
          "longitude": 4.4165039
        },
        {
          "latitude": 52.0860663,
          "longitude": 4.4161525
        },
        {
          "latitude": 52.0853367,
          "longitude": 4.4148946
        },
        {
          "latitude": 52.0843872,
          "longitude": 4.4133496
        },
        {
          "latitude": 52.0835772,
          "longitude": 4.4121239
        },
        {
          "latitude": 52.0828182,
          "longitude": 4.4110429
        },
        {
          "latitude": 52.0823434,
          "longitude": 4.4103992
        },
        {
          "latitude": 52.0816916,
          "longitude": 4.4095489
        },
        {
          "latitude": 52.0806777,
          "longitude": 4.408299
        },
        {
          "latitude": 52.0795405,
          "longitude": 4.4069713
        },
        {
          "latitude": 52.079106,
          "longitude": 4.4064081
        },
        {
          "latitude": 52.0790362,
          "longitude": 4.4063249
        },
        {
          "latitude": 52.0789343,
          "longitude": 4.4061828
        },
        {
          "latitude": 52.0788378,
          "longitude": 4.4060594
        },
        {
          "latitude": 52.0786232,
          "longitude": 4.4057536
        },
        {
          "latitude": 52.078194,
          "longitude": 4.4051367
        },
        {
          "latitude": 52.0780948,
          "longitude": 4.4049919
        },
        {
          "latitude": 52.077738,
          "longitude": 4.4044688
        },
        {
          "latitude": 52.0775369,
          "longitude": 4.404045
        },
        {
          "latitude": 52.0771801,
          "longitude": 4.4034094
        },
        {
          "latitude": 52.0768315,
          "longitude": 4.4027469
        },
        {
          "latitude": 52.0764935,
          "longitude": 4.4020817
        },
        {
          "latitude": 52.0761555,
          "longitude": 4.4013709
        },
        {
          "latitude": 52.0758042,
          "longitude": 4.4005957
        },
        {
          "latitude": 52.0754877,
          "longitude": 4.3998206
        },
        {
          "latitude": 52.0751953,
          "longitude": 4.3990588
        },
        {
          "latitude": 52.0750397,
          "longitude": 4.3986592
        },
        {
          "latitude": 52.0747527,
          "longitude": 4.3978491
        },
        {
          "latitude": 52.0745811,
          "longitude": 4.3973637
        },
        {
          "latitude": 52.0741251,
          "longitude": 4.3960977
        },
        {
          "latitude": 52.0738542,
          "longitude": 4.3953279
        },
        {
          "latitude": 52.0738006,
          "longitude": 4.3951884
        },
        {
          "latitude": 52.0737201,
          "longitude": 4.3949872
        },
        {
          "latitude": 52.0735458,
          "longitude": 4.3945313
        },
        {
          "latitude": 52.0731273,
          "longitude": 4.3934396
        },
        {
          "latitude": 52.0725158,
          "longitude": 4.3918866
        },
        {
          "latitude": 52.0720571,
          "longitude": 4.3907627
        },
        {
          "latitude": 52.0718452,
          "longitude": 4.3902344
        },
        {
          "latitude": 52.0718157,
          "longitude": 4.3901619
        },
        {
          "latitude": 52.0710996,
          "longitude": 4.3883407
        },
        {
          "latitude": 52.0710486,
          "longitude": 4.3882093
        },
        {
          "latitude": 52.0709816,
          "longitude": 4.3880349
        },
        {
          "latitude": 52.0708206,
          "longitude": 4.3876809
        },
        {
          "latitude": 52.0707938,
          "longitude": 4.3876004
        },
        {
          "latitude": 52.0701689,
          "longitude": 4.3861225
        },
        {
          "latitude": 52.0698309,
          "longitude": 4.3853956
        },
        {
          "latitude": 52.0690584,
          "longitude": 4.3838507
        },
        {
          "latitude": 52.0690289,
          "longitude": 4.383797
        },
        {
          "latitude": 52.0689967,
          "longitude": 4.3837327
        },
        {
          "latitude": 52.0689163,
          "longitude": 4.3835825
        },
        {
          "latitude": 52.0683664,
          "longitude": 4.382641
        },
        {
          "latitude": 52.0683101,
          "longitude": 4.3825498
        },
        {
          "latitude": 52.0682377,
          "longitude": 4.382354
        },
        {
          "latitude": 52.0676529,
          "longitude": 4.3814394
        },
        {
          "latitude": 52.0671701,
          "longitude": 4.3806589
        },
        {
          "latitude": 52.066462,
          "longitude": 4.3796369
        },
        {
          "latitude": 52.0660061,
          "longitude": 4.3790308
        },
        {
          "latitude": 52.0657969,
          "longitude": 4.3787411
        },
        {
          "latitude": 52.0657218,
          "longitude": 4.3785641
        },
        {
          "latitude": 52.0654643,
          "longitude": 4.3782154
        },
        {
          "latitude": 52.0650029,
          "longitude": 4.3776146
        },
        {
          "latitude": 52.0646542,
          "longitude": 4.3771586
        },
        {
          "latitude": 52.0643324,
          "longitude": 4.3767348
        },
        {
          "latitude": 52.0640132,
          "longitude": 4.3762949
        },
        {
          "latitude": 52.063812,
          "longitude": 4.3759677
        },
        {
          "latitude": 52.0636457,
          "longitude": 4.3756217
        },
        {
          "latitude": 52.0635357,
          "longitude": 4.3752864
        },
        {
          "latitude": 52.0635089,
          "longitude": 4.3751791
        },
        {
          "latitude": 52.0634848,
          "longitude": 4.3750691
        },
        {
          "latitude": 52.0634124,
          "longitude": 4.3745193
        },
        {
          "latitude": 52.0634043,
          "longitude": 4.3739453
        },
        {
          "latitude": 52.0634982,
          "longitude": 4.3725586
        },
        {
          "latitude": 52.0635465,
          "longitude": 4.3718424
        },
        {
          "latitude": 52.0635411,
          "longitude": 4.371542
        },
        {
          "latitude": 52.0637208,
          "longitude": 4.3697879
        },
        {
          "latitude": 52.0638147,
          "longitude": 4.369171
        },
        {
          "latitude": 52.0638523,
          "longitude": 4.3689832
        },
        {
          "latitude": 52.0639917,
          "longitude": 4.3683207
        },
        {
          "latitude": 52.0640963,
          "longitude": 4.367846
        },
        {
          "latitude": 52.0642707,
          "longitude": 4.3673149
        },
        {
          "latitude": 52.0650673,
          "longitude": 4.3649599
        },
        {
          "latitude": 52.0651665,
          "longitude": 4.3646863
        },
        {
          "latitude": 52.065255,
          "longitude": 4.3644208
        },
        {
          "latitude": 52.0652846,
          "longitude": 4.3643403
        },
        {
          "latitude": 52.0653033,
          "longitude": 4.3642893
        },
        {
          "latitude": 52.0653516,
          "longitude": 4.3641499
        },
        {
          "latitude": 52.0654133,
          "longitude": 4.3639675
        },
        {
          "latitude": 52.0662287,
          "longitude": 4.3616527
        },
        {
          "latitude": 52.066564,
          "longitude": 4.3607113
        },
        {
          "latitude": 52.0667168,
          "longitude": 4.3603036
        },
        {
          "latitude": 52.0672077,
          "longitude": 4.358992
        },
        {
          "latitude": 52.0672452,
          "longitude": 4.3588901
        },
        {
          "latitude": 52.0672908,
          "longitude": 4.3587613
        },
        {
          "latitude": 52.0674115,
          "longitude": 4.358426
        },
        {
          "latitude": 52.0674625,
          "longitude": 4.3582919
        },
        {
          "latitude": 52.067551,
          "longitude": 4.3580505
        },
        {
          "latitude": 52.0680901,
          "longitude": 4.3565404
        },
        {
          "latitude": 52.0684147,
          "longitude": 4.3555883
        },
        {
          "latitude": 52.0685032,
          "longitude": 4.35532
        },
        {
          "latitude": 52.0685273,
          "longitude": 4.3552342
        },
        {
          "latitude": 52.0685649,
          "longitude": 4.3551135
        },
        {
          "latitude": 52.0687929,
          "longitude": 4.3543839
        },
        {
          "latitude": 52.0689484,
          "longitude": 4.3538904
        },
        {
          "latitude": 52.0694607,
          "longitude": 4.3523508
        },
        {
          "latitude": 52.0700938,
          "longitude": 4.3505859
        },
        {
          "latitude": 52.0718157,
          "longitude": 4.3457848
        },
        {
          "latitude": 52.0721805,
          "longitude": 4.3448192
        },
        {
          "latitude": 52.0727894,
          "longitude": 4.3432716
        },
        {
          "latitude": 52.0731461,
          "longitude": 4.3424186
        },
        {
          "latitude": 52.0733795,
          "longitude": 4.3418822
        },
        {
          "latitude": 52.0737067,
          "longitude": 4.3411419
        },
        {
          "latitude": 52.0737791,
          "longitude": 4.3409863
        },
        {
          "latitude": 52.0740581,
          "longitude": 4.3404177
        },
        {
          "latitude": 52.0741037,
          "longitude": 4.3403265
        },
        {
          "latitude": 52.0742941,
          "longitude": 4.3399698
        },
        {
          "latitude": 52.0746723,
          "longitude": 4.3393368
        },
        {
          "latitude": 52.0749164,
          "longitude": 4.3389478
        },
        {
          "latitude": 52.0751953,
          "longitude": 4.338567
        },
        {
          "latitude": 52.0754206,
          "longitude": 4.3382558
        },
        {
          "latitude": 52.0758981,
          "longitude": 4.3376765
        },
        {
          "latitude": 52.0760778,
          "longitude": 4.3374833
        },
        {
          "latitude": 52.0762897,
          "longitude": 4.3372527
        },
        {
          "latitude": 52.0763487,
          "longitude": 4.3371829
        },
        {
          "latitude": 52.0763996,
          "longitude": 4.3371239
        },
        {
          "latitude": 52.0764586,
          "longitude": 4.3370676
        },
        {
          "latitude": 52.0770326,
          "longitude": 4.3364641
        },
        {
          "latitude": 52.0775101,
          "longitude": 4.3358874
        },
        {
          "latitude": 52.077553,
          "longitude": 4.3358365
        },
        {
          "latitude": 52.077848,
          "longitude": 4.3355092
        },
        {
          "latitude": 52.0779017,
          "longitude": 4.3354449
        },
        {
          "latitude": 52.0781672,
          "longitude": 4.3351257
        },
        {
          "latitude": 52.0783952,
          "longitude": 4.3348575
        },
        {
          "latitude": 52.0785105,
          "longitude": 4.3347207
        },
        {
          "latitude": 52.0787546,
          "longitude": 4.3345168
        },
        {
          "latitude": 52.0791757,
          "longitude": 4.3340716
        },
        {
          "latitude": 52.0794815,
          "longitude": 4.3336987
        },
        {
          "latitude": 52.0797148,
          "longitude": 4.3333608
        },
        {
          "latitude": 52.0801681,
          "longitude": 4.3327063
        },
        {
          "latitude": 52.0802379,
          "longitude": 4.3326017
        },
        {
          "latitude": 52.0805249,
          "longitude": 4.3321431
        },
        {
          "latitude": 52.0806804,
          "longitude": 4.3318722
        },
        {
          "latitude": 52.0808628,
          "longitude": 4.3315396
        },
        {
          "latitude": 52.0810479,
          "longitude": 4.3312043
        },
        {
          "latitude": 52.0812464,
          "longitude": 4.3308046
        },
        {
          "latitude": 52.0813456,
          "longitude": 4.3306115
        },
        {
          "latitude": 52.0813805,
          "longitude": 4.3305203
        },
        {
          "latitude": 52.081579,
          "longitude": 4.3301502
        },
        {
          "latitude": 52.0817345,
          "longitude": 4.329831
        },
        {
          "latitude": 52.081933,
          "longitude": 4.3294609
        },
        {
          "latitude": 52.0821664,
          "longitude": 4.3290934
        },
        {
          "latitude": 52.0823327,
          "longitude": 4.3288761
        },
        {
          "latitude": 52.0823997,
          "longitude": 4.3287984
        },
        {
          "latitude": 52.0825446,
          "longitude": 4.3286133
        },
        {
          "latitude": 52.0826438,
          "longitude": 4.3284845
        },
        {
          "latitude": 52.0827779,
          "longitude": 4.328329
        },
        {
          "latitude": 52.0831615,
          "longitude": 4.3279347
        },
        {
          "latitude": 52.0832849,
          "longitude": 4.3277845
        },
        {
          "latitude": 52.0834538,
          "longitude": 4.3275726
        },
        {
          "latitude": 52.0839769,
          "longitude": 4.3269825
        },
        {
          "latitude": 52.0840386,
          "longitude": 4.3269101
        },
        {
          "latitude": 52.0839688,
          "longitude": 4.3267545
        },
        {
          "latitude": 52.0839044,
          "longitude": 4.3266177
        },
        {
          "latitude": 52.083824,
          "longitude": 4.3264568
        },
        {
          "latitude": 52.083663,
          "longitude": 4.3260786
        },
        {
          "latitude": 52.0835182,
          "longitude": 4.325738
        },
        {
          "latitude": 52.0833009,
          "longitude": 4.3251935
        },
        {
          "latitude": 52.0832312,
          "longitude": 4.3249708
        },
        {
          "latitude": 52.0831534,
          "longitude": 4.3247589
        },
        {
          "latitude": 52.0828906,
          "longitude": 4.3240508
        },
        {
          "latitude": 52.0828289,
          "longitude": 4.3239704
        },
        {
          "latitude": 52.0828128,
          "longitude": 4.3239436
        },
        {
          "latitude": 52.0825902,
          "longitude": 4.3233722
        },
        {
          "latitude": 52.0824963,
          "longitude": 4.3231255
        },
        {
          "latitude": 52.0823219,
          "longitude": 4.3226668
        },
        {
          "latitude": 52.0822737,
          "longitude": 4.3225488
        },
        {
          "latitude": 52.0821181,
          "longitude": 4.3221465
        },
        {
          "latitude": 52.0820189,
          "longitude": 4.3218783
        },
        {
          "latitude": 52.0820215,
          "longitude": 4.3218032
        },
        {
          "latitude": 52.0820162,
          "longitude": 4.321712
        },
        {
          "latitude": 52.0820081,
          "longitude": 4.3216342
        },
        {
          "latitude": 52.0821047,
          "longitude": 4.3214706
        },
        {
          "latitude": 52.0823756,
          "longitude": 4.3211299
        },
        {
          "latitude": 52.0824695,
          "longitude": 4.3210039
        },
        {
          "latitude": 52.0825821,
          "longitude": 4.3207946
        },
        {
          "latitude": 52.0827109,
          "longitude": 4.3204218
        },
        {
          "latitude": 52.0829523,
          "longitude": 4.3198049
        },
        {
          "latitude": 52.0834163,
          "longitude": 4.3186113
        },
        {
          "latitude": 52.0834994,
          "longitude": 4.3183994
        },
        {
          "latitude": 52.0835316,
          "longitude": 4.3183243
        },
        {
          "latitude": 52.0835745,
          "longitude": 4.3182385
        },
        {
          "latitude": 52.0835021,
          "longitude": 4.3180776
        },
        {
          "latitude": 52.0834404,
          "longitude": 4.3179649
        },
        {
          "latitude": 52.0832688,
          "longitude": 4.3175921
        },
        {
          "latitude": 52.0831776,
          "longitude": 4.3173373
        },
        {
          "latitude": 52.0830247,
          "longitude": 4.316884
        },
        {
          "latitude": 52.0828047,
          "longitude": 4.3163154
        },
        {
          "latitude": 52.0827189,
          "longitude": 4.3160927
        },
        {
          "latitude": 52.0825016,
          "longitude": 4.3155375
        },
        {
          "latitude": 52.0823246,
          "longitude": 4.3150789
        },
        {
          "latitude": 52.082153,
          "longitude": 4.3146282
        },
        {
          "latitude": 52.0819867,
          "longitude": 4.3142071
        },
        {
          "latitude": 52.0819035,
          "longitude": 4.3139845
        },
        {
          "latitude": 52.0818713,
          "longitude": 4.3139148
        },
        {
          "latitude": 52.0818338,
          "longitude": 4.3138477
        },
        {
          "latitude": 52.0817989,
          "longitude": 4.3138021
        },
        {
          "latitude": 52.0817453,
          "longitude": 4.3137512
        },
        {
          "latitude": 52.0815441,
          "longitude": 4.3136278
        },
        {
          "latitude": 52.0814905,
          "longitude": 4.3135983
        },
        {
          "latitude": 52.0814422,
          "longitude": 4.3135634
        },
        {
          "latitude": 52.0814046,
          "longitude": 4.3135232
        },
        {
          "latitude": 52.0813751,
          "longitude": 4.3134776
        },
        {
          "latitude": 52.0813483,
          "longitude": 4.3134078
        },
        {
          "latitude": 52.0811123,
          "longitude": 4.3123591
        },
        {
          "latitude": 52.0809996,
          "longitude": 4.3119621
        },
        {
          "latitude": 52.0807958,
          "longitude": 4.3114015
        },
        {
          "latitude": 52.0804363,
          "longitude": 4.3105567
        },
        {
          "latitude": 52.080313,
          "longitude": 4.3102992
        },
        {
          "latitude": 52.0802674,
          "longitude": 4.3102348
        },
        {
          "latitude": 52.0802137,
          "longitude": 4.3101919
        },
        {
          "latitude": 52.0801959,
          "longitude": 4.3101406
        }
      ]
    }
  ],
  "sections": [
    {
      "startPointIndex": 0,
      "endPointIndex": 35,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "nld-connector",
          "shieldContent": "s100"
        }
      ]
    },
    {
      "startPointIndex": 0,
      "endPointIndex": 130,
      "sectionType": "LOW_EMISSION_ZONE"
    },
    {
      "startPointIndex": 87,
      "endPointIndex": 139,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "nld-connector",
          "shieldContent": "s105"
        }
      ]
    },
    {
      "maxSpeedLimitInKmh": 50,
      "startPointIndex": 0,
      "endPointIndex": 141,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 0,
      "endPointIndex": 201,
      "sectionType": "URBAN"
    },
    {
      "startPointIndex": 150,
      "endPointIndex": 203,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "nld-highway",
          "shieldContent": "A10"
        },
        {
          "reference": "european-road",
          "shieldContent": "E22"
        }
      ]
    },
    {
      "maxSpeedLimitInKmh": 80,
      "startPointIndex": 141,
      "endPointIndex": 221,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 337,
      "endPointIndex": 346,
      "sectionType": "TUNNEL"
    },
    {
      "startPointIndex": 590,
      "endPointIndex": 598,
      "sectionType": "URBAN"
    },
    {
      "startPointIndex": 589,
      "endPointIndex": 617,
      "sectionType": "TUNNEL"
    },
    {
      "startPointIndex": 247,
      "endPointIndex": 718,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "nld-highway",
          "shieldContent": "A4"
        },
        {
          "reference": "european-road",
          "shieldContent": "E19"
        }
      ]
    },
    {
      "maxSpeedLimitInKmh": 100,
      "startPointIndex": 221,
      "endPointIndex": 744,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 70,
      "startPointIndex": 744,
      "endPointIndex": 751,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 100,
      "startPointIndex": 751,
      "endPointIndex": 770,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 787,
      "endPointIndex": 801,
      "sectionType": "URBAN"
    },
    {
      "maxSpeedLimitInKmh": 80,
      "startPointIndex": 770,
      "endPointIndex": 821,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 150,
      "endPointIndex": 833,
      "sectionType": "MOTORWAY"
    },
    {
      "startPointIndex": 779,
      "endPointIndex": 833,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "nld-highway",
          "shieldContent": "A12"
        }
      ]
    },
    {
      "startPointIndex": 835,
      "endPointIndex": 837,
      "sectionType": "TUNNEL"
    },
    {
      "maxSpeedLimitInKmh": 70,
      "startPointIndex": 821,
      "endPointIndex": 841,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 874,
      "endPointIndex": 885,
      "sectionType": "TUNNEL"
    },
    {
      "startPointIndex": 880,
      "endPointIndex": 890,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "nld-connector",
          "shieldContent": "s100"
        }
      ]
    },
    {
      "maxSpeedLimitInKmh": 50,
      "startPointIndex": 841,
      "endPointIndex": 920,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 0,
      "endPointIndex": 920,
      "sectionType": "COUNTRY",
      "countryCode": "NLD"
    },
    {
      "startPointIndex": 891,
      "endPointIndex": 920,
      "sectionType": "LOW_EMISSION_ZONE"
    },
    {
      "startPointIndex": 0,
      "endPointIndex": 920,
      "sectionType": "TRAVEL_MODE",
      "travelMode": "car"
    },
    {
      "startPointIndex": 827,
      "endPointIndex": 920,
      "sectionType": "URBAN"
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
        "DOUBLE_SOLID",
        "SINGLE_SOLID"
      ],
      "startPointIndex": 33,
      "endPointIndex": 34,
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
            "SLIGHT_RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "DOUBLE_SOLID",
        "DOUBLE_SOLID",
        "SINGLE_SOLID"
      ],
      "startPointIndex": 127,
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
      "startPointIndex": 160,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "startPointIndex": 193,
      "endPointIndex": 194,
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
        "SINGLE_SOLID"
      ],
      "startPointIndex": 202,
      "endPointIndex": 203,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "startPointIndex": 251,
      "endPointIndex": 252,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
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
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
        "LONG_DASHED",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "startPointIndex": 371,
      "endPointIndex": 373,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
        "LONG_DASHED",
        "LONG_DASHED",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
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
        "LONG_DASHED",
        "LONG_DASHED",
        "SHORT_DASHED",
        "DASHED_SOLID",
        "SINGLE_SOLID"
      ],
      "startPointIndex": 430,
      "endPointIndex": 431,
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
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "startPointIndex": 444,
      "endPointIndex": 445,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 492,
      "endPointIndex": 493,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 540,
      "endPointIndex": 543,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
        "DASHED_SOLID",
        "SINGLE_SOLID"
      ],
      "startPointIndex": 618,
      "endPointIndex": 621,
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
        "DASHED_SOLID",
        "SINGLE_SOLID"
      ],
      "startPointIndex": 717,
      "endPointIndex": 718,
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
            "SLIGHT_RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "startPointIndex": 730,
      "endPointIndex": 731,
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
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "startPointIndex": 751,
      "endPointIndex": 752,
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
      "startPointIndex": 757,
      "endPointIndex": 758,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "startPointIndex": 789,
      "endPointIndex": 790,
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
      "startPointIndex": 832,
      "endPointIndex": 833,
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
          ],
          "follow": "STRAIGHT"
        },
        {
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
        "SINGLE_SOLID"
      ],
      "startPointIndex": 842,
      "endPointIndex": 843,
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
      "startPointIndex": 857,
      "endPointIndex": 859,
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
        "LONG_DASHED",
        "DOUBLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "startPointIndex": 887,
      "endPointIndex": 888,
      "sectionType": "LANES"
    }
  ],
  "guidance": {
    "instructions": [
      {
        "routeOffsetInMeters": 0,
        "travelTimeInSeconds": 0,
        "point": {
          "latitude": 52.36535,
          "longitude": 4.87862
        },
        "pointIndex": 0,
        "instructionType": "LOCATION_DEPARTURE",
        "roadNumbers": [
          "s100"
        ],
        "phoneticRoadNumbers": [
          "ˌɛs.ˈhɔn.dərt"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "nl-NL"
        ],
        "street": "Nassaukade",
        "phoneticStreet": "ˈnɑ.sɑ⁀u.ˌka.də",
        "phoneticStreetLanguageCode": "nl-NL",
        "countryCode": "NLD",
        "possibleCombineWithNext": false,
        "drivingSide": "RIGHT",
        "maneuver": "DEPART",
        "message": "Leave from <street>Nassaukade</street>/<roadNumber>s100</roadNumber>",
        "confirmationAnnouncement": {
          "point": {
            "latitude": 52.3653496,
            "longitude": 4.8786167
          },
          "pointIndex": 0,
          "maneuver": "DEPART",
          "distanceInMeters": 0
        },
        "roadShieldReferences": [
          {
            "reference": "nld-connector",
            "shieldContent": "s100"
          }
        ]
      },
      {
        "routeOffsetInMeters": 796,
        "travelTimeInSeconds": 193,
        "point": {
          "latitude": 52.37176,
          "longitude": 4.87416
        },
        "pointIndex": 34,
        "instructionType": "TURN",
        "street": "De Clercqstraat",
        "phoneticStreet": "də ˈklɛrk.strat",
        "phoneticStreetLanguageCode": "nl-NL",
        "countryCode": "NLD",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": -90,
        "possibleCombineWithNext": false,
        "drivingSide": "RIGHT",
        "maneuver": "TURN_LEFT",
        "message": "Turn left onto <street>De Clercqstraat</street>",
        "earlyWarningAnnouncement": {
          "point": {
            "latitude": 52.3667809,
            "longitude": 4.8770322
          },
          "pointIndex": 10,
          "maneuver": "AHEAD_LEFT_TURN",
          "distanceInMeters": 600
        },
        "mainAnnouncement": {
          "point": {
            "latitude": 52.3691586,
            "longitude": 4.8752974
          },
          "pointIndex": 23,
          "maneuver": "TURN_LEFT",
          "distanceInMeters": 300
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 52.3713922,
            "longitude": 4.8743199
          },
          "pointIndex": 31,
          "maneuver": "TURN_LEFT",
          "distanceInMeters": 42
        }
      },
      {
        "routeOffsetInMeters": 1872,
        "travelTimeInSeconds": 387,
        "point": {
          "latitude": 52.37155,
          "longitude": 4.85961
        },
        "pointIndex": 79,
        "instructionType": "TURN",
        "street": "Admiraal de Ruijterweg",
        "phoneticStreet": "ɑd.mi.ˈral də ˈrœ⁀y.tər.ʋɛx",
        "phoneticStreetLanguageCode": "nl-NL",
        "countryCode": "NLD",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": 90,
        "possibleCombineWithNext": false,
        "drivingSide": "RIGHT",
        "maneuver": "TURN_RIGHT",
        "message": "Turn right onto <street>Admiraal de Ruijterweg</street>",
        "earlyWarningAnnouncement": {
          "point": {
            "latitude": 52.3702115,
            "longitude": 4.8649576
          },
          "pointIndex": 66,
          "maneuver": "AHEAD_RIGHT_TURN",
          "distanceInMeters": 400
        },
        "mainAnnouncement": {
          "point": {
            "latitude": 52.3710563,
            "longitude": 4.8624025
          },
          "pointIndex": 72,
          "maneuver": "TURN_RIGHT",
          "distanceInMeters": 200
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 52.3714503,
            "longitude": 4.8604543
          },
          "pointIndex": 76,
          "maneuver": "TURN_RIGHT",
          "distanceInMeters": 60
        }
      },
      {
        "routeOffsetInMeters": 2223,
        "travelTimeInSeconds": 453,
        "point": {
          "latitude": 52.37464,
          "longitude": 4.85856
        },
        "pointIndex": 86,
        "instructionType": "TURN",
        "roadNumbers": [
          "s105"
        ],
        "phoneticRoadNumbers": [
          "ˌɛs.hɔn.dərt.ɛn.ˈvɛ⁀if"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "nl-NL"
        ],
        "street": "Jan van Galenstraat",
        "phoneticStreet": "ˈjɑn vɑŋ ˈɣa.lən.strat",
        "phoneticStreetLanguageCode": "nl-NL",
        "countryCode": "NLD",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": -90,
        "possibleCombineWithNext": false,
        "drivingSide": "RIGHT",
        "maneuver": "TURN_LEFT",
        "message": "Turn left onto <street>Jan van Galenstraat</street>/<roadNumber>s105</roadNumber>",
        "mainAnnouncement": {
          "point": {
            "latitude": 52.3728719,
            "longitude": 4.8591161
          },
          "pointIndex": 83,
          "maneuver": "TURN_LEFT",
          "distanceInMeters": 200
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 52.3741069,
            "longitude": 4.8587304
          },
          "pointIndex": 84,
          "maneuver": "TURN_LEFT",
          "distanceInMeters": 60
        },
        "roadShieldReferences": [
          {
            "reference": "nld-connector",
            "shieldContent": "s105"
          }
        ]
      },
      {
        "routeOffsetInMeters": 3338,
        "travelTimeInSeconds": 672,
        "point": {
          "latitude": 52.37233,
          "longitude": 4.84296
        },
        "pointIndex": 129,
        "instructionType": "TURN",
        "roadNumbers": [
          "A10",
          "E22"
        ],
        "phoneticRoadNumbers": [
          "a.ˈtin",
          "ˌe.tʋe.ən.ˈtʋɪn.təx"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "nl-NL",
          "nl-NL"
        ],
        "countryCode": "NLD",
        "signpostText": "Den Haag",
        "phoneticSignpostText": "dɛn ˈhax",
        "phoneticSignpostTextLanguageCode": "nl-NL",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": -90,
        "possibleCombineWithNext": true,
        "drivingSide": "RIGHT",
        "maneuver": "TURN_LEFT",
        "message": "Turn left onto <roadNumber>A10</roadNumber>/<roadNumber>E22</roadNumber> toward <signpostText>Den Haag</signpostText>",
        "combinedMessage": "Turn left onto <roadNumber>A10</roadNumber>/<roadNumber>E22</roadNumber> toward <signpostText>Den Haag</signpostText> then take the <roadNumber>A10</roadNumber>/<roadNumber>E22</roadNumber> motorway",
        "earlyWarningAnnouncement": {
          "point": {
            "latitude": 52.3732647,
            "longitude": 4.8515733
          },
          "pointIndex": 108,
          "maneuver": "AHEAD_LEFT_TURN",
          "distanceInMeters": 600
        },
        "mainAnnouncement": {
          "point": {
            "latitude": 52.3725274,
            "longitude": 4.8473156
          },
          "pointIndex": 117,
          "maneuver": "TURN_LEFT",
          "distanceInMeters": 300
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 52.3722738,
            "longitude": 4.843993
          },
          "pointIndex": 125,
          "maneuver": "TURN_LEFT",
          "distanceInMeters": 70
        },
        "roadShieldReferences": [
          {
            "reference": "nld-highway",
            "shieldContent": "A10"
          },
          {
            "reference": "european-road",
            "shieldContent": "E22"
          }
        ],
        "signpostRoadShieldReferences": [
          {
            "reference": "nld-connector",
            "shieldContent": "s106"
          }
        ]
      },
      {
        "routeOffsetInMeters": 3961,
        "travelTimeInSeconds": 716,
        "point": {
          "latitude": 52.36767,
          "longitude": 4.84209
        },
        "pointIndex": 150,
        "instructionType": "ROAD_CHANGE",
        "roadNumbers": [
          "A10",
          "E22"
        ],
        "phoneticRoadNumbers": [
          "a.ˈtin",
          "ˌe.tʋe.ən.ˈtʋɪn.təx"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "nl-NL",
          "nl-NL"
        ],
        "countryCode": "NLD",
        "possibleCombineWithNext": false,
        "drivingSide": "RIGHT",
        "maneuver": "ENTER_MOTORWAY",
        "message": "Take the <roadNumber>A10</roadNumber>/<roadNumber>E22</roadNumber> motorway",
        "roadShieldReferences": [
          {
            "reference": "nld-highway",
            "shieldContent": "A10"
          },
          {
            "reference": "european-road",
            "shieldContent": "E22"
          }
        ]
      },
      {
        "routeOffsetInMeters": 6548,
        "travelTimeInSeconds": 842,
        "point": {
          "latitude": 52.34451,
          "longitude": 4.84091
        },
        "pointIndex": 203,
        "instructionType": "TURN",
        "roadNumbers": [
          "A4",
          "E19"
        ],
        "phoneticRoadNumbers": [
          "a.ˈvir",
          "ˌe.ne.ɣən.ˈtin"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "nl-NL",
          "nl-NL"
        ],
        "countryCode": "NLD",
        "signpostText": "Den Haag",
        "phoneticSignpostText": "dɛn ˈhax",
        "phoneticSignpostTextLanguageCode": "nl-NL",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": -45,
        "possibleCombineWithNext": true,
        "drivingSide": "RIGHT",
        "maneuver": "MOTORWAY_EXIT_LEFT",
        "message": "Take the left exit onto <roadNumber>A4</roadNumber>/<roadNumber>E19</roadNumber> toward <signpostText>Den Haag</signpostText>",
        "combinedMessage": "Take the left exit onto <roadNumber>A4</roadNumber>/<roadNumber>E19</roadNumber> toward <signpostText>Den Haag</signpostText> then take the <roadNumber>A4</roadNumber>/<roadNumber>E19</roadNumber> motorway",
        "earlyWarningAnnouncement": {
          "point": {
            "latitude": 52.3623857,
            "longitude": 4.84224
          },
          "pointIndex": 160,
          "maneuver": "AHEAD_EXIT_LEFT",
          "distanceInMeters": 2000
        },
        "mainAnnouncement": {
          "point": {
            "latitude": 52.3516012,
            "longitude": 4.8424198
          },
          "pointIndex": 184,
          "maneuver": "MOTORWAY_EXIT_LEFT",
          "distanceInMeters": 800
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 52.3480957,
            "longitude": 4.8411039
          },
          "pointIndex": 194,
          "maneuver": "MOTORWAY_EXIT_LEFT",
          "distanceInMeters": 400
        },
        "roadShieldReferences": [
          {
            "reference": "nld-highway",
            "shieldContent": "A4"
          },
          {
            "reference": "european-road",
            "shieldContent": "E19"
          }
        ],
        "signpostRoadShieldReferences": [
          {
            "reference": "nld-highway",
            "shieldContent": "A4"
          }
        ]
      },
      {
        "routeOffsetInMeters": 8134,
        "travelTimeInSeconds": 906,
        "point": {
          "latitude": 52.33885,
          "longitude": 4.82532
        },
        "pointIndex": 247,
        "instructionType": "ROAD_CHANGE",
        "roadNumbers": [
          "A4",
          "E19"
        ],
        "phoneticRoadNumbers": [
          "a.ˈvir",
          "ˌe.ne.ɣən.ˈtin"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "nl-NL",
          "nl-NL"
        ],
        "countryCode": "NLD",
        "possibleCombineWithNext": false,
        "drivingSide": "RIGHT",
        "maneuver": "ENTER_MOTORWAY",
        "message": "Take the <roadNumber>A4</roadNumber>/<roadNumber>E19</roadNumber> motorway",
        "roadShieldReferences": [
          {
            "reference": "nld-highway",
            "shieldContent": "A4"
          },
          {
            "reference": "european-road",
            "shieldContent": "E19"
          }
        ]
      },
      {
        "routeOffsetInMeters": 8494,
        "travelTimeInSeconds": 918,
        "point": {
          "latitude": 52.33876,
          "longitude": 4.82003
        },
        "pointIndex": 252,
        "instructionType": "TURN",
        "roadNumbers": [
          "A4",
          "E19"
        ],
        "phoneticRoadNumbers": [
          "a.ˈvir",
          "ˌe.ne.ɣən.ˈtin"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "nl-NL",
          "nl-NL"
        ],
        "countryCode": "NLD",
        "signpostText": "Den Haag",
        "phoneticSignpostText": "dɛn ˈhax",
        "phoneticSignpostTextLanguageCode": "nl-NL",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": 0,
        "possibleCombineWithNext": false,
        "drivingSide": "RIGHT",
        "maneuver": "STRAIGHT",
        "message": "Keep straight on at <roadNumber>A4</roadNumber>/<roadNumber>E19</roadNumber> toward <signpostText>Den Haag</signpostText>",
        "mainAnnouncement": {
          "point": {
            "latitude": 52.3390033,
            "longitude": 4.8317406
          },
          "pointIndex": 230,
          "maneuver": "STRAIGHT",
          "distanceInMeters": 800
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 52.3388152,
            "longitude": 4.823284
          },
          "pointIndex": 248,
          "maneuver": "STRAIGHT",
          "distanceInMeters": 222
        },
        "roadShieldReferences": [
          {
            "reference": "nld-highway",
            "shieldContent": "A4"
          },
          {
            "reference": "european-road",
            "shieldContent": "E19"
          }
        ],
        "signpostRoadShieldReferences": [
          {
            "reference": "nld-highway",
            "shieldContent": "A4"
          },
          {
            "reference": "european-road",
            "shieldContent": "E19"
          }
        ]
      },
      {
        "routeOffsetInMeters": 10098,
        "travelTimeInSeconds": 974,
        "point": {
          "latitude": 52.33181,
          "longitude": 4.80051
        },
        "pointIndex": 283,
        "instructionType": "TURN",
        "roadNumbers": [
          "A4",
          "E19"
        ],
        "phoneticRoadNumbers": [
          "a.ˈvir",
          "ˌe.ne.ɣən.ˈtin"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "nl-NL",
          "nl-NL"
        ],
        "countryCode": "NLD",
        "signpostText": "Den Haag",
        "phoneticSignpostText": "dɛn ˈhax",
        "phoneticSignpostTextLanguageCode": "nl-NL",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": 0,
        "possibleCombineWithNext": false,
        "drivingSide": "RIGHT",
        "maneuver": "STRAIGHT",
        "message": "Keep straight on at <roadNumber>A4</roadNumber>/<roadNumber>E19</roadNumber> toward <signpostText>Den Haag</signpostText>",
        "mainAnnouncement": {
          "point": {
            "latitude": 52.336831,
            "longitude": 4.8089216
          },
          "pointIndex": 268,
          "maneuver": "STRAIGHT",
          "distanceInMeters": 800
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 52.3343348,
            "longitude": 4.8045722
          },
          "pointIndex": 273,
          "maneuver": "STRAIGHT",
          "distanceInMeters": 394
        },
        "roadShieldReferences": [
          {
            "reference": "nld-highway",
            "shieldContent": "A4"
          },
          {
            "reference": "european-road",
            "shieldContent": "E19"
          }
        ],
        "signpostRoadShieldReferences": [
          {
            "reference": "nld-highway",
            "shieldContent": "A4"
          },
          {
            "reference": "european-road",
            "shieldContent": "E19"
          }
        ]
      },
      {
        "routeOffsetInMeters": 10648,
        "travelTimeInSeconds": 992,
        "point": {
          "latitude": 52.32867,
          "longitude": 4.79432
        },
        "pointIndex": 291,
        "instructionType": "DIRECTION_INFO",
        "roadNumbers": [
          "A4",
          "E19"
        ],
        "phoneticRoadNumbers": [
          "a.ˈvir",
          "ˌe.ne.ɣən.ˈtin"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "nl-NL",
          "nl-NL"
        ],
        "countryCode": "NLD",
        "signpostText": "Den Haag",
        "phoneticSignpostText": "dɛn ˈhax",
        "phoneticSignpostTextLanguageCode": "nl-NL",
        "possibleCombineWithNext": false,
        "drivingSide": "RIGHT",
        "maneuver": "FOLLOW",
        "message": "Follow <roadNumber>A4</roadNumber>/<roadNumber>E19</roadNumber> toward <signpostText>Den Haag</signpostText>",
        "mainAnnouncement": {
          "point": {
            "latitude": 52.32916,
            "longitude": 4.7955427
          },
          "pointIndex": 287,
          "maneuver": "FOLLOW",
          "distanceInMeters": 100
        },
        "roadShieldReferences": [
          {
            "reference": "nld-highway",
            "shieldContent": "A4"
          },
          {
            "reference": "european-road",
            "shieldContent": "E19"
          }
        ],
        "signpostRoadShieldReferences": [
          {
            "reference": "nld-highway",
            "shieldContent": "A4"
          },
          {
            "reference": "european-road",
            "shieldContent": "E19"
          }
        ]
      },
      {
        "routeOffsetInMeters": 24944,
        "travelTimeInSeconds": 1530,
        "point": {
          "latitude": 52.23849,
          "longitude": 4.65531
        },
        "pointIndex": 445,
        "instructionType": "TURN",
        "roadNumbers": [
          "A4",
          "E19"
        ],
        "phoneticRoadNumbers": [
          "a.ˈvir",
          "ˌe.ne.ɣən.ˈtin"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "nl-NL",
          "nl-NL"
        ],
        "countryCode": "NLD",
        "signpostText": "Den Haag",
        "phoneticSignpostText": "dɛn ˈhax",
        "phoneticSignpostTextLanguageCode": "nl-NL",
        "junctionType": "BIFURCATION",
        "turnAngleInDecimalDegrees": -45,
        "possibleCombineWithNext": false,
        "drivingSide": "RIGHT",
        "maneuver": "KEEP_LEFT",
        "message": "Keep left at <roadNumber>A4</roadNumber>/<roadNumber>E19</roadNumber> toward <signpostText>Den Haag</signpostText>",
        "earlyWarningAnnouncement": {
          "point": {
            "latitude": 52.252023,
            "longitude": 4.6745954
          },
          "pointIndex": 427,
          "maneuver": "AHEAD_KEEP_LEFT",
          "distanceInMeters": 2000
        },
        "mainAnnouncement": {
          "point": {
            "latitude": 52.2439038,
            "longitude": 4.6630178
          },
          "pointIndex": 436,
          "maneuver": "KEEP_LEFT",
          "distanceInMeters": 800
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 52.2411928,
            "longitude": 4.6591691
          },
          "pointIndex": 438,
          "maneuver": "KEEP_LEFT",
          "distanceInMeters": 400
        },
        "roadShieldReferences": [
          {
            "reference": "nld-highway",
            "shieldContent": "A4"
          },
          {
            "reference": "european-road",
            "shieldContent": "E19"
          }
        ],
        "signpostRoadShieldReferences": [
          {
            "reference": "nld-highway",
            "shieldContent": "A4"
          },
          {
            "reference": "european-road",
            "shieldContent": "E19"
          }
        ]
      },
      {
        "routeOffsetInMeters": 25554,
        "travelTimeInSeconds": 1553,
        "point": {
          "latitude": 52.23428,
          "longitude": 4.64957
        },
        "pointIndex": 449,
        "instructionType": "DIRECTION_INFO",
        "roadNumbers": [
          "A4",
          "E19"
        ],
        "phoneticRoadNumbers": [
          "a.ˈvir",
          "ˌe.ne.ɣən.ˈtin"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "nl-NL",
          "nl-NL"
        ],
        "countryCode": "NLD",
        "signpostText": "Den Haag",
        "phoneticSignpostText": "dɛn ˈhax",
        "phoneticSignpostTextLanguageCode": "nl-NL",
        "possibleCombineWithNext": false,
        "drivingSide": "RIGHT",
        "maneuver": "FOLLOW",
        "message": "Follow <roadNumber>A4</roadNumber>/<roadNumber>E19</roadNumber> toward <signpostText>Den Haag</signpostText>",
        "mainAnnouncement": {
          "point": {
            "latitude": 52.2349735,
            "longitude": 4.650506
          },
          "pointIndex": 449,
          "maneuver": "FOLLOW",
          "distanceInMeters": 100
        },
        "roadShieldReferences": [
          {
            "reference": "nld-highway",
            "shieldContent": "A4"
          },
          {
            "reference": "european-road",
            "shieldContent": "E19"
          }
        ],
        "signpostRoadShieldReferences": [
          {
            "reference": "nld-highway",
            "shieldContent": "A4"
          },
          {
            "reference": "european-road",
            "shieldContent": "E19"
          }
        ]
      },
      {
        "routeOffsetInMeters": 50141,
        "travelTimeInSeconds": 2529,
        "point": {
          "latitude": 52.07774,
          "longitude": 4.40447
        },
        "pointIndex": 718,
        "instructionType": "TURN",
        "roadNumbers": [
          "A12"
        ],
        "phoneticRoadNumbers": [
          "a.ˈtʋalf"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "nl-NL"
        ],
        "exitNumber": "8",
        "countryCode": "NLD",
        "signpostText": "Den Haag",
        "phoneticSignpostText": "dɛn ˈhax",
        "phoneticSignpostTextLanguageCode": "nl-NL",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": 45,
        "possibleCombineWithNext": true,
        "drivingSide": "RIGHT",
        "maneuver": "TAKE_EXIT",
        "message": "Take exit <exitNumber>8</exitNumber> onto <roadNumber>A12</roadNumber> toward <signpostText>Den Haag</signpostText>",
        "combinedMessage": "Take exit <exitNumber>8</exitNumber> onto <roadNumber>A12</roadNumber> toward <signpostText>Den Haag</signpostText> then keep left at <roadNumber>A12</roadNumber> toward <signpostText>Den Haag</signpostText>",
        "earlyWarningAnnouncement": {
          "point": {
            "latitude": 52.0906249,
            "longitude": 4.4246283
          },
          "pointIndex": 700,
          "maneuver": "AHEAD_EXIT",
          "distanceInMeters": 2000
        },
        "mainAnnouncement": {
          "point": {
            "latitude": 52.0833247,
            "longitude": 4.4117642
          },
          "pointIndex": 705,
          "maneuver": "TAKE_EXIT",
          "distanceInMeters": 800
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 52.0805204,
            "longitude": 4.4081154
          },
          "pointIndex": 709,
          "maneuver": "TAKE_EXIT",
          "distanceInMeters": 400
        },
        "roadShieldReferences": [
          {
            "reference": "nld-highway",
            "shieldContent": "A12"
          }
        ],
        "signpostRoadShieldReferences": [
          {
            "reference": "nld-highway",
            "shieldContent": "A12"
          },
          {
            "reference": "nld-primary",
            "shieldContent": "N14"
          }
        ]
      },
      {
        "routeOffsetInMeters": 50905,
        "travelTimeInSeconds": 2560,
        "point": {
          "latitude": 52.07385,
          "longitude": 4.39533
        },
        "pointIndex": 731,
        "instructionType": "TURN",
        "roadNumbers": [
          "A12"
        ],
        "phoneticRoadNumbers": [
          "a.ˈtʋalf"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "nl-NL"
        ],
        "countryCode": "NLD",
        "signpostText": "Den Haag",
        "phoneticSignpostText": "dɛn ˈhax",
        "phoneticSignpostTextLanguageCode": "nl-NL",
        "junctionType": "BIFURCATION",
        "turnAngleInDecimalDegrees": -45,
        "possibleCombineWithNext": false,
        "drivingSide": "RIGHT",
        "maneuver": "KEEP_LEFT",
        "message": "Keep left at <roadNumber>A12</roadNumber> toward <signpostText>Den Haag</signpostText>",
        "mainAnnouncement": {
          "point": {
            "latitude": 52.0773736,
            "longitude": 4.4037541
          },
          "pointIndex": 719,
          "maneuver": "KEEP_LEFT",
          "distanceInMeters": 700
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 52.0757002,
            "longitude": 4.4003413
          },
          "pointIndex": 724,
          "maneuver": "KEEP_LEFT",
          "distanceInMeters": 400
        },
        "roadShieldReferences": [
          {
            "reference": "nld-highway",
            "shieldContent": "A12"
          }
        ],
        "signpostRoadShieldReferences": [
          {
            "reference": "european-road",
            "shieldContent": "E30"
          },
          {
            "reference": "nld-highway",
            "shieldContent": "A12"
          }
        ]
      },
      {
        "routeOffsetInMeters": 51979,
        "travelTimeInSeconds": 2603,
        "point": {
          "latitude": 52.06831,
          "longitude": 4.38255
        },
        "pointIndex": 752,
        "instructionType": "TURN",
        "roadNumbers": [
          "A12"
        ],
        "phoneticRoadNumbers": [
          "a.ˈtʋalf"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "nl-NL"
        ],
        "countryCode": "NLD",
        "signpostText": "Den Haag",
        "phoneticSignpostText": "dɛn ˈhax",
        "phoneticSignpostTextLanguageCode": "nl-NL",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": 45,
        "possibleCombineWithNext": true,
        "drivingSide": "RIGHT",
        "maneuver": "TAKE_EXIT",
        "message": "Take the exit onto <roadNumber>A12</roadNumber> toward <signpostText>Den Haag</signpostText>",
        "combinedMessage": "Take the exit onto <roadNumber>A12</roadNumber> toward <signpostText>Den Haag</signpostText> then keep right at <roadNumber>A12</roadNumber> toward <signpostText>Den Haag</signpostText>",
        "mainAnnouncement": {
          "point": {
            "latitude": 52.0725401,
            "longitude": 4.3919482
          },
          "pointIndex": 735,
          "maneuver": "TAKE_EXIT",
          "distanceInMeters": 800
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 52.0705651,
            "longitude": 4.3870596
          },
          "pointIndex": 744,
          "maneuver": "TAKE_EXIT",
          "distanceInMeters": 400
        },
        "roadShieldReferences": [
          {
            "reference": "nld-highway",
            "shieldContent": "A12"
          }
        ],
        "signpostRoadShieldReferences": [
          {
            "reference": "nld-highway",
            "shieldContent": "A12"
          }
        ]
      },
      {
        "routeOffsetInMeters": 52362,
        "travelTimeInSeconds": 2618,
        "point": {
          "latitude": 52.0658,
          "longitude": 4.37874
        },
        "pointIndex": 758,
        "instructionType": "TURN",
        "roadNumbers": [
          "A12"
        ],
        "phoneticRoadNumbers": [
          "a.ˈtʋalf"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "nl-NL"
        ],
        "countryCode": "NLD",
        "signpostText": "Den Haag",
        "phoneticSignpostText": "dɛn ˈhax",
        "phoneticSignpostTextLanguageCode": "nl-NL",
        "junctionType": "BIFURCATION",
        "turnAngleInDecimalDegrees": 45,
        "possibleCombineWithNext": true,
        "drivingSide": "RIGHT",
        "maneuver": "KEEP_RIGHT",
        "message": "Keep right at <roadNumber>A12</roadNumber> toward <signpostText>Den Haag</signpostText>",
        "combinedMessage": "Keep right at <roadNumber>A12</roadNumber> toward <signpostText>Den Haag</signpostText> then take the <roadNumber>A12</roadNumber> motorway",
        "mainAnnouncement": {
          "point": {
            "latitude": 52.0678023,
            "longitude": 4.3816731
          },
          "pointIndex": 753,
          "maneuver": "KEEP_RIGHT",
          "distanceInMeters": 300
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 52.066489,
            "longitude": 4.3796758
          },
          "pointIndex": 755,
          "maneuver": "KEEP_RIGHT",
          "distanceInMeters": 100
        },
        "roadShieldReferences": [
          {
            "reference": "nld-highway",
            "shieldContent": "A12"
          }
        ]
      },
      {
        "routeOffsetInMeters": 53231,
        "travelTimeInSeconds": 2658,
        "point": {
          "latitude": 52.0641,
          "longitude": 4.36785
        },
        "pointIndex": 779,
        "instructionType": "ROAD_CHANGE",
        "roadNumbers": [
          "A12"
        ],
        "phoneticRoadNumbers": [
          "a.ˈtʋalf"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "nl-NL"
        ],
        "countryCode": "NLD",
        "possibleCombineWithNext": false,
        "drivingSide": "RIGHT",
        "maneuver": "ENTER_MOTORWAY",
        "message": "Take the <roadNumber>A12</roadNumber> motorway",
        "roadShieldReferences": [
          {
            "reference": "nld-highway",
            "shieldContent": "A12"
          }
        ]
      },
      {
        "routeOffsetInMeters": 56050,
        "travelTimeInSeconds": 2793,
        "point": {
          "latitude": 52.07851,
          "longitude": 4.33472
        },
        "pointIndex": 833,
        "instructionType": "TURN",
        "exitNumber": "2",
        "street": "Prins Clauslaan",
        "phoneticStreet": "ˈprɪns ˈklɑ⁀us.lan",
        "phoneticStreetLanguageCode": "nl-NL",
        "countryCode": "NLD",
        "signpostText": "route",
        "phoneticSignpostText": "ˈru.tə",
        "phoneticSignpostTextLanguageCode": "nl-NL",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": 45,
        "possibleCombineWithNext": true,
        "drivingSide": "RIGHT",
        "maneuver": "TAKE_EXIT",
        "message": "Take exit <exitNumber>2</exitNumber> onto <street>Prins Clauslaan</street> toward <signpostText>route</signpostText>",
        "combinedMessage": "Take exit <exitNumber>2</exitNumber> onto <street>Prins Clauslaan</street> toward <signpostText>route</signpostText> then keep straight on at <street>Prins Clauslaan</street> toward <signpostText>Scheveningen</signpostText>",
        "earlyWarningAnnouncement": {
          "point": {
            "latitude": 52.0677532,
            "longitude": 4.3574842
          },
          "pointIndex": 796,
          "maneuver": "AHEAD_EXIT",
          "distanceInMeters": 2000
        },
        "mainAnnouncement": {
          "point": {
            "latitude": 52.0731667,
            "longitude": 4.3423712
          },
          "pointIndex": 809,
          "maneuver": "TAKE_EXIT",
          "distanceInMeters": 800
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 52.0760927,
            "longitude": 4.3374671
          },
          "pointIndex": 821,
          "maneuver": "TAKE_EXIT",
          "distanceInMeters": 328
        }
      },
      {
        "routeOffsetInMeters": 56423,
        "travelTimeInSeconds": 2824,
        "point": {
          "latitude": 52.08105,
          "longitude": 4.3312
        },
        "pointIndex": 843,
        "instructionType": "TURN",
        "street": "Prins Clauslaan",
        "phoneticStreet": "ˈprɪns ˈklɑ⁀us.lan",
        "phoneticStreetLanguageCode": "nl-NL",
        "countryCode": "NLD",
        "signpostText": "Scheveningen",
        "phoneticSignpostText": "ˈsxe.və.nɪŋ.ən",
        "phoneticSignpostTextLanguageCode": "nl-NL",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": 0,
        "possibleCombineWithNext": false,
        "drivingSide": "RIGHT",
        "maneuver": "STRAIGHT",
        "message": "Keep straight on at <street>Prins Clauslaan</street> toward <signpostText>Scheveningen</signpostText>",
        "mainAnnouncement": {
          "point": {
            "latitude": 52.0790773,
            "longitude": 4.3341757
          },
          "pointIndex": 834,
          "maneuver": "STRAIGHT",
          "distanceInMeters": 300
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 52.0804356,
            "longitude": 4.3322857
          },
          "pointIndex": 839,
          "maneuver": "STRAIGHT",
          "distanceInMeters": 100
        }
      },
      {
        "routeOffsetInMeters": 56863,
        "travelTimeInSeconds": 2956,
        "point": {
          "latitude": 52.08398,
          "longitude": 4.32698
        },
        "pointIndex": 859,
        "instructionType": "TURN",
        "street": "Bezuidenhoutseweg",
        "phoneticStreet": "bə.ˈzœ⁀y.dən.hɑ⁀ut.sə.ˌʋɛx",
        "phoneticStreetLanguageCode": "nl-NL",
        "countryCode": "NLD",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": -90,
        "possibleCombineWithNext": true,
        "drivingSide": "RIGHT",
        "maneuver": "TURN_LEFT",
        "message": "Turn left onto <street>Bezuidenhoutseweg</street>",
        "combinedMessage": "Turn left onto <street>Bezuidenhoutseweg</street> then keep left at <street>Bezuidenhoutseweg</street>",
        "mainAnnouncement": {
          "point": {
            "latitude": 52.0825115,
            "longitude": 4.3286554
          },
          "pointIndex": 852,
          "maneuver": "TURN_LEFT",
          "distanceInMeters": 200
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 52.0835358,
            "longitude": 4.3274801
          },
          "pointIndex": 858,
          "maneuver": "TURN_LEFT",
          "distanceInMeters": 60
        }
      },
      {
        "routeOffsetInMeters": 57105,
        "travelTimeInSeconds": 2993,
        "point": {
          "latitude": 52.08289,
          "longitude": 4.32405
        },
        "pointIndex": 869,
        "instructionType": "TURN",
        "street": "Bezuidenhoutseweg",
        "phoneticStreet": "bə.ˈzœ⁀y.dən.hɑ⁀ut.sə.ˌʋɛx",
        "phoneticStreetLanguageCode": "nl-NL",
        "countryCode": "NLD",
        "junctionType": "BIFURCATION",
        "turnAngleInDecimalDegrees": -45,
        "possibleCombineWithNext": false,
        "drivingSide": "RIGHT",
        "maneuver": "KEEP_LEFT",
        "message": "Keep left at <street>Bezuidenhoutseweg</street>",
        "mainAnnouncement": {
          "point": {
            "latitude": 52.0833454,
            "longitude": 4.3253049
          },
          "pointIndex": 865,
          "maneuver": "KEEP_LEFT",
          "distanceInMeters": 100
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 52.0829828,
            "longitude": 4.3242993
          },
          "pointIndex": 868,
          "maneuver": "KEEP_LEFT",
          "distanceInMeters": 20
        }
      },
      {
        "routeOffsetInMeters": 57580,
        "travelTimeInSeconds": 3061,
        "point": {
          "latitude": 52.0835,
          "longitude": 4.3184
        },
        "pointIndex": 888,
        "instructionType": "TURN",
        "street": "Korte Voorhout",
        "phoneticStreet": "ˈkɔr.tə ˈvor.hɑ⁀ut",
        "phoneticStreetLanguageCode": "nl-NL",
        "countryCode": "NLD",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": -90,
        "possibleCombineWithNext": false,
        "drivingSide": "RIGHT",
        "maneuver": "TURN_LEFT",
        "message": "Turn left onto <street>Korte Voorhout</street>",
        "earlyWarningAnnouncement": {
          "point": {
            "latitude": 52.0826284,
            "longitude": 4.3234704
          },
          "pointIndex": 871,
          "maneuver": "AHEAD_LEFT_TURN",
          "distanceInMeters": 425
        },
        "mainAnnouncement": {
          "point": {
            "latitude": 52.0820378,
            "longitude": 4.3219294
          },
          "pointIndex": 876,
          "maneuver": "TURN_LEFT",
          "distanceInMeters": 300
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 52.0831627,
            "longitude": 4.3192635
          },
          "pointIndex": 886,
          "maneuver": "TURN_LEFT",
          "distanceInMeters": 70
        }
      },
      {
        "routeOffsetInMeters": 58276,
        "travelTimeInSeconds": 3182,
        "point": {
          "latitude": 52.08019,
          "longitude": 4.31014
        },
        "pointIndex": 920,
        "instructionType": "LOCATION_ARRIVAL",
        "street": "Lange Vijverberg",
        "phoneticStreet": "ˈlɑŋ.ə ˈvɛ⁀i.vər.bɛrx",
        "phoneticStreetLanguageCode": "nl-NL",
        "countryCode": "NLD",
        "possibleCombineWithNext": false,
        "drivingSide": "RIGHT",
        "maneuver": "ARRIVE",
        "message": "You have arrived at <street>Lange Vijverberg</street>",
        "mainAnnouncement": {
          "point": {
            "latitude": 52.0811579,
            "longitude": 4.312562
          },
          "pointIndex": 912,
          "maneuver": "ARRIVE",
          "distanceInMeters": 200
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 52.0803815,
            "longitude": 4.3104423
          },
          "pointIndex": 916,
          "maneuver": "ARRIVE",
          "distanceInMeters": 30
        }
      }
    ],
    "instructionGroups": [
      {
        "firstInstructionIndex": 0,
        "lastInstructionIndex": 5,
        "groupMessage": "Leave from <street>Nassaukade</street>. Take the <roadNumber>s100</roadNumber> then follow <street>Jan van Galenstraat</street>/<roadNumber>s105</roadNumber>. Continue on <roadNumber>A10</roadNumber>/<roadNumber>E22</roadNumber> toward <signpostText>Den Haag</signpostText>",
        "groupLengthInMeters": 6548
      },
      {
        "firstInstructionIndex": 6,
        "lastInstructionIndex": 12,
        "groupMessage": "Take the <roadNumber>A4</roadNumber>/<roadNumber>E19</roadNumber> toward <signpostText>Den Haag</signpostText>",
        "groupLengthInMeters": 43593
      },
      {
        "firstInstructionIndex": 13,
        "lastInstructionIndex": 17,
        "groupMessage": "Take the <roadNumber>A12</roadNumber> toward <signpostText>Den Haag</signpostText>",
        "groupLengthInMeters": 5909
      },
      {
        "firstInstructionIndex": 18,
        "lastInstructionIndex": 23,
        "groupMessage": "Take the <street>Prins Clauslaan</street>, <street>Bezuidenhoutseweg</street>, <street>Korte Voorhout</street> toward <signpostText>route</signpostText>, <signpostText>Scheveningen</signpostText>. Continue to your destination at <street>Lange Vijverberg</street>",
        "groupLengthInMeters": 2226
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
      "pointIndex": 6,
      "travelTimeInSeconds": 29,
      "distanceInMeters": 129
    },
    {
      "pointIndex": 14,
      "travelTimeInSeconds": 51,
      "distanceInMeters": 271
    },
    {
      "pointIndex": 20,
      "travelTimeInSeconds": 92,
      "distanceInMeters": 391
    },
    {
      "pointIndex": 27,
      "travelTimeInSeconds": 138,
      "distanceInMeters": 688
    },
    {
      "pointIndex": 32,
      "travelTimeInSeconds": 174,
      "distanceInMeters": 762
    },
    {
      "pointIndex": 34,
      "travelTimeInSeconds": 193,
      "distanceInMeters": 796
    },
    {
      "pointIndex": 36,
      "travelTimeInSeconds": 205,
      "distanceInMeters": 815
    },
    {
      "pointIndex": 45,
      "travelTimeInSeconds": 225,
      "distanceInMeters": 989
    },
    {
      "pointIndex": 47,
      "travelTimeInSeconds": 278,
      "distanceInMeters": 1079
    },
    {
      "pointIndex": 55,
      "travelTimeInSeconds": 300,
      "distanceInMeters": 1263
    },
    {
      "pointIndex": 61,
      "travelTimeInSeconds": 325,
      "distanceInMeters": 1403
    },
    {
      "pointIndex": 77,
      "travelTimeInSeconds": 381,
      "distanceInMeters": 1850
    },
    {
      "pointIndex": 87,
      "travelTimeInSeconds": 454,
      "distanceInMeters": 2229
    },
    {
      "pointIndex": 88,
      "travelTimeInSeconds": 468,
      "distanceInMeters": 2241
    },
    {
      "pointIndex": 108,
      "travelTimeInSeconds": 520,
      "distanceInMeters": 2690
    },
    {
      "pointIndex": 112,
      "travelTimeInSeconds": 582,
      "distanceInMeters": 2886
    },
    {
      "pointIndex": 119,
      "travelTimeInSeconds": 623,
      "distanceInMeters": 3078
    },
    {
      "pointIndex": 125,
      "travelTimeInSeconds": 638,
      "distanceInMeters": 3259
    },
    {
      "pointIndex": 130,
      "travelTimeInSeconds": 675,
      "distanceInMeters": 3355
    },
    {
      "pointIndex": 151,
      "travelTimeInSeconds": 718,
      "distanceInMeters": 3993
    },
    {
      "pointIndex": 223,
      "travelTimeInSeconds": 870,
      "distanceInMeters": 7236
    },
    {
      "pointIndex": 356,
      "travelTimeInSeconds": 1151,
      "distanceInMeters": 15259
    },
    {
      "pointIndex": 399,
      "travelTimeInSeconds": 1281,
      "distanceInMeters": 18820
    },
    {
      "pointIndex": 523,
      "travelTimeInSeconds": 1834,
      "distanceInMeters": 32697
    },
    {
      "pointIndex": 642,
      "travelTimeInSeconds": 2156,
      "distanceInMeters": 40793
    },
    {
      "pointIndex": 689,
      "travelTimeInSeconds": 2352,
      "distanceInMeters": 45395
    },
    {
      "pointIndex": 760,
      "travelTimeInSeconds": 2621,
      "distanceInMeters": 52414
    },
    {
      "pointIndex": 841,
      "travelTimeInSeconds": 2810,
      "distanceInMeters": 56362
    },
    {
      "pointIndex": 843,
      "travelTimeInSeconds": 2824,
      "distanceInMeters": 56423
    },
    {
      "pointIndex": 844,
      "travelTimeInSeconds": 2846,
      "distanceInMeters": 56458
    },
    {
      "pointIndex": 850,
      "travelTimeInSeconds": 2868,
      "distanceInMeters": 56614
    },
    {
      "pointIndex": 853,
      "travelTimeInSeconds": 2883,
      "distanceInMeters": 56668
    },
    {
      "pointIndex": 857,
      "travelTimeInSeconds": 2901,
      "distanceInMeters": 56768
    },
    {
      "pointIndex": 861,
      "travelTimeInSeconds": 2968,
      "distanceInMeters": 56884
    },
    {
      "pointIndex": 881,
      "travelTimeInSeconds": 3010,
      "distanceInMeters": 57316
    },
    {
      "pointIndex": 886,
      "travelTimeInSeconds": 3021,
      "distanceInMeters": 57466
    },
    {
      "pointIndex": 889,
      "travelTimeInSeconds": 3062,
      "distanceInMeters": 57586
    },
    {
      "pointIndex": 899,
      "travelTimeInSeconds": 3106,
      "distanceInMeters": 57851
    },
    {
      "pointIndex": 912,
      "travelTimeInSeconds": 3139,
      "distanceInMeters": 58014
    },
    {
      "pointIndex": 919,
      "travelTimeInSeconds": 3178,
      "distanceInMeters": 58272
    },
    {
      "pointIndex": 920,
      "travelTimeInSeconds": 3182,
      "distanceInMeters": 58276
    }
  ]
};

var longRoute = {
  "summary": {
    "lengthInMeters": 56565,
    "travelTimeInSeconds": 3489,
    "trafficDelayInSeconds": 0,
    "trafficLengthInMeters": 0,
    "departureTime": "2023-12-07T14:21:13+01:00",
    "arrivalTime": "2023-12-07T15:19:22+01:00",
    "deviationDistance": 24944,
    "deviationTime": 1530,
    "deviationPoint": {
      "latitude": 52.2384855,
      "longitude": 4.6553117
    }
  },
  "legs": [
    {
      "summary": {
        "lengthInMeters": 56565,
        "travelTimeInSeconds": 3489,
        "trafficDelayInSeconds": 0,
        "trafficLengthInMeters": 0,
        "departureTime": "2023-12-07T14:21:13+01:00",
        "arrivalTime": "2023-12-07T15:19:22+01:00"
      },
      "points": [
        {
          "latitude": 52.3653473,
          "longitude": 4.8786175
        },
        {
          "latitude": 52.3654264,
          "longitude": 4.8785895
        },
        {
          "latitude": 52.365641,
          "longitude": 4.8784393
        },
        {
          "latitude": 52.3657724,
          "longitude": 4.8782918
        },
        {
          "latitude": 52.3660299,
          "longitude": 4.8779297
        },
        {
          "latitude": 52.3660836,
          "longitude": 4.8778492
        },
        {
          "latitude": 52.3662794,
          "longitude": 4.8775408
        },
        {
          "latitude": 52.3664001,
          "longitude": 4.8773772
        },
        {
          "latitude": 52.3665181,
          "longitude": 4.8772484
        },
        {
          "latitude": 52.3666066,
          "longitude": 4.877176
        },
        {
          "latitude": 52.3666844,
          "longitude": 4.8771116
        },
        {
          "latitude": 52.3668051,
          "longitude": 4.8770124
        },
        {
          "latitude": 52.3670599,
          "longitude": 4.8769024
        },
        {
          "latitude": 52.3672691,
          "longitude": 4.8768568
        },
        {
          "latitude": 52.3674434,
          "longitude": 4.8768595
        },
        {
          "latitude": 52.3676848,
          "longitude": 4.87683
        },
        {
          "latitude": 52.3678485,
          "longitude": 4.8767817
        },
        {
          "latitude": 52.368004,
          "longitude": 4.8766986
        },
        {
          "latitude": 52.3682401,
          "longitude": 4.8764706
        },
        {
          "latitude": 52.3683259,
          "longitude": 4.8763499
        },
        {
          "latitude": 52.3684117,
          "longitude": 4.8762184
        },
        {
          "latitude": 52.3686048,
          "longitude": 4.8758939
        },
        {
          "latitude": 52.3688623,
          "longitude": 4.8755586
        },
        {
          "latitude": 52.3691279,
          "longitude": 4.8753172
        },
        {
          "latitude": 52.3693559,
          "longitude": 4.8751697
        },
        {
          "latitude": 52.3698843,
          "longitude": 4.8749149
        },
        {
          "latitude": 52.3699674,
          "longitude": 4.8748693
        },
        {
          "latitude": 52.3708069,
          "longitude": 4.8745045
        },
        {
          "latitude": 52.3711556,
          "longitude": 4.874357
        },
        {
          "latitude": 52.3712656,
          "longitude": 4.8743597
        },
        {
          "latitude": 52.371271,
          "longitude": 4.8743597
        },
        {
          "latitude": 52.3713756,
          "longitude": 4.8743275
        },
        {
          "latitude": 52.3714587,
          "longitude": 4.8742899
        },
        {
          "latitude": 52.3715499,
          "longitude": 4.8742577
        },
        {
          "latitude": 52.3717564,
          "longitude": 4.8741639
        },
        {
          "latitude": 52.3718557,
          "longitude": 4.8741236
        },
        {
          "latitude": 52.3718289,
          "longitude": 4.874011
        },
        {
          "latitude": 52.3717377,
          "longitude": 4.8736328
        },
        {
          "latitude": 52.3716491,
          "longitude": 4.8732251
        },
        {
          "latitude": 52.3715714,
          "longitude": 4.8728845
        },
        {
          "latitude": 52.3715231,
          "longitude": 4.8726779
        },
        {
          "latitude": 52.3714748,
          "longitude": 4.8724848
        },
        {
          "latitude": 52.3714614,
          "longitude": 4.8724258
        },
        {
          "latitude": 52.3713648,
          "longitude": 4.8719993
        },
        {
          "latitude": 52.371338,
          "longitude": 4.871884
        },
        {
          "latitude": 52.371279,
          "longitude": 4.8716211
        },
        {
          "latitude": 52.3710349,
          "longitude": 4.8705509
        },
        {
          "latitude": 52.370992,
          "longitude": 4.8703873
        },
        {
          "latitude": 52.3707613,
          "longitude": 4.8693708
        },
        {
          "latitude": 52.3707238,
          "longitude": 4.8692018
        },
        {
          "latitude": 52.370635299999996,
          "longitude": 4.868829
        },
        {
          "latitude": 52.3705816,
          "longitude": 4.8685446
        },
        {
          "latitude": 52.3705575,
          "longitude": 4.8684561
        },
        {
          "latitude": 52.3704743,
          "longitude": 4.8680645
        },
        {
          "latitude": 52.3704475,
          "longitude": 4.8679626
        },
        {
          "latitude": 52.370418,
          "longitude": 4.8678392
        },
        {
          "latitude": 52.3702678,
          "longitude": 4.8671392
        },
        {
          "latitude": 52.3701337,
          "longitude": 4.8665518
        },
        {
          "latitude": 52.3701069,
          "longitude": 4.866415
        },
        {
          "latitude": 52.3700774,
          "longitude": 4.8662835
        },
        {
          "latitude": 52.3700532,
          "longitude": 4.866077
        },
        {
          "latitude": 52.3700425,
          "longitude": 4.8659
        },
        {
          "latitude": 52.3700505,
          "longitude": 4.8655567
        },
        {
          "latitude": 52.3700827,
          "longitude": 4.8653528
        },
        {
          "latitude": 52.3701042,
          "longitude": 4.865275
        },
        {
          "latitude": 52.3701283,
          "longitude": 4.8651999
        },
        {
          "latitude": 52.3701793,
          "longitude": 4.8650631
        },
        {
          "latitude": 52.3702276,
          "longitude": 4.8649049
        },
        {
          "latitude": 52.3702893,
          "longitude": 4.8647252
        },
        {
          "latitude": 52.3705602,
          "longitude": 4.8640546
        },
        {
          "latitude": 52.3707667,
          "longitude": 4.8636067
        },
        {
          "latitude": 52.3708606,
          "longitude": 4.8633626
        },
        {
          "latitude": 52.3709142,
          "longitude": 4.8631427
        },
        {
          "latitude": 52.3710939,
          "longitude": 4.8622066
        },
        {
          "latitude": 52.3712146,
          "longitude": 4.8615441
        },
        {
          "latitude": 52.3713273,
          "longitude": 4.8610452
        },
        {
          "latitude": 52.3713675,
          "longitude": 4.8608708
        },
        {
          "latitude": 52.3715553,
          "longitude": 4.8599267
        },
        {
          "latitude": 52.371558,
          "longitude": 4.8597202
        },
        {
          "latitude": 52.3715499,
          "longitude": 4.8596075
        },
        {
          "latitude": 52.3716921,
          "longitude": 4.8594922
        },
        {
          "latitude": 52.371743,
          "longitude": 4.8594654
        },
        {
          "latitude": 52.3719308,
          "longitude": 4.8593983
        },
        {
          "latitude": 52.3722795,
          "longitude": 4.8592883
        },
        {
          "latitude": 52.3732853,
          "longitude": 4.858996
        },
        {
          "latitude": 52.3745298,
          "longitude": 4.8585936
        },
        {
          "latitude": 52.3746371,
          "longitude": 4.8585615
        },
        {
          "latitude": 52.3746935,
          "longitude": 4.8585373
        },
        {
          "latitude": 52.3746827,
          "longitude": 4.8583576
        },
        {
          "latitude": 52.3746398,
          "longitude": 4.8578373
        },
        {
          "latitude": 52.3746237,
          "longitude": 4.8576629
        },
        {
          "latitude": 52.3745808,
          "longitude": 4.8573625
        },
        {
          "latitude": 52.3744547,
          "longitude": 4.8562199
        },
        {
          "latitude": 52.3744226,
          "longitude": 4.855957
        },
        {
          "latitude": 52.3744145,
          "longitude": 4.8558846
        },
        {
          "latitude": 52.3744065,
          "longitude": 4.8557907
        },
        {
          "latitude": 52.3744011,
          "longitude": 4.8557103
        },
        {
          "latitude": 52.3743662,
          "longitude": 4.8553911
        },
        {
          "latitude": 52.3743582,
          "longitude": 4.8553187
        },
        {
          "latitude": 52.3743474,
          "longitude": 4.8552087
        },
        {
          "latitude": 52.3742911,
          "longitude": 4.8549217
        },
        {
          "latitude": 52.3742026,
          "longitude": 4.8546508
        },
        {
          "latitude": 52.3741463,
          "longitude": 4.8545757
        },
        {
          "latitude": 52.3741168,
          "longitude": 4.8544979
        },
        {
          "latitude": 52.373583000000004,
          "longitude": 4.8532024
        },
        {
          "latitude": 52.3734704,
          "longitude": 4.8528242
        },
        {
          "latitude": 52.3733926,
          "longitude": 4.8524085
        },
        {
          "latitude": 52.3733819,
          "longitude": 4.8523334
        },
        {
          "latitude": 52.3733899,
          "longitude": 4.8522395
        },
        {
          "latitude": 52.3731136,
          "longitude": 4.8507696
        },
        {
          "latitude": 52.3729715,
          "longitude": 4.8500642
        },
        {
          "latitude": 52.3729447,
          "longitude": 4.8499382
        },
        {
          "latitude": 52.3728749,
          "longitude": 4.8494983
        },
        {
          "latitude": 52.3728508,
          "longitude": 4.8493534
        },
        {
          "latitude": 52.3727864,
          "longitude": 4.8489538
        },
        {
          "latitude": 52.3727757,
          "longitude": 4.8488626
        },
        {
          "latitude": 52.3727623,
          "longitude": 4.848758
        },
        {
          "latitude": 52.3726201,
          "longitude": 4.8478702
        },
        {
          "latitude": 52.3724699,
          "longitude": 4.8469716
        },
        {
          "latitude": 52.3724404,
          "longitude": 4.8467436
        },
        {
          "latitude": 52.3723787,
          "longitude": 4.8462179
        },
        {
          "latitude": 52.3723277,
          "longitude": 4.8458236
        },
        {
          "latitude": 52.3722929,
          "longitude": 4.8454508
        },
        {
          "latitude": 52.3722741,
          "longitude": 4.845027
        },
        {
          "latitude": 52.3722661,
          "longitude": 4.8445174
        },
        {
          "latitude": 52.3722714,
          "longitude": 4.8441258
        },
        {
          "latitude": 52.3722875,
          "longitude": 4.8432568
        },
        {
          "latitude": 52.3723009,
          "longitude": 4.8431388
        },
        {
          "latitude": 52.372309,
          "longitude": 4.8430637
        },
        {
          "latitude": 52.3723277,
          "longitude": 4.8429644
        },
        {
          "latitude": 52.3723814,
          "longitude": 4.8427257
        },
        {
          "latitude": 52.372427,
          "longitude": 4.8425326
        },
        {
          "latitude": 52.3724297,
          "longitude": 4.8425031
        },
        {
          "latitude": 52.3724538,
          "longitude": 4.8423743
        },
        {
          "latitude": 52.3724619,
          "longitude": 4.8422804
        },
        {
          "latitude": 52.3724779,
          "longitude": 4.8420525
        },
        {
          "latitude": 52.3724779,
          "longitude": 4.8418754
        },
        {
          "latitude": 52.3724082,
          "longitude": 4.8416984
        },
        {
          "latitude": 52.3723572,
          "longitude": 4.8416287
        },
        {
          "latitude": 52.3722902,
          "longitude": 4.841567
        },
        {
          "latitude": 52.3720703,
          "longitude": 4.8415563
        },
        {
          "latitude": 52.3716599,
          "longitude": 4.8415804
        },
        {
          "latitude": 52.369954,
          "longitude": 4.841795
        },
        {
          "latitude": 52.3695973,
          "longitude": 4.8418164
        },
        {
          "latitude": 52.3695168,
          "longitude": 4.8418245
        },
        {
          "latitude": 52.3694605,
          "longitude": 4.8418245
        },
        {
          "latitude": 52.3692808,
          "longitude": 4.8418191
        },
        {
          "latitude": 52.3689857,
          "longitude": 4.8418164
        },
        {
          "latitude": 52.3684332,
          "longitude": 4.8418969
        },
        {
          "latitude": 52.3681328,
          "longitude": 4.8419532
        },
        {
          "latitude": 52.3676687,
          "longitude": 4.84209
        },
        {
          "latitude": 52.3673818,
          "longitude": 4.8420954
        },
        {
          "latitude": 52.3665208,
          "longitude": 4.8421168
        },
        {
          "latitude": 52.3658904,
          "longitude": 4.8421356
        },
        {
          "latitude": 52.3654479,
          "longitude": 4.842149
        },
        {
          "latitude": 52.3647907,
          "longitude": 4.8421705
        },
        {
          "latitude": 52.3641685,
          "longitude": 4.8421893
        },
        {
          "latitude": 52.3641121,
          "longitude": 4.8421919
        },
        {
          "latitude": 52.3633906,
          "longitude": 4.8422107
        },
        {
          "latitude": 52.3631653,
          "longitude": 4.8422188
        },
        {
          "latitude": 52.3629695,
          "longitude": 4.8422214
        },
        {
          "latitude": 52.361784,
          "longitude": 4.842259
        },
        {
          "latitude": 52.3614809,
          "longitude": 4.8422697
        },
        {
          "latitude": 52.3608398,
          "longitude": 4.8422858
        },
        {
          "latitude": 52.3607057,
          "longitude": 4.8422885
        },
        {
          "latitude": 52.3593459,
          "longitude": 4.8423287
        },
        {
          "latitude": 52.3582596,
          "longitude": 4.8423636
        },
        {
          "latitude": 52.3577178,
          "longitude": 4.8423797
        },
        {
          "latitude": 52.3563069,
          "longitude": 4.8424146
        },
        {
          "latitude": 52.3561567,
          "longitude": 4.8424226
        },
        {
          "latitude": 52.3560655,
          "longitude": 4.8424253
        },
        {
          "latitude": 52.3558536,
          "longitude": 4.842428
        },
        {
          "latitude": 52.3556444,
          "longitude": 4.8424333
        },
        {
          "latitude": 52.3547834,
          "longitude": 4.8424575
        },
        {
          "latitude": 52.3542926,
          "longitude": 4.8424762
        },
        {
          "latitude": 52.3540351,
          "longitude": 4.8424897
        },
        {
          "latitude": 52.3538017,
          "longitude": 4.842487
        },
        {
          "latitude": 52.3528281,
          "longitude": 4.8424789
        },
        {
          "latitude": 52.352348,
          "longitude": 4.8424816
        },
        {
          "latitude": 52.3522165,
          "longitude": 4.8424789
        },
        {
          "latitude": 52.3520529,
          "longitude": 4.8424709
        },
        {
          "latitude": 52.3519966,
          "longitude": 4.8424602
        },
        {
          "latitude": 52.3519456,
          "longitude": 4.8424548
        },
        {
          "latitude": 52.3519,
          "longitude": 4.8424494
        },
        {
          "latitude": 52.3516184,
          "longitude": 4.8424226
        },
        {
          "latitude": 52.3514897,
          "longitude": 4.8424011
        },
        {
          "latitude": 52.3513609,
          "longitude": 4.8423797
        },
        {
          "latitude": 52.350972,
          "longitude": 4.8422858
        },
        {
          "latitude": 52.3507547,
          "longitude": 4.8422214
        },
        {
          "latitude": 52.3501298,
          "longitude": 4.8419854
        },
        {
          "latitude": 52.3500574,
          "longitude": 4.8419532
        },
        {
          "latitude": 52.3492312,
          "longitude": 4.8415697
        },
        {
          "latitude": 52.3487699,
          "longitude": 4.8413524
        },
        {
          "latitude": 52.34855,
          "longitude": 4.8412585
        },
        {
          "latitude": 52.3484856,
          "longitude": 4.8412344
        },
        {
          "latitude": 52.3479009,
          "longitude": 4.8410386
        },
        {
          "latitude": 52.3473939,
          "longitude": 4.8409232
        },
        {
          "latitude": 52.3469031,
          "longitude": 4.8408562
        },
        {
          "latitude": 52.3464471,
          "longitude": 4.8408294
        },
        {
          "latitude": 52.3462325,
          "longitude": 4.8408321
        },
        {
          "latitude": 52.3459643,
          "longitude": 4.8408374
        },
        {
          "latitude": 52.3455754,
          "longitude": 4.8408535
        },
        {
          "latitude": 52.345393,
          "longitude": 4.8408589
        },
        {
          "latitude": 52.3445132,
          "longitude": 4.8409072
        },
        {
          "latitude": 52.3442879,
          "longitude": 4.8409903
        },
        {
          "latitude": 52.34395,
          "longitude": 4.8410144
        },
        {
          "latitude": 52.3433438,
          "longitude": 4.8410681
        },
        {
          "latitude": 52.3423487,
          "longitude": 4.8411781
        },
        {
          "latitude": 52.3417479,
          "longitude": 4.8412558
        },
        {
          "latitude": 52.3414126,
          "longitude": 4.8412827
        },
        {
          "latitude": 52.3413375,
          "longitude": 4.84128
        },
        {
          "latitude": 52.3410317,
          "longitude": 4.8412371
        },
        {
          "latitude": 52.3407555,
          "longitude": 4.8411405
        },
        {
          "latitude": 52.340557,
          "longitude": 4.8410386
        },
        {
          "latitude": 52.3403639,
          "longitude": 4.8408964
        },
        {
          "latitude": 52.3402941,
          "longitude": 4.8408455
        },
        {
          "latitude": 52.3400822,
          "longitude": 4.840647
        },
        {
          "latitude": 52.339806,
          "longitude": 4.8402956
        },
        {
          "latitude": 52.3396638,
          "longitude": 4.8400515
        },
        {
          "latitude": 52.33946,
          "longitude": 4.8396143
        },
        {
          "latitude": 52.3394144,
          "longitude": 4.8394856
        },
        {
          "latitude": 52.3392776,
          "longitude": 4.8390403
        },
        {
          "latitude": 52.3392159,
          "longitude": 4.8387882
        },
        {
          "latitude": 52.3391542,
          "longitude": 4.8384449
        },
        {
          "latitude": 52.3390979,
          "longitude": 4.8379648
        },
        {
          "latitude": 52.339071,
          "longitude": 4.8375195
        },
        {
          "latitude": 52.3390496,
          "longitude": 4.8368034
        },
        {
          "latitude": 52.3390442,
          "longitude": 4.8363581
        },
        {
          "latitude": 52.3390174,
          "longitude": 4.8344538
        },
        {
          "latitude": 52.3390174,
          "longitude": 4.8339844
        },
        {
          "latitude": 52.339012,
          "longitude": 4.8324957
        },
        {
          "latitude": 52.3389959,
          "longitude": 4.8310956
        },
        {
          "latitude": 52.3389691,
          "longitude": 4.8306075
        },
        {
          "latitude": 52.3389289,
          "longitude": 4.8301971
        },
        {
          "latitude": 52.3389289,
          "longitude": 4.8299047
        },
        {
          "latitude": 52.3389289,
          "longitude": 4.8291993
        },
        {
          "latitude": 52.3389155,
          "longitude": 4.8284242
        },
        {
          "latitude": 52.3389155,
          "longitude": 4.8282927
        },
        {
          "latitude": 52.3389155,
          "longitude": 4.8281318
        },
        {
          "latitude": 52.3389155,
          "longitude": 4.827944
        },
        {
          "latitude": 52.3389155,
          "longitude": 4.8277321
        },
        {
          "latitude": 52.3389181,
          "longitude": 4.8276624
        },
        {
          "latitude": 52.3389155,
          "longitude": 4.8276436
        },
        {
          "latitude": 52.3389074,
          "longitude": 4.8256883
        },
        {
          "latitude": 52.3388994,
          "longitude": 4.8256186
        },
        {
          "latitude": 52.3388672,
          "longitude": 4.8254657
        },
        {
          "latitude": 52.3388618,
          "longitude": 4.8254442
        },
        {
          "latitude": 52.3388457,
          "longitude": 4.8253155
        },
        {
          "latitude": 52.3388377,
          "longitude": 4.8243713
        },
        {
          "latitude": 52.3387894,
          "longitude": 4.8220351
        },
        {
          "latitude": 52.3387867,
          "longitude": 4.8216408
        },
        {
          "latitude": 52.3387733,
          "longitude": 4.8209864
        },
        {
          "latitude": 52.3387572,
          "longitude": 4.8200288
        },
        {
          "latitude": 52.3387277,
          "longitude": 4.818036
        },
        {
          "latitude": 52.3386794,
          "longitude": 4.8167217
        },
        {
          "latitude": 52.3386016,
          "longitude": 4.8154932
        },
        {
          "latitude": 52.3384997,
          "longitude": 4.8146886
        },
        {
          "latitude": 52.3384756,
          "longitude": 4.8145169
        },
        {
          "latitude": 52.3384085,
          "longitude": 4.8140904
        },
        {
          "latitude": 52.3382825,
          "longitude": 4.8134065
        },
        {
          "latitude": 52.3382583,
          "longitude": 4.8132885
        },
        {
          "latitude": 52.3382449,
          "longitude": 4.8132133
        },
        {
          "latitude": 52.3382261,
          "longitude": 4.8131356
        },
        {
          "latitude": 52.3380277,
          "longitude": 4.8122853
        },
        {
          "latitude": 52.3379526,
          "longitude": 4.8120117
        },
        {
          "latitude": 52.3378077,
          "longitude": 4.8114833
        },
        {
          "latitude": 52.3374966,
          "longitude": 4.8105231
        },
        {
          "latitude": 52.3372391,
          "longitude": 4.8098499
        },
        {
          "latitude": 52.3368958,
          "longitude": 4.8090586
        },
        {
          "latitude": 52.3367321,
          "longitude": 4.8087126
        },
        {
          "latitude": 52.3362789,
          "longitude": 4.8078355
        },
        {
          "latitude": 52.3358819,
          "longitude": 4.8071381
        },
        {
          "latitude": 52.33556,
          "longitude": 4.8066044
        },
        {
          "latitude": 52.3352194,
          "longitude": 4.8060384
        },
        {
          "latitude": 52.3336369,
          "longitude": 4.8034152
        },
        {
          "latitude": 52.3335376,
          "longitude": 4.8032543
        },
        {
          "latitude": 52.3334438,
          "longitude": 4.8030961
        },
        {
          "latitude": 52.3333418,
          "longitude": 4.8029244
        },
        {
          "latitude": 52.3330361,
          "longitude": 4.8024711
        },
        {
          "latitude": 52.3329985,
          "longitude": 4.8024201
        },
        {
          "latitude": 52.3329476,
          "longitude": 4.8023504
        },
        {
          "latitude": 52.3328859,
          "longitude": 4.8022592
        },
        {
          "latitude": 52.3323521,
          "longitude": 4.8013875
        },
        {
          "latitude": 52.331813,
          "longitude": 4.800505
        },
        {
          "latitude": 52.3312739,
          "longitude": 4.7996253
        },
        {
          "latitude": 52.330437,
          "longitude": 4.7981688
        },
        {
          "latitude": 52.3297665,
          "longitude": 4.7968841
        },
        {
          "latitude": 52.3295063,
          "longitude": 4.7963315
        },
        {
          "latitude": 52.3291013,
          "longitude": 4.7954088
        },
        {
          "latitude": 52.3289645,
          "longitude": 4.7950682
        },
        {
          "latitude": 52.3288357,
          "longitude": 4.7947571
        },
        {
          "latitude": 52.3288035,
          "longitude": 4.7946712
        },
        {
          "latitude": 52.3284334,
          "longitude": 4.793703
        },
        {
          "latitude": 52.3278916,
          "longitude": 4.7920427
        },
        {
          "latitude": 52.3278621,
          "longitude": 4.7919381
        },
        {
          "latitude": 52.3277736,
          "longitude": 4.7916189
        },
        {
          "latitude": 52.3277146,
          "longitude": 4.7913963
        },
        {
          "latitude": 52.3276207,
          "longitude": 4.7910315
        },
        {
          "latitude": 52.3273927,
          "longitude": 4.7900391
        },
        {
          "latitude": 52.3271325,
          "longitude": 4.7887194
        },
        {
          "latitude": 52.3268321,
          "longitude": 4.7871128
        },
        {
          "latitude": 52.3267463,
          "longitude": 4.7865334
        },
        {
          "latitude": 52.3267034,
          "longitude": 4.7863322
        },
        {
          "latitude": 52.3266578,
          "longitude": 4.7860131
        },
        {
          "latitude": 52.3263788,
          "longitude": 4.7844762
        },
        {
          "latitude": 52.3263413,
          "longitude": 4.7842321
        },
        {
          "latitude": 52.3259416,
          "longitude": 4.7818637
        },
        {
          "latitude": 52.3258102,
          "longitude": 4.7808847
        },
        {
          "latitude": 52.3255903,
          "longitude": 4.7792834
        },
        {
          "latitude": 52.3255017,
          "longitude": 4.778645
        },
        {
          "latitude": 52.3252603,
          "longitude": 4.776974
        },
        {
          "latitude": 52.3250994,
          "longitude": 4.7757804
        },
        {
          "latitude": 52.3247588,
          "longitude": 4.7730929
        },
        {
          "latitude": 52.3242921,
          "longitude": 4.7690535
        },
        {
          "latitude": 52.3241499,
          "longitude": 4.7680664
        },
        {
          "latitude": 52.3241472,
          "longitude": 4.7680664
        },
        {
          "latitude": 52.3239943,
          "longitude": 4.7671759
        },
        {
          "latitude": 52.32382,
          "longitude": 4.7662693
        },
        {
          "latitude": 52.3237476,
          "longitude": 4.7659367
        },
        {
          "latitude": 52.3236349,
          "longitude": 4.7654861
        },
        {
          "latitude": 52.3232782,
          "longitude": 4.7640485
        },
        {
          "latitude": 52.3231736,
          "longitude": 4.7636756
        },
        {
          "latitude": 52.3228624,
          "longitude": 4.7626644
        },
        {
          "latitude": 52.3226291,
          "longitude": 4.7619778
        },
        {
          "latitude": 52.3225969,
          "longitude": 4.7618973
        },
        {
          "latitude": 52.3223233,
          "longitude": 4.7611758
        },
        {
          "latitude": 52.321921,
          "longitude": 4.7601888
        },
        {
          "latitude": 52.3215374,
          "longitude": 4.7593519
        },
        {
          "latitude": 52.3211887,
          "longitude": 4.7586519
        },
        {
          "latitude": 52.3206872,
          "longitude": 4.757697
        },
        {
          "latitude": 52.3206308,
          "longitude": 4.7576004
        },
        {
          "latitude": 52.32025,
          "longitude": 4.7569755
        },
        {
          "latitude": 52.3198611,
          "longitude": 4.756431
        },
        {
          "latitude": 52.319617,
          "longitude": 4.7561145
        },
        {
          "latitude": 52.3190805,
          "longitude": 4.7553742
        },
        {
          "latitude": 52.3190296,
          "longitude": 4.7553232
        },
        {
          "latitude": 52.3189411,
          "longitude": 4.7551998
        },
        {
          "latitude": 52.318579,
          "longitude": 4.7547573
        },
        {
          "latitude": 52.3179621,
          "longitude": 4.7540492
        },
        {
          "latitude": 52.3172271,
          "longitude": 4.7533143
        },
        {
          "latitude": 52.3168945,
          "longitude": 4.7530138
        },
        {
          "latitude": 52.3167711,
          "longitude": 4.7529039
        },
        {
          "latitude": 52.315819,
          "longitude": 4.7521555
        },
        {
          "latitude": 52.3150948,
          "longitude": 4.7516137
        },
        {
          "latitude": 52.3146495,
          "longitude": 4.7513616
        },
        {
          "latitude": 52.314266,
          "longitude": 4.7511658
        },
        {
          "latitude": 52.3138529,
          "longitude": 4.7508895
        },
        {
          "latitude": 52.3132601,
          "longitude": 4.7505274
        },
        {
          "latitude": 52.3116937,
          "longitude": 4.7495458
        },
        {
          "latitude": 52.3108783,
          "longitude": 4.7490978
        },
        {
          "latitude": 52.309362900000004,
          "longitude": 4.7483549
        },
        {
          "latitude": 52.3090544,
          "longitude": 4.7481886
        },
        {
          "latitude": 52.3089659,
          "longitude": 4.7481403
        },
        {
          "latitude": 52.30818,
          "longitude": 4.7476816
        },
        {
          "latitude": 52.3080781,
          "longitude": 4.7476119
        },
        {
          "latitude": 52.3057204,
          "longitude": 4.7460938
        },
        {
          "latitude": 52.3051491,
          "longitude": 4.7457317
        },
        {
          "latitude": 52.3032126,
          "longitude": 4.7445139
        },
        {
          "latitude": 52.3024374,
          "longitude": 4.744015
        },
        {
          "latitude": 52.3007584,
          "longitude": 4.7429368
        },
        {
          "latitude": 52.300356,
          "longitude": 4.7426498
        },
        {
          "latitude": 52.30023,
          "longitude": 4.7425506
        },
        {
          "latitude": 52.2999537,
          "longitude": 4.7423279
        },
        {
          "latitude": 52.2993207,
          "longitude": 4.7417673
        },
        {
          "latitude": 52.2991249,
          "longitude": 4.7415903
        },
        {
          "latitude": 52.2985724,
          "longitude": 4.741019
        },
        {
          "latitude": 52.2980252,
          "longitude": 4.7404021
        },
        {
          "latitude": 52.2977301,
          "longitude": 4.7400427
        },
        {
          "latitude": 52.2970971,
          "longitude": 4.7391978
        },
        {
          "latitude": 52.2960082,
          "longitude": 4.7376421
        },
        {
          "latitude": 52.2959143,
          "longitude": 4.737508
        },
        {
          "latitude": 52.2954288,
          "longitude": 4.7368294
        },
        {
          "latitude": 52.2949219,
          "longitude": 4.7360972
        },
        {
          "latitude": 52.294879,
          "longitude": 4.7360381
        },
        {
          "latitude": 52.2941414,
          "longitude": 4.7350484
        },
        {
          "latitude": 52.2938195,
          "longitude": 4.7345817
        },
        {
          "latitude": 52.2920921,
          "longitude": 4.7321087
        },
        {
          "latitude": 52.2893885,
          "longitude": 4.7282088
        },
        {
          "latitude": 52.2884095,
          "longitude": 4.7267389
        },
        {
          "latitude": 52.2880018,
          "longitude": 4.7261032
        },
        {
          "latitude": 52.2879294,
          "longitude": 4.7259879
        },
        {
          "latitude": 52.2877792,
          "longitude": 4.725768
        },
        {
          "latitude": 52.2876477,
          "longitude": 4.725599
        },
        {
          "latitude": 52.2873473,
          "longitude": 4.725202
        },
        {
          "latitude": 52.287173,
          "longitude": 4.7249767
        },
        {
          "latitude": 52.2868726,
          "longitude": 4.7245529
        },
        {
          "latitude": 52.2865668,
          "longitude": 4.7241211
        },
        {
          "latitude": 52.2865292,
          "longitude": 4.7240648
        },
        {
          "latitude": 52.2836459,
          "longitude": 4.7199529
        },
        {
          "latitude": 52.2834367,
          "longitude": 4.7196338
        },
        {
          "latitude": 52.2833025,
          "longitude": 4.7194353
        },
        {
          "latitude": 52.283265,
          "longitude": 4.7193843
        },
        {
          "latitude": 52.2831845,
          "longitude": 4.719277
        },
        {
          "latitude": 52.2831228,
          "longitude": 4.7191885
        },
        {
          "latitude": 52.2829378,
          "longitude": 4.7189417
        },
        {
          "latitude": 52.2819105,
          "longitude": 4.717437
        },
        {
          "latitude": 52.2815752,
          "longitude": 4.7169703
        },
        {
          "latitude": 52.2808269,
          "longitude": 4.7158706
        },
        {
          "latitude": 52.2801295,
          "longitude": 4.7148809
        },
        {
          "latitude": 52.2798559,
          "longitude": 4.7144812
        },
        {
          "latitude": 52.2784182,
          "longitude": 4.7124267
        },
        {
          "latitude": 52.2755241,
          "longitude": 4.70828
        },
        {
          "latitude": 52.2729492,
          "longitude": 4.7045892
        },
        {
          "latitude": 52.272386,
          "longitude": 4.7037873
        },
        {
          "latitude": 52.2722277,
          "longitude": 4.7035512
        },
        {
          "latitude": 52.2721392,
          "longitude": 4.7034386
        },
        {
          "latitude": 52.2720775,
          "longitude": 4.703342
        },
        {
          "latitude": 52.2712433,
          "longitude": 4.7021484
        },
        {
          "latitude": 52.2696877,
          "longitude": 4.6999168
        },
        {
          "latitude": 52.2690868,
          "longitude": 4.6990344
        },
        {
          "latitude": 52.2689152,
          "longitude": 4.6987849
        },
        {
          "latitude": 52.2685021,
          "longitude": 4.6982056
        },
        {
          "latitude": 52.2684565,
          "longitude": 4.6981385
        },
        {
          "latitude": 52.2682822,
          "longitude": 4.6978918
        },
        {
          "latitude": 52.2677618,
          "longitude": 4.6971515
        },
        {
          "latitude": 52.2672603,
          "longitude": 4.6964327
        },
        {
          "latitude": 52.267102,
          "longitude": 4.6962422
        },
        {
          "latitude": 52.2666326,
          "longitude": 4.6955261
        },
        {
          "latitude": 52.2645754,
          "longitude": 4.6925783
        },
        {
          "latitude": 52.263245,
          "longitude": 4.6906766
        },
        {
          "latitude": 52.2628105,
          "longitude": 4.6900597
        },
        {
          "latitude": 52.2618315,
          "longitude": 4.6886596
        },
        {
          "latitude": 52.2600934,
          "longitude": 4.6861625
        },
        {
          "latitude": 52.2580603,
          "longitude": 4.6832523
        },
        {
          "latitude": 52.2579449,
          "longitude": 4.6830887
        },
        {
          "latitude": 52.2577679,
          "longitude": 4.6828339
        },
        {
          "latitude": 52.2575989,
          "longitude": 4.6825871
        },
        {
          "latitude": 52.2559145,
          "longitude": 4.6801758
        },
        {
          "latitude": 52.2509766,
          "longitude": 4.6730947
        },
        {
          "latitude": 52.2502336,
          "longitude": 4.6720326
        },
        {
          "latitude": 52.2497159,
          "longitude": 4.671295
        },
        {
          "latitude": 52.2486457,
          "longitude": 4.6697903
        },
        {
          "latitude": 52.2476614,
          "longitude": 4.668366
        },
        {
          "latitude": 52.2469425,
          "longitude": 4.6673414
        },
        {
          "latitude": 52.2454834,
          "longitude": 4.6652707
        },
        {
          "latitude": 52.245014,
          "longitude": 4.6646163
        },
        {
          "latitude": 52.2447431,
          "longitude": 4.6642166
        },
        {
          "latitude": 52.2427019,
          "longitude": 4.6613011
        },
        {
          "latitude": 52.2415754,
          "longitude": 4.6597239
        },
        {
          "latitude": 52.2405267,
          "longitude": 4.6582031
        },
        {
          "latitude": 52.2399902,
          "longitude": 4.6574226
        },
        {
          "latitude": 52.2397059,
          "longitude": 4.6570444
        },
        {
          "latitude": 52.2387698,
          "longitude": 4.6557087
        },
        {
          "latitude": 52.238633,
          "longitude": 4.6555156
        },
        {
          "latitude": 52.2385204,
          "longitude": 4.6553627
        },
        {
          "latitude": 52.2384855,
          "longitude": 4.6553117
        },
        {
          "latitude": 52.2384614,
          "longitude": 4.6552634
        },
        {
          "latitude": 52.2384533,
          "longitude": 4.6552259
        },
        {
          "latitude": 52.2384453,
          "longitude": 4.655191
        },
        {
          "latitude": 52.2384185,
          "longitude": 4.6551293
        },
        {
          "latitude": 52.2382575,
          "longitude": 4.6548611
        },
        {
          "latitude": 52.2375655,
          "longitude": 4.6538606
        },
        {
          "latitude": 52.2368842,
          "longitude": 4.6527958
        },
        {
          "latitude": 52.2365704,
          "longitude": 4.6522728
        },
        {
          "latitude": 52.2364309,
          "longitude": 4.652026
        },
        {
          "latitude": 52.2360367,
          "longitude": 4.6513045
        },
        {
          "latitude": 52.23546,
          "longitude": 4.6501431
        },
        {
          "latitude": 52.2353205,
          "longitude": 4.6498051
        },
        {
          "latitude": 52.234835,
          "longitude": 4.648692
        },
        {
          "latitude": 52.2346178,
          "longitude": 4.6481314
        },
        {
          "latitude": 52.2344005,
          "longitude": 4.6475306
        },
        {
          "latitude": 52.2338292,
          "longitude": 4.6458006
        },
        {
          "latitude": 52.2336549,
          "longitude": 4.6451917
        },
        {
          "latitude": 52.233392,
          "longitude": 4.6441725
        },
        {
          "latitude": 52.2333544,
          "longitude": 4.644025
        },
        {
          "latitude": 52.2331747,
          "longitude": 4.6432739
        },
        {
          "latitude": 52.2328985,
          "longitude": 4.6418846
        },
        {
          "latitude": 52.2328556,
          "longitude": 4.6416888
        },
        {
          "latitude": 52.232767,
          "longitude": 4.6411121
        },
        {
          "latitude": 52.2326517,
          "longitude": 4.6403798
        },
        {
          "latitude": 52.2325632,
          "longitude": 4.6397603
        },
        {
          "latitude": 52.2324935,
          "longitude": 4.6391997
        },
        {
          "latitude": 52.232421,
          "longitude": 4.638564
        },
        {
          "latitude": 52.2323298,
          "longitude": 4.6375716
        },
        {
          "latitude": 52.2322226,
          "longitude": 4.6362305
        },
        {
          "latitude": 52.232126,
          "longitude": 4.6350476
        },
        {
          "latitude": 52.2319114,
          "longitude": 4.632647
        },
        {
          "latitude": 52.2317237,
          "longitude": 4.6305925
        },
        {
          "latitude": 52.2315601,
          "longitude": 4.6287364
        },
        {
          "latitude": 52.2314689,
          "longitude": 4.6276635
        },
        {
          "latitude": 52.2313321,
          "longitude": 4.6258798
        },
        {
          "latitude": 52.2312328,
          "longitude": 4.6244717
        },
        {
          "latitude": 52.231214,
          "longitude": 4.6242598
        },
        {
          "latitude": 52.2310558,
          "longitude": 4.6222669
        },
        {
          "latitude": 52.2309861,
          "longitude": 4.6214676
        },
        {
          "latitude": 52.2308412,
          "longitude": 4.6197966
        },
        {
          "latitude": 52.2307688,
          "longitude": 4.6188685
        },
        {
          "latitude": 52.2307232,
          "longitude": 4.6183401
        },
        {
          "latitude": 52.2305784,
          "longitude": 4.6164089
        },
        {
          "latitude": 52.2305086,
          "longitude": 4.6151376
        },
        {
          "latitude": 52.2304899,
          "longitude": 4.6142578
        },
        {
          "latitude": 52.2305086,
          "longitude": 4.6128255
        },
        {
          "latitude": 52.2305489,
          "longitude": 4.6118626
        },
        {
          "latitude": 52.2307715,
          "longitude": 4.608357
        },
        {
          "latitude": 52.2308064,
          "longitude": 4.607437
        },
        {
          "latitude": 52.2308224,
          "longitude": 4.6061817
        },
        {
          "latitude": 52.2308064,
          "longitude": 4.6051812
        },
        {
          "latitude": 52.2308037,
          "longitude": 4.6050578
        },
        {
          "latitude": 52.230742,
          "longitude": 4.6039581
        },
        {
          "latitude": 52.2306776,
          "longitude": 4.6031749
        },
        {
          "latitude": 52.2306105,
          "longitude": 4.6025124
        },
        {
          "latitude": 52.2304389,
          "longitude": 4.601233
        },
        {
          "latitude": 52.2302458,
          "longitude": 4.6000877
        },
        {
          "latitude": 52.23005,
          "longitude": 4.5991221
        },
        {
          "latitude": 52.2296396,
          "longitude": 4.5973545
        },
        {
          "latitude": 52.2292024,
          "longitude": 4.5955735
        },
        {
          "latitude": 52.2290039,
          "longitude": 4.594616
        },
        {
          "latitude": 52.2289664,
          "longitude": 4.594439
        },
        {
          "latitude": 52.2288054,
          "longitude": 4.5934841
        },
        {
          "latitude": 52.228674,
          "longitude": 4.5925453
        },
        {
          "latitude": 52.2286472,
          "longitude": 4.5922852
        },
        {
          "latitude": 52.2286016,
          "longitude": 4.5918399
        },
        {
          "latitude": 52.2285828,
          "longitude": 4.5915851
        },
        {
          "latitude": 52.2285801,
          "longitude": 4.591561
        },
        {
          "latitude": 52.2285452,
          "longitude": 4.5911908
        },
        {
          "latitude": 52.2284889,
          "longitude": 4.5903835
        },
        {
          "latitude": 52.2284004,
          "longitude": 4.588809
        },
        {
          "latitude": 52.2281939,
          "longitude": 4.584083
        },
        {
          "latitude": 52.2280893,
          "longitude": 4.5816422
        },
        {
          "latitude": 52.2280464,
          "longitude": 4.5806551
        },
        {
          "latitude": 52.2279793,
          "longitude": 4.5791289
        },
        {
          "latitude": 52.2279364,
          "longitude": 4.5782009
        },
        {
          "latitude": 52.2279069,
          "longitude": 4.5777959
        },
        {
          "latitude": 52.2277942,
          "longitude": 4.5755669
        },
        {
          "latitude": 52.2277889,
          "longitude": 4.5754355
        },
        {
          "latitude": 52.2277755,
          "longitude": 4.5749769
        },
        {
          "latitude": 52.227762,
          "longitude": 4.5747623
        },
        {
          "latitude": 52.2277567,
          "longitude": 4.574663
        },
        {
          "latitude": 52.2277486,
          "longitude": 4.5743814
        },
        {
          "latitude": 52.2276869,
          "longitude": 4.5729142
        },
        {
          "latitude": 52.227585,
          "longitude": 4.5703125
        },
        {
          "latitude": 52.2275555,
          "longitude": 4.569591
        },
        {
          "latitude": 52.2275394,
          "longitude": 4.5692343
        },
        {
          "latitude": 52.2274992,
          "longitude": 4.5681828
        },
        {
          "latitude": 52.2274992,
          "longitude": 4.5680916
        },
        {
          "latitude": 52.2273946,
          "longitude": 4.5658144
        },
        {
          "latitude": 52.2273865,
          "longitude": 4.5655784
        },
        {
          "latitude": 52.2272927,
          "longitude": 4.5636258
        },
        {
          "latitude": 52.2272176,
          "longitude": 4.5626897
        },
        {
          "latitude": 52.2270942,
          "longitude": 4.5616731
        },
        {
          "latitude": 52.2269627,
          "longitude": 4.5608658
        },
        {
          "latitude": 52.2267777,
          "longitude": 4.5599914
        },
        {
          "latitude": 52.2265846,
          "longitude": 4.559243
        },
        {
          "latitude": 52.2263271,
          "longitude": 4.5583874
        },
        {
          "latitude": 52.2257611,
          "longitude": 4.5567486
        },
        {
          "latitude": 52.2255841,
          "longitude": 4.5562738
        },
        {
          "latitude": 52.2243395,
          "longitude": 4.552736
        },
        {
          "latitude": 52.2242939,
          "longitude": 4.5525911
        },
        {
          "latitude": 52.2241518,
          "longitude": 4.5521888
        },
        {
          "latitude": 52.2241357,
          "longitude": 4.5521405
        },
        {
          "latitude": 52.2241169,
          "longitude": 4.5520923
        },
        {
          "latitude": 52.2238621,
          "longitude": 4.5513627
        },
        {
          "latitude": 52.2235617,
          "longitude": 4.5504963
        },
        {
          "latitude": 52.223103,
          "longitude": 4.5492518
        },
        {
          "latitude": 52.2228429,
          "longitude": 4.548474
        },
        {
          "latitude": 52.2228,
          "longitude": 4.5483398
        },
        {
          "latitude": 52.2226793,
          "longitude": 4.5479724
        },
        {
          "latitude": 52.2224325,
          "longitude": 4.5470738
        },
        {
          "latitude": 52.2223413,
          "longitude": 4.5467117
        },
        {
          "latitude": 52.222124,
          "longitude": 4.5457488
        },
        {
          "latitude": 52.2218397,
          "longitude": 4.5443541
        },
        {
          "latitude": 52.2217834,
          "longitude": 4.5441046
        },
        {
          "latitude": 52.221652,
          "longitude": 4.5434207
        },
        {
          "latitude": 52.2216225,
          "longitude": 4.5432732
        },
        {
          "latitude": 52.2213569,
          "longitude": 4.5418864
        },
        {
          "latitude": 52.2213221,
          "longitude": 4.5416665
        },
        {
          "latitude": 52.2212926,
          "longitude": 4.5415163
        },
        {
          "latitude": 52.2212362,
          "longitude": 4.5412293
        },
        {
          "latitude": 52.2210887,
          "longitude": 4.5404729
        },
        {
          "latitude": 52.2209197,
          "longitude": 4.5396146
        },
        {
          "latitude": 52.2207695,
          "longitude": 4.5388529
        },
        {
          "latitude": 52.2206569,
          "longitude": 4.5382789
        },
        {
          "latitude": 52.2205818,
          "longitude": 4.5378953
        },
        {
          "latitude": 52.2202492,
          "longitude": 4.5362136
        },
        {
          "latitude": 52.2198737,
          "longitude": 4.534277
        },
        {
          "latitude": 52.2197583,
          "longitude": 4.5337325
        },
        {
          "latitude": 52.219238,
          "longitude": 4.5310557
        },
        {
          "latitude": 52.2186962,
          "longitude": 4.5283198
        },
        {
          "latitude": 52.2183099,
          "longitude": 4.5263672
        },
        {
          "latitude": 52.2181088,
          "longitude": 4.5253453
        },
        {
          "latitude": 52.2169608,
          "longitude": 4.5195168
        },
        {
          "latitude": 52.2169366,
          "longitude": 4.5194069
        },
        {
          "latitude": 52.2169179,
          "longitude": 4.519313
        },
        {
          "latitude": 52.2167355,
          "longitude": 4.5184064
        },
        {
          "latitude": 52.2165397,
          "longitude": 4.5175427
        },
        {
          "latitude": 52.2163573,
          "longitude": 4.5168534
        },
        {
          "latitude": 52.2160891,
          "longitude": 4.515987
        },
        {
          "latitude": 52.2157162,
          "longitude": 4.514949
        },
        {
          "latitude": 52.2155902,
          "longitude": 4.5146164
        },
        {
          "latitude": 52.2154775,
          "longitude": 4.5143214
        },
        {
          "latitude": 52.215389,
          "longitude": 4.5140961
        },
        {
          "latitude": 52.2152549,
          "longitude": 4.5137554
        },
        {
          "latitude": 52.2141069,
          "longitude": 4.5107943
        },
        {
          "latitude": 52.2133827,
          "longitude": 4.5089382
        },
        {
          "latitude": 52.2129482,
          "longitude": 4.5078331
        },
        {
          "latitude": 52.2127739,
          "longitude": 4.5073798
        },
        {
          "latitude": 52.212739,
          "longitude": 4.5072886
        },
        {
          "latitude": 52.2116071,
          "longitude": 4.5043945
        },
        {
          "latitude": 52.2115481,
          "longitude": 4.504239
        },
        {
          "latitude": 52.2112745,
          "longitude": 4.5035255
        },
        {
          "latitude": 52.2108561,
          "longitude": 4.5024526
        },
        {
          "latitude": 52.2103518,
          "longitude": 4.5011652
        },
        {
          "latitude": 52.2099227,
          "longitude": 4.5000654
        },
        {
          "latitude": 52.2096759,
          "longitude": 4.4994324
        },
        {
          "latitude": 52.2087371,
          "longitude": 4.4970158
        },
        {
          "latitude": 52.208662,
          "longitude": 4.49682
        },
        {
          "latitude": 52.2078601,
          "longitude": 4.494752
        },
        {
          "latitude": 52.2078305,
          "longitude": 4.4946796
        },
        {
          "latitude": 52.2070313,
          "longitude": 4.492625
        },
        {
          "latitude": 52.2068757,
          "longitude": 4.4922334
        },
        {
          "latitude": 52.2068167,
          "longitude": 4.4920859
        },
        {
          "latitude": 52.2065458,
          "longitude": 4.4913965
        },
        {
          "latitude": 52.2064814,
          "longitude": 4.4912383
        },
        {
          "latitude": 52.206358,
          "longitude": 4.4909191
        },
        {
          "latitude": 52.2062936,
          "longitude": 4.4907528
        },
        {
          "latitude": 52.2062427,
          "longitude": 4.4906268
        },
        {
          "latitude": 52.2055587,
          "longitude": 4.4888994
        },
        {
          "latitude": 52.2054434,
          "longitude": 4.4886178
        },
        {
          "latitude": 52.20521,
          "longitude": 4.488017
        },
        {
          "latitude": 52.2048828,
          "longitude": 4.4871587
        },
        {
          "latitude": 52.2045529,
          "longitude": 4.486244
        },
        {
          "latitude": 52.2037455,
          "longitude": 4.4841519
        },
        {
          "latitude": 52.2037107,
          "longitude": 4.4840634
        },
        {
          "latitude": 52.2036865,
          "longitude": 4.4839963
        },
        {
          "latitude": 52.2036436,
          "longitude": 4.4838864
        },
        {
          "latitude": 52.2030696,
          "longitude": 4.4824219
        },
        {
          "latitude": 52.2030669,
          "longitude": 4.4824111
        },
        {
          "latitude": 52.2029811,
          "longitude": 4.4821912
        },
        {
          "latitude": 52.20256,
          "longitude": 4.4811076
        },
        {
          "latitude": 52.202332,
          "longitude": 4.480539
        },
        {
          "latitude": 52.2021443,
          "longitude": 4.4800696
        },
        {
          "latitude": 52.2018546,
          "longitude": 4.4793186
        },
        {
          "latitude": 52.200543,
          "longitude": 4.4759282
        },
        {
          "latitude": 52.2000897,
          "longitude": 4.4747669
        },
        {
          "latitude": 52.1999341,
          "longitude": 4.4743752
        },
        {
          "latitude": 52.1987942,
          "longitude": 4.4713899
        },
        {
          "latitude": 52.1982497,
          "longitude": 4.4700301
        },
        {
          "latitude": 52.1978661,
          "longitude": 4.4691798
        },
        {
          "latitude": 52.1974638,
          "longitude": 4.4684154
        },
        {
          "latitude": 52.1970454,
          "longitude": 4.4677261
        },
        {
          "latitude": 52.1966672,
          "longitude": 4.4671682
        },
        {
          "latitude": 52.1964177,
          "longitude": 4.4668382
        },
        {
          "latitude": 52.1960449,
          "longitude": 4.4663796
        },
        {
          "latitude": 52.1954978,
          "longitude": 4.4657975
        },
        {
          "latitude": 52.1950284,
          "longitude": 4.4653603
        },
        {
          "latitude": 52.1946877,
          "longitude": 4.4650841
        },
        {
          "latitude": 52.1941969,
          "longitude": 4.4647327
        },
        {
          "latitude": 52.1935907,
          "longitude": 4.4643706
        },
        {
          "latitude": 52.1933171,
          "longitude": 4.4642204
        },
        {
          "latitude": 52.1929899,
          "longitude": 4.4640434
        },
        {
          "latitude": 52.1927324,
          "longitude": 4.4639093
        },
        {
          "latitude": 52.1890417,
          "longitude": 4.4619218
        },
        {
          "latitude": 52.1886957,
          "longitude": 4.4617367
        },
        {
          "latitude": 52.1882719,
          "longitude": 4.4615087
        },
        {
          "latitude": 52.1870568,
          "longitude": 4.4608381
        },
        {
          "latitude": 52.1863112,
          "longitude": 4.4604492
        },
        {
          "latitude": 52.1859062,
          "longitude": 4.4602346
        },
        {
          "latitude": 52.1850586,
          "longitude": 4.4597653
        },
        {
          "latitude": 52.1847153,
          "longitude": 4.4595775
        },
        {
          "latitude": 52.1839669,
          "longitude": 4.4591966
        },
        {
          "latitude": 52.1835539,
          "longitude": 4.4590303
        },
        {
          "latitude": 52.1830818,
          "longitude": 4.4588426
        },
        {
          "latitude": 52.1827465,
          "longitude": 4.4587165
        },
        {
          "latitude": 52.1824944,
          "longitude": 4.4586548
        },
        {
          "latitude": 52.1808153,
          "longitude": 4.4580755
        },
        {
          "latitude": 52.1791658,
          "longitude": 4.4574907
        },
        {
          "latitude": 52.1791068,
          "longitude": 4.4574693
        },
        {
          "latitude": 52.1790531,
          "longitude": 4.4574505
        },
        {
          "latitude": 52.17875,
          "longitude": 4.4573432
        },
        {
          "latitude": 52.1760464,
          "longitude": 4.456391
        },
        {
          "latitude": 52.1752149,
          "longitude": 4.4560906
        },
        {
          "latitude": 52.1740723,
          "longitude": 4.4556883
        },
        {
          "latitude": 52.1738496,
          "longitude": 4.4555917
        },
        {
          "latitude": 52.1725675,
          "longitude": 4.4551358
        },
        {
          "latitude": 52.1711111,
          "longitude": 4.4546235
        },
        {
          "latitude": 52.1707356,
          "longitude": 4.454492
        },
        {
          "latitude": 52.1705988,
          "longitude": 4.4544491
        },
        {
          "latitude": 52.170403,
          "longitude": 4.4543928
        },
        {
          "latitude": 52.1698424,
          "longitude": 4.4541916
        },
        {
          "latitude": 52.169719,
          "longitude": 4.454138
        },
        {
          "latitude": 52.1690646,
          "longitude": 4.4538188
        },
        {
          "latitude": 52.1689412,
          "longitude": 4.4537491
        },
        {
          "latitude": 52.1685576,
          "longitude": 4.4535291
        },
        {
          "latitude": 52.1674606,
          "longitude": 4.4528157
        },
        {
          "latitude": 52.1665674,
          "longitude": 4.4521853
        },
        {
          "latitude": 52.1662053,
          "longitude": 4.4519225
        },
        {
          "latitude": 52.1660712,
          "longitude": 4.4518232
        },
        {
          "latitude": 52.1658862,
          "longitude": 4.4516811
        },
        {
          "latitude": 52.1657977,
          "longitude": 4.451614
        },
        {
          "latitude": 52.1657252,
          "longitude": 4.4515604
        },
        {
          "latitude": 52.1651593,
          "longitude": 4.4511124
        },
        {
          "latitude": 52.1642393,
          "longitude": 4.450348
        },
        {
          "latitude": 52.1639442,
          "longitude": 4.4500986
        },
        {
          "latitude": 52.1635044,
          "longitude": 4.4497177
        },
        {
          "latitude": 52.1632281,
          "longitude": 4.4494683
        },
        {
          "latitude": 52.1630859,
          "longitude": 4.4493368
        },
        {
          "latitude": 52.162807,
          "longitude": 4.4490847
        },
        {
          "latitude": 52.1627373,
          "longitude": 4.4490176
        },
        {
          "latitude": 52.1625897,
          "longitude": 4.4488835
        },
        {
          "latitude": 52.162064,
          "longitude": 4.4484034
        },
        {
          "latitude": 52.1616429,
          "longitude": 4.4480225
        },
        {
          "latitude": 52.1610904,
          "longitude": 4.447521
        },
        {
          "latitude": 52.160224,
          "longitude": 4.4467244
        },
        {
          "latitude": 52.1599263,
          "longitude": 4.4464535
        },
        {
          "latitude": 52.1597922,
          "longitude": 4.4463381
        },
        {
          "latitude": 52.1597654,
          "longitude": 4.4463113
        },
        {
          "latitude": 52.1597332,
          "longitude": 4.4462818
        },
        {
          "latitude": 52.1586201,
          "longitude": 4.4453323
        },
        {
          "latitude": 52.158097,
          "longitude": 4.4449165
        },
        {
          "latitude": 52.1578878,
          "longitude": 4.4447422
        },
        {
          "latitude": 52.1573675,
          "longitude": 4.4443157
        },
        {
          "latitude": 52.1567425,
          "longitude": 4.443723
        },
        {
          "latitude": 52.1562088,
          "longitude": 4.4431812
        },
        {
          "latitude": 52.1558359,
          "longitude": 4.4427896
        },
        {
          "latitude": 52.1555623,
          "longitude": 4.4424865
        },
        {
          "latitude": 52.1550527,
          "longitude": 4.4419527
        },
        {
          "latitude": 52.154763,
          "longitude": 4.4416577
        },
        {
          "latitude": 52.1544921,
          "longitude": 4.4413573
        },
        {
          "latitude": 52.15413,
          "longitude": 4.4409308
        },
        {
          "latitude": 52.1539342,
          "longitude": 4.4406894
        },
        {
          "latitude": 52.1533468,
          "longitude": 4.4398445
        },
        {
          "latitude": 52.1529016,
          "longitude": 4.4391203
        },
        {
          "latitude": 52.1525556,
          "longitude": 4.4385248
        },
        {
          "latitude": 52.1525288,
          "longitude": 4.4384766
        },
        {
          "latitude": 52.152518,
          "longitude": 4.4384578
        },
        {
          "latitude": 52.1524563,
          "longitude": 4.4383451
        },
        {
          "latitude": 52.1519575,
          "longitude": 4.4374198
        },
        {
          "latitude": 52.1517295,
          "longitude": 4.4369799
        },
        {
          "latitude": 52.1512949,
          "longitude": 4.4360411
        },
        {
          "latitude": 52.1507075,
          "longitude": 4.4346786
        },
        {
          "latitude": 52.1503133,
          "longitude": 4.433713
        },
        {
          "latitude": 52.1501014,
          "longitude": 4.4331792
        },
        {
          "latitude": 52.1492055,
          "longitude": 4.4309771
        },
        {
          "latitude": 52.1490204,
          "longitude": 4.4305372
        },
        {
          "latitude": 52.1486986,
          "longitude": 4.4297808
        },
        {
          "latitude": 52.1479958,
          "longitude": 4.4282734
        },
        {
          "latitude": 52.1475989,
          "longitude": 4.4274768
        },
        {
          "latitude": 52.1460056,
          "longitude": 4.424395
        },
        {
          "latitude": 52.1456891,
          "longitude": 4.4238102
        },
        {
          "latitude": 52.1451473,
          "longitude": 4.4227749
        },
        {
          "latitude": 52.1446699,
          "longitude": 4.4218174
        },
        {
          "latitude": 52.1441764,
          "longitude": 4.4207311
        },
        {
          "latitude": 52.1436962,
          "longitude": 4.4196045
        },
        {
          "latitude": 52.1433449,
          "longitude": 4.4187811
        },
        {
          "latitude": 52.1430498,
          "longitude": 4.4180515
        },
        {
          "latitude": 52.1429506,
          "longitude": 4.4178048
        },
        {
          "latitude": 52.1427789,
          "longitude": 4.4173622
        },
        {
          "latitude": 52.1424437,
          "longitude": 4.4165039
        },
        {
          "latitude": 52.1421245,
          "longitude": 4.4156858
        },
        {
          "latitude": 52.1420923,
          "longitude": 4.4156027
        },
        {
          "latitude": 52.1418455,
          "longitude": 4.415018
        },
        {
          "latitude": 52.1417543,
          "longitude": 4.4148007
        },
        {
          "latitude": 52.1414888,
          "longitude": 4.4141918
        },
        {
          "latitude": 52.1413493,
          "longitude": 4.4139129
        },
        {
          "latitude": 52.1411133,
          "longitude": 4.4134328
        },
        {
          "latitude": 52.1404696,
          "longitude": 4.4121346
        },
        {
          "latitude": 52.1403837,
          "longitude": 4.4119629
        },
        {
          "latitude": 52.1394745,
          "longitude": 4.4101229
        },
        {
          "latitude": 52.1389112,
          "longitude": 4.4089615
        },
        {
          "latitude": 52.1386993,
          "longitude": 4.4084921
        },
        {
          "latitude": 52.1385947,
          "longitude": 4.4082668
        },
        {
          "latitude": 52.138423,
          "longitude": 4.4078967
        },
        {
          "latitude": 52.1382487,
          "longitude": 4.4075131
        },
        {
          "latitude": 52.1379617,
          "longitude": 4.4068828
        },
        {
          "latitude": 52.1379188,
          "longitude": 4.4067809
        },
        {
          "latitude": 52.137841,
          "longitude": 4.406628
        },
        {
          "latitude": 52.1377632,
          "longitude": 4.4064724
        },
        {
          "latitude": 52.1376425,
          "longitude": 4.4062391
        },
        {
          "latitude": 52.1370605,
          "longitude": 4.4052038
        },
        {
          "latitude": 52.1367869,
          "longitude": 4.4047183
        },
        {
          "latitude": 52.1366447,
          "longitude": 4.4044903
        },
        {
          "latitude": 52.1364892,
          "longitude": 4.404206
        },
        {
          "latitude": 52.1362531,
          "longitude": 4.4038305
        },
        {
          "latitude": 52.1357596,
          "longitude": 4.4031063
        },
        {
          "latitude": 52.1346787,
          "longitude": 4.4016069
        },
        {
          "latitude": 52.1334636,
          "longitude": 4.3999144
        },
        {
          "latitude": 52.1327046,
          "longitude": 4.398863
        },
        {
          "latitude": 52.1323693,
          "longitude": 4.3984097
        },
        {
          "latitude": 52.1295771,
          "longitude": 4.3945313
        },
        {
          "latitude": 52.1291614,
          "longitude": 4.3939519
        },
        {
          "latitude": 52.1271095,
          "longitude": 4.3911275
        },
        {
          "latitude": 52.1263611,
          "longitude": 4.3901458
        },
        {
          "latitude": 52.1251032,
          "longitude": 4.3884936
        },
        {
          "latitude": 52.1246955,
          "longitude": 4.387933
        },
        {
          "latitude": 52.1244997,
          "longitude": 4.3876299
        },
        {
          "latitude": 52.1244004,
          "longitude": 4.3874663
        },
        {
          "latitude": 52.1240732,
          "longitude": 4.3869567
        },
        {
          "latitude": 52.1236119,
          "longitude": 4.3861815
        },
        {
          "latitude": 52.1230567,
          "longitude": 4.3852562
        },
        {
          "latitude": 52.1227294,
          "longitude": 4.3847144
        },
        {
          "latitude": 52.1225148,
          "longitude": 4.3843898
        },
        {
          "latitude": 52.122252,
          "longitude": 4.3840304
        },
        {
          "latitude": 52.1217799,
          "longitude": 4.383443
        },
        {
          "latitude": 52.120581,
          "longitude": 4.3819678
        },
        {
          "latitude": 52.1200687,
          "longitude": 4.3812919
        },
        {
          "latitude": 52.1195322,
          "longitude": 4.3805087
        },
        {
          "latitude": 52.1191406,
          "longitude": 4.3798998
        },
        {
          "latitude": 52.1188965,
          "longitude": 4.3795243
        },
        {
          "latitude": 52.1180946,
          "longitude": 4.3781295
        },
        {
          "latitude": 52.1179551,
          "longitude": 4.3778828
        },
        {
          "latitude": 52.1176171,
          "longitude": 4.3773383
        },
        {
          "latitude": 52.117542,
          "longitude": 4.3772283
        },
        {
          "latitude": 52.1169761,
          "longitude": 4.3764558
        },
        {
          "latitude": 52.1167454,
          "longitude": 4.3761367
        },
        {
          "latitude": 52.1161312,
          "longitude": 4.3752113
        },
        {
          "latitude": 52.11593,
          "longitude": 4.3748975
        },
        {
          "latitude": 52.1156216,
          "longitude": 4.3744013
        },
        {
          "latitude": 52.115356,
          "longitude": 4.3739775
        },
        {
          "latitude": 52.1152514,
          "longitude": 4.3738139
        },
        {
          "latitude": 52.1151575,
          "longitude": 4.3736556
        },
        {
          "latitude": 52.1150932,
          "longitude": 4.3735537
        },
        {
          "latitude": 52.1144414,
          "longitude": 4.3725586
        },
        {
          "latitude": 52.1142858,
          "longitude": 4.3723199
        },
        {
          "latitude": 52.1138272,
          "longitude": 4.3716279
        },
        {
          "latitude": 52.1133041,
          "longitude": 4.3707696
        },
        {
          "latitude": 52.1132344,
          "longitude": 4.3706596
        },
        {
          "latitude": 52.1131968,
          "longitude": 4.3706113
        },
        {
          "latitude": 52.111271,
          "longitude": 4.3675536
        },
        {
          "latitude": 52.1086371,
          "longitude": 4.3634686
        },
        {
          "latitude": 52.1080309,
          "longitude": 4.3625271
        },
        {
          "latitude": 52.1074247,
          "longitude": 4.3615749
        },
        {
          "latitude": 52.1070385,
          "longitude": 4.3609366
        },
        {
          "latitude": 52.1058396,
          "longitude": 4.3588713
        },
        {
          "latitude": 52.1056733,
          "longitude": 4.3586138
        },
        {
          "latitude": 52.1056277,
          "longitude": 4.358536
        },
        {
          "latitude": 52.1055257,
          "longitude": 4.358359
        },
        {
          "latitude": 52.105464,
          "longitude": 4.3582571
        },
        {
          "latitude": 52.1054184,
          "longitude": 4.3581846
        },
        {
          "latitude": 52.1052977,
          "longitude": 4.3579647
        },
        {
          "latitude": 52.1051502,
          "longitude": 4.3577206
        },
        {
          "latitude": 52.1042463,
          "longitude": 4.3563098
        },
        {
          "latitude": 52.1037447,
          "longitude": 4.3554997
        },
        {
          "latitude": 52.1034846,
          "longitude": 4.3550813
        },
        {
          "latitude": 52.1031842,
          "longitude": 4.3545395
        },
        {
          "latitude": 52.1019343,
          "longitude": 4.3521738
        },
        {
          "latitude": 52.1018216,
          "longitude": 4.3519646
        },
        {
          "latitude": 52.1011001,
          "longitude": 4.3505859
        },
        {
          "latitude": 52.1010196,
          "longitude": 4.3504277
        },
        {
          "latitude": 52.1001774,
          "longitude": 4.3488479
        },
        {
          "latitude": 52.0998582,
          "longitude": 4.3482175
        },
        {
          "latitude": 52.0998234,
          "longitude": 4.3481532
        },
        {
          "latitude": 52.099236,
          "longitude": 4.346796
        },
        {
          "latitude": 52.099185,
          "longitude": 4.346678
        },
        {
          "latitude": 52.0991421,
          "longitude": 4.3465814
        },
        {
          "latitude": 52.0986405,
          "longitude": 4.3453985
        },
        {
          "latitude": 52.0981067,
          "longitude": 4.3441138
        },
        {
          "latitude": 52.0980424,
          "longitude": 4.3439582
        },
        {
          "latitude": 52.0979887,
          "longitude": 4.3438214
        },
        {
          "latitude": 52.0975193,
          "longitude": 4.3426761
        },
        {
          "latitude": 52.097168,
          "longitude": 4.3418527
        },
        {
          "latitude": 52.0971411,
          "longitude": 4.3417963
        },
        {
          "latitude": 52.097007,
          "longitude": 4.3415362
        },
        {
          "latitude": 52.0967737,
          "longitude": 4.3411016
        },
        {
          "latitude": 52.096594,
          "longitude": 4.3407154
        },
        {
          "latitude": 52.095961,
          "longitude": 4.3391785
        },
        {
          "latitude": 52.0949471,
          "longitude": 4.3366948
        },
        {
          "latitude": 52.0947433,
          "longitude": 4.3362039
        },
        {
          "latitude": 52.0943758,
          "longitude": 4.3353134
        },
        {
          "latitude": 52.0939654,
          "longitude": 4.3343076
        },
        {
          "latitude": 52.093496,
          "longitude": 4.3332455
        },
        {
          "latitude": 52.093091,
          "longitude": 4.3322289
        },
        {
          "latitude": 52.0929703,
          "longitude": 4.3319151
        },
        {
          "latitude": 52.0928335,
          "longitude": 4.331553
        },
        {
          "latitude": 52.0927906,
          "longitude": 4.3314323
        },
        {
          "latitude": 52.0927262,
          "longitude": 4.3312392
        },
        {
          "latitude": 52.0925975,
          "longitude": 4.3309119
        },
        {
          "latitude": 52.0924366,
          "longitude": 4.3304989
        },
        {
          "latitude": 52.092348,
          "longitude": 4.3302789
        },
        {
          "latitude": 52.0922676,
          "longitude": 4.3300804
        },
        {
          "latitude": 52.0920369,
          "longitude": 4.3295011
        },
        {
          "latitude": 52.0919833,
          "longitude": 4.3293643
        },
        {
          "latitude": 52.0916426,
          "longitude": 4.3286133
        },
        {
          "latitude": 52.09142,
          "longitude": 4.3281198
        },
        {
          "latitude": 52.0912966,
          "longitude": 4.3278167
        },
        {
          "latitude": 52.0912108,
          "longitude": 4.3276048
        },
        {
          "latitude": 52.0909426,
          "longitude": 4.3269557
        },
        {
          "latitude": 52.090669,
          "longitude": 4.326328
        },
        {
          "latitude": 52.0891696,
          "longitude": 4.3232274
        },
        {
          "latitude": 52.0891079,
          "longitude": 4.3230906
        },
        {
          "latitude": 52.0889014,
          "longitude": 4.3226454
        },
        {
          "latitude": 52.0887297,
          "longitude": 4.3222725
        },
        {
          "latitude": 52.088665399999996,
          "longitude": 4.3221384
        },
        {
          "latitude": 52.0884642,
          "longitude": 4.3217146
        },
        {
          "latitude": 52.0883167,
          "longitude": 4.3213686
        },
        {
          "latitude": 52.0882657,
          "longitude": 4.3212613
        },
        {
          "latitude": 52.0882255,
          "longitude": 4.3211702
        },
        {
          "latitude": 52.0881826,
          "longitude": 4.321087
        },
        {
          "latitude": 52.088145,
          "longitude": 4.3209985
        },
        {
          "latitude": 52.0880967,
          "longitude": 4.3208966
        },
        {
          "latitude": 52.0880404,
          "longitude": 4.3207785
        },
        {
          "latitude": 52.0877346,
          "longitude": 4.3201375
        },
        {
          "latitude": 52.0876756,
          "longitude": 4.3200222
        },
        {
          "latitude": 52.0875254,
          "longitude": 4.3197164
        },
        {
          "latitude": 52.0874503,
          "longitude": 4.3195635
        },
        {
          "latitude": 52.0871606,
          "longitude": 4.3189976
        },
        {
          "latitude": 52.0869541,
          "longitude": 4.3185389
        },
        {
          "latitude": 52.0868361,
          "longitude": 4.318268
        },
        {
          "latitude": 52.0866886,
          "longitude": 4.3178737
        },
        {
          "latitude": 52.0866403,
          "longitude": 4.3178067
        },
        {
          "latitude": 52.0865571,
          "longitude": 4.317643
        },
        {
          "latitude": 52.0865169,
          "longitude": 4.3175331
        },
        {
          "latitude": 52.0864177,
          "longitude": 4.3172058
        },
        {
          "latitude": 52.0862487,
          "longitude": 4.3165836
        },
        {
          "latitude": 52.0862138,
          "longitude": 4.3164656
        },
        {
          "latitude": 52.0860663,
          "longitude": 4.3158513
        },
        {
          "latitude": 52.0860288,
          "longitude": 4.3157601
        },
        {
          "latitude": 52.0860127,
          "longitude": 4.315736
        },
        {
          "latitude": 52.0859805,
          "longitude": 4.3157119
        },
        {
          "latitude": 52.0859081,
          "longitude": 4.3156877
        },
        {
          "latitude": 52.0857042,
          "longitude": 4.3158406
        },
        {
          "latitude": 52.085326,
          "longitude": 4.3161651
        },
        {
          "latitude": 52.0850176,
          "longitude": 4.3164414
        },
        {
          "latitude": 52.0845428,
          "longitude": 4.3168759
        },
        {
          "latitude": 52.0845026,
          "longitude": 4.3169162
        },
        {
          "latitude": 52.0843631,
          "longitude": 4.3170637
        },
        {
          "latitude": 52.0838857,
          "longitude": 4.3175277
        },
        {
          "latitude": 52.0837972,
          "longitude": 4.3175679
        },
        {
          "latitude": 52.0837569,
          "longitude": 4.3175974
        },
        {
          "latitude": 52.0834404,
          "longitude": 4.3179649
        },
        {
          "latitude": 52.0832688,
          "longitude": 4.3175921
        },
        {
          "latitude": 52.0831776,
          "longitude": 4.3173373
        },
        {
          "latitude": 52.0830247,
          "longitude": 4.316884
        },
        {
          "latitude": 52.0828047,
          "longitude": 4.3163154
        },
        {
          "latitude": 52.0827189,
          "longitude": 4.3160927
        },
        {
          "latitude": 52.0825016,
          "longitude": 4.3155375
        },
        {
          "latitude": 52.0823246,
          "longitude": 4.3150789
        },
        {
          "latitude": 52.082153,
          "longitude": 4.3146282
        },
        {
          "latitude": 52.0819867,
          "longitude": 4.3142071
        },
        {
          "latitude": 52.0819035,
          "longitude": 4.3139845
        },
        {
          "latitude": 52.0818713,
          "longitude": 4.3139148
        },
        {
          "latitude": 52.0818338,
          "longitude": 4.3138477
        },
        {
          "latitude": 52.0817989,
          "longitude": 4.3138021
        },
        {
          "latitude": 52.0817453,
          "longitude": 4.3137512
        },
        {
          "latitude": 52.0815441,
          "longitude": 4.3136278
        },
        {
          "latitude": 52.0814905,
          "longitude": 4.3135983
        },
        {
          "latitude": 52.0814422,
          "longitude": 4.3135634
        },
        {
          "latitude": 52.0814046,
          "longitude": 4.3135232
        },
        {
          "latitude": 52.0813751,
          "longitude": 4.3134776
        },
        {
          "latitude": 52.0813483,
          "longitude": 4.3134078
        },
        {
          "latitude": 52.0811123,
          "longitude": 4.3123591
        },
        {
          "latitude": 52.0809996,
          "longitude": 4.3119621
        },
        {
          "latitude": 52.0807958,
          "longitude": 4.3114015
        },
        {
          "latitude": 52.0804363,
          "longitude": 4.3105567
        },
        {
          "latitude": 52.080313,
          "longitude": 4.3102992
        },
        {
          "latitude": 52.0802674,
          "longitude": 4.3102348
        },
        {
          "latitude": 52.0802137,
          "longitude": 4.3101919
        },
        {
          "latitude": 52.0801959,
          "longitude": 4.3101406
        }
      ]
    }
  ],
  "sections": [
    {
      "startPointIndex": 0,
      "endPointIndex": 35,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "nld-connector",
          "shieldContent": "s100"
        }
      ]
    },
    {
      "startPointIndex": 0,
      "endPointIndex": 130,
      "sectionType": "LOW_EMISSION_ZONE"
    },
    {
      "startPointIndex": 87,
      "endPointIndex": 139,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "nld-connector",
          "shieldContent": "s105"
        }
      ]
    },
    {
      "maxSpeedLimitInKmh": 50,
      "startPointIndex": 0,
      "endPointIndex": 141,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 0,
      "endPointIndex": 201,
      "sectionType": "URBAN"
    },
    {
      "startPointIndex": 150,
      "endPointIndex": 203,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "nld-highway",
          "shieldContent": "A10"
        },
        {
          "reference": "european-road",
          "shieldContent": "E22"
        }
      ]
    },
    {
      "maxSpeedLimitInKmh": 80,
      "startPointIndex": 141,
      "endPointIndex": 221,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 337,
      "endPointIndex": 346,
      "sectionType": "TUNNEL"
    },
    {
      "startPointIndex": 247,
      "endPointIndex": 445,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "nld-highway",
          "shieldContent": "A4"
        },
        {
          "reference": "european-road",
          "shieldContent": "E19"
        }
      ]
    },
    {
      "maxSpeedLimitInKmh": 100,
      "startPointIndex": 221,
      "endPointIndex": 554,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 70,
      "startPointIndex": 554,
      "endPointIndex": 557,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 664,
      "endPointIndex": 668,
      "sectionType": "URBAN"
    },
    {
      "maxSpeedLimitInKmh": 100,
      "startPointIndex": 557,
      "endPointIndex": 737,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 70,
      "startPointIndex": 737,
      "endPointIndex": 741,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 50,
      "startPointIndex": 741,
      "endPointIndex": 748,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 150,
      "endPointIndex": 750,
      "sectionType": "MOTORWAY"
    },
    {
      "startPointIndex": 445,
      "endPointIndex": 750,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "nld-highway",
          "shieldContent": "A44"
        }
      ]
    },
    {
      "maxSpeedLimitInKmh": 80,
      "startPointIndex": 748,
      "endPointIndex": 763,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 50,
      "startPointIndex": 763,
      "endPointIndex": 764,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 80,
      "startPointIndex": 764,
      "endPointIndex": 768,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 816,
      "endPointIndex": 818,
      "sectionType": "URBAN"
    },
    {
      "startPointIndex": 750,
      "endPointIndex": 820,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "nld-primary",
          "shieldContent": "N44"
        }
      ]
    },
    {
      "maxSpeedLimitInKmh": 70,
      "startPointIndex": 768,
      "endPointIndex": 838,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 820,
      "endPointIndex": 897,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "nld-connector",
          "shieldContent": "s101"
        }
      ]
    },
    {
      "startPointIndex": 908,
      "endPointIndex": 915,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "nld-connector",
          "shieldContent": "s100"
        }
      ]
    },
    {
      "maxSpeedLimitInKmh": 50,
      "startPointIndex": 838,
      "endPointIndex": 946,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 0,
      "endPointIndex": 946,
      "sectionType": "COUNTRY",
      "countryCode": "NLD"
    },
    {
      "startPointIndex": 915,
      "endPointIndex": 946,
      "sectionType": "LOW_EMISSION_ZONE"
    },
    {
      "startPointIndex": 0,
      "endPointIndex": 946,
      "sectionType": "TRAVEL_MODE",
      "travelMode": "car"
    },
    {
      "startPointIndex": 862,
      "endPointIndex": 946,
      "sectionType": "URBAN"
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
        "DOUBLE_SOLID",
        "SINGLE_SOLID"
      ],
      "startPointIndex": 33,
      "endPointIndex": 34,
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
            "SLIGHT_RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "DOUBLE_SOLID",
        "DOUBLE_SOLID",
        "SINGLE_SOLID"
      ],
      "startPointIndex": 127,
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
      "startPointIndex": 160,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "startPointIndex": 193,
      "endPointIndex": 194,
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
        "SINGLE_SOLID"
      ],
      "startPointIndex": 202,
      "endPointIndex": 203,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "startPointIndex": 251,
      "endPointIndex": 252,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
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
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
        "LONG_DASHED",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "startPointIndex": 371,
      "endPointIndex": 373,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
        "LONG_DASHED",
        "LONG_DASHED",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
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
        "LONG_DASHED",
        "LONG_DASHED",
        "SHORT_DASHED",
        "DASHED_SOLID",
        "SINGLE_SOLID"
      ],
      "startPointIndex": 430,
      "endPointIndex": 431,
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
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "startPointIndex": 444,
      "endPointIndex": 445,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 471,
      "endPointIndex": 476,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 748,
      "endPointIndex": 750,
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
      "startPointIndex": 895,
      "endPointIndex": 897,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "startPointIndex": 902,
      "endPointIndex": 904,
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
      "startPointIndex": 914,
      "endPointIndex": 915,
      "sectionType": "LANES"
    }
  ],
  "guidance": {
    "instructions": [
      {
        "routeOffsetInMeters": 0,
        "travelTimeInSeconds": 0,
        "point": {
          "latitude": 52.36535,
          "longitude": 4.87862
        },
        "pointIndex": 0,
        "instructionType": "LOCATION_DEPARTURE",
        "roadNumbers": [
          "s100"
        ],
        "phoneticRoadNumbers": [
          "ˌɛs.ˈhɔn.dərt"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "nl-NL"
        ],
        "street": "Nassaukade",
        "phoneticStreet": "ˈnɑ.sɑ⁀u.ˌka.də",
        "phoneticStreetLanguageCode": "nl-NL",
        "countryCode": "NLD",
        "possibleCombineWithNext": false,
        "drivingSide": "RIGHT",
        "maneuver": "DEPART",
        "message": "Leave from <street>Nassaukade</street>/<roadNumber>s100</roadNumber>",
        "confirmationAnnouncement": {
          "point": {
            "latitude": 52.3653496,
            "longitude": 4.8786167
          },
          "pointIndex": 0,
          "maneuver": "DEPART",
          "distanceInMeters": 0
        },
        "roadShieldReferences": [
          {
            "reference": "nld-connector",
            "shieldContent": "s100"
          }
        ]
      },
      {
        "routeOffsetInMeters": 796,
        "travelTimeInSeconds": 193,
        "point": {
          "latitude": 52.37176,
          "longitude": 4.87416
        },
        "pointIndex": 34,
        "instructionType": "TURN",
        "street": "De Clercqstraat",
        "phoneticStreet": "də ˈklɛrk.strat",
        "phoneticStreetLanguageCode": "nl-NL",
        "countryCode": "NLD",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": -90,
        "possibleCombineWithNext": false,
        "drivingSide": "RIGHT",
        "maneuver": "TURN_LEFT",
        "message": "Turn left onto <street>De Clercqstraat</street>",
        "earlyWarningAnnouncement": {
          "point": {
            "latitude": 52.3667809,
            "longitude": 4.8770322
          },
          "pointIndex": 10,
          "maneuver": "AHEAD_LEFT_TURN",
          "distanceInMeters": 600
        },
        "mainAnnouncement": {
          "point": {
            "latitude": 52.3691586,
            "longitude": 4.8752974
          },
          "pointIndex": 23,
          "maneuver": "TURN_LEFT",
          "distanceInMeters": 300
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 52.3713922,
            "longitude": 4.8743199
          },
          "pointIndex": 31,
          "maneuver": "TURN_LEFT",
          "distanceInMeters": 42
        }
      },
      {
        "routeOffsetInMeters": 1872,
        "travelTimeInSeconds": 387,
        "point": {
          "latitude": 52.37155,
          "longitude": 4.85961
        },
        "pointIndex": 79,
        "instructionType": "TURN",
        "street": "Admiraal de Ruijterweg",
        "phoneticStreet": "ɑd.mi.ˈral də ˈrœ⁀y.tər.ʋɛx",
        "phoneticStreetLanguageCode": "nl-NL",
        "countryCode": "NLD",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": 90,
        "possibleCombineWithNext": false,
        "drivingSide": "RIGHT",
        "maneuver": "TURN_RIGHT",
        "message": "Turn right onto <street>Admiraal de Ruijterweg</street>",
        "earlyWarningAnnouncement": {
          "point": {
            "latitude": 52.3702115,
            "longitude": 4.8649576
          },
          "pointIndex": 66,
          "maneuver": "AHEAD_RIGHT_TURN",
          "distanceInMeters": 400
        },
        "mainAnnouncement": {
          "point": {
            "latitude": 52.3710563,
            "longitude": 4.8624025
          },
          "pointIndex": 72,
          "maneuver": "TURN_RIGHT",
          "distanceInMeters": 200
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 52.3714503,
            "longitude": 4.8604543
          },
          "pointIndex": 76,
          "maneuver": "TURN_RIGHT",
          "distanceInMeters": 60
        }
      },
      {
        "routeOffsetInMeters": 2223,
        "travelTimeInSeconds": 453,
        "point": {
          "latitude": 52.37464,
          "longitude": 4.85856
        },
        "pointIndex": 86,
        "instructionType": "TURN",
        "roadNumbers": [
          "s105"
        ],
        "phoneticRoadNumbers": [
          "ˌɛs.hɔn.dərt.ɛn.ˈvɛ⁀if"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "nl-NL"
        ],
        "street": "Jan van Galenstraat",
        "phoneticStreet": "ˈjɑn vɑŋ ˈɣa.lən.strat",
        "phoneticStreetLanguageCode": "nl-NL",
        "countryCode": "NLD",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": -90,
        "possibleCombineWithNext": false,
        "drivingSide": "RIGHT",
        "maneuver": "TURN_LEFT",
        "message": "Turn left onto <street>Jan van Galenstraat</street>/<roadNumber>s105</roadNumber>",
        "mainAnnouncement": {
          "point": {
            "latitude": 52.3728719,
            "longitude": 4.8591161
          },
          "pointIndex": 83,
          "maneuver": "TURN_LEFT",
          "distanceInMeters": 200
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 52.3741069,
            "longitude": 4.8587304
          },
          "pointIndex": 84,
          "maneuver": "TURN_LEFT",
          "distanceInMeters": 60
        },
        "roadShieldReferences": [
          {
            "reference": "nld-connector",
            "shieldContent": "s105"
          }
        ]
      },
      {
        "routeOffsetInMeters": 3338,
        "travelTimeInSeconds": 672,
        "point": {
          "latitude": 52.37233,
          "longitude": 4.84296
        },
        "pointIndex": 129,
        "instructionType": "TURN",
        "roadNumbers": [
          "A10",
          "E22"
        ],
        "phoneticRoadNumbers": [
          "a.ˈtin",
          "ˌe.tʋe.ən.ˈtʋɪn.təx"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "nl-NL",
          "nl-NL"
        ],
        "countryCode": "NLD",
        "signpostText": "Den Haag",
        "phoneticSignpostText": "dɛn ˈhax",
        "phoneticSignpostTextLanguageCode": "nl-NL",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": -90,
        "possibleCombineWithNext": true,
        "drivingSide": "RIGHT",
        "maneuver": "TURN_LEFT",
        "message": "Turn left onto <roadNumber>A10</roadNumber>/<roadNumber>E22</roadNumber> toward <signpostText>Den Haag</signpostText>",
        "combinedMessage": "Turn left onto <roadNumber>A10</roadNumber>/<roadNumber>E22</roadNumber> toward <signpostText>Den Haag</signpostText> then take the <roadNumber>A10</roadNumber>/<roadNumber>E22</roadNumber> motorway",
        "earlyWarningAnnouncement": {
          "point": {
            "latitude": 52.3732647,
            "longitude": 4.8515733
          },
          "pointIndex": 108,
          "maneuver": "AHEAD_LEFT_TURN",
          "distanceInMeters": 600
        },
        "mainAnnouncement": {
          "point": {
            "latitude": 52.3725274,
            "longitude": 4.8473156
          },
          "pointIndex": 117,
          "maneuver": "TURN_LEFT",
          "distanceInMeters": 300
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 52.3722738,
            "longitude": 4.843993
          },
          "pointIndex": 125,
          "maneuver": "TURN_LEFT",
          "distanceInMeters": 70
        },
        "roadShieldReferences": [
          {
            "reference": "nld-highway",
            "shieldContent": "A10"
          },
          {
            "reference": "european-road",
            "shieldContent": "E22"
          }
        ],
        "signpostRoadShieldReferences": [
          {
            "reference": "nld-connector",
            "shieldContent": "s106"
          }
        ]
      },
      {
        "routeOffsetInMeters": 3961,
        "travelTimeInSeconds": 716,
        "point": {
          "latitude": 52.36767,
          "longitude": 4.84209
        },
        "pointIndex": 150,
        "instructionType": "ROAD_CHANGE",
        "roadNumbers": [
          "A10",
          "E22"
        ],
        "phoneticRoadNumbers": [
          "a.ˈtin",
          "ˌe.tʋe.ən.ˈtʋɪn.təx"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "nl-NL",
          "nl-NL"
        ],
        "countryCode": "NLD",
        "possibleCombineWithNext": false,
        "drivingSide": "RIGHT",
        "maneuver": "ENTER_MOTORWAY",
        "message": "Take the <roadNumber>A10</roadNumber>/<roadNumber>E22</roadNumber> motorway",
        "roadShieldReferences": [
          {
            "reference": "nld-highway",
            "shieldContent": "A10"
          },
          {
            "reference": "european-road",
            "shieldContent": "E22"
          }
        ]
      },
      {
        "routeOffsetInMeters": 6548,
        "travelTimeInSeconds": 842,
        "point": {
          "latitude": 52.34451,
          "longitude": 4.84091
        },
        "pointIndex": 203,
        "instructionType": "TURN",
        "roadNumbers": [
          "A4",
          "E19"
        ],
        "phoneticRoadNumbers": [
          "a.ˈvir",
          "ˌe.ne.ɣən.ˈtin"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "nl-NL",
          "nl-NL"
        ],
        "countryCode": "NLD",
        "signpostText": "Den Haag",
        "phoneticSignpostText": "dɛn ˈhax",
        "phoneticSignpostTextLanguageCode": "nl-NL",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": -45,
        "possibleCombineWithNext": true,
        "drivingSide": "RIGHT",
        "maneuver": "MOTORWAY_EXIT_LEFT",
        "message": "Take the left exit onto <roadNumber>A4</roadNumber>/<roadNumber>E19</roadNumber> toward <signpostText>Den Haag</signpostText>",
        "combinedMessage": "Take the left exit onto <roadNumber>A4</roadNumber>/<roadNumber>E19</roadNumber> toward <signpostText>Den Haag</signpostText> then take the <roadNumber>A4</roadNumber>/<roadNumber>E19</roadNumber> motorway",
        "earlyWarningAnnouncement": {
          "point": {
            "latitude": 52.3623857,
            "longitude": 4.84224
          },
          "pointIndex": 160,
          "maneuver": "AHEAD_EXIT_LEFT",
          "distanceInMeters": 2000
        },
        "mainAnnouncement": {
          "point": {
            "latitude": 52.3516012,
            "longitude": 4.8424198
          },
          "pointIndex": 184,
          "maneuver": "MOTORWAY_EXIT_LEFT",
          "distanceInMeters": 800
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 52.3480957,
            "longitude": 4.8411039
          },
          "pointIndex": 194,
          "maneuver": "MOTORWAY_EXIT_LEFT",
          "distanceInMeters": 400
        },
        "roadShieldReferences": [
          {
            "reference": "nld-highway",
            "shieldContent": "A4"
          },
          {
            "reference": "european-road",
            "shieldContent": "E19"
          }
        ],
        "signpostRoadShieldReferences": [
          {
            "reference": "nld-highway",
            "shieldContent": "A4"
          }
        ]
      },
      {
        "routeOffsetInMeters": 8134,
        "travelTimeInSeconds": 906,
        "point": {
          "latitude": 52.33885,
          "longitude": 4.82532
        },
        "pointIndex": 247,
        "instructionType": "ROAD_CHANGE",
        "roadNumbers": [
          "A4",
          "E19"
        ],
        "phoneticRoadNumbers": [
          "a.ˈvir",
          "ˌe.ne.ɣən.ˈtin"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "nl-NL",
          "nl-NL"
        ],
        "countryCode": "NLD",
        "possibleCombineWithNext": false,
        "drivingSide": "RIGHT",
        "maneuver": "ENTER_MOTORWAY",
        "message": "Take the <roadNumber>A4</roadNumber>/<roadNumber>E19</roadNumber> motorway",
        "roadShieldReferences": [
          {
            "reference": "nld-highway",
            "shieldContent": "A4"
          },
          {
            "reference": "european-road",
            "shieldContent": "E19"
          }
        ]
      },
      {
        "routeOffsetInMeters": 8494,
        "travelTimeInSeconds": 918,
        "point": {
          "latitude": 52.33876,
          "longitude": 4.82003
        },
        "pointIndex": 252,
        "instructionType": "TURN",
        "roadNumbers": [
          "A4",
          "E19"
        ],
        "phoneticRoadNumbers": [
          "a.ˈvir",
          "ˌe.ne.ɣən.ˈtin"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "nl-NL",
          "nl-NL"
        ],
        "countryCode": "NLD",
        "signpostText": "Den Haag",
        "phoneticSignpostText": "dɛn ˈhax",
        "phoneticSignpostTextLanguageCode": "nl-NL",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": 0,
        "possibleCombineWithNext": false,
        "drivingSide": "RIGHT",
        "maneuver": "STRAIGHT",
        "message": "Keep straight on at <roadNumber>A4</roadNumber>/<roadNumber>E19</roadNumber> toward <signpostText>Den Haag</signpostText>",
        "mainAnnouncement": {
          "point": {
            "latitude": 52.3390033,
            "longitude": 4.8317406
          },
          "pointIndex": 230,
          "maneuver": "STRAIGHT",
          "distanceInMeters": 800
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 52.3388152,
            "longitude": 4.823284
          },
          "pointIndex": 248,
          "maneuver": "STRAIGHT",
          "distanceInMeters": 222
        },
        "roadShieldReferences": [
          {
            "reference": "nld-highway",
            "shieldContent": "A4"
          },
          {
            "reference": "european-road",
            "shieldContent": "E19"
          }
        ],
        "signpostRoadShieldReferences": [
          {
            "reference": "nld-highway",
            "shieldContent": "A4"
          },
          {
            "reference": "european-road",
            "shieldContent": "E19"
          }
        ]
      },
      {
        "routeOffsetInMeters": 10098,
        "travelTimeInSeconds": 974,
        "point": {
          "latitude": 52.33181,
          "longitude": 4.80051
        },
        "pointIndex": 283,
        "instructionType": "TURN",
        "roadNumbers": [
          "A4",
          "E19"
        ],
        "phoneticRoadNumbers": [
          "a.ˈvir",
          "ˌe.ne.ɣən.ˈtin"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "nl-NL",
          "nl-NL"
        ],
        "countryCode": "NLD",
        "signpostText": "Den Haag",
        "phoneticSignpostText": "dɛn ˈhax",
        "phoneticSignpostTextLanguageCode": "nl-NL",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": 0,
        "possibleCombineWithNext": false,
        "drivingSide": "RIGHT",
        "maneuver": "STRAIGHT",
        "message": "Keep straight on at <roadNumber>A4</roadNumber>/<roadNumber>E19</roadNumber> toward <signpostText>Den Haag</signpostText>",
        "mainAnnouncement": {
          "point": {
            "latitude": 52.336831,
            "longitude": 4.8089216
          },
          "pointIndex": 268,
          "maneuver": "STRAIGHT",
          "distanceInMeters": 800
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 52.3343348,
            "longitude": 4.8045722
          },
          "pointIndex": 273,
          "maneuver": "STRAIGHT",
          "distanceInMeters": 394
        },
        "roadShieldReferences": [
          {
            "reference": "nld-highway",
            "shieldContent": "A4"
          },
          {
            "reference": "european-road",
            "shieldContent": "E19"
          }
        ],
        "signpostRoadShieldReferences": [
          {
            "reference": "nld-highway",
            "shieldContent": "A4"
          },
          {
            "reference": "european-road",
            "shieldContent": "E19"
          }
        ]
      },
      {
        "routeOffsetInMeters": 10648,
        "travelTimeInSeconds": 992,
        "point": {
          "latitude": 52.32867,
          "longitude": 4.79432
        },
        "pointIndex": 291,
        "instructionType": "DIRECTION_INFO",
        "roadNumbers": [
          "A4",
          "E19"
        ],
        "phoneticRoadNumbers": [
          "a.ˈvir",
          "ˌe.ne.ɣən.ˈtin"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "nl-NL",
          "nl-NL"
        ],
        "countryCode": "NLD",
        "signpostText": "Den Haag",
        "phoneticSignpostText": "dɛn ˈhax",
        "phoneticSignpostTextLanguageCode": "nl-NL",
        "possibleCombineWithNext": false,
        "drivingSide": "RIGHT",
        "maneuver": "FOLLOW",
        "message": "Follow <roadNumber>A4</roadNumber>/<roadNumber>E19</roadNumber> toward <signpostText>Den Haag</signpostText>",
        "mainAnnouncement": {
          "point": {
            "latitude": 52.32916,
            "longitude": 4.7955427
          },
          "pointIndex": 287,
          "maneuver": "FOLLOW",
          "distanceInMeters": 100
        },
        "roadShieldReferences": [
          {
            "reference": "nld-highway",
            "shieldContent": "A4"
          },
          {
            "reference": "european-road",
            "shieldContent": "E19"
          }
        ],
        "signpostRoadShieldReferences": [
          {
            "reference": "nld-highway",
            "shieldContent": "A4"
          },
          {
            "reference": "european-road",
            "shieldContent": "E19"
          }
        ]
      },
      {
        "routeOffsetInMeters": 24944,
        "travelTimeInSeconds": 1530,
        "point": {
          "latitude": 52.23849,
          "longitude": 4.65531
        },
        "pointIndex": 445,
        "instructionType": "TURN",
        "roadNumbers": [
          "A44"
        ],
        "phoneticRoadNumbers": [
          "a.vi.rən.ˈver.təx"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "nl-NL"
        ],
        "countryCode": "NLD",
        "signpostText": "Den Haag-Centrum",
        "phoneticSignpostText": "dɛn ˈhax ˈsɛn.trʌm",
        "phoneticSignpostTextLanguageCode": "nl-NL",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": 45,
        "possibleCombineWithNext": true,
        "drivingSide": "RIGHT",
        "maneuver": "TAKE_EXIT",
        "message": "Take the exit onto <roadNumber>A44</roadNumber> toward <signpostText>Den Haag-Centrum</signpostText>",
        "combinedMessage": "Take the exit onto <roadNumber>A44</roadNumber> toward <signpostText>Den Haag-Centrum</signpostText> then take the <roadNumber>A44</roadNumber> motorway",
        "earlyWarningAnnouncement": {
          "point": {
            "latitude": 52.252023,
            "longitude": 4.6745954
          },
          "pointIndex": 427,
          "maneuver": "AHEAD_EXIT",
          "distanceInMeters": 2000
        },
        "mainAnnouncement": {
          "point": {
            "latitude": 52.2439038,
            "longitude": 4.6630178
          },
          "pointIndex": 436,
          "maneuver": "TAKE_EXIT",
          "distanceInMeters": 800
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 52.2411928,
            "longitude": 4.6591691
          },
          "pointIndex": 438,
          "maneuver": "TAKE_EXIT",
          "distanceInMeters": 400
        },
        "roadShieldReferences": [
          {
            "reference": "nld-highway",
            "shieldContent": "A44"
          }
        ],
        "signpostRoadShieldReferences": [
          {
            "reference": "nld-highway",
            "shieldContent": "A44"
          }
        ]
      },
      {
        "routeOffsetInMeters": 25914,
        "travelTimeInSeconds": 1563,
        "point": {
          "latitude": 52.23335,
          "longitude": 4.64402
        },
        "pointIndex": 464,
        "instructionType": "ROAD_CHANGE",
        "roadNumbers": [
          "A44"
        ],
        "phoneticRoadNumbers": [
          "a.vi.rən.ˈver.təx"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "nl-NL"
        ],
        "countryCode": "NLD",
        "possibleCombineWithNext": false,
        "drivingSide": "RIGHT",
        "maneuver": "ENTER_MOTORWAY",
        "message": "Take the <roadNumber>A44</roadNumber> motorway",
        "roadShieldReferences": [
          {
            "reference": "nld-highway",
            "shieldContent": "A44"
          }
        ]
      },
      {
        "routeOffsetInMeters": 26711,
        "travelTimeInSeconds": 1590,
        "point": {
          "latitude": 52.23191,
          "longitude": 4.63265
        },
        "pointIndex": 476,
        "instructionType": "TURN",
        "roadNumbers": [
          "A44"
        ],
        "phoneticRoadNumbers": [
          "a.vi.rən.ˈver.təx"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "nl-NL"
        ],
        "countryCode": "NLD",
        "signpostText": "Den Haag",
        "phoneticSignpostText": "dɛn ˈhax",
        "phoneticSignpostTextLanguageCode": "nl-NL",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": 0,
        "possibleCombineWithNext": false,
        "drivingSide": "RIGHT",
        "maneuver": "STRAIGHT",
        "message": "Keep straight on at <roadNumber>A44</roadNumber> toward <signpostText>Den Haag</signpostText>",
        "mainAnnouncement": {
          "point": {
            "latitude": 52.2333647,
            "longitude": 4.6440652
          },
          "pointIndex": 463,
          "maneuver": "STRAIGHT",
          "distanceInMeters": 800
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 52.2324094,
            "longitude": 4.6384373
          },
          "pointIndex": 472,
          "maneuver": "STRAIGHT",
          "distanceInMeters": 400
        },
        "roadShieldReferences": [
          {
            "reference": "nld-highway",
            "shieldContent": "A44"
          }
        ],
        "signpostRoadShieldReferences": [
          {
            "reference": "nld-highway",
            "shieldContent": "A44"
          }
        ]
      },
      {
        "routeOffsetInMeters": 27306,
        "travelTimeInSeconds": 1611,
        "point": {
          "latitude": 52.23119,
          "longitude": 4.62401
        },
        "pointIndex": 482,
        "instructionType": "DIRECTION_INFO",
        "roadNumbers": [
          "A44"
        ],
        "phoneticRoadNumbers": [
          "a.vi.rən.ˈver.təx"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "nl-NL"
        ],
        "street": "Rijksweg A44",
        "phoneticStreet": "ˈrɛ⁀iks.ʋɛx ʔa.vi.rən.ˈver.təx",
        "phoneticStreetLanguageCode": "nl-NL",
        "countryCode": "NLD",
        "signpostText": "Den Haag",
        "phoneticSignpostText": "dɛn ˈhax",
        "phoneticSignpostTextLanguageCode": "nl-NL",
        "possibleCombineWithNext": false,
        "drivingSide": "RIGHT",
        "maneuver": "FOLLOW",
        "message": "Follow <street>Rijksweg A44</street>/<roadNumber>A44</roadNumber> toward <signpostText>Den Haag</signpostText>",
        "mainAnnouncement": {
          "point": {
            "latitude": 52.2313032,
            "longitude": 4.625471
          },
          "pointIndex": 480,
          "maneuver": "FOLLOW",
          "distanceInMeters": 100
        },
        "roadShieldReferences": [
          {
            "reference": "nld-highway",
            "shieldContent": "A44"
          }
        ],
        "signpostRoadShieldReferences": [
          {
            "reference": "nld-highway",
            "shieldContent": "A44"
          }
        ]
      },
      {
        "routeOffsetInMeters": 46313,
        "travelTimeInSeconds": 2521,
        "point": {
          "latitude": 52.14185,
          "longitude": 4.41502
        },
        "pointIndex": 750,
        "instructionType": "TURN",
        "roadNumbers": [
          "N44"
        ],
        "phoneticRoadNumbers": [
          "ˌɛn.vi.rən.ˈver.təx"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "nl-NL"
        ],
        "street": "Rijksstraatweg",
        "phoneticStreet": "ˈrɛ⁀iks.ˌstrat.ʋɛx",
        "phoneticStreetLanguageCode": "nl-NL",
        "countryCode": "NLD",
        "signpostText": "Den Haag",
        "phoneticSignpostText": "dɛn ˈhax",
        "phoneticSignpostTextLanguageCode": "nl-NL",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": 0,
        "possibleCombineWithNext": false,
        "drivingSide": "RIGHT",
        "maneuver": "STRAIGHT",
        "message": "Keep straight on at <street>Rijksstraatweg</street>/<roadNumber>N44</roadNumber> toward <signpostText>Den Haag</signpostText>",
        "mainAnnouncement": {
          "point": {
            "latitude": 52.1460518,
            "longitude": 4.4244844
          },
          "pointIndex": 736,
          "maneuver": "STRAIGHT",
          "distanceInMeters": 800
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 52.1438239,
            "longitude": 4.4199041
          },
          "pointIndex": 741,
          "maneuver": "STRAIGHT",
          "distanceInMeters": 400
        },
        "roadShieldReferences": [
          {
            "reference": "nld-primary",
            "shieldContent": "N44"
          }
        ],
        "signpostRoadShieldReferences": [
          {
            "reference": "nld-primary",
            "shieldContent": "N44"
          }
        ]
      },
      {
        "routeOffsetInMeters": 46638,
        "travelTimeInSeconds": 2555,
        "point": {
          "latitude": 52.14004,
          "longitude": 4.41128
        },
        "pointIndex": 756,
        "instructionType": "DIRECTION_INFO",
        "roadNumbers": [
          "N44"
        ],
        "phoneticRoadNumbers": [
          "ˌɛn.vi.rən.ˈver.təx"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "nl-NL"
        ],
        "street": "Rijksstraatweg",
        "phoneticStreet": "ˈrɛ⁀iks.ˌstrat.ʋɛx",
        "phoneticStreetLanguageCode": "nl-NL",
        "countryCode": "NLD",
        "signpostText": "Scheveningen-Haven",
        "possibleCombineWithNext": false,
        "drivingSide": "RIGHT",
        "maneuver": "FOLLOW",
        "message": "Follow <street>Rijksstraatweg</street>/<roadNumber>N44</roadNumber> toward <signpostText>Scheveningen-Haven</signpostText>",
        "mainAnnouncement": {
          "point": {
            "latitude": 52.1406107,
            "longitude": 4.4124193
          },
          "pointIndex": 754,
          "maneuver": "FOLLOW",
          "distanceInMeters": 100
        },
        "roadShieldReferences": [
          {
            "reference": "nld-primary",
            "shieldContent": "N44"
          }
        ]
      },
      {
        "routeOffsetInMeters": 55412,
        "travelTimeInSeconds": 3232,
        "point": {
          "latitude": 52.08669,
          "longitude": 4.31787
        },
        "pointIndex": 897,
        "instructionType": "TURN",
        "street": "Zuid-Hollandlaan",
        "phoneticStreet": "ˈzœ⁀yt ˈhɔ.lɑnt.lan",
        "phoneticStreetLanguageCode": "nl-NL",
        "countryCode": "NLD",
        "junctionType": "BIFURCATION",
        "turnAngleInDecimalDegrees": -45,
        "possibleCombineWithNext": true,
        "drivingSide": "RIGHT",
        "maneuver": "KEEP_LEFT",
        "message": "Keep left at <street>Zuid-Hollandlaan</street>",
        "combinedMessage": "Keep left at <street>Zuid-Hollandlaan</street> then turn left onto <street>Koningskade</street>/<roadNumber>s100</roadNumber>",
        "earlyWarningAnnouncement": {
          "point": {
            "latitude": 52.0899475,
            "longitude": 4.3248359
          },
          "pointIndex": 876,
          "maneuver": "AHEAD_KEEP_LEFT",
          "distanceInMeters": 600
        },
        "mainAnnouncement": {
          "point": {
            "latitude": 52.0888478,
            "longitude": 4.3225289
          },
          "pointIndex": 879,
          "maneuver": "KEEP_LEFT",
          "distanceInMeters": 400
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 52.0870918,
            "longitude": 4.3188447
          },
          "pointIndex": 894,
          "maneuver": "KEEP_LEFT",
          "distanceInMeters": 80
        }
      },
      {
        "routeOffsetInMeters": 55568,
        "travelTimeInSeconds": 3303,
        "point": {
          "latitude": 52.08607,
          "longitude": 4.31585
        },
        "pointIndex": 904,
        "instructionType": "TURN",
        "roadNumbers": [
          "s100"
        ],
        "phoneticRoadNumbers": [
          "ˌɛs.ˈhɔn.dərt"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "nl-NL"
        ],
        "street": "Koningskade",
        "phoneticStreet": "ˈko.nɪŋs.ˌka.də",
        "phoneticStreetLanguageCode": "nl-NL",
        "countryCode": "NLD",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": -90,
        "possibleCombineWithNext": true,
        "drivingSide": "RIGHT",
        "maneuver": "TURN_LEFT",
        "message": "Turn left onto <street>Koningskade</street>/<roadNumber>s100</roadNumber>",
        "combinedMessage": "Turn left onto <street>Koningskade</street>/<roadNumber>s100</roadNumber> then turn right onto <street>Korte Voorhout</street>",
        "mainAnnouncement": {
          "point": {
            "latitude": 52.0864141,
            "longitude": 4.3171926
          },
          "pointIndex": 901,
          "maneuver": "TURN_LEFT",
          "distanceInMeters": 100
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 52.0861318,
            "longitude": 4.316124
          },
          "pointIndex": 903,
          "maneuver": "TURN_LEFT",
          "distanceInMeters": 20
        },
        "roadShieldReferences": [
          {
            "reference": "nld-connector",
            "shieldContent": "s100"
          }
        ]
      },
      {
        "routeOffsetInMeters": 55849,
        "travelTimeInSeconds": 3339,
        "point": {
          "latitude": 52.08389,
          "longitude": 4.31753
        },
        "pointIndex": 915,
        "instructionType": "TURN",
        "street": "Korte Voorhout",
        "phoneticStreet": "ˈkɔr.tə ˈvor.hɑ⁀ut",
        "phoneticStreetLanguageCode": "nl-NL",
        "countryCode": "NLD",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": 90,
        "possibleCombineWithNext": false,
        "drivingSide": "RIGHT",
        "maneuver": "TURN_RIGHT",
        "message": "Turn right onto <street>Korte Voorhout</street>",
        "mainAnnouncement": {
          "point": {
            "latitude": 52.0854363,
            "longitude": 4.3160705
          },
          "pointIndex": 909,
          "maneuver": "TURN_RIGHT",
          "distanceInMeters": 200
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 52.0844219,
            "longitude": 4.3170016
          },
          "pointIndex": 913,
          "maneuver": "TURN_RIGHT",
          "distanceInMeters": 70
        }
      },
      {
        "routeOffsetInMeters": 56565,
        "travelTimeInSeconds": 3489,
        "point": {
          "latitude": 52.08019,
          "longitude": 4.31014
        },
        "pointIndex": 946,
        "instructionType": "LOCATION_ARRIVAL",
        "street": "Lange Vijverberg",
        "phoneticStreet": "ˈlɑŋ.ə ˈvɛ⁀i.vər.bɛrx",
        "phoneticStreetLanguageCode": "nl-NL",
        "countryCode": "NLD",
        "possibleCombineWithNext": false,
        "drivingSide": "RIGHT",
        "maneuver": "ARRIVE",
        "message": "You have arrived at <street>Lange Vijverberg</street>",
        "mainAnnouncement": {
          "point": {
            "latitude": 52.0811579,
            "longitude": 4.312562
          },
          "pointIndex": 938,
          "maneuver": "ARRIVE",
          "distanceInMeters": 200
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 52.0803815,
            "longitude": 4.3104423
          },
          "pointIndex": 942,
          "maneuver": "ARRIVE",
          "distanceInMeters": 30
        }
      }
    ],
    "instructionGroups": [
      {
        "firstInstructionIndex": 0,
        "lastInstructionIndex": 5,
        "groupMessage": "Leave from <street>Nassaukade</street>. Take the <roadNumber>s100</roadNumber> then follow <street>Jan van Galenstraat</street>/<roadNumber>s105</roadNumber>. Continue on <roadNumber>A10</roadNumber>/<roadNumber>E22</roadNumber> toward <signpostText>Den Haag</signpostText>",
        "groupLengthInMeters": 6548
      },
      {
        "firstInstructionIndex": 6,
        "lastInstructionIndex": 10,
        "groupMessage": "Take the <roadNumber>A4</roadNumber>/<roadNumber>E19</roadNumber> toward <signpostText>Den Haag</signpostText>",
        "groupLengthInMeters": 18396
      },
      {
        "firstInstructionIndex": 11,
        "lastInstructionIndex": 14,
        "groupMessage": "Take the <street>Rijksweg A44</street>/<roadNumber>A44</roadNumber> toward <signpostText>Den Haag-Centrum</signpostText>, <signpostText>Den Haag</signpostText>",
        "groupLengthInMeters": 21369
      },
      {
        "firstInstructionIndex": 15,
        "lastInstructionIndex": 16,
        "groupMessage": "Take the <street>Rijksstraatweg</street>/<roadNumber>N44</roadNumber> toward <signpostText>Den Haag</signpostText>, <signpostText>Scheveningen-Haven</signpostText>",
        "groupLengthInMeters": 9099
      },
      {
        "firstInstructionIndex": 17,
        "lastInstructionIndex": 20,
        "groupMessage": "Take the <street>Koningskade</street>/<roadNumber>s100</roadNumber>. Continue to your destination at <street>Lange Vijverberg</street>",
        "groupLengthInMeters": 1153
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
      "pointIndex": 6,
      "travelTimeInSeconds": 29,
      "distanceInMeters": 129
    },
    {
      "pointIndex": 14,
      "travelTimeInSeconds": 51,
      "distanceInMeters": 271
    },
    {
      "pointIndex": 20,
      "travelTimeInSeconds": 92,
      "distanceInMeters": 391
    },
    {
      "pointIndex": 27,
      "travelTimeInSeconds": 138,
      "distanceInMeters": 688
    },
    {
      "pointIndex": 32,
      "travelTimeInSeconds": 174,
      "distanceInMeters": 762
    },
    {
      "pointIndex": 34,
      "travelTimeInSeconds": 193,
      "distanceInMeters": 796
    },
    {
      "pointIndex": 36,
      "travelTimeInSeconds": 205,
      "distanceInMeters": 815
    },
    {
      "pointIndex": 45,
      "travelTimeInSeconds": 225,
      "distanceInMeters": 989
    },
    {
      "pointIndex": 47,
      "travelTimeInSeconds": 278,
      "distanceInMeters": 1079
    },
    {
      "pointIndex": 55,
      "travelTimeInSeconds": 300,
      "distanceInMeters": 1263
    },
    {
      "pointIndex": 61,
      "travelTimeInSeconds": 325,
      "distanceInMeters": 1403
    },
    {
      "pointIndex": 77,
      "travelTimeInSeconds": 381,
      "distanceInMeters": 1850
    },
    {
      "pointIndex": 87,
      "travelTimeInSeconds": 454,
      "distanceInMeters": 2229
    },
    {
      "pointIndex": 88,
      "travelTimeInSeconds": 468,
      "distanceInMeters": 2241
    },
    {
      "pointIndex": 108,
      "travelTimeInSeconds": 520,
      "distanceInMeters": 2690
    },
    {
      "pointIndex": 112,
      "travelTimeInSeconds": 582,
      "distanceInMeters": 2886
    },
    {
      "pointIndex": 119,
      "travelTimeInSeconds": 623,
      "distanceInMeters": 3078
    },
    {
      "pointIndex": 125,
      "travelTimeInSeconds": 638,
      "distanceInMeters": 3259
    },
    {
      "pointIndex": 130,
      "travelTimeInSeconds": 675,
      "distanceInMeters": 3355
    },
    {
      "pointIndex": 151,
      "travelTimeInSeconds": 718,
      "distanceInMeters": 3993
    },
    {
      "pointIndex": 223,
      "travelTimeInSeconds": 870,
      "distanceInMeters": 7236
    },
    {
      "pointIndex": 356,
      "travelTimeInSeconds": 1151,
      "distanceInMeters": 15259
    },
    {
      "pointIndex": 399,
      "travelTimeInSeconds": 1281,
      "distanceInMeters": 18820
    },
    {
      "pointIndex": 460,
      "travelTimeInSeconds": 1554,
      "distanceInMeters": 25647
    },
    {
      "pointIndex": 631,
      "travelTimeInSeconds": 1980,
      "distanceInMeters": 37947
    },
    {
      "pointIndex": 711,
      "travelTimeInSeconds": 2343,
      "distanceInMeters": 43721
    },
    {
      "pointIndex": 751,
      "travelTimeInSeconds": 2523,
      "distanceInMeters": 46331
    },
    {
      "pointIndex": 768,
      "travelTimeInSeconds": 2604,
      "distanceInMeters": 47171
    },
    {
      "pointIndex": 799,
      "travelTimeInSeconds": 2761,
      "distanceInMeters": 50006
    },
    {
      "pointIndex": 816,
      "travelTimeInSeconds": 2819,
      "distanceInMeters": 50731
    },
    {
      "pointIndex": 840,
      "travelTimeInSeconds": 2931,
      "distanceInMeters": 52874
    },
    {
      "pointIndex": 843,
      "travelTimeInSeconds": 2953,
      "distanceInMeters": 53006
    },
    {
      "pointIndex": 856,
      "travelTimeInSeconds": 3014,
      "distanceInMeters": 53869
    },
    {
      "pointIndex": 864,
      "travelTimeInSeconds": 3062,
      "distanceInMeters": 54276
    },
    {
      "pointIndex": 866,
      "travelTimeInSeconds": 3091,
      "distanceInMeters": 54336
    },
    {
      "pointIndex": 879,
      "travelTimeInSeconds": 3147,
      "distanceInMeters": 55002
    },
    {
      "pointIndex": 881,
      "travelTimeInSeconds": 3158,
      "distanceInMeters": 55046
    },
    {
      "pointIndex": 884,
      "travelTimeInSeconds": 3199,
      "distanceInMeters": 55121
    },
    {
      "pointIndex": 901,
      "travelTimeInSeconds": 3241,
      "distanceInMeters": 55467
    },
    {
      "pointIndex": 903,
      "travelTimeInSeconds": 3269,
      "distanceInMeters": 55523
    },
    {
      "pointIndex": 905,
      "travelTimeInSeconds": 3304,
      "distanceInMeters": 55575
    },
    {
      "pointIndex": 914,
      "travelTimeInSeconds": 3326,
      "distanceInMeters": 55787
    },
    {
      "pointIndex": 917,
      "travelTimeInSeconds": 3348,
      "distanceInMeters": 55864
    },
    {
      "pointIndex": 918,
      "travelTimeInSeconds": 3373,
      "distanceInMeters": 55907
    },
    {
      "pointIndex": 925,
      "travelTimeInSeconds": 3414,
      "distanceInMeters": 56140
    },
    {
      "pointIndex": 938,
      "travelTimeInSeconds": 3446,
      "distanceInMeters": 56303
    },
    {
      "pointIndex": 945,
      "travelTimeInSeconds": 3485,
      "distanceInMeters": 56561
    },
    {
      "pointIndex": 946,
      "travelTimeInSeconds": 3489,
      "distanceInMeters": 56565
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
