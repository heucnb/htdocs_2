
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

$total_id =safeSQL($_POST["post9"]);

$kho =safeSQL($_POST["post10"]);
include "setup/check_token_and_post.php";


// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
	if (!$conn) {
	die("Connection failed: " . mysqli_connect_error());
	}

	// nếu post xoá chuồng thì kiểm tra xem chuồng đó đã nhập dữ liệu chưa nếu nhập dữ liệu rồi thì không cho xoá
	if ($lua_chon === "xoa") {


// kiểm tra xem cấu hình ở local có giống trên sever không hay bị thay đổi bởi admin rồi bằng cách 
// tính sum(id) ở local xem có giống trên server không nếu giống coi là giống nhau

$sql_22 = "SELECT SUM(setup_kho.id) FROM setup_kho WHERE setup_kho.cong_ty = '".$trai."' AND setup_kho.kho = '".$kho."'  ;";
$result_22 = mysqli_query($conn, $sql_22); 

$total_id_server = mysqli_fetch_row($result_22)[0] ;

if ($total_id != $total_id_server) {
	echo "Cấu hình kho  '".$kho."'  đã được cập nhật mới bởi Admin rồi. Bạn tải lại trang web để nhận danh sách  mới";
exit() ;
} 




// kiểm tra id post lên có trên server không nếu không thì thông báo lỗi nếu có thì xoá
$sql_20 = "SELECT COUNT(setup_kho.id) FROM setup_kho WHERE setup_kho.cong_ty = '".$trai."' AND setup_kho.id =  '".$id."'  ;";
$result_20 = mysqli_query($conn, $sql_20); 

$count_id = mysqli_fetch_row($result_20)[0] ;

if ($count_id == 0) {
	echo "Cấu hình kho  '".$kho."'  đã được cập nhật mới bởi Admin rồi. Bạn tải lại trang web để nhận danh sách  mới";
exit() ;
} 



	
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

// kiểm tra xem cấu hình ở local có giống trên sever không hay bị thay đổi bởi admin rồi bằng cách 
// tính sum(id) ở local xem có giống trên server không nếu giống coi là giống nhau

$sql_22 = "SELECT SUM(setup_kho.id) FROM setup_kho WHERE setup_kho.cong_ty = '".$trai."' AND setup_kho.kho = '".$kho."'  ;";
$result_22 = mysqli_query($conn, $sql_22); 

$total_id_server = mysqli_fetch_row($result_22)[0] ;

if ($total_id != $total_id_server) {
	echo "Cấu hình kho  '".$kho."'  đã được cập nhật mới bởi Admin rồi. Bạn tải lại trang web để nhận danh sách  mới";
exit() ;
} 



// kiểm tra id post lên có trên server không nếu không thì thông báo lỗi nếu có thì tiếp tục sửa
$sql_21 = "SELECT COUNT(setup_kho.id) FROM setup_kho WHERE setup_kho.cong_ty = '".$trai."' AND setup_kho.id =  '".$id."'  ;";
$result_21 = mysqli_query($conn, $sql_21); 

$count_id = mysqli_fetch_row($result_21)[0] ;

if ($count_id == 0) {
	echo "Cấu hình kho  '".$kho."'  đã được cập nhật mới bởi Admin rồi. Bạn tải lại trang web để nhận danh sách  mới";
exit() ;
} 




	// nếu tên sản phẩm mới này có rồi thì dừng lại thông báo lỗi
	
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
// //nếu nhà cung cấp này có rồi thì thông báo lỗi. Nếu muốn đổi tên nhà cung cấp giống nhà cung cáp có rồi thì phải xoá đi và thêm mới lại
// $sql_8 = "SELECT COUNT(setup_kho.nha_cung_cap) FROM setup_kho
// WHERE setup_kho.nha_cung_cap =  '".$nha_cung_cap."' AND setup_kho.cong_ty =  '".$trai."' ;";
// $result_8 = mysqli_query($conn, $sql_8);	
// $count_nha_cung_cap = mysqli_fetch_row($result_8)[0] ;

// 		if ($count_nha_cung_cap>0  &&  $array[4] !== $nha_cung_cap) {
// 			echo "Nhà cung cấp này đã có rồi vui lòng đổi tên khác";
// 		exit() ;
// 		} 	



 // update setup_kho và thay đổi id
 $sql_9 = "SELECT  MAX(setup_kho.id)
 FROM setup_kho ;";
 $result_9 = mysqli_query($conn, $sql_9);	
 $get_id_max = mysqli_fetch_row($result_9)[0] + 1 ;


 $sql_1 = "UPDATE setup_kho
 SET 

 setup_kho.id =  '".$get_id_max."' ,

setup_kho.id_ten = '".$ma."',
setup_kho.ten = '".$ten_sp."' ,
setup_kho.nha_cung_cap = '".$nha_cung_cap."' ,
setup_kho.ghi_chu = '".$ghi_chu."'
WHERE setup_kho.cong_ty = '".$trai."' AND setup_kho.id =  '".$array[0]."'  ;";
 $result_1 = mysqli_query($conn, $sql_1); 






 $sql_2 = "UPDATE kho SET 
 kho.ten = '".$ten_sp."'
 WHERE kho.cong_ty = '".$trai."' AND kho.ten = '".$array[2]."'
 
  ;";
 $result_2 = mysqli_query($conn, $sql_2); 


  
echo "ok".$get_id_max ;



	}



