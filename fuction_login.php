

<script>



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
	
	}
	

?>


var arrayjavascript_1 = <?php echo json_encode($cout); ?>;
var arrayjavascript_2 = <?php echo json_encode($username_post); ?>;


	if(arrayjavascript_1 == 1)
	{
	 

	 var arrayjavascript_3 = <?php echo json_encode($arraymysql);	?>;
	
    var array_option = new Array();
    // This will return an array with strings "1", "2", etc.
    array_option = arrayjavascript_3[0][2].split(",");
    array_option_ten_day_du = arrayjavascript_3[0][3].split(",");


	   var select = document.getElementById("id_8") ;
       for(var i = 0; i < array_option.length; i++)
             {
                 var option = document.createElement("OPTION"),
                 txt = document.createTextNode(array_option_ten_day_du[i]);
                 option.appendChild(txt);
                 
                option.setAttribute("value",array_option[i]);
          
           
                 select.insertBefore(option,select.lastChild);
             }
             
          // kiểm tra xem có được quyền thêm người dùng và khóa dữ liệu không
	        var quyen_them_nguoi_dung_va_khoa_ngay_sua_du_lieu = arrayjavascript_3[0][4] ;
	        if(quyen_them_nguoi_dung_va_khoa_ngay_sua_du_lieu==1)
	        {
	         document.getElementById('id_them_user').style.display = 'inline';   
	         document.getElementById('id_khoa_ngay_nhap_du_lieu').style.display= 'inline';  
	        }
	        else
	        {
	           document.getElementById('id_them_user').style.display= 'none'; 
	            document.getElementById('id_khoa_ngay_nhap_du_lieu').style.display= 'none'; 
	        }    
	 
	
	
		 document.getElementById('id_td_1').innerHTML="Đăng nhập - " + arrayjavascript_2;
	document.getElementById('id_nhan--index').innerHTML="Đăng nhập thành công";

	
	
	

	 
	
	}
	else
	{
	 document.getElementById('id_nhan').innerHTML="Sai username hoặc pasword";	
	}
	 
	  
	


</script>