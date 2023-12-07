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

var shortRoute =
{
  "summary": {
    "lengthInMeters": 56181,
    "travelTimeInSeconds": 2346,
    "trafficDelayInSeconds": 0,
    "trafficLengthInMeters": 0,
    "departureTime": "2023-11-27T21:23:09+01:00",
    "arrivalTime": "2023-11-27T22:02:14+01:00"
  },
  "legs": [
    {
      "summary": {
        "lengthInMeters": 56181,
        "travelTimeInSeconds": 2346,
        "trafficDelayInSeconds": 0,
        "trafficLengthInMeters": 0,
        "departureTime": "2023-11-27T21:23:09+01:00",
        "arrivalTime": "2023-11-27T22:02:14+01:00"
      },
      "points": [
        {
          "latitude": 52.3656327,
          "longitude": 4.8784451
        },
        {
          "latitude": 52.3654264,
          "longitude": 4.8785895
        },
        {
          "latitude": 52.3652521,
          "longitude": 4.8786512
        },
        {
          "latitude": 52.3650804,
          "longitude": 4.8786673
        },
        {
          "latitude": 52.3649678,
          "longitude": 4.8786592
        },
        {
          "latitude": 52.3647934,
          "longitude": 4.878611
        },
        {
          "latitude": 52.3647559,
          "longitude": 4.8786029
        },
        {
          "latitude": 52.3647183,
          "longitude": 4.8786029
        },
        {
          "latitude": 52.3646325,
          "longitude": 4.8785251
        },
        {
          "latitude": 52.3646191,
          "longitude": 4.8785225
        },
        {
          "latitude": 52.3643938,
          "longitude": 4.8784876
        },
        {
          "latitude": 52.364257,
          "longitude": 4.8785198
        },
        {
          "latitude": 52.3640719,
          "longitude": 4.8785868
        },
        {
          "latitude": 52.3639646,
          "longitude": 4.8786271
        },
        {
          "latitude": 52.3639002,
          "longitude": 4.8786646
        },
        {
          "latitude": 52.3637849,
          "longitude": 4.878729
        },
        {
          "latitude": 52.3637876,
          "longitude": 4.8787022
        },
        {
          "latitude": 52.3637849,
          "longitude": 4.8786539
        },
        {
          "latitude": 52.3637795,
          "longitude": 4.8786163
        },
        {
          "latitude": 52.3637581,
          "longitude": 4.8785305
        },
        {
          "latitude": 52.363573,
          "longitude": 4.8779297
        },
        {
          "latitude": 52.3635381,
          "longitude": 4.877817
        },
        {
          "latitude": 52.363117,
          "longitude": 4.8764437
        },
        {
          "latitude": 52.3630634,
          "longitude": 4.8762667
        },
        {
          "latitude": 52.3629373,
          "longitude": 4.8757866
        },
        {
          "latitude": 52.3628193,
          "longitude": 4.8753172
        },
        {
          "latitude": 52.3628059,
          "longitude": 4.8752609
        },
        {
          "latitude": 52.3627791,
          "longitude": 4.8751563
        },
        {
          "latitude": 52.3623794,
          "longitude": 4.8736006
        },
        {
          "latitude": 52.3622185,
          "longitude": 4.8730481
        },
        {
          "latitude": 52.3618752,
          "longitude": 4.8717231
        },
        {
          "latitude": 52.3612449,
          "longitude": 4.8693305
        },
        {
          "latitude": 52.3608801,
          "longitude": 4.8678955
        },
        {
          "latitude": 52.3608398,
          "longitude": 4.8677266
        },
        {
          "latitude": 52.3607621,
          "longitude": 4.8674127
        },
        {
          "latitude": 52.3604563,
          "longitude": 4.8660126
        },
        {
          "latitude": 52.360341,
          "longitude": 4.8655272
        },
        {
          "latitude": 52.3601425,
          "longitude": 4.8646742
        },
        {
          "latitude": 52.3599118,
          "longitude": 4.8636496
        },
        {
          "latitude": 52.3598126,
          "longitude": 4.8632339
        },
        {
          "latitude": 52.359547,
          "longitude": 4.8621207
        },
        {
          "latitude": 52.3594853,
          "longitude": 4.8618659
        },
        {
          "latitude": 52.3593244,
          "longitude": 4.8612249
        },
        {
          "latitude": 52.3591554,
          "longitude": 4.8605704
        },
        {
          "latitude": 52.359032,
          "longitude": 4.860093
        },
        {
          "latitude": 52.3589838,
          "longitude": 4.859916
        },
        {
          "latitude": 52.3588416,
          "longitude": 4.8593688
        },
        {
          "latitude": 52.358678,
          "longitude": 4.858768
        },
        {
          "latitude": 52.3582783,
          "longitude": 4.8572659
        },
        {
          "latitude": 52.3582274,
          "longitude": 4.8570728
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
      "endPointIndex": 15,
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
      "endPointIndex": 116,
      "sectionType": "LOW_EMISSION_ZONE"
    },
    {
      "startPointIndex": 15,
      "endPointIndex": 122,
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
      "startPointIndex": 0,
      "endPointIndex": 124,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 0,
      "endPointIndex": 159,
      "sectionType": "URBAN"
    },
    {
      "startPointIndex": 133,
      "endPointIndex": 161,
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
      "startPointIndex": 124,
      "endPointIndex": 179,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 295,
      "endPointIndex": 304,
      "sectionType": "TUNNEL"
    },
    {
      "maxSpeedLimitInKmh": 100,
      "startPointIndex": 179,
      "endPointIndex": 307,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 130,
      "startPointIndex": 307,
      "endPointIndex": 509,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 548,
      "endPointIndex": 556,
      "sectionType": "URBAN"
    },
    {
      "startPointIndex": 547,
      "endPointIndex": 575,
      "sectionType": "TUNNEL"
    },
    {
      "maxSpeedLimitInKmh": 100,
      "startPointIndex": 509,
      "endPointIndex": 593,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 205,
      "endPointIndex": 676,
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
      "maxSpeedLimitInKmh": 130,
      "startPointIndex": 593,
      "endPointIndex": 681,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 100,
      "startPointIndex": 681,
      "endPointIndex": 702,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 70,
      "startPointIndex": 702,
      "endPointIndex": 709,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "maxSpeedLimitInKmh": 100,
      "startPointIndex": 709,
      "endPointIndex": 728,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 745,
      "endPointIndex": 759,
      "sectionType": "URBAN"
    },
    {
      "maxSpeedLimitInKmh": 80,
      "startPointIndex": 728,
      "endPointIndex": 779,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 133,
      "endPointIndex": 791,
      "sectionType": "MOTORWAY"
    },
    {
      "startPointIndex": 737,
      "endPointIndex": 791,
      "sectionType": "ROAD_SHIELDS",
      "roadShieldReferences": [
        {
          "reference": "nld-highway",
          "shieldContent": "A12"
        }
      ]
    },
    {
      "startPointIndex": 793,
      "endPointIndex": 795,
      "sectionType": "TUNNEL"
    },
    {
      "maxSpeedLimitInKmh": 70,
      "startPointIndex": 779,
      "endPointIndex": 799,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 832,
      "endPointIndex": 843,
      "sectionType": "TUNNEL"
    },
    {
      "startPointIndex": 838,
      "endPointIndex": 848,
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
      "startPointIndex": 799,
      "endPointIndex": 878,
      "sectionType": "SPEED_LIMIT"
    },
    {
      "startPointIndex": 0,
      "endPointIndex": 878,
      "sectionType": "COUNTRY",
      "countryCode": "NLD"
    },
    {
      "startPointIndex": 849,
      "endPointIndex": 878,
      "sectionType": "LOW_EMISSION_ZONE"
    },
    {
      "startPointIndex": 0,
      "endPointIndex": 878,
      "sectionType": "TRAVEL_MODE",
      "travelMode": "car"
    },
    {
      "startPointIndex": 785,
      "endPointIndex": 878,
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
            "RIGHT"
          ],
          "follow": "RIGHT"
        }
      ],
      "laneSeparators": [
        "SINGLE_SOLID",
        "SINGLE_SOLID",
        "SINGLE_SOLID"
      ],
      "startPointIndex": 14,
      "endPointIndex": 15,
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
      "startPointIndex": 52,
      "endPointIndex": 53,
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
      "startPointIndex": 65,
      "endPointIndex": 68,
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
            "SLIGHT_RIGHT"
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
        },
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
      "startPointIndex": 151,
      "endPointIndex": 152,
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
      "startPointIndex": 209,
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
      "startPointIndex": 240,
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
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 329,
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
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 388,
      "endPointIndex": 389,
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
      "startPointIndex": 402,
      "endPointIndex": 403,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 450,
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
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 498,
      "endPointIndex": 501,
      "sectionType": "LANES"
    },
    {
      "lanes": [
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
        },
        {
          "directions": [
            "STRAIGHT"
          ],
          "follow": "STRAIGHT"
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
      "startPointIndex": 576,
      "endPointIndex": 579,
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
      "startPointIndex": 675,
      "endPointIndex": 676,
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
      "startPointIndex": 688,
      "endPointIndex": 689,
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
      "startPointIndex": 747,
      "endPointIndex": 748,
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
      "startPointIndex": 790,
      "endPointIndex": 791,
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
      "startPointIndex": 800,
      "endPointIndex": 801,
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
      "startPointIndex": 815,
      "endPointIndex": 817,
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
      "startPointIndex": 845,
      "endPointIndex": 846,
      "sectionType": "LANES"
    }
  ],
  "guidance": {
    "instructions": [
      {
        "routeOffsetInMeters": 0,
        "travelTimeInSeconds": 0,
        "point": {
          "latitude": 52.36563,
          "longitude": 4.87845
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
            "latitude": 52.3656301,
            "longitude": 4.8784469
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
        "routeOffsetInMeters": 211,
        "travelTimeInSeconds": 34,
        "point": {
          "latitude": 52.36378,
          "longitude": 4.87873
        },
        "pointIndex": 15,
        "instructionType": "TURN",
        "roadNumbers": [
          "s106"
        ],
        "phoneticRoadNumbers": [
          "ˌɛs.hɔn.dərt.ɛn.ˈzɛs"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "nl-NL"
        ],
        "street": "Overtoom",
        "phoneticStreet": "ˈo.vər.ˌtom",
        "phoneticStreetLanguageCode": "nl-NL",
        "countryCode": "NLD",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": 90,
        "possibleCombineWithNext": false,
        "drivingSide": "RIGHT",
        "maneuver": "TURN_RIGHT",
        "message": "Turn right onto <street>Overtoom</street>/<roadNumber>s106</roadNumber>",
        "mainAnnouncement": {
          "point": {
            "latitude": 52.3655419,
            "longitude": 4.8785086
          },
          "pointIndex": 0,
          "maneuver": "TURN_RIGHT",
          "distanceInMeters": 200
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 52.3641519,
            "longitude": 4.8785578
          },
          "pointIndex": 11,
          "maneuver": "TURN_RIGHT",
          "distanceInMeters": 43
        },
        "roadShieldReferences": [
          {
            "reference": "nld-connector",
            "shieldContent": "s106"
          }
        ]
      },
      {
        "routeOffsetInMeters": 1914,
        "travelTimeInSeconds": 265,
        "point": {
          "latitude": 52.35788,
          "longitude": 4.85571
        },
        "pointIndex": 53,
        "instructionType": "TURN",
        "roadNumbers": [
          "s106"
        ],
        "phoneticRoadNumbers": [
          "ˌɛs.hɔn.dərt.ɛn.ˈzɛs"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "nl-NL"
        ],
        "street": "Surinamestraat",
        "phoneticStreet": "sy.ri.ˈna.mə.ˌstrat",
        "phoneticStreetLanguageCode": "nl-NL",
        "countryCode": "NLD",
        "junctionType": "REGULAR",
        "turnAngleInDecimalDegrees": 90,
        "possibleCombineWithNext": true,
        "drivingSide": "RIGHT",
        "maneuver": "TURN_RIGHT",
        "message": "Turn right onto <street>Surinamestraat</street>/<roadNumber>s106</roadNumber>",
        "combinedMessage": "Turn right onto <street>Surinamestraat</street>/<roadNumber>s106</roadNumber> then at the roundabout take the <roundaboutExitNumber>second</roundaboutExitNumber> exit onto <roadNumber>s106</roadNumber>",
        "earlyWarningAnnouncement": {
          "point": {
            "latitude": 52.3599579,
            "longitude": 4.8638545
          },
          "pointIndex": 37,
          "maneuver": "AHEAD_RIGHT_TURN",
          "distanceInMeters": 600
        },
        "mainAnnouncement": {
          "point": {
            "latitude": 52.3589422,
            "longitude": 4.8597558
          },
          "pointIndex": 45,
          "maneuver": "TURN_RIGHT",
          "distanceInMeters": 300
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 52.3580543,
            "longitude": 4.8563926
          },
          "pointIndex": 50,
          "maneuver": "TURN_RIGHT",
          "distanceInMeters": 50
        },
        "roadShieldReferences": [
          {
            "reference": "nld-connector",
            "shieldContent": "s106"
          }
        ]
      },
      {
        "routeOffsetInMeters": 2076,
        "travelTimeInSeconds": 300,
        "point": {
          "latitude": 52.3584,
          "longitude": 4.85366
        },
        "pointIndex": 68,
        "instructionType": "TURN",
        "roadNumbers": [
          "s106"
        ],
        "phoneticRoadNumbers": [
          "ˌɛs.hɔn.dərt.ɛn.ˈzɛs"
        ],
        "phoneticRoadNumberLanguageCodes": [
          "nl-NL"
        ],
        "countryCode": "NLD",
        "junctionType": "ROUNDABOUT",
        "turnAngleInDecimalDegrees": -90,
        "roundaboutExitNumber": 2,
        "possibleCombineWithNext": false,
        "drivingSide": "RIGHT",
        "maneuver": "ROUNDABOUT_LEFT",
        "message": "At the roundabout take the <roundaboutExitNumber>second</roundaboutExitNumber> exit onto <roadNumber>s106</roadNumber>",
        "confirmationAnnouncement": {
          "point": {
            "latitude": 52.3582094,
            "longitude": 4.8539512
          },
          "pointIndex": 64,
          "maneuver": "ROUNDABOUT_LEFT",
          "distanceInMeters": 30
        },
        "roadShieldReferences": [
          {
            "reference": "nld-connector",
            "shieldContent": "s106"
          }
        ]
      },
      {
        "routeOffsetInMeters": 2842,
        "travelTimeInSeconds": 380,
        "point": {
          "latitude": 52.3582,
          "longitude": 4.84301
        },
        "pointIndex": 116,
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
            "latitude": 52.3581766,
            "longitude": 4.8518025
          },
          "pointIndex": 92,
          "maneuver": "AHEAD_LEFT_TURN",
          "distanceInMeters": 600
        },
        "mainAnnouncement": {
          "point": {
            "latitude": 52.3581211,
            "longitude": 4.8473769
          },
          "pointIndex": 108,
          "maneuver": "TURN_LEFT",
          "distanceInMeters": 300
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 52.3580854,
            "longitude": 4.8440086
          },
          "pointIndex": 113,
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
            "shieldContent": "s107"
          }
        ]
      },
      {
        "routeOffsetInMeters": 3383,
        "travelTimeInSeconds": 426,
        "point": {
          "latitude": 52.35404,
          "longitude": 4.84249
        },
        "pointIndex": 133,
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
        "routeOffsetInMeters": 4453,
        "travelTimeInSeconds": 475,
        "point": {
          "latitude": 52.34451,
          "longitude": 4.84091
        },
        "pointIndex": 161,
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
            "latitude": 52.3572911,
            "longitude": 4.8419632
          },
          "pointIndex": 125,
          "maneuver": "AHEAD_EXIT_LEFT",
          "distanceInMeters": 1434
        },
        "mainAnnouncement": {
          "point": {
            "latitude": 52.3516012,
            "longitude": 4.8424198
          },
          "pointIndex": 142,
          "maneuver": "MOTORWAY_EXIT_LEFT",
          "distanceInMeters": 800
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 52.3480957,
            "longitude": 4.8411039
          },
          "pointIndex": 152,
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
        "routeOffsetInMeters": 6039,
        "travelTimeInSeconds": 537,
        "point": {
          "latitude": 52.33885,
          "longitude": 4.82532
        },
        "pointIndex": 205,
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
        "routeOffsetInMeters": 6399,
        "travelTimeInSeconds": 550,
        "point": {
          "latitude": 52.33876,
          "longitude": 4.82003
        },
        "pointIndex": 210,
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
          "pointIndex": 188,
          "maneuver": "STRAIGHT",
          "distanceInMeters": 800
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 52.3388152,
            "longitude": 4.823284
          },
          "pointIndex": 206,
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
        "routeOffsetInMeters": 8003,
        "travelTimeInSeconds": 605,
        "point": {
          "latitude": 52.33181,
          "longitude": 4.80051
        },
        "pointIndex": 241,
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
          "pointIndex": 226,
          "maneuver": "STRAIGHT",
          "distanceInMeters": 800
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 52.3343348,
            "longitude": 4.8045722
          },
          "pointIndex": 231,
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
        "routeOffsetInMeters": 8553,
        "travelTimeInSeconds": 623,
        "point": {
          "latitude": 52.32867,
          "longitude": 4.79432
        },
        "pointIndex": 249,
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
          "pointIndex": 245,
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
        "routeOffsetInMeters": 22849,
        "travelTimeInSeconds": 1075,
        "point": {
          "latitude": 52.23849,
          "longitude": 4.65531
        },
        "pointIndex": 403,
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
          "pointIndex": 385,
          "maneuver": "AHEAD_KEEP_LEFT",
          "distanceInMeters": 2000
        },
        "mainAnnouncement": {
          "point": {
            "latitude": 52.2439038,
            "longitude": 4.6630178
          },
          "pointIndex": 394,
          "maneuver": "KEEP_LEFT",
          "distanceInMeters": 800
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 52.2411928,
            "longitude": 4.6591691
          },
          "pointIndex": 396,
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
        "routeOffsetInMeters": 23459,
        "travelTimeInSeconds": 1093,
        "point": {
          "latitude": 52.23428,
          "longitude": 4.64957
        },
        "pointIndex": 407,
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
          "pointIndex": 407,
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
        "routeOffsetInMeters": 48046,
        "travelTimeInSeconds": 1840,
        "point": {
          "latitude": 52.07774,
          "longitude": 4.40447
        },
        "pointIndex": 676,
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
          "pointIndex": 658,
          "maneuver": "AHEAD_EXIT",
          "distanceInMeters": 2000
        },
        "mainAnnouncement": {
          "point": {
            "latitude": 52.0833247,
            "longitude": 4.4117642
          },
          "pointIndex": 663,
          "maneuver": "TAKE_EXIT",
          "distanceInMeters": 800
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 52.0805204,
            "longitude": 4.4081154
          },
          "pointIndex": 667,
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
        "routeOffsetInMeters": 48810,
        "travelTimeInSeconds": 1867,
        "point": {
          "latitude": 52.07385,
          "longitude": 4.39533
        },
        "pointIndex": 689,
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
          "pointIndex": 677,
          "maneuver": "KEEP_LEFT",
          "distanceInMeters": 700
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 52.0757002,
            "longitude": 4.4003413
          },
          "pointIndex": 682,
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
        "routeOffsetInMeters": 49884,
        "travelTimeInSeconds": 1904,
        "point": {
          "latitude": 52.06831,
          "longitude": 4.38255
        },
        "pointIndex": 710,
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
          "pointIndex": 693,
          "maneuver": "TAKE_EXIT",
          "distanceInMeters": 800
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 52.0705651,
            "longitude": 4.3870596
          },
          "pointIndex": 702,
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
        "routeOffsetInMeters": 50267,
        "travelTimeInSeconds": 1918,
        "point": {
          "latitude": 52.0658,
          "longitude": 4.37874
        },
        "pointIndex": 716,
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
          "pointIndex": 711,
          "maneuver": "KEEP_RIGHT",
          "distanceInMeters": 300
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 52.066489,
            "longitude": 4.3796758
          },
          "pointIndex": 713,
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
        "routeOffsetInMeters": 51136,
        "travelTimeInSeconds": 1957,
        "point": {
          "latitude": 52.0641,
          "longitude": 4.36785
        },
        "pointIndex": 737,
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
        "routeOffsetInMeters": 53955,
        "travelTimeInSeconds": 2089,
        "point": {
          "latitude": 52.07851,
          "longitude": 4.33472
        },
        "pointIndex": 791,
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
          "pointIndex": 754,
          "maneuver": "AHEAD_EXIT",
          "distanceInMeters": 2000
        },
        "mainAnnouncement": {
          "point": {
            "latitude": 52.0731667,
            "longitude": 4.3423712
          },
          "pointIndex": 767,
          "maneuver": "TAKE_EXIT",
          "distanceInMeters": 800
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 52.0760927,
            "longitude": 4.3374671
          },
          "pointIndex": 779,
          "maneuver": "TAKE_EXIT",
          "distanceInMeters": 328
        }
      },
      {
        "routeOffsetInMeters": 54328,
        "travelTimeInSeconds": 2112,
        "point": {
          "latitude": 52.08105,
          "longitude": 4.3312
        },
        "pointIndex": 801,
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
          "pointIndex": 792,
          "maneuver": "STRAIGHT",
          "distanceInMeters": 300
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 52.0804356,
            "longitude": 4.3322857
          },
          "pointIndex": 797,
          "maneuver": "STRAIGHT",
          "distanceInMeters": 100
        }
      },
      {
        "routeOffsetInMeters": 54768,
        "travelTimeInSeconds": 2185,
        "point": {
          "latitude": 52.08398,
          "longitude": 4.32698
        },
        "pointIndex": 817,
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
          "pointIndex": 810,
          "maneuver": "TURN_LEFT",
          "distanceInMeters": 200
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 52.0835358,
            "longitude": 4.3274801
          },
          "pointIndex": 816,
          "maneuver": "TURN_LEFT",
          "distanceInMeters": 60
        }
      },
      {
        "routeOffsetInMeters": 55010,
        "travelTimeInSeconds": 2216,
        "point": {
          "latitude": 52.08289,
          "longitude": 4.32405
        },
        "pointIndex": 827,
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
          "pointIndex": 823,
          "maneuver": "KEEP_LEFT",
          "distanceInMeters": 100
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 52.0829828,
            "longitude": 4.3242993
          },
          "pointIndex": 826,
          "maneuver": "KEEP_LEFT",
          "distanceInMeters": 20
        }
      },
      {
        "routeOffsetInMeters": 55485,
        "travelTimeInSeconds": 2264,
        "point": {
          "latitude": 52.0835,
          "longitude": 4.3184
        },
        "pointIndex": 846,
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
          "pointIndex": 829,
          "maneuver": "AHEAD_LEFT_TURN",
          "distanceInMeters": 425
        },
        "mainAnnouncement": {
          "point": {
            "latitude": 52.0820378,
            "longitude": 4.3219294
          },
          "pointIndex": 834,
          "maneuver": "TURN_LEFT",
          "distanceInMeters": 300
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 52.0831627,
            "longitude": 4.3192635
          },
          "pointIndex": 844,
          "maneuver": "TURN_LEFT",
          "distanceInMeters": 70
        }
      },
      {
        "routeOffsetInMeters": 56181,
        "travelTimeInSeconds": 2346,
        "point": {
          "latitude": 52.08019,
          "longitude": 4.31014
        },
        "pointIndex": 878,
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
          "pointIndex": 870,
          "maneuver": "ARRIVE",
          "distanceInMeters": 200
        },
        "confirmationAnnouncement": {
          "point": {
            "latitude": 52.0803815,
            "longitude": 4.3104423
          },
          "pointIndex": 874,
          "maneuver": "ARRIVE",
          "distanceInMeters": 30
        }
      }
    ],
    "instructionGroups": [
      {
        "firstInstructionIndex": 0,
        "lastInstructionIndex": 5,
        "groupMessage": "Leave from <street>Nassaukade</street>. Take the <roadNumber>s100</roadNumber> then follow <street>Overtoom</street>, <street>Surinamestraat</street>/<roadNumber>s106</roadNumber>. Continue on <roadNumber>A10</roadNumber>/<roadNumber>E22</roadNumber> toward <signpostText>Den Haag</signpostText>",
        "groupLengthInMeters": 4453
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
      "pointIndex": 11,
      "travelTimeInSeconds": 21,
      "distanceInMeters": 156
    },
    {
      "pointIndex": 18,
      "travelTimeInSeconds": 40,
      "distanceInMeters": 219
    },
    {
      "pointIndex": 23,
      "travelTimeInSeconds": 64,
      "distanceInMeters": 398
    },
    {
      "pointIndex": 27,
      "travelTimeInSeconds": 92,
      "distanceInMeters": 481
    },
    {
      "pointIndex": 31,
      "travelTimeInSeconds": 138,
      "distanceInMeters": 914
    },
    {
      "pointIndex": 43,
      "travelTimeInSeconds": 211,
      "distanceInMeters": 1554
    },
    {
      "pointIndex": 50,
      "travelTimeInSeconds": 244,
      "distanceInMeters": 1832
    },
    {
      "pointIndex": 67,
      "travelTimeInSeconds": 297,
      "distanceInMeters": 2066
    },
    {
      "pointIndex": 107,
      "travelTimeInSeconds": 337,
      "distanceInMeters": 2492
    },
    {
      "pointIndex": 113,
      "travelTimeInSeconds": 355,
      "distanceInMeters": 2768
    },
    {
      "pointIndex": 119,
      "travelTimeInSeconds": 383,
      "distanceInMeters": 2870
    },
    {
      "pointIndex": 122,
      "travelTimeInSeconds": 388,
      "distanceInMeters": 2918
    },
    {
      "pointIndex": 124,
      "travelTimeInSeconds": 402,
      "distanceInMeters": 2969
    },
    {
      "pointIndex": 177,
      "travelTimeInSeconds": 499,
      "distanceInMeters": 5055
    },
    {
      "pointIndex": 277,
      "travelTimeInSeconds": 692,
      "distanceInMeters": 10606
    },
    {
      "pointIndex": 381,
      "travelTimeInSeconds": 987,
      "distanceInMeters": 19955
    },
    {
      "pointIndex": 566,
      "travelTimeInSeconds": 1496,
      "distanceInMeters": 36820
    },
    {
      "pointIndex": 694,
      "travelTimeInSeconds": 1876,
      "distanceInMeters": 49089
    },
    {
      "pointIndex": 738,
      "travelTimeInSeconds": 1959,
      "distanceInMeters": 51177
    },
    {
      "pointIndex": 800,
      "travelTimeInSeconds": 2108,
      "distanceInMeters": 54297
    },
    {
      "pointIndex": 804,
      "travelTimeInSeconds": 2130,
      "distanceInMeters": 54387
    },
    {
      "pointIndex": 816,
      "travelTimeInSeconds": 2163,
      "distanceInMeters": 54697
    },
    {
      "pointIndex": 818,
      "travelTimeInSeconds": 2186,
      "distanceInMeters": 54776
    },
    {
      "pointIndex": 820,
      "travelTimeInSeconds": 2198,
      "distanceInMeters": 54801
    },
    {
      "pointIndex": 844,
      "travelTimeInSeconds": 2241,
      "distanceInMeters": 55371
    },
    {
      "pointIndex": 851,
      "travelTimeInSeconds": 2272,
      "distanceInMeters": 55555
    },
    {
      "pointIndex": 878,
      "travelTimeInSeconds": 2346,
      "distanceInMeters": 56181
    }
  ]
};

