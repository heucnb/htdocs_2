function Table(props) {
    
  let table_excel_height = props.value.height  ;
  let table_excel_width = props.value.width  ;
  let data_2d = props.value.data ;
     return (  
        <div style={  {    height: `${table_excel_height}px`, width :  `${table_excel_width}px`,      overflow: 'scroll',  position: 'relative',} }  >
        {data_2d.map((row, i) => {
         
         return (
            <div   style={{  display: "table-row" } }   >
                                {row.map((cell, j) => { return <div  style={  {    position: 'relative',   backgroundColor: "white" ,  border: "1px ridge #ccc", height: "20px", display: "table-cell", paddingLeft: "4px", paddingRight : "4px",  borderRightStyle: 'none', borderTopStyle: 'none', } }  > {cell}  </div> })}   
            </div> 

          );
        })}    
        
        </div>   

     );

 
    } ;