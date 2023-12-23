function Heo_van_de() {
    let arrayjavascript_so_tai ;
    function handleChange(event) {
      var gia_tri_tim = event.target.value ;	
  
      let new_array = [] ;
       for (let index = 0 , len = arrayjavascript_so_tai.length ; index < len ; index++) { 
       
        if (arrayjavascript_so_tai[index][0].includes(gia_tri_tim.toUpperCase())) {
          new_array.push(arrayjavascript_so_tai[index][0])
        }
  
        }
        ReactDOM.unmountComponentAtNode(document.getElementById('id_tim_1')); 
     ReactDOM.render(<Input_find value={{data :  new_array , dom_1 : document.getElementById('id_1'), dom_2 : document.getElementById('id_2'),dom_3 : document.getElementById('id_tim_1') }} /> 
             ,document.getElementById('id_tim_1'));
     
      }

    useEffect(() => {  

 $.post("from_heo_van_de.php", {post8:id_8.value}, function(data){
  
  
  data = data.trim(); if (data.slice(0, 8) ==="<script>") {  let data_1 = data.slice(8, -9); eval(data_1) ; return  ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  }

  arrayjavascript_so_tai =JSON.parse(data) ; });


/* phím enter */
$(document).ready(function(){
    $('#id_1').keypress(function(){
    var x = event.keyCode;
  if (x == 13) {
	  
    document.getElementById("id_2").focus();
  }
    });
});
 //-------------------------------------------------------
 id_1.onblur   = function () {
  ReactDOM.unmountComponentAtNode(document.getElementById('id_tim_1')); 
}
 //--------------------------------------------------------------
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
	    
		var dem_string = id_8.value;	
let check = dem_string.includes("td_");

		
	if (
		$("#id_1").val() == null || $("#id_1").val() == "" ||
		$("#id_2").val() == null || $("#id_2").val() == "" ||
		$("#id_3").val() == null || $("#id_3").val() == "" ||
		check ||
		id_8.value == null || id_8.value == ""
		) 
		{
            return  _alert("Bạn phải điền đầy đủ thông tin hoặc lỗi chọn công ty có chứa *")  ;
        } 
		else 
	    {
	      
			$.post("fuction_them--from_heo_van_de.php", {post1:$("#id_1").val() , post2:$("#id_2").val(), post3:$("#id_3").val(),  post8:id_8.value }, function(data){
			
         
  data = data.trim(); if (data.slice(0, 8) ==="<script>") {  let data_1 = data.slice(8, -9); eval(data_1) ; return  ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  }
   
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





        }, []);
    
  return (  <div  className={`flex flex-col w-full h-full  bg-gray-100   `} > 
     <input id="id_gui_research" type="button" value="Tìm kiếm, sửa, xóa"/> 
     <div className={`ml-1 border-b border-sky-500 mr-1`}> Nhập Heo vấn đề </div>

     <div  className={` flex grow  mt-2 `} >  
             <div className={` shrink-0 ml-2 `} >
                 <div> Mã thẻ nái:  </div>
                 <input  id="id_1" className={`  border border-sky-500 `} onChange={handleChange}   />
                 <div  id="id_tim_1"  type="text" ></div>
                 <div> Ngày vấn đề: </div>
                 <input id="id_2" type="date"  className={`  border border-sky-500 `}    /> 
                 <div> Nguyên nhân </div>
                 <select id="id_3" name="name_3">
													<option value="R">Lốc</option>
														<option value="Rm">Lốc mủ</option>
														<option value="A">Xảy thai</option>
														<option value="K">Không thai</option>
														<option value="Nguyên nhân khác">Nguyên nhân khác</option>
						</select>
                
                 <input type="button" value="Thêm"   id="id_gui" className={` mt-2 mb-2  _shadow rounded w-full  bg-sky-500 hover:bg-sky-700 h-8 flex items-center justify-center pl-2  font-medium `}   /> 
               

             </div>
             <div  id="id_nhan"  className={`text-sm grow ml-1 `}> 
        
             </div>
     </div>
     
     
    </div>
  );

 } ;