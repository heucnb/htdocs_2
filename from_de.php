<!DOCTYPE html>
<html>

<body>
<input id="id_gui_research" type="button" value="Tìm kiếm, sửa, xóa"/> 
<fieldset class="fieldset_chung" > 
<legend><input id="id_chon_cot_in_csdl" type="button" value="Sổ đẻ"> </legend>
<form   >   
<table  > 	
	
	<tr>
		<td  > <table  > 							
				<tr  >			
				<td  >Mã thẻ nái:	</td>		                           <td  ></td>                                                                                                                              <td  >Lý lịch heo con</td>		
				</tr>
				<tr  >
				<td  ><input id="id_1" name="name_1" type="text" />	</td> <td  ><label  id="id_tim_1"  type="text" >Nhập theo số tai gợi ý</label><input type="checkbox" id="id_checkbox"  >	</td>			<td  > <input id="id_cat_tai_1"  type="text" />	 </td>						
				</tr>

				
				<tr  >			
				<td  >Ngày đẻ:	</td>										<td  ></td>                                                                                                                             <td  > <input id="id_cat_tai_2"  type="text" />	 </td>		
				</tr>			
				<tr  >
				<td  > 	<input id="id_2" name="name_2" type="date" /> </td>	<td  ></td>                                                                                                                         	<td  > <input id="id_cat_tai_3"  type="text" />	 </td>					
				</tr>			
							
							
				<tr  >			
				<td  >Số con sinh ra:	</td>								<td  ></td>                                                                                                                         	<td  > <input id="id_cat_tai_4"  type="text" />	 </td>	
				</tr>			
				<tr  >
				<td  > <input id="id_3" name="name_3" type="text" /> </td>	<td  ></td>                                                                                                                         	<td  > <input id="id_cat_tai_5"  type="text" />	 </td>					
				</tr>						
							
							
				<tr  >			
				<td  >Chết trắng:	</td>									<td  ></td>                                                                                                                         	<td  > <input id="id_cat_tai_6"  type="text" />	 </td>	
				</tr>			
				<tr  >
				<td  > <input id="id_4" name="name_4" type="text" /></td>	<td  ></td>                                                                                                                         	<td  > <input id="id_cat_tai_7"  type="text" />	 </td>						
				</tr>				
							
							
				<tr  >			
				<td  >Khô:	</td>											<td  ></td>                                                                                                                         	<td  > <input id="id_cat_tai_8"  type="text" />	 </td>	
				</tr>			
				<tr  >
				<td  > <input id="id_5" name="name_5" type="text" /></td>	<td  ></td>                                                                                                                         	<td  > <input id="id_cat_tai_9"  type="text" />	 </td>						
				</tr>				
							
							
				<tr  >			
				<td  >Tật:</td>												<td  ></td>                                                                                                                         	<td  > <input id="id_cat_tai_10"  type="text" />	 </td>	
				</tr>
				<tr  >
				<td  > <input id="id_6" name="name_6" type="text" /></td>	<td  ></td>                                                                                                                         	<td  > <input id="id_cat_tai_11"  type="text" />	 </td>						
				</tr>
				
				
				<tr  >			
				<td  >Còi:</td>												<td  ></td>                                                                                                                         	<td  > <input id="id_cat_tai_12"  type="text" />	 </td>	
				</tr>
				<tr  >
				<td  > <input id="id_7" name="name_7" type="text" /></td>	<td  ></td>                                                                                                                         	<td  > <input id="id_cat_tai_13"  type="text" />	 </td>						
				</tr>
				
				<tr  >			
				<td  >Trọng lượng sơ sinh:</td>								 <td  ></td>  	                                                                                                                    	<td  > <input id="id_cat_tai_14"  type="text" />	 </td>	
				</tr>
				<tr  >
				<td  > <input id="id_9" name="name_9" type="text" /></td>	<td  ></td>                                                                                                                         	<td  > <input id="id_cat_tai_15"  type="text" />	 </td>						
				</tr>
				<tr  >			
				<td  >Số heo đực</td>								    	<td  ></td>                                                                                                                         	<td  > <input id="id_cat_tai_16"  type="text" />	 </td>	
				</tr>
				<tr  >
				<td  > <input id="id_10" type="text" />	 </td>			    <td  ></td>                                                                                                                         	<td  > <input id="id_cat_tai_17"  type="text" />	 </td>				
				</tr>
				
																		
				
							
				<tr  >			
				<td  ><input id="id_gui" type="button" value="Thêm">	</td>				
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





 document.getElementById('id_cat_tai_2').style.display= 'none';
