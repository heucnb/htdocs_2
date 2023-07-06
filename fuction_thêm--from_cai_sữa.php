
<?php
include "setup/fuction_ket_noi_csdl.php";

          
$ma_the_nai =safeSQL($_POST["post1"]);

$date_ngay_cai=safeSQL($_POST["post2"]);
$sccs_cai=safeSQL($_POST["post3"]);

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

if(      strtotime(date("Y/m/d"))   -   strtotime($date_ngay_cai)   >   $so_ngay_khoa_du_lieu *24*60*60            )
{
$kiem_tra_loi_1 = "Người quản lý đã khóa không cho thêm, sửa, xóa dữ liệu trước ngày ".$ngay_khoa_du_lieu ." ";
goto a;
}			
	
// sql tính lần phối lúc thêm cai
$sql_2 = "Select
         sheet1.`ngay phoi`,
         sheet1.`so tai`,
         sheet1.trai
     From
         sheet1
     Where
         sheet1.`ngay phoi` < '".$date_ngay_cai."' And
         sheet1.`so tai` = '".$ma_the_nai."' And
         sheet1.trai = '".$trai."'";
$result_2 = mysqli_query($conn, $sql_2);
$lan_phoi_luc_them_cai = mysqli_num_rows($result_2); 
// sql tính làn phối trong csdl
$sql_4 = "Select
         sheet1.`so tai`  
     From
         sheet1
     Where
         sheet1.`so tai` = '".$ma_the_nai."' And
         sheet1.trai = '".$trai."'" ;
$result_4 = mysqli_query($conn, $sql_4);
$lan_phoi_in_csdl = mysqli_num_rows($result_4); // lần phối mới nhất
if($lan_phoi_luc_them_cai==0)
{
$kiem_tra_loi_1 = "Số tai này chưa phối hoặc ngày cai không đúng" ;
goto a;
}
if($lan_phoi_in_csdl==0)
{
$kiem_tra_loi_1 = "Số tai này chưa phối" ;
goto a;
}
if($lan_phoi_luc_them_cai<$lan_phoi_in_csdl)
{
$kiem_tra_loi_1 = "Số tai đã phối sau ngày này rồi" ;
goto a;
}
if($lan_phoi_luc_them_cai>$lan_phoi_in_csdl)
{
$kiem_tra_loi_1 = "Có lỗi, kiểm tra lại" ;
goto a;
}
//
$ma_lan_phoi_moi_nhat_in_csdl = $trai."-".$lan_phoi_in_csdl."-".$ma_the_nai ;
$sql_5 = "Select
    sheet1.`ngay van de`,
    sheet1.`ngay ban loai chet`,
	sheet1.`ngay de`,
	sheet1.`ngay phoi`,
	sheet1.`ngay cai`,	
    sheet1.`ma lan phoi`
From
    sheet1
Where
    sheet1.`ma lan phoi` = '".$ma_lan_phoi_moi_nhat_in_csdl."'
	and
	sheet1.trai = '".$trai."'
	;";
$result_5 = mysqli_query($conn, $sql_5);

$cout_5 = mysqli_num_rows($result_5);

$arraymysql_5 = [];
for ($x = 0; $x < $cout_5; $x++) {
    $arraymysql_5[$x] = mysqli_fetch_row($result_5) ;
  }		 
$ngay_van_de_moi_nhat_in_csdl = $arraymysql_5[0][0] ;
$ngay_ban_loai_chet_moi_nhat_in_csdl = $arraymysql_5[0][1] ;
$ngay_de_moi_nhat_in_csdl = $arraymysql_5[0][2] ;
$ngay_phoi_moi_nhat_in_csdl = $arraymysql_5[0][3] ;
$ngay_cai_moi_nhat_in_csdl = $arraymysql_5[0][4] ;
if($ngay_van_de_moi_nhat_in_csdl <>"" )
{
$kiem_tra_loi_1 = "Số tai này đã báo lốc, xảy thai... rồi" ;
goto a;
}
if($ngay_ban_loai_chet_moi_nhat_in_csdl <>"")
{
$kiem_tra_loi_1 = "Số tai này chết hoặc loại rồi" ;
goto a;
}
if($ngay_de_moi_nhat_in_csdl =="")
{
$kiem_tra_loi_1 = "Số tai này chưa báo đẻ" ;
goto a;
}
if($ngay_cai_moi_nhat_in_csdl <>"")
{
$kiem_tra_loi_1 = "Số tai này đã báo cai sữa rồi" ;
goto a;
}


if( ( strtotime($date_ngay_cai) - strtotime($ngay_de_moi_nhat_in_csdl) )  < 1*24*60*60)
{
$kiem_tra_loi_1 = "Ngày cai không đúng so với ngày đẻ" ;
goto a;
}
if( ( strtotime($date_ngay_cai) - strtotime($ngay_de_moi_nhat_in_csdl) )  > 40*24*60*60)
{
$kiem_tra_loi_1 = "Số tai này cai quá 40 ngày" ;
goto a;
}

//


// update dữ liệu vào mysql
$so_ngay_cai_moi_nhat_in_csdl = ( strtotime($date_ngay_cai) - strtotime($ngay_de_moi_nhat_in_csdl))/24/60/60 ;

$ma_lan_phoi = $trai."-".$lan_phoi_luc_them_cai."-".$ma_the_nai ;
$sql_3 = "UPDATE `sheet1` SET 
`ngay cai` = '".$date_ngay_cai."', 
`so con cai` = '".$sccs_cai."', 
`so ngay cai` = '".$so_ngay_cai_moi_nhat_in_csdl."'
WHERE `sheet1`.`ma lan phoi` = '".$ma_lan_phoi."'
And     
	sheet1.trai = '".$trai."'

;";


$result_3 = mysqli_query($conn, $sql_3);	
	
a:

  if (isset($kiem_tra_loi_1)) {echo $kiem_tra_loi_1;	}
  else {

// lấy dữ liệu lên html
$sql_1 = "Select
    sheet1.`so tai`,
  
	  DATE_FORMAT(sheet1.`ngay cai`, '%d/%m/%Y'),
	  sheet1.lua,
	sheet1.`so con cai`,
	sheet1.`so ngay cai`

   
From
    sheet1
Where
    sheet1.`ngay cai` =  '".$date_ngay_cai."'
	And     
	sheet1.trai = '".$trai."'
	";
$result_1 = mysqli_query($conn, $sql_1);
$cout_1 = mysqli_num_rows($result_1);
$arraymysql_1 = [];
$arraymysql_1[0] = ["Số tai",

"Ngày Cai",
"Lứa",
"Số con cai",
"Số ngày cai"



];
for ($x = 1; $x < $cout_1+1; $x++) {
    $arraymysql_1[$x] = mysqli_fetch_row($result_1) ;
  }
  echo str_ireplace("|_|","'",json_encode($arraymysql_1));

  }

?>	
