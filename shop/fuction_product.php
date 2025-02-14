<?php
include "setup/fuction_ket_noi_csdl.php";



// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
	if (!$conn) {
	die("Connection failed: " . mysqli_connect_error());
	}
	
	
$sql_2 = "select * from products";
$result_2 = mysqli_query($conn, $sql_2);
$cout_2 = mysqli_num_rows($result_2);
$arraymysql_1 = [];
for ($x = 0; $x < $cout_2; $x++) {
    $arraymysql_1[$x] = mysqli_fetch_row($result_2) ;
  }
  

    echo str_ireplace("|_|","'",json_encode( $arraymysql_1 ));




?>	