

<table class="table_nhận_dữ_liệu" id="table2" > 
   
</table>


<table class="table_nhận_dữ_liệu" id="table1" > 
   
</table>


<script>
<?php
		

$ma_so_tai =$_POST["post1"];

$kiem_tra_legend =$_POST["post4"];

$trai=$_POST["post8"];

//** phối kết nối csdl	
if ($kiem_tra_legend == "Sổ phối")
{

// kết nối csdl	
include "setup/fuction_ket_noi_csdl.php";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
	if (!$conn) {
	die("Connection failed: " . mysqli_connect_error());
	}
	
// lấy dữ liệu lên html
$sql_1 = "Select
     sheet1.`so tai`,
  DATE_FORMAT(sheet1.`ngay phoi`, '%d/%m/%Y')  ,
    sheet1.`lan phoi`,
   sheet1.`duc phoi`,
	sheet1.`nguoi phoi`,
   sheet1.`bieu hien phoi`,
  DATE_FORMAT( sheet1.`de du kien`, '%d/%m/%Y') ,
    DATE_FORMAT(sheet1.`ngay van de`, '%d/%m/%Y'),
	sheet1.`nguyen nhan van de`,
  
   DATE_FORMAT(sheet1.`ngay de`, '%d/%m/%Y'),
  
    sheet1.SCSR,
    sheet1.chet,
    sheet1.tat,
    sheet1.kho,
    sheet1.coi,
    sheet1.SCCS,
	  DATE_FORMAT(sheet1.`ngay cai`, '%d/%m/%Y'),
	sheet1.`so con cai`,
	 DATE_FORMAT( sheet1.`ngay ban loai chet`, '%d/%m/%Y') ,
	
		 DATE_FORMAT(sheet1.`ngay heo con chet`, '%d/%m/%Y')	,
	sheet1.`so luong heo con chet theo me`


From
    sheet1
Where
   sheet1.`so tai` LIKE '%".$ma_so_tai."%'  And
  
sheet1.trai = '".$trai."'
ORDER BY `so tai` ASC
	";
$result_1 = mysqli_query($conn, $sql_1);
$cout_1 = mysqli_num_rows($result_1);
$arraymysql_1 = [];
$arraymysql_1[0] = ["Số tai",
"Ngày phối",
"Lần phối",
"Đực phối",
"Người phối",
"Biểu hiện phối",
"Ngày đẻ DK",
"Ngày vấn đề",
"Nguyên nhân vấn đề",
"Ngày đẻ",
"SCSR",
"Chết trắng",
"Khô",
"Tật",
"Còi",
"SCCS",

"Ngày cai",
"Số con cai",
"Ngày chết(loại)",

"Ngày Heo con chết",
"Số Heo con chết",

];
for ($x = 0+1; $x < $cout_1+1; $x++) {
    $arraymysql_1[$x] = mysqli_fetch_row($result_1) ;
  }
  

}






if ($kiem_tra_legend == "Sổ đẻ")
{

// kết nối csdl	
include('setup/fuction_ket_noi_csdl.php');
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
	if (!$conn) {
	die("Connection failed: " . mysqli_connect_error());
	}
	
// lấy dữ liệu lên html
$sql_1 = "Select
    sheet1.`so tai`,
  DATE_FORMAT(sheet1.`ngay phoi`, '%d/%m/%Y')  ,
    sheet1.`lan phoi`,
   sheet1.`duc phoi`,
  DATE_FORMAT( sheet1.`de du kien`, '%d/%m/%Y') ,
    DATE_FORMAT(sheet1.`ngay van de`, '%d/%m/%Y'),
	sheet1.`nguyen nhan van de`,
  
   DATE_FORMAT(sheet1.`ngay de`, '%d/%m/%Y'),
    sheet1.Pss,
    sheet1.SCSR,
    sheet1.chet,
    sheet1.tat,
    sheet1.kho,
    sheet1.coi,
    sheet1.SCCS,
	 sheet1.`so_con_duc`,
	  sheet1.`so cat tai`,
	  DATE_FORMAT(sheet1.`ngay cai`, '%d/%m/%Y'),
	sheet1.`so con cai`,
	   DATE_FORMAT( sheet1.`ngay ban loai chet`, '%d/%m/%Y') ,
	
		 DATE_FORMAT(sheet1.`ngay heo con chet`, '%d/%m/%Y')	,
	sheet1.`so luong heo con chet theo me`
	
 
From
    sheet1
Where
    sheet1.`so tai` LIKE '%".$ma_so_tai."%'  And
  
sheet1.trai = '".$trai."'
ORDER BY `so tai` ASC
	";
$result_1 = mysqli_query($conn, $sql_1);
$cout_1 = mysqli_num_rows($result_1);
$arraymysql_1 = [];
$arraymysql_1[0] = ["Số tai",
"Ngày phối",
"Lần phối",
"Đực phối",

"Ngày đẻ DK",
"Ngày vấn đề",
"Nguyên nhân vấn đề",
"Ngày đẻ",
"Pss",
"SCSR",
"Chết trắng",
"Khô",
"Tật",
"Còi",
"SCCS",
"Số heo đực",
"Lý lịch",
"Ngày cai",
"Số con cai",
"Ngày chết(loại)",

"Ngày Heo con chết",
"Số Heo con chết",

];
for ($x = 0+1; $x < $cout_1+1; $x++) {
    $arraymysql_1[$x] = mysqli_fetch_row($result_1) ;
  }
  


}







