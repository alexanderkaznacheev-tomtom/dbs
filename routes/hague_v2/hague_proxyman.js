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
    "lengthInMeters": 58155,
    "travelTimeInSeconds": 4011,
    "trafficDelayInSeconds": 461,
    "trafficLengthInMeters": 11820,
    "departureTime": "2024-01-23T17:02:02+01:00",
    "arrivalTime": "2024-01-23T18:08:53+01:00"
  },
  "legs": [
    {
      "summary": {
        "lengthInMeters": 58155,
        "travelTimeInSeconds": 4011,
        "trafficDelayInSeconds": 461,
        "trafficLengthInMeters": 11820,
        "departureTime": "2024-01-23T17:02:02+01:00",
        "arrivalTime": "2024-01-23T18:08:53+01:00"
      },
      "points": [
        {
          "latitude": 52.3662248,
          "longitude": 4.8776267
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
      "endPointIndex": 30,
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
      "endPointIndex": 125,
      "sectionType": "LOW_EMISSION_ZONE"
    },
    {
      "startPointIndex": 82,
      "endPointIndex": 134,
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
      "endPointIndex": 136,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 0,
      "endPointIndex": 196,
      "sectionType": "URBAN"
    },
    {
      "startPointIndex": 145,
      "endPointIndex": 198,
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
      "startPointIndex": 145,
      "endPointIndex": 198,
      "sectionType": "TRAFFIC",
      "simpleCategory": "JAM",
      "effectiveSpeedInKmh": 38,
      "delayInSeconds": 125,
      "magnitudeOfDelay": 1,
      "tec": {
        "causes": [
          {
            "mainCauseCode": 1
          }
        ],
        "effectCode": 4
      }
    },
    {
      "maxSpeedLimitInKmh": 80,
      "startPointIndex": 136,
      "endPointIndex": 216,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 332,
      "endPointIndex": 341,
      "sectionType": "TUNNEL"
    },
    {
      "startPointIndex": 395,
      "endPointIndex": 477,
      "sectionType": "TRAFFIC",
      "simpleCategory": "JAM",
      "effectiveSpeedInKmh": 54,
      "delayInSeconds": 336,
      "magnitudeOfDelay": 1,
      "tec": {
        "causes": [
          {
            "mainCauseCode": 1
          }
        ],
        "effectCode": 4
      }
    },
    {
      "startPointIndex": 585,
      "endPointIndex": 593,
      "sectionType": "URBAN"
    },
    {
      "startPointIndex": 584,
      "endPointIndex": 612,
      "sectionType": "TUNNEL"
    },
    {
      "startPointIndex": 242,
      "endPointIndex": 713,
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
      "startPointIndex": 216,
      "endPointIndex": 739,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 70,
      "startPointIndex": 739,
      "endPointIndex": 746,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 100,
      "startPointIndex": 746,
      "endPointIndex": 765,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 782,
      "endPointIndex": 796,
      "sectionType": "URBAN"
    },
    {
      "maxSpeedLimitInKmh": 80,
      "startPointIndex": 765,
      "endPointIndex": 816,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 145,
      "endPointIndex": 828,
      "sectionType": "MOTORWAY"
    },
    {
      "startPointIndex": 774,
      "endPointIndex": 828,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "nld-highway",
          "shieldContent": "A12"
        }
      ]
    },
    {
      "startPointIndex": 830,
      "endPointIndex": 832,
      "sectionType": "TUNNEL"
    },
    {
      "maxSpeedLimitInKmh": 70,
      "startPointIndex": 816,
      "endPointIndex": 836,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 869,
      "endPointIndex": 880,
      "sectionType": "TUNNEL"
    },
    {
      "startPointIndex": 875,
      "endPointIndex": 885,
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
      "startPointIndex": 836,
      "endPointIndex": 915,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 0,
      "endPointIndex": 915,
      "sectionType": "COUNTRY",
      "countryCode": "NLD"
    },
    {
      "startPointIndex": 886,
      "endPointIndex": 915,
      "sectionType": "LOW_EMISSION_ZONE"
    },
    {
      "startPointIndex": 0,
      "endPointIndex": 915,
      "sectionType": "TRAVEL_MODE",
      "travelMode": "car"
    },
    {
      "startPointIndex": 822,
      "endPointIndex": 915,
      "sectionType": "URBAN"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
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
      "startPointIndex": 24,
      "endPointIndex": 26,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
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
      "startPointIndex": 26,
      "endPointIndex": 27,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
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
      "startPointIndex": 27,
      "endPointIndex": 28,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
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
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 28,
      "endPointIndex": 29,
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
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 29,
      "endPointIndex": 31,
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
      "startPointIndex": 31,
      "endPointIndex": 32,
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
      "startPointIndex": 32,
      "endPointIndex": 40,
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
      "startPointIndex": 41,
      "endPointIndex": 42,
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
      "startPointIndex": 42,
      "endPointIndex": 64,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT_U_TURN",
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
      "startPointIndex": 65,
      "endPointIndex": 66,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT_U_TURN"
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
      "startPointIndex": 66,
      "endPointIndex": 66,
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
      "startPointIndex": 66,
      "endPointIndex": 72,
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
      "startPointIndex": 74,
      "endPointIndex": 80,
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
      "startPointIndex": 81,
      "endPointIndex": 82,
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
      "startPointIndex": 82,
      "endPointIndex": 106,
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
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 107,
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
            "RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "DOUBLE_SOLID",
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
      "startPointIndex": 109,
      "endPointIndex": 111,
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
      "startPointIndex": 111,
      "endPointIndex": 115,
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
            "SLIGHT_LEFT"
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
      "properties": [],
      "startPointIndex": 118,
      "endPointIndex": 119,
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
            "SLIGHT_LEFT"
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
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 119,
      "endPointIndex": 120,
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
            "SLIGHT_LEFT"
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
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 120,
      "endPointIndex": 122,
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
            "SLIGHT_LEFT"
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
        "DOUBLE_SOLID",
        "DOUBLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 122,
      "endPointIndex": 124,
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
            "SLIGHT_LEFT"
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
      "startPointIndex": 124,
      "endPointIndex": 124,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
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
        "LONG_DASHED",
        "DOUBLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 124,
      "endPointIndex": 125,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
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
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 125,
      "endPointIndex": 125,
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
            "SLIGHT_LEFT"
          ]
        },
        {
          "directions": [
            "SLIGHT_LEFT"
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
      "properties": [],
      "startPointIndex": 125,
      "endPointIndex": 127,
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
            "SLIGHT_LEFT"
          ]
        },
        {
          "directions": [
            "SLIGHT_LEFT"
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
            "SLIGHT_LEFT"
          ]
        },
        {
          "directions": [
            "SLIGHT_LEFT"
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
      "properties": [],
      "startPointIndex": 129,
      "endPointIndex": 130,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "DOUBLE_SOLID",
        "SINGLE_SOLID",
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
      "startPointIndex": 131,
      "endPointIndex": 131,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT_U_TURN",
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
      "startPointIndex": 131,
      "endPointIndex": 134,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT_U_TURN"
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
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 134,
      "endPointIndex": 134,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT_U_TURN"
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
      "startPointIndex": 134,
      "endPointIndex": 135,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT_U_TURN"
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
      "startPointIndex": 135,
      "endPointIndex": 135,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 135,
      "endPointIndex": 136,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
        "DASHED_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 171,
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
        "DASHED_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 172,
      "endPointIndex": 173,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
        "DASHED_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
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
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
        "DASHED_SOLID",
        "LONG_DASHED",
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
        "DASHED_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
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
        "LONG_DASHED",
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
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 179,
      "endPointIndex": 180,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
        "LONG_DASHED",
        "LONG_DASHED",
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
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
        "LONG_DASHED",
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
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
        "LONG_DASHED",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 183,
      "endPointIndex": 185,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
        "LONG_DASHED",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 185,
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
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
        "LONG_DASHED",
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
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
        "LONG_DASHED",
        "SHORT_DASHED",
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
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
        "LONG_DASHED",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 188,
      "endPointIndex": 189,
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
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
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
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 190,
      "endPointIndex": 192,
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
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
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
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
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
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
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
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
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
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 196,
      "endPointIndex": 197,
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
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 197,
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
        },
        {
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
      "startPointIndex": 198,
      "endPointIndex": 200,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 200,
      "endPointIndex": 201,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 201,
      "endPointIndex": 202,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 202,
      "endPointIndex": 207,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 222,
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
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 224,
      "endPointIndex": 226,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 226,
      "endPointIndex": 229,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 229,
      "endPointIndex": 231,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 231,
      "endPointIndex": 234,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 234,
      "endPointIndex": 237,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 237,
      "endPointIndex": 241,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 241,
      "endPointIndex": 242,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "properties": [],
      "startPointIndex": 242,
      "endPointIndex": 243,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "properties": [],
      "startPointIndex": 243,
      "endPointIndex": 244,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "properties": [],
      "startPointIndex": 244,
      "endPointIndex": 245,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "properties": [],
      "startPointIndex": 245,
      "endPointIndex": 246,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "properties": [
        "IS_MANEUVER"
      ],
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
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
        "SINGLE_SOLID",
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
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 248,
      "endPointIndex": 254,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 257,
      "endPointIndex": 259,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 259,
      "endPointIndex": 264,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 264,
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
        "LONG_DASHED",
        "SINGLE_SOLID",
        "LONG_DASHED",
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
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
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
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
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
      "startPointIndex": 268,
      "endPointIndex": 268,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "properties": [],
      "startPointIndex": 268,
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
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "properties": [],
      "startPointIndex": 270,
      "endPointIndex": 271,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "properties": [],
      "startPointIndex": 271,
      "endPointIndex": 272,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "properties": [],
      "startPointIndex": 272,
      "endPointIndex": 274,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "properties": [],
      "startPointIndex": 274,
      "endPointIndex": 275,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "properties": [],
      "startPointIndex": 276,
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
      "properties": [],
      "startPointIndex": 276,
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
      "properties": [
        "IS_MANEUVER"
      ],
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
        },
        {
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
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 279,
      "endPointIndex": 284,
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
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 429,
      "endPointIndex": 430,
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
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 430,
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
        "LONG_DASHED",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 432,
      "endPointIndex": 433,
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
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 433,
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
        "LONG_DASHED",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 434,
      "endPointIndex": 440,
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
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 440,
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
      "startPointIndex": 440,
      "endPointIndex": 443,
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
        },
        {
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
      "startPointIndex": 691,
      "endPointIndex": 692,
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
        },
        {
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
      "startPointIndex": 692,
      "endPointIndex": 693,
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
        },
        {
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
      "startPointIndex": 693,
      "endPointIndex": 696,
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
            "STRAIGHT",
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
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 696,
      "endPointIndex": 701,
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
            "STRAIGHT",
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
        "LONG_DASHED",
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
            "STRAIGHT",
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
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 702,
      "endPointIndex": 707,
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
            "STRAIGHT",
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
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 707,
      "endPointIndex": 707,
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
            "STRAIGHT",
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
        "SOLID_DASHED",
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
        "SOLID_DASHED",
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
        "SOLID_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 710,
      "endPointIndex": 711,
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
        "SOLID_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 711,
      "endPointIndex": 712,
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
        "SOLID_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 712,
      "endPointIndex": 713,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SOLID_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 713,
      "endPointIndex": 714,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SOLID_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 714,
      "endPointIndex": 715,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SOLID_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 715,
      "endPointIndex": 716,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 716,
      "endPointIndex": 718,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 718,
      "endPointIndex": 721,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 721,
      "endPointIndex": 723,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
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
      "startPointIndex": 728,
      "endPointIndex": 729,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
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
      "startPointIndex": 729,
      "endPointIndex": 730,
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
      "startPointIndex": 730,
      "endPointIndex": 731,
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
      "startPointIndex": 731,
      "endPointIndex": 732,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 732,
      "endPointIndex": 734,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
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
      "properties": [],
      "startPointIndex": 736,
      "endPointIndex": 739,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 739,
      "endPointIndex": 743,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 743,
      "endPointIndex": 744,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 744,
      "endPointIndex": 745,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 745,
      "endPointIndex": 747,
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
      "startPointIndex": 747,
      "endPointIndex": 747,
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
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 747,
      "endPointIndex": 750,
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
      "properties": [],
      "startPointIndex": 750,
      "endPointIndex": 751,
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
      "properties": [],
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
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 752,
      "endPointIndex": 753,
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
      "startPointIndex": 753,
      "endPointIndex": 756,
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
      "startPointIndex": 756,
      "endPointIndex": 757,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 758,
      "endPointIndex": 765,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 797,
      "endPointIndex": 800,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 800,
      "endPointIndex": 804,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "properties": [],
      "startPointIndex": 804,
      "endPointIndex": 806,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "properties": [],
      "startPointIndex": 806,
      "endPointIndex": 809,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "properties": [],
      "startPointIndex": 809,
      "endPointIndex": 809,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "properties": [],
      "startPointIndex": 809,
      "endPointIndex": 811,
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
      "properties": [],
      "startPointIndex": 811,
      "endPointIndex": 813,
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
      "properties": [],
      "startPointIndex": 813,
      "endPointIndex": 815,
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
      "properties": [],
      "startPointIndex": 815,
      "endPointIndex": 816,
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
      "properties": [],
      "startPointIndex": 816,
      "endPointIndex": 820,
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
      "properties": [],
      "startPointIndex": 820,
      "endPointIndex": 821,
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
      "properties": [],
      "startPointIndex": 821,
      "endPointIndex": 823,
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
      "properties": [],
      "startPointIndex": 823,
      "endPointIndex": 823,
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
      "properties": [],
      "startPointIndex": 823,
      "endPointIndex": 825,
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
      "properties": [],
      "startPointIndex": 825,
      "endPointIndex": 826,
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
      "properties": [],
      "startPointIndex": 826,
      "endPointIndex": 827,
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
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 827,
      "endPointIndex": 828,
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
      "startPointIndex": 828,
      "endPointIndex": 830,
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
      "startPointIndex": 830,
      "endPointIndex": 831,
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
      "startPointIndex": 831,
      "endPointIndex": 832,
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
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
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
            "STRAIGHT",
            "RIGHT"
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
      "startPointIndex": 833,
      "endPointIndex": 834,
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
            "STRAIGHT",
            "RIGHT"
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
      "properties": [],
      "startPointIndex": 834,
      "endPointIndex": 835,
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
            "STRAIGHT",
            "RIGHT"
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
      "properties": [],
      "startPointIndex": 835,
      "endPointIndex": 836,
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
            "STRAIGHT",
            "RIGHT"
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
      "properties": [],
      "startPointIndex": 836,
      "endPointIndex": 837,
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
            "STRAIGHT",
            "RIGHT"
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
      "properties": [],
      "startPointIndex": 837,
      "endPointIndex": 838,
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
      "startPointIndex": 838,
      "endPointIndex": 838,
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
        "SINGLE_SOLID",
        "LONG_DASHED",
        "DOUBLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 838,
      "endPointIndex": 839,
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
      "startPointIndex": 839,
      "endPointIndex": 839,
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
        "SINGLE_SOLID",
        "LONG_DASHED",
        "DOUBLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 839,
      "endPointIndex": 841,
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
      "startPointIndex": 841,
      "endPointIndex": 841,
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
        "SINGLE_SOLID",
        "LONG_DASHED",
        "DOUBLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 841,
      "endPointIndex": 841,
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
      "startPointIndex": 841,
      "endPointIndex": 841,
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
      "startPointIndex": 841,
      "endPointIndex": 842,
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
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 842,
      "endPointIndex": 845,
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
      "startPointIndex": 845,
      "endPointIndex": 849,
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
      "properties": [],
      "startPointIndex": 851,
      "endPointIndex": 852,
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
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 852,
      "endPointIndex": 855,
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
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 855,
      "endPointIndex": 855,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT_U_TURN",
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
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 855,
      "endPointIndex": 856,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT_U_TURN",
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
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 856,
      "endPointIndex": 857,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT_U_TURN",
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
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 857,
      "endPointIndex": 858,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT_U_TURN"
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
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 858,
      "endPointIndex": 858,
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
      "startPointIndex": 858,
      "endPointIndex": 859,
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
      "startPointIndex": 859,
      "endPointIndex": 865,
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
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 867,
      "endPointIndex": 868,
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
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 868,
      "endPointIndex": 869,
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
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 869,
      "endPointIndex": 870,
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
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 870,
      "endPointIndex": 871,
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
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 871,
      "endPointIndex": 873,
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
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 873,
      "endPointIndex": 874,
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
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 874,
      "endPointIndex": 875,
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
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 875,
      "endPointIndex": 875,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 875,
      "endPointIndex": 877,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 877,
      "endPointIndex": 880,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 880,
      "endPointIndex": 881,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 881,
      "endPointIndex": 882,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "DOUBLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 882,
      "endPointIndex": 884,
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
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 884,
      "endPointIndex": 886,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 886,
      "endPointIndex": 887,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT_U_TURN",
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
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 887,
      "endPointIndex": 888,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT_U_TURN"
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
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 888,
      "endPointIndex": 888,
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
      "startPointIndex": 888,
      "endPointIndex": 889,
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
      "startPointIndex": 889,
      "endPointIndex": 890,
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
      "startPointIndex": 890,
      "endPointIndex": 891,
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
      "startPointIndex": 891,
      "endPointIndex": 911,
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
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 915,
      "endPointIndex": 915,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 915,
      "endPointIndex": 915,
      "sectionType": "LANES"
    }
  ],
  "guidance": {
    "instructions": [
      {
        "drivingSide": "RIGHT",
        "maneuver": "DEPART",
        "maneuverPoint": {
          "latitude": 52.3662248,
          "longitude": 4.8776267
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "s100"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈnɑ.sɑ⁀u.ˌka.də",
            "phoneticLanguageCode": "nl-NL",
            "text": "Nassaukade"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "s100"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈnɑ.sɑ⁀u.ˌka.də",
            "phoneticLanguageCode": "nl-NL",
            "text": "Nassaukade"
          }
        },
        "routeOffsetInMeters": 0,
        "routePath": [
          {
            "distanceInMeters": 0,
            "point": {
              "latitude": 52.3662248,
              "longitude": 4.8776267
            },
            "travelTimeInSeconds": 0
          }
        ],
        "sideRoads": []
      },
      {
        "changeOfAngleInDegrees": -96,
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_LEFT",
        "maneuverPoint": {
          "latitude": 52.3718557,
          "longitude": 4.8741236
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "də ˈklɛrk.strat",
            "phoneticLanguageCode": "nl-NL",
            "text": "De Clercqstraat"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "s100"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈnɑ.sɑ⁀u.ˌka.də",
            "phoneticLanguageCode": "nl-NL",
            "text": "Nassaukade"
          }
        },
        "routeOffsetInMeters": 674,
        "routePath": [
          {
            "distanceInMeters": 674,
            "point": {
              "latitude": 52.3717564,
              "longitude": 4.8741639
            },
            "travelTimeInSeconds": 169
          },
          {
            "distanceInMeters": 685,
            "point": {
              "latitude": 52.3718557,
              "longitude": 4.8741236
            },
            "travelTimeInSeconds": 171
          },
          {
            "distanceInMeters": 693,
            "point": {
              "latitude": 52.3718289,
              "longitude": 4.874011
            },
            "travelTimeInSeconds": 181
          },
          {
            "distanceInMeters": 703,
            "point": {
              "latitude": 52.3717962,
              "longitude": 4.8738759
            },
            "travelTimeInSeconds": 182
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 597,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 544,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 418,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 205,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 108,
            "side": "LEFT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": 67,
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_RIGHT",
        "maneuverPoint": {
          "latitude": 52.3715499,
          "longitude": 4.8596075
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ɑd.mi.ˈral də ˈrœ⁀y.tər.ʋɛx",
            "phoneticLanguageCode": "nl-NL",
            "text": "Admiraal de Ruijterweg"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ɑd.mi.ˈral də ˈrœ⁀y.tər.ʋɛx",
            "phoneticLanguageCode": "nl-NL",
            "text": "Admiraal de Ruijterweg"
          }
        },
        "routeOffsetInMeters": 1748,
        "routePath": [
          {
            "distanceInMeters": 1748,
            "point": {
              "latitude": 52.3715499,
              "longitude": 4.8596075
            },
            "travelTimeInSeconds": 371
          },
          {
            "distanceInMeters": 1758,
            "point": {
              "latitude": 52.3716305,
              "longitude": 4.8595422
            },
            "travelTimeInSeconds": 373
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 958,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 900,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 797,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 657,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 615,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 493,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 429,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 268,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 185,
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
          "latitude": 52.3746935,
          "longitude": 4.8585373
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "s105"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈjɑn vɑŋ ˈɣa.lən.strat",
            "phoneticLanguageCode": "nl-NL",
            "text": "Jan van Galenstraat"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ɑd.mi.ˈral də ˈrœ⁀y.tər.ʋɛx",
            "phoneticLanguageCode": "nl-NL",
            "text": "Admiraal de Ruijterweg"
          }
        },
        "routeOffsetInMeters": 2100,
        "routePath": [
          {
            "distanceInMeters": 2100,
            "point": {
              "latitude": 52.3746371,
              "longitude": 4.8585615
            },
            "travelTimeInSeconds": 440
          },
          {
            "distanceInMeters": 2107,
            "point": {
              "latitude": 52.3746935,
              "longitude": 4.8585373
            },
            "travelTimeInSeconds": 441
          },
          {
            "distanceInMeters": 2117,
            "point": {
              "latitude": 52.3746845,
              "longitude": 4.8583875
            },
            "travelTimeInSeconds": 452
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
          "latitude": 52.3724779,
          "longitude": 4.8418754
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "A10"
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
              "countryCode": "NLD",
              "roadNumber": {
                "text": "s105"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈjɑn vɑŋ ˈɣa.lən.strat",
            "phoneticLanguageCode": "nl-NL",
            "text": "Jan van Galenstraat"
          }
        },
        "routeOffsetInMeters": 3217,
        "routePath": [
          {
            "distanceInMeters": 3217,
            "point": {
              "latitude": 52.3723277,
              "longitude": 4.8429644
            },
            "travelTimeInSeconds": 661
          },
          {
            "distanceInMeters": 3235,
            "point": {
              "latitude": 52.3723814,
              "longitude": 4.8427257
            },
            "travelTimeInSeconds": 663
          },
          {
            "distanceInMeters": 3249,
            "point": {
              "latitude": 52.372427,
              "longitude": 4.8425326
            },
            "travelTimeInSeconds": 665
          },
          {
            "distanceInMeters": 3251,
            "point": {
              "latitude": 52.3724297,
              "longitude": 4.8425031
            },
            "travelTimeInSeconds": 665
          },
          {
            "distanceInMeters": 3260,
            "point": {
              "latitude": 52.3724538,
              "longitude": 4.8423743
            },
            "travelTimeInSeconds": 666
          },
          {
            "distanceInMeters": 3267,
            "point": {
              "latitude": 52.3724619,
              "longitude": 4.8422804
            },
            "travelTimeInSeconds": 667
          },
          {
            "distanceInMeters": 3282,
            "point": {
              "latitude": 52.3724779,
              "longitude": 4.8420525
            },
            "travelTimeInSeconds": 668
          },
          {
            "distanceInMeters": 3294,
            "point": {
              "latitude": 52.3724779,
              "longitude": 4.8418754
            },
            "travelTimeInSeconds": 670
          },
          {
            "distanceInMeters": 3309,
            "point": {
              "latitude": 52.3724082,
              "longitude": 4.8416984
            },
            "travelTimeInSeconds": 671
          },
          {
            "distanceInMeters": 3316,
            "point": {
              "latitude": 52.3723572,
              "longitude": 4.8416287
            },
            "travelTimeInSeconds": 672
          },
          {
            "distanceInMeters": 3325,
            "point": {
              "latitude": 52.3722902,
              "longitude": 4.841567
            },
            "travelTimeInSeconds": 673
          },
          {
            "distanceInMeters": 3349,
            "point": {
              "latitude": 52.3720703,
              "longitude": 4.8415563
            },
            "travelTimeInSeconds": 675
          },
          {
            "distanceInMeters": 3359,
            "point": {
              "latitude": 52.3719811,
              "longitude": 4.8415615
            },
            "travelTimeInSeconds": 676
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 927,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 880,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 718,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 660,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 408,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 338,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 259,
            "side": "LEFT_AND_RIGHT"
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
            "phonetic": "dɛn ˈhax",
            "phoneticLanguageCode": "nl-NL",
            "text": "Den Haag"
          }
        }
      },
      {
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "maneuver": "KEEP_LEFT",
        "maneuverPoint": {
          "latitude": 52.3445132,
          "longitude": 4.8409072
        },
        "nextRoadInfo": {
          "properties": [
            "MOTORWAY",
            "CONTROLLED_ACCESS"
          ],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "A4"
              },
              "stateCode": ""
            },
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "E19"
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
            "MOTORWAY",
            "CONTROLLED_ACCESS"
          ],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "A10"
              },
              "stateCode": ""
            },
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "E22"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "text": ""
          }
        },
        "routeOffsetInMeters": 6430,
        "routePath": [
          {
            "distanceInMeters": 6430,
            "point": {
              "latitude": 52.3445132,
              "longitude": 4.8409072
            },
            "travelTimeInSeconds": 1045
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 444,
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
            "phonetic": "dɛn ˈhax",
            "phoneticLanguageCode": "nl-NL",
            "text": "Den Haag"
          }
        }
      },
      {
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "maneuver": "KEEP_LEFT",
        "maneuverPoint": {
          "latitude": 52.3387572,
          "longitude": 4.8200288
        },
        "nextRoadInfo": {
          "properties": [
            "MOTORWAY",
            "CONTROLLED_ACCESS"
          ],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "A4"
              },
              "stateCode": ""
            },
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "E19"
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
            "MOTORWAY",
            "CONTROLLED_ACCESS"
          ],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "A4"
              },
              "stateCode": ""
            },
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "E19"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "text": ""
          }
        },
        "routeOffsetInMeters": 8377,
        "routePath": [
          {
            "distanceInMeters": 8377,
            "point": {
              "latitude": 52.3387572,
              "longitude": 4.8200288
            },
            "travelTimeInSeconds": 1121
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
            "phonetic": "dɛn ˈhax",
            "phoneticLanguageCode": "nl-NL",
            "text": "Den Haag"
          }
        }
      },
      {
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "maneuver": "KEEP_LEFT",
        "maneuverPoint": {
          "latitude": 52.331813,
          "longitude": 4.800505
        },
        "nextRoadInfo": {
          "properties": [
            "MOTORWAY",
            "CONTROLLED_ACCESS"
          ],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "A4"
              },
              "stateCode": ""
            },
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "E19"
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
            "MOTORWAY",
            "CONTROLLED_ACCESS"
          ],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "A4"
              },
              "stateCode": ""
            },
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "E19"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "text": ""
          }
        },
        "routeOffsetInMeters": 9982,
        "routePath": [
          {
            "distanceInMeters": 9982,
            "point": {
              "latitude": 52.331813,
              "longitude": 4.800505
            },
            "travelTimeInSeconds": 1175
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
            "phonetic": "ˌrɔ.tər.ˈdɑm",
            "phoneticLanguageCode": "nl-NL",
            "text": "Rotterdam"
          }
        }
      },
      {
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "maneuver": "KEEP_LEFT",
        "maneuverPoint": {
          "latitude": 52.2384855,
          "longitude": 4.6553117
        },
        "nextRoadInfo": {
          "properties": [
            "MOTORWAY",
            "CONTROLLED_ACCESS"
          ],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "A4"
              },
              "stateCode": ""
            },
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "E19"
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
            "MOTORWAY",
            "CONTROLLED_ACCESS"
          ],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "A4"
              },
              "stateCode": ""
            },
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "E19"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈrɛ⁀iks.ʋɛx ʔa.ˈvir",
            "phoneticLanguageCode": "nl-NL",
            "text": "Rijksweg A4"
          }
        },
        "routeOffsetInMeters": 24830,
        "routePath": [
          {
            "distanceInMeters": 24830,
            "point": {
              "latitude": 52.2384855,
              "longitude": 4.6553117
            },
            "travelTimeInSeconds": 2072
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
            "phonetic": "ˌrɔ.tər.ˈdɑm",
            "phoneticLanguageCode": "nl-NL",
            "text": "Rotterdam"
          }
        }
      },
      {
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "maneuver": "EXIT_MOTORWAY_RIGHT",
        "maneuverPoint": {
          "latitude": 52.077738,
          "longitude": 4.4044688
        },
        "nextRoadInfo": {
          "properties": [
            "MOTORWAY",
            "CONTROLLED_ACCESS"
          ],
          "streetName": {
            "text": ""
          }
        },
        "previousRoadInfo": {
          "properties": [
            "MOTORWAY",
            "CONTROLLED_ACCESS"
          ],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "A4"
              },
              "stateCode": ""
            },
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "E19"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "text": ""
          }
        },
        "routeOffsetInMeters": 50025,
        "routePath": [
          {
            "distanceInMeters": 50025,
            "point": {
              "latitude": 52.077738,
              "longitude": 4.4044688
            },
            "travelTimeInSeconds": 3310
          }
        ],
        "sideRoads": [],
        "signpost": {
          "exitName": {
            "text": ""
          },
          "exitNumber": {
            "text": "8"
          },
          "towardName": {
            "phonetic": "dɛn ˈhax",
            "phoneticLanguageCode": "nl-NL",
            "text": "Den Haag"
          }
        }
      },
      {
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "maneuver": "KEEP_RIGHT",
        "maneuverPoint": {
          "latitude": 52.0683101,
          "longitude": 4.3825498
        },
        "nextRoadInfo": {
          "properties": [
            "MOTORWAY",
            "CONTROLLED_ACCESS"
          ],
          "streetName": {
            "text": ""
          }
        },
        "previousRoadInfo": {
          "properties": [
            "MOTORWAY",
            "CONTROLLED_ACCESS"
          ],
          "streetName": {
            "text": ""
          }
        },
        "routeOffsetInMeters": 51862,
        "routePath": [
          {
            "distanceInMeters": 51862,
            "point": {
              "latitude": 52.0683101,
              "longitude": 4.3825498
            },
            "travelTimeInSeconds": 3387
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
            "phonetic": "dɛn ˈhax",
            "phoneticLanguageCode": "nl-NL",
            "text": "Den Haag"
          }
        }
      },
      {
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "maneuver": "KEEP_RIGHT",
        "maneuverPoint": {
          "latitude": 52.0657969,
          "longitude": 4.3787411
        },
        "nextRoadInfo": {
          "properties": [
            "MOTORWAY",
            "CONTROLLED_ACCESS"
          ],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "A12"
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
            "MOTORWAY",
            "CONTROLLED_ACCESS"
          ],
          "streetName": {
            "text": ""
          }
        },
        "routeOffsetInMeters": 52246,
        "routePath": [
          {
            "distanceInMeters": 52246,
            "point": {
              "latitude": 52.0657969,
              "longitude": 4.3787411
            },
            "travelTimeInSeconds": 3408
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
            "phonetic": "dɛn ˈhax",
            "phoneticLanguageCode": "nl-NL",
            "text": "Den Haag"
          }
        }
      },
      {
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "maneuver": "EXIT_MOTORWAY_RIGHT",
        "maneuverPoint": {
          "latitude": 52.0785105,
          "longitude": 4.3347207
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
            "URBAN",
            "MOTORWAY",
            "CONTROLLED_ACCESS"
          ],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "A12"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈy.trɛxt.sə.ˌban",
            "phoneticLanguageCode": "nl-NL",
            "text": "Utrechtsebaan"
          }
        },
        "routeOffsetInMeters": 55933,
        "routePath": [
          {
            "distanceInMeters": 55933,
            "point": {
              "latitude": 52.0785105,
              "longitude": 4.3347207
            },
            "travelTimeInSeconds": 3586
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 532,
            "side": "RIGHT"
          }
        ],
        "signpost": {
          "exitName": {
            "text": ""
          },
          "exitNumber": {
            "text": "2"
          },
          "towardName": {
            "phonetic": "ˈru.tə",
            "phoneticLanguageCode": "nl-NL",
            "text": "route"
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
          "latitude": 52.0840386,
          "longitude": 4.3269101
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "bə.ˈzœ⁀y.dən.hɑ⁀ut.sə.ˌʋɛx",
            "phoneticLanguageCode": "nl-NL",
            "text": "Bezuidenhoutseweg"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈprɪns ˈklɑ⁀us.lan",
            "phoneticLanguageCode": "nl-NL",
            "text": "Prins Clauslaan"
          }
        },
        "routeOffsetInMeters": 56746,
        "routePath": [
          {
            "distanceInMeters": 56746,
            "point": {
              "latitude": 52.0839769,
              "longitude": 4.3269825
            },
            "travelTimeInSeconds": 3775
          },
          {
            "distanceInMeters": 56755,
            "point": {
              "latitude": 52.0840386,
              "longitude": 4.3269101
            },
            "travelTimeInSeconds": 3779
          },
          {
            "distanceInMeters": 56765,
            "point": {
              "latitude": 52.0839849,
              "longitude": 4.3267904
            },
            "travelTimeInSeconds": 3786
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 439,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 379,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 215,
            "side": "LEFT_AND_RIGHT"
          }
        ]
      },
      {
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "maneuver": "KEEP_LEFT",
        "maneuverPoint": {
          "latitude": 52.0828906,
          "longitude": 4.3240508
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "bə.ˈzœ⁀y.dən.hɑ⁀ut.sə.ˌʋɛx",
            "phoneticLanguageCode": "nl-NL",
            "text": "Bezuidenhoutseweg"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "bə.ˈzœ⁀y.dən.hɑ⁀ut.sə.ˌʋɛx",
            "phoneticLanguageCode": "nl-NL",
            "text": "Bezuidenhoutseweg"
          }
        },
        "routeOffsetInMeters": 56989,
        "routePath": [
          {
            "distanceInMeters": 56989,
            "point": {
              "latitude": 52.0828906,
              "longitude": 4.3240508
            },
            "travelTimeInSeconds": 3812
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 195,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 90,
            "side": "LEFT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": -78,
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_LEFT",
        "maneuverPoint": {
          "latitude": 52.0835745,
          "longitude": 4.3182385
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈkɔr.tə ˈvor.hɑ⁀ut",
            "phoneticLanguageCode": "nl-NL",
            "text": "Korte Voorhout"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "s100"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈko.nɪŋs.ˌka.də",
            "phoneticLanguageCode": "nl-NL",
            "text": "Koningskade"
          }
        },
        "routeOffsetInMeters": 57478,
        "routePath": [
          {
            "distanceInMeters": 57478,
            "point": {
              "latitude": 52.0835745,
              "longitude": 4.3182385
            },
            "travelTimeInSeconds": 3888
          },
          {
            "distanceInMeters": 57491,
            "point": {
              "latitude": 52.0835021,
              "longitude": 4.3180776
            },
            "travelTimeInSeconds": 3890
          },
          {
            "distanceInMeters": 57501,
            "point": {
              "latitude": 52.0834404,
              "longitude": 4.3179649
            },
            "travelTimeInSeconds": 3891
          }
        ],
        "sideRoads": []
      },
      {
        "drivingSide": "RIGHT",
        "maneuver": "ARRIVE",
        "maneuverPoint": {
          "latitude": 52.0801959,
          "longitude": 4.3101406
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈlɑŋ.ə ˈvɛ⁀i.vər.bɛrx",
            "phoneticLanguageCode": "nl-NL",
            "text": "Lange Vijverberg"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈlɑŋ.ə ˈvɛ⁀i.vər.bɛrx",
            "phoneticLanguageCode": "nl-NL",
            "text": "Lange Vijverberg"
          }
        },
        "routeOffsetInMeters": 58160,
        "routePath": [
          {
            "distanceInMeters": 58160,
            "point": {
              "latitude": 52.0801959,
              "longitude": 4.3101406
            },
            "travelTimeInSeconds": 0
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 627,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 507,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 462,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 388,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 312,
            "side": "RIGHT"
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
      "pointIndex": 9,
      "travelTimeInSeconds": 24,
      "distanceInMeters": 150
    },
    {
      "pointIndex": 15,
      "travelTimeInSeconds": 71,
      "distanceInMeters": 270
    },
    {
      "pointIndex": 21,
      "travelTimeInSeconds": 93,
      "distanceInMeters": 470
    },
    {
      "pointIndex": 23,
      "travelTimeInSeconds": 128,
      "distanceInMeters": 607
    },
    {
      "pointIndex": 28,
      "travelTimeInSeconds": 160,
      "distanceInMeters": 651
    },
    {
      "pointIndex": 30,
      "travelTimeInSeconds": 171,
      "distanceInMeters": 686
    },
    {
      "pointIndex": 31,
      "travelTimeInSeconds": 181,
      "distanceInMeters": 694
    },
    {
      "pointIndex": 40,
      "travelTimeInSeconds": 204,
      "distanceInMeters": 868
    },
    {
      "pointIndex": 42,
      "travelTimeInSeconds": 257,
      "distanceInMeters": 958
    },
    {
      "pointIndex": 50,
      "travelTimeInSeconds": 279,
      "distanceInMeters": 1142
    },
    {
      "pointIndex": 54,
      "travelTimeInSeconds": 302,
      "distanceInMeters": 1256
    },
    {
      "pointIndex": 73,
      "travelTimeInSeconds": 369,
      "distanceInMeters": 1743
    },
    {
      "pointIndex": 80,
      "travelTimeInSeconds": 436,
      "distanceInMeters": 2090
    },
    {
      "pointIndex": 82,
      "travelTimeInSeconds": 441,
      "distanceInMeters": 2108
    },
    {
      "pointIndex": 83,
      "travelTimeInSeconds": 455,
      "distanceInMeters": 2120
    },
    {
      "pointIndex": 103,
      "travelTimeInSeconds": 510,
      "distanceInMeters": 2569
    },
    {
      "pointIndex": 106,
      "travelTimeInSeconds": 548,
      "distanceInMeters": 2734
    },
    {
      "pointIndex": 111,
      "travelTimeInSeconds": 576,
      "distanceInMeters": 2816
    },
    {
      "pointIndex": 115,
      "travelTimeInSeconds": 610,
      "distanceInMeters": 2994
    },
    {
      "pointIndex": 120,
      "travelTimeInSeconds": 622,
      "distanceInMeters": 3138
    },
    {
      "pointIndex": 124,
      "travelTimeInSeconds": 661,
      "distanceInMeters": 3217
    },
    {
      "pointIndex": 151,
      "travelTimeInSeconds": 742,
      "distanceInMeters": 4229
    },
    {
      "pointIndex": 159,
      "travelTimeInSeconds": 779,
      "distanceInMeters": 4614
    },
    {
      "pointIndex": 191,
      "travelTimeInSeconds": 996,
      "distanceInMeters": 6106
    },
    {
      "pointIndex": 199,
      "travelTimeInSeconds": 1046,
      "distanceInMeters": 6453
    },
    {
      "pointIndex": 274,
      "travelTimeInSeconds": 1169,
      "distanceInMeters": 9792
    },
    {
      "pointIndex": 363,
      "travelTimeInSeconds": 1384,
      "distanceInMeters": 16145
    },
    {
      "pointIndex": 383,
      "travelTimeInSeconds": 1478,
      "distanceInMeters": 18136
    },
    {
      "pointIndex": 395,
      "travelTimeInSeconds": 1520,
      "distanceInMeters": 18912
    },
    {
      "pointIndex": 396,
      "travelTimeInSeconds": 1555,
      "distanceInMeters": 19341
    },
    {
      "pointIndex": 412,
      "travelTimeInSeconds": 1696,
      "distanceInMeters": 20660
    },
    {
      "pointIndex": 427,
      "travelTimeInSeconds": 1956,
      "distanceInMeters": 23468
    },
    {
      "pointIndex": 433,
      "travelTimeInSeconds": 2039,
      "distanceInMeters": 24366
    },
    {
      "pointIndex": 458,
      "travelTimeInSeconds": 2211,
      "distanceInMeters": 26599
    },
    {
      "pointIndex": 482,
      "travelTimeInSeconds": 2349,
      "distanceInMeters": 28771
    },
    {
      "pointIndex": 554,
      "travelTimeInSeconds": 2715,
      "distanceInMeters": 35854
    },
    {
      "pointIndex": 580,
      "travelTimeInSeconds": 2829,
      "distanceInMeters": 37900
    },
    {
      "pointIndex": 627,
      "travelTimeInSeconds": 2914,
      "distanceInMeters": 40028
    },
    {
      "pointIndex": 640,
      "travelTimeInSeconds": 2972,
      "distanceInMeters": 41162
    },
    {
      "pointIndex": 739,
      "travelTimeInSeconds": 3367,
      "distanceInMeters": 51413
    },
    {
      "pointIndex": 836,
      "travelTimeInSeconds": 3605,
      "distanceInMeters": 56241
    },
    {
      "pointIndex": 837,
      "travelTimeInSeconds": 3608,
      "distanceInMeters": 56271
    },
    {
      "pointIndex": 839,
      "travelTimeInSeconds": 3648,
      "distanceInMeters": 56337
    },
    {
      "pointIndex": 845,
      "travelTimeInSeconds": 3670,
      "distanceInMeters": 56493
    },
    {
      "pointIndex": 848,
      "travelTimeInSeconds": 3685,
      "distanceInMeters": 56547
    },
    {
      "pointIndex": 852,
      "travelTimeInSeconds": 3706,
      "distanceInMeters": 56647
    },
    {
      "pointIndex": 856,
      "travelTimeInSeconds": 3786,
      "distanceInMeters": 56763
    },
    {
      "pointIndex": 876,
      "travelTimeInSeconds": 3828,
      "distanceInMeters": 57195
    },
    {
      "pointIndex": 881,
      "travelTimeInSeconds": 3839,
      "distanceInMeters": 57345
    },
    {
      "pointIndex": 883,
      "travelTimeInSeconds": 3885,
      "distanceInMeters": 57459
    },
    {
      "pointIndex": 894,
      "travelTimeInSeconds": 3940,
      "distanceInMeters": 57730
    },
    {
      "pointIndex": 904,
      "travelTimeInSeconds": 3969,
      "distanceInMeters": 57878
    },
    {
      "pointIndex": 914,
      "travelTimeInSeconds": 4008,
      "distanceInMeters": 58151
    },
    {
      "pointIndex": 915,
      "travelTimeInSeconds": 4011,
      "distanceInMeters": 58155
    }
  ]
};

