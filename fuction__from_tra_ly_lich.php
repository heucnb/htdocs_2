
<?php
include "setup/fuction_ket_noi_csdl.php";

		  

$trai=safeSQL($_POST["post_trai"]);
include "setup/check_token_and_post.php";



// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
	if (!$conn) {
	die("Connection failed: " . mysqli_connect_error());
	}
	
if ($_POST["post1"]== null || $_POST["post1"]== ""){ $_POST["post1"] = "khong_co_du_lieu"; }
if ($_POST["post2"]== null || $_POST["post2"]== ""){ $_POST["post2"] = "khong_co_du_lieu"; }
if ($_POST["post3"]== null || $_POST["post3"]== ""){ $_POST["post3"] = "khong_co_du_lieu"; }
if ($_POST["post4"]== null || $_POST["post4"]== ""){ $_POST["post4"] = "khong_co_du_lieu"; }
if ($_POST["post5"]== null || $_POST["post5"]== ""){ $_POST["post5"] = "khong_co_du_lieu"; }
if ($_POST["post6"]== null || $_POST["post6"]== ""){ $_POST["post6"] = "khong_co_du_lieu"; }
if ($_POST["post7"]== null || $_POST["post7"]== ""){ $_POST["post7"] = "khong_co_du_lieu"; }
if ($_POST["post8"]== null || $_POST["post8"]== ""){ $_POST["post8"] = "khong_co_du_lieu"; }
if ($_POST["post9"]== null || $_POST["post9"]== ""){ $_POST["post9"] = "khong_co_du_lieu"; }
if ($_POST["post10"]== null || $_POST["post10"]== ""){ $_POST["post10"] = "khong_co_du_lieu"; }
if ($_POST["post11"]== null || $_POST["post11"]== ""){ $_POST["post11"] = "khong_co_du_lieu"; }
if ($_POST["post12"]== null || $_POST["post12"]== ""){ $_POST["post12"] = "khong_co_du_lieu"; }
if ($_POST["post13"]== null || $_POST["post13"]== ""){ $_POST["post13"] = "khong_co_du_lieu"; }
if ($_POST["post14"]== null || $_POST["post14"]== ""){ $_POST["post14"] = "khong_co_du_lieu"; }
if ($_POST["post15"]== null || $_POST["post15"]== ""){ $_POST["post15"] = "khong_co_du_lieu"; }
if ($_POST["post16"]== null || $_POST["post16"]== ""){ $_POST["post16"] = "khong_co_du_lieu"; }
if ($_POST["post17"]== null || $_POST["post17"]== ""){ $_POST["post17"] = "khong_co_du_lieu"; }
if ($_POST["post18"]== null || $_POST["post18"]== ""){ $_POST["post18"] = "khong_co_du_lieu"; }
if ($_POST["post19"]== null || $_POST["post19"]== ""){ $_POST["post19"] = "khong_co_du_lieu"; }
if ($_POST["post20"]== null || $_POST["post20"]== ""){ $_POST["post20"] = "khong_co_du_lieu"; }


// lấy dữ liệu lên html
$sql_1 = "Select

 
   
	count(sheet1.`so cat tai`),
	sheet1.`ngay de`,
	sheet1.`duc phoi`,
    sheet1.`so tai`
	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".safeSQL($_POST["post1"])."_%' 

UNION ALL


Select
	count(sheet1.`so cat tai`),
	sheet1.`ngay de`,
	sheet1.`duc phoi`,
    sheet1.`so tai`
	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".safeSQL($_POST["post2"])."_%' 

UNION ALL


Select
	count(sheet1.`so cat tai`),
	sheet1.`ngay de`,
	sheet1.`duc phoi`,
    sheet1.`so tai`
	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".safeSQL($_POST["post3"])."_%' 
UNION ALL


Select
count(sheet1.`so cat tai`),
	sheet1.`ngay de`,
	sheet1.`duc phoi`,
    sheet1.`so tai`
	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".safeSQL($_POST["post4"])."_%' 
