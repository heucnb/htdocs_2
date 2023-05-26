





<?php

// xóa csdl phối

if ($_POST["post_7"]=="phoi")	
{
$ma_the_nai =$_POST["post_1"];
$lan_phoi=$_POST["post_6"];
$trai=$_POST["post_8"];
$date_ngay_phoi =$_POST["post_2"];

$ma_lan_phoi = $trai."-".$lan_phoi."-".$ma_the_nai ;


// kết nối csdl	
include "setup/fuction_ket_noi_csdl.php";
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

if(      strtotime(date("Y/m/d"))   -   strtotime($date_ngay_phoi)   >   $so_ngay_khoa_du_lieu *24*60*60            )
{
$kiem_tra_loi_1 = "Người quản lý đã khóa không cho thêm, sửa, xóa dữ liệu trước ngày ".$ngay_khoa_du_lieu ." ";
goto a;
}			
	
// kiểm tra xem có cho xóa dữ liệu không
$sql_2 = "
Select
   DATE_FORMAT(sheet1.`ngay de`, '%d/%m/%Y'),
	sheet1.`nguyen nhan van de`,
	DATE_FORMAT(sheet1.`ngay ban loai chet`, '%d/%m/%Y') ,
    sheet1.trai
   
From
    sheet1
Where
   
	`sheet1`.`ma lan phoi` = '".$ma_lan_phoi."' 
	And     
	sheet1.trai = '".$trai."'
	";
$result_2 = mysqli_query($conn, $sql_2);
$cout_2 = mysqli_num_rows($result_2);
$arraymysql_2 = [];
for ($x = 0; $x < $cout_2; $x++) {
    $arraymysql_2[$x] = mysqli_fetch_row($result_2) ;
  }
$ngay_de_in_csdl = $arraymysql_2[0][0] ;
$ngay_van_de_in_csdl = $arraymysql_2[0][1] ;
$ngay_ban_loai_chet_in_csdl = $arraymysql_2[0][2] ;
if($ngay_de_in_csdl <>"" || $ngay_van_de_in_csdl <>"" || $ngay_ban_loai_chet_in_csdl <>"")
{

 echo "Số tai này đã có trong báo các khác rồi phải xóa ở đó trước" ;
return ;
a:
echo "Người quản lý đã khóa không cho thêm, sửa, xóa dữ liệu trước ngày ".$ngay_khoa_du_lieu ."" ;   

}

else 


{
// sql xóa dữ liệu

$sql_1 = "
DELETE 
FROM  
	sheet1
Where
    sheet1.`ma lan phoi` =  '".$ma_lan_phoi."'
	And     
	sheet1.trai = '".$trai."'
	";
$result_1 = mysqli_query($conn, $sql_1);
// xóa lần phói lứa trước
if ($lan_phoi >1)
{
$lan_phoi_update =  $lan_phoi - 1 ;
$ma_lan_phoi_tru_1= $trai."-".$lan_phoi_update."-".$ma_the_nai ;


$sql_8 = "UPDATE `sheet1` SET 
					`lan_phoi_them_1` = null
				
					Where
					sheet1.`ma lan phoi` =  '".$ma_lan_phoi_tru_1."'
					And     
					sheet1.trai = '".$trai."'
					;";
	$result_8 = mysqli_query($conn, $sql_8);	
	
}




// xóa tiếp ở sheet hậu bị
$sql_2_sheet2 = "UPDATE `sheet2` SET 
					`ngay_phoi` = null
				
					Where
					sheet2.`ma_so_tai` =  '".$trai."-1-".$ma_the_nai."'
					And     
					sheet2.`phan_loai_heo` = 'HB'
					And     
					sheet2.trai = '".$trai."'
					;";
	$result_2_sheet2 = mysqli_query($conn, $sql_2_sheet2);	


echo 'Đã xóa' ;
}
	
}

// xóa csdl đẻ

