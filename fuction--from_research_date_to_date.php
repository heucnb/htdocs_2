


<?php

$date_ngay_begin=$_POST["post2"];
$date_ngay_end =$_POST["post3"];

$gobal_tim_kiem_sua_xoa =$_POST["post4"];

$trai=$_POST["post8"];

//** phối kết nối csdl	
if ($gobal_tim_kiem_sua_xoa == "phoi")
{
$chon_cot_in_csdl = "ngay phoi"	;
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
   DATE_FORMAT(sheet1.`ngay de`, '%d/%m/%Y'),
    sheet1.SCSR,
    sheet1.chet,
    sheet1.tat,
    sheet1.kho,
    sheet1.coi,
    sheet1.SCCS,
	  DATE_FORMAT(sheet1.`ngay cai`, '%d/%m/%Y'),
	sheet1.`so con cai`,
    sheet1.trai
From
    sheet1
Where
   sheet1.`".$chon_cot_in_csdl."` >= '".$date_ngay_begin."' And
   sheet1.`".$chon_cot_in_csdl."` <= '".$date_ngay_end."' And
sheet1.trai = '".$trai."'
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
"Ngày đẻ",
"SCSR",
"Chết trắng",
"Khô",
"Tật",
"Còi",
"SCCS",
"Ngày cai",
"Số con cai"

];
for ($x = 0+1; $x < $cout_1+1; $x++) {
    $arraymysql_1[$x] = mysqli_fetch_row($result_1) ;
  }
  

}






if ($gobal_tim_kiem_sua_xoa == "de")
{
$chon_cot_in_csdl = "ngay de"	;
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
   DATE_FORMAT(sheet1.`ngay de`, '%d/%m/%Y'),
    ROUND(sheet1.Pss, 1),
    sheet1.SCSR,
    sheet1.chet,
    sheet1.tat,
    sheet1.kho,
    sheet1.coi,
    sheet1.SCCS,
	sheet1.`so_con_duc`,
	sheet1.`so cat tai` ,
	 DATE_FORMAT(sheet1.`ngay cai`, '%d/%m/%Y'),
	sheet1.`so con cai`,
	sheet1.`lan phoi`,
    sheet1.trai
From
    sheet1
Where
   sheet1.`".$chon_cot_in_csdl."` >= '".$date_ngay_begin."' And
   sheet1.`".$chon_cot_in_csdl."` <= '".$date_ngay_end."' And
sheet1.trai = '".$trai."'
	";
$result_1 = mysqli_query($conn, $sql_1);
$cout_1 = mysqli_num_rows($result_1);
$arraymysql_1 = [];
$arraymysql_1[0] = [
"Số tai",
"Ngày đẻ",
"Pss",
"SCSR",
"Chết trắng",
"Khô",
"Tật",
"Còi",
"SCCS",
"Số heo được",
"Lý lịch",
"Ngày cai",
"Số con cai",
"Lần phối"

];
for ($x = 0+1; $x < $cout_1+1; $x++) {
    $arraymysql_1[$x] = mysqli_fetch_row($result_1) ;
  }
  


}







if ($gobal_tim_kiem_sua_xoa == "cai_sua")
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
	 DATE_FORMAT(sheet1.`ngay cai`, '%d/%m/%Y'),
	sheet1.`so con cai`,
	sheet1.`so ngay cai`,
	sheet1.`lan phoi`,
    sheet1.trai
From
    sheet1
Where
   sheet1.`ngay cai` >= '".$date_ngay_begin."' And
   sheet1.`ngay cai` <= '".$date_ngay_end."' And
sheet1.trai = '".$trai."'
	";
$result_1 = mysqli_query($conn, $sql_1);
$cout_1 = mysqli_num_rows($result_1);
$arraymysql_1 = [];
$arraymysql_1[0] = [["Số tai"],

"Ngày cai",
"Số con cai",
"Số ngày cai",
"Lần phối",
"Trại"

];
for ($x = 0+1; $x < $cout_1+1; $x++) {
    $arraymysql_1[$x] = mysqli_fetch_row($result_1) ;
  }
  


}