document.getElementById('id_cat_tai_3').style.display= 'none';
document.getElementById('id_cat_tai_4').style.display= 'none';
document.getElementById('id_cat_tai_5').style.display= 'none';
document.getElementById('id_cat_tai_6').style.display= 'none';
document.getElementById('id_cat_tai_7').style.display= 'none';
document.getElementById('id_cat_tai_8').style.display= 'none';
document.getElementById('id_cat_tai_9').style.display= 'none';
document.getElementById('id_cat_tai_10').style.display= 'none';
document.getElementById('id_cat_tai_11').style.display= 'none';
document.getElementById('id_cat_tai_12').style.display= 'none';
document.getElementById('id_cat_tai_13').style.display= 'none';
document.getElementById('id_cat_tai_14').style.display= 'none';
document.getElementById('id_cat_tai_15').style.display= 'none';
document.getElementById('id_cat_tai_16').style.display= 'none';
document.getElementById('id_cat_tai_17').style.display= 'none';
/* ẩn hiện lý lịch */
$(document).ready(function(){
	$("#id_cat_tai_1").keypress(function(){
	     document.getElementById('id_cat_tai_2').style.display= 'inline';	
	});
});

$(document).ready(function(){
	$("#id_cat_tai_2").keypress(function(){
	     document.getElementById('id_cat_tai_3').style.display= 'inline';	
	});
});

$(document).ready(function(){
	$("#id_cat_tai_3").keypress(function(){
	     document.getElementById('id_cat_tai_4').style.display= 'inline';	
	});
});

$(document).ready(function(){
	$("#id_cat_tai_4").keypress(function(){
	     document.getElementById('id_cat_tai_5').style.display= 'inline';	
	});
});
$(document).ready(function(){
	$("#id_cat_tai_5").keypress(function(){
	     document.getElementById('id_cat_tai_6').style.display= 'inline';	
	});
});
$(document).ready(function(){
	$("#id_cat_tai_6").keypress(function(){
	     document.getElementById('id_cat_tai_7').style.display= 'inline';	
	});
});
$(document).ready(function(){
	$("#id_cat_tai_7").keypress(function(){
	     document.getElementById('id_cat_tai_8').style.display= 'inline';	
	});
});
$(document).ready(function(){
	$("#id_cat_tai_8").keypress(function(){
	     document.getElementById('id_cat_tai_9').style.display= 'inline';	
	});
});
$(document).ready(function(){
	$("#id_cat_tai_9").keypress(function(){
	     document.getElementById('id_cat_tai_10').style.display= 'inline';	
	});
});
$(document).ready(function(){
	$("#id_cat_tai_10").keypress(function(){
	     document.getElementById('id_cat_tai_11').style.display= 'inline';	
	});
});
$(document).ready(function(){
	$("#id_cat_tai_11").keypress(function(){
	     document.getElementById('id_cat_tai_12').style.display= 'inline';	
	});
});

$(document).ready(function(){
	$("#id_cat_tai_12").keypress(function(){
	     document.getElementById('id_cat_tai_13').style.display= 'inline';	
	});
});

$(document).ready(function(){
	$("#id_cat_tai_13").keypress(function(){
	     document.getElementById('id_cat_tai_14').style.display= 'inline';	
	});
});

$(document).ready(function(){
	$("#id_cat_tai_14").keypress(function(){
	     document.getElementById('id_cat_tai_15').style.display= 'inline';	
	});
});

$(document).ready(function(){
	$("#id_cat_tai_15").keypress(function(){
	     document.getElementById('id_cat_tai_16').style.display= 'inline';	
	});
});

$(document).ready(function(){
	$("#id_cat_tai_16").keypress(function(){
	     document.getElementById('id_cat_tai_17').style.display= 'inline';	
	});
});

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
    $('#id_3').keypress(function(){
    var x = event.keyCode;
  if (x == 13) {
    document.getElementById("id_4").focus();
  }
    });
});

