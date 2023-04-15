


<script>


<?php



$username_post =$_POST["post1"];
$password_post=$_POST["post2"];
$ten_cong_ty =$_POST["post3"];

	
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
// kiểm tra username và password và tên trại đầy đủ đã có chưa 
$sql_1 = "select* from login where username='".$username_post."'and password='".$password_post."' ";
$result_1 = mysqli_query($conn, $sql_1);
$cout_1 = mysqli_num_rows($result_1);	
$arraymysql_1 = [];
for ($x = 0; $x < $cout_1; $x++) {
    $arraymysql_1[$x] = mysqli_fetch_row($result_1) ;
  }
  
  
if($cout_1==1)
	{
$kiem_tra_loi_1 = "Đã có người đăng ký tài khoản này rồi bạn thay đổi lại tên hoặc password" ;
goto a;
	}

// đâng ký
$sql_2 = "INSERT INTO
`login` 
(`username`, 
`password`, 
`trai_value`,
`trai_day_du`, 
`duoc_quyen_them_user`
) SELECT
'".$username_post."',
'".$password_post."',
COUNT(`trai_day_du`)+1000,
'".$ten_cong_ty."',
'1'
FROM `login`";
$result_2 = mysqli_query($conn, $sql_2);



setcookie("username_cookie",$username_post, time() + (86400 * 5), "/");
setcookie("password_cookie", $password_post, time() + (86400 * 5), "/");	



// login
$sql = "select* from login where username='".$username_post."'and password='".$password_post."'";
$result = mysqli_query($conn, $sql);
$cout = mysqli_num_rows($result);	
$arraymysql = [];
for ($x = 0; $x < $cout; $x++) {
    $arraymysql[$x] = mysqli_fetch_row($result) ;
  }
a:
?>

var arrayjavascript_1 = <?php echo json_encode($cout_1); ?>;
if(arrayjavascript_1 != 1)
	{
	 
var arrayjavascript_2 = <?php echo json_encode($username_post); ?>;
 var arrayjavascript_3 = <?php echo json_encode($arraymysql);	?>;
	
    var array_option = new Array();
    // This will return an array with strings "1", "2", etc.
    array_option = arrayjavascript_3[0][2].split(",");
    array_option_ten_day_du = arrayjavascript_3[0][3].split(",");


	 var select = document.getElementById("id_8") ;
    var select_length = select.length;
 
// xóa option cũ
    for (var i=0; i <= select_length ; i++)
    {
     select.remove(select.i);
    }
	   
	   
// thêm option mới	   
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
	document.getElementById('id_nhan--index').innerHTML="Đăng ký thành công";
	
	
	}
	else
	{
	 document.getElementById('id_nhan').innerHTML=<?php if (isset($kiem_tra_loi_1)) {echo json_encode($kiem_tra_loi_1);	} else {echo json_encode("");} ?>;	
	}  
	


</script>