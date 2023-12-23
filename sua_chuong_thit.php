
<?php
include "setup/fuction_ket_noi_csdl.php";

		  
$data_chuong_new = json_decode( safeSQL($_POST["post1"])) ;
$data_chi_nhanh = json_decode( safeSQL($_POST["post2"])) ;
$trai=safeSQL($_POST["post8"]);
$khu_cu=safeSQL($_POST["post9"]);
$chuong_cu=safeSQL($_POST["post10"]);
$khu=safeSQL($_POST["post11"]);
$chuong=safeSQL($_POST["post12"]);
$id=safeSQL($_POST["post13"]);
include "setup/check_token_and_post.php";



// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
	if (!$conn) {
	die("Connection failed: " . mysqli_connect_error());
	}

	// nếu post xoá chuồng thì kiểm tra xem chuồng đó đã nhập dữ liệu chưa nếu nhập dữ liệu rồi thì không cho xoá
	if ($chuong === "|_|xoa") {
	
		$sql_6 = "SELECT COUNT(data_thit.chuong) FROM data_thit
WHERE data_thit.cong_ty =  '".$trai."' AND data_thit.trai =  '".$khu_cu."' AND data_thit.chuong =  '".$chuong_cu."';";
$result_6 = mysqli_query($conn, $sql_6);	
$count_chuong = mysqli_fetch_row($result_6)[0] ;

		if ($count_chuong>0) {
			echo "Chuồng đã có dữ liệu rồi, bạn phải xoá hết dữ liệu đã nhập mới xoá được";
		exit() ;
		} 
		
	}


	// thực hiện update bằng cách xoá tất cả dữ liệu cũ và thay thế bằng dữ liệu mới do người dùng post lên
	//B1: kiểm tra xem dữ liệu người dùng post lên có khớp với trên sever không nếu không khớp thì thông báo lỗi, nếu khớp thì tiến hành update

	$sql = "SELECT min(setup_chuong.id) FROM `setup_chuong` WHERE setup_chuong.cong_ty = '".$trai."'  ";
	$result = mysqli_query($conn, $sql);


	$min_id = mysqli_fetch_row($result)[0] ;

		if ($min_id != $id) {
			echo "Cấu hình chuồng đã được cập nhật mới rồi. Bạn tải lại trang web để nhận danh sách chuồng mới";
		exit() ;
		} 



	$string_update = "(";
	$len = count($data_chuong_new) ;
	for ($i=0; $i < $len-1 ; $i++) { 
		$string_update = $string_update."'".$trai."'".','."'".$data_chi_nhanh[$i]."'".','."'".$data_chuong_new[$i]."'".'),(';
		
	}

	$string_update = $string_update."'".$trai."'".','."'".$data_chi_nhanh[$len-1]."'".','."'".$data_chuong_new[$len-1]."'".')';
 //B2: xoá tất cả dữ liệu cũ
 $sql_1 = "DELETE FROM setup_chuong WHERE setup_chuong.cong_ty = '".$trai."'   ";
 $result_1 = mysqli_query($conn, $sql_1); 
// B3: update dữ liệu vào mysql

$sql_3 = "INSERT INTO setup_chuong (setup_chuong.cong_ty, setup_chuong.chi_nhanh, setup_chuong.chuong)
VALUES ".$string_update.";";


$result_3 = mysqli_query($conn, $sql_3);	



$sql_9 = "SELECT LAST_INSERT_ID() ";
	$result_9 = mysqli_query($conn, $sql_9);


	$id_begin_update = mysqli_fetch_row($result_9)[0] ;

//-----------------------------------------------------------------------------------------

if ($chuong !== "|_|xoa") {

	
	// sửa lại tên chuồng

$sql_4 = "UPDATE data_thit
SET data_thit.trai =  '".$khu."', data_thit.chuong =  '".$chuong."'
WHERE data_thit.cong_ty =  '".$trai."' AND data_thit.trai =  '".$khu_cu."' AND data_thit.chuong =  '".$chuong_cu."';";
$result_4 = mysqli_query($conn, $sql_4);	
// sửa lại tên khu

$sql_5 = "UPDATE data_thit
SET data_thit.trai =  '".$khu."'
WHERE data_thit.cong_ty =  '".$trai."' AND data_thit.trai =  '".$khu_cu."' ;";
$result_5 = mysqli_query($conn, $sql_5);	



}
	


  echo 'ok|_|'.$id_begin_update ;


?>	
