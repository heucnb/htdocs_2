<!DOCTYPE html>
<html>

<body>
<input id="id_xoa_nguoi_dung" type="button" value="Xóa người dùng"/> 
<fieldset class="fieldset_chung" > 
<legend><input id="id_legend" type="button" value="Thêm người dùng"> </legend>
<form   > 
<table  > 	
	
	<tr  >
		<td > <table  > 							
				<tr  >			
				<td  >Tên đăng nhập	</td>			
				</tr>
				<tr  >
				<td  ><input id="id_1"  type="text" />	</td>						
				</tr>
				<tr  >			
				<td  >Password	</td>			
				</tr>
				<tr  >
				<td  ><input id="id_2"  type="text" />	</td>						
				</tr>
				<td  > Cấp quyền thêm, xóa người dùng và </br>quyền khóa số ngày được thêm, sữa dữ liệu</td>			
				</tr>
				<td  > <select id="id_3" >
													<option value="0">Không cấp quyền</option>
														<option  value="1">Cấp quyền</option>
														
						</select></td>						
			
				<tr  >			
				<td  ><input id="id_gui" type="button" value="Thêm"> </td>				
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

var select_id_8 = document.getElementById('id_8'); 
// lấy text của option của select html
var trai = select_id_8.options[select_id_8.selectedIndex].text;   
var ma_trai = select_id_8.value ;	    

$(document).ready(function(){
	$("#id_gui").click(function(){
		
	if (
		$("#id_1").val() == null || $("#id_1").val() == "" ||
		$("#id_2").val() == null || $("#id_2").val() == "" ||
		$("#id_3").val() == null || $("#id_3").val() == "" 
	
		) 
		{
           document.getElementById('id_nhan').innerHTML="Bạn phải điền đầy đủ thông tin không được để trống";	
        } 
		else 
	    {
	        document.getElementById("id_nhan").innerHTML =  "<progress ></progress>"; 
			$.post("fuction_them_xoa_user__from_them_user.php", {post1:$("#id_1").val() , post2:$("#id_2").val(), post3:$("#id_3").val() ,post8:ma_trai,post9:trai , post10:$("#id_legend").val() }, function(data){
			$("#id_nhan").html(data);	});
	
        }

		
	});
});



$(document).ready(function(){
	$("#id_xoa_nguoi_dung").click(function(){
		
	if (
		$("#id_8").val() == null || $("#id_8").val() == ""
	
	
		) 
		{
           document.getElementById('id_nhan').innerHTML="Bạn chưa đăng ký hoặc đăng nhập";	
        } 
		else 
	    {
	        document.getElementById("id_nhan").innerHTML =  "<progress ></progress>"; 
			$.post("fuction_them_xoa_user__from_them_user.php", {post8:ma_trai,post9:trai , post10:$("#id_xoa_nguoi_dung").val() }, function(data){
			$("#id_nhan").html(data);	});
	
        }

		
	});
});

</script>