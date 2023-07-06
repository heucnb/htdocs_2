
<?php
include "setup/fuction_ket_noi_csdl.php";
$username_post =safeSQL($_POST["post1"]);
$password_post=safeSQL($_POST["post2"]);

$trai=safeSQL($_POST["post8"]);
include "setup/check_token_and_post.php";
$ten_trai_day_du=safeSQL($_POST["post9"]);
$chuong=safeSQL($_POST["post10"]);	

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

      if (substr($_POST["post8"],0,3) != "td_") {
            

            $sql_2 =  "INSERT INTO
            `login` 
            (`username`, 
            `password`, 
            `trai`,
            `trai_day_du`, 
            `duoc_quyen_them_user`,
            `chuong`
            )VALUES (
              '".$username_post."', 
              '".$password_post."', 
              '".$trai."', 
              '".$ten_trai_day_du."', 
            0, 
              '".$chuong."'

              )";


       
      } else {

          

            $sql_2 =  "INSERT INTO
            `login` 
            (`username`, 
            `password`, 
            `trai`,
            `trai_day_du`, 
            `duoc_quyen_them_user`,
            `chuong`
            )VALUES (
              '".$username_post."', 
              '".$password_post."', 
              '".$payload[1]['trai']."', 
              '".$payload[1]['trai_day_du']."', 
            0, 
              '".$chuong."'

              )";


      }
      

      

   
$result_2 = mysqli_query($conn, $sql_2);


// láy dữ liệu lên

$sql = "select `username`, `password`,`trai_day_du`, `duoc_quyen_them_user` from login where `trai`='".$payload[1]['trai']."' or `trai`='".$trai."' ORDER BY `duoc_quyen_them_user` DESC ";



$result = mysqli_query($conn, $sql);
$cout = mysqli_num_rows($result);	
$arraymysql = [];
 $arraymysql[0] =["Tên đăng nhập",
"Password",
"Công ty",
"Quyền quản trị user"
];
for ($x = 1; $x < $cout + 1; $x++) {
    $arraymysql[$x] = mysqli_fetch_row($result) ;
  }


 
    }

    echo str_ireplace("|_|","'",json_encode($arraymysql));

?>