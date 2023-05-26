function Table_xoa_date(props) {
    
    let table_excel_height = props.value.height  ;
    let table_excel_width = props.value.width  ;
    let data_2d = props.value.data ;
    
    function xoa(event, rIndex) {
        
                        // - Sổ phối table xóa click
						if (gobal_tim_kiem_sua_xoa == "phoi")
						{
						
                        document.getElementById("id_1").value = data_2d[rIndex][0];
						var date_convert = data_2d[rIndex][1];
                        document.getElementById("id_2").value = date_convert.substr(6,4) + "-" + date_convert.substr(3,2)+"-" +date_convert.substr(0,2) ;
																	
						document.getElementById("id_3").value =  data_2d[rIndex][3] ;
                        document.getElementById("id_4").value = data_2d[rIndex][4];
						document.getElementById("id_5").value = data_2d[rIndex][5];
                       
					
				
					   // post to php with ajax
					    var hr = new XMLHttpRequest();
						hr.open("POST", "fuction_xoa--fuction_from_research_date_to_date.php", true);
						hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");; 
					    hr.send("post_1="+document.getElementById("id_1").value+ // số tai
					      "&post_2="+document.getElementById("id_2").value+ // ngày
								"&post_6="+ data_2d[rIndex][2]+ // lần phối
								"&post_7="+gobal_tim_kiem_sua_xoa+ // bảng post
								"&post_8="+document.getElementById("id_8").value); // trại
						hr.onload = function() {
						// Do whatever with response
					
												var ket_qua_tra_ve = hr.responseText.trim() ;   
												if (ket_qua_tra_ve  !== "Đã xóa")
												{
												document.getElementById("id_1").value = "";
						
												document.getElementById("id_2").value = "" ;
																	
												document.getElementById("id_3").value =  "" ;
												document.getElementById("id_4").value = "";
												document.getElementById("id_5").value = "";
                                                _alert(ket_qua_tra_ve)
												  
							
												}
												else
												{
							
												//	hiệu ứng amation css				
												if (click_xoa == 0){
												document.getElementById('id_1').className = mystyle_array[click_xoa] ;
												click_xoa = 1 ;
												} 
												else {
												document.getElementById('id_1').className = mystyle_array[click_xoa];
												click_xoa = 0 ;
												} ;	
                                                _alert(ket_qua_tra_ve + " dữ liệu phối  "+data_2d[rIndex][0])
                                                ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_research')); 
												document.getElementById('id_gui').value = 'Thêm lại hoặc sửa'; 
												}
												}
					 
						}
						// - Sổ đẻ table xóa click
						if (gobal_tim_kiem_sua_xoa == "de")
						{
						
                        document.getElementById("id_1").value = data_2d[rIndex][0];
						var date_convert = data_2d[rIndex][1];
                        document.getElementById("id_2").value = date_convert.substr(6,4) + "-" + date_convert.substr(3,2)+"-" +date_convert.substr(0,2) ;
																	
						document.getElementById("id_3").value =  data_2d[rIndex][3] ;
                        document.getElementById("id_4").value = data_2d[rIndex][4];
						document.getElementById("id_5").value = data_2d[rIndex][5];
						document.getElementById("id_6").value =  data_2d[rIndex][6] ;
                        document.getElementById("id_7").value = data_2d[rIndex][7];
						document.getElementById("id_9").value = data_2d[rIndex][2]  ;
					
				
					   // post to php with ajax
					    var hr = new XMLHttpRequest();
						hr.open("POST", "fuction_xoa--fuction_from_research_date_to_date.php", true);
						hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");; 
					    hr.send("post_1="+document.getElementById("id_1").value+ // số tai
					      "&post_2="+document.getElementById("id_2").value+ // ngày
								"&post_6="+ data_2d[rIndex][13]+ // lần phối
								"&post_7="+gobal_tim_kiem_sua_xoa+ // bảng post
								"&post_8="+document.getElementById("id_8").value); // trại
						hr.onload = function() {
						// Do whatever with response
					
												var ket_qua_tra_ve = hr.responseText.trim() ;   
													if (ket_qua_tra_ve  !== "Đã xóa")
												{
												document.getElementById("id_1").value = "";
						
												document.getElementById("id_2").value = "" ;
																	
												document.getElementById("id_3").value =  "" ;
												document.getElementById("id_4").value = "";
												document.getElementById("id_5").value = "";
												document.getElementById("id_6").value =  "" ;
												document.getElementById("id_7").value = "";
												document.getElementById("id_9").value = "";
												_alert(ket_qua_tra_ve)
												  
							
												}
												else
												{
							
												//	hiệu ứng amation css				
												if (click_xoa == 0){
												document.getElementById('id_1').className = mystyle_array[click_xoa] ;
												click_xoa = 1 ;
												} 
												else {
												document.getElementById('id_1').className = mystyle_array[click_xoa];
												click_xoa = 0 ;
												} ;	
                                                _alert(ket_qua_tra_ve + " dữ liệu đẻ  "+data_2d[rIndex][0])
                                                ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_research')); 
												document.getElementById('id_gui').value = 'Thêm lại hoặc sửa'; 
												}
												}
					 
						}
						// - Sổ cai sữa table xóa click
						if (gobal_tim_kiem_sua_xoa == "cai_sua")
						{
						
                        document.getElementById("id_1").value = data_2d[rIndex][0];
						var date_convert = data_2d[rIndex][1];
                        document.getElementById("id_2").value = date_convert.substr(6,4) + "-" + date_convert.substr(3,2)+"-" +date_convert.substr(0,2) ;
																	
						document.getElementById("id_3").value =  data_2d[rIndex][2] ;
                     
				
					   // post to php with ajax
					    var hr = new XMLHttpRequest();
						hr.open("POST", "fuction_xoa--fuction_from_research_date_to_date.php", true);
						hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");; 
					    hr.send("post_1="+document.getElementById("id_1").value+ // số tai
					      "&post_2="+document.getElementById("id_2").value+ // ngày
								"&post_6="+ data_2d[rIndex][4]+ // lần phối
								"&post_7="+gobal_tim_kiem_sua_xoa+ // bảng post
								"&post_8="+document.getElementById("id_8").value); // trại
						hr.onload = function() {
						// Do whatever with response
					
												var ket_qua_tra_ve = hr.responseText.trim() ;   
													if (ket_qua_tra_ve  !== "Đã xóa")
												{
												document.getElementById("id_1").value = "";
						
												document.getElementById("id_2").value = "" ;
																	
												document.getElementById("id_3").value =  "" ;
                                                _alert(ket_qua_tra_ve)
												
							
												}
												else
												{
							
												//	hiệu ứng amation css				
												if (click_xoa == 0){
												document.getElementById('id_1').className = mystyle_array[click_xoa] ;
												click_xoa = 1 ;
												} 
												else {
												document.getElementById('id_1').className = mystyle_array[click_xoa];
												click_xoa = 0 ;
												} ;	
                                                _alert(ket_qua_tra_ve + " dữ liệu cai sữa  "+data_2d[rIndex][0])
                                                ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_research')); 
												document.getElementById('id_gui').value = 'Thêm lại hoặc sửa'; 
												}
												}
					 
						}
						// - Sổ heo vấn đề table xóa click
							if (gobal_tim_kiem_sua_xoa == "van_de")
						{
						
                        document.getElementById("id_1").value = data_2d[rIndex][0];
						var date_convert = data_2d[rIndex][2];
                        document.getElementById("id_2").value = date_convert.substr(6,4) + "-" + date_convert.substr(3,2)+"-" +date_convert.substr(0,2) ;
																	
						document.getElementById("id_3").value =  data_2d[rIndex][3] ;
                     
				
					   // post to php with ajax
					    var hr = new XMLHttpRequest();
						hr.open("POST", "fuction_xoa--fuction_from_research_date_to_date.php", true);
						hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");; 
					    hr.send("post_1="+document.getElementById("id_1").value+ // số tai
					      "&post_2="+document.getElementById("id_2").value+ // ngày
								"&post_6="+ data_2d[rIndex][1]+ // lần phối
								"&post_7="+gobal_tim_kiem_sua_xoa+ // bảng post
								"&post_8="+document.getElementById("id_8").value); // trại
						hr.onload = function() {
						// Do whatever with response
					
												var ket_qua_tra_ve = hr.responseText.trim() ;   
													if (ket_qua_tra_ve  !== "Đã xóa")
												{
												document.getElementById("id_1").value = "";
						
												document.getElementById("id_2").value = "" ;
																	
												document.getElementById("id_3").value =  "" ;
                                                _alert(ket_qua_tra_ve)
												
							
												}
												else
												{
							
												//	hiệu ứng amation css				
												if (click_xoa == 0){
												document.getElementById('id_1').className = mystyle_array[click_xoa] ;
												click_xoa = 1 ;
												} 
												else {
												document.getElementById('id_1').className = mystyle_array[click_xoa];
												click_xoa = 0 ;
												} ;	
                                                _alert(ket_qua_tra_ve + " dữ liệu heo vấn đề  "+data_2d[rIndex][0])
                                                ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_research')); 
												document.getElementById('id_gui').value = 'Thêm lại hoặc sửa'; 
												}
												}
					 
						}
						
						// - Sổ heo nái loại table xóa click
							if (gobal_tim_kiem_sua_xoa == "nai_chet_loai")
						{
						
                        document.getElementById("id_1").value = data_2d[rIndex][0];
						var date_convert = data_2d[rIndex][2];
                        document.getElementById("id_2").value = date_convert.substr(6,4) + "-" + date_convert.substr(3,2)+"-" +date_convert.substr(0,2) ;
																	
						document.getElementById("id_3").value =  data_2d[rIndex][3] ;
                     
				
					   // post to php with ajax
					    var hr = new XMLHttpRequest();
						hr.open("POST", "fuction_xoa--fuction_from_research_date_to_date.php", true);
						hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");; 
					    hr.send("post_1="+document.getElementById("id_1").value+ // số tai
					      "&post_2="+document.getElementById("id_2").value+ // ngày
								"&post_6="+ data_2d[rIndex][1]+ // lần phối
								"&post_7="+gobal_tim_kiem_sua_xoa+ // bảng post
								"&post_8="+document.getElementById("id_8").value); // trại
						hr.onload = function() {
						// Do whatever with response
					
												var ket_qua_tra_ve = hr.responseText.trim() ;   
													if (ket_qua_tra_ve  !== "Đã xóa")
												{
												document.getElementById("id_1").value = "";
						
												document.getElementById("id_2").value = "" ;
																	
												document.getElementById("id_3").value =  "" ;
                                                _alert(ket_qua_tra_ve)
											
												}
												else
												{
							
												//	hiệu ứng amation css				
												if (click_xoa == 0){
												document.getElementById('id_1').className = mystyle_array[click_xoa] ;
												click_xoa = 1 ;
												} 
												else {
												document.getElementById('id_1').className = mystyle_array[click_xoa];
												click_xoa = 0 ;
												} ;	

												 _alert(ket_qua_tra_ve + " dữ liệu heo nái chết(loại)  "+data_2d[rIndex][0])
                                ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_research')); 
												document.getElementById('id_gui').value = 'Thêm lại hoặc sửa'; 
												}
												}
					 
						}
						// - Sổ heo con chết table xóa click
						if (gobal_tim_kiem_sua_xoa == "con_chet_loai")
						{
						
                        document.getElementById("id_1").value = data_2d[rIndex][0];
						var date_convert = data_2d[rIndex][2];
                        document.getElementById("id_2").value = date_convert.substr(6,4) + "-" + date_convert.substr(3,2)+"-" +date_convert.substr(0,2) ;
																	
						document.getElementById("id_3").value =  data_2d[rIndex][3] ;
						document.getElementById("id_4").value =  data_2d[rIndex][4] ;
				
					   // post to php with ajax
					    var hr = new XMLHttpRequest();
						hr.open("POST", "fuction_xoa--fuction_from_research_date_to_date.php", true);
						hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");; 
					    hr.send("post_1="+document.getElementById("id_1").value+ // số tai
					      "&post_2="+document.getElementById("id_2").value+ // ngày
								"&post_6="+ data_2d[rIndex][1]+ // lần phối
								"&post_7="+gobal_tim_kiem_sua_xoa+ // bảng post
								"&post_8="+document.getElementById("id_8").value); // trại
						hr.onload = function() {
						// Do whatever with response
					
												var ket_qua_tra_ve = hr.responseText.trim() ;   
													if (ket_qua_tra_ve  !== "Đã xóa")
												{
												document.getElementById("id_1").value = "";
						
												document.getElementById("id_2").value = "" ;
																	
												document.getElementById("id_3").value =  "" ;
												document.getElementById("id_4").value =  "" ;
                                                _alert(ket_qua_tra_ve)
											
							
												}
												else
												{
							
												//	hiệu ứng amation css				
												if (click_xoa == 0){
												document.getElementById('id_1').className = mystyle_array[click_xoa] ;
												click_xoa = 1 ;
												} 
												else {
												document.getElementById('id_1').className = mystyle_array[click_xoa];
												click_xoa = 0 ;
												} ;	
                                                _alert(ket_qua_tra_ve + " dữ liệu heo con chết (loại)  "+data_2d[rIndex][0])
                                                ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_research')); 
												document.getElementById('id_gui').value = 'Thêm lại hoặc sửa'; 
												}
												}
					 
						}
						// - Sổ heo hậu bị table xóa click
						if (gobal_tim_kiem_sua_xoa == "hau_bi")
						{
						
                        document.getElementById("id_1").value = data_2d[rIndex][0];
						var date_convert = data_2d[rIndex][1];
                        document.getElementById("id_2").value = date_convert.substr(6,4) + "-" + date_convert.substr(3,2)+"-" +date_convert.substr(0,2) ;
																	
						
						
						
						
						var date_convert_2 = data_2d[rIndex][3];
                        document.getElementById("id_3").value = date_convert_2.substr(6,4) + "-" + date_convert_2.substr(3,2)+"-" +date_convert_2.substr(0,2) ;
						
						document.getElementById("id_4").value =  data_2d[rIndex][2] ;
					   // post to php with ajax
					    var hr = new XMLHttpRequest();
						hr.open("POST", "fuction_xoa--fuction_from_research_date_to_date.php", true);
						hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");; 
					    hr.send("post_1="+document.getElementById("id_1").value+ // số tai
					      "&post_2="+document.getElementById("id_2").value+ // ngày
								"&post_7="+gobal_tim_kiem_sua_xoa+ // bảng post
								"&post_8="+document.getElementById("id_8").value); // trại
						hr.onload = function() {
						// Do whatever with response
					
												var ket_qua_tra_ve = hr.responseText.trim() ;   
													if (ket_qua_tra_ve  !== "Đã xóa")
												{
												document.getElementById("id_1").value = "";
						
												document.getElementById("id_2").value = "" ;
																	
												document.getElementById("id_3").value =  "" ;
												document.getElementById("id_4").value =  "" ;
                                                _alert(ket_qua_tra_ve)
											
							
												}
												else
												{
							
												//	hiệu ứng amation css				
												if (click_xoa == 0){
												document.getElementById('id_1').className = mystyle_array[click_xoa] ;
												click_xoa = 1 ;
												} 
												else {
												document.getElementById('id_1').className = mystyle_array[click_xoa];
												click_xoa = 0 ;
												} ;	
                                                _alert(ket_qua_tra_ve + " dữ liệu hậu bị  "+data_2d[rIndex][0])
                                                ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_research')); 
												document.getElementById('id_gui').value = 'Thêm lại hoặc sửa'; 
												}
												}
					 
						}
						
						
						
						
						// - Sổ heo hậu đực table xóa click
						if (gobal_tim_kiem_sua_xoa == "duc")
						{
						
                        document.getElementById("id_1").value = data_2d[rIndex][0];
						var date_convert = data_2d[rIndex][1];
                        document.getElementById("id_2").value = date_convert.substr(6,4) + "-" + date_convert.substr(3,2)+"-" +date_convert.substr(0,2) ;
																	
						
						
						
						
						var date_convert_2 = data_2d[rIndex][2];
                        document.getElementById("id_3").value = date_convert_2.substr(6,4) + "-" + date_convert_2.substr(3,2)+"-" +date_convert_2.substr(0,2) ;
						
					
					   // post to php with ajax
					    var hr = new XMLHttpRequest();
						hr.open("POST", "fuction_xoa--fuction_from_research_date_to_date.php", true);
						hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");; 
					    hr.send("post_1="+document.getElementById("id_1").value+ // số tai
					      "&post_2="+document.getElementById("id_2").value+ // ngày
								"&post_7="+gobal_tim_kiem_sua_xoa+ // bảng post
								"&post_8="+document.getElementById("id_8").value); // trại
						hr.onload = function() {
						// Do whatever with response
					
												var ket_qua_tra_ve = hr.responseText.trim() ;   
													if (ket_qua_tra_ve  !== "Đã xóa")
												{
												document.getElementById("id_1").value = "";
						
												document.getElementById("id_2").value = "" ;
																	
												document.getElementById("id_3").value =  "" ;
                                                _alert(ket_qua_tra_ve)
											
												}
												else
												{
							
												//	hiệu ứng amation css				
												if (click_xoa == 0){
												document.getElementById('id_1').className = mystyle_array[click_xoa] ;
												click_xoa = 1 ;
												} 
												else {
												document.getElementById('id_1').className = mystyle_array[click_xoa];
												click_xoa = 0 ;
												} ;	
                                                _alert(ket_qua_tra_ve + " dữ liệu đực  "+data_2d[rIndex][0])
                                                ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_research')); 
												document.getElementById('id_gui').value = 'Thêm lại hoặc sửa'; 
												}
												}
					 
						}
						
						
						
						

      }
      
      
       return (  
          <div style={  {    height: `${table_excel_height}px`, width :  `${table_excel_width}px`,     overflow: 'scroll',  position: 'relative',} }  >
          {data_2d.map((row, i) => {
           
           return (
              <div   style={{  display: "table-row" } }   >
                               <div  onClick={(event) => { xoa(event, i)    }} className={` ${((  )=>{ if (i===0) { } else { return "  w-full  bg-sky-500 hover:bg-sky-700"}  })()}  `} style={  {    position: 'relative',   border: "1px ridge #ccc", height: "20px", display: "table-cell", paddingLeft: "4px", paddingRight : "4px",  borderRightStyle: 'none',  borderTopStyle: (function(){    if (i===0 ) { return 'ridge'  } else { return 'none'  }         })(),  } }  >  Xoá </div>  
                            {row.map((cell, j) => { return <div  style={  {    position: 'relative',   border: "1px ridge #ccc", height: "20px", display: "table-cell", paddingLeft: "4px", paddingRight : "4px",  borderRightStyle: (function(){    if (j===data_2d[0].length -1) { return 'ridge'  } else { return 'none'  }         })(), borderTopStyle:  (function(){    if (i===0 ) { return 'ridge'  } else { return 'none'  }         })(), } }  > {cell}  </div> })} 
              </div> 
  
            );
          })}    
          
          </div>   
  
       );
  
   
      } ;