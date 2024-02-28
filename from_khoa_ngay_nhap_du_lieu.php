

<?php

include "setup/fuction_ket_noi_csdl.php";

 
$trai=safeSQL($_POST["post8"]);

include "setup/check_token_and_post.php";

header("Content-type: text/html; charset=utf-8"); // thêm tiếng việt mới lấy được câu lệnh sql đã chạy
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

mysqli_set_charset($conn, 'UTF8'); // thêm tiếng việt mới lấy được câu lệnh sql đã chạy
// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// láy dữ liệu lên
$sql = "select 'Cập nhật',`khoa_ngay_sua_du_lieu` from login where `trai`='".$trai."' limit 1 ";
$result = mysqli_query($conn, $sql);
$cout = mysqli_num_rows($result);	
$arraymysql = [];
 $arraymysql[0] =[
	"Cập nhật",
"Số ngày khóa"
];
for ($x = 1; $x < $cout + 1; $x++) {
    $arraymysql[$x] = mysqli_fetch_row($result) ;
  }
 
  
  echo str_ireplace("|_|","'",json_encode( $arraymysql ));


?>

