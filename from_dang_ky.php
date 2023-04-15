<!DOCTYPE html>
<html>
<body>


<table  > 	
	
	<tr>
		<td  > <table  > 							
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
				<td  >Tên công ty	</td>			
				</tr>
				<tr  >
				<td  ><input id="id_3"  type="text" />	</td>						
				</tr>
			
				<tr  >			
				<td  ><input id="id_gui" type="button" value="Đăng ký"> </td>				
				</tr>
				
				</table> 	 </td>			
							

			
		
																								<td id="id_nhan" ></td>	
				
		
	</tr>
</table>	
		



   




	

		
		
 



		
</body>
</html>
<script>

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
			$.post("fuction_dang_ky__from_dang_ky.php", {post1:$("#id_1").val() , post2:$("#id_2").val(), post3:$("#id_3").val() }, function(data){
			$("#id_nhan").html(data);	});
	
        }

		
	});
});


</script>