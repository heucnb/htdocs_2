function Login() {
  
   let ref_eyes = useRef(null) ;
    let ref_name_login =  useRef(null) ;
    let ref_password =  useRef(null) ;
    let ref_parent_password =  useRef(null) ;
    function dang_nhap(event) {
      $.post("fuction_login.php", {post1:id_1.textContent , post2:$("#id_2").val() }, function(data){


      if ( data.trim().slice(0, 2) !== "[[") {
        _alert(data)
    } else {

      var array_data_login = JSON.parse(data);
	console.log(array_data_login);
   var array_option = new Array();
   // This will return an array with strings "1", "2", etc.
   array_option = array_data_login[0][2].split(",");
   array_option_ten_day_du = array_data_login[0][3].split(",");


    var select = document.getElementById("id_8") ;
    select.innerHTML = '' ;
      for(var i = 0; i < array_option.length; i++)
            {
                var option = document.createElement("OPTION")
                option.text = array_option_ten_day_du[i];
                option.value = array_option[i];
                select.appendChild(option);
            }
            
         // kiểm tra xem có được quyền thêm người dùng và khóa dữ liệu không
         var quyen_them_nguoi_dung_va_khoa_ngay_sua_du_lieu = array_data_login[0][4] ;
         if(quyen_them_nguoi_dung_va_khoa_ngay_sua_du_lieu==1)
         {
          document.getElementById('id_them_user').style.display = 'inline';   
          document.getElementById('id_khoa_ngay_nhap_du_lieu').style.display= 'inline';  
         }
         else
         {
            document.getElementById('id_them_user').style.display= 'none'; 
             document.getElementById('id_khoa_ngay_nhap_du_lieu').style.display= 'none'; 
         }    
  
 
 
    document.getElementById('id_td_1').innerHTML="Đăng nhập - " + id_1.textContent;
    _alert("Đăng nhập thành công");
    ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index')); 
      
      array_chuong_thit = JSON.parse(array_data_login[0][6]) ;
         
         
    }
      
	 
 
      
      });
      
    }

       useEffect(() => {    
          
        ref_password.current.onfocus  = function (e) {
            let dom = ref_parent_password.current ;
            dom.classList.add("border-2","border-solid", "border-emerald-600"  );
    
         }
   
         ref_password.current.onblur  = function (e) {
          let dom = ref_parent_password.current ;
          dom.classList.remove("border-2","border-solid", "border-emerald-600"  );
  
       }



         

          }, []);
    
    
    


    
      
    return (  <div className={`w-full gap-3 flex flex-col justify-center items-center`}>
     
        <div className={` w-3/4 flex items-center  font-medium`} > Điền thông tin đăng nhập </div>
        
        <div id="id_1" ref={ref_name_login} contentEditable='true' className={` rounded w-3/4  h-8 pl-2 before:text-slate-400 border border-solid border-emerald-400  focus:border-2 focus:border-solid focus:border-emerald-600 outline-0 empty:before:content-['Tên_đăng_nhập']`}  ></div>  
        
        <div id="id_3" ref={ref_parent_password}  className={` rounded pl-2 pr-1 flex w-3/4 border border-solid border-emerald-400  outline-0 `} > 
              <input id="id_2" ref={ref_password}  className={`  h-8  outline-0   grow `} type={"password"} placeholder="Password"  /> 
              <img  ref={ref_eyes}   src = "10/static/SVG/eyes_hide.svg"  onClick={(event)=>{ if (ref_password.current.type==="password" ) { ref_password.current.type="text" ; ref_eyes.current.src ="10/static/SVG/eyes_show.svg"  } else {ref_password.current.type="password" ; ref_eyes.current.src ="/SVG/eyes_hide.svg" }  }}   />
              
        </div>
       

        <div className={` _shadow rounded w-3/4  bg-sky-500 hover:bg-sky-700 h-8 flex items-center justify-center pl-2  font-medium `}  onClick={(event)=>{ dang_nhap() }} >  Đăng nhập </div>
        

     

       
      </div>
    );

   } ;
   