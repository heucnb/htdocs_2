
<?php
include "setup/fuction_ket_noi_csdl.php";

$su_kien=safeSQL($_POST["post0"]);

// $khu =safeSQL($_POST["post2"]);
// $chuong =safeSQL($_POST["post3"]);
// $lo =safeSQL($_POST["post5"]);
$ngay = safeSQL($_POST["post1"]);
$ngay_kt = safeSQL($_POST["post2"]);
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

if ( $su_kien == "kiểm kê nhập cám" ) {

  $kho="Cám";

$sql_2 =  "SELECT 
'Xoá',
DATE_FORMAT(data_thit.ngay, '%d/%m/%Y')  ,

data_thit.id,
data_thit.ten_sp_kho,
data_thit.ma_chung_tu_nhap_kho,
data_thit.so_luong_nhap_kho,
data_thit.don_vi_tinh,
data_thit.tien_nhap_kho,
data_thit.nguon_nhap_kho,
data_thit.han_su_dung_kho

FROM `data_thit` WHERE 
data_thit.cong_ty = '".$trai."'
 and
 data_thit.so_luong_nhap_kho > 0
 and
 data_thit.kho = '".$kho."'
 and
 data_thit.ngay >= '".$ngay."' And
 data_thit.ngay < '".$ngay_kt."'


 ORDER BY data_thit.ngay  ASC
";



$result_2 = mysqli_query($conn, $sql_2);

$cout = mysqli_num_rows($result_2);	
$arraymysql = [];

$arraymysql[0] = [
  "Xoá",
  "Ngày",
  "ID",
"Tên sản phẩm",
"Mã chứng từ",
"Số lượng",
"Đơn vị tính",
"Số tiền",
"Nguồn nhập",
"Hạn sử dụng"


];


for ($x = 1; $x < $cout + 1; $x++) {
    $arraymysql[$x] = mysqli_fetch_row($result_2) ;
  }





    echo str_ireplace("|_|","'",json_encode($arraymysql));

}


if ( $su_kien == "kiểm kê xuất cám" ) {

  $kho="Cám";

$sql_2 =  "SELECT 
'Xoá',
DATE_FORMAT(data_thit.ngay, '%d/%m/%Y')  ,
data_thit.id,

  data_thit.trai, 
  data_thit.chuong,
  data_thit.ma_lo_nhap,
data_thit.ten_sp_kho,

data_thit.so_luong_xuat_kho,
data_thit.don_vi_tinh,
data_thit.tien_xuat_kho

FROM `data_thit` WHERE 
data_thit.cong_ty = '".$trai."'
 and
 data_thit.so_luong_xuat_kho > 0
 and
 data_thit.kho = '".$kho."'
 and
 data_thit.ngay >= '".$ngay."' And
 data_thit.ngay <= '".$ngay_kt."'


 ORDER BY data_thit.ngay  ASC
";



$result_2 = mysqli_query($conn, $sql_2);

$cout = mysqli_num_rows($result_2);	
$arraymysql = [];

$arraymysql[0] = [
  "Xoá",
  "Ngày",
  "ID",
  "Khu",
  "Chuồng",
  "Lô",

"Tên sản phẩm",

"Số lượng",
"Đơn vị tính",
"Số tiền"


];


for ($x = 1; $x < $cout + 1; $x++) {
    $arraymysql[$x] = mysqli_fetch_row($result_2) ;
  }





    echo str_ireplace("|_|","'",json_encode($arraymysql));

}



?>