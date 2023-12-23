function Input_find(props) {
    
    function select_click(event, dom_1, dom_2, dom_3) {
  
     dom_1.value =  event.target.textContent.trim() ;
       ReactDOM.unmountComponentAtNode(dom_3); 
       dom_2.focus();
    }

  

       useEffect(() => {    

         let count_children = Input_find_id_0.children.length -1 ;

          for (let index = 0 ; index < count_children ; index++) { 

            Input_find_id_0.children[index+1].onmousedown = function (event) {  return select_click(event , props.value.dom_1 , props.value.dom_2,  props.value.dom_3) ; }


           }

        

            }, []);
  
    let data = props.value.data ;

       return (  
         <div  className={` relative w-full `} > 
            
            <div  id="Input_find_id_0" className={` flex flex-col absolute _shadow w-full bg-orange-100  justify-start items-start _shadow mt-1 z-40`}  >
          {data.map((item, i) => {       if (i<20) { return <div className={` whitespace-nowrap hover:bg-gray-400 hover:bg-opacity-50 w-full pl-2 flex items-start  justify-start   `}  >  {item} </div> }        } ) }
          
          </div> 
         </div>
           
  
       );
  
   
      } ;