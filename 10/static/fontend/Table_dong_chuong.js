function Table_dong_chuong(props) {
    
    let table_excel_height = props.value.height  ;
    let table_excel_width = props.value.width  ;
    let data_2d = props.value.data ;
    console.log(data_2d);
    let len = data_2d.length ;
    let lo = [] ;
// tên khu không bao gồm mã id
     for (let index = 0 ; index < len ; index++) { 
        console.log("all tên khu",data_2d[index][0]);
    
        let result = data_2d[index][0].indexOf(".")+1;
        let len = data_2d[index][0].length ;


        data_2d[index][0] = data_2d[index][0].slice(result, len);
     

      }
      // tên chuồng không bao gồm mã id

      for (let index = 0 ; index < len ; index++) { 
        console.log("all tên chuông",data_2d[index][1]);
    
        let result = data_2d[index][1].indexOf(".")+1;
        let len = data_2d[index][1].length ;


        data_2d[index][1] = data_2d[index][1].slice(result, len);
     

      }

         // tên lô không bao gồm mã id

      for (let index = 0 ; index < len ; index++) { 
       
       lo[index]= data_2d[index][2] ;
       console.log("all tên lô", lo[index] );
        let result = data_2d[index][2].indexOf("_")+1;
        let len = data_2d[index][2].length ;


        data_2d[index][2] = data_2d[index][2].slice(result, len);
     

      }


    
    function dong_chuong(event, row,i) {

       
        $.post("dong_chuong.php",  {post5: lo[i] , post4: data_2d[i][3] , post8:id_8.value}, function(data){
  
                   
         data = data.trim(); if (data.slice(0, 8) ==="<script>") {  let data_1 = data.slice(8, -9); eval(data_1) ; return  ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  }


       if (data.trim() === "ok") {
    
        id_table.children[i].style.display = 'none' ;
           
           } else {
       
    
          _alert(data.trim());
       
   
      }
    
    });

      }
      
      
       return (  
          <div id="id_table"  style={  {    height: `${table_excel_height}px`, width :  `${table_excel_width}px`,     overflow: 'scroll',  position: 'relative',} }  >
          {data_2d.map((row, i) => {
           
           return (
              <div  className={`bg-white hover:bg-slate-100   `} style={{  display: "table-row" } }   >
                               <div  onClick={(event) => { ((  )=>{ if ([0].includes(i)) { } else {  dong_chuong(event, row,i)   }  })()    }} className={` ${((  )=>{ if ([0].includes(i)) {return "bg-inherit" } else { return "     bg-sky-500 hover:bg-sky-700"}  })()}  `} style={  {    position: 'relative',   border: "1px ridge #ccc", height: "20px", display: "table-cell", paddingLeft: "4px", paddingRight : "4px",  borderRightStyle: 'none',  borderTopStyle: (function(){    if (i===0 ) { return 'ridge'  } else { return 'none'  }         })(),  } }  > { (function(){    if ([0].includes(i) ) { return 'Lựa chọn'  } else { return 'Đóng chuồng'  }          })()  }</div>  
                            {row.map((cell, j) => { return <div  style={  {    position: 'relative',    border: "1px ridge #ccc", height: "20px", display: "table-cell", paddingLeft: "4px", paddingRight : "4px",  borderRightStyle: (function(){    if (j===data_2d[0].length -1) { return 'ridge'  } else { return 'none'  }         })(), borderTopStyle:  (function(){    if (i===0 ) { return 'ridge'  } else { return 'none'  }         })(), } }    > {  cell  }  </div> })} 
              </div> 
  
            );
          })}    
          
          </div>   
  
       );
  
   
      } ;