var longRoute = {
  "summary": {
    "lengthInMeters": 74247,
    "travelTimeInSeconds": 5135,
    "trafficDelayInSeconds": 0,
    "trafficLengthInMeters": 0,
    "departureTime": "2024-01-23T17:02:02+01:00",
    "arrivalTime": "2024-01-23T18:27:36+01:00",
    "deviationDistance": 686,
    "deviationTime": 171,
    "deviationPoint": {
      "latitude": 52.3718557,
      "longitude": 4.8741236
    }
  },
  "legs": [
    {
      "summary": {
        "lengthInMeters": 74247,
        "travelTimeInSeconds": 5135,
        "trafficDelayInSeconds": 0,
        "trafficLengthInMeters": 0,
        "departureTime": "2024-01-23T17:02:02+01:00",
        "arrivalTime": "2024-01-23T18:27:36+01:00"
      },
      "points": [
        {
          "latitude": 52.3662248,
          "longitude": 4.8776267
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
          "latitude": 52.3719952,
          "longitude": 4.8740834
        },
        {
          "latitude": 52.3720595,
          "longitude": 4.8740646
        },
        {
          "latitude": 52.3721641,
          "longitude": 4.8740593
        },
        {
          "latitude": 52.3723197,
          "longitude": 4.87407
        },
        {
          "latitude": 52.3724833,
          "longitude": 4.8741344
        },
        {
          "latitude": 52.3725396,
          "longitude": 4.8741692
        },
        {
          "latitude": 52.3726603,
          "longitude": 4.8742658
        },
        {
          "latitude": 52.3727247,
          "longitude": 4.8742551
        },
        {
          "latitude": 52.3728749,
          "longitude": 4.8744375
        },
        {
          "latitude": 52.3730439,
          "longitude": 4.8746896
        },
        {
          "latitude": 52.3731109,
          "longitude": 4.8747915
        },
        {
          "latitude": 52.3732424,
          "longitude": 4.8749229
        },
        {
          "latitude": 52.3733497,
          "longitude": 4.8749819
        },
        {
          "latitude": 52.3735079,
          "longitude": 4.8750222
        },
        {
          "latitude": 52.3736528,
          "longitude": 4.8750329
        },
        {
          "latitude": 52.3737466,
          "longitude": 4.8750275
        },
        {
          "latitude": 52.3737869,
          "longitude": 4.8750785
        },
        {
          "latitude": 52.3741034,
          "longitude": 4.875108
        },
        {
          "latitude": 52.3741812,
          "longitude": 4.8751241
        },
        {
          "latitude": 52.3741972,
          "longitude": 4.8750249
        },
        {
          "latitude": 52.3742697,
          "longitude": 4.8745796
        },
        {
          "latitude": 52.3742643,
          "longitude": 4.8744884
        },
        {
          "latitude": 52.3743019,
          "longitude": 4.8743489
        },
        {
          "latitude": 52.3743233,
          "longitude": 4.8742282
        },
        {
          "latitude": 52.3743904,
          "longitude": 4.8739707
        },
        {
          "latitude": 52.3745406,
          "longitude": 4.8732948
        },
        {
          "latitude": 52.3746184,
          "longitude": 4.8729542
        },
        {
          "latitude": 52.3746479,
          "longitude": 4.8729649
        },
        {
          "latitude": 52.3746854,
          "longitude": 4.8729649
        },
        {
          "latitude": 52.3747069,
          "longitude": 4.8729542
        },
        {
          "latitude": 52.374723,
          "longitude": 4.8729408
        },
        {
          "latitude": 52.3747525,
          "longitude": 4.8729086
        },
        {
          "latitude": 52.3747686,
          "longitude": 4.8728684
        },
        {
          "latitude": 52.3747793,
          "longitude": 4.8728335
        },
        {
          "latitude": 52.3747846,
          "longitude": 4.8728201
        },
        {
          "latitude": 52.3747927,
          "longitude": 4.8727182000000004
        },
        {
          "latitude": 52.3747793,
          "longitude": 4.8726216
        },
        {
          "latitude": 52.3747605,
          "longitude": 4.8725733
        },
        {
          "latitude": 52.3747337,
          "longitude": 4.8725331
        },
        {
          "latitude": 52.3747149,
          "longitude": 4.872517
        },
        {
          "latitude": 52.3747981,
          "longitude": 4.8721683
        },
        {
          "latitude": 52.3748276,
          "longitude": 4.8720208
        },
        {
          "latitude": 52.3749,
          "longitude": 4.8717284
        },
        {
          "latitude": 52.3749831,
          "longitude": 4.8713824
        },
        {
          "latitude": 52.3750529,
          "longitude": 4.8710927
        },
        {
          "latitude": 52.3752326,
          "longitude": 4.8704061
        },
        {
          "latitude": 52.3752782,
          "longitude": 4.8703578
        },
        {
          "latitude": 52.375305,
          "longitude": 4.8702773
        },
        {
          "latitude": 52.3753425,
          "longitude": 4.8701325
        },
        {
          "latitude": 52.375356,
          "longitude": 4.8700735
        },
        {
          "latitude": 52.3754311,
          "longitude": 4.8698428
        },
        {
          "latitude": 52.3754901,
          "longitude": 4.8696524
        },
        {
          "latitude": 52.3755276,
          "longitude": 4.8695397
        },
        {
          "latitude": 52.3756725,
          "longitude": 4.8690382
        },
        {
          "latitude": 52.3756832,
          "longitude": 4.8689845
        },
        {
          "latitude": 52.3757368,
          "longitude": 4.8687378
        },
        {
          "latitude": 52.3758119,
          "longitude": 4.8683515
        },
        {
          "latitude": 52.3758361,
          "longitude": 4.8680618
        },
        {
          "latitude": 52.3758468,
          "longitude": 4.8676461
        },
        {
          "latitude": 52.3758414,
          "longitude": 4.8674583
        },
        {
          "latitude": 52.3758253,
          "longitude": 4.8671418
        },
        {
          "latitude": 52.375761,
          "longitude": 4.8667127
        },
        {
          "latitude": 52.3757342,
          "longitude": 4.866533
        },
        {
          "latitude": 52.3756939,
          "longitude": 4.8661923
        },
        {
          "latitude": 52.3756805,
          "longitude": 4.8660985
        },
        {
          "latitude": 52.3755008,
          "longitude": 4.8649988
        },
        {
          "latitude": 52.3754793,
          "longitude": 4.8647198
        },
        {
          "latitude": 52.3754418,
          "longitude": 4.8644409
        },
        {
          "latitude": 52.375401599999996,
          "longitude": 4.8641619
        },
        {
          "latitude": 52.3753801,
          "longitude": 4.8640037
        },
        {
          "latitude": 52.3753399,
          "longitude": 4.8636657
        },
        {
          "latitude": 52.3752755,
          "longitude": 4.8631185
        },
        {
          "latitude": 52.3752353,
          "longitude": 4.8628208
        },
        {
          "latitude": 52.3752138,
          "longitude": 4.8626706
        },
        {
          "latitude": 52.3753157,
          "longitude": 4.8626438
        },
        {
          "latitude": 52.3756644,
          "longitude": 4.8625392
        },
        {
          "latitude": 52.3757637,
          "longitude": 4.8625204
        },
        {
          "latitude": 52.3758146,
          "longitude": 4.8625284
        },
        {
          "latitude": 52.3761553,
          "longitude": 4.8626518
        },
        {
          "latitude": 52.3766005,
          "longitude": 4.8628181
        },
        {
          "latitude": 52.3767883,
          "longitude": 4.8628905
        },
        {
          "latitude": 52.3768151,
          "longitude": 4.8628959
        },
        {
          "latitude": 52.3768526,
          "longitude": 4.8629013
        },
        {
          "latitude": 52.3769063,
          "longitude": 4.8628905
        },
        {
          "latitude": 52.377094,
          "longitude": 4.8628262
        },
        {
          "latitude": 52.3771745,
          "longitude": 4.8628342
        },
        {
          "latitude": 52.377263,
          "longitude": 4.862802
        },
        {
          "latitude": 52.3773757,
          "longitude": 4.8627591
        },
        {
          "latitude": 52.3775607,
          "longitude": 4.8627001
        },
        {
          "latitude": 52.3776707,
          "longitude": 4.8626626
        },
        {
          "latitude": 52.377829,
          "longitude": 4.8626143
        },
        {
          "latitude": 52.3779094,
          "longitude": 4.8625848
        },
        {
          "latitude": 52.3782098,
          "longitude": 4.8624909
        },
        {
          "latitude": 52.378234,
          "longitude": 4.8624587
        },
        {
          "latitude": 52.3788375,
          "longitude": 4.8622227
        },
        {
          "latitude": 52.3794061,
          "longitude": 4.8620081
        },
        {
          "latitude": 52.3795134,
          "longitude": 4.8619679
        },
        {
          "latitude": 52.3796824,
          "longitude": 4.8618713
        },
        {
          "latitude": 52.3798031,
          "longitude": 4.8617533
        },
        {
          "latitude": 52.3798674,
          "longitude": 4.8616862
        },
        {
          "latitude": 52.3800579,
          "longitude": 4.8613805
        },
        {
          "latitude": 52.3807418,
          "longitude": 4.8602298
        },
        {
          "latitude": 52.3811951,
          "longitude": 4.8594332
        },
        {
          "latitude": 52.3814526,
          "longitude": 4.8589557
        },
        {
          "latitude": 52.3819488,
          "longitude": 4.8581269
        },
        {
          "latitude": 52.3819917,
          "longitude": 4.8580626
        },
        {
          "latitude": 52.3820373,
          "longitude": 4.8580277
        },
        {
          "latitude": 52.3823243,
          "longitude": 4.8575073
        },
        {
          "latitude": 52.3824021,
          "longitude": 4.8573062
        },
        {
          "latitude": 52.3824209,
          "longitude": 4.8572391
        },
        {
          "latitude": 52.382445,
          "longitude": 4.8571023
        },
        {
          "latitude": 52.3824531,
          "longitude": 4.8570246
        },
        {
          "latitude": 52.3824424,
          "longitude": 4.8560965
        },
        {
          "latitude": 52.3824424,
          "longitude": 4.855957
        },
        {
          "latitude": 52.3824424,
          "longitude": 4.8555681
        },
        {
          "latitude": 52.382724,
          "longitude": 4.8555574
        },
        {
          "latitude": 52.3828125,
          "longitude": 4.8555547
        },
        {
          "latitude": 52.3840436,
          "longitude": 4.8555198
        },
        {
          "latitude": 52.3841161,
          "longitude": 4.8555171
        },
        {
          "latitude": 52.3841617,
          "longitude": 4.855544
        },
        {
          "latitude": 52.3845318,
          "longitude": 4.8555198
        },
        {
          "latitude": 52.3845828,
          "longitude": 4.8555145
        },
        {
          "latitude": 52.3846874,
          "longitude": 4.8555037
        },
        {
          "latitude": 52.3848993,
          "longitude": 4.8554796
        },
        {
          "latitude": 52.3850253,
          "longitude": 4.8554608
        },
        {
          "latitude": 52.3851192,
          "longitude": 4.855442
        },
        {
          "latitude": 52.3851165,
          "longitude": 4.8553696
        },
        {
          "latitude": 52.3850897,
          "longitude": 4.8545006
        },
        {
          "latitude": 52.3850736,
          "longitude": 4.8538059
        },
        {
          "latitude": 52.3850441,
          "longitude": 4.8516816
        },
        {
          "latitude": 52.3850414,
          "longitude": 4.8515394
        },
        {
          "latitude": 52.3850065,
          "longitude": 4.8499489
        },
        {
          "latitude": 52.3849985,
          "longitude": 4.8491308
        },
        {
          "latitude": 52.3850119,
          "longitude": 4.848412
        },
        {
          "latitude": 52.3850065,
          "longitude": 4.8475617
        },
        {
          "latitude": 52.3850039,
          "longitude": 4.8473847
        },
        {
          "latitude": 52.3849958,
          "longitude": 4.8463306
        },
        {
          "latitude": 52.3849931,
          "longitude": 4.8460194
        },
        {
          "latitude": 52.3850146,
          "longitude": 4.8455822
        },
        {
          "latitude": 52.3850119,
          "longitude": 4.8452014
        },
        {
          "latitude": 52.3850039,
          "longitude": 4.8447052
        },
        {
          "latitude": 52.3850012,
          "longitude": 4.8444584
        },
        {
          "latitude": 52.3849744,
          "longitude": 4.8438844
        },
        {
          "latitude": 52.3849556,
          "longitude": 4.8433238
        },
        {
          "latitude": 52.3849529,
          "longitude": 4.8432541
        },
        {
          "latitude": 52.3849341,
          "longitude": 4.8427525
        },
        {
          "latitude": 52.3849207,
          "longitude": 4.8423716
        },
        {
          "latitude": 52.3849019,
          "longitude": 4.8405907
        },
        {
          "latitude": 52.3848939,
          "longitude": 4.8403573
        },
        {
          "latitude": 52.3848939,
          "longitude": 4.8402071
        },
        {
          "latitude": 52.3848885,
          "longitude": 4.8399737
        },
        {
          "latitude": 52.3848751,
          "longitude": 4.8392013
        },
        {
          "latitude": 52.3848644,
          "longitude": 4.8387936
        },
        {
          "latitude": 52.3848242,
          "longitude": 4.8376483
        },
        {
          "latitude": 52.3848349,
          "longitude": 4.8361167
        },
        {
          "latitude": 52.3848215,
          "longitude": 4.8352745
        },
        {
          "latitude": 52.3848081,
          "longitude": 4.8350465
        },
        {
          "latitude": 52.3848027,
          "longitude": 4.8346737
        },
        {
          "latitude": 52.3847973,
          "longitude": 4.8345289
        },
        {
          "latitude": 52.384792,
          "longitude": 4.8343599
        },
        {
          "latitude": 52.384792,
          "longitude": 4.8342875
        },
        {
          "latitude": 52.3847786,
          "longitude": 4.8339844
        },
        {
          "latitude": 52.3847678,
          "longitude": 4.8336706
        },
        {
          "latitude": 52.3847383,
          "longitude": 4.8317206
        },
        {
          "latitude": 52.3847142,
          "longitude": 4.830063
        },
        {
          "latitude": 52.3846659,
          "longitude": 4.8267317
        },
        {
          "latitude": 52.3846176,
          "longitude": 4.822585
        },
        {
          "latitude": 52.3845962,
          "longitude": 4.8210829
        },
        {
          "latitude": 52.3845935,
          "longitude": 4.8208898
        },
        {
          "latitude": 52.3845747,
          "longitude": 4.8194039
        },
        {
          "latitude": 52.384572,
          "longitude": 4.8191759
        },
        {
          "latitude": 52.3845747,
          "longitude": 4.8190632
        },
        {
          "latitude": 52.384572,
          "longitude": 4.8188648
        },
        {
          "latitude": 52.3845693,
          "longitude": 4.8186502
        },
        {
          "latitude": 52.3845693,
          "longitude": 4.8184785
        },
        {
          "latitude": 52.3845667,
          "longitude": 4.8183712
        },
        {
          "latitude": 52.3845667,
          "longitude": 4.8178616
        },
        {
          "latitude": 52.384564,
          "longitude": 4.8175961
        },
        {
          "latitude": 52.3845372,
          "longitude": 4.8151848
        },
        {
          "latitude": 52.3845023,
          "longitude": 4.8120117
        },
        {
          "latitude": 52.3844889,
          "longitude": 4.8109362
        },
        {
          "latitude": 52.3844352,
          "longitude": 4.8062637
        },
        {
          "latitude": 52.3844084,
          "longitude": 4.8050112
        },
        {
          "latitude": 52.384403,
          "longitude": 4.8044908
        },
        {
          "latitude": 52.3843896,
          "longitude": 4.8037988
        },
        {
          "latitude": 52.3843923,
          "longitude": 4.8035225
        },
        {
          "latitude": 52.3843923,
          "longitude": 4.803434
        },
        {
          "latitude": 52.3843843,
          "longitude": 4.8031604
        },
        {
          "latitude": 52.384387,
          "longitude": 4.8030505
        },
        {
          "latitude": 52.3843789,
          "longitude": 4.8027313
        },
        {
          "latitude": 52.3843682,
          "longitude": 4.8021573
        },
        {
          "latitude": 52.3843601,
          "longitude": 4.8014438
        },
        {
          "latitude": 52.3843682,
          "longitude": 4.8009959
        },
        {
          "latitude": 52.3843092,
          "longitude": 4.7946578
        },
        {
          "latitude": 52.3842797,
          "longitude": 4.792504
        },
        {
          "latitude": 52.3842689,
          "longitude": 4.7914848
        },
        {
          "latitude": 52.3842528,
          "longitude": 4.7900391
        },
        {
          "latitude": 52.3839927,
          "longitude": 4.7680664
        },
        {
          "latitude": 52.3839927,
          "longitude": 4.7679108
        },
        {
          "latitude": 52.3839873,
          "longitude": 4.7676533
        },
        {
          "latitude": 52.3839551,
          "longitude": 4.7650194
        },
        {
          "latitude": 52.3839176,
          "longitude": 4.7612375
        },
        {
          "latitude": 52.3838907,
          "longitude": 4.7589254
        },
        {
          "latitude": 52.3838907,
          "longitude": 4.7588342
        },
        {
          "latitude": 52.3838907,
          "longitude": 4.7584829
        },
        {
          "latitude": 52.38388,
          "longitude": 4.7576138
        },
        {
          "latitude": 52.3838854,
          "longitude": 4.7562325
        },
        {
          "latitude": 52.3839203,
          "longitude": 4.7550121
        },
        {
          "latitude": 52.3839337,
          "longitude": 4.7546232
        },
        {
          "latitude": 52.383939,
          "longitude": 4.7542423
        },
        {
          "latitude": 52.383939,
          "longitude": 4.7539017
        },
        {
          "latitude": 52.3839819,
          "longitude": 4.7526142
        },
        {
          "latitude": 52.3840007,
          "longitude": 4.7523218
        },
        {
          "latitude": 52.3841724,
          "longitude": 4.7513884
        },
        {
          "latitude": 52.3841858,
          "longitude": 4.751316
        },
        {
          "latitude": 52.3842448,
          "longitude": 4.751029
        },
        {
          "latitude": 52.3844004,
          "longitude": 4.7502834
        },
        {
          "latitude": 52.3844594,
          "longitude": 4.7500098
        },
        {
          "latitude": 52.3845345,
          "longitude": 4.7497416
        },
        {
          "latitude": 52.3845854,
          "longitude": 4.7496074
        },
        {
          "latitude": 52.3847651,
          "longitude": 4.7492722
        },
        {
          "latitude": 52.3850656,
          "longitude": 4.7488162
        },
        {
          "latitude": 52.3853311,
          "longitude": 4.7484112
        },
        {
          "latitude": 52.3855135,
          "longitude": 4.7480652
        },
        {
          "latitude": 52.3855323,
          "longitude": 4.7480196
        },
        {
          "latitude": 52.3855752,
          "longitude": 4.7479042
        },
        {
          "latitude": 52.385602,
          "longitude": 4.7477916
        },
        {
          "latitude": 52.3856181,
          "longitude": 4.7477299
        },
        {
          "latitude": 52.3856744,
          "longitude": 4.7473302
        },
        {
          "latitude": 52.3857254,
          "longitude": 4.7468716
        },
        {
          "latitude": 52.385779,
          "longitude": 4.7463995
        },
        {
          "latitude": 52.3857951,
          "longitude": 4.7462466
        },
        {
          "latitude": 52.3858112,
          "longitude": 4.7460938
        },
        {
          "latitude": 52.385838,
          "longitude": 4.7458711
        },
        {
          "latitude": 52.3860151,
          "longitude": 4.744066
        },
        {
          "latitude": 52.3860875,
          "longitude": 4.7433847
        },
        {
          "latitude": 52.3861599,
          "longitude": 4.7427008
        },
        {
          "latitude": 52.3862377,
          "longitude": 4.7419658
        },
        {
          "latitude": 52.3862538,
          "longitude": 4.7418103
        },
        {
          "latitude": 52.386294,
          "longitude": 4.7414777
        },
        {
          "latitude": 52.3863423,
          "longitude": 4.7409198
        },
        {
          "latitude": 52.3864067,
          "longitude": 4.7398737
        },
        {
          "latitude": 52.3864684,
          "longitude": 4.7390476
        },
        {
          "latitude": 52.3866856,
          "longitude": 4.7360381
        },
        {
          "latitude": 52.386691,
          "longitude": 4.735955
        },
        {
          "latitude": 52.3866963,
          "longitude": 4.7358692
        },
        {
          "latitude": 52.3867553,
          "longitude": 4.7348607
        },
        {
          "latitude": 52.3868117,
          "longitude": 4.7339407
        },
        {
          "latitude": 52.3868519,
          "longitude": 4.7329026
        },
        {
          "latitude": 52.38686,
          "longitude": 4.7320551
        },
        {
          "latitude": 52.3868546,
          "longitude": 4.7316822
        },
        {
          "latitude": 52.3868519,
          "longitude": 4.7313443
        },
        {
          "latitude": 52.3867875,
          "longitude": 4.7296974
        },
        {
          "latitude": 52.3867473,
          "longitude": 4.7291797
        },
        {
          "latitude": 52.3866588,
          "longitude": 4.7278494
        },
        {
          "latitude": 52.3866481,
          "longitude": 4.7273746
        },
        {
          "latitude": 52.3866427,
          "longitude": 4.7273102
        },
        {
          "latitude": 52.3865193,
          "longitude": 4.7256634
        },
        {
          "latitude": 52.386463,
          "longitude": 4.7249472
        },
        {
          "latitude": 52.386404,
          "longitude": 4.7241211
        },
        {
          "latitude": 52.3859856,
          "longitude": 4.718357
        },
        {
          "latitude": 52.3859534,
          "longitude": 4.7180325
        },
        {
          "latitude": 52.385897,
          "longitude": 4.717429
        },
        {
          "latitude": 52.3858809,
          "longitude": 4.7172841
        },
        {
          "latitude": 52.3857549,
          "longitude": 4.7162461
        },
        {
          "latitude": 52.385661,
          "longitude": 4.7155595
        },
        {
          "latitude": 52.3855832,
          "longitude": 4.7150901
        },
        {
          "latitude": 52.3855323,
          "longitude": 4.7144115
        },
        {
          "latitude": 52.3853499,
          "longitude": 4.713116
        },
        {
          "latitude": 52.3851246,
          "longitude": 4.7113752
        },
        {
          "latitude": 52.3850414,
          "longitude": 4.7107181
        },
        {
          "latitude": 52.3850173,
          "longitude": 4.7105196
        },
        {
          "latitude": 52.3849073,
          "longitude": 4.709613
        },
        {
          "latitude": 52.3848644,
          "longitude": 4.709141
        },
        {
          "latitude": 52.384859,
          "longitude": 4.7090337
        },
        {
          "latitude": 52.3848644,
          "longitude": 4.7088566
        },
        {
          "latitude": 52.3848939,
          "longitude": 4.7085884
        },
        {
          "latitude": 52.3849341,
          "longitude": 4.7082666
        },
        {
          "latitude": 52.3849824,
          "longitude": 4.7081485
        },
        {
          "latitude": 52.385028,
          "longitude": 4.7080171
        },
        {
          "latitude": 52.3850414,
          "longitude": 4.7079635
        },
        {
          "latitude": 52.3850575,
          "longitude": 4.7078964
        },
        {
          "latitude": 52.3850924,
          "longitude": 4.7076684
        },
        {
          "latitude": 52.3851112,
          "longitude": 4.707419
        },
        {
          "latitude": 52.3850951,
          "longitude": 4.7072902
        },
        {
          "latitude": 52.3850629,
          "longitude": 4.7070757
        },
        {
          "latitude": 52.3850039,
          "longitude": 4.7068664
        },
        {
          "latitude": 52.3849717,
          "longitude": 4.7067645
        },
        {
          "latitude": 52.38491,
          "longitude": 4.7066385
        },
        {
          "latitude": 52.3848724,
          "longitude": 4.7065714
        },
        {
          "latitude": 52.3848188,
          "longitude": 4.7064963
        },
        {
          "latitude": 52.3847437,
          "longitude": 4.7064131
        },
        {
          "latitude": 52.3846552,
          "longitude": 4.706338
        },
        {
          "latitude": 52.3845935,
          "longitude": 4.7062978
        },
        {
          "latitude": 52.3844782,
          "longitude": 4.7062415
        },
        {
          "latitude": 52.3843333,
          "longitude": 4.7062254
        },
        {
          "latitude": 52.384218,
          "longitude": 4.7062415
        },
        {
          "latitude": 52.3841509,
          "longitude": 4.7062603
        },
        {
          "latitude": 52.3840356,
          "longitude": 4.7063273
        },
        {
          "latitude": 52.3839015,
          "longitude": 4.7064427
        },
        {
          "latitude": 52.3838049,
          "longitude": 4.7065768
        },
        {
          "latitude": 52.3837486,
          "longitude": 4.7066921
        },
        {
          "latitude": 52.383711,
          "longitude": 4.7067162
        },
        {
          "latitude": 52.3834589,
          "longitude": 4.707022
        },
        {
          "latitude": 52.3833784,
          "longitude": 4.7070998
        },
        {
          "latitude": 52.3833087,
          "longitude": 4.7071508
        },
        {
          "latitude": 52.383188,
          "longitude": 4.7072071
        },
        {
          "latitude": 52.3829734,
          "longitude": 4.7072634
        },
        {
          "latitude": 52.3828125,
          "longitude": 4.7072875
        },
        {
          "latitude": 52.3827133,
          "longitude": 4.7073036
        },
        {
          "latitude": 52.3826113,
          "longitude": 4.7073224
        },
        {
          "latitude": 52.3825067,
          "longitude": 4.7073385
        },
        {
          "latitude": 52.3822278,
          "longitude": 4.7073814
        },
        {
          "latitude": 52.3821339,
          "longitude": 4.7073975
        },
        {
          "latitude": 52.3814794,
          "longitude": 4.7075021
        },
        {
          "latitude": 52.3811039,
          "longitude": 4.7075933
        },
        {
          "latitude": 52.3810154,
          "longitude": 4.7076228
        },
        {
          "latitude": 52.3809457,
          "longitude": 4.7076389
        },
        {
          "latitude": 52.3803583,
          "longitude": 4.7079501
        },
        {
          "latitude": 52.3800632,
          "longitude": 4.7080708
        },
        {
          "latitude": 52.3792237,
          "longitude": 4.7081834
        },
        {
          "latitude": 52.3788321,
          "longitude": 4.7082371
        },
        {
          "latitude": 52.3785478,
          "longitude": 4.7082692
        },
        {
          "latitude": 52.3770618,
          "longitude": 4.7085267
        },
        {
          "latitude": 52.3762357,
          "longitude": 4.7086555
        },
        {
          "latitude": 52.3761445,
          "longitude": 4.7086716
        },
        {
          "latitude": 52.3761016,
          "longitude": 4.7086769
        },
        {
          "latitude": 52.3759648,
          "longitude": 4.7086582
        },
        {
          "latitude": 52.3753721,
          "longitude": 4.7087601
        },
        {
          "latitude": 52.3752674,
          "longitude": 4.708752
        },
        {
          "latitude": 52.3749751,
          "longitude": 4.7087815
        },
        {
          "latitude": 52.3748812,
          "longitude": 4.708795
        },
        {
          "latitude": 52.374672,
          "longitude": 4.7088245
        },
        {
          "latitude": 52.3736072,
          "longitude": 4.7089854
        },
        {
          "latitude": 52.373347,
          "longitude": 4.7090095
        },
        {
          "latitude": 52.3732316,
          "longitude": 4.7090364
        },
        {
          "latitude": 52.3730385,
          "longitude": 4.7090122
        },
        {
          "latitude": 52.3729071,
          "longitude": 4.7089559
        },
        {
          "latitude": 52.3726818,
          "longitude": 4.7087923
        },
        {
          "latitude": 52.3725557,
          "longitude": 4.7086447
        },
        {
          "latitude": 52.3723653,
          "longitude": 4.7083175
        },
        {
          "latitude": 52.3722848,
          "longitude": 4.7081083
        },
        {
          "latitude": 52.3722124,
          "longitude": 4.7078401
        },
        {
          "latitude": 52.3721802,
          "longitude": 4.707647
        },
        {
          "latitude": 52.3721588,
          "longitude": 4.7073761
        },
        {
          "latitude": 52.3721051,
          "longitude": 4.70714
        },
        {
          "latitude": 52.372089,
          "longitude": 4.7066438
        },
        {
          "latitude": 52.3719817,
          "longitude": 4.7046456
        },
        {
          "latitude": 52.3719549,
          "longitude": 4.7041038
        },
        {
          "latitude": 52.3719093,
          "longitude": 4.7032723
        },
        {
          "latitude": 52.3719066,
          "longitude": 4.7031462
        },
        {
          "latitude": 52.3718718,
          "longitude": 4.7024354
        },
        {
          "latitude": 52.3718637,
          "longitude": 4.7022101
        },
        {
          "latitude": 52.371861,
          "longitude": 4.7021484
        },
        {
          "latitude": 52.3718557,
          "longitude": 4.7020277
        },
        {
          "latitude": 52.3717967,
          "longitude": 4.7016925
        },
        {
          "latitude": 52.3717779,
          "longitude": 4.7014269
        },
        {
          "latitude": 52.3717108,
          "longitude": 4.7008234
        },
        {
          "latitude": 52.3715794,
          "longitude": 4.7001985
        },
        {
          "latitude": 52.3714909,
          "longitude": 4.699823
        },
        {
          "latitude": 52.3713997,
          "longitude": 4.6995226
        },
        {
          "latitude": 52.3711127,
          "longitude": 4.6986911
        },
        {
          "latitude": 52.3709598,
          "longitude": 4.6982619
        },
        {
          "latitude": 52.3709035,
          "longitude": 4.6981788
        },
        {
          "latitude": 52.3708284,
          "longitude": 4.6981251
        },
        {
          "latitude": 52.3707855,
          "longitude": 4.6981037
        },
        {
          "latitude": 52.3707372,
          "longitude": 4.6980983
        },
        {
          "latitude": 52.370646,
          "longitude": 4.6981224
        },
        {
          "latitude": 52.3705494,
          "longitude": 4.6981895
        },
        {
          "latitude": 52.370477,
          "longitude": 4.6982539
        },
        {
          "latitude": 52.3704341,
          "longitude": 4.6982914
        },
        {
          "latitude": 52.3702759,
          "longitude": 4.6984497
        },
        {
          "latitude": 52.3701417,
          "longitude": 4.6985865
        },
        {
          "latitude": 52.3699352,
          "longitude": 4.698852
        },
        {
          "latitude": 52.3698923,
          "longitude": 4.6989432
        },
        {
          "latitude": 52.3697609,
          "longitude": 4.6993268
        },
        {
          "latitude": 52.3697421,
          "longitude": 4.6994072
        },
        {
          "latitude": 52.3697099,
          "longitude": 4.6996218
        },
        {
          "latitude": 52.3696509,
          "longitude": 4.7002923
        },
        {
          "latitude": 52.3696214,
          "longitude": 4.7010836
        },
        {
          "latitude": 52.3695892,
          "longitude": 4.7014055
        },
        {
          "latitude": 52.3694685,
          "longitude": 4.7021484
        },
        {
          "latitude": 52.3694041,
          "longitude": 4.7025535
        },
        {
          "latitude": 52.3692942,
          "longitude": 4.7030389
        },
        {
          "latitude": 52.3691332,
          "longitude": 4.703629
        },
        {
          "latitude": 52.3690608,
          "longitude": 4.7038543
        },
        {
          "latitude": 52.3688221,
          "longitude": 4.7045651
        },
        {
          "latitude": 52.3687711,
          "longitude": 4.7046751
        },
        {
          "latitude": 52.3685271,
          "longitude": 4.7052169
        },
        {
          "latitude": 52.3684064,
          "longitude": 4.705469
        },
        {
          "latitude": 52.3683044,
          "longitude": 4.7056487
        },
        {
          "latitude": 52.3681676,
          "longitude": 4.7058821
        },
        {
          "latitude": 52.3679772,
          "longitude": 4.7062173
        },
        {
          "latitude": 52.3679075,
          "longitude": 4.7063139
        },
        {
          "latitude": 52.3676044,
          "longitude": 4.7066814
        },
        {
          "latitude": 52.3671377,
          "longitude": 4.7072205
        },
        {
          "latitude": 52.366958,
          "longitude": 4.7073948
        },
        {
          "latitude": 52.3666093,
          "longitude": 4.7076657
        },
        {
          "latitude": 52.3664537,
          "longitude": 4.7077811
        },
        {
          "latitude": 52.3662713,
          "longitude": 4.7079018
        },
        {
          "latitude": 52.366097,
          "longitude": 4.7079903
        },
        {
          "latitude": 52.3655766,
          "longitude": 4.7082156
        },
        {
          "latitude": 52.3653379,
          "longitude": 4.7082907
        },
        {
          "latitude": 52.3648873,
          "longitude": 4.7083792
        },
        {
          "latitude": 52.3646218,
          "longitude": 4.7084141
        },
        {
          "latitude": 52.3640558,
          "longitude": 4.7084248
        },
        {
          "latitude": 52.3638064,
          "longitude": 4.7084168
        },
        {
          "latitude": 52.3621622,
          "longitude": 4.7082666
        },
        {
          "latitude": 52.3608398,
          "longitude": 4.7081566
        },
        {
          "latitude": 52.3607138,
          "longitude": 4.7081485
        },
        {
          "latitude": 52.3604,
          "longitude": 4.7081137
        },
        {
          "latitude": 52.3597643,
          "longitude": 4.7079769
        },
        {
          "latitude": 52.3596087,
          "longitude": 4.7079259
        },
        {
          "latitude": 52.3592171,
          "longitude": 4.7077113
        },
        {
          "latitude": 52.3590052,
          "longitude": 4.7075853
        },
        {
          "latitude": 52.3587692,
          "longitude": 4.7074136
        },
        {
          "latitude": 52.3584205,
          "longitude": 4.7071132
        },
        {
          "latitude": 52.3582086,
          "longitude": 4.7068959
        },
        {
          "latitude": 52.3579377,
          "longitude": 4.7065741
        },
        {
          "latitude": 52.3576266,
          "longitude": 4.7061127
        },
        {
          "latitude": 52.3562667,
          "longitude": 4.7041976
        },
        {
          "latitude": 52.355926,
          "longitude": 4.7036907
        },
        {
          "latitude": 52.3555183,
          "longitude": 4.7031221
        },
        {
          "latitude": 52.3548478,
          "longitude": 4.7021484
        },
        {
          "latitude": 52.3544347,
          "longitude": 4.7015503
        },
        {
          "latitude": 52.3536569,
          "longitude": 4.7004318
        },
        {
          "latitude": 52.3526672,
          "longitude": 4.6990317
        },
        {
          "latitude": 52.3490059,
          "longitude": 4.6937773
        },
        {
          "latitude": 52.3487994,
          "longitude": 4.6935037
        },
        {
          "latitude": 52.348617,
          "longitude": 4.6932194
        },
        {
          "latitude": 52.3478794,
          "longitude": 4.6921787
        },
        {
          "latitude": 52.3467368,
          "longitude": 4.6905211
        },
        {
          "latitude": 52.3463291,
          "longitude": 4.6898532
        },
        {
          "latitude": 52.3461494,
          "longitude": 4.6895555
        },
        {
          "latitude": 52.3456103,
          "longitude": 4.6886408
        },
        {
          "latitude": 52.3453769,
          "longitude": 4.6882921
        },
        {
          "latitude": 52.3449478,
          "longitude": 4.6876404
        },
        {
          "latitude": 52.3449022,
          "longitude": 4.6875787
        },
        {
          "latitude": 52.3448646,
          "longitude": 4.687525
        },
        {
          "latitude": 52.3448136,
          "longitude": 4.6874526
        },
        {
          "latitude": 52.3446259,
          "longitude": 4.6871844
        },
        {
          "latitude": 52.3445696,
          "longitude": 4.6870986
        },
        {
          "latitude": 52.3444194,
          "longitude": 4.6868759
        },
        {
          "latitude": 52.3442343,
          "longitude": 4.6866077
        },
        {
          "latitude": 52.3437059,
          "longitude": 4.6858379
        },
        {
          "latitude": 52.3430863,
          "longitude": 4.6849394
        },
        {
          "latitude": 52.3430541,
          "longitude": 4.6848938
        },
        {
          "latitude": 52.3426035,
          "longitude": 4.6842313
        },
        {
          "latitude": 52.3421824,
          "longitude": 4.683609
        },
        {
          "latitude": 52.3405436,
          "longitude": 4.6813157
        },
        {
          "latitude": 52.3397738,
          "longitude": 4.6801999
        },
        {
          "latitude": 52.339755,
          "longitude": 4.6801758
        },
        {
          "latitude": 52.3388672,
          "longitude": 4.6789098
        },
        {
          "latitude": 52.3386982,
          "longitude": 4.6786737
        },
        {
          "latitude": 52.3384809,
          "longitude": 4.6783814
        },
        {
          "latitude": 52.3360965,
          "longitude": 4.6749535
        },
        {
          "latitude": 52.3360053,
          "longitude": 4.6748114
        },
        {
          "latitude": 52.335839,
          "longitude": 4.6745861
        },
        {
          "latitude": 52.3356378,
          "longitude": 4.6743071
        },
        {
          "latitude": 52.3354259,
          "longitude": 4.6739799
        },
        {
          "latitude": 52.333881,
          "longitude": 4.671759
        },
        {
          "latitude": 52.3333231,
          "longitude": 4.6709543
        },
        {
          "latitude": 52.3327813,
          "longitude": 4.6700692
        },
        {
          "latitude": 52.3325694,
          "longitude": 4.6697018
        },
        {
          "latitude": 52.332395,
          "longitude": 4.6693799
        },
        {
          "latitude": 52.3320758,
          "longitude": 4.6687308
        },
        {
          "latitude": 52.3319525,
          "longitude": 4.6684653
        },
        {
          "latitude": 52.331872,
          "longitude": 4.668248
        },
        {
          "latitude": 52.3316118,
          "longitude": 4.6676552
        },
        {
          "latitude": 52.3314053,
          "longitude": 4.667092
        },
        {
          "latitude": 52.3311478,
          "longitude": 4.6663517
        },
        {
          "latitude": 52.3310378,
          "longitude": 4.6659735
        },
        {
          "latitude": 52.3309439,
          "longitude": 4.6656945
        },
        {
          "latitude": 52.3308554,
          "longitude": 4.6654344
        },
        {
          "latitude": 52.3307481,
          "longitude": 4.6650669
        },
        {
          "latitude": 52.3306382,
          "longitude": 4.664678
        },
        {
          "latitude": 52.3305684,
          "longitude": 4.6643293
        },
        {
          "latitude": 52.3303887,
          "longitude": 4.6634576
        },
        {
          "latitude": 52.330319,
          "longitude": 4.6631169
        },
        {
          "latitude": 52.3303029,
          "longitude": 4.6630231
        },
        {
          "latitude": 52.33026,
          "longitude": 4.6628138
        },
        {
          "latitude": 52.3302197,
          "longitude": 4.6626234
        },
        {
          "latitude": 52.3301151,
          "longitude": 4.6621031
        },
        {
          "latitude": 52.3300561,
          "longitude": 4.6618295
        },
        {
          "latitude": 52.3299435,
          "longitude": 4.6612716
        },
        {
          "latitude": 52.3296162,
          "longitude": 4.6599761
        },
        {
          "latitude": 52.3293829,
          "longitude": 4.6592546
        },
        {
          "latitude": 52.3290235,
          "longitude": 4.658238
        },
        {
          "latitude": 52.3290101,
          "longitude": 4.6582031
        },
        {
          "latitude": 52.3287714,
          "longitude": 4.6575835
        },
        {
          "latitude": 52.3284549,
          "longitude": 4.6568486
        },
        {
          "latitude": 52.3282832,
          "longitude": 4.6564919
        },
        {
          "latitude": 52.327215700000004,
          "longitude": 4.6544454
        },
        {
          "latitude": 52.3271406,
          "longitude": 4.6543032
        },
        {
          "latitude": 52.326808,
          "longitude": 4.6536326
        },
        {
          "latitude": 52.3267221,
          "longitude": 4.6534663
        },
        {
          "latitude": 52.3266819,
          "longitude": 4.6533912
        },
        {
          "latitude": 52.3266336,
          "longitude": 4.6533081
        },
        {
          "latitude": 52.3266068,
          "longitude": 4.6532625
        },
        {
          "latitude": 52.3265344,
          "longitude": 4.6531284
        },
        {
          "latitude": 52.3262903,
          "longitude": 4.6526858
        },
        {
          "latitude": 52.326116,
          "longitude": 4.6523666
        },
        {
          "latitude": 52.3259389,
          "longitude": 4.6519992
        },
        {
          "latitude": 52.3253033,
          "longitude": 4.6508083
        },
        {
          "latitude": 52.3248205,
          "longitude": 4.6499151
        },
        {
          "latitude": 52.3243752,
          "longitude": 4.6491158
        },
        {
          "latitude": 52.3230958,
          "longitude": 4.6469352
        },
        {
          "latitude": 52.3218727,
          "longitude": 4.6450415
        },
        {
          "latitude": 52.3204887,
          "longitude": 4.6430218
        },
        {
          "latitude": 52.3203009,
          "longitude": 4.6427643
        },
        {
          "latitude": 52.3189679,
          "longitude": 4.640868
        },
        {
          "latitude": 52.3169777,
          "longitude": 4.6380302
        },
        {
          "latitude": 52.3168945,
          "longitude": 4.6379095
        },
        {
          "latitude": 52.3166934,
          "longitude": 4.6376306
        },
        {
          "latitude": 52.315709,
          "longitude": 4.6362305
        },
        {
          "latitude": 52.3153764,
          "longitude": 4.6357557
        },
        {
          "latitude": 52.3143089,
          "longitude": 4.6342295
        },
        {
          "latitude": 52.313287,
          "longitude": 4.6327597
        },
        {
          "latitude": 52.3121604,
          "longitude": 4.6311557
        },
        {
          "latitude": 52.3087433,
          "longitude": 4.6263009
        },
        {
          "latitude": 52.3085555,
          "longitude": 4.62603
        },
        {
          "latitude": 52.3073325,
          "longitude": 4.6242893
        },
        {
          "latitude": 52.3068202,
          "longitude": 4.6235651
        },
        {
          "latitude": 52.3067558,
          "longitude": 4.6234739
        },
        {
          "latitude": 52.3065117,
          "longitude": 4.6231171
        },
        {
          "latitude": 52.3063722,
          "longitude": 4.622916
        },
        {
          "latitude": 52.3062649,
          "longitude": 4.6227577
        },
        {
          "latitude": 52.3061737,
          "longitude": 4.6226209
        },
        {
          "latitude": 52.3059216,
          "longitude": 4.6222669
        },
        {
          "latitude": 52.305707,
          "longitude": 4.6219504
        },
        {
          "latitude": 52.3051733,
          "longitude": 4.6211672
        },
        {
          "latitude": 52.3050043,
          "longitude": 4.6209177
        },
        {
          "latitude": 52.3046449,
          "longitude": 4.6204028
        },
        {
          "latitude": 52.3043337,
          "longitude": 4.6199951
        },
        {
          "latitude": 52.3040468,
          "longitude": 4.6196759
        },
        {
          "latitude": 52.3038563,
          "longitude": 4.6194962
        },
        {
          "latitude": 52.303462,
          "longitude": 4.6191823
        },
        {
          "latitude": 52.3029819,
          "longitude": 4.6188846
        },
        {
          "latitude": 52.3026305,
          "longitude": 4.6187291
        },
        {
          "latitude": 52.3022336,
          "longitude": 4.6186191
        },
        {
          "latitude": 52.3019895,
          "longitude": 4.6185681
        },
        {
          "latitude": 52.3018125,
          "longitude": 4.6185574
        },
        {
          "latitude": 52.3013297,
          "longitude": 4.6185654
        },
        {
          "latitude": 52.3010507,
          "longitude": 4.6186057
        },
        {
          "latitude": 52.3007181,
          "longitude": 4.6186942
        },
        {
          "latitude": 52.3003024,
          "longitude": 4.6188658
        },
        {
          "latitude": 52.299782,
          "longitude": 4.6191636
        },
        {
          "latitude": 52.2993717,
          "longitude": 4.6194586
        },
        {
          "latitude": 52.2993368,
          "longitude": 4.6195552
        },
        {
          "latitude": 52.299023,
          "longitude": 4.61981
        },
        {
          "latitude": 52.2987092,
          "longitude": 4.6200621
        },
        {
          "latitude": 52.2982129,
          "longitude": 4.620333
        },
        {
          "latitude": 52.2978991,
          "longitude": 4.6204644
        },
        {
          "latitude": 52.2974271,
          "longitude": 4.6205691
        },
        {
          "latitude": 52.2970328,
          "longitude": 4.6205959
        },
        {
          "latitude": 52.2966787,
          "longitude": 4.6205798
        },
        {
          "latitude": 52.2965392,
          "longitude": 4.6205476
        },
        {
          "latitude": 52.2962093,
          "longitude": 4.6204698
        },
        {
          "latitude": 52.295917,
          "longitude": 4.6203732
        },
        {
          "latitude": 52.2957587,
          "longitude": 4.6203008
        },
        {
          "latitude": 52.2954074,
          "longitude": 4.6200997
        },
        {
          "latitude": 52.294997,
          "longitude": 4.6197993
        },
        {
          "latitude": 52.2949219,
          "longitude": 4.6197268
        },
        {
          "latitude": 52.2946376,
          "longitude": 4.6194559
        },
        {
          "latitude": 52.2943801,
          "longitude": 4.6191636
        },
        {
          "latitude": 52.2942245,
          "longitude": 4.6189624
        },
        {
          "latitude": 52.2931382,
          "longitude": 4.617447
        },
        {
          "latitude": 52.2930524,
          "longitude": 4.6172217
        },
        {
          "latitude": 52.2925428,
          "longitude": 4.6165323
        },
        {
          "latitude": 52.2918427,
          "longitude": 4.6155265
        },
        {
          "latitude": 52.2916871,
          "longitude": 4.6153173
        },
        {
          "latitude": 52.2911024,
          "longitude": 4.6145099
        },
        {
          "latitude": 52.29092,
          "longitude": 4.6142578
        },
        {
          "latitude": 52.2909012,
          "longitude": 4.6142283
        },
        {
          "latitude": 52.2908503,
          "longitude": 4.6141586
        },
        {
          "latitude": 52.2904962,
          "longitude": 4.613649
        },
        {
          "latitude": 52.2903246,
          "longitude": 4.6134049
        },
        {
          "latitude": 52.290228,
          "longitude": 4.6132654
        },
        {
          "latitude": 52.2901636,
          "longitude": 4.6131822
        },
        {
          "latitude": 52.2900349,
          "longitude": 4.6129972
        },
        {
          "latitude": 52.2882512,
          "longitude": 4.6104357
        },
        {
          "latitude": 52.2881439,
          "longitude": 4.6103498
        },
        {
          "latitude": 52.287468,
          "longitude": 4.6093574
        },
        {
          "latitude": 52.2850326,
          "longitude": 4.6059403
        },
        {
          "latitude": 52.2841421,
          "longitude": 4.6046609
        },
        {
          "latitude": 52.2830236,
          "longitude": 4.6030569
        },
        {
          "latitude": 52.2820741,
          "longitude": 4.6016729
        },
        {
          "latitude": 52.2820339,
          "longitude": 4.6016032
        },
        {
          "latitude": 52.2819775,
          "longitude": 4.6015039
        },
        {
          "latitude": 52.28194,
          "longitude": 4.6014422
        },
        {
          "latitude": 52.2818193,
          "longitude": 4.6012437
        },
        {
          "latitude": 52.2794589,
          "longitude": 4.5978749
        },
        {
          "latitude": 52.2755483,
          "longitude": 4.5922852
        },
        {
          "latitude": 52.2752371,
          "longitude": 4.5918399
        },
        {
          "latitude": 52.2747383,
          "longitude": 4.5912042
        },
        {
          "latitude": 52.274352,
          "longitude": 4.5906088
        },
        {
          "latitude": 52.2738156,
          "longitude": 4.5899114
        },
        {
          "latitude": 52.273652,
          "longitude": 4.589678
        },
        {
          "latitude": 52.2729492,
          "longitude": 4.5887688
        },
        {
          "latitude": 52.2728741,
          "longitude": 4.5886749
        },
        {
          "latitude": 52.2724101,
          "longitude": 4.5882779
        },
        {
          "latitude": 52.2721875,
          "longitude": 4.5881438
        },
        {
          "latitude": 52.271879,
          "longitude": 4.5880285
        },
        {
          "latitude": 52.2713587,
          "longitude": 4.5878917
        },
        {
          "latitude": 52.2713292,
          "longitude": 4.5878461
        },
        {
          "latitude": 52.2711253,
          "longitude": 4.5877764
        },
        {
          "latitude": 52.2708142,
          "longitude": 4.5876181
        },
        {
          "latitude": 52.2706077,
          "longitude": 4.5874706
        },
        {
          "latitude": 52.2704548,
          "longitude": 4.5873445
        },
        {
          "latitude": 52.2702,
          "longitude": 4.5870495
        },
        {
          "latitude": 52.2701678,
          "longitude": 4.5870093
        },
        {
          "latitude": 52.2695643,
          "longitude": 4.5861751
        },
        {
          "latitude": 52.2694543,
          "longitude": 4.5860195
        },
        {
          "latitude": 52.2693658,
          "longitude": 4.5858961
        },
        {
          "latitude": 52.2693068,
          "longitude": 4.5858774
        },
        {
          "latitude": 52.2692505,
          "longitude": 4.5858935
        },
        {
          "latitude": 52.2690842,
          "longitude": 4.585923
        },
        {
          "latitude": 52.2688991,
          "longitude": 4.5862529
        },
        {
          "latitude": 52.2684109,
          "longitude": 4.5871487
        },
        {
          "latitude": 52.2676036,
          "longitude": 4.5886856
        },
        {
          "latitude": 52.2668767,
          "longitude": 4.5899382
        },
        {
          "latitude": 52.2655731,
          "longitude": 4.5922852
        },
        {
          "latitude": 52.2645539,
          "longitude": 4.5941225
        },
        {
          "latitude": 52.2632316,
          "longitude": 4.5966035
        },
        {
          "latitude": 52.2629714,
          "longitude": 4.5970595
        },
        {
          "latitude": 52.2623062,
          "longitude": 4.5983362
        },
        {
          "latitude": 52.2620782,
          "longitude": 4.5987493
        },
        {
          "latitude": 52.2611824,
          "longitude": 4.6004498
        },
        {
          "latitude": 52.2605118,
          "longitude": 4.6017373
        },
        {
          "latitude": 52.2599566,
          "longitude": 4.6027726
        },
        {
          "latitude": 52.2598279,
          "longitude": 4.603014
        },
        {
          "latitude": 52.2597903,
          "longitude": 4.6030864
        },
        {
          "latitude": 52.2596723,
          "longitude": 4.603301
        },
        {
          "latitude": 52.2594121,
          "longitude": 4.6037704
        },
        {
          "latitude": 52.2590581,
          "longitude": 4.6044087
        },
        {
          "latitude": 52.2588462,
          "longitude": 4.6048164
        },
        {
          "latitude": 52.2586825,
          "longitude": 4.6050981
        },
        {
          "latitude": 52.258586,
          "longitude": 4.6052670000000004
        },
        {
          "latitude": 52.258535,
          "longitude": 4.6053797
        },
        {
          "latitude": 52.2564858,
          "longitude": 4.6092528
        },
        {
          "latitude": 52.2552949,
          "longitude": 4.611479
        },
        {
          "latitude": 52.2542837,
          "longitude": 4.6134692
        },
        {
          "latitude": 52.2539163,
          "longitude": 4.6142578
        },
        {
          "latitude": 52.2537419,
          "longitude": 4.614628
        },
        {
          "latitude": 52.2527575,
          "longitude": 4.6166691
        },
        {
          "latitude": 52.2527012,
          "longitude": 4.6167871
        },
        {
          "latitude": 52.2525913,
          "longitude": 4.6170312
        },
        {
          "latitude": 52.2525483,
          "longitude": 4.6171224
        },
        {
          "latitude": 52.2525108,
          "longitude": 4.6172136
        },
        {
          "latitude": 52.2522506,
          "longitude": 4.617793
        },
        {
          "latitude": 52.2521058,
          "longitude": 4.618147
        },
        {
          "latitude": 52.2519073,
          "longitude": 4.6187237
        },
        {
          "latitude": 52.2517598,
          "longitude": 4.6192628
        },
        {
          "latitude": 52.2516042,
          "longitude": 4.6199977
        },
        {
          "latitude": 52.2515076,
          "longitude": 4.6206093
        },
        {
          "latitude": 52.2514433,
          "longitude": 4.621245
        },
        {
          "latitude": 52.2514218,
          "longitude": 4.6216768
        },
        {
          "latitude": 52.2514138,
          "longitude": 4.622106
        },
        {
          "latitude": 52.2514164,
          "longitude": 4.6226853
        },
        {
          "latitude": 52.2514325,
          "longitude": 4.623144
        },
        {
          "latitude": 52.251454,
          "longitude": 4.6234524
        },
        {
          "latitude": 52.2515264,
          "longitude": 4.624064
        },
        {
          "latitude": 52.2516257,
          "longitude": 4.6247399
        },
        {
          "latitude": 52.2516444,
          "longitude": 4.6248579
        },
        {
          "latitude": 52.2516766,
          "longitude": 4.6250027
        },
        {
          "latitude": 52.2516954,
          "longitude": 4.6251529
        },
        {
          "latitude": 52.2518134,
          "longitude": 4.6259254
        },
        {
          "latitude": 52.251918,
          "longitude": 4.6268535
        },
        {
          "latitude": 52.2519395,
          "longitude": 4.6275669
        },
        {
          "latitude": 52.2519127,
          "longitude": 4.6283126
        },
        {
          "latitude": 52.251859,
          "longitude": 4.629246
        },
        {
          "latitude": 52.2517678,
          "longitude": 4.6298173
        },
        {
          "latitude": 52.2515935,
          "longitude": 4.6306032
        },
        {
          "latitude": 52.2511911,
          "longitude": 4.6318799
        },
        {
          "latitude": 52.2509766,
          "longitude": 4.6323708
        },
        {
          "latitude": 52.2508103,
          "longitude": 4.632749
        },
        {
          "latitude": 52.2506171,
          "longitude": 4.6331352
        },
        {
          "latitude": 52.2504804,
          "longitude": 4.6333766
        },
        {
          "latitude": 52.2504213,
          "longitude": 4.6335
        },
        {
          "latitude": 52.2503382,
          "longitude": 4.6336368
        },
        {
          "latitude": 52.2489354,
          "longitude": 4.6362305
        },
        {
          "latitude": 52.2487798,
          "longitude": 4.6365121
        },
        {
          "latitude": 52.2486672,
          "longitude": 4.6367481
        },
        {
          "latitude": 52.2452554,
          "longitude": 4.6431345
        },
        {
          "latitude": 52.2446117,
          "longitude": 4.6443576
        },
        {
          "latitude": 52.242482,
          "longitude": 4.648338
        },
        {
          "latitude": 52.2417498,
          "longitude": 4.6496817
        },
        {
          "latitude": 52.2412428,
          "longitude": 4.650583
        },
        {
          "latitude": 52.2411409,
          "longitude": 4.6507868
        },
        {
          "latitude": 52.2407681,
          "longitude": 4.6515137
        },
        {
          "latitude": 52.2401458,
          "longitude": 4.6526456
        },
        {
          "latitude": 52.2400573,
          "longitude": 4.6527475
        },
        {
          "latitude": 52.2399071,
          "longitude": 4.6529996
        },
        {
          "latitude": 52.2398829,
          "longitude": 4.6530265
        },
        {
          "latitude": 52.2398588,
          "longitude": 4.6530479
        },
        {
          "latitude": 52.2398078,
          "longitude": 4.6530613
        },
        {
          "latitude": 52.2396952,
          "longitude": 4.6530506
        },
        {
          "latitude": 52.2396174,
          "longitude": 4.6529433
        },
        {
          "latitude": 52.239494,
          "longitude": 4.6527636
        },
        {
          "latitude": 52.2390863,
          "longitude": 4.652203
        },
        {
          "latitude": 52.238853,
          "longitude": 4.6519482
        },
        {
          "latitude": 52.2384346,
          "longitude": 4.6515647
        },
        {
          "latitude": 52.2380966,
          "longitude": 4.6513098
        },
        {
          "latitude": 52.2378445,
          "longitude": 4.651098
        },
        {
          "latitude": 52.237469,
          "longitude": 4.6508566
        },
        {
          "latitude": 52.2371471,
          "longitude": 4.6506822
        },
        {
          "latitude": 52.2366858,
          "longitude": 4.6504435
        },
        {
          "latitude": 52.2363961,
          "longitude": 4.650245
        },
        {
          "latitude": 52.2360393,
          "longitude": 4.6499607
        },
        {
          "latitude": 52.2358489,
          "longitude": 4.6497622
        },
        {
          "latitude": 52.2354841,
          "longitude": 4.6493277
        },
        {
          "latitude": 52.2351944,
          "longitude": 4.6488932
        },
        {
          "latitude": 52.2349557,
          "longitude": 4.648456
        },
        {
          "latitude": 52.2346607,
          "longitude": 4.647831
        },
        {
          "latitude": 52.2342208,
          "longitude": 4.6466535
        },
        {
          "latitude": 52.2338131,
          "longitude": 4.6454573
        },
        {
          "latitude": 52.2335663,
          "longitude": 4.6446526
        },
        {
          "latitude": 52.2334242,
          "longitude": 4.6441349
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
          "latitude": 52.1705613,
          "longitude": 4.4544035
        },
        {
          "latitude": 52.1705291,
          "longitude": 4.4543767
        },
        {
          "latitude": 52.1704137,
          "longitude": 4.4543204
        },
        {
          "latitude": 52.1703601,
          "longitude": 4.4542962
        },
        {
          "latitude": 52.1700463,
          "longitude": 4.4541568
        },
        {
          "latitude": 52.1692309,
          "longitude": 4.4537088
        },
        {
          "latitude": 52.1689788,
          "longitude": 4.4535452
        },
        {
          "latitude": 52.1686783,
          "longitude": 4.4532984
        },
        {
          "latitude": 52.1680614,
          "longitude": 4.4527218
        },
        {
          "latitude": 52.1679407,
          "longitude": 4.4526064
        },
        {
          "latitude": 52.1673694,
          "longitude": 4.4520995
        },
        {
          "latitude": 52.1668893,
          "longitude": 4.4517455
        },
        {
          "latitude": 52.1664843,
          "longitude": 4.4514424
        },
        {
          "latitude": 52.1664199,
          "longitude": 4.451386
        },
        {
          "latitude": 52.1663877,
          "longitude": 4.4513378
        },
        {
          "latitude": 52.166369,
          "longitude": 4.4512895
        },
        {
          "latitude": 52.1663502,
          "longitude": 4.4511849
        },
        {
          "latitude": 52.1663475,
          "longitude": 4.4511339
        },
        {
          "latitude": 52.1663502,
          "longitude": 4.4510803
        },
        {
          "latitude": 52.1663931,
          "longitude": 4.4507933
        },
        {
          "latitude": 52.1663985,
          "longitude": 4.4506404
        },
        {
          "latitude": 52.1664709,
          "longitude": 4.4503936
        },
        {
          "latitude": 52.1665514,
          "longitude": 4.4501308
        },
        {
          "latitude": 52.1666989,
          "longitude": 4.4496641
        },
        {
          "latitude": 52.1668705,
          "longitude": 4.4491813
        },
        {
          "latitude": 52.1669537,
          "longitude": 4.4489667
        },
        {
          "latitude": 52.1670288,
          "longitude": 4.4487736
        },
        {
          "latitude": 52.167128,
          "longitude": 4.4484973
        },
        {
          "latitude": 52.1673185,
          "longitude": 4.4480869
        },
        {
          "latitude": 52.1673962,
          "longitude": 4.4478992
        },
        {
          "latitude": 52.1674955,
          "longitude": 4.4477114
        },
        {
          "latitude": 52.167702,
          "longitude": 4.4473064
        },
        {
          "latitude": 52.1679407,
          "longitude": 4.4468772
        },
        {
          "latitude": 52.1680373,
          "longitude": 4.4466841
        },
        {
          "latitude": 52.1681795,
          "longitude": 4.4464481
        },
        {
          "latitude": 52.1682465,
          "longitude": 4.4463328
        },
        {
          "latitude": 52.1683189,
          "longitude": 4.4462094
        },
        {
          "latitude": 52.1685979,
          "longitude": 4.4457427
        },
        {
          "latitude": 52.1687642,
          "longitude": 4.4454664
        },
        {
          "latitude": 52.1690136,
          "longitude": 4.4450668
        },
        {
          "latitude": 52.1693194,
          "longitude": 4.4445759
        },
        {
          "latitude": 52.1694508,
          "longitude": 4.4443694
        },
        {
          "latitude": 52.16988,
          "longitude": 4.4436935
        },
        {
          "latitude": 52.1700436,
          "longitude": 4.4434118
        },
        {
          "latitude": 52.1702179,
          "longitude": 4.4431221
        },
        {
          "latitude": 52.1704459,
          "longitude": 4.4427654
        },
        {
          "latitude": 52.1705157,
          "longitude": 4.4426554
        },
        {
          "latitude": 52.1706149,
          "longitude": 4.4424891
        },
        {
          "latitude": 52.1706846,
          "longitude": 4.4423792
        },
        {
          "latitude": 52.1708,
          "longitude": 4.4421861
        },
        {
          "latitude": 52.1708831,
          "longitude": 4.4420546
        },
        {
          "latitude": 52.1710414,
          "longitude": 4.441781
        },
        {
          "latitude": 52.1713364,
          "longitude": 4.4412956
        },
        {
          "latitude": 52.1715617,
          "longitude": 4.4409335
        },
        {
          "latitude": 52.1716422,
          "longitude": 4.4408128
        },
        {
          "latitude": 52.1717629,
          "longitude": 4.4406116
        },
        {
          "latitude": 52.1719077,
          "longitude": 4.4403917
        },
        {
          "latitude": 52.1725944,
          "longitude": 4.4392624
        },
        {
          "latitude": 52.1730906,
          "longitude": 4.4384766
        },
        {
          "latitude": 52.173222,
          "longitude": 4.4382674
        },
        {
          "latitude": 52.1733668,
          "longitude": 4.4380313
        },
        {
          "latitude": 52.1734312,
          "longitude": 4.437924
        },
        {
          "latitude": 52.1735814,
          "longitude": 4.4376826
        },
        {
          "latitude": 52.1744075,
          "longitude": 4.4362852
        },
        {
          "latitude": 52.1749064,
          "longitude": 4.4353867
        },
        {
          "latitude": 52.175408,
          "longitude": 4.4345149
        },
        {
          "latitude": 52.1756333,
          "longitude": 4.4340938
        },
        {
          "latitude": 52.1758372,
          "longitude": 4.4336995
        },
        {
          "latitude": 52.1758747,
          "longitude": 4.4336432
        },
        {
          "latitude": 52.1761268,
          "longitude": 4.4331604
        },
        {
          "latitude": 52.1765882,
          "longitude": 4.4322672
        },
        {
          "latitude": 52.1766686,
          "longitude": 4.432109
        },
        {
          "latitude": 52.1767437,
          "longitude": 4.4319615
        },
        {
          "latitude": 52.1780661,
          "longitude": 4.4293839
        },
        {
          "latitude": 52.1788546,
          "longitude": 4.427973
        },
        {
          "latitude": 52.1794447,
          "longitude": 4.4270423
        },
        {
          "latitude": 52.1795359,
          "longitude": 4.4269028
        },
        {
          "latitude": 52.1796942,
          "longitude": 4.4266641
        },
        {
          "latitude": 52.1798363,
          "longitude": 4.4264576
        },
        {
          "latitude": 52.1800053,
          "longitude": 4.426235
        },
        {
          "latitude": 52.180303,
          "longitude": 4.4258487
        },
        {
          "latitude": 52.181679,
          "longitude": 4.4242394
        },
        {
          "latitude": 52.1824515,
          "longitude": 4.4233382
        },
        {
          "latitude": 52.1826822,
          "longitude": 4.4230673
        },
        {
          "latitude": 52.1829343,
          "longitude": 4.4227722
        },
        {
          "latitude": 52.1833152,
          "longitude": 4.422327
        },
        {
          "latitude": 52.1843505,
          "longitude": 4.4210261
        },
        {
          "latitude": 52.1845651,
          "longitude": 4.4207552
        },
        {
          "latitude": 52.1847609,
          "longitude": 4.4204548
        },
        {
          "latitude": 52.1850586,
          "longitude": 4.4200686
        },
        {
          "latitude": 52.1853456,
          "longitude": 4.4196931
        },
        {
          "latitude": 52.1858793,
          "longitude": 4.4190842
        },
        {
          "latitude": 52.1861207,
          "longitude": 4.4188321
        },
        {
          "latitude": 52.1862522,
          "longitude": 4.418714
        },
        {
          "latitude": 52.1865875,
          "longitude": 4.4184592
        },
        {
          "latitude": 52.1868905,
          "longitude": 4.4183037
        },
        {
          "latitude": 52.1870032,
          "longitude": 4.4182608
        },
        {
          "latitude": 52.1871346,
          "longitude": 4.4182339
        },
        {
          "latitude": 52.1871024,
          "longitude": 4.4180354
        },
        {
          "latitude": 52.1870837,
          "longitude": 4.4178852
        },
        {
          "latitude": 52.1870568,
          "longitude": 4.4176975
        },
        {
          "latitude": 52.1870434,
          "longitude": 4.4175982
        },
        {
          "latitude": 52.186971,
          "longitude": 4.41733
        },
        {
          "latitude": 52.1869335,
          "longitude": 4.4172603
        },
        {
          "latitude": 52.1868664,
          "longitude": 4.4171315
        },
        {
          "latitude": 52.1867162,
          "longitude": 4.4169089
        },
        {
          "latitude": 52.1866491,
          "longitude": 4.4167909
        },
        {
          "latitude": 52.1866491,
          "longitude": 4.4167265
        },
        {
          "latitude": 52.1866384,
          "longitude": 4.4166622
        },
        {
          "latitude": 52.1866196,
          "longitude": 4.4166031
        },
        {
          "latitude": 52.1865982,
          "longitude": 4.4165602
        },
        {
          "latitude": 52.1865821,
          "longitude": 4.4165307
        },
        {
          "latitude": 52.1865553,
          "longitude": 4.4165039
        },
        {
          "latitude": 52.1865365,
          "longitude": 4.4164824
        },
        {
          "latitude": 52.1865016,
          "longitude": 4.4164637
        },
        {
          "latitude": 52.1864587,
          "longitude": 4.416461
        },
        {
          "latitude": 52.1864319,
          "longitude": 4.4164664
        },
        {
          "latitude": 52.1864077,
          "longitude": 4.4164824
        },
        {
          "latitude": 52.1861395,
          "longitude": 4.4160962
        },
        {
          "latitude": 52.185882,
          "longitude": 4.4156751
        },
        {
          "latitude": 52.1858338,
          "longitude": 4.415659
        },
        {
          "latitude": 52.1856433,
          "longitude": 4.4153693
        },
        {
          "latitude": 52.1855736,
          "longitude": 4.4152674
        },
        {
          "latitude": 52.1850586,
          "longitude": 4.4145083
        },
        {
          "latitude": 52.1850371,
          "longitude": 4.4144788
        },
        {
          "latitude": 52.1841145,
          "longitude": 4.413119
        },
        {
          "latitude": 52.1837202,
          "longitude": 4.4125423
        },
        {
          "latitude": 52.183283,
          "longitude": 4.4118235
        },
        {
          "latitude": 52.1830148,
          "longitude": 4.4113997
        },
        {
          "latitude": 52.1829692,
          "longitude": 4.4113272
        },
        {
          "latitude": 52.182945,
          "longitude": 4.4112119
        },
        {
          "latitude": 52.1825829,
          "longitude": 4.4106781
        },
        {
          "latitude": 52.1823496,
          "longitude": 4.4103965
        },
        {
          "latitude": 52.1820518,
          "longitude": 4.41008
        },
        {
          "latitude": 52.1818426,
          "longitude": 4.4098601
        },
        {
          "latitude": 52.1816066,
          "longitude": 4.4096214
        },
        {
          "latitude": 52.1812955,
          "longitude": 4.4093183
        },
        {
          "latitude": 52.1811587,
          "longitude": 4.4091654
        },
        {
          "latitude": 52.1811533,
          "longitude": 4.4091573
        },
        {
          "latitude": 52.1810889,
          "longitude": 4.4090661
        },
        {
          "latitude": 52.180118,
          "longitude": 4.4076768
        },
        {
          "latitude": 52.1800187,
          "longitude": 4.4076365
        },
        {
          "latitude": 52.1795252,
          "longitude": 4.4069391
        },
        {
          "latitude": 52.1792489,
          "longitude": 4.40662
        },
        {
          "latitude": 52.1790263,
          "longitude": 4.4063786
        },
        {
          "latitude": 52.178624,
          "longitude": 4.4059923
        },
        {
          "latitude": 52.1775484,
          "longitude": 4.4051179
        },
        {
          "latitude": 52.1770173,
          "longitude": 4.4047451
        },
        {
          "latitude": 52.1766767,
          "longitude": 4.4045064
        },
        {
          "latitude": 52.1762475,
          "longitude": 4.4041711
        },
        {
          "latitude": 52.1761698,
          "longitude": 4.4040853
        },
        {
          "latitude": 52.1755072,
          "longitude": 4.4033369
        },
        {
          "latitude": 52.1754885,
          "longitude": 4.4032699
        },
        {
          "latitude": 52.1749467,
          "longitude": 4.4025698
        },
        {
          "latitude": 52.1748528,
          "longitude": 4.4024679
        },
        {
          "latitude": 52.1748126,
          "longitude": 4.4024169
        },
        {
          "latitude": 52.1741635,
          "longitude": 4.4017383
        },
        {
          "latitude": 52.1741179,
          "longitude": 4.4017383
        },
        {
          "latitude": 52.1737772,
          "longitude": 4.4014165
        },
        {
          "latitude": 52.1737424,
          "longitude": 4.4013843
        },
        {
          "latitude": 52.1731067,
          "longitude": 4.4008049
        },
        {
          "latitude": 52.1726936,
          "longitude": 4.4004428
        },
        {
          "latitude": 52.1725488,
          "longitude": 4.4003168
        },
        {
          "latitude": 52.1723342,
          "longitude": 4.4002363
        },
        {
          "latitude": 52.172074,
          "longitude": 4.4002202
        },
        {
          "latitude": 52.1718353,
          "longitude": 4.4002175
        },
        {
          "latitude": 52.1716449,
          "longitude": 4.4002792
        },
        {
          "latitude": 52.171551,
          "longitude": 4.4003329
        },
        {
          "latitude": 52.1714813,
          "longitude": 4.4003785
        },
        {
          "latitude": 52.1713927,
          "longitude": 4.4004616
        },
        {
          "latitude": 52.1711755,
          "longitude": 4.4006655
        },
        {
          "latitude": 52.1700034,
          "longitude": 4.4021809
        },
        {
          "latitude": 52.1695983,
          "longitude": 4.4026288
        },
        {
          "latitude": 52.169432,
          "longitude": 4.402771
        },
        {
          "latitude": 52.169129,
          "longitude": 4.4029802
        },
        {
          "latitude": 52.1688715,
          "longitude": 4.4030821
        },
        {
          "latitude": 52.1685952,
          "longitude": 4.4031197
        },
        {
          "latitude": 52.1684021,
          "longitude": 4.4031197
        },
        {
          "latitude": 52.168335,
          "longitude": 4.4031197
        },
        {
          "latitude": 52.1683028,
          "longitude": 4.4031116
        },
        {
          "latitude": 52.168048,
          "longitude": 4.4030446
        },
        {
          "latitude": 52.1678093,
          "longitude": 4.4029507
        },
        {
          "latitude": 52.1677637,
          "longitude": 4.4029346
        },
        {
          "latitude": 52.1675625,
          "longitude": 4.4028032
        },
        {
          "latitude": 52.1673319,
          "longitude": 4.4026127
        },
        {
          "latitude": 52.166656,
          "longitude": 4.4019476
        },
        {
          "latitude": 52.1664709,
          "longitude": 4.401733
        },
        {
          "latitude": 52.1663958,
          "longitude": 4.4016472
        },
        {
          "latitude": 52.1663636,
          "longitude": 4.4015291
        },
        {
          "latitude": 52.1656474,
          "longitude": 4.4007728
        },
        {
          "latitude": 52.1648884,
          "longitude": 4.3999708
        },
        {
          "latitude": 52.1645021,
          "longitude": 4.3995631
        },
        {
          "latitude": 52.1644458,
          "longitude": 4.3995631
        },
        {
          "latitude": 52.1641856,
          "longitude": 4.3992814
        },
        {
          "latitude": 52.1638235,
          "longitude": 4.3988228
        },
        {
          "latitude": 52.1634293,
          "longitude": 4.3982327
        },
        {
          "latitude": 52.1630859,
          "longitude": 4.3976265
        },
        {
          "latitude": 52.1627292,
          "longitude": 4.3969989
        },
        {
          "latitude": 52.162241,
          "longitude": 4.3960387
        },
        {
          "latitude": 52.161836,
          "longitude": 4.395285
        },
        {
          "latitude": 52.161828,
          "longitude": 4.3952259
        },
        {
          "latitude": 52.1614122,
          "longitude": 4.3945313
        },
        {
          "latitude": 52.1609992,
          "longitude": 4.3938446
        },
        {
          "latitude": 52.161018,
          "longitude": 4.3937561
        },
        {
          "latitude": 52.1610233,
          "longitude": 4.3936971
        },
        {
          "latitude": 52.1610206,
          "longitude": 4.3936676
        },
        {
          "latitude": 52.1610099,
          "longitude": 4.3936005
        },
        {
          "latitude": 52.1610019,
          "longitude": 4.3935817
        },
        {
          "latitude": 52.1609804,
          "longitude": 4.3935442
        },
        {
          "latitude": 52.1609402,
          "longitude": 4.393504
        },
        {
          "latitude": 52.1609053,
          "longitude": 4.3934879
        },
        {
          "latitude": 52.1608704,
          "longitude": 4.3934825
        },
        {
          "latitude": 52.1608409,
          "longitude": 4.3934852
        },
        {
          "latitude": 52.1608034,
          "longitude": 4.3935066
        },
        {
          "latitude": 52.1607846,
          "longitude": 4.3935281
        },
        {
          "latitude": 52.1607631,
          "longitude": 4.3935603
        },
        {
          "latitude": 52.1607497,
          "longitude": 4.3935925
        },
        {
          "latitude": 52.1607363,
          "longitude": 4.3936649
        },
        {
          "latitude": 52.1607363,
          "longitude": 4.3937534
        },
        {
          "latitude": 52.1607471,
          "longitude": 4.3938178
        },
        {
          "latitude": 52.1605137,
          "longitude": 4.3941799
        },
        {
          "latitude": 52.1602374,
          "longitude": 4.3945178
        },
        {
          "latitude": 52.1602294,
          "longitude": 4.3945313
        },
        {
          "latitude": 52.1601596,
          "longitude": 4.3946466
        },
        {
          "latitude": 52.1592987,
          "longitude": 4.3954459
        },
        {
          "latitude": 52.1572655,
          "longitude": 4.3973315
        },
        {
          "latitude": 52.1564099,
          "longitude": 4.398171
        },
        {
          "latitude": 52.156198,
          "longitude": 4.3983909
        },
        {
          "latitude": 52.1543714,
          "longitude": 4.4005206
        },
        {
          "latitude": 52.1542051,
          "longitude": 4.4007164
        },
        {
          "latitude": 52.1540737,
          "longitude": 4.4009122
        },
        {
          "latitude": 52.1540067,
          "longitude": 4.4010115
        },
        {
          "latitude": 52.1538913,
          "longitude": 4.4012341
        },
        {
          "latitude": 52.1537599,
          "longitude": 4.4015828
        },
        {
          "latitude": 52.1536365,
          "longitude": 4.4018322
        },
        {
          "latitude": 52.1535775,
          "longitude": 4.4019315
        },
        {
          "latitude": 52.1534836,
          "longitude": 4.4019824
        },
        {
          "latitude": 52.1533602,
          "longitude": 4.401969
        },
        {
          "latitude": 52.1531564,
          "longitude": 4.4018134
        },
        {
          "latitude": 52.1530035,
          "longitude": 4.4016793
        },
        {
          "latitude": 52.1517026,
          "longitude": 4.4000861
        },
        {
          "latitude": 52.1516544,
          "longitude": 4.4000298
        },
        {
          "latitude": 52.1514076,
          "longitude": 4.4004723
        },
        {
          "latitude": 52.1512869,
          "longitude": 4.4007191
        },
        {
          "latitude": 52.151244,
          "longitude": 4.4008023
        },
        {
          "latitude": 52.1510509,
          "longitude": 4.4011965
        },
        {
          "latitude": 52.1507719,
          "longitude": 4.4017598
        },
        {
          "latitude": 52.15067,
          "longitude": 4.4019637
        },
        {
          "latitude": 52.1502435,
          "longitude": 4.4028327
        },
        {
          "latitude": 52.1500048,
          "longitude": 4.4033128
        },
        {
          "latitude": 52.1498546,
          "longitude": 4.4036186
        },
        {
          "latitude": 52.1498412,
          "longitude": 4.4036025
        },
        {
          "latitude": 52.149809,
          "longitude": 4.4035837
        },
        {
          "latitude": 52.1497849,
          "longitude": 4.4035837
        },
        {
          "latitude": 52.1497661,
          "longitude": 4.4035918
        },
        {
          "latitude": 52.1497473,
          "longitude": 4.4036025
        },
        {
          "latitude": 52.1497339,
          "longitude": 4.4036186
        },
        {
          "latitude": 52.1497178,
          "longitude": 4.40364
        },
        {
          "latitude": 52.1497098,
          "longitude": 4.4036695
        },
        {
          "latitude": 52.1497017,
          "longitude": 4.4036964
        },
        {
          "latitude": 52.149699,
          "longitude": 4.4037259
        },
        {
          "latitude": 52.1497017,
          "longitude": 4.4037661
        },
        {
          "latitude": 52.1497098,
          "longitude": 4.4038063
        },
        {
          "latitude": 52.1497205,
          "longitude": 4.4038305
        },
        {
          "latitude": 52.1497393,
          "longitude": 4.4038546
        },
        {
          "latitude": 52.14964,
          "longitude": 4.4040745
        },
        {
          "latitude": 52.1494684,
          "longitude": 4.4044635
        },
        {
          "latitude": 52.1493343,
          "longitude": 4.4047666
        },
        {
          "latitude": 52.1490204,
          "longitude": 4.4054237
        },
        {
          "latitude": 52.1488756,
          "longitude": 4.4057348
        },
        {
          "latitude": 52.1485806,
          "longitude": 4.4063705
        },
        {
          "latitude": 52.1484277,
          "longitude": 4.4067085
        },
        {
          "latitude": 52.1482775,
          "longitude": 4.4070384
        },
        {
          "latitude": 52.1481353,
          "longitude": 4.4073442
        },
        {
          "latitude": 52.1481112,
          "longitude": 4.4073227
        },
        {
          "latitude": 52.1480629,
          "longitude": 4.4073093
        },
        {
          "latitude": 52.1480119,
          "longitude": 4.4073308
        },
        {
          "latitude": 52.1479744,
          "longitude": 4.4073656
        },
        {
          "latitude": 52.1479529,
          "longitude": 4.4074112
        },
        {
          "latitude": 52.1477303,
          "longitude": 4.407143
        },
        {
          "latitude": 52.1474111,
          "longitude": 4.406797
        },
        {
          "latitude": 52.1471134,
          "longitude": 4.406518
        },
        {
          "latitude": 52.1467647,
          "longitude": 4.4061345
        },
        {
          "latitude": 52.146534,
          "longitude": 4.4058368
        },
        {
          "latitude": 52.1463114,
          "longitude": 4.4055632
        },
        {
          "latitude": 52.1454343,
          "longitude": 4.4044662
        },
        {
          "latitude": 52.1453217,
          "longitude": 4.4043159
        },
        {
          "latitude": 52.14526,
          "longitude": 4.4042328
        },
        {
          "latitude": 52.1452278,
          "longitude": 4.4041899
        },
        {
          "latitude": 52.1451956,
          "longitude": 4.4041497
        },
        {
          "latitude": 52.1450695,
          "longitude": 4.4039807
        },
        {
          "latitude": 52.1449301,
          "longitude": 4.4037929
        },
        {
          "latitude": 52.1449488,
          "longitude": 4.40375
        },
        {
          "latitude": 52.1449569,
          "longitude": 4.4037232
        },
        {
          "latitude": 52.1449596,
          "longitude": 4.4036937
        },
        {
          "latitude": 52.1449623,
          "longitude": 4.4036642
        },
        {
          "latitude": 52.1449596,
          "longitude": 4.403632
        },
        {
          "latitude": 52.1449569,
          "longitude": 4.4036025
        },
        {
          "latitude": 52.1449462,
          "longitude": 4.403573
        },
        {
          "latitude": 52.1449354,
          "longitude": 4.4035488
        },
        {
          "latitude": 52.144922,
          "longitude": 4.4035274
        },
        {
          "latitude": 52.1448871,
          "longitude": 4.4035006
        },
        {
          "latitude": 52.1448684,
          "longitude": 4.4034925
        },
        {
          "latitude": 52.1448496,
          "longitude": 4.4034898
        },
        {
          "latitude": 52.1448308,
          "longitude": 4.4034925
        },
        {
          "latitude": 52.1448147,
          "longitude": 4.4035006
        },
        {
          "latitude": 52.144796,
          "longitude": 4.403514
        },
        {
          "latitude": 52.1447825,
          "longitude": 4.4035327
        },
        {
          "latitude": 52.1447691,
          "longitude": 4.4035542
        },
        {
          "latitude": 52.1447638,
          "longitude": 4.4035703
        },
        {
          "latitude": 52.1445787,
          "longitude": 4.4033208
        },
        {
          "latitude": 52.1442649,
          "longitude": 4.4028997
        },
        {
          "latitude": 52.1441442,
          "longitude": 4.4027013
        },
        {
          "latitude": 52.144061,
          "longitude": 4.4025752
        },
        {
          "latitude": 52.1439832,
          "longitude": 4.4024652
        },
        {
          "latitude": 52.1436507,
          "longitude": 4.401961
        },
        {
          "latitude": 52.1433181,
          "longitude": 4.4015774
        },
        {
          "latitude": 52.1431518,
          "longitude": 4.4014138
        },
        {
          "latitude": 52.1430579,
          "longitude": 4.4013092
        },
        {
          "latitude": 52.1429801,
          "longitude": 4.401218
        },
        {
          "latitude": 52.1429935,
          "longitude": 4.4011697
        },
        {
          "latitude": 52.1430016,
          "longitude": 4.4010946
        },
        {
          "latitude": 52.1430016,
          "longitude": 4.4010678
        },
        {
          "latitude": 52.1429962,
          "longitude": 4.4010302
        },
        {
          "latitude": 52.1429855,
          "longitude": 4.4009927
        },
        {
          "latitude": 52.1429694,
          "longitude": 4.4009632
        },
        {
          "latitude": 52.142956,
          "longitude": 4.4009444
        },
        {
          "latitude": 52.1429211,
          "longitude": 4.400923
        },
        {
          "latitude": 52.1428782,
          "longitude": 4.4009149
        },
        {
          "latitude": 52.1428406,
          "longitude": 4.400923
        },
        {
          "latitude": 52.1427897,
          "longitude": 4.4009551
        },
        {
          "latitude": 52.1427226,
          "longitude": 4.4009069
        },
        {
          "latitude": 52.142508,
          "longitude": 4.4006655
        },
        {
          "latitude": 52.1421567,
          "longitude": 4.4002497
        },
        {
          "latitude": 52.1415612,
          "longitude": 4.3995899
        },
        {
          "latitude": 52.1414754,
          "longitude": 4.3994531
        },
        {
          "latitude": 52.1414834,
          "longitude": 4.399386
        },
        {
          "latitude": 52.1414834,
          "longitude": 4.3993512
        },
        {
          "latitude": 52.1414727,
          "longitude": 4.3992814
        },
        {
          "latitude": 52.1414566,
          "longitude": 4.3992358
        },
        {
          "latitude": 52.1414351,
          "longitude": 4.3991956
        },
        {
          "latitude": 52.141411,
          "longitude": 4.3991795
        },
        {
          "latitude": 52.1413654,
          "longitude": 4.3991634
        },
        {
          "latitude": 52.1413359,
          "longitude": 4.3991661
        },
        {
          "latitude": 52.1412984,
          "longitude": 4.3991768
        },
        {
          "latitude": 52.1412608,
          "longitude": 4.3992063
        },
        {
          "latitude": 52.1412474,
          "longitude": 4.3992224
        },
        {
          "latitude": 52.1412286,
          "longitude": 4.3992519
        },
        {
          "latitude": 52.1412206,
          "longitude": 4.3992761
        },
        {
          "latitude": 52.1412125,
          "longitude": 4.3993324
        },
        {
          "latitude": 52.1412152,
          "longitude": 4.3994021
        },
        {
          "latitude": 52.1412313,
          "longitude": 4.3994692
        },
        {
          "latitude": 52.1412501,
          "longitude": 4.3995094
        },
        {
          "latitude": 52.1412688,
          "longitude": 4.3995389
        },
        {
          "latitude": 52.1411186,
          "longitude": 4.3999225
        },
        {
          "latitude": 52.1411133,
          "longitude": 4.3999413
        },
        {
          "latitude": 52.1410248,
          "longitude": 4.4001639
        },
        {
          "latitude": 52.1409523,
          "longitude": 4.4003034
        },
        {
          "latitude": 52.140888,
          "longitude": 4.4004241
        },
        {
          "latitude": 52.1406385,
          "longitude": 4.4008961
        },
        {
          "latitude": 52.1404561,
          "longitude": 4.401226
        },
        {
          "latitude": 52.1397078,
          "longitude": 4.4025698
        },
        {
          "latitude": 52.1391553,
          "longitude": 4.4034952
        },
        {
          "latitude": 52.1390346,
          "longitude": 4.4037393
        },
        {
          "latitude": 52.1382809,
          "longitude": 4.4058582
        },
        {
          "latitude": 52.1381655,
          "longitude": 4.4061399
        },
        {
          "latitude": 52.1380877,
          "longitude": 4.4061908
        },
        {
          "latitude": 52.1379912,
          "longitude": 4.4063786
        },
        {
          "latitude": 52.1379215,
          "longitude": 4.4064885
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
      "endPointIndex": 49,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "nld-connector",
          "shieldContent": "s100"
        }
      ]
    },
    {
      "startPointIndex": 49,
      "endPointIndex": 104,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "nld-connector",
          "shieldContent": "s105"
        }
      ]
    },
    {
      "startPointIndex": 145,
      "endPointIndex": 156,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "nld-connector",
          "shieldContent": "s104"
        }
      ]
    },
    {
      "startPointIndex": 0,
      "endPointIndex": 170,
      "sectionType": "LOW_EMISSION_ZONE"
    },
    {
      "startPointIndex": 156,
      "endPointIndex": 170,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "nld-connector",
          "shieldContent": "s103"
        }
      ]
    },
    {
      "startPointIndex": 170,
      "endPointIndex": 204,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "nld-primary",
          "shieldContent": "N200"
        },
        {
          "reference": "nld-connector",
          "shieldContent": "s103"
        }
      ]
    },
    {
      "maxSpeedLimitInKmh": 50,
      "startPointIndex": 0,
      "endPointIndex": 206,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 204,
      "endPointIndex": 218,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "nld-primary",
          "shieldContent": "N200"
        },
        {
          "reference": "nld-connector",
          "shieldContent": "s104"
        }
      ]
    },
    {
      "startPointIndex": 0,
      "endPointIndex": 219,
      "sectionType": "URBAN"
    },
    {
      "maxSpeedLimitInKmh": 80,
      "startPointIndex": 206,
      "endPointIndex": 233,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 234,
      "endPointIndex": 248,
      "sectionType": "URBAN"
    },
    {
      "maxSpeedLimitInKmh": 50,
      "startPointIndex": 233,
      "endPointIndex": 265,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 80,
      "startPointIndex": 265,
      "endPointIndex": 267,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 218,
      "endPointIndex": 271,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "nld-primary",
          "shieldContent": "N200"
        }
      ]
    },
    {
      "startPointIndex": 271,
      "endPointIndex": 297,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "nld-highway",
          "shieldContent": "A200"
        },
        {
          "reference": "nld-primary",
          "shieldContent": "N200"
        }
      ]
    },
    {
      "maxSpeedLimitInKmh": 100,
      "startPointIndex": 267,
      "endPointIndex": 301,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 70,
      "startPointIndex": 301,
      "endPointIndex": 332,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 350,
      "endPointIndex": 357,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "nld-highway",
          "shieldContent": "A9"
        }
      ]
    },
    {
      "maxSpeedLimitInKmh": 100,
      "startPointIndex": 332,
      "endPointIndex": 363,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 264,
      "endPointIndex": 385,
      "sectionType": "MOTORWAY"
    },
    {
      "startPointIndex": 357,
      "endPointIndex": 385,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "nld-primary",
          "shieldContent": "N205"
        }
      ]
    },
    {
      "maxSpeedLimitInKmh": 70,
      "startPointIndex": 363,
      "endPointIndex": 424,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 100,
      "startPointIndex": 424,
      "endPointIndex": 462,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 70,
      "startPointIndex": 462,
      "endPointIndex": 477,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 100,
      "startPointIndex": 477,
      "endPointIndex": 500,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 70,
      "startPointIndex": 500,
      "endPointIndex": 512,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 100,
      "startPointIndex": 512,
      "endPointIndex": 550,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 529,
      "endPointIndex": 554,
      "sectionType": "URBAN"
    },
    {
      "maxSpeedLimitInKmh": 70,
      "startPointIndex": 550,
      "endPointIndex": 560,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 409,
      "endPointIndex": 647,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "nld-primary",
          "shieldContent": "N205"
        }
      ]
    },
    {
      "startPointIndex": 647,
      "endPointIndex": 721,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "nld-primary",
          "shieldContent": "N207"
        }
      ]
    },
    {
      "maxSpeedLimitInKmh": 80,
      "startPointIndex": 560,
      "endPointIndex": 727,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 100,
      "startPointIndex": 727,
      "endPointIndex": 839,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 70,
      "startPointIndex": 839,
      "endPointIndex": 842,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 949,
      "endPointIndex": 953,
      "sectionType": "URBAN"
    },
    {
      "startPointIndex": 749,
      "endPointIndex": 961,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "nld-highway",
          "shieldContent": "A44"
        }
      ]
    },
    {
      "startPointIndex": 749,
      "endPointIndex": 961,
      "sectionType": "MOTORWAY"
    },
    {
      "maxSpeedLimitInKmh": 100,
      "startPointIndex": 842,
      "endPointIndex": 973,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 80,
      "startPointIndex": 973,
      "endPointIndex": 982,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 50,
      "startPointIndex": 982,
      "endPointIndex": 1012,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 1021,
      "endPointIndex": 1024,
      "sectionType": "TUNNEL"
    },
    {
      "startPointIndex": 1032,
      "endPointIndex": 1044,
      "sectionType": "URBAN"
    },
    {
      "maxSpeedLimitInKmh": 80,
      "startPointIndex": 1012,
      "endPointIndex": 1053,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 50,
      "startPointIndex": 1053,
      "endPointIndex": 1059,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 982,
      "endPointIndex": 1059,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "nld-primary",
          "shieldContent": "N206"
        }
      ]
    },
    {
      "maxSpeedLimitInKmh": 80,
      "startPointIndex": 1059,
      "endPointIndex": 1068,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 1046,
      "endPointIndex": 1079,
      "sectionType": "URBAN"
    },
    {
      "maxSpeedLimitInKmh": 80,
      "startPointIndex": 1079,
      "endPointIndex": 1086,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 60,
      "startPointIndex": 1086,
      "endPointIndex": 1110,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 50,
      "startPointIndex": 1110,
      "endPointIndex": 1121,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 1059,
      "endPointIndex": 1181,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "nld-primary",
          "shieldContent": "N441"
        }
      ]
    },
    {
      "maxSpeedLimitInKmh": 80,
      "startPointIndex": 1121,
      "endPointIndex": 1190,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 50,
      "startPointIndex": 1190,
      "endPointIndex": 1212,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 50,
      "startPointIndex": 1226,
      "endPointIndex": 1253,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 50,
      "startPointIndex": 1271,
      "endPointIndex": 1297,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 1192,
      "endPointIndex": 1330,
      "sectionType": "URBAN"
    },
    {
      "maxSpeedLimitInKmh": 50,
      "startPointIndex": 1315,
      "endPointIndex": 1331,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 80,
      "startPointIndex": 1331,
      "endPointIndex": 1334,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 1382,
      "endPointIndex": 1384,
      "sectionType": "URBAN"
    },
    {
      "startPointIndex": 1331,
      "endPointIndex": 1386,
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
      "startPointIndex": 1334,
      "endPointIndex": 1404,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 1386,
      "endPointIndex": 1463,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "nld-connector",
          "shieldContent": "s101"
        }
      ]
    },
    {
      "startPointIndex": 1474,
      "endPointIndex": 1481,
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
      "startPointIndex": 1404,
      "endPointIndex": 1512,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 0,
      "endPointIndex": 1512,
      "sectionType": "COUNTRY",
      "countryCode": "NLD"
    },
    {
      "startPointIndex": 1481,
      "endPointIndex": 1512,
      "sectionType": "LOW_EMISSION_ZONE"
    },
    {
      "startPointIndex": 0,
      "endPointIndex": 1512,
      "sectionType": "TRAVEL_MODE",
      "travelMode": "car"
    },
    {
      "startPointIndex": 1428,
      "endPointIndex": 1512,
      "sectionType": "URBAN"
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
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 24,
      "endPointIndex": 26,
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
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 26,
      "endPointIndex": 27,
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
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 27,
      "endPointIndex": 28,
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
        "DOUBLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 28,
      "endPointIndex": 29,
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
      "startPointIndex": 29,
      "endPointIndex": 30,
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
      "startPointIndex": 30,
      "endPointIndex": 31,
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
      "startPointIndex": 31,
      "endPointIndex": 38,
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
      "startPointIndex": 38,
      "endPointIndex": 43,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        }
      ],
      "laneSeparators": [
        "DOUBLE_SOLID",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 44,
      "endPointIndex": 46,
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
      "startPointIndex": 46,
      "endPointIndex": 48,
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
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
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
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 50,
      "endPointIndex": 52,
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
      "startPointIndex": 52,
      "endPointIndex": 53,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": []
        }
      ],
      "laneSeparators": [
        "LONG_DASHED",
        "SINGLE_SOLID"
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
        }
      ],
      "laneSeparators": [
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 54,
      "endPointIndex": 56,
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
      "startPointIndex": 57,
      "endPointIndex": 57,
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
      "startPointIndex": 57,
      "endPointIndex": 62,
      "sectionType": "LANES"
    },
    {
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
      "startPointIndex": 62,
      "endPointIndex": 66,
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
      "startPointIndex": 66,
      "endPointIndex": 70,
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
      "startPointIndex": 70,
      "endPointIndex": 70,
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
      "startPointIndex": 70,
      "endPointIndex": 99,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT_U_TURN",
            "LEFT"
          ]
        },
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
        "SHORT_DASHED",
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
            "LEFT_U_TURN",
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
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 101,
      "endPointIndex": 102,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT_U_TURN",
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
        "DOUBLE_SOLID",
        "DOUBLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 102,
      "endPointIndex": 103,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT_U_TURN",
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
      "startPointIndex": 103,
      "endPointIndex": 103,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT_U_TURN",
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
        "DOUBLE_SOLID",
        "DOUBLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 103,
      "endPointIndex": 104,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT_U_TURN"
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
            "RIGHT"
          ],
          "follow": "RIGHT"
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
      "startPointIndex": 104,
      "endPointIndex": 104,
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
      "startPointIndex": 104,
      "endPointIndex": 118,
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
      "startPointIndex": 119,
      "endPointIndex": 120,
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
      "startPointIndex": 120,
      "endPointIndex": 121,
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
      "startPointIndex": 121,
      "endPointIndex": 121,
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
      "startPointIndex": 121,
      "endPointIndex": 122,
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
      "startPointIndex": 122,
      "endPointIndex": 124,
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
      "startPointIndex": 124,
      "endPointIndex": 142,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
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
      "startPointIndex": 143,
      "endPointIndex": 144,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
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
      "startPointIndex": 144,
      "endPointIndex": 145,
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
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 145,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 146,
      "endPointIndex": 147,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 281,
      "endPointIndex": 284,
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
        "LONG_DASHED",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 284,
      "endPointIndex": 288,
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
        "LONG_DASHED",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 288,
      "endPointIndex": 289,
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
      "startPointIndex": 289,
      "endPointIndex": 290,
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
      "startPointIndex": 290,
      "endPointIndex": 292,
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
      "startPointIndex": 292,
      "endPointIndex": 293,
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
      "properties": [],
      "startPointIndex": 293,
      "endPointIndex": 293,
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
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 293,
      "endPointIndex": 297,
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
      "startPointIndex": 297,
      "endPointIndex": 300,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 300,
      "endPointIndex": 301,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 301,
      "endPointIndex": 302,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 302,
      "endPointIndex": 307,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
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
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 307,
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
      "startPointIndex": 308,
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
            "STRAIGHT",
            "SLIGHT_RIGHT"
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
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 308,
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
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 308,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 308,
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
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 314,
      "endPointIndex": 319,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 319,
      "endPointIndex": 319,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 319,
      "endPointIndex": 320,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
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
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 320,
      "endPointIndex": 326,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 326,
      "endPointIndex": 327,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 327,
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
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 331,
      "endPointIndex": 331,
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
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 331,
      "endPointIndex": 332,
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
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 332,
      "endPointIndex": 332,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 332,
      "endPointIndex": 334,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 334,
      "endPointIndex": 339,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 339,
      "endPointIndex": 340,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 340,
      "endPointIndex": 341,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 341,
      "endPointIndex": 342,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 342,
      "endPointIndex": 343,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 343,
      "endPointIndex": 344,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 344,
      "endPointIndex": 345,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
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
      "startPointIndex": 345,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 347,
      "endPointIndex": 350,
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
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 350,
      "endPointIndex": 351,
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
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 351,
      "endPointIndex": 352,
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
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 352,
      "endPointIndex": 353,
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
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 353,
      "endPointIndex": 355,
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
        "LONG_DASHED",
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
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 356,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 356,
      "endPointIndex": 360,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
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
      "startPointIndex": 360,
      "endPointIndex": 361,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
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
      "startPointIndex": 361,
      "endPointIndex": 362,
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
      "startPointIndex": 362,
      "endPointIndex": 363,
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
      "startPointIndex": 363,
      "endPointIndex": 364,
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
      "startPointIndex": 364,
      "endPointIndex": 365,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 365,
      "endPointIndex": 376,
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
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 376,
      "endPointIndex": 378,
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
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 378,
      "endPointIndex": 379,
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
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
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
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 380,
      "endPointIndex": 381,
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
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 381,
      "endPointIndex": 382,
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
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
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
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
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
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
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
      "endPointIndex": 389,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 389,
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
        },
        {
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
      "startPointIndex": 392,
      "endPointIndex": 400,
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
      "startPointIndex": 639,
      "endPointIndex": 640,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 640,
      "endPointIndex": 642,
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
      "startPointIndex": 642,
      "endPointIndex": 642,
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
      "startPointIndex": 642,
      "endPointIndex": 643,
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
      "startPointIndex": 643,
      "endPointIndex": 644,
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
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 644,
      "endPointIndex": 647,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
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
      "startPointIndex": 647,
      "endPointIndex": 648,
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
      "properties": [],
      "startPointIndex": 717,
      "endPointIndex": 718,
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
        "LONG_DASHED",
        "SINGLE_SOLID"
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
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 719,
      "endPointIndex": 721,
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
        "NO_MARKING",
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
      "startPointIndex": 721,
      "endPointIndex": 727,
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
      "startPointIndex": 727,
      "endPointIndex": 727,
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
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 727,
      "endPointIndex": 728,
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
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 728,
      "endPointIndex": 729,
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
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 729,
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
      "startPointIndex": 731,
      "endPointIndex": 733,
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
      "startPointIndex": 733,
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
      "endPointIndex": 749,
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
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 738,
      "endPointIndex": 749,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 749,
      "endPointIndex": 751,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 751,
      "endPointIndex": 754,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 754,
      "endPointIndex": 756,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 756,
      "endPointIndex": 759,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 759,
      "endPointIndex": 761,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 761,
      "endPointIndex": 763,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 763,
      "endPointIndex": 764,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 949,
      "endPointIndex": 950,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 950,
      "endPointIndex": 951,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 951,
      "endPointIndex": 953,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 953,
      "endPointIndex": 954,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 954,
      "endPointIndex": 955,
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
      "properties": [],
      "startPointIndex": 955,
      "endPointIndex": 958,
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
      "properties": [],
      "startPointIndex": 958,
      "endPointIndex": 959,
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
      "properties": [],
      "startPointIndex": 959,
      "endPointIndex": 960,
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
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 960,
      "endPointIndex": 961,
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
      "startPointIndex": 961,
      "endPointIndex": 964,
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
      "startPointIndex": 964,
      "endPointIndex": 964,
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
      "startPointIndex": 964,
      "endPointIndex": 968,
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
      "startPointIndex": 968,
      "endPointIndex": 970,
      "sectionType": "LANES"
    },
    {
      "lanes": [
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
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 1039,
      "endPointIndex": 1041,
      "sectionType": "LANES"
    },
    {
      "lanes": [
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
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 1041,
      "endPointIndex": 1043,
      "sectionType": "LANES"
    },
    {
      "lanes": [
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
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 1043,
      "endPointIndex": 1044,
      "sectionType": "LANES"
    },
    {
      "lanes": [
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
        "LONG_DASHED",
        "SHORT_DASHED"
      ],
      "properties": [],
      "startPointIndex": 1044,
      "endPointIndex": 1045,
      "sectionType": "LANES"
    },
    {
      "lanes": [
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
        "LONG_DASHED",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 1045,
      "endPointIndex": 1046,
      "sectionType": "LANES"
    },
    {
      "lanes": [
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
        "LONG_DASHED",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 1046,
      "endPointIndex": 1048,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
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
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 1048,
      "endPointIndex": 1050,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
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
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 1050,
      "endPointIndex": 1051,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
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
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 1051,
      "endPointIndex": 1053,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT",
            "STRAIGHT"
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
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 1053,
      "endPointIndex": 1054,
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
      "startPointIndex": 1054,
      "endPointIndex": 1057,
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
      "startPointIndex": 1057,
      "endPointIndex": 1057,
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
        "DOUBLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 1057,
      "endPointIndex": 1058,
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
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 1058,
      "endPointIndex": 1060,
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
      "startPointIndex": 1060,
      "endPointIndex": 1061,
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
      "startPointIndex": 1061,
      "endPointIndex": 1061,
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
      "startPointIndex": 1061,
      "endPointIndex": 1062,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
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
      "startPointIndex": 1062,
      "endPointIndex": 1064,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
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
      "properties": [],
      "startPointIndex": 1064,
      "endPointIndex": 1067,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
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
      "startPointIndex": 1067,
      "endPointIndex": 1068,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 1068,
      "endPointIndex": 1068,
      "sectionType": "LANES"
    },
    {
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
      "properties": [],
      "startPointIndex": 1068,
      "endPointIndex": 1069,
      "sectionType": "LANES"
    },
    {
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
      "startPointIndex": 1069,
      "endPointIndex": 1073,
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
      "startPointIndex": 1073,
      "endPointIndex": 1077,
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
      "startPointIndex": 1077,
      "endPointIndex": 1077,
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
      "startPointIndex": 1077,
      "endPointIndex": 1081,
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
      "startPointIndex": 1081,
      "endPointIndex": 1083,
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
      "startPointIndex": 1083,
      "endPointIndex": 1084,
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
      "startPointIndex": 1158,
      "endPointIndex": 1161,
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
      "startPointIndex": 1161,
      "endPointIndex": 1163,
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
      "startPointIndex": 1163,
      "endPointIndex": 1164,
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
      "startPointIndex": 1164,
      "endPointIndex": 1164,
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
      "startPointIndex": 1164,
      "endPointIndex": 1168,
      "sectionType": "LANES"
    },
    {
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
      "startPointIndex": 1168,
      "endPointIndex": 1168,
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
      "startPointIndex": 1168,
      "endPointIndex": 1174,
      "sectionType": "LANES"
    },
    {
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
      "startPointIndex": 1174,
      "endPointIndex": 1177,
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
      "startPointIndex": 1177,
      "endPointIndex": 1180,
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
      "startPointIndex": 1180,
      "endPointIndex": 1180,
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
      "startPointIndex": 1180,
      "endPointIndex": 1183,
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
      "startPointIndex": 1183,
      "endPointIndex": 1185,
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
      "startPointIndex": 1185,
      "endPointIndex": 1186,
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
      "startPointIndex": 1186,
      "endPointIndex": 1188,
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
      "startPointIndex": 1186,
      "endPointIndex": 1211,
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
      "startPointIndex": 1212,
      "endPointIndex": 1212,
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
      "startPointIndex": 1212,
      "endPointIndex": 1216,
      "sectionType": "LANES"
    },
    {
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
      "startPointIndex": 1216,
      "endPointIndex": 1216,
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
      "startPointIndex": 1216,
      "endPointIndex": 1224,
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
      "startPointIndex": 1224,
      "endPointIndex": 1224,
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
      "startPointIndex": 1224,
      "endPointIndex": 1234,
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
      "startPointIndex": 1235,
      "endPointIndex": 1235,
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
      "startPointIndex": 1235,
      "endPointIndex": 1238,
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
      "startPointIndex": 1238,
      "endPointIndex": 1238,
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
      "startPointIndex": 1238,
      "endPointIndex": 1252,
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
      "startPointIndex": 1253,
      "endPointIndex": 1253,
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
      "startPointIndex": 1253,
      "endPointIndex": 1258,
      "sectionType": "LANES"
    },
    {
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
      "startPointIndex": 1258,
      "endPointIndex": 1258,
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
      "startPointIndex": 1258,
      "endPointIndex": 1267,
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
      "startPointIndex": 1267,
      "endPointIndex": 1267,
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
      "startPointIndex": 1267,
      "endPointIndex": 1279,
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
      "startPointIndex": 1279,
      "endPointIndex": 1280,
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
      "startPointIndex": 1280,
      "endPointIndex": 1280,
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
      "startPointIndex": 1280,
      "endPointIndex": 1283,
      "sectionType": "LANES"
    },
    {
      "lanes": [
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
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 1283,
      "endPointIndex": 1285,
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
      "startPointIndex": 1285,
      "endPointIndex": 1290,
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
      "startPointIndex": 1290,
      "endPointIndex": 1290,
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
      "startPointIndex": 1290,
      "endPointIndex": 1296,
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
      "startPointIndex": 1296,
      "endPointIndex": 1296,
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
      "startPointIndex": 1296,
      "endPointIndex": 1300,
      "sectionType": "LANES"
    },
    {
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
      "startPointIndex": 1300,
      "endPointIndex": 1300,
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
      "startPointIndex": 1300,
      "endPointIndex": 1305,
      "sectionType": "LANES"
    },
    {
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
      "startPointIndex": 1305,
      "endPointIndex": 1307,
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
      "startPointIndex": 1307,
      "endPointIndex": 1313,
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
      "startPointIndex": 1313,
      "endPointIndex": 1313,
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
      "startPointIndex": 1313,
      "endPointIndex": 1324,
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
        },
        {
          "directions": [
            "SLIGHT_RIGHT"
          ],
          "follow": "SLIGHT_RIGHT"
        }
      ],
      "laneSeparators": [
        "SHORT_DASHED",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 1326,
      "endPointIndex": 1327,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT_U_TURN",
            "LEFT"
          ]
        },
        {
          "directions": [
            "LEFT",
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
        "SHORT_DASHED",
        "LONG_DASHED",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 1327,
      "endPointIndex": 1329,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT_U_TURN",
            "LEFT"
          ]
        },
        {
          "directions": [
            "LEFT",
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
        "SINGLE_SOLID",
        "DOUBLE_SOLID",
        "DOUBLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 1329,
      "endPointIndex": 1329,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT_U_TURN",
            "LEFT"
          ]
        },
        {
          "directions": [
            "LEFT",
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
        "SINGLE_SOLID",
        "DOUBLE_SOLID",
        "DOUBLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 1329,
      "endPointIndex": 1330,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT_U_TURN"
          ]
        },
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
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 1330,
      "endPointIndex": 1330,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 1330,
      "endPointIndex": 1331,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 1331,
      "endPointIndex": 1333,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 1333,
      "endPointIndex": 1334,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 1334,
      "endPointIndex": 1335,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 1385,
      "endPointIndex": 1386,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 1386,
      "endPointIndex": 1387,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 1387,
      "endPointIndex": 1388,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 1388,
      "endPointIndex": 1392,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
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
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 1437,
      "endPointIndex": 1439,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
        "DOUBLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 1439,
      "endPointIndex": 1440,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
        "DOUBLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 1440,
      "endPointIndex": 1443,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
        "DOUBLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 1443,
      "endPointIndex": 1444,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
        "DOUBLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 1444,
      "endPointIndex": 1445,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
        "DOUBLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 1445,
      "endPointIndex": 1446,
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
        "LONG_DASHED",
        "LONG_DASHED",
        "DOUBLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 1446,
      "endPointIndex": 1447,
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
        },
        {
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
        "DOUBLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 1447,
      "endPointIndex": 1449,
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
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 1449,
      "endPointIndex": 1449,
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
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 1449,
      "endPointIndex": 1450,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT_U_TURN",
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
      "properties": [],
      "startPointIndex": 1450,
      "endPointIndex": 1450,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT_U_TURN",
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
      "properties": [],
      "startPointIndex": 1450,
      "endPointIndex": 1451,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT_U_TURN"
          ]
        },
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
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 1451,
      "endPointIndex": 1451,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 1451,
      "endPointIndex": 1452,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 1452,
      "endPointIndex": 1453,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 1453,
      "endPointIndex": 1453,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 1453,
      "endPointIndex": 1455,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 1455,
      "endPointIndex": 1456,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 1456,
      "endPointIndex": 1457,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 1457,
      "endPointIndex": 1458,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
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
      "startPointIndex": 1458,
      "endPointIndex": 1459,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
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
      "startPointIndex": 1459,
      "endPointIndex": 1460,
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
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 1460,
      "endPointIndex": 1461,
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
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 1461,
      "endPointIndex": 1463,
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
            "SLIGHT_RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 1463,
      "endPointIndex": 1467,
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
      "startPointIndex": 1467,
      "endPointIndex": 1468,
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
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 1468,
      "endPointIndex": 1470,
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
            "SLIGHT_RIGHT"
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
      "startPointIndex": 1470,
      "endPointIndex": 1474,
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
      "startPointIndex": 1474,
      "endPointIndex": 1475,
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
      "startPointIndex": 1475,
      "endPointIndex": 1475,
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
      "startPointIndex": 1475,
      "endPointIndex": 1478,
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
      "startPointIndex": 1480,
      "endPointIndex": 1481,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
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
      "startPointIndex": 1481,
      "endPointIndex": 1484,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT_U_TURN",
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
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 1484,
      "endPointIndex": 1485,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT_U_TURN"
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
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 1485,
      "endPointIndex": 1485,
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
      "startPointIndex": 1485,
      "endPointIndex": 1486,
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
      "startPointIndex": 1486,
      "endPointIndex": 1487,
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
      "startPointIndex": 1487,
      "endPointIndex": 1488,
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
      "startPointIndex": 1488,
      "endPointIndex": 1508,
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
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 1511,
      "endPointIndex": 1512,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 1512,
      "endPointIndex": 1512,
      "sectionType": "LANES"
    }
  ],
  "guidance": {
    "instructions": [
      {
        "drivingSide": "RIGHT",
        "maneuver": "DEPART",
        "maneuverPoint": {
          "latitude": 52.3662248,
          "longitude": 4.8776267
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "s100"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈnɑ.sɑ⁀u.ˌka.də",
            "phoneticLanguageCode": "nl-NL",
            "text": "Nassaukade"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "s100"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈnɑ.sɑ⁀u.ˌka.də",
            "phoneticLanguageCode": "nl-NL",
            "text": "Nassaukade"
          }
        },
        "routeOffsetInMeters": 0,
        "routePath": [
          {
            "distanceInMeters": 0,
            "point": {
              "latitude": 52.3662248,
              "longitude": 4.8776267
            },
            "travelTimeInSeconds": 0
          }
        ],
        "sideRoads": []
      },
      {
        "changeOfAngleInDegrees": -68,
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_LEFT",
        "maneuverPoint": {
          "latitude": 52.3741812,
          "longitude": 4.8751241
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "s105"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈtʋe.də ˈhy.ɣo də ˈɣrot.strat",
            "phoneticLanguageCode": "nl-NL",
            "text": "Tweede Hugo de Grootstraat"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "s100"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈnɑ.sɑ⁀u.ˌka.də",
            "phoneticLanguageCode": "nl-NL",
            "text": "Nassaukade"
          }
        },
        "routeOffsetInMeters": 956,
        "routePath": [
          {
            "distanceInMeters": 956,
            "point": {
              "latitude": 52.3741034,
              "longitude": 4.875108
            },
            "travelTimeInSeconds": 229
          },
          {
            "distanceInMeters": 965,
            "point": {
              "latitude": 52.3741812,
              "longitude": 4.8751241
            },
            "travelTimeInSeconds": 231
          },
          {
            "distanceInMeters": 972,
            "point": {
              "latitude": 52.3741972,
              "longitude": 4.8750249
            },
            "travelTimeInSeconds": 241
          },
          {
            "distanceInMeters": 1004,
            "point": {
              "latitude": 52.3742697,
              "longitude": 4.8745796
            },
            "travelTimeInSeconds": 247
          },
          {
            "distanceInMeters": 1010,
            "point": {
              "latitude": 52.3742643,
              "longitude": 4.8744884
            },
            "travelTimeInSeconds": 248
          },
          {
            "distanceInMeters": 1020,
            "point": {
              "latitude": 52.3742984,
              "longitude": 4.8743616
            },
            "travelTimeInSeconds": 250
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 879,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 826,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 700,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 487,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 391,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 276,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 67,
            "side": "LEFT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": 1,
        "drivingSide": "RIGHT",
        "maneuver": "ROUNDABOUT_STRAIGHT",
        "maneuverPoint": {
          "latitude": 52.3747149,
          "longitude": 4.872517
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "s105"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈtʋe.də ˈhy.ɣo də ˈɣrot.strat",
            "phoneticLanguageCode": "nl-NL",
            "text": "Tweede Hugo de Grootstraat"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "s105"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈtʋe.də ˈhy.ɣo də ˈɣrot.strat",
            "phoneticLanguageCode": "nl-NL",
            "text": "Tweede Hugo de Grootstraat"
          }
        },
        "roundaboutExitNumber": 2,
        "routeOffsetInMeters": 1122,
        "routePath": [
          {
            "distanceInMeters": 1122,
            "point": {
              "latitude": 52.3746184,
              "longitude": 4.8729542
            },
            "travelTimeInSeconds": 289
          },
          {
            "distanceInMeters": 1125,
            "point": {
              "latitude": 52.3746479,
              "longitude": 4.8729649
            },
            "travelTimeInSeconds": 292
          },
          {
            "distanceInMeters": 1129,
            "point": {
              "latitude": 52.3746854,
              "longitude": 4.8729649
            },
            "travelTimeInSeconds": 294
          },
          {
            "distanceInMeters": 1132,
            "point": {
              "latitude": 52.3747069,
              "longitude": 4.8729542
            },
            "travelTimeInSeconds": 295
          },
          {
            "distanceInMeters": 1134,
            "point": {
              "latitude": 52.374723,
              "longitude": 4.8729408
            },
            "travelTimeInSeconds": 296
          },
          {
            "distanceInMeters": 1138,
            "point": {
              "latitude": 52.3747525,
              "longitude": 4.8729086
            },
            "travelTimeInSeconds": 298
          },
          {
            "distanceInMeters": 1141,
            "point": {
              "latitude": 52.3747686,
              "longitude": 4.8728684
            },
            "travelTimeInSeconds": 299
          },
          {
            "distanceInMeters": 1144,
            "point": {
              "latitude": 52.3747793,
              "longitude": 4.8728335
            },
            "travelTimeInSeconds": 301
          },
          {
            "distanceInMeters": 1145,
            "point": {
              "latitude": 52.3747846,
              "longitude": 4.8728201
            },
            "travelTimeInSeconds": 301
          },
          {
            "distanceInMeters": 1152,
            "point": {
              "latitude": 52.3747927,
              "longitude": 4.8727182000000004
            },
            "travelTimeInSeconds": 304
          },
          {
            "distanceInMeters": 1158,
            "point": {
              "latitude": 52.3747793,
              "longitude": 4.8726216
            },
            "travelTimeInSeconds": 306
          },
          {
            "distanceInMeters": 1162,
            "point": {
              "latitude": 52.3747605,
              "longitude": 4.8725733
            },
            "travelTimeInSeconds": 308
          },
          {
            "distanceInMeters": 1166,
            "point": {
              "latitude": 52.3747337,
              "longitude": 4.8725331
            },
            "travelTimeInSeconds": 309
          },
          {
            "distanceInMeters": 1169,
            "point": {
              "latitude": 52.3747149,
              "longitude": 4.872517
            },
            "travelTimeInSeconds": 310
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 73,
            "side": "LEFT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": 95,
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "landmark": "AT_TRAFFIC_LIGHT",
        "maneuver": "TURN_RIGHT",
        "maneuverPoint": {
          "latitude": 52.3752138,
          "longitude": 4.8626706
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈʋɪ.ləm də ˈzʋɛ⁀i.ɣər.lan",
            "phoneticLanguageCode": "nl-NL",
            "text": "Willem de Zwijgerlaan"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "s105"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈjɑn vɑŋ ˈɣa.lən.strat",
            "phoneticLanguageCode": "nl-NL",
            "text": "Jan van Galenstraat"
          }
        },
        "routeOffsetInMeters": 1874,
        "routePath": [
          {
            "distanceInMeters": 1874,
            "point": {
              "latitude": 52.3752138,
              "longitude": 4.8626706
            },
            "travelTimeInSeconds": 409
          },
          {
            "distanceInMeters": 1884,
            "point": {
              "latitude": 52.3753064,
              "longitude": 4.8626462
            },
            "travelTimeInSeconds": 418
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 622,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 601,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 346,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 333,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 245,
            "side": "LEFT"
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
          "latitude": 52.3824424,
          "longitude": 4.8555681
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "s104"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈbɔs ʔɛn ˈlɔ.mər.ʋɛx",
            "phoneticLanguageCode": "nl-NL",
            "text": "Bos en Lommerweg"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈʋɪ.ləm də ˈzʋɛ⁀i.ɣər.lan",
            "phoneticLanguageCode": "nl-NL",
            "text": "Willem de Zwijgerlaan"
          }
        },
        "routeOffsetInMeters": 2938,
        "routePath": [
          {
            "distanceInMeters": 2938,
            "point": {
              "latitude": 52.3824424,
              "longitude": 4.8555681
            },
            "travelTimeInSeconds": 535
          },
          {
            "distanceInMeters": 2948,
            "point": {
              "latitude": 52.3825332,
              "longitude": 4.8555647
            },
            "travelTimeInSeconds": 539
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 907,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 818,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 767,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 539,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 501,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 195,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 99,
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
          "latitude": 52.3851192,
          "longitude": 4.855442
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "s103"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈhar.lɛ.mər.ˌʋɛx",
            "phoneticLanguageCode": "nl-NL",
            "text": "Haarlemmerweg"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "s104"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈbɔs ʔɛn ˈlɔ.mər.ʋɛx",
            "phoneticLanguageCode": "nl-NL",
            "text": "Bos en Lommerweg"
          }
        },
        "routeOffsetInMeters": 3226,
        "routePath": [
          {
            "distanceInMeters": 3226,
            "point": {
              "latitude": 52.3850253,
              "longitude": 4.8554608
            },
            "travelTimeInSeconds": 602
          },
          {
            "distanceInMeters": 3237,
            "point": {
              "latitude": 52.3851192,
              "longitude": 4.855442
            },
            "travelTimeInSeconds": 603
          },
          {
            "distanceInMeters": 3242,
            "point": {
              "latitude": 52.3851165,
              "longitude": 4.8553696
            },
            "travelTimeInSeconds": 609
          },
          {
            "distanceInMeters": 3252,
            "point": {
              "latitude": 52.385112,
              "longitude": 4.8552224
            },
            "travelTimeInSeconds": 614
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 109,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 49,
            "side": "LEFT"
          }
        ]
      },
      {
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "maneuver": "KEEP_RIGHT",
        "maneuverPoint": {
          "latitude": 52.3855832,
          "longitude": 4.7150901
        },
        "nextRoadInfo": {
          "properties": [
            "MOTORWAY",
            "CONTROLLED_ACCESS"
          ],
          "streetName": {
            "text": ""
          }
        },
        "previousRoadInfo": {
          "properties": [
            "MOTORWAY",
            "CONTROLLED_ACCESS"
          ],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "A200"
              },
              "stateCode": ""
            },
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "N200"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "text": ""
          }
        },
        "routeOffsetInMeters": 12873,
        "routePath": [
          {
            "distanceInMeters": 12873,
            "point": {
              "latitude": 52.3855832,
              "longitude": 4.7150901
            },
            "travelTimeInSeconds": 1421
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
            "phonetic": "ˈɑlk.mar",
            "phoneticLanguageCode": "nl-NL",
            "text": "Alkmaar"
          }
        }
      },
      {
        "changeOfAngleInDegrees": -86,
        "drivingSide": "RIGHT",
        "maneuver": "ROUNDABOUT_LEFT",
        "maneuverPoint": {
          "latitude": 52.3837486,
          "longitude": 4.7066921
        },
        "nextRoadInfo": {
          "properties": [
            "MOTORWAY",
            "CONTROLLED_ACCESS"
          ],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "A9"
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
            "MOTORWAY",
            "CONTROLLED_ACCESS"
          ],
          "streetName": {
            "text": ""
          }
        },
        "roundaboutExitNumber": 3,
        "routeOffsetInMeters": 13346,
        "routePath": [
          {
            "distanceInMeters": 13346,
            "point": {
              "latitude": 52.3849341,
              "longitude": 4.7082666
            },
            "travelTimeInSeconds": 1492
          },
          {
            "distanceInMeters": 13356,
            "point": {
              "latitude": 52.3849824,
              "longitude": 4.7081485
            },
            "travelTimeInSeconds": 1494
          },
          {
            "distanceInMeters": 13366,
            "point": {
              "latitude": 52.385028,
              "longitude": 4.7080171
            },
            "travelTimeInSeconds": 1495
          },
          {
            "distanceInMeters": 13370,
            "point": {
              "latitude": 52.3850414,
              "longitude": 4.7079635
            },
            "travelTimeInSeconds": 1496
          },
          {
            "distanceInMeters": 13375,
            "point": {
              "latitude": 52.3850575,
              "longitude": 4.7078964
            },
            "travelTimeInSeconds": 1497
          },
          {
            "distanceInMeters": 13391,
            "point": {
              "latitude": 52.3850924,
              "longitude": 4.7076684
            },
            "travelTimeInSeconds": 1499
          },
          {
            "distanceInMeters": 13408,
            "point": {
              "latitude": 52.3851112,
              "longitude": 4.707419
            },
            "travelTimeInSeconds": 1502
          },
          {
            "distanceInMeters": 13417,
            "point": {
              "latitude": 52.3850951,
              "longitude": 4.7072902
            },
            "travelTimeInSeconds": 1503
          },
          {
            "distanceInMeters": 13432,
            "point": {
              "latitude": 52.3850629,
              "longitude": 4.7070757
            },
            "travelTimeInSeconds": 1506
          },
          {
            "distanceInMeters": 13448,
            "point": {
              "latitude": 52.3850039,
              "longitude": 4.7068664
            },
            "travelTimeInSeconds": 1508
          },
          {
            "distanceInMeters": 13455,
            "point": {
              "latitude": 52.3849717,
              "longitude": 4.7067645
            },
            "travelTimeInSeconds": 1510
          },
          {
            "distanceInMeters": 13466,
            "point": {
              "latitude": 52.38491,
              "longitude": 4.7066385
            },
            "travelTimeInSeconds": 1511
          },
          {
            "distanceInMeters": 13473,
            "point": {
              "latitude": 52.3848724,
              "longitude": 4.7065714
            },
            "travelTimeInSeconds": 1512
          },
          {
            "distanceInMeters": 13480,
            "point": {
              "latitude": 52.3848188,
              "longitude": 4.7064963
            },
            "travelTimeInSeconds": 1514
          },
          {
            "distanceInMeters": 13491,
            "point": {
              "latitude": 52.3847437,
              "longitude": 4.7064131
            },
            "travelTimeInSeconds": 1515
          },
          {
            "distanceInMeters": 13502,
            "point": {
              "latitude": 52.3846552,
              "longitude": 4.706338
            },
            "travelTimeInSeconds": 1516
          },
          {
            "distanceInMeters": 13509,
            "point": {
              "latitude": 52.3845935,
              "longitude": 4.7062978
            },
            "travelTimeInSeconds": 1516
          },
          {
            "distanceInMeters": 13522,
            "point": {
              "latitude": 52.3844782,
              "longitude": 4.7062415
            },
            "travelTimeInSeconds": 1517
          },
          {
            "distanceInMeters": 13538,
            "point": {
              "latitude": 52.3843333,
              "longitude": 4.7062254
            },
            "travelTimeInSeconds": 1519
          },
          {
            "distanceInMeters": 13551,
            "point": {
              "latitude": 52.384218,
              "longitude": 4.7062415
            },
            "travelTimeInSeconds": 1520
          },
          {
            "distanceInMeters": 13559,
            "point": {
              "latitude": 52.3841509,
              "longitude": 4.7062603
            },
            "travelTimeInSeconds": 1521
          },
          {
            "distanceInMeters": 13573,
            "point": {
              "latitude": 52.3840356,
              "longitude": 4.7063273
            },
            "travelTimeInSeconds": 1522
          },
          {
            "distanceInMeters": 13589,
            "point": {
              "latitude": 52.3839015,
              "longitude": 4.7064427
            },
            "travelTimeInSeconds": 1523
          },
          {
            "distanceInMeters": 13604,
            "point": {
              "latitude": 52.3838049,
              "longitude": 4.7065768
            },
            "travelTimeInSeconds": 1524
          },
          {
            "distanceInMeters": 13614,
            "point": {
              "latitude": 52.3837486,
              "longitude": 4.7066921
            },
            "travelTimeInSeconds": 1525
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
            "phonetic": "dɛn ˈhax",
            "phoneticLanguageCode": "nl-NL",
            "text": "Den Haag"
          }
        }
      },
      {
        "drivingSide": "RIGHT",
        "maneuver": "EXIT_ROUNDABOUT",
        "maneuverPoint": {
          "latitude": 52.3837486,
          "longitude": 4.7066921
        },
        "nextRoadInfo": {
          "properties": [
            "MOTORWAY",
            "CONTROLLED_ACCESS"
          ],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "A9"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "text": ""
          }
        },
        "offsetOfAmbiguousExitFromManeuverInMeters": 133,
        "previousRoadInfo": {
          "properties": [
            "MOTORWAY",
            "CONTROLLED_ACCESS"
          ],
          "streetName": {
            "text": ""
          }
        },
        "routeOffsetInMeters": 13614,
        "routePath": [
          {
            "distanceInMeters": 13614,
            "point": {
              "latitude": 52.3837486,
              "longitude": 4.7066921
            },
            "travelTimeInSeconds": 1525
          }
        ],
        "sideRoads": []
      },
      {
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "maneuver": "EXIT_MOTORWAY_RIGHT",
        "maneuverPoint": {
          "latitude": 52.3761016,
          "longitude": 4.7086769
        },
        "nextRoadInfo": {
          "properties": [
            "MOTORWAY",
            "CONTROLLED_ACCESS"
          ],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "N205"
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
            "MOTORWAY",
            "CONTROLLED_ACCESS"
          ],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "A9"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈrɛ⁀iks.ʋɛx ʔa.ˈne.ɣən",
            "phoneticLanguageCode": "nl-NL",
            "text": "Rijksweg A9"
          }
        },
        "routeOffsetInMeters": 14483,
        "routePath": [
          {
            "distanceInMeters": 14483,
            "point": {
              "latitude": 52.3761016,
              "longitude": 4.7086769
            },
            "travelTimeInSeconds": 1566
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
            "phonetic": "ˈhovd.dɔrp ˈʋɛst",
            "phoneticLanguageCode": "nl-NL",
            "text": "Hoofddorp-West"
          }
        }
      },
      {
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "maneuver": "KEEP_LEFT",
        "maneuverPoint": {
          "latitude": 52.3718557,
          "longitude": 4.7020277
        },
        "nextRoadInfo": {
          "properties": [],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "N205"
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
            "MOTORWAY",
            "CONTROLLED_ACCESS"
          ],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "N205"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "text": ""
          }
        },
        "routeOffsetInMeters": 15351,
        "routePath": [
          {
            "distanceInMeters": 15351,
            "point": {
              "latitude": 52.3718557,
              "longitude": 4.7020277
            },
            "travelTimeInSeconds": 1604
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
            "phonetic": "ˈhovd.ˌdɔrp",
            "phoneticLanguageCode": "nl-NL",
            "text": "Hoofddorp"
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
          "latitude": 52.2690842,
          "longitude": 4.585923
        },
        "nextRoadInfo": {
          "properties": [],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "N207"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "lɛ⁀i.ˈmœ⁀y.dər.ˌʋɛx",
            "phoneticLanguageCode": "nl-NL",
            "text": "Leimuiderweg"
          }
        },
        "previousRoadInfo": {
          "properties": [],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "N205"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈdri ˈme.rən.ʋɛx",
            "phoneticLanguageCode": "nl-NL",
            "text": "Drie Merenweg"
          }
        },
        "routeOffsetInMeters": 30723,
        "routePath": [
          {
            "distanceInMeters": 30723,
            "point": {
              "latitude": 52.2695643,
              "longitude": 4.5861751
            },
            "travelTimeInSeconds": 2347
          },
          {
            "distanceInMeters": 30739,
            "point": {
              "latitude": 52.2694543,
              "longitude": 4.5860195
            },
            "travelTimeInSeconds": 2352
          },
          {
            "distanceInMeters": 30752,
            "point": {
              "latitude": 52.2693658,
              "longitude": 4.5858961
            },
            "travelTimeInSeconds": 2355
          },
          {
            "distanceInMeters": 30758,
            "point": {
              "latitude": 52.2693068,
              "longitude": 4.5858774
            },
            "travelTimeInSeconds": 2357
          },
          {
            "distanceInMeters": 30765,
            "point": {
              "latitude": 52.2692505,
              "longitude": 4.5858935
            },
            "travelTimeInSeconds": 2360
          },
          {
            "distanceInMeters": 30784,
            "point": {
              "latitude": 52.2690842,
              "longitude": 4.585923
            },
            "travelTimeInSeconds": 2362
          },
          {
            "distanceInMeters": 30794,
            "point": {
              "latitude": 52.2690225,
              "longitude": 4.5860329
            },
            "travelTimeInSeconds": 2362
          }
        ],
        "sideRoads": []
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
          "latitude": 52.2396952,
          "longitude": 4.6530506
        },
        "nextRoadInfo": {
          "properties": [],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "A44"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "text": ""
          }
        },
        "previousRoadInfo": {
          "properties": [],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "N207"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "lɛ⁀i.ˈmœ⁀y.dər.ˌʋɛx",
            "phoneticLanguageCode": "nl-NL",
            "text": "Leimuiderweg"
          }
        },
        "routeOffsetInMeters": 36536,
        "routePath": [
          {
            "distanceInMeters": 36536,
            "point": {
              "latitude": 52.2401458,
              "longitude": 4.6526456
            },
            "travelTimeInSeconds": 2674
          },
          {
            "distanceInMeters": 36548,
            "point": {
              "latitude": 52.2400573,
              "longitude": 4.6527475
            },
            "travelTimeInSeconds": 2676
          },
          {
            "distanceInMeters": 36572,
            "point": {
              "latitude": 52.2399071,
              "longitude": 4.6529996
            },
            "travelTimeInSeconds": 2680
          },
          {
            "distanceInMeters": 36576,
            "point": {
              "latitude": 52.2398829,
              "longitude": 4.6530265
            },
            "travelTimeInSeconds": 2681
          },
          {
            "distanceInMeters": 36579,
            "point": {
              "latitude": 52.2398588,
              "longitude": 4.6530479
            },
            "travelTimeInSeconds": 2681
          },
          {
            "distanceInMeters": 36584,
            "point": {
              "latitude": 52.2398078,
              "longitude": 4.6530613
            },
            "travelTimeInSeconds": 2682
          },
          {
            "distanceInMeters": 36597,
            "point": {
              "latitude": 52.2396952,
              "longitude": 4.6530506
            },
            "travelTimeInSeconds": 2684
          },
          {
            "distanceInMeters": 36607,
            "point": {
              "latitude": 52.2396244,
              "longitude": 4.652953
            },
            "travelTimeInSeconds": 2686
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
            "phonetic": "ˈlɛ⁀i.dən",
            "phoneticLanguageCode": "nl-NL",
            "text": "Leiden"
          }
        }
      },
      {
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "maneuver": "KEEP_RIGHT",
        "maneuverPoint": {
          "latitude": 52.2380966,
          "longitude": 4.6513098
        },
        "nextRoadInfo": {
          "properties": [],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "A44"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "text": ""
          }
        },
        "previousRoadInfo": {
          "properties": [],
          "streetName": {
            "text": ""
          }
        },
        "routeOffsetInMeters": 36812,
        "routePath": [
          {
            "distanceInMeters": 36812,
            "point": {
              "latitude": 52.2380966,
              "longitude": 4.6513098
            },
            "travelTimeInSeconds": 2698
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
            "phonetic": "ˈsɑ.sən.ˌhɛ⁀im",
            "phoneticLanguageCode": "nl-NL",
            "text": "Sassenheim"
          }
        }
      },
      {
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "maneuver": "KEEP_LEFT",
        "maneuverPoint": {
          "latitude": 52.2319114,
          "longitude": 4.632647
        },
        "nextRoadInfo": {
          "properties": [
            "MOTORWAY",
            "CONTROLLED_ACCESS"
          ],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "A44"
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
            "MOTORWAY",
            "CONTROLLED_ACCESS"
          ],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "A44"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "text": ""
          }
        },
        "routeOffsetInMeters": 38368,
        "routePath": [
          {
            "distanceInMeters": 38368,
            "point": {
              "latitude": 52.2319114,
              "longitude": 4.632647
            },
            "travelTimeInSeconds": 2755
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
            "phonetic": "ˈsɑ.sən.ˌhɛ⁀im",
            "phoneticLanguageCode": "nl-NL",
            "text": "Sassenheim"
          }
        }
      },
      {
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "maneuver": "EXIT_MOTORWAY_RIGHT",
        "maneuverPoint": {
          "latitude": 52.1705988,
          "longitude": 4.4544491
        },
        "nextRoadInfo": {
          "properties": [],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "N206"
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
            "MOTORWAY",
            "CONTROLLED_ACCESS"
          ],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "A44"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "text": ""
          }
        },
        "routeOffsetInMeters": 53666,
        "routePath": [
          {
            "distanceInMeters": 53666,
            "point": {
              "latitude": 52.1705988,
              "longitude": 4.4544491
            },
            "travelTimeInSeconds": 3306
          }
        ],
        "sideRoads": [],
        "signpost": {
          "exitName": {
            "text": ""
          },
          "exitNumber": {
            "text": "8"
          },
          "towardName": {
            "phonetic": "ˈlɛ⁀i.dən",
            "phoneticLanguageCode": "nl-NL",
            "text": "Leiden"
          }
        }
      },
      {
        "changeOfAngleInDegrees": -95,
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_LEFT",
        "maneuverPoint": {
          "latitude": 52.1871346,
          "longitude": 4.4182339
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "N441"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈʋɑ.sə.nar.sə.ˌʋɛx",
            "phoneticLanguageCode": "nl-NL",
            "text": "Wassenaarseweg"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "N206"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈʋɑ.sə.nar.sə.ˌʋɛx",
            "phoneticLanguageCode": "nl-NL",
            "text": "Wassenaarseweg"
          }
        },
        "routeOffsetInMeters": 57464,
        "routePath": [
          {
            "distanceInMeters": 57464,
            "point": {
              "latitude": 52.1871346,
              "longitude": 4.4182339
            },
            "travelTimeInSeconds": 3529
          },
          {
            "distanceInMeters": 57478,
            "point": {
              "latitude": 52.1871024,
              "longitude": 4.4180354
            },
            "travelTimeInSeconds": 3531
          },
          {
            "distanceInMeters": 57488,
            "point": {
              "latitude": 52.1870837,
              "longitude": 4.4178852
            },
            "travelTimeInSeconds": 3532
          },
          {
            "distanceInMeters": 57498,
            "point": {
              "latitude": 52.187063,
              "longitude": 4.4177408
            },
            "travelTimeInSeconds": 3533
          }
        ],
        "sideRoads": []
      },
      {
        "changeOfAngleInDegrees": 4,
        "drivingSide": "RIGHT",
        "maneuver": "ROUNDABOUT_STRAIGHT",
        "maneuverPoint": {
          "latitude": 52.1864077,
          "longitude": 4.4164824
        },
        "nextRoadInfo": {
          "properties": [],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "N441"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈʋɑ.sə.nar.sə.ˌʋɛx",
            "phoneticLanguageCode": "nl-NL",
            "text": "Wassenaarseweg"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "N441"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈʋɑ.sə.nar.sə.ˌʋɛx",
            "phoneticLanguageCode": "nl-NL",
            "text": "Wassenaarseweg"
          }
        },
        "roundaboutExitNumber": 2,
        "routeOffsetInMeters": 57580,
        "routePath": [
          {
            "distanceInMeters": 57580,
            "point": {
              "latitude": 52.1866491,
              "longitude": 4.4167909
            },
            "travelTimeInSeconds": 3543
          },
          {
            "distanceInMeters": 57584,
            "point": {
              "latitude": 52.1866491,
              "longitude": 4.4167265
            },
            "travelTimeInSeconds": 3543
          },
          {
            "distanceInMeters": 57589,
            "point": {
              "latitude": 52.1866384,
              "longitude": 4.4166622
            },
            "travelTimeInSeconds": 3544
          },
          {
            "distanceInMeters": 57593,
            "point": {
              "latitude": 52.1866196,
              "longitude": 4.4166031
            },
            "travelTimeInSeconds": 3544
          },
          {
            "distanceInMeters": 57597,
            "point": {
              "latitude": 52.1865982,
              "longitude": 4.4165602
            },
            "travelTimeInSeconds": 3545
          },
          {
            "distanceInMeters": 57600,
            "point": {
              "latitude": 52.1865821,
              "longitude": 4.4165307
            },
            "travelTimeInSeconds": 3545
          },
          {
            "distanceInMeters": 57603,
            "point": {
              "latitude": 52.1865553,
              "longitude": 4.4165039
            },
            "travelTimeInSeconds": 3545
          },
          {
            "distanceInMeters": 57606,
            "point": {
              "latitude": 52.1865365,
              "longitude": 4.4164824
            },
            "travelTimeInSeconds": 3546
          },
          {
            "distanceInMeters": 57610,
            "point": {
              "latitude": 52.1865016,
              "longitude": 4.4164637
            },
            "travelTimeInSeconds": 3546
          },
          {
            "distanceInMeters": 57615,
            "point": {
              "latitude": 52.1864587,
              "longitude": 4.416461
            },
            "travelTimeInSeconds": 3547
          },
          {
            "distanceInMeters": 57618,
            "point": {
              "latitude": 52.1864319,
              "longitude": 4.4164664
            },
            "travelTimeInSeconds": 3547
          },
          {
            "distanceInMeters": 57621,
            "point": {
              "latitude": 52.1864077,
              "longitude": 4.4164824
            },
            "travelTimeInSeconds": 3547
          }
        ],
        "sideRoads": []
      },
      {
        "changeOfAngleInDegrees": -89,
        "drivingSide": "RIGHT",
        "maneuver": "ROUNDABOUT_LEFT",
        "maneuverPoint": {
          "latitude": 52.1607471,
          "longitude": 4.3938178
        },
        "nextRoadInfo": {
          "properties": [],
          "streetName": {
            "phonetic": "ˈkɔks.hɔrn.ˌlan",
            "phoneticLanguageCode": "nl-NL",
            "text": "Kokshornlaan"
          }
        },
        "previousRoadInfo": {
          "properties": [],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "N441"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈkɑt.ʋɛ⁀ik.sə.ˌʋɛx",
            "phoneticLanguageCode": "nl-NL",
            "text": "Katwijkseweg"
          }
        },
        "roundaboutExitNumber": 3,
        "routeOffsetInMeters": 61118,
        "routePath": [
          {
            "distanceInMeters": 61118,
            "point": {
              "latitude": 52.1609992,
              "longitude": 4.3938446
            },
            "travelTimeInSeconds": 3756
          },
          {
            "distanceInMeters": 61124,
            "point": {
              "latitude": 52.161018,
              "longitude": 4.3937561
            },
            "travelTimeInSeconds": 3756
          },
          {
            "distanceInMeters": 61128,
            "point": {
              "latitude": 52.1610233,
              "longitude": 4.3936971
            },
            "travelTimeInSeconds": 3757
          },
          {
            "distanceInMeters": 61130,
            "point": {
              "latitude": 52.1610206,
              "longitude": 4.3936676
            },
            "travelTimeInSeconds": 3757
          },
          {
            "distanceInMeters": 61135,
            "point": {
              "latitude": 52.1610099,
              "longitude": 4.3936005
            },
            "travelTimeInSeconds": 3758
          },
          {
            "distanceInMeters": 61136,
            "point": {
              "latitude": 52.1610019,
              "longitude": 4.3935817
            },
            "travelTimeInSeconds": 3758
          },
          {
            "distanceInMeters": 61140,
            "point": {
              "latitude": 52.1609804,
              "longitude": 4.3935442
            },
            "travelTimeInSeconds": 3758
          },
          {
            "distanceInMeters": 61145,
            "point": {
              "latitude": 52.1609402,
              "longitude": 4.393504
            },
            "travelTimeInSeconds": 3759
          },
          {
            "distanceInMeters": 61149,
            "point": {
              "latitude": 52.1609053,
              "longitude": 4.3934879
            },
            "travelTimeInSeconds": 3760
          },
          {
            "distanceInMeters": 61153,
            "point": {
              "latitude": 52.1608704,
              "longitude": 4.3934825
            },
            "travelTimeInSeconds": 3760
          },
          {
            "distanceInMeters": 61156,
            "point": {
              "latitude": 52.1608409,
              "longitude": 4.3934852
            },
            "travelTimeInSeconds": 3760
          },
          {
            "distanceInMeters": 61161,
            "point": {
              "latitude": 52.1608034,
              "longitude": 4.3935066
            },
            "travelTimeInSeconds": 3761
          },
          {
            "distanceInMeters": 61163,
            "point": {
              "latitude": 52.1607846,
              "longitude": 4.3935281
            },
            "travelTimeInSeconds": 3761
          },
          {
            "distanceInMeters": 61166,
            "point": {
              "latitude": 52.1607631,
              "longitude": 4.3935603
            },
            "travelTimeInSeconds": 3762
          },
          {
            "distanceInMeters": 61169,
            "point": {
              "latitude": 52.1607497,
              "longitude": 4.3935925
            },
            "travelTimeInSeconds": 3762
          },
          {
            "distanceInMeters": 61174,
            "point": {
              "latitude": 52.1607363,
              "longitude": 4.3936649
            },
            "travelTimeInSeconds": 3762
          },
          {
            "distanceInMeters": 61180,
            "point": {
              "latitude": 52.1607363,
              "longitude": 4.3937534
            },
            "travelTimeInSeconds": 3763
          },
          {
            "distanceInMeters": 61185,
            "point": {
              "latitude": 52.1607471,
              "longitude": 4.3938178
            },
            "travelTimeInSeconds": 3764
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 822,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 708,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 607,
            "side": "RIGHT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": -84,
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_LEFT",
        "maneuverPoint": {
          "latitude": 52.1516544,
          "longitude": 4.4000298
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈvɑŋ ˈkra.nən.bʌrx.lan",
            "phoneticLanguageCode": "nl-NL",
            "text": "Van Cranenburchlaan"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈozd.dɔr.pər.ˌʋɛx",
            "phoneticLanguageCode": "nl-NL",
            "text": "Oostdorperweg"
          }
        },
        "routeOffsetInMeters": 62421,
        "routePath": [
          {
            "distanceInMeters": 62421,
            "point": {
              "latitude": 52.1516544,
              "longitude": 4.4000298
            },
            "travelTimeInSeconds": 3854
          },
          {
            "distanceInMeters": 62431,
            "point": {
              "latitude": 52.1515942,
              "longitude": 4.4001377
            },
            "travelTimeInSeconds": 3856
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 346,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 288,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 257,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 207,
            "side": "RIGHT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": -4,
        "drivingSide": "RIGHT",
        "maneuver": "ROUNDABOUT_STRAIGHT",
        "maneuverPoint": {
          "latitude": 52.1497393,
          "longitude": 4.4038546
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈvɑŋ ˈkra.nən.bʌrx.lan",
            "phoneticLanguageCode": "nl-NL",
            "text": "Van Cranenburchlaan"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈvɑŋ ˈkra.nən.bʌrx.lan",
            "phoneticLanguageCode": "nl-NL",
            "text": "Van Cranenburchlaan"
          }
        },
        "roundaboutExitNumber": 2,
        "routeOffsetInMeters": 62738,
        "routePath": [
          {
            "distanceInMeters": 62738,
            "point": {
              "latitude": 52.1498546,
              "longitude": 4.4036186
            },
            "travelTimeInSeconds": 3897
          },
          {
            "distanceInMeters": 62739,
            "point": {
              "latitude": 52.1498412,
              "longitude": 4.4036025
            },
            "travelTimeInSeconds": 3897
          },
          {
            "distanceInMeters": 62743,
            "point": {
              "latitude": 52.149809,
              "longitude": 4.4035837
            },
            "travelTimeInSeconds": 3898
          },
          {
            "distanceInMeters": 62746,
            "point": {
              "latitude": 52.1497849,
              "longitude": 4.4035837
            },
            "travelTimeInSeconds": 3898
          },
          {
            "distanceInMeters": 62748,
            "point": {
              "latitude": 52.1497661,
              "longitude": 4.4035918
            },
            "travelTimeInSeconds": 3899
          },
          {
            "distanceInMeters": 62750,
            "point": {
              "latitude": 52.1497473,
              "longitude": 4.4036025
            },
            "travelTimeInSeconds": 3900
          },
          {
            "distanceInMeters": 62752,
            "point": {
              "latitude": 52.1497339,
              "longitude": 4.4036186
            },
            "travelTimeInSeconds": 3900
          },
          {
            "distanceInMeters": 62754,
            "point": {
              "latitude": 52.1497178,
              "longitude": 4.40364
            },
            "travelTimeInSeconds": 3901
          },
          {
            "distanceInMeters": 62757,
            "point": {
              "latitude": 52.1497098,
              "longitude": 4.4036695
            },
            "travelTimeInSeconds": 3902
          },
          {
            "distanceInMeters": 62759,
            "point": {
              "latitude": 52.1497017,
              "longitude": 4.4036964
            },
            "travelTimeInSeconds": 3902
          },
          {
            "distanceInMeters": 62761,
            "point": {
              "latitude": 52.149699,
              "longitude": 4.4037259
            },
            "travelTimeInSeconds": 3903
          },
          {
            "distanceInMeters": 62764,
            "point": {
              "latitude": 52.1497017,
              "longitude": 4.4037661
            },
            "travelTimeInSeconds": 3903
          },
          {
            "distanceInMeters": 62766,
            "point": {
              "latitude": 52.1497098,
              "longitude": 4.4038063
            },
            "travelTimeInSeconds": 3904
          },
          {
            "distanceInMeters": 62768,
            "point": {
              "latitude": 52.1497205,
              "longitude": 4.4038305
            },
            "travelTimeInSeconds": 3904
          },
          {
            "distanceInMeters": 62771,
            "point": {
              "latitude": 52.1497393,
              "longitude": 4.4038546
            },
            "travelTimeInSeconds": 3904
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 254,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 247,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 212,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 145,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 69,
            "side": "RIGHT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": 91,
        "drivingSide": "RIGHT",
        "maneuver": "ROUNDABOUT_RIGHT",
        "maneuverPoint": {
          "latitude": 52.1479529,
          "longitude": 4.4074112
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "vɑn ˈdœ⁀y.vən.vor.də.lan",
            "phoneticLanguageCode": "nl-NL",
            "text": "Van Duivenvoordelaan"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈvɑŋ ˈkra.nən.bʌrx.lan",
            "phoneticLanguageCode": "nl-NL",
            "text": "Van Cranenburchlaan"
          }
        },
        "roundaboutExitNumber": 1,
        "routeOffsetInMeters": 63069,
        "routePath": [
          {
            "distanceInMeters": 63069,
            "point": {
              "latitude": 52.1481353,
              "longitude": 4.4073442
            },
            "travelTimeInSeconds": 3936
          },
          {
            "distanceInMeters": 63072,
            "point": {
              "latitude": 52.1481112,
              "longitude": 4.4073227
            },
            "travelTimeInSeconds": 3936
          },
          {
            "distanceInMeters": 63078,
            "point": {
              "latitude": 52.1480629,
              "longitude": 4.4073093
            },
            "travelTimeInSeconds": 3937
          },
          {
            "distanceInMeters": 63084,
            "point": {
              "latitude": 52.1480119,
              "longitude": 4.4073308
            },
            "travelTimeInSeconds": 3939
          },
          {
            "distanceInMeters": 63088,
            "point": {
              "latitude": 52.1479744,
              "longitude": 4.4073656
            },
            "travelTimeInSeconds": 3940
          },
          {
            "distanceInMeters": 63092,
            "point": {
              "latitude": 52.1479529,
              "longitude": 4.4074112
            },
            "travelTimeInSeconds": 3941
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 221,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 137,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 54,
            "side": "RIGHT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": -7,
        "drivingSide": "RIGHT",
        "maneuver": "ROUNDABOUT_STRAIGHT",
        "maneuverPoint": {
          "latitude": 52.1447638,
          "longitude": 4.4035703
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈstɑt.hɑ⁀u.dərs.ˌplɛ⁀in",
            "phoneticLanguageCode": "nl-NL",
            "text": "Stadhoudersplein"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "vɑn ˈdœ⁀y.vən.vor.də.lan",
            "phoneticLanguageCode": "nl-NL",
            "text": "Van Duivenvoordelaan"
          }
        },
        "roundaboutExitNumber": 2,
        "routeOffsetInMeters": 63511,
        "routePath": [
          {
            "distanceInMeters": 63511,
            "point": {
              "latitude": 52.1449301,
              "longitude": 4.4037929
            },
            "travelTimeInSeconds": 3991
          },
          {
            "distanceInMeters": 63514,
            "point": {
              "latitude": 52.1449488,
              "longitude": 4.40375
            },
            "travelTimeInSeconds": 3992
          },
          {
            "distanceInMeters": 63516,
            "point": {
              "latitude": 52.1449569,
              "longitude": 4.4037232
            },
            "travelTimeInSeconds": 3992
          },
          {
            "distanceInMeters": 63518,
            "point": {
              "latitude": 52.1449596,
              "longitude": 4.4036937
            },
            "travelTimeInSeconds": 3993
          },
          {
            "distanceInMeters": 63520,
            "point": {
              "latitude": 52.1449623,
              "longitude": 4.4036642
            },
            "travelTimeInSeconds": 3993
          },
          {
            "distanceInMeters": 63523,
            "point": {
              "latitude": 52.1449596,
              "longitude": 4.403632
            },
            "travelTimeInSeconds": 3994
          },
          {
            "distanceInMeters": 63525,
            "point": {
              "latitude": 52.1449569,
              "longitude": 4.4036025
            },
            "travelTimeInSeconds": 3995
          },
          {
            "distanceInMeters": 63527,
            "point": {
              "latitude": 52.1449462,
              "longitude": 4.403573
            },
            "travelTimeInSeconds": 3995
          },
          {
            "distanceInMeters": 63529,
            "point": {
              "latitude": 52.1449354,
              "longitude": 4.4035488
            },
            "travelTimeInSeconds": 3996
          },
          {
            "distanceInMeters": 63531,
            "point": {
              "latitude": 52.144922,
              "longitude": 4.4035274
            },
            "travelTimeInSeconds": 3997
          },
          {
            "distanceInMeters": 63535,
            "point": {
              "latitude": 52.1448871,
              "longitude": 4.4035006
            },
            "travelTimeInSeconds": 3998
          },
          {
            "distanceInMeters": 63538,
            "point": {
              "latitude": 52.1448684,
              "longitude": 4.4034925
            },
            "travelTimeInSeconds": 3999
          },
          {
            "distanceInMeters": 63540,
            "point": {
              "latitude": 52.1448496,
              "longitude": 4.4034898
            },
            "travelTimeInSeconds": 4000
          },
          {
            "distanceInMeters": 63542,
            "point": {
              "latitude": 52.1448308,
              "longitude": 4.4034925
            },
            "travelTimeInSeconds": 4000
          },
          {
            "distanceInMeters": 63544,
            "point": {
              "latitude": 52.1448147,
              "longitude": 4.4035006
            },
            "travelTimeInSeconds": 4000
          },
          {
            "distanceInMeters": 63546,
            "point": {
              "latitude": 52.144796,
              "longitude": 4.403514
            },
            "travelTimeInSeconds": 4001
          },
          {
            "distanceInMeters": 63548,
            "point": {
              "latitude": 52.1447825,
              "longitude": 4.4035327
            },
            "travelTimeInSeconds": 4001
          },
          {
            "distanceInMeters": 63550,
            "point": {
              "latitude": 52.1447691,
              "longitude": 4.4035542
            },
            "travelTimeInSeconds": 4001
          },
          {
            "distanceInMeters": 63551,
            "point": {
              "latitude": 52.1447638,
              "longitude": 4.4035703
            },
            "travelTimeInSeconds": 4002
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 306,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 226,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 195,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 56,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 20,
            "side": "RIGHT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": -4,
        "drivingSide": "RIGHT",
        "maneuver": "ROUNDABOUT_STRAIGHT",
        "maneuverPoint": {
          "latitude": 52.1427897,
          "longitude": 4.4009551
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "vɑn ʔɔl.dən.ˈbɑr.nə.vɛlt.ʋɛx",
            "phoneticLanguageCode": "nl-NL",
            "text": "Van Oldenbarneveltweg"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈʋix.mɑn.ˌʋɛx",
            "phoneticLanguageCode": "nl-NL",
            "text": "Wiegmanweg"
          }
        },
        "roundaboutExitNumber": 2,
        "routeOffsetInMeters": 63807,
        "routePath": [
          {
            "distanceInMeters": 63807,
            "point": {
              "latitude": 52.1429801,
              "longitude": 4.401218
            },
            "travelTimeInSeconds": 4047
          },
          {
            "distanceInMeters": 63811,
            "point": {
              "latitude": 52.1429935,
              "longitude": 4.4011697
            },
            "travelTimeInSeconds": 4048
          },
          {
            "distanceInMeters": 63816,
            "point": {
              "latitude": 52.1430016,
              "longitude": 4.4010946
            },
            "travelTimeInSeconds": 4050
          },
          {
            "distanceInMeters": 63818,
            "point": {
              "latitude": 52.1430016,
              "longitude": 4.4010678
            },
            "travelTimeInSeconds": 4051
          },
          {
            "distanceInMeters": 63821,
            "point": {
              "latitude": 52.1429962,
              "longitude": 4.4010302
            },
            "travelTimeInSeconds": 4052
          },
          {
            "distanceInMeters": 63824,
            "point": {
              "latitude": 52.1429855,
              "longitude": 4.4009927
            },
            "travelTimeInSeconds": 4053
          },
          {
            "distanceInMeters": 63826,
            "point": {
              "latitude": 52.1429694,
              "longitude": 4.4009632
            },
            "travelTimeInSeconds": 4054
          },
          {
            "distanceInMeters": 63828,
            "point": {
              "latitude": 52.142956,
              "longitude": 4.4009444
            },
            "travelTimeInSeconds": 4055
          },
          {
            "distanceInMeters": 63832,
            "point": {
              "latitude": 52.1429211,
              "longitude": 4.400923
            },
            "travelTimeInSeconds": 4056
          },
          {
            "distanceInMeters": 63837,
            "point": {
              "latitude": 52.1428782,
              "longitude": 4.4009149
            },
            "travelTimeInSeconds": 4057
          },
          {
            "distanceInMeters": 63841,
            "point": {
              "latitude": 52.1428406,
              "longitude": 4.400923
            },
            "travelTimeInSeconds": 4058
          },
          {
            "distanceInMeters": 63847,
            "point": {
              "latitude": 52.1427897,
              "longitude": 4.4009551
            },
            "travelTimeInSeconds": 4059
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 229,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 184,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 141,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 45,
            "side": "LEFT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": -99,
        "drivingSide": "RIGHT",
        "maneuver": "ROUNDABOUT_LEFT",
        "maneuverPoint": {
          "latitude": 52.1412688,
          "longitude": 4.3995389
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈlɑŋ.ə ˈkɛrg.dɑm",
            "phoneticLanguageCode": "nl-NL",
            "text": "Lange Kerkdam"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "vɑn ʔɔl.dən.ˈbɑr.nə.vɛlt.ʋɛx",
            "phoneticLanguageCode": "nl-NL",
            "text": "Van Oldenbarneveltweg"
          }
        },
        "roundaboutExitNumber": 3,
        "routeOffsetInMeters": 64027,
        "routePath": [
          {
            "distanceInMeters": 64027,
            "point": {
              "latitude": 52.1414754,
              "longitude": 4.3994531
            },
            "travelTimeInSeconds": 4088
          },
          {
            "distanceInMeters": 64031,
            "point": {
              "latitude": 52.1414834,
              "longitude": 4.399386
            },
            "travelTimeInSeconds": 4089
          },
          {
            "distanceInMeters": 64034,
            "point": {
              "latitude": 52.1414834,
              "longitude": 4.3993512
            },
            "travelTimeInSeconds": 4089
          },
          {
            "distanceInMeters": 64039,
            "point": {
              "latitude": 52.1414727,
              "longitude": 4.3992814
            },
            "travelTimeInSeconds": 4090
          },
          {
            "distanceInMeters": 64042,
            "point": {
              "latitude": 52.1414566,
              "longitude": 4.3992358
            },
            "travelTimeInSeconds": 4090
          },
          {
            "distanceInMeters": 64046,
            "point": {
              "latitude": 52.1414351,
              "longitude": 4.3991956
            },
            "travelTimeInSeconds": 4091
          },
          {
            "distanceInMeters": 64049,
            "point": {
              "latitude": 52.141411,
              "longitude": 4.3991795
            },
            "travelTimeInSeconds": 4091
          },
          {
            "distanceInMeters": 64054,
            "point": {
              "latitude": 52.1413654,
              "longitude": 4.3991634
            },
            "travelTimeInSeconds": 4092
          },
          {
            "distanceInMeters": 64057,
            "point": {
              "latitude": 52.1413359,
              "longitude": 4.3991661
            },
            "travelTimeInSeconds": 4093
          },
          {
            "distanceInMeters": 64062,
            "point": {
              "latitude": 52.1412984,
              "longitude": 4.3991768
            },
            "travelTimeInSeconds": 4093
          },
          {
            "distanceInMeters": 64066,
            "point": {
              "latitude": 52.1412608,
              "longitude": 4.3992063
            },
            "travelTimeInSeconds": 4094
          },
          {
            "distanceInMeters": 64068,
            "point": {
              "latitude": 52.1412474,
              "longitude": 4.3992224
            },
            "travelTimeInSeconds": 4094
          },
          {
            "distanceInMeters": 64071,
            "point": {
              "latitude": 52.1412286,
              "longitude": 4.3992519
            },
            "travelTimeInSeconds": 4095
          },
          {
            "distanceInMeters": 64073,
            "point": {
              "latitude": 52.1412206,
              "longitude": 4.3992761
            },
            "travelTimeInSeconds": 4095
          },
          {
            "distanceInMeters": 64077,
            "point": {
              "latitude": 52.1412125,
              "longitude": 4.3993324
            },
            "travelTimeInSeconds": 4096
          },
          {
            "distanceInMeters": 64082,
            "point": {
              "latitude": 52.1412152,
              "longitude": 4.3994021
            },
            "travelTimeInSeconds": 4096
          },
          {
            "distanceInMeters": 64086,
            "point": {
              "latitude": 52.1412313,
              "longitude": 4.3994692
            },
            "travelTimeInSeconds": 4097
          },
          {
            "distanceInMeters": 64090,
            "point": {
              "latitude": 52.1412501,
              "longitude": 4.3995094
            },
            "travelTimeInSeconds": 4098
          },
          {
            "distanceInMeters": 64093,
            "point": {
              "latitude": 52.1412688,
              "longitude": 4.3995389
            },
            "travelTimeInSeconds": 4098
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 170,
            "side": "RIGHT"
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
        "landmark": "AT_TRAFFIC_LIGHT",
        "maneuver": "TURN_RIGHT",
        "maneuverPoint": {
          "latitude": 52.137841,
          "longitude": 4.406628
        },
        "nextRoadInfo": {
          "properties": [],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "N44"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈrɛ⁀iks.ˌstrat.ʋɛx",
            "phoneticLanguageCode": "nl-NL",
            "text": "Rijksstraatweg"
          }
        },
        "previousRoadInfo": {
          "properties": [],
          "streetName": {
            "phonetic": "ˈlɑŋ.ə ˈkɛrg.dɑm",
            "phoneticLanguageCode": "nl-NL",
            "text": "Lange Kerkdam"
          }
        },
        "routeOffsetInMeters": 64714,
        "routePath": [
          {
            "distanceInMeters": 64714,
            "point": {
              "latitude": 52.137841,
              "longitude": 4.406628
            },
            "travelTimeInSeconds": 4216
          },
          {
            "distanceInMeters": 64724,
            "point": {
              "latitude": 52.1377854,
              "longitude": 4.4065169
            },
            "travelTimeInSeconds": 4219
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 504,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 350,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 262,
            "side": "LEFT"
          }
        ]
      },
      {
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "maneuver": "KEEP_LEFT",
        "maneuverPoint": {
          "latitude": 52.1074247,
          "longitude": 4.3615749
        },
        "nextRoadInfo": {
          "properties": [],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "s101"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈrɛ⁀iks.ˌstrat.ʋɛx",
            "phoneticLanguageCode": "nl-NL",
            "text": "Rijksstraatweg"
          }
        },
        "previousRoadInfo": {
          "properties": [],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "N44"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈrɛ⁀iks.ˌstrat.ʋɛx",
            "phoneticLanguageCode": "nl-NL",
            "text": "Rijksstraatweg"
          }
        },
        "routeOffsetInMeters": 69300,
        "routePath": [
          {
            "distanceInMeters": 69300,
            "point": {
              "latitude": 52.1074247,
              "longitude": 4.3615749
            },
            "travelTimeInSeconds": 4530
          }
        ],
        "sideRoads": []
      },
      {
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "maneuver": "KEEP_LEFT",
        "maneuverPoint": {
          "latitude": 52.0866886,
          "longitude": 4.3178737
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈzœ⁀yt ˈhɔ.lɑnt.lan",
            "phoneticLanguageCode": "nl-NL",
            "text": "Zuid-Hollandlaan"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "s101"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈzœ⁀yt ˈhɔ.lɑnt.lan",
            "phoneticLanguageCode": "nl-NL",
            "text": "Zuid-Hollandlaan"
          }
        },
        "routeOffsetInMeters": 73090,
        "routePath": [
          {
            "distanceInMeters": 73090,
            "point": {
              "latitude": 52.0866886,
              "longitude": 4.3178737
            },
            "travelTimeInSeconds": 4890
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 984,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 276,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 183,
            "side": "RIGHT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": -96,
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_LEFT",
        "maneuverPoint": {
          "latitude": 52.0859805,
          "longitude": 4.3157119
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "s100"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈko.nɪŋs.ˌka.də",
            "phoneticLanguageCode": "nl-NL",
            "text": "Koningskade"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈzœ⁀yt ˈhɔ.lɑnt.lan",
            "phoneticLanguageCode": "nl-NL",
            "text": "Zuid-Hollandlaan"
          }
        },
        "routeOffsetInMeters": 73246,
        "routePath": [
          {
            "distanceInMeters": 73246,
            "point": {
              "latitude": 52.0860663,
              "longitude": 4.3158513
            },
            "travelTimeInSeconds": 4956
          },
          {
            "distanceInMeters": 73254,
            "point": {
              "latitude": 52.0860288,
              "longitude": 4.3157601
            },
            "travelTimeInSeconds": 4959
          },
          {
            "distanceInMeters": 73256,
            "point": {
              "latitude": 52.0860127,
              "longitude": 4.315736
            },
            "travelTimeInSeconds": 4959
          },
          {
            "distanceInMeters": 73260,
            "point": {
              "latitude": 52.0859805,
              "longitude": 4.3157119
            },
            "travelTimeInSeconds": 4960
          },
          {
            "distanceInMeters": 73268,
            "point": {
              "latitude": 52.0859081,
              "longitude": 4.3156877
            },
            "travelTimeInSeconds": 4961
          },
          {
            "distanceInMeters": 73278,
            "point": {
              "latitude": 52.0858265,
              "longitude": 4.3157489
            },
            "travelTimeInSeconds": 4963
          }
        ],
        "sideRoads": []
      },
      {
        "changeOfAngleInDegrees": 84,
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_RIGHT",
        "maneuverPoint": {
          "latitude": 52.0834404,
          "longitude": 4.3179649
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈkɔr.tə ˈvor.hɑ⁀ut",
            "phoneticLanguageCode": "nl-NL",
            "text": "Korte Voorhout"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "s100"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈko.nɪŋs.ˌka.də",
            "phoneticLanguageCode": "nl-NL",
            "text": "Koningskade"
          }
        },
        "routeOffsetInMeters": 73527,
        "routePath": [
          {
            "distanceInMeters": 73527,
            "point": {
              "latitude": 52.0838857,
              "longitude": 4.3175277
            },
            "travelTimeInSeconds": 4989
          },
          {
            "distanceInMeters": 73537,
            "point": {
              "latitude": 52.0837972,
              "longitude": 4.3175679
            },
            "travelTimeInSeconds": 4993
          },
          {
            "distanceInMeters": 73542,
            "point": {
              "latitude": 52.0837569,
              "longitude": 4.3175974
            },
            "travelTimeInSeconds": 4995
          },
          {
            "distanceInMeters": 73585,
            "point": {
              "latitude": 52.0834404,
              "longitude": 4.3179649
            },
            "travelTimeInSeconds": 5018
          },
          {
            "distanceInMeters": 73595,
            "point": {
              "latitude": 52.0833868,
              "longitude": 4.3178484
            },
            "travelTimeInSeconds": 5021
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 185,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 80,
            "side": "LEFT"
          }
        ]
      },
      {
        "drivingSide": "RIGHT",
        "maneuver": "ARRIVE",
        "maneuverPoint": {
          "latitude": 52.0801959,
          "longitude": 4.3101406
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈlɑŋ.ə ˈvɛ⁀i.vər.bɛrx",
            "phoneticLanguageCode": "nl-NL",
            "text": "Lange Vijverberg"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈlɑŋ.ə ˈvɛ⁀i.vər.bɛrx",
            "phoneticLanguageCode": "nl-NL",
            "text": "Lange Vijverberg"
          }
        },
        "routeOffsetInMeters": 74244,
        "routePath": [
          {
            "distanceInMeters": 74244,
            "point": {
              "latitude": 52.0801959,
              "longitude": 4.3101406
            },
            "travelTimeInSeconds": 5132
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 627,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 507,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 462,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 388,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 312,
            "side": "RIGHT"
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
      "pointIndex": 9,
      "travelTimeInSeconds": 24,
      "distanceInMeters": 150
    },
    {
      "pointIndex": 15,
      "travelTimeInSeconds": 71,
      "distanceInMeters": 270
    },
    {
      "pointIndex": 21,
      "travelTimeInSeconds": 93,
      "distanceInMeters": 470
    },
    {
      "pointIndex": 23,
      "travelTimeInSeconds": 128,
      "distanceInMeters": 607
    },
    {
      "pointIndex": 28,
      "travelTimeInSeconds": 160,
      "distanceInMeters": 651
    },
    {
      "pointIndex": 36,
      "travelTimeInSeconds": 179,
      "distanceInMeters": 764
    },
    {
      "pointIndex": 45,
      "travelTimeInSeconds": 203,
      "distanceInMeters": 906
    },
    {
      "pointIndex": 49,
      "travelTimeInSeconds": 231,
      "distanceInMeters": 966
    },
    {
      "pointIndex": 50,
      "travelTimeInSeconds": 241,
      "distanceInMeters": 973
    },
    {
      "pointIndex": 55,
      "travelTimeInSeconds": 258,
      "distanceInMeters": 1048
    },
    {
      "pointIndex": 71,
      "travelTimeInSeconds": 318,
      "distanceInMeters": 1194
    },
    {
      "pointIndex": 101,
      "travelTimeInSeconds": 384,
      "distanceInMeters": 1806
    },
    {
      "pointIndex": 104,
      "travelTimeInSeconds": 409,
      "distanceInMeters": 1875
    },
    {
      "pointIndex": 105,
      "travelTimeInSeconds": 420,
      "distanceInMeters": 1886
    },
    {
      "pointIndex": 142,
      "travelTimeInSeconds": 509,
      "distanceInMeters": 2840
    },
    {
      "pointIndex": 145,
      "travelTimeInSeconds": 535,
      "distanceInMeters": 2939
    },
    {
      "pointIndex": 147,
      "travelTimeInSeconds": 549,
      "distanceInMeters": 2980
    },
    {
      "pointIndex": 150,
      "travelTimeInSeconds": 563,
      "distanceInMeters": 3130
    },
    {
      "pointIndex": 153,
      "travelTimeInSeconds": 583,
      "distanceInMeters": 3190
    },
    {
      "pointIndex": 154,
      "travelTimeInSeconds": 600,
      "distanceInMeters": 3214
    },
    {
      "pointIndex": 156,
      "travelTimeInSeconds": 603,
      "distanceInMeters": 3239
    },
    {
      "pointIndex": 157,
      "travelTimeInSeconds": 613,
      "distanceInMeters": 3244
    },
    {
      "pointIndex": 163,
      "travelTimeInSeconds": 667,
      "distanceInMeters": 3669
    },
    {
      "pointIndex": 166,
      "travelTimeInSeconds": 710,
      "distanceInMeters": 3788
    },
    {
      "pointIndex": 172,
      "travelTimeInSeconds": 753,
      "distanceInMeters": 3988
    },
    {
      "pointIndex": 183,
      "travelTimeInSeconds": 803,
      "distanceInMeters": 4374
    },
    {
      "pointIndex": 185,
      "travelTimeInSeconds": 830,
      "distanceInMeters": 4556
    },
    {
      "pointIndex": 195,
      "travelTimeInSeconds": 878,
      "distanceInMeters": 4968
    },
    {
      "pointIndex": 211,
      "travelTimeInSeconds": 1004,
      "distanceInMeters": 6270
    },
    {
      "pointIndex": 223,
      "travelTimeInSeconds": 1060,
      "distanceInMeters": 6948
    },
    {
      "pointIndex": 231,
      "travelTimeInSeconds": 1212,
      "distanceInMeters": 9397
    },
    {
      "pointIndex": 241,
      "travelTimeInSeconds": 1297,
      "distanceInMeters": 10154
    },
    {
      "pointIndex": 290,
      "travelTimeInSeconds": 1400,
      "distanceInMeters": 12256
    },
    {
      "pointIndex": 297,
      "travelTimeInSeconds": 1421,
      "distanceInMeters": 12878
    },
    {
      "pointIndex": 328,
      "travelTimeInSeconds": 1521,
      "distanceInMeters": 13564
    },
    {
      "pointIndex": 354,
      "travelTimeInSeconds": 1562,
      "distanceInMeters": 14379
    },
    {
      "pointIndex": 416,
      "travelTimeInSeconds": 1645,
      "distanceInMeters": 16124
    },
    {
      "pointIndex": 491,
      "travelTimeInSeconds": 1860,
      "distanceInMeters": 21084
    },
    {
      "pointIndex": 508,
      "travelTimeInSeconds": 1893,
      "distanceInMeters": 21780
    },
    {
      "pointIndex": 522,
      "travelTimeInSeconds": 1921,
      "distanceInMeters": 22314
    },
    {
      "pointIndex": 552,
      "travelTimeInSeconds": 2042,
      "distanceInMeters": 25522
    },
    {
      "pointIndex": 563,
      "travelTimeInSeconds": 2082,
      "distanceInMeters": 25921
    },
    {
      "pointIndex": 606,
      "travelTimeInSeconds": 2186,
      "distanceInMeters": 27716
    },
    {
      "pointIndex": 615,
      "travelTimeInSeconds": 2235,
      "distanceInMeters": 28652
    },
    {
      "pointIndex": 641,
      "travelTimeInSeconds": 2329,
      "distanceInMeters": 30640
    },
    {
      "pointIndex": 647,
      "travelTimeInSeconds": 2362,
      "distanceInMeters": 30789
    },
    {
      "pointIndex": 700,
      "travelTimeInSeconds": 2531,
      "distanceInMeters": 34404
    },
    {
      "pointIndex": 720,
      "travelTimeInSeconds": 2663,
      "distanceInMeters": 36437
    },
    {
      "pointIndex": 731,
      "travelTimeInSeconds": 2693,
      "distanceInMeters": 36722
    },
    {
      "pointIndex": 795,
      "travelTimeInSeconds": 2861,
      "distanceInMeters": 41178
    },
    {
      "pointIndex": 862,
      "travelTimeInSeconds": 3032,
      "distanceInMeters": 45752
    },
    {
      "pointIndex": 972,
      "travelTimeInSeconds": 3324,
      "distanceInMeters": 54066
    },
    {
      "pointIndex": 986,
      "travelTimeInSeconds": 3355,
      "distanceInMeters": 54350
    },
    {
      "pointIndex": 997,
      "travelTimeInSeconds": 3381,
      "distanceInMeters": 54598
    },
    {
      "pointIndex": 1054,
      "travelTimeInSeconds": 3509,
      "distanceInMeters": 57348
    },
    {
      "pointIndex": 1074,
      "travelTimeInSeconds": 3546,
      "distanceInMeters": 57608
    },
    {
      "pointIndex": 1143,
      "travelTimeInSeconds": 3698,
      "distanceInMeters": 60129
    },
    {
      "pointIndex": 1166,
      "travelTimeInSeconds": 3757,
      "distanceInMeters": 61132
    },
    {
      "pointIndex": 1198,
      "travelTimeInSeconds": 3829,
      "distanceInMeters": 62180
    },
    {
      "pointIndex": 1203,
      "travelTimeInSeconds": 3855,
      "distanceInMeters": 62427
    },
    {
      "pointIndex": 1205,
      "travelTimeInSeconds": 3873,
      "distanceInMeters": 62490
    },
    {
      "pointIndex": 1226,
      "travelTimeInSeconds": 3905,
      "distanceInMeters": 62778
    },
    {
      "pointIndex": 1240,
      "travelTimeInSeconds": 3943,
      "distanceInMeters": 63100
    },
    {
      "pointIndex": 1241,
      "travelTimeInSeconds": 3955,
      "distanceInMeters": 63131
    },
    {
      "pointIndex": 1253,
      "travelTimeInSeconds": 3993,
      "distanceInMeters": 63519
    },
    {
      "pointIndex": 1276,
      "travelTimeInSeconds": 4021,
      "distanceInMeters": 63674
    },
    {
      "pointIndex": 1279,
      "travelTimeInSeconds": 4040,
      "distanceInMeters": 63792
    },
    {
      "pointIndex": 1293,
      "travelTimeInSeconds": 4062,
      "distanceInMeters": 63864
    },
    {
      "pointIndex": 1322,
      "travelTimeInSeconds": 4118,
      "distanceInMeters": 64248
    },
    {
      "pointIndex": 1326,
      "travelTimeInSeconds": 4169,
      "distanceInMeters": 64649
    },
    {
      "pointIndex": 1329,
      "travelTimeInSeconds": 4202,
      "distanceInMeters": 64698
    },
    {
      "pointIndex": 1330,
      "travelTimeInSeconds": 4215,
      "distanceInMeters": 64709
    },
    {
      "pointIndex": 1333,
      "travelTimeInSeconds": 4228,
      "distanceInMeters": 64757
    },
    {
      "pointIndex": 1364,
      "travelTimeInSeconds": 4390,
      "distanceInMeters": 67665
    },
    {
      "pointIndex": 1384,
      "travelTimeInSeconds": 4514,
      "distanceInMeters": 69118
    },
    {
      "pointIndex": 1395,
      "travelTimeInSeconds": 4548,
      "distanceInMeters": 69670
    },
    {
      "pointIndex": 1406,
      "travelTimeInSeconds": 4593,
      "distanceInMeters": 70556
    },
    {
      "pointIndex": 1409,
      "travelTimeInSeconds": 4613,
      "distanceInMeters": 70688
    },
    {
      "pointIndex": 1424,
      "travelTimeInSeconds": 4687,
      "distanceInMeters": 71707
    },
    {
      "pointIndex": 1430,
      "travelTimeInSeconds": 4713,
      "distanceInMeters": 71958
    },
    {
      "pointIndex": 1433,
      "travelTimeInSeconds": 4740,
      "distanceInMeters": 72036
    },
    {
      "pointIndex": 1445,
      "travelTimeInSeconds": 4797,
      "distanceInMeters": 72684
    },
    {
      "pointIndex": 1447,
      "travelTimeInSeconds": 4809,
      "distanceInMeters": 72728
    },
    {
      "pointIndex": 1450,
      "travelTimeInSeconds": 4851,
      "distanceInMeters": 72803
    },
    {
      "pointIndex": 1464,
      "travelTimeInSeconds": 4892,
      "distanceInMeters": 73101
    },
    {
      "pointIndex": 1469,
      "travelTimeInSeconds": 4928,
      "distanceInMeters": 73205
    },
    {
      "pointIndex": 1472,
      "travelTimeInSeconds": 4959,
      "distanceInMeters": 73260
    },
    {
      "pointIndex": 1481,
      "travelTimeInSeconds": 4990,
      "distanceInMeters": 73531
    },
    {
      "pointIndex": 1484,
      "travelTimeInSeconds": 5020,
      "distanceInMeters": 73589
    },
    {
      "pointIndex": 1500,
      "travelTimeInSeconds": 5092,
      "distanceInMeters": 73964
    },
    {
      "pointIndex": 1511,
      "travelTimeInSeconds": 5131,
      "distanceInMeters": 74243
    },
    {
      "pointIndex": 1512,
      "travelTimeInSeconds": 5135,
      "distanceInMeters": 74247
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
