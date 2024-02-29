function Khoa_du_lieu(props) {

  let table_excel_height = props.value.height  ;
  let table_excel_width = props.value.width  ;
  let data_2d = props.value.data ;
     useEffect(() => {    
 
     
       let len = data_2d.length;
 

           for (let index = 1  ; index < len ; index++) { 
             // xoá dữ liệu
             id_table.children[index].children[0].onclick = function (e) {

              // id_table.children[index].children[1].textContent

                $.post("fuction__from_khoa_ngay_nhap_du_lieu.php", { post1: id_table.children[index].children[1].textContent,   post8:id_8.value  }, function(data){
    
      
                   data = data.trim(); if (data.slice(0, 8) ==="<script>") {  let data_1 = data.slice(8, -9); eval(data_1) ; return  ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  }
                 
                         
                         if (data.trim() === "ok") {
                          _alert("Cập nhật thành công")
                          

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
                                {row.map((cell, j) => { return <div    contentEditable="true"  className={` ${((  )=>{ if ([0].includes(j)&&i!==0 ) {return "   bg-sky-500 hover:bg-sky-700" } else { return " bg-inherit"  }  })()}  `}  style={  {     position: 'relative',    border: "1px ridge #ccc", height: "20px", display: "table-cell", paddingLeft: "4px", paddingRight : "4px",  borderRightStyle: (function(){    if (j===data_2d[0].length -1) { return 'ridge'  } else { return 'none'  }         })(), borderTopStyle:  (function(){    if (i===0 ) { return 'ridge'  } else { return 'none'  }         })(), } }  > {  cell  }  </div> })}   
            </div> 

          );
        })}    
        
        </div>   

     );
 
    } ;