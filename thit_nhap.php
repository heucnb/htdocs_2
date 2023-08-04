
<?php
include "setup/fuction_ket_noi_csdl.php";

$su_kien=safeSQL($_POST["post9"]);

$khu =safeSQL($_POST["post2"]);
$chuong =safeSQL($_POST["post3"]);
$lo =safeSQL($_POST["post5"]);
$ngay = safeSQL($_POST["post4"]);
$trai=safeSQL($_POST["post8"]);


$so_luong=safeSQL($_POST["post11"]);
$trong_luong=safeSQL($_POST["post12"]);
$nguyen_nhan=safeSQL($_POST["post13"]);
$tong_so_tien=safeSQL($_POST["post14"]);
$nguoi_mua=safeSQL($_POST["post15"]);
$ky_su=safeSQL($_POST["post16"]);
$lo_nhap=safeSQL($_POST["post17"]);
$nguon_nhap=safeSQL($_POST["post18"]);
$phan_loai_heo=safeSQL($_POST["post19"]);

$khu_chuyen_den=safeSQL($_POST["post20"]);
$chuong_chuyen_den=safeSQL($_POST["post21"]);
$lo_chuyen_den =safeSQL($_POST["post22"]);

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

if ( $su_kien == "Báo chết" ) {

  // nếu ngày báo chết trước ngày nhập heo thì báo lỗi 
  $sql_1 = "with raw_data as(SELECT data_thit.ngay as ngay_min FROM `data_thit` WHERE data_thit.cong_ty =  '".$trai."' and data_thit.ma_lo_nhap  =  '".$lo."' and data_thit.nguon_nhap   IS NOT NULL )
  select MIN(ngay_min) from raw_data";
$result_1 = mysqli_query($conn, $sql_1);
$ngay_nhap_heo = mysqli_fetch_row($result_1)[0] ;

if(   strtotime($ngay)  -    strtotime($ngay_nhap_heo)      <  0           )
{
 echo "Ngày báo chết trước ngày nhập heo. Ngày nhập heo là ".date("d/m/Y", strtotime($ngay_nhap_heo));
exit() ;
}	
// Nếu người khác đóng chuồng rồi thì báo lỗi ngược lại tính tồn heo của lô này
$sql_3 = "SELECT

SUM(data_thit.so_luong_nhap)+SUM(data_thit.chuyen_den)-SUM(data_thit.chet)-SUM(data_thit.loai)-SUM(data_thit.ban_giong)-SUM(data_thit.ban)-SUM(data_thit.chuyen_di) AS ton_dau 



FROM
	data_thit
	WHERE
	data_thit.ngay<='".$ngay."' AND
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

// tồn heo của lô này mà bé hơn số heo báo chết thì báo lỗi
if(  $ton_dau  <  $so_luong          )
{
 echo "Không thể nhập được vì số lượng heo trong chuồng đang là ".$ton_dau;
exit() ;
}	

  $sql_2 =  "INSERT INTO
  data_thit
  (data_thit.ngay, 
  data_thit.nam, 
  data_thit.cong_ty,
  data_thit.trai, 
  data_thit.chuong,
  data_thit.ma_lo_nhap,
  data_thit.chet, 
  
  data_thit.p_chet,
  
  data_thit.nguyen_nhan, 
  data_thit.ky_su
  
  )VALUES (
    '".$ngay."', 
    '".$year."', 
    '".$trai."', 
    '".$khu."', 
     '".$chuong."', 
     '".$lo."', 
    '".$so_luong."', 
    '".$trong_luong."', 
     '".$nguyen_nhan."', 
      '".$ky_su."'
  
    )";



$result_2 = mysqli_query($conn, $sql_2);

 echo "ok" ;

}
if ( $su_kien == "Bán loại" ) {

  // nếu ngày bán loại trước ngày nhập heo thì báo lỗi 
  $sql_1 = "with raw_data as(SELECT data_thit.ngay as ngay_min FROM `data_thit` WHERE data_thit.cong_ty =  '".$trai."' and data_thit.ma_lo_nhap  =  '".$lo."' and data_thit.nguon_nhap   IS NOT NULL)
  select MIN(ngay_min) from raw_data";
$result_1 = mysqli_query($conn, $sql_1);
$ngay_nhap_heo = mysqli_fetch_row($result_1)[0] ;

if(   strtotime($ngay)  -    strtotime($ngay_nhap_heo)      <  0           )
{
 echo "Ngày bán loại trước ngày nhập heo. Ngày nhập heo là ".date("d/m/Y", strtotime($ngay_nhap_heo));
exit() ;
}	
// Nếu người khác đóng chuồng rồi thì báo lỗi ngược lại tính tồn heo của lô này
$sql_3 = "SELECT

SUM(data_thit.so_luong_nhap)+SUM(data_thit.chuyen_den)-SUM(data_thit.chet)-SUM(data_thit.loai)-SUM(data_thit.ban_giong)-SUM(data_thit.ban)-SUM(data_thit.chuyen_di) AS ton_dau 



FROM
	data_thit
	WHERE
	data_thit.ngay<='".$ngay."' AND
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

// tồn heo của lô này mà bé hơn số heo bán loại thì báo lỗi
if(  $ton_dau  <  $so_luong          )
{
 echo "Không thể nhập được vì số lượng heo trong chuồng đang là ".$ton_dau;
exit() ;
}	

  $sql_2 =  "INSERT INTO
  data_thit
  (data_thit.ngay, 
  data_thit.nam, 
  data_thit.cong_ty,
  data_thit.trai, 
  data_thit.chuong,
  data_thit.ma_lo_nhap,
  data_thit.loai,
data_thit.p_loai,
data_thit.nguyen_nhan,
data_thit.gia,
data_thit.nguoi_mua,
  data_thit.ky_su
  
  )VALUES (
    '".$ngay."', 
    '".$year."', 
    '".$trai."', 
    '".$khu."', 
     '".$chuong."', 
     '".$lo."', 
    '".$so_luong."', 
    '".$trong_luong."', 
     '".$nguyen_nhan."', 
     '".$tong_so_tien."', 
     '".$nguoi_mua."', 


      '".$ky_su."'
  
    )";



$result_2 = mysqli_query($conn, $sql_2);

 echo "ok" ;

}

