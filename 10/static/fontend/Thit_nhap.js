function Thit_nhap() {
    let khu  ;
    let chuong ;

    let khu_chuyen_den ="" ;
    let chuong_chuyen_den = "" ;

   


 

          function Ten_su_kien(props) {
               useEffect(() => {  
               
             


                id_su_kien_ds.focus() ;

                let id_ten_su_kien = id_su_kien_ds.children[0] ;
                let ds_item_ten_su_kien = id_ten_su_kien.children ;
                 for (let index = 0 , len = ds_item_ten_su_kien.length ; index < len ; index++) { 
                    ds_item_ten_su_kien[index].onmousedown = function (event) {
                        ReactDOM.unmountComponentAtNode(id_su_kien_ds); 
                        let su_kien = ds_item_ten_su_kien[index].textContent.trim() ;

                        id_su_kien.textContent = su_kien ;
                        id_su_kien.value = su_kien ;
                       // hiện lại tất cả
                      let from =  id_from.children ;
                      id_from.style.display = 'flex' ;
                      id_chuong.textContent = "Chọn chuồng";
                      id_chuong.value = "Chọn chuồng";
                      id_lo.innerHTML = "" ;
                       for (let index = 0 , len = from.length ; index < len ; index++) { 
                        from[index].style.display = 'flex' ;

                        }
                        if (su_kien === "Báo chết") {
                            id_ngay.style.display = 'block' ;
                            id_ngay.previousElementSibling.style.display = 'block' ;

                            id_nguon_nhap.style.display = 'none' ;
                            id_nguon_nhap.previousElementSibling.style.display = 'none' ;

                            id_lo_nhap.style.display = 'none' ;
                            id_lo_nhap.previousElementSibling.style.display = 'none' ;


                            id_chuong_ds_chuyen_den.style.display = 'none' ;
                          
                            id_chuong_chuyen_den.style.display = 'none' ;
                            id_chuong_chuyen_den.previousElementSibling.style.display = 'none' ;

                            id_lo_chuyen_den.style.display = 'none' ;
                            id_lo_chuyen_den.previousElementSibling.style.display = 'none' ;


                            id_nguoi_mua.style.display = 'none' ;
                            id_nguoi_mua.previousElementSibling.style.display = 'none' ;

                            id_tong_so_tien.style.display = 'none' ;
                            id_tong_so_tien.previousElementSibling.style.display = 'none' ;

                            id_phan_loai_heo.style.display = 'none' ;
                            id_phan_loai_heo.previousElementSibling.style.display = 'none' ;


                            id_gui.style.display = "flex" ;
                            id_gui.value = "Cập nhật" ;
                            khu = undefined;
                            chuong = undefined;
                            ReactDOM.unmountComponentAtNode(id_nhan); 

                            

                        }
                        if (su_kien === "Bán loại") {
                            id_ngay.style.display = 'block' ;
                            id_ngay.previousElementSibling.style.display = 'block' ;

                            id_nguon_nhap.style.display = 'none' ;
                            id_nguon_nhap.previousElementSibling.style.display = 'none' ;

                            
                            id_lo_nhap.style.display = 'none' ;
                            id_lo_nhap.previousElementSibling.style.display = 'none' ;

                         
                            id_chuong_ds_chuyen_den.style.display = 'none' ;
                          
                            id_chuong_chuyen_den.style.display = 'none' ;
                            id_chuong_chuyen_den.previousElementSibling.style.display = 'none' ;

                            id_lo_chuyen_den.style.display = 'none' ;
                            id_lo_chuyen_den.previousElementSibling.style.display = 'none' ;



                            id_phan_loai_heo.style.display = 'none' ;
                            id_phan_loai_heo.previousElementSibling.style.display = 'none' ;

                            id_gui.style.display = "flex" ;
                            id_gui.value = "Cập nhật" ;
                            khu = undefined;
                            chuong = undefined;
                            ReactDOM.unmountComponentAtNode(id_nhan); 




                        }
                        if (su_kien === "Bán thịt") {
                            id_ngay.style.display = 'block' ;
                            id_ngay.previousElementSibling.style.display = 'block' ;

                            id_nguon_nhap.style.display = 'none' ;
                            id_nguon_nhap.previousElementSibling.style.display = 'none' ;

                            
                            id_lo_nhap.style.display = 'none' ;
                            id_lo_nhap.previousElementSibling.style.display = 'none' ;

                           
                            id_chuong_ds_chuyen_den.style.display = 'none' ;
                          
                            id_chuong_chuyen_den.style.display = 'none' ;
                            id_chuong_chuyen_den.previousElementSibling.style.display = 'none' ;

                            id_lo_chuyen_den.style.display = 'none' ;
                            id_lo_chuyen_den.previousElementSibling.style.display = 'none' ;

                            id_nguyen_nhan.style.display = 'none' ;
                            id_nguyen_nhan.previousElementSibling.style.display = 'none' ;


                            id_gui.style.display = "flex" ;
                            id_gui.value = "Cập nhật" ;
                            khu = undefined;
                            chuong = undefined;
                            ReactDOM.unmountComponentAtNode(id_nhan); 


                        }
                        if (su_kien === "Bán giống") {
                            id_ngay.style.display = 'block' ;
                            id_ngay.previousElementSibling.style.display = 'block' ;

                            id_nguon_nhap.style.display = 'none' ;
                            id_nguon_nhap.previousElementSibling.style.display = 'none' ;

                            
                            id_lo_nhap.style.display = 'none' ;
                            id_lo_nhap.previousElementSibling.style.display = 'none' ;

                         
                            id_chuong_ds_chuyen_den.style.display = 'none' ;
                          
                            id_chuong_chuyen_den.style.display = 'none' ;
                            id_chuong_chuyen_den.previousElementSibling.style.display = 'none' ;

                            id_lo_chuyen_den.style.display = 'none' ;
                            id_lo_chuyen_den.previousElementSibling.style.display = 'none' ;


                            id_nguyen_nhan.style.display = 'none' ;
                            id_nguyen_nhan.previousElementSibling.style.display = 'none' ;

                            id_phan_loai_heo.style.display = 'none' ;
                            id_phan_loai_heo.previousElementSibling.style.display = 'none' ;

                            id_gui.style.display = "flex" ;
                            id_gui.value = "Cập nhật" ;
                            khu = undefined;
                            chuong = undefined;
                            ReactDOM.unmountComponentAtNode(id_nhan); 

                        }
                        if (su_kien === "Chuyển chuồng") {
                            id_ngay.style.display = 'block' ;
                            id_ngay.previousElementSibling.style.display = 'block' ;

                            id_nguon_nhap.style.display = 'none' ;
                            id_nguon_nhap.previousElementSibling.style.display = 'none' ;

                            
                            id_lo_nhap.style.display = 'none' ;
                            id_lo_nhap.previousElementSibling.style.display = 'none' ;

                            id_nguyen_nhan.style.display = 'none' ;
                            id_nguyen_nhan.previousElementSibling.style.display = 'none' ;

                            id_tong_so_tien.style.display = 'none' ;
                            id_tong_so_tien.previousElementSibling.style.display = 'none' ;

                            id_nguoi_mua.style.display = 'none' ;
                            id_nguoi_mua.previousElementSibling.style.display = 'none' ;

                            id_phan_loai_heo.style.display = 'none' ;
                            id_phan_loai_heo.previousElementSibling.style.display = 'none' ;

                            id_gui.style.display = "flex" ;
                            id_gui.value = "Cập nhật" ;
                            khu = undefined;
                            chuong = undefined;
                            ReactDOM.unmountComponentAtNode(id_nhan); 

                        }

                        if (su_kien === "Nhập heo") {
                            id_ngay.style.display = 'block' ;
                            id_ngay.previousElementSibling.style.display = 'block' ;

                          


                            id_chuong_ds_chuyen_den.style.display = 'none' ;
                          
                            id_chuong_chuyen_den.style.display = 'none' ;
                            id_chuong_chuyen_den.previousElementSibling.style.display = 'none' ;

                            id_lo_chuyen_den.style.display = 'none' ;
                            id_lo_chuyen_den.previousElementSibling.style.display = 'none' ;



                           
                            id_nguyen_nhan.style.display = 'none' ;
                            id_nguyen_nhan.previousElementSibling.style.display = 'none' ;

                           
                            id_nguoi_mua.style.display = 'none' ;
                            id_nguoi_mua.previousElementSibling.style.display = 'none' ;


                                
                            id_lo_nhap.style.display = 'none' ;
                            id_lo_nhap.previousElementSibling.style.display = 'none' ;

                            id_phan_loai_heo.style.display = 'none' ;
                            id_phan_loai_heo.previousElementSibling.style.display = 'none' ;

                            id_gui.style.display = "flex" ;

                            id_gui.value = "Cập nhật" ;
                            khu = undefined;
                            chuong = undefined;
                            ReactDOM.unmountComponentAtNode(id_nhan); 

                            

                        }

                        if (su_kien === "Đóng chuồng") {


                           
                            id_chuong_ds_chuyen_den.style.display = 'none' ;
                          
                            id_chuong_chuyen_den.style.display = 'none' ;
                            id_chuong_chuyen_den.previousElementSibling.style.display = 'none' ;

                            id_lo_chuyen_den.style.display = 'none' ;
                            id_lo_chuyen_den.previousElementSibling.style.display = 'none' ;



                           
                            id_nguyen_nhan.style.display = 'none' ;
                            id_nguyen_nhan.previousElementSibling.style.display = 'none' ;

                           
                            id_nguoi_mua.style.display = 'none' ;
                            id_nguoi_mua.previousElementSibling.style.display = 'none' ;


                                
                            id_lo_nhap.style.display = 'none' ;
                            id_lo_nhap.previousElementSibling.style.display = 'none' ;

                            id_so_luong.style.display = 'none' ;
                            id_so_luong.previousElementSibling.style.display = 'none' ;

                            id_trong_luong.style.display = 'none' ;
                            id_trong_luong.previousElementSibling.style.display = 'none' ;

                            id_tong_so_tien.style.display = 'none' ;
                            id_tong_so_tien.previousElementSibling.style.display = 'none' ;

                            id_ky_su.style.display = 'none' ;
                            id_ky_su.previousElementSibling.style.display = 'none' ;

                            id_ngay.style.display = 'none' ;
                            id_ngay.previousElementSibling.style.display = 'none' ;

                            id_nguon_nhap.style.display = 'none' ;
                            id_nguon_nhap.previousElementSibling.style.display = 'none' ;

                            id_phan_loai_heo.style.display = 'none' ;
                            id_phan_loai_heo.previousElementSibling.style.display = 'none' ;

                            
                            let width_table = document.getElementById('id_nhan_index').getBoundingClientRect().width ;
                            let height_table = document.getElementById('id_nhan_index').getBoundingClientRect().height ;
                     

                            $.post("thit_nhap.php", { post20: "", post21: "", post22: "",   post1: id_su_kien.textContent , post2: "", post3: "", post5: id_lo.value  , post4:id_ngay.value,  post8:id_8.value , post9:id_su_kien.value  ,post11:id_so_luong.value ,post12:id_trong_luong.value ,post13:id_nguyen_nhan.value ,post14:id_tong_so_tien.value , post15:id_nguoi_mua.value , post16:id_ky_su.value ,  post17:id_lo_nhap.value ,  post18:id_nguon_nhap.value , post19:id_phan_loai_heo.value,   }, function(data){
			
        
                                data = data.trim(); if (data.slice(0, 8) ==="<script>") {  let data_1 = data.slice(8, -9); eval(data_1) ; return  ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  }
                              
                                      
                                      if ( data.trim().slice(0, 2) !== "[[") {
                                          _alert(data);

                                      } else {

                                   
                                        ReactDOM.unmountComponentAtNode(id_nhan_index); 
                                        ReactDOM.render(React.createElement(Table_dong_chuong,  { value: { data : JSON.parse(data) , width:width_table , height :height_table }}), id_nhan_index); 
              
                                      
                                      }
                                               
                                     
                                      
                                      
                                      });
                        
                          
                        }

                        if (su_kien === "Tìm kiếm") {
                            
                          
                            id_chuong_ds_chuyen_den.style.display = 'none' ;
                          
                            id_chuong_chuyen_den.style.display = 'none' ;
                            id_chuong_chuyen_den.previousElementSibling.style.display = 'none' ;

                            id_lo_chuyen_den.style.display = 'none' ;
                            id_lo_chuyen_den.previousElementSibling.style.display = 'none' ;

                           
                            id_nguyen_nhan.style.display = 'none' ;
                            id_nguyen_nhan.previousElementSibling.style.display = 'none' ;

                           
                            id_nguoi_mua.style.display = 'none' ;
                            id_nguoi_mua.previousElementSibling.style.display = 'none' ;


                                
                            id_lo_nhap.style.display = 'none' ;
                            id_lo_nhap.previousElementSibling.style.display = 'none' ;

                            id_so_luong.style.display = 'none' ;
                            id_so_luong.previousElementSibling.style.display = 'none' ;

                            id_trong_luong.style.display = 'none' ;
                            id_trong_luong.previousElementSibling.style.display = 'none' ;

                            id_tong_so_tien.style.display = 'none' ;
                            id_tong_so_tien.previousElementSibling.style.display = 'none' ;

                            id_ky_su.style.display = 'none' ;
                            id_ky_su.previousElementSibling.style.display = 'none' ;

                            id_ngay.style.display = 'none' ;
                            id_ngay.previousElementSibling.style.display = 'none' ;

                            id_nguon_nhap.style.display = 'none' ;
                            id_nguon_nhap.previousElementSibling.style.display = 'none' ;

                            id_phan_loai_heo.style.display = 'none' ;
                            id_phan_loai_heo.previousElementSibling.style.display = 'none' ;



                            id_gui.style.display = "flex" ;
                        
                            id_gui.value = "Tìm kiếm" ;
                            khu = undefined;
                            chuong = undefined;
                            ReactDOM.unmountComponentAtNode(id_nhan); 
                          
                        }


                       
                    }


                  }
                  //-------------------------------------------------------------------

                  id_su_kien_ds.addEventListener("blur", myFunction_3);
                            function myFunction_3() {  

                                ReactDOM.unmountComponentAtNode(id_su_kien_ds); 
                                id_su_kien_ds.removeEventListener("blur", myFunction_3); 
         
                               }



                }, []);
    
       
            return (   <div className={` flex flex-col bg-white _shadow `} > 
                <button   className={` hover:bg-sky-400`} type="button"    > Nhập heo </button> 
                 <button   className={` hover:bg-sky-400`} type="button"    > Báo chết </button>
                 <button   className={` hover:bg-sky-400`} type="button"    > Bán loại </button>
                 <button   className={` hover:bg-sky-400`} type="button"    > Bán thịt </button>
                 <button   className={` hover:bg-sky-400`} type="button"    > Bán giống </button>
                 <button   className={` hover:bg-sky-400`} type="button"    > Chuyển chuồng </button>
                 <button   className={` hover:bg-sky-400`} type="button"    > Đóng chuồng </button>
                 <button   className={` hover:bg-sky-400`} type="button"    > Tìm kiếm </button>
                 </div>

               
             );
       
        
           } ; 

           function Chuong(props) {
    
            let data_them = props.value.data ;

          
          
                    if (data_them !== false) {
                        array_chuong_thit = JSON.parse(JSON.stringify(data_them));
                    }
                  
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
                          $.post("chon_lo.php", { post2: khu, post3: chuong,   post8:id_8.value , post9:id_su_kien.value , }, function(data){
			
        
                            data = data.trim(); if (data.slice(0, 8) ==="<script>") {  let data_1 = data.slice(8, -9); eval(data_1) ; return  ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  }
                          
                            if ( data.trim() === "[]") {
                                if (id_su_kien.textContent.trim()=== "Nhập heo" ) {
                                  
                                    id_lo.style.display = 'flex' ;
                                    id_lo.previousElementSibling.style.display = 'flex' ;

                                    id_lo_nhap.style.display = 'flex' ;
                                    id_lo_nhap.previousElementSibling.style.display = 'flex' ;
                                    let select = document.getElementById("id_lo") ;
                                    let option_lo_moi = document.createElement("OPTION");
                                    option_lo_moi.text = "Tạo lô mới";
                                        
                                    option_lo_moi.value = "Tạo lô mới";
                                
                                    select.appendChild(option_lo_moi);

                                    
                                    
                                } else {

                                    if (id_su_kien.textContent.trim()=== "Tìm kiếm") {
                                        _alert("Chuồng này chưa có dữ liệu")
                                        id_chuong.textContent = "Chọn chuồng";
                                        id_chuong.value = "Chọn chuồng";
                                        id_lo.innerHTML = "" ;
                                        
                                    } else {
                                        _alert("Chuồng này chưa nhập heo (mở chuồng, tạo lô mới). Bạn phải chọn sự kiện nhập heo để mở chuồng, tạo lô mới")
                                        id_chuong.textContent = "Chọn chuồng";
                                        id_chuong.value = "Chọn chuồng";
                                        id_lo.innerHTML = "" ;
                                        
                                    }
                                   
    
                                    
                                }
                               
                            }
                            else{

                                if ( data.trim().slice(0, 2) !== "[[") {
                                    _alert(data)
                                } else {

                                    let array_lo = JSON.parse(data) ;
                                    let select = document.getElementById("id_lo") ;
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
  
                                         

                                    if (id_su_kien.textContent.trim()=== "Nhập heo") {
                                        id_lo.style.display = 'flex' ;
                                        id_lo.previousElementSibling.style.display = 'flex' ;
                                        id_lo_nhap.style.display = 'none' ;
                                        id_lo_nhap.previousElementSibling.style.display = 'none' ;
                                        

                                        let option_lo_moi = document.createElement("OPTION");
                                        option_lo_moi.text = "Tạo lô mới";
                                            
                                        option_lo_moi.value = "Tạo lô mới";
                                    
                                        select.appendChild(option_lo_moi);
                                    
                                        select.onclick = function () {
                                          if (select.value === "Tạo lô mới") {
                                              id_lo_nhap.style.display = 'flex' ;
                                              id_lo_nhap.previousElementSibling.style.display = 'flex' ;
                                              
                                          } else {
                                              id_lo_nhap.style.display = 'none' ;
                                              id_lo_nhap.previousElementSibling.style.display = 'none' ;
                                              
                                          }

                                        
                                    
                                    
                                          
                                        }

                                        
                                        
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



//-----------------------------------------------------------------------------------------------------------------------------------------------------------

function Chuong_chuyen_den(props) {
    
    let data_them = props.value.data ;

    let data_2d = useRef(  array_chuong_thit  );
  
            if (data_them !== false) {
                data_2d.current = data_them ;   
            }
          

            console.log(data_2d.current);
//--------------------------------------------------------------------------------------------------------------------------------------------
            function chon_chuong(event,index, i, j, item , cell ) {
                console.log('click-------');
                khu_chuyen_den = (index+1)+"."+ item[0] ;
                chuong_chuyen_den = ((i*6)+(j+1)) +"." + cell  ;
                id_chuong_chuyen_den.textContent = (index+1)+"."+ item[0]+" - " +((i*6)+(j+1)) +"." + cell  ;
                  ReactDOM.unmountComponentAtNode(id_chuong_ds_chuyen_den);
                  id_gui.style.display = 'none' ;
                  $.post("chon_lo.php", { post2: khu_chuyen_den, post3: chuong_chuyen_den,   post8:id_8.value , post9:id_su_kien.value , }, function(data){
    

                    data = data.trim(); if (data.slice(0, 8) ==="<script>") {  let data_1 = data.slice(8, -9); eval(data_1) ; return  ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  }
                  
                    if ( data.trim() === "[]") {
                        if (id_su_kien.textContent.trim()=== "Nhập heo" ) {
                            id_lo.textContent = "";
                            id_lo.value = "";


                            id_lo.style.display = 'none' ;
                            id_lo.previousElementSibling.style.display = 'none' ;

                            id_lo_nhap.style.display = 'flex' ;
                            id_lo_nhap.previousElementSibling.style.display = 'flex' ;



                            
                            
                        } else {

                            if (id_su_kien.textContent.trim()=== "Tìm kiếm") {
                                _alert("Chuồng này chưa có dữ liệu")
                                id_chuong.textContent = "Chọn chuồng";
                                id_chuong.value = "Chọn chuồng";
                                id_lo.innerHTML = "" ;
                                
                            } else {
                                _alert("Chuồng này chưa nhập heo, số lượng heo = 0 . Bạn phải chọn sự kiện nhập heo")
                                id_chuong.textContent = "Chọn chuồng";
                                id_chuong.value = "Chọn chuồng";
                                id_lo.innerHTML = "" ;
                                
                            }
                           

                            
                        }
                       
                    }
                    else{

                        if ( data.trim().slice(0, 2) !== "[[") {
                            _alert(data)
                        } else {

                            let array_lo = JSON.parse(data) ;
                            let select = document.getElementById("id_lo_chuyen_den") ;
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



   
   useEffect(() => {    

    

    id_gui.onclick = function () {
        if (khu=== undefined ||chuong === undefined ) 
        {
            return _alert("Bạn phải chọn chuồng và chọn lô trước đã")  
        }
        
        if ( id_so_luong.style.display ==="flex"  &&  (isNaN(Number(id_so_luong.value)) || id_so_luong.value < 0 || id_so_luong.value == null ||id_so_luong.value == "" )   )
     {return _alert("Số lượng phải lớn hơn = 0 và không được để trống") }
     if (   id_trong_luong.style.display ==="flex"  &&  (isNaN(Number(id_trong_luong.value)) || id_trong_luong.value < 0 || id_trong_luong.value == null ||id_trong_luong.value == "" )  )
     {return _alert("Trọng lượng phải lớn hơn = 0 và không được để trống") }
     if ( id_tong_so_tien.style.display ==="flex"  &&  ( isNaN(Number(id_tong_so_tien.value)) || id_tong_so_tien.value < 0 || id_tong_so_tien.value == null ||id_tong_so_tien.value == "" ))
     {return _alert("Tổng số tiền phải lớn hơn = 0 và không được để trống") }

     let width_table = document.getElementById('id_nhan').getBoundingClientRect().width ;
     let height_table = document.getElementById('id_nhan').getBoundingClientRect().height ;


        $.post("thit_nhap.php", { post2: khu, post3: chuong, post20: khu_chuyen_den, post21: chuong_chuyen_den, post22: id_lo_chuyen_den.value,  post5: id_lo.value  , post4:id_ngay.value,  post8:id_8.value , post9:id_su_kien.value ,post11:id_so_luong.value ,post12:id_trong_luong.value ,post13:id_nguyen_nhan.value ,post14:id_tong_so_tien.value , post15:id_nguoi_mua.value , post16:id_ky_su.value ,  post17:id_lo_nhap.value ,  post18:id_nguon_nhap.value, post19:id_phan_loai_heo.value,  }, function(data){
			
        
            data = data.trim(); if (data.slice(0, 8) ==="<script>") {  let data_1 = data.slice(8, -9); eval(data_1) ; return  ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  }
          
                  
                  if ( data.trim().slice(0, 2) === "[[") {
                 
                      id_so_luong.value = "";
                      id_trong_luong.value = "";
                      id_ky_su.value = "";
                      id_lo_nhap.value = "";
                      id_nguoi_mua.value = "";
                      id_tong_so_tien.value = "";
                      
            
            ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan')); 
           
            ReactDOM.render(React.createElement(Table_tieu_de,  { value: { data : JSON.parse(data) , width:width_table , height :height_table  }}), id_nhan);
            
               

                  }else if (data.trim() === "ok") {
                    _alert("Cập nhật thành công");

                    id_so_luong.value = "";
                    id_trong_luong.value = "";
                    id_ky_su.value = "";
                    id_lo_nhap.value = "";
                    id_nguoi_mua.value = "";
                    id_tong_so_tien.value = "";
              
                  }
                   else {
                    _alert(data.trim())
                 
                  }
                           
                      
                  
                  
                  
                  });
              

      
        
    }


    //---------------------------------------------------------------------------------------------------------
    id_su_kien.onclick = function () {
        ReactDOM.render( /*#__PURE__*/React.createElement(Ten_su_kien, null), id_su_kien_ds)
        const rect = id_su_kien.getBoundingClientRect();
        id_su_kien_ds.style.top = rect.top + "px";
  
      
     

    }
 

    //---------------------------------------------------------------------------------------------------------
    id_chuong.onclick = function () {
        ReactDOM.render( /*#__PURE__*/React.createElement(Chuong, { value: { data: false } }), id_chuong_ds)
        const rect = id_chuong.getBoundingClientRect();
        id_chuong_ds.style.top = rect.top + "px";
  
      
     

    }


     //---------------------------------------------------------------------------------------------------------
     id_chuong_chuyen_den.onclick = function () {
        ReactDOM.render( /*#__PURE__*/React.createElement(Chuong_chuyen_den, { value: { data: false } }), id_chuong_ds_chuyen_den)
        const rect = id_chuong_chuyen_den.getBoundingClientRect();
        id_chuong_ds_chuyen_den.style.top = rect.top + "px";
  
      
     

    }





      }, []);
   

     
    
  return (  <div  className={`flex flex-col w-full h-full  bg-gray-100  `} > 
     <div className={`ml-1 border-b border-sky-500 mr-1`}> Nhập dữ liệu </div>

     <div  className={` flex grow  mt-2 `} >  
             <div className={` flex flex-col  shrink-0 ml-2 `} >
           
                 <button  id="id_su_kien" className={`border border-sky-500 flex justify-start `} type="button"    > Chọn sự kiện   </button>
                 <button id="id_su_kien_ds" className={` absolute   _shadow  `} type="button"> </button>
                 <div className={` mt-2   `}> Ngày giá trị: </div>
                 <input id="id_ngay" type="date"  className={`  border border-sky-500 `}    /> 
                 <div className={` mt-2   `} > Chuồng: </div>
                <button  id="id_chuong" className={`border  border-sky-500 flex justify-start `} type="button"    > Chọn chuồng </button>
                <button id="id_chuong_ds" className={`w-auto absolute   _shadow  `} type="button"> </button>
            

                <div id="id_from"  style={  {  display: 'none',  }  } className={` flex flex-col  `} > 
                <div className={` mt-2   `} > Lô: </div>
                <select  id="id_lo" style={{color : "black" ,  }} className={`focus:outline-0 w-full  border border-sky-500  `}  > 
                </select> 
                <div className={` mt-2   `} > Tên lô nhập: </div>
                <input  id="id_lo_nhap"  className={`  border border-sky-500 `}    /> 
                <div className={` mt-2   `} > Nguồn nhập: </div>
                <input  id="id_nguon_nhap"  className={`  border border-sky-500 `}    />  

                <div className={` mt-2   `} > Chuông chuyển đến: </div>
                <button  id="id_chuong_chuyen_den" className={`border  border-sky-500 flex justify-start `} type="button"    > Chọn chuồng </button>
                <button id="id_chuong_ds_chuyen_den" className={`w-auto absolute   _shadow  `} type="button"> </button>

                <div className={` mt-2   `} > Lô chuyển đến: </div>
                <select  id="id_lo_chuyen_den" style={{color : "black" ,  }} className={`focus:outline-0 w-full  border border-sky-500  `}  > 
                </select> 

                <div className={` mt-2   `} > Số lượng: </div>
                <input  id="id_so_luong"  className={`  border border-sky-500 `}    /> 
                <div className={` mt-2   `} > Trọng lượng: </div>
                <input  id="id_trong_luong"  className={`  border border-sky-500 `}    /> 
                <div className={` mt-2   `} > Nguyên nhân: </div>
                <select  id="id_nguyen_nhan" style={{color : "black" ,  }} className={`focus:outline-0 w-full  border border-sky-500  `}  > 
                <option style={{color : "black" ,  }} value='Viêm phổi trắng da'>Viêm phổi trắng da</option>
             
                <option style={{color : "black" ,  }} value='Viêm phổi xù lông'>Viêm phổi xù lông</option>
                <option style={{color : "black" ,  }} value='Tiêu chảy'>Tiêu chảy</option>
                <option style={{color : "black" ,  }} value='ASF'>ASF</option>
                <option style={{color : "black" ,  }} value='Khác'>Khác</option>
                </select> 
                <div className={` mt-2   `} > Phân loại: </div>
                <select  id="id_phan_loai_heo" style={{color : "black" ,  }} className={`focus:outline-0 w-full  border border-sky-500  `}  > 
                <option style={{color : "black" ,  }} value='Lợn thịt loại 1'>Lợn thịt loại 1</option>
             
                <option style={{color : "black" ,  }} value='Lợn thịt loại 2'>Lợn thịt loại 2</option>
                <option style={{color : "black" ,  }} value='Lợn thịt loại 3'>Lợn thịt loại 3</option>
                <option style={{color : "black" ,  }} value='Lợn thịt loại 4'>Lợn thịt loại 4</option>
                <option style={{color : "black" ,  }} value='Khác'>Khác</option>
                </select> 
                <div className={` mt-2   `} > Tổng số tiền: </div>
                <input  id="id_tong_so_tien"  className={`  border border-sky-500 `}    /> 
                <div className={` mt-2   `} > Người mua: </div>
                <input  id="id_nguoi_mua"  className={`  border border-sky-500 `}    /> 
              
                <div className={` mt-2   `} > Kỹ sư: </div>
                <input  id="id_ky_su"  className={`  border border-sky-500 `}    /> 
                </div>
                
                
                 <input type="button" value="Cập nhật"   id="id_gui" className={` mt-2 mb-2  _shadow rounded   bg-sky-500 hover:bg-sky-700 h-8 flex items-center justify-center pl-2  font-medium `}   /> 
               

             </div>
             <div  id="id_nhan"  className={` text-sm grow ml-1 `}> 
             
             </div>
     </div>
     
     
    </div>
  );


 } ;