if ($_POST["post_7"]=="de")	
{
$ma_the_nai =$_POST["post_1"];
$lan_phoi=$_POST["post_6"];
$trai=$_POST["post_8"];
$date_ngay_de=$_POST["post_2"];

$ma_lan_phoi = $trai."-".$lan_phoi."-".$ma_the_nai ;


// kết nối csdl	
include('setup/fuction_ket_noi_csdl.php');
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

if(      strtotime(date("Y/m/d"))   -   strtotime($date_ngay_de)   >   $so_ngay_khoa_du_lieu *24*60*60            )
{
$kiem_tra_loi_1 = "Người quản lý đã khóa không cho thêm, sửa, xóa dữ liệu trước ngày ".$ngay_khoa_du_lieu ." ";
goto a_de;
}				
	
// kiểm tra xem có cho xóa dữ liệu không
$sql_2 = "
Select
   DATE_FORMAT(sheet1.`ngay cai`, '%d/%m/%Y'),
	sheet1.`nguyen nhan van de`,
	DATE_FORMAT(sheet1.`ngay ban loai chet`, '%d/%m/%Y') ,
	DATE_FORMAT(sheet1.`ngay heo con chet`, '%d/%m/%Y') ,
    sheet1.trai
   
From
    sheet1
Where
   
	`sheet1`.`ma lan phoi` = '".$ma_lan_phoi."' 
	And     
	sheet1.trai = '".$trai."'
	";
$result_2 = mysqli_query($conn, $sql_2);
$cout_2 = mysqli_num_rows($result_2);
$arraymysql_2 = [];
for ($x = 0; $x < $cout_2; $x++) {
    $arraymysql_2[$x] = mysqli_fetch_row($result_2) ;
  }
$ngay_cai_in_csdl = $arraymysql_2[0][0] ;
$ngay_van_de_in_csdl = $arraymysql_2[0][1] ;
$ngay_ban_loai_chet_in_csdl = $arraymysql_2[0][2] ;
$ngay_heo_con_chet_in_csdl = $arraymysql_2[0][3] ;
if($ngay_cai_in_csdl <>"" || $ngay_van_de_in_csdl <>"" || $ngay_ban_loai_chet_in_csdl <>"" || $ngay_heo_con_chet_in_csdl <>"")
{

echo 'Số tai này đã có trong báo các khác rồi phải xóa ở đó trước' ;
return ;
a_de:
echo "Người quản lý đã khóa không cho thêm, sửa, xóa dữ liệu trước ngày ".$ngay_khoa_du_lieu ."" ;    	
}

else 


{
// sql xóa dữ liệu

$sql_1 = "
		UPDATE 
			`sheet1` 
		SET 
			`lua` = null,
			`ngay de` = null,
			`Pss` = null, 
			`SCSR` = null, 
			`chet` = null, 
			`tat` = null,
			`kho` = null, 
			`coi` = null, 
			`SCCS` = null ,
			`so_con_duc` = null ,
			`so cat tai` = null 
		Where
			sheet1.`ma lan phoi` =  '".$ma_lan_phoi."'
			And     
			sheet1.trai = '".$trai."'
	";
$result_1 = mysqli_query($conn, $sql_1);

echo 'Đã xóa' ;
} 

}


// xóa csdl cai sữa

if ($_POST["post_7"] == "cai_sua")	
{
$ma_the_nai =$_POST["post_1"];
$lan_phoi=$_POST["post_6"] ;
$trai=$_POST["post_8"];
$date_ngay_cai=$_POST["post_2"];

$ma_lan_phoi = $trai."-".$lan_phoi."-".$ma_the_nai ;


// kết nối csdl	
include('setup/fuction_ket_noi_csdl.php');
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
goto a_cs;
}				
	
// kiểm tra xem có cho xóa dữ liệu không
$sql_2 = "
Select
	DATE_FORMAT(sheet1.`ngay ban loai chet`, '%d/%m/%Y') ,
	DATE_FORMAT(sheet1.`ngay heo con chet`, '%d/%m/%Y') ,
    sheet1.trai
   