if ($kiem_tra_legend == "Sổ cai sữa")
{

// kết nối csdl	
include('setup/fuction_ket_noi_csdl.php');
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
	if (!$conn) {
	die("Connection failed: " . mysqli_connect_error());
	}
	
// lấy dữ liệu lên html
$sql_1 = "Select
    sheet1.`so tai`,
  DATE_FORMAT(sheet1.`ngay phoi`, '%d/%m/%Y')  ,
    sheet1.`lan phoi`,
   sheet1.`duc phoi`,

  DATE_FORMAT( sheet1.`de du kien`, '%d/%m/%Y') ,
    DATE_FORMAT(sheet1.`ngay van de`, '%d/%m/%Y'),
	sheet1.`nguyen nhan van de`,
  
   DATE_FORMAT(sheet1.`ngay de`, '%d/%m/%Y'),

    sheet1.SCSR,
    sheet1.chet,
    sheet1.tat,
    sheet1.kho,
    sheet1.coi,
    sheet1.SCCS,
	  DATE_FORMAT(sheet1.`ngay cai`, '%d/%m/%Y'),
	sheet1.`so con cai`,
	  DATE_FORMAT( sheet1.`ngay ban loai chet`, '%d/%m/%Y') ,

		 DATE_FORMAT(sheet1.`ngay heo con chet`, '%d/%m/%Y')	,
	sheet1.`so luong heo con chet theo me`


From
    sheet1
Where
  sheet1.`so tai` LIKE '%".$ma_so_tai."%'  And
  
sheet1.trai = '".$trai."'
ORDER BY `so tai` ASC
	";
$result_1 = mysqli_query($conn, $sql_1);
$cout_1 = mysqli_num_rows($result_1);
$arraymysql_1 = [];
$arraymysql_1[0] = ["Số tai",
"Ngày phối",
"Lần phối",
"Đực phối",

"Ngày đẻ DK",
"Ngày vấn đề",
"Nguyên nhân vấn đề",
"Ngày đẻ",
"SCSR",
"Chết trắng",
"Khô",
"Tật",
"Còi",
"SCCS",

"Ngày cai",
"Số con cai",
"Ngày chết(loại)",

"Ngày Heo con chết",
"Số Heo con chết",

];
for ($x = 0+1; $x < $cout_1+1; $x++) {
    $arraymysql_1[$x] = mysqli_fetch_row($result_1) ;
  }
  


}







if ($kiem_tra_legend == "Sổ heo vấn đề")
{

// kết nối csdl	
include('setup/fuction_ket_noi_csdl.php');
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
	if (!$conn) {
	die("Connection failed: " . mysqli_connect_error());
	}
	
// lấy dữ liệu lên html
$sql_1 = "Select
    sheet1.`so tai`,
  DATE_FORMAT(sheet1.`ngay phoi`, '%d/%m/%Y')  ,
    sheet1.`lan phoi`,
   sheet1.`duc phoi`,

  DATE_FORMAT( sheet1.`de du kien`, '%d/%m/%Y') ,
    DATE_FORMAT(sheet1.`ngay van de`, '%d/%m/%Y'),
	sheet1.`nguyen nhan van de`,

   DATE_FORMAT(sheet1.`ngay de`, '%d/%m/%Y'),

    sheet1.SCSR,
    sheet1.chet,
    sheet1.tat,
    sheet1.kho,
    sheet1.coi,
    sheet1.SCCS,
	  DATE_FORMAT(sheet1.`ngay cai`, '%d/%m/%Y'),
	sheet1.`so con cai`,
	  DATE_FORMAT( sheet1.`ngay ban loai chet`, '%d/%m/%Y') ,
		
	sheet1.`so luong heo con chet theo me`


From
    sheet1
Where
   sheet1.`so tai` LIKE '%".$ma_so_tai."%'  And
  
sheet1.trai = '".$trai."'
ORDER BY `so tai` ASC
	";
$result_1 = mysqli_query($conn, $sql_1);
$cout_1 = mysqli_num_rows($result_1);
$arraymysql_1 = [];
$arraymysql_1[0] = ["Số tai",
"Ngày phối",
"Lần phối",
"Đực phối",

"Ngày đẻ DK",
"Ngày vấn đề",
"Nguyên nhân vấn đề",

"Ngày đẻ",
"SCSR",
"Chết trắng",
"Khô",
"Tật",
"Còi",
"SCCS",

"Ngày cai",
"Số con cai",
"Ngày chết(loại)",


"Số Heo con chết",

];
for ($x = 0+1; $x < $cout_1+1; $x++) {
    $arraymysql_1[$x] = mysqli_fetch_row($result_1) ;
  }
  
  

}






