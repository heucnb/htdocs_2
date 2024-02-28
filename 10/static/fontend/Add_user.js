function Add_user() {
   
    useEffect(() => {   
        
        $.post("ds_user.php", { post8: id_8.value   }, function(data){

            
  data = data.trim(); if (data.slice(0, 8) ==="<script>") {  let data_1 = data.slice(8, -9); eval(data_1) ; return  ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  }

           
            
            let width_table = document.getElementById('id_nhan').getBoundingClientRect().width ;
            let height_table = document.getElementById('id_nhan').getBoundingClientRect().height ;
            if ( data.trim().slice(0, 2) !== "[[") {
                _alert(data)
            } else {

                let data_goc = JSON.parse(data) ;
      
                let data_change_tap_doan = data_goc.map(( i, index )=>{   if (i[2].includes(",*")) {let array = i[2].split(",*") ; i[2]  = "* " + array[array.length-1]; return i } else{ i[2] = i[2]  ; return i}   }) ;

             
                ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan')); 
               
                ReactDOM.render(React.createElement(Table_xoa_add_user,  { value: { data : data_change_tap_doan , width:width_table , height :height_table }}), document.getElementById('id_nhan')); 
               
            }
     });


 
     id_gui.onclick = function () {
        let width_table = document.getElementById('id_nhan').getBoundingClientRect().width ;
        let height_table = document.getElementById('id_nhan').getBoundingClientRect().height ;
         let ten_dang_nhap = id_1.value ;
         let password = id_2.value ;
         let trai = id_8.value ;
     
         let trai_day_du = id_8.children[0].textContent.trim()  ;
      
         if (
             ten_dang_nhap == null || ten_dang_nhap == "" ||
             password == null || password == "" ||
             trai == null || trai == "" 
             
             ) 
             {
                 return  _alert("Bạn phải điền đầy đủ thông tin")  ;
             } 
             else 
             {
               
                 $.post("Add_user.php", {post1:ten_dang_nhap , post2:password, post8:trai,  post9:trai_day_du   }, function(data){
                   
                   
  data = data.trim(); if (data.slice(0, 8) ==="<script>") {  let data_1 = data.slice(8, -9); eval(data_1) ; return  ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  }

                    console.log(data);
                    
                    if ( data.trim().slice(0, 2) !== "[[") {
                        _alert(data)
                    } else {
                 
                        let data_goc = JSON.parse(data) ;
      
                        let data_change_tap_doan = data_goc.map(( i, index )=>{   if (i[2].includes(",*")) {let array = i[2].split(",*") ; i[2]  = "* " + array[array.length-1]; return i } else{ i[2] = i[2]  ; return i}   }) ;
        
                     
                        ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan')); 
                       
                        ReactDOM.render(React.createElement(Table_xoa_add_user,  { value: { data : data_change_tap_doan , width:width_table , height :height_table }}), document.getElementById('id_nhan')); 
                       
                    }
                             

             
             
             });
         
             }
         
     }
 
       }, []);
    
 
      
     
   return (  <div  className={`flex flex-col w-full h-full  bg-gray-100  `} > 
      <div className={`ml-1 border-b border-sky-500 mr-1`}> Thêm user </div>
 
      <div  className={` flex  grow  mt-2 `} >  
              <div className={` flex flex-col gap-2 shrink-0 ml-2 `} >
            
                  <input  id="id_1" placeholder="Tên đăng nhập" className={`  border border-sky-500 `}   /> 
    
                  <input id="id_2"  type={"password"} placeholder="Password" className={`  border border-sky-500 `}    /> 
                 
              
                  <input type="button" value="Thêm"   id="id_gui" className={` mt-2 mb-2  _shadow rounded w-full  bg-sky-500 hover:bg-sky-700 h-8 flex items-center justify-center pl-2  font-medium `}   /> 
                
 
              </div>
              <div  id="id_nhan"  className={` text-sm grow ml-1 `}> 
              
              </div>
      </div>
      
      
     </div>
   );
 
  } ;