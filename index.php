<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.min.js" charset="utf-8"></script>
    <link rel="stylesheet" href="style.css">
    <title>php-chartbool</title>
  </head>
  <body>

    <div class="container">
      <canvas class="line"></canvas>
    </div>

    <script>

      var months = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];

      <?php include 'data.php'; ?>;

      var databasePhp = "<?php echo json_encode($database); ?>";
      var database = JSON.parse(databasePhp);

      console.log(database);

      $(document).ready(function() {
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
    </script>

  </body>
</html>
