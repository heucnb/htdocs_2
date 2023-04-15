<?php
		
        $time_start = microtime(true);

        $x = 1;
 
while($x <= 1000000000) {
 
  $x++;
} 
        
        $time_end = microtime(true);
        $time = $time_end - $time_start;
        
        echo "Did nothing in $time seconds\n";
?>	