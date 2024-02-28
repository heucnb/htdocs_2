
<?php
include "setup/fuction_ket_noi_csdl.php";


$so_ngay_khoa_du_lieu=safeSQL($_POST["post1"]);
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


// update dữ liệu
$sql_3 = "UPDATE login SET 
`khoa_ngay_sua_du_lieu` = '".$so_ngay_khoa_du_lieu."'

WHERE `trai`='".$trai."' 
";

$result = mysqli_query($conn, $sql_3);

echo 'ok' ;



?>
