
<?php
include "setup/fuction_ket_noi_csdl.php";


$ngay = safeSQL($_POST["post2"]);
$trai=safeSQL($_POST["post8"]);

$ma_chung_tu=safeSQL($_POST["post1"]);
$so_luong=safeSQL($_POST["post3"]);
$trong_luong=safeSQL($_POST["post4"]);

$tong_so_tien=safeSQL($_POST["post5"]);
$chuong_nuoi=safeSQL($_POST["post7"]);
$noi_chuyen_den=safeSQL($_POST["post6"]);

$year = date("Y",strtotime($ngay));





include "setup/check_token_and_post.php";

header("Content-type: text/html; charset=utf-8"); // thêm tiếng việt mới lấy được câu lệnh sql đã chạy
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

mysqli_set_charset($conn, 'UTF8'); // thêm tiếng việt mới lấy được câu lệnh sql đã chạy
// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}


  $sql_2 =  "INSERT INTO
  xuat_heo_con
  (xuat_heo_con.trai, 
  xuat_heo_con.ngay, 
  xuat_heo_con.year,
  xuat_heo_con.chuong, 
  xuat_heo_con.so_luong,
  xuat_heo_con.trong_luong,
  xuat_heo_con.tong_tien,
  xuat_heo_con.ma_chung_tu,
  xuat_heo_con.xuat_den
  
  )VALUES (
    '".$trai."', 
    '".$ngay."', 
    '".$year."', 
    '".$chuong_nuoi."', 
     '".$so_luong."', 
     '".$trong_luong."', 
    '".$tong_so_tien."', 
    '".$ma_chung_tu."', 
     '".$noi_chuyen_den."'
  
    )";



$result_2 = mysqli_query($conn, $sql_2);

 echo "ok" ;




?>