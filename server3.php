<?php
include 'data.php';

$results = [];

$results['line']['labels'] = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];

$results['line']['data'] = $dataMilestone3['fatturato']['data'];

$results['pie']['labels'] = [];
$results['pie']['data'] = [];

$pieData = $dataMilestone3['fatturato_by_agent']['data'];

foreach ($pieData as $agente => $fatturatoAgente) {
  $results['pie']['labels'][] = $agente;
  $results['pie']['data'][] = $fatturatoAgente;
}

$multiLineData = $dataMilestone3['team_efficiency']['data'];

//$results['multiline']['labels'] = [];
$results['multiline']['data'] = [];

foreach ($multiLineData as $team => $value) {
  $results['multiline']['labels'][] = $team;
  $results['multiline']['data'][] = $value;
}



//var_dump($results['multiline']['data'][0]);

$json = json_encode($results);

echo $json;


?>
