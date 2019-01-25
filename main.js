var months = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];

$(document).ready(function() {

  var database = $('.line').data('database');

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
    }
  });
});
