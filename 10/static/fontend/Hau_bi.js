function Hau_bi() {
   
    function Hau_bi_nhap() {
   

        useEffect(() => {  

            $(document).ready(function(){
                $("#id_gui").click(function(){
                    let width_table = document.getElementById('id_nhan').getBoundingClientRect().width ;
                    let height_table = document.getElementById('id_nhan').getBoundingClientRect().height ;
                     var gia_tri_nhap = document.getElementById("id_1").value ;
                  if ( gia_tri_nhap == null || gia_tri_nhap == "" ||  gia_tri_nhap.indexOf(' ') >= 0 )
                {return _alert("Mã thẻ tai không được để trống, hoặc chứa khoảng trắng")  }	
                
                    
                    var dem_string = $("#id_8").val();	
            var count_dem_string = dem_string.length;
            
                    
                if (
                    $("#id_1").val() == null || $("#id_1").val() == "" ||
                    $("#id_2").val() == null || $("#id_2").val() == "" ||
                    $("#id_3").val() == null || $("#id_3").val() == "" ||
                    $("#id_4").val() == null || $("#id_4").val() == "" ||
                    count_dem_string > 50 ||
                    $("#id_8").val() == null || $("#id_8").val() == ""
                    ) 
                    {
                        return  _alert("Bạn phải điền đầy đủ thông tin hoặc lỗi chọn công ty có chứa *")  ;	
                    } 
                    else 
                    {
                       
                        $.post("fuction_them_hau_bi_nhap.php", {  post1:$("#id_1").val() , post2:$("#id_2").val(), post3:$("#id_3").val(), post4:$("#id_4").val(),  post8:$("#id_8").val() }, function(data){
                       
                             
        if ( data.trim().slice(0, 2) !== "[[") {
            _alert(data)
        } else {
     
         
            ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan')); 
           
            ReactDOM.render(React.createElement(Table,  { value: { data : JSON.parse(data) , width:width_table , height :height_table }}), document.getElementById('id_nhan')); 
           
        }
                 
            
                    
                    });
                
                    }
            
                    
                });
            });



 
/* nút thêm, sửa, xóa*/
$(document).ready(function(){
	$("#id_gui_research").click(function(){
		
	       
    ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan')); 
    ReactDOM.render(<Tim_kiem  /> 
    ,document.getElementById('id_nhan'));
     
     
    
		
	});
});           
            
/* phím enter */
$(document).ready(function(){
    $('#id_1').keypress(function(){
    var x = event.keyCode;
  if (x == 13) {
    document.getElementById("id_2").focus();
  }
    });
});

$(document).ready(function(){
    $('#id_2').keypress(function(){
    var x = event.keyCode;
  if (x == 13) {
    document.getElementById("id_3").focus();
  }
    });
});

$(document).ready(function(){
    $('#id_3').keypress(function(){
    var x = event.keyCode;
  if (x == 13) {
    document.getElementById("id_4").focus();
  }
    });
});



$(document).ready(function(){
    $('#id_4').keypress(function(){
    var x = event.keyCode;
  if (x == 13) {
    document.getElementById("id_gui").focus();
  }
    });
});

          
    
            }, []);
        
      return (  <div  className={` flex grow h-full w-full  `} >  
       
      <div className={`shrink-0 ml-2 `} >
     
          <div> Mã thẻ Tai:  </div>
          <input  id="id_1" className={`  border border-sky-500 `}   /> 
          <div> Ngày nhập: </div>
          <input id="id_2" type="date"  className={`  border border-sky-500 `}    /> 
          <div> Ngày sinh: </div>
          <input  id="id_3"  type="date"  className={`  border border-sky-500 `}     /> 
          <div> Lô: </div>
          <input id="id_4"  className={`  border border-sky-500 `}    /> 
    
         
          <input type="button" value="Thêm"   id="id_gui" className={` mt-2 mb-2  _shadow rounded w-full  bg-sky-500 hover:bg-sky-700 h-8 flex items-center justify-center pl-2  font-medium `}   /> 
          <input id="id_gui_research" type="button" value="Tìm kiếm, sửa, xóa"/> 

      </div>
      <div  id="id_nhan"  className={`grow ml-1 `}> 

      </div>
</div>
      );
    
     } ;


     //---------------------------------------------------------------------------------------------------------
     function Hau_bi_chet() {
   

        useEffect(() => {  

            
$(document).ready(function(){
	$("#id_gui").click(function(){
        let width_table = document.getElementById('id_nhan').getBoundingClientRect().width ;
        let height_table = document.getElementById('id_nhan').getBoundingClientRect().height ;
	     var gia_tri_nhap = document.getElementById("id_1").value ;
      if ( gia_tri_nhap == null || gia_tri_nhap == "" ||  gia_tri_nhap.indexOf(' ') >= 0 )
	{return _alert("Mã thẻ tai không được để trống, hoặc chứa khoảng trắng")   }	
	
	    
		var dem_string = $("#id_8").val();	
var count_dem_string = dem_string.length;

		
	if (
		$("#id_1").val() == null || $("#id_1").val() == "" ||
		$("#id_2").val() == null || $("#id_2").val() == "" ||
	
		count_dem_string > 50 ||
		$("#id_8").val() == null || $("#id_8").val() == ""
		) 
		{
          return  _alert("Bạn phải điền đầy đủ thông tin hoặc lỗi chọn công ty có chứa *")
        } 
		else 
	    {
	      
			$.post("fuction_them_hau_bi_chet.php", {  post1:$("#id_1").val() , post2:$("#id_2").val() , post3:$("#id_3").val() ,  post8:$("#id_8").val() }, function(data){
			
             
        if ( data.trim().slice(0, 2) !== "[[") {
            _alert(data)
        } else {
     
         
            ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan')); 
           
            ReactDOM.render(React.createElement(Table,  { value: { data : JSON.parse(data) , width:width_table , height :height_table }}), document.getElementById('id_nhan')); 
           
        }
                 
            
        });
	
        }

		
	});
});



/* nút thêm, sửa, xóa*/
$(document).ready(function(){
	$("#id_gui_research").click(function(){
		
	       
    ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan')); 
    ReactDOM.render(<Tim_kiem  /> 
    ,document.getElementById('id_nhan'));
     
     
    
		
	});
});


            $(document).ready(function(){
                $('#id_1').keypress(function(){
                var x = event.keyCode;
              if (x == 13) {
                document.getElementById("id_2").focus();
              }
                });
            });
            
            $(document).ready(function(){
                $('#id_2').keypress(function(){
                var x = event.keyCode;
              if (x == 13) {
                document.getElementById("id_gui").focus();
              }
                });
            });
            
            
          
    
            }, []);
        
      return (  <div  className={` flex grow h-full w-full  `} >  
       
      <div className={`shrink-0 ml-2 `} >
      
          <div> Mã thẻ nái:  </div>
          <input  id="id_1" className={`  border border-sky-500 `}    /> 
          <div> Ngày chết (loại): </div>
          <input id="id_2" type="date"  className={`  border border-sky-500 `}    /> 
          <div> Phân loại:	 </div>
          <select id="id_3" >
														<option value="c">Heo chết</option>
														<option value="l">Bán loại</option>
														
		</select>		
         
          <input type="button" value="Thêm"   id="id_gui" className={` mt-2 mb-2  _shadow rounded w-full  bg-sky-500 hover:bg-sky-700 h-8 flex items-center justify-center pl-2  font-medium `}   /> 
          <input id="id_gui_research" type="button" value="Tìm kiếm, sửa, xóa"/> 

      </div>
      <div  id="id_nhan"  className={`grow ml-1 `}> 
      
      </div>
</div>
      );
    
     } ;


     //-------------------------------------------------------------------------------------------------------------


    useEffect(() => {  
        function id_gui_1_click() { 
          
            ReactDOM.render(React.createElement( Hau_bi_nhap, null), document.getElementById('id_nhan_hb')); 
          
            id_gui_1.style.color = "blue";
            id_gui_2.style.color = "black";
         };  
         id_gui_1.onclick = id_gui_1_click ;

         function id_gui_2_click() { 
            ReactDOM.render(React.createElement( Hau_bi_chet, null), document.getElementById('id_nhan_hb')); 
            id_gui_1.style.color = "black";  
            id_gui_2.style.color = "blue";
         };  
         id_gui_2.onclick = id_gui_2_click ;

         // bắt đầu là vào luôn from nhập hậu bị
         id_gui_1_click();
              

        }, []);

    
  return (  <div  className={`flex h-full w-full flex-col border bg-gray-100   border-sky-500 `} > 
<div className={`flex  border bg-orange-200  border-sky-500 `} > 
        <input type="button" value="Theo dõi hậu bị nhập đàn"   id="id_gui_1" className={`w-[220px]  bg-orange-200 hover:bg-slate-300 hover:bg-opacity-50 h-6 flex items-end  pl-2 pr-2 `}   /> 
            
        <input type="button" value="Theo dõi hậu bị chết, loại"   id="id_gui_2" className={`w-[220px]  bg-orange-200 hover:bg-sky-700 h-6 flex items-end  pr-2 `}   /> 
                
</div>
                          
<div  id="id_nhan_hb" className={`text-sm flex grow w-full border bg-gray-100   border-sky-500 `} >   </div>    
    </div>
  );

 } ;