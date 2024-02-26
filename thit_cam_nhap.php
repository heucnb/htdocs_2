
<?php
include "setup/fuction_ket_noi_csdl.php";


$su_kien = safeSQL($_POST["post0"]);

$ngay = safeSQL($_POST["post1"]);

$ten_sp = safeSQL($_POST["post2"]);

$trai=safeSQL($_POST["post8"]);


$so_luong=safeSQL($_POST["post3"]);

$tong_so_tien=safeSQL($_POST["post4"]);




$year = date("Y",strtotime($ngay));


// $array_number=[$so_luong , $trong_luong , $tong_so_tien];
// $array_number_len = count($array_number) ;
// for ($i=0; $i < $array_number_len ; $i++) { 

//   if(is_numeric(trim(   $array_number[$i]   )) == false){
//     echo "Bạn nhập không đúng định dạng số";
//     exit() ;
//   }else{
//     if (  $array_number[$i]<=0) { 
//       echo "Số  phải lớn hơn 0";
//       exit() ;
  
//      }
  
//   }
  
// }




include "setup/check_token_and_post.php";

header("Content-type: text/html; charset=utf-8"); // thêm tiếng việt mới lấy được câu lệnh sql đã chạy
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

mysqli_set_charset($conn, 'UTF8'); // thêm tiếng việt mới lấy được câu lệnh sql đã chạy
// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

if ( $su_kien == "nhập cám" ) {
  $ma_chung_tu_nhap=safeSQL($_POST["post5"]);

  $nguon_nhap=safeSQL($_POST["post6"]);
  
  $ngay_het_han = safeSQL($_POST["post7"]);

  $kho="Cám";
  $dvt="Kg";
  $sql_2 =  "INSERT INTO
  data_thit
  (data_thit.ngay, 
  data_thit.nam, 
  data_thit.cong_ty,
  data_thit.kho, 

  data_thit.ten_sp_kho,

  data_thit.ma_chung_tu_nhap_kho, 
  
  data_thit.so_luong_nhap_kho,
  
  data_thit.don_vi_tinh, 


  data_thit.tien_nhap_kho, 
  
  
  
  data_thit.nguon_nhap_kho, 

  data_thit.han_su_dung_kho


  
  )VALUES (
    '".$ngay."', 
    '".$year."', 
    '".$trai."', 
    '".$kho."', 
     '".$ten_sp."', 



    '".$so_luong."', 

    '".$dvt."', 
    
    '".$tong_so_tien."'
  
    )";



$result_2 = mysqli_query($conn, $sql_2);

 echo "ok" ;

}

if ( $su_kien == "xuất cám" ) {

$khu =safeSQL($_POST["post5"]);
$chuong =safeSQL($_POST["post6"]);
$lo =safeSQL($_POST["post7"]);
  $kho="Cám";
  $dvt="Kg";
  $sql_2 =  "INSERT INTO
  data_thit
  (data_thit.ngay, 
  data_thit.nam, 
  data_thit.cong_ty,
  data_thit.trai, 
  data_thit.chuong,
  data_thit.ma_lo_nhap,
  data_thit.kho, 

  data_thit.ten_sp_kho,


  
  data_thit.so_luong_xuat_kho,
  
  data_thit.don_vi_tinh, 


  data_thit.tien_xuat_kho
  
  
  


  
  )VALUES (
    '".$ngay."', 
    '".$year."', 
    '".$trai."', 
    '".$khu."', 
    '".$chuong."', 
    '".$lo."', 
    '".$kho."', 
     '".$ten_sp."', 



    '".$so_luong."', 

    '".$dvt."', 
    
    '".$tong_so_tien."'

 
  
    )";



$result_2 = mysqli_query($conn, $sql_2);

 echo "ok" ;

}


?>