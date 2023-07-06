
<?php
include "setup/fuction_ket_noi_csdl.php";

  
$day_post_bat_dau = safeSQL($_POST["post1"]).'-01-01';
$year_them_1 = safeSQL($_POST["post1"]) +1 ;
$day_year_them_1 = $year_them_1.'-01-01' ;
$year_tru_1 = safeSQL($_POST["post1"]) -1 ;
$day_post_ket_thuc =  date('Y-m-d', strtotime($day_year_them_1. ' - 0 days')) ;


$date_batdau =  $day_post_bat_dau ;

$date_ketthuc = $day_post_ket_thuc;
$trai=safeSQL($_POST["post8"]);
include "setup/check_token_and_post.php";
		



$date_tru_140 =  date('Y-m-d', strtotime($date_batdau. ' - 140 days')) ;


// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
	if (!$conn) {
	die("Connection failed: " . mysqli_connect_error());
	}

$sql_7 = "SELECT  *
 FROM 
 (SELECT stt as stt_xap_sep, CONCAT('". safeSQL($_POST["post1"])."',	'-' ,`thang`) as thanghb FROM `sheet7`) as bang_sheet7


LEFT JOIN
 
 (Select 
         CONCAT(year(sheet1.`ngay phoi`), '-',IF(Month(sheet1.`ngay phoi`)<10, Month(sheet1.`ngay phoi`),CONCAT('9-',Month(sheet1.`ngay phoi`)) ))  As thang1,
         Count(sheet1.`so tai`) As so_phoi,
		
        
         Count(sheet1.`ngay van de`) As so_loc_va_xay_thai,
        
		 Sum(IF(CHAR_LENGTH(sheet1.`loai nai phoi`) > 9, 1, NULL)) As so_phoi_heo_van_de,
		
		
	
		 Sum(IF(DATEDIFF(sheet1.`ngay phoi`, sheet1.`ngay cai lua truoc`) >= 0, DATEDIFF(sheet1.`ngay phoi`, sheet1.`ngay cai lua truoc`), 0)) As tong_so_ngay_cho_phoi,
		 Count(sheet1.`ngay cai lua truoc`) As so_nai_cai_sua_duoc_phoi,
		 Count(sheet1.`ngay cai lua truoc`) As so_nai_cai_sua_duoc_phoi2,
		  Count(sheet1.`ngay cai lua truoc`) As so_nai_cai_sua_duoc_phoi3,
		 
		 Sum(IF(DATEDIFF(sheet1.`ngay phoi`, sheet1.`ngay cai lua truoc`) <=7, 1, 0)) As tong_nai_phoi_trong_7_ngay
		
	
     From
         sheet1
     Where
         sheet1.`ngay phoi` >= '".$date_tru_140."' And
         sheet1.`ngay phoi` < '".$date_ketthuc."' And
		 	( 	sheet1.trai = '".$trai."'  )
     Group By
	
	thang1) as bang1
	
	ON bang_sheet7.thanghb = bang1.thang1
LEFT JOIN (Select
         CONCAT(year(sheet1.`ngay de`), '-',IF(Month(sheet1.`ngay de`)<10, Month(sheet1.`ngay de`),CONCAT('9-',Month(sheet1.`ngay de`)) ))  As thang,
       
		 Count(sheet1.`ngay de`) As so_nai_de,
         Sum(sheet1.SCSR) As SCSR,
         Sum(sheet1.chet) As chet,
         Sum(sheet1.tat) As tat,
         Sum(sheet1.kho) As kho,
         Sum(sheet1.coi) As coi,
         Sum(sheet1.SCCS) As SCCS,
		 Sum(IF(DATEDIFF(sheet1.`ngay de`, sheet1.`ngay phoi`) > 1, DATEDIFF(sheet1.`ngay de`, sheet1.`ngay phoi`), 0)) As ngay_mang_thai,
         Sum(sheet1.Pss) As tong_Pss,
		  Sum(IF(sheet1.SCCS > 7, 1, NULL)) As dem_lon_hon_7
	
     From
         sheet1
     Where
         sheet1.`ngay de` >= '".$date_batdau."' And
         sheet1.`ngay de` < '".$date_ketthuc."' And
		 	( sheet1.trai = '".$trai."' )
     Group By
      Thang) as bang2
