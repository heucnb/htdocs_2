
<?php
		

$trai=$_POST["post8"];

// kết nối csdl	
include "setup/fuction_ket_noi_csdl.php";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
	if (!$conn) {
	die("Connection failed: " . mysqli_connect_error());
	}



 // sql lấy dữ liệu
	$sql_4_1 = "
SELECT `so tai`  FROM `sheet1` WHERE `lan phoi` = 1 AND `ngay ban loai chet` IS NULL AND `trai` = '".$trai."'
			 ";
$result_4_1 = mysqli_query($conn, $sql_4_1);
$cout_4_1 = mysqli_num_rows($result_4_1);
$arraymysql_4_1 = [];
for ($x = 0; $x < $cout_4_1; $x++) {
    $arraymysql_4_1[$x] = mysqli_fetch_row($result_4_1) ;
  } 
  
 // sql lấy dữ liệu sheet2 : hậu bị
	$sql_4_3 = "
SELECT `so_tai`  FROM `sheet2` WHERE `ngay_chet(loai)` IS NULL AND `phan_loai_heo` LIKE 'HB' AND `trai` = '".$trai."'
			 ";
$result_4_3 = mysqli_query($conn, $sql_4_3);
$cout_4_3 = mysqli_num_rows($result_4_3);
$arraymysql_4_3 = [];
for ($x = 0; $x < $cout_4_3; $x++) {
    $arraymysql_4_3[$x] = mysqli_fetch_row($result_4_3) ;
  }  
  

   $arraymysql_sum = array_merge( $arraymysql_4_1, $arraymysql_4_3 );
 
 
// sql lấy dữ liệu sheet2 : đực
	$sql_4_2 = "
SELECT `so_tai`  FROM `sheet2` WHERE `ngay_chet(loai)` IS NULL AND `phan_loai_heo` LIKE 'D' AND `trai` = '".$trai."'
			 ";
$result_4_2 = mysqli_query($conn, $sql_4_2);
$cout_4_2 = mysqli_num_rows($result_4_2);
$arraymysql_4_2 = [];
for ($x = 0; $x < $cout_4_2; $x++) {
    $arraymysql_4_2[$x] = mysqli_fetch_row($result_4_2) ;
  } 
   
  echo json_encode( [$arraymysql_sum , $arraymysql_4_2 ]);
 
?>	

