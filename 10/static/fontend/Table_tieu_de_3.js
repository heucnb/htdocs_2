function Table_tieu_de_3(props) {

    let table_excel_height = props.value.height  ;
    let table_excel_width = props.value.width  ;
    let data_2d = props.value.data ;
       useEffect(() => {    
   

       
         let len = data_2d.length;
         // ẩn cột id
         for (let index = 0 ; index < len ; index++) {  
         
            id_table.children[index].children[2].style.display  = 'none'  ;

          }
        

             for (let index = 1  ; index < len ; index++) { 
               // xoá dữ liệu
               id_table.children[index].children[0].onclick = function (e) {
         
                  $.post("xuat_heo_quan_ly.php", { post1: data_2d[index][2],  post8:id_8.value , post4: "xoa" }, function(data){
			
        
                     data = data.trim(); if (data.slice(0, 8) ==="<script>") {  let data_1 = data.slice(8, -9); eval(data_1) ; return  ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  }
                   
                           
                           if (data.trim() === "ok") {
                              id_table.children[index].children[0].onclick = "" ;
                          
                              id_table.children[index].style.backgroundColor = '#939597'  ;
                              id_table.children[index].style.color = '#939597'  ;
                         
                            

                           }
                            else {
                             _alert(data.trim())
                          
                           }
                                    
                             
                           });


                  
               }

              }



          }, []);
       return (  
          <div id="id_table" style={  {  height: `${table_excel_height}px`, width :  `${table_excel_width}px`,      overflow: 'scroll',  position: 'relative',} }  >
          {data_2d.map((row, i) => {
           
           return (
              <div  className={` bg-white hover:bg-slate-100   `} style={{  display: "table-row" , position :(function(){    if (i===0 ) { return 'sticky'  }       })() , top: 0, zIndex : 1  } }   >
                                  {row.map((cell, j) => { return <div  className={` ${((  )=>{ if ([0].includes(j)&&i!==0 ) {return "   bg-sky-500 hover:bg-sky-700" } else { return " bg-inherit"  }  })()}  `}  style={  {    position: 'relative',    border: "1px ridge #ccc", height: "20px", display: "table-cell", paddingLeft: "4px", paddingRight : "4px",  borderRightStyle: (function(){    if (j===data_2d[0].length -1) { return 'ridge'  } else { return 'none'  }         })(), borderTopStyle:  (function(){    if (i===0 ) { return 'ridge'  } else { return 'none'  }         })(), } }  > {(function(){  if (+cell===0|| cell==="0000-00-00") { return "" }else{ return cell }         })()}  </div> })}   
              </div> 
  
            );
          })}    
          
          </div>   
  
       );
   
      } ;