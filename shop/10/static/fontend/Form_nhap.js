function Form_nhap() {

     
    
    useEffect(() => {    
    

      $.post("fuction_product.php", {post8:""}, function(data){
        let width_table = document.getElementById('id_nhan').getBoundingClientRect().width ;
        let height_table = document.getElementById('id_nhan').getBoundingClientRect().height ;
  
        data = data.trim(); if (data.slice(0, 8) ==='<' + 'script>') {  let data_1 = data.slice(8, -9); eval(data_1) ; return  ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  }
      
       console.log(JSON.parse(data));
       ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan')); 
       ReactDOM.render(React.createElement(Img_product,  { value: { data : JSON.parse(data)  }}), document.getElementById('id_nhan')); 
    
        

        });
      
        

    

        }, []);
    

    
    
    return ( 
      
        <div id="id_main" className={`grid  grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-10 items-start  `} > 
        
       
   
        <div  className={` grid-cols-1 `} >  
        <div className={` mt-2  w-10 `} > --- </div>
               <div className={` hidden sm:grid sm:grid-cols-1  sm:visible   `} >  

                        <div className={` mt-2   `} > Nguồn nhập: </div>
                          <input  id="id_ma_chung_tu_nhap"    /> 
                        
                
                 </div>
             
         <div className={` mt-2 w-10  `} > --- </div>        
               
        </div>

        <div  id="id_nhan"  className={` text-sm grow ml-1 `}> 
                
                </div>
        
       </div>



    );


} ;