//--------------------------------------------------------------------------------------------
if ($lua_chon === "them") {
// kiểm tra xem cấu hình ở local có giống trên sever không hay bị thay đổi bởi admin rồi bằng cách 
// tính sum(id) ở local xem có giống trên server không nếu giống coi là giống nhau

$sql_22 = "SELECT SUM(setup_kho.id) FROM setup_kho WHERE setup_kho.cong_ty = '".$trai."' AND setup_kho.kho = '".$kho."'  ;";
$result_22 = mysqli_query($conn, $sql_22); 

$total_id_server = mysqli_fetch_row($result_22)[0] ;

if ($total_id != $total_id_server && $total_id_server != NULL && $total_id != 0 ) {
	echo "Cấu hình kho  '".$kho."'  đã được cập nhật mới bởi Admin rồi. Bạn tải lại trang web để nhận danh sách  mới";
exit() ;
} 



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
   '".$kho."', 

   '".$ma."', 
   '".$ten_sp."', 
   '".$nha_cung_cap."', 
   '".$don_vi_tinh."', 
	'".$ghi_chu."'
	
   )";
 
 
   $result_8 = mysqli_query($conn, $sql_8);


   $sql_9 = "SELECT LAST_INSERT_ID() ";
	$result_9 = mysqli_query($conn, $sql_9);


	$get_id_them = mysqli_fetch_row($result_9)[0] ;
 
 
	
 echo "ok".$get_id_them ;

	}


if ($lua_chon === "change_name") {
// kiểm tra xem cấu hình ở local có giống trên sever không hay bị thay đổi bởi admin rồi bằng cách 
// tính sum(id) ở local xem có giống trên server không nếu giống coi là giống nhau

$sql_22 = "SELECT SUM(setup_kho.id) FROM setup_kho WHERE setup_kho.cong_ty = '".$trai."' AND setup_kho.kho = '".$kho."'  ;";
$result_22 = mysqli_query($conn, $sql_22); 

$total_id_server = mysqli_fetch_row($result_22)[0] ;

if ($total_id != $total_id_server) {
	echo "Cấu hình kho  '".$kho."'  đã được cập nhật mới bởi Admin rồi. Bạn tải lại trang web để nhận danh sách  mới";
exit() ;
} 

	// nếu nhà cung cấp cũ không có trên server thì dừng lại thông báo lỗi
	
		$sql_6 = "SELECT COUNT(setup_kho.nha_cung_cap) FROM setup_kho
WHERE setup_kho.nha_cung_cap =  '".$array[0]."' AND setup_kho.cong_ty =  '".$trai."' ;";
$result_6 = mysqli_query($conn, $sql_6);	
$count_ncc = mysqli_fetch_row($result_6)[0] ;




		if ($count_ncc == 0  ) {
			echo "Nhà cung cấp bạn đổi tên không có trên server";
		exit() ;
		} 

	// tiến hành đổi tên	

 $sql_3 = "UPDATE setup_kho
 SET 
setup_kho.nha_cung_cap = '".$nha_cung_cap."'
WHERE setup_kho.cong_ty = '".$trai."'   and setup_kho.nha_cung_cap = '".$array[0]."' ;";
 $result_3 = mysqli_query($conn, $sql_3); 


	
 echo "ok" ;

	}

	

//-----------------------------------------------------------------------------------------





?>	
