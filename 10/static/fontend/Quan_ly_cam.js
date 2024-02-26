function Quan_ly_cam() {
   
  let ref_nhap_cam =  useRef(null) ; 

  let ref_xuat_cam =  useRef(null) ; 

  let ref_kiem_ke_cam =  useRef(null) ; 



            function Nhap_cam() {

              
            
                let array_ten_cam =  JSON.parse(localStorage.getItem("kho")).map( (item, index )=> {  if (index>0) {return item[2] ; }     })
       
                console.log(array_ten_cam);
  


                
                useEffect(() => {    

                   
    id_gui.onclick = function () {
       

          if ( id_ngay.style.display !=="none"  && (id_ngay.value == null ||id_ngay.value == ""  ) )
     {return _alert("Bạn chưa chọn ngày") }
        if ( id_so_luong.style.display ==="flex"  &&  (isNaN(Number(id_so_luong.value)) || id_so_luong.value < 0 || id_so_luong.value == null ||id_so_luong.value == "" )   )
     {return _alert("Số lượng phải lớn hơn = 0 và không được để trống") }
   
     if ( id_tong_so_tien.style.display ==="flex"  &&  ( isNaN(Number(id_tong_so_tien.value)) || id_tong_so_tien.value < 0 || id_tong_so_tien.value == null ||id_tong_so_tien.value == "" ))
     {return _alert("Tổng số tiền phải lớn hơn = 0 và không được để trống") }

   
        $.post("thit_cam_nhap.php", { post0: "nhập cám", post1: id_ngay.value, post2:id_loai_cam_ds.value ,  post8:id_8.value , post3:id_so_luong.value ,post4:id_tong_so_tien.value ,post5:id_ma_chung_tu_nhap.value ,post6:id_nguon_nhap.value ,post7:id_hsd.value  }, function(data){
			
        
            data = data.trim(); if (data.slice(0, 8) ==="<script>") {  let data_1 = data.slice(8, -9); eval(data_1) ; return  ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  }
          
                  
                  if ( data.trim() === "ok") {
                 
                    _alert("Cập nhật thành công");

                    id_so_luong.value = "";
                
               
                    id_ma_chung_tu_nhap.value = "";
                
                    id_tong_so_tien.value = "";
              

                  }
                   else {
                    _alert(data.trim())
                 
                  }
                           
                      
                  
                  
                  
                  });
              

      
        
    }

                
            
                    }, []);
                
            
                
                
                return ( 
                    <div  className={`flex flex-col w-full h-full  bg-gray-100  `} > 
                    <div className={`ml-1 border-b border-sky-500 mr-1`}> Nhập cám </div>
               
                    <div  className={` flex grow  mt-2 `} >  
                            <div className={` flex flex-col  shrink-0 ml-2 `} >
                          
                             
                                <div className={` mt-2   `}> Ngày giá trị: </div>
                                <input id="id_ngay" type="date"  className={`  border border-sky-500 `}    /> 

                                <div className={` mt-2   `} > Chọn loại cám:   </div>
                            {
                              combobox_("id_loai_cam_ds", array_ten_cam )
                            }
                                
                             
                               <div id="id_from"   className={` flex flex-col  `} > 
                             
                               <div className={` mt-2   `} > Mã chứng từ nhập: </div>
                               <input  id="id_ma_chung_tu_nhap"  className={`  border border-sky-500 `}    /> 
                               <div className={` mt-2   `} > Nguồn nhập: </div>
                               <input  id="id_nguon_nhap"  className={`  border border-sky-500 `}    />  
               
                               <div className={` mt-2   `} > Số lượng: </div>
                               <input  id="id_so_luong"  className={`  border border-sky-500 `}    /> 
                               <div className={` mt-2   `} > Đơn vị tính: </div>
                               <input  id="id_don_vi_tinh" value={ "Kg"} className={`  border border-sky-500 `}    /> 
                              
                               <div className={` mt-2   `} > Tổng số tiền: </div>
                               <input  id="id_tong_so_tien"  className={`  border border-sky-500 `}    /> 
                               <div className={` mt-2   `} > Ngày hết hạn: </div>
                               <input id="id_hsd" type="date"  className={`  border border-sky-500 `}    /> 

                               </div>
                               
                               
                                <input type="button" value="Cập nhật"   id="id_gui" className={` mt-2 mb-2  _shadow rounded   bg-sky-500 hover:bg-sky-700 h-8 flex items-center justify-center pl-2  font-medium `}   /> 
                              
               
                            </div>
                            <div  id="id_nhan"  className={` text-sm grow ml-1 `}> 
                            
                            </div>
                    </div>
                    
                    
                   </div>



                );
            
            
            } ;


            function Xuat_cam() {

                let khu  ;
                let chuong ;

                function Chuong(props) {
    
                    let data_them = props.value.data ;
        
                  
                  
                            if (data_them !== false) {
                                array_chuong_thit = JSON.parse(JSON.stringify(data_them));
                            }
        
        
                             array_chuong_thit = JSON.parse(localStorage.getItem("chuong"))  ; 
                            let data_2d = useRef(  array_chuong_thit  );
                            console.log(data_2d.current);
        //--------------------------------------------------------------------------------------------------------------------------------------------
                            function chon_chuong(event,index, i, j, item , cell ) {
                                console.log('click-------');
                                khu = (index+1)+"."+ item[0] ;
                                chuong = ((i*6)+(j+1)) +"." + cell  ;
                                 id_chuong.textContent = (index+1)+"."+ item[0]+" - " +((i*6)+(j+1)) +"." + cell  ;
        
        
                                  ReactDOM.unmountComponentAtNode(id_chuong_ds);
                                  id_gui.style.display = 'none' ;
                                  $.post("chon_lo.php", { post2: khu, post3: chuong,   post8:id_8.value , post9:"khác tìm kiếm" , }, function(data){
                    
                
                                    data = data.trim(); if (data.slice(0, 8) ==="<script>") {  let data_1 = data.slice(8, -9); eval(data_1) ; return  ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  }
                                  
                                    if ( data.trim() === "[]") {
                                        _alert("Chuồng này chưa có heo")
                                       
                                    }
                                    else{
        
                                        if ( data.trim().slice(0, 2) !== "[[") {
        
                                            id_lo.style.display = 'none' ;
                                            id_lo.previousElementSibling.style.display = 'none' ;  
                                            _alert(data)
                                        } else {
        
                                            let array_lo = JSON.parse(data) ;
                                            let select = document.getElementById("id_lo") ;
        
                                            id_lo.style.display = 'flex' ;
                                            id_lo.previousElementSibling.style.display = 'flex' ;
        
                                            select.innerHTML ="" ;
                                              for(let i = 0; i < array_lo.length; i++)
                                                    {
                                                        let option = document.createElement("OPTION");
                                                        
                                                        let result = array_lo[i][0].indexOf("_")+1;
                                                        console.log(result);
                                                        let len = array_lo[i][0].length ;
          
          
                                                        let text = array_lo[i][0].slice(result, len);
                                                        option.text = text;
                                                        
                                                        option.value = array_lo[i][0];
                                                        console.log(text,array_lo[i][0]);
                                                        select.appendChild(option);
                                                    }
          
                                              
                                       
                                        }
        
                                    }
                                         
                                                   
                                              
                                          
                                     // -----------------------------------------------------------------
                                     
                                     id_gui.style.display = 'flex' ;
                                          
                                          });
                                
                            }
                         
                
                         
                
                               useEffect(() => {    
                                id_chuong_ds.focus() ;
        
                                id_chuong_ds.addEventListener("blur", myFunction_3);
                                function myFunction_3() {  
                                   
                                    ReactDOM.unmountComponentAtNode(id_chuong_ds); 
                                    id_chuong_ds.removeEventListener("blur", myFunction_3); 
             
                                   }
        
                
                                    }, []);
                           
                       return (  
                        
                            <div className={` flex flex-col z-50 `} style={  {    position: 'relative',  } } > 
                            {data_2d.current.map(( item ,index )=>{ return  <div  > 
                                    <div className={` flex justify-center bg-red-100 `} > {item[0]}  </div> 
                
                                    <div className={` bg-green-100  `} style={  {    position: 'relative',  } }  >
                                    {item[1].map((row, i) => {
                
                                    return (
                                        <div   style={{  display: "table-row" } }   >
                                                            {row.map((cell, j) => { return <div  style={  { height: "20px", width : "80px" ,  position: 'relative',     border: "1px ridge #ccc", display: "table-cell", paddingLeft: "4px", paddingRight : "4px",  borderRightStyle: (function(){    if (j===row.length -1) { return 'ridge'  } else { return 'none'  }         })(), borderTopStyle:  (function(){    if (i===0 ) { return 'ridge'  } else { return 'none'  }         })(), } }  
                                                            
                                                             className={` hover:bg-sky-400   `}   onMouseDown={(event)=>{  return chon_chuong(event,index, i, j, item , cell)  }} 
                                                            >  {cell}    </div> })}   
                                        </div> 
                
                                    );
                                    })}    
                
                                    </div> 
                                 
                
                                    </div>
                
                                   
                
                              })}
                    
                
                
                
                
                
                              
                                
                             </div>
                
                            
                            
                        
                  
                       );
               
                
                   } ; 
        

              
            
                let array_ten_cam =  JSON.parse(localStorage.getItem("kho")).map( (item, index )=> {  if (index>0) {return item[2] ; }     })
       
                console.log(array_ten_cam);
  


                
                useEffect(() => { 
                    
                    
                    id_chuong.onclick = function () {
     
                        ReactDOM.render( /*#__PURE__*/React.createElement(Chuong, { value: { data: false } }), id_chuong_ds)
                        const rect = id_chuong.getBoundingClientRect();
                        id_chuong_ds.style.top = rect.top + "px"; 
                     
                
                    }
                



//---------------------------------------------------------------
                   
    id_gui.onclick = function () {
      
        if (khu=== undefined ||chuong === undefined ) 
        {
            return _alert("Bạn phải chọn chuồng và chọn lô trước đã")  
        }
 


          if ( id_ngay.style.display !=="none"  && (id_ngay.value == null ||id_ngay.value == ""  ) )
     {return _alert("Bạn chưa chọn ngày") }
        if ( id_so_luong.style.display ==="flex"  &&  (isNaN(Number(id_so_luong.value)) || id_so_luong.value < 0 || id_so_luong.value == null ||id_so_luong.value == "" )   )
     {return _alert("Số lượng phải lớn hơn = 0 và không được để trống") }
   
     if ( id_tong_so_tien.style.display ==="flex"  &&  ( isNaN(Number(id_tong_so_tien.value)) || id_tong_so_tien.value < 0 || id_tong_so_tien.value == null ||id_tong_so_tien.value == "" ))
     {return _alert("Tổng số tiền phải lớn hơn = 0 và không được để trống") }

   
        $.post("thit_cam_nhap.php", { post0: "xuất cám", post1: id_ngay.value, post2:id_loai_cam_ds.value ,  post8:id_8.value , post3:id_so_luong.value ,post4:id_tong_so_tien.value ,post5:khu ,post6:chuong,post7:id_lo.value  }, function(data){
			
        
            data = data.trim(); if (data.slice(0, 8) ==="<script>") {  let data_1 = data.slice(8, -9); eval(data_1) ; return  ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  }
          
                  
                  if ( data.trim() === "ok") {
                 
                    _alert("Cập nhật thành công");

                    id_so_luong.value = "";
                
               
                  
                
                    id_tong_so_tien.value = "";
              

                  }
                   else {
                    _alert(data.trim())
                 
                  }
                           
                      
                  
                  
                  
                  });
              

      
        
    }

                
            
                    }, []);
                
            
                
                
                return ( 
                    <div  className={`flex flex-col w-full h-full  bg-gray-100  `} > 
                    <div className={`ml-1 border-b border-sky-500 mr-1`}> Xuất cám </div>
               
                    <div  className={` flex grow  mt-2 `} >  
                            <div className={` flex flex-col  shrink-0 ml-2 `} >
                          
                             
                                <div className={` mt-2   `}> Ngày giá trị: </div>
                                <input id="id_ngay" type="date"  className={`  border border-sky-500 `}    /> 

                                <div className={` mt-2   `} > Chọn loại cám:   </div>
                            {
                              combobox_("id_loai_cam_ds", array_ten_cam )
                            }
                                <div className={` mt-2   `} > Chuồng: </div>
                <button  id="id_chuong" className={`border  border-sky-500 flex justify-start `} type="button"    > Chọn chuồng </button>
                <button id="id_chuong_ds" className={`w-auto absolute   _shadow  `} type="button"> </button>
            
                <div className={` mt-2   `} > Lô: </div>
                <select  id="id_lo" style={{color : "black" ,  }} className={`focus:outline-0 w-full  border border-sky-500  `}  >  
        
                </select> 
                             
                               <div id="id_from"   className={` flex flex-col  `} > 
                             
                           
                               <div className={` mt-2   `} > Số lượng: </div>
                               <input  id="id_so_luong"  className={`  border border-sky-500 `}    /> 
                               <div className={` mt-2   `} > Đơn vị tính: </div>
                               <input  id="id_don_vi_tinh" value={ "Kg"} className={`  border border-sky-500 `}    /> 
                              
                               <div className={` mt-2   `} > Tổng số tiền: </div>
                               <input  id="id_tong_so_tien"  className={`  border border-sky-500 `}    /> 
                             
                               </div>
                               
                               
                                <input type="button" value="Cập nhật"   id="id_gui" className={` mt-2 mb-2  _shadow rounded   bg-sky-500 hover:bg-sky-700 h-8 flex items-center justify-center pl-2  font-medium `}   /> 
                              
               
                            </div>
                            <div  id="id_nhan"  className={` text-sm grow ml-1 `}> 
                            
                            </div>
                    </div>
                    
                    
                   </div>



                );
            
            
            } ;

            function Kiem_ke_cam() {

            


                
                useEffect(() => { 
                    
                    
                 
                   
    id_gui.onclick = function () {
      
        let width_table = document.getElementById('id_nhan').getBoundingClientRect().width ;
        let height_table = document.getElementById('id_nhan').getBoundingClientRect().height ;
   
         
        $.post("kiem_ke_cam.php", { post0: "kiểm kê nhập cám", post1: id_ngay.value, post2:id_ngay_kt.value ,  post8:id_8.value  }, function(data){
			
        
            data = data.trim(); if (data.slice(0, 8) ==="<script>") {  let data_1 = data.slice(8, -9); eval(data_1) ; return  ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  }
          
                  
            if ( data.trim().slice(0, 2) === "[[") {
                 
             
      
      ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan')); 
     
      ReactDOM.render(React.createElement(Table_tieu_de_2,  { value: { data : JSON.parse(data) , width:width_table , height :height_table  }}), id_nhan);
      
         

            }
                   else {
                    _alert(data.trim())
                 
                  }
                  
                  });
              

      
        
    }

                     
    id_gui_2.onclick = function () {
      
        let width_table = document.getElementById('id_nhan').getBoundingClientRect().width ;
        let height_table = document.getElementById('id_nhan').getBoundingClientRect().height ;
   
         
        $.post("kiem_ke_cam.php", { post0: "kiểm kê xuất cám", post1: id_ngay_2.value, post2:id_ngay_kt_2.value ,  post8:id_8.value  }, function(data){
			
        
            data = data.trim(); if (data.slice(0, 8) ==="<script>") {  let data_1 = data.slice(8, -9); eval(data_1) ; return  ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  }
          
                  
            if ( data.trim().slice(0, 2) === "[[") {
                 
             
      
      ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan')); 
     
      ReactDOM.render(React.createElement(Table_tieu_de_2,  { value: { data : JSON.parse(data) , width:width_table , height :height_table  }}), id_nhan);
      
         

            }
                   else {
                    _alert(data.trim())
                 
                  }
                  
                  });
              

      
        
    }


   
            
                    }, []);
                
            
                
                
                return ( 
                    <div  className={`flex flex-col w-full h-full  bg-gray-100  `} > 
                    <div className={`ml-1 border-b border-sky-500 mr-1`}> Kiểm kê cám </div>
               
                    <div  className={` flex grow  mt-2 `} >  
                            <div className={` flex flex-col  shrink-0 ml-2 `} >
                          
                             
                                <div className={` mt-2   `}> Ngày bắt đầu: </div>
                                <input id="id_ngay" type="date"  className={`  border border-sky-500 `}    /> 


                                <div className={` mt-2   `}> Ngày kết thúc: </div>
                                <input id="id_ngay_kt" type="date"  className={`  border border-sky-500 `}    /> 

                                
                                <input type="button" value="Kiểm kê Nhập cám"   id="id_gui" className={` mt-2 mb-2  _shadow rounded   bg-sky-500 hover:bg-sky-700 h-8 flex items-center justify-center pl-2  font-medium `}   /> 
                               

                                <div className={` mt-2   `}> Ngày bắt đầu: </div>
                                <input id="id_ngay_2" type="date"  className={`  border border-sky-500 `}    /> 


                                <div className={` mt-2   `}> Ngày kết thúc: </div>
                                <input id="id_ngay_kt_2" type="date"  className={`  border border-sky-500 `}    /> 

                               
                                <input type="button" value="Kiểm kê Xuất Cám"   id="id_gui_2" className={` mt-2 mb-2  _shadow rounded   bg-sky-500 hover:bg-sky-700 h-8 flex items-center justify-center pl-2  font-medium `}   /> 
                              
               
                            </div>
                            <div  id="id_nhan"  className={` text-sm grow ml-1 `}> 
                            
                            </div>
                    </div>
                    
                    
                   </div>



                );
            
            
            } ;


   
   useEffect(() => {  

//  nhập cám
    
    ref_nhap_cam.current.onclick = function () {

        ReactDOM.render(<Nhap_cam /> ,document.getElementById('id_nhan_index'));
        
    }

 // Xuất cám
 ref_xuat_cam.current.onclick = function () {

    ReactDOM.render(<Xuat_cam /> ,document.getElementById('id_nhan_index'));
    
}
 

 // Quản lý kho cám

 ref_kiem_ke_cam.current.onclick = function () {

    ReactDOM.render(<Kiem_ke_cam /> ,document.getElementById('id_nhan_index'));
    
}
 

      }, []);
   

     
    
  return (  <div  className={`flex flex-col w-full  bg-orange-200  `} > 
     <div  ref={ ref_nhap_cam  }  className={`pl-4 hover:bg-gray-200 hover:bg-opacity-50 pr-1`}> Nhập cám </div>
     <div  ref={ ref_xuat_cam  }  className={`pl-4 hover:bg-gray-200 hover:bg-opacity-50 pr-1`}> Xuất cám </div>
     <div  ref={ ref_kiem_ke_cam  }  className={`pl-4 hover:bg-gray-200 hover:bg-opacity-50 pr-1`}> Kiểm kê kho cám</div>

     
    </div>
  );


 } ;