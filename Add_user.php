
<?php
$username_post =$_POST["post1"];
$password_post=$_POST["post2"];

$trai=$_POST["post8"];
$ten_trai_day_du=$_POST["post9"];
$chuong=$_POST["post10"];	
// kết nối csdl	
include "setup/fuction_ket_noi_csdl.php";
header("Content-type: text/html; charset=utf-8"); // thêm tiếng việt mới lấy được câu lệnh sql đã chạy
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

mysqli_set_charset($conn, 'UTF8'); // thêm tiếng việt mới lấy được câu lệnh sql đã chạy
// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
// kiểm tra username và password đã có chưa 
$sql_1 = "select* from login where username='".$username_post."'and password='".$password_post."' ";
$result_1 = mysqli_query($conn, $sql_1);
$cout_1 = mysqli_num_rows($result_1);	

  
if($cout_1==1)
	{
        echo  "Đã có người đăng ký tài khoản này rồi bạn thay đổi lại tên hoặc password" ;

	}

    else{

// thêm user
$sql_2 = "INSERT INTO
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
".$trai.",
'".$ten_trai_day_du."',
'0',
'".$chuong."'";

$result_2 = mysqli_query($conn, $sql_2);


// láy dữ liệu lên
$sql = "select `username`, `password`,`trai_day_du` from login where `trai`='".$trai."' ";
$result = mysqli_query($conn, $sql);
$cout = mysqli_num_rows($result);	
$arraymysql = [];
 $arraymysql[0] =["Tên đăng nhập",
"Password",
"Công ty"
];
for ($x = 1; $x < $cout + 1; $x++) {
    $arraymysql[$x] = mysqli_fetch_row($result) ;
  }
 
    }

    echo json_encode($arraymysql);

?>