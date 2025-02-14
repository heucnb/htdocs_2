function Form_nhap() {

     
    
    useEffect(() => {    

       
id_gui.onclick = function () {



}

    

        }, []);
    

    
    
    return ( 
        <div  className={`flex flex-col w-full h-full  bg-gray-100  `} > 
        <div className={`ml-1 border-b border-sky-500 mr-1`}> Nhập dữ liệu </div>
   
        <div  className={` flex grow  mt-2 `} >  
                <div className={` flex flex-col  shrink-0 ml-2 `} >
              
                <div className={` mt-2    `} > Tên trại + tên chuồng + tên lô:   </div>
                {
                  combobox_("id_array", ["chuồng 1", "chuồng 2" , "chuồng3"] )
                }
                    <div className={` mt-2   `}> Ngày nhập: </div>
                    <input id="id_ngay" type="date"  className={`p-1  border border-sky-500 `}    /> 

                  
                    
                 
                   <div id="id_from"   className={` flex flex-col  `} > 
                 
                   <div className={` mt-2   `} > Nguồn nhập: </div>
                   <input  id="id_ma_chung_tu_nhap"  className={` p-1 border border-sky-500 `}    /> 
               
                   <div className={` mt-2   `} > Số lượng: </div>
                   <input  id="id_so_luong"  className={`p-1  border border-sky-500 `}    /> 
                   <div className={` mt-2   `} > Đơn vị tính: </div>
                   <input  id="id_don_vi_tinh" value={ "Kg"} className={`p-1  border border-sky-500 `}    /> 
                  
                   <div className={` mt-2   `} > Tổng số tiền: </div>
                   <input  id="id_tong_so_tien"  className={`p-1  border border-sky-500 `}    /> 
                   <div className={` mt-2   `} > Ngày hết hạn: </div>
                   <input id="id_hsd" type="date"  className={`p-1  border border-sky-500 `}    /> 

                   </div>
                   
                   
                    <input type="button" value="Cập nhật"   id="id_gui" className={` mt-2 mb-2  _shadow rounded   bg-sky-500 hover:bg-sky-700 h-8 flex items-center justify-center pl-2  font-medium `}   /> 
                  
   
                </div>
                <div  id="id_nhan"  className={` text-sm grow ml-1 `}> 
                
                </div>
        </div>
        
        
       </div>



    );


} ;