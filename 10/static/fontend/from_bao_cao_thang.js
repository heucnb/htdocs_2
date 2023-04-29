function from_bao_cao_thang(props) {
    
   useEffect(() => {     
    let width_table = document.getElementById('id_nhan').getBoundingClientRect().width ;
    let height_table = document.getElementById('id_nhan').getBoundingClientRect().height ;
   
    var year = new Date().getFullYear();
    document.getElementById("id_6_1").innerHTML = year;
    document.getElementById('id_6_1').value = year ;
    $(document).ready(function(){
        $("#id_6_year").click(function(){
            var n = new Date().getFullYear();
            document.getElementById("id_6_10").innerHTML = n-9;
            document.getElementById("id_6_10").value = n -9;
            document.getElementById("id_6_9").innerHTML = n-8;
            document.getElementById("id_6_9").value = n-8;
             document.getElementById("id_6_8").innerHTML = n-7;
            document.getElementById("id_6_8").value = n-7;
             document.getElementById("id_6_7").innerHTML = n-6;
            document.getElementById("id_6_7").value = n-6;
            document.getElementById("id_6_6").innerHTML = n-5;
            document.getElementById("id_6_6").value = n-5;
             document.getElementById("id_6_5").innerHTML = n-4;
            document.getElementById("id_6_5").value = n-4;
            document.getElementById("id_6_4").innerHTML = n-3;
            document.getElementById("id_6_4").value = n-3;
            document.getElementById("id_6_3").innerHTML = n-2;
            document.getElementById("id_6_3").value = n-2;
            document.getElementById("id_6_2").innerHTML = n-1;
            document.getElementById("id_6_2").value = n-1;
            document.getElementById("id_6_1").innerHTML = n;
            document.getElementById("id_6_1").value = n;
            
           
        
        });
    });
        
   
    function bao_cao_thang(){
        id_gui.style.color = "blue";
        id_gui_1.style.color = "black";
        try { Table_hieu_2.remove_EventListener(); } catch (error) { }
        ReactDOM.unmountComponentAtNode(id_nhan);  
       
           $.post(gobal_post_month,  {post1:$("#id_6_year").val()  , post8:$("#id_8").val()}, function(data){
        
            if (data.trim() === "Chưa có dữ liệu") {
                _alert("Chưa có dữ liệu")
            } else {
                let arrayjavascript  = JSON.parse(data);

            // mặc định undefined là convert row to col
            let convert_row_to_col ;
        
            if (gobal_post_month === "fuction_thang--from_theo_doi_ty_le_phoi.php") { convert_row_to_col = false } 
            
            ReactDOM.render(React.createElement(Table_hieu_2,  { value: { data : arrayjavascript , width:width_table , height :height_table , convert : convert_row_to_col  }}), document.getElementById('id_nhan'));
           
                
            }
            
            });
    } 

    id_gui.onclick = bao_cao_thang ;
   
   
   
   $(document).ready(function(){
       $("#id_gui_1").click(function(){
        id_gui_1.style.color = "blue";
        id_gui.style.color = "black";
        try { Table_hieu_2.remove_EventListener(); } catch (error) { }
        ReactDOM.unmountComponentAtNode(id_nhan);  

           $.post(gobal_post, {post1:$("#id_6_year").val()  , post8:$("#id_8").val()}, function(data){
             
            if (data.trim() === "Chưa có dữ liệu") {
                _alert("Chưa có dữ liệu")
            } else {

                
            let arrayjavascript  = JSON.parse(data);

            // mặc định undefined là convert row to col
            let convert_row_to_col ;
            if (gobal_post === "fuction_tuan--from_theo_doi_ty_le_phoi.php") { convert_row_to_col = false } 
            ReactDOM.render(React.createElement(Table_hieu_2,  { value: { data : arrayjavascript , width:width_table , height :height_table , convert : convert_row_to_col  }}), document.getElementById('id_nhan'));
       
            }
           
            

            });
        
           
       });
   });


    }, []);
   
     return (  
        <div  className={ 'grow flex flex-col flex-wrap  '}   >
            <div className={ ' w-full  '}  >  <select  id="id_6_year" >
									<option id="id_6_1" value=""></option>
									<option id="id_6_2" value=""></option>
									<option id="id_6_3" value=""></option>
									<option id="id_6_4" value=""></option>
									<option id="id_6_5" value=""></option>
									<option id="id_6_6"value=""></option>
									<option id="id_6_7"value=""></option>
									<option id="id_6_8" value=""></option>
									<option id="id_6_9" value=""></option>
									<option id="id_6_10" value=""></option>
			
							</select> <input id="id_gui" type="button" value="Tra theo tháng"/> <input id="id_gui_1" type="button" value="Tra theo tuần"></input>
            </div>
            <div className={ 'text-sm w-full grow '} id="id_nhan"  >   </div>

       
        </div>   

     );

 
    } ;