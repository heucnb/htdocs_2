
<?php



$username_post =$_POST['post1'];
$password_post=$_POST['post2'];
$ten_cong_ty =$_POST['post3'];

	
// kết nối csdl	
include 'setup/fuction_ket_noi_csdl.php';
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

  
 $chuong_default = '[["'.$ten_cong_ty.'", [  ["Cai Sữa 1", "Cai Sữa 2", "Cai Sữa 3", "Cai Sữa 4", "Cai Sữa 5", "Cai Sữa 6"], ["Thịt 1", "Thịt 2", "Thịt 3", "Thịt 4", "Thịt 5", "Thịt 6"] ] ] , ["Chi nhánh 1", [ ["Thịt 1", "Thịt 2", "Thịt 3", "Thịt 4", "Thịt 5", "Thịt 6"], ["Thịt 7", "Thịt 8", "Thịt 9", "Thịt 10", "", ""] ] ]]' ;
if($cout_1==1)
	{
        echo 'Đã có người đăng ký tài khoản này rồi bạn thay đổi lại tên hoặc password' ;

	}
    else {
  // đâng ký
$sql_2 =  "INSERT INTO
`login` 
(`username`, 
`password`, 
`trai`,
`trai_day_du`, 
`duoc_quyen_them_user`,
`chuong`
) SELECT
'".$username_post."',
'".$password_post."',
(with raw_data as ( SELECT login.trai AS trai FROM `login` GROUP BY login.trai ) select Count(trai) +1000 from raw_data ),
'".$ten_cong_ty."',
'1',
'".$chuong_default."'
";


$result_2 = mysqli_query($conn, $sql_2);


echo 'ok';


    }


?>