<?php
include "setup/fuction_ket_noi_csdl.php";
$username_detele=safeSQL($_POST["post1"]);
$password_detele=safeSQL($_POST["post2"]);

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

$sql_1 = "DELETE FROM `login` WHERE login.username = '".$username_detele."' and login.`password` = '".$password_detele."'";
$result_1 = mysqli_query($conn, $sql_1);


echo "ok" ;

?>