<?php


	
$so_tai =$_POST["post1"];

$date_ngay_nhap=$_POST["post2"];

$ngay_sinh=$_POST["post3"];

$trai=$_POST["post8"];



// kết nối csdl	
include "setup/fuction_ket_noi_csdl.php";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
	if (!$conn) {
	die("Connection failed: " . mysqli_connect_error());
	}
// láy số ngày khóa dữ liệu
$sql_lay_ngay_khoa_du_lieu = "select `khoa_ngay_sua_du_lieu` from login where `trai_value`='".$trai."' limit 1 ";
$result_lay_ngay_khoa_du_lieu = mysqli_query($conn, $sql_lay_ngay_khoa_du_lieu);
$cout_lay_ngay_khoa_du_lieu = mysqli_num_rows($result_lay_ngay_khoa_du_lieu);	
$arraymysql_lay_ngay_khoa_du_lieu = [];
for ($x = 0; $x < $cout_lay_ngay_khoa_du_lieu ; $x++) {
    $arraymysql_lay_ngay_khoa_du_lieu[$x] = mysqli_fetch_row($result_lay_ngay_khoa_du_lieu) ;
  }
$so_ngay_khoa_du_lieu =  $arraymysql_lay_ngay_khoa_du_lieu[0][0];

$ngay_khoa_du_lieu = date ( 'd/m/Y' , strtotime ( "-  ".$so_ngay_khoa_du_lieu."  day" , strtotime ( date('Y/m/d') ) ) )   ;

if(      strtotime(date("Y/m/d"))   -   strtotime($date_ngay_nhap)   >   $so_ngay_khoa_du_lieu *24*60*60            )
{
$kiem_tra_loi_1 = "Người quản lý đã khóa không cho thêm, sửa, xóa dữ liệu trước ngày ".$ngay_khoa_du_lieu ." ";
goto a;
}			
	
	
$ma_so_tai = $trai."-1-".$so_tai ;
// sql tính số lần xuất hiện của số tai đực thêm trong sổ theo dõi hậu bị
$sql_2 = "Select
    sheet2.`ngay_nhap`,
	 sheet2.`so_tai`,
	  sheet2.`lo_nhap`,
	   sheet2.`ngay_sinh`,
    sheet2.trai
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
if($cout_2 >= 1 )
{
$kiem_tra_loi_1 = "Số tai này đã có trong danh sách heo đực rồi" ;
goto a;
}

if($date_ngay_nhap <= $ngay_sinh )
{
$kiem_tra_loi_1 = "Ngày sinh không đúng so với ngày nhập" ;
goto a;
}


// insert dữ liệu vào mysql


$sql_3 = "INSERT INTO 
`sheet2`(
`ma_so_tai`,
`trai`,
`so_tai`,
`ngay_nhap`,

`phan_loai_heo`,
`ngay_sinh`
) VALUES (
'".$ma_so_tai."', 
'".$trai."',
'".$so_tai."',
'".$date_ngay_nhap."',

 'D',
'".$ngay_sinh."'
); ";
$result_3 = mysqli_query($conn, $sql_3);	



a:

if (isset($kiem_tra_loi_1)) {echo $kiem_tra_loi_1;  }
else {
    
// lấy dữ liệu lên html
$sql_1 = "Select
sheet2.`so_tai`,
DATE_FORMAT( sheet2.`ngay_nhap`, '%d/%m/%Y')	 ,


DATE_FORMAT( sheet2.`ngay_sinh`, '%d/%m/%Y')	


From
sheet2
Where
sheet2.`ngay_nhap` =  '".$date_ngay_nhap."'
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

"Ngày sinh"




];
for ($x = 0+1; $x < $cout_1+1; $x++) {
$arraymysql_1[$x] = mysqli_fetch_row($result_1) ;
}

echo json_encode( $arraymysql_1 );

}



?>	