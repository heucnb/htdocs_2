function from_bao_cao_thang(props) {
    
   useEffect(() => {     
    let width_table = document.getElementById('id_nhan').getBoundingClientRect().width ;
    let height_table = document.getElementById('id_nhan').getBoundingClientRect().height ;
   
    function bao_cao_thang(){
        id_gui.style.color = "blue";
        id_gui_1.style.color = "black";
        try { Table_nguoc.remove_EventListener(); } catch (error) { }
        ReactDOM.unmountComponentAtNode(id_nhan);  
       
           $.post(gobal_post_month,  {post1:id_year.children[0].value  , post8:id_8.value}, function(data){
        
  data = data.trim(); if (data.slice(0, 8) ==="<script>") {  let data_1 = data.slice(8, -9); eval(data_1) ; return  ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  }

            if (data.trim() === "Chưa có dữ liệu") {
                _alert("Chưa có dữ liệu")
            } else {
                let arrayjavascript  = JSON.parse(data);

            // mặc định undefined là convert row to col
                // convert_row_to_col dùng cho Table_hieu_2
            let convert_row_to_col ;
            convert_row_to_col = true
            if (gobal_post_month === "fuction_thang--from_theo_doi_ty_le_phoi.php") { convert_row_to_col = false } 
            
            ReactDOM.render(React.createElement(Table,  { value: { data : arrayjavascript , width:width_table , height :height_table , convert : convert_row_to_col  }}), document.getElementById('id_nhan'));
           
                
            }
            
            });
    } 

    id_gui.onclick = bao_cao_thang ;
   
   //-----------------------------------------------------------------------------------------------------------------------------------------
   
   $(document).ready(function(){
       $("#id_gui_1").click(function(){
        id_gui_1.style.color = "blue";
        id_gui.style.color = "black";
        try { Table.remove_EventListener(); } catch (error) { }
        ReactDOM.unmountComponentAtNode(id_nhan);  

           $.post(gobal_post, {post1:id_year.children[0].value  , post8:id_8.value}, function(data){
             
  data = data.trim(); if (data.slice(0, 8) ==="<script>") {  let data_1 = data.slice(8, -9); eval(data_1) ; return  ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  }

            if (data.trim() === "Chưa có dữ liệu") {
                _alert("Chưa có dữ liệu")
            } else {

                
            let arrayjavascript  = JSON.parse(data);

            // mặc định undefined là convert row to col
            // convert_row_to_col dùng cho Table_hieu_2
            let convert_row_to_col ;
            convert_row_to_col = true
            if (gobal_post === "fuction_tuan--from_theo_doi_ty_le_phoi.php") { convert_row_to_col = false } 
            ReactDOM.render(React.createElement(Table,  { value: { data : arrayjavascript , width:width_table , height :height_table , convert : convert_row_to_col  }}), document.getElementById('id_nhan'));
       
            }
           
            

            });
        
           
       });
   });
//---------------------------------------------------------------------------------------------------------------------------
id_year.children[0].style.background = 'rgb(236,252,203)';
    }, []);
   
     return (  
        <div  className={ 'grow flex flex-col flex-wrap  '}   >
            <div className={ ' w-full flex bg-lime-100 '}  > 
            <div id='id_year' className={` w-20  `} > <Select_nam /> </div>
             <input id="id_gui" type="button" value="Tra theo tháng" className={` px-4 w-40  bg-lime-100`} />
              <input id="id_gui_1" type="button" value="Tra theo tuần" className={` px-4 w-40  bg-lime-100`} ></input>
            </div>
            <div className={ ' w-full grow '} id="id_nhan"  >   </div>

       
        </div>   

     );

 
    } ;