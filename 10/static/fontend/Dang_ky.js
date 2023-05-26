function Dang_ky() {
   
   useEffect(() => {      

    id_gui.onclick = function () {
        let ten_dang_nhap = id_1.value ;
        let password = id_2.value ;
        let ten_cong_ty = id_4.value ;
   
        if (
            ten_dang_nhap == null || ten_dang_nhap == "" ||
            password == null || password == "" ||
            ten_cong_ty == null || ten_cong_ty == "" 
            
            ) 
            {
                return  _alert("Bạn phải điền đầy đủ thông tin hoặc lỗi chọn công ty có chứa *")  ;
            } 
            else 
            {
              
                $.post("dang_ky.php", {post1:ten_dang_nhap , post2:password, post3:ten_cong_ty }, function(data){
                     if (data.trim() === "ok") {
                        _alert("Bạn đã đăng ký thành công")  ;
                        ReactDOM.render(<Login/>, id_nhan_index);
                   
                        id_1.textContent = ten_dang_nhap ;
                        id_2.value = password ;
                      
                     } else{

                        if (data.trim() === "Đã có người đăng ký tài khoản này rồi bạn thay đổi lại tên hoặc password") {
                         
                            _alert("Đã có người đăng ký tài khoản này rồi bạn thay đổi lại tên hoặc password")  ;
                           
                         } else{
                            // lỗi kết nối mysql , hoặc biến php lỗi cú pháp

                            console.log(data);
                         }

                     }
    
              
                     
            
            
            
            
            });
        
            }
        
    }

      }, []);
   

     
    
  return (  <div  className={`flex flex-col w-full h-full  bg-gray-100  `} > 
     <div className={`ml-1 border-b border-sky-500 mr-1`}> From đăng ký </div>

     <div  className={` flex  grow  mt-2 `} >  
             <div className={` flex flex-col gap-2 shrink-0 ml-2 `} >
           
                 <input  id="id_1" placeholder="Tên đăng nhập" className={`  border border-sky-500 `}   /> 
   
                 <input id="id_2"  type={"password"} placeholder="Password" className={`  border border-sky-500 `}    /> 
                 <select id="id_3" >
													<option value="R">Đăng ký cho 1 công ty</option>
													<option value="Rm">Đăng ký cho tập đoàn</option>
													
				</select>

                <div id="id_cong_ty_dang_ky" >  
                <input id="id_4" placeholder="Tên công ty" className={`  border border-sky-500 `}    /> 
                </div>
                
                
                 <input type="button" value="Thêm"   id="id_gui" className={` mt-2 mb-2  _shadow rounded w-full  bg-sky-500 hover:bg-sky-700 h-8 flex items-center justify-center pl-2  font-medium `}   /> 
               

             </div>
             <div  id="id_nhan"  className={` text-sm grow ml-1 `}> 
             
             </div>
     </div>
     
     
    </div>
  );

 } ;