

<?php
		
$ma_the_nai =$_POST["post1"];

$date_ngay_phoi=$_POST["post2"];
$ma_duc =$_POST["post3"];

$nguoi_phoi=$_POST["post4"];
$bieu_hien_khi_phoi=$_POST["post5"];
$trai=$_POST["post8"];



// kết nối csdl	
include "setup/fuction_ket_noi_csdl.php";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
	if (!$conn) {
	die("Connection failed: " . mysqli_connect_error());
	}
	
// láy số ngày khóa dữ liệu
$sql_lay_ngay_khoa_du_lieu = "select `khoa_ngay_sua_du_lieu` from login where `trai_value`='".$trai."' limit 1 ";
$result_lay_ngay_khoa_du_lieu = mysqli_query($conn, $sql_lay_ngay_khoa_du_lieu);
$cout_lay_ngay_khoa_du_lieu = mysqli_num_rows($result_lay_ngay_khoa_du_lieu);	
$arraymysql_lay_ngay_khoa_du_lieu = [];
for ($x = 0; $x < $cout_lay_ngay_khoa_du_lieu ; $x++) {
    $arraymysql_lay_ngay_khoa_du_lieu[$x] = mysqli_fetch_row($result_lay_ngay_khoa_du_lieu) ;
  }
$so_ngay_khoa_du_lieu =  $arraymysql_lay_ngay_khoa_du_lieu[0][0];

$ngay_khoa_du_lieu = date ( 'd/m/Y' , strtotime ( "-  ".$so_ngay_khoa_du_lieu."  day" , strtotime ( date('Y/m/d') ) ) )   ;

if(      strtotime(date("Y/m/d"))   -   strtotime($date_ngay_phoi)   >   $so_ngay_khoa_du_lieu *24*60*60            )
{
$kiem_tra_loi_1 = "Người quản lý đã khóa không cho thêm, sửa, xóa dữ liệu trước ngày ".$ngay_khoa_du_lieu ." ";
goto a;
}		

// chú ý **** đếm không được để nhỏ hơn bằng hay lớn hơn bằng vì cai sữa có thể cùng ngày phối
// sql tính lần phối lúc thêm
$sql_2 = "Select
         sheet1.`ngay phoi`,
         sheet1.`so tai`,
         sheet1.trai
     From
         sheet1
     Where
         sheet1.`ngay phoi` < '".$date_ngay_phoi."' And
         sheet1.`so tai` = '".$ma_the_nai."' And
         sheet1.trai = '".$trai."'";
$result_2 = mysqli_query($conn, $sql_2);
$lan_phoi_luc_them = mysqli_num_rows($result_2)+1; 

//kiểm tra dữ liệu thêm vào phải mới nhất tức là lần phối phải lớn hơn lần phối có trong cơ sở dữ liệu (ngày phối lớn hơn ngày phối mới nhất in csdl)
// sql tính làn phối trong csdl
$sql_4 = "Select
         sheet1.`so tai`
     From
         sheet1
     Where
         sheet1.`so tai` = '".$ma_the_nai."' And
         sheet1.trai = '".$trai."'" ;
$result_4 = mysqli_query($conn, $sql_4);
$lan_phoi_in_csdl = mysqli_num_rows($result_4); // lần phối mới nhất
if($lan_phoi_in_csdl>=$lan_phoi_luc_them)
{
$kiem_tra_loi_1 = "Số tai này đã nhập rồi" ;
goto a;
}

// kiểm tra số tai đực nhập vào có trong danh sách đàn đực không	
$sql_3_sheet2 = "Select
	sheet2.`so_tai`,
	sheet2.`ngay_nhap`,
    sheet2.trai
   
From
    sheet2
Where
    sheet2.`ma_so_tai` =  '".$trai."-1-".$ma_duc."'
	And     
	sheet2.`phan_loai_heo` = 'D'
	And     
	sheet2.trai = '".$trai."'
	";
$result_3_sheet2 = mysqli_query($conn, $sql_3_sheet2);
$cout_3_sheet2 = mysqli_num_rows($result_3_sheet2);



	if($cout_3_sheet2 == 0 )
	{
	$kiem_tra_loi_1 = "Số tai heo đực này không có trong danh sach heo đực kiểm tra lại" ;
	goto a;
	}



