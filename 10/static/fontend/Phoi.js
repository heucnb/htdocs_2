function Phoi() {
  let arrayjavascript_so_tai_phoi ;
  let arrayjavascript_so_tai_duc ;
  function handleChange_1(event) {

    var gia_tri_tim = event.target.value ;	
  
    let new_array = [] ;
     for (let index = 0 , len = arrayjavascript_so_tai_phoi.length ; index < len ; index++) { 
     
      if (arrayjavascript_so_tai_phoi[index][0].includes(gia_tri_tim.toUpperCase())) {
        new_array.push(arrayjavascript_so_tai_phoi[index][0])
      }

      }
  
   ReactDOM.render(<Input_find value={{data :  new_array , dom_1 : document.getElementById('id_1'), dom_2 : document.getElementById('id_2'),dom_3 : document.getElementById('id_tim_1') }} /> 
           ,document.getElementById('id_tim_1'));
   
   
  }
  function handleChange_2(event) {

 var gia_tri_tim = event.target.value ;	

    let new_array = [] ;
     for (let index = 0 , len = arrayjavascript_so_tai_duc.length ; index < len ; index++) { 
    
      if (arrayjavascript_so_tai_duc[index][0].includes(gia_tri_tim.toUpperCase())) {
        new_array.push(arrayjavascript_so_tai_duc[index][0])
      }

      }
  
   ReactDOM.render(<Input_find value={{data :  new_array , dom_1 : document.getElementById('id_3'), dom_2 : document.getElementById('id_4'),dom_3 : document.getElementById('id_tim_2') }} /> 
           ,document.getElementById('id_tim_2'));
   
  }
       useEffect(() => {  

        $.post("from_phoi.php", {post8:$("#id_8").val()}, function(data){ 

let array_data =   JSON.parse(data) ;          
 arrayjavascript_so_tai_phoi =array_data[0]  

 arrayjavascript_so_tai_duc= array_data[1];  
        
        });





        //------------------------------------------
        $('#id_1').keypress(function(){
            var x = event.keyCode;
          if (x == 13) {
            
            ReactDOM.unmountComponentAtNode(document.getElementById('id_tim_1')); 
            document.getElementById("id_2").focus();
          }
            });
//----------------------------------------------------
            id_1.onblur   = function () {
         
              ReactDOM.unmountComponentAtNode(document.getElementById('id_tim_1')); 
            }

//-------------------------------------------------------------------
            $('#id_2').keypress(function(){
                var x = event.keyCode;
              if (x == 13) {
                document.getElementById("id_3").focus();
              }
                });   
//----------------------------------------------------------------
$('#id_3').keypress(function(){
    var x = event.keyCode;
  if (x == 13) {
	 
    ReactDOM.unmountComponentAtNode(document.getElementById('id_tim_2')); 
    document.getElementById("id_4").focus();
  }
    });
//-------------------------------------------------------------------
    id_3.onblur   = function () {

      ReactDOM.unmountComponentAtNode(document.getElementById('id_tim_2')); 
    }

//------------------------------------------------------------------
$('#id_4').keypress(function(){
    var x = event.keyCode;
  if (x == 13) {
    document.getElementById("id_5").focus();
  }
    });

 //---------------------------------------------------------------------------
 $('#id_5').keypress(function(){
    var x = event.keyCode;
  if (x == 13) {
    document.getElementById("id_gui").focus();
  }
    });
//--------------------------------------------------------------------------
        $("#id_gui_research").click(function(){
		
         
          ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan')); 
          ReactDOM.render(<Tim_kiem  /> 
          ,document.getElementById('id_nhan'));
           
           
        
    
		
	});

        
 //--------------------------------------------------------------------       
   
 $("#id_gui").click(function(){
  let width_table = document.getElementById('id_nhan').getBoundingClientRect().width ;
  let height_table = document.getElementById('id_nhan').getBoundingClientRect().height ;
	var dem_string = $("#id_8").val();	
var count_dem_string = dem_string.length;
	if (
		$("#id_1").val() == null || $("#id_1").val() == "" ||
		$("#id_2").val() == null || $("#id_2").val() == "" ||
		$("#id_3").val() == null || $("#id_3").val() == "" ||
		$("#id_4").val() == null || $("#id_4").val() == "" ||
		$("#id_5").val() == null || $("#id_5").val() == "" ||
		count_dem_string > 50 ||
		$("#id_8").val() == null || $("#id_8").val() == ""
		) 
		{
      _alert("Bạn phải điền đầy đủ thông tin hoặc lỗi chọn công ty có chứa *")
        } 
		else 
	    {
	     
			$.post("fuction_thêm--from_phối.php", {post1:$("#id_1").val() , post2:$("#id_2").val(), post3:$("#id_3").val(), post4:$("#id_4").val(), post5:$("#id_5").val(), post8:$("#id_8").val() }, function(data){
  
        if ( data.trim().slice(0, 2) !== "[[") {
          _alert(data)
      } else {
   
         ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan')); 
         ReactDOM.render(React.createElement(Table,  { value: { data : JSON.parse(data) , width:width_table , height :height_table  }}), document.getElementById('id_nhan')); 
      
      }
               
       
           
             });
	
        }

		
	});

           }, []);
       
     return (  <div  className={`flex flex-col h-full w-full border bg-gray-100   border-sky-500 `} > 
        <input id="id_gui_research" type="button" value="Tìm kiếm, sửa, xóa"/> 
        <div className={`ml-1 border-b border-sky-500 mr-1`}> Nhập Phối </div>

        <div  className={` flex grow  mt-2 `} >  
                <div className={`shrink-0 ml-2 `} >
                    <div> Mã thẻ nái:  </div>
                    <input  id="id_1" className={`  border border-sky-500 `}  onChange={handleChange_1}   /> 
                    <div  id="id_tim_1"  type="text" ></div>
                    <div> Ngày phối:  </div>
                    <input id="id_2" type="date"  className={`  border border-sky-500 `}    /> 
                    <div> Mã đực:  </div>
                    <input  id="id_3"  className={`  border border-sky-500 `}   onChange={handleChange_2}  />
                    <div  id="id_tim_2"  type="text" ></div>
                    <div> Người phối: </div>
                    <input id="id_4"  className={`  border border-sky-500 `}    /> 
                    <div> Biểu hiện khi phối:  </div>
                    <input  id="id_5"  className={`  border border-sky-500 `}    /> 
                   
                    <input type="button" value="Thêm"   id="id_gui" className={` mt-2 mb-2  _shadow rounded w-full  bg-sky-500 hover:bg-sky-700 h-8 flex items-center justify-center pl-2  font-medium `}   /> 
                  

                </div>
                <div  id="id_nhan"  className={`text-sm grow ml-1 `}> 
                 
                </div>
        </div>
        
        
       </div>
     );
 
    } ;