function Danh_sach_heo(props) {

    function remove_color_click(dom) {
        const collection = document.getElementById(dom).children;

        for (let i = 0; i < collection.length; i++) {
        collection[i].style.color = "black";
    
        }
  
    }
       useEffect(() => {  
        let width_table = document.getElementById('id_nhan').getBoundingClientRect().width ;
        let height_table = document.getElementById('id_nhan').getBoundingClientRect().height ;

        // phối
$(document).ready(function(){
	$("#id_xem_danh_sach_1").click(function(){


        try { Table_hieu_2.remove_EventListener(); } catch (error) { }
        ReactDOM.unmountComponentAtNode(id_nhan); 
			$.post("fuction_danh_sach_heo__from_xem_danh_sach_dan_nai_duc.php", { post1:id_xem_danh_sach_1.textContent, post8:id_8.value }, function(data){
		
               
  data = data.trim(); if (data.slice(0, 8) ==="<script>") {  let data_1 = data.slice(8, -9); eval(data_1) ; return  ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  }
                 

                ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan')); 
           
                ReactDOM.render(React.createElement(Table_hieu_2,  { value: { data : JSON.parse(data) , width:width_table , height :height_table, convert : false }}), document.getElementById('id_nhan')); 
               
        
        });
	
        

		
	});
});

// đẻ
$(document).ready(function(){
	$("#id_xem_danh_sach_2").click(function(){
        try { Table_hieu_2.remove_EventListener(); } catch (error) { }
        ReactDOM.unmountComponentAtNode(id_nhan); 
			$.post("fuction_danh_sach_heo__from_xem_danh_sach_dan_nai_duc.php", { post1:id_xem_danh_sach_2.textContent, post8:id_8.value }, function(data){
               

                                data = data.trim(); if (data.slice(0, 8) ==="<script>") {  let data_1 = data.slice(8, -9); eval(data_1) ; return  ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  }


               
                                ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan')); 
           
                ReactDOM.render(React.createElement(Table_hieu_2,  { value: { data : JSON.parse(data) , width:width_table , height :height_table, convert : false }}), document.getElementById('id_nhan')); 
               
        
        });
			
					
	});
});

	
 // cai sữa
$(document).ready(function(){
	$("#id_xem_danh_sach_3").click(function(){
        try { Table_hieu_2.remove_EventListener(); } catch (error) { }
        ReactDOM.unmountComponentAtNode(id_nhan); 
	    
			$.post("fuction_danh_sach_heo__from_xem_danh_sach_dan_nai_duc.php", { post1:id_xem_danh_sach_3.textContent, post8:id_8.value }, function(data){
		
                 
  data = data.trim(); if (data.slice(0, 8) ==="<script>") {  let data_1 = data.slice(8, -9); eval(data_1) ; return  ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  }
               

                ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan')); 
           
                ReactDOM.render(React.createElement(Table_hieu_2,  { value: { data : JSON.parse(data) , width:width_table , height :height_table, convert : false }}), document.getElementById('id_nhan')); 
               
        
        });
	       

		
	});
});


 // vấn đề
$(document).ready(function(){
	$("#id_xem_danh_sach_4").click(function(){

	    try { Table_hieu_2.remove_EventListener(); } catch (error) { }
        ReactDOM.unmountComponentAtNode(id_nhan); 
			$.post("fuction_danh_sach_heo__from_xem_danh_sach_dan_nai_duc.php", { post1:id_xem_danh_sach_4.textContent, post8:id_8.value }, function(data){
              
              
  data = data.trim(); if (data.slice(0, 8) ==="<script>") {  let data_1 = data.slice(8, -9); eval(data_1) ; return  ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  }

                                ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan')); 
           
                ReactDOM.render(React.createElement(Table_hieu_2,  { value: { data : JSON.parse(data) , width:width_table , height :height_table, convert : false }}), document.getElementById('id_nhan')); 
               
        
        });
	       

		
	});
});

 // hậu bị
$(document).ready(function(){
	$("#id_xem_danh_sach_5").click(function(){

        try { Table_hieu_2.remove_EventListener(); } catch (error) { }
        ReactDOM.unmountComponentAtNode(id_nhan); 
			$.post("fuction_danh_sach_heo__from_xem_danh_sach_dan_nai_duc.php", { post1:id_xem_danh_sach_5.textContent, post8:id_8.value }, function(data){
			
             
  data = data.trim(); if (data.slice(0, 8) ==="<script>") {  let data_1 = data.slice(8, -9); eval(data_1) ; return  ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  }
           
            ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan')); 
           
            ReactDOM.render(React.createElement(Table_hieu_2,  { value: { data : JSON.parse(data) , width:width_table , height :height_table, convert : false }}), document.getElementById('id_nhan')); 
           
    
        
        });
	       

		
	});
});
 // đực
$(document).ready(function(){
	$("#id_xem_danh_sach_6").click(function(){

        try { Table_hieu_2.remove_EventListener(); } catch (error) { }
        ReactDOM.unmountComponentAtNode(id_nhan); 
			$.post("fuction_danh_sach_heo__from_xem_danh_sach_dan_nai_duc.php", { post1:id_xem_danh_sach_6.textContent, post8:id_8.value }, function(data){
               
               
  data = data.trim(); if (data.slice(0, 8) ==="<script>") {  let data_1 = data.slice(8, -9); eval(data_1) ; return  ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  }

               
                                ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan')); 
           
                ReactDOM.render(React.createElement(Table_hieu_2,  { value: { data : JSON.parse(data) , width:width_table , height :height_table, convert : false }}), document.getElementById('id_nhan')); 
               
        
        
        });
	       

		
	});
});

 // quá 123 ngày chưa đẻ
$(document).ready(function(){
	$("#id_xem_danh_sach_7").click(function(){

        try { Table_hieu_2.remove_EventListener(); } catch (error) { }
        ReactDOM.unmountComponentAtNode(id_nhan); 
			$.post("fuction_danh_sach_heo__from_xem_danh_sach_dan_nai_duc.php", { post1:id_xem_danh_sach_7.textContent, post8:id_8.value }, function(data){
               
               
  data = data.trim(); if (data.slice(0, 8) ==="<script>") {  let data_1 = data.slice(8, -9); eval(data_1) ; return  ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  }

               
                                ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan')); 
           
                ReactDOM.render(React.createElement(Table_hieu_2,  { value: { data : JSON.parse(data) , width:width_table , height :height_table, convert : false }}), document.getElementById('id_nhan')); 
               
        
        });
	       

		
	});
});

// quá 35 ngày chưa cai
$(document).ready(function(){
	$("#id_xem_danh_sach_8").click(function(){
        try { Table_hieu_2.remove_EventListener(); } catch (error) { }
        ReactDOM.unmountComponentAtNode(id_nhan); 
	
			$.post("fuction_danh_sach_heo__from_xem_danh_sach_dan_nai_duc.php", { post1:id_xem_danh_sach_8.textContent, post8:id_8.value }, function(data){
             
             
  data = data.trim(); if (data.slice(0, 8) ==="<script>") {  let data_1 = data.slice(8, -9); eval(data_1) ; return  ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  }

             
                                ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan')); 
           
                ReactDOM.render(React.createElement(Table_hieu_2,  { value: { data : JSON.parse(data) , width:width_table , height :height_table, convert : false }}), document.getElementById('id_nhan')); 
               
        
        });
	       

		
	});
});

// heo cai sữa quá 7 ngày chưa phối
$(document).ready(function(){
	$("#id_xem_danh_sach_9").click(function(){

	    try { Table_hieu_2.remove_EventListener(); } catch (error) { }
        ReactDOM.unmountComponentAtNode(id_nhan); 
			$.post("fuction_danh_sach_heo__from_xem_danh_sach_dan_nai_duc.php", { post1:id_xem_danh_sach_9.textContent, post8:id_8.value }, function(data){
            
            
  data = data.trim(); if (data.slice(0, 8) ==="<script>") {  let data_1 = data.slice(8, -9); eval(data_1) ; return  ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  }

            
                                ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan')); 
           
                ReactDOM.render(React.createElement(Table_hieu_2,  { value: { data : JSON.parse(data) , width:width_table , height :height_table, convert : false }}), document.getElementById('id_nhan')); 
               
        
        });
	       

		
	});
});

// lốc 2 lần liên tiếp
$(document).ready(function(){
	$("#id_xem_danh_sach_10").click(function(){

	    try { Table_hieu_2.remove_EventListener(); } catch (error) { }
        ReactDOM.unmountComponentAtNode(id_nhan); 
			$.post("fuction_danh_sach_heo__from_xem_danh_sach_dan_nai_duc.php", { post1:id_xem_danh_sach_10.textContent, post8:id_8.value }, function(data){
              
              
  data = data.trim(); if (data.slice(0, 8) ==="<script>") {  let data_1 = data.slice(8, -9); eval(data_1) ; return  ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  }

              
                                ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan')); 
           
                ReactDOM.render(React.createElement(Table_hieu_2,  { value: { data : JSON.parse(data) , width:width_table , height :height_table, convert : false }}), document.getElementById('id_nhan')); 
               
        
        
        });
	       

		
	});
});

// trung bình 2 lứa đẻ dưới 7 con
$(document).ready(function(){
	$("#id_xem_danh_sach_11").click(function(){

        try { Table_hieu_2.remove_EventListener(); } catch (error) { }
        ReactDOM.unmountComponentAtNode(id_nhan); 
			$.post("fuction_danh_sach_heo__from_xem_danh_sach_dan_nai_duc.php", { post1:id_xem_danh_sach_11.textContent, post8:id_8.value }, function(data){
                
              
  data = data.trim(); if (data.slice(0, 8) ==="<script>") {  let data_1 = data.slice(8, -9); eval(data_1) ; return  ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  }
  
                
                                ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan')); 
           
                ReactDOM.render(React.createElement(Table_hieu_2,  { value: { data : JSON.parse(data) , width:width_table , height :height_table, convert : false }}), document.getElementById('id_nhan')); 
               
        
        
        
        });
	       

		
	});
});

      
        
       }, []);
    
	
    return ( 

<div  className={`text-sm flex flex-row h-full  grow  bg-gray-100  `} >


            <div id="id_ds"  className={`  flex-shrink-0 w-[225px] h-full  `}  >
        <div id="id_xem_danh_sach_1" className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50 `} onClick={(event)=>{ remove_color_click('id_ds'); event.target.style.color =  "blue"; }} >Danh sách heo phối</div>      
        <div id="id_xem_danh_sach_2" className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50 `} onClick={(event)=>{ remove_color_click('id_ds'); event.target.style.color =  "blue"; }} >Danh sách heo đẻ</div>     
        <div id="id_xem_danh_sach_3" className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50 `} onClick={(event)=>{ remove_color_click('id_ds'); event.target.style.color =  "blue"; }} >Danh sách heo cai sữa</div>     
        <div id="id_xem_danh_sach_4" className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50 `} onClick={(event)=>{ remove_color_click('id_ds'); event.target.style.color =  "blue"; }} >Danh sách heo vấn đề</div>         
        <div id="id_xem_danh_sach_5" className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50 `} onClick={(event)=>{ remove_color_click('id_ds'); event.target.style.color =  "blue"; }} >Danh sách heo hậu bị</div>     
        <div id="id_xem_danh_sach_6" className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50 `} onClick={(event)=>{ remove_color_click('id_ds'); event.target.style.color =  "blue"; }} >Danh sách heo đực</div>     
        <div id="id_xem_danh_sach_7" className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50 `} onClick={(event)=>{ remove_color_click('id_ds'); event.target.style.color =  "blue"; }} >Heo quá 123 ngày chưa đẻ</div>         
        <div id="id_xem_danh_sach_8" className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50 `} onClick={(event)=>{ remove_color_click('id_ds'); event.target.style.color =  "blue"; }} >Heo quá 35 ngày chưa cai sữa</div>         
        <div id="id_xem_danh_sach_9" className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50 `} onClick={(event)=>{ remove_color_click('id_ds'); event.target.style.color =  "blue"; }} >Heo cai sữa quá 7 ngày chưa phối</div>     
        <div id="id_xem_danh_sach_10" className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50 `} onClick={(event)=>{ remove_color_click('id_ds'); event.target.style.color =  "blue"; }} >Heo lốc, xảy thai 2 lần liên tiếp</div>      
        <div id="id_xem_danh_sach_11" className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50 `} onClick={(event)=>{ remove_color_click('id_ds'); event.target.style.color =  "blue"; }} >Heo đẻ trung bình 2 lứa dưới 7 con</div>      


            </div>
            <div className={` flex h-full grow  bg-gray-100  `}  id="id_nhan"  >-------------------</div>	

</div>	

   
     
     

    );


   } ;