ON bang_sheet7.thanghb = bang2.thang
LEFT JOIN (Select
         CONCAT(year(sheet1.`ngay cai`), '-',IF(Month(sheet1.`ngay cai`)<10, Month(sheet1.`ngay cai`),CONCAT('9-',Month(sheet1.`ngay cai`)) ))  As thang,
       
		 Count(sheet1.`ngay cai`) As so_nai_cai,
       
         Sum(sheet1.`so con cai`) As so_con_cai_sua,
		
	
		 sum(sheet1.`so ngay cai`) As tong_so_ngay_cai_sua
	
     From
         sheet1
     Where
         sheet1.`ngay cai` >= '".$date_batdau."' And
         sheet1.`ngay cai` < '".$date_ketthuc."' And
		 	( sheet1.trai = '".$trai."' )
     Group By
       Thang) as bang3
ON bang_sheet7.thanghb= bang3.thang
LEFT JOIN (Select
         CONCAT(year(sheet1.`ngay heo con chet`), '-',IF(Month(sheet1.`ngay heo con chet`)<10, Month(sheet1.`ngay heo con chet`),CONCAT('9-',Month(sheet1.`ngay heo con chet`)) ))  As thang,
       
		
		
		 Sum(sheet1.`so luong heo con chet theo me`) As so_heo_con_chet_theo_me
		
	
     From
         sheet1
     Where
         sheet1.`ngay heo con chet` >= '".$date_batdau."' And
         sheet1.`ngay heo con chet` < '".$date_ketthuc."' And
		 	( sheet1.trai = '".$trai."' )
     Group By
        thang) as bang4
ON bang_sheet7.thanghb= bang4.thang
LEFT JOIN (Select
 CONCAT(year(sheet1.`ngay ban loai chet`), '-',IF(Month(sheet1.`ngay ban loai chet`)<10, Month(sheet1.`ngay ban loai chet`),CONCAT('9-',Month(sheet1.`ngay ban loai chet`)) ))  As thang,
  
   
    count(sheet1.`nguyen nhan nai mat`) As so_nai_chet
From
    sheet1
Where
    sheet1.`lan phoi` = 1 And
    sheet1.`ngay ban loai chet` >= '".$date_tru_140."' And
    sheet1.`ngay ban loai chet` < '".$date_ketthuc."' And
    sheet1.`nguyen nhan nai mat` LIKE 'l' And
		 	( sheet1.trai = '".$trai."' )
    Group By
  thang) as bang5
ON bang_sheet7.thanghb= bang5.thang

LEFT JOIN (Select
 CONCAT(year(sheet1.`ngay ban loai chet`), '-',IF(Month(sheet1.`ngay ban loai chet`)<10, Month(sheet1.`ngay ban loai chet`),CONCAT('9-',Month(sheet1.`ngay ban loai chet`)) ))  As thang,
  
   
    count(sheet1.`nguyen nhan nai mat`) As so_nai_chet
From
    sheet1
Where
    sheet1.`lan phoi` = 1 And
    sheet1.`ngay ban loai chet` >= '".$date_tru_140."' And
    sheet1.`ngay ban loai chet` < '".$date_ketthuc."' And
    sheet1.`nguyen nhan nai mat` LIKE 'c' And
		 	( sheet1.trai = '".$trai."' )
    Group By
 thang) as bang6
ON bang_sheet7.thanghb= bang6.thang
LEFT JOIN (Select
		CONCAT(year(sheet1.`ngay phoi`), '-',IF(Month(sheet1.`ngay phoi`)<10, Month(sheet1.`ngay phoi`),CONCAT('9-',Month(sheet1.`ngay phoi`)) ))		 As thang,
         Sum(sheet1.`lan phoi`) As so_hau_bi_tang_dan
     From
         sheet1
     Where
         sheet1.`ngay phoi` >= '".$date_tru_140."' And
         sheet1.`ngay phoi` < '".$date_ketthuc."' And
         sheet1.`lan phoi` = 1 And
		 	( sheet1.trai = '".$trai."' )
     Group By
     thang) as bang7
ON bang_sheet7.thanghb= bang7.thang

