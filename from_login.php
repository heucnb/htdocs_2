<html>

<fieldset class="fieldset_from_login" > 
<legend>Đăng nhập </legend>

<form action="fuction_login.php" method="POST"  ><br>
			
				<table  > 	
				<tr  >
				<td  >Username:</td><td ><input type="text"  name="username_" id = "id_1" value = "<?php if(isset($_COOKIE['username_cookie'])){echo $_COOKIE['username_cookie'];} else {echo "";} ?>"></td>						
				</tr>
				
				<tr  >
				<td >Password:</td><td ><input type="password" name="password_" id = "id_2" value = "<?php if(isset($_COOKIE['password_cookie'])){echo $_COOKIE['password_cookie'];} else {echo "";} ?>"></td>						
				</tr>
				
				
				
				
				<td colspan="2" ><input type="checkbox"  onclick="show_hidepassword()"  >Hiện password. </td>						
				</tr>
				
				<tr  >
				<td  colspan="2" class="center" ><input id="id_gui" type="button" value="Đăng Nhập"></td>						
				</tr>
				<tr  >
				<td  colspan="2" class="center" id="id_nhan" ></td>						
				</tr>
				
				</table  > 
			




</form>

</fieldset>



</html>
<script>
// hiện ẩn password
 function show_hidepassword() {
  var x = document.getElementById("id_2");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}



$(document).ready(function(){
	$("#id_gui").click(function(){
	    
	    document.getElementById("id_nhan").innerHTML =  "<progress ></progress>"; 
		
		$.post("fuction_login.php", {post1:$("#id_1").val() , post2:$("#id_2").val() }, function(data){
			$("#id_nhan").html(data);	});
			
		
	
	});
});



</script>

