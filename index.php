<!DOCTYPE html>
<html>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<head>

<style>
._shadow{
			box-sizing: border-box;
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
         }

 /* ngăn chặn anh huong thao tac copy tren trinh duyet */
      /* How to disable selection of text on a web page */
/* hoặc */
/* window.addEventListener("contextmenu", e => e.preventDefault()); */
body{
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          -o-user-select: none;
           user-select: none;
		   vertical-align:top;		

         }
* {
  box-sizing: border-box;
}		 



input {
 width: 180px;  
}




.mystyle_1 {
 
 background-color: red;
  animation-name: example;
  animation-duration: 2s;

}

@keyframes example {
  0%   {background-color: red;}
  25%  {background-color: yellow;}
 
}


.mystyle_2 {
 
 background-color: red;
  animation-name: example_2;
  animation-duration: 2s;

}

@keyframes example_2 {
  0%   {background-color: red;}
  25%  {background-color: yellow;}
 
}



@keyframes animate
{
  0%
  {
    transform:rotate(45deg);
  }
  100%
  {
    transform:rotate(405deg);
  }
}
	




#id_td_khoa_ngay_nhap_du_lieu {
 border: 0px solid black;	 
 text-align: right;
 width: 80px;
}
#id_td_them_user {
 border: 0px solid black;	 
 text-align: right;
 width: 80px;
}

</style>
 <link rel="stylesheet" href="/10/static/style_converted.css">
<!-- tải bất đồng bộ xong, eval() script xong mới load dom phía sau tiếp -->
<script type="text/javascript" src="CDN/jquery-3.1.0.min.js"></script>
<script type="text/javascript" src="CDN/tailwindcss.com3.2.4.js"></script>
<script type="text/javascript" src="CDN/react.development.min.js"></script>
<script type="text/javascript" src="CDN/react-dom.development.min.js"></script>

</head>

<body  >

<div  id="root"></div>

</body>
</html>

<script id="script_root" >

// load hết dom xong mới tải 
window.onload = function()
{
  var newScript_1 = document.createElement("script");
   script_root.appendChild(newScript_1);
 newScript_1.src ="10/static/index_ghep_file.js";
 
};
  
</script>
<script>
	
  let arrayjavascript_3 = <?php

// kiểm tra đăng nhập
// kết nối csdl	

include "setup/fuction_ket_noi_csdl.php";
// header("Content-type: text/html; charset=utf-8"); // thêm tiếng việt mới lấy được câu lệnh sql đã chạy
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

mysqli_set_charset($conn, 'UTF8'); // thêm tiếng việt mới lấy được câu lệnh sql đã chạy


// Check connection
if (isset($_COOKIE['username_cookie'])) {
	$sql = "select * from login where username='".$_COOKIE["username_cookie"]."'and password='".$_COOKIE["password_cookie"]."'";
	


$result = mysqli_query($conn, $sql);
$count = mysqli_num_rows($result);
$arraymysql = [];

for ($x = 0; $x < $count; $x++) {
    $arraymysql[$x] = mysqli_fetch_row($result) ;
  }
  
 

		if($count==1)
		{
			//thêm kí tự @ vào trước dòng lệnh bị warning (để tắt warning đi).
			@ setcookie("username_cookie",$_COOKIE['username_cookie'], time() + (86400 * 5), "/");
			//thêm kí tự @ vào trước dòng lệnh bị warning (để tắt warning đi).
			@ setcookie("password_cookie", $_COOKIE['password_cookie'], time() + (86400 * 5), "/");	

      echo json_encode($arraymysql);
	
		}
   
    else{
      echo json_encode(["Chưa đăng nhập"]);
  
    }


	}
  else{
    echo json_encode(["Chưa đăng nhập"]);

  }

 

?>;
let gobal_post = "";
let gobal_post_month = "";
let gobal_tim_kiem_sua_xoa = "";
let  mystyle_array =["mystyle_1", "mystyle_2"];
let click_xoa = 0 ;
let  array_chuong_thit ;

if (arrayjavascript_3[0]!=="Chưa đăng nhập") {
    array_chuong_thit = JSON.parse(arrayjavascript_3[0][6]) ;
 }                                                     



	
</script>

