<!DOCTYPE html>
<html>

<body>
<fieldset class="fieldset_chung" > 
<legend><input id="id_chon_cot_in_csdl" type="button" value="Xem danh sách đàn heo"> </legend>
<form   >   
<table  > 	
	
	<tr>
		<td  > <table class = "danh_sach_dan_heo" > 							
				<tr  >			
				<td id="id_xem_danh_sach_1" >Danh sách heo phối</td>			
				</tr>
				<tr  >			
				<td id="id_xem_danh_sach_2" >Danh sách heo đẻ</td>			
				</tr>
				<tr  >			
				<td id="id_xem_danh_sach_3" >Danh sách heo cai sữa</td>			
				</tr>
				<tr  >			
				<td id="id_xem_danh_sach_4" >Danh sách heo vấn đề</td>					
				</tr>
				<tr  >			
				<td id="id_xem_danh_sach_5" >Danh sách heo hậu bị</td>			
				</tr>
				<tr  >			
				<td id="id_xem_danh_sach_6" >Danh sách heo đực</td>			
				</tr>
				
				<tr  >			
				<td id="id_xem_danh_sach_7" >Heo quá 123 ngày chưa đẻ</td>					
				</tr>
				<tr  >			
				<td id="id_xem_danh_sach_8" >Heo quá 35 ngày chưa cai sữa</td>					
				</tr>
				<tr  >			
				<td id="id_xem_danh_sach_9" >Heo cai sữa >7 ngày chưa phối</td>			
				</tr>
				<tr  >			
				<td id="id_xem_danh_sach_10" >Heo lốc, xảy thai 2 lần liên tiếp</td>			
				</tr>
				<tr  >			
				<td id="id_xem_danh_sach_11" >Heo đẻ trung bình 2 lứa dưới 7 con</td>			
				</tr>
		
				</table> </td>			
							

			
		
																								<td id="id_nhan" ></td>	
				
		
	</tr>
</table>	
		



   

</form>		


</fieldset>



	

		
		
 



		
</body>
</html>
<script>
// phối
$(document).ready(function(){
	$("#id_xem_danh_sach_1").click(function(){

	        document.getElementById("id_nhan").innerHTML =  "<progress ></progress>"; 
			$.post("fuction_danh_sach_heo__from_xem_danh_sach_dan_nai_duc.php", { post1:$("#id_xem_danh_sach_1").text(), post8:$("#id_8").val() }, function(data){
			$("#id_nhan").html(data);	});
	
        

		
	});
});

// đẻ
$(document).ready(function(){
	$("#id_xem_danh_sach_2").click(function(){

	        document.getElementById("id_nhan").innerHTML =  "<progress ></progress>"; 
			$.post("fuction_danh_sach_heo__from_xem_danh_sach_dan_nai_duc.php", { post1:$("#id_xem_danh_sach_2").text(), post8:$("#id_8").val() }, function(data){
			$("#id_nhan").html(data);	});
			
					
	});
});

	
 // cai sữa
$(document).ready(function(){
	$("#id_xem_danh_sach_3").click(function(){

	        document.getElementById("id_nhan").innerHTML =  "<progress ></progress>"; 
			$.post("fuction_danh_sach_heo__from_xem_danh_sach_dan_nai_duc.php", { post1:$("#id_xem_danh_sach_3").text(), post8:$("#id_8").val() }, function(data){
			$("#id_nhan").html(data);	});
	       

		
	});
});


 // vấn đề
$(document).ready(function(){
	$("#id_xem_danh_sach_4").click(function(){

	        document.getElementById("id_nhan").innerHTML =  "<progress ></progress>"; 
			$.post("fuction_danh_sach_heo__from_xem_danh_sach_dan_nai_duc.php", { post1:$("#id_xem_danh_sach_4").text(), post8:$("#id_8").val() }, function(data){
			$("#id_nhan").html(data);	});
	       

		
	});
});

 // hậu bị
$(document).ready(function(){
	$("#id_xem_danh_sach_5").click(function(){

	        document.getElementById("id_nhan").innerHTML =  "<progress ></progress>"; 
			$.post("fuction_danh_sach_heo__from_xem_danh_sach_dan_nai_duc.php", { post1:$("#id_xem_danh_sach_5").text(), post8:$("#id_8").val() }, function(data){
			$("#id_nhan").html(data);	});
	       

		
	});
});
 // đực
$(document).ready(function(){
	$("#id_xem_danh_sach_6").click(function(){

	        document.getElementById("id_nhan").innerHTML =  "<progress ></progress>"; 
			$.post("fuction_danh_sach_heo__from_xem_danh_sach_dan_nai_duc.php", { post1:$("#id_xem_danh_sach_6").text(), post8:$("#id_8").val() }, function(data){
			$("#id_nhan").html(data);	});
	       

		
	});
});

 // quá 123 ngày chưa đẻ
$(document).ready(function(){
	$("#id_xem_danh_sach_7").click(function(){

	        document.getElementById("id_nhan").innerHTML =  "<progress ></progress>"; 
			$.post("fuction_danh_sach_heo__from_xem_danh_sach_dan_nai_duc.php", { post1:$("#id_xem_danh_sach_7").text(), post8:$("#id_8").val() }, function(data){
			$("#id_nhan").html(data);	});
	       

		
	});
});

// quá 35 ngày chưa cai
$(document).ready(function(){
	$("#id_xem_danh_sach_8").click(function(){

	        document.getElementById("id_nhan").innerHTML =  "<progress ></progress>"; 
			$.post("fuction_danh_sach_heo__from_xem_danh_sach_dan_nai_duc.php", { post1:$("#id_xem_danh_sach_8").text(), post8:$("#id_8").val() }, function(data){
			$("#id_nhan").html(data);	});
	       

		
	});
});

// heo cai sữa quá 7 ngày chưa phối
$(document).ready(function(){
	$("#id_xem_danh_sach_9").click(function(){

	        document.getElementById("id_nhan").innerHTML =  "<progress ></progress>"; 
			$.post("fuction_danh_sach_heo__from_xem_danh_sach_dan_nai_duc.php", { post1:$("#id_xem_danh_sach_9").text(), post8:$("#id_8").val() }, function(data){
			$("#id_nhan").html(data);	});
	       

		
	});
});

// lốc 2 lần liên tiếp
$(document).ready(function(){
	$("#id_xem_danh_sach_10").click(function(){

	        document.getElementById("id_nhan").innerHTML =  "<progress ></progress>"; 
			$.post("fuction_danh_sach_heo__from_xem_danh_sach_dan_nai_duc.php", { post1:$("#id_xem_danh_sach_10").text(), post8:$("#id_8").val() }, function(data){
			$("#id_nhan").html(data);	});
	       

		
	});
});

// trung bình 2 lứa đẻ dưới 7 con
$(document).ready(function(){
	$("#id_xem_danh_sach_11").click(function(){

	        document.getElementById("id_nhan").innerHTML =  "<progress ></progress>"; 
			$.post("fuction_danh_sach_heo__from_xem_danh_sach_dan_nai_duc.php", { post1:$("#id_xem_danh_sach_11").text(), post8:$("#id_8").val() }, function(data){
			$("#id_nhan").html(data);	});
	       

		
	});
});


</script>