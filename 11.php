<?php
		
        $time_start = microtime(true);

//         $x = 1;
 
// while($x <= 1000000000) {
 
//   $x++;
// } 
  // câu lệnh này chạy mất khoảng 9 giây
// kết nối csdl	
include "setup/fuction_ket_noi_csdl.php";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
	if (!$conn) {
	die("Connection failed: " . mysqli_connect_error());
	}

        // lấy dữ liệu lên html
		$sql_1 = "select *
                from
                (
                   SELECT `so tai`,DATE_FORMAT(table1.`ngay phoi`, '%d/%m/%Y'),DATE_FORMAT(table1.`ngay de`, '%d/%m/%Y') as ngay_de_1,table1.`SCCS`as sccs_1,DATE_FORMAT(table2.`ngay de`, '%d/%m/%Y') as ngay_de_2,table2.`SCCS`as sccs_2,IF(table2.`SCCS`IS NULL,100,table1.`SCCS` + table2.`SCCS`) as tong_hai_lan_de 
                FROM (SELECT `ma lan phoi` as ma_lan_phoi, `so tai`,`ngay phoi`,`ngay de`,`SCSR`,`chet`,`tat`,`kho`,`coi`,`SCCS`  FROM `sheet1` WHERE `SCCS` <= 7 AND `ngay ban loai chet` IS NULL AND `trai` = '101' AND `lan_phoi_them_1` IS NULL AND`ngay de` IS NOT NULL) as table1
                LEFT JOIN (SELECT CONCAT(`trai`,'-',`lan phoi`+1,'-',`so tai`) as ma_lan_phoi_sau, `ngay de`,`SCSR`,`chet`,`tat`,`kho`,`coi`,`SCCS` FROM `sheet1` WHERE `SCCS` <= 11 AND `ngay ban loai chet` IS NULL AND `trai` = '101'  AND`ngay de` IS NOT NULL) as table2
                ON table1.ma_lan_phoi = table2.ma_lan_phoi_sau
                ) as x
                WHERE x.tong_hai_lan_de <=14
		";
		$result_1 = mysqli_query($conn, $sql_1);
		$cout_1 = mysqli_num_rows($result_1);
		$arraymysql_1 = [];

		$arraymysql_1[0] = ["Số tai",
		"Ngày phối",
"Lần phối",
"Đực phối",
"Người phối",
"Biểu hiện khi phối",
"Loại nái phối",
"Ngày cai lứa trước"


];
		for ($x = 1; $x < $cout_1 + 1; $x++) {
		$arraymysql_1[$x] = mysqli_fetch_row($result_1) ;
		}      


        $time_end = microtime(true);
        $time = $time_end - $time_start;
        
        echo "Did nothing in $time seconds\n";
?>	