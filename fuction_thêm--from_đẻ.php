
<?php
		
$ma_the_nai =$_POST["post1"];

$date_ngay_de=$_POST["post2"];
$scsr_de=$_POST["post3"];
$chet_de=$_POST["post4"];
$kho_de=$_POST["post5"];
$tat_de=$_POST["post6"];
$coi_de=$_POST["post7"];
$sccs_de= $scsr_de - $chet_de - $kho_de - $tat_de- $coi_de ;
$trong_luong_so_sinh_de=$_POST["post9"];
$so_heo_duc =$_POST["post10"];
$ly_lich =$_POST["post_ly_lich"];
$trai=$_POST["post8"];
if ($_POST["id_cat_tai_1"]== null || $_POST["id_cat_tai_1"]== ""){ $_POST["id_cat_tai_1"] = "khong_co_du_lieu"; }
if ($_POST["id_cat_tai_2"]== null || $_POST["id_cat_tai_2"]== ""){ $_POST["id_cat_tai_2"] = "khong_co_du_lieu"; }
if ($_POST["id_cat_tai_3"]== null || $_POST["id_cat_tai_3"]== ""){ $_POST["id_cat_tai_3"] = "khong_co_du_lieu"; }
if ($_POST["id_cat_tai_4"]== null || $_POST["id_cat_tai_4"]== ""){ $_POST["id_cat_tai_4"] = "khong_co_du_lieu"; }
if ($_POST["id_cat_tai_5"]== null || $_POST["id_cat_tai_5"]== ""){ $_POST["id_cat_tai_5"] = "khong_co_du_lieu"; }
if ($_POST["id_cat_tai_6"]== null || $_POST["id_cat_tai_6"]== ""){ $_POST["id_cat_tai_6"] = "khong_co_du_lieu"; }
if ($_POST["id_cat_tai_7"]== null || $_POST["id_cat_tai_7"]== ""){ $_POST["id_cat_tai_7"] = "khong_co_du_lieu"; }
if ($_POST["id_cat_tai_8"]== null || $_POST["id_cat_tai_8"]== ""){ $_POST["id_cat_tai_8"] = "khong_co_du_lieu"; }
if ($_POST["id_cat_tai_9"]== null || $_POST["id_cat_tai_9"]== ""){ $_POST["id_cat_tai_9"] = "khong_co_du_lieu"; }
if ($_POST["id_cat_tai_10"]== null || $_POST["id_cat_tai_10"]== ""){ $_POST["id_cat_tai_10"] = "khong_co_du_lieu"; }
if ($_POST["id_cat_tai_11"]== null || $_POST["id_cat_tai_11"]== ""){ $_POST["id_cat_tai_11"] = "khong_co_du_lieu"; }
if ($_POST["id_cat_tai_12"]== null || $_POST["id_cat_tai_12"]== ""){ $_POST["id_cat_tai_12"] = "khong_co_du_lieu"; }
if ($_POST["id_cat_tai_13"]== null || $_POST["id_cat_tai_13"]== ""){ $_POST["id_cat_tai_13"] = "khong_co_du_lieu"; }
if ($_POST["id_cat_tai_14"]== null || $_POST["id_cat_tai_14"]== ""){ $_POST["id_cat_tai_14"] = "khong_co_du_lieu"; }
if ($_POST["id_cat_tai_15"]== null || $_POST["id_cat_tai_15"]== ""){ $_POST["id_cat_tai_15"] = "khong_co_du_lieu"; }
if ($_POST["id_cat_tai_16"]== null || $_POST["id_cat_tai_16"]== ""){ $_POST["id_cat_tai_16"] = "khong_co_du_lieu"; }
if ($_POST["id_cat_tai_17"]== null || $_POST["id_cat_tai_17"]== ""){ $_POST["id_cat_tai_17"] = "khong_co_du_lieu"; }


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

if(      strtotime(date("Y/m/d"))   -   strtotime($date_ngay_de)   >   $so_ngay_khoa_du_lieu *24*60*60            )
{
$kiem_tra_loi_1 = "Người quản lý đã khóa không cho thêm, sửa, xóa dữ liệu trước ngày ".$ngay_khoa_du_lieu ." ";
goto a;
}		


// sql tính lần phối lúc thêm đẻ
$sql_2 = "Select
         sheet1.`ngay phoi`,
         sheet1.`so tai`,
         sheet1.trai
     From
         sheet1
     Where
         sheet1.`ngay phoi` < '".$date_ngay_de."' And
         sheet1.`so tai` = '".$ma_the_nai."' And
         sheet1.trai = '".$trai."'";
