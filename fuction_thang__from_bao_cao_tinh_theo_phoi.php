
<?php
		
$day_post_bat_dau = $_POST["post1"].'-01-01';
$year_them_1 = $_POST["post1"] +1 ;
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
$arraymysql_4 = [];




// sql tính các chỉ tiêu
	$sql_6 = "SELECT *
FROM
(SELECT stt as stt_xap_sep, CONCAT('". $_POST["post1"]."',	'-' ,`thang`) as thanghb FROM `sheet6`) as banghb1


LEFT JOIN

(Select
         CONCAT(year(sheet1.`ngay phoi`), '-', Month(sheet1.`ngay phoi`))  As thang,
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
	( sheet1.trai = '".$trai."' )
     Group By
       thang) as bang11

ON banghb1.thanghb = bang11.thang

LEFT JOIN

(Select
 CONCAT(year(sheet1.`ngay ban loai chet`), '-', Month(sheet1.`ngay ban loai chet`))  As thang,
  
   
    count(sheet1.`nguyen nhan nai mat`) As so_nai_chet
From
    sheet1
Where
    sheet1.`lan phoi` = 1 And
    sheet1.`ngay ban loai chet` >= '".$date_batdau."' And
    sheet1.`ngay ban loai chet` < '".$date_ketthuc."' And
    sheet1.`nguyen nhan nai mat` LIKE 'l' And
		( sheet1.trai = '".$trai."' )
    Group By
  thang) as bang12
  
  ON banghb1.thanghb = bang12.thang


LEFT JOIN

(Select
 CONCAT(year(sheet1.`ngay ban loai chet`), '-',Month(sheet1.`ngay ban loai chet`))  As thang,
  
   
    count(sheet1.`nguyen nhan nai mat`) As so_nai_chet
From
    sheet1
Where
    sheet1.`lan phoi` = 1 And
    sheet1.`ngay ban loai chet` >= '".$date_batdau."' And
    sheet1.`ngay ban loai chet` < '".$date_ketthuc."' And
    sheet1.`nguyen nhan nai mat` LIKE 'c' And
		( sheet1.trai = '".$trai."' )
    Group By
 thang) as bang13
  
  ON banghb1.thanghb = bang13.thang
  
  
  
  LEFT JOIN

(Select
		CONCAT(year(sheet1.`ngay phoi`), '-',Month(sheet1.`ngay phoi`))		 As thang,
         Sum(sheet1.`lan phoi`) As so_hau_bi_tang_dan
     From
         sheet1
     Where
         sheet1.`ngay phoi` >= '".$date_batdau."' And
         sheet1.`ngay phoi` < '".$date_ketthuc."' And
         sheet1.`lan phoi` = 1 And
		( sheet1.trai = '".$trai."' )
     Group By
       thang) as bang14
  
  ON banghb1.thanghb = bang14.thang



LEFT JOIN

(Select
 CONCAT(year(sheet2.`ngay_chet(loai)`), '-',Month(sheet2.`ngay_chet(loai)`))  As thang,
  
   
    count(sheet2.`ngay_chet(loai)`) As so_hb_giam
From
    sheet2
Where
    
    sheet2.`ngay_chet(loai)` >= '".$date_batdau."' And
    sheet2.`ngay_chet(loai)` < '".$date_ketthuc."' And
	sheet2.`phan_loai_heo` = 'HB' And
   
		( sheet2.trai = '".$trai."' )
    Group By
  thang ) as banghb2
  
  ON banghb1.thanghb = banghb2.thang
  
  LEFT JOIN
  
  (Select
 CONCAT(year(sheet2.ngay_nhap), '-',Month(sheet2.ngay_nhap))  As thang,
  
   
    count(sheet2.ngay_nhap) As so_hb_tang
From
    sheet2
Where
    
    sheet2.ngay_nhap >= '".$date_batdau."' And
    sheet2.ngay_nhap <  '".$date_ketthuc."' And
sheet2.`phan_loai_heo` = 'HB' And
   
	( sheet2.trai = '".$trai."' )
    Group By
  Thang) as banghb3
  
   ON banghb1.thanghb = banghb3.thang
   
    LEFT JOIN
  
  (Select
 CONCAT(year(sheet2.ngay_nhap), '-',Month(sheet2.ngay_nhap))  As thang,
  
   
    count(sheet2.ngay_nhap) As so_duc_tang
From
    sheet2
Where
    
    sheet2.ngay_nhap >= '".$date_batdau."' And
    sheet2.ngay_nhap <  '".$date_ketthuc."' And
sheet2.`phan_loai_heo` = 'D' And
   
	( sheet2.trai = '".$trai."' )
    Group By
  Thang) as banghb4
  
   ON banghb1.thanghb = banghb4.thang
   
   LEFT JOIN

(Select
 CONCAT(year(sheet2.`ngay_chet(loai)`), '-',Month(sheet2.`ngay_chet(loai)`))  As thang,
  
   
    count(sheet2.`ngay_chet(loai)`) As so_duc_giam
From
    sheet2
Where
    
    sheet2.`ngay_chet(loai)` >= '".$date_batdau."' And
    sheet2.`ngay_chet(loai)` < '".$date_ketthuc."' And
	sheet2.`phan_loai_heo` = 'D' And
   
		( sheet2.trai = '".$trai."' )
    Group By
  thang ) as banghb5
  
  ON banghb1.thanghb = banghb5.thang
  ORDER BY 


stt_xap_sep ASC
  

			 ";
$result_6 = mysqli_query($conn, $sql_6);
 $cout_6 = mysqli_num_rows($result_6);
$arraymysql_6 = [];
for ($x = 0; $x < $cout_6; $x++) {
    $arraymysql_6[$x] = mysqli_fetch_row($result_6) ;
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
 
 
 $arraymysql_4 = [[$so_nai_luc_dau, $so_thit_luc_dau, $so_duc_luc_dau]];
 
 
 
  
  $arraymysql_sum = array_merge( $arraymysql_4, $arraymysql_6);
 
  
  
 //A. load file excel có sẵn và ghi dữ liệu, công thức, mảng vào file excel đó
 require 'vendor/autoload.php';
 // kết nối csdl excel	


$spreadsheet = \PhpOffice\PhpSpreadsheet\IOFactory::load('excel_bao_cao_thang_theo_phoi.xlsx');

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
																				'A1:A1',     // The worksheet range that we want to retrieve
																				NULL,        // Value that should be returned for empty cells
																				TRUE,        // Should formulas be calculated (the equivalent of getCalculatedValue() for each cell)
																				TRUE,        // Should values be formatted (the equivalent of getFormattedValue() for each cell)
																				false       // Should the array be indexed by cell row and cell column
																				);

$so_o_lay = $so_o_lay_du_lieu_array[0][0] +2;

if ($so_o_lay === 0) {  echo ("Chưa có dữ liệu");}
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


    echo json_encode($dataexcel);
}



?>	