LEFT JOIN (Select
 CONCAT(year(sheet2.`ngay_chet(loai)`), '-',IF(Month(sheet2.`ngay_chet(loai)`)<10, Month(sheet2.`ngay_chet(loai)`),CONCAT('9-',Month(sheet2.`ngay_chet(loai)`)) )	)  As thang,
  
   
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
ON bang_sheet7.thanghb= banghb11.thang

LEFT JOIN (Select
 CONCAT(year(sheet2.ngay_nhap), '-', IF(Month(sheet2.ngay_nhap)<10, Month(sheet2.ngay_nhap),CONCAT('9-',Month(sheet2.ngay_nhap)) )	 )  As thang,
  
   
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
ON bang_sheet7.thanghb= banghb12.thang


LEFT JOIN (Select
 CONCAT(year(sheet2.ngay_nhap), '-', IF(Month(sheet2.ngay_nhap) <10, Month(sheet2.ngay_nhap),CONCAT('9-',Month(sheet2.ngay_nhap)) )	  )  As thang,
  
   
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
ON bang_sheet7.thanghb= banghb13.thang

LEFT JOIN (Select
 CONCAT(year(sheet2.`ngay_chet(loai)`), '-',  IF(Month(sheet2.`ngay_chet(loai)`)<10, Month(sheet2.`ngay_chet(loai)`),CONCAT('9-',Month(sheet2.`ngay_chet(loai)`)) ))  As thang,
  
   
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
ON bang_sheet7.thanghb= banghb14.thang

UNION ALL





SELECT  *
 FROM 
 (SELECT stt +1000 as stt_xap_sep, CONCAT('". $year_tru_1."',	'-' ,`thang`) as thanghb FROM `sheet7`) as bang_sheet7


LEFT JOIN
 
 (Select 
         CONCAT(year(sheet1.`ngay phoi`), '-',IF(Month(sheet1.`ngay phoi`)<10, Month(sheet1.`ngay phoi`),CONCAT('9-',Month(sheet1.`ngay phoi`)) ))  As thang1,
         Count(sheet1.`so tai`) As so_phoi,
		
        
         Count(sheet1.`ngay van de`) As so_loc_va_xay_thai,
        
		 Sum(IF(CHAR_LENGTH(sheet1.`loai nai phoi`) > 9, 1, NULL)) As so_phoi_heo_van_de,
		
		
	
		 Sum(IF(DATEDIFF(sheet1.`ngay phoi`, sheet1.`ngay cai lua truoc`) >= 0, DATEDIFF(sheet1.`ngay phoi`, sheet1.`ngay cai lua truoc`), 0)) As tong_so_ngay_cho_phoi,
		 Count(sheet1.`ngay cai lua truoc`) As so_nai_cai_sua_duoc_phoi,
		 Count(sheet1.`ngay cai lua truoc`) As so_nai_cai_sua_duoc_phoi2,
		  Count(sheet1.`ngay cai lua truoc`) As so_nai_cai_sua_duoc_phoi3,
		 
		 Sum(IF(DATEDIFF(sheet1.`ngay phoi`, sheet1.`ngay cai lua truoc`) <=7, 1, 0)) As tong_nai_phoi_trong_7_ngay
		
	
     From
         sheet1
     Where
         sheet1.`ngay phoi` >= '".$date_tru_140."' And
         sheet1.`ngay phoi` < '".$date_ketthuc."' And
		 	( 	sheet1.trai = '".$trai."'  )
     Group By
	
	thang1) as bang1
	
	ON bang_sheet7.thanghb = bang1.thang1
LEFT JOIN (Select
         CONCAT(year(sheet1.`ngay de`), '-',IF(Month(sheet1.`ngay de`)<10, Month(sheet1.`ngay de`),CONCAT('9-',Month(sheet1.`ngay de`)) ))  As thang,
       
		 Count(sheet1.`ngay de`) As so_nai_de,
         Sum(sheet1.SCSR) As SCSR,
         Sum(sheet1.chet) As chet,
         Sum(sheet1.tat) As tat,
         Sum(sheet1.kho) As kho,
         Sum(sheet1.coi) As coi,
         Sum(sheet1.SCCS) As SCCS,
		 Sum(IF(DATEDIFF(sheet1.`ngay de`, sheet1.`ngay phoi`) > 1, DATEDIFF(sheet1.`ngay de`, sheet1.`ngay phoi`), 0)) As ngay_mang_thai,
         Sum(sheet1.Pss) As tong_Pss,
		  Sum(IF(sheet1.SCCS > 7, 1, NULL)) As dem_lon_hon_7
	
     From
         sheet1
     Where
         sheet1.`ngay de` >= '".$date_batdau."' And
         sheet1.`ngay de` < '".$date_ketthuc."' And
		 	( sheet1.trai = '".$trai."' )
     Group By
      Thang) as bang2
ON bang_sheet7.thanghb = bang2.thang
LEFT JOIN (Select
         CONCAT(year(sheet1.`ngay cai`), '-',IF(Month(sheet1.`ngay cai`)<10, Month(sheet1.`ngay cai`),CONCAT('9-',Month(sheet1.`ngay cai`)) ))  As thang,
       
		 Count(sheet1.`ngay cai`) As so_nai_cai,
       
         Sum(sheet1.`so con cai`) As so_con_cai_sua,
		
	
		 sum(sheet1.`so ngay cai`) As tong_so_ngay_cai_sua
	
     From
         sheet1
     Where
         sheet1.`ngay cai` >= '".$date_batdau."' And
         sheet1.`ngay cai` < '".$date_ketthuc."' And
		 	( sheet1.trai = '".$trai."' )
     Group By
       Thang) as bang3
ON bang_sheet7.thanghb= bang3.thang
LEFT JOIN (Select
         CONCAT(year(sheet1.`ngay heo con chet`), '-',IF(Month(sheet1.`ngay heo con chet`)<10, Month(sheet1.`ngay heo con chet`),CONCAT('9-',Month(sheet1.`ngay heo con chet`)) ))  As thang,
       
		
		
		 Sum(sheet1.`so luong heo con chet theo me`) As so_heo_con_chet_theo_me
		
	
     From
         sheet1
     Where
         sheet1.`ngay heo con chet` >= '".$date_batdau."' And
         sheet1.`ngay heo con chet` < '".$date_ketthuc."' And
		 	( sheet1.trai = '".$trai."' )
     Group By
        thang) as bang4
ON bang_sheet7.thanghb= bang4.thang
LEFT JOIN (Select
 CONCAT(year(sheet1.`ngay ban loai chet`), '-',IF(Month(sheet1.`ngay ban loai chet`)<10, Month(sheet1.`ngay ban loai chet`),CONCAT('9-',Month(sheet1.`ngay ban loai chet`)) ))  As thang,
  
   
    count(sheet1.`nguyen nhan nai mat`) As so_nai_chet
From
    sheet1
Where
    sheet1.`lan phoi` = 1 And
    sheet1.`ngay ban loai chet` >= '".$date_tru_140."' And
    sheet1.`ngay ban loai chet` < '".$date_ketthuc."' And
    sheet1.`nguyen nhan nai mat` LIKE 'l' And
		 	( sheet1.trai = '".$trai."' )
    Group By
  thang) as bang5
ON bang_sheet7.thanghb= bang5.thang

LEFT JOIN (Select
 CONCAT(year(sheet1.`ngay ban loai chet`), '-',IF(Month(sheet1.`ngay ban loai chet`)<10, Month(sheet1.`ngay ban loai chet`),CONCAT('9-',Month(sheet1.`ngay ban loai chet`)) ))  As thang,
  
   
    count(sheet1.`nguyen nhan nai mat`) As so_nai_chet
From
    sheet1
Where
    sheet1.`lan phoi` = 1 And
    sheet1.`ngay ban loai chet` >= '".$date_tru_140."' And
    sheet1.`ngay ban loai chet` < '".$date_ketthuc."' And
    sheet1.`nguyen nhan nai mat` LIKE 'c' And
		 	( sheet1.trai = '".$trai."' )
    Group By
 thang) as bang6
ON bang_sheet7.thanghb= bang6.thang
LEFT JOIN (Select
		CONCAT(year(sheet1.`ngay phoi`), '-',IF(Month(sheet1.`ngay phoi`)<10, Month(sheet1.`ngay phoi`),CONCAT('9-',Month(sheet1.`ngay phoi`)) ))		 As thang,
         Sum(sheet1.`lan phoi`) As so_hau_bi_tang_dan
     From
         sheet1
     Where
         sheet1.`ngay phoi` >= '".$date_tru_140."' And
         sheet1.`ngay phoi` < '".$date_ketthuc."' And
         sheet1.`lan phoi` = 1 And
		 	( sheet1.trai = '".$trai."' )
     Group By
     thang) as bang7
ON bang_sheet7.thanghb= bang7.thang

LEFT JOIN (Select
 CONCAT(year(sheet2.`ngay_chet(loai)`), '-',IF(Month(sheet2.`ngay_chet(loai)`)<10, Month(sheet2.`ngay_chet(loai)`),CONCAT('9-',Month(sheet2.`ngay_chet(loai)`)) )	)  As thang,
  
   
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
ON bang_sheet7.thanghb= banghb11.thang

LEFT JOIN (Select
 CONCAT(year(sheet2.ngay_nhap), '-', IF(Month(sheet2.ngay_nhap)<10, Month(sheet2.ngay_nhap),CONCAT('9-',Month(sheet2.ngay_nhap)) )	 )  As thang,
  
   
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
ON bang_sheet7.thanghb= banghb12.thang


LEFT JOIN (Select
 CONCAT(year(sheet2.ngay_nhap), '-', IF(Month(sheet2.ngay_nhap) <10, Month(sheet2.ngay_nhap),CONCAT('9-',Month(sheet2.ngay_nhap)) )	  )  As thang,
  
   
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
ON bang_sheet7.thanghb= banghb13.thang

LEFT JOIN (Select
 CONCAT(year(sheet2.`ngay_chet(loai)`), '-',  IF(Month(sheet2.`ngay_chet(loai)`)<10, Month(sheet2.`ngay_chet(loai)`),CONCAT('9-',Month(sheet2.`ngay_chet(loai)`)) ))  As thang,
  
   
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
ON bang_sheet7.thanghb= banghb14.thang















ORDER BY 


stt_xap_sep ASC


		 ";
    
$result_7 = mysqli_query($conn, $sql_7);
$cout_7 = mysqli_num_rows($result_7);
$arraymysql_7 = [];
for ($x = 0; $x < $cout_7; $x++) {
    $arraymysql_7[$x] = mysqli_fetch_row($result_7) ;
  } 
  

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
		 	( sheet1.trai = '".$trai."' )	)
		Or
        (sheet1.`lan phoi` = 1 And
         sheet1.`ngay ban loai chet` Is Null And
		 sheet1.`ngay phoi` < '".$date_batdau."' And
		 	( sheet1.trai = '".$trai."' )
		)		
			 ";
$result_4 = mysqli_query($conn, $sql_4);
 $so_nai_luc_dau = mysqli_num_rows($result_4);
$arraymysql_4 = [[$so_nai_luc_dau,$so_thit_luc_dau,$so_duc_luc_dau]];



  // thứ tự cai sữa, heo con chet, de,phoi
  $arraymysql_sum = array_merge( $arraymysql_4, $arraymysql_7 );
 
  
  
 //A. load file excel có sẵn và ghi dữ liệu, công thức, mảng vào file excel đó
 require 'vendor/autoload.php';
 // kết nối csdl excel	


$spreadsheet = \PhpOffice\PhpSpreadsheet\IOFactory::load('excel_bao_cao_thang.xlsx');

//A.1 chọn sheet active
// A.4 lấy dữ liệu từ một mảng ghi vào file excel
$o_dien_du_lieu_tu_array = "A7" ;
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
																				'A1:A1',     // The worksheet range that we want to retrieve
																				NULL,        // Value that should be returned for empty cells
																				TRUE,        // Should formulas be calculated (the equivalent of getCalculatedValue() for each cell)
																				TRUE,        // Should values be formatted (the equivalent of getFormattedValue() for each cell)
																				false       // Should the array be indexed by cell row and cell column
																				);
$so_o_lay = $so_o_lay_du_lieu_array[0][0] +2;
	$writer = \PhpOffice\PhpSpreadsheet\IOFactory::createWriter($spreadsheet, "Xlsx");
    $writer->save("05featuredemo.xlsx");
	
if ($so_o_lay === 0) { echo ("Chưa có dữ liệu"); } 
 else {
    $mien_lay_du_lieu_excel = 'C1:AP'.$so_o_lay ;
	$dataexcel = $spreadsheet->getSheetByName('getdata')
    ->rangeToArray(
       $mien_lay_du_lieu_excel,     // The worksheet range that we want to retrieve
        NULL,        // Value that should be returned for empty cells
        TRUE,        // Should formulas be calculated (the equivalent of getCalculatedValue() for each cell)
         TRUE,        // Should values be formatted (the equivalent of getFormattedValue() for each cell)
        false       // Should the array be indexed by cell row and cell column
    );

echo str_ireplace("|_|","'",json_encode($dataexcel));

  }


?>	