$result_2 = mysqli_query($conn, $sql_2);
$lan_phoi_luc_them_de = mysqli_num_rows($result_2); 
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
if($lan_phoi_luc_them_de==0)
{
$kiem_tra_loi_1 = "Số tai này chưa phối hoặc ngày đẻ không đúng" ;
goto a;
}
if($lan_phoi_in_csdl==0)
{
$kiem_tra_loi_1 = "Số tai này chưa phối" ;
goto a;
}
if($lan_phoi_luc_them_de<$lan_phoi_in_csdl)
{
$kiem_tra_loi_1 = "Số tai đã phối sau ngày này rồi" ;
goto a;
}
if($lan_phoi_luc_them_de>$lan_phoi_in_csdl)
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
if($ngay_de_moi_nhat_in_csdl <>"")
{
$kiem_tra_loi_1 = "Số tai này đã báo đẻ rồi" ;
goto a;
}
if( ( strtotime($date_ngay_de) - strtotime($ngay_phoi_moi_nhat_in_csdl) )  < 107*24*60*60)
{
$kiem_tra_loi_1 = "Số tai này đẻ dưới 107 ngày" ;
goto a;
}
if( ( strtotime($date_ngay_de) - strtotime($ngay_phoi_moi_nhat_in_csdl) )  > 121*24*60*60)
{
$kiem_tra_loi_1 = "Số tai này đẻ quá 121 ngày" ;
goto a;
}

//
// sql tính lứa đẻ
// lứa đẻ lúc đầu
$sql_7 = "Select
		 sheet1.`so tai`,
         sheet1.`lua`,
        
         sheet1.trai
     From
         sheet1
     Where
       
         sheet1.`so tai` = '".$ma_the_nai."' And
		 sheet1.`lan phoi` = 1 And
         sheet1.trai = '".$trai."'
		 ;";
$result_7 = mysqli_query($conn, $sql_7);
$cout_7 = mysqli_num_rows($result_7);
$arraymysql_7 = [];
for ($x = 0; $x < $cout_7; $x++) {
    $arraymysql_7[$x] = mysqli_fetch_row($result_7) ;
  }
 
$lua_de_luc_lan_phoi_1 =  $arraymysql_7[0][1] ;
 if ($lua_de_luc_lan_phoi_1 == "" ){$lua_de_luc_lan_phoi_1 =  1 ;}
 // tính lứa để trong csdl
$sql_6 = "Select
         sheet1.`ngay phoi`,
         sheet1.`so tai`,
         sheet1.trai
     From
         sheet1
     Where
         sheet1.`ngay de` < '".$date_ngay_de."' And
         sheet1.`so tai` = '".$ma_the_nai."' And
         sheet1.trai = '".$trai."'
		 ";
$result_6 = mysqli_query($conn, $sql_6);
$lua_de_luc_them_de = mysqli_num_rows($result_6)+$lua_de_luc_lan_phoi_1; 
// kiểm tra lý lịch lợn con có đúng không

$sql_ly_lich = "Select
	count(sheet1.`so cat tai`)	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".$_POST["id_cat_tai_1"]."_%' 

UNION ALL


Select
	count(sheet1.`so cat tai`)	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".$_POST["id_cat_tai_2"]."_%' 

UNION ALL


Select
	count(sheet1.`so cat tai`)	
	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".$_POST["id_cat_tai_3"]."_%' 
UNION ALL


Select
count(sheet1.`so cat tai`)	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".$_POST["id_cat_tai_4"]."_%' 
UNION ALL


Select
count(sheet1.`so cat tai`)	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".$_POST["id_cat_tai_5"]."_%' 
UNION ALL


Select
count(sheet1.`so cat tai`)	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".$_POST["id_cat_tai_6"]."_%' 
UNION ALL


Select
count(sheet1.`so cat tai`)	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".$_POST["id_cat_tai_7"]."_%' 
UNION ALL


Select
count(sheet1.`so cat tai`)	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".$_POST["id_cat_tai_8"]."_%' 
UNION ALL


Select
count(sheet1.`so cat tai`)	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".$_POST["id_cat_tai_9"]."_%' 
UNION ALL


Select
count(sheet1.`so cat tai`)	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".$_POST["id_cat_tai_10"]."_%' 
UNION ALL


Select
count(sheet1.`so cat tai`)	
	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".$_POST["id_cat_tai_11"]."_%' 
UNION ALL


Select
	count(sheet1.`so cat tai`)	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".$_POST["id_cat_tai_12"]."_%' 
UNION ALL


Select
count(sheet1.`so cat tai`)	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".$_POST["id_cat_tai_13"]."_%' 
UNION ALL


Select
	count(sheet1.`so cat tai`)	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".$_POST["id_cat_tai_14"]."_%' 
UNION ALL


Select
count(sheet1.`so cat tai`)	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".$_POST["id_cat_tai_15"]."_%' 
UNION ALL


Select
count(sheet1.`so cat tai`)	
	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".$_POST["id_cat_tai_16"]."_%' 
UNION ALL


Select
count(sheet1.`so cat tai`)	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".$_POST["id_cat_tai_17"]."_%' 

	";
$result_ly_lich = mysqli_query($conn, $sql_ly_lich);
$cout_ly_lich = mysqli_num_rows($result_ly_lich);
$arraymysql_ly_lich = [];
for ($x = 0; $x < $cout_ly_lich; $x++) {
    $arraymysql_ly_lich[$x] = mysqli_fetch_row($result_ly_lich) ;
  }
  

  