if ($gobal_tim_kiem_sua_xoa == "van_de")
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
 
    sheet1.`lan phoi`,
  
	 DATE_FORMAT(sheet1.`ngay van de`, '%d/%m/%Y'),	
	sheet1.`nguyen nhan van de`,
 sheet1.`so ngay loc`,

	
    sheet1.trai
From
    sheet1
Where
   sheet1.`ngay van de` >= '".$date_ngay_begin."' And
   sheet1.`ngay van de` <= '".$date_ngay_end."' And
sheet1.trai = '".$trai."'
	";
$result_1 = mysqli_query($conn, $sql_1);
$cout_1 = mysqli_num_rows($result_1);
$arraymysql_1 = [];
$arraymysql_1[0] = [["Số tai"],

"Lần phối",
"Ngày xảy ra vấn đề",
"Nguyên nhân vấn đề",
"Số ngày vấn đề",
"Trại"

];


for ($x = 0+1; $x < $cout_1+1; $x++) {
    $arraymysql_1[$x] = mysqli_fetch_row($result_1) ;
  }
  

}






if ($gobal_tim_kiem_sua_xoa == "nai_chet_loai")
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
 
    sheet1.`lan phoi`,
  
	DATE_FORMAT(sheet1.`ngay ban loai chet`, '%d/%m/%Y') ,
   sheet1.`nguyen nhan nai mat`,
    sheet1.trai
From
    sheet1
Where
   sheet1.`ngay ban loai chet` >= '".$date_ngay_begin."' And
   sheet1.`ngay ban loai chet` <= '".$date_ngay_end."' And
    sheet1.`lan phoi` = 1 And
sheet1.trai = '".$trai."'
	";
$result_1 = mysqli_query($conn, $sql_1);
$cout_1 = mysqli_num_rows($result_1);
$arraymysql_1 = [];
$arraymysql_1[0] = [["Số tai"],

"Lần phối",
"Ngày chết(loại)",
"Phân loại",

"Trại"

];


for ($x = 0+1; $x < $cout_1+1; $x++) {
    $arraymysql_1[$x] = mysqli_fetch_row($result_1) ;
  }
  
  


}







if ($gobal_tim_kiem_sua_xoa == "con_chet_loai")
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
	
	sheet1.`lan phoi`,
	DATE_FORMAT(sheet1.`ngay heo con chet`, '%d/%m/%Y')	,
	sheet1.`so luong heo con chet theo me`,
	sheet1.`nguyen nhan heo con chet`,
    sheet1.trai
From
    sheet1
Where
   sheet1.`ngay heo con chet` >= '".$date_ngay_begin."' And
   sheet1.`ngay heo con chet` <= '".$date_ngay_end."' And
sheet1.trai = '".$trai."'
	";
$result_1 = mysqli_query($conn, $sql_1);
$cout_1 = mysqli_num_rows($result_1);
$arraymysql_1 = [];
$arraymysql_1[0] = [["Số tai"],

"Lần phối",
"Ngày heo con chết",
"Số lượng heo con chết",
"Nguyên nhân heo con chết",
"Trại"

];
for ($x = 0+1; $x < $cout_1+1; $x++) {
    $arraymysql_1[$x] = mysqli_fetch_row($result_1) ;
  }
  


}








if ($gobal_tim_kiem_sua_xoa == "hau_bi")
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
    sheet2.`ngay_nhap` >= '".$date_ngay_begin."' 
	And
	 sheet2.`ngay_nhap` <= '".$date_ngay_end."'
	And     
	sheet2.`phan_loai_heo` = 'HB'
	And     
	sheet2.trai = '".$trai."'
	";
$result_1 = mysqli_query($conn, $sql_1);
$cout_1 = mysqli_num_rows($result_1);

  
$arraymysql_1 = [];
$arraymysql_1[0] = ["Số tai",

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




if ($gobal_tim_kiem_sua_xoa == "duc")
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
    sheet2.`ngay_nhap` >= '".$date_ngay_begin."' 
	And
	 sheet2.`ngay_nhap` <= '".$date_ngay_end."'
	And     
	sheet2.`phan_loai_heo` = 'D'
	And     
	sheet2.trai = '".$trai."'
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


  echo json_encode($arraymysql_1);

?>	
