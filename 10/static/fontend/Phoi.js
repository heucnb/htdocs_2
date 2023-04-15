function Phoi() {
    let ref_nai = useRef(null) ;
    let ref_date =  useRef(null) ;
    let ref_duc =  useRef(null) ;
    let ref_nguoi =  useRef(null) ;
    let ref_bieu_hien =  useRef(null) ;
    let ref_data =  useRef(null) ;
    function gui() {
        
					   // post to php with ajax
                       var hr = new XMLHttpRequest();
                       hr.open("POST", "fuction_thêm--from_phối.php", true);
                       hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                       hr.send("post1="+ref_nai.current.value+ // số tai
                              "&post2="+ref_date.current.value+ // ngày phoi
                               "&post3="+ ref_duc.current.value+ 
                               "&post4="+ref_nguoi.current.value+ 
                               "&post5="+ref_bieu_hien.current.value+ 
                               "&post8="+document.getElementById("id_8").value); // trại
                       hr.onload = function() {
                        try {
                           array_return = JSON.parse(hr.responseText);
                           ref_data.current.innerHTML = array_return;
                        } catch(e) {
                            _alert(hr.responseText)
                        }
                    
                                               }
        
    }
       useEffect(() => {     
            

           }, []);
       
     return (  <div  className={` border bg-gray-100   border-sky-500 mt-2`} > 
        <div className={`ml-1 border-b border-sky-500 mr-1`}> Nhập Phối </div>

        <div  className={` flex  mt-2 `} >  
                <div className={` ml-2 `} >
                    <div> Mã thẻ nái:  </div>
                    <input  ref={ref_nai}  className={`  border border-sky-500 `}    /> 
                    <div> Ngày phối:  </div>
                    <input  ref={ref_date}  className={`  border border-sky-500 `}    /> 
                    <div> Mã đực:  </div>
                    <input  ref={ref_duc}  className={`  border border-sky-500 `}    /> 
                    <div> Người phối: </div>
                    <input  ref={ref_nguoi}  className={`  border border-sky-500 `}    /> 
                    <div> Biểu hiện khi phối:  </div>
                    <input  ref={ref_bieu_hien}  className={`  border border-sky-500 `}    /> 
                    <div  onClick={(event)=>{ gui() }}  className={` mt-2 mb-2  _shadow rounded w-full  bg-sky-500 hover:bg-sky-700 h-8 flex items-center justify-center pl-2  font-medium `} > Thêm </div>
                </div>
                <div  ref={ref_data}  className={` ml-1 `}> 
                    dữ liệu trả về
                </div>
        </div>
        
        
       </div>
     );
 
    } ;