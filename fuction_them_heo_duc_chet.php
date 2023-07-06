<?php
include "setup/fuction_ket_noi_csdl.php";


  
$so_tai =safeSQL($_POST["post1"]);

$date_ngay_chet_loai=safeSQL($_POST["post2"]);
$phan_loai=safeSQL($_POST["post3"]);
$trai=safeSQL($_POST["post8"]);
include "setup/check_token_and_post.php";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
	if (!$conn) {
	die("Connection failed: " . mysqli_connect_error());
	}
	
	// láy số ngày khóa dữ liệu
$sql_lay_ngay_khoa_du_lieu = "select `khoa_ngay_sua_du_lieu` from login where `trai`='".$trai."' limit 1 ";
$result_lay_ngay_khoa_du_lieu = mysqli_query($conn, $sql_lay_ngay_khoa_du_lieu);
$cout_lay_ngay_khoa_du_lieu = mysqli_num_rows($result_lay_ngay_khoa_du_lieu);	
$arraymysql_lay_ngay_khoa_du_lieu = [];
for ($x = 0; $x < $cout_lay_ngay_khoa_du_lieu ; $x++) {
    $arraymysql_lay_ngay_khoa_du_lieu[$x] = mysqli_fetch_row($result_lay_ngay_khoa_du_lieu) ;
  }
$so_ngay_khoa_du_lieu =  $arraymysql_lay_ngay_khoa_du_lieu[0][0];

$ngay_khoa_du_lieu = date ( 'd/m/Y' , strtotime ( "-  ".$so_ngay_khoa_du_lieu."  day" , strtotime ( date('Y/m/d') ) ) )   ;

if(      strtotime(date("Y/m/d"))   -   strtotime($date_ngay_chet_loai)   >   $so_ngay_khoa_du_lieu *24*60*60            )
{
$kiem_tra_loi_1 = "Người quản lý đã khóa không cho thêm, sửa, xóa dữ liệu trước ngày ".$ngay_khoa_du_lieu ." ";
goto b;
}		
$ma_so_tai = $trai."-1-".$so_tai ;
// sql tính số lần xuất hiện của số tai hậu bị thêm trong sổ theo dõi hậu bị
$sql_2 = "Select
    sheet2.`ngay_nhap`,
	 sheet2.`so_tai`,
	  sheet2.`lo_nhap`,
	   sheet2.`ngay_sinh`,
	   sheet2.trai,
	   sheet2.`ngay_chet(loai)`
From
    sheet2
Where
    sheet2.`ma_so_tai` =  '".$ma_so_tai."'
	And     
	sheet2.`phan_loai_heo` = 'D'
	And     
	sheet2.trai = '".$trai."'
	";
$result_2 = mysqli_query($conn, $sql_2);
$cout_2 = mysqli_num_rows($result_2);
if($cout_2 == 0 )
{
$kiem_tra_loi_1 = "Số tai này chưa có trong danh sách heo đực" ;
goto b;
}

$arraymysql_2 = [];
for ($x = 0; $x < $cout_2; $x++) {
    $arraymysql_2[$x] = mysqli_fetch_row($result_2) ;
  }		 

$ngay_nhap_in_csdl = $arraymysql_2[0][0] ;
$ngay_chet_loai_in_csdl = $arraymysql_2[0][5] ;
if(( strtotime($date_ngay_chet_loai) - strtotime($ngay_nhap_in_csdl) )  < 0*24*60*60 )
	{
	$kiem_tra_loi_1 = "Ngày chết loại bé hơn ngày nhập heo đực" ;
	goto b;
	}
if(strtotime($ngay_chet_loai_in_csdl)  > 0 )
{
$kiem_tra_loi_1 = "Số tai này đã nhập loại (chết) rồi" ;
goto b;
}

// update dữ liệu vào mysql

$sql_3 = "UPDATE 
`sheet2` 
SET 

`ngay_chet(loai)` = '".$date_ngay_chet_loai."',
`nguyen_nhan_chet_loai` = '".$phan_loai."'


WHERE
   sheet2.`ma_so_tai` =  '".$ma_so_tai."'
	And     
	sheet2.`phan_loai_heo` = 'D'
	And     
	sheet2.trai = '".$trai."'
;";
$result_3 = mysqli_query($conn, $sql_3);	


b:

if (isset($kiem_tra_loi_1)) {echo $kiem_tra_loi_1;  }
else {


// lấy dữ liệu lên html
$sql_1 = "Select
	sheet2.`so_tai`,
  DATE_FORMAT( sheet2.`ngay_chet(loai)`, '%d/%m/%Y')	 ,
	
	sheet2.`nguyen_nhan_chet_loai`
From
    sheet2
Where
    sheet2.`ma_so_tai` =  '".$ma_so_tai."'
	And     
	sheet2.`phan_loai_heo` = 'D'
	And     
	sheet2.trai = '".$trai."'
	";
$result_1 = mysqli_query($conn, $sql_1);
$cout_1 = mysqli_num_rows($result_1);

  
$arraymysql_1 = [];
$arraymysql_1[0] = ["Số tai",

"Ngày chết(loại)",
"Phân loại"




];
for ($x = 0+1; $x < $cout_1+1; $x++) {
    $arraymysql_1[$x] = mysqli_fetch_row($result_1) ;
  }
  

    echo str_ireplace("|_|","'",json_encode( $arraymysql_1 ));
}



?>	