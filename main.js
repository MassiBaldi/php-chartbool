var months = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];

$(document).ready(function() {
  $.ajax({
    url: 'http://localhost/php-chart/server.php',
    method: 'GET',
    success: function(data) {
      var results = JSON.parse(data);
      //console.log(results);
      printLineChart($('.lineMile1'), months, 'Fatturato Milestone 1', results);

    },
    error: function() {
      alert('errore');
    }
  })

  $.ajax({
    url: 'http://localhost/php-chart/server2.php',
    method: 'GET',
    success: function(data) {
      var results = JSON.parse(data);
      //console.log(results);

      printLineChart($('.lineMile2'), results.line.labels, 'Fatturato Milestone 2', results.line.data);

      printPieChart($('.pieMile2'),results.pie.labels, results.pie.data)


    },
    error: function() {
      alert('errore');
    }
  })


});

function printLineChart(selettore, labels, title, results){
  var ctx = selettore;

  var lineChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: months,
      datasets: [{
        label: title,
        backgroundColor: 'green',
        borderColor: 'red',
        data: results,
      }]
    },
  });
}

function printPieChart(selettore, labels, results){
  var ctx = selettore;

  var pieChart = new Chart(ctx, {
    type: 'pie',
    data: {
      datasets: [{
          data: results,
          backgroundColor: ['yellow', 'yellow', 'yellow', 'yellow',],
          borderColor: ['red', 'red', 'red', 'red',]
      }],
      labels: labels
    }
  });

}
