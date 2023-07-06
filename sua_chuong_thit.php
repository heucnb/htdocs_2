
<?php
include "setup/fuction_ket_noi_csdl.php";

		  
$data_chuong_new =safeSQL($_POST["post1"]);
$trai=safeSQL($_POST["post8"]);
include "setup/check_token_and_post.php";



// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
	if (!$conn) {
	die("Connection failed: " . mysqli_connect_error());
	}
	

// update dữ liệu vào mysql

$sql_3 = "UPDATE login SET 
login.chuong =  '".$data_chuong_new."'
 WHERE 
login.trai = '".$trai."'

;";


$result_3 = mysqli_query($conn, $sql_3);	

  echo 'ok';


?>	
