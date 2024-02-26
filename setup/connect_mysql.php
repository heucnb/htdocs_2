<?php

// $servername = "localhost";
$servername = "36.50.54.224";
$username = "nhdabkah_hieu";
$password = "Hieu771339";
$dbname = "nhdabkah_hh";
$KEY = 'thisisademokey';

function safeSQL($INPUT){
    $safe_input = trim($INPUT);
    $safe_input = str_ireplace("'",    "|_|", $safe_input);
    
    return $safe_input;
  }

 

?>