From
    sheet1
Where
   
	`sheet1`.`ma lan phoi` = '".$ma_lan_phoi."' 
	And     
	sheet1.trai = '".$trai."'
	";
$result_2 = mysqli_query($conn, $sql_2);
$cout_2 = mysqli_num_rows($result_2);
$arraymysql_2 = [];
for ($x = 0; $x < $cout_2; $x++) {
    $arraymysql_2[$x] = mysqli_fetch_row($result_2) ;
  }

$ngay_ban_loai_chet_in_csdl = $arraymysql_2[0][0] ;
$ngay_heo_con_chet_in_csdl = $arraymysql_2[0][1] ;

$ma_lan_phoi_cong_1 = $lan_phoi + 1 ;
$ma_lan_phoi_cong_1 = $trai."-".$ma_lan_phoi_cong_1."-".$ma_the_nai ;
$sql_3 = "
Select
	DATE_FORMAT(sheet1.`ngay phoi`, '%d/%m/%Y') ,
	
    sheet1.trai
   
From
    sheet1
Where
   
	`sheet1`.`ma lan phoi` = '".$ma_lan_phoi_cong_1."' 
	And     
	sheet1.trai = '".$trai."'
	";
$result_3 = mysqli_query($conn, $sql_3);
$cout_3 = mysqli_num_rows($result_3);



if($ngay_ban_loai_chet_in_csdl <>"" || $cout_3 == 1 )
{

echo 'Số tai này đã có trong báo các khác rồi phải xóa ở đó trước' ;
return ;
a_cs:
echo "Người quản lý đã khóa không cho thêm, sửa, xóa dữ liệu trước ngày ".$ngay_khoa_du_lieu ."" ;    		
}

else 


{
// sql xóa dữ liệu

$sql_1 = "
		UPDATE 
			`sheet1` 
		SET 
			`ngay cai` = null,
			`so con cai` = null,
			`so ngay cai` = null
			
		Where
			sheet1.`ma lan phoi` =  '".$ma_lan_phoi."'
			And     
			sheet1.trai = '".$trai."'
	";
$result_1 = mysqli_query($conn, $sql_1);

echo 'Đã xóa' ;
}
	
}

// xoa heo van de

