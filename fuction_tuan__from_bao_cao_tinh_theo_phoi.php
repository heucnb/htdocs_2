

<html>
<body>

<table id="table1" class="table_nhận_dữ_liệu table41ct2" > 
   
</table>
<table class="table_nhận_dữ_liệu" id="table2" > 
   
</table>
</body>
</html>
<script>
<?php
		
$day_post_bat_dau = date('Y-m-d', strtotime($_POST["post1"].'-01-01'. ' - 8 days')) ; 
$year_them_1 = $_POST["post1"] +1 ;
$year_tru_1 = $_POST["post1"] -1 ;
$day_year_them_1 = $year_them_1.'-01-01' ;

$day_post_ket_thuc =  date('Y-m-d', strtotime($day_year_them_1. ' - 0 days')) ;


$date_batdau =  $day_post_bat_dau ;

$date_ketthuc = $day_post_ket_thuc;
$trai=$_POST["post8"];

// kết nối csdl	
include "setup/fuction_ket_noi_csdl.php";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
	if (!$conn) {
	die("Connection failed: " . mysqli_connect_error());
	}

$sql_1 = "SELECT  *
 FROM (SELECT stt as stt_xap_sep, CONCAT('". $_POST["post1"]."', '-', sheet3.`tuan`) as thang5  FROM `sheet3`) as bang5
LEFT JOIN(Select
         CONCAT(
year(sheet1.`ngay phoi`)  , 
'-',
                        IF(WEEK(sheet1.`ngay phoi`,0)<9  ,
				WEEK(sheet1.`ngay phoi`,0)+1,
						IF(WEEK(sheet1.`ngay phoi`,0)+1=53 and WEEKDAY('".$day_year_them_1."')= 6 ,
				CONCAT('9-', 53) ,
						IF(WEEK(sheet1.`ngay phoi`,0)+1=53,
				CONCAT('9-', 54),
				CONCAT('9-', WEEK(sheet1.`ngay phoi`,0) +1)
						) ))
   )  As thang,
         Count(sheet1.`so tai`) As so_phoi,
		
         Count(sheet1.`ngay de`) As so_nai_de,
         Sum(sheet1.SCSR) As SCSR,
         Sum(sheet1.chet) As chet,
         Sum(sheet1.tat) As tat,
         Sum(sheet1.kho) As kho,
         Sum(sheet1.coi) As coi,
         Sum(sheet1.SCCS) As SCCS,
		
         Count(sheet1.`ngay cai`) As so_nai_cai,
         Count(sheet1.`ngay van de`) As so_loc_va_xay_thai,
         Sum(sheet1.`so con cai`) As so_con_cai_sua,
		 Sum(IF(CHAR_LENGTH(sheet1.`loai nai phoi`) > 9, 1, NULL)) As so_phoi_heo_van_de,
		
		 Sum(IF(sheet1.SCCS > 7, 1, NULL)) As dem_lon_hon_7,
		 Sum(IF(DATEDIFF(sheet1.`ngay de`, sheet1.`ngay phoi`) > 1, DATEDIFF(sheet1.`ngay de`, sheet1.`ngay phoi`), 0)) As ngay_mang_thai,
		 Sum(IF(DATEDIFF(sheet1.`ngay phoi`, sheet1.`ngay cai lua truoc`) >= 0, DATEDIFF(sheet1.`ngay phoi`, sheet1.`ngay cai lua truoc`), 0)) As tong_so_ngay_cho_phoi,
		 Count(sheet1.`ngay cai lua truoc`) As so_nai_cai_sua_duoc_phoi,
		 Sum(IF(DATEDIFF(sheet1.`ngay phoi`, sheet1.`ngay cai lua truoc`) <=7, 1, 0)) As tong_nai_phoi_trong_7_ngay,
		 Sum(sheet1.`so luong heo con chet theo me`) As so_heo_con_chet_theo_me,
		 Sum(sheet1.Pss) As tong_Pss,
		 sum(sheet1.`so ngay cai`) As tong_so_ngay_cai_sua
     From
         sheet1
     Where
         sheet1.`ngay phoi` >= '".$date_batdau."' And
         sheet1.`ngay phoi` < '".$date_ketthuc."' And
		 (sheet1.trai = '".$trai."' )
     Group By
       thang) as bang1
