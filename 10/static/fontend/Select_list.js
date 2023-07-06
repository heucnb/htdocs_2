function Select_list(props) {
       
       let blur = false ;
       let trai_value =useRef(props.value.trai_value) ; 
       let trai_ten_day_du = useRef(props.value.trai_ten_day_du) ;
       let value_id_tim = useRef("") ;
          useEffect(() => {    
              id_8.value =  document.array_option[0] ;     
              id_8.children[1].style.display = "none";
              id_8.focus() ;
              id_8.onmousedown = function (e) {
                 console.log(2222222);
                   
                     id_8.children[1].style.display = "flex"; 
                   
                 let all_trai =    id_8.children[1].children ;

                  for (let index = 1 , len = all_trai.length ; index < len ; index++) {

                     all_trai[index].onmousedown = function (event) {

                      chon_trai(event)  ;
                            
                     }
                    }

             

                    //-----------------------------------------------------------------------------------

                    id_8.addEventListener("blur", myFunction);

                     function myFunction() {
                            console.log(44444);
                            if (blur===false) {

                                   console.log("blurrrrrrrrrrrrrrrrrrr");
                                   id_8.children[1].style.display = "none";
                                    id_8.removeEventListener("blur", myFunction);
                                   
                            }else{
                                   id_8.removeEventListener("blur", myFunction);   
                            }
               
                     
                     }

           
                           
                    
              }

              //---------------------------------------------------------------------------------
                    id_tim.onmousedown = function (event) {
                     blur = true ;
                   console.log(11111111111);
                   //-----------------------------------------------------
                   id_tim.addEventListener("blur", myFunction_2);
                   function myFunction_2() {  
                     console.log('id_tim blurrrrrrrrrrrrrrrrrrrr');

                     if (blur===true) {

                            blur = false ; 
                            id_8.children[1].style.display = "none"; 
                             id_tim.removeEventListener("blur", myFunction_2);
                            
                     }else{
                            id_tim.removeEventListener("blur", myFunction_2); 
                     }

                   

                      }

                     //-----------------------------------------------------------------------------------
                     id_tim.onkeydown = function (event) {
                            setTimeout(() => {
                                
                                   value_id_tim.current = event.target.value ; 
                                   console.log(value_id_tim.current);
                            
                                   let trai_value_loc = [] ;
                                   let trai_ten_day_du_loc = [] ;
                                    for (let index = 0 , len = document.array_option_ten_day_du.length ; index < len ; index++) { 
                                          if (removeAccents(document.array_option_ten_day_du[index]).includes(  removeAccents( value_id_tim.current ) ) ) {
                                    trai_ten_day_du_loc.push(document.array_option_ten_day_du[index]) ;
                                    trai_value_loc.push( document.array_option[index]) ;           
                                          }
                                        

                                     }

                         


                            console.log(trai_value_loc);
                            // khi render lại thì id_tim mất focus nên id_tim.addEventListener("blur", myFunction_2); sẽ chạy sau render
                         
                            ReactDOM.unmountComponentAtNode(id_select); 
                            ReactDOM.render( /*#__PURE__*/React.createElement(Select_list, { value: { trai_value: trai_value_loc , trai_ten_day_du: trai_ten_day_du_loc } }), id_select);
                   
                                          setTimeout(() => {
                                                 id_8.children[1].style.display = "flex";  
                                                 id_tim.focus() ;
                                                 blur = true ;
                                                 id_tim.addEventListener("blur", myFunction_3);
                                                 function myFunction_3() {  
                                                 console.log('id_tim blurrrrrrrrrrrrrrrrrrrr33333');
                            
                                                 if (blur===true) {
                            
                                                        blur = false ; 
                                                        id_8.children[1].style.display = "none"; 
                                                        id_tim.removeEventListener("blur", myFunction_3);
                                                        
                                                 }else{
                                                        id_tim.removeEventListener("blur", myFunction_3); 
                                                 }
                            
                                                 
                            
                                                 }
                                                 // mô phỏng lại hành động id_tim.onmousedown trước đó
                                                 id_tim.onmousedown();
                            
                                                 id_tim.value = removeAccents( value_id_tim.current )  ;
                            
                            
                                                 
                                          }, 0);
       
                           
                                   
                            }, 0);

                    
                   
                     }



              }

            
             


            }, []);
       function chon_trai(event) {
              console.log(333);
              id_8.value =  event.target.value ;   
              id_8.children[0].textContent = event.target.textContent ;
              id_8.children[1].style.display = "none";
              id_8.focus() ;

              //----------------------------------------------------------------------------
           //thực hiện thêm các hàm khác ngoài Select_list mẫu
           if (id_click!== undefined) { id_click.onclick(); }
              
             
           
       }
      
 
       return ( <button  id="id_8" className={` focus:outline-0  bg-green-400 w-56 `} type="button"    >
              <div className={` whitespace-nowrap flex justify-start `} >  {document.array_option_ten_day_du[0] } </div>
              <div className={`h-3/4 overflow-y-scroll  bg-slate-100   flex flex-col absolute justify-start items-start _shadow mt-1 z-40 `}  > 
              <input id="id_tim"  style={  {  padding: 1, }  } className={`  h-6  outline-0  w-full  `} type={"text"} placeholder="Filter"  /> 
              { trai_value.current.map(( i, index )=>{  return <button type="button"  className={`whitespace-nowrap hover:bg-gray-400 hover:bg-opacity-50 w-full pl-2 flex items-start  justify-start `}  value ={trai_value.current[index] } >{trai_ten_day_du.current[index] }</button> })}
          
                </div>
          
        </button>
  
       );
  
   
      } ;