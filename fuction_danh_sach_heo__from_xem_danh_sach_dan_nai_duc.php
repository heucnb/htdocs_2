<table class="table_nhận_dữ_liệu" id="table2" > 
   
</table>


<table class="table_nhận_dữ_liệu" id="table1" > 
   
</table>


<script>
<?php
		


$kiem_tra=$_POST["post1"];

$trai=$_POST["post8"];

//** danh sách heo phối
if ($kiem_tra == "Danh sách heo phối")
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
  DATE_FORMAT( sheet1.`de du kien`, '%d/%m/%Y') 
  
From
    sheet1
Where
 
sheet1.trai = '".$trai."' AND
`lan_phoi_them_1` IS NULL AND 
`ngay de` IS NULL  AND
`ngay van de` IS NULL AND
`ngay ban loai chet` IS NULL
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
"Ngày đẻ DK"


];
for ($x = 0+1; $x < $cout_1+1; $x++) {
    $arraymysql_1[$x] = mysqli_fetch_row($result_1) ;
  }
  

}


//** danh sách heo đẻ
if ($kiem_tra == "Danh sách heo đẻ")
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
  
   sheet1.`duc phoi`,
  DATE_FORMAT( sheet1.`de du kien`, '%d/%m/%Y') ,
   DATE_FORMAT(sheet1.`ngay de`, '%d/%m/%Y'),
    sheet1.SCSR,
    sheet1.chet,
    sheet1.tat,
    sheet1.kho,
    sheet1.coi,
    sheet1.SCCS
	
From
    sheet1
Where
 
sheet1.trai = '".$trai."' AND
`lan_phoi_them_1` IS NULL AND 
`ngay de` IS NOT NULL AND
`ngay cai` IS NULL  AND

`ngay ban loai chet` IS NULL
	";
$result_1 = mysqli_query($conn, $sql_1);
$cout_1 = mysqli_num_rows($result_1);
$arraymysql_1 = [];
$arraymysql_1[0] =["Số tai",
"Ngày phối",
"Đực phối",

"Ngày đẻ DK",
"Ngày đẻ",
"SCSR",
"Chết trắng",
"Khô",
"Tật",
"Còi",
"SCCS"


];
for ($x = 0+1; $x < $cout_1+1; $x++) {
    $arraymysql_1[$x] = mysqli_fetch_row($result_1) ;
  }
  

}




//** danh sách heo cai sữa
if ($kiem_tra == "Danh sách heo cai sữa")
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
  
   sheet1.`duc phoi`,

  DATE_FORMAT( sheet1.`de du kien`, '%d/%m/%Y') ,
   DATE_FORMAT(sheet1.`ngay de`, '%d/%m/%Y'),
    sheet1.SCSR,
    sheet1.chet,
    sheet1.tat,
    sheet1.kho,
    sheet1.coi,
    sheet1.SCCS,
	  DATE_FORMAT(sheet1.`ngay cai`, '%d/%m/%Y'),
	sheet1.`so con cai`

From
    sheet1
Where
 
sheet1.trai = '".$trai."' AND
`lan_phoi_them_1` IS NULL AND 
`ngay cai` IS NOT NULL  AND
`ngay ban loai chet` IS NULL
	";
$result_1 = mysqli_query($conn, $sql_1);
$cout_1 = mysqli_num_rows($result_1);
$arraymysql_1 = [];
$arraymysql_1[0] =["Số tai",
"Ngày phối",

"Đực phối",

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



//** danh sách heo vấn đề
if ($kiem_tra == "Danh sách heo vấn đề")
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
    DATE_FORMAT(sheet1.`ngay van de`, '%d/%m/%Y'),
	sheet1.`nguyen nhan van de`,
	sheet1.`so ngay loc`,
  DATE_FORMAT( sheet1.`de du kien`, '%d/%m/%Y') 
From
    sheet1
Where
 
sheet1.trai = '".$trai."' AND
`lan_phoi_them_1` IS NULL AND 
`ngay de` IS NULL  AND
`ngay van de` IS NOT NULL AND
`ngay ban loai chet` IS NULL
	";
$result_1 = mysqli_query($conn, $sql_1);
$cout_1 = mysqli_num_rows($result_1);
$arraymysql_1 = [];
$arraymysql_1[0] =["Số tai",
"Ngày phối",
"Lần phối",
"Đực phối",
"Người phối",
"Biểu hiện phối",
"Ngày vấn đề",
"Nguyên nhân vấn đề",
"Số ngày vấn đề",
"Ngày đẻ DK"


];
for ($x = 0+1; $x < $cout_1+1; $x++) {
    $arraymysql_1[$x] = mysqli_fetch_row($result_1) ;
  }
  

}






//** danh sách heo hậu bị
if ($kiem_tra == "Danh sách heo hậu bị")
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
	sheet2.`so_tai`,
  DATE_FORMAT( sheet2.`ngay_nhap`, '%d/%m/%Y')	 ,
	
	sheet2.`lo_nhap`,
 DATE_FORMAT( sheet2.`ngay_sinh`, '%d/%m/%Y')		
   