ON bang5.thang5 = bang1.thang	   
LEFT JOIN (Select
  CONCAT(
year(sheet1.`ngay ban loai chet`)  , 
'-',
                        IF(WEEK(sheet1.`ngay ban loai chet`,0)<9  ,
				WEEK(sheet1.`ngay ban loai chet`,0)+1,
						IF(WEEK(sheet1.`ngay ban loai chet`,0)+1=53 and WEEKDAY('".$day_year_them_1."')= 6 ,
				CONCAT('9-', 53) ,
						IF(WEEK(sheet1.`ngay ban loai chet`,0)+1=53,
				CONCAT('9-', 54),
				CONCAT('9-', WEEK(sheet1.`ngay ban loai chet`,0) +1)
						) ))  
   )  As thang,

   
    count(sheet1.`nguyen nhan nai mat`) As so_nai_chet
From
    sheet1
Where
    sheet1.`lan phoi` = 1 And
    sheet1.`ngay ban loai chet` >= '".$date_batdau."' And
    sheet1.`ngay ban loai chet` < '".$date_ketthuc."' And
    sheet1.`nguyen nhan nai mat` LIKE 'l' And
		 (sheet1.trai = '".$trai."' )
    Group By
   thang) as bang2
ON bang5.thang5 = bang2.thang
LEFT JOIN (Select
  
 CONCAT(
year(sheet1.`ngay ban loai chet`)  , 
'-',
                        IF(WEEK(sheet1.`ngay ban loai chet`,0)<9  ,
				WEEK(sheet1.`ngay ban loai chet`,0)+1,
						IF(WEEK(sheet1.`ngay ban loai chet`,0)+1=53 and WEEKDAY('".$day_year_them_1."')= 6 ,
				CONCAT('9-', 53) ,
						IF(WEEK(sheet1.`ngay ban loai chet`,0)+1=53,
				CONCAT('9-', 54),
				CONCAT('9-', WEEK(sheet1.`ngay ban loai chet`,0) +1)
						) ))  
   )  As thang,  
  
    count(sheet1.`nguyen nhan nai mat`) As so_nai_chet
From
    sheet1
Where
    sheet1.`lan phoi` = 1 And
    sheet1.`ngay ban loai chet` >= '".$date_batdau."' And
    sheet1.`ngay ban loai chet` < '".$date_ketthuc."' And
    sheet1.`nguyen nhan nai mat` LIKE 'c' And
		 (sheet1.trai = '".$trai."' )
    Group By
thang) as bang3
ON bang5.thang5 = bang3.thang
LEFT JOIN (Select


		 CONCAT(
year(sheet1.`ngay phoi`)  , 
'-',
                        IF(WEEK(sheet1.`ngay phoi`,0)<9  ,
				WEEK(sheet1.`ngay phoi`,0)+1,
						IF(WEEK(sheet1.`ngay phoi`,0)+1=53 and WEEKDAY('".$day_year_them_1."')= 6 ,
				CONCAT('9-', 53) ,
						IF(WEEK(sheet1.`ngay phoi`,0)+1=53,
				CONCAT('9-', 54),
				CONCAT('9-', WEEK(sheet1.`ngay phoi`,0) +1)
						) ))  
   )  As thang,
   
   

		Sum(sheet1.`lan phoi`) As so_hau_bi_tang_dan
     From
         sheet1
     Where
         sheet1.`ngay phoi` >= '".$date_batdau."' And
         sheet1.`ngay phoi` < '".$date_ketthuc."' And
         sheet1.`lan phoi` = 1 And
		 (sheet1.trai = '".$trai."' )
     Group By
  thang) as bang4
ON bang5.thang5 = bang4.thang













LEFT JOIN (Select
 CONCAT(year(sheet2.`ngay_chet(loai)`),
		'-'							, 
				IF(WEEK(sheet2.`ngay_chet(loai)`,0)<9  ,
				WEEK(sheet2.`ngay_chet(loai)`,0)+1,
						IF(WEEK(sheet2.`ngay_chet(loai)`,0)+1=53 and WEEKDAY('".$day_year_them_1."')= 6 ,
				CONCAT('9-', 53) ,
						IF(WEEK(sheet2.`ngay_chet(loai)`,0)+1=53,
				CONCAT('9-', 54),
				CONCAT('9-', WEEK(sheet2.`ngay_chet(loai)`,0) +1)
						) ))  
																										
																										)  As thang,
  
   
    count(sheet2.`ngay_chet(loai)`) As so_hb_giam
From
    sheet2
Where
    
    sheet2.`ngay_chet(loai)` >= '".$date_batdau."' And
    sheet2.`ngay_chet(loai)` < '".$date_ketthuc."' And
	sheet2.`phan_loai_heo` = 'HB' And
   
		( sheet2.trai = '".$trai."' )
    Group By
  thang ) as banghb11
