function Table_xoa_add_user(props) {
    
    let table_excel_height = props.value.height  ;
    let table_excel_width = props.value.width  ;
    let data_2d = props.value.data ;
    
    function xoa(event, rIndex) {
        console.log('xoaaaaaaaaa');

      }
      
      
       return (  
          <div id="id_table"  style={  {    height: `${table_excel_height}px`, width :  `${table_excel_width}px`,     overflow: 'scroll',  position: 'relative',} }  >
          {data_2d.map((row, i) => {
           
           return (
              <div   style={{  display: "table-row" } }   >
                               <div  onClick={(event) => { ((  )=>{ if ([0,1].includes(i)) { } else {  xoa(event, i)   }  })()    }} className={` ${((  )=>{ if ([0,1].includes(i)) { } else { return "     bg-sky-500 hover:bg-sky-700"}  })()}  `} style={  {    position: 'relative',   border: "1px ridge #ccc", height: "20px", display: "table-cell", paddingLeft: "4px", paddingRight : "4px",  borderRightStyle: 'none',  borderTopStyle: (function(){    if (i===0 ) { return 'ridge'  } else { return 'none'  }         })(),  } }  > { (function(){    if ([0,1].includes(i) ) { return ''  } else { return 'Xoá'  }          })()  }</div>  
                            {row.map((cell, j) => { return <div  style={  {    position: 'relative',    border: "1px ridge #ccc", height: "20px", display: "table-cell", paddingLeft: "4px", paddingRight : "4px",  borderRightStyle: (function(){    if (j===data_2d[0].length -1) { return 'ridge'  } else { return 'none'  }         })(), borderTopStyle:  (function(){    if (i===0 ) { return 'ridge'  } else { return 'none'  }         })(), } }   onClick={(event) => { if (  ![0].includes(i)&&j!==3 ) { _rename_user(j, row , i) }    }}    > {  cell  }  </div> })} 
              </div> 
  
            );
          })}    
          
          </div>   
  
       );
  
   
      } ;