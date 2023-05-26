
<script>


<?php


$so_ngay_khoa_du_lieu=$_POST["post1"];
$trai=$_POST["post8"];

	
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


// update dữ liệu
$sql_3 = "UPDATE login SET 
`khoa_ngay_sua_du_lieu` = '".$so_ngay_khoa_du_lieu."'

WHERE `trai`='".$trai."' 
";
$result_3 = mysqli_query($conn, $sql_3);	
// láy dữ liệu lên
$sql = "select `khoa_ngay_sua_du_lieu`,`trai_day_du` from login where `trai`='".$trai."' limit 1 ";
$result = mysqli_query($conn, $sql);
$cout = mysqli_num_rows($result);	
$arraymysql = [];
 $arraymysql[0] =[
"Số ngày khóa cũ",
"Công ty áp dụng"
];
for ($x = 1; $x < $cout + 1; $x++) {
    $arraymysql[$x] = mysqli_fetch_row($result) ;
  }
 
  
a:   
    
    





?>

document.getElementById('table1').innerHTML = "";

 var arrayjavascript = <?php echo json_encode($arraymysql);	?>;
var countjavascript = arrayjavascript.length ;	
 
    for(var r=0;r<countjavascript;r++)
  {
   var x= document.getElementById('table1').insertRow(r);
    
   for(var c=0;c<2;c++)  
    {
     x.insertCell(c);
	   document.getElementById('table1').rows[r].cells[c].innerHTML =arrayjavascript[r][c]; 
    }
	
   } 
   
   
   </script>