$(document).ready(function(){
    $('#id_4').keypress(function(){
    var x = event.keyCode;
  if (x == 13) {
    document.getElementById("id_5").focus();
  }
    });
});

$(document).ready(function(){
    $('#id_5').keypress(function(){
    var x = event.keyCode;
  if (x == 13) {
    document.getElementById("id_6").focus();
  }
    });
});

$(document).ready(function(){
    $('#id_6').keypress(function(){
    var x = event.keyCode;
  if (x == 13) {
    document.getElementById("id_7").focus();
  }
    });
});
$(document).ready(function(){
    $('#id_7').keypress(function(){
    var x = event.keyCode;
  if (x == 13) {
    document.getElementById("id_9").focus();
  }
    });
});
$(document).ready(function(){
    $('#id_9').keypress(function(){
    var x = event.keyCode;
  if (x == 13) {
    document.getElementById("id_10").focus();
  }
    });
});

$(document).ready(function(){
    $('#id_10').keypress(function(){
    var x = event.keyCode;
  if (x == 13) {
    document.getElementById("id_cat_tai_1").focus();
  }
    });
});

$(document).ready(function(){
    $('#id_cat_tai_1').keypress(function(){
    var x = event.keyCode;
  if (x == 13) {
    document.getElementById("id_cat_tai_2").focus();
  }
    });
});

$(document).ready(function(){
    $('#id_cat_tai_2').keypress(function(){
    var x = event.keyCode;
  if (x == 13 && document.getElementById('id_cat_tai_2').value == "" ) {
    document.getElementById("id_gui").focus();
  }
  else
  {
	document.getElementById("id_cat_tai_3").focus();  
  }
  
    });
});
$(document).ready(function(){
    $('#id_cat_tai_3').keypress(function(){
    var x = event.keyCode;
  if (x == 13 && document.getElementById('id_cat_tai_3').value == "" ) {
    document.getElementById("id_gui").focus();
  }
  else
  {
	document.getElementById("id_cat_tai_4").focus();  
  }
  
    });
});

$(document).ready(function(){
    $('#id_cat_tai_4').keypress(function(){
    var x = event.keyCode;
  if (x == 13 && document.getElementById('id_cat_tai_4').value == "" ) {
    document.getElementById("id_gui").focus();
  }
  else
  {
	document.getElementById("id_cat_tai_5").focus();  
  }
  
    });
});

$(document).ready(function(){
    $('#id_cat_tai_5').keypress(function(){
    var x = event.keyCode;
  if (x == 13 && document.getElementById('id_cat_tai_5').value == "" ) {
    document.getElementById("id_gui").focus();
  }
  else
  {
	document.getElementById("id_cat_tai_6").focus();  
  }
  
    });
});

$(document).ready(function(){
    $('#id_cat_tai_6').keypress(function(){
    var x = event.keyCode;
  if (x == 13 && document.getElementById('id_cat_tai_6').value == "" ) {
    document.getElementById("id_gui").focus();
  }
  else
  {
	document.getElementById("id_cat_tai_7").focus();  
  }
  
    });
});

$(document).ready(function(){
    $('#id_cat_tai_7').keypress(function(){
    var x = event.keyCode;
  if (x == 13 && document.getElementById('id_cat_tai_7').value == "" ) {
    document.getElementById("id_gui").focus();
  }
  else
  {
	document.getElementById("id_cat_tai_8").focus();  
  }
  
    });
});

$(document).ready(function(){
    $('#id_cat_tai_8').keypress(function(){
    var x = event.keyCode;
  if (x == 13 && document.getElementById('id_cat_tai_8').value == "" ) {
    document.getElementById("id_gui").focus();
  }
  else
  {
	document.getElementById("id_cat_tai_9").focus();  
  }
  
    });
});
$(document).ready(function(){
    $('#id_cat_tai_9').keypress(function(){
    var x = event.keyCode;
  if (x == 13 && document.getElementById('id_cat_tai_9').value == "" ) {
    document.getElementById("id_gui").focus();
  }
  else
  {
	document.getElementById("id_cat_tai_10").focus();  
  }
  
    });
});