if ( $su_kien == "Bán thịt" ) {

  // nếu ngày bán thịt trước ngày nhập heo thì báo lỗi 
  $sql_1 = "with raw_data as(SELECT data_thit.ngay as ngay_min FROM `data_thit` WHERE data_thit.cong_ty =  '".$trai."' and data_thit.ma_lo_nhap  =  '".$lo."' and data_thit.nguon_nhap   IS NOT NULL )
  select MIN(ngay_min) from raw_data";
$result_1 = mysqli_query($conn, $sql_1);
$ngay_nhap_heo = mysqli_fetch_row($result_1)[0] ;

if(   strtotime($ngay)  -    strtotime($ngay_nhap_heo)      <  0           )
{
 echo "Ngày bán thịt trước ngày nhập heo. Ngày nhập heo là ".date("d/m/Y", strtotime($ngay_nhap_heo));
exit() ;
}	
// Nếu người khác đóng chuồng rồi thì báo lỗi ngược lại tính tồn heo của lô này
$sql_3 = "SELECT

SUM(data_thit.so_luong_nhap)+SUM(data_thit.chuyen_den)-SUM(data_thit.chet)-SUM(data_thit.loai)-SUM(data_thit.ban_giong)-SUM(data_thit.ban)-SUM(data_thit.chuyen_di) AS ton_dau 



FROM
	data_thit
	WHERE
	data_thit.ngay<='".$ngay."' AND
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

// tồn heo của lô này mà bé hơn số heo bán loại thì báo lỗi
if(  $ton_dau  <  $so_luong          )
{
 echo "Không thể nhập được vì số lượng heo trong chuồng đang là ".$ton_dau;
exit() ;
}	

  $sql_2 =  "INSERT INTO
  data_thit
  (data_thit.ngay, 
  data_thit.nam, 
  data_thit.cong_ty,
  data_thit.trai, 
  data_thit.chuong,
  data_thit.ma_lo_nhap,
  data_thit.ban,
data_thit.kg_ban,
data_thit.loai_heo_ban,
data_thit.gia,
data_thit.nguoi_mua,
  data_thit.ky_su
  
  )VALUES (
    '".$ngay."', 
    '".$year."', 
    '".$trai."', 
    '".$khu."', 
     '".$chuong."', 
     '".$lo."', 
    '".$so_luong."', 
    '".$trong_luong."', 
     '".$phan_loai_heo."', 
     '".$tong_so_tien."', 
     '".$nguoi_mua."', 


      '".$ky_su."'
  
    )";



$result_2 = mysqli_query($conn, $sql_2);

 echo "ok" ;

}

