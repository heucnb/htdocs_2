function Table_kho_thuoc(props) {
    
    let table_excel_height = props.value.height  ;
    let table_excel_width = props.value.width  ;
    let height_div_tim_kiem = 40 ;
    let data_2d = props.value.data ;
    console.log(data_2d);


    async  function dowload(e){
      console.log("dowload") ;

  
 const  excel =ExcelJS ;
 //Creating New Workbook 
var workbook = new excel.Workbook();

//Creating Sheet for that particular WorkBook
var sheetName = 'Sheet1';
var sheet = workbook.addWorksheet(sheetName);


 for (let index = 0 , len = data_2d.length ; index < len ; index++) { 

  sheet.addRow( data_2d[index].concat([new Date()]));

 let row = sheet.getRow(index+1) ;
  row.font = { name: 'Times New Roman', family: 4, size: 12, bold: false };
    for(let c = 1; c <= 8; c++) {
    row.getCell(c).border = {
      top: {style:'thin'},
      left: {style:'thin'},
      bottom: {style:'thin'},
      right: {style:'thin'}
    };
  }

  row.height = 16;

  }

  sheet.getRow(1).font = { name: 'Times New Roman', family: 4,  color: { argb: 'FF00FF00' }, size: 12, bold: true };
  sheet.getColumn(1).width = 6 ;
  sheet.getColumn(2).width = 15;
  sheet.getColumn(3).width = 18 ;
  sheet.getColumn(4).width = 18 ;
  sheet.getColumn(5).width = 18 ;
  sheet.getColumn(6).width = 18 ;
  sheet.getColumn(7).width = 18 ;



//  // viết công thức

//  sheet.getCell('J1').value = 4;
//  sheet.getCell('J2').value = 9;
// sheet.getCell('J3').value = { formula: 'J1+J2'};

// write to a new buffer
const buffer = await workbook.xlsx.writeBuffer();

// save trên brower bằng FileSaver.js CDN

const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
let EXCEL_EXTENSION = '.xlsx';
const blob= new Blob([buffer], {type: fileType});
saveAs(blob, 'filename' + EXCEL_EXTENSION);


    }



 
    function  handleChange_masp(e){
      console.log(e.target.value) ;

      
      id_ten_sp.value = "" ;
      let len = data_2d.length;

      for (let index = 1 ; index < len ; index++) {
        
     
        if ( removeAccents( data_2d[index][1]).indexOf(removeAccents(e.target.value))=== -1) {
          id_table.children[index].style.display  = 'none'  ;
        }else{

          id_table.children[index].style.display  = 'table-row'  ;
        }


       }

      

    }

    function  handleChange_tensp(e){
   
      console.log(e.target.value) ;

      id_ma_sp.value = "" ;
      let len = data_2d.length;

      for (let index = 1 ; index < len ; index++) {
        
     
        if ( removeAccents( data_2d[index][2]).indexOf(removeAccents(e.target.value))=== -1) {
          id_table.children[index].style.display  = 'none'  ;
        }else{

          id_table.children[index].style.display  = 'table-row'  ;
        }


       }


      

    }

   

    
    function xoa(event, row,i) {

// cập nhật lại bảng table kho cám cho các tab khớp nhau nếu trên cùng 1 máy tính người dùng mở nhiều tab 
id_click.onclick(); 



      let total_id = sum(   data_2d.map( (item)=> { return parseInt(item[0])  ; })   ) ;
        $.post("them_xoa_setup_kho.php",  {json_array: JSON.stringify(data_2d[i])  , post1: data_2d[i][0]  ,  post2: "xoa" , post3: data_2d[i][2]  ,  post4: data_2d[i][1]  ,post5: data_2d[i][3]  ,post6: data_2d[i][4]  , post7: data_2d[i][5]  ,  post8:id_8.value , post9:  total_id , post10:  "Thuốc" }, function(data){
  
                   
         data = data.trim(); if (data.slice(0, 8) ==="<script>") {  let data_1 = data.slice(8, -9); eval(data_1) ; return  ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  }


       if (data.trim() === "ok") {
    
        // xoá dòng đó
          array_kho_thuoc.splice(i, 1);

         // lưu cấu hình kho vào local storage
         localStorage.setItem('kho_thuoc', JSON.stringify( array_kho_thuoc  ) );

         ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  
         let width_table = document.getElementById('id_nhan_index').getBoundingClientRect().width ;
         let height_table = document.getElementById('id_nhan_index').getBoundingClientRect().height ;

         ReactDOM.render(<Table_kho_thuoc value={{data :  array_kho_thuoc  , width:width_table , height :height_table  }} /> 
         ,document.getElementById('id_nhan_index'));
         _alert('Đã xoá');


           } else {
       
          _alert(data.trim());
       
   
      }
    
    });

      }

//---------------------------------------------------------------------------------------------------------------------------------------------
function sua(event, row,i) {


// cập nhật lại bảng table kho cám cho các tab khớp nhau nếu trên cùng 1 máy tính người dùng mở nhiều tab 
id_click.onclick(); 


 
  // chạy function
  _sua(event, row,i);

            function _sua(para, row, i) {
              let _div = document.createElement("div");
              // getElementsByTagName sẽ lấy ra một mảng tag name phù hợp không giống by id lấy ra 1 cái 
              let body = document.getElementsByTagName("body");
              body[0].appendChild(_div);
            
              _div.style.zIndex = "10000";
            
              
            function Sua() {
             
            
              let array_unique_nha_cung_cap =  data_2d.map( (item, index )=> {  if (index>0) {return item[4] ; }     }).filter((value, index, array) => { return index > 0 && array.indexOf(value) === index}  ) 
       
                useEffect(() => {   
                  
                  // data_2d ở đây là của bảng cũ chứ không phải là của bảng mới sau khi chạy lệnh id_click.onclick(); 
                  console.log(data_2d);

                  id_1.value = row[1] ;
                  id_2.value = row[2] ;
                  id_4.value = row[4] ;
                  id_5.value = row[5] ;


                    id_canel.onclick = function () { ReactDOM.unmountComponentAtNode(_div); _div.remove(); }


                     id_gui.onclick = function () {

                      let total_id = sum(   data_2d.map( (item)=> { return parseInt(item[0])  ; })   ) ;

                      $.post("them_xoa_setup_kho.php",  {json_array: JSON.stringify(data_2d[i])  , post1:  row[0]  ,  post2: "sua" , post3: id_2.value  , post4: id_1.value  ,post5: id_3.value ,post6: id_4.value  , post7: id_5.value , post8:id_8.value , post9: total_id , post10:  "Thuốc" }, function(data){
  
                   
                        data = data.trim(); if (data.slice(0, 8) ==="<script>") {  let data_1 = data.slice(8, -9); eval(data_1) ; return  ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  }
               
               
                      if ( data.trim().slice(0, 2) === "ok") {
                   
                    
                         array_kho_thuoc[i][0] =  data.trim().slice(2) ;
                         array_kho_thuoc[i][1] = id_1.value ;
                         array_kho_thuoc[i][2] = id_2.value ;
                         array_kho_thuoc[i][3] = id_3.value ;

                         array_kho_thuoc[i][4] = id_4.value ;
               
                         array_kho_thuoc[i][5] = id_5.value ;

                         localStorage.setItem('kho_thuoc', JSON.stringify( array_kho_thuoc  ) );

                        ReactDOM.unmountComponentAtNode(_div); _div.remove();
                        ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  
                        let width_table = document.getElementById('id_nhan_index').getBoundingClientRect().width ;
                        let height_table = document.getElementById('id_nhan_index').getBoundingClientRect().height ;
               
                        ReactDOM.render(<Table_kho_thuoc value={{data :  array_kho_thuoc  , width:width_table , height :height_table  }} /> 
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
                            <div  > Đơn vị tính: </div>
                            <input  id="id_3"  className={`w-full p-1 text-black border border-gray-300 `}   /> 
                            <div  > Nhà cung cấp:  </div>
                            {
                              combobox_("id_4", array_unique_nha_cung_cap )
                            }

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


  // cập nhật lại bảng table kho cám cho các tab khớp nhau nếu trên cùng 1 máy tính người dùng mở nhiều tab 
  id_click.onclick(); 


  // chạy function
  _them(event);

            function _them(event) {
              let _div = document.createElement("div");
              // getElementsByTagName sẽ lấy ra một mảng tag name phù hợp không giống by id lấy ra 1 cái 
              let body = document.getElementsByTagName("body");
              body[0].appendChild(_div);
            
              _div.style.zIndex = "10000";
            
              
            function Them() {


              let array_unique_nha_cung_cap =  data_2d.map( (item, index )=> {  if (index>0) {return item[4] ; }     }).filter((value, index, array) => { return index > 0 && array.indexOf(value) === index}  ) 
       
              console.log(array_unique_nha_cung_cap);

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

                      
                      let total_id = sum(   data_2d.map( (item)=> { return parseInt(item[0])  ; })   ) ;

                      $.post("them_xoa_setup_kho.php",  {json_array: JSON.stringify([""])  , post1: "" ,  post2: "them" , post3: id_2.value  , post4: id_1.value  ,post5: id_3.value ,post6: id_4.value  , post7: id_5.value , post8:id_8.value  , post9:  total_id , post10:  "Thuốc"  }, function(data){
  
                   
                        data = data.trim(); if (data.slice(0, 8) ==="<script>") {  let data_1 = data.slice(8, -9); eval(data_1) ; return  ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  }
               
               
                      if (  data.trim().slice(0, 2) === "ok") {
                        console.log([ data.trim().slice(2),id_1.value, id_2.value, id_3.value, id_4.value, id_5.value , "Thuốc"]);
                        
                   
                        array_kho_thuoc.push([ data.trim().slice(2),id_1.value, id_2.value, id_3.value, id_4.value, id_5.value , "Thuốc"]) ;
                    
                         localStorage.setItem('kho_thuoc', JSON.stringify( array_kho_thuoc  ) );

                        ReactDOM.unmountComponentAtNode(_div); _div.remove();
                        ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  
                        let width_table = document.getElementById('id_nhan_index').getBoundingClientRect().width ;
                        let height_table = document.getElementById('id_nhan_index').getBoundingClientRect().height ;
               
                        ReactDOM.render(<Table_kho_thuoc value={{data :  array_kho_thuoc  , width:width_table , height :height_table  }} /> 
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
                            <input  id="id_3"  className={`w-full p-1 text-black border border-gray-300 `}   /> 
                            <div  > Nhà cung cấp:   </div>
                            {
                              combobox_("id_4", array_unique_nha_cung_cap )
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


function change_name(event) {
 
  // chạy function
  _change_name(event);

            function _change_name(event) {
              let _div = document.createElement("div");
              // getElementsByTagName sẽ lấy ra một mảng tag name phù hợp không giống by id lấy ra 1 cái 
              let body = document.getElementsByTagName("body");
              body[0].appendChild(_div);
            
              _div.style.zIndex = "10000";
            
              
            function Change_name() {
                // cập nhật lại bảng table kho cám cho các tab khớp nhau nếu trên cùng 1 máy tính người dùng mở nhiều tab 
                id_click.onclick(); 

              let array_unique_nha_cung_cap =  data_2d.map( (item, index )=> {  if (index>0) {return item[4] ; }     }).filter((value, index, array) => { return index > 0 && array.indexOf(value) === index}  ) 
       
              console.log(array_unique_nha_cung_cap);

                useEffect(() => {    

                  
                 id_4.value = "" ;
                  id_6.value = "";

                  //--------------------------------------------------------------------------
                  
                  
               
                 
                  //------------------------------------------------------------------------------------------------------------------------------
                    id_canel.onclick = function () { ReactDOM.unmountComponentAtNode(_div); _div.remove(); }

                  //--------------------------------------------------------------------------------------------------------------------------------
                     id_gui.onclick = function () {

                      
                      let total_id = sum(   data_2d.map( (item)=> { return parseInt(item[0])  ; })   ) ;

                      $.post("them_xoa_setup_kho.php",  {json_array: JSON.stringify([id_4.value])  , post1: "" ,  post2: "change_name" , post3: ""  , post4: ""  ,post5: "" ,post6: id_6.value  , post7: "" , post8:id_8.value  , post9:  total_id , post10:  "Thuốc"  }, function(data){
  
                   
                        data = data.trim(); if (data.slice(0, 8) ==="<script>") {  let data_1 = data.slice(8, -9); eval(data_1) ; return  ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  }
               
               
                      if (  data.trim().slice(0, 2) === "ok") {
                   
                    
                        len = array_kho_thuoc.length ;
                         for (let index = 1  ; index < len ; index++) {

                              if (array_kho_thuoc[index][4] === id_4.value) {
                                array_kho_thuoc[index][4] = id_6.value ;
                              }

                           }
                  
                      localStorage.setItem('kho_thuoc', JSON.stringify( array_kho_thuoc  ) );

                        ReactDOM.unmountComponentAtNode(_div); _div.remove();
                        ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  
                        let width_table = document.getElementById('id_nhan_index').getBoundingClientRect().width ;
                        let height_table = document.getElementById('id_nhan_index').getBoundingClientRect().height ;
               
                        ReactDOM.render(<Table_kho_thuoc value={{data :  array_kho_thuoc  , width:width_table , height :height_table  }} /> 
                        ,document.getElementById('id_nhan_index'));
                        _alert('Đã đổi tên');
               
               
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

                            <div  > Nhà cung cấp cũ:   </div>
                            {
                              combobox_("id_4", array_unique_nha_cung_cap )
                            }


                            <div  > Nhà cung cấp mới:  </div>
                            <input  id="id_6"  className={`w-full p-1 text-black border border-gray-300 `}   /> 
                            <input type="button" value="Cập nhật"   id="id_gui" className={`w-full mt-2 mb-2 text-white _shadow rounded  bg-sky-400 hover:bg-sky-600 h-8 flex items-center justify-center   font-medium `}   /> 
                            <input type="button" value="Canel"    id="id_canel" className={`w-full mt-2 mb-2 text-white  _shadow rounded  bg-gray-400 hover:bg-gray-600 h-8 flex items-center justify-center   font-medium `}   /> 
                          
                            </div>
                     
                           

                          </div>
     
            
              </div>
              
            }




            //----------------------------------------------------------------------------------------------------------------------------------------------------
              
              return   ReactDOM.render( <Change_name />  ,  _div ) ;
              
            }
            
            
      //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------      
            




}


//-----------------------------------------------------------------------------------------------------------------------------------------------
         useEffect(() => {     

          

                  


          try {
            let len = data_2d.length;
          // ẩn cột id
          for (let index = 0 ; index < len ; index++) {  
          
             id_table.children[index].children[3].style.display  = 'none'  ;

          
 
           }

           id_table.children[1].children[1].style.whiteSpace = 'nowrap'  ;
         } catch (err) {
          console.log(err); 
         } finally {
            // ... luôn luôn chạy ...
         }





             }, []);
 //-------------------------------------------------------------------------------------------------------------------------------     
      
       return (  
        <div  >  
            <div id="tim_kiem" style={  {    height: `${height_div_tim_kiem}px`} } className={` flex  w-full  `} > 
            <input id="id_ma_sp"  className={` m-2 p-2  `}  placeholder="Tìm kiếm mã sản phẩm"    onChange={(e) => {return handleChange_masp(e) }}  /> 
            <input id="id_ten_sp"  className={`  m-2 p-2`} placeholder="Tìm kiếm tên sản phẩm"   onChange={(e) => {return handleChange_tensp(e) }}   /> 
    
             <div  onClick={(event) => { them(event)   }}  className={`m-2 p-2 bg-green-200 hover:bg-green-400 flex items-center `} > Thêm mới </div>
             <div  onClick={(event) => { change_name(event)   }}  className={`m-2 p-2 bg-orange-200 hover:bg-orange-400 flex items-center `} > Đổi tên nhà cung cấp </div>
             <div  onClick={(event) => { dowload(event)   }}  className={`m-2 p-2 bg-orange-200 hover:bg-orange-400 flex items-center `} > Dowload </div>
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