From
    sheet2
Where
   
	sheet2.`phan_loai_heo` = 'HB'
	And     
	sheet2.trai = '".$trai."'
	 AND
	 `ngay_chet(loai)` IS NULL
	";
$result_1 = mysqli_query($conn, $sql_1);
$cout_1 = mysqli_num_rows($result_1);
$arraymysql_1 = [];
$arraymysql_1[0] =["Số tai",

"Ngày nhập",
"Lô nhập",
"Ngày sinh"

];
for ($x = 0+1; $x < $cout_1+1; $x++) {
    $arraymysql_1[$x] = mysqli_fetch_row($result_1) ;
  }
  

}

//** danh sách heo đực
if ($kiem_tra == "Danh sách heo đực")
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
	sheet2.`so_tai`,
  DATE_FORMAT( sheet2.`ngay_nhap`, '%d/%m/%Y')	 ,
	
	sheet2.`lo_nhap`,
 DATE_FORMAT( sheet2.`ngay_sinh`, '%d/%m/%Y')		
   
From
    sheet2
Where
   
	sheet2.`phan_loai_heo` = 'D'
	And     
	sheet2.trai = '".$trai."'
	 AND
	 `ngay_chet(loai)` IS NULL
	";
$result_1 = mysqli_query($conn, $sql_1);
$cout_1 = mysqli_num_rows($result_1);
$arraymysql_1 = [];
$arraymysql_1[0] =["Số tai",

"Ngày nhập",
"Lô nhập",
"Ngày sinh"

];
for ($x = 0+1; $x < $cout_1+1; $x++) {
    $arraymysql_1[$x] = mysqli_fetch_row($result_1) ;
  }
  

}




//** heo quá 123 ngày chưa đẻ
if ($kiem_tra == "Heo quá 123 ngày chưa đẻ")
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
  
   sheet1.`duc phoi`,

  DATE_FORMAT( sheet1.`de du kien`, '%d/%m/%Y') ,
   DATE_FORMAT(sheet1.`ngay de`, '%d/%m/%Y')

From
    sheet1
Where
`ngay phoi` <= NOW() - 123 AND
`ngay de` IS NULL AND 
`ngay van de` IS NULL AND 
sheet1.trai = '".$trai."' AND
`lan_phoi_them_1` IS NULL AND 
`ngay ban loai chet` IS NULL
	";
$result_1 = mysqli_query($conn, $sql_1);
$cout_1 = mysqli_num_rows($result_1);
$arraymysql_1 = [];
$arraymysql_1[0] =["Số tai",
"Ngày phối",

"Đực phối",

"Ngày đẻ DK",
"Ngày đẻ"


];
for ($x = 0+1; $x < $cout_1+1; $x++) {
    $arraymysql_1[$x] = mysqli_fetch_row($result_1) ;
  }
  

}


//** heo quá 35 ngày chưa cai
if ($kiem_tra == "Heo quá 35 ngày chưa cai sữa")
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
  
   sheet1.`duc phoi`,

  DATE_FORMAT( sheet1.`de du kien`, '%d/%m/%Y') ,
   DATE_FORMAT(sheet1.`ngay de`, '%d/%m/%Y'),
    sheet1.SCSR,
    sheet1.chet,
    sheet1.tat,
    sheet1.kho,
    sheet1.coi,
    sheet1.SCCS,
	  DATE_FORMAT(sheet1.`ngay cai`, '%d/%m/%Y')

From
    sheet1
Where
 `ngay de`  <= NOW() - 35 AND
 `ngay de` IS NOT NULL AND 
sheet1.trai = '".$trai."' AND
`lan_phoi_them_1` IS NULL AND 
`ngay cai` IS NULL  AND
`ngay ban loai chet` IS NULL
	";
$result_1 = mysqli_query($conn, $sql_1);
$cout_1 = mysqli_num_rows($result_1);
$arraymysql_1 = [];
$arraymysql_1[0] =["Số tai",
"Ngày phối",

"Đực phối",

"Ngày đẻ DK",
"Ngày đẻ",
"SCSR",
"Chết trắng",
"Khô",
"Tật",
"Còi",
"SCCS",
"Ngày cai"


];
for ($x = 0+1; $x < $cout_1+1; $x++) {
    $arraymysql_1[$x] = mysqli_fetch_row($result_1) ;
  }
  

}

//** heo cai sữa quá 7 ngày chưa phối
if ($kiem_tra == "Heo cai sữa >7 ngày chưa phối")
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
  
   sheet1.`duc phoi`,

  DATE_FORMAT( sheet1.`de du kien`, '%d/%m/%Y') ,
   DATE_FORMAT(sheet1.`ngay de`, '%d/%m/%Y'),
    sheet1.SCSR,
    sheet1.chet,
    sheet1.tat,
    sheet1.kho,
    sheet1.coi,
    sheet1.SCCS,
	  DATE_FORMAT(sheet1.`ngay cai`, '%d/%m/%Y'),
	sheet1.`so con cai`

