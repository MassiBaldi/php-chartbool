<?php

  include 'data.php';

  $results = [];

  $results['line']['labels'] = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];

  $results['line']['data'] = $dataMilestone2['fatturato']['data'];

  $results['pie']['labels'] = [];
  $results['pie']['data'] = [];

  $pieData = $dataMilestone2['fatturato_by_agent']['data'];

  foreach ($pieData as $agente => $fatturatoAgente) {
    $results['pie']['labels'][] = $agente;
    $results['pie']['data'][] = $fatturatoAgente;
  }

  $json = json_encode($results);

  echo $json;


?>
