function Login() {
  
   let ref_eyes = useRef(null) ;
    let ref_name_login =  useRef(null) ;
    let ref_password =  useRef(null) ;
    function dang_nhap(event) {

        
        axios.post("/login", { name : ref_name_login.current.textContent , password : ref_password.current.value }).then(function (response) { 
            localStorage.setItem('token', response.data[0]);
            localStorage.setItem('refreshToken', response.data[1]);
          console.log(response.data);
          
          }) ;
        
    }


    
    function truy_van(event) {
        let token = localStorage.getItem("token");
        let refreshToken = localStorage.getItem("refreshToken");
        axios.post("/truy_van", { token : token, refreshToken : refreshToken }).then(function (response) { 
          
          console.log(response.data);
          
          }) ;
        
    }
      
    return (  <div className={`  flex  justify-center `}>
      {/* absolute nó sẽ tìm thẻ tổ tiên gần nó nhất để không chửa positioned static để lấy height nếu không nó lấy body
            do đó muốn căn giữa theo element tổ tiên nào cần thêm relative và xác định height cho nó
      */}
        <div className={` ${tb('w-1/2 top-1/2  transform -translate-y-1/2 ','w-4/5 top-6 ')} flex flex-wrap   gap-4   absolute   `} >
        <div className={` w-full flex items-center  font-medium`} > Điền thông tin đăng nhập </div>
        
        <div  ref={ref_name_login} contentEditable='true' className={` rounded w-full  h-8 pl-2 before:text-slate-400 border border-solid border-emerald-400  focus:border-2 focus:border-solid focus:border-emerald-600 outline-0 empty:before:content-['Tên_đăng_nhập']`}  ></div>  
        <div  className={` rounded pl-2 pr-1 flex w-full border border-solid border-emerald-400  focus:border-2 focus:border-solid focus:border-emerald-600 outline-0 `} > 
        <input  ref={ref_password}  className={`  h-8  outline-0   grow `} type={"password"} placeholder="Password"  /> 
         <img  ref={ref_eyes}   src = "/SVG/eyes_hide.svg"  onClick={(event)=>{ if (ref_password.current.type==="password" ) { ref_password.current.type="text" ; ref_eyes.current.src ="/SVG/eyes_show.svg"  } else {ref_password.current.type="password" ; ref_eyes.current.src ="/SVG/eyes_hide.svg" }  }}   />
        
        </div>
       

        <div className={` _shadow rounded w-full  bg-sky-500 hover:bg-sky-700 h-8 flex items-center justify-center pl-2  font-medium `}  onClick={(event)=>{ dang_nhap() }} >  Đăng nhập </div>
        
        <div className={` _shadow rounded w-full  bg-sky-500 hover:bg-sky-700 h-8 flex items-center justify-center pl-2  font-medium `}  onClick={(event)=>{ truy_van() }} >  truy ván 1 </div>
       
        </div>

       
      </div>
    );

   } ;