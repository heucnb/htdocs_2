<!DOCTYPE html>
<html>

<body>
<fieldset id="fieldset_bao_cao_phoi" class="fieldset_chung" > 
<legend>Báo Cáo theo hệ thống trại</legend>
	<form action="fuction_tính_theo_phối--from_báo_cáo_tháng.php.php" >

  
	
	
	
	<table   > 
	
	<tr>
		<td><select id="id_6_year" onclick="myFunction()">
									<option id="id_6_1" value=""></option>
									<option id="id_6_2" value=""></option>
									<option id="id_6_3" value=""></option>
									<option id="id_6_4" value=""></option>
									<option id="id_6_5" value=""></option>
									<option id="id_6_6"value=""></option>
									<option id="id_6_7"value=""></option>
									<option id="id_6_8" value=""></option>
									<option id="id_6_9" value=""></option>
									<option id="id_6_10" value=""></option>
			
							</select> <input id="id_gui" type="button" value="Tra theo tháng"> <input id="id_gui_1" type="button" value="Tra theo tuần"></td>
	
	</tr>
	<tr>
		<td id="id_nhan"  ></td>
	</tr>

	</table>	
		
		
		
			
 
		

		

		
</form>
		
</fieldset>








</body>
</html>
<script>
var year = new Date().getFullYear();
 document.getElementById("id_6_1").innerHTML = year;
 document.getElementById('id_6_1').value = year ;
			  

function myFunction() {
var n = new Date().getFullYear();
  document.getElementById("id_6_10").innerHTML = n-9;
  document.getElementById("id_6_10").value = n -9;
  document.getElementById("id_6_9").innerHTML = n-8;
  document.getElementById("id_6_9").value = n-8;
   document.getElementById("id_6_8").innerHTML = n-7;
  document.getElementById("id_6_8").value = n-7;
   document.getElementById("id_6_7").innerHTML = n-6;
  document.getElementById("id_6_7").value = n-6;
  document.getElementById("id_6_6").innerHTML = n-5;
  document.getElementById("id_6_6").value = n-5;
   document.getElementById("id_6_5").innerHTML = n-4;
  document.getElementById("id_6_5").value = n-4;
  document.getElementById("id_6_4").innerHTML = n-3;
  document.getElementById("id_6_4").value = n-3;
  document.getElementById("id_6_3").innerHTML = n-2;
  document.getElementById("id_6_3").value = n-2;
  document.getElementById("id_6_2").innerHTML = n-1;
  document.getElementById("id_6_2").value = n-1;
  document.getElementById("id_6_1").innerHTML = n;
  document.getElementById("id_6_1").value = n;
	 
  
}

$(document).ready(function(){
	$("#id_gui").click(function(){
		
		$.post("fuction_thang--from_bao_cao_theo_he_thong_trai.php", {post1:$("#id_6_year").val()  , post8:$("#id_8").val()}, function(data){
			$("#id_nhan").html(data);	});
		document.getElementById("id_nhan").className = "with_bao_cao_thang";
	});
});

$(document).ready(function(){
	$("#id_gui_1").click(function(){
		
		$.post("fuction_tuan--from_bao_cao_theo_he_thong_trai.php", {post1:$("#id_6_year").val()  , post8:$("#id_8").val()}, function(data){
			$("#id_nhan").html(data);	});
			
			document.getElementById("id_with_200").className = "with_bao_cao_tuan";
		
		
	
	});
});


</script>