if ($kiem_tra_legend == "Sổ theo dõi heo nái chết loại")
{

// kết nối csdl	
include('setup/fuction_ket_noi_csdl.php');
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
	if (!$conn) {
	die("Connection failed: " . mysqli_connect_error());
	}
	

// lấy dữ liệu lên html
$sql_1 = "Select
    sheet1.`so tai`,
  DATE_FORMAT(sheet1.`ngay phoi`, '%d/%m/%Y')  ,
    sheet1.`lan phoi`,
   sheet1.`duc phoi`,

  DATE_FORMAT( sheet1.`de du kien`, '%d/%m/%Y') ,
    DATE_FORMAT(sheet1.`ngay van de`, '%d/%m/%Y'),
	sheet1.`nguyen nhan van de`,

   DATE_FORMAT(sheet1.`ngay de`, '%d/%m/%Y'),

    sheet1.SCSR,
    sheet1.chet,
    sheet1.tat,
    sheet1.kho,
    sheet1.coi,
    sheet1.SCCS,
	  DATE_FORMAT(sheet1.`ngay cai`, '%d/%m/%Y'),
	sheet1.`so con cai`,
	  DATE_FORMAT( sheet1.`ngay ban loai chet`, '%d/%m/%Y') ,
  if( sheet1.`nguyen nhan nai mat` = 'l', 'Bán loại','Chết') ,
	sheet1.`so luong heo con chet theo me`


From
    sheet1
Where
  sheet1.`so tai` LIKE '%".$ma_so_tai."%'  And
  
sheet1.trai = '".$trai."'
ORDER BY `so tai` ASC
	";
$result_1 = mysqli_query($conn, $sql_1);
$cout_1 = mysqli_num_rows($result_1);
$arraymysql_1 = [];
$arraymysql_1[0] = ["Số tai",
"Ngày phối",
"Lần phối",
"Đực phối",

"Ngày đẻ DK",
"Ngày vấn đề",
"Nguyên nhân vấn đề",

"Ngày đẻ",
"SCSR",
"Chết trắng",
"Khô",
"Tật",
"Còi",
"SCCS",

"Ngày cai",
"Số con cai",
"Ngày chết(loại)",
"Phân loại",

"Số Heo con chết",

];
for ($x = 0+1; $x < $cout_1+1; $x++) {
    $arraymysql_1[$x] = mysqli_fetch_row($result_1) ;
  }
  

}







if ($kiem_tra_legend == "Sổ heo con chết theo mẹ")
{
// kết nối csdl	
include('setup/fuction_ket_noi_csdl.php');
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
	if (!$conn) {
	die("Connection failed: " . mysqli_connect_error());
	}
	
// lấy dữ liệu lên html
$sql_1 = "Select
    sheet1.`so tai`,
  DATE_FORMAT(sheet1.`ngay phoi`, '%d/%m/%Y')  ,
    sheet1.`lan phoi`,
   sheet1.`duc phoi`,

  DATE_FORMAT( sheet1.`de du kien`, '%d/%m/%Y') ,
    DATE_FORMAT(sheet1.`ngay van de`, '%d/%m/%Y'),
	sheet1.`nguyen nhan van de`,
  
   DATE_FORMAT(sheet1.`ngay de`, '%d/%m/%Y'),

    sheet1.SCSR,
    sheet1.chet,
    sheet1.tat,
    sheet1.kho,
    sheet1.coi,
    sheet1.SCCS,
	  DATE_FORMAT(sheet1.`ngay cai`, '%d/%m/%Y'),
	sheet1.`so con cai`,
	  DATE_FORMAT( sheet1.`ngay ban loai chet`, '%d/%m/%Y') ,

		 DATE_FORMAT(sheet1.`ngay heo con chet`, '%d/%m/%Y')	,
	sheet1.`so luong heo con chet theo me`,
	sheet1.`nguyen nhan heo con chet`
 

From
    sheet1
Where
 sheet1.`so tai` LIKE '%".$ma_so_tai."%'  And
  
sheet1.trai = '".$trai."'
ORDER BY `so tai` ASC
	";
$result_1 = mysqli_query($conn, $sql_1);
$cout_1 = mysqli_num_rows($result_1);
$arraymysql_1 = [];
$arraymysql_1[0] = ["Số tai",
"Ngày phối",
"Lần phối",
"Đực phối",

"Ngày đẻ DK",
"Ngày vấn đề",
"Nguyên nhân vấn đề",
"Ngày đẻ",
"SCSR",
"Chết trắng",
"Khô",
"Tật",
"Còi",
"SCCS",

"Ngày cai",
"Số con cai",
"Ngày chết(loại)",

"Ngày Heo con chết",
"Số Heo con chết",
"Nguyên nhân heo con chết",
];
for ($x = 0+1; $x < $cout_1+1; $x++) {
    $arraymysql_1[$x] = mysqli_fetch_row($result_1) ;
  }
  
  

}



if ($kiem_tra_legend == "Sổ theo dõi hậu bị")
{
// kết nối csdl	
include('setup/fuction_ket_noi_csdl.php');
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
	if (!$conn) {
	die("Connection failed: " . mysqli_connect_error());
	}
// lấy dữ liệu lên html
$sql_1 = "Select
	sheet2.`so_tai`,
    DATE_FORMAT( sheet2.`ngay_nhap`, '%d/%m/%Y')	 ,
	
	sheet2.`lo_nhap`,
 DATE_FORMAT( sheet2.`ngay_sinh`, '%d/%m/%Y')		,
DATE_FORMAT( 	sheet2.`ngay_chet(loai)`, '%d/%m/%Y')	   ,
	sheet2.`nguyen_nhan_chet_loai`    ,
	sheet2.`ngay_phoi`   

   
From
    sheet2
Where
    sheet2.`ma_so_tai` LIKE  '".$trai."-1-%".$ma_so_tai."%'
	And     
	sheet2.`phan_loai_heo` = 'HB'
	And     
	sheet2.trai = '".$trai."'
	ORDER BY `ma_so_tai` ASC
	";
$result_1 = mysqli_query($conn, $sql_1);
$cout_1 = mysqli_num_rows($result_1);

  
$arraymysql_1 = [];
$arraymysql_1[0] = [["Số tai"],

"Ngày nhập",
"Lô nhập",
"Ngày sinh",
"Ngày chết(loại)",
"Nguyên nhân chết loại",
"Ngày phối"


];
for ($x = 0+1; $x < $cout_1+1; $x++) {
    $arraymysql_1[$x] = mysqli_fetch_row($result_1) ;
  }
  
  	

}