if ($_POST["post_7"] == "van_de")	
{
$ma_the_nai =$_POST["post_1"];
$lan_phoi=$_POST["post_6"] ;
$trai=$_POST["post_8"];
$date_ngay_heo_van_de=$_POST["post_2"];

$ma_lan_phoi = $trai."-".$lan_phoi."-".$ma_the_nai ;


// kết nối csdl	
include('setup/fuction_ket_noi_csdl.php');
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

if(      strtotime(date("Y/m/d"))   -   strtotime($date_ngay_heo_van_de)   >   $so_ngay_khoa_du_lieu *24*60*60            )
{
$kiem_tra_loi_1 = "Người quản lý đã khóa không cho thêm, sửa, xóa dữ liệu trước ngày ".$ngay_khoa_du_lieu ." ";
goto a_vd;
}					
// kiểm tra xem có cho xóa dữ liệu không
$sql_2 = "
Select
	DATE_FORMAT(sheet1.`ngay ban loai chet`, '%d/%m/%Y') ,
	DATE_FORMAT(sheet1.`ngay heo con chet`, '%d/%m/%Y') ,
    sheet1.trai
   
From
    sheet1
Where
   
	`sheet1`.`ma lan phoi` = '".$ma_lan_phoi."' 
	And     
	sheet1.trai = '".$trai."'
	";
$result_2 = mysqli_query($conn, $sql_2);
$cout_2 = mysqli_num_rows($result_2);
$arraymysql_2 = [];
for ($x = 0; $x < $cout_2; $x++) {
    $arraymysql_2[$x] = mysqli_fetch_row($result_2) ;
  }

$ngay_ban_loai_chet_in_csdl = $arraymysql_2[0][0] ;
$ngay_heo_con_chet_in_csdl = $arraymysql_2[0][1] ;

$ma_lan_phoi_cong_1 = $lan_phoi + 1 ;
$ma_lan_phoi_cong_1 = $trai."-".$ma_lan_phoi_cong_1."-".$ma_the_nai ;
$sql_3 = "
Select
	DATE_FORMAT(sheet1.`ngay phoi`, '%d/%m/%Y') ,
	
    sheet1.trai
   
From
    sheet1
Where
   
	`sheet1`.`ma lan phoi` = '".$ma_lan_phoi_cong_1."' 
	And     
	sheet1.trai = '".$trai."'
	";
$result_3 = mysqli_query($conn, $sql_3);
$cout_3 = mysqli_num_rows($result_3);



if($ngay_ban_loai_chet_in_csdl <>"" || $cout_3 == 1 )
{

echo 'Số tai này đã có trong báo các khác rồi phải xóa ở đó trước' ;
return ;
a_vd:
echo "Người quản lý đã khóa không cho thêm, sửa, xóa dữ liệu trước ngày ".$ngay_khoa_du_lieu ."" ;    		
}

else 


{
// sql xóa dữ liệu

$sql_1 = "
		UPDATE 
			`sheet1` 
		SET 
			`ngay van de` = null,
			`nguyen nhan van de` = null,
			`so ngay loc` = null
			
		Where
			sheet1.`ma lan phoi` =  '".$ma_lan_phoi."'
			And     
			sheet1.trai = '".$trai."'
	";
$result_1 = mysqli_query($conn, $sql_1);

echo 'Đã xóa' ;
}
	
}

// xoa heo nai chet loai

if ($_POST["post_7"] == "nai_chet_loai")	
{
$ma_the_nai =$_POST["post_1"];
$lan_phoi=$_POST["post_6"] ;
$trai=$_POST["post_8"];
$date_ngay_heo_nai_chet_loai=$_POST["post_2"];




// kết nối csdl	
include('setup/fuction_ket_noi_csdl.php');
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

if(      strtotime(date("Y/m/d"))   -   strtotime($date_ngay_heo_nai_chet_loai)   >   $so_ngay_khoa_du_lieu *24*60*60            )
{
$kiem_tra_loi_1 = "Người quản lý đã khóa không cho thêm, sửa, xóa dữ liệu trước ngày ".$ngay_khoa_du_lieu ." ";
goto a_heo_nai_chet_loai;
}



// sql xóa dữ liệu

$sql_1 = "
		UPDATE 
			`sheet1` 
		SET 
			`ngay ban loai chet` = null,
			`nguyen nhan nai mat` = null
			
			
		Where
			sheet1.`so tai`	 =  '".$ma_the_nai."'
			And     
			sheet1.trai = '".$trai."'
	";
$result_1 = mysqli_query($conn, $sql_1);

echo 'Đã xóa' ;
return ;
a_heo_nai_chet_loai:
echo "Người quản lý đã khóa không cho thêm, sửa, xóa dữ liệu trước ngày ".$ngay_khoa_du_lieu ."" ;    	
	
}

// xóa csdl heo con chet theo me