ON bang5.thang5= banghb11.thang

LEFT JOIN (Select
 CONCAT(year(sheet2.ngay_nhap),
		'-',
		
		IF(WEEK(sheet2.ngay_nhap,0)<9  ,
				WEEK(sheet2.ngay_nhap,0)+1,
						IF(WEEK(sheet2.ngay_nhap,0)+1=53 and WEEKDAY('".$day_year_them_1."')= 6 ,
				CONCAT('9-', 53) ,
						IF(WEEK(sheet2.ngay_nhap,0)+1=53,
				CONCAT('9-', 54),
				CONCAT('9-', WEEK(sheet2.ngay_nhap,0) +1)
						) ))  


		)  As thang,
  
   
    count(sheet2.ngay_nhap) As so_hb_tang
From
    sheet2
Where
    
    sheet2.ngay_nhap >= '".$date_batdau."' And
    sheet2.ngay_nhap <  '".$date_ketthuc."' And
sheet2.`phan_loai_heo` = 'HB' And
   
	( sheet2.trai = '".$trai."' )
    Group By
  Thang) as banghb12
ON bang5.thang5= banghb12.thang


LEFT JOIN (Select
 CONCAT(year(sheet2.ngay_nhap), 
		'-', 
		
	IF(WEEK(sheet2.ngay_nhap,0)<9  ,
				WEEK(sheet2.ngay_nhap,0)+1,
						IF(WEEK(sheet2.ngay_nhap,0)+1=53 and WEEKDAY('".$day_year_them_1."')= 6 ,
				CONCAT('9-', 53) ,
						IF(WEEK(sheet2.ngay_nhap,0)+1=53,
				CONCAT('9-', 54),
				CONCAT('9-', WEEK(sheet2.ngay_nhap,0) +1)
						) ))  
		
		
																									)  As thang,
  
   
    count(sheet2.ngay_nhap) As so_duc_tang
From
    sheet2
Where
    
    sheet2.ngay_nhap >= '".$date_batdau."' And
    sheet2.ngay_nhap <  '".$date_ketthuc."' And
sheet2.`phan_loai_heo` = 'D' And
   
	( sheet2.trai = '".$trai."' )
    Group By
  Thang) as banghb13
ON bang5.thang5= banghb13.thang

LEFT JOIN (Select
 CONCAT(year(sheet2.`ngay_chet(loai)`), 
		'-'                          ,  
		IF(WEEK(sheet2.`ngay_chet(loai)`,0)<9  ,
				WEEK(sheet2.`ngay_chet(loai)`,0)+1,
						IF(WEEK(sheet2.`ngay_chet(loai)`,0)+1=53 and WEEKDAY('".$day_year_them_1."')= 6 ,
				CONCAT('9-', 53) ,
						IF(WEEK(sheet2.`ngay_chet(loai)`,0)+1=53,
				CONCAT('9-', 54),
				CONCAT('9-', WEEK(sheet2.`ngay_chet(loai)`,0) +1)
						) ))  
		
		
		)  As thang,
  
   
    count(sheet2.`ngay_chet(loai)`) As so_duc_giam
From
    sheet2
Where
    
    sheet2.`ngay_chet(loai)` >= '".$date_batdau."' And
    sheet2.`ngay_chet(loai)` < '".$date_ketthuc."' And
	sheet2.`phan_loai_heo` = 'D' And
   
		( sheet2.trai = '".$trai."' )
    Group By
  thang) as banghb14
ON bang5.thang5= banghb14.thang




UNION ALL

SELECT  *
 FROM (SELECT stt + 1000 as stt_xap_sep, CONCAT('". $year_tru_1."', '-', sheet3.`tuan`) as thang5   FROM `sheet3`) as bang5