if ($kiem_tra_legend == "Sổ theo dõi heo đực")
{

// kết nối csdl	
include('setup/fuction_ket_noi_csdl.php');
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
	if (!$conn) {
	die("Connection failed: " . mysqli_connect_error());
	}
// lấy dữ liệu lên html
$sql_1 = "Select
	sheet2.`so_tai`,
    DATE_FORMAT( sheet2.`ngay_nhap`, '%d/%m/%Y')	 ,
	
	
 DATE_FORMAT( sheet2.`ngay_sinh`, '%d/%m/%Y')		,
DATE_FORMAT( 	sheet2.`ngay_chet(loai)`, '%d/%m/%Y')	   ,
	sheet2.`nguyen_nhan_chet_loai`    
   
From
    sheet2
Where
    sheet2.`ma_so_tai` LIKE  '".$trai."-1-%".$ma_so_tai."%'
	And     
	sheet2.`phan_loai_heo` = 'D'
	And     
	sheet2.trai = '".$trai."'
		ORDER BY `ma_so_tai` ASC
	";
$result_1 = mysqli_query($conn, $sql_1);
$cout_1 = mysqli_num_rows($result_1);

  
$arraymysql_1 = [];
$arraymysql_1[0] = ["Số tai",

"Ngày nhập",

"Ngày sinh",
"Ngày chết(loại)",
"Nguyên nhân chết loại"



];
for ($x = 0+1; $x < $cout_1+1; $x++) {
    $arraymysql_1[$x] = mysqli_fetch_row($result_1) ;
  }
  

}









?>	



