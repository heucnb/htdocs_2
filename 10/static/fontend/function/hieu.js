// tính tổng bỏ qua dòng đầu tiên
function sum(array) {
  let total = 0;
  for (var i = 1; i < array.length; i++) total += array[i];
  return total;
}

function getCookie(name) {
  // Split cookie string and get all individual name=value pairs in an array
  var cookieArr = document.cookie.split(";");
  
  // Loop through the array elements
  for(var i = 0; i < cookieArr.length; i++) {
      var cookiePair = cookieArr[i].split("=");
      
      /* Removing whitespace at the beginning of the cookie name
      and compare it with the given string */
      if(name == cookiePair[0].trim()) {
          // Decode the cookie value and return
          return decodeURIComponent(cookiePair[1]);
      }
  }
  
  // Return null if not found
  return null;
}

//-------------------------------------------------------------------------------------------------------------
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
  let _div = document.createElement("div");
  // getElementsByTagName sẽ lấy ra một mảng tag name phù hợp không giống by id lấy ra 1 cái 
  let body = document.getElementsByTagName("body");
  body[0].appendChild(_div);

  _div.style.zIndex = "10000";

  function Alert() {
    let ref_thoat =  useRef(null) ;
    useEffect(() => {   ref_thoat.current.focus();       }, []);
    return (  <div className={'absolute flex  w-full h-full top-0 left-0 bg-slate-400 bg-opacity-50'}  style={  {  zIndex : 10  }  } >  

      
                  <div className={'flex flex-wrap absolute rounded border border-solid border-slate-400 bg-amber-400  _shadow '}  style={  { top: '10%', left: '30%',  zIndex : 10  }  } >
                  <div className={`mx-5 mt-2 w-full`}  > {componet_react} </div>
                  <div className={' my-2 w-full flex justify-end'} >  
                  <input type="button" value="Thoát"  ref={ref_thoat}   className={'mx-10  text-white rounded w-16 flex justify-center bg-sky-500 hover:bg-sky-700 _shadow'} onClick ={( )=>{ ReactDOM.unmountComponentAtNode( _div);  _div.remove(); }}/>
                </div>
                  
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

   //-------------------------------------------------------------------------------------
   
  function Select_thang() {
   
    return (   <select style={{color : "black" ,  }} className={`focus:outline-0 w-full  `}  > 
    <option style={{color : "black" ,  }} value=''>Tra theo tháng</option>
    <option style={{color : "black" ,  }} value='00-01'>Tháng 1</option>
    <option style={{color : "black" ,  }} value='00-02'>Tháng 2</option>
    <option style={{color : "black" ,  }} value='00-03'>Tháng 3</option>
    <option style={{color : "black" ,  }} value='00-04'>Tháng 4</option>
    <option style={{color : "black" ,  }} value='00-05'>Tháng 5</option>
    <option style={{color : "black" ,  }} value='00-06'>Tháng 6</option>
    <option style={{color : "black" ,  }} value='00-07'>Tháng 7</option>
    <option style={{color : "black" ,  }} value='00-08'>Tháng 8</option>
    <option style={{color : "black" ,  }} value='00-09'>Tháng 9</option>
    <option style={{color : "black" ,  }} value='00-10'>Tháng 10</option>
    <option style={{color : "black" ,  }} value='00-11'>Tháng 11</option>
    <option style={{color : "black" ,  }} value='00-12'>Tháng 12</option>
    </select> 
    )
    
  }
  //-------------------------------------------------------------------------------------
   
  function Select_nam() {
    let ref_select_year =  useRef(null) ;
       useEffect(() => {        
        let n = new Date().getFullYear();
        ref_select_year.current.children[0].innerHTML = n;
        ref_select_year.current.children[0].value = n ;
        ref_select_year.current.onclick = function(){
               
                 for (let index = 0  ; index < 20 ; index++) { 
  
                  ref_select_year.current.children[index].innerHTML = n-index;
                  ref_select_year.current.children[index].value = n -index;

                  }
            };
       



        }, []);
   
    return (   <select ref={ref_select_year}  style={{color : "black" ,  }} className={`focus:outline-0 w-full  `}  > 
    <option style={{color : "black" ,  }} value='1'>11</option>
    <option style={{color : "black" ,  }} value='2'>12</option>
    <option style={{color : "black" ,  }} value='3'>13</option>
    <option style={{color : "black" ,  }} value=''>11</option>
    <option style={{color : "black" ,  }} value=''>11</option>
    <option style={{color : "black" ,  }} value=''>11</option>
    <option style={{color : "black" ,  }} value=''>11</option>
    <option style={{color : "black" ,  }} value=''>11</option>
    <option style={{color : "black" ,  }} value=''>11</option>
    <option style={{color : "black" ,  }} value=''>11</option>
    <option style={{color : "black" ,  }} value=''>11</option>
    <option style={{color : "black" ,  }} value=''>11</option>
    <option style={{color : "black" ,  }} value=''>11</option>
    <option style={{color : "black" ,  }} value=''>11</option>
    <option style={{color : "black" ,  }} value=''>11</option>
    <option style={{color : "black" ,  }} value=''>11</option>
    <option style={{color : "black" ,  }} value=''>11</option>
    <option style={{color : "black" ,  }} value=''>11</option>
    <option style={{color : "black" ,  }} value=''>11</option>
    <option style={{color : "black" ,  }} value=''>11</option>
    </select> 
    )
    
  }

  //--------------------------------------------------------------------------------------------------
  function Select_tuan() {
   
    return (    <select style={{color : "black" ,  }}  className={` w-full focus:outline-0 `} >
    <option value='' style={{color : "black" ,  }} >Tra theo tuần</option>
    <option value='01-00' style={{color : "black" ,  }} >Tuần 1</option>
    <option value='02-00' style={{color : "black" ,  }} >Tuần 2</option>
    <option value='03-00' style={{color : "black" ,  }} >Tuần 3</option>
    <option value='04-00' style={{color : "black" ,  }} >Tuần 4</option>
    <option value='05-00' style={{color : "black" ,  }} >Tuần 5</option>
    <option value='06-00' style={{color : "black" ,  }} >Tuần 6</option>
    <option value='07-00' style={{color : "black" ,  }} >Tuần 7</option>
    <option value='08-00' style={{color : "black" ,  }} >Tuần 8</option>
    <option value='09-00' style={{color : "black" ,  }} >Tuần 9</option>
    <option value='10-00' style={{color : "black" ,  }} >Tuần 10</option>
    <option value='11-00' style={{color : "black" ,  }} >Tuần 11</option>
    <option value='12-00' style={{color : "black" ,  }} >Tuần 12</option>
    <option value='13-00' style={{color : "black" ,  }} >Tuần 13</option>
    <option value='14-00' style={{color : "black" ,  }} >Tuần 14</option>
    <option value='15-00' style={{color : "black" ,  }} >Tuần 15</option>
    <option value='16-00' style={{color : "black" ,  }} >Tuần 16</option>
    <option value='17-00' style={{color : "black" ,  }} >Tuần 17</option>
    <option value='18-00' style={{color : "black" ,  }} >Tuần 18</option>
    <option value='19-00' style={{color : "black" ,  }} >Tuần 19</option>
    <option value='20-00' style={{color : "black" ,  }} >Tuần 20</option>
    <option value='21-00' style={{color : "black" ,  }} >Tuần 21</option>
    <option value='22-00' style={{color : "black" ,  }} >Tuần 22</option>
    <option value='23-00' style={{color : "black" ,  }} >Tuần 23</option>
    <option value='24-00' style={{color : "black" ,  }} >Tuần 24</option>
    <option value='25-00' style={{color : "black" ,  }} >Tuần 25</option>
    <option value='26-00' style={{color : "black" ,  }} >Tuần 26</option>
    <option value='27-00' style={{color : "black" ,  }} >Tuần 27</option>
    <option value='28-00' style={{color : "black" ,  }} >Tuần 28</option>
    <option value='29-00' style={{color : "black" ,  }} >Tuần 29</option>
    <option value='30-00' style={{color : "black" ,  }} >Tuần 30</option>
    <option value='31-00' style={{color : "black" ,  }} >Tuần 31</option>
    <option value='32-00' style={{color : "black" ,  }} >Tuần 32</option>
    <option value='33-00' style={{color : "black" ,  }} >Tuần 33</option>
    <option value='34-00' style={{color : "black" ,  }} >Tuần 34</option>
    <option value='35-00' style={{color : "black" ,  }} >Tuần 35</option>
    <option value='36-00' style={{color : "black" ,  }} >Tuần 36</option>
    <option value='37-00' style={{color : "black" ,  }} >Tuần 37</option>
    <option value='38-00' style={{color : "black" ,  }} >Tuần 38</option>
    <option value='39-00' style={{color : "black" ,  }} >Tuần 39</option>
    <option value='40-00' style={{color : "black" ,  }} >Tuần 40</option>
    <option value='41-00' style={{color : "black" ,  }} >Tuần 41</option>
    <option value='42-00' style={{color : "black" ,  }} >Tuần 42</option>
    <option value='43-00' style={{color : "black" ,  }} >Tuần 43</option>
    <option value='44-00' style={{color : "black" ,  }} >Tuần 44</option>
    <option value='45-00' style={{color : "black" ,  }} >Tuần 45</option>
    <option value='46-00' style={{color : "black" ,  }} >Tuần 46</option>
    <option value='47-00' style={{color : "black" ,  }} >Tuần 47</option>
    <option value='48-00' style={{color : "black" ,  }} >Tuần 48</option>
    <option value='49-00' style={{color : "black" ,  }} >Tuần 49</option>
    <option value='50-00' style={{color : "black" ,  }} >Tuần 50</option>
    <option value='51-00' style={{color : "black" ,  }} >Tuần 51</option>
    <option value='52-00' style={{color : "black" ,  }} >Tuần 52</option>
    <option value='53-00' style={{color : "black" ,  }} >Tuần 53</option>


    </select> 
    )
    
  }


  //---------------------------------------------------------------------------------------------------------------
  // function loại bỏ dấu tiếng việt
  function removeAccents(str) {
    //đổi chữ hoa thành chữ thường
    str = str.toLowerCase();
    // loại bỏ dấu tiếng việt
    return str.normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .replace(/đ/g, 'd').replace(/Đ/g, 'D');
  }

 

  //----------------------------------------------------------------------------------------------------
  function array2d_to_1d(array2d) {
    let array_1d  = [] ;
    for (let i = 0 , len = array2d.length ; i < len ; i++) { 
     
        for (let j = 0 , len_j = array2d[i].length ; j < len_j ; j++) {

          array_1d.push(array2d[i][j]) ;
          }
   }

    return array_1d ;
  }

//----------------------------------------------------------------------------------------------------
function combobox_(id,array) {

                function  handleChange(e){
                  console.log('handle change called') ;
                  console.log(e.target.value) ;

                    let array_result_new = array.filter(check_item_in_array_get_true);

                    function check_item_in_array_get_true(item) {
                      console.log(item);
                      console.log('---------------  ' + item.toString());
                      return removeAccents(item.toString()).indexOf(removeAccents(e.target.value))!== -1;
                    }
                    ReactDOM.unmountComponentAtNode(id_Combox) ;  
                  ReactDOM.render(<Combox value={{data : array_result_new }}  /> ,id_Combox);

                }

                  
                  function Combox(props) {
                    let props_array = props.value.data ;
            
                    console.log(props_array);
                    let ref_select =  useRef(null) ; 
                      useEffect(() => {   

                        ref_select.current.onscroll = function (event) {

                          console.log('Combox onscroll---------------');
                          
                          document.getElementById(id).turnoff_blur = false ;
                          document.getElementById(id).focus();  
                            }
                        //-------------------------------------------------------------------------------------------------     
                            ref_select.current.onmousedown = function (event) {

                              console.log('Combox cha onmousedown---------------');
                              
                              document.getElementById(id).turnoff_blur = true ;
                                    
                                }
                                //--------------------------------------------------------------------
                                ref_select.current.onblur = function (event) {

                                  console.log('Combox cha onblur---------------');
                                  
                                  ReactDOM.unmountComponentAtNode(id_Combox) ;   
                                            
                                    }



                        let len =  props_array.length ;
                        if (len >=1) {
                          for (let index = 0  ; index < len ; index++) {

                            ref_select.current.children[index].onmousedown = function (event) {
  
                        console.log('Combox con onmousedown---------------');
                        
                        console.log(props_array);
                        console.log(index);
                        
                        
                        document.getElementById(id).value = props_array[index] ;
                              ReactDOM.unmountComponentAtNode(id_Combox) ;   
                            }
                          }



                          
                        }

                      

                      

                        }, []);
   

    return ( 

           <div ref={ ref_select  }  className={`top-0 left-0 w-full h-24 overflow-y-scroll  bg-slate-100   flex flex-col relative justify-start items-start _shadow mt-1 z-40 `}  > 
           { props_array.map(( i, index )=>{  return <button type="button"   className={`whitespace-nowrap hover:bg-gray-400 hover:bg-opacity-50 w-full pl-2 flex items-start  justify-start `}   >{props_array[index] }</button> })}
       
           </div>
       
    

    );


   } ;
 
     useEffect(() => {      

      document.getElementById(id).onmousedown = function (e) {

        document.getElementById(id).turnoff_blur = false ;
        ReactDOM.render(<Combox value={{data : array  }}  /> ,id_Combox);

        document.getElementById(id).addEventListener("blur",  myFunction_2   );

        function myFunction_2(e) {

          if (document.getElementById(id).turnoff_blur === false) {
            console.log('blur------------------');

          ReactDOM.unmountComponentAtNode(id_Combox) ;
          document.getElementById(id).removeEventListener("blur", myFunction_2);
          }
            
          

           }

        
      }


        }, []);

  return    <div  className={`relative `}  > 
  <input  id={id}  onChange={(e) => {return handleChange(e) }}
                                                                  

                                                                  className={`w-full p-1 text-black border border-gray-300 `}   /> 
  
  
  <button id="id_Combox" className={`absolute w-full flex flex-col `}  >  </button>
  </div>;
}