//tiếp tục kiểm tra số tai thêm vào phải có ngày cai mới nhất <= ngày phối, hoặc ngày lốc mới nhất <= ngày phối và phải chưa chết hoặc loại
$ma_lan_phoi_moi_nhat_in_csdl = $trai."-".$lan_phoi_in_csdl."-".$ma_the_nai ;
$sql_5 = "Select
	sheet1.`ngay cai`,	
    DATE_FORMAT(sheet1.`ngay van de`, '%d/%m/%Y')  ,
    sheet1.`ngay ban loai chet`,
    sheet1.`ma lan phoi`,
	sheet1.`nguyen nhan van de` 
From
    sheet1
Where
    sheet1.`ma lan phoi` = '".$ma_lan_phoi_moi_nhat_in_csdl."'
	and
	sheet1.trai = '".$trai."'
	;";
$result_5 = mysqli_query($conn, $sql_5);

$cout_5 = mysqli_num_rows($result_5);
if ($cout_5==0)
{
//nếu số tai này chưa có trong sổ phối thì kiểm tra số tai thêm vào phải có trong danh sách lợn hậu bị hoặc nái bổ sung trong danh sách lợn hậu bị	

$sql_1_sheet2 = "Select
	sheet2.`so_tai`,
	sheet2.`ngay_nhap`,
    sheet2.trai
   
From
    sheet2
Where
    sheet2.`ma_so_tai` =  '".$trai."-1-".$ma_the_nai."'
	And     
	sheet2.`phan_loai_heo` = 'HB'
	And     
	sheet2.trai = '".$trai."'
	";
$result_1_sheet2 = mysqli_query($conn, $sql_1_sheet2);
$cout_1_sheet2 = mysqli_num_rows($result_1_sheet2);

	if($cout_1_sheet2 == 0 )
	{
	$kiem_tra_loi_1 = "Số tai này chưa có trong danh sách lợn hậu bị, bạn phải thêm vào đó trước mới nhập tiếp được" ;
	goto a;
	}
	$arraymysql_1_sheet2 = [];
	for ($x = 0; $x < $cout_1_sheet2; $x++) {
    $arraymysql_1_sheet2[$x] = mysqli_fetch_row($result_1_sheet2) ;
	}		 
	$ngay_nhap_heo_hau_bi = $arraymysql_1_sheet2[0][1] ;
	if(( strtotime($date_ngay_phoi) - strtotime($ngay_nhap_heo_hau_bi) )  < 1*24*60*60 )
	{
	$kiem_tra_loi_1 = "Ngày phối bé hơn ngày nhập heo hậu bị" ;
	goto a;
	}
	// thêm ngày phối vào danh sách heo hậu bị
	$sql_2_sheet2 = "UPDATE `sheet2` SET 
					`ngay_phoi` = '".$date_ngay_phoi."'
				
					Where
					sheet2.`ma_so_tai` =  '".$trai."-1-".$ma_the_nai."'
					And     
					sheet2.`phan_loai_heo` = 'HB'
					And     
					sheet2.trai = '".$trai."'
					;";
	$result_2_sheet2 = mysqli_query($conn, $sql_2_sheet2);	
	
	goto b;
}
$arraymysql_5 = [];
for ($x = 0; $x < $cout_5; $x++) {
    $arraymysql_5[$x] = mysqli_fetch_row($result_5) ;
  }		 

$ngay_cai_moi_nhat_in_csdl = $arraymysql_5[0][0] ;
$ngay_van_de_moi_nhat_in_csdl = $arraymysql_5[0][1] ;
$ngay_ban_loai_chet_moi_nhat_in_csdl = $arraymysql_5[0][2] ;
$ngyen_nhan_van_de = $arraymysql_5[0][4] ;
if($ngay_cai_moi_nhat_in_csdl=="" && $ngay_van_de_moi_nhat_in_csdl=="" )
{
$kiem_tra_loi_1 = "Số tai này chưa cai hoặc chưa báo lốc" ;
goto a;
}

if( ( strtotime($ngay_cai_moi_nhat_in_csdl) - strtotime($date_ngay_phoi) )  > 1*24*60*60)
{
$kiem_tra_loi_1 = "Ngày cai lớn hơn ngày phối" ;
goto a;
}

if( ( strtotime($ngay_van_de_moi_nhat_in_csdl) - strtotime($date_ngay_phoi) )  > 1*24*60*60)
{
$kiem_tra_loi_1 = "Ngày lốc lớn hơn ngày phối" ;
goto a;
}


