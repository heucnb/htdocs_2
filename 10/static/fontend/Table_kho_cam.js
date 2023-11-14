function Table_kho_cam(props) {
    
    let table_excel_height = props.value.height  ;
    let table_excel_width = props.value.width  ;
    let height_div_tim_kiem = 40 ;
    let data_2d = props.value.data ;
    console.log(data_2d);
 


    
    function xoa(event, row,i) {

  
        $.post("them_xoa_setup_kho.php",  {json_array: JSON.stringify(data_2d[i])  , post1: data_2d[i][0]  ,  post2: "xoa" , post3: data_2d[i][2]  ,  post4: data_2d[i][1]  ,post5: data_2d[i][3]  ,post6: data_2d[i][4]  , post7: data_2d[i][5]  ,  post8:id_8.value}, function(data){
  
                   
         data = data.trim(); if (data.slice(0, 8) ==="<script>") {  let data_1 = data.slice(8, -9); eval(data_1) ; return  ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  }


       if (data.trim() === "ok") {
    
        // xoá dòng đó
          array_kho_cam.splice(i, 1);

         // lưu cấu hình chuồng vào local storage
         arrayjavascript_3[0][7] =JSON.stringify(array_kho_cam)  ;

         localStorage.setItem('all', JSON.stringify(arrayjavascript_3) );

         ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  
         let width_table = document.getElementById('id_nhan_index').getBoundingClientRect().width ;
         let height_table = document.getElementById('id_nhan_index').getBoundingClientRect().height ;

         ReactDOM.render(<Table_kho_cam value={{data :  array_kho_cam  , width:width_table , height :height_table  }} /> 
         ,document.getElementById('id_nhan_index'));
         _alert('Đã xoá');


           } else {
       
          _alert(data.trim());
       
   
      }
    
    });

      }

//---------------------------------------------------------------------------------------------------------------------------------------------
function sua(event, row,i) {
 
  // chạy function
  _sua(event, row,i);

            function _sua(para, row, i) {
              let _div = document.createElement("div");
              // getElementsByTagName sẽ lấy ra một mảng tag name phù hợp không giống by id lấy ra 1 cái 
              let body = document.getElementsByTagName("body");
              body[0].appendChild(_div);
            
              _div.style.zIndex = "10000";
            
              
            function Sua() {
             
            
                useEffect(() => {    
                  id_1.value = row[1] ;
                  id_2.value = row[2] ;
                  id_4.value = row[4] ;
                  id_5.value = row[5] ;


                    id_canel.onclick = function () { ReactDOM.unmountComponentAtNode(_div); _div.remove(); }


                     id_gui.onclick = function () {

                      $.post("them_xoa_setup_kho.php",  {json_array: JSON.stringify(data_2d[i])  , post1: "" ,  post2: "sua" , post3: id_2.value  , post4: id_1.value  ,post5: id_3.value ,post6: id_4.value  , post7: id_5.value , post8:id_8.value}, function(data){
  
                   
                        data = data.trim(); if (data.slice(0, 8) ==="<script>") {  let data_1 = data.slice(8, -9); eval(data_1) ; return  ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  }
               
               
                      if (data.trim() === "ok") {
                   
                    
                         array_kho_cam[i][0] = data_2d[i][0] ;
                         array_kho_cam[i][1] = id_1.value ;
                         array_kho_cam[i][2] = id_2.value ;
                         array_kho_cam[i][3] = id_3.value ;
                         let len = data_2d.length;
                   
                         for (let index = 1 ; index < len ; index++) {  
                          array_kho_cam[index][4] = id_4.value ;
               
                          }
                         
                         array_kho_cam[i][5] = id_5.value ;
                        // lưu cấu hình chuồng vào local storage
                        arrayjavascript_3[0][7] =JSON.stringify(array_kho_cam)  ;
               
                        localStorage.setItem('all', JSON.stringify(arrayjavascript_3) );
                        ReactDOM.unmountComponentAtNode(_div); _div.remove();
                        ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  
                        let width_table = document.getElementById('id_nhan_index').getBoundingClientRect().width ;
                        let height_table = document.getElementById('id_nhan_index').getBoundingClientRect().height ;
               
                        ReactDOM.render(<Table_kho_cam value={{data :  array_kho_cam  , width:width_table , height :height_table  }} /> 
                        ,document.getElementById('id_nhan_index'));
                        _alert('Đã sửa');
               
               
                          } else {
                            ReactDOM.unmountComponentAtNode(_div); _div.remove();
                         _alert(data.trim());
                      
                  
                     }
                   
                   });

                    
                    }

           
                
                    }, []);
              return <div className={' text-slate-700 absolute flex justify-center items-center align-middle w-full h-full top-0 left-0 bg-slate-800 bg-opacity-50'} > 
                        
                        
                          <div  className={`_shadow rounded bg-white w-1/2 flex flex-col  justify-center items-center  `} >  
                            <div className={` flex flex-col justify-start m-10 w-4/5 `} > 

                            <div  > Mã sản phẩm:  </div>
                            <input  id="id_1"  className={`w-full p-1 text-black border border-gray-300 `}   /> 
                            <div  > Tên sản phẩm:  </div>
                            <input  id="id_2"  className={`w-full p-1 text-black border border-gray-300 `}   /> 
                            <div  > Đơn vị tính:  </div>
                            <input  id="id_3" value={ "Kg"} className={`w-full p-1 text-black border border-gray-300 `}   /> 
                            <div  > Nhà cung cấp:   </div>
                            <input  id="id_4"  className={`w-full p-1 text-black border border-gray-300 `}   /> 
                            <div  > Ghi chú:  </div>
                            <input  id="id_5"  className={`w-full p-1 text-black border border-gray-300 `}   /> 
                            <input type="button" value="Cập nhật"   id="id_gui" className={`w-full mt-2 mb-2 text-white _shadow rounded  bg-sky-400 hover:bg-sky-600 h-8 flex items-center justify-center   font-medium `}   /> 
                            <input type="button" value="Canel"    id="id_canel" className={`w-full mt-2 mb-2 text-white  _shadow rounded  bg-gray-400 hover:bg-gray-600 h-8 flex items-center justify-center   font-medium `}   /> 
                          
                            </div>
                     
                           

                        </div>
     
            
              </div>
              
            }
              
              return   ReactDOM.render( <Sua />  ,  _div ) ;
              
            }
            
            
      //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------      
            




}

//---------------------------------------------------------------------------------------------------------------------------------------------------
function them(event) {
 
  // chạy function
  _them(event);

            function _them(event) {
              let _div = document.createElement("div");
              // getElementsByTagName sẽ lấy ra một mảng tag name phù hợp không giống by id lấy ra 1 cái 
              let body = document.getElementsByTagName("body");
              body[0].appendChild(_div);
            
              _div.style.zIndex = "10000";
            
              
            function Them() {


              
            



                useEffect(() => {    

                  



                  id_1.value = "" ;
                  id_2.value = "" ;
                 id_4.value = "" ;
                  id_5.value = "";

                  //--------------------------------------------------------------------------
                  
                  
               
                 
                  //------------------------------------------------------------------------------------------------------------------------------
                    id_canel.onclick = function () { ReactDOM.unmountComponentAtNode(_div); _div.remove(); }

                  //--------------------------------------------------------------------------------------------------------------------------------
                     id_gui.onclick = function () {

                      $.post("them_xoa_setup_kho.php",  {json_array: JSON.stringify([""])  , post1: "" ,  post2: "them" , post3: id_2.value  , post4: id_1.value  ,post5: id_3.value ,post6: id_4.value  , post7: id_5.value , post8:id_8.value}, function(data){
  
                   
                        data = data.trim(); if (data.slice(0, 8) ==="<script>") {  let data_1 = data.slice(8, -9); eval(data_1) ; return  ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  }
               
               
                      if (  data.trim().slice(0, 2) === "ok") {
                   
                        array_kho_cam.push([ data.trim().slice(2),id_1.value, id_2.value, id_3.value, id_4.value, id_5.value ]) ;
                    
                        // lưu cấu hình chuồng vào local storage
                        arrayjavascript_3[0][7] =JSON.stringify(array_kho_cam)  ;
               
                        localStorage.setItem('all', JSON.stringify(arrayjavascript_3) );
                        ReactDOM.unmountComponentAtNode(_div); _div.remove();
                        ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  
                        let width_table = document.getElementById('id_nhan_index').getBoundingClientRect().width ;
                        let height_table = document.getElementById('id_nhan_index').getBoundingClientRect().height ;
               
                        ReactDOM.render(<Table_kho_cam value={{data :  array_kho_cam  , width:width_table , height :height_table  }} /> 
                        ,document.getElementById('id_nhan_index'));
                        _alert('Đã thêm');
               
               
                          } else {
                            ReactDOM.unmountComponentAtNode(_div); _div.remove();
                         _alert(data.trim());
                      
                  
                     }
                   
                   });

                    
                    }

           
                
                    }, []);



              return <div className={' text-slate-700 absolute flex justify-center items-center align-middle w-full h-full top-0 left-0 bg-slate-800 bg-opacity-50'} > 
                        
                        
                          <div  className={`_shadow rounded bg-white w-1/2 flex flex-col  justify-center items-center  `} >  
                            <div className={` flex flex-col justify-start m-10 w-4/5 `} > 

                            <div  > Mã sản phẩm:  </div>
                            <input  id="id_1"  className={`w-full p-1 text-black border border-gray-300 `}   /> 
                            <div  > Tên sản phẩm:  </div>
                            <input  id="id_2"  className={`w-full p-1 text-black border border-gray-300 `}   /> 
                            <div  > Đơn vị tính:  </div>
                            <input  id="id_3" value={ "Kg"} className={`w-full p-1 text-black border border-gray-300 `}   /> 
                            <div  > Nhà cung cấp:   </div>
                            {
                              combobox_("id_4", [1,2,3,4,5,6,7,8,9,"hiệu","cùng", "khắc nguyet"] )
                            }


                            <div  > Ghi chú:  </div>
                            <input  id="id_5"  className={`w-full p-1 text-black border border-gray-300 `}   /> 
                            <input type="button" value="Cập nhật"   id="id_gui" className={`w-full mt-2 mb-2 text-white _shadow rounded  bg-sky-400 hover:bg-sky-600 h-8 flex items-center justify-center   font-medium `}   /> 
                            <input type="button" value="Canel"    id="id_canel" className={`w-full mt-2 mb-2 text-white  _shadow rounded  bg-gray-400 hover:bg-gray-600 h-8 flex items-center justify-center   font-medium `}   /> 
                          
                            </div>
                     
                           

                          </div>
     
            
              </div>
              
            }




            //----------------------------------------------------------------------------------------------------------------------------------------------------
              
              return   ReactDOM.render( <Them />  ,  _div ) ;
              
            }
            
            
      //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------      
            




}

//-----------------------------------------------------------------------------------------------------------------------------------------------
         useEffect(() => {     

          

                  




          let len = data_2d.length;
          // ẩn cột id
          for (let index = 0 ; index < len ; index++) {  
          
             id_table.children[index].children[3].style.display  = 'none'  ;

          
 
           }

           id_table.children[1].children[1].style.whiteSpace = 'nowrap'  ;




             }, []);
 //-------------------------------------------------------------------------------------------------------------------------------     
      
       return (  
        <div  >  
            <div id="tim_kiem" style={  {    height: `${height_div_tim_kiem}px`} } className={` flex  w-full  `} > 
            <input id="id_ma_sp"  className={` m-2 p-2  `}  placeholder="Mã sản phẩm"  /> 
            <input id="id_ten_sp"  className={`  m-2 p-2`} placeholder="Tên sản phẩm"  /> 
             <div className={`m-2 p-2 bg-orange-200 hover:bg-orange-400 flex items-center  `} > Tìm kiếm  </div>
             <div  onClick={(event) => { them(event)   }}  className={`m-2 p-2 bg-green-200 hover:bg-green-400 flex items-center `} > Thêm mới </div>
              </div>
          <div id="id_table"  style={  {    height: `${table_excel_height - height_div_tim_kiem}px`,     overflow: 'scroll',  position: 'relative',} }  >
         
          {data_2d.map((row, i) => {
           
           return (
              <div  className={`bg-white hover:bg-slate-100  `} style={{  display: "table-row" } }   >
                               <div  onClick={(event) => { ((  )=>{ if ([0].includes(i)) { } else {  xoa(event, row,i)   }  })()    }} className={` ${((  )=>{ if ([0].includes(i)) {return "bg-inherit" } else { return "     bg-sky-200 hover:bg-sky-400"}  })()}  `} style={  {    position: 'relative',   border: "1px ridge #ccc", height: "20px", display: "table-cell", paddingLeft: "4px", paddingRight : "4px",  borderRightStyle: 'none',  borderTopStyle: (function(){    if (i===0 ) { return 'ridge'  } else { return 'none'  }         })(),  } }  > { "Xoá" }</div>  
                               <div  onClick={(event) => { ((  )=>{ if ([0].includes(i)) { } else {  sua(event, row,i)   }  })()    }} className={` ${((  )=>{ if ([0].includes(i)) {return "bg-inherit" } else { return "      bg-red-200 hover:bg-red-400"}  })()}  `} style={  {    position: 'relative',   border: "1px ridge #ccc", height: "20px", display: "table-cell", paddingLeft: "4px", paddingRight : "4px",  borderRightStyle: 'none',  borderTopStyle: (function(){    if (i===0 ) { return 'ridge'  } else { return 'none'  }         })(),  } }  > { "Sửa" }</div>  
                               <div   style={  {    position: 'relative',   border: "1px ridge #ccc", height: "20px", display: "table-cell", paddingLeft: "4px", paddingRight : "4px",  borderRightStyle: 'none',  borderTopStyle: (function(){    if (i===0 ) { return 'ridge'  } else { return 'none'  }         })(),  } }  > { (function(){   if (i===0 ) { return 'STT'  } else { return i  }          })() }</div>  
                            {row.map((cell, j) => { return <div  style={  {    position: 'relative',    border: "1px ridge #ccc", height: "20px",  width :  `${table_excel_width/5 }px`  ,display: "table-cell", paddingLeft: "4px", paddingRight : "4px",  borderRightStyle: (function(){    if (j===data_2d[0].length -1) { return 'ridge'  } else { return 'none'  }         })(), borderTopStyle:  (function(){    if (i===0 ) { return 'ridge'  } else { return 'none'  }         })(), } }    > {  cell  }  </div> })} 
              </div> 
  
            );
          })}    
          
          </div>   

       </div>
        
  
       );
  
   
      } ;