var longRoute =
    {
      "summary": {
        "lengthInMeters": 94846,
        "travelTimeInSeconds": 3663,
        "trafficDelayInSeconds": 0,
        "trafficLengthInMeters": 0,
        "departureTime": "2023-11-27T21:23:09+01:00",
        "arrivalTime": "2023-11-27T22:24:12+01:00",
        "deviationDistance": 211,
        "deviationTime": 34,
        "deviationPoint": {
          "latitude": 52.3637849,
          "longitude": 4.878729
        }
      },
      "legs": [
        {
          "summary": {
            "lengthInMeters": 94846,
            "travelTimeInSeconds": 3663,
            "trafficDelayInSeconds": 0,
            "trafficLengthInMeters": 0,
            "departureTime": "2023-11-27T21:23:09+01:00",
            "arrivalTime": "2023-11-27T22:24:12+01:00"
          },
          "points": [
            {
              "latitude": 52.3656327,
              "longitude": 4.8784451
            },
            {
              "latitude": 52.3654264,
              "longitude": 4.8785895
            },
            {
              "latitude": 52.3652521,
              "longitude": 4.8786512
            },
            {
              "latitude": 52.3650804,
              "longitude": 4.8786673
            },
            {
              "latitude": 52.3649678,
              "longitude": 4.8786592
            },
            {
              "latitude": 52.3647934,
              "longitude": 4.878611
            },
            {
              "latitude": 52.3647559,
              "longitude": 4.8786029
            },
            {
              "latitude": 52.3647183,
              "longitude": 4.8786029
            },
            {
              "latitude": 52.3646325,
              "longitude": 4.8785251
            },
            {
              "latitude": 52.3646191,
              "longitude": 4.8785225
            },
            {
              "latitude": 52.3643938,
              "longitude": 4.8784876
            },
            {
              "latitude": 52.364257,
              "longitude": 4.8785198
            },
            {
              "latitude": 52.3640719,
              "longitude": 4.8785868
            },
            {
              "latitude": 52.3639646,
              "longitude": 4.8786271
            },
            {
              "latitude": 52.3639002,
              "longitude": 4.8786646
            },
            {
              "latitude": 52.3637849,
              "longitude": 4.878729
            },
            {
              "latitude": 52.3637179,
              "longitude": 4.8787773
            },
            {
              "latitude": 52.3636803,
              "longitude": 4.8788202
            },
            {
              "latitude": 52.3635864,
              "longitude": 4.8789677
            },
            {
              "latitude": 52.3634014,
              "longitude": 4.8792708
            },
            {
              "latitude": 52.3633209,
              "longitude": 4.8794049
            },
            {
              "latitude": 52.3632109,
              "longitude": 4.8795444
            },
            {
              "latitude": 52.3630527,
              "longitude": 4.8797455
            },
            {
              "latitude": 52.3629212,
              "longitude": 4.879936
            },
            {
              "latitude": 52.3628461,
              "longitude": 4.8800299
            },
            {
              "latitude": 52.3627281,
              "longitude": 4.8802096
            },
            {
              "latitude": 52.3625994,
              "longitude": 4.8803651
            },
            {
              "latitude": 52.3625457,
              "longitude": 4.8804268
            },
            {
              "latitude": 52.362366,
              "longitude": 4.8806334
            },
            {
              "latitude": 52.3623419,
              "longitude": 4.8806709
            },
            {
              "latitude": 52.362189,
              "longitude": 4.8808426
            },
            {
              "latitude": 52.3620898,
              "longitude": 4.8809847
            },
            {
              "latitude": 52.361953,
              "longitude": 4.8812154
            },
            {
              "latitude": 52.3618698,
              "longitude": 4.8814166
            },
            {
              "latitude": 52.3618269,
              "longitude": 4.8815426
            },
            {
              "latitude": 52.3617491,
              "longitude": 4.8818001
            },
            {
              "latitude": 52.3617277,
              "longitude": 4.8818725
            },
            {
              "latitude": 52.3616901,
              "longitude": 4.8820603
            },
            {
              "latitude": 52.3616821,
              "longitude": 4.8821434
            },
            {
              "latitude": 52.3616794,
              "longitude": 4.8822078
            },
            {
              "latitude": 52.3616821,
              "longitude": 4.8823553
            },
            {
              "latitude": 52.3616982,
              "longitude": 4.8824063
            },
            {
              "latitude": 52.3616928,
              "longitude": 4.8825055
            },
            {
              "latitude": 52.3616928,
              "longitude": 4.8826826
            },
            {
              "latitude": 52.3616928,
              "longitude": 4.8828676
            },
            {
              "latitude": 52.3616713,
              "longitude": 4.883455
            },
            {
              "latitude": 52.3616472,
              "longitude": 4.883616
            },
            {
              "latitude": 52.3615909,
              "longitude": 4.8838547
            },
            {
              "latitude": 52.3615345,
              "longitude": 4.8840237
            },
            {
              "latitude": 52.3614621,
              "longitude": 4.8840961
            },
            {
              "latitude": 52.361277,
              "longitude": 4.8844689
            },
            {
              "latitude": 52.3609793,
              "longitude": 4.885051
            },
            {
              "latitude": 52.3608398,
              "longitude": 4.8853326
            },
            {
              "latitude": 52.3606467,
              "longitude": 4.8857135
            },
            {
              "latitude": 52.3605341,
              "longitude": 4.8859549
            },
            {
              "latitude": 52.3604617,
              "longitude": 4.886097
            },
            {
              "latitude": 52.3602873,
              "longitude": 4.8864618
            },
            {
              "latitude": 52.3601398,
              "longitude": 4.8867434
            },
            {
              "latitude": 52.3600861,
              "longitude": 4.8868561
            },
            {
              "latitude": 52.3600271,
              "longitude": 4.8869634
            },
            {
              "latitude": 52.3599198,
              "longitude": 4.8871431
            },
            {
              "latitude": 52.3598957,
              "longitude": 4.887186
            },
            {
              "latitude": 52.3597509,
              "longitude": 4.8874301000000004
            },
            {
              "latitude": 52.3596919,
              "longitude": 4.8875079
            },
            {
              "latitude": 52.3595953,
              "longitude": 4.8876634
            },
            {
              "latitude": 52.3595738,
              "longitude": 4.8877385
            },
            {
              "latitude": 52.3593727,
              "longitude": 4.8879611
            },
            {
              "latitude": 52.3590401,
              "longitude": 4.8883098
            },
            {
              "latitude": 52.3587826,
              "longitude": 4.8886424
            },
            {
              "latitude": 52.3585519,
              "longitude": 4.8890528
            },
            {
              "latitude": 52.3583829,
              "longitude": 4.8894498
            },
            {
              "latitude": 52.3583239,
              "longitude": 4.8896348
            },
            {
              "latitude": 52.358273,
              "longitude": 4.8897824
            },
            {
              "latitude": 52.3581684,
              "longitude": 4.8901579
            },
            {
              "latitude": 52.3581147,
              "longitude": 4.8904073
            },
            {
              "latitude": 52.3580423,
              "longitude": 4.8908311
            },
            {
              "latitude": 52.3580182,
              "longitude": 4.8910376
            },
            {
              "latitude": 52.3579592,
              "longitude": 4.8918155
            },
            {
              "latitude": 52.3578921,
              "longitude": 4.892832
            },
            {
              "latitude": 52.3577687,
              "longitude": 4.8953345
            },
            {
              "latitude": 52.3576641,
              "longitude": 4.8971987
            },
            {
              "latitude": 52.3576319,
              "longitude": 4.8977941
            },
            {
              "latitude": 52.3576131,
              "longitude": 4.897829
            },
            {
              "latitude": 52.3575863,
              "longitude": 4.898183
            },
            {
              "latitude": 52.3575863,
              "longitude": 4.898293
            },
            {
              "latitude": 52.3575917,
              "longitude": 4.8984057
            },
            {
              "latitude": 52.3576802,
              "longitude": 4.8989019
            },
            {
              "latitude": 52.3577473,
              "longitude": 4.899213
            },
            {
              "latitude": 52.3577768,
              "longitude": 4.8993659
            },
            {
              "latitude": 52.3578921,
              "longitude": 4.8999023
            },
            {
              "latitude": 52.3579323,
              "longitude": 4.9000928
            },
            {
              "latitude": 52.3579779,
              "longitude": 4.9001598
            },
            {
              "latitude": 52.3582354,
              "longitude": 4.9013454
            },
            {
              "latitude": 52.3583373,
              "longitude": 4.9017933
            },
            {
              "latitude": 52.3584205,
              "longitude": 4.9021661
            },
            {
              "latitude": 52.3585385,
              "longitude": 4.9026677
            },
            {
              "latitude": 52.3586699,
              "longitude": 4.9033517
            },
            {
              "latitude": 52.3586512,
              "longitude": 4.9034402
            },
            {
              "latitude": 52.358686,
              "longitude": 4.9037862
            },
            {
              "latitude": 52.3582783,
              "longitude": 4.9039793
            },
            {
              "latitude": 52.3579618,
              "longitude": 4.9041322
            },
            {
              "latitude": 52.3574147,
              "longitude": 4.9043977
            },
            {
              "latitude": 52.3573127,
              "longitude": 4.9044487
            },
            {
              "latitude": 52.3570365,
              "longitude": 4.9045721
            },
            {
              "latitude": 52.3567253,
              "longitude": 4.9047357
            },
            {
              "latitude": 52.356551,
              "longitude": 4.9048215
            },
            {
              "latitude": 52.3565027,
              "longitude": 4.9048001
            },
            {
              "latitude": 52.3562694,
              "longitude": 4.9049073
            },
            {
              "latitude": 52.3560306,
              "longitude": 4.9050227
            },
            {
              "latitude": 52.3559529,
              "longitude": 4.905071
            },
            {
              "latitude": 52.355859,
              "longitude": 4.9051353
            },
            {
              "latitude": 52.3555827,
              "longitude": 4.9053526
            },
            {
              "latitude": 52.3554996,
              "longitude": 4.9054143
            },
            {
              "latitude": 52.3554781,
              "longitude": 4.9054733
            },
            {
              "latitude": 52.3554245,
              "longitude": 4.9055135
            },
            {
              "latitude": 52.3552635,
              "longitude": 4.905645
            },
            {
              "latitude": 52.3550141,
              "longitude": 4.9058488
            },
            {
              "latitude": 52.3548022,
              "longitude": 4.9060205
            },
            {
              "latitude": 52.3546332,
              "longitude": 4.906168
            },
            {
              "latitude": 52.3541987,
              "longitude": 4.9065569
            },
            {
              "latitude": 52.3538178,
              "longitude": 4.9069485
            },
            {
              "latitude": 52.3535335,
              "longitude": 4.9072704
            },
            {
              "latitude": 52.3532036,
              "longitude": 4.9076325
            },
            {
              "latitude": 52.3529944,
              "longitude": 4.9078524
            },
            {
              "latitude": 52.3524338,
              "longitude": 4.9083164
            },
            {
              "latitude": 52.3520663,
              "longitude": 4.9085766
            },
            {
              "latitude": 52.3517445,
              "longitude": 4.9087831
            },
            {
              "latitude": 52.3513287,
              "longitude": 4.9090245
            },
            {
              "latitude": 52.3512349,
              "longitude": 4.9090782
            },
            {
              "latitude": 52.3503605,
              "longitude": 4.9095342
            },
            {
              "latitude": 52.3503068,
              "longitude": 4.9095261
            },
            {
              "latitude": 52.3500493,
              "longitude": 4.9096441
            },
            {
              "latitude": 52.3499528,
              "longitude": 4.9096897
            },
            {
              "latitude": 52.3497945,
              "longitude": 4.9097434
            },
            {
              "latitude": 52.3497221,
              "longitude": 4.9097675
            },
            {
              "latitude": 52.3496363,
              "longitude": 4.9097943
            },
            {
              "latitude": 52.3493546,
              "longitude": 4.9099177
            },
            {
              "latitude": 52.3491964,
              "longitude": 4.909966
            },
            {
              "latitude": 52.348896,
              "longitude": 4.9100921
            },
            {
              "latitude": 52.3486653,
              "longitude": 4.9102128
            },
            {
              "latitude": 52.3485097,
              "longitude": 4.9103361
            },
            {
              "latitude": 52.3482952,
              "longitude": 4.9106178
            },
            {
              "latitude": 52.3478553,
              "longitude": 4.9111408
            },
            {
              "latitude": 52.3477721,
              "longitude": 4.9112239
            },
            {
              "latitude": 52.3475334,
              "longitude": 4.9114466
            },
            {
              "latitude": 52.3474771,
              "longitude": 4.9114814
            },
            {
              "latitude": 52.3472384,
              "longitude": 4.9115995
            },
            {
              "latitude": 52.3471794,
              "longitude": 4.9116236
            },
            {
              "latitude": 52.347123,
              "longitude": 4.9116477
            },
            {
              "latitude": 52.3470426,
              "longitude": 4.9116772
            },
            {
              "latitude": 52.3467958,
              "longitude": 4.9117684
            },
            {
              "latitude": 52.3464283,
              "longitude": 4.9119696
            },
            {
              "latitude": 52.3460448,
              "longitude": 4.9121305
            },
            {
              "latitude": 52.3455942,
              "longitude": 4.9122995
            },
            {
              "latitude": 52.3447922,
              "longitude": 4.9125195
            },
            {
              "latitude": 52.344414,
              "longitude": 4.9126536
            },
            {
              "latitude": 52.3437032,
              "longitude": 4.9129701
            },
            {
              "latitude": 52.3433733,
              "longitude": 4.9130237
            },
            {
              "latitude": 52.3433626,
              "longitude": 4.9130237
            },
            {
              "latitude": 52.3432338,
              "longitude": 4.9130049
            },
            {
              "latitude": 52.3431373,
              "longitude": 4.9129835
            },
            {
              "latitude": 52.3428288,
              "longitude": 4.9128869
            },
            {
              "latitude": 52.3426116,
              "longitude": 4.9127823
            },
            {
              "latitude": 52.3424613,
              "longitude": 4.9126831
            },
            {
              "latitude": 52.3423085,
              "longitude": 4.9125597
            },
            {
              "latitude": 52.3421556,
              "longitude": 4.9124229
            },
            {
              "latitude": 52.3418364,
              "longitude": 4.912042
            },
            {
              "latitude": 52.341713,
              "longitude": 4.9118543
            },
            {
              "latitude": 52.3415843,
              "longitude": 4.911629
            },
            {
              "latitude": 52.3413858,
              "longitude": 4.9112803
            },
            {
              "latitude": 52.3411819,
              "longitude": 4.9108538
            },
            {
              "latitude": 52.3409969,
              "longitude": 4.9104032
            },
            {
              "latitude": 52.3407662,
              "longitude": 4.9097595
            },
            {
              "latitude": 52.340616,
              "longitude": 4.9091882
            },
            {
              "latitude": 52.3405114,
              "longitude": 4.9086678
            },
            {
              "latitude": 52.3404577,
              "longitude": 4.9082708
            },
            {
              "latitude": 52.3404443,
              "longitude": 4.9080938
            },
            {
              "latitude": 52.3403934,
              "longitude": 4.9076271
            },
            {
              "latitude": 52.3403692,
              "longitude": 4.9074635
            },
            {
              "latitude": 52.3402807,
              "longitude": 4.9075547
            },
            {
              "latitude": 52.3399052,
              "longitude": 4.9080321
            },
            {
              "latitude": 52.3392963,
              "longitude": 4.9087563
            },
            {
              "latitude": 52.339181,
              "longitude": 4.9088877
            },
            {
              "latitude": 52.3388672,
              "longitude": 4.9092445
            },
            {
              "latitude": 52.3386714,
              "longitude": 4.9094617
            },
            {
              "latitude": 52.3383549,
              "longitude": 4.9098131
            },
            {
              "latitude": 52.3382771,
              "longitude": 4.9099016
            },
            {
              "latitude": 52.3382503,
              "longitude": 4.9099338
            },
            {
              "latitude": 52.3382074,
              "longitude": 4.9099848
            },
            {
              "latitude": 52.3379365,
              "longitude": 4.9102852
            },
            {
              "latitude": 52.3374322,
              "longitude": 4.910835
            },
            {
              "latitude": 52.3370138,
              "longitude": 4.911232
            },
            {
              "latitude": 52.3366839,
              "longitude": 4.9114814
            },
            {
              "latitude": 52.3364908,
              "longitude": 4.9116075
            },
            {
              "latitude": 52.336185,
              "longitude": 4.9117792
            },
            {
              "latitude": 52.3360428,
              "longitude": 4.9118462
            },
            {
              "latitude": 52.3357666,
              "longitude": 4.9119562
            },
            {
              "latitude": 52.3353159,
              "longitude": 4.9120796
            },
            {
              "latitude": 52.3344496,
              "longitude": 4.912219
            },
            {
              "latitude": 52.3340875,
              "longitude": 4.91227
            },
            {
              "latitude": 52.332041,
              "longitude": 4.9125811
            },
            {
              "latitude": 52.3315984,
              "longitude": 4.9126482
            },
            {
              "latitude": 52.3311424,
              "longitude": 4.9127179
            },
            {
              "latitude": 52.330901,
              "longitude": 4.9127582
            },
            {
              "latitude": 52.3308206,
              "longitude": 4.9127662
            },
            {
              "latitude": 52.3301393,
              "longitude": 4.9128655
            },
            {
              "latitude": 52.3294178,
              "longitude": 4.9129862
            },
            {
              "latitude": 52.3286453,
              "longitude": 4.9131069
            },
            {
              "latitude": 52.3284736,
              "longitude": 4.9131364
            },
            {
              "latitude": 52.3283395,
              "longitude": 4.9131632
            },
            {
              "latitude": 52.3282537,
              "longitude": 4.9131793
            },
            {
              "latitude": 52.3279157,
              "longitude": 4.9132276
            },
            {
              "latitude": 52.3262554,
              "longitude": 4.913477
            },
            {
              "latitude": 52.3256895,
              "longitude": 4.9135628
            },
            {
              "latitude": 52.3245388,
              "longitude": 4.9137586
            },
            {
              "latitude": 52.3241311,
              "longitude": 4.9138471
            },
            {
              "latitude": 52.3236188,
              "longitude": 4.9139839
            },
            {
              "latitude": 52.3229295,
              "longitude": 4.91422
            },
            {
              "latitude": 52.3220631,
              "longitude": 4.9145713
            },
            {
              "latitude": 52.3212183,
              "longitude": 4.9149871
            },
            {
              "latitude": 52.3208213,
              "longitude": 4.9152151
            },
            {
              "latitude": 52.3206952,
              "longitude": 4.9152848
            },
            {
              "latitude": 52.3197189,
              "longitude": 4.9158749
            },
            {
              "latitude": 52.3192281,
              "longitude": 4.9162182
            },
            {
              "latitude": 52.3186192,
              "longitude": 4.9167144
            },
            {
              "latitude": 52.317954,
              "longitude": 4.9173152
            },
            {
              "latitude": 52.3170957,
              "longitude": 4.9181762
            },
            {
              "latitude": 52.3168945,
              "longitude": 4.9183854
            },
            {
              "latitude": 52.3160443,
              "longitude": 4.9192679
            },
            {
              "latitude": 52.3138207,
              "longitude": 4.921639
            },
            {
              "latitude": 52.3136008,
              "longitude": 4.921875
            },
            {
              "latitude": 52.3135766,
              "longitude": 4.9218991
            },
            {
              "latitude": 52.3127908,
              "longitude": 4.9227414
            },
            {
              "latitude": 52.3125574,
              "longitude": 4.9229828
            },
            {
              "latitude": 52.3123536,
              "longitude": 4.9231893
            },
            {
              "latitude": 52.3115382,
              "longitude": 4.9241951
            },
            {
              "latitude": 52.3108381,
              "longitude": 4.9249434
            },
            {
              "latitude": 52.3089874,
              "longitude": 4.926888
            },
            {
              "latitude": 52.3085153,
              "longitude": 4.9273762
            },
            {
              "latitude": 52.3083946,
              "longitude": 4.9275023
            },
            {
              "latitude": 52.3082632,
              "longitude": 4.9276391
            },
            {
              "latitude": 52.3080781,
              "longitude": 4.9278349
            },
            {
              "latitude": 52.3076275,
              "longitude": 4.9283069
            },
            {
              "latitude": 52.3061523,
              "longitude": 4.9297902
            },
            {
              "latitude": 52.303867,
              "longitude": 4.9321425
            },
            {
              "latitude": 52.3035988,
              "longitude": 4.9324295
            },
            {
              "latitude": 52.3027056,
              "longitude": 4.9334353
            },
            {
              "latitude": 52.3024267,
              "longitude": 4.9337384
            },
            {
              "latitude": 52.3013914,
              "longitude": 4.9347925
            },
            {
              "latitude": 52.3003078,
              "longitude": 4.9358118
            },
            {
              "latitude": 52.2991168,
              "longitude": 4.9368578
            },
            {
              "latitude": 52.2989532,
              "longitude": 4.937
            },
            {
              "latitude": 52.2956353,
              "longitude": 4.9398619
            },
            {
              "latitude": 52.2949219,
              "longitude": 4.9404761
            },
            {
              "latitude": 52.2928056,
              "longitude": 4.9422947
            },
            {
              "latitude": 52.2922021,
              "longitude": 4.9427962
            },
            {
              "latitude": 52.291545,
              "longitude": 4.9433836
            },
            {
              "latitude": 52.2910085,
              "longitude": 4.9438477
            },
            {
              "latitude": 52.2873098,
              "longitude": 4.9470368
            },
            {
              "latitude": 52.2871193,
              "longitude": 4.9472004
            },
            {
              "latitude": 52.2860304,
              "longitude": 4.9481392
            },
            {
              "latitude": 52.2859553,
              "longitude": 4.9482062
            },
            {
              "latitude": 52.2847107,
              "longitude": 4.9492738
            },
            {
              "latitude": 52.2837934,
              "longitude": 4.9500033
            },
            {
              "latitude": 52.2836378,
              "longitude": 4.9501106
            },
            {
              "latitude": 52.2824684,
              "longitude": 4.950926
            },
            {
              "latitude": 52.2817066,
              "longitude": 4.9514249
            },
            {
              "latitude": 52.2806311,
              "longitude": 4.9521089
            },
            {
              "latitude": 52.2798881,
              "longitude": 4.9526212
            },
            {
              "latitude": 52.2791746,
              "longitude": 4.9531308
            },
            {
              "latitude": 52.2787187,
              "longitude": 4.9534902
            },
            {
              "latitude": 52.2783217,
              "longitude": 4.9538094
            },
            {
              "latitude": 52.2781822,
              "longitude": 4.953914
            },
            {
              "latitude": 52.2780856,
              "longitude": 4.9539864
            },
            {
              "latitude": 52.2779891,
              "longitude": 4.9540669
            },
            {
              "latitude": 52.2779006,
              "longitude": 4.9541366
            },
            {
              "latitude": 52.277509,
              "longitude": 4.9544451
            },
            {
              "latitude": 52.2772783,
              "longitude": 4.9546301
            },
            {
              "latitude": 52.2765353,
              "longitude": 4.9552175
            },
            {
              "latitude": 52.2758541,
              "longitude": 4.955754
            },
            {
              "latitude": 52.2749287,
              "longitude": 4.9564379
            },
            {
              "latitude": 52.2737727,
              "longitude": 4.9572104
            },
            {
              "latitude": 52.2731316,
              "longitude": 4.9576047
            },
            {
              "latitude": 52.2729492,
              "longitude": 4.957712
            },
            {
              "latitude": 52.2721446,
              "longitude": 4.9581841
            },
            {
              "latitude": 52.2708571,
              "longitude": 4.9588519
            },
            {
              "latitude": 52.2688106,
              "longitude": 4.9597692
            },
            {
              "latitude": 52.2676089,
              "longitude": 4.9603486
            },
            {
              "latitude": 52.2666568,
              "longitude": 4.9608582
            },
            {
              "latitude": 52.2661793,
              "longitude": 4.9611318
            },
            {
              "latitude": 52.2660989,
              "longitude": 4.9611774
            },
            {
              "latitude": 52.2648865,
              "longitude": 4.9619257
            },
            {
              "latitude": 52.2633925,
              "longitude": 4.9629262
            },
            {
              "latitude": 52.2627541,
              "longitude": 4.9633285
            },
            {
              "latitude": 52.2616839,
              "longitude": 4.9639454
            },
            {
              "latitude": 52.2613057,
              "longitude": 4.9641547
            },
            {
              "latitude": 52.2610697,
              "longitude": 4.9642834
            },
            {
              "latitude": 52.2604287,
              "longitude": 4.9646053
            },
            {
              "latitude": 52.2603804,
              "longitude": 4.9646267
            },
            {
              "latitude": 52.2603267,
              "longitude": 4.9646536
            },
            {
              "latitude": 52.2590795,
              "longitude": 4.965198
            },
            {
              "latitude": 52.2588354,
              "longitude": 4.9652973
            },
            {
              "latitude": 52.2585779,
              "longitude": 4.9653992
            },
            {
              "latitude": 52.2577438,
              "longitude": 4.9657184
            },
            {
              "latitude": 52.2574729,
              "longitude": 4.9658203
            },
            {
              "latitude": 52.2540799,
              "longitude": 4.967097
            },
            {
              "latitude": 52.2509766,
              "longitude": 4.9682799
            },
            {
              "latitude": 52.2490051,
              "longitude": 4.9690309
            },
            {
              "latitude": 52.2476855,
              "longitude": 4.9696022
            },
            {
              "latitude": 52.2462827,
              "longitude": 4.9702862
            },
            {
              "latitude": 52.2447887,
              "longitude": 4.9710935
            },
            {
              "latitude": 52.2441289,
              "longitude": 4.971461
            },
            {
              "latitude": 52.2394726,
              "longitude": 4.9740279
            },
            {
              "latitude": 52.2389469,
              "longitude": 4.9742988
            },
            {
              "latitude": 52.2343791,
              "longitude": 4.9768549
            },
            {
              "latitude": 52.2333491,
              "longitude": 4.9774879
            },
            {
              "latitude": 52.2329065,
              "longitude": 4.9777937
            },
            {
              "latitude": 52.2326007,
              "longitude": 4.9779975
            },
            {
              "latitude": 52.2310799,
              "longitude": 4.9791884
            },
            {
              "latitude": 52.2292989,
              "longitude": 4.980728
            },
            {
              "latitude": 52.2290039,
              "longitude": 4.9810043
            },
            {
              "latitude": 52.2288564,
              "longitude": 4.9811411
            },
            {
              "latitude": 52.2274107,
              "longitude": 4.9825278
            },
            {
              "latitude": 52.2270003,
              "longitude": 4.9828926
            },
            {
              "latitude": 52.22637,
              "longitude": 4.9834129
            },
            {
              "latitude": 52.2257343,
              "longitude": 4.9839011
            },
            {
              "latitude": 52.2238407,
              "longitude": 4.984982
            },
            {
              "latitude": 52.2237575,
              "longitude": 4.9850249
            },
            {
              "latitude": 52.223433,
              "longitude": 4.9851885
            },
            {
              "latitude": 52.2231942,
              "longitude": 4.9852958
            },
            {
              "latitude": 52.2231406,
              "longitude": 4.98532
            },
            {
              "latitude": 52.2230574,
              "longitude": 4.9853548
            },
            {
              "latitude": 52.2228241,
              "longitude": 4.9854514
            },
            {
              "latitude": 52.2226202,
              "longitude": 4.9855319
            },
            {
              "latitude": 52.2225156,
              "longitude": 4.9855694
            },
            {
              "latitude": 52.2223547,
              "longitude": 4.9856311
            },
            {
              "latitude": 52.2214723,
              "longitude": 4.985902
            },
            {
              "latitude": 52.2208902,
              "longitude": 4.9860495
            },
            {
              "latitude": 52.2207856,
              "longitude": 4.9860737
            },
            {
              "latitude": 52.2205871,
              "longitude": 4.9861139
            },
            {
              "latitude": 52.219981,
              "longitude": 4.9862266
            },
            {
              "latitude": 52.2196859,
              "longitude": 4.9862641
            },
            {
              "latitude": 52.2189268,
              "longitude": 4.9863258
            },
            {
              "latitude": 52.2174034,
              "longitude": 4.9863499
            },
            {
              "latitude": 52.21533,
              "longitude": 4.9863151
            },
            {
              "latitude": 52.2145253,
              "longitude": 4.9862936
            },
            {
              "latitude": 52.2070313,
              "longitude": 4.9861971
            },
            {
              "latitude": 52.205033,
              "longitude": 4.9861729
            },
            {
              "latitude": 52.196179,
              "longitude": 4.9863258
            },
            {
              "latitude": 52.194449,
              "longitude": 4.9863231
            },
            {
              "latitude": 52.1906242,
              "longitude": 4.9861836
            },
            {
              "latitude": 52.1904632,
              "longitude": 4.9861917
            },
            {
              "latitude": 52.19001,
              "longitude": 4.9861595
            },
            {
              "latitude": 52.1896049,
              "longitude": 4.9861568
            },
            {
              "latitude": 52.1886125,
              "longitude": 4.9861032
            },
            {
              "latitude": 52.1866679,
              "longitude": 4.9860281
            },
            {
              "latitude": 52.1862119,
              "longitude": 4.9860093
            },
            {
              "latitude": 52.1853697,
              "longitude": 4.9859744
            },
            {
              "latitude": 52.1850586,
              "longitude": 4.985961
            },
            {
              "latitude": 52.1832159,
              "longitude": 4.9858966
            },
            {
              "latitude": 52.1820143,
              "longitude": 4.985902
            },
            {
              "latitude": 52.1817353,
              "longitude": 4.9859101
            },
            {
              "latitude": 52.1797666,
              "longitude": 4.9860334
            },
            {
              "latitude": 52.177881,
              "longitude": 4.986189
            },
            {
              "latitude": 52.1773043,
              "longitude": 4.9862373
            },
            {
              "latitude": 52.1762341,
              "longitude": 4.9863607
            },
            {
              "latitude": 52.1744344,
              "longitude": 4.9865082
            },
            {
              "latitude": 52.1732944,
              "longitude": 4.9866021
            },
            {
              "latitude": 52.1722859,
              "longitude": 4.9866343
            },
            {
              "latitude": 52.171905,
              "longitude": 4.9866503
            },
            {
              "latitude": 52.1718273,
              "longitude": 4.9866557
            },
            {
              "latitude": 52.1715778,
              "longitude": 4.9866718
            },
            {
              "latitude": 52.171213,
              "longitude": 4.9866933
            },
            {
              "latitude": 52.1698639,
              "longitude": 4.9867281
            },
            {
              "latitude": 52.1698076,
              "longitude": 4.9867281
            },
            {
              "latitude": 52.1697217,
              "longitude": 4.9867362
            },
            {
              "latitude": 52.1696654,
              "longitude": 4.9867389
            },
            {
              "latitude": 52.1690914,
              "longitude": 4.9867523
            },
            {
              "latitude": 52.1688017,
              "longitude": 4.9867845
            },
            {
              "latitude": 52.1681231,
              "longitude": 4.9868381
            },
            {
              "latitude": 52.1679649,
              "longitude": 4.9868542
            },
            {
              "latitude": 52.1671683,
              "longitude": 4.9869803
            },
            {
              "latitude": 52.1669054,
              "longitude": 4.9870312
            },
            {
              "latitude": 52.166436,
              "longitude": 4.9871385
            },
            {
              "latitude": 52.1661088,
              "longitude": 4.987227
            },
            {
              "latitude": 52.1653739,
              "longitude": 4.9874577
            },
            {
              "latitude": 52.1645397,
              "longitude": 4.987793
            },
            {
              "latitude": 52.1644861,
              "longitude": 4.9878144
            },
            {
              "latitude": 52.1636921,
              "longitude": 4.9882033
            },
            {
              "latitude": 52.1633139,
              "longitude": 4.9884099
            },
            {
              "latitude": 52.1630859,
              "longitude": 4.9885467
            },
            {
              "latitude": 52.1627775,
              "longitude": 4.9887264
            },
            {
              "latitude": 52.1616027,
              "longitude": 4.9895257
            },
            {
              "latitude": 52.1607417,
              "longitude": 4.9901506
            },
            {
              "latitude": 52.1596232,
              "longitude": 4.9909741
            },
            {
              "latitude": 52.1567854,
              "longitude": 4.9931064
            },
            {
              "latitude": 52.154173,
              "longitude": 4.9950376
            },
            {
              "latitude": 52.1515793,
              "longitude": 4.996824
            },
            {
              "latitude": 52.150839,
              "longitude": 4.9973202
            },
            {
              "latitude": 52.1493664,
              "longitude": 4.9983475
            },
            {
              "latitude": 52.1491492,
              "longitude": 4.998503
            },
            {
              "latitude": 52.1490607,
              "longitude": 4.998562
            },
            {
              "latitude": 52.1475962,
              "longitude": 4.9995705
            },
            {
              "latitude": 52.1422023,
              "longitude": 5.0032961
            },
            {
              "latitude": 52.1421352,
              "longitude": 5.0033417
            },
            {
              "latitude": 52.142044,
              "longitude": 5.0034061
            },
            {
              "latitude": 52.1415317,
              "longitude": 5.0038031
            },
            {
              "latitude": 52.1411133,
              "longitude": 5.0040874
            },
            {
              "latitude": 52.141006,
              "longitude": 5.0041598
            },
            {
              "latitude": 52.140601,
              "longitude": 5.004369
            },
            {
              "latitude": 52.1403837,
              "longitude": 5.0045273
            },
            {
              "latitude": 52.1401879,
              "longitude": 5.0046828
            },
            {
              "latitude": 52.1386805,
              "longitude": 5.0057343
            },
            {
              "latitude": 52.1385571,
              "longitude": 5.0058201
            },
            {
              "latitude": 52.1383238,
              "longitude": 5.0059783
            },
            {
              "latitude": 52.1377739,
              "longitude": 5.0063565
            },
            {
              "latitude": 52.1368834,
              "longitude": 5.0069761
            },
            {
              "latitude": 52.1336862,
              "longitude": 5.0091836
            },
            {
              "latitude": 52.1329004,
              "longitude": 5.0097656
            },
            {
              "latitude": 52.1327984,
              "longitude": 5.0098407
            },
            {
              "latitude": 52.1319267,
              "longitude": 5.0105301
            },
            {
              "latitude": 52.1313795,
              "longitude": 5.0110102
            },
            {
              "latitude": 52.1308458,
              "longitude": 5.0115171
            },
            {
              "latitude": 52.1304891,
              "longitude": 5.0118712
            },
            {
              "latitude": 52.1303549,
              "longitude": 5.0119999
            },
            {
              "latitude": 52.1298802,
              "longitude": 5.0125229
            },
            {
              "latitude": 52.1292257,
              "longitude": 5.0132981
            },
            {
              "latitude": 52.1286196,
              "longitude": 5.0140786
            },
            {
              "latitude": 52.1280509,
              "longitude": 5.014886
            },
            {
              "latitude": 52.1276566,
              "longitude": 5.0154868
            },
            {
              "latitude": 52.1270746,
              "longitude": 5.0164175
            },
            {
              "latitude": 52.1269271,
              "longitude": 5.0166509
            },
            {
              "latitude": 52.1260607,
              "longitude": 5.0180671
            },
            {
              "latitude": 52.1256182,
              "longitude": 5.0188556
            },
            {
              "latitude": 52.1252561,
              "longitude": 5.0194323
            },
            {
              "latitude": 52.1249154,
              "longitude": 5.0200143
            },
            {
              "latitude": 52.1246418,
              "longitude": 5.0204676
            },
            {
              "latitude": 52.1244031,
              "longitude": 5.0208887
            },
            {
              "latitude": 52.1242744,
              "longitude": 5.0211248
            },
            {
              "latitude": 52.1240759,
              "longitude": 5.021401
            },
            {
              "latitude": 52.1237862,
              "longitude": 5.0218382
            },
            {
              "latitude": 52.123628,
              "longitude": 5.0220716
            },
            {
              "latitude": 52.123526,
              "longitude": 5.0222379
            },
            {
              "latitude": 52.1233919,
              "longitude": 5.0224954
            },
            {
              "latitude": 52.1227965,
              "longitude": 5.0235468
            },
            {
              "latitude": 52.1216378,
              "longitude": 5.0254673
            },
            {
              "latitude": 52.1207258,
              "longitude": 5.0269935
            },
            {
              "latitude": 52.1200767,
              "longitude": 5.0281388
            },
            {
              "latitude": 52.119543,
              "longitude": 5.029166
            },
            {
              "latitude": 52.1191406,
              "longitude": 5.0300324
            },
            {
              "latitude": 52.1191111,
              "longitude": 5.0300914
            },
            {
              "latitude": 52.1186578,
              "longitude": 5.031116
            },
            {
              "latitude": 52.1184084,
              "longitude": 5.0317383
            },
            {
              "latitude": 52.117829,
              "longitude": 5.0331706
            },
            {
              "latitude": 52.1176976,
              "longitude": 5.0334817
            },
            {
              "latitude": 52.1176681,
              "longitude": 5.0335488
            },
            {
              "latitude": 52.1174535,
              "longitude": 5.0340557
            },
            {
              "latitude": 52.1171048,
              "longitude": 5.0349301
            },
            {
              "latitude": 52.1170592,
              "longitude": 5.0350481
            },
            {
              "latitude": 52.1170029,
              "longitude": 5.0351903
            },
            {
              "latitude": 52.1151039,
              "longitude": 5.0399137
            },
            {
              "latitude": 52.1124244,
              "longitude": 5.0465655
            },
            {
              "latitude": 52.1113274,
              "longitude": 5.0492612
            },
            {
              "latitude": 52.1106595,
              "longitude": 5.0508034
            },
            {
              "latitude": 52.1098763,
              "longitude": 5.0524744
            },
            {
              "latitude": 52.1097744,
              "longitude": 5.0526997
            },
            {
              "latitude": 52.1092567,
              "longitude": 5.0537109
            },
            {
              "latitude": 52.1090931,
              "longitude": 5.0540301
            },
            {
              "latitude": 52.1083608,
              "longitude": 5.0553739
            },
            {
              "latitude": 52.107583,
              "longitude": 5.0567016
            },
            {
              "latitude": 52.1069661,
              "longitude": 5.0576913
            },
            {
              "latitude": 52.1065503,
              "longitude": 5.0583485
            },
            {
              "latitude": 52.1060032,
              "longitude": 5.0591666
            },
            {
              "latitude": 52.1055847,
              "longitude": 5.0597674
            },
            {
              "latitude": 52.1047586,
              "longitude": 5.0608966
            },
            {
              "latitude": 52.1041873,
              "longitude": 5.0616449
            },
            {
              "latitude": 52.1031842,
              "longitude": 5.0628519
            },
            {
              "latitude": 52.1023151,
              "longitude": 5.0638443
            },
            {
              "latitude": 52.101607,
              "longitude": 5.0646061
            },
            {
              "latitude": 52.1012074,
              "longitude": 5.0650084
            },
            {
              "latitude": 52.1006307,
              "longitude": 5.0655931
            },
            {
              "latitude": 52.0995337,
              "longitude": 5.0666043
            },
            {
              "latitude": 52.0991689,
              "longitude": 5.0669047
            },
            {
              "latitude": 52.0988443,
              "longitude": 5.0671917
            },
            {
              "latitude": 52.0986164,
              "longitude": 5.0673822
            },
            {
              "latitude": 52.0985761,
              "longitude": 5.0674143
            },
            {
              "latitude": 52.0982006,
              "longitude": 5.0677255
            },
            {
              "latitude": 52.0980665,
              "longitude": 5.0678435
            },
            {
              "latitude": 52.0979941,
              "longitude": 5.0679025
            },
            {
              "latitude": 52.097801,
              "longitude": 5.0680554
            },
            {
              "latitude": 52.097168,
              "longitude": 5.0685462
            },
            {
              "latitude": 52.0966798,
              "longitude": 5.0689217
            },
            {
              "latitude": 52.0960119,
              "longitude": 5.0694233
            },
            {
              "latitude": 52.0955855,
              "longitude": 5.0697425
            },
            {
              "latitude": 52.0944321,
              "longitude": 5.0706464
            },
            {
              "latitude": 52.0942336,
              "longitude": 5.0707993
            },
            {
              "latitude": 52.0941666,
              "longitude": 5.0708503
            },
            {
              "latitude": 52.0941183,
              "longitude": 5.0708851
            },
            {
              "latitude": 52.0931125,
              "longitude": 5.0716603
            },
            {
              "latitude": 52.0930159,
              "longitude": 5.07173
            },
            {
              "latitude": 52.0929569,
              "longitude": 5.0717783
            },
            {
              "latitude": 52.0925117,
              "longitude": 5.0720546
            },
            {
              "latitude": 52.0912376,
              "longitude": 5.0729719
            },
            {
              "latitude": 52.0911705,
              "longitude": 5.0730202
            },
            {
              "latitude": 52.0908594,
              "longitude": 5.0732079
            },
            {
              "latitude": 52.0905349,
              "longitude": 5.0733715
            },
            {
              "latitude": 52.089462,
              "longitude": 5.0740689
            },
            {
              "latitude": 52.0890918,
              "longitude": 5.0742728
            },
            {
              "latitude": 52.0888746,
              "longitude": 5.0743693
            },
            {
              "latitude": 52.0881799,
              "longitude": 5.0746697
            },
            {
              "latitude": 52.0871097,
              "longitude": 5.0750613
            },
            {
              "latitude": 52.0870158,
              "longitude": 5.0750908
            },
            {
              "latitude": 52.0869327,
              "longitude": 5.0751203
            },
            {
              "latitude": 52.0868549,
              "longitude": 5.0751391
            },
            {
              "latitude": 52.0865384,
              "longitude": 5.075241
            },
            {
              "latitude": 52.0856318,
              "longitude": 5.0754637
            },
            {
              "latitude": 52.0852482,
              "longitude": 5.0755227
            },
            {
              "latitude": 52.0844114,
              "longitude": 5.0756514
            },
            {
              "latitude": 52.0838401,
              "longitude": 5.0756836
            },
            {
              "latitude": 52.0830381,
              "longitude": 5.0757265
            },
            {
              "latitude": 52.0825016,
              "longitude": 5.0757158
            },
            {
              "latitude": 52.0823568,
              "longitude": 5.0757104
            },
            {
              "latitude": 52.082279,
              "longitude": 5.0757051
            },
            {
              "latitude": 52.0820484,
              "longitude": 5.0756836
            },
            {
              "latitude": 52.0818043,
              "longitude": 5.0756595
            },
            {
              "latitude": 52.0814851,
              "longitude": 5.075638
            },
            {
              "latitude": 52.0807475,
              "longitude": 5.0755388
            },
            {
              "latitude": 52.0803854,
              "longitude": 5.0754744
            },
            {
              "latitude": 52.0797336,
              "longitude": 5.0753215
            },
            {
              "latitude": 52.0792589,
              "longitude": 5.0751927
            },
            {
              "latitude": 52.0790416,
              "longitude": 5.0751284
            },
            {
              "latitude": 52.07876,
              "longitude": 5.0750399
            },
            {
              "latitude": 52.0779231,
              "longitude": 5.0747368
            },
            {
              "latitude": 52.07762,
              "longitude": 5.0746241
            },
            {
              "latitude": 52.0768476,
              "longitude": 5.0743318
            },
            {
              "latitude": 52.0758551,
              "longitude": 5.073908
            },
            {
              "latitude": 52.075249,
              "longitude": 5.0736505
            },
            {
              "latitude": 52.0751953,
              "longitude": 5.0736076
            },
            {
              "latitude": 52.0751578,
              "longitude": 5.0735807
            },
            {
              "latitude": 52.0745489,
              "longitude": 5.0732401
            },
            {
              "latitude": 52.0743397,
              "longitude": 5.0731516
            },
            {
              "latitude": 52.0742431,
              "longitude": 5.0731033
            },
            {
              "latitude": 52.0735511,
              "longitude": 5.0727814
            },
            {
              "latitude": 52.0728859,
              "longitude": 5.0724971
            },
            {
              "latitude": 52.0719981,
              "longitude": 5.0721726
            },
            {
              "latitude": 52.0717835,
              "longitude": 5.0720519
            },
            {
              "latitude": 52.0715046,
              "longitude": 5.0719607
            },
            {
              "latitude": 52.0710567,
              "longitude": 5.0717622
            },
            {
              "latitude": 52.0706624,
              "longitude": 5.0715208
            },
            {
              "latitude": 52.0703486,
              "longitude": 5.0712767
            },
            {
              "latitude": 52.0701769,
              "longitude": 5.0711212
            },
            {
              "latitude": 52.069957,
              "longitude": 5.0708905
            },
            {
              "latitude": 52.069627,
              "longitude": 5.0704828
            },
            {
              "latitude": 52.0693266,
              "longitude": 5.0700456
            },
            {
              "latitude": 52.0692435,
              "longitude": 5.0699168
            },
            {
              "latitude": 52.0690531,
              "longitude": 5.0695708
            },
            {
              "latitude": 52.0688948,
              "longitude": 5.0692329
            },
            {
              "latitude": 52.0685971,
              "longitude": 5.0684711
            },
            {
              "latitude": 52.0683128,
              "longitude": 5.0675431
            },
            {
              "latitude": 52.0682377,
              "longitude": 5.0671569
            },
            {
              "latitude": 52.0679882,
              "longitude": 5.0662449
            },
            {
              "latitude": 52.0679668,
              "longitude": 5.0661269
            },
            {
              "latitude": 52.0679319,
              "longitude": 5.0660035
            },
            {
              "latitude": 52.0678353,
              "longitude": 5.0655288
            },
            {
              "latitude": 52.0677575,
              "longitude": 5.065003
            },
            {
              "latitude": 52.0677093,
              "longitude": 5.0643754
            },
            {
              "latitude": 52.0677093,
              "longitude": 5.0640777
            },
            {
              "latitude": 52.0677361,
              "longitude": 5.0634742
            },
            {
              "latitude": 52.0677549,
              "longitude": 5.0632328
            },
            {
              "latitude": 52.0678622,
              "longitude": 5.062463
            },
            {
              "latitude": 52.0680258,
              "longitude": 5.0615296
            },
            {
              "latitude": 52.0682269,
              "longitude": 5.0604594
            },
            {
              "latitude": 52.068243,
              "longitude": 5.060344
            },
            {
              "latitude": 52.0682457,
              "longitude": 5.0601456
            },
            {
              "latitude": 52.0685461,
              "longitude": 5.0587991
            },
            {
              "latitude": 52.0690906,
              "longitude": 5.0559399
            },
            {
              "latitude": 52.0691845,
              "longitude": 5.0554061
            },
            {
              "latitude": 52.0692515,
              "longitude": 5.0549635
            },
            {
              "latitude": 52.0692542,
              "longitude": 5.0548777
            },
            {
              "latitude": 52.0692542,
              "longitude": 5.0548106
            },
            {
              "latitude": 52.0692489,
              "longitude": 5.0546417
            },
            {
              "latitude": 52.0693696,
              "longitude": 5.053896
            },
            {
              "latitude": 52.0694017,
              "longitude": 5.0537109
            },
            {
              "latitude": 52.0694178,
              "longitude": 5.0536224
            },
            {
              "latitude": 52.0694554,
              "longitude": 5.0533918
            },
            {
              "latitude": 52.0699462,
              "longitude": 5.0504521
            },
            {
              "latitude": 52.0701286,
              "longitude": 5.0492585
            },
            {
              "latitude": 52.0714402,
              "longitude": 5.0406352
            },
            {
              "latitude": 52.0717084,
              "longitude": 5.0388569
            },
            {
              "latitude": 52.0721805,
              "longitude": 5.0356409
            },
            {
              "latitude": 52.0722046,
              "longitude": 5.0354961
            },
            {
              "latitude": 52.0723012,
              "longitude": 5.0348738
            },
            {
              "latitude": 52.0723173,
              "longitude": 5.0347719
            },
            {
              "latitude": 52.0727089,
              "longitude": 5.0320897
            },
            {
              "latitude": 52.0727599,
              "longitude": 5.0317383
            },
            {
              "latitude": 52.0729128,
              "longitude": 5.0306574
            },
            {
              "latitude": 52.072953,
              "longitude": 5.0303757
            },
            {
              "latitude": 52.0729852,
              "longitude": 5.0302067
            },
            {
              "latitude": 52.0731515,
              "longitude": 5.0290561
            },
            {
              "latitude": 52.0732909,
              "longitude": 5.0280207
            },
            {
              "latitude": 52.0735431,
              "longitude": 5.0262746
            },
            {
              "latitude": 52.073645,
              "longitude": 5.0256175
            },
            {
              "latitude": 52.0739964,
              "longitude": 5.0233886
            },
            {
              "latitude": 52.0741332,
              "longitude": 5.022541
            },
            {
              "latitude": 52.0741814,
              "longitude": 5.0222325
            },
            {
              "latitude": 52.0744014,
              "longitude": 5.0209075
            },
            {
              "latitude": 52.0747581,
              "longitude": 5.0188798
            },
            {
              "latitude": 52.0749459,
              "longitude": 5.0178927
            },
            {
              "latitude": 52.0750988,
              "longitude": 5.0171953
            },
            {
              "latitude": 52.0751953,
              "longitude": 5.0167206
            },
            {
              "latitude": 52.0756218,
              "longitude": 5.0145882
            },
            {
              "latitude": 52.0762923,
              "longitude": 5.0115064
            },
            {
              "latitude": 52.0766625,
              "longitude": 5.0097656
            },
            {
              "latitude": 52.0769119,
              "longitude": 5.0085774
            },
            {
              "latitude": 52.0770353,
              "longitude": 5.0079578
            },
            {
              "latitude": 52.078414,
              "longitude": 5.001601
            },
            {
              "latitude": 52.0787036,
              "longitude": 5.0003269
            },
            {
              "latitude": 52.0790979,
              "longitude": 4.9984413
            },
            {
              "latitude": 52.0795459,
              "longitude": 4.9963894
            },
            {
              "latitude": 52.079924,
              "longitude": 4.9944958
            },
            {
              "latitude": 52.0800769,
              "longitude": 4.9936375
            },
            {
              "latitude": 52.0801654,
              "longitude": 4.9930608
            },
            {
              "latitude": 52.0803639,
              "longitude": 4.991709
            },
            {
              "latitude": 52.08049,
              "longitude": 4.9906093
            },
            {
              "latitude": 52.0805731,
              "longitude": 4.9896732
            },
            {
              "latitude": 52.0806402,
              "longitude": 4.9886835
            },
            {
              "latitude": 52.0806777,
              "longitude": 4.987793
            },
            {
              "latitude": 52.0807126,
              "longitude": 4.9870366
            },
            {
              "latitude": 52.0807421,
              "longitude": 4.9851912
            },
            {
              "latitude": 52.0807207,
              "longitude": 4.9783677
            },
            {
              "latitude": 52.0807233,
              "longitude": 4.9783114
            },
            {
              "latitude": 52.0807207,
              "longitude": 4.9781558
            },
            {
              "latitude": 52.0806992,
              "longitude": 4.972094
            },
            {
              "latitude": 52.0806938,
              "longitude": 4.9691758
            },
            {
              "latitude": 52.0806965,
              "longitude": 4.9690604
            },
            {
              "latitude": 52.0806885,
              "longitude": 4.966802
            },
            {
              "latitude": 52.0806858,
              "longitude": 4.966161
            },
            {
              "latitude": 52.0806831,
              "longitude": 4.9658203
            },
            {
              "latitude": 52.0806777,
              "longitude": 4.9654824
            },
            {
              "latitude": 52.0806831,
              "longitude": 4.9652249
            },
            {
              "latitude": 52.0806617,
              "longitude": 4.9602279
            },
            {
              "latitude": 52.080659,
              "longitude": 4.9586588
            },
            {
              "latitude": 52.0806563,
              "longitude": 4.9574894
            },
            {
              "latitude": 52.0806134,
              "longitude": 4.9438477
            },
            {
              "latitude": 52.0806026,
              "longitude": 4.9408785
            },
            {
              "latitude": 52.0806053,
              "longitude": 4.9394488
            },
            {
              "latitude": 52.0805463,
              "longitude": 4.9368954
            },
            {
              "latitude": 52.0804685,
              "longitude": 4.9353343
            },
            {
              "latitude": 52.0803961,
              "longitude": 4.9343365
            },
            {
              "latitude": 52.0802942,
              "longitude": 4.9333012
            },
            {
              "latitude": 52.0801467,
              "longitude": 4.9321425
            },
            {
              "latitude": 52.0799348,
              "longitude": 4.9308336
            },
            {
              "latitude": 52.0797122,
              "longitude": 4.9296588
            },
            {
              "latitude": 52.0795217,
              "longitude": 4.9287763
            },
            {
              "latitude": 52.0791408,
              "longitude": 4.9272609
            },
            {
              "latitude": 52.0787948,
              "longitude": 4.9260619
            },
            {
              "latitude": 52.0786688,
              "longitude": 4.925665
            },
            {
              "latitude": 52.0781216,
              "longitude": 4.9240395
            },
            {
              "latitude": 52.0773384,
              "longitude": 4.921875
            },
            {
              "latitude": 52.0773143,
              "longitude": 4.9218106
            },
            {
              "latitude": 52.0754474,
              "longitude": 4.9168137
            },
            {
              "latitude": 52.0751953,
              "longitude": 4.9160948
            },
            {
              "latitude": 52.0751873,
              "longitude": 4.9160734
            },
            {
              "latitude": 52.0746857,
              "longitude": 4.9146733
            },
            {
              "latitude": 52.0739642,
              "longitude": 4.9125275
            },
            {
              "latitude": 52.0736638,
              "longitude": 4.9115673
            },
            {
              "latitude": 52.0731568,
              "longitude": 4.9098372
            },
            {
              "latitude": 52.0727786,
              "longitude": 4.9084908
            },
            {
              "latitude": 52.0723495,
              "longitude": 4.9068359
            },
            {
              "latitude": 52.0719364,
              "longitude": 4.9051514
            },
            {
              "latitude": 52.0715421,
              "longitude": 4.9034294
            },
            {
              "latitude": 52.071408,
              "longitude": 4.9027857
            },
            {
              "latitude": 52.0713571,
              "longitude": 4.9025497
            },
            {
              "latitude": 52.0713437,
              "longitude": 4.9024799
            },
            {
              "latitude": 52.0713195,
              "longitude": 4.9023646
            },
            {
              "latitude": 52.0712981,
              "longitude": 4.90226
            },
            {
              "latitude": 52.0712712,
              "longitude": 4.9021313
            },
            {
              "latitude": 52.0712525,
              "longitude": 4.9020454
            },
            {
              "latitude": 52.0711747,
              "longitude": 4.9016538
            },
            {
              "latitude": 52.0708421,
              "longitude": 4.8999023
            },
            {
              "latitude": 52.0708367,
              "longitude": 4.8998702
            },
            {
              "latitude": 52.0706302,
              "longitude": 4.8986202
            },
            {
              "latitude": 52.0704317,
              "longitude": 4.8972255
            },
            {
              "latitude": 52.0702842,
              "longitude": 4.8960856
            },
            {
              "latitude": 52.0701528,
              "longitude": 4.894723
            },
            {
              "latitude": 52.0700669,
              "longitude": 4.8936313
            },
            {
              "latitude": 52.0700186,
              "longitude": 4.8928991
            },
            {
              "latitude": 52.069914,
              "longitude": 4.8902249
            },
            {
              "latitude": 52.0698926,
              "longitude": 4.8880765
            },
            {
              "latitude": 52.0698953,
              "longitude": 4.8859656
            },
            {
              "latitude": 52.0699248,
              "longitude": 4.8802069
            },
            {
              "latitude": 52.0699301,
              "longitude": 4.8779297
            },
            {
              "latitude": 52.0699355,
              "longitude": 4.8750061
            },
            {
              "latitude": 52.0699355,
              "longitude": 4.8746252
            },
            {
              "latitude": 52.0699382,
              "longitude": 4.8740834
            },
            {
              "latitude": 52.0699409,
              "longitude": 4.8735952
            },
            {
              "latitude": 52.0700079,
              "longitude": 4.8560724
            },
            {
              "latitude": 52.0700079,
              "longitude": 4.855957
            },
            {
              "latitude": 52.0700374,
              "longitude": 4.8470253
            },
            {
              "latitude": 52.0700186,
              "longitude": 4.8454884
            },
            {
              "latitude": 52.069965,
              "longitude": 4.8437744
            },
            {
              "latitude": 52.0699006,
              "longitude": 4.8425621
            },
            {
              "latitude": 52.0698255,
              "longitude": 4.8416018
            },
            {
              "latitude": 52.0697719,
              "longitude": 4.8409957
            },
            {
              "latitude": 52.0696512,
              "longitude": 4.8398718
            },
            {
              "latitude": 52.0694152,
              "longitude": 4.8382384
            },
            {
              "latitude": 52.0693079,
              "longitude": 4.837549
            },
            {
              "latitude": 52.0691684,
              "longitude": 4.8367712
            },
            {
              "latitude": 52.0686749,
              "longitude": 4.8342285
            },
            {
              "latitude": 52.0686212,
              "longitude": 4.8339844
            },
            {
              "latitude": 52.0681036,
              "longitude": 4.8315382
            },
            {
              "latitude": 52.0680848,
              "longitude": 4.8314443
            },
            {
              "latitude": 52.0676368,
              "longitude": 4.8293281
            },
            {
              "latitude": 52.0673847,
              "longitude": 4.8283222
            },
            {
              "latitude": 52.0671862,
              "longitude": 4.8273057
            },
            {
              "latitude": 52.0669958,
              "longitude": 4.8263991
            },
            {
              "latitude": 52.0668805,
              "longitude": 4.8257205
            },
            {
              "latitude": 52.0667759,
              "longitude": 4.8252162
            },
            {
              "latitude": 52.0662206,
              "longitude": 4.8225635
            },
            {
              "latitude": 52.0661885,
              "longitude": 4.822416
            },
            {
              "latitude": 52.0655581,
              "longitude": 4.8193985
            },
            {
              "latitude": 52.0651746,
              "longitude": 4.817352
            },
            {
              "latitude": 52.0649841,
              "longitude": 4.8161504
            },
            {
              "latitude": 52.0648956,
              "longitude": 4.815461
            },
            {
              "latitude": 52.0647374,
              "longitude": 4.8140019
            },
            {
              "latitude": 52.0646247,
              "longitude": 4.8125616
            },
            {
              "latitude": 52.0646247,
              "longitude": 4.8124221
            },
            {
              "latitude": 52.0646006,
              "longitude": 4.8120117
            },
            {
              "latitude": 52.0645818,
              "longitude": 4.811663
            },
            {
              "latitude": 52.064563,
              "longitude": 4.8110381
            },
            {
              "latitude": 52.0645469,
              "longitude": 4.810212
            },
            {
              "latitude": 52.0645416,
              "longitude": 4.8096943
            },
            {
              "latitude": 52.0645577,
              "longitude": 4.80849
            },
            {
              "latitude": 52.0645872,
              "longitude": 4.8075673
            },
            {
              "latitude": 52.0646703,
              "longitude": 4.8058373
            },
            {
              "latitude": 52.0646784,
              "longitude": 4.8057058
            },
            {
              "latitude": 52.0653355,
              "longitude": 4.7943252
            },
            {
              "latitude": 52.065416,
              "longitude": 4.7928742
            },
            {
              "latitude": 52.0654374,
              "longitude": 4.7925872
            },
            {
              "latitude": 52.0655823,
              "longitude": 4.7900391
            },
            {
              "latitude": 52.0655903,
              "longitude": 4.7899103
            },
            {
              "latitude": 52.0658854,
              "longitude": 4.7843474
            },
            {
              "latitude": 52.0658934,
              "longitude": 4.7842053
            },
            {
              "latitude": 52.0660061,
              "longitude": 4.78192
            },
            {
              "latitude": 52.0661321,
              "longitude": 4.7795865
            },
            {
              "latitude": 52.0662475,
              "longitude": 4.7772208
            },
            {
              "latitude": 52.0663843,
              "longitude": 4.7746244
            },
            {
              "latitude": 52.0664111,
              "longitude": 4.7739324
            },
            {
              "latitude": 52.0667249,
              "longitude": 4.7680664
            },
            {
              "latitude": 52.0667624,
              "longitude": 4.7673476
            },
            {
              "latitude": 52.0668295,
              "longitude": 4.7659341
            },
            {
              "latitude": 52.0669341,
              "longitude": 4.7639599
            },
            {
              "latitude": 52.0670816,
              "longitude": 4.7614601
            },
            {
              "latitude": 52.0671165,
              "longitude": 4.7603416
            },
            {
              "latitude": 52.0671245,
              "longitude": 4.7601727
            },
            {
              "latitude": 52.0671353,
              "longitude": 4.7599581
            },
            {
              "latitude": 52.0672318,
              "longitude": 4.7578579
            },
            {
              "latitude": 52.067264,
              "longitude": 4.757013
            },
            {
              "latitude": 52.0673177,
              "longitude": 4.7555164
            },
            {
              "latitude": 52.0673418,
              "longitude": 4.7539419
            },
            {
              "latitude": 52.067315,
              "longitude": 4.7522789
            },
            {
              "latitude": 52.0672801,
              "longitude": 4.7514045
            },
            {
              "latitude": 52.0672131,
              "longitude": 4.7503611
            },
            {
              "latitude": 52.0671192,
              "longitude": 4.7492319
            },
            {
              "latitude": 52.0669958,
              "longitude": 4.7480813
            },
            {
              "latitude": 52.0668429,
              "longitude": 4.7469118
            },
            {
              "latitude": 52.0668107,
              "longitude": 4.7467241
            },
            {
              "latitude": 52.0667946,
              "longitude": 4.7466087
            },
            {
              "latitude": 52.0667839,
              "longitude": 4.7465122
            },
            {
              "latitude": 52.0667195,
              "longitude": 4.7460938
            },
            {
              "latitude": 52.0666471,
              "longitude": 4.7456351
            },
            {
              "latitude": 52.0666283,
              "longitude": 4.745501
            },
            {
              "latitude": 52.0663843,
              "longitude": 4.7441947
            },
            {
              "latitude": 52.0661268,
              "longitude": 4.7430629
            },
            {
              "latitude": 52.0658371,
              "longitude": 4.741939
            },
            {
              "latitude": 52.0653918,
              "longitude": 4.7404155
            },
            {
              "latitude": 52.0650405,
              "longitude": 4.739356
            },
            {
              "latitude": 52.0646355,
              "longitude": 4.7382376
            },
            {
              "latitude": 52.0644182,
              "longitude": 4.7377118
            },
            {
              "latitude": 52.0640856,
              "longitude": 4.7369206
            },
            {
              "latitude": 52.0635304,
              "longitude": 4.7357002
            },
            {
              "latitude": 52.0632783,
              "longitude": 4.7352013
            },
            {
              "latitude": 52.0625836,
              "longitude": 4.7338602
            },
            {
              "latitude": 52.0622107,
              "longitude": 4.7332111
            },
            {
              "latitude": 52.0618835,
              "longitude": 4.7326881
            },
            {
              "latitude": 52.0613229,
              "longitude": 4.7318164
            },
            {
              "latitude": 52.0612666,
              "longitude": 4.7317359
            },
            {
              "latitude": 52.0611995,
              "longitude": 4.7316206
            },
            {
              "latitude": 52.0610976,
              "longitude": 4.7314891
            },
            {
              "latitude": 52.0610332,
              "longitude": 4.7313765
            },
            {
              "latitude": 52.0607838,
              "longitude": 4.7310305
            },
            {
              "latitude": 52.0605773,
              "longitude": 4.7307301
            },
            {
              "latitude": 52.0591718,
              "longitude": 4.7287774
            },
            {
              "latitude": 52.0578414,
              "longitude": 4.7269589
            },
            {
              "latitude": 52.0576537,
              "longitude": 4.726688
            },
            {
              "latitude": 52.0576108,
              "longitude": 4.7266182
            },
            {
              "latitude": 52.0571816,
              "longitude": 4.7260523
            },
            {
              "latitude": 52.0559692,
              "longitude": 4.7244564
            },
            {
              "latitude": 52.0556983,
              "longitude": 4.7241211
            },
            {
              "latitude": 52.0554328,
              "longitude": 4.7237885
            },
            {
              "latitude": 52.0553604,
              "longitude": 4.7236705
            },
            {
              "latitude": 52.0547515,
              "longitude": 4.7228846
            },
            {
              "latitude": 52.0546737,
              "longitude": 4.7227773
            },
            {
              "latitude": 52.0540193,
              "longitude": 4.7219378
            },
            {
              "latitude": 52.0532227,
              "longitude": 4.7209293
            },
            {
              "latitude": 52.0531261,
              "longitude": 4.7208086
            },
            {
              "latitude": 52.0524046,
              "longitude": 4.7199261
            },
            {
              "latitude": 52.0515999,
              "longitude": 4.7189873
            },
            {
              "latitude": 52.049599,
              "longitude": 4.7166297
            },
            {
              "latitude": 52.0486709,
              "longitude": 4.7155085
            },
            {
              "latitude": 52.0466325,
              "longitude": 4.7131106
            },
            {
              "latitude": 52.0454845,
              "longitude": 4.7117427
            },
            {
              "latitude": 52.0453665,
              "longitude": 4.7115925
            },
            {
              "latitude": 52.045294,
              "longitude": 4.7115067
            },
            {
              "latitude": 52.0448327,
              "longitude": 4.7109649
            },
            {
              "latitude": 52.0437732,
              "longitude": 4.7096962
            },
            {
              "latitude": 52.0431295,
              "longitude": 4.7088996
            },
            {
              "latitude": 52.0430785,
              "longitude": 4.7088218
            },
            {
              "latitude": 52.0429069,
              "longitude": 4.7086072
            },
            {
              "latitude": 52.0420942,
              "longitude": 4.7074485
            },
            {
              "latitude": 52.041547,
              "longitude": 4.7066143
            },
            {
              "latitude": 52.0411313,
              "longitude": 4.7059196
            },
            {
              "latitude": 52.0405868,
              "longitude": 4.7049406
            },
            {
              "latitude": 52.0403937,
              "longitude": 4.7045651
            },
            {
              "latitude": 52.0395219,
              "longitude": 4.702819
            },
            {
              "latitude": 52.0391947,
              "longitude": 4.7021484
            },
            {
              "latitude": 52.0387843,
              "longitude": 4.7013089
            },
            {
              "latitude": 52.0379207,
              "longitude": 4.6995521
            },
            {
              "latitude": 52.0344043,
              "longitude": 4.6923691
            },
            {
              "latitude": 52.0341629,
              "longitude": 4.6918783
            },
            {
              "latitude": 52.0339644,
              "longitude": 4.6914732
            },
            {
              "latitude": 52.0328084,
              "longitude": 4.6891317
            },
            {
              "latitude": 52.0321003,
              "longitude": 4.6876296
            },
            {
              "latitude": 52.0314458,
              "longitude": 4.6861598
            },
            {
              "latitude": 52.03125,
              "longitude": 4.685685
            },
            {
              "latitude": 52.0308664,
              "longitude": 4.684757
            },
            {
              "latitude": 52.0303488,
              "longitude": 4.6834239
            },
            {
              "latitude": 52.030279,
              "longitude": 4.6832389
            },
            {
              "latitude": 52.0301664,
              "longitude": 4.682909
            },
            {
              "latitude": 52.0301235,
              "longitude": 4.6827883
            },
            {
              "latitude": 52.0299706,
              "longitude": 4.6823564
            },
            {
              "latitude": 52.0296782,
              "longitude": 4.681541
            },
            {
              "latitude": 52.0292088,
              "longitude": 4.6801758
            },
            {
              "latitude": 52.0290479,
              "longitude": 4.6797064
            },
            {
              "latitude": 52.0286858,
              "longitude": 4.6785423
            },
            {
              "latitude": 52.0286295,
              "longitude": 4.6783599
            },
            {
              "latitude": 52.0284739,
              "longitude": 4.6778449
            },
            {
              "latitude": 52.0284176,
              "longitude": 4.6776491
            },
            {
              "latitude": 52.0281011,
              "longitude": 4.6765199
            },
            {
              "latitude": 52.0260814,
              "longitude": 4.6688032
            },
            {
              "latitude": 52.0257595,
              "longitude": 4.6675587
            },
            {
              "latitude": 52.0257407,
              "longitude": 4.6674916
            },
            {
              "latitude": 52.025722,
              "longitude": 4.6674192
            },
            {
              "latitude": 52.0256898,
              "longitude": 4.6673065
            },
            {
              "latitude": 52.0256737,
              "longitude": 4.6672449
            },
            {
              "latitude": 52.0256495,
              "longitude": 4.6671563
            },
            {
              "latitude": 52.0255208,
              "longitude": 4.6667084
            },
            {
              "latitude": 52.0254886,
              "longitude": 4.6666011
            },
            {
              "latitude": 52.0254537,
              "longitude": 4.6664697
            },
            {
              "latitude": 52.0254028,
              "longitude": 4.6663007
            },
            {
              "latitude": 52.0252177,
              "longitude": 4.665657
            },
            {
              "latitude": 52.025097,
              "longitude": 4.665252
            },
            {
              "latitude": 52.0250085,
              "longitude": 4.6649194
            },
            {
              "latitude": 52.0249897,
              "longitude": 4.6648443
            },
            {
              "latitude": 52.0248905,
              "longitude": 4.6645063
            },
            {
              "latitude": 52.0246089,
              "longitude": 4.6634361
            },
            {
              "latitude": 52.0245203,
              "longitude": 4.6631196
            },
            {
              "latitude": 52.0243487,
              "longitude": 4.6623337
            },
            {
              "latitude": 52.0242199,
              "longitude": 4.661859
            },
            {
              "latitude": 52.0241904,
              "longitude": 4.6617463
            },
            {
              "latitude": 52.0240644,
              "longitude": 4.6612501
            },
            {
              "latitude": 52.0236003,
              "longitude": 4.6595281
            },
            {
              "latitude": 52.0232517,
              "longitude": 4.6582031
            },
            {
              "latitude": 52.0227474,
              "longitude": 4.6562827
            },
            {
              "latitude": 52.0225677,
              "longitude": 4.6555531
            },
            {
              "latitude": 52.0224014,
              "longitude": 4.6548396
            },
            {
              "latitude": 52.022278,
              "longitude": 4.6543381
            },
            {
              "latitude": 52.0222512,
              "longitude": 4.654212
            },
            {
              "latitude": 52.0219588,
              "longitude": 4.6528307
            },
            {
              "latitude": 52.0216557,
              "longitude": 4.6512696
            },
            {
              "latitude": 52.0214304,
              "longitude": 4.6499661
            },
            {
              "latitude": 52.0212829,
              "longitude": 4.6491346
            },
            {
              "latitude": 52.0212346,
              "longitude": 4.6488529
            },
            {
              "latitude": 52.0211971,
              "longitude": 4.6486571
            },
            {
              "latitude": 52.0211112,
              "longitude": 4.648
            },
            {
              "latitude": 52.0208859,
              "longitude": 4.6464068
            },
            {
              "latitude": 52.0206365,
              "longitude": 4.6443683
            },
            {
              "latitude": 52.0204943,
              "longitude": 4.6429253
            },
            {
              "latitude": 52.0204809,
              "longitude": 4.6427885
            },
            {
              "latitude": 52.0204675,
              "longitude": 4.6426329
            },
            {
              "latitude": 52.0203683,
              "longitude": 4.6414447
            },
            {
              "latitude": 52.0203334,
              "longitude": 4.6409807
            },
            {
              "latitude": 52.0202181,
              "longitude": 4.6391514
            },
            {
              "latitude": 52.0201457,
              "longitude": 4.6375582
            },
            {
              "latitude": 52.0201027,
              "longitude": 4.6362305
            },
            {
              "latitude": 52.0200974,
              "longitude": 4.6360454
            },
            {
              "latitude": 52.0200518,
              "longitude": 4.6335375
            },
            {
              "latitude": 52.0199928,
              "longitude": 4.6289268
            },
            {
              "latitude": 52.0199311,
              "longitude": 4.6242169
            },
            {
              "latitude": 52.0198828,
              "longitude": 4.6204644
            },
            {
              "latitude": 52.0198774,
              "longitude": 4.6198824
            },
            {
              "latitude": 52.0198721,
              "longitude": 4.6167442
            },
            {
              "latitude": 52.019864,
              "longitude": 4.6165591
            },
            {
              "latitude": 52.0198613,
              "longitude": 4.6163338
            },
            {
              "latitude": 52.0198506,
              "longitude": 4.6154004
            },
            {
              "latitude": 52.0198318,
              "longitude": 4.6142578
            },
            {
              "latitude": 52.019805,
              "longitude": 4.6124581
            },
            {
              "latitude": 52.0197943,
              "longitude": 4.6110687
            },
            {
              "latitude": 52.0198292,
              "longitude": 4.6098429
            },
            {
              "latitude": 52.0198292,
              "longitude": 4.6097383
            },
            {
              "latitude": 52.0198345,
              "longitude": 4.6096632
            },
            {
              "latitude": 52.0198372,
              "longitude": 4.6094915
            },
            {
              "latitude": 52.0198748,
              "longitude": 4.6089014
            },
            {
              "latitude": 52.0199311,
              "longitude": 4.6081719
            },
            {
              "latitude": 52.0200598,
              "longitude": 4.6069354
            },
            {
              "latitude": 52.0202181,
              "longitude": 4.605782
            },
            {
              "latitude": 52.0203549,
              "longitude": 4.6049559
            },
            {
              "latitude": 52.0205534,
              "longitude": 4.6039152
            },
            {
              "latitude": 52.0208189,
              "longitude": 4.6026894
            },
            {
              "latitude": 52.0208725,
              "longitude": 4.6024454
            },
            {
              "latitude": 52.0210066,
              "longitude": 4.6018445
            },
            {
              "latitude": 52.0218381,
              "longitude": 4.598119
            },
            {
              "latitude": 52.0225784,
              "longitude": 4.5947635
            },
            {
              "latitude": 52.0231712,
              "longitude": 4.5922852
            },
            {
              "latitude": 52.0231846,
              "longitude": 4.5922288
            },
            {
              "latitude": 52.023434,
              "longitude": 4.5912552
            },
            {
              "latitude": 52.0240107,
              "longitude": 4.589096
            },
            {
              "latitude": 52.0245633,
              "longitude": 4.5871729
            },
            {
              "latitude": 52.0250407,
              "longitude": 4.585585
            },
            {
              "latitude": 52.0257327,
              "longitude": 4.583407
            },
            {
              "latitude": 52.0267922,
              "longitude": 4.5802045
            },
            {
              "latitude": 52.026937,
              "longitude": 4.5797378
            },
            {
              "latitude": 52.0269531,
              "longitude": 4.5796922
            },
            {
              "latitude": 52.0269853,
              "longitude": 4.5795929
            },
            {
              "latitude": 52.0270202,
              "longitude": 4.579483
            },
            {
              "latitude": 52.0270497,
              "longitude": 4.5793757
            },
            {
              "latitude": 52.0271838,
              "longitude": 4.5789358
            },
            {
              "latitude": 52.0274869,
              "longitude": 4.577871
            },
            {
              "latitude": 52.0277363,
              "longitude": 4.5768678
            },
            {
              "latitude": 52.0281065,
              "longitude": 4.5750949
            },
            {
              "latitude": 52.0286456,
              "longitude": 4.5719861999999996
            },
            {
              "latitude": 52.0289084,
              "longitude": 4.5706183
            },
            {
              "latitude": 52.0289728,
              "longitude": 4.5703125
            },
            {
              "latitude": 52.0291203,
              "longitude": 4.5696366
            },
            {
              "latitude": 52.0295468,
              "longitude": 4.5677456
            },
            {
              "latitude": 52.0299035,
              "longitude": 4.5662972
            },
            {
              "latitude": 52.030322,
              "longitude": 4.5647496
            },
            {
              "latitude": 52.0312178,
              "longitude": 4.5615685
            },
            {
              "latitude": 52.03125,
              "longitude": 4.5614451
            },
            {
              "latitude": 52.0316657,
              "longitude": 4.559817
            },
            {
              "latitude": 52.0317194,
              "longitude": 4.5595971
            },
            {
              "latitude": 52.0317596,
              "longitude": 4.55942
            },
            {
              "latitude": 52.0318294,
              "longitude": 4.5591223
            },
            {
              "latitude": 52.0318723,
              "longitude": 4.5589399
            },
            {
              "latitude": 52.0319635,
              "longitude": 4.5585349
            },
            {
              "latitude": 52.0320573,
              "longitude": 4.5581192
            },
            {
              "latitude": 52.0324463,
              "longitude": 4.5563972
            },
            {
              "latitude": 52.0328405,
              "longitude": 4.5547396000000004
            },
            {
              "latitude": 52.0332107,
              "longitude": 4.5532805
            },
            {
              "latitude": 52.033546,
              "longitude": 4.5519233
            },
            {
              "latitude": 52.0337445,
              "longitude": 4.5512018
            },
            {
              "latitude": 52.0345357,
              "longitude": 4.5483398
            },
            {
              "latitude": 52.0345598,
              "longitude": 4.548254
            },
            {
              "latitude": 52.0357722,
              "longitude": 4.5440885
            },
            {
              "latitude": 52.0363462,
              "longitude": 4.5419025
            },
            {
              "latitude": 52.0365474,
              "longitude": 4.541055
            },
            {
              "latitude": 52.0365661,
              "longitude": 4.5409718
            },
            {
              "latitude": 52.0365983,
              "longitude": 4.5408431
            },
            {
              "latitude": 52.0366305,
              "longitude": 4.5407143
            },
            {
              "latitude": 52.03666,
              "longitude": 4.5405775
            },
            {
              "latitude": 52.0367646,
              "longitude": 4.5400813
            },
            {
              "latitude": 52.0370597,
              "longitude": 4.5387188
            },
            {
              "latitude": 52.0373252,
              "longitude": 4.5374662
            },
            {
              "latitude": 52.0376015,
              "longitude": 4.5359454
            },
            {
              "latitude": 52.0378885,
              "longitude": 4.534269
            },
            {
              "latitude": 52.0379287,
              "longitude": 4.5340464
            },
            {
              "latitude": 52.0382023,
              "longitude": 4.5326328
            },
            {
              "latitude": 52.0383686,
              "longitude": 4.5318282
            },
            {
              "latitude": 52.0386958,
              "longitude": 4.5303583
            },
            {
              "latitude": 52.0390472,
              "longitude": 4.5288911
            },
            {
              "latitude": 52.0395702,
              "longitude": 4.5267373
            },
            {
              "latitude": 52.039656,
              "longitude": 4.5263672
            },
            {
              "latitude": 52.0400986,
              "longitude": 4.5244655
            },
            {
              "latitude": 52.0412064,
              "longitude": 4.5200023
            },
            {
              "latitude": 52.0414075,
              "longitude": 4.5192191
            },
            {
              "latitude": 52.0416275,
              "longitude": 4.5184386
            },
            {
              "latitude": 52.0419252,
              "longitude": 4.5174274
            },
            {
              "latitude": 52.0422256,
              "longitude": 4.5164484
            },
            {
              "latitude": 52.0427164,
              "longitude": 4.514949
            },
            {
              "latitude": 52.043151,
              "longitude": 4.5137072
            },
            {
              "latitude": 52.0436901,
              "longitude": 4.5121676
            },
            {
              "latitude": 52.0441166,
              "longitude": 4.5107862
            },
            {
              "latitude": 52.044366,
              "longitude": 4.5099038
            },
            {
              "latitude": 52.0445859,
              "longitude": 4.5090455
            },
            {
              "latitude": 52.044645,
              "longitude": 4.5088068
            },
            {
              "latitude": 52.0448917,
              "longitude": 4.5077205
            },
            {
              "latitude": 52.0453316,
              "longitude": 4.5054647
            },
            {
              "latitude": 52.0455194,
              "longitude": 4.5043945
            },
            {
              "latitude": 52.0456803,
              "longitude": 4.5034531
            },
            {
              "latitude": 52.0459163,
              "longitude": 4.5019832
            },
            {
              "latitude": 52.0459458,
              "longitude": 4.5018223
            },
            {
              "latitude": 52.0461389,
              "longitude": 4.5004973
            },
            {
              "latitude": 52.0461658,
              "longitude": 4.5002452
            },
            {
              "latitude": 52.0462248,
              "longitude": 4.4998804
            },
            {
              "latitude": 52.0464286,
              "longitude": 4.4983971
            },
            {
              "latitude": 52.0466968,
              "longitude": 4.4962379
            },
            {
              "latitude": 52.0468792,
              "longitude": 4.4944704
            },
            {
              "latitude": 52.0471475,
              "longitude": 4.4916165
            },
            {
              "latitude": 52.0471582,
              "longitude": 4.4914877
            },
            {
              "latitude": 52.0471716,
              "longitude": 4.4913027
            },
            {
              "latitude": 52.0474049,
              "longitude": 4.4884488
            },
            {
              "latitude": 52.0475793,
              "longitude": 4.4858766
            },
            {
              "latitude": 52.0477268,
              "longitude": 4.4833553
            },
            {
              "latitude": 52.0477375,
              "longitude": 4.4831192
            },
            {
              "latitude": 52.0477778,
              "longitude": 4.4824219
            },
            {
              "latitude": 52.0479119,
              "longitude": 4.4800857
            },
            {
              "latitude": 52.0479816,
              "longitude": 4.4789216
            },
            {
              "latitude": 52.0480084,
              "longitude": 4.4784388
            },
            {
              "latitude": 52.0480889,
              "longitude": 4.4772211
            },
            {
              "latitude": 52.0480889,
              "longitude": 4.4771701
            },
            {
              "latitude": 52.0481077,
              "longitude": 4.476918
            },
            {
              "latitude": 52.0481479,
              "longitude": 4.4761562
            },
            {
              "latitude": 52.048164,
              "longitude": 4.4758344
            },
            {
              "latitude": 52.0481721,
              "longitude": 4.4756573
            },
            {
              "latitude": 52.0481774,
              "longitude": 4.4754294
            },
            {
              "latitude": 52.0482016,
              "longitude": 4.4750458
            },
            {
              "latitude": 52.0483893,
              "longitude": 4.4720739
            },
            {
              "latitude": 52.0484054,
              "longitude": 4.4718432
            },
            {
              "latitude": 52.0485288,
              "longitude": 4.4702742
            },
            {
              "latitude": 52.0487085,
              "longitude": 4.4683859
            },
            {
              "latitude": 52.0488426,
              "longitude": 4.4671977
            },
            {
              "latitude": 52.0489928,
              "longitude": 4.4654354
            },
            {
              "latitude": 52.0490518,
              "longitude": 4.4647703
            },
            {
              "latitude": 52.0492852,
              "longitude": 4.4615033
            },
            {
              "latitude": 52.0493549,
              "longitude": 4.4604492
            },
            {
              "latitude": 52.049363,
              "longitude": 4.4603205
            },
            {
              "latitude": 52.0494542,
              "longitude": 4.4585341
            },
            {
              "latitude": 52.0494622,
              "longitude": 4.4582498
            },
            {
              "latitude": 52.0495239,
              "longitude": 4.4570187
            },
            {
              "latitude": 52.0495829,
              "longitude": 4.4560397
            },
            {
              "latitude": 52.0497492,
              "longitude": 4.4537061
            },
            {
              "latitude": 52.0497894,
              "longitude": 4.4532019
            },
            {
              "latitude": 52.049937,
              "longitude": 4.4509971
            },
            {
              "latitude": 52.0499477,
              "longitude": 4.4507557
            },
            {
              "latitude": 52.050012099999996,
              "longitude": 4.4497445
            },
            {
              "latitude": 52.0502079,
              "longitude": 4.447006
            },
            {
              "latitude": 52.0503232,
              "longitude": 4.4455898
            },
            {
              "latitude": 52.0506075,
              "longitude": 4.4415799
            },
            {
              "latitude": 52.0508221,
              "longitude": 4.4385007
            },
            {
              "latitude": 52.0508221,
              "longitude": 4.4384766
            },
            {
              "latitude": 52.0509642,
              "longitude": 4.4365373
            },
            {
              "latitude": 52.0513612,
              "longitude": 4.4311273
            },
            {
              "latitude": 52.0514014,
              "longitude": 4.4306043
            },
            {
              "latitude": 52.0516482,
              "longitude": 4.4279248
            },
            {
              "latitude": 52.0518038,
              "longitude": 4.4261035
            },
            {
              "latitude": 52.0518547,
              "longitude": 4.4254303
            },
            {
              "latitude": 52.0519137,
              "longitude": 4.4245666
            },
            {
              "latitude": 52.0519245,
              "longitude": 4.4244352
            },
            {
              "latitude": 52.05208,
              "longitude": 4.4217637
            },
            {
              "latitude": 52.0520908,
              "longitude": 4.4215652
            },
            {
              "latitude": 52.0522195,
              "longitude": 4.4193926
            },
            {
              "latitude": 52.0524207,
              "longitude": 4.4165039
            },
            {
              "latitude": 52.0527399,
              "longitude": 4.4119173
            },
            {
              "latitude": 52.0527372,
              "longitude": 4.4116116
            },
            {
              "latitude": 52.0527506,
              "longitude": 4.4113111
            },
            {
              "latitude": 52.052772,
              "longitude": 4.410992
            },
            {
              "latitude": 52.053,
              "longitude": 4.4087014
            },
            {
              "latitude": 52.0530429,
              "longitude": 4.4080979
            },
            {
              "latitude": 52.0530912,
              "longitude": 4.4076714
            },
            {
              "latitude": 52.0532066,
              "longitude": 4.406679
            },
            {
              "latitude": 52.0532227,
              "longitude": 4.4065636
            },
            {
              "latitude": 52.0533165,
              "longitude": 4.4058341
            },
            {
              "latitude": 52.0536035,
              "longitude": 4.4039592
            },
            {
              "latitude": 52.0539066,
              "longitude": 4.4022077
            },
            {
              "latitude": 52.0541748,
              "longitude": 4.4008371
            },
            {
              "latitude": 52.0542097,
              "longitude": 4.4006708
            },
            {
              "latitude": 52.0549929,
              "longitude": 4.397074
            },
            {
              "latitude": 52.0551941,
              "longitude": 4.3961781
            },
            {
              "latitude": 52.0552236,
              "longitude": 4.3960467
            },
            {
              "latitude": 52.0552477,
              "longitude": 4.3959501
            },
            {
              "latitude": 52.0553121,
              "longitude": 4.3957007
            },
            {
              "latitude": 52.0555857,
              "longitude": 4.3945313
            },
            {
              "latitude": 52.0556715,
              "longitude": 4.3941531
            },
            {
              "latitude": 52.0558432,
              "longitude": 4.3934825
            },
            {
              "latitude": 52.0560041,
              "longitude": 4.3928871
            },
            {
              "latitude": 52.0560524,
              "longitude": 4.3927234
            },
            {
              "latitude": 52.0564333,
              "longitude": 4.391436
            },
            {
              "latitude": 52.0567927,
              "longitude": 4.3903095
            },
            {
              "latitude": 52.056857,
              "longitude": 4.3901324
            },
            {
              "latitude": 52.0568946,
              "longitude": 4.3900198
            },
            {
              "latitude": 52.0570582,
              "longitude": 4.3895128
            },
            {
              "latitude": 52.0574149,
              "longitude": 4.3883461
            },
            {
              "latitude": 52.0576724,
              "longitude": 4.3876058
            },
            {
              "latitude": 52.0580077,
              "longitude": 4.386718
            },
            {
              "latitude": 52.0583135,
              "longitude": 4.3858919
            },
            {
              "latitude": 52.059212,
              "longitude": 4.383502
            },
            {
              "latitude": 52.0607221,
              "longitude": 4.3796209
            },
            {
              "latitude": 52.0617118,
              "longitude": 4.3770325
            },
            {
              "latitude": 52.0617843,
              "longitude": 4.3768394
            },
            {
              "latitude": 52.0620096,
              "longitude": 4.376201
            },
            {
              "latitude": 52.0620552,
              "longitude": 4.376075
            },
            {
              "latitude": 52.0621437,
              "longitude": 4.3758175
            },
            {
              "latitude": 52.0622268,
              "longitude": 4.3755654
            },
            {
              "latitude": 52.062251,
              "longitude": 4.3754983
            },
            {
              "latitude": 52.062487,
              "longitude": 4.374707
            },
            {
              "latitude": 52.0625836,
              "longitude": 4.3743718
            },
            {
              "latitude": 52.0628035,
              "longitude": 4.3734759
            },
            {
              "latitude": 52.063002,
              "longitude": 4.3725586
            },
            {
              "latitude": 52.0630717,
              "longitude": 4.3722367
            },
            {
              "latitude": 52.0631602,
              "longitude": 4.371652
            },
            {
              "latitude": 52.0633024,
              "longitude": 4.3709198
            },
            {
              "latitude": 52.0636001,
              "longitude": 4.3695089
            },
            {
              "latitude": 52.0637316,
              "longitude": 4.369002
            },
            {
              "latitude": 52.0638952,
              "longitude": 4.3684655
            },
            {
              "latitude": 52.0639515,
              "longitude": 4.3682751
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
          "endPointIndex": 98,
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
          "endPointIndex": 182,
          "sectionType": "SPEED_LIMIT"
        },
        {
          "startPointIndex": 0,
          "endPointIndex": 182,
          "sectionType": "URBAN"
        },
        {
          "startPointIndex": 98,
          "endPointIndex": 190,
          "sectionType": "ROAD_SHIELDS",
          "roadShieldReferences": [
            {
              "reference": "nld-connector",
              "shieldContent": "s110"
            }
          ]
        },
        {
          "maxSpeedLimitInKmh": 80,
          "startPointIndex": 182,
          "endPointIndex": 196,
          "sectionType": "SPEED_LIMIT"
        },
        {
          "startPointIndex": 0,
          "endPointIndex": 202,
          "sectionType": "LOW_EMISSION_ZONE"
        },
        {
          "startPointIndex": 190,
          "endPointIndex": 221,
          "sectionType": "ROAD_SHIELDS",
          "roadShieldReferences": [
            {
              "reference": "nld-highway",
              "shieldContent": "A2"
            }
          ]
        },
        {
          "maxSpeedLimitInKmh": 100,
          "startPointIndex": 196,
          "endPointIndex": 276,
          "sectionType": "SPEED_LIMIT"
        },
        {
          "maxSpeedLimitInKmh": 130,
          "startPointIndex": 276,
          "endPointIndex": 458,
          "sectionType": "SPEED_LIMIT"
        },
        {
          "startPointIndex": 482,
          "endPointIndex": 515,
          "sectionType": "TUNNEL"
        },
        {
          "startPointIndex": 221,
          "endPointIndex": 536,
          "sectionType": "ROAD_SHIELDS",
          "roadShieldReferences": [
            {
              "reference": "nld-highway",
              "shieldContent": "A2"
            },
            {
              "reference": "european-road",
              "shieldContent": "E35"
            }
          ]
        },
        {
          "startPointIndex": 536,
          "endPointIndex": 558,
          "sectionType": "ROAD_SHIELDS",
          "roadShieldReferences": [
            {
              "reference": "european-road",
              "shieldContent": "E35"
            }
          ]
        },
        {
          "startPointIndex": 573,
          "endPointIndex": 580,
          "sectionType": "ROAD_SHIELDS",
          "roadShieldReferences": [
            {
              "reference": "european-road",
              "shieldContent": "E25"
            }
          ]
        },
        {
          "startPointIndex": 580,
          "endPointIndex": 583,
          "sectionType": "ROAD_SHIELDS",
          "roadShieldReferences": [
            {
              "reference": "nld-highway",
              "shieldContent": "A12"
            },
            {
              "reference": "european-road",
              "shieldContent": "E30"
            },
            {
              "reference": "european-road",
              "shieldContent": "E25"
            }
          ]
        },
        {
          "maxSpeedLimitInKmh": 100,
          "startPointIndex": 458,
          "endPointIndex": 600,
          "sectionType": "SPEED_LIMIT"
        },
        {
          "startPointIndex": 583,
          "endPointIndex": 844,
          "sectionType": "ROAD_SHIELDS",
          "roadShieldReferences": [
            {
              "reference": "nld-highway",
              "shieldContent": "A12"
            },
            {
              "reference": "european-road",
              "shieldContent": "E25"
            },
            {
              "reference": "european-road",
              "shieldContent": "E30"
            }
          ]
        },
        {
          "maxSpeedLimitInKmh": 130,
          "startPointIndex": 600,
          "endPointIndex": 847,
          "sectionType": "SPEED_LIMIT"
        },
        {
          "startPointIndex": 854,
          "endPointIndex": 857,
          "sectionType": "TUNNEL"
        },
        {
          "startPointIndex": 844,
          "endPointIndex": 860,
          "sectionType": "ROAD_SHIELDS",
          "roadShieldReferences": [
            {
              "reference": "nld-highway",
              "shieldContent": "A12"
            },
            {
              "reference": "european-road",
              "shieldContent": "E30"
            },
            {
              "reference": "european-road",
              "shieldContent": "E25"
            }
          ]
        },
        {
          "maxSpeedLimitInKmh": 120,
          "startPointIndex": 847,
          "endPointIndex": 896,
          "sectionType": "SPEED_LIMIT"
        },
        {
          "startPointIndex": 860,
          "endPointIndex": 918,
          "sectionType": "ROAD_SHIELDS",
          "roadShieldReferences": [
            {
              "reference": "nld-highway",
              "shieldContent": "A12"
            },
            {
              "reference": "european-road",
              "shieldContent": "E30"
            }
          ]
        },
        {
          "startPointIndex": 918,
          "endPointIndex": 962,
          "sectionType": "ROAD_SHIELDS",
          "roadShieldReferences": [
            {
              "reference": "nld-highway",
              "shieldContent": "A12"
            },
            {
              "reference": "nld-primary",
              "shieldContent": "N457"
            },
            {
              "reference": "european-road",
              "shieldContent": "E30"
            }
          ]
        },
        {
          "startPointIndex": 1000,
          "endPointIndex": 1024,
          "sectionType": "URBAN"
        },
        {
          "maxSpeedLimitInKmh": 130,
          "startPointIndex": 896,
          "endPointIndex": 1076,
          "sectionType": "SPEED_LIMIT"
        },
        {
          "startPointIndex": 1087,
          "endPointIndex": 1090,
          "sectionType": "URBAN"
        },
        {
          "startPointIndex": 962,
          "endPointIndex": 1092,
          "sectionType": "ROAD_SHIELDS",
          "roadShieldReferences": [
            {
              "reference": "nld-highway",
              "shieldContent": "A12"
            },
            {
              "reference": "european-road",
              "shieldContent": "E30"
            }
          ]
        },
        {
          "maxSpeedLimitInKmh": 100,
          "startPointIndex": 1076,
          "endPointIndex": 1097,
          "sectionType": "SPEED_LIMIT"
        },
        {
          "startPointIndex": 1123,
          "endPointIndex": 1137,
          "sectionType": "URBAN"
        },
        {
          "maxSpeedLimitInKmh": 80,
          "startPointIndex": 1097,
          "endPointIndex": 1157,
          "sectionType": "SPEED_LIMIT"
        },
        {
          "startPointIndex": 179,
          "endPointIndex": 1169,
          "sectionType": "MOTORWAY"
        },
        {
          "startPointIndex": 1092,
          "endPointIndex": 1169,
          "sectionType": "ROAD_SHIELDS",
          "roadShieldReferences": [
            {
              "reference": "nld-highway",
              "shieldContent": "A12"
            }
          ]
        },
        {
          "startPointIndex": 1171,
          "endPointIndex": 1173,
          "sectionType": "TUNNEL"
        },
        {
          "maxSpeedLimitInKmh": 70,
          "startPointIndex": 1157,
          "endPointIndex": 1177,
          "sectionType": "SPEED_LIMIT"
        },
        {
          "startPointIndex": 1210,
          "endPointIndex": 1221,
          "sectionType": "TUNNEL"
        },
        {
          "startPointIndex": 1216,
          "endPointIndex": 1226,
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
          "startPointIndex": 1177,
          "endPointIndex": 1256,
          "sectionType": "SPEED_LIMIT"
        },
        {
          "startPointIndex": 0,
          "endPointIndex": 1256,
          "sectionType": "COUNTRY",
          "countryCode": "NLD"
        },
        {
          "startPointIndex": 1227,
          "endPointIndex": 1256,
          "sectionType": "LOW_EMISSION_ZONE"
        },
        {
          "startPointIndex": 0,
          "endPointIndex": 1256,
          "sectionType": "TRAVEL_MODE",
          "travelMode": "car"
        },
        {
          "startPointIndex": 1163,
          "endPointIndex": 1256,
          "sectionType": "URBAN"
        },
        {
          "startPointIndex": 885,
          "endPointIndex": 887,
          "sectionType": "TRAFFIC",
          "simpleCategory": "OTHER",
          "effectiveSpeedInKmh": 114,
          "delayInSeconds": 0,
          "magnitudeOfDelay": 4,
          "tec": {
            "causes": [
              {
                "mainCauseCode": 10
              }
            ],
            "effectCode": 1
          }
        },
        {
          "startPointIndex": 885,
          "endPointIndex": 887,
          "sectionType": "TRAFFIC",
          "simpleCategory": "OTHER",
          "effectiveSpeedInKmh": 114,
          "delayInSeconds": 0,
          "magnitudeOfDelay": 4,
          "tec": {
            "causes": [
              {
                "mainCauseCode": 4
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
            "SINGLE_SOLID"
          ],
          "startPointIndex": 95,
          "endPointIndex": 96,
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
          "startPointIndex": 145,
          "endPointIndex": 146,
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
            }
          ],
          "laneSeparators": [
            "SINGLE_SOLID",
            "LONG_DASHED",
            "LONG_DASHED",
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
            "LONG_DASHED",
            "SHORT_DASHED",
            "SINGLE_SOLID"
          ],
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
          "startPointIndex": 198,
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
          "startPointIndex": 206,
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
          "startPointIndex": 289,
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
            },
            {
              "directions": [
                "STRAIGHT"
              ],
              "follow": "STRAIGHT"
            },
            {
              "directions": [
                "STRAIGHT"
              ],
              "follow": "STRAIGHT"
            },
            {
              "directions": [
                "STRAIGHT"
              ],
              "follow": "STRAIGHT"
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
            "LONG_DASHED",
            "SINGLE_SOLID"
          ],
          "startPointIndex": 317,
          "endPointIndex": 318,
          "sectionType": "LANES"
        },
        {
          "lanes": [
            {
              "directions": [
                "STRAIGHT"
              ],
              "follow": "STRAIGHT"
            },
            {
              "directions": [
                "STRAIGHT"
              ],
              "follow": "STRAIGHT"
            },
            {
              "directions": [
                "STRAIGHT"
              ],
              "follow": "STRAIGHT"
            },
            {
              "directions": [
                "STRAIGHT"
              ],
              "follow": "STRAIGHT"
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
            },
            {
              "directions": [
                "STRAIGHT"
              ],
              "follow": "STRAIGHT"
            },
            {
              "directions": [
                "STRAIGHT"
              ],
              "follow": "STRAIGHT"
            },
            {
              "directions": [
                "STRAIGHT"
              ],
              "follow": "STRAIGHT"
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
            "LONG_DASHED",
            "SHORT_DASHED",
            "SHORT_DASHED",
            "SINGLE_SOLID"
          ],
          "startPointIndex": 440,
          "endPointIndex": 441,
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
          "startPointIndex": 535,
          "endPointIndex": 536,
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
          "startPointIndex": 553,
          "endPointIndex": 558,
          "sectionType": "LANES"
        },
        {
          "lanes": [
            {
              "directions": [
                "STRAIGHT"
              ],
              "follow": "STRAIGHT"
            },
            {
              "directions": [
                "STRAIGHT"
              ],
              "follow": "STRAIGHT"
            },
            {
              "directions": [
                "STRAIGHT"
              ],
              "follow": "STRAIGHT"
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
            "SHORT_DASHED",
            "SINGLE_SOLID"
          ],
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
                "STRAIGHT"
              ],
              "follow": "STRAIGHT"
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
            "SHORT_DASHED",
            "SINGLE_SOLID"
          ],
          "startPointIndex": 666,
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
            },
            {
              "directions": [
                "STRAIGHT"
              ],
              "follow": "STRAIGHT"
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
            "SHORT_DASHED",
            "SINGLE_SOLID"
          ],
          "startPointIndex": 711,
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
            },
            {
              "directions": [
                "STRAIGHT"
              ],
              "follow": "STRAIGHT"
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
            "SHORT_DASHED",
            "SINGLE_SOLID"
          ],
          "startPointIndex": 790,
          "endPointIndex": 791,
          "sectionType": "LANES"
        },
        {
          "lanes": [
            {
              "directions": [
                "STRAIGHT"
              ],
              "follow": "STRAIGHT"
            },
            {
              "directions": [
                "STRAIGHT"
              ],
              "follow": "STRAIGHT"
            },
            {
              "directions": [
                "STRAIGHT"
              ],
              "follow": "STRAIGHT"
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
            "SHORT_DASHED",
            "SINGLE_SOLID"
          ],
          "startPointIndex": 830,
          "endPointIndex": 831,
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
          "startPointIndex": 858,
          "endPointIndex": 860,
          "sectionType": "LANES"
        },
        {
          "lanes": [
            {
              "directions": [
                "STRAIGHT"
              ],
              "follow": "STRAIGHT"
            },
            {
              "directions": [
                "STRAIGHT"
              ],
              "follow": "STRAIGHT"
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
          "startPointIndex": 909,
          "endPointIndex": 912,
          "sectionType": "LANES"
        },
        {
          "lanes": [
            {
              "directions": [
                "STRAIGHT"
              ],
              "follow": "STRAIGHT"
            },
            {
              "directions": [
                "STRAIGHT"
              ],
              "follow": "STRAIGHT"
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
          "startPointIndex": 960,
          "endPointIndex": 962,
          "sectionType": "LANES"
        },
        {
          "lanes": [
            {
              "directions": [
                "STRAIGHT"
              ],
              "follow": "STRAIGHT"
            },
            {
              "directions": [
                "STRAIGHT"
              ],
              "follow": "STRAIGHT"
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
          "startPointIndex": 986,
          "endPointIndex": 988,
          "sectionType": "LANES"
        },
        {
          "lanes": [
            {
              "directions": [
                "STRAIGHT"
              ],
              "follow": "STRAIGHT"
            },
            {
              "directions": [
                "STRAIGHT"
              ],
              "follow": "STRAIGHT"
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
          "startPointIndex": 1046,
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
          "startPointIndex": 1065,
          "endPointIndex": 1068,
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
            "SINGLE_SOLID"
          ],
          "startPointIndex": 1090,
          "endPointIndex": 1092,
          "sectionType": "LANES"
        },
        {
          "lanes": [
            {
              "directions": [
                "STRAIGHT"
              ],
              "follow": "STRAIGHT"
            },
            {
              "directions": [
                "STRAIGHT"
              ],
              "follow": "STRAIGHT"
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
          "startPointIndex": 1125,
          "endPointIndex": 1126,
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
          "startPointIndex": 1168,
          "endPointIndex": 1169,
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
          "startPointIndex": 1178,
          "endPointIndex": 1179,
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
          "startPointIndex": 1193,
          "endPointIndex": 1195,
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
          "startPointIndex": 1223,
          "endPointIndex": 1224,
          "sectionType": "LANES"
        }
      ],
      "guidance": {
        "instructions": [
          {
            "routeOffsetInMeters": 0,
            "travelTimeInSeconds": 0,
            "point": {
              "latitude": 52.36563,
              "longitude": 4.87845
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
                "latitude": 52.3656301,
                "longitude": 4.8784469
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
            "routeOffsetInMeters": 2175,
            "travelTimeInSeconds": 334,
            "point": {
              "latitude": 52.35867,
              "longitude": 4.90335
            },
            "pointIndex": 96,
            "instructionType": "TURN",
            "roadNumbers": [
              "s110"
            ],
            "phoneticRoadNumbers": [
              "ˌɛs.hɔn.dərt.ɛn.ˈtin"
            ],
            "phoneticRoadNumberLanguageCodes": [
              "nl-NL"
            ],
            "street": "Amsteldijk",
            "phoneticStreet": "ˈɑm.stəl.dɛ⁀ik",
            "phoneticStreetLanguageCode": "nl-NL",
            "countryCode": "NLD",
            "junctionType": "REGULAR",
            "turnAngleInDecimalDegrees": 90,
            "possibleCombineWithNext": false,
            "drivingSide": "RIGHT",
            "maneuver": "TURN_RIGHT",
            "message": "Turn right onto <street>Amsteldijk</street>/<roadNumber>s110</roadNumber>",
            "mainAnnouncement": {
              "point": {
                "latitude": 52.3577526,
                "longitude": 4.8992408
              },
              "pointIndex": 87,
              "maneuver": "TURN_RIGHT",
              "distanceInMeters": 300
            },
            "confirmationAnnouncement": {
              "point": {
                "latitude": 52.3584747,
                "longitude": 4.9023965
              },
              "pointIndex": 94,
              "maneuver": "TURN_RIGHT",
              "distanceInMeters": 69
            },
            "roadShieldReferences": [
              {
                "reference": "nld-connector",
                "shieldContent": "s110"
              }
            ]
          },
          {
            "routeOffsetInMeters": 3600,
            "travelTimeInSeconds": 506,
            "point": {
              "latitude": 52.34724,
              "longitude": 4.9116
            },
            "pointIndex": 146,
            "instructionType": "TURN",
            "roadNumbers": [
              "s110"
            ],
            "phoneticRoadNumbers": [
              "ˌɛs.hɔn.dərt.ɛn.ˈtin"
            ],
            "phoneticRoadNumberLanguageCodes": [
              "nl-NL"
            ],
            "street": "Amsteldijk",
            "phoneticStreet": "ˈɑm.stəl.dɛ⁀ik",
            "phoneticStreetLanguageCode": "nl-NL",
            "countryCode": "NLD",
            "junctionType": "REGULAR",
            "turnAngleInDecimalDegrees": 0,
            "possibleCombineWithNext": false,
            "drivingSide": "RIGHT",
            "maneuver": "STRAIGHT",
            "message": "Keep straight on at <street>Amsteldijk</street>/<roadNumber>s110</roadNumber>",
            "mainAnnouncement": {
              "point": {
                "latitude": 52.348786,
                "longitude": 4.9101496
              },
              "pointIndex": 138,
              "maneuver": "STRAIGHT",
              "distanceInMeters": 200
            },
            "confirmationAnnouncement": {
              "point": {
                "latitude": 52.3476227,
                "longitude": 4.9113633
              },
              "pointIndex": 143,
              "maneuver": "STRAIGHT",
              "distanceInMeters": 46
            },
            "roadShieldReferences": [
              {
                "reference": "nld-connector",
                "shieldContent": "s110"
              }
            ]
          },
          {
            "routeOffsetInMeters": 4576,
            "travelTimeInSeconds": 598,
            "point": {
              "latitude": 52.34039,
              "longitude": 4.90763
            },
            "pointIndex": 177,
            "instructionType": "TURN",
            "roadNumbers": [
              "s110"
            ],
            "phoneticRoadNumbers": [
              "ˌɛs.hɔn.dərt.ɛn.ˈtin"
            ],
            "phoneticRoadNumberLanguageCodes": [
              "nl-NL"
            ],
            "street": "Nieuwe Utrechtseweg",
            "phoneticStreet": "ˈni.wə ˈʔy.trɛxt.sə.ʋɛx",
            "phoneticStreetLanguageCode": "nl-NL",
            "countryCode": "NLD",
            "signpostText": "Utrecht",
            "phoneticSignpostText": "ˈy.trɛxt",
            "phoneticSignpostTextLanguageCode": "nl-NL",
            "junctionType": "REGULAR",
            "turnAngleInDecimalDegrees": -90,
            "possibleCombineWithNext": true,
            "drivingSide": "RIGHT",
            "maneuver": "TURN_LEFT",
            "message": "Turn left onto <street>Nieuwe Utrechtseweg</street>/<roadNumber>s110</roadNumber> toward <signpostText>Utrecht</signpostText>",
            "combinedMessage": "Turn left onto <street>Nieuwe Utrechtseweg</street>/<roadNumber>s110</roadNumber> toward <signpostText>Utrecht</signpostText> then keep left at <street>Nieuwe Utrechtseweg</street>/<roadNumber>A2</roadNumber> toward <signpostText>Utrecht</signpostText>",
            "earlyWarningAnnouncement": {
              "point": {
                "latitude": 52.343946,
                "longitude": 4.9128619
              },
              "pointIndex": 155,
              "maneuver": "AHEAD_LEFT_TURN",
              "distanceInMeters": 600
            },
            "mainAnnouncement": {
              "point": {
                "latitude": 52.3422137,
                "longitude": 4.9124749
              },
              "pointIndex": 164,
              "maneuver": "TURN_LEFT",
              "distanceInMeters": 400
            },
            "confirmationAnnouncement": {
              "point": {
                "latitude": 52.3405345,
                "longitude": 4.9087827
              },
              "pointIndex": 173,
              "maneuver": "TURN_LEFT",
              "distanceInMeters": 80
            },
            "roadShieldReferences": [
              {
                "reference": "nld-connector",
                "shieldContent": "s110"
              }
            ],
            "signpostRoadShieldReferences": [
              {
                "reference": "nld-connector",
                "shieldContent": "s110"
              },
              {
                "reference": "nld-highway",
                "shieldContent": "A10"
              }
            ]
          },
          {
            "routeOffsetInMeters": 4989,
            "travelTimeInSeconds": 633,
            "point": {
              "latitude": 52.33743,
              "longitude": 4.91084
            },
            "pointIndex": 190,
            "instructionType": "TURN",
            "roadNumbers": [
              "A2"
            ],
            "phoneticRoadNumbers": [
              "a.ˈtʋe"
            ],
            "phoneticRoadNumberLanguageCodes": [
              "nl-NL"
            ],
            "street": "Nieuwe Utrechtseweg",
            "phoneticStreet": "ˈni.wə ˈʔy.trɛxt.sə.ʋɛx",
            "phoneticStreetLanguageCode": "nl-NL",
            "countryCode": "NLD",
            "signpostText": "Utrecht",
            "phoneticSignpostText": "ˈy.trɛxt",
            "phoneticSignpostTextLanguageCode": "nl-NL",
            "junctionType": "BIFURCATION",
            "turnAngleInDecimalDegrees": -45,
            "possibleCombineWithNext": false,
            "drivingSide": "RIGHT",
            "maneuver": "KEEP_LEFT",
            "message": "Keep left at <street>Nieuwe Utrechtseweg</street>/<roadNumber>A2</roadNumber> toward <signpostText>Utrecht</signpostText>",
            "mainAnnouncement": {
              "point": {
                "latitude": 52.3396443,
                "longitude": 4.9083425
              },
              "pointIndex": 180,
              "maneuver": "KEEP_LEFT",
              "distanceInMeters": 300
            },
            "confirmationAnnouncement": {
              "point": {
                "latitude": 52.3389159,
                "longitude": 4.9091891
              },
              "pointIndex": 182,
              "maneuver": "KEEP_LEFT",
              "distanceInMeters": 200
            },
            "roadShieldReferences": [
              {
                "reference": "nld-highway",
                "shieldContent": "A2"
              }
            ],
            "signpostRoadShieldReferences": [
              {
                "reference": "nld-highway",
                "shieldContent": "A10"
              },
              {
                "reference": "nld-connector",
                "shieldContent": "s110"
              }
            ]
          },
          {
            "routeOffsetInMeters": 5987,
            "travelTimeInSeconds": 673,
            "point": {
              "latitude": 52.32865,
              "longitude": 4.91311
            },
            "pointIndex": 207,
            "instructionType": "TURN",
            "roadNumbers": [
              "A2"
            ],
            "phoneticRoadNumbers": [
              "a.ˈtʋe"
            ],
            "phoneticRoadNumberLanguageCodes": [
              "nl-NL"
            ],
            "countryCode": "NLD",
            "signpostText": "Utrecht",
            "phoneticSignpostText": "ˈy.trɛxt",
            "phoneticSignpostTextLanguageCode": "nl-NL",
            "junctionType": "REGULAR",
            "turnAngleInDecimalDegrees": 0,
            "possibleCombineWithNext": false,
            "drivingSide": "RIGHT",
            "maneuver": "STRAIGHT",
            "message": "Keep straight on at <roadNumber>A2</roadNumber> toward <signpostText>Utrecht</signpostText>",
            "mainAnnouncement": {
              "point": {
                "latitude": 52.3358011,
                "longitude": 4.9119424
              },
              "pointIndex": 195,
              "maneuver": "STRAIGHT",
              "distanceInMeters": 800
            },
            "confirmationAnnouncement": {
              "point": {
                "latitude": 52.3301841,
                "longitude": 4.9128589
              },
              "pointIndex": 204,
              "maneuver": "STRAIGHT",
              "distanceInMeters": 172
            },
            "roadShieldReferences": [
              {
                "reference": "nld-highway",
                "shieldContent": "A2"
              }
            ],
            "signpostRoadShieldReferences": [
              {
                "reference": "nld-highway",
                "shieldContent": "A2"
              }
            ]
          },
          {
            "routeOffsetInMeters": 6507,
            "travelTimeInSeconds": 691,
            "point": {
              "latitude": 52.32401,
              "longitude": 4.91388
            },
            "pointIndex": 215,
            "instructionType": "DIRECTION_INFO",
            "roadNumbers": [
              "A2"
            ],
            "phoneticRoadNumbers": [
              "a.ˈtʋe"
            ],
            "phoneticRoadNumberLanguageCodes": [
              "nl-NL"
            ],
            "countryCode": "NLD",
            "signpostText": "Holendrecht",
            "possibleCombineWithNext": false,
            "drivingSide": "RIGHT",
            "maneuver": "FOLLOW",
            "message": "Follow <roadNumber>A2</roadNumber> toward <signpostText>Holendrecht</signpostText>",
            "mainAnnouncement": {
              "point": {
                "latitude": 52.3248956,
                "longitude": 4.913698
              },
              "pointIndex": 213,
              "maneuver": "FOLLOW",
              "distanceInMeters": 100
            },
            "roadShieldReferences": [
              {
                "reference": "nld-highway",
                "shieldContent": "A2"
              }
            ]
          },
          {
            "routeOffsetInMeters": 30540,
            "travelTimeInSeconds": 1434,
            "point": {
              "latitude": 52.12363,
              "longitude": 5.02207
            },
            "pointIndex": 441,
            "instructionType": "TURN",
            "roadNumbers": [
              "A2",
              "E35"
            ],
            "phoneticRoadNumbers": [
              "a.ˈtʋe",
              "ˌe.vɛ⁀i.vən.ˈdɛr.təx"
            ],
            "phoneticRoadNumberLanguageCodes": [
              "nl-NL",
              "nl-NL"
            ],
            "countryCode": "NLD",
            "signpostText": "RING-Zuid",
            "phoneticSignpostText": "ˈrɪŋ ˈzœ⁀yt",
            "phoneticSignpostTextLanguageCode": "nl-NL",
            "junctionType": "BIFURCATION",
            "turnAngleInDecimalDegrees": -45,
            "possibleCombineWithNext": false,
            "drivingSide": "RIGHT",
            "maneuver": "KEEP_LEFT",
            "message": "Keep left at <roadNumber>A2</roadNumber>/<roadNumber>E35</roadNumber> toward <signpostText>RING-Zuid</signpostText>",
            "earlyWarningAnnouncement": {
              "point": {
                "latitude": 52.1383321,
                "longitude": 5.0059727
              },
              "pointIndex": 413,
              "maneuver": "AHEAD_KEEP_LEFT",
              "distanceInMeters": 2000
            },
            "mainAnnouncement": {
              "point": {
                "latitude": 52.1287547,
                "longitude": 5.0139046
              },
              "pointIndex": 426,
              "maneuver": "KEEP_LEFT",
              "distanceInMeters": 800
            },
            "confirmationAnnouncement": {
              "point": {
                "latitude": 52.126148,
                "longitude": 5.0179245
              },
              "pointIndex": 431,
              "maneuver": "KEEP_LEFT",
              "distanceInMeters": 400
            },
            "roadShieldReferences": [
              {
                "reference": "nld-highway",
                "shieldContent": "A2"
              },
              {
                "reference": "european-road",
                "shieldContent": "E35"
              }
            ],
            "signpostRoadShieldReferences": [
              {
                "reference": "european-road",
                "shieldContent": "E35"
              }
            ]
          },
          {
            "routeOffsetInMeters": 31135,
            "travelTimeInSeconds": 1453,
            "point": {
              "latitude": 52.11995,
              "longitude": 5.02838
            },
            "pointIndex": 447,
            "instructionType": "DIRECTION_INFO",
            "roadNumbers": [
              "A2",
              "E35"
            ],
            "phoneticRoadNumbers": [
              "a.ˈtʋe",
              "ˌe.vɛ⁀i.vən.ˈdɛr.təx"
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
            "message": "Follow <roadNumber>A2</roadNumber>/<roadNumber>E35</roadNumber> toward <signpostText>Den Haag</signpostText>",
            "mainAnnouncement": {
              "point": {
                "latitude": 52.1205553,
                "longitude": 5.0272942
              },
              "pointIndex": 446,
              "maneuver": "FOLLOW",
              "distanceInMeters": 100
            },
            "roadShieldReferences": [
              {
                "reference": "nld-highway",
                "shieldContent": "A2"
              },
              {
                "reference": "european-road",
                "shieldContent": "E35"
              }
            ],
            "signpostRoadShieldReferences": [
              {
                "reference": "european-road",
                "shieldContent": "E30"
              },
              {
                "reference": "european-road",
                "shieldContent": "E35"
              },
              {
                "reference": "nld-highway",
                "shieldContent": "A12"
              }
            ]
          },
          {
            "routeOffsetInMeters": 37489,
            "travelTimeInSeconds": 1657,
            "point": {
              "latitude": 52.07525,
              "longitude": 5.07365
            },
            "pointIndex": 536,
            "instructionType": "TURN",
            "roadNumbers": [
              "A12",
              "E30",
              "E25"
            ],
            "phoneticRoadNumbers": [
              "a.ˈtʋalf",
              "ˌe.ˈdɛr.təx",
              "ˌe.vɛ⁀i.vən.ˈtʋɪn.təx"
            ],
            "phoneticRoadNumberLanguageCodes": [
              "nl-NL",
              "nl-NL",
              "nl-NL"
            ],
            "countryCode": "NLD",
            "signpostText": "Den Haag",
            "phoneticSignpostText": "dɛn ˈhax",
            "phoneticSignpostTextLanguageCode": "nl-NL",
            "junctionType": "REGULAR",
            "turnAngleInDecimalDegrees": 45,
            "possibleCombineWithNext": false,
            "drivingSide": "RIGHT",
            "maneuver": "TAKE_EXIT",
            "message": "Take the exit onto <roadNumber>A12</roadNumber>/<roadNumber>E30</roadNumber>/<roadNumber>E25</roadNumber> toward <signpostText>Den Haag</signpostText>",
            "earlyWarningAnnouncement": {
              "point": {
                "latitude": 52.0927158,
                "longitude": 5.0719279
              },
              "pointIndex": 500,
              "maneuver": "AHEAD_EXIT",
              "distanceInMeters": 2000
            },
            "mainAnnouncement": {
              "point": {
                "latitude": 52.0823058,
                "longitude": 5.0757069
              },
              "pointIndex": 521,
              "maneuver": "TAKE_EXIT",
              "distanceInMeters": 800
            },
            "confirmationAnnouncement": {
              "point": {
                "latitude": 52.0787409,
                "longitude": 5.075033
              },
              "pointIndex": 531,
              "maneuver": "TAKE_EXIT",
              "distanceInMeters": 400
            },
            "roadShieldReferences": [
              {
                "reference": "nld-highway",
                "shieldContent": "A12"
              },
              {
                "reference": "european-road",
                "shieldContent": "E30"
              },
              {
                "reference": "european-road",
                "shieldContent": "E25"
              }
            ],
            "signpostRoadShieldReferences": [
              {
                "reference": "european-road",
                "shieldContent": "E30"
              },
              {
                "reference": "european-road",
                "shieldContent": "E35"
              },
              {
                "reference": "nld-highway",
                "shieldContent": "A12"
              }
            ]
          },
          {
            "routeOffsetInMeters": 38408,
            "travelTimeInSeconds": 1689,
            "point": {
              "latitude": 52.06831,
              "longitude": 5.06754
            },
            "pointIndex": 558,
            "instructionType": "TURN",
            "roadNumbers": [
              "A12",
              "E30",
              "E25"
            ],
            "phoneticRoadNumbers": [
              "a.ˈtʋalf",
              "ˌe.ˈdɛr.təx",
              "ˌe.vɛ⁀i.vən.ˈtʋɪn.təx"
            ],
            "phoneticRoadNumberLanguageCodes": [
              "nl-NL",
              "nl-NL",
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
            "message": "Keep right at <roadNumber>A12</roadNumber>/<roadNumber>E30</roadNumber>/<roadNumber>E25</roadNumber> toward <signpostText>Den Haag</signpostText>",
            "combinedMessage": "Keep right at <roadNumber>A12</roadNumber>/<roadNumber>E30</roadNumber>/<roadNumber>E25</roadNumber> toward <signpostText>Den Haag</signpostText> then take the <roadNumber>A12</roadNumber>/<roadNumber>E30</roadNumber>/<roadNumber>E25</roadNumber> motorway",
            "earlyWarningAnnouncement": {
              "point": {
                "latitude": 52.0748289,
                "longitude": 5.0733968
              },
              "pointIndex": 538,
              "maneuver": "AHEAD_KEEP_RIGHT",
              "distanceInMeters": 869
            },
            "mainAnnouncement": {
              "point": {
                "latitude": 52.0724958,
                "longitude": 5.0723545
              },
              "pointIndex": 543,
              "maneuver": "KEEP_RIGHT",
              "distanceInMeters": 600
            },
            "confirmationAnnouncement": {
              "point": {
                "latitude": 52.0687355,
                "longitude": 5.0688254
              },
              "pointIndex": 556,
              "maneuver": "KEEP_RIGHT",
              "distanceInMeters": 100
            },
            "roadShieldReferences": [
              {
                "reference": "nld-highway",
                "shieldContent": "A12"
              },
              {
                "reference": "european-road",
                "shieldContent": "E30"
              },
              {
                "reference": "european-road",
                "shieldContent": "E25"
              }
            ],
            "signpostRoadShieldReferences": [
              {
                "reference": "european-road",
                "shieldContent": "E25"
              }
            ]
          },
          {
            "routeOffsetInMeters": 39328,
            "travelTimeInSeconds": 1721,
            "point": {
              "latitude": 52.06925,
              "longitude": 5.05464
            },
            "pointIndex": 580,
            "instructionType": "ROAD_CHANGE",
            "roadNumbers": [
              "A12",
              "E30",
              "E25"
            ],
            "phoneticRoadNumbers": [
              "a.ˈtʋalf",
              "ˌe.ˈdɛr.təx",
              "ˌe.vɛ⁀i.vən.ˈtʋɪn.təx"
            ],
            "phoneticRoadNumberLanguageCodes": [
              "nl-NL",
              "nl-NL",
              "nl-NL"
            ],
            "countryCode": "NLD",
            "possibleCombineWithNext": false,
            "drivingSide": "RIGHT",
            "maneuver": "ENTER_MOTORWAY",
            "message": "Take the <roadNumber>A12</roadNumber>/<roadNumber>E30</roadNumber>/<roadNumber>E25</roadNumber> motorway",
            "roadShieldReferences": [
              {
                "reference": "nld-highway",
                "shieldContent": "A12"
              },
              {
                "reference": "european-road",
                "shieldContent": "E30"
              },
              {
                "reference": "european-road",
                "shieldContent": "E25"
              }
            ]
          },
          {
            "routeOffsetInMeters": 39428,
            "travelTimeInSeconds": 1724,
            "point": {
              "latitude": 52.06948,
              "longitude": 5.05324
            },
            "pointIndex": 584,
            "instructionType": "DIRECTION_INFO",
            "roadNumbers": [
              "A12",
              "E25",
              "E30"
            ],
            "phoneticRoadNumbers": [
              "a.ˈtʋalf",
              "ˌe.vɛ⁀i.vən.ˈtʋɪn.təx",
              "ˌe.ˈdɛr.təx"
            ],
            "phoneticRoadNumberLanguageCodes": [
              "nl-NL",
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
            "message": "Follow <roadNumber>A12</roadNumber>/<roadNumber>E25</roadNumber>/<roadNumber>E30</roadNumber> toward <signpostText>Den Haag</signpostText>",
            "mainAnnouncement": {
              "point": {
                "latitude": 52.0692489,
                "longitude": 5.0546417
              },
              "pointIndex": 580,
              "maneuver": "FOLLOW",
              "distanceInMeters": 100
            },
            "roadShieldReferences": [
              {
                "reference": "nld-highway",
                "shieldContent": "A12"
              },
              {
                "reference": "european-road",
                "shieldContent": "E25"
              },
              {
                "reference": "european-road",
                "shieldContent": "E30"
              }
            ],
            "signpostRoadShieldReferences": [
              {
                "reference": "european-road",
                "shieldContent": "E25"
              },
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
            "routeOffsetInMeters": 68365,
            "travelTimeInSeconds": 2581,
            "point": {
              "latitude": 52.02522,
              "longitude": 4.66566
            },
            "pointIndex": 860,
            "instructionType": "TURN",
            "roadNumbers": [
              "A12",
              "E30"
            ],
            "phoneticRoadNumbers": [
              "a.ˈtʋalf",
              "ˌe.ˈdɛr.təx"
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
            "message": "Keep left at <roadNumber>A12</roadNumber>/<roadNumber>E30</roadNumber> toward <signpostText>Den Haag</signpostText>",
            "earlyWarningAnnouncement": {
              "point": {
                "latitude": 52.0337849,
                "longitude": 4.6911095
              },
              "pointIndex": 830,
              "maneuver": "AHEAD_KEEP_LEFT",
              "distanceInMeters": 2000
            },
            "mainAnnouncement": {
              "point": {
                "latitude": 52.0280594,
                "longitude": 4.6763606
              },
              "pointIndex": 848,
              "maneuver": "KEEP_LEFT",
              "distanceInMeters": 800
            },
            "confirmationAnnouncement": {
              "point": {
                "latitude": 52.0266551,
                "longitude": 4.6709953
              },
              "pointIndex": 848,
              "maneuver": "KEEP_LEFT",
              "distanceInMeters": 400
            },
            "roadShieldReferences": [
              {
                "reference": "nld-highway",
                "shieldContent": "A12"
              },
              {
                "reference": "european-road",
                "shieldContent": "E30"
              }
            ],
            "signpostRoadShieldReferences": [
              {
                "reference": "nld-highway",
                "shieldContent": "A12"
              },
              {
                "reference": "european-road",
                "shieldContent": "E30"
              }
            ]
          },
          {
            "routeOffsetInMeters": 68945,
            "travelTimeInSeconds": 2600,
            "point": {
              "latitude": 52.02317,
              "longitude": 4.65791
            },
            "pointIndex": 872,
            "instructionType": "DIRECTION_INFO",
            "roadNumbers": [
              "A12",
              "E30"
            ],
            "phoneticRoadNumbers": [
              "a.ˈtʋalf",
              "ˌe.ˈdɛr.təx"
            ],
            "phoneticRoadNumberLanguageCodes": [
              "nl-NL",
              "nl-NL"
            ],
            "countryCode": "NLD",
            "signpostText": "Bleiswijk",
            "phoneticSignpostText": "ˈblɛ⁀is.ˌʋɛ⁀ik",
            "phoneticSignpostTextLanguageCode": "nl-NL",
            "possibleCombineWithNext": false,
            "drivingSide": "RIGHT",
            "maneuver": "FOLLOW",
            "message": "Follow <roadNumber>A12</roadNumber>/<roadNumber>E30</roadNumber> toward <signpostText>Bleiswijk</signpostText>",
            "mainAnnouncement": {
              "point": {
                "latitude": 52.0235263,
                "longitude": 4.6592468
              },
              "pointIndex": 871,
              "maneuver": "FOLLOW",
              "distanceInMeters": 100
            },
            "roadShieldReferences": [
              {
                "reference": "nld-highway",
                "shieldContent": "A12"
              },
              {
                "reference": "european-road",
                "shieldContent": "E30"
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
            "routeOffsetInMeters": 88262,
            "travelTimeInSeconds": 3218,
            "point": {
              "latitude": 52.05767,
              "longitude": 4.38761
            },
            "pointIndex": 1092,
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
            "earlyWarningAnnouncement": {
              "point": {
                "latitude": 52.0525044,
                "longitude": 4.4153001
              },
              "pointIndex": 1061,
              "maneuver": "AHEAD_KEEP_LEFT",
              "distanceInMeters": 2000
            },
            "mainAnnouncement": {
              "point": {
                "latitude": 52.0547385,
                "longitude": 4.3982422
              },
              "pointIndex": 1075,
              "maneuver": "KEEP_LEFT",
              "distanceInMeters": 800
            },
            "confirmationAnnouncement": {
              "point": {
                "latitude": 52.0560291,
                "longitude": 4.3928024
              },
              "pointIndex": 1084,
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
                "reference": "nld-highway",
                "shieldContent": "A12"
              }
            ]
          },
          {
            "routeOffsetInMeters": 92620,
            "travelTimeInSeconds": 3406,
            "point": {
              "latitude": 52.07851,
              "longitude": 4.33472
            },
            "pointIndex": 1169,
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
              "pointIndex": 1132,
              "maneuver": "AHEAD_EXIT",
              "distanceInMeters": 2000
            },
            "mainAnnouncement": {
              "point": {
                "latitude": 52.0731667,
                "longitude": 4.3423712
              },
              "pointIndex": 1145,
              "maneuver": "TAKE_EXIT",
              "distanceInMeters": 800
            },
            "confirmationAnnouncement": {
              "point": {
                "latitude": 52.0760927,
                "longitude": 4.3374671
              },
              "pointIndex": 1157,
              "maneuver": "TAKE_EXIT",
              "distanceInMeters": 328
            }
          },
          {
            "routeOffsetInMeters": 92993,
            "travelTimeInSeconds": 3429,
            "point": {
              "latitude": 52.08105,
              "longitude": 4.3312
            },
            "pointIndex": 1179,
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
              "pointIndex": 1170,
              "maneuver": "STRAIGHT",
              "distanceInMeters": 300
            },
            "confirmationAnnouncement": {
              "point": {
                "latitude": 52.0804356,
                "longitude": 4.3322857
              },
              "pointIndex": 1175,
              "maneuver": "STRAIGHT",
              "distanceInMeters": 100
            }
          },
          {
            "routeOffsetInMeters": 93433,
            "travelTimeInSeconds": 3502,
            "point": {
              "latitude": 52.08398,
              "longitude": 4.32698
            },
            "pointIndex": 1195,
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
              "pointIndex": 1188,
              "maneuver": "TURN_LEFT",
              "distanceInMeters": 200
            },
            "confirmationAnnouncement": {
              "point": {
                "latitude": 52.0835358,
                "longitude": 4.3274801
              },
              "pointIndex": 1194,
              "maneuver": "TURN_LEFT",
              "distanceInMeters": 60
            }
          },
          {
            "routeOffsetInMeters": 93675,
            "travelTimeInSeconds": 3533,
            "point": {
              "latitude": 52.08289,
              "longitude": 4.32405
            },
            "pointIndex": 1205,
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
              "pointIndex": 1201,
              "maneuver": "KEEP_LEFT",
              "distanceInMeters": 100
            },
            "confirmationAnnouncement": {
              "point": {
                "latitude": 52.0829828,
                "longitude": 4.3242993
              },
              "pointIndex": 1204,
              "maneuver": "KEEP_LEFT",
              "distanceInMeters": 20
            }
          },
          {
            "routeOffsetInMeters": 94150,
            "travelTimeInSeconds": 3581,
            "point": {
              "latitude": 52.0835,
              "longitude": 4.3184
            },
            "pointIndex": 1224,
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
              "pointIndex": 1207,
              "maneuver": "AHEAD_LEFT_TURN",
              "distanceInMeters": 425
            },
            "mainAnnouncement": {
              "point": {
                "latitude": 52.0820378,
                "longitude": 4.3219294
              },
              "pointIndex": 1212,
              "maneuver": "TURN_LEFT",
              "distanceInMeters": 300
            },
            "confirmationAnnouncement": {
              "point": {
                "latitude": 52.0831627,
                "longitude": 4.3192635
              },
              "pointIndex": 1222,
              "maneuver": "TURN_LEFT",
              "distanceInMeters": 70
            }
          },
          {
            "routeOffsetInMeters": 94846,
            "travelTimeInSeconds": 3663,
            "point": {
              "latitude": 52.08019,
              "longitude": 4.31014
            },
            "pointIndex": 1256,
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
              "pointIndex": 1248,
              "maneuver": "ARRIVE",
              "distanceInMeters": 200
            },
            "confirmationAnnouncement": {
              "point": {
                "latitude": 52.0803815,
                "longitude": 4.3104423
              },
              "pointIndex": 1252,
              "maneuver": "ARRIVE",
              "distanceInMeters": 30
            }
          }
        ],
        "instructionGroups": [
          {
            "firstInstructionIndex": 0,
            "lastInstructionIndex": 8,
            "groupMessage": "Leave from <street>Nassaukade</street>. Take the <roadNumber>s100</roadNumber> then take the <street>Amsteldijk</street>, <street>Nieuwe Utrechtseweg</street>/<roadNumber>s110</roadNumber> toward <signpostText>Utrecht</signpostText>. Follow <street>Nieuwe Utrechtseweg</street>/<roadNumber>A2</roadNumber>/<roadNumber>E35</roadNumber> toward <signpostText>Utrecht</signpostText>, <signpostText>Holendrecht</signpostText>, <signpostText>RING-Zuid</signpostText>, <signpostText>Den Haag</signpostText>",
            "groupLengthInMeters": 37489
          },
          {
            "firstInstructionIndex": 9,
            "lastInstructionIndex": 15,
            "groupMessage": "Take the <roadNumber>A12</roadNumber>/<roadNumber>E30</roadNumber>/<roadNumber>E25</roadNumber> toward <signpostText>Den Haag</signpostText>, <signpostText>Bleiswijk</signpostText>",
            "groupLengthInMeters": 55131
          },
          {
            "firstInstructionIndex": 16,
            "lastInstructionIndex": 21,
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
          "pointIndex": 11,
          "travelTimeInSeconds": 21,
          "distanceInMeters": 156
        },
        {
          "pointIndex": 21,
          "travelTimeInSeconds": 49,
          "distanceInMeters": 295
        },
        {
          "pointIndex": 25,
          "travelTimeInSeconds": 70,
          "distanceInMeters": 366
        },
        {
          "pointIndex": 39,
          "travelTimeInSeconds": 115,
          "distanceInMeters": 551
        },
        {
          "pointIndex": 52,
          "travelTimeInSeconds": 152,
          "distanceInMeters": 798
        },
        {
          "pointIndex": 61,
          "travelTimeInSeconds": 184,
          "distanceInMeters": 963
        },
        {
          "pointIndex": 73,
          "travelTimeInSeconds": 213,
          "distanceInMeters": 1247
        },
        {
          "pointIndex": 76,
          "travelTimeInSeconds": 231,
          "distanceInMeters": 1309
        },
        {
          "pointIndex": 85,
          "travelTimeInSeconds": 280,
          "distanceInMeters": 1815
        },
        {
          "pointIndex": 88,
          "travelTimeInSeconds": 301,
          "distanceInMeters": 1884
        },
        {
          "pointIndex": 97,
          "travelTimeInSeconds": 336,
          "distanceInMeters": 2181
        },
        {
          "pointIndex": 99,
          "travelTimeInSeconds": 358,
          "distanceInMeters": 2252
        },
        {
          "pointIndex": 107,
          "travelTimeInSeconds": 385,
          "distanceInMeters": 2486
        },
        {
          "pointIndex": 111,
          "travelTimeInSeconds": 400,
          "distanceInMeters": 2569
        },
        {
          "pointIndex": 143,
          "travelTimeInSeconds": 478,
          "distanceInMeters": 3535
        },
        {
          "pointIndex": 148,
          "travelTimeInSeconds": 508,
          "distanceInMeters": 3613
        },
        {
          "pointIndex": 175,
          "travelTimeInSeconds": 578,
          "distanceInMeters": 4532
        },
        {
          "pointIndex": 176,
          "travelTimeInSeconds": 590,
          "distanceInMeters": 4544
        },
        {
          "pointIndex": 178,
          "travelTimeInSeconds": 599,
          "distanceInMeters": 4588
        },
        {
          "pointIndex": 179,
          "travelTimeInSeconds": 609,
          "distanceInMeters": 4600
        },
        {
          "pointIndex": 199,
          "travelTimeInSeconds": 649,
          "distanceInMeters": 5379
        },
        {
          "pointIndex": 278,
          "travelTimeInSeconds": 891,
          "distanceInMeters": 12522
        },
        {
          "pointIndex": 461,
          "travelTimeInSeconds": 1501,
          "distanceInMeters": 32638
        },
        {
          "pointIndex": 617,
          "travelTimeInSeconds": 1847,
          "distanceInMeters": 43338
        },
        {
          "pointIndex": 812,
          "travelTimeInSeconds": 2463,
          "distanceInMeters": 64448
        },
        {
          "pointIndex": 897,
          "travelTimeInSeconds": 2666,
          "distanceInMeters": 70983
        },
        {
          "pointIndex": 1106,
          "travelTimeInSeconds": 3258,
          "distanceInMeters": 89388
        },
        {
          "pointIndex": 1178,
          "travelTimeInSeconds": 3425,
          "distanceInMeters": 92962
        },
        {
          "pointIndex": 1179,
          "travelTimeInSeconds": 3429,
          "distanceInMeters": 92993
        },
        {
          "pointIndex": 1181,
          "travelTimeInSeconds": 3447,
          "distanceInMeters": 93045
        },
        {
          "pointIndex": 1193,
          "travelTimeInSeconds": 3473,
          "distanceInMeters": 93338
        },
        {
          "pointIndex": 1196,
          "travelTimeInSeconds": 3503,
          "distanceInMeters": 93441
        },
        {
          "pointIndex": 1198,
          "travelTimeInSeconds": 3515,
          "distanceInMeters": 93466
        },
        {
          "pointIndex": 1222,
          "travelTimeInSeconds": 3559,
          "distanceInMeters": 94036
        },
        {
          "pointIndex": 1230,
          "travelTimeInSeconds": 3591,
          "distanceInMeters": 94240
        },
        {
          "pointIndex": 1256,
          "travelTimeInSeconds": 3663,
          "distanceInMeters": 94846
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
