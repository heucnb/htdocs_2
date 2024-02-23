function Setup_chuong(props) {
    let data_them = props.value.data ;

            if (data_them !== false) {
                array_chuong_thit = JSON.parse(JSON.stringify(data_them));
            }


              //tải cáu hình chuòng thịt cho công ty

        array_chuong_thit =     JSON.parse(localStorage.getItem("chuong"))  ;
  
            let data_2d = useRef(  array_chuong_thit  );

            console.log(data_2d.current);
            let ref_them_chi_nhanh =  useRef(null) ;  
        

            function them_chuong(event,item ,index) {

             
                let count = data_2d.current[index][1].length ;
         

                let count_col = data_2d.current[index][1][count-1].length ;
               
                let sum_chuong = (count-1)*6 + count_col+1;

                let data_them =  "Thịt "+sum_chuong;
      // nếu tên của chuồng thêm vào trùng với tên của chuồng trước đó thì sửa lại tên để không trùng

          
                 for (let i = 0 , len = data_2d.current[index][1].length ; i < len ; i++) {  
                 
                     for (let j = 0 , len_j = data_2d.current[index][1][i].length ; j < len_j ; j++) {
                     

                            if (data_them === data_2d.current[index][1][i][j]) {

                                data_them =  data_2d.current[index][1][i][j] + "-"+sum_chuong;
                            }

                       }

                 }



                if (count_col<=5) {
                    data_2d.current[index][1][count-1].push(data_them)   ;   
                }else{
                    data_2d.current[index][1].push([data_them])   ;   
              
                    
                }
          
                //----------------------------------------------------
                let array_chuong =[];
                let array_khu =[];
                 for (let index = 0 , len = data_2d.current.length ; index < len ; index++) { 
                   // chuyển mảng 2 chiều thành 1 chiều
                   array_chuong[index] = array2d_to_1d(data_2d.current[index][1]) ;

                    array_khu[index] = data_2d.current[index][0] ;

                  }

                  let array_khu_data = array_chuong.map(( i, index )=>{return  i.map(( j, index_j )=>{return j = array_khu[index]  }) }) ;

                  $.post("sua_chuong_thit.php", {  post1: JSON.stringify(  array2d_to_1d(array_chuong) ) , post2: JSON.stringify(  array2d_to_1d(array_khu_data) ) ,  post8:id_8.value  , post9:"", post10:"", post11:"", post12:"" , post13:data_2d.current[0][2] }, function(data){
        
     
                    data = data.trim(); if (data.slice(0, 8) ==="<script>") {  let data_1 = data.slice(8, -9); eval(data_1) ; return  ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  }
                      
                          if ( data.trim().slice(0, 2) !== "ok") {

                              _alert(data) ;
                          } else {
                            
                            data_2d.current[0][2] = data.split("|_|")[1] ;
                            array_chuong_thit[0][2] =  data_2d.current[0][2] ;
                  
                            console.log(data_2d.current[0][2]);
                            // lưu cấu hình chuồng vào local storage
                     
                            localStorage.setItem('chuong', JSON.stringify(array_chuong_thit)  );
                            ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  
                            ReactDOM.render(<Setup_chuong value={{data :  data_2d.current    }} /> 
                            ,document.getElementById('id_nhan_index'));
                            _alert("Cập nhật thành công") ;
                          }
                                   
                              
                          });
                    

             
                


            }


               useEffect(() => {    

                ref_them_chi_nhanh.current.onclick = function () {

                    let sum_chi_nhanh = data_2d.current.length  ;


                    let data_them =   [["Chi nhánh mới "+ (sum_chi_nhanh + 1), [ ["Thịt 1"], ] ]] ;
          // nếu tên của chi nhánh thêm vào trùng với tên của chi nhánh trước đó thì sửa lại tên để không trùng
         
          for (let index = 0 , len = sum_chi_nhanh ; index < len ; index++) {
                if (data_them[0][0] === data_2d.current[index][0] ) {
                    data_them =   [[data_2d.current[index][0]+"-" +(sum_chi_nhanh+1), [ ["Thịt 1"], ] ]] ;
                }

             }          


                        let data_them_xong =      data_2d.current.concat(data_them)    ;
                     
         //----------------------------------------------------
         let array_chuong =[];
         let array_khu =[];
          for (let index = 0 , len = data_them_xong.length ; index < len ; index++) { 
            // chuyển mảng 2 chiều thành 1 chiều
            array_chuong[index] = array2d_to_1d(data_them_xong[index][1]) ;

             array_khu[index] = data_them_xong[index][0] ;

           }



           let array_khu_data = array_chuong.map(( i, index )=>{return  i.map(( j, index_j )=>{return j = array_khu[index]  }) }) ;

           $.post("sua_chuong_thit.php", {  post1: JSON.stringify(  array2d_to_1d(array_chuong) ) , post2: JSON.stringify(  array2d_to_1d(array_khu_data) ) ,  post8:id_8.value  , post9:"", post10:"", post11:"", post12:"" , post13:data_2d.current[0][2]   }, function(data){
 

             data = data.trim(); if (data.slice(0, 8) ==="<script>") {  let data_1 = data.slice(8, -9); eval(data_1) ; return  ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  }
               
                   if ( data.trim().slice(0, 2) !== "ok") {

                       _alert(data) ;
                   } else {

                    data_them_xong[0][2] = data.split("|_|")[1] ;
                    array_chuong_thit[0][2] =   data_them_xong[0][2]  ;
             

                     // lưu cấu hình chuồng vào local storage
                     localStorage.setItem('chuong', JSON.stringify(array_chuong_thit)  );
                     
                     ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  
                     ReactDOM.render(<Setup_chuong value={{data :  data_them_xong    }} /> 
                     ,document.getElementById('id_nhan_index'));
                     _alert("Cập nhật thành công") ;
                   }
                            
                       
                   });
             
    
    
                }

              

                //---------------------------------------------------------------------------------------------------
         
     
     

                    }, []);
           
       return (  
        
            <div className={` flex flex-col  `} > 
            {data_2d.current.map(( item ,index )=>{ return  <div  > 
                    <div className={` flex justify-center bg-red-100 hover:bg-sky-700 `  } 
                         onClick={(event)=>{  let khu_cu = (index+1)+"."+ item[0] ; let chuong_cu = ((0*6)+(0+1)) +"." + array_chuong_thit[index][1][0][0]  ;    _rename( 0 , [array_chuong_thit[index][1][0][0] ,index,0,0 , item, khu_cu, chuong_cu]  )   }} 
                    
                    > {item[0]}  </div> 

                    <div className={` bg-green-100 `} style={  {    position: 'relative', } }  >
                    {item[1].map((row, i) => {

                    return (
                        <div   style={{  display: "table-row" } }   >
                                            {row.map((cell, j) => { return <div  style={  { height: "20px", width : "80px" ,  position: 'relative',     border: "1px ridge #ccc", display: "table-cell", paddingLeft: "4px", paddingRight : "4px",  borderRightStyle: (function(){    if (j===row.length -1) { return 'ridge'  } else { return 'none'  }         })(), borderTopStyle:  (function(){    if (i===0 ) { return 'ridge'  } else { return 'none'  }         })(), } }  
                                            
                                            onClick={(event)=>{  let khu_cu = (index+1)+"."+ item[0] ; let chuong_cu = ((i*6)+(j+1)) +"." + cell  ;    _rename( 1 , [cell,index,i,j, item, khu_cu, chuong_cu]  )   }} 
                                            className={`  hover:bg-sky-700 `}      >  {cell}    </div> })}   
                        </div> 

                    );
                    })}    

                    </div> 
                    <div className={` bg-green-100 hover:bg-sky-700 `} onClick={(event)=>{ them_chuong(event,item ,index) }}   >  Thêm chuồng </div>   

                    </div>

                   

              })}
    

              <div className={` flex justify-center bg-red-100 hover:bg-sky-700`} ref={ ref_them_chi_nhanh  }  >  Thêm chi nhánh </div>


                
             </div>

            
            
        
  
       );
  
   
      } ;