if ( $su_kien == "Bán giống" ) {

  // nếu ngày bán thịt trước ngày nhập heo thì báo lỗi 
  $sql_1 = "with raw_data as(SELECT data_thit.ngay as ngay_min FROM `data_thit` WHERE data_thit.cong_ty =  '".$trai."' and data_thit.ma_lo_nhap  =  '".$lo."' and data_thit.nguon_nhap   IS NOT NULL )
  select MIN(ngay_min) from raw_data";
$result_1 = mysqli_query($conn, $sql_1);
$ngay_nhap_heo = mysqli_fetch_row($result_1)[0] ;

if(   strtotime($ngay)  -    strtotime($ngay_nhap_heo)      <  0           )
{
 echo "Ngày bán giống trước ngày nhập heo. Ngày nhập heo là ".date("d/m/Y", strtotime($ngay_nhap_heo));
exit() ;
}	
// Nếu người khác đóng chuồng rồi thì báo lỗi ngược lại tính tồn heo của lô này
$sql_3 = "SELECT

SUM(data_thit.so_luong_nhap)+SUM(data_thit.chuyen_den)-SUM(data_thit.chet)-SUM(data_thit.loai)-SUM(data_thit.ban_giong)-SUM(data_thit.ban)-SUM(data_thit.chuyen_di) AS ton_dau 



FROM
	data_thit
	WHERE
	data_thit.ngay<='".$ngay."' AND
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

// tồn heo của lô này mà bé hơn số heo bán loại thì báo lỗi
if(  $ton_dau  <  $so_luong          )
{
 echo "Không thể nhập được vì số lượng heo trong chuồng đang là ".$ton_dau;
exit() ;
}	

  $sql_2 =  "INSERT INTO
  data_thit
  (data_thit.ngay, 
  data_thit.nam, 
  data_thit.cong_ty,
  data_thit.trai, 
  data_thit.chuong,
  data_thit.ma_lo_nhap,
  data_thit.ban_giong,
data_thit.kg_ban_giong,
data_thit.gia,
data_thit.nguoi_mua,
  data_thit.ky_su
  
  )VALUES (
    '".$ngay."', 
    '".$year."', 
    '".$trai."', 
    '".$khu."', 
     '".$chuong."', 
     '".$lo."', 
    '".$so_luong."', 
    '".$trong_luong."', 
     '".$tong_so_tien."', 
     '".$nguoi_mua."', 


      '".$ky_su."'
  
    )";



$result_2 = mysqli_query($conn, $sql_2);

 echo "ok" ;

}



