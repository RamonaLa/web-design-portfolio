 <?php
    $cnx = mysqli_connect("localhost","root","","cafenea");
      // Se testeaza conexiunea
    if (mysqli_connect_errno()) {
     die("Conectare la MySQL nereusita: " . mysqli_connect_error());
     };
    mysqli_set_charset($cnx,"utf8");
?>