LEFT JOIN(Select
         CONCAT(
year(sheet1.`ngay phoi`)  , 
'-',
                        IF(WEEK(sheet1.`ngay phoi`,0)<9  ,
				WEEK(sheet1.`ngay phoi`,0)+1,
						IF(WEEK(sheet1.`ngay phoi`,0)+1=53 and WEEKDAY('".$day_post_bat_dau."')= 6 ,
				CONCAT('9-', 53) ,
						IF(WEEK(sheet1.`ngay phoi`,0)+1=53,
				CONCAT('9-', 54),
				CONCAT('9-', WEEK(sheet1.`ngay phoi`,0) +1)
						) ))
   )  As thang,
         Count(sheet1.`so tai`) As so_phoi,
		
         Count(sheet1.`ngay de`) As so_nai_de,
         Sum(sheet1.SCSR) As SCSR,
         Sum(sheet1.chet) As chet,
         Sum(sheet1.tat) As tat,
         Sum(sheet1.kho) As kho,
         Sum(sheet1.coi) As coi,
         Sum(sheet1.SCCS) As SCCS,
		
         Count(sheet1.`ngay cai`) As so_nai_cai,
         Count(sheet1.`ngay van de`) As so_loc_va_xay_thai,
         Sum(sheet1.`so con cai`) As so_con_cai_sua,
		 Sum(IF(CHAR_LENGTH(sheet1.`loai nai phoi`) > 9, 1, NULL)) As so_phoi_heo_van_de,
		
		 Sum(IF(sheet1.SCCS > 7, 1, NULL)) As dem_lon_hon_7,
		 Sum(IF(DATEDIFF(sheet1.`ngay de`, sheet1.`ngay phoi`) > 1, DATEDIFF(sheet1.`ngay de`, sheet1.`ngay phoi`), 0)) As ngay_mang_thai,
		 Sum(IF(DATEDIFF(sheet1.`ngay phoi`, sheet1.`ngay cai lua truoc`) >= 0, DATEDIFF(sheet1.`ngay phoi`, sheet1.`ngay cai lua truoc`), 0)) As tong_so_ngay_cho_phoi,
		 Count(sheet1.`ngay cai lua truoc`) As so_nai_cai_sua_duoc_phoi,
		 Sum(IF(DATEDIFF(sheet1.`ngay phoi`, sheet1.`ngay cai lua truoc`) <=7, 1, 0)) As tong_nai_phoi_trong_7_ngay,
		 Sum(sheet1.`so luong heo con chet theo me`) As so_heo_con_chet_theo_me,
		 Sum(sheet1.Pss) As tong_Pss,
		 sum(sheet1.`so ngay cai`) As tong_so_ngay_cai_sua
     From
         sheet1
     Where
         sheet1.`ngay phoi` >= '".$date_batdau."' And
         sheet1.`ngay phoi` < '".$date_ketthuc."' And
		 (sheet1.trai = '".$trai."' )
     Group By
       thang) as bang1
ON bang5.thang5 = bang1.thang	   
LEFT JOIN (Select
  CONCAT(
year(sheet1.`ngay ban loai chet`)  , 
'-',
                        IF(WEEK(sheet1.`ngay ban loai chet`,0)<9  ,
				WEEK(sheet1.`ngay ban loai chet`,0)+1,
						IF(WEEK(sheet1.`ngay ban loai chet`,0)+1=53 and WEEKDAY('".$day_post_bat_dau."')= 6 ,
				CONCAT('9-', 53) ,
						IF(WEEK(sheet1.`ngay ban loai chet`,0)+1=53,
				CONCAT('9-', 54),
				CONCAT('9-', WEEK(sheet1.`ngay ban loai chet`,0) +1)
						) ))  
   )  As thang,

   
    count(sheet1.`nguyen nhan nai mat`) As so_nai_chet
From
    sheet1
Where
    sheet1.`lan phoi` = 1 And
    sheet1.`ngay ban loai chet` >= '".$date_batdau."' And
    sheet1.`ngay ban loai chet` < '".$date_ketthuc."' And
    sheet1.`nguyen nhan nai mat` LIKE 'l' And
		 (sheet1.trai = '".$trai."' )
    Group By
   thang) as bang2
