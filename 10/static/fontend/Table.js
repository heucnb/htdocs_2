function Table(props) {
    

    let data_2d = props.value.data ;
     return (  
        <div  className={ '   '}   >
        {data_2d.map((row, i) => {
          return (
            <div  className={ ' flex w-full border border-sky-500  '}     >
                                {row.map((cell, j) => { return <div className={ `  flex  ${j === 0?'w-40':'w-16'}  border border-sky-500  `}  > {cell}  </div> })}   
            </div> 

          );
        })}    
        
        </div>   

     );

 
    } ;