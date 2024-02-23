function Quan_ly_cam() {
   
  let ref_nhap_cam =  useRef(null) ; 




            function Nhap_cam() {
            
             
                
                useEffect(() => {    
            
                
            
                    }, []);
                
            
                
                
                return ( 
                    <div  className={`flex flex-col w-full h-full  bg-gray-100  `} > 
                    <div className={`ml-1 border-b border-sky-500 mr-1`}> Nhập cám </div>
               
                    <div  className={` flex grow  mt-2 `} >  
                            <div className={` flex flex-col  shrink-0 ml-2 `} >
                          
                             
                                <div className={` mt-2   `}> Ngày giá trị: </div>
                                <input id="id_ngay" type="date"  className={`  border border-sky-500 `}    /> 
                                
                               <button  id="id_loai_cam" className={`  mt-2  border  border-sky-500 flex justify-start `} type="button"    > Chọn loại cám </button>
                               <button id="id_loai_cam_ds" className={`w-auto absolute   _shadow  `} type="button"> </button>
                           
               
                               <div id="id_from"   className={` flex flex-col  `} > 
                             
                               <div className={` mt-2   `} > Mã chứng từ nhập: </div>
                               <input  id="id_lo_nhap"  className={`  border border-sky-500 `}    /> 
                               <div className={` mt-2   `} > Nguồn nhập: </div>
                               <input  id="id_nguon_nhap"  className={`  border border-sky-500 `}    />  
               
                               <div className={` mt-2   `} > Số lượng: </div>
                               <input  id="id_so_luong"  className={`  border border-sky-500 `}    /> 
                               <div className={` mt-2   `} > Đơn vị tính: </div>
                               <input  id="id_don_vi_tinh"  className={`  border border-sky-500 `}    /> 
                              
                               <div className={` mt-2   `} > Tổng số tiền: </div>
                               <input  id="id_tong_so_tien"  className={`  border border-sky-500 `}    /> 
                               <div className={` mt-2   `} > Ngày hết hạn: </div>
                               <input  id="id_nguoi_mua"  className={`  border border-sky-500 `}    /> 
                           
                               </div>
                               
                               
                                <input type="button" value="Cập nhật"   id="id_gui" className={` mt-2 mb-2  _shadow rounded   bg-sky-500 hover:bg-sky-700 h-8 flex items-center justify-center pl-2  font-medium `}   /> 
                              
               
                            </div>
                            <div  id="id_nhan"  className={` text-sm grow ml-1 `}> 
                            
                            </div>
                    </div>
                    
                    
                   </div>



                );
            
            
            } ;


   
   useEffect(() => {  

 
    
    ref_nhap_cam.current.onclick = function () {

        ReactDOM.render(<Nhap_cam /> ,document.getElementById('id_nhan_index'));
        
    }

    

      }, []);
   

     
    
  return (  <div  className={`flex flex-col w-full  bg-orange-200  `} > 
     <div  ref={ ref_nhap_cam  }  className={`pl-4 hover:bg-gray-200 hover:bg-opacity-50 pr-1`}> Nhập cám </div>
     <div className={`pl-4 hover:bg-gray-200 hover:bg-opacity-50 pr-1`}> Xuất cám </div>
     <div className={`pl-4 hover:bg-gray-200 hover:bg-opacity-50 pr-1`}> Kiểm kê kho cám</div>

     
    </div>
  );


 } ;