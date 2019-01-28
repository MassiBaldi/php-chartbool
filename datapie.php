<?php
  $graphs = [
    'fatturato' => [
        'type' => 'line',
        'data' => [1000,1322,1123,2301,3288,988,502,2300,5332,2300,1233,2322]
    ],
    'fatturato_by_agent' => [
      'type' => 'pie',
      'data' => [
        'Marco' => 9000,
        'Giuseppe' => 4000,
        'Mattia' => 3200,
        'Alberto' => 2300
      ]
    ]
  ];

  $lableNomi = [];
  //$dataVal = [];
  foreach ($graphs['fatturato_by_agent']['data'] as $key => $value) {

    $lableNomi[]=$key;
    //$dataVal[]=$value;

  }
  // var_dump($lableNomi);
  // var_dump($dataVal);

  $lableNomi = json_encode($lableNomi);
  echo $lableNomi;

  //$dataVal = json_encode($dataVal);
  //echo $dataVal;

?>
