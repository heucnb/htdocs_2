function Tim_kiem() {
    

    useEffect(() => {  


        $(document).ready(function(){
            $("#id_gui_fuction_research").click(function(){
                let width_table = document.getElementById('id_nhan_research').getBoundingClientRect().width ;
                let height_table = document.getElementById('id_nhan_research').getBoundingClientRect().height ;
            var dem_string = $("#id_8").val();	
        var count_dem_string = dem_string.length;
            
            if (
                $("#id_1_research").val() == null   ||  count_dem_string > 50 ||  $("#id_1_research").val() == "" 
                ) 
                {
                    _alert("Bạn phải điền đầy đủ thông tin hoặc lỗi chọn công ty có chứa *") ;
                } 
                else 
                {
               
                    $.post("fuction--from_research.php", {post1:$("#id_1_research").val() ,post4: gobal_tim_kiem_sua_xoa ,  post8:$("#id_8").val() }, function(data){
                  

 var arrayjavascript = JSON.parse(data) // ***** gán mảng 2 chiều từ php vào javácript
 
 var countjavascript = arrayjavascript.length ;

  if (countjavascript == 1)
   {
    _alert("Không tìm thấy") ;

   }
   else
   {
   
    ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_research')); 
           
    ReactDOM.render(React.createElement(Table_xoa,  { value: { data : arrayjavascript , width:width_table , height :height_table }}), document.getElementById('id_nhan_research')); 
   

      
             
	   
   }	
   
   
                
                });
            
                }
        
                
            });
        });
        
        $(document).ready(function(){
            $("#id_gui_fuction_research_date").click(function(){
                let width_table = document.getElementById('id_nhan_research').getBoundingClientRect().width ;
                let height_table = document.getElementById('id_nhan_research').getBoundingClientRect().height ;
                var dem_string = $("#id_8").val();	
        var count_dem_string = dem_string.length;
                
            if (
                $("#id_2_research").val() == null || $("#id_2_research").val() == "" ||
                $("#id_3_research").val() == null  ||  count_dem_string > 50  || $("#id_3_research").val() == "" 
                ) 
                {
                    _alert("Bạn phải điền đầy đủ thông tin hoặc lỗi chọn công ty có chứa *") ;
                } 
                else 
                {
                
                    $.post("fuction--from_research_date_to_date.php", { post2:$("#id_2_research").val(), post3:$("#id_3_research").val(), post8:$("#id_8").val(), post4: gobal_tim_kiem_sua_xoa }, function(data){
                  
                        
 var arrayjavascript = JSON.parse(data) // ***** gán mảng 2 chiều từ php vào javácript
 
 var countjavascript = arrayjavascript.length ;

  if (countjavascript == 1)
   {
    _alert("Không tìm thấy") ;

   }
   else
   {
   
    ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_research')); 
           
    ReactDOM.render(React.createElement(Table_xoa_date,  { value: { data : arrayjavascript , width:width_table , height :height_table }}), document.getElementById('id_nhan_research')); 
   

      
             
	   
   }	

                
                });
            
                }
        
                
            });
        });



        }, []);
    
  return (  <div  className={`flex flex-col w-full h-full  bg-gray-100   `} > 
    
     <div className={`ml-1 border-b border-sky-500 mr-1`}> Tìm kiếm </div>

     <div  className={` flex grow  mt-2 `} >  
             <div className={` shrink-0 ml-2 `} >
                 <div> Mã thẻ nái:  </div>
                 <input  id="id_1_research" className={`  border border-sky-500 `}    /> 
                 <input type="button" value="Tìm kiếm"   id="id_gui_fuction_research" className={` mt-2 mb-2  _shadow rounded w-full  bg-sky-500 hover:bg-sky-700 h-8 flex items-center justify-center pl-2  font-medium `}   /> 
               
                 <div> Từ ngày: </div>
                 <input id="id_2_research" type="date"  className={`  border border-sky-500 `}    /> 
                 
                 <div> Đến ngày: </div>
                 <input id="id_3_research" type="date"  className={`  border border-sky-500 `}    /> 
                
                 <input type="button" value="Tìm kiếm"   id="id_gui_fuction_research_date" className={` mt-2 mb-2  _shadow rounded w-full  bg-sky-500 hover:bg-sky-700 h-8 flex items-center justify-center pl-2  font-medium `}   /> 
               

             </div>
             <div  id="id_nhan_research"  className={` text-sm grow ml-1 `}> 

             </div>
     </div>
     
     
    </div>
  );

 } ;