From
    sheet1
Where
 `ngay cai`  <= NOW() - 8 AND
sheet1.trai = '".$trai."' AND
`lan_phoi_them_1` IS NULL AND 
`ngay cai` IS NOT NULL  AND
`ngay ban loai chet` IS NULL
	";
$result_1 = mysqli_query($conn, $sql_1);
$cout_1 = mysqli_num_rows($result_1);
$arraymysql_1 = [];
$arraymysql_1[0] =["Số tai",
"Ngày phối",

"Đực phối",

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

//** heo lốc 2 lần liên tiếp
if ($kiem_tra == "Heo lốc, xảy thai 2 lần liên tiếp")
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
$sql_1 = "SELECT `so tai`,ngay_phoi,table1.nvd,table1.`nguyen nhan van de`,table2.nvd2,table2.`nguyen nhan van de`
FROM (SELECT `ma lan phoi` as ma_lan_phoi,`so tai`,DATE_FORMAT(sheet1.`ngay phoi`, '%d/%m/%Y') as ngay_phoi, DATE_FORMAT(sheet1.`ngay van de`, '%d/%m/%Y') as nvd,`nguyen nhan van de`  FROM `sheet1` WHERE `ngay van de` IS NOT NULL AND `ngay ban loai chet` IS NULL AND `trai` = '".$trai."' AND `lan_phoi_them_1` IS NULL) as table1
LEFT JOIN (SELECT CONCAT(`trai`,'-',`lan phoi`+1,'-',`so tai`) as ma_lan_phoi_sau,DATE_FORMAT(sheet1.`ngay van de`, '%d/%m/%Y') as nvd2,`nguyen nhan van de`
FROM `sheet1` WHERE `ngay van de` IS NOT NULL AND `ngay ban loai chet` IS NULL AND `trai` = '".$trai."'
) as table2
ON table1.ma_lan_phoi = table2.ma_lan_phoi_sau
WHERE table2.nvd2 IS NOT NULL
	";
$result_1 = mysqli_query($conn, $sql_1);
$cout_1 = mysqli_num_rows($result_1);
$arraymysql_1 = [];
$arraymysql_1[0] =["Số tai",
"Ngày phối",
"Ngày vấn đề",

"Nguyên nhân vấn đề",

"Ngày vấn đề 2",
"Nguyên nhân vấn đề 2"
];
for ($x = 0+1; $x < $cout_1+1; $x++) {
    $arraymysql_1[$x] = mysqli_fetch_row($result_1) ;
  }
  

}

//** heo đẻ 2 lứa liên tiếp dưới 7 con
if ($kiem_tra == "Heo đẻ trung bình 2 lứa dưới 7 con")
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
$sql_1 = "select *
from
(
   SELECT `so tai`,DATE_FORMAT(table1.`ngay phoi`, '%d/%m/%Y'),DATE_FORMAT(table1.`ngay de`, '%d/%m/%Y') as ngay_de_1,table1.`SCCS`as sccs_1,DATE_FORMAT(table2.`ngay de`, '%d/%m/%Y') as ngay_de_2,table2.`SCCS`as sccs_2,IF(table2.`SCCS`IS NULL,100,table1.`SCCS` + table2.`SCCS`) as tong_hai_lan_de 
FROM (SELECT `ma lan phoi` as ma_lan_phoi, `so tai`,`ngay phoi`,`ngay de`,`SCSR`,`chet`,`tat`,`kho`,`coi`,`SCCS`  FROM `sheet1` WHERE `SCCS` <= 7 AND `ngay ban loai chet` IS NULL AND `trai` = '".$trai."' AND `lan_phoi_them_1` IS NULL AND`ngay de` IS NOT NULL) as table1
LEFT JOIN (SELECT CONCAT(`trai`,'-',`lan phoi`+1,'-',`so tai`) as ma_lan_phoi_sau, `ngay de`,`SCSR`,`chet`,`tat`,`kho`,`coi`,`SCCS` FROM `sheet1` WHERE `SCCS` <= 11 AND `ngay ban loai chet` IS NULL AND `trai` = '".$trai."'  AND`ngay de` IS NOT NULL) as table2
ON table1.ma_lan_phoi = table2.ma_lan_phoi_sau
) as x
WHERE x.tong_hai_lan_de <=14
	";
$result_1 = mysqli_query($conn, $sql_1);
$cout_1 = mysqli_num_rows($result_1);
$arraymysql_1 = [];
$arraymysql_1[0] =["Số tai",
"Ngày phối",
"Ngày đẻ",
"SCCS",
"Ngày đẻ lứa trước",
"SCCS lứa trước",

"Tổng số con còn sống 2 lứa liên tiếp"


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
	
   }
   