$(document).ready(function(){
    $('#id_cat_tai_10').keypress(function(){
    var x = event.keyCode;
  if (x == 13 && document.getElementById('id_cat_tai_10').value == "" ) {
    document.getElementById("id_gui").focus();
  }
  else
  {
	document.getElementById("id_cat_tai_11").focus();  
  }
  
    });
});

$(document).ready(function(){
    $('#id_cat_tai_11').keypress(function(){
    var x = event.keyCode;
  if (x == 13 && document.getElementById('id_cat_tai_11').value == "" ) {
    document.getElementById("id_gui").focus();
  }
  else
  {
	document.getElementById("id_cat_tai_12").focus();  
  }
  
    });
});

$(document).ready(function(){
    $('#id_cat_tai_12').keypress(function(){
    var x = event.keyCode;
  if (x == 13 && document.getElementById('id_cat_tai_12').value == "" ) {
    document.getElementById("id_gui").focus();
  }
  else
  {
	document.getElementById("id_cat_tai_13").focus();  
  }
  
    });
});

$(document).ready(function(){
    $('#id_cat_tai_13').keypress(function(){
    var x = event.keyCode;
  if (x == 13 && document.getElementById('id_cat_tai_13').value == "" ) {
    document.getElementById("id_gui").focus();
  }
  else
  {
	document.getElementById("id_cat_tai_14").focus();  
  }
  
    });
});

$(document).ready(function(){
    $('#id_cat_tai_14').keypress(function(){
    var x = event.keyCode;
  if (x == 13 && document.getElementById('id_cat_tai_14').value == "" ) {
    document.getElementById("id_gui").focus();
  }
  else
  {
	document.getElementById("id_cat_tai_15").focus();  
  }
  
    });
});

$(document).ready(function(){
    $('#id_cat_tai_15').keypress(function(){
    var x = event.keyCode;
  if (x == 13 && document.getElementById('id_cat_tai_15').value == "" ) {
    document.getElementById("id_gui").focus();
  }
  else
  {
	document.getElementById("id_cat_tai_16").focus();  
  }
  
    });
});

$(document).ready(function(){
    $('#id_cat_tai_16').keypress(function(){
    var x = event.keyCode;
  if (x == 13 && document.getElementById('id_cat_tai_16').value == "" ) {
    document.getElementById("id_gui").focus();
  }
  else
  {
	document.getElementById("id_cat_tai_17").focus();  
  }
  
    });
});

