

<table class="table_nhận_dữ_liệu" id="table2" > 
   
</table>

<table  class="table_nhận_dữ_liệu" id="table1" > 
 <tr height="21" > 
 <td  >Số tai</td>
 <td  >Ngày sinh</td>
 <td  >Bố</td>
 <td  >Mẹ</td>
 </tr>  
<tr height="21" > <td  > </td><td  > </td><td  ></td><td  ></td></tr>      
<tr height="21" > <td  > </td><td  > </td><td  ></td><td  ></td></tr>    
<tr height="21" > <td  > </td><td  > </td><td  ></td><td  ></td></tr>    
<tr height="21" > <td  > </td><td  > </td><td  ></td><td  ></td></tr>    
<tr height="21" > <td  > </td><td  > </td><td  ></td><td  ></td></tr>    
<tr height="21" > <td  > </td><td  > </td><td  ></td><td  ></td></tr>    
<tr height="21" > <td  > </td><td  > </td><td  ></td><td  ></td></tr>    
<tr height="21" > <td  > </td><td  > </td><td  ></td><td  ></td></tr>    
<tr height="21" > <td  > </td><td  > </td><td  ></td><td  ></td></tr>    
<tr height="21" > <td  > </td><td  > </td><td  ></td><td  ></td></tr>    
<tr height="21" > <td  > </td><td  > </td><td  ></td><td  ></td></tr>    
<tr height="21" > <td  > </td><td  > </td><td  ></td><td  ></td></tr>    
<tr height="21" > <td  > </td><td  > </td><td  ></td><td  ></td></tr>    
<tr height="21" > <td  > </td><td  > </td><td  ></td><td  ></td></tr>    
<tr height="21" > <td  > </td><td  > </td><td  ></td><td  ></td></tr>    
<tr height="21" > <td  > </td><td  > </td><td  ></td><td  ></td></tr>    
<tr height="21" > <td  > </td><td  > </td><td  ></td><td  ></td></tr>    
<tr height="21" > <td  > </td><td  > </td><td  ></td><td  ></td></tr>    
<tr height="21" > <td  > </td><td  > </td><td  ></td><td  ></td></tr>    
<tr height="21" > <td  > </td><td  > </td><td  ></td><td  ></td></tr>    
</table>


<script>
<?php
		

$trai=$_POST["post_trai"];



// kết nối csdl	
include "setup/fuction_ket_noi_csdl.php";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
	if (!$conn) {
	die("Connection failed: " . mysqli_connect_error());
	}
	
if ($_POST["post1"]== null || $_POST["post1"]== ""){ $_POST["post1"] = "khong_co_du_lieu"; }
if ($_POST["post2"]== null || $_POST["post2"]== ""){ $_POST["post2"] = "khong_co_du_lieu"; }
if ($_POST["post3"]== null || $_POST["post3"]== ""){ $_POST["post3"] = "khong_co_du_lieu"; }
if ($_POST["post4"]== null || $_POST["post4"]== ""){ $_POST["post4"] = "khong_co_du_lieu"; }
if ($_POST["post5"]== null || $_POST["post5"]== ""){ $_POST["post5"] = "khong_co_du_lieu"; }
if ($_POST["post6"]== null || $_POST["post6"]== ""){ $_POST["post6"] = "khong_co_du_lieu"; }
if ($_POST["post7"]== null || $_POST["post7"]== ""){ $_POST["post7"] = "khong_co_du_lieu"; }
if ($_POST["post8"]== null || $_POST["post8"]== ""){ $_POST["post8"] = "khong_co_du_lieu"; }
if ($_POST["post9"]== null || $_POST["post9"]== ""){ $_POST["post9"] = "khong_co_du_lieu"; }
if ($_POST["post10"]== null || $_POST["post10"]== ""){ $_POST["post10"] = "khong_co_du_lieu"; }
if ($_POST["post11"]== null || $_POST["post11"]== ""){ $_POST["post11"] = "khong_co_du_lieu"; }
if ($_POST["post12"]== null || $_POST["post12"]== ""){ $_POST["post12"] = "khong_co_du_lieu"; }
if ($_POST["post13"]== null || $_POST["post13"]== ""){ $_POST["post13"] = "khong_co_du_lieu"; }
if ($_POST["post14"]== null || $_POST["post14"]== ""){ $_POST["post14"] = "khong_co_du_lieu"; }
if ($_POST["post15"]== null || $_POST["post15"]== ""){ $_POST["post15"] = "khong_co_du_lieu"; }
if ($_POST["post16"]== null || $_POST["post16"]== ""){ $_POST["post16"] = "khong_co_du_lieu"; }
if ($_POST["post17"]== null || $_POST["post17"]== ""){ $_POST["post17"] = "khong_co_du_lieu"; }
if ($_POST["post18"]== null || $_POST["post18"]== ""){ $_POST["post18"] = "khong_co_du_lieu"; }
if ($_POST["post19"]== null || $_POST["post19"]== ""){ $_POST["post19"] = "khong_co_du_lieu"; }
if ($_POST["post20"]== null || $_POST["post20"]== ""){ $_POST["post20"] = "khong_co_du_lieu"; }


