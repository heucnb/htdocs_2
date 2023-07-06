function from_dien_bien_thit(props) {
    
    useEffect(() => {     
  

    
     function bao_cao_nam(){
        let width_table = document.getElementById('id_nhan').getBoundingClientRect().width ;
        let height_table = document.getElementById('id_nhan').getBoundingClientRect().height ;
         id_gui.style.color = "blue";
         id_gui_tuan.children[0].style.color  = "black";
         id_gui_tuan.children[0].options[0].text = "Tra theo tuần"
         id_gui_thang.children[0].options[0].text = "Tra theo tháng"
        id_gui_thang.children[0].style.color  = "black";
        
            $.post("/python/thit_dien_bien",  {post1: id_year.children[0].value  , post8:id_8.value,post2:"00-00"  }, function(data){
               
             
  data = data.trim(); if (data.slice(0, 8) ==="<script>") {  let data_1 = data.slice(8, -9); eval(data_1) ; return  ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  }
  
                let string_array = data.replaceAll("(","[").replaceAll(")","]")
          let array = eval(string_array) 
          console.log(array);
          ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan'));  
          ReactDOM.render(<Table value={{data :  array  , width:width_table , height :height_table   }} /> 
          ,document.getElementById('id_nhan'));
   
      
             });
     } 
 
     id_gui.onclick = bao_cao_nam ;
    
//------------------------------------------------------------------------------------------------------------
     
     function bao_cao_thang(){
     
        let select_value = id_gui_thang.children[0].value ;
        if (select_value === "") {
            
        } else {
          
        let width_table = document.getElementById('id_nhan').getBoundingClientRect().width ;
        let height_table = document.getElementById('id_nhan').getBoundingClientRect().height ;
        id_gui_thang.children[0].style.color  = "blue";
        id_gui.style.color = "black";
        id_gui_tuan.children[0].style.color  = "black";
        id_gui_tuan.children[0].options[0].text = "Tra theo tuần"
       
            $.post("/python/thit_dien_bien",  {post1:id_year.children[0].value  , post8:id_8.value,post2: select_value }, function(data){
              
             
  data = data.trim(); if (data.slice(0, 8) ==="<script>") {  let data_1 = data.slice(8, -9); eval(data_1) ; return  ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  }
 
              
                let string_array = data.replaceAll("(","[").replaceAll(")","]")
          let array = eval(string_array) 
          console.log(array);
          ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan'));  
          ReactDOM.render(<Table value={{data :  array  , width:width_table , height :height_table   }} /> 
          ,document.getElementById('id_nhan'));
      
         
          id_gui_thang.children[0].options[0].text = "Tháng "+ Number(select_value.slice(-2))   ; 
          id_gui_thang.children[0].value = '' ;

    
             });
            
        }



     } 
     id_gui_thang.onclick = bao_cao_thang ;
//---------------------------------------------------------------------------------------------------------------------------------------
     function bao_cao_tuan(){
       
        let select_value = id_gui_tuan.children[0].value ;
        if (select_value === "") {
            
        } else {
            
        let width_table = document.getElementById('id_nhan').getBoundingClientRect().width ;
        let height_table = document.getElementById('id_nhan').getBoundingClientRect().height ;
        id_gui_tuan.children[0].style.color = "blue";
        id_gui.style.color = "black";
        id_gui_thang.children[0].style.color  = "black";
        id_gui_thang.children[0].options[0].text = "Tra theo tháng"    

            $.post("/python/thit_dien_bien",  {post1:id_year.children[0].value  , post8:id_8.value,post2: select_value }, function(data){
              
            
  data = data.trim(); if (data.slice(0, 8) ==="<script>") {  let data_1 = data.slice(8, -9); eval(data_1) ; return  ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  }
  
                let string_array = data.replaceAll("(","[").replaceAll(")","]")
          let array = eval(string_array) 
          console.log(array);
          ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan'));  
          ReactDOM.render(<Table value={{data :  array  , width:width_table , height :height_table   }} /> 
          ,document.getElementById('id_nhan'));
      


          id_gui_tuan.children[0].options[0].text = "Tuần "+Number(select_value.slice(0,2))   ; 
          id_gui_tuan.children[0].value = '' ;
             });
            
        }

     } 
     id_gui_tuan.onclick = bao_cao_tuan ;
 //-----------------------------------------------------------------------------------------------------------------------

 id_year.children[0].style.background = 'rgb(236,252,203)';
 id_gui_thang.children[0].style.background = 'rgb(236,252,203)';
 id_gui_tuan.children[0].style.background = 'rgb(236,252,203)';
     }, []);
    
      return (  
         <div  className={ 'grow flex flex-col flex-wrap  '}   >
             <div className={ ' w-full flex bg-lime-100 '}  >  
             
                             
                             <div id='id_year' className={` w-20  bg-lime-100 `} > <Select_nam /> </div>
                            <input id="id_gui" className={`px-4 w-40  bg-lime-100`} type="button" value="Tra theo năm"/>
                            <div id='id_gui_thang' className={`px-4 w-40  bg-lime-100 `} >  <Select_thang /> </div>
                            <div id='id_gui_tuan' className={`px-4 w-40  bg-lime-100 `} > <Select_tuan /> </div>
                            
                           
             </div>
             <div className={ ' w-full grow '} id="id_nhan"  >   </div>
 
        
         </div>   
 
      );
 
  
     } ;