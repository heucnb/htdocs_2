<html>

<fieldset class="fieldset_from_login" > 
<legend>Đăng xuất </legend>

<form action="fuction_logout.php" method="POST"  >
			
				<table  > 	
				<tr  >
				<td  class="center" ><input id="id_gui" type="button" value="Đăng Xuất"></td>						
				</tr>
				<tr  >
				<td  class="center" id="id_nhan" ></td>						
				</tr>
				</table  > 
			




</form>

</fieldset>



</html>
<script>



$(document).ready(function(){
	$("#id_gui").click(function(){
	    document.getElementById("id_nhan").innerHTML =  "<progress ></progress>"; 
		
		$.post("fuction_logout.php", {}, function(data){
			$("#id_nhan").html(data);	});
		         
          
	 	
	
	});
});



</script>

