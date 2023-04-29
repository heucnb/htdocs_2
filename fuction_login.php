


<?php



$username_post =$_POST["post1"];
$password_post=$_POST["post2"];

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
$sql = "select* from login where username='".$username_post."'and password='".$password_post."'";
$result = mysqli_query($conn, $sql);
$cout = mysqli_num_rows($result);	
$arraymysql = [];
for ($x = 0; $x < $cout; $x++) {
    $arraymysql[$x] = mysqli_fetch_row($result) ;
  }



if($cout==1)
	{
	setcookie("username_cookie",$username_post, time() + (86400 * 5), "/");
	setcookie("password_cookie", $password_post, time() + (86400 * 5), "/");	
	echo json_encode($arraymysql);
	}else{
		echo "Sai username hoặc pasword";
		
	}
	

?>
