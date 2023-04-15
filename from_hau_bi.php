<!DOCTYPE html>
<html>

<body>
<input id="id_gui_research" type="button" value="Tìm kiếm, sửa, xóa"/> 
<table>
  <tr>
    <td><fieldset class="fieldset_chung" > 
<legend><input id="id_chon_cot_in_csdl" type="button" value="Sổ theo dõi hậu bị"> </legend>

<table  > 	
	
	<tr>
		<td  > <table  > 							
				<tr  >			
				<td  >Mã thẻ tai:	</td>			
				</tr>
				<tr  >
				<td  ><input id="id_1" name="name_1" type="text" />	</td>						
				</tr>

				
				<tr  >			
				<td  >Ngày nhập:	</td>			
				</tr>			
				<tr  >
				<td  > 	<input id="id_2" name="name_2" type="date" /> </td>						
				</tr>			
							
							
				<tr  >			
				<td  >Ngày sinh:	</td>			
				</tr>			
				<tr  >
				<td  > <input id="id_3" name="name_3" type="date" /> </td>						
				</tr>						
				
				<tr  >			
				<td  >Lô:	</td>			
				</tr>			
				<tr  >
				<td  > <input id="id_4" name="name_4" type="text" /> </td>						
				</tr>				
							
				
				
				
				
							
				<tr  >			
				<td  ><input id="id_gui" type="button" value="Thêm">	</td>				
				</tr>
				
				</table> </td>			
							

			
		
																								<td id="id_nhan" ></td>	
				
		
	</tr>
</table>	
		



   




</fieldset>
</td>

    <td><fieldset class="fieldset_chung" > 
<legend><input id="id_chon_cot_in_csdl_" type="button" value="Sổ theo dõi hậu bị chết(loại)"> </legend>

<table  > 	
	
	<tr>
		<td  > <table  > 							
				<tr  >			
				<td  >Mã thẻ tai:	</td>			
				</tr>
				<tr  >
				<td  ><input id="id_1_"  type="text" />	</td>						
				</tr>

				
				<tr  >			
				<td  >Ngày chết (loại):	</td>			
				</tr>			
				<tr  >
				<td  > 	<input id="id_2_"  type="date" /> </td>						
				</tr>			
							
					<tr  >			
				<td  >Phân loại:	</td>			
				</tr>			
				<tr  >
				<td  > <select id="id_3_" >
														<option value="c">Heo chết</option>
														<option value="l">Bán loại</option>
														
						</select></td>						
				</tr>
					<tr  >	
				<td  >...	</td>				
				</tr>
			    	<tr  >	
				<td  >...	</td>	</br>			
				</tr>
				<tr  >	
				<td  ><input id="id_gui_" type="button" value="Thêm">	</td>				
				</tr>
				
				</table> </td>			
							

			
		
																								<td id="id_nhan_" ></td>	
				
		
	</tr>
</table>	
		



   




</fieldset>
</td>
  </tr>
</table>




	

		
		
 



		
</body>
</html>
<script>


/* phím enter */
$(document).ready(function(){
    $('#id_1').keypress(function(){
    var x = event.keyCode;
  if (x == 13) {
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
    document.getElementById("id_gui").focus();
  }
    });
});


/* phím enter bang 2 */
$(document).ready(function(){
    $('#id_1_').keypress(function(){
    var x = event.keyCode;
  if (x == 13) {
    document.getElementById("id_2_").focus();
  }
    });
});

$(document).ready(function(){
    $('#id_2_').keypress(function(){
    var x = event.keyCode;
  if (x == 13) {
    document.getElementById("id_gui_").focus();
  }
    });
});






// bảng 1

$(document).ready(function(){
	$("#id_gui").click(function(){
	     var gia_tri_nhap = document.getElementById("id_1").value ;
      if ( gia_tri_nhap == null || gia_tri_nhap == "" ||  gia_tri_nhap.indexOf(' ') >= 0 )
	{return document.getElementById('id_nhan').innerHTML="Mã thẻ tai không được để trống, hoặc chứa khoảng trắng";  }	
	
	    
		var dem_string = $("#id_8").val();	
var count_dem_string = dem_string.length;

		
	if (
		$("#id_1").val() == null || $("#id_1").val() == "" ||
		$("#id_2").val() == null || $("#id_2").val() == "" ||
		$("#id_3").val() == null || $("#id_3").val() == "" ||
		$("#id_4").val() == null || $("#id_4").val() == "" ||
		count_dem_string > 50 ||
		$("#id_8").val() == null || $("#id_8").val() == ""
		) 
		{
             document.getElementById('id_nhan').innerHTML="Bạn phải điền đầy đủ thông tin hoặc lỗi chọn công ty có chứa *";	
        } 
		else 
	    {
	        document.getElementById("id_nhan").innerHTML =  "<progress ></progress>"; 
			$.post("fuction_thêm--from_hậu_bị.php", {post0:$("#id_chon_cot_in_csdl").val() ,  post1:$("#id_1").val() , post2:$("#id_2").val(), post3:$("#id_3").val(), post4:$("#id_4").val(),  post8:$("#id_8").val() }, function(data){
			$("#id_nhan").html(data);	});
	
        }

		
	});
});

// bảng 2

$(document).ready(function(){
	$("#id_gui_").click(function(){
	     var gia_tri_nhap = document.getElementById("id_1_").value ;
      if ( gia_tri_nhap == null || gia_tri_nhap == "" ||  gia_tri_nhap.indexOf(' ') >= 0 )
	{return document.getElementById('id_nhan_').innerHTML="Mã thẻ tai không được để trống, hoặc chứa khoảng trắng";  }	
	
	    
		var dem_string = $("#id_8").val();	
var count_dem_string = dem_string.length;

		
	if (
		$("#id_1_").val() == null || $("#id_1_").val() == "" ||
		$("#id_2_").val() == null || $("#id_2_").val() == "" ||
	
		count_dem_string > 50 ||
		$("#id_8").val() == null || $("#id_8").val() == ""
		) 
		{
             document.getElementById('id_nhan_').innerHTML="Bạn phải điền đầy đủ thông tin hoặc lỗi chọn công ty có chứa *";	
        } 
		else 
	    {
	        document.getElementById("id_nhan_").innerHTML =  "<progress ></progress>"; 
			$.post("fuction_thêm--from_hậu_bị.php", { post0:$("#id_chon_cot_in_csdl_").val() , post1:$("#id_1_").val() , post2:$("#id_2_").val() , post3:$("#id_3_").val() ,  post8:$("#id_8").val() }, function(data){
			$("#id_nhan_").html(data);	});
	
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