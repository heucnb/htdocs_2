


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

   
		$cong_ty = $arraymysql[0][2] ;

		// lấy cấu hình chuồng 		
		$sql_2 = "SELECT setup_chuong.chi_nhanh, GROUP_CONCAT(setup_chuong.chuong ORDER BY setup_chuong.id ASC SEPARATOR '|_|') FROM `setup_chuong` WHERE setup_chuong.cong_ty ='".$cong_ty."' GROUP BY setup_chuong.chi_nhanh ORDER BY setup_chuong.id ASC  ";
		$result_2 = mysqli_query($conn, $sql_2);
		$count_2 = mysqli_num_rows($result_2);	
		$arraymysql_2 = [];
		for ($x = 0; $x < $count_2; $x++) {
			$arraymysql_2[$x] = mysqli_fetch_row($result_2) ;
		}

		for ($x = 0; $x < $count_2; $x++) {
			$arraymysql_2[$x][1] =array_chunk( explode('|_|', $arraymysql_2[$x][1])  , 6)  ;
		}

		$string_array_setup_chuong = json_encode($arraymysql_2) ;

		$arraymysql[0][6] = $string_array_setup_chuong ;


		

// Generate token
$token = Token::Sign(['username' => $username_post ,'password' => $password_post , 'trai'=> $arraymysql[0][2] , 'trai_day_du'=> $arraymysql[0][3] ] ,  $KEY , (60*10) );
@ setcookie("token_cookie",$token, time() + (86400 * 5), "/");
//-----------------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------lưu cấu hình chuồng vào localstroge browser client
	echo str_ireplace("|_|","'",json_encode($arraymysql));
	}else{
		echo "Sai username hoặc pasword";
		
	}
	

?>