if ( $su_kien == "Nhập heo" ) {

  if(   $nguon_nhap   == ""  ) { $nguon_nhap   = $nguon_nhap."." ; }	

  if ($lo == "Tạo lô mới") {
    
        // xác định id lô heo nhập trên sever
        $sql_1 = "SELECT id_lo_data_thit FROM `id_lo_data_thit`";
      $result_1 = mysqli_query($conn, $sql_1);
      $id_lo = mysqli_fetch_row($result_1)[0] + 1;
      // update id lô mới
$sql_5 =  "UPDATE id_lo_data_thit
SET id_lo_data_thit.id_lo_data_thit = '".$id_lo."'";

$result_5 = mysqli_query($conn, $sql_5);

        //--------------------------------------

        $sql_2 =  "INSERT INTO
        data_thit
        (data_thit.ngay, 
        data_thit.nam, 
        data_thit.cong_ty,
        data_thit.trai, 
        data_thit.chuong,
        data_thit.ma_lo_nhap,
        data_thit.so_luong_nhap, 
        
        data_thit.kg_nhap,
        
        data_thit.nguon_nhap, 
        data_thit.ky_su
        
        )VALUES (
          '".$ngay."', 
          '".$year."', 
          '".$trai."', 
          '".$khu."', 
          '".$chuong."', 
          '".$id_lo."_".$lo_nhap."', 
          '".$so_luong."', 
          '".$trong_luong."', 
          '".$nguon_nhap."', 
            '".$ky_su."'
        
          )";

      $result_2 = mysqli_query($conn, $sql_2);
      echo "ok" ;
  
  } else {
    // ngược lại INSERT vào lô cũ
    // nếu người khác đóng chuồng ở lô này rồi thì thông báo lỗi 
    $sql_3 = "SELECT
    data_thit.ngay_dong
    
    FROM
      data_thit
      WHERE
    
      data_thit.cong_ty='".$trai."'
      AND
    
    data_thit.ma_lo_nhap  = '".$lo."'";
    $result_3 = mysqli_query($conn, $sql_3);
   
    $check_ngay_dong = mysqli_fetch_row($result_3)[0] ;

    if(   $check_ngay_dong   != "0000-00-00"          )
    {
     echo "Chuồng này đã đóng rồi, bạn hãy kiểm tra lại";
    exit() ;
    }	



// tồn heo của lô trước khi thêm dữ liệu vào này mà bằng 0. thì khuyến cáo nên đóng lô này

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



if(  $ton_dau  ==0        )
{
 echo "Tồn cuối của lô này bằng 0. Bạn nên đóng chuồng lô này và mở lô mới khác";
exit() ;
}	


// insert lô
    $sql_2 =  "INSERT INTO
    data_thit
    (data_thit.ngay, 
    data_thit.nam, 
    data_thit.cong_ty,
    data_thit.trai, 
    data_thit.chuong,
    data_thit.ma_lo_nhap,
    data_thit.so_luong_nhap, 
    
    data_thit.kg_nhap,
    
    data_thit.nguon_nhap, 
    data_thit.ky_su
    
    )VALUES (
      '".$ngay."', 
      '".$year."', 
      '".$trai."', 
      '".$khu."', 
      '".$chuong."', 
      '".$lo."', 
      '".$so_luong."', 
      '".$trong_luong."', 
      '".$nguon_nhap."', 
        '".$ky_su."'
    
      )";

  $result_2 = mysqli_query($conn, $sql_2);

  echo "ok" ;


   
  }


  

  
}

//---------------------------------------------------------------------------------------------------------
if ( $su_kien == "Đóng chuồng" ) {
        $sql_1 = "SELECT
        data_thit.trai,
        data_thit.chuong,
        data_thit.ma_lo_nhap,
        MAX(data_thit.ngay),
        SUM(data_thit.so_luong_nhap)+SUM(data_thit.chuyen_den)-SUM(data_thit.chet)-SUM(data_thit.loai)-SUM(data_thit.ban_giong)-SUM(data_thit.ban)-SUM(data_thit.chuyen_di) AS ton_dau 
        
        
        
        FROM
          data_thit
          WHERE
          data_thit.cong_ty=  '".$trai."'
          AND
        data_thit.ngay_dong =0
        GROUP BY
        data_thit.ma_lo_nhap  
        ";
      $result_1 = mysqli_query($conn, $sql_1);
      $cout_1 = mysqli_num_rows($result_1);
      $arraymysql_1 = [];
      $arraymysql_1[0] = ["Đơn vị",

      "Chuồng",
      "Lô",
      "Ngày đóng",
      "Tồn cuối"



      ];
      for ($x = 1; $x < $cout_1+1; $x++) {
          $arraymysql_1[$x] = mysqli_fetch_row($result_1) ;
        }
   
        echo str_ireplace("|_|","'",json_encode($arraymysql_1));
  
}

