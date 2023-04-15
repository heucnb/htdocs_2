<!DOCTYPE html>
<html>
<body>
<fieldset class="fieldset_chung" > 
<legend>Tìm kiếm </legend>

<table  > 	
	
	<tr>
		<td  > <table  > 							
				
				<tr  >
				<td  >Mã số tai:	</td>		<td  ><input id="id_1_research"  type="text" />	</td>						
				</tr>
				<tr  >			
				<td colspan="2" >	<input id="id_gui_fuction_research" type="button" value="Tìm kiếm"> </td>					
				</tr>
				
				
				
				<tr  >			
				<td  ></td>		
				</tr>			
				<tr  >
				<td  > Từ ngày: </td><td  ><input id="id_2_research"  type="date" /> </td>						
				</tr>			
								
				<tr  >
				<td  > Đến ngày: </td><td  ><input id="id_3_research" type="date" /> </td>						
				</tr>	
				
				<tr  >			
				<td  >	 </td>					
				</tr>			
							
				<tr  >			
				<td colspan="2" >	<input id="id_gui_fuction_research_date" type="button" value="Tìm kiếm"> </td>					
				</tr>			
							
						
				
				</table> </td>			
							

			
		
																								<td id="id_nhan_research" ></td>	
				
		
	</tr>
</table>	
		



   




</fieldset>



	

		
		
 



		
</body>
</html>
<script>

$(document).ready(function(){
	$("#id_gui_fuction_research").click(function(){
	var dem_string = $("#id_8").val();	
var count_dem_string = dem_string.length;
	
	if (
		$("#id_1_research").val() == null   ||  count_dem_string > 50 ||  $("#id_1_research").val() == "" 
		) 
		{
            document.getElementById('id_nhan_research').innerHTML="Bạn phải điền đầy đủ thông tin hoặc lỗi chọn công ty có chứa *";
        } 
		else 
	    {
	        document.getElementById("id_nhan_research").innerHTML =  "<progress ></progress>"; 
			$.post("fuction--from_research.php", {post1:$("#id_1_research").val() ,post4:$("#id_chon_cot_in_csdl").val(),  post8:$("#id_8").val() }, function(data){
			$("#id_nhan_research").html(data);	});
	
        }

		
	});
});

$(document).ready(function(){
	$("#id_gui_fuction_research_date").click(function(){
		var dem_string = $("#id_8").val();	
var count_dem_string = dem_string.length;
		
	if (
		$("#id_2_research").val() == null || $("#id_2_research").val() == "" ||
		$("#id_3_research").val() == null  ||  count_dem_string > 50  || $("#id_3_research").val() == "" 
		) 
		{
            document.getElementById('id_nhan_research').innerHTML="Bạn phải điền đầy đủ thông tin hoặc lỗi chọn công ty có chứa *";
        } 
		else 
	    {
	         document.getElementById("id_nhan_research").innerHTML =  "<progress ></progress>"; 
			$.post("fuction--from_research_date_to_date.php", { post2:$("#id_2_research").val(), post3:$("#id_3_research").val(), post8:$("#id_8").val(), post4:$("#id_chon_cot_in_csdl").val() }, function(data){
			$("#id_nhan_research").html(data);	});
	
        }

		
	});
});


</script>