if ($_POST["post_7"] == "con_chet_loai")	
{
$ma_the_nai =$_POST["post_1"];
$lan_phoi=$_POST["post_6"] ;
$trai=$_POST["post_8"];
$date_ngay_heo_con_chet_theo_me=$_POST["post_2"];

$ma_lan_phoi = $trai."-".$lan_phoi."-".$ma_the_nai ;


// kết nối csdl	
include('setup/fuction_ket_noi_csdl.php');
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

if(      strtotime(date("Y/m/d"))   -   strtotime($date_ngay_heo_con_chet_theo_me)   >   $so_ngay_khoa_du_lieu *24*60*60            )
{
$kiem_tra_loi_1 = "Người quản lý đã khóa không cho thêm, sửa, xóa dữ liệu trước ngày ".$ngay_khoa_du_lieu ." ";
goto a_heo_con_chet;
}						
	
// kiểm tra xem có cho xóa dữ liệu không
$sql_2 = "
Select
	DATE_FORMAT(sheet1.`ngay ban loai chet`, '%d/%m/%Y') ,
	DATE_FORMAT(sheet1.`ngay heo con chet`, '%d/%m/%Y') ,
	  DATE_FORMAT(sheet1.`ngay cai`, '%d/%m/%Y'),
    sheet1.trai
   
From
    sheet1
Where
   
	`sheet1`.`ma lan phoi` = '".$ma_lan_phoi."' 
	And     
	sheet1.trai = '".$trai."'
	";
$result_2 = mysqli_query($conn, $sql_2);
$cout_2 = mysqli_num_rows($result_2);
$arraymysql_2 = [];
for ($x = 0; $x < $cout_2; $x++) {
    $arraymysql_2[$x] = mysqli_fetch_row($result_2) ;
  }

$ngay_ban_loai_chet_in_csdl = $arraymysql_2[0][0] ;
$ngay_heo_con_chet_in_csdl = $arraymysql_2[0][1] ;
$ngay_cai_sua_in_csdl = $arraymysql_2[0][2] ;
$ma_lan_phoi_cong_1 = $lan_phoi + 1 ;
$ma_lan_phoi_cong_1 = $trai."-".$ma_lan_phoi_cong_1."-".$ma_the_nai ;
$sql_3 = "
Select
	DATE_FORMAT(sheet1.`ngay phoi`, '%d/%m/%Y') ,
	
    sheet1.trai
   
From
    sheet1
Where
   
	`sheet1`.`ma lan phoi` = '".$ma_lan_phoi_cong_1."' 
	And     
	sheet1.trai = '".$trai."'
	";
$result_3 = mysqli_query($conn, $sql_3);
$cout_3 = mysqli_num_rows($result_3);



if($ngay_ban_loai_chet_in_csdl <>"" || $cout_3 == 1 || $ngay_cai_sua_in_csdl <>"")
{

echo 'Số tai này đã có trong báo các khác rồi phải xóa ở đó trước' ;
return ;
a_heo_con_chet:
echo "Người quản lý đã khóa không cho thêm, sửa, xóa dữ liệu trước ngày ".$ngay_khoa_du_lieu ."" ;    		
}

else 


{
// sql xóa dữ liệu

$sql_1 = "
		UPDATE 
			`sheet1` 
		SET 
			`ngay heo con chet` = null,
			`so luong heo con chet theo me` = null,
			`nguyen nhan heo con chet` = null
			
		Where
			sheet1.`ma lan phoi` =  '".$ma_lan_phoi."'
			And     
			sheet1.trai = '".$trai."'
	";
$result_1 = mysqli_query($conn, $sql_1);

echo 'Đã xóa' ;
}
	
}

// xóa heo hậu bị

