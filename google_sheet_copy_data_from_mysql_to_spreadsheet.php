


<?php



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
SELECT   CONCAT(`trai`, '-',`so cat tai`),`ngay de`,`duc phoi`,`so tai` FROM `sheet1` 
WHERE
`loai lon` = 'ck' AND 
`ngay de` IS NOT NULL AND 
`so cat tai` IS NOT NULL  
ORDER BY `sheet1`.`ngay de` DESC
			 ";
$result_4_1 = mysqli_query($conn, $sql_4_1);
$cout_4_1 = mysqli_num_rows($result_4_1);
$arraymysql_4_1 = [];
for ($x = 0; $x < $cout_4_1; $x++) {
    $arraymysql_4_1[$x] = mysqli_fetch_row($result_4_1) ;
  } 
  
  	$sql_4_2 = "
SELECT `so_tai`,`ngay_sinh`,`trai`,`lo_nhap`   FROM `sheet2` 
WHERE `ngay_nhap` IS NOT NULL AND
`ngay_chet(loai)` IS NULL AND
`phan_loai_heo` = 'D'
			 ";
$result_4_2 = mysqli_query($conn, $sql_4_2);
$cout_4_2 = mysqli_num_rows($result_4_2);
$arraymysql_4_2 = [];
for ($x = 0; $x < $cout_4_2; $x++) {
    $arraymysql_4_2[$x] = mysqli_fetch_row($result_4_2) ;
  } 
  
  
$arraymysql_sum = array_merge( $arraymysql_4_1, $arraymysql_4_2);  
  
  
  
  
 echo json_encode($arraymysql_sum);
?>


