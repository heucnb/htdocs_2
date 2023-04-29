
  function path_match(string) {
    if (string.slice(-1) === '/') {
      return string.slice(0,-1) ;
    }else
    {
      return string ;
    }
    
  }
    

// convert string to obj: JSON.parse(string_obj);  string to array: string_aray.split(' |_| ');
 // vd obj :  JSON.stringify(obj); number:  number.toString(); array: array.join(' |_| '); // 'Wind |_| Water'


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function select_icon_from_file_name( file_name) {
        

    extension =    file_name.slice((Math.max(0, file_name.lastIndexOf(".")) || Infinity) + 1);
  
    switch (extension) {
      case '':
        return  "/node/static/SVG/folder.svg" ;
        case 'jpg':
          return  "/node/static/SVG/file_image.svg" ;
    
          case 'png':
            return    "/node/static/SVG/file_image.svg" ;
        
            case 'git':
              return "/node/static/SVG/file_image.svg" ;
           
            case 'js':
              return  "/node/static/SVG/file_js.svg" ;
         
            case 'json':
              return   "/node/static/SVG/file_json.svg" ;
          
        default:
          return  "/node/static/SVG/file_document.svg" ;
    }
      
    
  
  
  
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function convert_text_to_pixcel(text, font_size) {

 
   return text.length*(font_size/2) ;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function convert_file_name_to_type(file_name) {
  // (Math.max(0, file_name.lastIndexOf(".")) trả về 0 
  // thì (Math.max(0, file_name.lastIndexOf(".")) || Infinity  sẽ là 0 || Infinity 
  // do 0 Logical operators sẽ convert thành False nên False || Infinity  sẽ trả về Infinity
  // chú ý tên file là .sdgdf sẽ trả về "" do file_name.lastIndexOf(".") trả về 0
let extension =    file_name.slice((Math.max(0, file_name.lastIndexOf(".")) || Infinity) + 1);
  let array_type = [  "text/plain", 
                        "text/html" ,
                        " text/csv" ,
                       "text/pdf " ,
                        " video/mp4" ,
                         " video/mpeg" ,
                         "application/zip" ,
                         "application/msword" ,
                         " application/vnd.ms-excel" ,
                       
                         " image/jpg",
                          " image/png" ] ;
  let array_extension = [
  "text" ,
  "html" ,
  "csv" ,
  "pdf" ,
  "mp4" ,
  "mpeg" ,
  "zip" ,
  "doc" ,
  "xlsx" ,
  "jpg" ,

  "png" 
  
  ]
    // nếu  tìm thấy thì trả về  type phù hợp        
   for (let index = 0 , len = array_extension.length ; index < len ; index++) {  
    if (array_extension[index] === extension ) {
      return array_type[index] ;
      
    }

   }
 // nếu không tìm thấy thì trả về  "text/plain"
   return array_type[0] ;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// trên Dom dùng onMouseOver để lắng nghe
function hover(event, object_style,object_style_leave, dom) { 
  

         Object.assign( dom.style, object_style) ;
     
         dom.onmouseleave = function (event) {
        
    
           Object.assign( dom.style,  object_style_leave  ) ; 
          };

    
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////

 
function _alert(componet_react) {
  let _div = document.createElement("_div");
  // getElementsByTagName sẽ lấy ra một mảng tag name phù hợp không giống by id lấy ra 1 cái 
  let body = document.getElementsByTagName("body");
  body[0].appendChild(_div);

  _div.style.zIndex = "10000";

  function Alert() {
    let ref_thoat =  useRef(null) ;
    useEffect(() => {   ref_thoat.current.focus();       }, []);
    return ( <div className={'flex flex-wrap absolute rounded border border-solid border-slate-400 bg-amber-400  _shadow '}  style={  { top: '10%', left: '30%' }  } >
      <div className={`mx-5 mt-2 w-full`}  > {componet_react} </div>
      <div className={' my-2 w-full flex justify-end'} >  
      <input type="button" value="Thoát"  ref={ref_thoat}   className={'mx-10  text-white rounded w-16 flex justify-center bg-sky-500 hover:bg-sky-700 _shadow'} onClick ={( )=>{ ReactDOM.unmountComponentAtNode( _div);  _div.remove(); }}/>
     </div>
       
        </div> 
    )
    
  }

  
  return   ReactDOM.render( <Alert />  ,  _div ) ;
   
}


  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //****** childNodes[0] lấy text trong div chú ý remove space ********
  // remove space trong div dom mới hoạt động đúng được
  //sự khác nhau giữa children và childNodes. Kết quả trả về của childNodes là một NodeList, object này chứa tất cả những thứ như elements, text và comments, space trong div ở file code của ta chứ không phải web hiển thị
  function get_selection(dom, begin, end) {
    let range = new Range();
    range.setStart(dom.childNodes[0], begin);
    range.setEnd(dom.childNodes[0], end);
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(range);
  }

  //--------------------------------------------------------------------------------------
  function google_login(client_id, in_dom ) {
    return  new Promise(function(resolve, reject) {
      var newScript = document.createElement("script");
      in_dom.appendChild(newScript);
 newScript.src = "/node/static/CDN/accounts.google.com_gsi_client.js";
 // khi tải xong file thì chạy function sau
 newScript.onload = function () {
   function handleCredentialResponse(response) {
         function parseJwt (token) {
           var base64Url = token.split('.')[1];
           var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
         var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
           return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
         }).join(''));
       
         return JSON.parse(jsonPayload);
       };

       resolve(parseJwt(response.credential));
     
   }



   google.accounts.id.initialize({
     client_id: client_id ,
     callback: handleCredentialResponse
   });
   google.accounts.id.renderButton(
    in_dom,
     { theme: "outline", size: "large" }  // customization attributes
   );
   google.accounts.id.prompt(); // also display the One Tap dialog
   
 }


     


  })
    
    
   }