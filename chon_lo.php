
<?php
include "setup/fuction_ket_noi_csdl.php";

$su_kien=safeSQL($_POST["post9"]);

$khu =safeSQL($_POST["post2"]);
$chuong =safeSQL($_POST["post3"]);

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

if ($su_kien == "Tìm kiếm") {
  // lấy danh sách tất cả các lô trong 5 năm trở lại thôi
    $sql_2 =  "SELECT data_thit.ma_lo_nhap FROM `data_thit` WHERE 
    data_thit.cong_ty = '".$trai."'
     and
      data_thit.trai ='".$khu."'
       and 
       data_thit.chuong = '".$chuong."'
       and
       data_thit.nam >= (with raw_data as ( SELECT (MAX(data_thit.nam)-5 ) as nam FROM `data_thit` WHERE data_thit.cong_ty = '".$trai."' and data_thit.trai ='".$khu."' and data_thit.chuong = '".$chuong."' ) select raw_data.nam from raw_data )
   
    GROUP BY data_thit.ma_lo_nhap
    

        ORDER BY 


        data_thit.ngay DESC


    ";
} else {
    $sql_2 =  "SELECT data_thit.ma_lo_nhap FROM `data_thit` WHERE 
    data_thit.cong_ty = '".$trai."'
     and
      data_thit.trai ='".$khu."'
       and 
       data_thit.chuong = '".$chuong."'
       and 
       data_thit.ngay_dong = 0
    GROUP BY data_thit.ma_lo_nhap";
}



$result_2 = mysqli_query($conn, $sql_2);

$cout = mysqli_num_rows($result_2);	
$arraymysql = [];

for ($x = 0; $x < $cout ; $x++) {
    $arraymysql[$x] = mysqli_fetch_row($result_2) ;
  }



    echo str_ireplace("|_|","'",json_encode($arraymysql));


?>