// lấy dữ liệu lên html
$sql_1 = "Select

 
   
	count(sheet1.`so cat tai`),
	sheet1.`ngay de`,
	sheet1.`duc phoi`,
    sheet1.`so tai`
	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".$_POST["post1"]."_%' 

UNION ALL


Select
	count(sheet1.`so cat tai`),
	sheet1.`ngay de`,
	sheet1.`duc phoi`,
    sheet1.`so tai`
	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".$_POST["post2"]."_%' 

UNION ALL


Select
	count(sheet1.`so cat tai`),
	sheet1.`ngay de`,
	sheet1.`duc phoi`,
    sheet1.`so tai`
	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".$_POST["post3"]."_%' 
UNION ALL


Select
count(sheet1.`so cat tai`),
	sheet1.`ngay de`,
	sheet1.`duc phoi`,
    sheet1.`so tai`
	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".$_POST["post4"]."_%' 
UNION ALL


Select
	count(sheet1.`so cat tai`),
	sheet1.`ngay de`,
	sheet1.`duc phoi`,
    sheet1.`so tai`
	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".$_POST["post5"]."_%' 
UNION ALL


Select
	count(sheet1.`so cat tai`),
	sheet1.`ngay de`,
	sheet1.`duc phoi`,
    sheet1.`so tai`
	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".$_POST["post6"]."_%' 
UNION ALL


Select
	count(sheet1.`so cat tai`),
	sheet1.`ngay de`,
	sheet1.`duc phoi`,
    sheet1.`so tai`
	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".$_POST["post7"]."_%' 
UNION ALL


Select
	count(sheet1.`so cat tai`),
	sheet1.`ngay de`,
	sheet1.`duc phoi`,
    sheet1.`so tai`
	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".$_POST["post8"]."_%' 
UNION ALL


Select
	count(sheet1.`so cat tai`),
	sheet1.`ngay de`,
	sheet1.`duc phoi`,
    sheet1.`so tai`
	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".$_POST["post9"]."_%' 
UNION ALL


Select
	count(sheet1.`so cat tai`),
	sheet1.`ngay de`,
	sheet1.`duc phoi`,
    sheet1.`so tai`
	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".$_POST["post10"]."_%' 
UNION ALL


Select
	count(sheet1.`so cat tai`),
	sheet1.`ngay de`,
	sheet1.`duc phoi`,
    sheet1.`so tai`
	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".$_POST["post11"]."_%' 
UNION ALL


Select
	count(sheet1.`so cat tai`),
	sheet1.`ngay de`,
	sheet1.`duc phoi`,
    sheet1.`so tai`
	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".$_POST["post12"]."_%' 
UNION ALL


Select
	count(sheet1.`so cat tai`),
	sheet1.`ngay de`,
	sheet1.`duc phoi`,
    sheet1.`so tai`
	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".$_POST["post13"]."_%' 
UNION ALL


Select
	count(sheet1.`so cat tai`),
	sheet1.`ngay de`,
	sheet1.`duc phoi`,
    sheet1.`so tai`
	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".$_POST["post14"]."_%' 
UNION ALL


Select
	count(sheet1.`so cat tai`),
	sheet1.`ngay de`,
	sheet1.`duc phoi`,
    sheet1.`so tai`
	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".$_POST["post15"]."_%' 
UNION ALL


Select
	count(sheet1.`so cat tai`),
	sheet1.`ngay de`,
	sheet1.`duc phoi`,
    sheet1.`so tai`
	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".$_POST["post16"]."_%' 
UNION ALL


Select
	count(sheet1.`so cat tai`),
	sheet1.`ngay de`,
	sheet1.`duc phoi`,
    sheet1.`so tai`
	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".$_POST["post17"]."_%' 
UNION ALL


Select
	count(sheet1.`so cat tai`),
	sheet1.`ngay de`,
	sheet1.`duc phoi`,
    sheet1.`so tai`
	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".$_POST["post18"]."_%' 
UNION ALL


Select
	count(sheet1.`so cat tai`),
	sheet1.`ngay de`,
	sheet1.`duc phoi`,
    sheet1.`so tai`
	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".$_POST["post19"]."_%' 
UNION ALL


Select
	count(sheet1.`so cat tai`),
	sheet1.`ngay de`,
	sheet1.`duc phoi`,
    sheet1.`so tai`
	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".$_POST["post20"]."_%'


	
	";
$result_1 = mysqli_query($conn, $sql_1);
$cout_1 = mysqli_num_rows($result_1);
$arraymysql_1 = [];
for ($x = 0; $x < $cout_1; $x++) {
    $arraymysql_1[$x] = mysqli_fetch_row($result_1) ;
  }
  


?>	