$(document).ready(function(){
    $('#id_cat_tai_17').keypress(function(){
    var x = event.keyCode;
  if (x == 13 ) {
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
















/* post */
$(document).ready(function(){
	$("#id_gui").click(function(){
		
	

		
	if (isNaN(Number($("#id_3").val())) || $("#id_3").val() < 0 || $("#id_3").val() > 30 || $("#id_3").val() == null || $("#id_3").val() == "" )
	{return document.getElementById('id_nhan').innerHTML="Số heo sinh ra  phải định dạng số từ 0-30 và không được để trống";  }
	
	if (
	isNaN(Number($("#id_4").val())) || $("#id_4").val() < 0 || $("#id_4").val() - $("#id_3").val() > 0 || $("#id_4").val() == null || $("#id_4").val() == "" ||
	isNaN(Number($("#id_5").val())) || $("#id_5").val() < 0 || $("#id_5").val() - $("#id_3").val() >0 || $("#id_5").val() == null || $("#id_5").val() == "" ||
	isNaN(Number($("#id_6").val())) || $("#id_6").val() < 0 || $("#id_6").val() - $("#id_3").val() >0 || $("#id_6").val() == null || $("#id_6").val() == "" ||
	isNaN(Number($("#id_7").val())) || $("#id_7").val() < 0 || $("#id_7").val() - $("#id_3").val() >0 || $("#id_7").val() == null || $("#id_7").val() == "" ||
	isNaN(Number($("#id_10").val())) || $("#id_10").val() < 0 || $("#id_10").val() - $("#id_3").val() >0 || $("#id_10").val() == null || $("#id_10").val() == "" 
	
	)
	{return document.getElementById('id_nhan').innerHTML="Số heo chết, khô, tật, còi, đực phải >0 và bé hơn số sinh ra và không được để trống";  }
		
		if (isNaN(Number($("#id_9").val())) || $("#id_9").val() < 0 || $("#id_9").val() > 80 || $("#id_9").val() == null || $("#id_9").val() == "" )
	{return document.getElementById('id_nhan').innerHTML="Trọng lượng sơ sinh phải định dạng số từ 0-80 và không được để trống";  }
	
	if ( $("#id_1").val() == null || $("#id_1").val() == "" )
	{return document.getElementById('id_nhan').innerHTML="Mã thẻ nái không được để trống";  }	
	
	if ( $("#id_2").val() == null || $("#id_2").val() == "" )
	{return document.getElementById('id_nhan').innerHTML="Ngày đẻ không được để trống";  }		
	
	var dem_string = $("#id_8").val();	
	var count_dem_string = dem_string.length;
	if (
		count_dem_string > 50 ||
		$("#id_8").val() == null || $("#id_8").val() == ""
		) 
		{
            document.getElementById('id_nhan').innerHTML="Trại không được để trống hoặc lỗi chọn công ty có chứa * ";
        } 
		else 
	    {
			var ly_lich = "_" + document.getElementById('id_cat_tai_1').value +
			  "_" + document.getElementById('id_cat_tai_2').value +
			   "_" + document.getElementById('id_cat_tai_3').value +
			    "_" + document.getElementById('id_cat_tai_4').value +
				 "_" + document.getElementById('id_cat_tai_5').value +
				  "_" + document.getElementById('id_cat_tai_6').value +
				   "_" + document.getElementById('id_cat_tai_7').value +
				    "_" + document.getElementById('id_cat_tai_8').value +
					 "_" + document.getElementById('id_cat_tai_9').value +
					  "_" + document.getElementById('id_cat_tai_10').value +
					   "_" + document.getElementById('id_cat_tai_11').value +
					    "_" + document.getElementById('id_cat_tai_12').value +
						 "_" + document.getElementById('id_cat_tai_13').value +
						  "_" + document.getElementById('id_cat_tai_14').value +
						   "_" + document.getElementById('id_cat_tai_15').value +
						    "_" + document.getElementById('id_cat_tai_16').value +
							    "_" + document.getElementById('id_cat_tai_17').value +  "_" ;
	         document.getElementById("id_nhan").innerHTML =  "<progress ></progress>"; 
			$.post("fuction_thêm--from_đẻ.php", {post1:$("#id_1").val() ,
			post2:$("#id_2").val(), 
			post3:$("#id_3").val(), 
			post4:$("#id_4").val(),
			post5:$("#id_5").val(),
			post6:$("#id_6").val() ,
			post7:$("#id_7").val() ,
			post9:$("#id_9").val(),
			post10:$("#id_10").val(),
			id_cat_tai_1:$("#id_cat_tai_1").val(),
			id_cat_tai_2:$("#id_cat_tai_2").val(),
			id_cat_tai_3:$("#id_cat_tai_3").val(),
			id_cat_tai_4:$("#id_cat_tai_4").val(),
			id_cat_tai_5:$("#id_cat_tai_5").val(),
			id_cat_tai_6:$("#id_cat_tai_6").val(),
			id_cat_tai_7:$("#id_cat_tai_7").val(),
			id_cat_tai_8:$("#id_cat_tai_8").val(),
			id_cat_tai_9:$("#id_cat_tai_9").val(),
			id_cat_tai_10:$("#id_cat_tai_10").val(),
			id_cat_tai_11:$("#id_cat_tai_11").val(),
			id_cat_tai_12:$("#id_cat_tai_12").val(),
			id_cat_tai_13:$("#id_cat_tai_13").val(),
			id_cat_tai_14:$("#id_cat_tai_14").val(),
			id_cat_tai_15:$("#id_cat_tai_15").val(),
			id_cat_tai_16:$("#id_cat_tai_16").val(),
			id_cat_tai_17:$("#id_cat_tai_17").val(),
			post_ly_lich:ly_lich ,
			post8:$("#id_8").val() }, function(data){
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