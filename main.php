
<?php

include "setup/fuction_ket_noi_csdl.php";
// nếu đăng nhập rồi thì hiện thông tin đăng nhập

$arraymysql = [];
// lấy thông tin đăng nhập từ token khi đăng nhập rồi hoặc lấy từ refesh token
$arraymysql[0]  = array_values($payload[1]) ;

$cong_ty = $payload[1]['trai']  ;

$conn = mysqli_connect($servername, $username, $password, $dbname);

mysqli_set_charset($conn, 'UTF8'); // thêm tiếng việt mới lấy được câu lệnh sql đã chạy
// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// lấy cấu hình chuồng 		
$sql_2 = "SELECT setup_chuong.chi_nhanh, GROUP_CONCAT(setup_chuong.chuong ORDER BY setup_chuong.id ASC SEPARATOR '|_|') , min(setup_chuong.id) FROM `setup_chuong` WHERE setup_chuong.cong_ty ='".$cong_ty."' GROUP BY setup_chuong.chi_nhanh ORDER BY setup_chuong.id ASC  ";
$result_2 = mysqli_query($conn, $sql_2);
$count_2 = mysqli_num_rows($result_2);	
$arraymysql_2 = [];
for ($x = 0; $x < $count_2; $x++) {
    $arraymysql_2[$x] = mysqli_fetch_row($result_2) ;
}

for ($x = 0; $x < $count_2; $x++) {
    $arraymysql_2[$x][1] =array_chunk( explode('|_|', $arraymysql_2[$x][1])  , 6)  ;
}



    // lấy cấu hình kho cám
    $sql_3 = "SELECT setup_kho.id, setup_kho.id_ten, setup_kho.ten, setup_kho.don_vi_tinh, setup_kho.nha_cung_cap , setup_kho.ghi_chu, setup_kho.kho  FROM `setup_kho` WHERE setup_kho.cong_ty ='".$cong_ty."' and setup_kho.kho = 'Cám'";
    $result_3 = mysqli_query($conn, $sql_3);
    $count_3 = mysqli_num_rows($result_3);	
    $arraymysql_3 = [["id","Mã sản phẩm", "Tên sản phẩm", "Đơn vị tính", "Nhà cung cấp", "Ghi chú","Loại sản phẩm"]];
    for ($x = 1; $x < $count_3+1; $x++) {
        $arraymysql_3[$x] = mysqli_fetch_row($result_3) ;
    }






 
$arraymysql[0][20] = $arraymysql_2 ;
$arraymysql[0][21] = $arraymysql_3 ;


$string_data = str_ireplace("|_|","'",json_encode($arraymysql)) ;

echo  '<script> arrayjavascript_3 = '. $string_data .'  ; </script>' ;

?> 