if($arraymysql_ly_lich[0][0] > 0)
{
$kiem_tra_loi_1 = "Số cắt tai này có rồi" ;
goto a;
}
if($arraymysql_ly_lich[1][0] > 0)
{
$kiem_tra_loi_1 = "Số cắt tai này có rồi" ;
goto a;
}
if($arraymysql_ly_lich[2][0] > 0)
{
$kiem_tra_loi_1 = "Số cắt tai này có rồi" ;
goto a;
}
if($arraymysql_ly_lich[3][0] > 0)
{
$kiem_tra_loi_1 = "Số cắt tai này có rồi" ;
goto a;
}
if($arraymysql_ly_lich[4][0] > 0)
{
$kiem_tra_loi_1 = "Số cắt tai này có rồi" ;
goto a;
}
if($arraymysql_ly_lich[5][0] > 0)
{
$kiem_tra_loi_1 = "Số cắt tai này có rồi" ;
goto a;
}
if($arraymysql_ly_lich[6][0] > 0)
{
$kiem_tra_loi_1 = "Số cắt tai này có rồi" ;
goto a;
}
if($arraymysql_ly_lich[7][0] > 0)
{
$kiem_tra_loi_1 = "Số cắt tai này có rồi" ;
goto a;
}
if($arraymysql_ly_lich[8][0] > 0)
{
$kiem_tra_loi_1 = "Số cắt tai này có rồi" ;
goto a;
}
if($arraymysql_ly_lich[9][0] > 0)
{
$kiem_tra_loi_1 = "Số cắt tai này có rồi" ;
goto a;
}
if($arraymysql_ly_lich[10][0] > 0)
{
$kiem_tra_loi_1 = "Số cắt tai này có rồi" ;
goto a;
}
if($arraymysql_ly_lich[11][0] > 0)
{
$kiem_tra_loi_1 = "Số cắt tai này có rồi" ;
goto a;
}
if($arraymysql_ly_lich[12][0] > 0)
{
$kiem_tra_loi_1 = "Số cắt tai này có rồi" ;
goto a;
}
if($arraymysql_ly_lich[13][0] > 0)
{
$kiem_tra_loi_1 = "Số cắt tai này có rồi" ;
goto a;
}
if($arraymysql_ly_lich[14][0] > 0)
{
$kiem_tra_loi_1 = "Số cắt tai này có rồi" ;
goto a;
}
if($arraymysql_ly_lich[15][0] > 0)
{
$kiem_tra_loi_1 = "Số cắt tai này có rồi" ;
goto a;
}
if($arraymysql_ly_lich[16][0] > 0)
{
$kiem_tra_loi_1 = "Số cắt tai này có rồi" ;
goto a;
}


// update dữ liệu vào mysql
$ma_lan_phoi = $trai."-".$lan_phoi_luc_them_de."-".$ma_the_nai ;
$sql_3 = "UPDATE `sheet1` SET 
`lua` = '".$lua_de_luc_them_de."',
`ngay de` = '".$date_ngay_de."',
`Pss` = '".$trong_luong_so_sinh_de."',
`SCSR` = '".$scsr_de."',
`chet` = '".$chet_de."',
`tat` = '".$tat_de."',
`kho` = '".$kho_de."',
`coi` = '".$coi_de."',
`SCCS` = '".$sccs_de."',

`so_con_duc` = '".$so_heo_duc."',
`so cat tai` = '".$ly_lich."'


WHERE `sheet1`.`ma lan phoi` = '".$ma_lan_phoi."' And
sheet1.trai = '".$trai."'
;";
$result_3 = mysqli_query($conn, $sql_3);	
	
a:

  
if (isset($kiem_tra_loi_1)) {echo $kiem_tra_loi_1;	}
else {
// lấy dữ liệu lên html
$sql_1 = "Select
    sheet1.`so tai`,
 
   DATE_FORMAT(sheet1.`ngay de`, '%d/%m/%Y'),
    sheet1.`lua`,
    sheet1.Pss,
    sheet1.SCSR,
    sheet1.chet,
    sheet1.tat,
    sheet1.kho,
    sheet1.coi,
    sheet1.SCCS,
	 sheet1.`so_con_duc` ,
    sheet1.`so cat tai`
   
From
    sheet1
Where
    sheet1.`ngay de` =  '".$date_ngay_de."'
	And     
	sheet1.trai = '".$trai."'
	";
$result_1 = mysqli_query($conn, $sql_1);
$cout_1 = mysqli_num_rows($result_1);
$arraymysql_1 = [];
$arraymysql_1[0] = ["Số tai",

"Ngày đẻ",
"Lứa",
"Pss",
"SCSR",
"Chết",
"Tật",
"Khô",
"Còi",
"SCCS",
"Số con đực",
"Số cắt tai"


];
for ($x = 1; $x < $cout_1 + 1; $x++) {
    $arraymysql_1[$x] = mysqli_fetch_row($result_1) ;
  }
  
  echo json_encode($arraymysql_1);

}


?>	
