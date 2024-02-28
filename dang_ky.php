
<?php
include "setup/connect_mysql.php";
include "setup/Token.php";


$username_post =safeSQL($_POST['post1']);
$password_post=safeSQL($_POST['post2']);

$string_ten_all_cong_ty_con = safeSQL($_POST['post4']) ;
$ten_all_cong_ty_con = json_decode($string_ten_all_cong_ty_con);

header('Content-type: text/html; charset=utf-8'); // thêm tiếng việt mới lấy được câu lệnh sql đã chạy
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

mysqli_set_charset($conn, 'UTF8'); // thêm tiếng việt mới lấy được câu lệnh sql đã chạy
// Check connection
if (!$conn) {
  die('Connection failed: ' . mysqli_connect_error());
}
// kiểm tra username và password và tên trại đầy đủ đã có chưa 
$sql_1 = "select* from login where username='".$username_post."'and password='".$password_post."' ";
$result_1 = mysqli_query($conn, $sql_1);
$cout_1 = mysqli_num_rows($result_1);	

 
 if($cout_1==1)
	{
        echo 'Đã có người đăng ký tài khoản này rồi bạn thay đổi lại tên hoặc password' ;

	}
    else {

$sql = "with raw_data as ( SELECT login.trai AS trai FROM `login` GROUP BY login.trai ) select Count(trai) *1000 from raw_data";
$result = mysqli_query($conn, $sql);
$cout = mysqli_num_rows($result);	

$value_bat_dau =mysqli_fetch_row($result)[0] ;


 
  $len = count($ten_all_cong_ty_con)-1 ;
  if ($len>=0) {

    $value_tap_doan =  "td_".$value_bat_dau;
   
    for ($x = 1; $x <= $len; $x++) {
      $value_tap_doan = $value_tap_doan."_".($value_bat_dau + $x );
    }
    


    $value_cong_ty =  $value_bat_dau;
 
    for ($x = 1; $x <= $len; $x++) {
      $value_cong_ty = $value_cong_ty.",".($value_bat_dau + $x ) ;
    }
    // thêm tên value tập đoàn vào cuối
    $value_cong_ty = $value_cong_ty.",".$value_tap_doan ;
   
  
    //---------------------------------------------------------------------------------
   $ten_cong_ty =  $ten_all_cong_ty_con[0];
 
    for ($x = 1; $x <= $len; $x++) {
      $ten_cong_ty = $ten_cong_ty.",".$ten_all_cong_ty_con[$x] ;
    }
    // thêm tên tập đoàn vào cuối
    $ten_cong_ty = $ten_cong_ty.",* ".safeSQL($_POST['post3']) ;
   
  } else {
    $value_cong_ty = $value_bat_dau ;
    $ten_cong_ty = safeSQL($_POST['post3']) ;

  }
  
 

$sql_2 =  "INSERT INTO
`login` 
(`username`, 
`password`, 
`trai`,
`trai_day_du`, 
`duoc_quyen_them_user`,
`khoa_ngay_sua_du_lieu`
)VALUES (
  '".$username_post."', 
  '".$password_post."', 
  '".$value_cong_ty."', 
  '".$ten_cong_ty."', 
 1, 
  '9999'

  )";



$result_2 = mysqli_query($conn, $sql_2);


$sql_3 =  "INSERT INTO setup_chuong
(setup_chuong.cong_ty,setup_chuong.chi_nhanh,setup_chuong.chuong)
VALUES
  ( '".$value_cong_ty."','Chi nhánh 1','Thịt 1'),
( '".$value_cong_ty."','Chi nhánh 1','Thịt 2'),
( '".$value_cong_ty."','Chi nhánh 1','Thịt 3'),
( '".$value_cong_ty."','Chi nhánh 1','Thịt 4'),
( '".$value_cong_ty."','Chi nhánh 1','Thịt 5'),
( '".$value_cong_ty."','Chi nhánh 1','Thịt 6'),
( '".$value_cong_ty."','Chi nhánh 2','Thịt 1'),
( '".$value_cong_ty."','Chi nhánh 2','Thịt 2'),
( '".$value_cong_ty."','Chi nhánh 2','Thịt 3'),
( '".$value_cong_ty."','Chi nhánh 2','Thịt 4'),
( '".$value_cong_ty."','Chi nhánh 2','Thịt 5'),
( '".$value_cong_ty."','Chi nhánh 2','Thịt 6')

";



$result_3 = mysqli_query($conn, $sql_3);

$sql_4 =  "INSERT INTO setup_kho
(setup_kho.cong_ty,
setup_kho.kho,
setup_kho.id_ten,
setup_kho.ten,
setup_kho.don_vi_tinh,
setup_kho.nha_cung_cap
)
VALUES
(".$value_cong_ty.", 'Cám', 'C11', 'TAHH 11', 'Kg', 'Dabaco' ),
(".$value_cong_ty.", 'Thuốc', 'T0001', 'Amox 15% tiêm - 100ml', 'Chai', 'Thái Dương' )
";



$result_4 = mysqli_query($conn, $sql_4);


setcookie("token_cookie","", time() - 3600, "/");	



echo 'ok';


    }


?>