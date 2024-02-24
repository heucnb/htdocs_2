<!DOCTYPE html>
<html>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<head>

<style>
._shadow{
			box-sizing: border-box;
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
         }

 /* ngăn chặn anh huong thao tac copy tren trinh duyet */
      /* How to disable selection of text on a web page */
/* hoặc */
/* window.addEventListener("contextmenu", e => e.preventDefault()); */
body{
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          -o-user-select: none;
           user-select: none;
		   vertical-align:top;		

         }
* {
  box-sizing: border-box;
}	


@keyframes animate
{
  0%
  {
    transform:rotate(45deg);
  }
  100%
  {
    transform:rotate(405deg);
  }
}
	


</style>
 <link rel="stylesheet" href="static/style_converted.css">
<!-- tải bất đồng bộ xong, eval() script xong mới load dom phía sau tiếp -->
<script type="text/javascript" src="../CDN/jquery-3.1.0.min.js"></script>
<script type="text/javascript" src="../CDN/tailwindcss.com3.2.4.js"></script>
<script type="text/javascript" src="../CDN/react.development.min.js"></script>
<script type="text/javascript" src="../CDN/react-dom.development.min.js"></script>

</head>

<body  >

<div  id="root"></div>

</body>
</html>

<script id="script_root" >
 

 function $(dom){


return  {
   ready : function (function_obj) { 
       if ( document.readyState === "complete") {
           function_obj() ;

           
       }

   }   , 
   
   click : function (function_run) { 

       
       document.querySelector(dom).onclick = function(event){ return function_run(event) }

   } ,
   val : function () { 

       
  return   document.querySelector(dom).value ;

} 


}



}

$.post = function (url,obj, function_run) { 
        // chú ý dối với python flask không được dùng multipart/form-data
      // có thể do người thiết kế flask không dùng multipart/form-data
      // hr.setRequestHeader("Content-type", "multipart/form-data");

      let obj_send = new FormData();

                Object.entries(obj).forEach(([key, value]) => {
                    obj_send.append(key, value);
            });
          

 
      
      var hr = new XMLHttpRequest();
                        hr.open("POST", url, true);
                        hr.onreadystatechange = function (oEvent) {
                            if (hr.readyState === 4) {
                                if (hr.status === 200) {

                            //    không làm gì tiép tục  hr.onload 

                                } else {
                                    
                                    _alert(hr.statusText)

                                console.log("Error", hr.statusText);
                                }

                            }
                        };


                        hr.send(obj_send);

                        hr.onload = function(){ return function_run(hr.responseText);
                        
                        }
        
       
         }
  






// load hết dom xong mới tải 
window.onload = function()
{
  var newScript_1 = document.createElement("script");
   script_root.appendChild(newScript_1);
 newScript_1.src ="static/index_ghep_file.js";
}



 
</script>
