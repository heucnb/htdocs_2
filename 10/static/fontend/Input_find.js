function Input_find(props) {
    
    function select_click(event, dom_1, dom_2, dom_3) {
  
     dom_1.value =  event.target.textContent.trim() ;
       ReactDOM.unmountComponentAtNode(dom_3); 
       dom_2.focus();
    }
  
    let data = props.value.data ;

       return (  
          <div className={` flex flex-col absolute bg-orange-200 `}  >
          {data.map((item, i) => {       if (i<20) { return <div    onClick={(event)=>{ select_click(event , props.value.dom_1 , props.value.dom_2,  props.value.dom_3) }} >  {item} </div> }        } ) }
          
          </div>   
  
       );
  
   
      } ;