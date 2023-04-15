
<table  id="table1" class="table_nhận_dữ_liệu" > 
   
</table>

<script>


<?php

$kiem_tra_fuction=$_POST["post10"];

// thêm user--------------------------------------

if($kiem_tra_fuction=='Thêm người dùng')
{
 $username_post =$_POST["post1"];
$password_post=$_POST["post2"];
$quyen_them_user_sua_du_lieu =$_POST["post3"];
$trai=$_POST["post8"];
$ten_trai_day_du=$_POST["post9"];
	
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
$arraymysql_1 = [];

for ($x = 0; $x < $cout_1; $x++) {
    $arraymysql_1[$x] = mysqli_fetch_row($result_1) ;
  }
  
  
if($cout_1==1)
	{
$kiem_tra_loi_1 = "Đã có người đăng ký tài khoản này rồi bạn thay đổi lại tên hoặc password" ;
goto a;
	}

// thêm user
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
'".$trai."',
'".$ten_trai_day_du."',
'".$quyen_them_user_sua_du_lieu."'
FROM `login` Limit 1";
$result_2 = mysqli_query($conn, $sql_2);


// láy dữ liệu lên
$sql = "select `username`, `password`, if(`duoc_quyen_them_user`= 1, 'Cấp quyền','Không cấp quyền'),`trai_day_du` from login where `trai_value`='".$trai."' ";
$result = mysqli_query($conn, $sql);
$cout = mysqli_num_rows($result);	
$arraymysql = [];
 $arraymysql[0] =["Tên đăng nhập",
"Password",
"Quyền thêm người dùng và sửa dữ liệu",
"Công ty user thêm có quyền đăng nhập"
];
for ($x = 1; $x < $cout + 1; $x++) {
    $arraymysql[$x] = mysqli_fetch_row($result) ;
  }
 
  
a:   
    
    
}



// xóa user--------------------------------------------


if($kiem_tra_fuction=='Xóa người dùng')
{
    $trai=$_POST["post8"];
$ten_trai_day_du=$_POST["post9"];
	
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
// láy dữ liệu lên
$sql = "select `username`, `password`, if(`duoc_quyen_them_user`= 1, 'Cấp quyền','Không cấp quyền'),`trai_day_du` from login where `trai_value`='".$trai."' ";
$result = mysqli_query($conn, $sql);
$cout = mysqli_num_rows($result);	
$arraymysql = [];
 $arraymysql[0] =["Tên đăng nhập",
"Password",
"Quyền thêm người dùng và sửa dữ liệu",
"Công ty user thêm có quyền đăng nhập"
];
for ($x = 1; $x < $cout + 1; $x++) {
    $arraymysql[$x] = mysqli_fetch_row($result) ;
  }
}




?>
var $kiem_tra_fuction = <?php echo json_encode($kiem_tra_fuction); ?>;

// thêm user
if($kiem_tra_fuction=='Thêm người dùng')
{

var arrayjavascript_1 = <?php echo json_encode($cout_1); ?>;
if(arrayjavascript_1 != 1)
	{
 var arrayjavascript = <?php echo json_encode($arraymysql);	?>;
var countjavascript = arrayjavascript.length ;	
 
    for(var r=0;r<countjavascript;r++)
  {
   var x= document.getElementById('table1').insertRow(r);
    
   for(var c=0;c<4;c++)  
    {
     x.insertCell(c);
	   document.getElementById('table1').rows[r].cells[c].innerHTML =arrayjavascript[r][c]; 
    }
	
   } 
	
	}
	else
	{
	 document.getElementById('id_nhan').innerHTML=<?php if (isset($kiem_tra_loi_1)) {echo json_encode($kiem_tra_loi_1);	} else {echo json_encode("");} ?>;	
	}  
}

// xóa user--------------------------------------------------------
if($kiem_tra_fuction=='Xóa người dùng')
{
var arrayjavascript = <?php echo json_encode($arraymysql);	?>;
var countjavascript = arrayjavascript.length ;	
 
    for(var r=0;r<countjavascript;r++)
  {
   var x= document.getElementById('table1').insertRow(r);
    
   for(var c=0;c<4;c++)  
    {
     x.insertCell(c);
	   document.getElementById('table1').rows[r].cells[c].innerHTML =arrayjavascript[r][c]; 
    }
     x.insertCell(4); // tạo thêm cột xóa
	  document.getElementById('table1').rows[r].cells[4].innerHTML ="Xóa"; // insert các dòng vào cột xóa
	
   } 
   // gán fuction khi người dùng click vào nút xóa ---------------------------------------------------
   var table = document.getElementById("table1"),rIndex;
            for(var i = 0; i < table.rows.length; i++)
            {
               
              
                    table.rows[i].cells[4].onclick = function() //  dùng for để gán sự kiện click cho tất cả các dòng i cột xóa tạo ở trên
                    {
                        rIndex = this.parentElement.rowIndex; // lấy địa chỉ dòng được click vào
                        // hành động khi click nút xóa
                          // post to php with ajax
					    var hr = new XMLHttpRequest();
						hr.open("POST", "fuction_xoa__fuction_them_xoa_user__from_them_user.php", true);
						hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");; 
					    hr.send("post_1="+document.getElementById('table1').rows[rIndex].cells[0].textContent+ // username
								"&post_2="+ document.getElementById('table1').rows[rIndex].cells[1].textContent+ // password
							
								"&post_8="+document.getElementById("id_8").value); // trại
						hr.onload = function() {
						// Do whatever with response
						document.getElementById('table1').rows[rIndex].innerHTML = hr.responseText;	
						
						}
                        
                        
                    }
                
            }

}

</script>