<!DOCTYPE html>
<html>
<body>
<input id="id_gui_research" type="button" value="Tìm kiếm, sửa, xóa"/> 
<fieldset class="fieldset_chung" > 
<legend><input id="id_chon_cot_in_csdl" type="button" value="Sổ heo vấn đề"> </legend>

<table  > 	
	
	<tr>
		<td  > <table  > 							
				<tr  >			
				<td  >Mã thẻ nái:	</td>			
				</tr>
		    	<tr  >
				<td  ><input id="id_1" name="name_1" type="text" />	</td>	<td  ><label  id="id_tim_1"  type="text" >Nhập theo số tai gợi ý</label><input type="checkbox" id="id_checkbox"  >	</td>						
				</tr>


				
				<tr  >			
				<td  >Ngày xảy ra vấn đề:	</td>			
				</tr>			
				<tr  >
				<td  > 	<input id="id_2" name="name_2" type="date" /> </td>						
				</tr>			
							
							
				<tr  >			
				<td  >Loại vấn đề:	</td>			
				</tr>			
				<tr  >
				<td  > <select id="id_3" name="name_3">
													<option value="R">Lốc</option>
														<option value="Rm">Lốc mủ</option>
														<option value="A">Xảy thai</option>
														<option value="K">Không thai</option>
														<option value="Nguyên nhân khác">Nguyên nhân khác</option>
						</select></td>						
				</tr>						
							
							
				
							
							
				
				
							
				<tr  >			
				<td  ><input id="id_gui" type="button" value="Thêm">	</td>				
				</tr>
				
				</table> </td>			
							

			
		
																								<td id="id_nhan" ></td>	
				
		
	</tr>
</table>	
		



   




</fieldset>



	

		
		
 



		
</body>
</html>
<script>
<?php
		

$trai=$_POST["post8"];

// kết nối csdl	
include "setup/fuction_ket_noi_csdl.php";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
	if (!$conn) {
	die("Connection failed: " . mysqli_connect_error());
	}



 // sql lấy dữ liệu
	$sql_4_1 = "
SELECT `so tai`  FROM `sheet1` WHERE `lan phoi` = 1 AND `ngay ban loai chet` IS NULL AND `trai` = '".$trai."'
			 ";
$result_4_1 = mysqli_query($conn, $sql_4_1);
$cout_4_1 = mysqli_num_rows($result_4_1);
$arraymysql_4_1 = [];
for ($x = 0; $x < $cout_4_1; $x++) {
    $arraymysql_4_1[$x] = mysqli_fetch_row($result_4_1) ;
  } 
 
 
 



?>	





/* phím enter */
$(document).ready(function(){
    $('#id_1').keypress(function(){
    var x = event.keyCode;
  if (x == 13) {
	  if(document.getElementById("id_checkbox").checked == true)
	  { document.getElementById('id_1').value =  document.getElementById('id_tim_1').innerHTML ;}
	
    document.getElementById("id_2").focus();
  }
    });
});

$(document).ready(function(){
    $('#id_2').keypress(function(){
    var x = event.keyCode;
  if (x == 13) {
    document.getElementById("id_3").focus();
  }
    });
});
 
$(document).ready(function(){
    $('#id_3').keypress(function(event ){
	 event.preventDefault();	
    var x = event.keyCode;
  if (x == 13) {
    document.getElementById("id_gui").focus();
  }
    });
});







var arrayjavascript_so_tai = <?php echo json_encode($arraymysql_4_1); ?>; // ***** gán mảng 2 chiều từ php vào javácript
// biến mảng 2 chiều 1 cột thành string sau đó tìm từ ở input gắn với sự kiện thay đổi ngay lập tức
$(document).ready(function(){
$('#id_1').each(function() {
    // Save current value of element
    $(this).data('oldVal', $(this));
    
    // Look for changes in the value
    $(this).bind("propertychange keyup input paste", function(event){
       // If value has changed...
       if ($(this).data('oldVal') != $(this).val()) {
        // Updated stored value
        $(this).data('oldVal', $(this).val());
        
        // Do action: paste code mình viết ở đây
    var gia_tri_tim = document.getElementById('id_1').value;			
	var chuoi_ban_dau = "," + arrayjavascript_so_tai.join();
	var gia_tri_tim =new RegExp("," + "[A-Z]*[0-9]*" +gia_tri_tim,'i');
	var vi_tri_tim_thay = chuoi_ban_dau.search(gia_tri_tim);
	var chuoi_cat_ra = chuoi_ban_dau.substr(vi_tri_tim_thay,20);
	var mang_cat_ra_tu_chuoi = chuoi_cat_ra.split(",");
	 document.getElementById('id_tim_1').innerHTML = mang_cat_ra_tu_chuoi[1];	

      }
    });
  });
});






$(document).ready(function(){
	$("#id_gui").click(function(){
		var dem_string = $("#id_8").val();	
var count_dem_string = dem_string.length;

		
	if (
		$("#id_1").val() == null || $("#id_1").val() == "" ||
		$("#id_2").val() == null || $("#id_2").val() == "" ||
		$("#id_3").val() == null || $("#id_3").val() == "" ||
		count_dem_string > 50 ||
		$("#id_8").val() == null || $("#id_8").val() == ""
		) 
		{
           document.getElementById('id_nhan').innerHTML="Bạn phải điền đầy đủ thông tin hoặc lỗi chọn công ty có chứa *";	
        } 
		else 
	    {
	        document.getElementById("id_nhan").innerHTML =  "<progress ></progress>"; 
			$.post("fuction_thêm--from_heo_vấn_đề.php", {post1:$("#id_1").val() , post2:$("#id_2").val(), post3:$("#id_3").val(),  post8:$("#id_8").val() }, function(data){
			$("#id_nhan").html(data);	});
	
        }

		
	});
});

/* nút thêm, sửa, xóa*/
$(document).ready(function(){
	$("#id_gui_research").click(function(){
		
	        document.getElementById("id_nhan").innerHTML =  "<progress ></progress>"; 
			$.post("from_research.php", { }, function(data){
			$("#id_nhan").html(data);	});
	
    
		
	});
});


</script>