ON bang5.thang5 = bang2.thang
LEFT JOIN (Select
  
 CONCAT(
year(sheet1.`ngay ban loai chet`)  , 
'-',
                        IF(WEEK(sheet1.`ngay ban loai chet`,0)<9  ,
				WEEK(sheet1.`ngay ban loai chet`,0)+1,
						IF(WEEK(sheet1.`ngay ban loai chet`,0)+1=53 and WEEKDAY('".$day_post_bat_dau."')= 6 ,
				CONCAT('9-', 53) ,
						IF(WEEK(sheet1.`ngay ban loai chet`,0)+1=53,
				CONCAT('9-', 54),
				CONCAT('9-', WEEK(sheet1.`ngay ban loai chet`,0) +1)
						) ))  
   )  As thang,  
  
    count(sheet1.`nguyen nhan nai mat`) As so_nai_chet
From
    sheet1
Where
    sheet1.`lan phoi` = 1 And
    sheet1.`ngay ban loai chet` >= '".$date_batdau."' And
    sheet1.`ngay ban loai chet` < '".$date_ketthuc."' And
    sheet1.`nguyen nhan nai mat` LIKE 'c' And
		 (sheet1.trai = '".$trai."' )
    Group By
thang) as bang3
ON bang5.thang5 = bang3.thang
LEFT JOIN (Select


		 CONCAT(
year(sheet1.`ngay phoi`)  , 
'-',
                        IF(WEEK(sheet1.`ngay phoi`,0)<9  ,
				WEEK(sheet1.`ngay phoi`,0)+1,
						IF(WEEK(sheet1.`ngay phoi`,0)+1=53 and WEEKDAY('".$day_post_bat_dau."')= 6 ,
				CONCAT('9-', 53) ,
						IF(WEEK(sheet1.`ngay phoi`,0)+1=53,
				CONCAT('9-', 54),
				CONCAT('9-', WEEK(sheet1.`ngay phoi`,0) +1)
						) ))  
   )  As thang,
   
   

		Sum(sheet1.`lan phoi`) As so_hau_bi_tang_dan
     From
         sheet1
     Where
         sheet1.`ngay phoi` >= '".$date_batdau."' And
         sheet1.`ngay phoi` < '".$date_ketthuc."' And
         sheet1.`lan phoi` = 1 And
		 (sheet1.trai = '".$trai."' )
     Group By
  thang) as bang4
ON bang5.thang5 = bang4.thang 








LEFT JOIN (Select
 CONCAT(year(sheet2.`ngay_chet(loai)`),
		'-'							, 
				IF(WEEK(sheet2.`ngay_chet(loai)`,0)<9  ,
				WEEK(sheet2.`ngay_chet(loai)`,0)+1,
						IF(WEEK(sheet2.`ngay_chet(loai)`,0)+1=53 and WEEKDAY('".$day_post_bat_dau."')= 6 ,
				CONCAT('9-', 53) ,
						IF(WEEK(sheet2.`ngay_chet(loai)`,0)+1=53,
				CONCAT('9-', 54),
				CONCAT('9-', WEEK(sheet2.`ngay_chet(loai)`,0) +1)
						) ))  
																										
																										)  As thang,
  
   
    count(sheet2.`ngay_chet(loai)`) As so_hb_giam
From
    sheet2
Where
    
    sheet2.`ngay_chet(loai)` >= '".$date_batdau."' And
    sheet2.`ngay_chet(loai)` < '".$date_ketthuc."' And
	sheet2.`phan_loai_heo` = 'HB' And
   
		( sheet2.trai = '".$trai."' )
    Group By
  thang ) as banghb11
ON bang5.thang5= banghb11.thang

LEFT JOIN (Select
 CONCAT(year(sheet2.ngay_nhap),
		'-',
		
		IF(WEEK(sheet2.ngay_nhap,0)<9  ,
				WEEK(sheet2.ngay_nhap,0)+1,
						IF(WEEK(sheet2.ngay_nhap,0)+1=53 and WEEKDAY('".$day_post_bat_dau."')= 6 ,
				CONCAT('9-', 53) ,
						IF(WEEK(sheet2.ngay_nhap,0)+1=53,
				CONCAT('9-', 54),
				CONCAT('9-', WEEK(sheet2.ngay_nhap,0) +1)
						) ))  


		)  As thang,
  
   
    count(sheet2.ngay_nhap) As so_hb_tang
From
    sheet2
Where
    
    sheet2.ngay_nhap >= '".$date_batdau."' And
    sheet2.ngay_nhap <  '".$date_ketthuc."' And
sheet2.`phan_loai_heo` = 'HB' And
   
	( sheet2.trai = '".$trai."' )
    Group By
  Thang) as banghb12
ON bang5.thang5= banghb12.thang