//----------------------------------------------------------------------------------------------------------------------

if ( $su_kien == "Tìm kiếm" ) {

 

$sql_2 =  "SELECT 
'Xoá',
data_thit.ngay,
data_thit.id,
data_thit.so_luong_nhap,
data_thit.kg_nhap,
data_thit.nguon_nhap,
data_thit.ngay_dong,
data_thit.chet,
data_thit.p_chet,
data_thit.loai,
data_thit.p_loai,
data_thit.nguyen_nhan,
data_thit.ban_giong,
data_thit.kg_ban_giong,
data_thit.ban,
data_thit.kg_ban,
data_thit.loai_heo_ban,
data_thit.gia,
data_thit.chuyen_den,
data_thit.chuyen_di FROM `data_thit` WHERE 
data_thit.cong_ty = '".$trai."'
 and
 data_thit.ma_lo_nhap ='".$lo."'
 ORDER BY data_thit.ngay  ASC
";



$result_2 = mysqli_query($conn, $sql_2);

$cout = mysqli_num_rows($result_2);	
$arraymysql = [];

$arraymysql[0] = [
  "Xoá",
  "Ngày",
  "ID",
"Số lượng nhập",
"Trọng lượng nhập",
"Nguồn nhập",
"Ngày đóng chuồng",
"Chết",
"Trọng lượng chết",
"Loại",
"Trọng lượng loại",
"Nguyên nhân",
"Bán giống",
"Trọng lượng",
"Bán thịt",
"Trọng lượng",
"Loại heo",
"Tiền",
"Chuyển đến",
"Chuyển đi"


];


for ($x = 1; $x < $cout + 1; $x++) {
    $arraymysql[$x] = mysqli_fetch_row($result_2) ;
  }





    echo str_ireplace("|_|","'",json_encode($arraymysql));

}





