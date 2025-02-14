<?php
  
$trai_token = explode(',', $payload[1]['trai']);  
// phải cộng 1 vì nếu tìm thấy trả về index 0 trong php tương ứng false
$found = array_search($trai,$trai_token)+1 ;

if ($found == false) {

    echo '<script> arrayjavascript_3 = ["error","Thông tin đăng nhập không đúng"]  ;document.cookie = "token_cookie" +"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT"; _alert(arrayjavascript_3[1])  ;</script>  ' ;
    exit();
  }else{
    
    if (substr($trai,0,3)=="td_") {
      $array_trai = explode('_', substr($trai,3,strlen($trai)));
     $len = count($array_trai)-1 ;
  
     $trai =  $array_trai[0]."'";
   
      for ($x = 1; $x < $len; $x++) {
        $trai = $trai." or `trai`=".$array_trai[$x] ;
      }
      
      $trai = $trai." or `trai`= ' ".$array_trai[$len]; 
   
    }

  }
 
 
?>