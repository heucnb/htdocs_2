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
data_thit.ngay_dong,
COUNT(data_thit.ngay)
FROM
	data_thit
	WHERE
	data_thit.cong_ty='".$trai."'
  and
  data_thit.kho = ''
	AND
data_thit.ma_lo_nhap  = '".$lo."'

";

$result_10 = mysqli_query($conn, $sql_10);
$row = mysqli_fetch_row($result_10) ;

$thang_dong = $row[0] ;
$ngay_dong = $row[1] ;
$count_data = $row[2] ;
// Detele dữ liệu
// nếu tài khoản admin đăng nhập đồng thời xoá dòng này rồi thì hiện thông báo

$sql_15 =  "SELECT data_thit.id
FROM data_thit
WHERE 
data_thit.cong_ty ='".$trai."'
and
data_thit.kho = ''
AND
data_thit.`id` = '".$id."'
";

$result_15 = mysqli_query($conn, $sql_15);
$count_15 = mysqli_num_rows($result_15);

if( $count_15 === 0 ) {

  // thông báo lỗi   
 echo "Một tài khoản khác đã xoá dữ liệu này rồi, bạn tải lại trang web để cập nhật dữ liệu mới";
 exit() ;

}

//*** Nếu trước ngày xoá dữ liệu mà không tìm thấy số lượng heo nhập thì không cho xoá */

$sql_20 = "SELECT
IFNULL(SUM(data_thit.so_luong_nhap), 0)
FROM
	data_thit
	WHERE
	data_thit.cong_ty='".$trai."'
  and
  data_thit.kho = ''
	AND
data_thit.ma_lo_nhap  = '".$lo."'
AND
data_thit.ngay< (SELECT data_thit.ngay
FROM data_thit
WHERE 
data_thit.cong_ty ='".$trai."'
AND
data_thit.`id` = '".$id."')

";
$result_20 = mysqli_query($conn, $sql_20);



$check_so_luong_nhap = mysqli_fetch_row($result_20)[0] ;

if(   $check_so_luong_nhap  == 0 && $count_data >= 2  )
{
 // thông báo lỗi   
 echo "Không thể xoá dòng này được vì chưa có heo nhập mà đã phát sinh các sự kiện khác rồi . Bạn phải xoá các dòng phía dưới trước";
exit() ;
}





// b1: xoá ngày đóng chuồng và tháng đóng
$sql_2 =  "UPDATE data_thit
SET data_thit.ngay_dong = '0', data_thit.thang_dong = '0'
WHERE 
data_thit.cong_ty ='".$trai."'
AND
data_thit.ma_lo_nhap = '".$lo."'";

$result_2 = mysqli_query($conn, $sql_2);


//b2 lưu lại dòng id dữ liệu và 
//xoá dòng bằng cách thay đổi mã công ty
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
  and
  data_thit.kho = ''
	AND
data_thit.ngay_dong =0
AND
data_thit.ma_lo_nhap  = '".$lo."'";
$result_3 = mysqli_query($conn, $sql_3);



$ton_dau = mysqli_fetch_row($result_3)[0] ;



// xác định id chuyển chuồng (id_chuyen_đi) để xoá dữ liệu chuyển chuồng
$sql_15 =  "SELECT data_thit.`id_chuyen_di`
FROM
	data_thit
WHERE 
data_thit.`id` = '".$id."'
";

$result_15 = mysqli_query($conn, $sql_15);
$id_chuyen_chuong_xoa = mysqli_fetch_row($result_15)[0] ;


// kiểm tra xem chuồng chuyển heo kết nối đã đóng  chuồng chưa ?
if(   $id_chuyen_chuong_xoa  ==0   )
{
  $check_ngay_dong = "0000-00-00"  ;
}
else
{
  $sql_17 = "SELECT
  data_thit.ngay_dong
  
  FROM
    data_thit
    WHERE
  
    data_thit.`id_chuyen_di`='".$id_chuyen_chuong_xoa."'
    AND
  
  data_thit.ma_lo_nhap   <> '".$lo."'";
  $result_17 = mysqli_query($conn, $sql_17);
 
  $check_ngay_dong = mysqli_fetch_row($result_17)[0] ;
 
}



// nếu tồn cuối heo sau khi detele < 0 thì khôi phục lại dữ liệu và thông báo lỗi
if(   $ton_dau  <0   )
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
 echo "Không thể xoá dòng này được vì khi xoá tồn heo sẽ là ".$ton_dau.". Bạn phải xoá các dòng phía dưới trước hoặc bạn có thể nhập thêm heo vào ngày này trước sau đó xoá dòng này sau ";
exit() ;
}


if ( $check_ngay_dong   != "0000-00-00"  ) {

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

  echo "Chuồng có heo chuyển kết nối với chuồng này đã đóng rồi, bạn hãy kiểm tra lại";
 exit() ;
}


//--------------------------------------------------------------------------------------------------------------------------------------
 // b2: xoá dòng
 $sql_1 = "DELETE FROM `data_thit` WHERE data_thit.`id` = '".$id."' and data_thit.`cong_ty` = '0'        ";
 $result_1 = mysqli_query($conn, $sql_1); 
               //--- xoá chuyển chuồng
               if(   $id_chuyen_chuong_xoa  >0   )
                 {
                   $sql_16 = "DELETE FROM `data_thit` WHERE data_thit.`id_chuyen_di` = '".$id_chuyen_chuong_xoa."'    ";
                   $result_16 = mysqli_query($conn, $sql_16); 
                 }
 
 echo "ok" ;


?>