UNION ALL


Select
	count(sheet1.`so cat tai`),
	sheet1.`ngay de`,
	sheet1.`duc phoi`,
    sheet1.`so tai`
	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".safeSQL($_POST["post5"])."_%' 
UNION ALL


Select
	count(sheet1.`so cat tai`),
	sheet1.`ngay de`,
	sheet1.`duc phoi`,
    sheet1.`so tai`
	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".safeSQL($_POST["post6"])."_%' 
UNION ALL


Select
	count(sheet1.`so cat tai`),
	sheet1.`ngay de`,
	sheet1.`duc phoi`,
    sheet1.`so tai`
	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".safeSQL($_POST["post7"])."_%' 
UNION ALL


Select
	count(sheet1.`so cat tai`),
	sheet1.`ngay de`,
	sheet1.`duc phoi`,
    sheet1.`so tai`
	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".safeSQL($_POST["post8"])."_%' 
UNION ALL


Select
	count(sheet1.`so cat tai`),
	sheet1.`ngay de`,
	sheet1.`duc phoi`,
    sheet1.`so tai`
	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".safeSQL($_POST["post9"])."_%' 
UNION ALL


Select
	count(sheet1.`so cat tai`),
	sheet1.`ngay de`,
	sheet1.`duc phoi`,
    sheet1.`so tai`
	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".safeSQL($_POST["post10"])."_%' 
UNION ALL


Select
	count(sheet1.`so cat tai`),
	sheet1.`ngay de`,
	sheet1.`duc phoi`,
    sheet1.`so tai`
	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".safeSQL($_POST["post11"])."_%' 
UNION ALL


Select
	count(sheet1.`so cat tai`),
	sheet1.`ngay de`,
	sheet1.`duc phoi`,
    sheet1.`so tai`
	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".safeSQL($_POST["post12"])."_%' 
UNION ALL


Select
	count(sheet1.`so cat tai`),
	sheet1.`ngay de`,
	sheet1.`duc phoi`,
    sheet1.`so tai`
	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".safeSQL($_POST["post13"])."_%' 
UNION ALL


Select
	count(sheet1.`so cat tai`),
	sheet1.`ngay de`,
	sheet1.`duc phoi`,
    sheet1.`so tai`
	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".safeSQL($_POST["post14"])."_%' 
UNION ALL


Select
	count(sheet1.`so cat tai`),
	sheet1.`ngay de`,
	sheet1.`duc phoi`,
    sheet1.`so tai`
	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".safeSQL($_POST["post15"])."_%' 
UNION ALL


Select
	count(sheet1.`so cat tai`),
	sheet1.`ngay de`,
	sheet1.`duc phoi`,
    sheet1.`so tai`
	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".safeSQL($_POST["post16"])."_%' 
UNION ALL


Select
	count(sheet1.`so cat tai`),
	sheet1.`ngay de`,
	sheet1.`duc phoi`,
    sheet1.`so tai`
	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".safeSQL($_POST["post17"])."_%' 
UNION ALL


Select
	count(sheet1.`so cat tai`),
	sheet1.`ngay de`,
	sheet1.`duc phoi`,
    sheet1.`so tai`
	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".safeSQL($_POST["post18"])."_%' 
UNION ALL


Select
	count(sheet1.`so cat tai`),
	sheet1.`ngay de`,
	sheet1.`duc phoi`,
    sheet1.`so tai`
	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".safeSQL($_POST["post19"])."_%' 
UNION ALL


Select
	count(sheet1.`so cat tai`),
	sheet1.`ngay de`,
	sheet1.`duc phoi`,
    sheet1.`so tai`
	
From
    sheet1
Where
sheet1.trai = '".$trai."'
And 
`so cat tai` LIKE '%_".safeSQL($_POST["post20"])."_%'


	
	";
