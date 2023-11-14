function _rename(kiem_tra, para) {
  let _div = document.createElement("div");
  // getElementsByTagName sẽ lấy ra một mảng tag name phù hợp không giống by id lấy ra 1 cái 
  let body = document.getElementsByTagName("body");
  body[0].appendChild(_div);

  _div.style.zIndex = "10000";

  let name_change_old ;
  if (kiem_tra === 1) { name_change_old = para[0] } else { name_change_old = array_chuong_thit[para[1]][0] } ;
function Rename() {
  let ref_0 = useRef(null) ;
  let ref_cancel = useRef(null) ;
  let ref_ok = useRef(null) ;
  let ref_detele = useRef(null) ;
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

   
        if (kiem_tra===1) {

           // nếu tên của chuồng thêm vào trùng với tên của chuồng trước đó thì thông báo lỗi

         for (let i = 0 , len = array_chuong_thit[para[1]][1].length ; i < len ; i++) {  
                 
          for (let j = 0 , len_j = array_chuong_thit[para[1]][1][i].length ; j < len_j ; j++) {
          

                 if (ref_0.current.textContent === array_chuong_thit[para[1]][1][i][j]) {

                    return  _alert("Tên chuồng này đã có rồi") ;
                 }

            }

      }

          array_chuong_thit[para[1]][1][para[2]][para[3]] = ref_0.current.textContent ;
        }

        if (kiem_tra===0) {

          // nếu tên của khu thêm vào trùng với tên của khu trước đó thì thông báo lỗi

            let sum_chi_nhanh  = array_chuong_thit.length ;

            for (let index = 0 , len = sum_chi_nhanh ; index < len ; index++) {
              if (ref_0.current.textContent  === array_chuong_thit[index][0] ) {
                return  _alert("Tên chi nhánh này đã có rồi") ;
              }

          }          


         array_chuong_thit[para[1]][0] = ref_0.current.textContent ;
       }
       
        

//-----------------------------------------------------------------------------------------------------------

       
      let   khu = (para[1]+1)+"."+ array_chuong_thit[para[1]][0] ;
      let  chuong = ((para[2]*6)+(para[3]+1)) +"." +   array_chuong_thit[para[1]][1][para[2]][para[3]]  ;
    
        let array_chuong =[];
        let array_khu =[];
         for (let index = 0 , len = array_chuong_thit.length ; index < len ; index++) { 
           // chuyển mảng 2 chiều thành 1 chiều
            array_chuong[index] =  array2d_to_1d(array_chuong_thit[index][1]) ;
            array_khu[index] = array_chuong_thit[index][0] ;

          }

          let array_khu_data = array_chuong.map(( i, index )=>{return  i.map(( j, index_j )=>{return j = array_khu[index]  }) }) ;

          $.post("sua_chuong_thit.php", {  post1: JSON.stringify(   array2d_to_1d(array_chuong) ) , post2: JSON.stringify(  array2d_to_1d(array_khu_data) ) ,  post8:id_8.value, post9:para[5], post10:para[6] , post11:khu, post12:chuong }, function(data){


            data = data.trim(); if (data.slice(0, 8) ==="<script>") {  let data_1 = data.slice(8, -9); eval(data_1) ; return  ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  }
              
                  if ( data.trim().slice(0, 2) !== "ok") {

                      _alert(data) ;
                  } else {
                    // lưu cấu hình chuồng vào local storage
                    arrayjavascript_3[0][6] =JSON.stringify(array_chuong_thit)  ;
                    localStorage.setItem('all', JSON.stringify(arrayjavascript_3) );
                    ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  
                    ReactDOM.unmountComponentAtNode(_div);
                    _div.remove();
                    ReactDOM.render(<Setup_chuong value={{data :  array_chuong_thit   }} /> 
                    ,document.getElementById('id_nhan_index'));
                    _alert("Cập nhật thành công") ;

                  }
                           
                      
                  });
      
    
      }
//-----------------------------------------------------------------------------------------------------------------------------------------------------------
      ref_detele.current.onclick =function click_ok(event) {

        ReactDOM.unmountComponentAtNode(_div);
          console.log('detele click');
   let array_chuong_thit_truoc_delete = JSON.parse(JSON.stringify(array_chuong_thit));
   // nếu detele chuồng------------------------------------------------------------------------------
          if (kiem_tra===1) {
        
          
            let row_end = array_chuong_thit[para[1]][1].length ;
            let col_end = array_chuong_thit[para[1]][1][row_end-1].length ;
            let chuong_end = array_chuong_thit[para[1]][1][row_end-1][col_end-1] ;
     
            if ((para[2] !== (row_end-1) ) || (para[3] !== (col_end-1) )) {
              return  _alert("Bạn phải xoá chuồng "+ chuong_end + " trước") ; 
            }
          
             // xoá chuồng cuối cùng của dòng
            array_chuong_thit[para[1]][1][row_end-1].pop() ;
              // chuồng cuối cùng ở vị trí index_j = 0 thì phải xoá thêm dòng đó nữa
            if (array_chuong_thit[para[1]][1][row_end-1].length ===0) {
              array_chuong_thit[para[1]][1].pop() ;

            }
            // chuồng cuối cùng ở vị trí index_i =0, index_j =0 thì phải xoá thêm chi nhánh
            if (array_chuong_thit[para[1]][1].length ===0) {
              array_chuong_thit.pop() ;

            }

          //-----------------------------------------------------------------------------------------------------------

       
      let   khu = "|_|xoa";
      let  chuong = "|_|xoa" ;
    
      
        let array_chuong =[];
        let array_khu =[];
         for (let index = 0 , len = array_chuong_thit.length ; index < len ; index++) { 
           // chuyển mảng 2 chiều thành 1 chiều
            array_chuong[index] =  array2d_to_1d(array_chuong_thit[index][1]) ;
            array_khu[index] = array_chuong_thit[index][0] ;

          }

          let array_khu_data = array_chuong.map(( i, index )=>{return  i.map(( j, index_j )=>{return j = array_khu[index]  }) }) ;

       

          $.post("sua_chuong_thit.php", {  post1: JSON.stringify(   array2d_to_1d(array_chuong) ) , post2: JSON.stringify(  array2d_to_1d(array_khu_data) ) ,  post8:id_8.value, post9:para[5], post10:para[6] , post11:khu, post12:chuong }, function(data){


            data = data.trim(); if (data.slice(0, 8) ==="<script>") {  let data_1 = data.slice(8, -9); eval(data_1) ; return  ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  }
              
                  if ( data.trim().slice(0, 2) !== "ok") {

                    ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  

                    ReactDOM.render(<Setup_chuong value={{data :  array_chuong_thit_truoc_delete   }} /> 
                    ,document.getElementById('id_nhan_index'));

                      _alert(data) ;
                  } else {
                    // lưu cấu hình chuồng vào local storage
                    arrayjavascript_3[0][6] =JSON.stringify(array_chuong_thit)  ;
                    localStorage.setItem('all', JSON.stringify(arrayjavascript_3) );
                    ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  
                    ReactDOM.unmountComponentAtNode(_div);
                    _div.remove();
                    ReactDOM.render(<Setup_chuong value={{data :  array_chuong_thit   }} /> 
                    ,document.getElementById('id_nhan_index'));
                    _alert("Cập nhật thành công") ;

                  }
                           
                      
                  });
           
         }
 // nếu detele chi nhánh------------------------------------------------------------------------------
         if (kiem_tra===0) {
            
          let sum_chi_nhanh = array_chuong_thit.length ;
          if ((para[1] !== (sum_chi_nhanh-1) ) ) {
            return  _alert("Bạn phải xoá chi nhánh: "+ array_chuong_thit[sum_chi_nhanh - 1][0] + " trước") ; 
          }
          return  _alert("Bạn phải xoá hết các chuồng trong chi nhánh: "+ array_chuong_thit[para[1]][0]  +" trước") ; 
         }

      }


     
        }, []);
  return <div className={'absolute flex justify-center items-center align-middle w-full h-full top-0 left-0 bg-slate-400 bg-opacity-50'} > 
  <div   className={' _shadow rounded w-1/2 bg-white  '}  > 
          <div className={'flex flex-wrap'} >  
              <div  className={`mx-5 mt-2 w-full`}  >  Chỉnh sửa tên  </div>
              <div ref = {ref_0 } contentEditable='true'  className={'mx-5  mt-2 p-2 w-full border border-solid border-emerald-400  focus:border-2 focus:border-solid focus:border-emerald-600 outline-0  '} >{  name_change_old }</div>
              <div className={' my-2 w-full flex justify-end'} > 
                    <div ref = {ref_cancel } className={`mx-10 rounded w-20 flex justify-center bg-stone-200 hover:bg-stone-400 _shadow` } >  Cancel </div>
                    <div ref = {ref_ok } className={'mx-10 rounded w-20 flex justify-center bg-sky-500 hover:bg-sky-700 _shadow'} >  Rename </div>
                    <div ref = {ref_detele } className={'mx-10 rounded w-20 flex justify-center _shadow'} >  < Button_detele/> </div>
                    
              </div>
            

          </div>
            
    </div>
 
   </div>
  
}
  
  return   ReactDOM.render( <Rename />  ,  _div ) ;
   
}


