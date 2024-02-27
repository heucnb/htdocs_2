function Xuat_heo() {
   

    useEffect(() => {  



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
    document.getElementById("id_gui").focus();
  }
    });
});







$(document).ready(function(){
	$("#id_gui").click(function(){
        let width_table = document.getElementById('id_nhan').getBoundingClientRect().width ;
        let height_table = document.getElementById('id_nhan').getBoundingClientRect().height ;
	    	
	if (isNaN(Number($("#id_3").val())) || $("#id_3").val() < 0 ||  $("#id_3").val() == null || $("#id_3").val() == "" )
	{return  _alert("Số heo  xuất  phải định dạng số  không được để trống")  }
	
  if (isNaN(Number($("#id_4").val())) || $("#id_4").val() < 0 ||  $("#id_4").val() == null || $("#id_4").val() == "" )
	{return  _alert("Trọng lượng heo  xuất  phải định dạng số  không được để trống")  }
	 
	    
	    
	    
		var dem_string = id_8.value;	
let check = dem_string.includes("td_");

		
	if (
		$("#id_2").val() == null || $("#id_1").val() == "" ||
		$("#id_3").val() == null || $("#id_2").val() == "" ||
		$("#id_4").val() == null || $("#id_3").val() == "" ||
		check ||
		id_8.value == null || id_8.value == ""
		) 
		{
            return  _alert("Bạn phải điền đầy đủ thông tin hoặc lỗi chọn công ty có chứa *")  ;
        } 
		else 
	    {
	      
			$.post("xuat_heo.php", {post1:id_1.value , post2:id_2.value , post3:id_3.value , post4:id_4.value , post5:id_5.value , post6:id_6.value , post7:id_7.value ,   post8:id_8.value }, function(data){
			
        
  data = data.trim(); if (data.slice(0, 8) ==="<script>") {  let data_1 = data.slice(8, -9); eval(data_1) ; return  ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  }

        
        if ( data.trim() === "ok") {
            _alert("Cập nhật thành công")
        } else {
     
          _alert(data)
        }
                 
            
        
        
        
        });
	
        }

		
	});
});

/* nút thêm, sửa, xóa*/
$(document).ready(function(){
	$("#id_gui_research").click(function(){
		
	    
    ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan')); 
    ReactDOM.render(<Tim_kiem_xuat_heo  /> 
    ,document.getElementById('id_nhan'));
     
     
	
    
		
	});
});





        }, []);
    
  return (  <div  className={`flex flex-col w-full h-full  bg-gray-100  `} > 
     <input id="id_gui_research" className={`  ml-1 mr-1 mt-1  rounded  bg-sky-500 hover:bg-sky-700 h-8 flex items-center justify-center   font-medium `}   type="button" value="Tìm kiếm, sửa, xóa"/> 
     <div className={`ml-1 border-b border-sky-500 mr-1`}> Nhập Xuất heo con </div>

     <div  className={` flex grow  mt-2 `} >  
             <div className={` shrink-0 ml-2 `} >
                 <div> Mã chứng từ: (nếu có)  </div>
                 <input  id="id_1" className={`  border border-sky-500 `}   /> 
                 <div> Chuồng nuôi: (nếu có)  </div>
                 <input  id="id_7" className={`  border border-sky-500 `}   /> 
            
                 <div> Ngày xuất: </div>
                 <input id="id_2" type="date"  className={`  border border-sky-500 `}    /> 
                 
                 <div> Số lượng: </div>
                 <input  id="id_3"  className={`  border border-sky-500 `}    /> 
                 <div> Tổng Trọng lượng: </div>
                 <input  id="id_4"  className={`  border border-sky-500 `}    /> 
                 <div> Tổng Số tiền: (nếu có) </div>
                 <input  id="id_5"  className={`  border border-sky-500 `}    /> 
                 <div> Nơi xuất đến: (nếu có) </div>
                 <input  id="id_6"  className={`  border border-sky-500 `}    /> 
                 <input type="button" value="Thêm"   id="id_gui" className={` mt-2 mb-2  _shadow rounded w-full  bg-sky-500 hover:bg-sky-700 h-8 flex items-center justify-center pl-2  font-medium `}   /> 
               

             </div>
             <div  id="id_nhan"  className={` text-sm grow ml-1 `}> 
             
             </div>
     </div>
     
     
    </div>
  );

 } ;