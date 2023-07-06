


<?php

include "setup/connect_mysql.php";
include "setup/Token.php";
$username_post =safeSQL($_POST["post1"]);
$password_post=safeSQL($_POST["post2"]);


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

		

// Generate token
$token = Token::Sign(['username' => $username_post ,'password' => $password_post , 'trai'=> $arraymysql[0][2] , 'trai_day_du'=> $arraymysql[0][3] ] ,  $KEY , (60*10) );
@ setcookie("token_cookie",$token, time() + (86400 * 5), "/");

	echo str_ireplace("|_|","'",json_encode($arraymysql));
	}else{
		echo "Sai username hoặc pasword";
		
	}
	

?>