LEFT JOIN (Select
 CONCAT(year(sheet2.ngay_nhap), 
		'-', 
		
	IF(WEEK(sheet2.ngay_nhap,0)<9  ,
				WEEK(sheet2.ngay_nhap,0)+1,
						IF(WEEK(sheet2.ngay_nhap,0)+1=53 and WEEKDAY('".$day_post_bat_dau."')= 6 ,
				CONCAT('9-', 53) ,
						IF(WEEK(sheet2.ngay_nhap,0)+1=53,
				CONCAT('9-', 54),
				CONCAT('9-', WEEK(sheet2.ngay_nhap,0) +1)
						) ))  
		
		
																									)  As thang,
  
   
    count(sheet2.ngay_nhap) As so_duc_tang
From
    sheet2
Where
    
    sheet2.ngay_nhap >= '".$date_batdau."' And
    sheet2.ngay_nhap <  '".$date_ketthuc."' And
sheet2.`phan_loai_heo` = 'D' And
   
	( sheet2.trai = '".$trai."' )
    Group By
  Thang) as banghb13
ON bang5.thang5= banghb13.thang

LEFT JOIN (Select
 CONCAT(year(sheet2.`ngay_chet(loai)`), 
		'-'                          ,  
		IF(WEEK(sheet2.`ngay_chet(loai)`,0)<9  ,
				WEEK(sheet2.`ngay_chet(loai)`,0)+1,
						IF(WEEK(sheet2.`ngay_chet(loai)`,0)+1=53 and WEEKDAY('".$day_post_bat_dau."')= 6 ,
				CONCAT('9-', 53) ,
						IF(WEEK(sheet2.`ngay_chet(loai)`,0)+1=53,
				CONCAT('9-', 54),
				CONCAT('9-', WEEK(sheet2.`ngay_chet(loai)`,0) +1)
						) ))  
		
		
		)  As thang,
  
   
    count(sheet2.`ngay_chet(loai)`) As so_duc_giam
From
    sheet2
Where
    
    sheet2.`ngay_chet(loai)` >= '".$date_batdau."' And
    sheet2.`ngay_chet(loai)` < '".$date_ketthuc."' And
	sheet2.`phan_loai_heo` = 'D' And
   
		( sheet2.trai = '".$trai."' )
    Group By
  thang) as banghb14
ON bang5.thang5= banghb14.thang










ORDER BY 


stt_xap_sep ASC

		 ";
$result_1 = mysqli_query($conn, $sql_1);
$cout_1 = mysqli_num_rows($result_1);
$arraymysql_1 = [];
for ($x = 0; $x < $cout_1; $x++) {
    $arraymysql_1[$x] = mysqli_fetch_row($result_1) ;
  }
 
 
 // sql tính số nái lúc đầu 
	$sql_4 = "Select
         sheet1.`lan phoi` ,
         sheet1.`ngay ban loai chet`
     From
         sheet1
     Where
        ( sheet1.`lan phoi` = 1 And
         sheet1.`ngay ban loai chet` >= '".$date_batdau."' And
		 sheet1.`ngay phoi` < '".$date_batdau."' And
		 (sheet1.trai = '".$trai."' )	)
		Or
        (sheet1.`lan phoi` = 1 And
         sheet1.`ngay ban loai chet` Is Null And
		 sheet1.`ngay phoi` < '".$date_batdau."' And
		 (sheet1.trai = '".$trai."' )
		)		
			 ";
$result_4 = mysqli_query($conn, $sql_4);
 $so_nai_luc_dau = mysqli_num_rows($result_4);
 
 
 
  // sql tính số lợn thịt lúc đầu
	$sql_4_1 = "Select

  count(sheet2.`so_tai`) As so_luong
From
    sheet2
Where
    sheet2.ngay_nhap < '".$date_batdau."' And
  (  sheet2.`ngay_chet(loai)` >= '".$date_batdau."' OR
 
    sheet2.`ngay_chet(loai)` Is Null And
	(sheet2.`phan_loai_heo` = 'HB') And
   
		( sheet2.trai = '".$trai."' )  )
			 ";
$result_4_1 = mysqli_query($conn, $sql_4_1);
$cout_4_1 = mysqli_num_rows($result_4_1);
$arraymysql_4_1 = [];
for ($x = 0; $x < $cout_4_1; $x++) {
    $arraymysql_4_1[$x] = mysqli_fetch_row($result_4_1) ;
  } 
 $so_thit_luc_dau = $arraymysql_4_1[0][0];
 
 
 // sql tính số lợn duc lúc đầu
	$sql_4_2 = "Select

  count(sheet2.`so_tai`) As so_luong