// tạo bảng trên html
// điền dữ liệu vào bảng 
 var arrayjavascript = <?php echo json_encode($arraymysql_1); ?>; // ***** gán mảng 2 chiều từ php vào javácript
  document.getElementById('table1').rows[1].cells[0].innerHTML =<?php if ($_POST["post1"]=="khong_co_du_lieu"){echo json_encode("") ;} else { echo json_encode($_POST["post1"]); }?>;
   document.getElementById('table1').rows[2].cells[0].innerHTML =<?php if ($_POST["post2"]=="khong_co_du_lieu"){echo json_encode("") ;} else { echo json_encode($_POST["post2"]); }?>;
    document.getElementById('table1').rows[3].cells[0].innerHTML =<?php if ($_POST["post3"]=="khong_co_du_lieu"){echo json_encode("") ;} else { echo json_encode($_POST["post3"]); }?>;
	 document.getElementById('table1').rows[4].cells[0].innerHTML =<?php if ($_POST["post4"]=="khong_co_du_lieu"){echo json_encode("") ;} else { echo json_encode($_POST["post4"]); }?>;
	  document.getElementById('table1').rows[5].cells[0].innerHTML =<?php if ($_POST["post5"]=="khong_co_du_lieu"){echo json_encode("") ;} else { echo json_encode($_POST["post5"]); }?>;
	   document.getElementById('table1').rows[6].cells[0].innerHTML =<?php if ($_POST["post6"]=="khong_co_du_lieu"){echo json_encode("") ;} else { echo json_encode($_POST["post6"]); }?>;
	    document.getElementById('table1').rows[7].cells[0].innerHTML =<?php if ($_POST["post7"]=="khong_co_du_lieu"){echo json_encode("") ;} else { echo json_encode($_POST["post7"]); }?>;
		 document.getElementById('table1').rows[8].cells[0].innerHTML =<?php if ($_POST["post8"]=="khong_co_du_lieu"){echo json_encode("") ;} else { echo json_encode($_POST["post8"]); }?>;
		  document.getElementById('table1').rows[9].cells[0].innerHTML =<?php if ($_POST["post9"]=="khong_co_du_lieu"){echo json_encode("") ;} else { echo json_encode($_POST["post9"]); }?>;
		   document.getElementById('table1').rows[10].cells[0].innerHTML =<?php if ($_POST["post10"]=="khong_co_du_lieu"){echo json_encode("") ;} else { echo json_encode($_POST["post10"]); }?>;
		    document.getElementById('table1').rows[11].cells[0].innerHTML =<?php if ($_POST["post11"]=="khong_co_du_lieu"){echo json_encode("") ;} else { echo json_encode($_POST["post11"]); }?>;
			 document.getElementById('table1').rows[12].cells[0].innerHTML =<?php if ($_POST["post12"]=="khong_co_du_lieu"){echo json_encode("") ;} else { echo json_encode($_POST["post12"]); }?>;
			  document.getElementById('table1').rows[13].cells[0].innerHTML =<?php if ($_POST["post13"]=="khong_co_du_lieu"){echo json_encode("") ;} else { echo json_encode($_POST["post13"]); }?>;
			   document.getElementById('table1').rows[14].cells[0].innerHTML =<?php if ($_POST["post14"]=="khong_co_du_lieu"){echo json_encode("") ;} else { echo json_encode($_POST["post14"]); }?>;
			    document.getElementById('table1').rows[15].cells[0].innerHTML =<?php if ($_POST["post15"]=="khong_co_du_lieu"){echo json_encode("") ;} else { echo json_encode($_POST["post15"]); }?>;
				 document.getElementById('table1').rows[16].cells[0].innerHTML =<?php if ($_POST["post16"]=="khong_co_du_lieu"){echo json_encode("") ;} else { echo json_encode($_POST["post16"]); }?>;
				  document.getElementById('table1').rows[17].cells[0].innerHTML =<?php if ($_POST["post17"]=="khong_co_du_lieu"){echo json_encode("") ;} else { echo json_encode($_POST["post17"]); }?>;
				   document.getElementById('table1').rows[18].cells[0].innerHTML =<?php if ($_POST["post18"]=="khong_co_du_lieu"){echo json_encode("") ;} else { echo json_encode($_POST["post18"]); }?>;
				    document.getElementById('table1').rows[19].cells[0].innerHTML =<?php if ($_POST["post19"]=="khong_co_du_lieu"){echo json_encode("") ;} else { echo json_encode($_POST["post19"]); }?>;
					 document.getElementById('table1').rows[20].cells[0].innerHTML =<?php if ($_POST["post20"]=="khong_co_du_lieu"){echo json_encode("") ;} else { echo json_encode($_POST["post20"]); }?>;
for(var r=0;r<20;r++)
  {
document.getElementById('table1').rows[r+1].cells[1].innerHTML =arrayjavascript[r][1]; 
 document.getElementById('table1').rows[r+1].cells[2].innerHTML =arrayjavascript[r][2]; 
document.getElementById('table1').rows[r+1].cells[3].innerHTML =arrayjavascript[r][3];  
	   }

   
	document.getElementById('table2').innerHTML = <?php if (isset($kiem_tra_loi_1)) {echo json_encode($kiem_tra_loi_1);	} else {echo json_encode("");} ?>;		
	
</script>


