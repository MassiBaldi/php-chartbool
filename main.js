var months = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];

$(document).ready(function() {
  $.ajax({
    url: 'http://localhost/php-chart/data.php',
    method: 'GET',
    success: function(data) {
      var database = JSON.parse(data);
      console.log(database);
      printLine(database);

    },
    error: function() {
      alert('errore');
    }
  })

  $.ajax({
    url: 'http://localhost/php-chart/datapie.php',
    method: 'GET',
    success: function(data) {
      //console.log(data);
      // var dataVal = JSON.parse(data);
      // console.log(dataVal);
      var lableNomi = JSON.parse(data);
      console.log(lableNomi);

      var ctx = $('.pie');

      var chart = new Chart(ctx, {
        type: 'pie',
        data: {
          datasets: [{
            backgroundColor: 'yellow',
            borderColor: 'red',
            data: [20,30,40,15],
          }],
          labels: lableNomi
        },
      });
    },
    error: function() {
      alert('errore');
    }
  })
});

function printLine(database) {
  var ctx = $('.line');

  var chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: months,
      datasets: [{
        label: "Fatturato",
        backgroundColor: 'green',
        borderColor: 'red',
        data: database,
      }]
    },
  });
}
