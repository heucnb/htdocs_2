function Tim_kiem_xuat_heo() {
    

    useEffect(() => {  


        $(document).ready(function(){
            $("#id_gui_fuction_research_date").click(function(){
                let width_table = document.getElementById('id_nhan_research').getBoundingClientRect().width ;
                let height_table = document.getElementById('id_nhan_research').getBoundingClientRect().height ;
                var dem_string = id_8.value;	
        let check = dem_string.includes("td_");
                
            if (
                $("#id_2_research").val() == null || $("#id_2_research").val() == "" ||
                $("#id_3_research").val() == null  ||  check  || $("#id_3_research").val() == "" 
                ) 
                {
                    _alert("Bạn phải điền đầy đủ thông tin hoặc lỗi chọn công ty có chứa *") ;
                } 
                else 
                {
                
                    $.post("xuat_heo_quan_ly.php", {  post2:$("#id_2_research").val(), post3:$("#id_3_research").val(), post8:id_8.value, post4: "show_ds" }, function(data){
                  
                 data = data.trim(); if (data.slice(0, 8) ==="<script>") {  let data_1 = data.slice(8, -9); eval(data_1) ; return  ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  }
       

  if (data.trim().slice(0, 2) !== "[[")
   {
    _alert(data) ;

   }
   else
   {
   
    ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_research')); 
           
    ReactDOM.render(React.createElement(Table_tieu_de_3,  { value: { data : JSON.parse(data)  , width:width_table , height :height_table }}), document.getElementById('id_nhan_research')); 
   
	   
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