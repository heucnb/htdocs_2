<?php

include "connect_mysql.php";
include "Token.php";


if (isset($_COOKIE['token_cookie'])) {

        // Vefity token
        // trả về false nếu token lỗi hay quá hạn
        $payload = Token::Verify($_COOKIE['token_cookie'], $KEY);
  
        if ($payload[0] == 'error_SHA256') {
          echo '<script> arrayjavascript_3 = ["error","Vui lòng đăng nhập lại"]  ;document.cookie = "token_cookie" +"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT"; _alert(arrayjavascript_3[1])  ; </script>  ' ;
          exit();
        }else {
          

             // Verigy Signature là đúng thì tiếp tục kiểm tra
              if ($payload[0] == 'error_expire') {
              
                // nếu quá hạn thì tiến hành đăng nhập lại (vì có khi admin xoá user đó rồi nhưng token trước đó tạo ra vẫn đúng)
                // do vậy ta nên để thời hạn của token 5-10 phút
                // gửi về refesh token
                $conn_1 = mysqli_connect($servername, $username, $password, $dbname);

                mysqli_set_charset($conn_1, 'UTF8'); // thêm tiếng việt mới lấy được câu lệnh sql đã chạy
                // Check connection
                if (!$conn_1) {
                  die("Connection failed: " . mysqli_connect_error());
                }
                $sql_expire = "select * from login where username='".$payload[1]['username']."'and password='".$payload[1]['password']."'";
                $result_expire = mysqli_query($conn_1, $sql_expire);
                $cout_expire = mysqli_num_rows($result_expire);	
                $arraymysql_expire = [];
                for ($x = 0; $x < $cout_expire; $x++) {
                    $arraymysql_expire[$x] = mysqli_fetch_row($result_expire) ;
                  }



                      if($cout_expire==1)
                        {

                       

                      // Generate token
                      $token = Token::Sign(['username' => $arraymysql_expire[0][0] ,'password' => $arraymysql_expire[0][1] , 'trai'=> $arraymysql_expire[0][2] , 'trai_day_du'=> $arraymysql_expire[0][3]  , 'duoc_quyen_them_user'=> $arraymysql_expire[0][4]  , 'khoa_ngay_sua_du_lieu'=> $arraymysql_expire[0][5]  ] ,  $KEY , (60*10) );
                      @ setcookie("token_cookie",$token, time() + (86400 * 5), "/");


                        // sau đó tiếp tục thực hiện câu lệnh sau...........


                        
                        }else {
                          echo '<script> arrayjavascript_3 = ["error","Thông tin đăng nhập không đúng, hoặc bạn bị admin xoá tài khoản"]  ;document.cookie = "token_cookie" +"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT"; _alert(arrayjavascript_3[1])  ;</script>  ' ;
                          exit();
                          
                        }


       
              
              }else{



                

               //ngược lại Verigy Signature là đúng và không quá hạn tiếp tục thực hiện câu lệnh sau...........


              }

         


        }

} else {
  // nếu người dùng không gửi token thì 

  echo '<script> arrayjavascript_3 = ["error","Chưa đăng nhập "] ;_alert("Bạn chưa đăng nhập hoặc bạn bị admin xoá tài khoản vui lòng đăng nhập lại  ")  </script>' ;
  exit();
}
  

?>