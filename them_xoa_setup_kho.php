
<?php
include "setup/fuction_ket_noi_csdl.php";

$array = json_decode(safeSQL($_POST["json_array"]))  ;	

$id =  safeSQL($_POST["post1"]) ;
$lua_chon = safeSQL($_POST["post2"]) ;
$ten_sp =  safeSQL($_POST["post3"]) ;

$ma =  safeSQL($_POST["post4"]) ;
$don_vi_tinh =  safeSQL($_POST["post5"]) ;
$nha_cung_cap =  safeSQL($_POST["post6"]) ;
$ghi_chu =  safeSQL($_POST["post7"]) ;


$trai=safeSQL($_POST["post8"]);

include "setup/check_token_and_post.php";



// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
	if (!$conn) {
	die("Connection failed: " . mysqli_connect_error());
	}

	// nếu post xoá chuồng thì kiểm tra xem chuồng đó đã nhập dữ liệu chưa nếu nhập dữ liệu rồi thì không cho xoá
	if ($lua_chon === "xoa") {
	
		$sql_6 = "SELECT COUNT(kho.ten) FROM kho
WHERE kho.ten =  '".$ten_sp."' AND kho.cong_ty =  '".$trai."' ;";
$result_6 = mysqli_query($conn, $sql_6);	
$count_ten_sp = mysqli_fetch_row($result_6)[0] ;

		if ($count_ten_sp>0) {
			echo "Sản phẩm này đã sử dụng trong kho rồi, bạn phải xoá hết dữ liệu đã nhập mới xoá được";
		exit() ;
		} 
		

 // xoá id
 $sql_1 = "DELETE FROM setup_kho WHERE setup_kho.cong_ty = '".$trai."' AND setup_kho.id =  '".$id."'  ;";
 $result_1 = mysqli_query($conn, $sql_1); 

	
 echo 'ok' ;

	}


//-------------------------------------------------------------------------------------------------------------------
	if ($lua_chon === "sua") {
	// nếu tên sản phẩm này có rồi thì dừng lại thông báo lỗi
	
		$sql_6 = "SELECT COUNT(setup_kho.ten) FROM setup_kho
WHERE setup_kho.ten =  '".$ten_sp."' AND setup_kho.cong_ty =  '".$trai."' ;";
$result_6 = mysqli_query($conn, $sql_6);	
$count_ten_sp = mysqli_fetch_row($result_6)[0] ;

		if ($count_ten_sp>0 && $array[2] !== $ten_sp ) {
			echo "Sản phẩm này đã có rồi vui lòng đổi tên khác";
		exit() ;
		} 

// nếu mã sản phẩm này có rồi thì dừng lại thông báo lỗi		
	$sql_7 = "SELECT COUNT(setup_kho.id_ten) FROM setup_kho
WHERE setup_kho.id_ten =  '".$ma."' AND setup_kho.cong_ty =  '".$trai."' ;";
$result_7 = mysqli_query($conn, $sql_7);	
$count_ma_sp = mysqli_fetch_row($result_7)[0] ;

		if ($count_ma_sp>0 &&  $array[1] !== $ma ) {
			echo "Mã sản phẩm này đã có rồi vui lòng đổi tên khác";
		exit() ;
		} 	
//nếu nhà cung cấp này có rồi thì thông báo lỗi
$sql_8 = "SELECT COUNT(setup_kho.nha_cung_cap) FROM setup_kho
WHERE setup_kho.nha_cung_cap =  '".$nha_cung_cap."' AND setup_kho.cong_ty =  '".$trai."' ;";
$result_8 = mysqli_query($conn, $sql_8);	
$count_nha_cung_cap = mysqli_fetch_row($result_8)[0] ;

		if ($count_nha_cung_cap>0  &&  $array[4] !== $nha_cung_cap) {
			echo "Nhà cung cấp này đã có rồi vui lòng đổi tên khác";
		exit() ;
		} 	


 // update setup_kho
 $sql_1 = "UPDATE setup_kho
 SET 
setup_kho.id_ten = '".$ma."',
setup_kho.ten = '".$ten_sp."' ,
setup_kho.ghi_chu = '".$ghi_chu."'
WHERE setup_kho.cong_ty = '".$trai."' AND setup_kho.id =  '".$array[0]."'  ;";
 $result_1 = mysqli_query($conn, $sql_1); 


 $sql_3 = "UPDATE setup_kho
 SET 
setup_kho.nha_cung_cap = '".$nha_cung_cap."'
WHERE setup_kho.cong_ty = '".$trai."'  ;";
 $result_3 = mysqli_query($conn, $sql_3); 


 $sql_2 = "UPDATE kho SET 
 kho.ten = '".$ten_sp."'
 WHERE kho.cong_ty = '".$trai."' AND kho.ten = '".$array[2]."'
 
  ;";
 $result_2 = mysqli_query($conn, $sql_2); 





	
 echo 'ok' ;

	}


//--------------------------------------------------------------------------------------------
if ($lua_chon === "them") {
	// nếu tên sản phẩm này có rồi thì dừng lại thông báo lỗi
	
		$sql_6 = "SELECT COUNT(setup_kho.ten) FROM setup_kho
WHERE setup_kho.ten =  '".$ten_sp."' AND setup_kho.cong_ty =  '".$trai."' ;";
$result_6 = mysqli_query($conn, $sql_6);	
$count_ten_sp = mysqli_fetch_row($result_6)[0] ;

		if ($count_ten_sp>0  ) {
			echo "Sản phẩm này đã có rồi vui lòng đổi tên khác";
		exit() ;
		} 

// nếu mã sản phẩm này có rồi thì dừng lại thông báo lỗi		
	$sql_7 = "SELECT COUNT(setup_kho.id_ten) FROM setup_kho
WHERE setup_kho.id_ten =  '".$ma."' AND setup_kho.cong_ty =  '".$trai."' ;";
$result_7 = mysqli_query($conn, $sql_7);	
$count_ma_sp = mysqli_fetch_row($result_7)[0] ;

		if ($count_ma_sp>0 ) {
			echo "Mã sản phẩm này đã có rồi vui lòng đổi tên khác";
		exit() ;
		} 	


 $sql_8 =  "INSERT INTO
 setup_kho
 (
	setup_kho.cong_ty, 
	setup_kho.kho, 
setup_kho.id_ten, 
 setup_kho.ten, 
 setup_kho.nha_cung_cap ,
 setup_kho.don_vi_tinh ,
 setup_kho.ghi_chu 
 )VALUES (

	'".$trai."', 
   'Cám', 

   '".$ma."', 
   '".$ten_sp."', 
   '".$nha_cung_cap."', 
   '".$don_vi_tinh."', 
	'".$ghi_chu."'
	
   )";
 
 
   $result_8 = mysqli_query($conn, $sql_8);
 
   $sql_9 = "SELECT  MAX(setup_kho.id)
   FROM setup_kho ;";
   $result_9 = mysqli_query($conn, $sql_9);	
   $get_id_them = mysqli_fetch_row($result_9)[0] ;

	
 echo "ok".$get_id_them ;

	}



	

//-----------------------------------------------------------------------------------------





?>	
