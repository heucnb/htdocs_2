function from_bao_cao_thang_thit(props) {
    
    useEffect(() => {     
  
    
     function bao_cao_thang(){
        let width_table = document.getElementById('id_nhan').getBoundingClientRect().width ;
        let height_table = document.getElementById('id_nhan').getBoundingClientRect().height ;
         id_gui.style.color = "blue";
        //  id_gui_1.style.color = "black";
       
        
            $.post("/python/thit_12",  {post1:id_year.children[0].value  , post8:id_8.value}, function(data){
           
  data = data.trim(); if (data.slice(0, 8) ==="<script>") {  let data_1 = data.slice(8, -9); eval(data_1) ; return  ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  }
   
              
                let string_array = data.replaceAll("(","[").replaceAll(")","]")
          let array = eval(string_array) 
          console.log(array);
       ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan'));  
       ReactDOM.render(<Table_nguoc value={{data :  array  , width:width_table , height :height_table   }} /> 
       ,document.getElementById('id_nhan'));

    
      
             });
     } 
 
     id_gui.onclick = bao_cao_thang ;
    
    //-------------------------------------------------------------------------------------------------------------------------
     id_year.children[0].style.background = 'rgb(236,252,203)';
     }, []);
    
      return (  
         <div  className={ 'grow flex flex-col flex-wrap  '}   >
             <div className={ ' w-full flex bg-lime-100'}  >  
             <div id='id_year' className={` w-24  `} > <Select_nam /> </div>
              <input id="id_gui" className={` w-44  bg-lime-100`} type="button" value="Tra"/>
             </div>
             <div className={ ' w-full grow '} id="id_nhan"  >   </div>
 
        
         </div>   
 
      );
 
  
     } ;