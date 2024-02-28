
<?php
include "setup/fuction_ket_noi_csdl.php";
		
		
		  
$trai=safeSQL($_POST["post8"]);
include "setup/check_token_and_post.php";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
	if (!$conn) {
	die("Connection failed: " . mysqli_connect_error());
	}



 // sql lấy dữ liệu
	$sql_4_1 = "
	SELECT `so tai`,WEEK(sheet1.`ngay phoi`,2) , DATE_FORMAT(sheet1.`ngay phoi`, '%d/%m/%Y') FROM `sheet1` WHERE  `ngay ban loai chet` IS NULL AND `trai` = '".$trai."' and sheet1.`ngay de` is not null and sheet1.`ngay cai` IS NULL
		 ";
$result_4_1 = mysqli_query($conn, $sql_4_1);
$cout_4_1 = mysqli_num_rows($result_4_1);
$arraymysql_4_1 = [];
$arraymysql_4_1[0] = ["Số tai",

"Tuần phối",
"Ngày đẻ"



];
for ($x = 1; $x < $cout_4_1; $x++) {
    $arraymysql_4_1[$x] = mysqli_fetch_row($result_4_1) ;
  } 
 
 
  echo str_ireplace("|_|","'",json_encode($arraymysql_4_1));



?>	
