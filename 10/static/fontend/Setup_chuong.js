function Setup_chuong(props) {
    let data_them = props.value.data ;

    let data_2d = useRef(  array_chuong_thit  );
  
            if (data_them !== false) {
                data_2d.current = data_them ;   
            }
          

            console.log(data_2d.current);
            let ref_them_chi_nhanh =  useRef(null) ;  
        

            function them_chuong(index) {

                let data_them =   ["Thịt 1", "Thịt 2", "Thịt 3", "Thịt 4", "Thịt 5", "Thịt 6"] ;
                
            

                    data_2d.current[index][1].push(data_them)   ;
                    
                  
                    

                    ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  
                    ReactDOM.render(<Setup_chuong value={{data :  data_2d.current    }} /> 
                    ,document.getElementById('id_nhan_index'));
                


            }


               useEffect(() => {    

                ref_them_chi_nhanh.current.onclick = function () {

                    let data_them =   [["Chi nhánh 2", [
           
                        ["Thịt 1", "Thịt 2", "Thịt 3", "Thịt 4", "Thịt 5", "Thịt 6"],
                        ["Thịt 7", "Thịt 8", "Thịt 9", "Thịt 10", "", ""]
                        ] ]]

                        let data_them_xong =      data_2d.current.concat(data_them)   
    
                        ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  
                        ReactDOM.render(<Setup_chuong value={{data :  data_them_xong    }} /> 
                        ,document.getElementById('id_nhan_index'));
                    
    
    
                }

                //---------------------------------------------------------------------------------------------------
         
     
     

                    }, []);
           
       return (  
        
            <div className={` flex flex-col  `} > 
            {data_2d.current.map(( item ,index )=>{ return  <div  > 
                    <div className={` flex justify-center bg-red-100 `} > {item[0]}  </div> 

                    <div className={` bg-green-100 `} style={  {    position: 'relative', } }  >
                    {item[1].map((row, i) => {

                    return (
                        <div   style={{  display: "table-row" } }   >
                                            {row.map((cell, j) => { return <div  style={  { height: "20px", width : "80px" ,  position: 'relative',     border: "1px ridge #ccc", display: "table-cell", paddingLeft: "4px", paddingRight : "4px",  borderRightStyle: (function(){    if (j===row.length -1) { return 'ridge'  } else { return 'none'  }         })(), borderTopStyle:  (function(){    if (i===0 ) { return 'ridge'  } else { return 'none'  }         })(), } }  
                                            
                                            onClick={(event)=>{ _rename([cell,index,i,j ]) }} 
                                            >  {cell}    </div> })}   
                        </div> 

                    );
                    })}    

                    </div> 
                    <div className={` bg-green-100 `} onClick={(event)=>{ them_chuong(index) }}   >  Thêm chuồng </div>   

                    </div>

                   

              })}
    

              <div className={` flex justify-center bg-red-100 `} ref={ ref_them_chi_nhanh  }  >  Thêm chi nhánh </div>




              
                
             </div>

            
            
        
  
       );
  
   
      } ;