<?php
include "setup/fuction_ket_noi_csdl.php";
$id=safeSQL($_POST["post1"]);
$lo=safeSQL($_POST["post2"]);
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

// Lưu lại dữ liệu detele
//b1: lưu lại tháng đóng và ngày đóng
$sql_10 = "SELECT
data_thit.thang_dong,
data_thit.ngay_dong
FROM
	data_thit
	WHERE
	data_thit.cong_ty='".$trai."'
	AND
data_thit.ma_lo_nhap  = '".$lo."'
GROUP BY
data_thit.ma_lo_nhap  
";

$result_10 = mysqli_query($conn, $sql_10);
$row = mysqli_fetch_row($result_10) ;

$thang_dong = $row[0] ;
$ngay_dong = $row[1] ;

// Detele dữ liệu
// b1: xoá ngày đóng chuồng và tháng đóng
$sql_2 =  "UPDATE data_thit
SET data_thit.ngay_dong = '0', data_thit.thang_dong = '0'
WHERE 
data_thit.cong_ty ='".$trai."'
AND
data_thit.ma_lo_nhap = '".$lo."'";

$result_2 = mysqli_query($conn, $sql_2);


//b2 lưu lại dòng id dữ liệu và xoá dòng bằng cách thay đổi mã công ty
$sql_11 =  "UPDATE data_thit
SET data_thit.cong_ty ='0'
WHERE 
data_thit.cong_ty ='".$trai."'
AND
data_thit.`id` = '".$id."'
";

$result_11 = mysqli_query($conn, $sql_11);



// tính tồn cuối dữ liệu sau khi detele

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
// nếu tồn cuối heo sau khi detele < 0 thì khôi phục lại dữ liệu và thông báo lỗi
if(   $ton_dau  <0         )
{
  // khôi phục lại dữ liệu  
  // b1: khôi phục lại dòng xoá

        $sql_13 =  "UPDATE data_thit
        SET data_thit.cong_ty ='".$trai."'
        WHERE 
        data_thit.cong_ty ='0'
        AND
        data_thit.`id` = '".$id."'
        ";

        $result_13 = mysqli_query($conn, $sql_13);
   // b2: khôi phục lại ngày đóng chuồng và tháng đóng chuồng   
        $sql_14 =  "UPDATE data_thit
        SET data_thit.ngay_dong = '".$ngay_dong."', data_thit.thang_dong = '".$thang_dong."'
        WHERE 
        data_thit.cong_ty ='".$trai."'
        AND
        data_thit.ma_lo_nhap = '".$lo."'";

        $result_14 = mysqli_query($conn, $sql_14);  

 // thông báo lỗi   
 echo "Không thể xoá dòng này được vì khi xoá tồn heo sẽ là ".$ton_dau.". Bạn phải xoá các dòng phía dưới trước";
exit() ;
}else
{

   // b2: xoá dòng
$sql_1 = "DELETE FROM `data_thit` WHERE data_thit.`id` = '".$id."' and data_thit.`cong_ty` = '0'        ";
$result_1 = mysqli_query($conn, $sql_1); 


echo "ok" ;
}	





?>