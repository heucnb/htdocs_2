
<?php
include "setup/fuction_ket_noi_csdl.php";


$array_old =json_decode(safeSQL($_POST["post1"]));
$array_new =json_decode(safeSQL($_POST["post2"]));
$username_post = $array_old[0];
$password_post= $array_old[1];
$username_post_new = $array_new[0];
$password_post_new= $array_new[1];
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
// kiểm tra username và password đã có chưa 
$sql_1 = "UPDATE login SET username='".$username_post_new."' , password='".$password_post_new."'  where username='".$username_post."'and password='".$password_post."' and `trai`='".$trai."' ";
$result_1 = mysqli_query($conn, $sql_1);

$sql_2 = "UPDATE login SET `trai_day_du` ='".$array_new[2]."'  where `trai`='".$trai."' ";
$result_2 = mysqli_query($conn, $sql_2);
echo "ok" ;

?>