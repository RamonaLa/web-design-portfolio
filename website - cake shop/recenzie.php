<?php
   function corectez($sir) {
   $sir = trim($sir);
   $sir = stripslashes($sir);
   $sir = htmlspecialchars($sir);
   return $sir;
   }

   // preiau valorile din campurile formularului (nume, prenume, email, recenzie si din sistem data la care s-a completat formularul)
   $nume = corectez($_POST["nume"]);
   $prenume = corectez($_POST["prenume"]);
   $email = corectez($_POST["email"]);
   $recenzie = corectez($_POST["mesaj"]);
   $dataup = date("Y-m-d"); // formatul “cerut” de mysql este an-luna-zi
   
   include("conn.php");
 
  $cda = "INSERT INTO recenzii (nume, prenume, email, recenzie, data_upload)VALUES (?, ?, ?, ?, ?)";
  $stmt = mysqli_prepare($cnx, $cda);
   mysqli_stmt_bind_param($stmt, 'sssss', $nume, $prenume, $email, $recenzie, $dataup);
   mysqli_stmt_execute($stmt) or die (mysqli_error($cnx));
   
   mysqli_stmt_close($stmt);
   mysqli_close($cnx);
   $raspuns = [];
   $raspuns['nume'] = $nume;
   $raspuns['prenume'] = $prenume;
   echo json_encode($raspuns);    
?>