
<?php
include "setup/fuction_ket_noi_csdl.php";

$su_kien=safeSQL($_POST["post4"]);



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


//----------------------------------------------------------------------------------------------------------------------

if ( $su_kien == "show_ds" ) {

  $ngay = safeSQL($_POST["post2"]);
  $ngay_kt = safeSQL($_POST["post3"]);

$sql_2 =  "SELECT 
'Xoá',

DATE_FORMAT(xuat_heo_con.ngay, '%d/%m/%Y')  ,

xuat_heo_con.id,
xuat_heo_con.chuong,
xuat_heo_con.so_luong,
xuat_heo_con.trong_luong,
xuat_heo_con.tong_tien,
xuat_heo_con.xuat_den,
xuat_heo_con.ma_chung_tu

FROM `xuat_heo_con` WHERE 
xuat_heo_con.trai = '".$trai."'
 and
 xuat_heo_con.ngay >= '".$ngay."' And
 xuat_heo_con.ngay <= '".$ngay_kt."'


 ORDER BY xuat_heo_con.ngay  ASC
";



$result_2 = mysqli_query($conn, $sql_2);

$cout = mysqli_num_rows($result_2);	
$arraymysql = [];

$arraymysql[0] = [
  "Xoá",
  "Ngày",
  "ID",
"Chuồng nuôi",
"Số lượng",
"Trọng lượng",
"Tổng số tiền",
"Nơi chuyển đến",
"Mã chứng từ"


];


for ($x = 1; $x < $cout + 1; $x++) {
    $arraymysql[$x] = mysqli_fetch_row($result_2) ;
  }





    echo str_ireplace("|_|","'",json_encode($arraymysql));

}


if ( $su_kien == "xoa" ) {

  $id = safeSQL($_POST["post1"]);

// b2: xoá dòng
$sql_1 = "DELETE FROM `xuat_heo_con` WHERE xuat_heo_con.`id` = '".$id."' and xuat_heo_con.`trai` =  '".$trai."'      ";
$result_1 = mysqli_query($conn, $sql_1); 
          
echo "ok" ;

}



?>