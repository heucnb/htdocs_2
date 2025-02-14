<?php

$servername = "localhost";

$username = "root";
$password = "";
$dbname = "shopping";
$KEY = 'thisisademokey_2';

function safeSQL($INPUT){
    $safe_input = trim($INPUT);
    $safe_input = str_ireplace("'",    "|_|", $safe_input);
    
    return $safe_input;
  }

 

?>