if ( $su_kien == "Chuyển chuồng" ) {

  // nếu ngày chuyển chuồng trước ngày nhập heo của chuồng chuyển đi thì báo lỗi 
  $sql_1 = "with raw_data as(SELECT data_thit.ngay as ngay_min FROM `data_thit` WHERE data_thit.cong_ty =  '".$trai."' and data_thit.ma_lo_nhap  =  '".$lo."' and data_thit.nguon_nhap   IS NOT NULL )
  select MIN(ngay_min) from raw_data";
$result_1 = mysqli_query($conn, $sql_1);
$ngay_nhap_heo_chuyen_di = mysqli_fetch_row($result_1)[0] ;

if(   strtotime($ngay)  -    strtotime($ngay_nhap_heo_chuyen_di)      <  0           )
{
 echo "Ngày chuyển chuồng trước ngày nhập heo. Ngày nhập heo chuồng chuyển đi là ".date("d/m/Y", strtotime($ngay_nhap_heo_chuyen_di));
exit() ;
}	

// nếu ngày chuyển chuồng trước ngày nhập heo của chuồng chuyển đến thì báo lỗi 
$sql_1 = "with raw_data as(SELECT data_thit.ngay as ngay_min FROM `data_thit` WHERE data_thit.cong_ty =  '".$trai."' and data_thit.ma_lo_nhap  =  '".$lo_chuyen_den."' and data_thit.nguon_nhap   IS NOT NULL )
select MIN(ngay_min) from raw_data";
$result_1 = mysqli_query($conn, $sql_1);
$ngay_nhap_heo = mysqli_fetch_row($result_1)[0] ;

if(   strtotime($ngay)  -    strtotime($ngay_nhap_heo)      <  0           )
{
 echo "Ngày chuyển chuồng trước ngày nhập heo. Ngày nhập heo chuồng chuyển đến là ".date("d/m/Y", strtotime($ngay_nhap_heo));
exit() ;
}	




// Nếu người khác đóng chuồng chuyển đi rồi thì báo lỗi ngược lại tính tồn heo của lô này
$sql_3 = "SELECT

SUM(data_thit.so_luong_nhap)+SUM(data_thit.chuyen_den)-SUM(data_thit.chet)-SUM(data_thit.loai)-SUM(data_thit.ban_giong)-SUM(data_thit.ban)-SUM(data_thit.chuyen_di) AS ton_dau 



FROM
	data_thit
	WHERE
	data_thit.ngay<='".$ngay."' AND
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

// tồn heo của lô này mà bé hơn số heo chuyển đi thì báo lỗi
if(  $ton_dau  <  $so_luong          )
{
 echo "Không thể nhập được vì số lượng heo trong chuồng đang là ".$ton_dau;
exit() ;
}	


// nếu người khác đóng chuồng chuyển đến rồi thì thông báo lỗi
 // nếu người khác đóng chuồng chuyển đến  lô này rồi thì thông báo lỗi 
 $sql_10 = "SELECT
 data_thit.ngay_dong
 
 FROM
   data_thit
   WHERE
 
   data_thit.cong_ty='".$trai."'
   AND
 
 data_thit.ma_lo_nhap  = '".$lo_chuyen_den."'";
 $result_10 = mysqli_query($conn, $sql_10);

 $check_ngay_dong = mysqli_fetch_row($result_10)[0] ;

 if(   $check_ngay_dong   != "0000-00-00"          )
 {
  echo "Chuồng chuyển đến này đã đóng rồi, bạn hãy kiểm tra lại";
 exit() ;
 }	





// xác định id_chuyen_di để sau này xoá dữ liệu

  $sql_1 = "SELECT id_chuyen_di FROM `id_chuyen_di`";
  $result_1 = mysqli_query($conn, $sql_1);
  $id_chuyen_di = mysqli_fetch_row($result_1)[0] + 1;
  // update id lô mới
$sql_5 =  "UPDATE id_chuyen_di
SET id_chuyen_di.id_chuyen_di = '".$id_chuyen_di."'";

$result_5 = mysqli_query($conn, $sql_5);

// INSERT chuyển đi
  $sql_2 =  "INSERT INTO
  data_thit
  (data_thit.ngay, 
  data_thit.nam, 
  data_thit.cong_ty,
  data_thit.trai, 
  data_thit.chuong,
  data_thit.ma_lo_nhap,
  data_thit.chuyen_di,
data_thit.p_chuyen_di,
data_thit.id_chuyen_di,
data_thit.chuong_chuyen_den,

  data_thit.ky_su
  
  )VALUES (
    '".$ngay."', 
    '".$year."', 
    '".$trai."', 
    '".$khu."', 
     '".$chuong."', 
     '".$lo."', 
    '".$so_luong."', 
    '".$trong_luong."', 

     '".$id_chuyen_di."', 
     '".$khu_chuyen_den."--".$chuong_chuyen_den."--".$lo_chuyen_den."', 

      '".$ky_su."'
  
    )";



$result_2 = mysqli_query($conn, $sql_2);

// INSERT chuyển đến

$sql_7 =  "INSERT INTO
data_thit
(data_thit.ngay, 
data_thit.nam, 
data_thit.cong_ty,
data_thit.trai, 
data_thit.chuong,
data_thit.ma_lo_nhap,

data_thit.chuyen_den,
data_thit.p_chuyen_den,

data_thit.id_chuyen_di,
data_thit.ky_su

)VALUES (
  '".$ngay."', 
  '".$year."', 
  '".$trai."', 
  '".$khu_chuyen_den."', 
   '".$chuong_chuyen_den."', 
   '".$lo_chuyen_den."', 
  '".$so_luong."', 
  '".$trong_luong."', 

   '".$id_chuyen_di."', 

    '".$ky_su."'

  )";


  $result_7 = mysqli_query($conn, $sql_7);


 echo "ok" ;

}



?>