From
    sheet2
Where
     sheet2.ngay_nhap < '".$date_batdau."' And
  (  sheet2.`ngay_chet(loai)` >= '".$date_batdau."' OR
 
    sheet2.`ngay_chet(loai)` Is Null And
	(sheet2.`phan_loai_heo` = 'D') And
   
		( sheet2.trai = '".$trai."' )  )
			 ";
$result_4_2 = mysqli_query($conn, $sql_4_2);
$cout_4_2 = mysqli_num_rows($result_4_2);
$arraymysql_4_2 = [];
for ($x = 0; $x < $cout_4_2; $x++) {
    $arraymysql_4_2[$x] = mysqli_fetch_row($result_4_2) ;
  } 
 $so_duc_luc_dau = $arraymysql_4_2[0][0];
 
 
 $arraymysql_4 = [[$so_nai_luc_dau, $so_thit_luc_dau, $so_duc_luc_dau]];
 
 


  
  $arraymysql_sum = array_merge( $arraymysql_4,$arraymysql_1);
 
  
  
 //A. load file excel có sẵn và ghi dữ liệu, công thức, mảng vào file excel đó
 require 'vendor/autoload.php';
 // kết nối csdl excel	


$spreadsheet = \PhpOffice\PhpSpreadsheet\IOFactory::load('excel_bao_cao_tuan_theo_phoi.xlsx');

//A.1 chọn sheet active
// A.4 lấy dữ liệu từ một mảng ghi vào file excel
$o_dien_du_lieu_tu_array = "A2" ;
		$spreadsheet->getSheetByName('data')
    ->fromArray(
           $arraymysql_sum,  // **** mảng cần lấy dữ liệu
        NULL,        // Array values with this value will not be set
        $o_dien_du_lieu_tu_array ,         // Top left coordinate of the worksheet range where
          true           //  set value 0 in cell

    ); 

  
// B. - lấy dữ liệu từ excel lên web html	
// B.1 - lấy dữ liệu data từ excel vào mảng php
$so_o_lay_du_lieu_array = $spreadsheet->getSheetByName('getdata')->rangeToArray(
																				'A55:A55',     // The worksheet range that we want to retrieve
																				NULL,        // Value that should be returned for empty cells
																				TRUE,        // Should formulas be calculated (the equivalent of getCalculatedValue() for each cell)
																				TRUE,        // Should values be formatted (the equivalent of getFormattedValue() for each cell)
																				false       // Should the array be indexed by cell row and cell column
																				);

$so_o_lay = $so_o_lay_du_lieu_array[0][0] +2;



if($so_o_lay == 0 )
{
	
$kiem_tra_loi_1 = "Chưa có dữ liệu" ;

$dataexcel = "";

goto a;
}

$mien_lay_du_lieu_excel = 'C1:AP'.$so_o_lay ;
	$dataexcel = $spreadsheet->getSheetByName('getdata')
    ->rangeToArray(
       $mien_lay_du_lieu_excel,     // The worksheet range that we want to retrieve
        NULL,        // Value that should be returned for empty cells
        TRUE,        // Should formulas be calculated (the equivalent of getCalculatedValue() for each cell)
         TRUE,        // Should values be formatted (the equivalent of getFormattedValue() for each cell)
        false       // Should the array be indexed by cell row and cell column
    );
	



a:


    

?>	

 var arrayjavascript = <?php echo json_encode($dataexcel); ?>; // ***** gán mảng 2 chiều từ php vào javácript
 
if (arrayjavascript == "") 
{
	
document.getElementById('table2').innerHTML = "Chưa có dữ liệu";		
		
}

else
{

 var countjavascript = arrayjavascript.length ;
  var coloumsjavascript = arrayjavascript[1].length ; 
 
// tạo bảng trên html chuyển dòng thành cột
   for(var r=0;r<coloumsjavascript;r++)
  {
  var x= document.getElementById('table1').insertRow(r);
    
   for(var c=0;c<countjavascript;c++)  
    {
     x.insertCell(c);
    }
   }
// điền dữ liệu vào bảng 

   for(var r=0;r<countjavascript;r++)
  {
  
    
   for(var c=0;c<coloumsjavascript;c++)  
    {
    
	  document.getElementById('table1').rows[c].cells[r].innerHTML =arrayjavascript[r][c]; 
    }
   }
   

}



	
	
</script>


