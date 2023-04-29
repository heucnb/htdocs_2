function Tra_ly_lich(props) {

       useEffect(() => {  
        let data_sum =[] ;
        //------------------------------------------------------
        document.getElementById("id_xoa").onclick = function () {
            const collection = id_ds.children;

        for (let i = 0; i < 19; i++) {
        collection[i].value = "";
    
        }
        document.getElementById("id1").focus(); 
          
        }  

        document.getElementById("id_xoa_2").onclick = function () {
            ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan')); 
            data_sum = [];
            document.getElementById("id1").focus(); 
        }  
  document.getElementById("id1").focus();

  $(document).ready(function(){
      $('#id1').keypress(function(){
      var x = event.keyCode;
    if (x == 13) {
      document.getElementById("id2").focus();
    }
      });
  });
  
  $(document).ready(function(){
      $('#id2').keypress(function(){
      var x = event.keyCode;
    if (x == 13) {
      document.getElementById("id3").focus();
    }
      });
  });
  
  $(document).ready(function(){
      $('#id3').keypress(function(){
      var x = event.keyCode;
    if (x == 13) {
      document.getElementById("id4").focus();
    }
      });
  });
  
  $(document).ready(function(){
      $('#id4').keypress(function(){
      var x = event.keyCode;
    if (x == 13) {
      document.getElementById("id5").focus();
    }
      });
  });
  $(document).ready(function(){
      $('#id5').keypress(function(){
      var x = event.keyCode;
    if (x == 13) {
      document.getElementById("id6").focus();
    }
      });
  });
  $(document).ready(function(){
      $('#id6').keypress(function(){
      var x = event.keyCode;
    if (x == 13) {
      document.getElementById("id7").focus();
    }
      });
  });
  $(document).ready(function(){
      $('#id7').keypress(function(){
      var x = event.keyCode;
    if (x == 13) {
      document.getElementById("id8").focus();
    }
      });
  });
  $(document).ready(function(){
      $('#id8').keypress(function(){
      var x = event.keyCode;
    if (x == 13) {
      document.getElementById("id9").focus();
    }
      });
  });
  $(document).ready(function(){
      $('#id9').keypress(function(){
      var x = event.keyCode;
    if (x == 13) {
      document.getElementById("id10").focus();
    }
      });
  });
  $(document).ready(function(){
      $('#id10').keypress(function(){
      var x = event.keyCode;
    if (x == 13) {
      document.getElementById("id11").focus();
    }
      });
  });
  
  
  $(document).ready(function(){
      $('#id11').keypress(function(){
      var x = event.keyCode;
    if (x == 13) {
      document.getElementById("id12").focus();
    }
      });
  });
  
  $(document).ready(function(){
      $('#id12').keypress(function(){
      var x = event.keyCode;
    if (x == 13) {
      document.getElementById("id13").focus();
    }
      });
  });
  $(document).ready(function(){
      $('#id13').keypress(function(){
      var x = event.keyCode;
    if (x == 13) {
      document.getElementById("id14").focus();
    }
      });
  });
  $(document).ready(function(){
      $('#id14').keypress(function(){
      var x = event.keyCode;
    if (x == 13) {
      document.getElementById("id15").focus();
    }
      });
  });
  $(document).ready(function(){
      $('#id15').keypress(function(){
      var x = event.keyCode;
    if (x == 13) {
      document.getElementById("id16").focus();
    }
      });
  });
  $(document).ready(function(){
      $('#id16').keypress(function(){
      var x = event.keyCode;
    if (x == 13) {
      document.getElementById("id17").focus();
    }
      });
  });
  $(document).ready(function(){
      $('#id17').keypress(function(){
      var x = event.keyCode;
    if (x == 13) {
      document.getElementById("id18").focus();
    }
      });
  });
  $(document).ready(function(){
      $('#id18').keypress(function(){
      var x = event.keyCode;
    if (x == 13) {
      document.getElementById("id19").focus();
    }
      });
  });
  $(document).ready(function(){
      $('#id19').keypress(function(){
      var x = event.keyCode;
    if (x == 13) {
      document.getElementById("id20").focus();
    }
      });
  });
  $(document).ready(function(){
      $('#id20').keypress(function(){
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
      var dem_string = $("#id_8").val();	
  var count_dem_string = dem_string.length;
      
      if (
          
          count_dem_string > 50 ||
          $("#id_8").val() == null || $("#id_8").val() == ""
          ) 
          {
            return  _alert("Bạn phải điền đầy đủ thông tin hoặc lỗi chọn công ty có chứa *")  ;
          } 
          else 
          {
            
              $.post("fuction__from_tra_ly_lich.php", {post1:$("#id1").val() ,
              post2:$("#id2").val(), 
              post3:$("#id3").val(),
              post4:$("#id4").val(), 
              post5:$("#id5").val(), 
              post6:$("#id6").val(), 
              post7:$("#id7").val(), 
              post8:$("#id8").val(), 
              post9:$("#id9").val(), 
              post10:$("#id10").val(), 
              post11:$("#id11").val(), 
              post12:$("#id12").val(), 
              post13:$("#id13").val(), 
              post14:$("#id14").val(), 
              post15:$("#id15").val(), 
              post16:$("#id16").val(), 
              post17:$("#id17").val(), 
              post18:$("#id18").val(), 
              post19:$("#id19").val(), 
              post20:$("#id20").val(), 
              
              
              post_trai:$("#id_8").val() }, function(data){
                // dung hàm UNION ALL trên server sẽ trả về 1 obj
                let array_2d = Object.values(JSON.parse(data)) ;
                 for (let index = 0 , len = array_2d.length ; index < len ; index++) {
                    if (array_2d[index][0] !=="") {
                        data_sum.push(array_2d[index]) ;  
                    }
                    
                   }
           let sen =     data_sum ;
                ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan')); 
    
            
           
           ReactDOM.render(<Table value={{data :  sen  , width:width_table , height :height_table }} /> 
           ,document.getElementById('id_nhan'));
          
            
            });
      
          }
  
          
      });
  });
  
  
        
       }, []);
    
	
    return ( 
<div  className={`flex flex-col w-full h-full border bg-gray-100   border-sky-500 `} >         
<div className={`ml-1 border-b border-sky-500 mr-1`}> Nhập số tai cần tra </div>
<div  className={`text-sm flex flex-row h-full  grow  bg-gray-100 mt-2 `} >


            <div id="id_ds"  className={`pl-2 pr-2 flex flex-col flex-shrink-0 w-[125px] h-full  `}  >
    <input className={` border  border-gray-400 w-full m-[1px]`}  id="id1" type="text" />      
    <input className={` border  border-gray-400 w-full m-[1px]`}   id="id2" type="text" />      
    <input className={` border  border-gray-400 w-full m-[1px]`}   id="id3" type="text" />      
    <input className={` border  border-gray-400 w-full m-[1px]`}  id="id4" type="text" />      
    <input className={` border  border-gray-400 w-full m-[1px]`}  id="id5" type="text" />      
    <input   className={` border  border-gray-400 w-full m-[1px]`}  id="id6" type="text" />      
    <input   className={` border  border-gray-400 w-full m-[1px]`}  id="id7" type="text" />      
    <input   className={` border  border-gray-400 w-full m-[1px]`}  id="id8" type="text" />      
    <input   className={` border  border-gray-400 w-full m-[1px]`}  id="id9" type="text" />      
    <input   className={` border  border-gray-400 w-full m-[1px]`}  id="id10" type="text" />      
    <input   className={` border  border-gray-400 w-full m-[1px]`}  id="id11" type="text" />      
    <input   className={` border  border-gray-400 w-full m-[1px]`}  id="id12" type="text" />      
    <input   className={` border  border-gray-400 w-full m-[1px]`}  id="id13" type="text" />      
    <input   className={` border  border-gray-400 w-full m-[1px]`}  id="id14" type="text" />      
    <input   className={` border  border-gray-400 w-full m-[1px]`}  id="id15" type="text" />      
    <input   className={` border  border-gray-400 w-full m-[1px]`}  id="id16" type="text" />      
    <input   className={` border  border-gray-400 w-full m-[1px]`}  id="id17" type="text" />      
    <input   className={` border  border-gray-400 w-full m-[1px]`}  id="id18" type="text" />      
    <input   className={` border  border-gray-400 w-full m-[1px]`}  id="id19" type="text" />      
    <input   className={` border  border-gray-400 w-full m-[1px]`}  id="id20" type="text" />      
    <input id="id_gui" type="button" className={` mt-1   _shadow rounded w-full  bg-sky-500 hover:bg-sky-700 h-8 flex items-center justify-center pl-2  font-medium `} value="Tra"/>    
    <input id="id_xoa" type="button" className={` mt-1  _shadow rounded w-full  bg-sky-500 hover:bg-sky-700 h-8 flex items-center justify-center pl-2  font-medium `} value="Clear"/>    
    <input id="id_xoa_2" type="button" className={` mt-1   _shadow rounded w-full  bg-sky-500 hover:bg-sky-700 h-8 flex items-center justify-center pl-2  font-medium `} value="Clear table"/>    

            </div>
            <div className={` flex h-full grow  bg-gray-100  `}  id="id_nhan"  ></div>	
            
</div>	

   
</div>    
     

    );


   } ;