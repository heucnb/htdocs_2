

<html>
<body>

<table id="table1" class="table_nhận_dữ_liệu table_ty_le_phoi" > 
   
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
 FROM (SELECT `stt`,  CONCAT('". $_POST["post1"]."', '-', sheet4.`thang`) as thang5  FROM `sheet4`) as bang5
LEFT JOIN(Select
         CONCAT(year(sheet1.`ngay phoi`),
                '-',
                IF(Month(sheet1.`ngay phoi`)<10, Month(sheet1.`ngay phoi`),CONCAT('9-',Month(sheet1.`ngay phoi`)) ),'--',
				TRUNCATE(sheet1.`so ngay loc`/7,0)+1
				
				
				)  As thang,
        
		
         Count(sheet1.`so tai`) As so_phoi,
		    

         Count(sheet1.`ngay van de`) As so_loc_va_xay_thai
        
     From
         sheet1
     Where
          sheet1.`ngay phoi` >= '".$date_batdau."' And
         sheet1.`ngay phoi` < '".$date_ketthuc."' And
		 ( sheet1.trai = '".$trai."' )
     Group By
       thang ) as bang1
ON bang5.thang5= bang1.thang

ORDER BY 


`stt` ASC

    
		 ";
$result_1 = mysqli_query($conn, $sql_1);
$cout_1 = mysqli_num_rows($result_1);
$arraymysql_1 = [];
for ($x = 0; $x < $cout_1; $x++) {
    $arraymysql_1[$x] = mysqli_fetch_row($result_1) ;
  }
 
 
 

  
 
 
  
  
 //A. load file excel có sẵn và ghi dữ liệu, công thức, mảng vào file excel đó
 require 'vendor/autoload.php';
 // kết nối csdl excel	


$spreadsheet = \PhpOffice\PhpSpreadsheet\IOFactory::load('excel_ty_le_phoi_thang.xlsx');

//A.1 chọn sheet active
// A.4 lấy dữ liệu từ một mảng ghi vào file excel
$o_dien_du_lieu_tu_array = "A2" ;
		$spreadsheet->getSheetByName('data')
    ->fromArray(
           $arraymysql_1,  // **** mảng cần lấy dữ liệu
        NULL,        // Array values with this value will not be set
        $o_dien_du_lieu_tu_array ,         // Top left coordinate of the worksheet range where
          true           //  set value 0 in cell

    ); 

 // B. - lấy dữ liệu từ excel lên web html	
// B.1 - lấy dữ liệu data từ excel vào mảng php

$mien_lay_du_lieu_excel = 'AC2:AO21';
	$dataexcel = $spreadsheet->getSheetByName('getdata')
    ->rangeToArray(
       $mien_lay_du_lieu_excel,     // The worksheet range that we want to retrieve
        NULL,        // Value that should be returned for empty cells
        TRUE,        // Should formulas be calculated (the equivalent of getCalculatedValue() for each cell)
         TRUE,        // Should values be formatted (the equivalent of getFormattedValue() for each cell)
        false       // Should the array be indexed by cell row and cell column
    ); 









?>	

// B.2 - lấy dữ liệu từ mảng php vào html tiếp
 var arrayjavascript = <?php echo json_encode($dataexcel); ?>; // ***** gán mảng 2 chiều từ php vào javácript
 var countjavascript = arrayjavascript.length ;
  var coloumsjavascript = arrayjavascript[1].length ; 
 
// tạo bảng trên html 
   for(var r=0;r< countjavascript;r++)
  {
  var x= document.getElementById('table1').insertRow(r);
    
   for(var c=0;c<coloumsjavascript;c++)  
    {
     x.insertCell(c);
    }
   }
// điền dữ liệu vào bảng 

   for(var r=0;r<countjavascript;r++)
  {
  
    
   for(var c=0;c<coloumsjavascript;c++)  
    {
    
	  document.getElementById('table1').rows[r].cells[c].innerHTML =arrayjavascript[r][c]; 
    }
   }
   



	
	
</script>


