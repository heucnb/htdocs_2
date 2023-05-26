function Table_nguoc(props) {
 
    let data_2d = props.value.data ;
    let table_excel_height = props.value.height  ;
    let table_excel_width = props.value.width  ;

    var countjavascript = data_2d.length ;
    var coloumsjavascript = data_2d[countjavascript-1].length ; 
    let data_2d_nguoc = new Array(coloumsjavascript).fill(null).map((i)=> i = new Array(countjavascript).fill(null)) ;
  
   for(var c=0;c<coloumsjavascript;c++)
  {

   for(var r=0;r<countjavascript;r++)  
    {
        data_2d_nguoc[c][r] = data_2d[r][c] ;
    }
   }

  

   function xem_chi_tiet(event, col) {
console.log("xem chi tiet",data_2d_nguoc[1][col]);
$.post("/python/thit",  {post1:id_year.children[0].value   ,post2:data_2d_nguoc[1][col]  , post8:$("#id_8").val()}, function(data){
  let string_array = data.replaceAll("(","[").replaceAll(")","]")
let array = eval(string_array) 
let len = array.length ;
let len_col = array[0].length ;
let array_nguoc = new Array(len_col).fill(null).map((i)=> i = new Array(len).fill(null)) ;
 for (let index = 0  ; index < len ; index++) {
       for (let index_col = 0  ; index_col < len_col ; index_col++) { 
        array_nguoc[index_col][index] = array[index][index_col];

        }

   }
console.log(array_nguoc);

//--------------------------------------------------------------
let row_data_2d_nguoc = data_2d_nguoc.length ;

 for (let index = 0  ; index < row_data_2d_nguoc ; index++) { 

  data_2d_nguoc[index] = data_2d_nguoc[index].slice(0,1+col).concat(array_nguoc[index], data_2d_nguoc[index].slice(1+col));

  }


console.log(data_2d_nguoc);
//----------------------------------------------------------
var countjavascript = data_2d_nguoc.length ;
var coloumsjavascript = data_2d_nguoc[countjavascript-1].length ; 
let data_2d_nguoc_nguoc_tiep = new Array(coloumsjavascript).fill(null).map((i)=> i = new Array(countjavascript).fill(null)) ;

for(var c=0;c<coloumsjavascript;c++)
{

for(var r=0;r<countjavascript;r++)  
{
  data_2d_nguoc_nguoc_tiep[c][r] = data_2d_nguoc[r][c] ;
}
}

let width_table = document.getElementById('id_nhan').getBoundingClientRect().width ;
let height_table = document.getElementById('id_nhan').getBoundingClientRect().height ;

// remove onClick

for (let index = 0;  index < len +1; index++) { 

  data_2d_nguoc_nguoc_tiep[index+col][0] = "";
  }



ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan'));  
ReactDOM.render(<Table_nguoc value={{data :  data_2d_nguoc_nguoc_tiep  , width:width_table , height :height_table , xem_chi_tiet_click : true }} /> 
,document.getElementById('id_nhan'));


});



   }



      useEffect(() => {   

        if (props.value.xem_chi_tiet_click) {
          
        } else {

          for (let index_j = 0 , len = data_2d_nguoc[0].length ; index_j < len ; index_j++) {  
             
            id_table_nguoc.children[2].children[index_j].style.display ="none" ;
            id_table_nguoc.children[3].children[index_j].style.display ="none" ;
           }
          
        }

             


            }, []);

 
   return (  
    <div  id="id_table_nguoc"    style={  {   height: `${table_excel_height}px`, width :  `${table_excel_width}px`,      overflow: 'scroll',  position: 'relative',} }  >
    {data_2d_nguoc.map((row, i) => {
     
     return (
        <div   style={{  display: "table-row" } }   >
          
                            {row.map((cell, j) => { return <div onClick={(event) => { if (i===0&&["Xem chi tiết"].includes(data_2d_nguoc[0][j]) ) { xem_chi_tiet(event, j)  }    }}  className={` ${((  )=>{ if (i===0&&["Xem chi tiết"].includes(data_2d_nguoc[0][j]) ) {  return " _shadow rounded bg-sky-500 hover:bg-sky-700"}  })()}  `} style={  {   whiteSpace: (function(){    if ([0,2].includes(i)&&j>0 ) { return 'normal'  } else { return 'nowrap'  }         })(),  position: 'relative',    border: "1px ridge #ccc", height: "20px", display: "table-cell", paddingLeft: "4px", paddingRight : "4px",  borderRightStyle: (function(){    if (j===data_2d_nguoc[0].length -1) { return 'ridge'  } else { return 'none'  }         })(), borderTopStyle: (function(){    if (i===0 ) { return 'ridge'  } else { return 'none'  }         })(), } }  > { cell.toLocaleString()}  </div> })} </div> 

      );
    })}    
    
    </div>   

 );

 
    } ;