$result_1 = mysqli_query($conn, $sql_1);
$cout_1 = mysqli_num_rows($result_1);
$arraymysql_1 = [];
for ($x = 1; $x < $cout_1+1; $x++) {
    $arraymysql_1[$x] = mysqli_fetch_row($result_1) ;
  }
  $arraymysql_1[0] = ["Số tai",

  "Ngày sinh",
  "Bố",
  "Mẹ"
  
  
  ];

if ($_POST["post1"]=="khong_co_du_lieu"){$arraymysql_1[1][0] ='';}else{ $arraymysql_1[1][0] = $_POST["post1"];}
if ($_POST["post2"]=="khong_co_du_lieu"){$arraymysql_1[2][0] ='';}else{ $arraymysql_1[2][0] = $_POST["post2"];}
if ($_POST["post3"]=="khong_co_du_lieu"){$arraymysql_1[3][0] ='';}else{ $arraymysql_1[3][0] = $_POST["post3"];}
if ($_POST["post4"]=="khong_co_du_lieu"){$arraymysql_1[4][0] ='';}else{ $arraymysql_1[4][0] = $_POST["post4"];}
if ($_POST["post5"]=="khong_co_du_lieu"){$arraymysql_1[5][0] ='';}else{ $arraymysql_1[5][0] = $_POST["post5"];}
if ($_POST["post6"]=="khong_co_du_lieu"){$arraymysql_1[6][0] ='';}else{ $arraymysql_1[6][0] = $_POST["post6"];}
if ($_POST["post7"]=="khong_co_du_lieu"){$arraymysql_1[7][0] ='';}else{ $arraymysql_1[7][0] = $_POST["post7"];}
if ($_POST["post8"]=="khong_co_du_lieu"){$arraymysql_1[8][0] ='';}else{ $arraymysql_1[8][0] = $_POST["post8"];}
if ($_POST["post9"]=="khong_co_du_lieu"){$arraymysql_1[9][0] ='';}else{ $arraymysql_1[9][0] = $_POST["post9"];}
if ($_POST["post10"]=="khong_co_du_lieu"){$arraymysql_1[10][0] ='';}else{ $arraymysql_1[10][0] = $_POST["post10"];}
if ($_POST["post11"]=="khong_co_du_lieu"){$arraymysql_1[11][0] ='';}else{ $arraymysql_1[11][0] = $_POST["post11"];}
if ($_POST["post12"]=="khong_co_du_lieu"){$arraymysql_1[12][0] ='';}else{ $arraymysql_1[12][0] = $_POST["post12"];}
if ($_POST["post13"]=="khong_co_du_lieu"){$arraymysql_1[13][0] ='';}else{ $arraymysql_1[13][0] = $_POST["post13"];}
if ($_POST["post14"]=="khong_co_du_lieu"){$arraymysql_1[14][0] ='';}else{ $arraymysql_1[14][0] = $_POST["post14"];}
if ($_POST["post15"]=="khong_co_du_lieu"){$arraymysql_1[15][0] ='';}else{ $arraymysql_1[15][0] = $_POST["post15"];}
if ($_POST["post16"]=="khong_co_du_lieu"){$arraymysql_1[16][0] ='';}else{ $arraymysql_1[16][0] = $_POST["post16"];}
if ($_POST["post17"]=="khong_co_du_lieu"){$arraymysql_1[17][0] ='';}else{ $arraymysql_1[17][0] = $_POST["post17"];}
if ($_POST["post18"]=="khong_co_du_lieu"){$arraymysql_1[18][0] ='';}else{ $arraymysql_1[18][0] = $_POST["post18"];}
if ($_POST["post19"]=="khong_co_du_lieu"){$arraymysql_1[19][0] ='';}else{ $arraymysql_1[19][0] = $_POST["post19"];}
if ($_POST["post20"]=="khong_co_du_lieu"){$arraymysql_1[20][0] ='';}else{ $arraymysql_1[20][0] = $_POST["post20"];}
// dung hàm UNION ALL sẽ trả về 1 obj

  echo str_ireplace("|_|","'",json_encode($arraymysql_1));

?>	


