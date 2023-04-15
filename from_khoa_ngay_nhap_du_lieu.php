<!DOCTYPE html>
<html>

<body>

    
<fieldset class="fieldset_chung" > 
<legend><input id="id_legend" type="button" value="Khóa ngày sửa dữ liệu"> </legend>
<form   > 
<p> Dữ liệu trước ngày hôm nay - số ngày khóa sẽ không thêm, sửa, hay xóa được nữa.</p>
<table  id="table1" class="table_nhận_dữ_liệu" > 
   
</table>
<table  > 	
	
	<tr  >
		<td > <table  > 							
				<tr  >			
				<td  >Số ngày khóa mới	</td>			
				</tr>
				<tr  >
				<td  ><input id="id_1"  type="text" />	</td>						
				</tr>
			
				<td  ><input id="id_gui" type="button" value="Cập nhật"> </td>				
				</tr>
				
				</table> 	 </td>			
							

			
		
																								<td id="id_nhan" ></td>	
				
		
	</tr>
</table>	
		



</form>		


</fieldset>

   




	

		
		
 



		
</body>
</html>












<script>


<?php


 
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

// láy dữ liệu lên
$sql = "select if(`khoa_ngay_sua_du_lieu`=0,999999,`khoa_ngay_sua_du_lieu`),`trai_day_du` from login where `trai_value`='".$trai."' limit 1 ";
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
   
// khóa ngày sửa dữ liệu--------------------------------------   
   
 var select_id_8 = document.getElementById('id_8'); 
// lấy text của option của select html
var trai = select_id_8.options[select_id_8.selectedIndex].text;   
var ma_trai = select_id_8.value ;	    

$(document).ready(function(){
	$("#id_gui").click(function(){
		
	if (
		$("#id_1").val() == null || $("#id_1").val() == "" || isNaN(Number($("#id_1").val())) || $("#id_1").val() < 1
	
	
		) 
		{
           document.getElementById('id_nhan').innerHTML="Số ngày khóa phải là một số >0";	
        } 
		else 
	    {
	        document.getElementById("id_nhan").innerHTML =  "<progress ></progress>"; 
			$.post("fuction__from_khoa_ngay_nhap_du_lieu.php", {post1:$("#id_1").val() ,post8:ma_trai }, function(data){
			$("#id_nhan").html(data);	});
	
        }

		
	});
});
  
	

</script>