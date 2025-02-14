<?php

class Token{

 
    static function Sign($payload, $key, $expire ){

        // Header
        $headers = ['algo'=>'HS256', 'type'=>'JWT'];
        $headers['expire'] = time()+$expire;
        $headers_encoded = base64_encode(json_encode($headers));

      
        $payload_encoded = base64_encode(json_encode($payload));

        // Signature
        $signature = hash_hmac('SHA256',$headers_encoded.$payload_encoded,$key);
        $signature_encoded = base64_encode($signature);

        // Token
        $token = $headers_encoded . '.' . $payload_encoded .'.'. $signature_encoded;

        return $token;




        
    }

    static function Verify($token, $key){

        // Break token parts
        $token_parts = explode('.', $token);

        // Verigy Signature

        $signature = hash_hmac('SHA256',$token_parts[0].$token_parts[1],$key);
    
        $signature_encoded = base64_encode($signature);
        if($signature_encoded != $token_parts[2]){
            return ['error_SHA256',$signature_encoded,$token_parts];
        }
        else {

               // Verigy Signature là đúng thì tiếp tục kiểm tra

            
                      // Decode headers & payload
                    $headers = json_decode(base64_decode($token_parts[0]), true);
                    $payload = json_decode(base64_decode($token_parts[1]), true);

              

                    // Verify validity
                    if(isset($headers['expire']) && $headers['expire'] < time()){
                        return ['error_expire',$payload, $headers ];
                    }else {
                          // If token successfully verified
                    return ['ok',$payload, $headers ];

                    }

                  

        }

      
    }

}