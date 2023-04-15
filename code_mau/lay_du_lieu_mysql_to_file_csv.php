<?php
		



// kết nối csdl	

include $_SERVER["DOCUMENT_ROOT"] . "/setup/fuction_ket_noi_csdl.php";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
	if (!$conn) {
	die("Connection failed: " . mysqli_connect_error());
	}



 // sql lấy dữ liệu
	$sql_4_1 = "
SELECT `so cat tai`,`ngay de`,`duc phoi`,`so tai` FROM `sheet1` 
WHERE
`loai lon` = 'ck' AND 
`ngay de` IS NOT NULL AND 
`trai` = 106 AND
`so cat tai` IS NOT NULL  
ORDER BY `sheet1`.`ngay de` DESC
			 ";
$result_4_1 = mysqli_query($conn, $sql_4_1);
$cout_4_1 = mysqli_num_rows($result_4_1);
$arraymysql_4_1 = [];
for ($x = 0; $x < $cout_4_1; $x++) {
    $arraymysql_4_1[$x] = mysqli_fetch_row($result_4_1) ;
  } 
 
 
 

$csv = "col1,col2,col3,col4 \n";//Column headers
foreach ($arraymysql_4_1 as $record){
    $csv.= $record[0].','.$record[1].','.$record[2].','.$record[3]."\n"; //Append data to csv
    }

$csv_handler = fopen ('excel_data_mysql.csv','w');
fwrite ($csv_handler,$csv);
fclose ($csv_handler);

echo 'Data saved to excel_data_mysql.csv';

?>	

