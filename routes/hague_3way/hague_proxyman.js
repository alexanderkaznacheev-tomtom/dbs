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
    "lengthInMeters": 58346,
    "travelTimeInSeconds": 3243,
    "trafficDelayInSeconds": 0,
    "trafficLengthInMeters": 0,
    "departureTime": "2024-01-24T14:38:09+01:00",
    "arrivalTime": "2024-01-24T15:32:11+01:00"
  },
  "legs": [
    {
      "summary": {
        "lengthInMeters": 58346,
        "travelTimeInSeconds": 3243,
        "trafficDelayInSeconds": 0,
        "trafficLengthInMeters": 0,
        "departureTime": "2024-01-24T14:38:09+01:00",
        "arrivalTime": "2024-01-24T15:32:11+01:00"
      },
      "points": [
        {
          "latitude": 52.3647183,
          "longitude": 4.8786029
        },
        {
          "latitude": 52.3647559,
          "longitude": 4.8786029
        },
        {
          "latitude": 52.3647934,
          "longitude": 4.878611
        },
        {
          "latitude": 52.3649678,
          "longitude": 4.8786592
        },
        {
          "latitude": 52.3650804,
          "longitude": 4.8786673
        },
        {
          "latitude": 52.3652521,
          "longitude": 4.8786512
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
      "endPointIndex": 40,
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
      "endPointIndex": 135,
      "sectionType": "LOW_EMISSION_ZONE"
    },
    {
      "startPointIndex": 92,
      "endPointIndex": 144,
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
      "endPointIndex": 146,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 0,
      "endPointIndex": 206,
      "sectionType": "URBAN"
    },
    {
      "startPointIndex": 155,
      "endPointIndex": 208,
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
      "startPointIndex": 146,
      "endPointIndex": 226,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 342,
      "endPointIndex": 351,
      "sectionType": "TUNNEL"
    },
    {
      "startPointIndex": 595,
      "endPointIndex": 603,
      "sectionType": "URBAN"
    },
    {
      "startPointIndex": 594,
      "endPointIndex": 622,
      "sectionType": "TUNNEL"
    },
    {
      "startPointIndex": 252,
      "endPointIndex": 723,
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
      "startPointIndex": 226,
      "endPointIndex": 749,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 70,
      "startPointIndex": 749,
      "endPointIndex": 756,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 100,
      "startPointIndex": 756,
      "endPointIndex": 775,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 792,
      "endPointIndex": 806,
      "sectionType": "URBAN"
    },
    {
      "maxSpeedLimitInKmh": 80,
      "startPointIndex": 775,
      "endPointIndex": 826,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 155,
      "endPointIndex": 838,
      "sectionType": "MOTORWAY"
    },
    {
      "startPointIndex": 784,
      "endPointIndex": 838,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "nld-highway",
          "shieldContent": "A12"
        }
      ]
    },
    {
      "startPointIndex": 840,
      "endPointIndex": 842,
      "sectionType": "TUNNEL"
    },
    {
      "maxSpeedLimitInKmh": 70,
      "startPointIndex": 826,
      "endPointIndex": 846,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 879,
      "endPointIndex": 890,
      "sectionType": "TUNNEL"
    },
    {
      "startPointIndex": 885,
      "endPointIndex": 895,
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
      "startPointIndex": 846,
      "endPointIndex": 925,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 0,
      "endPointIndex": 925,
      "sectionType": "COUNTRY",
      "countryCode": "NLD"
    },
    {
      "startPointIndex": 896,
      "endPointIndex": 925,
      "sectionType": "LOW_EMISSION_ZONE"
    },
    {
      "startPointIndex": 0,
      "endPointIndex": 925,
      "sectionType": "TRAVEL_MODE",
      "travelMode": "car"
    },
    {
      "startPointIndex": 832,
      "endPointIndex": 925,
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
      "startPointIndex": 34,
      "endPointIndex": 36,
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
      "startPointIndex": 36,
      "endPointIndex": 37,
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
      "startPointIndex": 37,
      "endPointIndex": 38,
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
      "startPointIndex": 38,
      "endPointIndex": 39,
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
      "startPointIndex": 39,
      "endPointIndex": 41,
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
      "endPointIndex": 50,
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
      "startPointIndex": 51,
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
      "endPointIndex": 74,
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
      "startPointIndex": 75,
      "endPointIndex": 76,
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
      "startPointIndex": 76,
      "endPointIndex": 76,
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
      "startPointIndex": 76,
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
      "startPointIndex": 84,
      "endPointIndex": 90,
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
      "startPointIndex": 91,
      "endPointIndex": 92,
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
      "startPointIndex": 92,
      "endPointIndex": 116,
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
      "startPointIndex": 117,
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
      "startPointIndex": 118,
      "endPointIndex": 119,
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
      "startPointIndex": 119,
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
      "startPointIndex": 128,
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
      "startPointIndex": 130,
      "endPointIndex": 132,
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
      "startPointIndex": 132,
      "endPointIndex": 134,
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
      "startPointIndex": 134,
      "endPointIndex": 134,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
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
      "startPointIndex": 134,
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
      "startPointIndex": 135,
      "endPointIndex": 135,
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
      "startPointIndex": 135,
      "endPointIndex": 137,
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
      "startPointIndex": 137,
      "endPointIndex": 139,
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
      "startPointIndex": 139,
      "endPointIndex": 140,
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
      "startPointIndex": 140,
      "endPointIndex": 141,
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
      "startPointIndex": 141,
      "endPointIndex": 141,
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
      "startPointIndex": 141,
      "endPointIndex": 144,
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
      "startPointIndex": 144,
      "endPointIndex": 144,
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
      "startPointIndex": 144,
      "endPointIndex": 145,
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
        },
        {
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
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
      "startPointIndex": 181,
      "endPointIndex": 182,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 182,
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
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 184,
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
      "startPointIndex": 185,
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
      "startPointIndex": 188,
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
      "startPointIndex": 191,
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
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 193,
      "endPointIndex": 195,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 195,
      "endPointIndex": 196,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 196,
      "endPointIndex": 197,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 198,
      "endPointIndex": 199,
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
      "startPointIndex": 199,
      "endPointIndex": 200,
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
      "startPointIndex": 200,
      "endPointIndex": 202,
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
      "startPointIndex": 202,
      "endPointIndex": 203,
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
      "startPointIndex": 203,
      "endPointIndex": 204,
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
      "startPointIndex": 204,
      "endPointIndex": 205,
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
      "startPointIndex": 205,
      "endPointIndex": 206,
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
      "startPointIndex": 206,
      "endPointIndex": 207,
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
      "startPointIndex": 207,
      "endPointIndex": 208,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 208,
      "endPointIndex": 210,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 210,
      "endPointIndex": 211,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 211,
      "endPointIndex": 212,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 212,
      "endPointIndex": 217,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 232,
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
        },
        {
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
      "startPointIndex": 234,
      "endPointIndex": 236,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 236,
      "endPointIndex": 239,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 239,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 244,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 247,
      "endPointIndex": 251,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "properties": [],
      "startPointIndex": 252,
      "endPointIndex": 253,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 253,
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
      "startPointIndex": 254,
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
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 255,
      "endPointIndex": 256,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 256,
      "endPointIndex": 257,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 258,
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
      "startPointIndex": 267,
      "endPointIndex": 269,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 269,
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
      "startPointIndex": 274,
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
      "startPointIndex": 278,
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
      "startPointIndex": 278,
      "endPointIndex": 280,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 280,
      "endPointIndex": 281,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 281,
      "endPointIndex": 282,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 282,
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
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 284,
      "endPointIndex": 285,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 285,
      "endPointIndex": 286,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 286,
      "endPointIndex": 286,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 287,
      "endPointIndex": 288,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 288,
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
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 289,
      "endPointIndex": 294,
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
      "startPointIndex": 439,
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
      "properties": [],
      "startPointIndex": 440,
      "endPointIndex": 442,
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
      "startPointIndex": 442,
      "endPointIndex": 443,
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
      "startPointIndex": 443,
      "endPointIndex": 444,
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
      "startPointIndex": 444,
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
      "startPointIndex": 450,
      "endPointIndex": 450,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 450,
      "endPointIndex": 453,
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
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 702,
      "endPointIndex": 703,
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
      "startPointIndex": 703,
      "endPointIndex": 706,
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
      "startPointIndex": 706,
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
      "startPointIndex": 712,
      "endPointIndex": 717,
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
      "startPointIndex": 717,
      "endPointIndex": 717,
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
      "startPointIndex": 719,
      "endPointIndex": 720,
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
      "startPointIndex": 720,
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
      "startPointIndex": 721,
      "endPointIndex": 722,
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
      "startPointIndex": 722,
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
        "SOLID_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 723,
      "endPointIndex": 724,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
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
      "startPointIndex": 724,
      "endPointIndex": 725,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
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
      "startPointIndex": 725,
      "endPointIndex": 726,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 726,
      "endPointIndex": 728,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 728,
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
        },
        {
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
        },
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
      "startPointIndex": 738,
      "endPointIndex": 739,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
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
      "startPointIndex": 739,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
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
      "startPointIndex": 742,
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
      "endPointIndex": 746,
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
      "startPointIndex": 746,
      "endPointIndex": 746,
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
      "startPointIndex": 746,
      "endPointIndex": 749,
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
      "startPointIndex": 749,
      "endPointIndex": 753,
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
      "startPointIndex": 753,
      "endPointIndex": 754,
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
      "startPointIndex": 754,
      "endPointIndex": 755,
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
      "startPointIndex": 755,
      "endPointIndex": 757,
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
      "startPointIndex": 757,
      "endPointIndex": 757,
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
      "startPointIndex": 757,
      "endPointIndex": 760,
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
      "startPointIndex": 760,
      "endPointIndex": 761,
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
      "startPointIndex": 761,
      "endPointIndex": 762,
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
      "startPointIndex": 762,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 763,
      "endPointIndex": 766,
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
      "startPointIndex": 766,
      "endPointIndex": 767,
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
      "startPointIndex": 767,
      "endPointIndex": 768,
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
      "startPointIndex": 768,
      "endPointIndex": 775,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 807,
      "endPointIndex": 810,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 810,
      "endPointIndex": 814,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 814,
      "endPointIndex": 816,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 816,
      "endPointIndex": 819,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 819,
      "endPointIndex": 819,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 819,
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
      "endPointIndex": 830,
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
      "startPointIndex": 830,
      "endPointIndex": 831,
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
      "startPointIndex": 831,
      "endPointIndex": 833,
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
      "startPointIndex": 833,
      "endPointIndex": 833,
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
      "startPointIndex": 833,
      "endPointIndex": 835,
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
      "startPointIndex": 835,
      "endPointIndex": 836,
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
      "startPointIndex": 836,
      "endPointIndex": 837,
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
      "startPointIndex": 837,
      "endPointIndex": 838,
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
      "startPointIndex": 838,
      "endPointIndex": 840,
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
      "startPointIndex": 840,
      "endPointIndex": 841,
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
      "startPointIndex": 841,
      "endPointIndex": 842,
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
      "startPointIndex": 842,
      "endPointIndex": 843,
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
      "startPointIndex": 843,
      "endPointIndex": 844,
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
      "startPointIndex": 844,
      "endPointIndex": 845,
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
      "startPointIndex": 845,
      "endPointIndex": 846,
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
      "startPointIndex": 846,
      "endPointIndex": 847,
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
      "startPointIndex": 847,
      "endPointIndex": 848,
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
      "startPointIndex": 848,
      "endPointIndex": 848,
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
      "startPointIndex": 848,
      "endPointIndex": 849,
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
      "startPointIndex": 849,
      "endPointIndex": 849,
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
      "startPointIndex": 849,
      "endPointIndex": 851,
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
      "startPointIndex": 851,
      "endPointIndex": 851,
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
      "startPointIndex": 851,
      "endPointIndex": 851,
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
      "startPointIndex": 851,
      "endPointIndex": 851,
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
      "startPointIndex": 851,
      "endPointIndex": 852,
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
      "startPointIndex": 852,
      "endPointIndex": 855,
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
      "startPointIndex": 855,
      "endPointIndex": 859,
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
      "startPointIndex": 861,
      "endPointIndex": 862,
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
      "startPointIndex": 862,
      "endPointIndex": 865,
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
      "startPointIndex": 865,
      "endPointIndex": 865,
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
      "startPointIndex": 865,
      "endPointIndex": 866,
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
      "startPointIndex": 866,
      "endPointIndex": 867,
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
      "startPointIndex": 867,
      "endPointIndex": 868,
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
      "startPointIndex": 868,
      "endPointIndex": 868,
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
      "startPointIndex": 868,
      "endPointIndex": 869,
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
      "startPointIndex": 869,
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
      "startPointIndex": 877,
      "endPointIndex": 878,
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
      "startPointIndex": 878,
      "endPointIndex": 879,
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
      "startPointIndex": 879,
      "endPointIndex": 880,
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
      "startPointIndex": 880,
      "endPointIndex": 881,
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
      "startPointIndex": 881,
      "endPointIndex": 883,
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
      "startPointIndex": 883,
      "endPointIndex": 884,
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
      "startPointIndex": 884,
      "endPointIndex": 885,
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
      "startPointIndex": 885,
      "endPointIndex": 885,
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
      "startPointIndex": 885,
      "endPointIndex": 887,
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
      "startPointIndex": 887,
      "endPointIndex": 890,
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
      "startPointIndex": 890,
      "endPointIndex": 891,
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
      "startPointIndex": 891,
      "endPointIndex": 892,
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
      "startPointIndex": 892,
      "endPointIndex": 894,
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
      "startPointIndex": 894,
      "endPointIndex": 896,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 896,
      "endPointIndex": 897,
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
      "startPointIndex": 897,
      "endPointIndex": 898,
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
      "startPointIndex": 898,
      "endPointIndex": 898,
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
      "startPointIndex": 898,
      "endPointIndex": 899,
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
      "startPointIndex": 899,
      "endPointIndex": 900,
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
      "startPointIndex": 900,
      "endPointIndex": 901,
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
      "startPointIndex": 901,
      "endPointIndex": 921,
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
      "startPointIndex": 925,
      "endPointIndex": 925,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 925,
      "endPointIndex": 925,
      "sectionType": "LANES"
    }
  ],
  "guidance": {
    "instructions": [
      {
        "drivingSide": "RIGHT",
        "maneuver": "DEPART",
        "maneuverPoint": {
          "latitude": 52.3647183,
          "longitude": 4.8786029
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
              "latitude": 52.3647183,
              "longitude": 4.8786029
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
        "routeOffsetInMeters": 865,
        "routePath": [
          {
            "distanceInMeters": 865,
            "point": {
              "latitude": 52.3717564,
              "longitude": 4.8741639
            },
            "travelTimeInSeconds": 207
          },
          {
            "distanceInMeters": 877,
            "point": {
              "latitude": 52.3718557,
              "longitude": 4.8741236
            },
            "travelTimeInSeconds": 208
          },
          {
            "distanceInMeters": 885,
            "point": {
              "latitude": 52.3718289,
              "longitude": 4.874011
            },
            "travelTimeInSeconds": 218
          },
          {
            "distanceInMeters": 895,
            "point": {
              "latitude": 52.3717962,
              "longitude": 4.8738759
            },
            "travelTimeInSeconds": 219
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 760,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 696,
            "side": "LEFT_AND_RIGHT"
          },
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
        "routeOffsetInMeters": 1940,
        "routePath": [
          {
            "distanceInMeters": 1940,
            "point": {
              "latitude": 52.3715499,
              "longitude": 4.8596075
            },
            "travelTimeInSeconds": 403
          },
          {
            "distanceInMeters": 1950,
            "point": {
              "latitude": 52.3716305,
              "longitude": 4.8595422
            },
            "travelTimeInSeconds": 404
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
        "routeOffsetInMeters": 2291,
        "routePath": [
          {
            "distanceInMeters": 2291,
            "point": {
              "latitude": 52.3746371,
              "longitude": 4.8585615
            },
            "travelTimeInSeconds": 469
          },
          {
            "distanceInMeters": 2298,
            "point": {
              "latitude": 52.3746935,
              "longitude": 4.8585373
            },
            "travelTimeInSeconds": 470
          },
          {
            "distanceInMeters": 2308,
            "point": {
              "latitude": 52.3746845,
              "longitude": 4.8583875
            },
            "travelTimeInSeconds": 480
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
        "routeOffsetInMeters": 3409,
        "routePath": [
          {
            "distanceInMeters": 3409,
            "point": {
              "latitude": 52.3723277,
              "longitude": 4.8429644
            },
            "travelTimeInSeconds": 705
          },
          {
            "distanceInMeters": 3426,
            "point": {
              "latitude": 52.3723814,
              "longitude": 4.8427257
            },
            "travelTimeInSeconds": 707
          },
          {
            "distanceInMeters": 3440,
            "point": {
              "latitude": 52.372427,
              "longitude": 4.8425326
            },
            "travelTimeInSeconds": 709
          },
          {
            "distanceInMeters": 3442,
            "point": {
              "latitude": 52.3724297,
              "longitude": 4.8425031
            },
            "travelTimeInSeconds": 709
          },
          {
            "distanceInMeters": 3452,
            "point": {
              "latitude": 52.3724538,
              "longitude": 4.8423743
            },
            "travelTimeInSeconds": 710
          },
          {
            "distanceInMeters": 3458,
            "point": {
              "latitude": 52.3724619,
              "longitude": 4.8422804
            },
            "travelTimeInSeconds": 710
          },
          {
            "distanceInMeters": 3474,
            "point": {
              "latitude": 52.3724779,
              "longitude": 4.8420525
            },
            "travelTimeInSeconds": 712
          },
          {
            "distanceInMeters": 3486,
            "point": {
              "latitude": 52.3724779,
              "longitude": 4.8418754
            },
            "travelTimeInSeconds": 713
          },
          {
            "distanceInMeters": 3500,
            "point": {
              "latitude": 52.3724082,
              "longitude": 4.8416984
            },
            "travelTimeInSeconds": 715
          },
          {
            "distanceInMeters": 3507,
            "point": {
              "latitude": 52.3723572,
              "longitude": 4.8416287
            },
            "travelTimeInSeconds": 715
          },
          {
            "distanceInMeters": 3516,
            "point": {
              "latitude": 52.3722902,
              "longitude": 4.841567
            },
            "travelTimeInSeconds": 716
          },
          {
            "distanceInMeters": 3540,
            "point": {
              "latitude": 52.3720703,
              "longitude": 4.8415563
            },
            "travelTimeInSeconds": 718
          },
          {
            "distanceInMeters": 3550,
            "point": {
              "latitude": 52.3719811,
              "longitude": 4.8415615
            },
            "travelTimeInSeconds": 719
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
        "routeOffsetInMeters": 6621,
        "routePath": [
          {
            "distanceInMeters": 6621,
            "point": {
              "latitude": 52.3445132,
              "longitude": 4.8409072
            },
            "travelTimeInSeconds": 868
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
        "routeOffsetInMeters": 8568,
        "routePath": [
          {
            "distanceInMeters": 8568,
            "point": {
              "latitude": 52.3387572,
              "longitude": 4.8200288
            },
            "travelTimeInSeconds": 942
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
        "routeOffsetInMeters": 10173,
        "routePath": [
          {
            "distanceInMeters": 10173,
            "point": {
              "latitude": 52.331813,
              "longitude": 4.800505
            },
            "travelTimeInSeconds": 997
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
        "routeOffsetInMeters": 25022,
        "routePath": [
          {
            "distanceInMeters": 25022,
            "point": {
              "latitude": 52.2384855,
              "longitude": 4.6553117
            },
            "travelTimeInSeconds": 1581
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
        "routeOffsetInMeters": 50216,
        "routePath": [
          {
            "distanceInMeters": 50216,
            "point": {
              "latitude": 52.077738,
              "longitude": 4.4044688
            },
            "travelTimeInSeconds": 2597
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
        "routeOffsetInMeters": 52053,
        "routePath": [
          {
            "distanceInMeters": 52053,
            "point": {
              "latitude": 52.0683101,
              "longitude": 4.3825498
            },
            "travelTimeInSeconds": 2671
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
        "routeOffsetInMeters": 52437,
        "routePath": [
          {
            "distanceInMeters": 52437,
            "point": {
              "latitude": 52.0657969,
              "longitude": 4.3787411
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
        "routeOffsetInMeters": 56125,
        "routePath": [
          {
            "distanceInMeters": 56125,
            "point": {
              "latitude": 52.0785105,
              "longitude": 4.3347207
            },
            "travelTimeInSeconds": 2860
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
        "routeOffsetInMeters": 56938,
        "routePath": [
          {
            "distanceInMeters": 56938,
            "point": {
              "latitude": 52.0839769,
              "longitude": 4.3269825
            },
            "travelTimeInSeconds": 3018
          },
          {
            "distanceInMeters": 56946,
            "point": {
              "latitude": 52.0840386,
              "longitude": 4.3269101
            },
            "travelTimeInSeconds": 3024
          },
          {
            "distanceInMeters": 56956,
            "point": {
              "latitude": 52.0839849,
              "longitude": 4.3267904
            },
            "travelTimeInSeconds": 3030
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
        "routeOffsetInMeters": 57180,
        "routePath": [
          {
            "distanceInMeters": 57180,
            "point": {
              "latitude": 52.0828906,
              "longitude": 4.3240508
            },
            "travelTimeInSeconds": 3054
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
        "routeOffsetInMeters": 57669,
        "routePath": [
          {
            "distanceInMeters": 57669,
            "point": {
              "latitude": 52.0835745,
              "longitude": 4.3182385
            },
            "travelTimeInSeconds": 3124
          },
          {
            "distanceInMeters": 57682,
            "point": {
              "latitude": 52.0835021,
              "longitude": 4.3180776
            },
            "travelTimeInSeconds": 3126
          },
          {
            "distanceInMeters": 57692,
            "point": {
              "latitude": 52.0834404,
              "longitude": 4.3179649
            },
            "travelTimeInSeconds": 3128
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
        "routeOffsetInMeters": 58352,
        "routePath": [
          {
            "distanceInMeters": 58352,
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
      "pointIndex": 8,
      "travelTimeInSeconds": 20,
      "distanceInMeters": 123
    },
    {
      "pointIndex": 12,
      "travelTimeInSeconds": 39,
      "distanceInMeters": 217
    },
    {
      "pointIndex": 19,
      "travelTimeInSeconds": 61,
      "distanceInMeters": 341
    },
    {
      "pointIndex": 25,
      "travelTimeInSeconds": 105,
      "distanceInMeters": 461
    },
    {
      "pointIndex": 31,
      "travelTimeInSeconds": 129,
      "distanceInMeters": 661
    },
    {
      "pointIndex": 32,
      "travelTimeInSeconds": 149,
      "distanceInMeters": 758
    },
    {
      "pointIndex": 36,
      "travelTimeInSeconds": 181,
      "distanceInMeters": 822
    },
    {
      "pointIndex": 38,
      "travelTimeInSeconds": 198,
      "distanceInMeters": 842
    },
    {
      "pointIndex": 40,
      "travelTimeInSeconds": 208,
      "distanceInMeters": 877
    },
    {
      "pointIndex": 41,
      "travelTimeInSeconds": 218,
      "distanceInMeters": 885
    },
    {
      "pointIndex": 50,
      "travelTimeInSeconds": 239,
      "distanceInMeters": 1059
    },
    {
      "pointIndex": 51,
      "travelTimeInSeconds": 292,
      "distanceInMeters": 1137
    },
    {
      "pointIndex": 60,
      "travelTimeInSeconds": 317,
      "distanceInMeters": 1333
    },
    {
      "pointIndex": 70,
      "travelTimeInSeconds": 347,
      "distanceInMeters": 1523
    },
    {
      "pointIndex": 82,
      "travelTimeInSeconds": 397,
      "distanceInMeters": 1920
    },
    {
      "pointIndex": 92,
      "travelTimeInSeconds": 470,
      "distanceInMeters": 2299
    },
    {
      "pointIndex": 93,
      "travelTimeInSeconds": 484,
      "distanceInMeters": 2311
    },
    {
      "pointIndex": 110,
      "travelTimeInSeconds": 539,
      "distanceInMeters": 2720
    },
    {
      "pointIndex": 116,
      "travelTimeInSeconds": 595,
      "distanceInMeters": 2925
    },
    {
      "pointIndex": 121,
      "travelTimeInSeconds": 625,
      "distanceInMeters": 3007
    },
    {
      "pointIndex": 126,
      "travelTimeInSeconds": 656,
      "distanceInMeters": 3212
    },
    {
      "pointIndex": 130,
      "travelTimeInSeconds": 666,
      "distanceInMeters": 3329
    },
    {
      "pointIndex": 134,
      "travelTimeInSeconds": 705,
      "distanceInMeters": 3408
    },
    {
      "pointIndex": 155,
      "travelTimeInSeconds": 748,
      "distanceInMeters": 4031
    },
    {
      "pointIndex": 230,
      "travelTimeInSeconds": 897,
      "distanceInMeters": 7370
    },
    {
      "pointIndex": 343,
      "travelTimeInSeconds": 1117,
      "distanceInMeters": 13792
    },
    {
      "pointIndex": 392,
      "travelTimeInSeconds": 1260,
      "distanceInMeters": 17901
    },
    {
      "pointIndex": 467,
      "travelTimeInSeconds": 1651,
      "distanceInMeters": 26681
    },
    {
      "pointIndex": 528,
      "travelTimeInSeconds": 1901,
      "distanceInMeters": 32767
    },
    {
      "pointIndex": 646,
      "travelTimeInSeconds": 2216,
      "distanceInMeters": 40723
    },
    {
      "pointIndex": 694,
      "travelTimeInSeconds": 2419,
      "distanceInMeters": 45465
    },
    {
      "pointIndex": 767,
      "travelTimeInSeconds": 2693,
      "distanceInMeters": 52600
    },
    {
      "pointIndex": 847,
      "travelTimeInSeconds": 2880,
      "distanceInMeters": 56462
    },
    {
      "pointIndex": 848,
      "travelTimeInSeconds": 2891,
      "distanceInMeters": 56493
    },
    {
      "pointIndex": 849,
      "travelTimeInSeconds": 2914,
      "distanceInMeters": 56528
    },
    {
      "pointIndex": 855,
      "travelTimeInSeconds": 2935,
      "distanceInMeters": 56684
    },
    {
      "pointIndex": 858,
      "travelTimeInSeconds": 2950,
      "distanceInMeters": 56738
    },
    {
      "pointIndex": 862,
      "travelTimeInSeconds": 2964,
      "distanceInMeters": 56838
    },
    {
      "pointIndex": 867,
      "travelTimeInSeconds": 3031,
      "distanceInMeters": 56966
    },
    {
      "pointIndex": 891,
      "travelTimeInSeconds": 3081,
      "distanceInMeters": 57536
    },
    {
      "pointIndex": 893,
      "travelTimeInSeconds": 3122,
      "distanceInMeters": 57650
    },
    {
      "pointIndex": 904,
      "travelTimeInSeconds": 3167,
      "distanceInMeters": 57921
    },
    {
      "pointIndex": 917,
      "travelTimeInSeconds": 3200,
      "distanceInMeters": 58084
    },
    {
      "pointIndex": 924,
      "travelTimeInSeconds": 3239,
      "distanceInMeters": 58342
    },
    {
      "pointIndex": 925,
      "travelTimeInSeconds": 3243,
      "distanceInMeters": 58346
    }
  ]
};

var longRoute = {
  "summary": {
    "lengthInMeters": 75293,
    "travelTimeInSeconds": 4350,
    "trafficDelayInSeconds": 0,
    "trafficLengthInMeters": 0,
    "departureTime": "2024-01-24T14:38:09+01:00",
    "arrivalTime": "2024-01-24T15:50:39+01:00",
    "deviationDistance": 169,
    "deviationTime": 34,
    "deviationPoint": {
      "latitude": 52.3660836,
      "longitude": 4.8778492
    }
  },
  "legs": [
    {
      "summary": {
        "lengthInMeters": 75293,
        "travelTimeInSeconds": 4350,
        "trafficDelayInSeconds": 0,
        "trafficLengthInMeters": 0,
        "departureTime": "2024-01-24T14:38:09+01:00",
        "arrivalTime": "2024-01-24T15:50:39+01:00"
      },
      "points": [
        {
          "latitude": 52.3647183,
          "longitude": 4.8786029
        },
        {
          "latitude": 52.3647559,
          "longitude": 4.8786029
        },
        {
          "latitude": 52.3647934,
          "longitude": 4.878611
        },
        {
          "latitude": 52.3649678,
          "longitude": 4.8786592
        },
        {
          "latitude": 52.3650804,
          "longitude": 4.8786673
        },
        {
          "latitude": 52.3652521,
          "longitude": 4.8786512
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
          "latitude": 52.3656839,
          "longitude": 4.8764142
        },
        {
          "latitude": 52.3653165,
          "longitude": 4.8751992
        },
        {
          "latitude": 52.3650616,
          "longitude": 4.8743436
        },
        {
          "latitude": 52.3650858,
          "longitude": 4.8740593
        },
        {
          "latitude": 52.3650751,
          "longitude": 4.8737428
        },
        {
          "latitude": 52.3652762,
          "longitude": 4.8735845
        },
        {
          "latitude": 52.3653138,
          "longitude": 4.8734987
        },
        {
          "latitude": 52.3654076,
          "longitude": 4.8734504
        },
        {
          "latitude": 52.3655042,
          "longitude": 4.8733914
        },
        {
          "latitude": 52.365649,
          "longitude": 4.8733056
        },
        {
          "latitude": 52.3657134,
          "longitude": 4.8732653
        },
        {
          "latitude": 52.3661801,
          "longitude": 4.8729032
        },
        {
          "latitude": 52.3661426,
          "longitude": 4.8727718
        },
        {
          "latitude": 52.3658797,
          "longitude": 4.8718169
        },
        {
          "latitude": 52.3658341,
          "longitude": 4.871664
        },
        {
          "latitude": 52.3657563,
          "longitude": 4.8713797
        },
        {
          "latitude": 52.3657215,
          "longitude": 4.8712429
        },
        {
          "latitude": 52.3654264,
          "longitude": 4.8701727
        },
        {
          "latitude": 52.3649222,
          "longitude": 4.8705322
        },
        {
          "latitude": 52.36478,
          "longitude": 4.8700333
        },
        {
          "latitude": 52.3644233,
          "longitude": 4.8685876
        },
        {
          "latitude": 52.3641765,
          "longitude": 4.8675737
        },
        {
          "latitude": 52.3639914,
          "longitude": 4.8667717
        },
        {
          "latitude": 52.3639351,
          "longitude": 4.8665947
        },
        {
          "latitude": 52.363852,
          "longitude": 4.8666483
        },
        {
          "latitude": 52.3636937,
          "longitude": 4.8667663
        },
        {
          "latitude": 52.3636293,
          "longitude": 4.8668092
        },
        {
          "latitude": 52.3631787,
          "longitude": 4.8671204
        },
        {
          "latitude": 52.3630929,
          "longitude": 4.8671901
        },
        {
          "latitude": 52.3623875,
          "longitude": 4.8642397
        },
        {
          "latitude": 52.3619369,
          "longitude": 4.8623836
        },
        {
          "latitude": 52.361497,
          "longitude": 4.8605597
        },
        {
          "latitude": 52.3610088,
          "longitude": 4.8608816
        },
        {
          "latitude": 52.3608398,
          "longitude": 4.8609996
        },
        {
          "latitude": 52.360518,
          "longitude": 4.8612168
        },
        {
          "latitude": 52.360062,
          "longitude": 4.8614931
        },
        {
          "latitude": 52.3596409,
          "longitude": 4.8598731
        },
        {
          "latitude": 52.3596194,
          "longitude": 4.859806
        },
        {
          "latitude": 52.3595873,
          "longitude": 4.8597389
        },
        {
          "latitude": 52.359539,
          "longitude": 4.8595887
        },
        {
          "latitude": 52.3596409,
          "longitude": 4.8591435
        },
        {
          "latitude": 52.3598769,
          "longitude": 4.8583522
        },
        {
          "latitude": 52.3600191,
          "longitude": 4.8579097
        },
        {
          "latitude": 52.3599467,
          "longitude": 4.8578373
        },
        {
          "latitude": 52.359598,
          "longitude": 4.8575583
        },
        {
          "latitude": 52.3591152,
          "longitude": 4.8571748
        },
        {
          "latitude": 52.3585171,
          "longitude": 4.856692
        },
        {
          "latitude": 52.3584607,
          "longitude": 4.8566517
        },
        {
          "latitude": 52.3584339,
          "longitude": 4.856649
        },
        {
          "latitude": 52.358399,
          "longitude": 4.8566598
        },
        {
          "latitude": 52.3583561,
          "longitude": 4.8566866
        },
        {
          "latitude": 52.358163,
          "longitude": 4.8568287
        },
        {
          "latitude": 52.3579457,
          "longitude": 4.855957
        },
        {
          "latitude": 52.3579189,
          "longitude": 4.8558471
        },
        {
          "latitude": 52.3578814,
          "longitude": 4.8557076
        },
        {
          "latitude": 52.3578197,
          "longitude": 4.8553938
        },
        {
          "latitude": 52.357817,
          "longitude": 4.8553079
        },
        {
          "latitude": 52.357817,
          "longitude": 4.8552114
        },
        {
          "latitude": 52.357825,
          "longitude": 4.8551443
        },
        {
          "latitude": 52.3578358,
          "longitude": 4.855096
        },
        {
          "latitude": 52.3578492,
          "longitude": 4.8550478
        },
        {
          "latitude": 52.3578814,
          "longitude": 4.8549458
        },
        {
          "latitude": 52.3578975,
          "longitude": 4.8548949
        },
        {
          "latitude": 52.3579189,
          "longitude": 4.8548305
        },
        {
          "latitude": 52.3579457,
          "longitude": 4.854742
        },
        {
          "latitude": 52.357994,
          "longitude": 4.8545998
        },
        {
          "latitude": 52.3582569,
          "longitude": 4.8538086
        },
        {
          "latitude": 52.3582837,
          "longitude": 4.8537549
        },
        {
          "latitude": 52.3583186,
          "longitude": 4.8537147
        },
        {
          "latitude": 52.3583964,
          "longitude": 4.8536557
        },
        {
          "latitude": 52.3584259,
          "longitude": 4.8536557
        },
        {
          "latitude": 52.3584607,
          "longitude": 4.853645
        },
        {
          "latitude": 52.3584929,
          "longitude": 4.8536262
        },
        {
          "latitude": 52.35856,
          "longitude": 4.8535645
        },
        {
          "latitude": 52.3586029,
          "longitude": 4.8535135
        },
        {
          "latitude": 52.358627,
          "longitude": 4.8534787
        },
        {
          "latitude": 52.3586485,
          "longitude": 4.8534331
        },
        {
          "latitude": 52.3586646,
          "longitude": 4.8533875
        },
        {
          "latitude": 52.3586968,
          "longitude": 4.853256
        },
        {
          "latitude": 52.3587021,
          "longitude": 4.8531675
        },
        {
          "latitude": 52.3587021,
          "longitude": 4.8531112
        },
        {
          "latitude": 52.3586968,
          "longitude": 4.8530656
        },
        {
          "latitude": 52.358678,
          "longitude": 4.8530066
        },
        {
          "latitude": 52.3586351,
          "longitude": 4.85291
        },
        {
          "latitude": 52.3585841,
          "longitude": 4.8528242
        },
        {
          "latitude": 52.3584688,
          "longitude": 4.8526391
        },
        {
          "latitude": 52.3584285,
          "longitude": 4.8525882
        },
        {
          "latitude": 52.3583803,
          "longitude": 4.8525184
        },
        {
          "latitude": 52.35834,
          "longitude": 4.8524433
        },
        {
          "latitude": 52.3582944,
          "longitude": 4.8523575
        },
        {
          "latitude": 52.3582408,
          "longitude": 4.8522261
        },
        {
          "latitude": 52.3582086,
          "longitude": 4.8521295
        },
        {
          "latitude": 52.3581925,
          "longitude": 4.8520625
        },
        {
          "latitude": 52.3581818,
          "longitude": 4.8519874
        },
        {
          "latitude": 52.3581737,
          "longitude": 4.851703
        },
        {
          "latitude": 52.3581657,
          "longitude": 4.8515046
        },
        {
          "latitude": 52.3581603,
          "longitude": 4.851121
        },
        {
          "latitude": 52.3581496,
          "longitude": 4.8506892
        },
        {
          "latitude": 52.3581469,
          "longitude": 4.8505926
        },
        {
          "latitude": 52.3581442,
          "longitude": 4.8503539
        },
        {
          "latitude": 52.3581442,
          "longitude": 4.8501742
        },
        {
          "latitude": 52.3581415,
          "longitude": 4.8499811
        },
        {
          "latitude": 52.3581415,
          "longitude": 4.8498014
        },
        {
          "latitude": 52.3581362,
          "longitude": 4.849501
        },
        {
          "latitude": 52.3581308,
          "longitude": 4.8491469
        },
        {
          "latitude": 52.3581281,
          "longitude": 4.8490879
        },
        {
          "latitude": 52.3581254,
          "longitude": 4.8486829
        },
        {
          "latitude": 52.3581254,
          "longitude": 4.8486239
        },
        {
          "latitude": 52.3581281,
          "longitude": 4.8481143
        },
        {
          "latitude": 52.3581228,
          "longitude": 4.8474947
        },
        {
          "latitude": 52.3580986,
          "longitude": 4.8458076
        },
        {
          "latitude": 52.3581013,
          "longitude": 4.8451987
        },
        {
          "latitude": 52.3580906,
          "longitude": 4.8445576
        },
        {
          "latitude": 52.3580852,
          "longitude": 4.8444021
        },
        {
          "latitude": 52.3580825,
          "longitude": 4.8440668
        },
        {
          "latitude": 52.3581094,
          "longitude": 4.8435143
        },
        {
          "latitude": 52.3581415,
          "longitude": 4.8432702
        },
        {
          "latitude": 52.3581979,
          "longitude": 4.8430127
        },
        {
          "latitude": 52.3582274,
          "longitude": 4.8428786
        },
        {
          "latitude": 52.3582515,
          "longitude": 4.8426935
        },
        {
          "latitude": 52.3582596,
          "longitude": 4.8426104
        },
        {
          "latitude": 52.3582676,
          "longitude": 4.8424709
        },
        {
          "latitude": 52.3582596,
          "longitude": 4.8423636
        },
        {
          "latitude": 52.3582006,
          "longitude": 4.8419183
        },
        {
          "latitude": 52.3579645,
          "longitude": 4.8419183
        },
        {
          "latitude": 52.3577392,
          "longitude": 4.8419371
        },
        {
          "latitude": 52.3574254,
          "longitude": 4.8419505
        },
        {
          "latitude": 52.3569989,
          "longitude": 4.8419908
        },
        {
          "latitude": 52.3563096,
          "longitude": 4.8421195
        },
        {
          "latitude": 52.356154,
          "longitude": 4.842141
        },
        {
          "latitude": 52.3560816,
          "longitude": 4.8421571
        },
        {
          "latitude": 52.3559234,
          "longitude": 4.8421812
        },
        {
          "latitude": 52.3554271,
          "longitude": 4.8422483
        },
        {
          "latitude": 52.3542899,
          "longitude": 4.8424172
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
          "latitude": 52.3314804,
          "longitude": 4.7997245
        },
        {
          "latitude": 52.3314294,
          "longitude": 4.799628
        },
        {
          "latitude": 52.3311076,
          "longitude": 4.7990566
        },
        {
          "latitude": 52.3306999,
          "longitude": 4.79837
        },
        {
          "latitude": 52.3304987,
          "longitude": 4.7979972
        },
        {
          "latitude": 52.3301232,
          "longitude": 4.7972676
        },
        {
          "latitude": 52.3300105,
          "longitude": 4.797053
        },
        {
          "latitude": 52.3292863,
          "longitude": 4.7954974
        },
        {
          "latitude": 52.3290476,
          "longitude": 4.7949073
        },
        {
          "latitude": 52.3289216,
          "longitude": 4.7946176
        },
        {
          "latitude": 52.3288867,
          "longitude": 4.7945291
        },
        {
          "latitude": 52.3288143,
          "longitude": 4.794336
        },
        {
          "latitude": 52.3287794,
          "longitude": 4.7942448
        },
        {
          "latitude": 52.3285943,
          "longitude": 4.7937968
        },
        {
          "latitude": 52.3284709,
          "longitude": 4.7934294
        },
        {
          "latitude": 52.3283583,
          "longitude": 4.7930726
        },
        {
          "latitude": 52.3282269,
          "longitude": 4.7924691
        },
        {
          "latitude": 52.3281786,
          "longitude": 4.7921017
        },
        {
          "latitude": 52.3281544,
          "longitude": 4.7918281
        },
        {
          "latitude": 52.3281357,
          "longitude": 4.791415
        },
        {
          "latitude": 52.3281732,
          "longitude": 4.7900391
        },
        {
          "latitude": 52.3281893,
          "longitude": 4.789398
        },
        {
          "latitude": 52.3281786,
          "longitude": 4.7883654
        },
        {
          "latitude": 52.3281357,
          "longitude": 4.7876224
        },
        {
          "latitude": 52.3281008,
          "longitude": 4.7862437
        },
        {
          "latitude": 52.3280659,
          "longitude": 4.7858065
        },
        {
          "latitude": 52.3280552,
          "longitude": 4.7851333
        },
        {
          "latitude": 52.3280525,
          "longitude": 4.7849911
        },
        {
          "latitude": 52.3280659,
          "longitude": 4.7840872
        },
        {
          "latitude": 52.3280767,
          "longitude": 4.7827166
        },
        {
          "latitude": 52.3280767,
          "longitude": 4.7808444
        },
        {
          "latitude": 52.3281303,
          "longitude": 4.780249
        },
        {
          "latitude": 52.3281786,
          "longitude": 4.7792217
        },
        {
          "latitude": 52.3281866,
          "longitude": 4.7785002
        },
        {
          "latitude": 52.3281893,
          "longitude": 4.7782025
        },
        {
          "latitude": 52.3281652,
          "longitude": 4.777717
        },
        {
          "latitude": 52.3280418,
          "longitude": 4.7767514
        },
        {
          "latitude": 52.3279694,
          "longitude": 4.7759897
        },
        {
          "latitude": 52.3279613,
          "longitude": 4.7757295
        },
        {
          "latitude": 52.3279667,
          "longitude": 4.7754022
        },
        {
          "latitude": 52.3280203,
          "longitude": 4.7747236
        },
        {
          "latitude": 52.3281491,
          "longitude": 4.7739109
        },
        {
          "latitude": 52.3282725,
          "longitude": 4.7733906
        },
        {
          "latitude": 52.3284253,
          "longitude": 4.7728863
        },
        {
          "latitude": 52.328648,
          "longitude": 4.7722507
        },
        {
          "latitude": 52.328766,
          "longitude": 4.7718295
        },
        {
          "latitude": 52.3291656,
          "longitude": 4.7709739
        },
        {
          "latitude": 52.330378,
          "longitude": 4.7686779
        },
        {
          "latitude": 52.3306999,
          "longitude": 4.7680664
        },
        {
          "latitude": 52.3307508,
          "longitude": 4.7679672
        },
        {
          "latitude": 52.3309278,
          "longitude": 4.7676265
        },
        {
          "latitude": 52.3314402,
          "longitude": 4.7666582
        },
        {
          "latitude": 52.3327973,
          "longitude": 4.7641155
        },
        {
          "latitude": 52.3335323,
          "longitude": 4.7627261
        },
        {
          "latitude": 52.334345,
          "longitude": 4.7612965
        },
        {
          "latitude": 52.3345864,
          "longitude": 4.7609076
        },
        {
          "latitude": 52.3354554,
          "longitude": 4.7597408
        },
        {
          "latitude": 52.3357478,
          "longitude": 4.7593868
        },
        {
          "latitude": 52.3362038,
          "longitude": 4.7589254
        },
        {
          "latitude": 52.336767,
          "longitude": 4.7583675
        },
        {
          "latitude": 52.337046,
          "longitude": 4.7581556
        },
        {
          "latitude": 52.3371372,
          "longitude": 4.7580779
        },
        {
          "latitude": 52.3380733,
          "longitude": 4.7574529
        },
        {
          "latitude": 52.338438,
          "longitude": 4.7572276
        },
        {
          "latitude": 52.3388672,
          "longitude": 4.7570157
        },
        {
          "latitude": 52.3389637,
          "longitude": 4.7569674
        },
        {
          "latitude": 52.3394868,
          "longitude": 4.7567528
        },
        {
          "latitude": 52.3399454,
          "longitude": 4.7565946
        },
        {
          "latitude": 52.3406723,
          "longitude": 4.7564203
        },
        {
          "latitude": 52.3412973,
          "longitude": 4.756313
        },
        {
          "latitude": 52.3427323,
          "longitude": 4.7562298
        },
        {
          "latitude": 52.3430702,
          "longitude": 4.7562057
        },
        {
          "latitude": 52.3432177,
          "longitude": 4.7561869
        },
        {
          "latitude": 52.3432285,
          "longitude": 4.7561815
        },
        {
          "latitude": 52.3436013,
          "longitude": 4.7561333
        },
        {
          "latitude": 52.3437381,
          "longitude": 4.7561145
        },
        {
          "latitude": 52.3439097,
          "longitude": 4.7560823
        },
        {
          "latitude": 52.3444703,
          "longitude": 4.7559482
        },
        {
          "latitude": 52.3447439,
          "longitude": 4.755865
        },
        {
          "latitude": 52.3455486,
          "longitude": 4.7555485
        },
        {
          "latitude": 52.3463291,
          "longitude": 4.7552106
        },
        {
          "latitude": 52.3467824,
          "longitude": 4.7549719
        },
        {
          "latitude": 52.3473081,
          "longitude": 4.7546339
        },
        {
          "latitude": 52.3473966,
          "longitude": 4.7545776
        },
        {
          "latitude": 52.3476648,
          "longitude": 4.754363
        },
        {
          "latitude": 52.3478392,
          "longitude": 4.7542316
        },
        {
          "latitude": 52.3480484,
          "longitude": 4.7540733
        },
        {
          "latitude": 52.3481396,
          "longitude": 4.7540143
        },
        {
          "latitude": 52.34833,
          "longitude": 4.7538775
        },
        {
          "latitude": 52.3484185,
          "longitude": 4.7538158
        },
        {
          "latitude": 52.3492259,
          "longitude": 4.7530809
        },
        {
          "latitude": 52.3496068,
          "longitude": 4.7526705
        },
        {
          "latitude": 52.3500708,
          "longitude": 4.7521475
        },
        {
          "latitude": 52.3504624,
          "longitude": 4.7516486
        },
        {
          "latitude": 52.3515245,
          "longitude": 4.7501895
        },
        {
          "latitude": 52.3517498,
          "longitude": 4.7497925
        },
        {
          "latitude": 52.3521468,
          "longitude": 4.749063
        },
        {
          "latitude": 52.3530829,
          "longitude": 4.7473115
        },
        {
          "latitude": 52.35374,
          "longitude": 4.7460938
        },
        {
          "latitude": 52.3543704,
          "longitude": 4.7449243
        },
        {
          "latitude": 52.3544481,
          "longitude": 4.7447768
        },
        {
          "latitude": 52.3555049,
          "longitude": 4.7428402
        },
        {
          "latitude": 52.3555881,
          "longitude": 4.7426713
        },
        {
          "latitude": 52.3568138,
          "longitude": 4.7403941
        },
        {
          "latitude": 52.3569292,
          "longitude": 4.7401768
        },
        {
          "latitude": 52.3570231,
          "longitude": 4.7400078
        },
        {
          "latitude": 52.3571303,
          "longitude": 4.7398093
        },
        {
          "latitude": 52.3603705,
          "longitude": 4.7337797
        },
        {
          "latitude": 52.3608398,
          "longitude": 4.7329268
        },
        {
          "latitude": 52.360931,
          "longitude": 4.7327551
        },
        {
          "latitude": 52.3610598,
          "longitude": 4.7325164
        },
        {
          "latitude": 52.3612234,
          "longitude": 4.7322133
        },
        {
          "latitude": 52.3634201,
          "longitude": 4.7281176
        },
        {
          "latitude": 52.3639995,
          "longitude": 4.7270313
        },
        {
          "latitude": 52.3644286,
          "longitude": 4.7262561
        },
        {
          "latitude": 52.3655713,
          "longitude": 4.7241211
        },
        {
          "latitude": 52.366915,
          "longitude": 4.7216052
        },
        {
          "latitude": 52.3677948,
          "longitude": 4.7199824
        },
        {
          "latitude": 52.3693532,
          "longitude": 4.7170535
        },
        {
          "latitude": 52.3696992,
          "longitude": 4.7165734
        },
        {
          "latitude": 52.3700613,
          "longitude": 4.7160181
        },
        {
          "latitude": 52.3702544,
          "longitude": 4.7157553
        },
        {
          "latitude": 52.3706487,
          "longitude": 4.7152644
        },
        {
          "latitude": 52.3711449,
          "longitude": 4.71472
        },
        {
          "latitude": 52.3715633,
          "longitude": 4.7142506
        },
        {
          "latitude": 52.3717511,
          "longitude": 4.7139823
        },
        {
          "latitude": 52.3718315,
          "longitude": 4.7138456
        },
        {
          "latitude": 52.3720247,
          "longitude": 4.7134003
        },
        {
          "latitude": 52.3721239,
          "longitude": 4.7130811
        },
        {
          "latitude": 52.3722231,
          "longitude": 4.7125795
        },
        {
          "latitude": 52.3722553,
          "longitude": 4.7122872
        },
        {
          "latitude": 52.3722634,
          "longitude": 4.7122201
        },
        {
          "latitude": 52.3722687,
          "longitude": 4.7120512
        },
        {
          "latitude": 52.3722687,
          "longitude": 4.7116086
        },
        {
          "latitude": 52.37225,
          "longitude": 4.7112948
        },
        {
          "latitude": 52.3721722,
          "longitude": 4.7089049
        },
        {
          "latitude": 52.3721588,
          "longitude": 4.7086582
        },
        {
          "latitude": 52.3720837,
          "longitude": 4.7073573
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
          "latitude": 52.2378069,
          "longitude": 4.6511248
        },
        {
          "latitude": 52.2371095,
          "longitude": 4.6508083
        },
        {
          "latitude": 52.2362056,
          "longitude": 4.6503684
        },
        {
          "latitude": 52.2358918,
          "longitude": 4.6501887
        },
        {
          "latitude": 52.2357497,
          "longitude": 4.6501055
        },
        {
          "latitude": 52.2356451,
          "longitude": 4.6500412
        },
        {
          "latitude": 52.2354707,
          "longitude": 4.6499124
        },
        {
          "latitude": 52.2353205,
          "longitude": 4.6498051
        },
        {
          "latitude": 52.2346875,
          "longitude": 4.6493223
        },
        {
          "latitude": 52.2344354,
          "longitude": 4.6490917
        },
        {
          "latitude": 52.2342932,
          "longitude": 4.6489495
        },
        {
          "latitude": 52.2340652,
          "longitude": 4.648743
        },
        {
          "latitude": 52.2333866,
          "longitude": 4.6479973
        },
        {
          "latitude": 52.2333062,
          "longitude": 4.6478981
        },
        {
          "latitude": 52.2331104,
          "longitude": 4.6476513
        },
        {
          "latitude": 52.2325525,
          "longitude": 4.6468493
        },
        {
          "latitude": 52.2324827,
          "longitude": 4.6467474
        },
        {
          "latitude": 52.2318578,
          "longitude": 4.6458542
        },
        {
          "latitude": 52.2317237,
          "longitude": 4.6456611
        },
        {
          "latitude": 52.2316808,
          "longitude": 4.6455994
        },
        {
          "latitude": 52.2316056,
          "longitude": 4.6454948
        },
        {
          "latitude": 52.2308278,
          "longitude": 4.6444783
        },
        {
          "latitude": 52.2303316,
          "longitude": 4.6437943
        },
        {
          "latitude": 52.2302592,
          "longitude": 4.6437326
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
          "latitude": 52.2037295,
          "longitude": 4.6175838
        },
        {
          "latitude": 52.203311,
          "longitude": 4.61716
        },
        {
          "latitude": 52.2020021,
          "longitude": 4.615902
        },
        {
          "latitude": 52.2017044,
          "longitude": 4.6156338
        },
        {
          "latitude": 52.2015703,
          "longitude": 4.6155077
        },
        {
          "latitude": 52.2007844,
          "longitude": 4.6147701
        },
        {
          "latitude": 52.2002184,
          "longitude": 4.6142578
        },
        {
          "latitude": 52.2000468,
          "longitude": 4.6140996
        },
        {
          "latitude": 52.1999234,
          "longitude": 4.6139896
        },
        {
          "latitude": 52.1996203,
          "longitude": 4.6137133
        },
        {
          "latitude": 52.1996632,
          "longitude": 4.6135953
        },
        {
          "latitude": 52.1997088,
          "longitude": 4.6134692
        },
        {
          "latitude": 52.1998939,
          "longitude": 4.6129596
        },
        {
          "latitude": 52.2000119,
          "longitude": 4.6126512
        },
        {
          "latitude": 52.2001112,
          "longitude": 4.612399
        },
        {
          "latitude": 52.2001621,
          "longitude": 4.612399
        },
        {
          "latitude": 52.2001836,
          "longitude": 4.6123883
        },
        {
          "latitude": 52.200205,
          "longitude": 4.6123749
        },
        {
          "latitude": 52.2002372,
          "longitude": 4.6123481
        },
        {
          "latitude": 52.2002801,
          "longitude": 4.6122676
        },
        {
          "latitude": 52.2002989,
          "longitude": 4.6121362
        },
        {
          "latitude": 52.2002801,
          "longitude": 4.6119994
        },
        {
          "latitude": 52.2002399,
          "longitude": 4.6119136
        },
        {
          "latitude": 52.2002104,
          "longitude": 4.6118787
        },
        {
          "latitude": 52.2001728,
          "longitude": 4.6118438
        },
        {
          "latitude": 52.2001192,
          "longitude": 4.6118277
        },
        {
          "latitude": 52.200087,
          "longitude": 4.6118277
        },
        {
          "latitude": 52.1999905,
          "longitude": 4.6118438
        },
        {
          "latitude": 52.1999314,
          "longitude": 4.6118358
        },
        {
          "latitude": 52.1997303,
          "longitude": 4.6116427
        },
        {
          "latitude": 52.1994755,
          "longitude": 4.6114013
        },
        {
          "latitude": 52.1993092,
          "longitude": 4.6112269
        },
        {
          "latitude": 52.199285,
          "longitude": 4.6111974
        },
        {
          "latitude": 52.1992636,
          "longitude": 4.6111625
        },
        {
          "latitude": 52.1992475,
          "longitude": 4.611125
        },
        {
          "latitude": 52.1992314,
          "longitude": 4.6110794
        },
        {
          "latitude": 52.1992126,
          "longitude": 4.6109989
        },
        {
          "latitude": 52.1991912,
          "longitude": 4.6109265
        },
        {
          "latitude": 52.1991751,
          "longitude": 4.610889
        },
        {
          "latitude": 52.1991509,
          "longitude": 4.6108621
        },
        {
          "latitude": 52.1991241,
          "longitude": 4.6108459999999996
        },
        {
          "latitude": 52.1990731,
          "longitude": 4.6108299
        },
        {
          "latitude": 52.1990409,
          "longitude": 4.6108299
        },
        {
          "latitude": 52.1990168,
          "longitude": 4.6108353
        },
        {
          "latitude": 52.1989846,
          "longitude": 4.6108514
        },
        {
          "latitude": 52.1989498,
          "longitude": 4.6108916
        },
        {
          "latitude": 52.1989337,
          "longitude": 4.6109185
        },
        {
          "latitude": 52.1989042,
          "longitude": 4.6109962
        },
        {
          "latitude": 52.1988934,
          "longitude": 4.6110472
        },
        {
          "latitude": 52.1988907,
          "longitude": 4.611125
        },
        {
          "latitude": 52.1989015,
          "longitude": 4.6112269
        },
        {
          "latitude": 52.1988344,
          "longitude": 4.6113288
        },
        {
          "latitude": 52.1987888,
          "longitude": 4.6113798
        },
        {
          "latitude": 52.1986976,
          "longitude": 4.6114361
        },
        {
          "latitude": 52.1986198,
          "longitude": 4.6114522
        },
        {
          "latitude": 52.1985099,
          "longitude": 4.6114549
        },
        {
          "latitude": 52.1984509,
          "longitude": 4.6114442
        },
        {
          "latitude": 52.1982819,
          "longitude": 4.6113583
        },
        {
          "latitude": 52.1981263,
          "longitude": 4.611243
        },
        {
          "latitude": 52.1976596,
          "longitude": 4.6107951
        },
        {
          "latitude": 52.197606,
          "longitude": 4.6107334
        },
        {
          "latitude": 52.1972921,
          "longitude": 4.610433
        },
        {
          "latitude": 52.195833,
          "longitude": 4.6090838
        },
        {
          "latitude": 52.1957847,
          "longitude": 4.609049
        },
        {
          "latitude": 52.1937248,
          "longitude": 4.6071446
        },
        {
          "latitude": 52.1934995,
          "longitude": 4.6069327
        },
        {
          "latitude": 52.1933654,
          "longitude": 4.6068093
        },
        {
          "latitude": 52.1922657,
          "longitude": 4.6057874
        },
        {
          "latitude": 52.1914047,
          "longitude": 4.6049559
        },
        {
          "latitude": 52.1902111,
          "longitude": 4.6037436
        },
        {
          "latitude": 52.190026,
          "longitude": 4.6035451
        },
        {
          "latitude": 52.1898866,
          "longitude": 4.6033734
        },
        {
          "latitude": 52.1895781,
          "longitude": 4.6028987
        },
        {
          "latitude": 52.1894923,
          "longitude": 4.6027404
        },
        {
          "latitude": 52.1893448,
          "longitude": 4.6024185
        },
        {
          "latitude": 52.1892241,
          "longitude": 4.6021047
        },
        {
          "latitude": 52.1890309,
          "longitude": 4.6013725
        },
        {
          "latitude": 52.1889344,
          "longitude": 4.6007475
        },
        {
          "latitude": 52.1888593,
          "longitude": 4.6000662
        },
        {
          "latitude": 52.188701,
          "longitude": 4.5988539
        },
        {
          "latitude": 52.1885508,
          "longitude": 4.5975879
        },
        {
          "latitude": 52.188524,
          "longitude": 4.5975423
        },
        {
          "latitude": 52.1884409,
          "longitude": 4.5967752
        },
        {
          "latitude": 52.1883041,
          "longitude": 4.5956808
        },
        {
          "latitude": 52.1882075,
          "longitude": 4.5948359
        },
        {
          "latitude": 52.1879688,
          "longitude": 4.5929852
        },
        {
          "latitude": 52.1878615,
          "longitude": 4.5923764
        },
        {
          "latitude": 52.18784,
          "longitude": 4.5922852
        },
        {
          "latitude": 52.1876791,
          "longitude": 4.5915529
        },
        {
          "latitude": 52.1874699,
          "longitude": 4.5907268
        },
        {
          "latitude": 52.1874779,
          "longitude": 4.5906731
        },
        {
          "latitude": 52.1874163,
          "longitude": 4.5903996
        },
        {
          "latitude": 52.1873036,
          "longitude": 4.5899624
        },
        {
          "latitude": 52.1870407,
          "longitude": 4.5889378
        },
        {
          "latitude": 52.1869549,
          "longitude": 4.5885971
        },
        {
          "latitude": 52.1867591,
          "longitude": 4.5879239
        },
        {
          "latitude": 52.1866357,
          "longitude": 4.5875216
        },
        {
          "latitude": 52.1866196,
          "longitude": 4.5874625
        },
        {
          "latitude": 52.1866009,
          "longitude": 4.5874035
        },
        {
          "latitude": 52.1865687,
          "longitude": 4.5872936
        },
        {
          "latitude": 52.1865016,
          "longitude": 4.5870736
        },
        {
          "latitude": 52.1863702,
          "longitude": 4.586623
        },
        {
          "latitude": 52.1863434,
          "longitude": 4.5865962
        },
        {
          "latitude": 52.1863085,
          "longitude": 4.5864728
        },
        {
          "latitude": 52.1861959,
          "longitude": 4.5860544
        },
        {
          "latitude": 52.1860993,
          "longitude": 4.5856199
        },
        {
          "latitude": 52.1859652,
          "longitude": 4.5848769
        },
        {
          "latitude": 52.1851283,
          "longitude": 4.5785174
        },
        {
          "latitude": 52.1850586,
          "longitude": 4.5780909
        },
        {
          "latitude": 52.1849513,
          "longitude": 4.5774606
        },
        {
          "latitude": 52.184836,
          "longitude": 4.5767954
        },
        {
          "latitude": 52.1838355,
          "longitude": 4.571667
        },
        {
          "latitude": 52.1838033,
          "longitude": 4.5715195
        },
        {
          "latitude": 52.1835968,
          "longitude": 4.5705754
        },
        {
          "latitude": 52.183519,
          "longitude": 4.5703125
        },
        {
          "latitude": 52.1834037,
          "longitude": 4.5699289
        },
        {
          "latitude": 52.1832642,
          "longitude": 4.5695373
        },
        {
          "latitude": 52.1829906,
          "longitude": 4.5688641
        },
        {
          "latitude": 52.1798229,
          "longitude": 4.5619574
        },
        {
          "latitude": 52.1797237,
          "longitude": 4.5617402
        },
        {
          "latitude": 52.1793509,
          "longitude": 4.5608658
        },
        {
          "latitude": 52.179198,
          "longitude": 4.5604715
        },
        {
          "latitude": 52.1790129,
          "longitude": 4.5599189
        },
        {
          "latitude": 52.1789512,
          "longitude": 4.5596883
        },
        {
          "latitude": 52.1788386,
          "longitude": 4.5591947
        },
        {
          "latitude": 52.1787152,
          "longitude": 4.5585188
        },
        {
          "latitude": 52.1782699,
          "longitude": 4.5555872
        },
        {
          "latitude": 52.1782485,
          "longitude": 4.5554531
        },
        {
          "latitude": 52.1781465,
          "longitude": 4.5548308
        },
        {
          "latitude": 52.1779776,
          "longitude": 4.5539564
        },
        {
          "latitude": 52.1775645,
          "longitude": 4.5520788
        },
        {
          "latitude": 52.1774063,
          "longitude": 4.5511856999999996
        },
        {
          "latitude": 52.1770549,
          "longitude": 4.5489112
        },
        {
          "latitude": 52.1770307,
          "longitude": 4.548769
        },
        {
          "latitude": 52.1769664,
          "longitude": 4.5483398
        },
        {
          "latitude": 52.1762288,
          "longitude": 4.543477
        },
        {
          "latitude": 52.1759364,
          "longitude": 4.5418006
        },
        {
          "latitude": 52.1759525,
          "longitude": 4.5417175
        },
        {
          "latitude": 52.1757272,
          "longitude": 4.5404756
        },
        {
          "latitude": 52.1756601,
          "longitude": 4.5400384
        },
        {
          "latitude": 52.175644,
          "longitude": 4.5399177
        },
        {
          "latitude": 52.1756145,
          "longitude": 4.5397514
        },
        {
          "latitude": 52.1756011,
          "longitude": 4.5396549
        },
        {
          "latitude": 52.1755716,
          "longitude": 4.5395368
        },
        {
          "latitude": 52.1756119,
          "longitude": 4.5394698
        },
        {
          "latitude": 52.1756387,
          "longitude": 4.5394081
        },
        {
          "latitude": 52.1756521,
          "longitude": 4.539333
        },
        {
          "latitude": 52.1756521,
          "longitude": 4.5392793
        },
        {
          "latitude": 52.1756494,
          "longitude": 4.5392203
        },
        {
          "latitude": 52.1756387,
          "longitude": 4.5391721
        },
        {
          "latitude": 52.1756172,
          "longitude": 4.539105
        },
        {
          "latitude": 52.1756011,
          "longitude": 4.5390674
        },
        {
          "latitude": 52.1755689,
          "longitude": 4.5390245
        },
        {
          "latitude": 52.1755368,
          "longitude": 4.5390058
        },
        {
          "latitude": 52.1754965,
          "longitude": 4.538995
        },
        {
          "latitude": 52.175459,
          "longitude": 4.538995
        },
        {
          "latitude": 52.1754107,
          "longitude": 4.5390111
        },
        {
          "latitude": 52.1753758,
          "longitude": 4.5390353
        },
        {
          "latitude": 52.175357,
          "longitude": 4.5390514
        },
        {
          "latitude": 52.175341,
          "longitude": 4.5390755
        },
        {
          "latitude": 52.1753195,
          "longitude": 4.539113
        },
        {
          "latitude": 52.1752927,
          "longitude": 4.5391747
        },
        {
          "latitude": 52.1752766,
          "longitude": 4.5392525
        },
        {
          "latitude": 52.1752739,
          "longitude": 4.5393035
        },
        {
          "latitude": 52.1751907,
          "longitude": 4.5393625
        },
        {
          "latitude": 52.1750808,
          "longitude": 4.539443
        },
        {
          "latitude": 52.1747482,
          "longitude": 4.5396817
        },
        {
          "latitude": 52.1746945,
          "longitude": 4.5397246
        },
        {
          "latitude": 52.174142,
          "longitude": 4.5401725
        },
        {
          "latitude": 52.1739194,
          "longitude": 4.5403844
        },
        {
          "latitude": 52.1731603,
          "longitude": 4.5410952
        },
        {
          "latitude": 52.1731415,
          "longitude": 4.5411462
        },
        {
          "latitude": 52.1720901,
          "longitude": 4.5419133
        },
        {
          "latitude": 52.1719211,
          "longitude": 4.5420527
        },
        {
          "latitude": 52.1715617,
          "longitude": 4.5423424
        },
        {
          "latitude": 52.1709743,
          "longitude": 4.5428601
        },
        {
          "latitude": 52.1693087,
          "longitude": 4.5444426
        },
        {
          "latitude": 52.1652049,
          "longitude": 4.5483398
        },
        {
          "latitude": 52.164183,
          "longitude": 4.5493081
        },
        {
          "latitude": 52.1638933,
          "longitude": 4.5495844
        },
        {
          "latitude": 52.1638021,
          "longitude": 4.5496675
        },
        {
          "latitude": 52.1637484,
          "longitude": 4.5496675
        },
        {
          "latitude": 52.1635553,
          "longitude": 4.5498848
        },
        {
          "latitude": 52.1632335,
          "longitude": 4.5502523
        },
        {
          "latitude": 52.163153,
          "longitude": 4.5503595
        },
        {
          "latitude": 52.1630859,
          "longitude": 4.5504776
        },
        {
          "latitude": 52.1630028,
          "longitude": 4.5506197
        },
        {
          "latitude": 52.1628419,
          "longitude": 4.5509309
        },
        {
          "latitude": 52.1627989,
          "longitude": 4.5509148
        },
        {
          "latitude": 52.1627533,
          "longitude": 4.5509067
        },
        {
          "latitude": 52.1626997,
          "longitude": 4.5509174
        },
        {
          "latitude": 52.1626568,
          "longitude": 4.550947
        },
        {
          "latitude": 52.1626192,
          "longitude": 4.5509845
        },
        {
          "latitude": 52.1625897,
          "longitude": 4.5510301
        },
        {
          "latitude": 52.1625683,
          "longitude": 4.5510757
        },
        {
          "latitude": 52.1625549,
          "longitude": 4.5511293
        },
        {
          "latitude": 52.1625441,
          "longitude": 4.5511991
        },
        {
          "latitude": 52.1625414,
          "longitude": 4.5512635
        },
        {
          "latitude": 52.1625602,
          "longitude": 4.5513761
        },
        {
          "latitude": 52.162579,
          "longitude": 4.5514351
        },
        {
          "latitude": 52.1626166,
          "longitude": 4.5515102
        },
        {
          "latitude": 52.1626675,
          "longitude": 4.5515665
        },
        {
          "latitude": 52.1627131,
          "longitude": 4.5515853
        },
        {
          "latitude": 52.1628311,
          "longitude": 4.5522183
        },
        {
          "latitude": 52.1628714,
          "longitude": 4.5524356
        },
        {
          "latitude": 52.162917,
          "longitude": 4.5526609
        },
        {
          "latitude": 52.1630859,
          "longitude": 4.55331
        },
        {
          "latitude": 52.163102,
          "longitude": 4.553377
        },
        {
          "latitude": 52.1633005,
          "longitude": 4.553951
        },
        {
          "latitude": 52.1634614,
          "longitude": 4.5543453
        },
        {
          "latitude": 52.1637806,
          "longitude": 4.5550078
        },
        {
          "latitude": 52.1638477,
          "longitude": 4.5551607
        },
        {
          "latitude": 52.1640944,
          "longitude": 4.5557749
        },
        {
          "latitude": 52.1641427,
          "longitude": 4.5559332
        },
        {
          "latitude": 52.1641615,
          "longitude": 4.5559949
        },
        {
          "latitude": 52.164191,
          "longitude": 4.556137
        },
        {
          "latitude": 52.1641991,
          "longitude": 4.5562389
        },
        {
          "latitude": 52.1641991,
          "longitude": 4.5564669
        },
        {
          "latitude": 52.1641481,
          "longitude": 4.5564857
        },
        {
          "latitude": 52.1641052,
          "longitude": 4.5565259
        },
        {
          "latitude": 52.1640703,
          "longitude": 4.5565823
        },
        {
          "latitude": 52.1640435,
          "longitude": 4.556652
        },
        {
          "latitude": 52.1640301,
          "longitude": 4.5567191
        },
        {
          "latitude": 52.163955,
          "longitude": 4.5567191
        },
        {
          "latitude": 52.1638423,
          "longitude": 4.5566976
        },
        {
          "latitude": 52.163727,
          "longitude": 4.5566654
        },
        {
          "latitude": 52.1636009,
          "longitude": 4.5566198
        },
        {
          "latitude": 52.1633998,
          "longitude": 4.5565259
        },
        {
          "latitude": 52.1630859,
          "longitude": 4.5563355
        },
        {
          "latitude": 52.1630377,
          "longitude": 4.5563087
        },
        {
          "latitude": 52.1626273,
          "longitude": 4.5559654
        },
        {
          "latitude": 52.1624583,
          "longitude": 4.5557776
        },
        {
          "latitude": 52.1620747,
          "longitude": 4.555276
        },
        {
          "latitude": 52.1615866,
          "longitude": 4.5545357
        },
        {
          "latitude": 52.1609536,
          "longitude": 4.5534763
        },
        {
          "latitude": 52.1605164,
          "longitude": 4.552744
        },
        {
          "latitude": 52.1597412,
          "longitude": 4.5513681
        },
        {
          "latitude": 52.1595106,
          "longitude": 4.550947
        },
        {
          "latitude": 52.1590412,
          "longitude": 4.5501316
        },
        {
          "latitude": 52.1589124,
          "longitude": 4.5498741
        },
        {
          "latitude": 52.1587381,
          "longitude": 4.5495307
        },
        {
          "latitude": 52.1583948,
          "longitude": 4.5488307
        },
        {
          "latitude": 52.1581587,
          "longitude": 4.5483398
        },
        {
          "latitude": 52.1581158,
          "longitude": 4.5482486
        },
        {
          "latitude": 52.1578074,
          "longitude": 4.5476317
        },
        {
          "latitude": 52.1562195,
          "longitude": 4.5442736
        },
        {
          "latitude": 52.155726,
          "longitude": 4.543308
        },
        {
          "latitude": 52.1555355,
          "longitude": 4.5430371
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
      "endPointIndex": 10,
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
      "startPointIndex": 0,
      "endPointIndex": 10,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 30,
      "startPointIndex": 10,
      "endPointIndex": 15,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 50,
      "startPointIndex": 15,
      "endPointIndex": 22,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 30,
      "startPointIndex": 22,
      "endPointIndex": 62,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 0,
      "endPointIndex": 128,
      "sectionType": "LOW_EMISSION_ZONE"
    },
    {
      "startPointIndex": 62,
      "endPointIndex": 134,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "nld-connector",
          "shieldContent": "s106"
        }
      ]
    },
    {
      "maxSpeedLimitInKmh": 50,
      "startPointIndex": 62,
      "endPointIndex": 136,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 0,
      "endPointIndex": 171,
      "sectionType": "URBAN"
    },
    {
      "startPointIndex": 145,
      "endPointIndex": 173,
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
      "startPointIndex": 136,
      "endPointIndex": 191,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 217,
      "endPointIndex": 253,
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
      "startPointIndex": 299,
      "endPointIndex": 372,
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
      "startPointIndex": 191,
      "endPointIndex": 376,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 372,
      "endPointIndex": 401,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "nld-primary",
          "shieldContent": "N205"
        }
      ]
    },
    {
      "startPointIndex": 145,
      "endPointIndex": 401,
      "sectionType": "MOTORWAY"
    },
    {
      "maxSpeedLimitInKmh": 70,
      "startPointIndex": 376,
      "endPointIndex": 440,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 100,
      "startPointIndex": 440,
      "endPointIndex": 478,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 70,
      "startPointIndex": 478,
      "endPointIndex": 493,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 100,
      "startPointIndex": 493,
      "endPointIndex": 516,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 70,
      "startPointIndex": 516,
      "endPointIndex": 528,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 100,
      "startPointIndex": 528,
      "endPointIndex": 566,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 545,
      "endPointIndex": 570,
      "sectionType": "URBAN"
    },
    {
      "maxSpeedLimitInKmh": 70,
      "startPointIndex": 566,
      "endPointIndex": 576,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 425,
      "endPointIndex": 663,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "nld-primary",
          "shieldContent": "N205"
        }
      ]
    },
    {
      "startPointIndex": 663,
      "endPointIndex": 737,
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
      "startPointIndex": 576,
      "endPointIndex": 743,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 774,
      "endPointIndex": 812,
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
      "startPointIndex": 774,
      "endPointIndex": 812,
      "sectionType": "MOTORWAY"
    },
    {
      "maxSpeedLimitInKmh": 100,
      "startPointIndex": 743,
      "endPointIndex": 817,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 50,
      "startPointIndex": 817,
      "endPointIndex": 822,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 909,
      "endPointIndex": 917,
      "sectionType": "URBAN"
    },
    {
      "maxSpeedLimitInKmh": 80,
      "startPointIndex": 822,
      "endPointIndex": 937,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 50,
      "startPointIndex": 937,
      "endPointIndex": 949,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 80,
      "startPointIndex": 949,
      "endPointIndex": 956,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 822,
      "endPointIndex": 976,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "nld-primary",
          "shieldContent": "N445"
        }
      ]
    },
    {
      "maxSpeedLimitInKmh": 80,
      "startPointIndex": 976,
      "endPointIndex": 1030,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 976,
      "endPointIndex": 1035,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "nld-primary",
          "shieldContent": "N446"
        }
      ]
    },
    {
      "startPointIndex": 1078,
      "endPointIndex": 1086,
      "sectionType": "URBAN"
    },
    {
      "startPointIndex": 1077,
      "endPointIndex": 1105,
      "sectionType": "TUNNEL"
    },
    {
      "startPointIndex": 1061,
      "endPointIndex": 1206,
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
      "startPointIndex": 1035,
      "endPointIndex": 1232,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 70,
      "startPointIndex": 1232,
      "endPointIndex": 1239,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 100,
      "startPointIndex": 1239,
      "endPointIndex": 1258,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 1275,
      "endPointIndex": 1289,
      "sectionType": "URBAN"
    },
    {
      "maxSpeedLimitInKmh": 80,
      "startPointIndex": 1258,
      "endPointIndex": 1309,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 1061,
      "endPointIndex": 1321,
      "sectionType": "MOTORWAY"
    },
    {
      "startPointIndex": 1267,
      "endPointIndex": 1321,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "nld-highway",
          "shieldContent": "A12"
        }
      ]
    },
    {
      "startPointIndex": 1323,
      "endPointIndex": 1325,
      "sectionType": "TUNNEL"
    },
    {
      "maxSpeedLimitInKmh": 70,
      "startPointIndex": 1309,
      "endPointIndex": 1329,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 1362,
      "endPointIndex": 1373,
      "sectionType": "TUNNEL"
    },
    {
      "startPointIndex": 1368,
      "endPointIndex": 1378,
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
      "startPointIndex": 1329,
      "endPointIndex": 1408,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 0,
      "endPointIndex": 1408,
      "sectionType": "COUNTRY",
      "countryCode": "NLD"
    },
    {
      "startPointIndex": 1379,
      "endPointIndex": 1408,
      "sectionType": "LOW_EMISSION_ZONE"
    },
    {
      "startPointIndex": 0,
      "endPointIndex": 1408,
      "sectionType": "TRAVEL_MODE",
      "travelMode": "car"
    },
    {
      "startPointIndex": 1315,
      "endPointIndex": 1408,
      "sectionType": "URBAN"
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
      "startPointIndex": 62,
      "endPointIndex": 63,
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
      "startPointIndex": 63,
      "endPointIndex": 64,
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
        "DOUBLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 64,
      "endPointIndex": 65,
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
      "startPointIndex": 65,
      "endPointIndex": 66,
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
      "startPointIndex": 66,
      "endPointIndex": 67,
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
      "startPointIndex": 67,
      "endPointIndex": 71,
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
      "startPointIndex": 71,
      "endPointIndex": 72,
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
      "startPointIndex": 72,
      "endPointIndex": 73,
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
      "startPointIndex": 73,
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
        "LONG_DASHED",
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
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
        }
      ],
      "laneSeparators": [
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
            "SLIGHT_RIGHT"
          ],
          "follow": "SLIGHT_RIGHT"
        },
        {
          "directions": [
            "SLIGHT_RIGHT",
            "RIGHT"
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
      "startPointIndex": 76,
      "endPointIndex": 77,
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
      "startPointIndex": 77,
      "endPointIndex": 80,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 80,
      "endPointIndex": 80,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 80,
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
        },
        {
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 91,
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
      "startPointIndex": 94,
      "endPointIndex": 94,
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
      "startPointIndex": 95,
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
      "startPointIndex": 97,
      "endPointIndex": 102,
      "sectionType": "LANES"
    },
    {
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
      "startPointIndex": 102,
      "endPointIndex": 104,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 104,
      "endPointIndex": 104,
      "sectionType": "LANES"
    },
    {
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
      "startPointIndex": 104,
      "endPointIndex": 105,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 105,
      "endPointIndex": 106,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 106,
      "endPointIndex": 107,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "properties": [],
      "startPointIndex": 107,
      "endPointIndex": 108,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
        "SINGLE_SOLID",
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
            "LEFT_U_TURN",
            "SHARP_LEFT",
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
        "DOUBLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 109,
      "endPointIndex": 110,
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
            "SHARP_LEFT"
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
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 110,
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
      "endPointIndex": 112,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 112,
      "endPointIndex": 113,
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
      "startPointIndex": 113,
      "endPointIndex": 114,
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
      "startPointIndex": 114,
      "endPointIndex": 120,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SHARP_LEFT",
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
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 122,
      "endPointIndex": 123,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SHARP_LEFT",
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
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 123,
      "endPointIndex": 124,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SHARP_LEFT",
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
        "SHORT_DASHED",
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
            "SHARP_LEFT",
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
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 125,
      "endPointIndex": 126,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SHARP_LEFT",
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
        "LONG_DASHED",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 126,
      "endPointIndex": 128,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "SHARP_LEFT",
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
      "startPointIndex": 128,
      "endPointIndex": 128,
      "sectionType": "LANES"
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
            "SHARP_LEFT"
          ],
          "follow": "SHARP_LEFT"
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
      "startPointIndex": 128,
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
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SHORT_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 131,
      "endPointIndex": 133,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT_U_TURN",
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
      "startPointIndex": 133,
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
          "directions": []
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
        "SINGLE_SOLID",
        "LONG_DASHED",
        "DOUBLE_SOLID",
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
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "DOUBLE_SOLID",
        "SINGLE_SOLID",
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
            "LEFT_U_TURN"
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
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 136,
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
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 136,
      "endPointIndex": 137,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
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
      "startPointIndex": 137,
      "endPointIndex": 139,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
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
      "startPointIndex": 139,
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
      "startPointIndex": 147,
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
      "startPointIndex": 148,
      "endPointIndex": 149,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 149,
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
      "startPointIndex": 150,
      "endPointIndex": 153,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 153,
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
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 155,
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
      "startPointIndex": 156,
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
      "startPointIndex": 158,
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
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 161,
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
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 162,
      "endPointIndex": 164,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 164,
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
      "startPointIndex": 165,
      "endPointIndex": 167,
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
      "startPointIndex": 167,
      "endPointIndex": 168,
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
      "startPointIndex": 168,
      "endPointIndex": 169,
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
      "startPointIndex": 169,
      "endPointIndex": 170,
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
      "startPointIndex": 170,
      "endPointIndex": 171,
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
      "startPointIndex": 171,
      "endPointIndex": 172,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 173,
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
        "LONG_DASHED",
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
        },
        {
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
        },
        {
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
      "startPointIndex": 177,
      "endPointIndex": 182,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 197,
      "endPointIndex": 199,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 199,
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
        },
        {
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
      "startPointIndex": 204,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 207,
      "endPointIndex": 209,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 209,
      "endPointIndex": 212,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 212,
      "endPointIndex": 216,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 216,
      "endPointIndex": 217,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 217,
      "endPointIndex": 218,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 218,
      "endPointIndex": 219,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 219,
      "endPointIndex": 220,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 220,
      "endPointIndex": 221,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 221,
      "endPointIndex": 222,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 222,
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
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 223,
      "endPointIndex": 230,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 232,
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
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 234,
      "endPointIndex": 239,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 239,
      "endPointIndex": 241,
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
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 243,
      "endPointIndex": 243,
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
      "properties": [],
      "startPointIndex": 243,
      "endPointIndex": 245,
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
      "properties": [],
      "startPointIndex": 247,
      "endPointIndex": 249,
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
      "properties": [],
      "startPointIndex": 249,
      "endPointIndex": 250,
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
      "properties": [],
      "startPointIndex": 250,
      "endPointIndex": 251,
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
      "properties": [],
      "startPointIndex": 251,
      "endPointIndex": 251,
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
      "properties": [],
      "startPointIndex": 251,
      "endPointIndex": 252,
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
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 252,
      "endPointIndex": 253,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 253,
      "endPointIndex": 255,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 255,
      "endPointIndex": 256,
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
      "properties": [],
      "startPointIndex": 256,
      "endPointIndex": 258,
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
      "startPointIndex": 258,
      "endPointIndex": 259,
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
      "startPointIndex": 259,
      "endPointIndex": 261,
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
      "startPointIndex": 261,
      "endPointIndex": 262,
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
      "startPointIndex": 262,
      "endPointIndex": 264,
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
      "startPointIndex": 264,
      "endPointIndex": 264,
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
      "startPointIndex": 264,
      "endPointIndex": 266,
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
      "startPointIndex": 266,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 266,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 268,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 274,
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
      "startPointIndex": 279,
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
      "startPointIndex": 281,
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
      "startPointIndex": 282,
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
        },
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
      "startPointIndex": 284,
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
        },
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
      "startPointIndex": 287,
      "endPointIndex": 290,
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
      "startPointIndex": 290,
      "endPointIndex": 299,
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
      "properties": [],
      "startPointIndex": 366,
      "endPointIndex": 367,
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
      "properties": [],
      "startPointIndex": 367,
      "endPointIndex": 369,
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
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 369,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 372,
      "endPointIndex": 375,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 375,
      "endPointIndex": 376,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 376,
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
      "endPointIndex": 390,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 390,
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
      "startPointIndex": 392,
      "endPointIndex": 394,
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
      "startPointIndex": 394,
      "endPointIndex": 395,
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
      "startPointIndex": 395,
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
      "startPointIndex": 397,
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
      "startPointIndex": 398,
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
      "startPointIndex": 400,
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
      "startPointIndex": 401,
      "endPointIndex": 401,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 401,
      "endPointIndex": 405,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "endPointIndex": 417,
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
      "startPointIndex": 655,
      "endPointIndex": 657,
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
      "startPointIndex": 657,
      "endPointIndex": 658,
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
      "startPointIndex": 658,
      "endPointIndex": 658,
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
      "startPointIndex": 659,
      "endPointIndex": 661,
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
      "startPointIndex": 661,
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
        },
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
      "startPointIndex": 663,
      "endPointIndex": 664,
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
      "startPointIndex": 733,
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
      "startPointIndex": 735,
      "endPointIndex": 737,
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
      "startPointIndex": 737,
      "endPointIndex": 737,
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
      "startPointIndex": 737,
      "endPointIndex": 743,
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
      "startPointIndex": 743,
      "endPointIndex": 743,
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
      "properties": [],
      "startPointIndex": 743,
      "endPointIndex": 744,
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
      "properties": [],
      "startPointIndex": 744,
      "endPointIndex": 745,
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
      "properties": [],
      "startPointIndex": 745,
      "endPointIndex": 747,
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
      "startPointIndex": 747,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 749,
      "endPointIndex": 752,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 754,
      "endPointIndex": 755,
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
      "startPointIndex": 755,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 759,
      "endPointIndex": 760,
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
      "startPointIndex": 760,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 763,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 765,
      "endPointIndex": 767,
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
      "startPointIndex": 767,
      "endPointIndex": 769,
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
      "startPointIndex": 769,
      "endPointIndex": 769,
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
      "startPointIndex": 769,
      "endPointIndex": 770,
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
      "startPointIndex": 770,
      "endPointIndex": 771,
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
      "startPointIndex": 771,
      "endPointIndex": 774,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 774,
      "endPointIndex": 776,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 776,
      "endPointIndex": 778,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "DOUBLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 799,
      "endPointIndex": 803,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 803,
      "endPointIndex": 804,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
        "LONG_DASHED",
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "LONG_DASHED",
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
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 811,
      "endPointIndex": 812,
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
      "startPointIndex": 812,
      "endPointIndex": 813,
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
      "startPointIndex": 813,
      "endPointIndex": 814,
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
      "startPointIndex": 814,
      "endPointIndex": 815,
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
      "startPointIndex": 815,
      "endPointIndex": 816,
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
      "startPointIndex": 816,
      "endPointIndex": 817,
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
      "startPointIndex": 817,
      "endPointIndex": 818,
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
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 818,
      "endPointIndex": 819,
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
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 819,
      "endPointIndex": 820,
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
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 821,
      "endPointIndex": 822,
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
      "startPointIndex": 822,
      "endPointIndex": 822,
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
      "startPointIndex": 822,
      "endPointIndex": 823,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 823,
      "endPointIndex": 824,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 824,
      "endPointIndex": 825,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
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
      "startPointIndex": 825,
      "endPointIndex": 826,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 826,
      "endPointIndex": 826,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
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
      "startPointIndex": 826,
      "endPointIndex": 827,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 827,
      "endPointIndex": 827,
      "sectionType": "LANES"
    },
    {
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
      "startPointIndex": 827,
      "endPointIndex": 832,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 832,
      "endPointIndex": 832,
      "sectionType": "LANES"
    },
    {
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
        "DOUBLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 832,
      "endPointIndex": 842,
      "sectionType": "LANES"
    },
    {
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
      "startPointIndex": 842,
      "endPointIndex": 843,
      "sectionType": "LANES"
    },
    {
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
        "DOUBLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 843,
      "endPointIndex": 859,
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
      "startPointIndex": 859,
      "endPointIndex": 863,
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
      "startPointIndex": 863,
      "endPointIndex": 863,
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
      "startPointIndex": 863,
      "endPointIndex": 867,
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
      "startPointIndex": 867,
      "endPointIndex": 878,
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
      "startPointIndex": 949,
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
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 951,
      "endPointIndex": 952,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
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
      "startPointIndex": 952,
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
        "DOUBLE_SOLID",
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
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 954,
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
        "DOUBLE_SOLID",
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
          ],
          "follow": "STRAIGHT"
        },
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
      "startPointIndex": 955,
      "endPointIndex": 956,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 956,
      "endPointIndex": 956,
      "sectionType": "LANES"
    },
    {
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
      "startPointIndex": 956,
      "endPointIndex": 959,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 959,
      "endPointIndex": 964,
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
            "SLIGHT_RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "DOUBLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 964,
      "endPointIndex": 969,
      "sectionType": "LANES"
    },
    {
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
      "startPointIndex": 969,
      "endPointIndex": 973,
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
      "startPointIndex": 973,
      "endPointIndex": 976,
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
      "startPointIndex": 976,
      "endPointIndex": 976,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "LEFT_U_TURN",
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
      "startPointIndex": 976,
      "endPointIndex": 977,
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
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 977,
      "endPointIndex": 977,
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
      "startPointIndex": 977,
      "endPointIndex": 978,
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
      "startPointIndex": 978,
      "endPointIndex": 978,
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
      "startPointIndex": 978,
      "endPointIndex": 979,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
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
      "startPointIndex": 979,
      "endPointIndex": 980,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
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
      "startPointIndex": 980,
      "endPointIndex": 982,
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
      "startPointIndex": 982,
      "endPointIndex": 984,
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
      "startPointIndex": 992,
      "endPointIndex": 994,
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
      "startPointIndex": 994,
      "endPointIndex": 995,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
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
      "startPointIndex": 995,
      "endPointIndex": 996,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
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
      "startPointIndex": 996,
      "endPointIndex": 998,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
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
      "startPointIndex": 998,
      "endPointIndex": 999,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
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
      "startPointIndex": 999,
      "endPointIndex": 1001,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 1001,
      "endPointIndex": 1001,
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
            "SLIGHT_RIGHT"
          ]
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "DOUBLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 1001,
      "endPointIndex": 1005,
      "sectionType": "LANES"
    },
    {
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
      "startPointIndex": 1005,
      "endPointIndex": 1007,
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
        "DOUBLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 1007,
      "endPointIndex": 1015,
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
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 1015,
      "endPointIndex": 1015,
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
      "startPointIndex": 1015,
      "endPointIndex": 1016,
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
      "startPointIndex": 1016,
      "endPointIndex": 1017,
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
      "startPointIndex": 1017,
      "endPointIndex": 1020,
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
      "startPointIndex": 1020,
      "endPointIndex": 1023,
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
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 1027,
      "endPointIndex": 1027,
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
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 1027,
      "endPointIndex": 1027,
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
      "startPointIndex": 1027,
      "endPointIndex": 1030,
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
        }
      ],
      "laneSeparators": [
        "NO_MARKING",
        "NO_MARKING",
        "NO_MARKING"
      ],
      "properties": [],
      "startPointIndex": 1030,
      "endPointIndex": 1030,
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
        "DOUBLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 1030,
      "endPointIndex": 1033,
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
        "DOUBLE_SOLID",
        "SINGLE_SOLID"
      ],
      "properties": [
        "IS_MANEUVER"
      ],
      "startPointIndex": 1033,
      "endPointIndex": 1035,
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
      "startPointIndex": 1035,
      "endPointIndex": 1036,
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
      "startPointIndex": 1036,
      "endPointIndex": 1039,
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
      "startPointIndex": 1039,
      "endPointIndex": 1040,
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
      "startPointIndex": 1040,
      "endPointIndex": 1042,
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
      "startPointIndex": 1042,
      "endPointIndex": 1047,
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
      "startPointIndex": 1040,
      "endPointIndex": 1042,
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
      "startPointIndex": 1042,
      "endPointIndex": 1047,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
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
      "startPointIndex": 1047,
      "endPointIndex": 1048,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
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
      "startPointIndex": 1048,
      "endPointIndex": 1049,
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
      "startPointIndex": 1049,
      "endPointIndex": 1052,
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
      "startPointIndex": 1052,
      "endPointIndex": 1053,
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
      "startPointIndex": 1053,
      "endPointIndex": 1054,
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
      "startPointIndex": 1054,
      "endPointIndex": 1056,
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
      "startPointIndex": 1056,
      "endPointIndex": 1056,
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
      "startPointIndex": 1056,
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
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
        "SHORT_DASHED",
        "SINGLE_SOLID"
      ],
      "properties": [],
      "startPointIndex": 1061,
      "endPointIndex": 1064,
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
      "startPointIndex": 1184,
      "endPointIndex": 1185,
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
      "startPointIndex": 1185,
      "endPointIndex": 1186,
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
      "startPointIndex": 1186,
      "endPointIndex": 1189,
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
      "startPointIndex": 1189,
      "endPointIndex": 1194,
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
      "startPointIndex": 1194,
      "endPointIndex": 1195,
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
      "startPointIndex": 1195,
      "endPointIndex": 1199,
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
      "startPointIndex": 1199,
      "endPointIndex": 1200,
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
      "startPointIndex": 1200,
      "endPointIndex": 1201,
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
      "startPointIndex": 1201,
      "endPointIndex": 1202,
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
      "startPointIndex": 1202,
      "endPointIndex": 1203,
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
      "startPointIndex": 1203,
      "endPointIndex": 1204,
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
      "startPointIndex": 1204,
      "endPointIndex": 1205,
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
      "startPointIndex": 1205,
      "endPointIndex": 1206,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
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
      "startPointIndex": 1206,
      "endPointIndex": 1207,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
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
      "startPointIndex": 1207,
      "endPointIndex": 1208,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
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
      "startPointIndex": 1208,
      "endPointIndex": 1209,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 1209,
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
        },
        {
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
      "startPointIndex": 1211,
      "endPointIndex": 1214,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 1214,
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
      "startPointIndex": 1221,
      "endPointIndex": 1222,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
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
      "startPointIndex": 1222,
      "endPointIndex": 1223,
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
      "startPointIndex": 1223,
      "endPointIndex": 1224,
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
      "startPointIndex": 1224,
      "endPointIndex": 1225,
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
      "startPointIndex": 1225,
      "endPointIndex": 1226,
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
      "startPointIndex": 1226,
      "endPointIndex": 1227,
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
      "startPointIndex": 1227,
      "endPointIndex": 1228,
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
      "startPointIndex": 1228,
      "endPointIndex": 1229,
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
      "startPointIndex": 1229,
      "endPointIndex": 1232,
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
      "startPointIndex": 1232,
      "endPointIndex": 1236,
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
      "startPointIndex": 1236,
      "endPointIndex": 1237,
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
      "startPointIndex": 1237,
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
      "startPointIndex": 1238,
      "endPointIndex": 1239,
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
      "startPointIndex": 1239,
      "endPointIndex": 1240,
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
      "startPointIndex": 1240,
      "endPointIndex": 1243,
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
      "startPointIndex": 1243,
      "endPointIndex": 1244,
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
      "startPointIndex": 1244,
      "endPointIndex": 1245,
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
      "startPointIndex": 1245,
      "endPointIndex": 1246,
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
      "startPointIndex": 1246,
      "endPointIndex": 1249,
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
      "startPointIndex": 1249,
      "endPointIndex": 1250,
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
      "startPointIndex": 1250,
      "endPointIndex": 1251,
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
      "startPointIndex": 1251,
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
      "startPointIndex": 1290,
      "endPointIndex": 1293,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 1293,
      "endPointIndex": 1297,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 1297,
      "endPointIndex": 1299,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 1299,
      "endPointIndex": 1301,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 1301,
      "endPointIndex": 1302,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 1302,
      "endPointIndex": 1304,
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
      "startPointIndex": 1304,
      "endPointIndex": 1306,
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
      "startPointIndex": 1306,
      "endPointIndex": 1308,
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
      "startPointIndex": 1308,
      "endPointIndex": 1309,
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
      "startPointIndex": 1309,
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
      "startPointIndex": 1313,
      "endPointIndex": 1314,
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
      "startPointIndex": 1314,
      "endPointIndex": 1315,
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
      "startPointIndex": 1315,
      "endPointIndex": 1316,
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
      "startPointIndex": 1316,
      "endPointIndex": 1318,
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
      "startPointIndex": 1318,
      "endPointIndex": 1319,
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
      "startPointIndex": 1319,
      "endPointIndex": 1320,
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
      "startPointIndex": 1320,
      "endPointIndex": 1321,
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
      "startPointIndex": 1321,
      "endPointIndex": 1323,
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
      "startPointIndex": 1323,
      "endPointIndex": 1324,
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
      "startPointIndex": 1324,
      "endPointIndex": 1325,
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
      "startPointIndex": 1325,
      "endPointIndex": 1326,
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
      "startPointIndex": 1326,
      "endPointIndex": 1327,
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
      "startPointIndex": 1327,
      "endPointIndex": 1328,
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
      "startPointIndex": 1328,
      "endPointIndex": 1329,
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
      "startPointIndex": 1329,
      "endPointIndex": 1330,
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
      "startPointIndex": 1330,
      "endPointIndex": 1331,
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
      "startPointIndex": 1331,
      "endPointIndex": 1331,
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
      "startPointIndex": 1331,
      "endPointIndex": 1332,
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
      "startPointIndex": 1332,
      "endPointIndex": 1332,
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
      "startPointIndex": 1332,
      "endPointIndex": 1334,
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
      "startPointIndex": 1334,
      "endPointIndex": 1334,
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
      "startPointIndex": 1334,
      "endPointIndex": 1334,
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
      "startPointIndex": 1334,
      "endPointIndex": 1334,
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
      "startPointIndex": 1334,
      "endPointIndex": 1335,
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
      "startPointIndex": 1335,
      "endPointIndex": 1338,
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
      "startPointIndex": 1338,
      "endPointIndex": 1342,
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
      "startPointIndex": 1344,
      "endPointIndex": 1345,
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
      "startPointIndex": 1345,
      "endPointIndex": 1347,
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
      "startPointIndex": 1347,
      "endPointIndex": 1348,
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
      "startPointIndex": 1348,
      "endPointIndex": 1349,
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
      "startPointIndex": 1349,
      "endPointIndex": 1350,
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
      "startPointIndex": 1350,
      "endPointIndex": 1351,
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
      "startPointIndex": 1351,
      "endPointIndex": 1351,
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
      "startPointIndex": 1351,
      "endPointIndex": 1352,
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
      "startPointIndex": 1352,
      "endPointIndex": 1357,
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
      "startPointIndex": 1360,
      "endPointIndex": 1361,
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
      "startPointIndex": 1361,
      "endPointIndex": 1362,
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
      "startPointIndex": 1362,
      "endPointIndex": 1363,
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
      "startPointIndex": 1363,
      "endPointIndex": 1364,
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
      "startPointIndex": 1364,
      "endPointIndex": 1366,
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
      "startPointIndex": 1366,
      "endPointIndex": 1366,
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
      "startPointIndex": 1366,
      "endPointIndex": 1368,
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
      "startPointIndex": 1368,
      "endPointIndex": 1368,
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
      "startPointIndex": 1368,
      "endPointIndex": 1370,
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
      "startPointIndex": 1370,
      "endPointIndex": 1373,
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
      "startPointIndex": 1373,
      "endPointIndex": 1374,
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
      "startPointIndex": 1374,
      "endPointIndex": 1375,
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
      "startPointIndex": 1375,
      "endPointIndex": 1376,
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
      "startPointIndex": 1376,
      "endPointIndex": 1379,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
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
      "startPointIndex": 1379,
      "endPointIndex": 1380,
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
      "startPointIndex": 1380,
      "endPointIndex": 1381,
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
      "startPointIndex": 1381,
      "endPointIndex": 1381,
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
      "startPointIndex": 1381,
      "endPointIndex": 1382,
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
      "startPointIndex": 1382,
      "endPointIndex": 1383,
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
      "startPointIndex": 1383,
      "endPointIndex": 1384,
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
      "startPointIndex": 1384,
      "endPointIndex": 1404,
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
      "startPointIndex": 1408,
      "endPointIndex": 1408,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 1408,
      "endPointIndex": 1408,
      "sectionType": "LANES"
    }
  ],
  "guidance": {
    "instructions": [
      {
        "drivingSide": "RIGHT",
        "maneuver": "DEPART",
        "maneuverPoint": {
          "latitude": 52.3647183,
          "longitude": 4.8786029
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
              "latitude": 52.3647183,
              "longitude": 4.8786029
            },
            "travelTimeInSeconds": 0
          }
        ],
        "sideRoads": []
      },
      {
        "changeOfAngleInDegrees": -74,
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "landmark": "AT_TRAFFIC_LIGHT",
        "maneuver": "TURN_LEFT",
        "maneuverPoint": {
          "latitude": 52.3660836,
          "longitude": 4.8778492
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈbɔz.bom tu.ˈsɛ̃.strat",
            "phoneticLanguageCode": "nl-NL",
            "text": "Bosboom Toussaintstraat"
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
        "routeOffsetInMeters": 169,
        "routePath": [
          {
            "distanceInMeters": 169,
            "point": {
              "latitude": 52.3660836,
              "longitude": 4.8778492
            },
            "travelTimeInSeconds": 34
          },
          {
            "distanceInMeters": 179,
            "point": {
              "latitude": 52.3660462,
              "longitude": 4.8777151
            },
            "travelTimeInSeconds": 37
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 63,
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
        "isManeuverObligatory": true,
        "maneuver": "TURN_RIGHT",
        "maneuverPoint": {
          "latitude": 52.3650751,
          "longitude": 4.8737428
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈer.stə ˈkɔn.stɑn.tɛ⁀in ˈhœ⁀y.ɣəns.strat",
            "phoneticLanguageCode": "nl-NL",
            "text": "Eerste Constantijn Huygensstraat"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈer.stə ˈkɔn.stɑn.tɛ⁀in ˈhœ⁀y.ɣəns.strat",
            "phoneticLanguageCode": "nl-NL",
            "text": "Eerste Constantijn Huygensstraat"
          }
        },
        "routeOffsetInMeters": 475,
        "routePath": [
          {
            "distanceInMeters": 475,
            "point": {
              "latitude": 52.3650751,
              "longitude": 4.8737428
            },
            "travelTimeInSeconds": 119
          },
          {
            "distanceInMeters": 485,
            "point": {
              "latitude": 52.3651561,
              "longitude": 4.8736791
            },
            "travelTimeInSeconds": 120
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 105,
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
          "latitude": 52.3661801,
          "longitude": 4.8729032
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈja.kɔp fɑn ˈlɛ.nəp.strat",
            "phoneticLanguageCode": "nl-NL",
            "text": "Jacob van Lennepstraat"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈbɪl.dər.dɛ⁀ik.ˌstrat",
            "phoneticLanguageCode": "nl-NL",
            "text": "Bilderdijkstraat"
          }
        },
        "routeOffsetInMeters": 611,
        "routePath": [
          {
            "distanceInMeters": 611,
            "point": {
              "latitude": 52.3661801,
              "longitude": 4.8729032
            },
            "travelTimeInSeconds": 139
          },
          {
            "distanceInMeters": 621,
            "point": {
              "latitude": 52.3661426,
              "longitude": 4.8727718
            },
            "travelTimeInSeconds": 152
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 93,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 57,
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
          "latitude": 52.3654264,
          "longitude": 4.8701727
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈtɔ.ləns.ˌstrat",
            "phoneticLanguageCode": "nl-NL",
            "text": "Tollensstraat"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈja.kɔp fɑn ˈlɛ.nəp.strat",
            "phoneticLanguageCode": "nl-NL",
            "text": "Jacob van Lennepstraat"
          }
        },
        "routeOffsetInMeters": 815,
        "routePath": [
          {
            "distanceInMeters": 815,
            "point": {
              "latitude": 52.3654264,
              "longitude": 4.8701727
            },
            "travelTimeInSeconds": 195
          },
          {
            "distanceInMeters": 825,
            "point": {
              "latitude": 52.3653438,
              "longitude": 4.8702317
            },
            "travelTimeInSeconds": 199
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 122,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 79,
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
          "latitude": 52.3649222,
          "longitude": 4.8705322
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈja.kɔp fɑn ˈlɛ.nəp.ˌka.də",
            "phoneticLanguageCode": "nl-NL",
            "text": "Jacob van Lennepkade"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈtɔ.ləns.ˌstrat",
            "phoneticLanguageCode": "nl-NL",
            "text": "Tollensstraat"
          }
        },
        "routeOffsetInMeters": 877,
        "routePath": [
          {
            "distanceInMeters": 877,
            "point": {
              "latitude": 52.3649222,
              "longitude": 4.8705322
            },
            "travelTimeInSeconds": 220
          },
          {
            "distanceInMeters": 887,
            "point": {
              "latitude": 52.3648844,
              "longitude": 4.8703994
            },
            "travelTimeInSeconds": 222
          }
        ],
        "sideRoads": []
      },
      {
        "changeOfAngleInDegrees": -84,
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": true,
        "maneuver": "TURN_LEFT",
        "maneuverPoint": {
          "latitude": 52.3639351,
          "longitude": 4.8665947
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈni.ko.laz ˈbets.strat",
            "phoneticLanguageCode": "nl-NL",
            "text": "Nicolaas Beetsstraat"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈja.kɔp fɑn ˈlɛ.nəp.ˌka.də",
            "phoneticLanguageCode": "nl-NL",
            "text": "Jacob van Lennepkade"
          }
        },
        "routeOffsetInMeters": 1166,
        "routePath": [
          {
            "distanceInMeters": 1166,
            "point": {
              "latitude": 52.3639351,
              "longitude": 4.8665947
            },
            "travelTimeInSeconds": 283
          },
          {
            "distanceInMeters": 1176,
            "point": {
              "latitude": 52.363852,
              "longitude": 4.8666483
            },
            "travelTimeInSeconds": 294
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 146,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 72,
            "side": "RIGHT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": 96,
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_RIGHT",
        "maneuverPoint": {
          "latitude": 52.3630929,
          "longitude": 4.8671901
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ka.ˈnal.ˌstrat",
            "phoneticLanguageCode": "nl-NL",
            "text": "Kanaalstraat"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈni.ko.laz ˈbets.strat",
            "phoneticLanguageCode": "nl-NL",
            "text": "Nicolaas Beetsstraat"
          }
        },
        "routeOffsetInMeters": 1269,
        "routePath": [
          {
            "distanceInMeters": 1269,
            "point": {
              "latitude": 52.3630929,
              "longitude": 4.8671901
            },
            "travelTimeInSeconds": 310
          },
          {
            "distanceInMeters": 1279,
            "point": {
              "latitude": 52.3630602,
              "longitude": 4.8670535
            },
            "travelTimeInSeconds": 313
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 10,
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
          "latitude": 52.361497,
          "longitude": 4.8605597
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈpi.tər ˈlɑŋ.ən.dɛ⁀ik.strat",
            "phoneticLanguageCode": "nl-NL",
            "text": "Pieter Langendijkstraat"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ka.ˈnal.ˌstrat",
            "phoneticLanguageCode": "nl-NL",
            "text": "Kanaalstraat"
          }
        },
        "routeOffsetInMeters": 1754,
        "routePath": [
          {
            "distanceInMeters": 1754,
            "point": {
              "latitude": 52.361497,
              "longitude": 4.8605597
            },
            "travelTimeInSeconds": 436
          },
          {
            "distanceInMeters": 1764,
            "point": {
              "latitude": 52.3614143,
              "longitude": 4.8606143
            },
            "travelTimeInSeconds": 441
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 269,
            "side": "LEFT_AND_RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 133,
            "side": "LEFT_AND_RIGHT"
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
          "latitude": 52.360062,
          "longitude": 4.8614931
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈer.stə ˈhɛl.mərs.strat",
            "phoneticLanguageCode": "nl-NL",
            "text": "Eerste Helmersstraat"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈpi.tər ˈlɑŋ.ən.dɛ⁀ik.strat",
            "phoneticLanguageCode": "nl-NL",
            "text": "Pieter Langendijkstraat"
          }
        },
        "routeOffsetInMeters": 1926,
        "routePath": [
          {
            "distanceInMeters": 1926,
            "point": {
              "latitude": 52.360062,
              "longitude": 4.8614931
            },
            "travelTimeInSeconds": 497
          },
          {
            "distanceInMeters": 1936,
            "point": {
              "latitude": 52.3600269,
              "longitude": 4.8613581
            },
            "travelTimeInSeconds": 500
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 113,
            "side": "LEFT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": 45,
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_RIGHT",
        "maneuverPoint": {
          "latitude": 52.359539,
          "longitude": 4.8595887
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "je.ˈje ˈkre.mər.plɛ⁀in",
            "phoneticLanguageCode": "nl-NL",
            "text": "J.J. Cremerplein"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "je.ˈje ˈkre.mər.plɛ⁀in",
            "phoneticLanguageCode": "nl-NL",
            "text": "J.J. Cremerplein"
          }
        },
        "routeOffsetInMeters": 2069,
        "routePath": [
          {
            "distanceInMeters": 2069,
            "point": {
              "latitude": 52.359539,
              "longitude": 4.8595887
            },
            "travelTimeInSeconds": 532
          },
          {
            "distanceInMeters": 2079,
            "point": {
              "latitude": 52.3595706,
              "longitude": 4.8594507
            },
            "travelTimeInSeconds": 535
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 11,
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
          "latitude": 52.3600191,
          "longitude": 4.8579097
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "je.ˈje ˈkre.mər.plɛ⁀in",
            "phoneticLanguageCode": "nl-NL",
            "text": "J.J. Cremerplein"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "je.ˈje ˈkre.mər.plɛ⁀in",
            "phoneticLanguageCode": "nl-NL",
            "text": "J.J. Cremerplein"
          }
        },
        "routeOffsetInMeters": 2195,
        "routePath": [
          {
            "distanceInMeters": 2195,
            "point": {
              "latitude": 52.3600191,
              "longitude": 4.8579097
            },
            "travelTimeInSeconds": 562
          },
          {
            "distanceInMeters": 2204,
            "point": {
              "latitude": 52.3599467,
              "longitude": 4.8578373
            },
            "travelTimeInSeconds": 566
          },
          {
            "distanceInMeters": 2205,
            "point": {
              "latitude": 52.3599427,
              "longitude": 4.8578341
            },
            "travelTimeInSeconds": 566
          }
        ],
        "sideRoads": []
      },
      {
        "changeOfAngleInDegrees": 96,
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": true,
        "maneuver": "TURN_RIGHT",
        "maneuverPoint": {
          "latitude": 52.358163,
          "longitude": 4.8568287
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "s106"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈo.vər.ˌtom",
            "phoneticLanguageCode": "nl-NL",
            "text": "Overtoom"
          }
        },
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "streetName": {
            "phonetic": "ˈbʌs.kən hy.ˈɛt.strat",
            "phoneticLanguageCode": "nl-NL",
            "text": "Busken Huetstraat"
          }
        },
        "routeOffsetInMeters": 2424,
        "routePath": [
          {
            "distanceInMeters": 2424,
            "point": {
              "latitude": 52.358163,
              "longitude": 4.8568287
            },
            "travelTimeInSeconds": 636
          },
          {
            "distanceInMeters": 2434,
            "point": {
              "latitude": 52.3581291,
              "longitude": 4.8566925
            },
            "travelTimeInSeconds": 641
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 116,
            "side": "LEFT_AND_RIGHT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": 51,
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_RIGHT",
        "maneuverPoint": {
          "latitude": 52.3578197,
          "longitude": 4.8553938
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "s106"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "sy.ri.ˈna.mə.ˌstrat",
            "phoneticLanguageCode": "nl-NL",
            "text": "Surinamestraat"
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
                "text": "s106"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈo.vər.ˌtom",
            "phoneticLanguageCode": "nl-NL",
            "text": "Overtoom"
          }
        },
        "routeOffsetInMeters": 2507,
        "routePath": [
          {
            "distanceInMeters": 2507,
            "point": {
              "latitude": 52.3578814,
              "longitude": 4.8557076
            },
            "travelTimeInSeconds": 676
          },
          {
            "distanceInMeters": 2529,
            "point": {
              "latitude": 52.3578197,
              "longitude": 4.8553938
            },
            "travelTimeInSeconds": 681
          },
          {
            "distanceInMeters": 2535,
            "point": {
              "latitude": 52.357817,
              "longitude": 4.8553079
            },
            "travelTimeInSeconds": 682
          },
          {
            "distanceInMeters": 2542,
            "point": {
              "latitude": 52.357817,
              "longitude": 4.8552114
            },
            "travelTimeInSeconds": 683
          },
          {
            "distanceInMeters": 2546,
            "point": {
              "latitude": 52.357825,
              "longitude": 4.8551443
            },
            "travelTimeInSeconds": 684
          },
          {
            "distanceInMeters": 2550,
            "point": {
              "latitude": 52.3578358,
              "longitude": 4.855096
            },
            "travelTimeInSeconds": 685
          },
          {
            "distanceInMeters": 2554,
            "point": {
              "latitude": 52.3578492,
              "longitude": 4.8550478
            },
            "travelTimeInSeconds": 685
          },
          {
            "distanceInMeters": 2561,
            "point": {
              "latitude": 52.3578814,
              "longitude": 4.8549458
            },
            "travelTimeInSeconds": 687
          },
          {
            "distanceInMeters": 2565,
            "point": {
              "latitude": 52.3578975,
              "longitude": 4.8548949
            },
            "travelTimeInSeconds": 688
          },
          {
            "distanceInMeters": 2570,
            "point": {
              "latitude": 52.3579189,
              "longitude": 4.8548305
            },
            "travelTimeInSeconds": 689
          },
          {
            "distanceInMeters": 2577,
            "point": {
              "latitude": 52.3579457,
              "longitude": 4.854742
            },
            "travelTimeInSeconds": 691
          }
        ],
        "sideRoads": []
      },
      {
        "changeOfAngleInDegrees": -29,
        "drivingSide": "RIGHT",
        "maneuver": "ROUNDABOUT_SLIGHT_LEFT",
        "maneuverPoint": {
          "latitude": 52.3585841,
          "longitude": 4.8528242
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "s106"
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
                "text": "s106"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "sy.ri.ˈna.mə.ˌstrat",
            "phoneticLanguageCode": "nl-NL",
            "text": "Surinamestraat"
          }
        },
        "roundaboutExitNumber": 2,
        "routeOffsetInMeters": 2668,
        "routePath": [
          {
            "distanceInMeters": 2668,
            "point": {
              "latitude": 52.3583964,
              "longitude": 4.8536557
            },
            "travelTimeInSeconds": 724
          },
          {
            "distanceInMeters": 2672,
            "point": {
              "latitude": 52.3584259,
              "longitude": 4.8536557
            },
            "travelTimeInSeconds": 724
          },
          {
            "distanceInMeters": 2675,
            "point": {
              "latitude": 52.3584607,
              "longitude": 4.853645
            },
            "travelTimeInSeconds": 725
          },
          {
            "distanceInMeters": 2679,
            "point": {
              "latitude": 52.3584929,
              "longitude": 4.8536262
            },
            "travelTimeInSeconds": 725
          },
          {
            "distanceInMeters": 2688,
            "point": {
              "latitude": 52.35856,
              "longitude": 4.8535645
            },
            "travelTimeInSeconds": 726
          },
          {
            "distanceInMeters": 2694,
            "point": {
              "latitude": 52.3586029,
              "longitude": 4.8535135
            },
            "travelTimeInSeconds": 727
          },
          {
            "distanceInMeters": 2697,
            "point": {
              "latitude": 52.358627,
              "longitude": 4.8534787
            },
            "travelTimeInSeconds": 728
          },
          {
            "distanceInMeters": 2701,
            "point": {
              "latitude": 52.3586485,
              "longitude": 4.8534331
            },
            "travelTimeInSeconds": 728
          },
          {
            "distanceInMeters": 2705,
            "point": {
              "latitude": 52.3586646,
              "longitude": 4.8533875
            },
            "travelTimeInSeconds": 728
          },
          {
            "distanceInMeters": 2715,
            "point": {
              "latitude": 52.3586968,
              "longitude": 4.853256
            },
            "travelTimeInSeconds": 730
          },
          {
            "distanceInMeters": 2721,
            "point": {
              "latitude": 52.3587021,
              "longitude": 4.8531675
            },
            "travelTimeInSeconds": 730
          },
          {
            "distanceInMeters": 2724,
            "point": {
              "latitude": 52.3587021,
              "longitude": 4.8531112
            },
            "travelTimeInSeconds": 731
          },
          {
            "distanceInMeters": 2728,
            "point": {
              "latitude": 52.3586968,
              "longitude": 4.8530656
            },
            "travelTimeInSeconds": 731
          },
          {
            "distanceInMeters": 2732,
            "point": {
              "latitude": 52.358678,
              "longitude": 4.8530066
            },
            "travelTimeInSeconds": 732
          },
          {
            "distanceInMeters": 2740,
            "point": {
              "latitude": 52.3586351,
              "longitude": 4.85291
            },
            "travelTimeInSeconds": 733
          },
          {
            "distanceInMeters": 2748,
            "point": {
              "latitude": 52.3585841,
              "longitude": 4.8528242
            },
            "travelTimeInSeconds": 734
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 18,
            "side": "RIGHT"
          }
        ]
      },
      {
        "drivingSide": "RIGHT",
        "maneuver": "EXIT_ROUNDABOUT",
        "maneuverPoint": {
          "latitude": 52.3585841,
          "longitude": 4.8528242
        },
        "nextRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "s106"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "text": ""
          }
        },
        "offsetOfAmbiguousExitFromManeuverInMeters": 69,
        "previousRoadInfo": {
          "properties": [
            "URBAN"
          ],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "s106"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "sy.ri.ˈna.mə.ˌstrat",
            "phoneticLanguageCode": "nl-NL",
            "text": "Surinamestraat"
          }
        },
        "routeOffsetInMeters": 2748,
        "routePath": [
          {
            "distanceInMeters": 2748,
            "point": {
              "latitude": 52.3585841,
              "longitude": 4.8528242
            },
            "travelTimeInSeconds": 734
          }
        ],
        "sideRoads": []
      },
      {
        "changeOfAngleInDegrees": -112,
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "isManeuverObligatory": false,
        "maneuver": "TURN_LEFT",
        "maneuverPoint": {
          "latitude": 52.3582006,
          "longitude": 4.8419183
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
                "text": "s106"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "kɔr.ˈne.lɪs ˈle.li.lan",
            "phoneticLanguageCode": "nl-NL",
            "text": "Cornelis Lelylaan"
          }
        },
        "routeOffsetInMeters": 3435,
        "routePath": [
          {
            "distanceInMeters": 3435,
            "point": {
              "latitude": 52.3581979,
              "longitude": 4.8430127
            },
            "travelTimeInSeconds": 827
          },
          {
            "distanceInMeters": 3445,
            "point": {
              "latitude": 52.3582274,
              "longitude": 4.8428786
            },
            "travelTimeInSeconds": 829
          },
          {
            "distanceInMeters": 3458,
            "point": {
              "latitude": 52.3582515,
              "longitude": 4.8426935
            },
            "travelTimeInSeconds": 830
          },
          {
            "distanceInMeters": 3464,
            "point": {
              "latitude": 52.3582596,
              "longitude": 4.8426104
            },
            "travelTimeInSeconds": 831
          },
          {
            "distanceInMeters": 3473,
            "point": {
              "latitude": 52.3582676,
              "longitude": 4.8424709
            },
            "travelTimeInSeconds": 832
          },
          {
            "distanceInMeters": 3481,
            "point": {
              "latitude": 52.3582596,
              "longitude": 4.8423636
            },
            "travelTimeInSeconds": 833
          },
          {
            "distanceInMeters": 3512,
            "point": {
              "latitude": 52.3582006,
              "longitude": 4.8419183
            },
            "travelTimeInSeconds": 838
          },
          {
            "distanceInMeters": 3538,
            "point": {
              "latitude": 52.3579645,
              "longitude": 4.8419183
            },
            "travelTimeInSeconds": 849
          },
          {
            "distanceInMeters": 3563,
            "point": {
              "latitude": 52.3577392,
              "longitude": 4.8419371
            },
            "travelTimeInSeconds": 852
          },
          {
            "distanceInMeters": 3573,
            "point": {
              "latitude": 52.3576495,
              "longitude": 4.841941
            },
            "travelTimeInSeconds": 853
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 613,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 518,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 489,
            "side": "LEFT"
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
        "routeOffsetInMeters": 5049,
        "routePath": [
          {
            "distanceInMeters": 5049,
            "point": {
              "latitude": 52.3445132,
              "longitude": 4.8409072
            },
            "travelTimeInSeconds": 931
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
        "routeOffsetInMeters": 6996,
        "routePath": [
          {
            "distanceInMeters": 6996,
            "point": {
              "latitude": 52.3387572,
              "longitude": 4.8200288
            },
            "travelTimeInSeconds": 1005
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
            "phonetic": "ˈhar.lɛm",
            "phoneticLanguageCode": "nl-NL",
            "text": "Haarlem"
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
          "latitude": 52.331813,
          "longitude": 4.800505
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
        "routeOffsetInMeters": 8601,
        "routePath": [
          {
            "distanceInMeters": 8601,
            "point": {
              "latitude": 52.331813,
              "longitude": 4.800505
            },
            "travelTimeInSeconds": 1059
          }
        ],
        "sideRoads": [],
        "signpost": {
          "exitName": {
            "text": ""
          },
          "exitNumber": {
            "text": "2"
          },
          "towardName": {
            "phonetic": "ˈhar.lɛm",
            "phoneticLanguageCode": "nl-NL",
            "text": "Haarlem"
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
          "latitude": 52.3287794,
          "longitude": 4.7942448
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
        "routeOffsetInMeters": 9146,
        "routePath": [
          {
            "distanceInMeters": 9146,
            "point": {
              "latitude": 52.3287794,
              "longitude": 4.7942448
            },
            "travelTimeInSeconds": 1079
          }
        ],
        "sideRoads": [],
        "signpost": {
          "exitName": {
            "text": ""
          },
          "exitNumber": {
            "text": "2"
          },
          "towardName": {
            "phonetic": "ˈhar.lɛm",
            "phoneticLanguageCode": "nl-NL",
            "text": "Haarlem"
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
          "latitude": 52.3280767,
          "longitude": 4.7808444
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
        "routeOffsetInMeters": 10077,
        "routePath": [
          {
            "distanceInMeters": 10077,
            "point": {
              "latitude": 52.3280767,
              "longitude": 4.7808444
            },
            "travelTimeInSeconds": 1112
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
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "maneuver": "EXIT_MOTORWAY_RIGHT",
        "maneuverPoint": {
          "latitude": 52.3693532,
          "longitude": 4.7170535
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
        "routeOffsetInMeters": 16775,
        "routePath": [
          {
            "distanceInMeters": 16775,
            "point": {
              "latitude": 52.3693532,
              "longitude": 4.7170535
            },
            "travelTimeInSeconds": 1343
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
            "phonetic": "ˈhar.lɛm ˈzœ⁀yt",
            "phoneticLanguageCode": "nl-NL",
            "text": "Haarlem-Zuid"
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
        "routeOffsetInMeters": 17947,
        "routePath": [
          {
            "distanceInMeters": 17947,
            "point": {
              "latitude": 52.3718557,
              "longitude": 4.7020277
            },
            "travelTimeInSeconds": 1388
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
        "routeOffsetInMeters": 33318,
        "routePath": [
          {
            "distanceInMeters": 33318,
            "point": {
              "latitude": 52.2695643,
              "longitude": 4.5861751
            },
            "travelTimeInSeconds": 2082
          },
          {
            "distanceInMeters": 33334,
            "point": {
              "latitude": 52.2694543,
              "longitude": 4.5860195
            },
            "travelTimeInSeconds": 2088
          },
          {
            "distanceInMeters": 33347,
            "point": {
              "latitude": 52.2693658,
              "longitude": 4.5858961
            },
            "travelTimeInSeconds": 2091
          },
          {
            "distanceInMeters": 33354,
            "point": {
              "latitude": 52.2693068,
              "longitude": 4.5858774
            },
            "travelTimeInSeconds": 2093
          },
          {
            "distanceInMeters": 33360,
            "point": {
              "latitude": 52.2692505,
              "longitude": 4.5858935
            },
            "travelTimeInSeconds": 2094
          },
          {
            "distanceInMeters": 33379,
            "point": {
              "latitude": 52.2690842,
              "longitude": 4.585923
            },
            "travelTimeInSeconds": 2095
          },
          {
            "distanceInMeters": 33389,
            "point": {
              "latitude": 52.2690225,
              "longitude": 4.5860329
            },
            "travelTimeInSeconds": 2095
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
                "text": "A4"
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
        "routeOffsetInMeters": 39132,
        "routePath": [
          {
            "distanceInMeters": 39132,
            "point": {
              "latitude": 52.2401458,
              "longitude": 4.6526456
            },
            "travelTimeInSeconds": 2388
          },
          {
            "distanceInMeters": 39144,
            "point": {
              "latitude": 52.2400573,
              "longitude": 4.6527475
            },
            "travelTimeInSeconds": 2390
          },
          {
            "distanceInMeters": 39168,
            "point": {
              "latitude": 52.2399071,
              "longitude": 4.6529996
            },
            "travelTimeInSeconds": 2394
          },
          {
            "distanceInMeters": 39171,
            "point": {
              "latitude": 52.2398829,
              "longitude": 4.6530265
            },
            "travelTimeInSeconds": 2395
          },
          {
            "distanceInMeters": 39174,
            "point": {
              "latitude": 52.2398588,
              "longitude": 4.6530479
            },
            "travelTimeInSeconds": 2396
          },
          {
            "distanceInMeters": 39180,
            "point": {
              "latitude": 52.2398078,
              "longitude": 4.6530613
            },
            "travelTimeInSeconds": 2396
          },
          {
            "distanceInMeters": 39192,
            "point": {
              "latitude": 52.2396952,
              "longitude": 4.6530506
            },
            "travelTimeInSeconds": 2398
          },
          {
            "distanceInMeters": 39202,
            "point": {
              "latitude": 52.2396244,
              "longitude": 4.652953
            },
            "travelTimeInSeconds": 2399
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
        "maneuver": "KEEP_LEFT",
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
                "text": "A4"
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
        "routeOffsetInMeters": 39408,
        "routePath": [
          {
            "distanceInMeters": 39408,
            "point": {
              "latitude": 52.2380966,
              "longitude": 4.6513098
            },
            "travelTimeInSeconds": 2411
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
        "maneuver": "MERGE_RIGHT_LANE",
        "maneuverPoint": {
          "latitude": 52.2301278,
          "longitude": 4.6436387
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
          "properties": [],
          "streetName": {
            "text": ""
          }
        },
        "routeOffsetInMeters": 40452,
        "routePath": [
          {
            "distanceInMeters": 40452,
            "point": {
              "latitude": 52.2301278,
              "longitude": 4.6436387
            },
            "travelTimeInSeconds": 2457
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 245,
            "side": "RIGHT"
          },
          {
            "offsetFromManeuverInMeters": 97,
            "side": "RIGHT"
          }
        ]
      },
      {
        "drivingSide": "RIGHT",
        "intersectionName": {
          "text": ""
        },
        "maneuver": "EXIT_MOTORWAY_RIGHT",
        "maneuverPoint": {
          "latitude": 52.2039387,
          "longitude": 4.6180022
        },
        "nextRoadInfo": {
          "properties": [],
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
        "routeOffsetInMeters": 43894,
        "routePath": [
          {
            "distanceInMeters": 43894,
            "point": {
              "latitude": 52.2039387,
              "longitude": 4.6180022
            },
            "travelTimeInSeconds": 2614
          }
        ],
        "sideRoads": [],
        "signpost": {
          "exitName": {
            "text": ""
          },
          "exitNumber": {
            "text": "5"
          },
          "towardName": {
            "phonetic": "ˈrɛ⁀ip.ˌʋe.tə.rɪŋ",
            "phoneticLanguageCode": "nl-NL",
            "text": "Rijpwetering"
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
        "landmark": "AT_TRAFFIC_LIGHT",
        "maneuver": "TURN_RIGHT",
        "maneuverPoint": {
          "latitude": 52.1996203,
          "longitude": 4.6137133
        },
        "nextRoadInfo": {
          "properties": [],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "N445"
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
        "routeOffsetInMeters": 44459,
        "routePath": [
          {
            "distanceInMeters": 44459,
            "point": {
              "latitude": 52.1996203,
              "longitude": 4.6137133
            },
            "travelTimeInSeconds": 2651
          },
          {
            "distanceInMeters": 44468,
            "point": {
              "latitude": 52.1996632,
              "longitude": 4.6135953
            },
            "travelTimeInSeconds": 2660
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
            "phonetic": "ˈrɛ⁀ip.ˌʋe.tə.rɪŋ",
            "phoneticLanguageCode": "nl-NL",
            "text": "Rijpwetering"
          }
        }
      },
      {
        "changeOfAngleInDegrees": -80,
        "drivingSide": "RIGHT",
        "maneuver": "ROUNDABOUT_LEFT",
        "maneuverPoint": {
          "latitude": 52.1989015,
          "longitude": 4.6112269
        },
        "nextRoadInfo": {
          "properties": [],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "N445"
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
                "text": "N445"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈrɪp.sə.ˌlan",
            "phoneticLanguageCode": "nl-NL",
            "text": "Ripselaan"
          }
        },
        "roundaboutExitNumber": 3,
        "routeOffsetInMeters": 44564,
        "routePath": [
          {
            "distanceInMeters": 44564,
            "point": {
              "latitude": 52.2001112,
              "longitude": 4.612399
            },
            "travelTimeInSeconds": 2670
          },
          {
            "distanceInMeters": 44570,
            "point": {
              "latitude": 52.2001621,
              "longitude": 4.612399
            },
            "travelTimeInSeconds": 2670
          },
          {
            "distanceInMeters": 44572,
            "point": {
              "latitude": 52.2001836,
              "longitude": 4.6123883
            },
            "travelTimeInSeconds": 2671
          },
          {
            "distanceInMeters": 44575,
            "point": {
              "latitude": 52.200205,
              "longitude": 4.6123749
            },
            "travelTimeInSeconds": 2671
          },
          {
            "distanceInMeters": 44579,
            "point": {
              "latitude": 52.2002372,
              "longitude": 4.6123481
            },
            "travelTimeInSeconds": 2671
          },
          {
            "distanceInMeters": 44586,
            "point": {
              "latitude": 52.2002801,
              "longitude": 4.6122676
            },
            "travelTimeInSeconds": 2672
          },
          {
            "distanceInMeters": 44595,
            "point": {
              "latitude": 52.2002989,
              "longitude": 4.6121362
            },
            "travelTimeInSeconds": 2673
          },
          {
            "distanceInMeters": 44605,
            "point": {
              "latitude": 52.2002801,
              "longitude": 4.6119994
            },
            "travelTimeInSeconds": 2674
          },
          {
            "distanceInMeters": 44612,
            "point": {
              "latitude": 52.2002399,
              "longitude": 4.6119136
            },
            "travelTimeInSeconds": 2675
          },
          {
            "distanceInMeters": 44616,
            "point": {
              "latitude": 52.2002104,
              "longitude": 4.6118787
            },
            "travelTimeInSeconds": 2675
          },
          {
            "distanceInMeters": 44621,
            "point": {
              "latitude": 52.2001728,
              "longitude": 4.6118438
            },
            "travelTimeInSeconds": 2676
          },
          {
            "distanceInMeters": 44627,
            "point": {
              "latitude": 52.2001192,
              "longitude": 4.6118277
            },
            "travelTimeInSeconds": 2677
          },
          {
            "distanceInMeters": 44631,
            "point": {
              "latitude": 52.200087,
              "longitude": 4.6118277
            },
            "travelTimeInSeconds": 2677
          },
          {
            "distanceInMeters": 44641,
            "point": {
              "latitude": 52.1999905,
              "longitude": 4.6118438
            },
            "travelTimeInSeconds": 2678
          },
          {
            "distanceInMeters": 44648,
            "point": {
              "latitude": 52.1999314,
              "longitude": 4.6118358
            },
            "travelTimeInSeconds": 2679
          },
          {
            "distanceInMeters": 44674,
            "point": {
              "latitude": 52.1997303,
              "longitude": 4.6116427
            },
            "travelTimeInSeconds": 2682
          },
          {
            "distanceInMeters": 44707,
            "point": {
              "latitude": 52.1994755,
              "longitude": 4.6114013
            },
            "travelTimeInSeconds": 2685
          },
          {
            "distanceInMeters": 44729,
            "point": {
              "latitude": 52.1993092,
              "longitude": 4.6112269
            },
            "travelTimeInSeconds": 2687
          },
          {
            "distanceInMeters": 44732,
            "point": {
              "latitude": 52.199285,
              "longitude": 4.6111974
            },
            "travelTimeInSeconds": 2687
          },
          {
            "distanceInMeters": 44736,
            "point": {
              "latitude": 52.1992636,
              "longitude": 4.6111625
            },
            "travelTimeInSeconds": 2688
          },
          {
            "distanceInMeters": 44739,
            "point": {
              "latitude": 52.1992475,
              "longitude": 4.611125
            },
            "travelTimeInSeconds": 2688
          },
          {
            "distanceInMeters": 44742,
            "point": {
              "latitude": 52.1992314,
              "longitude": 4.6110794
            },
            "travelTimeInSeconds": 2688
          },
          {
            "distanceInMeters": 44748,
            "point": {
              "latitude": 52.1992126,
              "longitude": 4.6109989
            },
            "travelTimeInSeconds": 2689
          },
          {
            "distanceInMeters": 44754,
            "point": {
              "latitude": 52.1991912,
              "longitude": 4.6109265
            },
            "travelTimeInSeconds": 2690
          },
          {
            "distanceInMeters": 44757,
            "point": {
              "latitude": 52.1991751,
              "longitude": 4.610889
            },
            "travelTimeInSeconds": 2690
          },
          {
            "distanceInMeters": 44760,
            "point": {
              "latitude": 52.1991509,
              "longitude": 4.6108621
            },
            "travelTimeInSeconds": 2690
          },
          {
            "distanceInMeters": 44763,
            "point": {
              "latitude": 52.1991241,
              "longitude": 4.6108459999999996
            },
            "travelTimeInSeconds": 2691
          },
          {
            "distanceInMeters": 44769,
            "point": {
              "latitude": 52.1990731,
              "longitude": 4.6108299
            },
            "travelTimeInSeconds": 2691
          },
          {
            "distanceInMeters": 44773,
            "point": {
              "latitude": 52.1990409,
              "longitude": 4.6108299
            },
            "travelTimeInSeconds": 2692
          },
          {
            "distanceInMeters": 44775,
            "point": {
              "latitude": 52.1990168,
              "longitude": 4.6108353
            },
            "travelTimeInSeconds": 2692
          },
          {
            "distanceInMeters": 44779,
            "point": {
              "latitude": 52.1989846,
              "longitude": 4.6108514
            },
            "travelTimeInSeconds": 2693
          },
          {
            "distanceInMeters": 44784,
            "point": {
              "latitude": 52.1989498,
              "longitude": 4.6108916
            },
            "travelTimeInSeconds": 2693
          },
          {
            "distanceInMeters": 44786,
            "point": {
              "latitude": 52.1989337,
              "longitude": 4.6109185
            },
            "travelTimeInSeconds": 2693
          },
          {
            "distanceInMeters": 44793,
            "point": {
              "latitude": 52.1989042,
              "longitude": 4.6109962
            },
            "travelTimeInSeconds": 2694
          },
          {
            "distanceInMeters": 44796,
            "point": {
              "latitude": 52.1988934,
              "longitude": 4.6110472
            },
            "travelTimeInSeconds": 2694
          },
          {
            "distanceInMeters": 44802,
            "point": {
              "latitude": 52.1988907,
              "longitude": 4.611125
            },
            "travelTimeInSeconds": 2695
          },
          {
            "distanceInMeters": 44809,
            "point": {
              "latitude": 52.1989015,
              "longitude": 4.6112269
            },
            "travelTimeInSeconds": 2696
          }
        ],
        "sideRoads": []
      },
      {
        "drivingSide": "RIGHT",
        "maneuver": "EXIT_ROUNDABOUT",
        "maneuverPoint": {
          "latitude": 52.1989015,
          "longitude": 4.6112269
        },
        "nextRoadInfo": {
          "properties": [],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "N445"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "text": ""
          }
        },
        "offsetOfAmbiguousExitFromManeuverInMeters": 22,
        "previousRoadInfo": {
          "properties": [],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "N445"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "phonetic": "ˈrɪp.sə.ˌlan",
            "phoneticLanguageCode": "nl-NL",
            "text": "Ripselaan"
          }
        },
        "routeOffsetInMeters": 44809,
        "routePath": [
          {
            "distanceInMeters": 44809,
            "point": {
              "latitude": 52.1989015,
              "longitude": 4.6112269
            },
            "travelTimeInSeconds": 2696
          }
        ],
        "sideRoads": []
      },
      {
        "changeOfAngleInDegrees": -93,
        "drivingSide": "RIGHT",
        "maneuver": "ROUNDABOUT_LEFT",
        "maneuverPoint": {
          "latitude": 52.1752739,
          "longitude": 4.5393035
        },
        "nextRoadInfo": {
          "properties": [],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "N446"
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
                "text": "N445"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "text": ""
          }
        },
        "roundaboutExitNumber": 3,
        "routeOffsetInMeters": 50674,
        "routePath": [
          {
            "distanceInMeters": 50674,
            "point": {
              "latitude": 52.1755716,
              "longitude": 4.5395368
            },
            "travelTimeInSeconds": 2976
          },
          {
            "distanceInMeters": 50681,
            "point": {
              "latitude": 52.1756119,
              "longitude": 4.5394698
            },
            "travelTimeInSeconds": 2977
          },
          {
            "distanceInMeters": 50686,
            "point": {
              "latitude": 52.1756387,
              "longitude": 4.5394081
            },
            "travelTimeInSeconds": 2978
          },
          {
            "distanceInMeters": 50691,
            "point": {
              "latitude": 52.1756521,
              "longitude": 4.539333
            },
            "travelTimeInSeconds": 2978
          },
          {
            "distanceInMeters": 50695,
            "point": {
              "latitude": 52.1756521,
              "longitude": 4.5392793
            },
            "travelTimeInSeconds": 2979
          },
          {
            "distanceInMeters": 50699,
            "point": {
              "latitude": 52.1756494,
              "longitude": 4.5392203
            },
            "travelTimeInSeconds": 2979
          },
          {
            "distanceInMeters": 50702,
            "point": {
              "latitude": 52.1756387,
              "longitude": 4.5391721
            },
            "travelTimeInSeconds": 2980
          },
          {
            "distanceInMeters": 50708,
            "point": {
              "latitude": 52.1756172,
              "longitude": 4.539105
            },
            "travelTimeInSeconds": 2980
          },
          {
            "distanceInMeters": 50711,
            "point": {
              "latitude": 52.1756011,
              "longitude": 4.5390674
            },
            "travelTimeInSeconds": 2980
          },
          {
            "distanceInMeters": 50715,
            "point": {
              "latitude": 52.1755689,
              "longitude": 4.5390245
            },
            "travelTimeInSeconds": 2981
          },
          {
            "distanceInMeters": 50719,
            "point": {
              "latitude": 52.1755368,
              "longitude": 4.5390058
            },
            "travelTimeInSeconds": 2981
          },
          {
            "distanceInMeters": 50724,
            "point": {
              "latitude": 52.1754965,
              "longitude": 4.538995
            },
            "travelTimeInSeconds": 2982
          },
          {
            "distanceInMeters": 50728,
            "point": {
              "latitude": 52.175459,
              "longitude": 4.538995
            },
            "travelTimeInSeconds": 2982
          },
          {
            "distanceInMeters": 50734,
            "point": {
              "latitude": 52.1754107,
              "longitude": 4.5390111
            },
            "travelTimeInSeconds": 2983
          },
          {
            "distanceInMeters": 50738,
            "point": {
              "latitude": 52.1753758,
              "longitude": 4.5390353
            },
            "travelTimeInSeconds": 2983
          },
          {
            "distanceInMeters": 50740,
            "point": {
              "latitude": 52.175357,
              "longitude": 4.5390514
            },
            "travelTimeInSeconds": 2984
          },
          {
            "distanceInMeters": 50743,
            "point": {
              "latitude": 52.175341,
              "longitude": 4.5390755
            },
            "travelTimeInSeconds": 2984
          },
          {
            "distanceInMeters": 50746,
            "point": {
              "latitude": 52.1753195,
              "longitude": 4.539113
            },
            "travelTimeInSeconds": 2984
          },
          {
            "distanceInMeters": 50751,
            "point": {
              "latitude": 52.1752927,
              "longitude": 4.5391747
            },
            "travelTimeInSeconds": 2985
          },
          {
            "distanceInMeters": 50757,
            "point": {
              "latitude": 52.1752766,
              "longitude": 4.5392525
            },
            "travelTimeInSeconds": 2985
          },
          {
            "distanceInMeters": 50760,
            "point": {
              "latitude": 52.1752739,
              "longitude": 4.5393035
            },
            "travelTimeInSeconds": 2986
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 15,
            "side": "LEFT_AND_RIGHT"
          }
        ]
      },
      {
        "drivingSide": "RIGHT",
        "maneuver": "EXIT_ROUNDABOUT",
        "maneuverPoint": {
          "latitude": 52.1752739,
          "longitude": 4.5393035
        },
        "nextRoadInfo": {
          "properties": [],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "N446"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "text": ""
          }
        },
        "offsetOfAmbiguousExitFromManeuverInMeters": 32,
        "previousRoadInfo": {
          "properties": [],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "N445"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "text": ""
          }
        },
        "routeOffsetInMeters": 50760,
        "routePath": [
          {
            "distanceInMeters": 50760,
            "point": {
              "latitude": 52.1752739,
              "longitude": 4.5393035
            },
            "travelTimeInSeconds": 2986
          }
        ],
        "sideRoads": []
      },
      {
        "changeOfAngleInDegrees": -45,
        "drivingSide": "RIGHT",
        "maneuver": "ROUNDABOUT_SLIGHT_LEFT",
        "maneuverPoint": {
          "latitude": 52.1627131,
          "longitude": 4.5515853
        },
        "nextRoadInfo": {
          "properties": [],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "N446"
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
        "previousRoadInfo": {
          "properties": [],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "N446"
              },
              "stateCode": ""
            }
          ],
          "streetName": {
            "text": ""
          }
        },
        "roundaboutExitNumber": 2,
        "routeOffsetInMeters": 52362,
        "routePath": [
          {
            "distanceInMeters": 52362,
            "point": {
              "latitude": 52.1628419,
              "longitude": 4.5509309
            },
            "travelTimeInSeconds": 3083
          },
          {
            "distanceInMeters": 52367,
            "point": {
              "latitude": 52.1627989,
              "longitude": 4.5509148
            },
            "travelTimeInSeconds": 3083
          },
          {
            "distanceInMeters": 52372,
            "point": {
              "latitude": 52.1627533,
              "longitude": 4.5509067
            },
            "travelTimeInSeconds": 3084
          },
          {
            "distanceInMeters": 52378,
            "point": {
              "latitude": 52.1626997,
              "longitude": 4.5509174
            },
            "travelTimeInSeconds": 3084
          },
          {
            "distanceInMeters": 52383,
            "point": {
              "latitude": 52.1626568,
              "longitude": 4.550947
            },
            "travelTimeInSeconds": 3085
          },
          {
            "distanceInMeters": 52388,
            "point": {
              "latitude": 52.1626192,
              "longitude": 4.5509845
            },
            "travelTimeInSeconds": 3086
          },
          {
            "distanceInMeters": 52393,
            "point": {
              "latitude": 52.1625897,
              "longitude": 4.5510301
            },
            "travelTimeInSeconds": 3086
          },
          {
            "distanceInMeters": 52397,
            "point": {
              "latitude": 52.1625683,
              "longitude": 4.5510757
            },
            "travelTimeInSeconds": 3087
          },
          {
            "distanceInMeters": 52400,
            "point": {
              "latitude": 52.1625549,
              "longitude": 4.5511293
            },
            "travelTimeInSeconds": 3087
          },
          {
            "distanceInMeters": 52405,
            "point": {
              "latitude": 52.1625441,
              "longitude": 4.5511991
            },
            "travelTimeInSeconds": 3087
          },
          {
            "distanceInMeters": 52410,
            "point": {
              "latitude": 52.1625414,
              "longitude": 4.5512635
            },
            "travelTimeInSeconds": 3088
          },
          {
            "distanceInMeters": 52418,
            "point": {
              "latitude": 52.1625602,
              "longitude": 4.5513761
            },
            "travelTimeInSeconds": 3089
          },
          {
            "distanceInMeters": 52422,
            "point": {
              "latitude": 52.162579,
              "longitude": 4.5514351
            },
            "travelTimeInSeconds": 3089
          },
          {
            "distanceInMeters": 52429,
            "point": {
              "latitude": 52.1626166,
              "longitude": 4.5515102
            },
            "travelTimeInSeconds": 3090
          },
          {
            "distanceInMeters": 52436,
            "point": {
              "latitude": 52.1626675,
              "longitude": 4.5515665
            },
            "travelTimeInSeconds": 3090
          },
          {
            "distanceInMeters": 52441,
            "point": {
              "latitude": 52.1627131,
              "longitude": 4.5515853
            },
            "travelTimeInSeconds": 3091
          }
        ],
        "sideRoads": [
          {
            "offsetFromManeuverInMeters": 849,
            "side": "LEFT"
          },
          {
            "offsetFromManeuverInMeters": 188,
            "side": "LEFT"
          }
        ]
      },
      {
        "changeOfAngleInDegrees": 103,
        "drivingSide": "RIGHT",
        "maneuver": "ROUNDABOUT_RIGHT",
        "maneuverPoint": {
          "latitude": 52.1640301,
          "longitude": 4.5567191
        },
        "nextRoadInfo": {
          "properties": [],
          "roadShields": [
            {
              "countryCode": "NLD",
              "roadNumber": {
                "text": "A4"
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
                "text": "N446"
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
        "roundaboutExitNumber": 1,
        "routeOffsetInMeters": 52819,
        "routePath": [
          {
            "distanceInMeters": 52819,
            "point": {
              "latitude": 52.1641991,
              "longitude": 4.5564669
            },
            "travelTimeInSeconds": 3119
          },
          {
            "distanceInMeters": 52825,
            "point": {
              "latitude": 52.1641481,
              "longitude": 4.5564857
            },
            "travelTimeInSeconds": 3119
          },
          {
            "distanceInMeters": 52831,
            "point": {
              "latitude": 52.1641052,
              "longitude": 4.5565259
            },
            "travelTimeInSeconds": 3120
          },
          {
            "distanceInMeters": 52836,
            "point": {
              "latitude": 52.1640703,
              "longitude": 4.5565823
            },
            "travelTimeInSeconds": 3121
          },
          {
            "distanceInMeters": 52842,
            "point": {
              "latitude": 52.1640435,
              "longitude": 4.556652
            },
            "travelTimeInSeconds": 3121
          },
          {
            "distanceInMeters": 52847,
            "point": {
              "latitude": 52.1640301,
              "longitude": 4.5567191
            },
            "travelTimeInSeconds": 3121
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
            "phonetic": "ˈy.trɛxt",
            "phoneticLanguageCode": "nl-NL",
            "text": "Utrecht"
          }
        }
      },
      {
        "drivingSide": "RIGHT",
        "maneuver": "MERGE_RIGHT_LANE",
        "maneuverPoint": {
          "latitude": 52.1554229,
          "longitude": 4.5428681
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
          "properties": [],
          "streetName": {
            "text": ""
          }
        },
        "routeOffsetInMeters": 54219,
        "routePath": [
          {
            "distanceInMeters": 54219,
            "point": {
              "latitude": 52.1554229,
              "longitude": 4.5428681
            },
            "travelTimeInSeconds": 3188
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
        "routeOffsetInMeters": 67161,
        "routePath": [
          {
            "distanceInMeters": 67161,
            "point": {
              "latitude": 52.077738,
              "longitude": 4.4044688
            },
            "travelTimeInSeconds": 3699
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
        "routeOffsetInMeters": 68998,
        "routePath": [
          {
            "distanceInMeters": 68998,
            "point": {
              "latitude": 52.0683101,
              "longitude": 4.3825498
            },
            "travelTimeInSeconds": 3774
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
        "routeOffsetInMeters": 69382,
        "routePath": [
          {
            "distanceInMeters": 69382,
            "point": {
              "latitude": 52.0657969,
              "longitude": 4.3787411
            },
            "travelTimeInSeconds": 3789
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
        "routeOffsetInMeters": 73069,
        "routePath": [
          {
            "distanceInMeters": 73069,
            "point": {
              "latitude": 52.0785105,
              "longitude": 4.3347207
            },
            "travelTimeInSeconds": 3963
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
        "routeOffsetInMeters": 73882,
        "routePath": [
          {
            "distanceInMeters": 73882,
            "point": {
              "latitude": 52.0839769,
              "longitude": 4.3269825
            },
            "travelTimeInSeconds": 4124
          },
          {
            "distanceInMeters": 73891,
            "point": {
              "latitude": 52.0840386,
              "longitude": 4.3269101
            },
            "travelTimeInSeconds": 4127
          },
          {
            "distanceInMeters": 73901,
            "point": {
              "latitude": 52.0839849,
              "longitude": 4.3267904
            },
            "travelTimeInSeconds": 4135
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
        "routeOffsetInMeters": 74125,
        "routePath": [
          {
            "distanceInMeters": 74125,
            "point": {
              "latitude": 52.0828906,
              "longitude": 4.3240508
            },
            "travelTimeInSeconds": 4160
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
        "routeOffsetInMeters": 74614,
        "routePath": [
          {
            "distanceInMeters": 74614,
            "point": {
              "latitude": 52.0835745,
              "longitude": 4.3182385
            },
            "travelTimeInSeconds": 4231
          },
          {
            "distanceInMeters": 74627,
            "point": {
              "latitude": 52.0835021,
              "longitude": 4.3180776
            },
            "travelTimeInSeconds": 4233
          },
          {
            "distanceInMeters": 74637,
            "point": {
              "latitude": 52.0834404,
              "longitude": 4.3179649
            },
            "travelTimeInSeconds": 4234
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
        "routeOffsetInMeters": 75296,
        "routePath": [
          {
            "distanceInMeters": 75296,
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
      "pointIndex": 8,
      "travelTimeInSeconds": 20,
      "distanceInMeters": 123
    },
    {
      "pointIndex": 11,
      "travelTimeInSeconds": 67,
      "distanceInMeters": 276
    },
    {
      "pointIndex": 13,
      "travelTimeInSeconds": 99,
      "distanceInMeters": 433
    },
    {
      "pointIndex": 15,
      "travelTimeInSeconds": 119,
      "distanceInMeters": 474
    },
    {
      "pointIndex": 22,
      "travelTimeInSeconds": 136,
      "distanceInMeters": 610
    },
    {
      "pointIndex": 23,
      "travelTimeInSeconds": 152,
      "distanceInMeters": 620
    },
    {
      "pointIndex": 28,
      "travelTimeInSeconds": 194,
      "distanceInMeters": 814
    },
    {
      "pointIndex": 29,
      "travelTimeInSeconds": 220,
      "distanceInMeters": 875
    },
    {
      "pointIndex": 34,
      "travelTimeInSeconds": 280,
      "distanceInMeters": 1165
    },
    {
      "pointIndex": 35,
      "travelTimeInSeconds": 294,
      "distanceInMeters": 1175
    },
    {
      "pointIndex": 39,
      "travelTimeInSeconds": 310,
      "distanceInMeters": 1267
    },
    {
      "pointIndex": 41,
      "travelTimeInSeconds": 405,
      "distanceInMeters": 1619
    },
    {
      "pointIndex": 42,
      "travelTimeInSeconds": 435,
      "distanceInMeters": 1753
    },
    {
      "pointIndex": 45,
      "travelTimeInSeconds": 483,
      "distanceInMeters": 1871
    },
    {
      "pointIndex": 54,
      "travelTimeInSeconds": 566,
      "distanceInMeters": 2203
    },
    {
      "pointIndex": 55,
      "travelTimeInSeconds": 585,
      "distanceInMeters": 2247
    },
    {
      "pointIndex": 62,
      "travelTimeInSeconds": 635,
      "distanceInMeters": 2424
    },
    {
      "pointIndex": 65,
      "travelTimeInSeconds": 676,
      "distanceInMeters": 2506
    },
    {
      "pointIndex": 76,
      "travelTimeInSeconds": 694,
      "distanceInMeters": 2588
    },
    {
      "pointIndex": 85,
      "travelTimeInSeconds": 727,
      "distanceInMeters": 2694
    },
    {
      "pointIndex": 119,
      "travelTimeInSeconds": 766,
      "distanceInMeters": 3084
    },
    {
      "pointIndex": 125,
      "travelTimeInSeconds": 789,
      "distanceInMeters": 3360
    },
    {
      "pointIndex": 129,
      "travelTimeInSeconds": 828,
      "distanceInMeters": 3444
    },
    {
      "pointIndex": 134,
      "travelTimeInSeconds": 837,
      "distanceInMeters": 3510
    },
    {
      "pointIndex": 136,
      "travelTimeInSeconds": 852,
      "distanceInMeters": 3561
    },
    {
      "pointIndex": 158,
      "travelTimeInSeconds": 898,
      "distanceInMeters": 4340
    },
    {
      "pointIndex": 223,
      "travelTimeInSeconds": 1009,
      "distanceInMeters": 7127
    },
    {
      "pointIndex": 401,
      "travelTimeInSeconds": 1388,
      "distanceInMeters": 17941
    },
    {
      "pointIndex": 473,
      "travelTimeInSeconds": 1523,
      "distanceInMeters": 20870
    },
    {
      "pointIndex": 524,
      "travelTimeInSeconds": 1671,
      "distanceInMeters": 24366
    },
    {
      "pointIndex": 538,
      "travelTimeInSeconds": 1699,
      "distanceInMeters": 24900
    },
    {
      "pointIndex": 571,
      "travelTimeInSeconds": 1824,
      "distanceInMeters": 28229
    },
    {
      "pointIndex": 610,
      "travelTimeInSeconds": 1898,
      "distanceInMeters": 29693
    },
    {
      "pointIndex": 623,
      "travelTimeInSeconds": 1933,
      "distanceInMeters": 30327
    },
    {
      "pointIndex": 657,
      "travelTimeInSeconds": 2067,
      "distanceInMeters": 33226
    },
    {
      "pointIndex": 660,
      "travelTimeInSeconds": 2089,
      "distanceInMeters": 33343
    },
    {
      "pointIndex": 720,
      "travelTimeInSeconds": 2279,
      "distanceInMeters": 37249
    },
    {
      "pointIndex": 741,
      "travelTimeInSeconds": 2395,
      "distanceInMeters": 39169
    },
    {
      "pointIndex": 782,
      "travelTimeInSeconds": 2482,
      "distanceInMeters": 41000
    },
    {
      "pointIndex": 821,
      "travelTimeInSeconds": 2640,
      "distanceInMeters": 44419
    },
    {
      "pointIndex": 822,
      "travelTimeInSeconds": 2650,
      "distanceInMeters": 44458
    },
    {
      "pointIndex": 824,
      "travelTimeInSeconds": 2661,
      "distanceInMeters": 44477
    },
    {
      "pointIndex": 871,
      "travelTimeInSeconds": 2701,
      "distanceInMeters": 44902
    },
    {
      "pointIndex": 953,
      "travelTimeInSeconds": 2972,
      "distanceInMeters": 50645
    },
    {
      "pointIndex": 984,
      "travelTimeInSeconds": 3002,
      "distanceInMeters": 51028
    },
    {
      "pointIndex": 997,
      "travelTimeInSeconds": 3074,
      "distanceInMeters": 52307
    },
    {
      "pointIndex": 1021,
      "travelTimeInSeconds": 3103,
      "distanceInMeters": 52614
    },
    {
      "pointIndex": 1047,
      "travelTimeInSeconds": 3144,
      "distanceInMeters": 53262
    },
    {
      "pointIndex": 1084,
      "travelTimeInSeconds": 3246,
      "distanceInMeters": 55660
    },
    {
      "pointIndex": 1120,
      "travelTimeInSeconds": 3305,
      "distanceInMeters": 57166
    },
    {
      "pointIndex": 1146,
      "travelTimeInSeconds": 3398,
      "distanceInMeters": 59172
    },
    {
      "pointIndex": 1241,
      "travelTimeInSeconds": 3774,
      "distanceInMeters": 69012
    },
    {
      "pointIndex": 1329,
      "travelTimeInSeconds": 3980,
      "distanceInMeters": 73379
    },
    {
      "pointIndex": 1331,
      "travelTimeInSeconds": 3994,
      "distanceInMeters": 73440
    },
    {
      "pointIndex": 1332,
      "travelTimeInSeconds": 4017,
      "distanceInMeters": 73475
    },
    {
      "pointIndex": 1338,
      "travelTimeInSeconds": 4040,
      "distanceInMeters": 73631
    },
    {
      "pointIndex": 1342,
      "travelTimeInSeconds": 4056,
      "distanceInMeters": 73699
    },
    {
      "pointIndex": 1345,
      "travelTimeInSeconds": 4069,
      "distanceInMeters": 73785
    },
    {
      "pointIndex": 1350,
      "travelTimeInSeconds": 4137,
      "distanceInMeters": 73913
    },
    {
      "pointIndex": 1374,
      "travelTimeInSeconds": 4187,
      "distanceInMeters": 74483
    },
    {
      "pointIndex": 1376,
      "travelTimeInSeconds": 4229,
      "distanceInMeters": 74597
    },
    {
      "pointIndex": 1387,
      "travelTimeInSeconds": 4275,
      "distanceInMeters": 74868
    },
    {
      "pointIndex": 1400,
      "travelTimeInSeconds": 4307,
      "distanceInMeters": 75031
    },
    {
      "pointIndex": 1407,
      "travelTimeInSeconds": 4347,
      "distanceInMeters": 75289
    },
    {
      "pointIndex": 1408,
      "travelTimeInSeconds": 4350,
      "distanceInMeters": 75293
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
