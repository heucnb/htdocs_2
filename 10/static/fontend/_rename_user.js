function _rename_user(para, row, i) {
    let _div = document.createElement("_div");
    // getElementsByTagName sẽ lấy ra một mảng tag name phù hợp không giống by id lấy ra 1 cái 
    let body = document.getElementsByTagName("body");
    body[0].appendChild(_div);
  
    _div.style.zIndex = "10000";
  
    
  function Rename_user() {
    let ref_0 = useRef(null) ;
    let ref_cancel = useRef(null) ;
    let ref_ok = useRef(null) ;
   
       useEffect(() => {      
  
        let len = ref_0.current.textContent.length ;
        get_selection(ref_0.current,0,len) ;
        //------------------------------------------------------------------------------------
        ref_0.current.onmousedown =function click_rename(event) {
          document.getSelection().removeAllRanges();
        }
  
        
        ref_cancel.current.onclick =function click_cancel(event) {
         
          ReactDOM.unmountComponentAtNode(_div);
        }
       
  
        ref_ok.current.onclick =function click_ok(event) {
             let row_old = row.concat() ;
            row[para] = ref_0.current.textContent ;

                         $.post("edit_user.php",  {post1:JSON.stringify(row_old) , post2:JSON.stringify(row) , post8:id_8.value}, function(data){
  
                   
                  data = data.trim(); if (data.slice(0, 8) ==="<script>") {  let data_1 = data.slice(8, -9); eval(data_1) ; return  ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  }
  

                if (data.trim() === "ok") {
                     ReactDOM.unmountComponentAtNode( _div);  _div.remove(); 
                    
                     id_table.children[i].children[para+1].textContent = row[para] ;
                     let len = id_table.children.length ;
                   
                     
                     if (para===2) {
                         for (let index = 1 ; index < len ; index++) { 
                            id_table.children[index].children[para+1].textContent = row[para] ;
                          }
                          id_8.options[0].text = row[para] ; 
                     }
                     if (para===0&&i===1) {
                        document.getElementById('id_td_1').innerHTML="Đăng nhập - " + row[para];
                     }
                    
                    } else {
                
                  ReactDOM.unmountComponentAtNode( _div);  _div.remove();
                   _alert("Có lỗi");
                
            
               }
             
             });
  
        //   let array_chuong_thit_truoc_sua = JSON.parse(JSON.stringify(array_chuong_thit));
        //   array_chuong_thit[para[1]][1][para[2]][para[3]] = ref_0.current.textContent ;
        //   console.log(array_chuong_thit);
          
        //   ReactDOM.unmountComponentAtNode(_div);
          
        //   ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  
        //   ReactDOM.render(<Setup_chuong value={{data :  array_chuong_thit   }} /> 
        //   ,document.getElementById('id_nhan_index'));
   
        //   let dom_array_chuong_thit = id_nhan_index.children[0];
  
        //   let dom_vi_tri_rename = dom_array_chuong_thit.children[para[1]].children[1].children[para[2]].children[para[3]] ;
       
  
        //   const rect = dom_vi_tri_rename.getBoundingClientRect();
        
        //   let key = '' +para[1] + '_'+ para[2]+ '_'+ para[3] ;
        
       
        //   _loading(rect.left, rect.top, rect.width,rect.height, key);
        //   // ta phải gán biến node ở đây vì ReactDOM.unmountComponentAtNode không thể truy cập được node được lưu trong một obj phức tạp gồm nhiều obj con lồng nhau
        //   let node = document._loading[key] ;
    
        //       $.post("sua_chuong_thit.php",  {post1:JSON.stringify(array_chuong_thit) , post8:id_8.value}, function(data){
  
        //         if (data.trim() === "ok") { ReactDOM.unmountComponentAtNode( node);  node.remove(); } else {
        //           console.log(data);
        //           ReactDOM.unmountComponentAtNode( node);  node.remove();
        //            _alert("Có lỗi mạng");
        //            ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  
        //            ReactDOM.render(<Setup_chuong value={{data :  array_chuong_thit_truoc_sua   }} /> 
        //            ,document.getElementById('id_nhan_index'));
            
        //        }
             
        //      });
            
  
      
        }
  
        
  
       
          }, []);
    return <div className={'absolute flex justify-center items-center align-middle w-full h-full top-0 left-0 bg-slate-400 bg-opacity-50'} > 
    <div   className={' _shadow rounded w-1/2 bg-white  '}  > 
            <div className={'flex flex-wrap'} >  
                <div  className={`mx-5 mt-2 w-full`}  >  Chỉnh sửa thông tin  </div>
                <div ref = {ref_0 } contentEditable='true'  className={'mx-5  mt-2 p-2 w-full border border-solid border-emerald-400  focus:border-2 focus:border-solid focus:border-emerald-600 outline-0  '} >{row[para]}</div>
                <div className={' my-2 w-full flex justify-end'} > 
                      <div ref = {ref_cancel } className={`mx-10 rounded w-20 flex justify-center bg-stone-200 hover:bg-stone-400 _shadow` } >  Cancel </div>
                      <div ref = {ref_ok } className={'mx-10 rounded w-20 flex justify-center bg-sky-500 hover:bg-sky-700 _shadow'} >  OK </div>
              
                      
                </div>
              
  
            </div>
              
      </div>
   
     </div>
    
  }
    
    return   ReactDOM.render( <Rename_user />  ,  _div ) ;
     
  }
  
  
  