// tạo bảng trên html
// điền dữ liệu vào bảng 
 var arrayjavascript = <?php echo json_encode($arraymysql_1); ?>; // ***** gán mảng 2 chiều từ php vào javácript
 
 var countjavascript = arrayjavascript.length ;
 var coloumsjavascript  ;
  if (countjavascript == 1)
   {
	 document.getElementById('table2').innerHTML = "Không tìm thấy"  ;   
   }
   else
   {
	 document.getElementById('table2').innerHTML = ""  ;
	   
   }	
   
   
 if (countjavascript == 1) { coloumsjavascript = 0 ;countjavascript = 0 ;} else {  coloumsjavascript = arrayjavascript[0].length ;} ;
 
   
   
   
    for(var r=0;r<countjavascript;r++)
  {
   var x= document.getElementById('table1').insertRow(r);
    
   for(var c=0;c<coloumsjavascript;c++)  
    {
     x.insertCell(c);
	   document.getElementById('table1').rows[r].cells[c].innerHTML =arrayjavascript[r][c]; 
    }
	 x.insertCell(coloumsjavascript); // tạo thêm cột xóa
	  document.getElementById('table1').rows[r].cells[coloumsjavascript].innerHTML ="Xóa"; // insert các dòng vào cột xóa
	 
   }
   
   
			// Phần 2 : gán fuction khi click nút xóa
			
    var table = document.getElementById("table1"),rIndex;
    var  mystyle_array =["mystyle_1", "mystyle_2"];
	var click_xoa = 0 ;
            // table rows
            for(var i = 0; i < table.rows.length; i++)
            {
                // row cells
                for(var j = 0; j < table.rows[i].cells.length; j++)
                {
                    table.rows[i].cells[coloumsjavascript].onclick = function() //  dùng for để gán sự kiện click cho tất cả các dòng i cột xóa tạo ở trên
                    {
                        rIndex = this.parentElement.rowIndex; // lấy địa chỉ dòng được click vào
					
					
                        // - Sổ phối table xóa click
						if (document.getElementById("id_chon_cot_in_csdl").value == "Sổ phối")
						{
						
                        document.getElementById("id_1").value = document.getElementById('table1').rows[rIndex].cells[0].innerHTML;
                      
                     
						var date_convert = document.getElementById('table1').rows[rIndex].cells[1].innerHTML;
                        document.getElementById("id_2").value = date_convert.substr(6,4) + "-" + date_convert.substr(3,2)+"-" +date_convert.substr(0,2) ;
																	
						document.getElementById("id_3").value =  document.getElementById('table1').rows[rIndex].cells[3].innerHTML ;
                        document.getElementById("id_4").value = document.getElementById('table1').rows[rIndex].cells[4].innerHTML;
						document.getElementById("id_5").value = document.getElementById('table1').rows[rIndex].cells[5].innerHTML;
                       
					
				
					   // post to php with ajax
					    var hr = new XMLHttpRequest();
						hr.open("POST", "fuction_xoa--fuction_from_research_date_to_date.php", true);
						hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
					    hr.send("post_1="+document.getElementById("id_1").value+ // số tai
					            "&post_2="+document.getElementById("id_2").value+ // ngày
								"&post_6="+ document.getElementById('table1').rows[rIndex].cells[2].innerHTML+ // lần phối
								"&post_7="+document.getElementById("id_chon_cot_in_csdl").value+ // bảng post
								"&post_8="+document.getElementById("id_8").value); // trại
						hr.onload = function() {
						// Do whatever with response
					
												var ket_qua_tra_ve = hr.responseText.length ;   
										
												if (ket_qua_tra_ve >= 71)
												{
												document.getElementById("id_1").value = "";
						
												document.getElementById("id_2").value = "" ;
																	
												document.getElementById("id_3").value =  "" ;
												document.getElementById("id_4").value = "";
												document.getElementById("id_5").value = "";
												    if (ket_qua_tra_ve==71)
												    {alert(hr.responseText);}
												     if (ket_qua_tra_ve> 94)
												    {alert(hr.responseText);}
							
												}
												else
												{
							
												//	hiệu ứng amation css				
												if (click_xoa == 0){
												document.getElementById('id_1').className = mystyle_array[click_xoa] ;
												click_xoa = 1 ;
												} 
												else {
												document.getElementById('id_1').className = mystyle_array[click_xoa];
												click_xoa = 0 ;
												} ;	
												document.getElementById('table1').rows[rIndex].innerHTML = hr.responseText;	
												document.getElementById('id_gui').value = 'Thêm lại hoặc sửa'; 
												}
												}
					 
						}
						// - Sổ đẻ table xóa click
						if (document.getElementById("id_chon_cot_in_csdl").value == "Sổ đẻ" )
						{
						    
						if(document.getElementById('table1').rows[rIndex].cells[7].innerHTML !="")
						{
						document.getElementById("id_1").value = document.getElementById('table1').rows[rIndex].cells[0].innerHTML;
						var date_convert = document.getElementById('table1').rows[rIndex].cells[7].innerHTML;
                        document.getElementById("id_2").value = date_convert.substr(6,4) + "-" + date_convert.substr(3,2)+"-" +date_convert.substr(0,2) ;
																	
						document.getElementById("id_3").value =  document.getElementById('table1').rows[rIndex].cells[9].innerHTML ;
                        document.getElementById("id_4").value = document.getElementById('table1').rows[rIndex].cells[10].innerHTML;
						document.getElementById("id_5").value = document.getElementById('table1').rows[rIndex].cells[11].innerHTML;
						document.getElementById("id_6").value =  document.getElementById('table1').rows[rIndex].cells[12].innerHTML ;
                        document.getElementById("id_7").value = document.getElementById('table1').rows[rIndex].cells[13].innerHTML;
						document.getElementById("id_9").value = document.getElementById('table1').rows[rIndex].cells[8].innerHTML ;
					
				
					   // post to php with ajax
					    var hr = new XMLHttpRequest();
						hr.open("POST", "fuction_xoa--fuction_from_research_date_to_date.php", true);
						hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
					    hr.send("post_1="+document.getElementById("id_1").value+ // số tai
					           "&post_2="+document.getElementById("id_2").value+ // ngày
								"&post_6="+ document.getElementById('table1').rows[rIndex].cells[2].innerHTML+ // lần phối
								"&post_7="+document.getElementById("id_chon_cot_in_csdl").value+ // bảng post
								"&post_8="+document.getElementById("id_8").value); // trại
						hr.onload = function() {
						// Do whatever with response
					
												var ket_qua_tra_ve = hr.responseText.length ;   
												if (ket_qua_tra_ve >= 71)
												{
												document.getElementById("id_1").value = "";
						
												document.getElementById("id_2").value = "" ;
																	
												document.getElementById("id_3").value =  "" ;
												document.getElementById("id_4").value = "";
												document.getElementById("id_5").value = "";
												document.getElementById("id_6").value =  "" ;
												document.getElementById("id_7").value = "";
												document.getElementById("id_9").value = "";
												
											  if (ket_qua_tra_ve==71)
												    {alert(hr.responseText);}
												     if (ket_qua_tra_ve> 94)
												    {alert(hr.responseText);}
							
												}
												else
												{
							
												//	hiệu ứng amation css				
												if (click_xoa == 0){
												document.getElementById('id_1').className = mystyle_array[click_xoa] ;
												click_xoa = 1 ;
												} 
												else {
												document.getElementById('id_1').className = mystyle_array[click_xoa];
												click_xoa = 0 ;
												} ;	
												document.getElementById('table1').rows[rIndex].cells[7].innerHTML = hr.responseText;
												document.getElementById('table1').rows[rIndex].cells[8].innerHTML = hr.responseText ;
												document.getElementById('table1').rows[rIndex].cells[9].innerHTML = hr.responseText;
												document.getElementById('table1').rows[rIndex].cells[10].innerHTML = hr.responseText;
												document.getElementById('table1').rows[rIndex].cells[11].innerHTML = hr.responseText ;
												document.getElementById('table1').rows[rIndex].cells[12].innerHTML = hr.responseText;
												document.getElementById('table1').rows[rIndex].cells[13].innerHTML = hr.responseText;
												document.getElementById('table1').rows[rIndex].cells[14].innerHTML = hr.responseText;
												document.getElementById('table1').rows[rIndex].cells[15].innerHTML = hr.responseText;
												document.getElementById('table1').rows[rIndex].cells[16].innerHTML = hr.responseText;
												document.getElementById('table1').rows[rIndex].cells[22].style.display= 'none';
												document.getElementById('id_gui').value = 'Thêm lại hoặc sửa'; 
												}
												}	
						}
                        
					 
						}
						// - Sổ cai sữa table xóa click
						if (document.getElementById("id_chon_cot_in_csdl").value == "Sổ cai sữa" )
						{
						if(document.getElementById('table1').rows[rIndex].cells[14].innerHTML !="")
						{
						document.getElementById("id_1").value = document.getElementById('table1').rows[rIndex].cells[0].innerHTML;
						var date_convert = document.getElementById('table1').rows[rIndex].cells[14].innerHTML;
                        document.getElementById("id_2").value = date_convert.substr(6,4) + "-" + date_convert.substr(3,2)+"-" +date_convert.substr(0,2) ;
																	
						document.getElementById("id_3").value =  document.getElementById('table1').rows[rIndex].cells[15].innerHTML ;
                     
				
					   // post to php with ajax
					    var hr = new XMLHttpRequest();
						hr.open("POST", "fuction_xoa--fuction_from_research_date_to_date.php", true);
						hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");; 
					    hr.send("post_1="+document.getElementById("id_1").value+ // số tai
					            "&post_2="+document.getElementById("id_2").value+ // ngày
								"&post_6="+ document.getElementById('table1').rows[rIndex].cells[2].innerHTML+ // lần phối
								"&post_7="+document.getElementById("id_chon_cot_in_csdl").value+ // bảng post
								"&post_8="+document.getElementById("id_8").value); // trại
						hr.onload = function() {
						// Do whatever with response
					
												var ket_qua_tra_ve = hr.responseText.length ;   
												if (ket_qua_tra_ve >= 71)
												{
												document.getElementById("id_1").value = "";
						
												document.getElementById("id_2").value = "" ;
																	
												document.getElementById("id_3").value =  "" ;
											  if (ket_qua_tra_ve==71)
												    {alert(hr.responseText);}
												     if (ket_qua_tra_ve> 94)
												    {alert(hr.responseText);}
							
												}
												else
												{
							
												//	hiệu ứng amation css				
												if (click_xoa == 0){
												document.getElementById('id_1').className = mystyle_array[click_xoa] ;
												click_xoa = 1 ;
												} 
												else {
												document.getElementById('id_1').className = mystyle_array[click_xoa];
												click_xoa = 0 ;
												} ;	
												document.getElementById('table1').rows[rIndex].cells[14].innerHTML = hr.responseText;
												document.getElementById('table1').rows[rIndex].cells[15].innerHTML = hr.responseText ;
												document.getElementById('table1').rows[rIndex].cells[19].style.display= 'none';
												document.getElementById('id_gui').value = 'Thêm lại hoặc sửa'; 
												}
												}
					 	
						}
                        
						}
						
						// - Sổ heo vấn đề table xóa click
							if (document.getElementById("id_chon_cot_in_csdl").value == "Sổ heo vấn đề"   )
						{
							if(document.getElementById('table1').rows[rIndex].cells[5].innerHTML !="")
							{
							document.getElementById("id_1").value = document.getElementById('table1').rows[rIndex].cells[0].innerHTML;
						var date_convert = document.getElementById('table1').rows[rIndex].cells[5].innerHTML;
                        document.getElementById("id_2").value = date_convert.substr(6,4) + "-" + date_convert.substr(3,2)+"-" +date_convert.substr(0,2) ;
																	
						document.getElementById("id_3").value =  document.getElementById('table1').rows[rIndex].cells[6].innerHTML ;
                     
				
					   // post to php with ajax
					    var hr = new XMLHttpRequest();
						hr.open("POST", "fuction_xoa--fuction_from_research_date_to_date.php", true);
						hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");; 
					    hr.send("post_1="+document.getElementById("id_1").value+ // số tai
					              "&post_2="+document.getElementById("id_2").value+ // ngày
								"&post_6="+ document.getElementById('table1').rows[rIndex].cells[2].innerHTML+ // lần phối
								"&post_7="+document.getElementById("id_chon_cot_in_csdl").value+ // bảng post
								"&post_8="+document.getElementById("id_8").value); // trại
						hr.onload = function() {
						// Do whatever with response
					
												var ket_qua_tra_ve = hr.responseText.length ;   
												if (ket_qua_tra_ve >= 71)
												{
												document.getElementById("id_1").value = "";
						
												document.getElementById("id_2").value = "" ;
																	
												document.getElementById("id_3").value =  "" ;
											  if (ket_qua_tra_ve==71)
												    {alert(hr.responseText);}
												     if (ket_qua_tra_ve> 94)
												    {alert(hr.responseText);}
							
												}
												else
												{
							
												//	hiệu ứng amation css				
												if (click_xoa == 0){
												document.getElementById('id_1').className = mystyle_array[click_xoa] ;
												click_xoa = 1 ;
												} 
												else {
												document.getElementById('id_1').className = mystyle_array[click_xoa];
												click_xoa = 0 ;
												} ;	
												document.getElementById('table1').rows[rIndex].cells[5].innerHTML = hr.responseText;
												document.getElementById('table1').rows[rIndex].cells[6].innerHTML = hr.responseText ;
												 document.getElementById('table1').rows[rIndex].cells[18].style.display= 'none';
												document.getElementById('id_gui').value = 'Thêm lại hoặc sửa'; 
												}
												}	
							}
						
                        
					 
						}
						
						// - Sổ heo nái loại table xóa click
							if (document.getElementById("id_chon_cot_in_csdl").value == "Sổ theo dõi heo nái chết loại"  )
						{
							if(document.getElementById('table1').rows[rIndex].cells[16].innerHTML !="")
							{
								document.getElementById("id_1").value = document.getElementById('table1').rows[rIndex].cells[0].innerHTML;
						var date_convert = document.getElementById('table1').rows[rIndex].cells[16].innerHTML;
                        document.getElementById("id_2").value = date_convert.substr(6,4) + "-" + date_convert.substr(3,2)+"-" +date_convert.substr(0,2) ;
																	
						document.getElementById("id_3").value =  document.getElementById('table1').rows[rIndex].cells[17].innerHTML ;
                     
				
					   // post to php with ajax
					    var hr = new XMLHttpRequest();
						hr.open("POST", "fuction_xoa--fuction_from_research_date_to_date.php", true);
						hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");; 
					    hr.send("post_1="+document.getElementById("id_1").value+ // số tai
					              "&post_2="+document.getElementById("id_2").value+ // ngày
								"&post_6="+ document.getElementById('table1').rows[rIndex].cells[2].innerHTML+ // lần phối
								"&post_7="+document.getElementById("id_chon_cot_in_csdl").value+ // bảng post
								"&post_8="+document.getElementById("id_8").value); // trại
						hr.onload = function() {
						// Do whatever with response
					
												var ket_qua_tra_ve = hr.responseText.length ;   
												if (ket_qua_tra_ve >= 71)
												{
												document.getElementById("id_1").value = "";
						
												document.getElementById("id_2").value = "" ;
																	
												document.getElementById("id_3").value =  "" ;
											  if (ket_qua_tra_ve==71)
												    {alert(hr.responseText);}
												     if (ket_qua_tra_ve> 94)
												    {alert(hr.responseText);}
							
												}
												else
												{
							
												//	hiệu ứng amation css				
												if (click_xoa == 0){
												document.getElementById('id_1').className = mystyle_array[click_xoa] ;
												click_xoa = 1 ;
												} 
												else {
												document.getElementById('id_1').className = mystyle_array[click_xoa];
												click_xoa = 0 ;
												} ;	
													 for(var i=1;i<table.rows.length;i++)
														{document.getElementById('table1').rows[i].cells[16].innerHTML = hr.responseText;
														 document.getElementById('table1').rows[i].cells[17].innerHTML = hr.responseText ;
														 document.getElementById('table1').rows[i].cells[19].style.display= 'none';
														}
												document.getElementById('id_gui').value = 'Thêm lại hoặc sửa'; 
												}
												}
							}
						
                        
					 
						}
						// - Sổ heo con chết table xóa click
						if (document.getElementById("id_chon_cot_in_csdl").value == "Sổ heo con chết theo mẹ" )
						{
						if(document.getElementById('table1').rows[rIndex].cells[17].innerHTML !="")
						{
						document.getElementById("id_1").value = document.getElementById('table1').rows[rIndex].cells[0].innerHTML;
						var date_convert = document.getElementById('table1').rows[rIndex].cells[17].innerHTML;
                        document.getElementById("id_2").value = date_convert.substr(6,4) + "-" + date_convert.substr(3,2)+"-" +date_convert.substr(0,2) ;
																	
						document.getElementById("id_3").value =  document.getElementById('table1').rows[rIndex].cells[18].innerHTML ;
						document.getElementById("id_4").value =  document.getElementById('table1').rows[rIndex].cells[19].innerHTML ;
				
					   // post to php with ajax
					    var hr = new XMLHttpRequest();
						hr.open("POST", "fuction_xoa--fuction_from_research_date_to_date.php", true);
						hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");; 
					    hr.send("post_1="+document.getElementById("id_1").value+ // số tai
					              "&post_2="+document.getElementById("id_2").value+ // ngày
								"&post_6="+ document.getElementById('table1').rows[rIndex].cells[2].innerHTML+ // lần phối
								"&post_7="+document.getElementById("id_chon_cot_in_csdl").value+ // bảng post
								"&post_8="+document.getElementById("id_8").value); // trại
						hr.onload = function() {
						// Do whatever with response
					
												var ket_qua_tra_ve = hr.responseText.length ;   
												if (ket_qua_tra_ve >= 71)
												{
												document.getElementById("id_1").value = "";
						
												document.getElementById("id_2").value = "" ;
																	
												document.getElementById("id_3").value =  "" ;
												document.getElementById("id_4").value =  "" ;
											  if (ket_qua_tra_ve==71)
												    {alert(hr.responseText);}
												     if (ket_qua_tra_ve> 94)
												    {alert(hr.responseText);}
							
												}
												else
												{
							
												//	hiệu ứng amation css				
												if (click_xoa == 0){
												document.getElementById('id_1').className = mystyle_array[click_xoa] ;
												click_xoa = 1 ;
												} 
												else {
												document.getElementById('id_1').className = mystyle_array[click_xoa];
												click_xoa = 0 ;
												} ;	
												document.getElementById('table1').rows[rIndex].cells[17].innerHTML = hr.responseText;
												document.getElementById('table1').rows[rIndex].cells[18].innerHTML = hr.responseText ;
												document.getElementById('table1').rows[rIndex].cells[19].innerHTML = hr.responseText ;
												document.getElementById('table1').rows[rIndex].cells[20].style.display= 'none';
												document.getElementById('id_gui').value = 'Thêm lại hoặc sửa'; 
												}
												}	
						}		
						
                        
					 
						}
						// - Sổ heo hậu bị table xóa click
						if (document.getElementById("id_chon_cot_in_csdl").value == "Sổ theo dõi hậu bị")
						{
						
                        document.getElementById("id_1").value = document.getElementById('table1').rows[rIndex].cells[0].innerHTML;
						var date_convert = document.getElementById('table1').rows[rIndex].cells[1].innerHTML;
                        document.getElementById("id_2").value = date_convert.substr(6,4) + "-" + date_convert.substr(3,2)+"-" +date_convert.substr(0,2) ;
																	
						
						
						
						
						var date_convert_2 = document.getElementById('table1').rows[rIndex].cells[3].innerHTML;
                        document.getElementById("id_3").value = date_convert_2.substr(6,4) + "-" + date_convert_2.substr(3,2)+"-" +date_convert_2.substr(0,2) ;
						
						document.getElementById("id_4").value =  document.getElementById('table1').rows[rIndex].cells[2].innerHTML ;
					   // post to php with ajax
					    var hr = new XMLHttpRequest();
						hr.open("POST", "fuction_xoa--fuction_from_research_date_to_date.php", true);
						hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");; 
					    hr.send("post_1="+document.getElementById("id_1").value+ // số tai
					              "&post_2="+document.getElementById("id_2").value+ // ngày
								"&post_7="+document.getElementById("id_chon_cot_in_csdl").value+ // bảng post
								"&post_8="+document.getElementById("id_8").value); // trại
						hr.onload = function() {
						// Do whatever with response
					
												var ket_qua_tra_ve = hr.responseText.length ; 
											
												if (ket_qua_tra_ve >= 71)
												{
												document.getElementById("id_1").value = "";
						
												document.getElementById("id_2").value = "" ;
																	
												document.getElementById("id_3").value =  "" ;
												document.getElementById("id_4").value =  "" ;
											  if (ket_qua_tra_ve==71)
												    {alert(hr.responseText);}
												     if (ket_qua_tra_ve> 94)
												    {alert(hr.responseText);}
							
												}
												else
												{
							
												//	hiệu ứng amation css				
												if (click_xoa == 0){
												document.getElementById('id_1').className = mystyle_array[click_xoa] ;
												click_xoa = 1 ;
												} 
												else {
												document.getElementById('id_1').className = mystyle_array[click_xoa];
												click_xoa = 0 ;
												} ;	
												document.getElementById('table1').rows[rIndex].innerHTML = hr.responseText;	
												document.getElementById('id_gui').value = 'Thêm lại hoặc sửa'; 
												}
												}
					 
						}
						
						// - Sổ heo hậu đực table xóa click
						if (document.getElementById("id_chon_cot_in_csdl").value == "Sổ theo dõi heo đực")
						{
						
                        document.getElementById("id_1").value = document.getElementById('table1').rows[rIndex].cells[0].innerHTML;
						var date_convert = document.getElementById('table1').rows[rIndex].cells[1].innerHTML;
                        document.getElementById("id_2").value = date_convert.substr(6,4) + "-" + date_convert.substr(3,2)+"-" +date_convert.substr(0,2) ;
																	
						
						
						
						
						var date_convert_2 = document.getElementById('table1').rows[rIndex].cells[2].innerHTML;
                        document.getElementById("id_3").value = date_convert_2.substr(6,4) + "-" + date_convert_2.substr(3,2)+"-" +date_convert_2.substr(0,2) ;
						
					
					   // post to php with ajax
					    var hr = new XMLHttpRequest();
						hr.open("POST", "fuction_xoa--fuction_from_research_date_to_date.php", true);
						hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");; 
					    hr.send("post_1="+document.getElementById("id_1").value+ // số tai
					      "&post_2="+document.getElementById("id_2").value+ // ngày
								"&post_7="+document.getElementById("id_chon_cot_in_csdl").value+ // bảng post
								"&post_8="+document.getElementById("id_8").value); // trại
						hr.onload = function() {
						// Do whatever with response
					
												var ket_qua_tra_ve = hr.responseText.length ;   
												if (ket_qua_tra_ve >= 71)
												{
												document.getElementById("id_1").value = "";
						
												document.getElementById("id_2").value = "" ;
																	
												document.getElementById("id_3").value =  "" ;
											
											  if (ket_qua_tra_ve==71)
												    {alert(hr.responseText);}
												     if (ket_qua_tra_ve> 94)
												    {alert(hr.responseText);}
							
												}
												else
												{
							
												//	hiệu ứng amation css				
												if (click_xoa == 0){
												document.getElementById('id_1').className = mystyle_array[click_xoa] ;
												click_xoa = 1 ;
												} 
												else {
												document.getElementById('id_1').className = mystyle_array[click_xoa];
												click_xoa = 0 ;
												} ;	
												document.getElementById('table1').rows[rIndex].innerHTML = hr.responseText;	
												document.getElementById('id_gui').value = 'Thêm lại hoặc sửa'; 
												}
												}
					 
						}
						// - Kiểm tra có dữ liệu để xóa không
						if (document.getElementById("id_chon_cot_in_csdl").value == "Sổ heo vấn đề" )
						{
							if(document.getElementById('table1').rows[rIndex].cells[5].innerHTML =="" )
							{
						return	alert("Ngày vấn đề không có dữ liệu");		
							}
							
						}
					   	
						if (document.getElementById("id_chon_cot_in_csdl").value == "Sổ cai sữa" )
						
						{
							if(document.getElementById('table1').rows[rIndex].cells[14].innerHTML =="")
							{
						return	alert("Ngày cai sữa không có dữ liệu");	
							}	
						}
							
						if (document.getElementById("id_chon_cot_in_csdl").value == "Sổ đẻ" )
						{
							if(document.getElementById('table1').rows[rIndex].cells[7].innerHTML =="")
							{
						return	alert("Ngày đẻ không có dữ liệu");	
							}	
						}
							
						if (document.getElementById("id_chon_cot_in_csdl").value == "Sổ theo dõi heo nái chết loại"  )
						{
							if(document.getElementById('table1').rows[rIndex].cells[16].innerHTML =="")
							{
						return	alert("Ngày chết(loại) chưa có dữ liệu");
							}	
						}
							
						if (document.getElementById("id_chon_cot_in_csdl").value == "Sổ heo con chết theo mẹ"  )
						{
							if(document.getElementById('table1').rows[rIndex].cells[17].innerHTML =="")
							{
				    	return		alert("Ngày heo con chết(loại) chưa có dữ liệu");	
							}	
						}
							
						
                    };
                }
            }
  

</script>


