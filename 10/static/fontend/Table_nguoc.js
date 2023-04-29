function Table_nguoc(props) {
    let data_2d = props.value.data ;
    var countjavascript = data_2d.length ;
    var coloumsjavascript = data_2d[1].length ; 
    let data_2d_nguoc = new Array(coloumsjavascript).fill(null).map((i)=> i = new Array(countjavascript).fill(null)) ;
  
   for(var c=0;c<coloumsjavascript;c++)
  {

   for(var r=0;r<countjavascript;r++)  
    {
        data_2d_nguoc[c][r] = data_2d[r][c] ;
    }
   }

 

     return (  
        <div  className={ '   '}   >
        {data_2d_nguoc.map((row, i) => {
          return (
            <div  className={ ' flex w-full border border-sky-500  '}     >
                                {row.map((cell, j) => { return <div className={ `  ${j === 0?'w-96 sticky':'w-16'}  border border-red-700 `}  > {cell}  </div> })}   
            </div> 

          );
        })}    
        
        </div>   

     );

 
    } ;