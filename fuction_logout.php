

<script>



<?php
	setcookie("username_cookie","", time() + (86400 * 5), "/");
	setcookie("password_cookie", "", time() + (86400 * 5), "/");	
?>
var select = document.getElementById("id_8") ;
var select_length = select.length;
 

for (var i=0; i <= select_length ; i++)
{
  select.remove(select.i);
}
document.getElementById('id_td_1').innerHTML="Đăng nhập" ;	
document.getElementById('id_nhan--index').innerHTML="";
document.getElementById('id_td_15').style.display= 'none';

 document.getElementById('id_them_user').style.display= 'none'; 
 document.getElementById('id_khoa_ngay_nhap_du_lieu').style.display= 'none'; 
	      

</script>