if($ngay_ban_loai_chet_moi_nhat_in_csdl <>"")
{
$kiem_tra_loi_1 = "Số tai này chết hoặc loại rồi" ;
goto a;
}




b:
// thêm dữ liệu vào mysql
$ma_lan_phoi = $trai."-".$lan_phoi_luc_them."-".$ma_the_nai ;


$ngay_de_dk =date('Y-m-d', strtotime($date_ngay_phoi. ' + 114 days')) ;
if (isset($ngay_van_de_moi_nhat_in_csdl))
{
$loai_nai_phoi = $ngyen_nhan_van_de."-".$ngay_van_de_moi_nhat_in_csdl ;
}
else
{
$loai_nai_phoi = NULL  ;	
}

if (isset($ngay_cai_moi_nhat_in_csdl))  // ngày cai mới nhất trong csdl chính là ngày cai lứa trước
{
$sql_3 = "INSERT INTO `sheet1` (
`ma lan phoi` ,
`so tai`  ,
`ngay phoi` ,
`loai lon` ,
`duc phoi`  ,
`lan phoi`   ,
`ngay cai lua truoc` ,
`bieu hien phoi` ,
`nguoi phoi`  ,
`trai` ,
`de du kien`,
`loai nai phoi`    ) 
                        VALUES (
'".$ma_lan_phoi."',
'".$ma_the_nai."',
'".$date_ngay_phoi."'  ,
'OB'       ,
'".$ma_duc."'  ,
'".$lan_phoi_luc_them."'  ,
'".$ngay_cai_moi_nhat_in_csdl."'   ,   
'".$bieu_hien_khi_phoi."'    ,
'".$nguoi_phoi."'   ,
'".$trai."'    , 

'".$ngay_de_dk."'    , 
'".$loai_nai_phoi."'  
)  ;";
$result_3 = mysqli_query($conn, $sql_3);	


}

// insert null vào cột date trong mysql phải bỏ dấu ' ' chỉ điền null thôi
else
{
$sql_3 = "INSERT INTO `sheet1` (
`ma lan phoi` ,
`so tai`  ,
`ngay phoi` ,
`loai lon` ,
`duc phoi`  ,
`lan phoi`   ,
`ngay cai lua truoc` ,
`bieu hien phoi` ,
`nguoi phoi`  ,
`trai` ,
`de du kien`,
`loai nai phoi`    ) 
                        VALUES (
'".$ma_lan_phoi."',
'".$ma_the_nai."',
'".$date_ngay_phoi."'  ,
'OB'       ,
'".$ma_duc."'  ,
'".$lan_phoi_luc_them."'  ,
NULL   ,   
'".$bieu_hien_khi_phoi."'    ,
'".$nguoi_phoi."'   ,
'".$trai."'    , 
'".$ngay_de_dk."'    , 
'".$loai_nai_phoi."'  
)  ;";
$result_3 = mysqli_query($conn, $sql_3);	


}


// update dữ liệu vào mysql
$lan_phoi_update =  $lan_phoi_luc_them - 1 ;
$ma_lan_phoi_tru_1= $trai."-".$lan_phoi_update."-".$ma_the_nai ;
$sql_8 = "UPDATE `sheet1` SET 
`lan_phoi_them_1`= '".$date_ngay_phoi."'
WHERE `sheet1`.`ma lan phoi` = '".$ma_lan_phoi_tru_1."';";
$result_8 = mysqli_query($conn, $sql_8);	



	
	a:

  
 if (isset($kiem_tra_loi_1)) {echo $kiem_tra_loi_1;	}
  else {


		// lấy dữ liệu lên html
		$sql_1 = "Select
		sheet1.`so tai`,
		DATE_FORMAT(sheet1.`ngay phoi`, '%d/%m/%Y'),

		sheet1.`lan phoi`,
		sheet1.`duc phoi`,

		sheet1.`nguoi phoi`,
		sheet1.`bieu hien phoi`,
		sheet1.`loai nai phoi`,
		DATE_FORMAT(sheet1.`ngay cai lua truoc`, '%d/%m/%Y') 

		From
		sheet1
		Where
		sheet1.`ngay phoi` =  '".$date_ngay_phoi."'
		And     
		sheet1.trai = '".$trai."'
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

	echo json_encode( $arraymysql_1 );
}


?>	



