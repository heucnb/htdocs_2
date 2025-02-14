function Table(props) {
    
  let table_excel_height = props.value.height  ;
  let table_excel_width = props.value.width  ;
  let data_2d = props.value.data ;
  var countjavascript = data_2d.length ;
  var coloumsjavascript = data_2d[countjavascript-1].length ; 
// xem có chuyển dòng thành cột không


      if (props.value.convert == true) {
               // chuyển dòng thành cột

               let data_2d_nguoc = new Array(coloumsjavascript).fill(null).map((i)=> i = new Array(countjavascript).fill(null)) ;
      
               for(var c=0;c<coloumsjavascript;c++)
            {
            
               for(var r=0;r<countjavascript;r++)  
               {
                  data_2d_nguoc[c][r] = data_2d[r][c] ;
               }
               }



         return (  
            <div id="id_table"
            //  style={  {  height: `${table_excel_height}px`, width :  `${table_excel_width}px`,      overflow: 'scroll',  position: 'relative',} } 

              >
            {data_2d_nguoc.map((row, i) => {
             
             return (
                <div   style={{  display: "table-row" } }   >
                                    {row.map((cell, j) => { return <div  style={  {  whiteSpace : 'nowrap' ,  position: 'relative',   backgroundColor: "white" ,  border: "1px ridge #ccc", height: "20px", display: "table-cell", paddingLeft: "4px", paddingRight : "4px",  borderRightStyle: (function(){    if (j===data_2d[0].length -1) { return 'ridge'  } else { return 'none'  }         })(), borderTopStyle:  (function(){    if (i===0 ) { return 'ridge'  } else { return 'none'  }         })(), } }  > {(function(){  if (+cell===0) { return "" }else{ return cell }         })()}  </div> })}   
                </div> 
    
              );
            })}    
            
            </div>   
    
         );
    
      



      }else
      {



         return (  
            <div id="id_table" style={  {  height: `${table_excel_height}px`, width :  `${table_excel_width}px`,      overflow: 'scroll',  position: 'relative',} }  >
            {data_2d.map((row, i) => {
             
             return (
                <div   style={{  display: "table-row" } }   >
                                    {row.map((cell, j) => { return <div  style={  {  whiteSpace : 'nowrap' ,  position: 'relative',   backgroundColor: "white" ,  border: "1px ridge #ccc", height: "20px", display: "table-cell", paddingLeft: "4px", paddingRight : "4px",  borderRightStyle: (function(){    if (j===data_2d[0].length -1) { return 'ridge'  } else { return 'none'  }         })(), borderTopStyle:  (function(){    if (i===0 ) { return 'ridge'  } else { return 'none'  }         })(), } }  > {(function(){  if (+cell===0) { return "" }else{ return cell }         })()}  </div> })}   
                </div> 
    
              );
            })}    
            
            </div>   
    
         );
    
    



      }




    



 
    } ;