<?php

include "setup/fuction_ket_noi_csdl.php";




$lo =safeSQL($_POST["post5"]);

$ngay = safeSQL($_POST["post4"]);

$trai=safeSQL($_POST["post8"]);

$timestamp = strtotime($ngay);



include "setup/check_token_and_post.php";

header("Content-type: text/html; charset=utf-8"); // thêm tiếng việt mới lấy được câu lệnh sql đã chạy
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

mysqli_set_charset($conn, 'UTF8'); // thêm tiếng việt mới lấy được câu lệnh sql đã chạy
// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}


// Nếu người khác đóng chuồng rồi thì báo lỗi ngược lại tính tồn heo của lô này
$sql_3 = "SELECT

SUM(data_thit.so_luong_nhap)+SUM(data_thit.chuyen_den)-SUM(data_thit.chet)-SUM(data_thit.loai)-SUM(data_thit.ban_giong)-SUM(data_thit.ban)-SUM(data_thit.chuyen_di) AS ton_dau 



FROM
	data_thit
	WHERE
	data_thit.cong_ty='".$trai."'
	AND
data_thit.ngay_dong =0
AND
data_thit.ma_lo_nhap  = '".$lo."'";
$result_3 = mysqli_query($conn, $sql_3);



$ton_dau = mysqli_fetch_row($result_3)[0] ;
if(   $ton_dau   == NULL          )
{
 echo "Chuồng này đã đóng rồi, bạn hãy kiểm tra lại";
exit() ;
}	

// tồn heo của lô này mà bé hơn 0 chết thì báo lỗi
if(  $ton_dau  >0        )
{
 echo "Không thể đóng chuồng được vì số lượng heo trong chuồng đang là ".$ton_dau." . Muốn đóng chuồng bạn phải xuất hết heo đi hoặc mở 1 lô heo mới rồi chuyển hết số heo này sang lô heo đó";
exit() ;
}	

$sql_2 =  "UPDATE data_thit
SET data_thit.ngay_dong = '".$ngay."', data_thit.thang_dong = '".date("m", $timestamp)."'
WHERE 
data_thit.cong_ty ='".$trai."'
AND
data_thit.ma_lo_nhap = '".$lo."'";

$result_2 = mysqli_query($conn, $sql_2);

echo "ok" ;

?>