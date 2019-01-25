var months = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];

$(document).ready(function() {
  $.ajax({
    url: 'http://localhost/php-chart/data.php',
    method: 'GET',
    success: function(data) {
      var database = JSON.parse(data);
      //console.log(database);

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
    },
    error: function() {
      alert('errore');
    }
  })
});




// var months = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
//
// $(document).ready(function() {
//
//   var database = $('.line').data('database');
//
//   var ctx = $('.line');
//   var chart = new Chart(ctx, {
//     type: 'line',
//     data: {
//       labels: months,
//       datasets: [{
//         label: "Fatturato",
//         backgroundColor: 'green',
//         borderColor: 'red',
//         data: database,
//       }]
//     }
//   });
// });