if ($_POST["post_7"]=="hau_bi")	
{
$so_tai =$_POST["post_1"];
$trai=$_POST["post_8"];
$date_ngay_heo_hau_bi=$_POST["post_2"];



// kết nối csdl	
include('setup/fuction_ket_noi_csdl.php');
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

if(      strtotime(date("Y/m/d"))   -   strtotime($date_ngay_heo_hau_bi)   >   $so_ngay_khoa_du_lieu *24*60*60            )
{
$kiem_tra_loi_1 = "Người quản lý đã khóa không cho thêm, sửa, xóa dữ liệu trước ngày ".$ngay_khoa_du_lieu ." ";
goto a_heo_hau_bi;
}						
// kiểm tra xem có cho xóa dữ liệu không
$sql_2 = "Select
	sheet2.`so_tai`,
 
DATE_FORMAT( 	sheet2.`ngay_chet(loai)`, '%d/%m/%Y')	   ,

	sheet2.`ngay_phoi`   ,
    sheet2.trai
   
From
    sheet2
Where
    sheet2.`ma_so_tai` =  '".$trai."-1-".$so_tai."'
	And     
	sheet2.`phan_loai_heo` = 'HB'
	And     
	sheet2.trai = '".$trai."'
	";
$result_2 = mysqli_query($conn, $sql_2);
$cout_2 = mysqli_num_rows($result_2);

$arraymysql_2 = [];
for ($x = 0; $x < $cout_2; $x++) {
    $arraymysql_2[$x] = mysqli_fetch_row($result_2) ;
  }
$ngay_chet_loai = $arraymysql_2[0][1] ;
$ngay_phoi = $arraymysql_2[0][2] ;

if($ngay_chet_loai <>"" || $ngay_phoi <>"" )
{

echo 'Số tai này đã có trong báo các khác rồi phải xóa ở đó trước' ;
return ;
a_heo_hau_bi:
echo "Người quản lý đã khóa không cho thêm, sửa, xóa dữ liệu trước ngày ".$ngay_khoa_du_lieu ."" ;    		
}

else 


{
// sql xóa dữ liệu

$sql_1 = "
DELETE 
FROM  
	sheet2
Where
    sheet2.`ma_so_tai` =  '".$trai."-1-".$so_tai."'
	And     
	sheet2.`phan_loai_heo` = 'HB'
	And     
	sheet2.trai = '".$trai."'
	";
$result_1 = mysqli_query($conn, $sql_1);

echo 'Đã xóa' ;
}
	
}

// xóa heo hậu đực

if ($_POST["post_7"]=="duc")	
{
$so_tai =$_POST["post_1"];
$trai=$_POST["post_8"];
$date_ngay_heo_duc=$_POST["post_2"];



// kết nối csdl	
include('setup/fuction_ket_noi_csdl.php');
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

if(      strtotime(date("Y/m/d"))   -   strtotime($date_ngay_heo_duc)   >   $so_ngay_khoa_du_lieu *24*60*60            )
{
$kiem_tra_loi_1 = "Người quản lý đã khóa không cho thêm, sửa, xóa dữ liệu trước ngày ".$ngay_khoa_du_lieu ." ";
goto a_heo_duc;
}							
	
	
// kiểm tra xem có cho xóa dữ liệu không
$sql_2 = "Select
	sheet2.`so_tai`,
 
DATE_FORMAT( 	sheet2.`ngay_chet(loai)`, '%d/%m/%Y')	   ,


    sheet2.trai
   
From
    sheet2
Where
    sheet2.`ma_so_tai` =  '".$trai."-1-".$so_tai."'
	And     
	sheet2.`phan_loai_heo` = 'D'
	And     
	sheet2.trai = '".$trai."'
	";
$result_2 = mysqli_query($conn, $sql_2);
$cout_2 = mysqli_num_rows($result_2);

$arraymysql_2 = [];
for ($x = 0; $x < $cout_2; $x++) {
    $arraymysql_2[$x] = mysqli_fetch_row($result_2) ;
  }
$ngay_chet_loai = $arraymysql_2[0][1] ;


if($ngay_chet_loai <>""  )
{

echo 'Số tai này đã có trong báo các khác rồi phải xóa ở đó trước' ;
return ;
a_heo_duc:
echo "Người quản lý đã khóa không cho thêm, sửa, xóa dữ liệu trước ngày ".$ngay_khoa_du_lieu ."" ;    		
}

else 


{
// sql xóa dữ liệu

$sql_1 = "
DELETE 
FROM  
	sheet2
Where
    sheet2.`ma_so_tai` =  '".$trai."-1-".$so_tai."'
	And     
	sheet2.`phan_loai_heo` = 'D'
	And     
	sheet2.trai = '".$trai."'
	";
$result_1 = mysqli_query($conn, $sql_1);

echo 'Đã xóa' ;
}
	
}






?>	




	
	



