

<?php
		

$ma_so_tai =$_POST["post1"];

$gobal_tim_kiem_sua_xoa =$_POST["post4"];

$trai=$_POST["post8"];

//** phối kết nối csdl	
if ($gobal_tim_kiem_sua_xoa == "phoi")
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






if ($gobal_tim_kiem_sua_xoa == "de")
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
  if( sheet1.`nguyen nhan nai mat` = 'l', 'Bán loại',if( sheet1.`nguyen nhan nai mat` = 'c', 'Chết','')) ,
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



echo json_encode($arraymysql_1);





?>	

