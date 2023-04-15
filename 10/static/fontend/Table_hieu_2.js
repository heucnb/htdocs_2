
  // *** thẻ input và button khi click sẽ làm mất sự kiện tiêu điểm của focus, thẻ div thì không. Do đó ta phải setTimeout để lấy lại tiêu điểm sau.


  function Table_hieu_2(props) {
 let col =200 ;   
 let row =100 ; 
 let limit_scroll = 45 ; 
 let limit_scroll_col = 45 ;
      // dùng fill chậm hơn một ít không đáng kể so với for 
  var Data = new Array(row).fill(null).map((i)=> i = new Array(col).fill(null)) ;
  var  text_formular = new Array(row).fill(null).map((i)=> i = new Array(col).fill(null)) ;
  var  index_formular = new Array(row).fill(null).map((i)=> i = new Array(col).fill(null)) ;
  var  formular = [];
  var  Data_show;
  var Data_show_0 ;
    let limit = 50 ;
  let limit_col = 50 ;



if (props.value === undefined) {

  
 
} else {
 

  let Data_save = props.value.Data_save ;
  let _len = Data_save.length ;

          for (let index = 0; index < _len ; index++) {
            Data[Data_save[index][0]][Data_save[index][1]] = Data_save[index][2] ;
            text_formular[Data_save[index][0]][Data_save[index][1]] = Data_save[index][3] ;
            index_formular[Data_save[index][0]][Data_save[index][1]] = Data_save[index][4] ;
            }
  let len_formular = props.value.formular.length ;
 
let formular_save = props.value.formular ;
for (let index = 0; index < len_formular ; index++) { formular.push( eval( formular_save[index]  )) ; }



}


  Data_show = Data.slice(0,limit)   ;
 Data_show_0 = Data_show.map((item, index)=>{    return  item.slice(0, limit_col)}) ;

 
   



  

    var vi_tri_o_truoc = [null,null] ;
    var vi_tri_click_in_Data =[null,null, null, null];
  
  

    var cong_thuc_chua_hoan_thanh = "";
   var onKeyDown_1_element = false;
    var onKeyDown = false ;
    var onclick_tinh_toan = false ;
   

  var cong_thuc_them_vao = [null,null,null] ;
  var vi_tri_cong_thuc_them_vao ;
  var table_excel =  useRef(null) ;
      var a =  useRef(null) ;
     var canvas_ = useRef(null) ;
     var ref_0 = useRef(null) ;
   let  select_range_excel = false ;

   //-----------------------------------------------------------------
     var ref_track = useRef(null) ;
     var ref_thumb = useRef(null) ;
     let move_thumb = false ;
     let left_thumb = 0;
     let x_thumb = 0 ;

     var ref_track_col = useRef(null) ;
     var ref_thumb_col = useRef(null) ;
     let move_thumb_col = false ;
     let top_thumb = 0;
     let y_thumb = 0 ;
     //------------------------------------------------------
     function button_bar_scroll_right_click(event) {
      let rect_ref_track = ref_track.current.getBoundingClientRect() ;

      let  move = (rect_ref_track.width)/(limit_scroll_col+1 );
   
     
      left_thumb = ref_thumb.current.getBoundingClientRect().left - rect_ref_track.left + 20;
      console.log(12369,rect_ref_track.width +20,);
      console.log(left_thumb +15);
      if (left_thumb + move +15 < rect_ref_track.width +20 ) {
        console.log(124, left_thumb + move);
          ref_thumb.current.style.left =left_thumb + move+ "px"  ; 
    
          table_excel.current.scrollLeft = table_excel.current.scrollLeft + click_scroll_dichuyen  ; 
         
          
      }
      if (left_thumb+move +15 >= rect_ref_track.width +20 ) {
        ref_thumb.current.style.left =rect_ref_track.width + 20 -15 + "px"  ; 
  
        table_excel.current.scrollLeft = table_excel.current.scrollLeft + click_scroll_dichuyen  ; 
        

    }
    
      
  }
 
//------------------------------------------------------------------
  function button_bar_scroll_left_click(event) {
 let rect_ref_track = ref_track.current.getBoundingClientRect() ;
 let  move = (rect_ref_track.width)/(limit_scroll_col+1 );
   
     
 left_thumb = ref_thumb.current.getBoundingClientRect().left - rect_ref_track.left + 20;

    if (left_thumb - move  > 20  ) {
        ref_thumb.current.style.left =left_thumb -  move+ "px"  ; 
  
        table_excel.current.scrollLeft = table_excel.current.scrollLeft - click_scroll_dichuyen  ; 
        
    }
    if (left_thumb - move  <= 20  ) {
      ref_thumb.current.style.left =20+ "px"  ; 

      table_excel.current.scrollLeft = table_excel.current.scrollLeft - click_scroll_dichuyen  ; 
      
  }
  
    
}

//--------------------------------------------------------------------------------------------------
//------------------------------------------------------------------
function button_bar_scroll_top_click(event) {
  let rect_ref_track = ref_track_col.current.getBoundingClientRect() ;

  let  move = (rect_ref_track.height)/(limit_scroll+1 );

 
  top_thumb = ref_thumb_col.current.getBoundingClientRect().top - rect_ref_track.top + 20;
  console.log('*****',rect_ref_track.height );

  console.log('*****',move );
  console.log('*****',top_thumb );
  if (top_thumb - move  > 20 ) {

    ref_thumb_col.current.style.top =top_thumb - move+ "px"  ; 
    console.log('*****',top_thumb + move+ "px" );
      table_excel.current.scrollTop = table_excel.current.scrollTop - click_scroll_dichuyen  ; 
     
      
  }
  if (top_thumb- move  <=20 ) {
    ref_thumb_col.current.style.top = "20px"  ; 

    table_excel.current.scrollTop = table_excel.current.scrollTop - click_scroll_dichuyen  ; 
    

}
  
} 
//--------------------------------------------------------------------------

function button_bar_scroll_bottom_click(event) {
  let rect_ref_track = ref_track_col.current.getBoundingClientRect() ;

  let  move = (rect_ref_track.height)/(limit_scroll+1 );

 
  top_thumb = ref_thumb_col.current.getBoundingClientRect().top - rect_ref_track.top + 20;
  console.log('*****',rect_ref_track.height );

  console.log('*****',move );
  console.log('*****',top_thumb );
  if (top_thumb + move +15 < rect_ref_track.height +20 ) {

    ref_thumb_col.current.style.top =top_thumb + move+ "px"  ; 
    console.log('*****',top_thumb + move+ "px" );
      table_excel.current.scrollTop = table_excel.current.scrollTop + click_scroll_dichuyen  ; 
     
      
  }
  if (top_thumb+move +15 >= rect_ref_track.height +20 ) {
    ref_thumb_col.current.style.top =rect_ref_track.height + 20 -15 + "px"  ; 

    table_excel.current.scrollTop = table_excel.current.scrollTop + click_scroll_dichuyen  ; 
    

}

  
} 
      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      var limit_view   ;
      var limit_col_view  ;
      let tro_ve_vi_tri_begin ;
      useEffect(() => {

     


        table_excel.current.addEventListener("scroll", _onScroll);



         tro_ve_vi_tri_begin = a.current.children[ 1].children[limit_col+1].getBoundingClientRect().left ;
        
        document.body.style.zoom = "100%";
    
// ngăn cản zoom bằng ctr
// phải truyền thêm thuộc tính  {passive: false}  mới ngăn cản được
        document.body.addEventListener(  "wheel",   (e )=>{ if(e.ctrlKey === true) { e.preventDefault(); } }   ,    {passive: false});
        

        width_bar_reference_col = a.current.children[0].children[0].clientWidth ;
        console.log(width_bar_reference_col);
        document.body.style.margin  = "0px 20px 20px 20px" ;

        console.log(table_excel.current.clientHeight);

        var sum = 0;
                      
                      while ( a.current.children[sum + 1].children[ 0 ].getBoundingClientRect().y <= table_excel.current.clientHeight - 2 + table_excel.current.getBoundingClientRect().y) {

                        sum++;
                      }
                     
                      limit_view = sum - 1 ; 
                      console.log('---------------------------------'+  limit_view);

                      var sum_col = 0;
                      
                      while ( a.current.children[0].children[ sum_col + 1 ].getBoundingClientRect().x <= table_excel.current.getBoundingClientRect().x +  table_excel.current.clientWidth - 2) {

                        sum_col++;
                      }
                     
                      limit_col_view = sum_col - 1 ; 
                      console.log('---------------------------------'+  limit_col_view);

                    for (let i = 0; i <= limit_view; i++) {
                      for (let j = 0; j <= limit_col_view; j++) {
                        a.current.children[i+1].children[ j + 1].style.zIndex = j ;    
                        
                      }
                      
                    }         

        vi_tri_click_in_Data = [0,0,0,0] ;
        key_enter(0,0,0,0); // tô màu và focus

        mien_select_array_2d[0] =  0 ;
        mien_select_array_2d[1] =  0 ;
      
        _onMouseEnter_not_event(0, 0, 0, 0) ;
       

        // canvas làm mất lắng nghe sự kiện wheel ở table_excel khi vị trí mouse ở canvas
        // thêm sự kiện này để khi cuộn canvas table_excel di chuyển
        canvas_.current.addEventListener("wheel", (evt) => {
        table_excel.current.scrollTop = table_excel.current.scrollTop  + evt.deltaY ;  
      });


//   canvas làm mất lắng nghe sự kiện click, double click 
// thêm sự kiện này để ẩn cavas đi
      canvas_.current.onmousedown = function(event){
            
        // khi click vào canvas nếu không fill thì sẽ ẩn canvas đi
            if (trang_thai_fill === false) {
              console.log('ẩn canvas----------------');
              Object.assign(canvas_.current.style ,{display : "none"}) ;
              turn_off_onMouseEnter = true ;
              select_range_excel = true ;

            }
              
         

      };


     
     // thay đổi  move_thumb về false
      document.addEventListener('mouseup', (event)=>{ select_range_excel = false;  move_thumb =  false;  move_thumb_col = false });

      document.addEventListener('mousemove', function (event) {
      
        if ( move_thumb === true ) {
         
          let  move = event.clientX - x_thumb ;
          let rect_ref_track = ref_track.current.getBoundingClientRect() ;
          let width_ref_track = rect_ref_track.width ;
        
          if (left_thumb + move +15 < width_ref_track +20 && left_thumb+ move>20 ) {
        
              ref_thumb.current.style.left = left_thumb + move+ "px"  ; 
        
              table_excel.current.scrollLeft = (left_thumb + move-20)/width_ref_track *limit_scroll_col*click_scroll_dichuyen  ; 
              
          }
          if (left_thumb + move +15 > width_ref_track +20  ) {
          
              ref_thumb.current.style.left = width_ref_track +20-15 + "px"  ; 
        
              table_excel.current.scrollLeft = limit_scroll_col*click_scroll_dichuyen  ; 
              
          }
          if (left_thumb+ move <= 20  ) {
          
              ref_thumb.current.style.left = "20px"  ; 
        
              table_excel.current.scrollLeft = 0  ; 
              
          }
        
        }

        //--------------------------------------------------------------------------------------
        
        if ( move_thumb_col === true ) {
         
          let  move = event.clientY - y_thumb ;
          let rect_ref_track_col = ref_track_col.current.getBoundingClientRect() ;
          let height_ref_track_col = rect_ref_track_col.height ;
        
          if (top_thumb + move +15 < height_ref_track_col +20 && top_thumb+ move>20 ) {
        
              ref_thumb_col.current.style.top = top_thumb + move+ "px"  ; 
        
              table_excel.current.scrollTop = (top_thumb + move-20)/height_ref_track_col *limit_scroll*click_scroll_dichuyen  ; 
              
          }
          if (top_thumb + move +15 > height_ref_track_col +20  ) {
          
            ref_thumb_col.current.style.top = height_ref_track_col +20-15 + "px"  ; 
        
              table_excel.current.scrollTop = limit_scroll*click_scroll_dichuyen  ; 
              
          }
          if (top_thumb+ move <= 20  ) {
          
            ref_thumb_col.current.style.top = "20px"  ; 
        
              table_excel.current.scrollTop = 0  ; 
              
          }
        
        }




      });






      
      
      // if ( path_name_test(path_name,"/excel/save" )  ) { get_excel_get_save() ; }
      // if ( path_name.startsWith("/excel/file")  ) { get_excel_get_file() ; }

       
      }, []);



      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // hàm này trả về array trong đó array[1], và array[2] dùng để xác định vị trí của con trỏ trong text mới
      function paint_text(text, vi_tri_focus) {
  
        text =  text.slice(0, vi_tri_focus) + "|_|_|" + text.slice(vi_tri_focus);
        console.log(text);
        var array_color = [ 'red' , 'blue','orange', '#34568b', '#FF6F61','#88B04B' ,'#9C4722' ,'#00A170'   , '#CE3175', '#0072B5', '	#999900', '#926AA6','#00008B' ,'#CD212A', '#282D3C' ] ;
        let array = [] ;
   
    let text_after_replace ;
    text_after_replace =   text.replace(/Data\$?\[[0-9]*\]\$?\[[0-9]*\]/gi, function (x) {
    
                                                              let index_color ;
                                                              if (array.indexOf(x)!==-1) {
                                                                // đầu tiên mảng rỗng chạy else trước
                                                                // lần lặp sau đó chạy lại kiểm tra xem Data[][] tiếp có chưa nếu có rồi thì lấy màu cũ , nếu chưa có xuống else push màu mới
                                                                index_color = array.indexOf(x) ;
                                                               
                                                              } else {
                                                                // đầu tiên tìm được Data[][] khớp thì push vào array
                                                                // sau đó xác định màu cho Data[][] đó
                                                                array.push(x);
                                                                index_color = array.length-1 ;
                                                              }
                                                              // khi đã hết màu mà vẫn có Data[][] thì lặp lại màu từ đầu bằng cách nhân bản array_color 
                                                            if (index_color>= array_color.length) { array_color = array_color.concat(array_color) ; }
    
                                                              return `<span   style='color: ${ array_color[index_color] }'>${x}</span>`;
     
    });
    let offset ;
    let node_index ;
    const div = document.createElement("div");
    div.innerHTML = text_after_replace;
    let children = div.childNodes ;
    let array_children = Array.from(children);
    console.log(array_children);
    let len = array_children.length ;
    for (var i = 0; i <len; i++) {
      if (array_children[i].data!== undefined ) {
        let kt = array_children[i].data.indexOf("|_|_|" ) ;
        if (kt!== -1) {
          node_index = i ;
        
          offset = kt ;
          break ;
    
        }
      }
    }
    
    text_after_replace = text_after_replace.replace("|_|_|", "") ;
    
     
    
    return [text_after_replace, node_index,offset ] ;
    
        
      }

      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function dia_chi_o_click(dia_chi_o_click_array_2d_row,dia_chi_o_click_array_2d_col, dia_chi_o_click_in_view_row , dia_chi_o_click_in_view_col ) {

   // set địa chỉ ô click trong array2d sau hành động trên

   vi_tri_click_in_Data[0] = dia_chi_o_click_array_2d_row ;
   vi_tri_click_in_Data[1] = dia_chi_o_click_array_2d_col;
      // set địa chỉ ô click trong khung nhìn hiển thị
   vi_tri_click_in_Data[2] = dia_chi_o_click_in_view_row ;
   vi_tri_click_in_Data[3] = dia_chi_o_click_in_view_col ;


}
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function run_function_when_input_focus(input_, i,j,i_array_2d, j_array_2d) {

     

      // khi di chuyển chuột trong thẻ input xác định vị trí của con chuột tới vị trí nào trong text input
      input_.onmousedown =  function (event) { 

        let range = document.createRange();
  let selection = window.getSelection();
 // setTimeout ở đây để window.getSelection() lấy vị trí xong mới cho vào range
    setTimeout(() => {
      range.setStart(input_.firstChild, 0);
      range.setEnd(selection.anchorNode , selection.anchorOffset);
       vi_tri_con_tro_khi_di_chuyen_trong_double_click_input = range.toString().length;
      console.log(vi_tri_con_tro_khi_di_chuyen_trong_double_click_input);
    }, 0);

    
    }



            // input nhận bàn phím bắt đầu từ ký tự thứ 2.
                                                      
            // sau đó khi ấn 1 ký tự bất kỳ từ bàn phím thì lưu nó vào  text_formular
            //để khi scroll thì nó xuất hiện lại trên input
            input_.onkeydown  =  function (event) {
              // hàm này sẽ được kích hoạt lại mỗi khi nhấn bàn phím vào input
            console.log("---------------------_input_.onkeydown") ;
            // khi ấn phím khác enter thì tiến hành ghi dữ liệu vào thẻ input
            if (event.keyCode !== 13) {

            
               
              let range = document.createRange();
              let selection = window.getSelection();
             // setTimeout ở đây để window.getSelection() lấy vị trí xong mới cho vào range
                setTimeout(() => {
                  console.log(selection.anchorNode , selection.anchorOffset);
                  console.log(input_.firstChild);
                  if (input_.firstChild === null) {
                    vi_tri_con_tro_khi_di_chuyen_trong_double_click_input = 0 ;
                  } else {
                    // xác định vị trí con trỏ trong input
                    range.setStart(input_.firstChild, 0);
                  range.setEnd(selection.anchorNode , selection.anchorOffset);
                   vi_tri_con_tro_khi_di_chuyen_trong_double_click_input = range.toString().length;
                  console.log(vi_tri_con_tro_khi_di_chuyen_trong_double_click_input);



                        
                //**************** */ trong javscript thuần ghi giá trị từ bàn phím vào thẻ input sẽ diến ra sau việc lấy giá trị từ thẻ input vào biến.
                // phải setTimeout ở đây vì phải đợi input lấy giá trị từ bàn phím mới gán vào text_formular
                 
                  text_formular[i + i_array_2d][j + j_array_2d] = input_.textContent ;
                  console.log('text_formular--'+  text_formular[i + i_array_2d][j + j_array_2d]);
                  console.log(i + i_array_2d, j + j_array_2d);
                 

                  
                    let paint =  paint_text(text_formular[i+i_array_2d][j + j_array_2d],vi_tri_con_tro_khi_di_chuyen_trong_double_click_input ) ;
                 
                    input_.innerHTML = paint[0] ;
                    let width_input_focus = ( table_excel.current.clientWidth - (a.current.children[i + 1].children[j+1].getBoundingClientRect().x -  table_excel.current.getBoundingClientRect().x ) -6 )+ 'px' ;
                  
                    Object.assign(input_.style, { width: width_input_focus}) ;

                  // di chuyển focus tới vị trí cũ
                    selection.removeAllRanges(); 
                     range.setStart(input_.childNodes[paint[1]], paint[2]);
                     selection.addRange(range);
                    
                    
                  }
                  

                }, 0);
           
               
          
                
                      
                
               
            }
              
            
            
            // khi ấn enter thì tiến hành tính toán.                                                       
            if (event.keyCode === 13) { // key code of the keybord key

              console.log("-------------------input enter")
                   
                   console.log(onKeyDown_1_element);   

               //  key_enter chạy xong cho onKeyDown_1_element = false
               // mà element cha của input cũng lắng nghe onkeydown chạy sau input lắng nghe
               // khi element cha của input cũng lắng nghe onkeydown mà onKeyDown_1_element = false thì nó sẽ chạy
               //  setTimeout ở đây vì khi element cha của input cũng lắng nghe onkeydown  do có setTimeout  onKeyDown_1_element vẫn đang là true  nên không chạy nữa như chúng ta muốn
                    setTimeout(() => { 

                      console.log('setTimeout---------------- để onKeyDown_1_element = true .   cuối cùng mới chuyển sang flase'); 

                           // khi ấn enter thì công thức chưa hoàn thành cũng tính
                    tinh_toan(i,j,"xoa_ky_tu_cong_thuc_thua");

                    
                    // set địa chỉ ô click  sau hành động trên
                    dia_chi_o_click(i +1+ i_array_2d,j + j_array_2d,i +1 ,j) ;
         
             key_enter(vi_tri_o_truoc[0],vi_tri_o_truoc[1],i +1 ,j); // tô màu và focus
             console.log('focus   ' ,(i +1 +i_array_2d)  ,(j_array_2d + j ) );
             mien_select_array_2d[0] = i_array_2d + i + 1 ;
             mien_select_array_2d[1] = j_array_2d + j ;
           
             _onMouseEnter_not_event(i +1, j, i +1, j) ;

           
             onKeyDown = false ; 
                      
                      onKeyDown_1_element = false ; 
                    
                    
                      onclick_tinh_toan = false ; 
                      
                  
                    
                    }, 0);
                   
                  
          
            }
            
    
            };

            
      
    }



      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // hàm xử lý xuất hiện thẻ input khi scroll 
      function change_input_scroll(row_vi_tri_remove,col_vi_tri_remove, row_vi_tri_add, col_vi_tri_add) {

        let i_array_2d =parseInt((a.current.children[0+1].children[0].innerHTML)); 
        let j_array_2d =parseInt((a.current.children[0].children[0 + 1].innerHTML)); 

              //  xoá tô màu  vị trí trước đó: nếu vị trí trước đó  không nằm trong khung nhìn thì xoá focus đang hiện diện ngược lại xoá tô màu
           
             
              if (row_vi_tri_remove < 0 || row_vi_tri_remove > limit_view - 1       ||  col_vi_tri_remove < 0 || col_vi_tri_remove > limit_col_view - 1) 
                {        } 
              else {  
                  Object.assign(a.current.children[row_vi_tri_remove + 1].children[col_vi_tri_remove+1].style, css.remove_click); 
                  a.current.children[row_vi_tri_remove +1 ].children[col_vi_tri_remove+1].blur(); 
                }
             
             
             
             
             
             
             
             
             
             
             
             
              // tô màu
             
              if (row_vi_tri_add < 0 || row_vi_tri_add > limit_view - 1         ||  col_vi_tri_add < 0 || col_vi_tri_add > limit_col_view - 1)   {  
                     console.log(vi_tri_click_in_Data); 
                       vi_tri_o_truoc[0] = row_vi_tri_add ; 
                         vi_tri_o_truoc[1] = col_vi_tri_add ; 
                           // set địa chỉ ô click  sau hành động trên
                           dia_chi_o_click(row_vi_tri_add + i_array_2d,col_vi_tri_add + j_array_2d,row_vi_tri_add  ,col_vi_tri_add) ;


                            }
              else {   
                       
                        Object.assign( a.current.children[row_vi_tri_add + 1].children[col_vi_tri_add+1].style, css.click);
                        vi_tri_o_truoc[0] = row_vi_tri_add ;
                        vi_tri_o_truoc[1] = col_vi_tri_add ;

                        console.log('xuất hiện lại thẻ input và xoá tô màu:  ' + row_vi_tri_remove + '-' + col_vi_tri_remove );
                        console.log('xuất hiện lại thẻ input và tô màu:  ' + row_vi_tri_add + '-' + col_vi_tri_add );
                          // phải focus thẻ div dể thẻ đó nhận sự kiện từ bàn phím được
                        // muốn focus thẻ div phải đặt tabindex cho thẻ đó
                        // ** ảnh hưởng của input và button khi click sẽ làm mất đường viền đen focus của thẻ div ; chính là thuộc tính Outline  của css
                        a.current.children[row_vi_tri_add + 1].children[col_vi_tri_add+1].setAttribute('tabindex', -1);
                        a.current.children[row_vi_tri_add + 1].children[col_vi_tri_add+1].focus({preventScroll:true}) ;



                        // xuất hiện lại thẻ input và focus
                      
                        console.log('xuất hiện lại thẻ input và focus') ;
                      
                        a.current.children[row_vi_tri_add +1 ].children[col_vi_tri_add+1].style.zIndex = 100 ;
                          a.current.children[row_vi_tri_add +1 ].children[col_vi_tri_add+1].innerHTML = '<div  contenteditable="true"></div>'  ;
                          var input_ =  a.current.children[row_vi_tri_add + 1].children[col_vi_tri_add+1].children[0] ;
                          let width_input_focus = ( table_excel.current.clientWidth - (a.current.children[row_vi_tri_add + 1].children[col_vi_tri_add+1].getBoundingClientRect().x -  table_excel.current.getBoundingClientRect().x ) -6 )+ 'px' ;
                          Object.assign(input_.style,css.input_focus , { width: width_input_focus} ) ;
     
                      
                          if ( text_formular[row_vi_tri_add+i_array_2d][col_vi_tri_add + j_array_2d]  === null) {           
                            input_.focus({preventScroll:true}) ; 
                            }else{

                                // focus tại vị trí mới nhưng không set lại vi_tri_con_tro_khi_di_chuyen_trong_double_click_input. Biến này vẫn ở trạng thái trước đó
                                let vi_tri_focus ;
                                if (cong_thuc_them_vao[0] === null) {
                                   vi_tri_focus = vi_tri_con_tro_khi_di_chuyen_trong_double_click_input  ;  
                                } else {
                                   vi_tri_focus = vi_tri_con_tro_khi_di_chuyen_trong_double_click_input + cong_thuc_them_vao[0].length ;  
                                }
                               
                                console.log(vi_tri_focus);
                             
                                let paint =  paint_text( text_formular[row_vi_tri_add+i_array_2d][col_vi_tri_add + j_array_2d],vi_tri_focus ) ;
                              
                                input_.innerHTML = paint[0] ;
                
                              // di chuyển focus tới vị trí cũ
                              let range = document.createRange();
                              let selection = window.getSelection();
                              selection.removeAllRanges(); 
                               range.setStart(input_.childNodes[paint[1]], paint[2]);
                               // khi click vào div khác hoặc scroll thì div input_truoc_do đã bị mất focus, sự kiện mất focus diễn ra cuối cùng.
                                  // do vậy ta phải setTimeout ở đây để lấy lại focus. => selection.addRange(range) sẽ diễn ra cuối cùng
                               setTimeout(() => {
                                selection.addRange(range);    
                               }, 0);
                                                               
                              
                               
                                
                            }

                                run_function_when_input_focus (input_,row_vi_tri_add,col_vi_tri_add,i_array_2d , j_array_2d);

                                 // set địa chỉ ô click  sau hành động trên
                           dia_chi_o_click(row_vi_tri_add + i_array_2d,col_vi_tri_add + j_array_2d,row_vi_tri_add  ,col_vi_tri_add) ;

                           console.log(vi_tri_click_in_Data);
                           
                      
                

              }



    
      }
    
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // hàm tô màu và focus khi click hoặc enter
      function key_enter(row_vi_tri_remove,col_vi_tri_remove, row_vi_tri_add, col_vi_tri_add) {
      
          // chuyển trạng thái onKeyDown_1_element = false; vì khi input trước đó xuất hiện onKeyDown_1_element là true do có chỗ settimeout
      onKeyDown_1_element = false;
   
      turn_off_onMouseEnter = false ;
              //1.  xoá tô màu vị trí trước
              //  xoá tô màu  vị trí trước đó: nếu vị trí trước đó = null hoặc không nằm trong khung nhìn thì xoá focus đang hiện diện ngược lại xoá tô màu
              // row_vi_tri_remove = 0  thì dầu tiên remove tô màu bằng cách chạy đoạn if else trên ; sau đó chạy đoạn if dưới kích hoạt document.activeElement.blur(); 
             
                if (row_vi_tri_remove < 0 || row_vi_tri_remove > limit_view        ||  col_vi_tri_remove < 0 || col_vi_tri_remove > limit_col_view   ) 
                  {        }
                 else {
                   Object.assign(a.current.children[row_vi_tri_remove +1 ].children[col_vi_tri_remove+1].style, css.remove_click); 
                     a.current.children[row_vi_tri_remove +1 ].children[col_vi_tri_remove+1].blur(); 
                    }
           
               
               
               
               
               
               
               
               
               
               // 2.Tô màu vị trí mới
               // tô màu vị trí mới  nếu vị trí trước đó = null hoặc không nằm trong khung nhìn thì set lại vị trí trước đó ngược lại  tô màu
              
                if (row_vi_tri_add < 0 || row_vi_tri_add > limit_view          ||  col_vi_tri_add < 0 || col_vi_tri_add > limit_col_view )   
                {      vi_tri_o_truoc[0] = row_vi_tri_add ;   vi_tri_o_truoc[1] = col_vi_tri_add ;          }
                else {  
                  
                  Object.assign(a.current.children[row_vi_tri_add + 1].children[col_vi_tri_add+1].style, css.click);
         
                vi_tri_o_truoc[0] = row_vi_tri_add ;
                vi_tri_o_truoc[1] = col_vi_tri_add ;

                console.log('xoá tô màu:  ' + row_vi_tri_remove + '-' + col_vi_tri_remove );
                console.log('tô màu:  ' + row_vi_tri_add + '-' + col_vi_tri_add );
                  // phải focus thẻ div dể thẻ đó nhận sự kiện từ bàn phím được
                // muốn focus thẻ div phải đặt tabindex cho thẻ đó
                // ** ảnh hưởng của input và button khi click sẽ làm mất đường viền đen focus của thẻ div ; chính là thuộc tính Outline  của css
                a.current.children[row_vi_tri_add +1 ].children[col_vi_tri_add+1].setAttribute('tabindex', -1);
                a.current.children[row_vi_tri_add + 1].children[col_vi_tri_add+1].focus({preventScroll:true}) ;

                }

               
                
        
                xuat_hien_the_input = false ; 
             
             

    
      }
    
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // hàm tính toán công thức 
    // i, j ở đây là giá trị dòng và cột ở vị trí trước đó.
    function tinh_toan(i,j,z) {
      console.log('tính toán----------')
      console.log('tính toán           '+ vi_tri_con_tro_khi_di_chuyen_trong_double_click_input)

     
     
       let i_array_2d =parseInt((a.current.children[0 + 1].children[0].innerHTML)); 
       let j_array_2d =parseInt((a.current.children[0].children[0 + 1].innerHTML)); 
      
      var text = text_formular[i+i_array_2d][j + j_array_2d];  

     

      console.log('text      '+ text);
      console.log(i+i_array_2d,j + j_array_2d);

      // chuyển text null bằng '' để slice không bị lỗi.
      if (text == null) { text = '' ; }
   // Bước 1: kiểm tra xem công thức hoàn thành chưa nếu chưa viết tiếp được.    
// khi bấm enter thì xoá ký tự công thức thừa gần focus nhất để công thức không hoàn thành cũng tính
        let text_den_vi_tri_con_tro = text.slice(0,vi_tri_con_tro_khi_di_chuyen_trong_double_click_input) ;
    // z chỗ này chạy khi tính toán bằng cách bấm enter    
    // kết thúc công thức toàn bộ text co nhiều dấu chẳng hạn +9+6+++ thì xoá hết dấu + ở cuối đi
  
    if (z=== "xoa_ky_tu_cong_thuc_thua") {
     
      console.log('text_den_vi_tri_con_tro           ' +text_den_vi_tri_con_tro)

      // khi bấm enter z = xoa_ky_tu_cong_thuc_thua ta xoá 1 ký tự công thức  cuối chỗ vị trí con trỏ để công thức không hoàn thành cũng tính
      // vd:    +9+6+(Data[10][1])+(Data[10][2]) nếu vị trí con trỏ ở (Data[10][1])+ thì ta xoá + nên công thức trở thành hoàn thành
      // nếu vị trí con trỏ ở (Data[   thì if ở đây không chạy nhưng phía dưới sẽ có hàm kiểm tra thấy cạnh vị trí con trỏ không phải là + nên công thức trở thành hoàn thành
        if ((text_den_vi_tri_con_tro.slice(0,1)==="=" || text_den_vi_tri_con_tro.slice(0,1)==="+" )&&(    text_den_vi_tri_con_tro.slice(-1)==="+"  ||  text_den_vi_tri_con_tro.slice(-1)==="-"  ||  text_den_vi_tri_con_tro.slice(-1)==="*"  ||  text_den_vi_tri_con_tro.slice(-1)==="/"    )     )
         {
              while ((    text_den_vi_tri_con_tro.slice(-1)==="+"  ||  text_den_vi_tri_con_tro.slice(-1)==="-"  ||  text_den_vi_tri_con_tro.slice(-1)==="*"  ||  text_den_vi_tri_con_tro.slice(-1)==="/"     ) ) 
              {
                text_den_vi_tri_con_tro = text_den_vi_tri_con_tro.slice(0,text_den_vi_tri_con_tro.length - 1) ;
              }
             
          }

         // kết thúc công thức toàn bộ text co nhiều dấu chẳng hạn +9+6+++ thì xoá hết dấu + ở cuối đi 
        if ((text.slice(0,1)==="=" || text.slice(0,1)==="+" )&&(    text.slice(-1)==="+"  ||  text.slice(-1)==="-"  ||  text.slice(-1)==="*"  ||  text.slice(-1)==="/"    )     )
        {
             while ((    text.slice(-1)==="+"  ||  text.slice(-1)==="-"  ||  text.slice(-1)==="*"  ||  text.slice(-1)==="/"    ) ) 
             {
              text = text.slice(0,text.length - 1) ;
             }
            
         }

       
      
    }
    // z chỗ này chạy khi tính toán bằng cách ấn chuột trái sang ô khác
    if (z=== "xoa_ky_tu_cong_thuc_thua_mouse_down") {
     
      console.log('text_den_vi_tri_con_tro           ' +text_den_vi_tri_con_tro)

        if ((text_den_vi_tri_con_tro.slice(0,1)==="=" || text_den_vi_tri_con_tro.slice(0,1)==="+" )&&(    text_den_vi_tri_con_tro.slice(-1)==="+"  ||  text_den_vi_tri_con_tro.slice(-1)==="-"  ||  text_den_vi_tri_con_tro.slice(-1)==="*"  ||  text_den_vi_tri_con_tro.slice(-1)==="/"     )     )
         {
              while ((    text_den_vi_tri_con_tro.slice(-2)==="++"  ||  text_den_vi_tri_con_tro.slice(-2)==="--"  ||  text_den_vi_tri_con_tro.slice(-2)==="**"  ||  text_den_vi_tri_con_tro.slice(-2)==="//"    ) ) 
            
              {
                text_den_vi_tri_con_tro = text_den_vi_tri_con_tro.slice(0,text_den_vi_tri_con_tro.length - 1) ;
                vi_tri_con_tro_khi_di_chuyen_trong_double_click_input = vi_tri_con_tro_khi_di_chuyen_trong_double_click_input - 1 ;
              }
             
          }

          
        if ((text.slice(0,1)==="=" || text.slice(0,1)==="+" )&&(    text.slice(-1)==="+"  ||  text.slice(-1)==="-"  ||  text.slice(-1)==="*"  ||  text.slice(-1)==="/"     )     )
        {
             while ((    text.slice(-2)==="++"  ||  text.slice(-2)==="--"  ||  text.slice(-2)==="**"  ||  text.slice(-2)==="//"     ) ) 
           
             {
              text = text.slice(0,text.length - 1) ;
             }
            
         }

       
      
    }
    
    
      //*******/.--------------nếu vị trí con trỏ trong thẻ input đứng sau dấu + thì  kết thúc hàm tính toán ở đây bằng trả về công thức chưa hoàn thành khác "" để sự kiện khác tính tiếp
     // ngược lại nếu vị trí con trỏ không đứng sau dấu + thì thì thực hiện các lệnh phía sau là tính toán và trả về kết quả
      console.log('text_den_vi_tri_con_tro----           ' +text_den_vi_tri_con_tro)
     
      if ((text_den_vi_tri_con_tro.slice(0,1)==="=" || text_den_vi_tri_con_tro.slice(0,1)==="+" )&&(    /[\+|\-|\*|\/]/i.test("'"+text_den_vi_tri_con_tro.slice(-1)+"'") || /[\+|\-|\*|\/][\(]+/i.test("'"+text_den_vi_tri_con_tro.slice(-2)+"'")   )      ) 
      { 
        console.log('công thức chưa hoàn thành kết thúc ở đây không tính toán');
        console.log(cong_thuc_chua_hoan_thanh); 
           return  cong_thuc_chua_hoan_thanh = [i,j,text] ;
       }
    
    
    
      // Bước 2: tính toán
      //2.------------------kiểm tra công thức người dùng viết có bị lỗi không nếu bị lỗi thì  kết thúc hàm tính toán ở đây bằng trả về biển lỗi error true để sự kiện khác tính tiếp
      //2.------------------ nếu không lỗi thêm công thức người dùng viết vào mảng formular nơi chứa tất cả các công thức
      if (text.slice(0,1)==="=" || text.slice(0,1)==="+" ) { 

        

        console.log('lưu công thức viết vào mảng formular ')
        var kiem_tra_loi ;
        try {
          // Code có thể gặp lỗi nào đó
          
          eval(text.replaceAll('$', '')) ;

          
          
        } catch (error) {
           // Code xử lý khi lỗi xảy ra
      
          console.log('công thức nhập vào bị lỗi')
          kiem_tra_loi  = true ;
          console.log(kiem_tra_loi);
            // kiểm tra xem trong mảng formular có tồn tại vị trí index được lưu chưa. Nếu có thay đổi công thức ở vị trí đó.
            var index_; 
           

            if (index_formular[(i+i_array_2d)][(j+ j_array_2d )] !== null) {  

              index_ = index_formular[(i+i_array_2d)][(j+ j_array_2d )] ;
              console.log( "khac nhau" ) ;
              // phải có ( ) trước, sau function vì để sau này chạy function ta dùng ()() mới chạy được
          formular[index_]  = eval("(function(){return "+  "Data["+(i+i_array_2d)+"]["+(j + j_array_2d)+"]" +" = " + "'"  + error.message + "'"  +  ";})")   
          formular[index_]();
          // tính toán lại tất cả các công thức đã viết
          let _len = formular.length ;
          for (let index = 0; index < _len ; index++) { if (formular[index] !== undefined) { formular[index]()} ; }
        
        // hiện thị giá trị đã tính toán lên trang web bảng tính
        for (let index = 0; index <= (limit_view ); index++) {
          for (let index_j = 0; index_j <=(limit_col_view ) ; index_j++) {

               // với mỗi cell hiện lên trang web bảng tính thì ta duyệt từ cuối tới đầu dòng đó để xác định zIndex cho cell đó
               let max_zindex  = limit_col_view + 1;
                
               for (let x = limit_col_view ; x >= 0 ; x--) {

                 if (Data[index+i_array_2d][x + j_array_2d] === null) {
                 
                 }else{
                   a.current.children[index + 1].children[x+1].style.zIndex = max_zindex ;
                   max_zindex = x ;
                 } 
               }

          
               a.current.children[index + 1].children[index_j+1].innerHTML = ` <div    style="  position:absolute;       background: inherit;   height: inherit ;   white-space: nowrap;   pointer-events: none;  "> ${ Data[index +i_array_2d][index_j +j_array_2d]}  </div>`;
    
          }
        }  
       vi_tri_con_tro_khi_di_chuyen_trong_double_click_input = undefined ;   
        cong_thuc_chua_hoan_thanh = "" ;

        } 
    else {  
      console.log( "push 1 cong thuc vao cuoi ----------------" ) ;
     // phải có ( ) trước, sau function vì để sau này chạy function ta dùng ()() mới chạy được
      formular.push(eval("(function(){return "+  "Data["+(i+i_array_2d)+"]["+(j + j_array_2d)+"]" +" = " + "'"  + error.message + "'" +  ";})")  ) 
      index_formular[(i+i_array_2d)][(j+ j_array_2d )]  = formular.length - 1 ;
      
     // tính 1 công thức cuối cùng
     formular[formular.length - 1]() ;
                
     // tính toán lại tất cả các công thức đã viết
     let _len = formular.length ;
     for (let index = 0; index < _len ; index++) {if (formular[index] !== undefined) { formular[index]()} ; }
      // hiện thị giá trị đã tính toán lên trang web bảng tính nếu giá trị tính toán sau khi scroll nằm trong khung nhìn
        // do push vào cuối nên chỉ hiện lại ô đó thôi không lặp tất cả các ô
      if ( (i <= limit_view - 1 )&( i >= 0) && (j <= limit_col_view - 1 )&( j >= 0)  ) {
                                          
        if ( Data[i+i_array_2d][j + j_array_2d] === null) {
              
    
        }else{

            // với  cell hiện lên trang web bảng tính thì ta duyệt từ cuối tới đầu dòng đó để xác định zIndex cho cell đó
            let max_zindex  = limit_col_view + 1;
                            
            for (let x = limit_col_view ; x >= 0 ; x--) {

              if (Data[i+i_array_2d][x + j_array_2d] === null) {
              
              }else{
                a.current.children[i + 1].children[x+1].style.zIndex = max_zindex ;
                max_zindex = x ;
              } 
            }

          a.current.children[i + 1].children[j+1].innerHTML = ` <div    style="  position:absolute;       background: inherit;   height: inherit ;   white-space: nowrap;   pointer-events: none;  "> ${ Data[i +i_array_2d][j +j_array_2d]}  </div>`;


        }
      }
     
      vi_tri_con_tro_khi_di_chuyen_trong_double_click_input = undefined ;   
      cong_thuc_chua_hoan_thanh = "" ;
    
    }

          
        
        }

// nếu công thức nhập vào không bị lỗi thì thực hiện đoạn code dưới đây -----------------------------------------------------------------------------------------------------------------------
          if (kiem_tra_loi === undefined) {
              // kiểm tra xem trong mảng formular có tồn tại vị trí index được lưu chưa. Nếu có thay đổi công thức ở vị trí đó.
              var index_; 
           

                if (index_formular[(i+i_array_2d)][(j+ j_array_2d )] !== null) {  

                  index_ = index_formular[(i+i_array_2d)][(j+ j_array_2d )] ;
                  console.log( "khac nhau" ) ;

                      
                              // kiểm tra tham chiếu lặp

                                  var array_loi_tham_chieu = []  ;
                                  let vi_tri_loi_tham_chieu ;
                                  text_formular.map((item, index)=>{   item.map((j_item, index_j) =>{ if (j_item!==null) {   if (j_item.indexOf("Data["+(i+i_array_2d)+ "]["+(j + j_array_2d)+"]")!== -1) { array_loi_tham_chieu.push([index,index_j ])   }  } })   })
                                  
                                  if ( (array_loi_tham_chieu.some((item,index) => { vi_tri_loi_tham_chieu = item ;  return text.indexOf("Data["+item[0]+ "]["+item[1]+"]") !== -1 }) === true) ){
                                       // phải có ( ) trước, sau function vì để sau này chạy function ta dùng ()() mới chạy được
                                    formular[index_]  = eval("(function(){return "+  "Data["+(i+i_array_2d)+"]["+(j + j_array_2d )+"]" +" ="+"'#REF!'"+";})")   ;
                                    formular[index_]();
                                    Data[vi_tri_loi_tham_chieu[0]][vi_tri_loi_tham_chieu[1]] = "#REF!" ;
                                  alert("Lỗi tham chiếu tại "+ "Data["+vi_tri_loi_tham_chieu[0]+ "]["+vi_tri_loi_tham_chieu[1]+"]");
                                  
                                }
                                else{
                                  formular[index_]  = eval("(function(){return "+  "Data["+(i+i_array_2d)+"]["+(j + j_array_2d )+"]" +" = " +  text.slice(1).replaceAll('$', '') +  ";})")   
                                  formular[index_]();
                                }
                     
                    // tính toán lại tất cả các công thức đã viết
          let _len = formular.length ;
          for (let index = 0; index < _len ; index++) { 
            console.log( formular[index]);
            if (formular[index] !== undefined) { formular[index]()} ; }



           // hiện thị giá trị đã tính toán lên trang web bảng tính
          for (let index = 0; index <= (limit_view ); index++) {
            for (let index_j = 0; index_j <=(limit_col_view ) ; index_j++) {
              if ( Data[index+i_array_2d][index_j + j_array_2d] === null) {
              
    
              }else{

                  // với mỗi cell hiện lên trang web bảng tính thì ta duyệt từ cuối tới đầu dòng đó để xác định zIndex cho cell đó
                  let max_zindex  = limit_col_view + 1;
                
                  for (let x = limit_col_view ; x >= 0 ; x--) {
  
                    if (Data[index+i_array_2d][x + j_array_2d] === null) {
                    
                    }else{
                      a.current.children[index + 1].children[x+1].style.zIndex = max_zindex ;
                      max_zindex = x ;
                    } 
                  }
  

                a.current.children[index + 1].children[index_j+1].innerHTML = ` <div    style="  position:absolute;       background: inherit;   height: inherit ;   white-space: nowrap;   pointer-events: none;  "> ${ Data[index +i_array_2d][index_j +j_array_2d]}  </div>`;
    

              }
            }
          }  
                  
                   vi_tri_con_tro_khi_di_chuyen_trong_double_click_input = undefined ;   
                    cong_thuc_chua_hoan_thanh = "" ;
    
                    } 
                else {  
                  console.log( "push 1 cong thuc vao cuoi ----------------" ) ;
              
                   // kiểm tra tham chiếu lặp

                   var array_loi_tham_chieu = []  ;
                   let vi_tri_loi_tham_chieu ;
                   text_formular.map((item, index)=>{   item.map((j_item, index_j) =>{ if (j_item!==null) {  console.log(j_item); if (j_item.indexOf("Data["+(i+i_array_2d)+ "]["+(j + j_array_2d)+"]")!== -1) { array_loi_tham_chieu.push([index,index_j ])   }  } })   })
                   
                   if ( (array_loi_tham_chieu.some((item,index) => { vi_tri_loi_tham_chieu = item ;  return text.indexOf("Data["+item[0]+ "]["+item[1]+"]") !== -1 }) === true) ){
                      // phải có ( ) trước, sau function vì để sau này chạy function ta dùng ()() mới chạy được
                     formular.push(eval("(function(){return "+  "Data["+(i+i_array_2d)+"]["+(j + j_array_2d )+"]" +" ="+"'#REF!'"+";})") )  ;
                   
                     Data[vi_tri_loi_tham_chieu[0]][vi_tri_loi_tham_chieu[1]] = "#REF!" ;
                   alert("Lỗi tham chiếu tại "+ "Data["+vi_tri_loi_tham_chieu[0]+ "]["+vi_tri_loi_tham_chieu[1]+"]");
                   
                 }
                 else{
                  formular.push(eval("(function(){return "+  "Data["+(i+i_array_2d)+"]["+(j+ j_array_2d )+"]" +" = " + text.slice(1).replaceAll('$', '') +  ";})")  ) ;

                  index_formular[(i+i_array_2d)][(j+ j_array_2d )]  = formular.length - 1 ;

                 }
                  
                  // tính 1 công thức cuối cùng
                  formular[formular.length - 1]() ;
                
                // tính toán lại tất cả các công thức đã viết
          let _len = formular.length ;
          for (let index = 0; index < _len ; index++) { if (formular[index] !== undefined) { formular[index]()} ; }


                  // hiện thị giá trị đã tính toán lên trang web bảng tính nếu giá trị tính toán sau khi scroll nằm trong khung nhìn
                  // do push vào cuối nên chỉ hiện lại ô đó thôi không lặp tất cả các ô
                  if ( (i <= limit_view - 1 )&( i >= 0) && (j <= limit_col_view - 1 )&( j >= 0) ) {
                                                      
                    if ( Data[i+i_array_2d][j + j_array_2d] === null) {
              
    
                    }else{

                        // với  cell hiện lên trang web bảng tính thì ta duyệt từ cuối tới đầu dòng đó để xác định zIndex cho cell đó
                            let max_zindex  = limit_col_view + 1;
                            
                            for (let x = limit_col_view ; x >= 0 ; x--) {

                              if (Data[i+i_array_2d][x + j_array_2d] === null) {
                              
                              }else{
                                a.current.children[i + 1].children[x+1].style.zIndex = max_zindex ;
                                max_zindex = x ;
                              } 
                            }



      
                      a.current.children[i + 1].children[j+1].innerHTML = ` <div    style="  position:absolute;       background: inherit;   height: inherit ;   white-space: nowrap;   pointer-events: none;  "> ${ Data[i +i_array_2d][j +j_array_2d]}  </div>`;
          
      
                    }


                      if (vi_tri_loi_tham_chieu !== undefined) { a.current.children[vi_tri_loi_tham_chieu[0] +1 - i_array_2d].children[vi_tri_loi_tham_chieu[1]+1 - j_array_2d].innerHTML =  Data[vi_tri_loi_tham_chieu[0]][vi_tri_loi_tham_chieu[1]] ; }
                  }
                 
                  vi_tri_con_tro_khi_di_chuyen_trong_double_click_input = undefined ;   
                  cong_thuc_chua_hoan_thanh = "" ;
                
                }
            
          }
    
      
            
              
        };
    
    
        //3.---------------------------------------------------------------------------------------------------------
        //nếu người dùng không viết công thức mà viết giá trị thì ghi giá trị người dùng viết vào mảng Data
        
        if (text.slice(0,1)!="=" && text.slice(0,1)!="+" ) { 
           
                // nếu người dùng nhập số  vào input thì hàm + text  sẽ chuyển ký tự khác số thành số. Vd: có nhiều phím cách "  59" sẽ chuyển thành 59, "  .2" sẽ chuyển thành 2 
                  if (isNaN(Number(text)) == false) {
                    Data[i+i_array_2d][j + j_array_2d] = + text;
               
                    // nếu người dùng không nhập gì thì isNaN(Number(text))  sẽ trả về false khi đó ta gán Data[i+i_array_2d][j] = '' ;
                    if (text==="") {  Data[i+i_array_2d][j+ j_array_2d] = ""}
                   

                    // kiểm tra xem trong mảng formular có tồn tại vị trí index được lưu chưa. Nếu có xoá công thức ở vị trí đó    
              var index_; 
           

              if (index_formular[(i+i_array_2d)][(j+ j_array_2d )] !== null) {  

                index_ = index_formular[(i+i_array_2d)][(j+ j_array_2d )] ;
                console.log( "khac nhau" ) ;


                                        // xoá công thức ở vị trí đó  nhưng vẫn để lại trong index_formular vị trí index_
                                        delete formular[index_] ;
                                  
                            
                                  
                                        } 

                        // tính toán lại tất cả các công thức đã viết
          let _len = formular.length ;
          for (let index = 0; index < _len ; index++) { if (formular[index] !== undefined) { formular[index]()} ; }
                      // hiện thị giá trị đã tính toán lên trang web bảng tính
          for (let index = 0; index <= (limit_view ); index++) {
            for (let index_j = 0; index_j <=(limit_col_view ) ; index_j++) {
              if ( Data[index+i_array_2d][index_j + j_array_2d] === null) {
              
    
              }else{

                    // với mỗi cell hiện lên trang web bảng tính thì ta duyệt từ cuối tới đầu dòng đó để xác định zIndex cho cell đó
                let max_zindex  = limit_col_view + 1;
                
                for (let x = limit_col_view ; x >= 0 ; x--) {

                  if (Data[index+i_array_2d][x + j_array_2d] === null) {
                  
                  }else{
                    a.current.children[index + 1].children[x+1].style.zIndex = max_zindex ;
                    max_zindex = x ;
                  } 
                }


                a.current.children[index + 1].children[index_j+1].innerHTML = ` <div    style="  position:absolute;      background: inherit;   height: inherit ;   white-space: nowrap;   pointer-events: none;  "> ${ Data[index +i_array_2d][index_j +j_array_2d]}  </div>`;
    

              }
            }
          }                   

                  vi_tri_con_tro_khi_di_chuyen_trong_double_click_input = undefined ;   
                  cong_thuc_chua_hoan_thanh = "" ;
                    
                  }

            // nếu người dùng nhập chữ thì gán chữ
                  if (isNaN(Number(text)) == true) {
                    Data[i+i_array_2d][j + j_array_2d] = text;
               
   // kiểm tra xem trong mảng formular có tồn tại vị trí index được lưu chưa. Nếu có xoá công thức ở vị trí đó  
   var index_; 
           

   if (index_formular[(i+i_array_2d)][(j+ j_array_2d )] !== null) {  

     index_ = index_formular[(i+i_array_2d)][(j+ j_array_2d )] ;
     console.log( "khac nhau" ) ;


                          // xoá công thức ở vị trí đó  nhưng vẫn để lại trong index_formular vị trí index_
                          delete formular[index_] ;
                                  
                         
                               } 


                   
                    // tính toán lại tất cả các công thức đã viết
          let _len = formular.length ;
          for (let index = 0; index < _len ; index++) { if (formular[index] !== undefined) { formular[index]()} ; }
                     // hiện thị giá trị đã tính toán lên trang web bảng tính
          for (let index = 0; index <= (limit_view ); index++) {
            for (let index_j = 0; index_j <=(limit_col_view ) ; index_j++) {
              if ( Data[index+i_array_2d][index_j + j_array_2d] === null) {
              
    
              }else{

                // với mỗi cell hiện lên trang web bảng tính thì ta duyệt từ cuối tới đầu dòng đó để xác định zIndex cho cell đó
                let max_zindex  = limit_col_view + 1;
                
                for (let x = limit_col_view ; x >= 0 ; x--) {

                  if (Data[index+i_array_2d][x + j_array_2d] === null) {
                  
                  }else{
                    a.current.children[index + 1].children[x+1].style.zIndex = max_zindex ;
                    max_zindex = x ;
                  } 
                }



                a.current.children[index + 1].children[index_j+1].innerHTML = ` <div    style="  position:absolute;      background: inherit;   height: inherit ;   white-space: nowrap;   pointer-events: none;  "> ${ Data[index +i_array_2d][index_j +j_array_2d]}  </div>`;
    

              }
             
            }
          }               

                  vi_tri_con_tro_khi_di_chuyen_trong_double_click_input = undefined ;     
                  cong_thuc_chua_hoan_thanh = "" ;
            
                  }
            
        }
    
        
      
      };
    
    
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    // lắng nghe các sự khiện khi thao tác với bàn phím (dùng bàn phím)
    async  function _onKeyDown(event,i,j) {
    
console.log('_onKeyDown------------------------------');
    //  onKeyDown_1_element === false tức chưa xuất hiện thẻ input
    // khi xuất hiện thẻ input thì onKeyDown_1_element === true
    // mục đích khi xuất hiện thẻ input thì tắt lắng nghe sự kiện _onKeyDown ở elment này
    if (onKeyDown_1_element === false) {
    
      let i_array_2d =parseInt((a.current.children[0 +1 ].children[0].innerHTML)); 
      let j_array_2d =parseInt((a.current.children[0].children[0 + 1].innerHTML));  
      
      
      // 1. element được kích hoạt và element không ở trạng thái tính toán mà bấm phím enter sẽ xuống dòng 
      if (event.key =="Enter" ) {
       

                        function enter_not_scroll() {
                          
                          console.log("khi bấm phím enter mà không xuất hiện thẻ input thì không phải tính toán") ;
                      
                                          
                                // set địa chỉ ô click  sau hành động trên
                        dia_chi_o_click(i +1+ i_array_2d,j + j_array_2d,i +1 ,j) ;

                        key_enter(i,j,i+1,j); // tô màu và focus
                        mien_select_array_2d[0] = i_array_2d + i  + 1;
                        mien_select_array_2d[1] = j_array_2d + j ;

                        _onMouseEnter_not_event(i +1, j, i +1, j) ;


                        xuat_hien_the_input = false ;   
                        onKeyDown = false ; 
                        onclick_tinh_toan = false ;  
                        onKeyDown_1_element = false;

                        
                        }


                      function enter_affter_scroll() {
                        
                        console.log("khi bấm phím enter mà không xuất hiện thẻ input thì không phải tính toán") ;
                    
                                     
                              // set địa chỉ ô click  sau hành động trên
                      dia_chi_o_click(i -1+1+ i_array_2d,j + j_array_2d,i -1+1 ,j) ;

                      key_enter(i-1,j,i+1-1,j); // tô màu và focus
                      mien_select_array_2d[0] = i_array_2d + i  + 1-1;
                      mien_select_array_2d[1] = j_array_2d + j ;

                      _onMouseEnter_not_event(i-1 +1, j, i-1 +1, j) ;


                      xuat_hien_the_input = false ;   
                      onKeyDown = false ; 
                      onclick_tinh_toan = false ;  
                      onKeyDown_1_element = false;

                      // table_excel.current.removeEventListener("scroll", enter_affter_scroll);   
                      }


          if (  (i >= limit_view - 1) ) {
            // ta không truyền table_excel.current.scrollTop = table_excel.current.scrollTop  * click_scroll_dichuyen 
         // vì mỗi lần truyền và sự kiện onscroll nhận table_excel.current.scrollTop sẽ có sai số
         // khi enter nhiều lần sẽ cộng các sai số lại nên khi làm tròn vị trí cát bị sai 1 đợn vị nên có lỗi.
             window.requestAnimationFrame(enter_affter_scroll);
            table_excel.current.scrollTop = (i_array_2d + 1)  * click_scroll_dichuyen ;
              // ta có thể dùng addEventListener để các hàm bất đồng bộ chạy theo thứ tự ( chú ý ở đây   table_excel.current.addEventListener  sẽ chạy trước nhưng sau đó table_excel.current.scrollTop chạy làm phát sinh scroll nên hàm trong scroll mới chạy.  hoạt động như vậy nó sẽ nhanh hơn setTimeout)
              // hoặc dùng
              // window.requestAnimationFrame(enter_affter_scroll);  khi đó hàm enter_affter_scroll không cần dòng   table_excel.current.removeEventListener("scroll", enter_affter_scroll);   này nữa
              // chú ý  requestAnimationFrame sẽ chạy sau  scrollTop nhưng chạy trước setTimeout
              // không dùng setTimeout được vì setTimeout và scrollTop là 2 hàm bất đồng bộ nên khi ấn giữ chặt enter nó sẽ chạy không theo thứ tự mà mục đích ta muốn hàm chạy theo thứ tự
              // table_excel.current.addEventListener("scroll", enter_affter_scroll);
           
            
           }else{

            enter_not_scroll();
           }
       
        
      }
    
      if (event.key != "Enter") {
        console.log("_onKeyDown--nhập dữ liệu")
        // khi ấn phím khác enter thì viết công thức hoặc dữ liệu vào ô đó (thiết lập ô đó ở trạng thái tính toán)
        a.current.children[i + 1].children[j+1].style.zIndex = 100 ;
      
        a.current.children[i + 1].children[j+1].innerHTML = '<div  contenteditable="true"  ></div>' ;
        let input_ =  a.current.children[i +1 ].children[j+1].children[0];
        // lấy tiêu điểm để input_ có thể lắng nghe được sụ kiện

        input_.focus({preventScroll:true}) ;
        console.log(input_);
        xuat_hien_the_input = true ;
        vi_tri_con_tro_khi_di_chuyen_trong_double_click_input = 1 ;
                  
        Object.assign(input_.style,css.input_focus ) ;


         // lúc này input nhận giá trị từ bàn phím hiện lên thẻ input 



        // gán giá trị đầu tiên khi nhấn phím đó vào text_formular; các giá trị tiếp theo input xuất hiện sẽ lắng nghe sự kiện onKeyDown để gán tiếp
        //**************** */ trong javscript thuần ghi giá trị từ bàn phím vào thẻ input sẽ diến ra sau việc lấy giá trị từ thẻ input vào biến.
        // phải setTimeout ở đây vì phải đợi input lấy giá trị từ bàn phím mới gán vào text_formular
      
     

        setTimeout(() => {  
          text_formular[i + i_array_2d][j + j_array_2d] = input_.textContent ; 
           console.log( text_formular[i + i_array_2d][j + j_array_2d]) ; 
           } 
            , 0);

       
        
        onclick_tinh_toan = true ;
      
        vi_tri_o_truoc[0] = i ;
        vi_tri_o_truoc[1] = j ;


         // trước gán sự kiện keydown cho input thì ta phải tắt lắng nghe sự kiện onkedown cho 1 element table cha của input 
         onKeyDown_1_element = true ;
        run_function_when_input_focus (input_,i,j,i_array_2d, j_array_2d);

                      
                      
        }
      
    }
                  
                              
                                
                  
                    
    }
    
    
    
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   
    var mien_select = [0,0,0,0];
    var mien_select_quy_ve = [0,0,0,0];
    var mien_select_array_2d = [0,0,0,0];
 
    var turn_off_onMouseEnter = false ;
  
   
// vẽ khung miền lựa chọn và nếu thoả mãn điều kiện thì vẽ biểu tượng fill
    function  _onMouseEnter_not_event (x, y,i,j, thay_doi_mien_select_array_2d){
          console.log('vẽ canvas');
          console.log(mien_select_array_2d);
      // xoá biểu tượng fill đã xuất hiện khi move mouse
      console.log('xoá biểu tượng fill');
      var  ctx = canvas_.current.getContext("2d");
      ctx.clearRect(0, 0, canvas_.current.width, canvas_.current.height) ;
 
     

      
      let i_array_2d =parseInt((a.current.children[0 + 1].children[0].innerHTML));  
      let j_array_2d =parseInt((a.current.children[0].children[0 + 1].innerHTML)); 



          mien_select[0] = x ; 
          mien_select[1] = y ;
        
          mien_select[2] = i ;
          mien_select[3] = j ;
          if (thay_doi_mien_select_array_2d === false) {
          
          }
          else
          {
            mien_select_array_2d[2] = i_array_2d + i ;
            mien_select_array_2d[3] = j_array_2d + j ;

          }

      
          if (mien_select[0]<= mien_select[2]) { mien_select_quy_ve[0] = mien_select[0]; mien_select_quy_ve[2] = mien_select[2]}else{ mien_select_quy_ve[0] = mien_select[2]; mien_select_quy_ve[2] = mien_select[0] }
          if (mien_select[1]<= mien_select[3]) { mien_select_quy_ve[1] = mien_select[1]; mien_select_quy_ve[3] = mien_select[3]}else{ mien_select_quy_ve[1] = mien_select[3]; mien_select_quy_ve[3] = mien_select[1] }
        
          var x_r0c0 = a.current.children[mien_select_quy_ve[0] +1 ].children[mien_select_quy_ve[1]+1].getBoundingClientRect().x;

       
          var x_r0c1 = a.current.children[mien_select_quy_ve[2] +1 ].children[mien_select_quy_ve[3]+1+1].getBoundingClientRect().x;



          var y_r0c0 = a.current.children[mien_select_quy_ve[0] +1 ].children[mien_select_quy_ve[1]+1].getBoundingClientRect().y;

          var y_r1c0 = a.current.children[mien_select_quy_ve[2] +1+1 ].children[mien_select_quy_ve[1]+1].getBoundingClientRect().y;  



          css.canvas_.width =(x_r0c1 - x_r0c0 - 4) + 'px'  ;

          css.canvas_.height = (y_r1c0 - y_r0c0 - 4) + 'px'  ;


          css.canvas_.top = y_r0c0 - ref_0.current.getBoundingClientRect().y + 'px' ;

          css.canvas_.left = x_r0c0 -  ref_0.current.getBoundingClientRect().x + 'px';
      
       
          if ( ( x_r0c0 -  ref_0.current.getBoundingClientRect().x)  +  (x_r0c1 - x_r0c0 - 4)  >= table_excel.current.clientWidth) {
            css.canvas_.width =( table_excel.current.clientWidth - (x_r0c0 -  table_excel.current.getBoundingClientRect().x ) )+ 'px'  ;
         
           
          }
          if ( ( y_r0c0 -  table_excel.current.getBoundingClientRect().y)  +  (y_r1c0 - y_r0c0 - 4)  >= table_excel.current.clientHeight) {
            css.canvas_.height =( table_excel.current.clientHeight - (y_r0c0 -  table_excel.current.getBoundingClientRect().y ) )+ 'px'  ;
         
          
          }

  // vẽ lại  biểu tượng fill 
  console.log('vẽ lại biểu tượng fill');
          let ty_le_canvas_width = table_excel_width/(x_r0c1 - x_r0c0 - 4);
          let ty_le_canvas_height = table_excel_height/(y_r1c0 - y_r0c0 - 4);

          if (trang_thai_fill === true) {
            // vẽ lại  biểu tượng fill  nếu trang_thai_fill === true
            ctx.beginPath();
             if (mien_select[2]>= mien_select[0]&&mien_select[3]>= mien_select[1] ) {
              ctx.fillRect(ty_le_canvas_width*(x_r0c1 - x_r0c0 - 4) -10*ty_le_canvas_width, ty_le_canvas_height*(y_r1c0 - y_r0c0 - 4) - 10*ty_le_canvas_height, 10*ty_le_canvas_width, 10*ty_le_canvas_height);
              ctx.globalAlpha = 0.3;
            }else if(mien_select[3]<= mien_select[1]&&mien_select[2]>= mien_select[0]) {
              ctx.fillRect(0, ty_le_canvas_height*(y_r1c0 - y_r0c0 - 4) - 10*ty_le_canvas_height, 10*ty_le_canvas_width, 10*ty_le_canvas_height);
              ctx.globalAlpha = 0.3;
            }else if(mien_select[3]>= mien_select[1]&&mien_select[2]<= mien_select[0]) {
              ctx.fillRect(ty_le_canvas_width*(x_r0c1 - x_r0c0 - 4) -10*ty_le_canvas_width, 0, 10*ty_le_canvas_width, 10*ty_le_canvas_height);
              ctx.globalAlpha = 0.3;
            }else {
              ctx.fillRect(0, 0, 10*ty_le_canvas_width, 10*ty_le_canvas_height);
              ctx.globalAlpha = 0.3;
            }
              ctx.closePath();

          }else{
             // vẽ lại  biểu tượng fill  nếu trước đó biểu tượng fill đã xuất hiện rồi
            if ((mouse_X >   x_r0c1  - 14)&& (mouse_X <=x_r0c1 )   && (mouse_Y >   y_r1c0  - 14)&& (mouse_Y <=y_r1c0 )  ) {
              console.log('ve-------------------enter');
              ctx.beginPath(); 
              ctx.fillRect(ty_le_canvas_width*(x_r0c1 - x_r0c0 - 4) -10*ty_le_canvas_width, ty_le_canvas_height*(y_r1c0 - y_r0c0 - 4) - 10*ty_le_canvas_height, 10*ty_le_canvas_width, 10*ty_le_canvas_height);
              ctx.globalAlpha = 0.3;
              ctx.closePath();        
            }
          }

  // vẽ khung miền lựa chọn
          Object.assign(canvas_.current.style , css.canvas_) ;
        
          console.log(mien_select_array_2d);
      
          
        }

    // hàm chọn miền để sau đó copy giống excel

    function _onMouseEnter(event, x, y,i,j) {
      console.log('_onMouseEnter');
    

      if (xuat_hien_the_input === true) { console.log('so lan chay stop'); return  ;   }

      if (turn_off_onMouseEnter === true)
            {

              var _this =  a.current.children[i + 1].children[j+1];
              _onMouseDown(_this, i, j) ;
          
              console.log('turn_off_onMouseEnter = true');
            
              return ;  
            }
    
        // event.persist();    dùng để biến  sự kiện trên react  thành sự kiện gốc trên dom  vd: onMouseEnter  thành  onmouseenter
      // react thiết lập event.buttons bằng null : không điều khiển nút chuột để tăng hiệu suất. Để thiết lập event.buttons như javascript gốc cần chạy hàm event.persist();
        
      event.persist();

    
        if (event.buttons == 1) {

         
    
          _onMouseEnter_not_event (x, y,i,j);

              // khi nhấn chuột trái và di chuyển trong box canvas_ thì ẩn canvas_ đi
          // lúc này bảng tính phía sau canvas_ sẽ không bị canvas_ che nữa
          // và nó sẽ lắng nghe sự kiện _onMouseEnter và vẽ lại khung miền lựa chọn mới
    
          canvas_.current.onmousemove = function(e){
         

            let X, Y ;
       
            
            let y = e.clientY ;
            let x = e.clientX ;

            let a_1 = vi_tri_o_truoc[0];
            let b_1 = vi_tri_o_truoc[1] ;
         
            if (a_1 <  0) { a_1 = 0 }
            if (b_1 <  0) { b_1 = 0 }

            if (a_1 >  limit_view - 1) { a_1 =  limit_view - 1}
            if (b_1 >  limit_col_view) {b_1 =  limit_col_view}
      

            console.log(a_1, b_1, mien_select[2], mien_select[3]);
            if (a_1 <= mien_select[2] && b_1 <= mien_select[3]) {


             
              // cell đo X, Y là cell cuối lựa chọn
               Y = a.current.children[mien_select[2] +1 ].children[mien_select[3]+1].getBoundingClientRect().y ;
               X = a.current.children[mien_select[2] +1 ].children[mien_select[3]+1 ].getBoundingClientRect().x;
             
          
          
               if (e.buttons == 1 && select_range_excel === true&& ( x <= X  && y <= Y  )) {
                console.log('ve lai trong canvas_ --- duoi phai');


             

                    if ((mien_select[3]=== b_1)  ) {
                    
                      _onMouseEnter(event,a_1, b_1, mien_select[2]-1, mien_select[3]) ;
                    } 
                    else if ((mien_select[2]=== a_1)) {
                      
                      _onMouseEnter(event,a_1, b_1, mien_select[2], mien_select[3] - 1) ;
                    } 
                    
                    
                    else {
                      _onMouseEnter(event,a_1, b_1, mien_select[2]-1, mien_select[3]-1) ;
                    }
              
               
              }  else if (e.buttons == 1 &&select_range_excel === true&& ( x <= X   )) {

                console.log('ve lai trong canvas_--- duoi phai');
              
               

                if ((mien_select[3]=== b_1)  ) {
                
                  _onMouseEnter(event,a_1, b_1, mien_select[2]-1, mien_select[3]) ;
                } 
                else if ((mien_select[2]=== a_1)) {
                  
                  _onMouseEnter(event,a_1, b_1, mien_select[2], mien_select[3] - 1) ;
                } 
                
                
                else {
                  _onMouseEnter(event,a_1, b_1, mien_select[2], mien_select[3]-1) ;
                }



              }else if (e.buttons == 1 &&select_range_excel === true&& ( y <= Y  )) {

                console.log('ve lai trong canvas_--- duoi phai');
               
              

                if ((mien_select[3]=== b_1)  ) {
                  
                  _onMouseEnter(event,a_1, b_1, mien_select[2]-1, mien_select[3]) ;
                } 
                else if ((mien_select[2]=== a_1)) {
                
                  _onMouseEnter(event,a_1, b_1, mien_select[2], mien_select[3] - 1) ;
                } 
                
                
                else {
                  _onMouseEnter(event,a_1, b_1, mien_select[2]-1, mien_select[3]) ;
                }

              }



            }
            if (a_1 <= mien_select[2] && b_1 > mien_select[3]) {
             // cell đo X, Y là cell cuối lựa chọn cách 1 cột
              Y = a.current.children[mien_select[2] +1 ].children[mien_select[3]+1 +1].getBoundingClientRect().y ;
              X = a.current.children[mien_select[2] +1 ].children[mien_select[3]+1 +1].getBoundingClientRect().x;
         

              
              if (e.buttons == 1 &&select_range_excel === true&& ( x >= X && y <= Y )) {
                          console.log('ve lai trong canvas_--- duoi trai');
                        
                         console.log(mien_select[2], mien_select[3]+1);
              
                        // tới ô cách ô cuối theo đường chéo 1 ô
                      

                        if ((mien_select[2]=== a_1)  ) {
                          
                          _onMouseEnter(event,a_1, b_1, mien_select[2], mien_select[3]+1) ;
                        } 
                      
                        else {
                          _onMouseEnter(event,a_1, b_1, mien_select[2]-1 , mien_select[3]+1 )  ;
                        }
                    
                              
              }else if (e.buttons == 1 &&select_range_excel === true&& (  x >= X   )) {

                                    console.log('ve lai trong canvas_--- duoi trai');
                                            
                                  
                        
                                  // tới ô cách ô cuối theo đường chéo 1 ô
                                

                                  if ((mien_select[2]=== a_1)  ) {
                                   
                                    _onMouseEnter(event,a_1, b_1, mien_select[2], mien_select[3]+1) ;
                                  } 
                                
                                  else {
                                    _onMouseEnter(event,a_1, b_1, mien_select[2] , mien_select[3]+1 )  ;
                                  }


              }else if (e.buttons == 1 &&select_range_excel === true&& ( y <= Y  )) {

                                  console.log('ve lai trong canvas_--- duoi trai');
                                          
                              
                      
                                // tới ô cách ô cuối theo đường chéo 1 ô
                              

                                if ((mien_select[2]=== a_1)  ) {
                                
                                  _onMouseEnter(event,a_1, b_1, mien_select[2], mien_select[3]+1) ;
                                } 
                              
                                else {
                                  _onMouseEnter(event,a_1, b_1, mien_select[2]-1 , mien_select[3] )  ;
                                }


              }
              
            }

            if (a_1 > mien_select[2] && b_1 <= mien_select[3]) {
                   // cell đo X, Y là cell cuối lựa chọn cách 1 dòng
               Y = a.current.children[mien_select[2] +1 +1].children[mien_select[3]+1].getBoundingClientRect().y ;
               X = a.current.children[mien_select[2] +1 +1].children[mien_select[3]+1].getBoundingClientRect().x;
             
              if (e.buttons == 1 &&select_range_excel === true&& ( x <= X && y >= Y )) {
                              console.log('ve lai trong canvas_--- tren phai');
                             
                      
                        // tới ô cách ô cuối theo đường chéo 1 ô
                      

                        if ((mien_select[3]=== b_1)  ) {
                          
                          _onMouseEnter(event,a_1, b_1, mien_select[2], mien_select[3]-1) ;
                        } 
                        
                        else {
                          _onMouseEnter(event,a_1, b_1, mien_select[2] +1, mien_select[3] -1)  ;
                        }
           
                     
             }else if (e.buttons == 1 &&select_range_excel === true&& (  x <= X   )) {

                          console.log('ve lai trong canvas_--- tren phai');
                        
                  
                    // tới ô cách ô cuối theo đường chéo 1 ô
                  

                    if ((mien_select[3]=== b_1)  ) {
                   
                      _onMouseEnter(event, a_1, b_1,mien_select[2], mien_select[3]-1) ;
                    } 
                    
                    else {
                      _onMouseEnter(event,a_1, b_1, mien_select[2] , mien_select[3] -1)  ;
                    }


             }else if (e.buttons == 1 &&select_range_excel === true&& (  y >= Y   )) {

                          console.log('ve lai trong canvas_--- tren phai');
                       
                    // tới ô cách ô cuối theo đường chéo 1 ô
                  

                    if ((mien_select[3]=== b_1)  ) {
                     
                      _onMouseEnter(event,a_1, b_1, mien_select[2], mien_select[3]-1) ;
                    } 
                    
                    else {
                      _onMouseEnter(event,a_1, b_1, mien_select[2] +1, mien_select[3] )  ;
                    }

              
             }
              
            }


            if (a_1 > mien_select[2] && b_1 > mien_select[3]) {
                   // cell đo X, Y là cell cuối lựa chọn cách 1 dòng, 1 cột
              Y = a.current.children[mien_select[2] +1 +1].children[mien_select[3]+1+1].getBoundingClientRect().y ;
              X = a.current.children[mien_select[2] +1 +1].children[mien_select[3]+1+1].getBoundingClientRect().x;
             
             if (e.buttons == 1 &&select_range_excel === true&& ( x >= X && y >= Y )) {
                      console.log('ve lai trong canvas_--- tren trai');
                
              
                // tới ô cách ô cuối theo đường chéo 1 ô
                  _onMouseEnter(event,a_1, b_1, mien_select[2] +1, mien_select[3] +1)  ;


          
                    
            }else if (e.buttons == 1 &&select_range_excel === true&& (  x >= X   )) {

                    console.log('ve lai trong canvas_--- tren trai');
               
            
              // tới ô cách ô cuối theo đường chéo 1 ô
                _onMouseEnter(event,a_1, b_1, mien_select[2] , mien_select[3] +1)  ;

            }else if (e.buttons == 1 &&select_range_excel === true&& ( y >= Y  )) {
                        console.log('ve lai trong canvas_--- tren trai');
                   
                
                  // tới ô cách ô cuối theo đường chéo 1 ô
                    _onMouseEnter(event,a_1, b_1, mien_select[2] +1, mien_select[3] )  ;

            }
            }

            
          
           
            
          

          };


          // khi nhấn chuột hoặc bàn phím gõ vào khung canvas_  thì ẩn canvas_ đi
          // lúc này bảng tính phía sau canvas_ sẽ không bị canvas_ che nữa
          // và nó sẽ lắng nghe sự kiện _onMouseEnter nhưng lúc này ta thiết lập   turn_off_onMouseEnter = true
          // để chạy sự kiện giống như click chuột vào 1 ô trong bảng tính
         
          canvas_.current.onmousedown = function(event){
            
            // khi click vào canvas nếu không fill thì sẽ ẩn canvas đi
                if (trang_thai_fill === false) {
                  console.log('ẩn canvas');
                  Object.assign(canvas_.current.style ,{display : "none"}) ;
                  turn_off_onMouseEnter = true ;
                  select_range_excel = true ;
                  
                }
                  
             

          };



        }

     


    
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    // thực hiện các sự kiện khi chuột trái được nhấn xuống (dùng chuột)
    let xuat_hien_the_input = false ;
    let vi_tri_con_tro_khi_di_chuyen_trong_double_click_input ;

    function _onMouseDown(_this, i, j,event) {
     
      // khi click chuột thì ta tắt element này lắng nghe bàn phím.
      // đồng thời phía dưới ta tạo hàm  _this.onkeydown để lắng nghe sự kiện từ bàn phím trên element này
      // do vậy khi ta click sang ô khác hoặc scroll ta phải xoá _this.onkeydown trên element này đi  nếu không sẽ xảy ra vấn đề sau
              // khi ta scroll elment này trở thành elment mới theo Data thực tế nó phải chưa có _this.onkeydown do ta chưa kich vào đó
              // nhưng khi ta ấn enter xuống elment này nó đẫ có _this.onkeydown rồi nên nó sẽ lắng nghe _this.onkeydown mà mục đích khi ta ấn enter 
              // là để elment này lắng nghe hàm _onKeyDown.
              // mặt khác  hàm _this.onkeydown cũng chạy không ra kết quả ta mong nuốm vì nó gọi hàm ý trong cloure cũ có i_array_2d , i_array_2d lấy từ thời gian cũ trước đó
      // xoá _this.onkeydown ở vị trí trước đi

      console.log(vi_tri_o_truoc[0]  ,vi_tri_o_truoc[1] , "onKeyDown = null " );
      if (vi_tri_o_truoc[0]>=0 && vi_tri_o_truoc[1]>=0 &&vi_tri_o_truoc[0]<=limit_view && vi_tri_o_truoc[1]<=limit_col_view) {
        a.current.children[vi_tri_o_truoc[0] + 1].children[vi_tri_o_truoc[1]+1].onkeydown = null  ;
      }
      
    
      console.log("_onMouseDown") ;
      // nếu trạng thái fill tồn tại thì kết thúc fuction
      if (trang_thai_fill === true) {
          return ;
      }


     
   
    
    
      let i_array_2d =parseInt((a.current.children[0 + 1].children[0].innerHTML));  
      let j_array_2d =parseInt((a.current.children[0].children[0 + 1].innerHTML)); 
     
      // đầu tiên nó chạy hàm 1 click khởi tạo kiem_tra = 1 do đó khi click thêm trong vòng 300 ms giây thì kiem_tra vẫn = 1 => nó chạy hàm 2 click
    

      
      // 2 click _chuột trái trong vòng 300 ms giây thì chạy lại hàm _onMouseDown . Lúc này kiem_tra là 1 thuộc tính toàn cầu lưu trên dom này ( ta lưu vào kiem_tra thuộc tính của element vì nếu lưu biến toàn cục thì sẽ phải tạo mảng biến và truy cập thì phải truyền vị trí rất phức tạp)
      // khi doubleclick xong xuất hiện thẻ input nên _this.children[0] === "object"  nên sẽ không chạy chỗ 1 click nữa.
   
      // nếu lúc này 2 click thì nó sẽ chạy lại _onDoubleClick
      if (_this.kiem_tra == 1) {
    

                    
                      
                          console.log("_onDoubleClick");
                          _this.style.zIndex = 100 ;
                        _this.innerHTML = '<div  contenteditable="true"  ></div>' ;
                        xuat_hien_the_input = true ;
                      onclick_tinh_toan = true ;
                      vi_tri_o_truoc[0] = i ;
                      vi_tri_o_truoc[1] = j ;
                      
                      onKeyDown = true ;
                    

                      let input_ =  _this.children[0];

                 
                      
                    
                      
                       // khi di chuyển chuột trong input này thì lưu lại vị trí của con trỏ vào biến vi_tri_con_tro_khi_di_chuyen_trong_double_click_input
                         //để khi element table _this nhận bàn phím thì làm xuất hiện thẻ input lại và focus tại vị trí trước đó 
                        //******** */ sự kiện onkeydown chỉ ảnh hưởng lên element đó khi nó được focus. Nếu nó không được lấy tiêu điểm thì không kích hoạt được sự kiện
                        // do vậy khi input xuất hiện và focus thì element cha này sẽ không lắng nghe sự kiện onkeydown nữa. ==>  _this.onkeydown  chỉ chạy được 1 lần đầu tiên duy nhất vì _this lắng nghe sự kiện onkeydown trước khi thẻ input xuất hiện. 
                          
                     
                      //  input_.textContent nếu text_formular[i+i_array_2d][j + j_array_2d] là null khi hiển thị lên thành ""

                       

                        if ( text_formular[i+i_array_2d][j + j_array_2d]  === null) {
                         
                           
                          Object.assign(input_.style,css.input_focus  ) ;
                           
                        input_.focus({preventScroll:true}) ;
                            
                        }else{
                          let width_input_focus = ( table_excel.current.clientWidth - (a.current.children[i + 1].children[j+1].getBoundingClientRect().x -  table_excel.current.getBoundingClientRect().x ) -6 )+ 'px' ;
                          Object.assign(input_.style,css.input_focus , { width: width_input_focus} ) ;
     
                        
                          let len  = text_formular[i+i_array_2d][j + j_array_2d].length  ;
                          let paint =  paint_text(text_formular[i+i_array_2d][j + j_array_2d],len ) ;
                       
                         input_.innerHTML = paint[0] ;
                           //focus sau đó di chuyển đến cuối 
                          
                            let range = document.createRange();
                           let selection = window.getSelection();
                           selection.removeAllRanges(); 
                            range.setStart(input_.childNodes[paint[1]], paint[2]);
                            selection.addRange(range);
                           
                              //focus
                              console.log('--------------------------------------------------------------------------');                                                       
                              vi_tri_con_tro_khi_di_chuyen_trong_double_click_input = len ; 
                              console.log('vi_tri_con_tro_khi_di_chuyen_trong_double_click_input                     ' + vi_tri_con_tro_khi_di_chuyen_trong_double_click_input) ;
                           

                        }
                        
                     
                        

                           
                              
                        
                            
                         
                 
                           input_.onmousedown =  function (event) {  

                          
                            let range = document.createRange();
                            let selection = window.getSelection();
                           // setTimeout ở đây để window.getSelection() lấy vị trí xong mới cho vào range
                              setTimeout(() => {
                                range.setStart(input_.firstChild, 0);
                                range.setEnd(selection.anchorNode , selection.anchorOffset);
                                 vi_tri_con_tro_khi_di_chuyen_trong_double_click_input = range.toString().length;
                                console.log(vi_tri_con_tro_khi_di_chuyen_trong_double_click_input);
                              }, 0);
                          
                                                                                      
                                                                                      }
                
                  
            
      
      }
    
      // 1 click  xuống thì chạy hàm tính toán
      // tính toán nếu chạy xong thì tô màu
      // trong khi tính toán nếu cong_thuc_chua_hoan_thanh khác ""  thì viết tiếp công thức
      // khi 1 click ta cũng tắt lắng nghe sự kiện onkedown ở element này nên ta cần gán lại sự kiện onkedown ở element này chạy ở cloure khác khi element được click để kiểm soát code dễ hơn
     
      if ( (_this.kiem_tra == 0 || _this.kiem_tra == undefined)&&   (function() {  if (_this.children[0]!== undefined) { return _this.children[0].hasAttribute("contenteditable") ; }else{ return false ; }; })() === false  ) {
        
        select_range_excel = true ;  
        console.log('******************************',select_range_excel);     
        // huỷ bỏ miền chọn cũ
       
        Object.assign(canvas_.current.style ,{display : "none"}) ;

        mien_select_array_2d[0] =  i  + i_array_2d;
       mien_select_array_2d[1] = j + j_array_2d ;
        
        vi_tri_khung_nhin_truoc_scroll[0] = i_array_2d ;
        vi_tri_khung_nhin_truoc_scroll[1] = j_array_2d ;      

                  // thiết lập để  element div này không lắng nghe sự kiện onKeyDown  (khi dùng chuột ta sẽ khoá nhận bàn phím)
                  onKeyDown = false ;
                  console.log("_onClick---");
                  //1.----------------------------------------------------------------
                  // nếu ô trước đó đang viết công thức thì onclick_tinh_toan đã được chuyển thành true
                  //nên khi click vào ô khác thì sẽ phải tính toán lại ngược lại không xuất hiện thẻ input onclick_tinh_toan == flase  không phải tính toán lại
                  if (onclick_tinh_toan) {
                    // kiểm tra nếu ô trước đó chứa công thức hoặc công thức bị sửa thì phải tính toán. Ngược lại không phải tính toán.
                    console.log("_onClick---tinh_toan");

                            tinh_toan(vi_tri_o_truoc[0],vi_tri_o_truoc[1], "xoa_ky_tu_cong_thuc_thua_mouse_down");


                      // khi tính toán xong nếu trả về   cong_thuc_chua_hoan_thanh khác ""  thì viết tiếp công thức vào thẻ input
                      // ngược lại  cong_thuc_chua_hoan_thanh bằng ""  thì tô màu và focus  
                    if (cong_thuc_chua_hoan_thanh != "") {
                      console.log("_onClick---viet tiếp công thức vào thẻ input");
                      // viet tiếp công thức vào thẻ input nên phải  để  onKeyDown_1_element = true; để không lắng nghe sụ kiện keydown ở element cha của input
                      onKeyDown_1_element = true;
                      console.log(cong_thuc_chua_hoan_thanh);
                    // không thay đổi mien_select_array_2d
                    // mien_select_array_2d vẫn là ô click trước đó
                      mien_select_array_2d[0] = mien_select_array_2d[2];
                      mien_select_array_2d[1] =mien_select_array_2d[3] ;
                      // nếu công thức đang viết dở thì khi onclick sẽ viết tiếp công thức vào ô trước đó.
                      // r,c là vị trí r,c thẻ input trong khung nhìn nếu là số âm hoặc lớn hơn limit thì là vị trí đó cách toạ độ 0,0 của khung nhìn 
                      // r + i_array_2d là vị trí thực tế
                        var r = parseInt(cong_thuc_chua_hoan_thanh[0] )  ;
                        var c = parseInt(cong_thuc_chua_hoan_thanh[1] )  ;
                   
                        // gán công thức cũ vào text
                        var text = cong_thuc_chua_hoan_thanh[2]  ;
                        let len_text = text.length ;
          
                         // khi lần thứ 2 nhấn vào ô khác mà không di chuyển con trỏ thì vi_tri_con_tro_khi_di_chuyen_trong_double_click_input vẫn như cũ
                      // vì thế trước đó vẫn là dấu + nên công thức chưa hoà thành
                      // nếu ấn tiếp vào ô khác mà không viết thêm ký tự + đừng sau. ta cần xoá công thức cũ đã viết đi

          
                     console.log("cong_thuc_chua_hoan_thanh    "+ r +'    '+ c);

                       
                        console.log( cong_thuc_them_vao[0]);
                        // khi click vào ô khác lần 2,3 để thay đổi công thức viết ta cần xoá công thức cũ đã viết đi
                        // click vào ô khác lần 2,3 thì input_truoc_do.cong_thuc_them_vao[0] và  input_truoc_do.vi_tri_cong_thuc_them_vao[0]  đã được set value
                        // nếu input_truoc_do.cong_thuc_them_vao[0] === undefined tức lần nhấn đầu thì không có công thức cũ để xoá nên không làm gì
                        //  input_truoc_do.vi_tri_cong_thuc_them_vao[0] !== vi_tri_con_tro_khi_di_chuyen_trong_double_click_input nghĩa là đã di chuyển con chuột trong thẻ input tức là chấp nhận công thức đã viết nên không xoá nữa
                       if (cong_thuc_them_vao[0] === null ||   vi_tri_cong_thuc_them_vao !== vi_tri_con_tro_khi_di_chuyen_trong_double_click_input )
                        { }
                        else
                        { 
                          //  xoá công thức cũ đã viết đi: độ dài xoá là cong_thuc_them_vao[0].length
                        text =   text.slice(0,vi_tri_con_tro_khi_di_chuyen_trong_double_click_input) + text.slice(vi_tri_con_tro_khi_di_chuyen_trong_double_click_input + cong_thuc_them_vao[0].length ,len_text) 
                       }
                       
                       // update công thức mới
                       let text_update = text.slice(0,vi_tri_con_tro_khi_di_chuyen_trong_double_click_input) + "(Data["+(i+i_array_2d)+"]["+(j + j_array_2d )+ "])" +text.slice(vi_tri_con_tro_khi_di_chuyen_trong_double_click_input ,len_text) ;
                       
                        cong_thuc_them_vao[0] = "(Data["+(i+i_array_2d)+"]["+ (j + j_array_2d )+ "])" ;
                        cong_thuc_them_vao[1] = i+i_array_2d;
                        cong_thuc_them_vao[2] = j + j_array_2d;

                        vi_tri_cong_thuc_them_vao = vi_tri_con_tro_khi_di_chuyen_trong_double_click_input ;
                        console.log( cong_thuc_them_vao[0]);

                       // khi scroll nếu input trước đó nằm trong khung nhìn thì viết tiếp công thức vào input đó
                        // nếu input trước đó không nằm trong khung nhìn thì viết rồi lưu công thức vào mảng text_formular
                        // sau đó hiện công thức đó lên thanh formular để người dùng viết tiếp.
                        if ( (r <= limit_view - 1 )&( r >= 0) &&  (c <= limit_col_view - 1 )&&( c >= 0)) {
                              
                          var input_truoc_do = a.current.children[r + 1].children[c+1].children[0]; 

                         // focus tại vị trí mới nhưng không set lại vi_tri_con_tro_khi_di_chuyen_trong_double_click_input. Biến này vẫn ở trạng thái trước đó
                         let vi_tri_focus = vi_tri_con_tro_khi_di_chuyen_trong_double_click_input + cong_thuc_them_vao[0].length ; 
                         console.log('vi_tri_focus      ' + vi_tri_focus)
                         console.log('vi_tri_con_tro_khi_di_chuyen_trong_double_click_input      ' + vi_tri_con_tro_khi_di_chuyen_trong_double_click_input)
                              
                              
                              console.log(text_update);
                                text_formular[r+i_array_2d][c + j_array_2d] =  text_update;
                                cong_thuc_chua_hoan_thanh[2] = text_update ;
                                let paint =  paint_text(text_update,vi_tri_focus ) ;
                                  console.log(paint);
                                input_truoc_do.innerHTML = paint[0] ;

                                     // di chuyển focus tới vị trí cũ
                                let range = document.createRange();
                                let selection = window.getSelection();
                                selection.removeAllRanges(); 
                                  range.setStart(input_truoc_do.childNodes[paint[1]], paint[2]);
                                  // khi click vào div khác thì div input_truoc_do đã bị mất focus, sự kiện mất focus diễn ra cuối cùng.
                                  // do vậy ta phải setTimeout ở đây để lấy lại focus. => selection.addRange(range) sẽ diễn ra cuối cùng
                                  // cùng hàm này nhưng ở chỗ doubleclick không cần setTimeout do không click vào div khác nên không bị mất focus
                                  setTimeout(() => {
                                    selection.addRange(range); 
                                                            
                                  }, 0);
                                  
                               
                           
                                                      
                         
                        }else  {
                             text_formular[r+i_array_2d][c + j_array_2d] =  text_update; 
                              cong_thuc_chua_hoan_thanh[2] = text_formular[r+i_array_2d][c + j_array_2d ] ; 
                              

                             }  
                        
                        onclick_tinh_toan = true ;
                        // để tắt input lắng nghe sự kiện bàn phím trên all element lúc render
                        onKeyDown = true ;
                      
                       
                  
                  }else{


                          //khi tính toán ở trên xong nếu cong_thuc_chua_hoan_thanh === ""
                          // thì tô màu và focus
                          // set địa chỉ ô click  sau hành động trên
                          dia_chi_o_click(i + i_array_2d,j + j_array_2d,i ,j) ;
                          // tô màu vào vị trí i,j
                          key_enter(vi_tri_o_truoc[0],vi_tri_o_truoc[1],i ,j); // tô màu và focus

                          mien_select_array_2d[0] = i_array_2d + i ;
                          mien_select_array_2d[1] = j_array_2d + j ;
                        
                          _onMouseEnter_not_event(i, j, i, j) ;
                               onKeyDown = false ; 
                               onclick_tinh_toan = false ;



                  }


                             

    
                  }else{
                    console.log("_onClick----------------- không tinh_toan", "chỉ tô màu thôi");
                                         // set địa chỉ ô click  sau hành động trên
                           dia_chi_o_click(i + i_array_2d,j + j_array_2d,i ,j) ;
                                    // tô màu vào vị trí i,j
                                    key_enter(vi_tri_o_truoc[0],vi_tri_o_truoc[1],i ,j); // tô màu và focus

                                    mien_select_array_2d[0] = i_array_2d + i ;
                                    mien_select_array_2d[1] = j_array_2d + j ;
                                  
                                    _onMouseEnter_not_event(i, j, i, j) ;
                  }
    
                 
    
               
    
                                                                                          
            
                  
    
    
    
      }

          ///////////////////////////////////////////////
          // khi click vào element thì gán sự kiện onkeydown cho element đó
      _this.onkeydown  =  function (event) {

        //  elment lắng nghe 2 sự kiện 
        //1.onkeydown mặc định khi khởi tạo  => tắt sự kiện này onkeydown === false
       //2. khi elment được click thì onkeydown === false => ta đã tắt onkeydown lúc khởi tạo rồi nên ở đây ta viết hàm này để elment nhận lại onkeydown ở cloure khác
                   //  onKeyDown_1_element === false tức chưa xuất hiện thẻ input
                   // khi xuất hiện thẻ input thì onKeyDown_1_element === true
                   // mục đích khi xuất hiện thẻ input thì tắt lắng nghe sự kiện  ở elment _this.onkeydown  này  
                   console.log(onKeyDown_1_element) ;
         if (onKeyDown_1_element === false) {

           
           console.log("_onMouseDown_onKeyDown") ;
          // enter-----xuất hiện thẻ input khi double click mà không nhập gì chỉ ấn enter cũng không cần tính toán
          // khi nhập phím khác enter thì sẽ kích hoạt thẻ input mọi việc tiếp theo thẻ input lo
           if (event.keyCode === 13 ) {
                
             console.log("enter-----không xuất hiện thẻ input không tính toán") ;
             console.log("enter-----xuất hiện thẻ input khi double click mà không nhập gì cũng không cần tính toán") ;
             if ( Data[i+i_array_2d][j + j_array_2d] === null) {
              a.current.children[i + 1].children[j+1].innerHTML = null ;
              // nếu xuất hiện thẻ input khi double click mà  không nhập gì cũng không cần tính toán nhưng phải thay đỏi zindex về như cũ vì khi double click ta đã xác định zIndex: là 100
              a.current.children[i + 1].children[j+1].style.zIndex = j ;
             }else{

            
            // với  cell hiện lên trang web bảng tính thì ta duyệt từ cuối tới đầu dòng đó để xác định zIndex cho cell đó
                 let max_zindex  = limit_col_view + 1;
                 
                 for (let x = limit_col_view ; x >= 0 ; x--) {

                   if (Data[i+i_array_2d][x + j_array_2d] === null) {
                   
                   }else{
                     a.current.children[i + 1].children[x+1].style.zIndex = max_zindex ;
                     max_zindex = x ;
                   } 
                 }

               a.current.children[i + 1].children[j+1].innerHTML = ` <div    style="  position:absolute;      background: inherit;   height: inherit ;   white-space: nowrap;   pointer-events: none;   "> ${ Data[i +i_array_2d][j +j_array_2d]}  </div>`;
             

             }
           

                    // set địa chỉ ô click  sau hành động trên
                    dia_chi_o_click(i +1+ i_array_2d,j + j_array_2d,i +1 ,j) ;
             key_enter(i,j,i+1,j); // tô màu và focus
             mien_select_array_2d[0] = i_array_2d + i  + 1;
             mien_select_array_2d[1] = j_array_2d + j ;
            
             _onMouseEnter_not_event(i +1, j, i +1, j) ;
            
             xuat_hien_the_input = false ;   
             onKeyDown = false ; 
             onclick_tinh_toan = false ;
             onKeyDown_1_element = false;
              


             
           }




            // khi nhập phím khác enter thì sẽ kích hoạt thẻ input, đoạn code dưới chỉ sử lý ký tự đầu tiên khi nhận từ bàn phím mọi việc tiếp theo thẻ input lo

             //chỉ sử lý ký tự đầu tiên khi nhận từ bàn phím vì khi xuất hiện thẻ input phải tắt lắng nghe sụ kiện của element này bằng  onKeyDown_1_element = true ;
           if (event.keyCode != 13) {
             console.log("_onMouseDown_onKeyDown_keyCodekhac enter") ;

             // khi ấn phím khác enter thì viết công thức hoặc dữ liệu vào ô đó (thiết lập ô đó ở trạng thái tính toán)
             a.current.children[i + 1].children[j+1].style.zIndex = 100 ;
             a.current.children[i + 1].children[j+1].innerHTML = '<div  contenteditable="true"></div>' ;
            // biến này dùng để xác định ảnh hưởng tới scoll
             xuat_hien_the_input = true ;  
             var input_ =  a.current.children[i + 1].children[j+1].children[0];

           
             
                  
             Object.assign(input_.style,css.input_focus ) ;

     
              // lấy tiêu điểm để input_ có thể lắng nghe được sụ kiện
             input_.focus({preventScroll:true}) ;

             console.log('vi_tri_con_tro         ' +  vi_tri_con_tro_khi_di_chuyen_trong_double_click_input )
             if (vi_tri_con_tro_khi_di_chuyen_trong_double_click_input === undefined) {
               // nếu thẻ element table trước đó không được double click thì vi_tri_con_tro_khi_di_chuyen_trong_double_click_input sẽ là  undefined
              // ta bôi đen miền lựa chọn ở đây để khi nhấn phím sẽ xoá toàn bộ ký tự cũ nếu element table không được double click trước đó.
                // lúc này sự kiện ghi ký  tự đã nhấn vào input_ sẽ chạy và thêm ký tự vào( hoặc xoá ký tự nếu nhấn phím backspace)
             
             // gán giá trị đầu tiên khi nhấn phím đó vào text_formular; các giá trị tiếp theo input đó sẽ láng nghe sự kiện onkeydown để gán tiếp
             //**************** */ trong javscript thuần ghi giá trị từ bàn phím vào thẻ input sẽ diến ra sau việc lấy giá trị từ thẻ input vào biến.
             // phải setTimeout ở đây vì phải đợi input lấy giá trị từ bàn phím mới gán vào text_formular
   
             setTimeout(() => { 
               text_formular[i + i_array_2d][j + j_array_2d] = input_.textContent ; 
               console.log( text_formular[i + i_array_2d][j + j_array_2d]) ; 
              
                 vi_tri_con_tro_khi_di_chuyen_trong_double_click_input = 1 ;

                 } , 0);
             
             }
             else{
               // nếu trước đó double click input_ hiện lên công thức cũ đẫ viết
               // mục đích của người dùng là viết tiếp công thức khi ấn phím thì
             // di chuyển con trỏ tới vị trí focus trước  đó.
              // nếu thẻ element table trước đó được double click thì vi_tri_con_tro_khi_di_chuyen_trong_double_click_input sẽ là khác undefined
              let len  = text_formular[i+i_array_2d][j + j_array_2d].length  ;
              let paint =  paint_text(text_formular[i+i_array_2d][j + j_array_2d],len ) ;
           
             input_.innerHTML = paint[0] ;
               //focus sau đó di chuyển đến cuối 
              
                let range = document.createRange();
               let selection = window.getSelection();
               selection.removeAllRanges(); 
                range.setStart(input_.childNodes[paint[1]], paint[2]);
                selection.addRange(range);
               
                

               // lúc này sự kiện ghi ký  tự đã nhấn vào input_ sẽ chạy và thêm ký tự vào( hoặc xoá ký tự nếu nhấn phím backspace)
             
             // gán giá trị đầu tiên khi nhấn phím đó vào text_formular; các giá trị tiếp theo input đó sẽ láng nghe sự kiện onkeydown để gán tiếp
             //**************** */ trong javscript thuần ghi giá trị từ bàn phím vào thẻ input sẽ diến ra sau việc lấy giá trị từ thẻ input vào biến.
             // phải setTimeout ở đây vì phải đợi input lấy giá trị từ bàn phím mới gán vào text_formular
         
             setTimeout(() => { 
               text_formular[i + i_array_2d][j + j_array_2d] = input_.textContent ; 
               console.log( text_formular[i + i_array_2d][j + j_array_2d]) ; 
             
                 let range = document.createRange();
                 let selection = window.getSelection();
                // setTimeout ở đây để window.getSelection() lấy vị trí xong mới cho vào range
                  
                     console.log(selection.anchorNode , selection.anchorOffset);
                     range.setStart(input_.firstChild, 0);
                     range.setEnd(selection.anchorNode , selection.anchorOffset);
                      vi_tri_con_tro_khi_di_chuyen_trong_double_click_input = range.toString().length;
                     console.log(vi_tri_con_tro_khi_di_chuyen_trong_double_click_input);
                 

                 } , 0);
             
             }
                

              
           

             
             onclick_tinh_toan = true ;
             
             vi_tri_o_truoc[0] = i ;
             vi_tri_o_truoc[1] = j ;
           // tắt lắng nghe sự kiện onKeyDown cho div element
           onKeyDown_1_element = true ;
       
               
            run_function_when_input_focus (input_,i,j,i_array_2d, j_array_2d);


         }
            
         }
   
        

       }
    
    
    
    
    // hàm này không đồng bộ chạy cuối của lần click đó.
      setTimeout(()=>{  return _this.kiem_tra = 0   }, 300);


      _this.kiem_tra = 1 ;
    
              }
    ///////////////////////////////////////////////////////////////////////////////////////////////
  // hàm copy

  var mien_copy ;
  function copy(event) {
     mien_copy = [...mien_select_array_2d];

  let text_copy = "";
    for (let index = mien_copy[0]; index < mien_copy[2]; index++) {
              let text_copy_row = "";
              // đầu tiên nó truyền index = mien_copy[0] xuống for sau đó nó lặp qua các cột ghép thành text dòng
              for (let index_j = mien_copy[1]; index_j < mien_copy[3]; index_j++) {
                  text_copy_row = text_copy_row + Data[index][index_j]  + "\t";
              }
              // cuối cùng của text_copy_row không có "\t"
              text_copy_row = text_copy_row + Data[index][mien_copy[3]]  ;
              // ghép tất cả các dòng lại tạo thành text table copy tới excel được
             
                text_copy = text_copy +  text_copy_row + "\r";
            
             

    }

       // cuối cùng của text_copy tại mien_copy[2] không có "\r"
                            let text_copy_row = "";
                            for (let index_j = mien_copy[1]; index_j < mien_copy[3]; index_j++) {
                              text_copy_row = text_copy_row + Data[mien_copy[2]][index_j]  + "\t";
                          }

                            // cuối cùng của text_copy_row không có "\t"
                            text_copy_row = text_copy_row + Data[mien_copy[2]][mien_copy[3]]  ;
                            text_copy = text_copy +  text_copy_row ;

                            console.log(text_copy);
      navigator.clipboard.writeText(text_copy);
      canvas_.current.style.borderStyle = "dashed";
    
  }


  ////////////////////////////////////////////////////////////////////////////////////////////////////
  function paste(event) {
    console.log(vi_tri_o_truoc);

    let i_array_2d =parseInt((a.current.children[0 + 1].children[0].innerHTML));  
      let j_array_2d =parseInt((a.current.children[0].children[0 + 1].innerHTML)); 

    navigator.clipboard.readText().then(

      (clipText) => { 
        // chuyển text từ clipboard sang array_paste kết hợp chuyển data từ array_paste sang Data cho performance
        var array_paste ;
        array_paste = clipText.split("\r")
        // chú ý xem lại sử sụng let trong vòng lặp for khác var
        for (let index = 0 , len = array_paste.length ;  index < len; index++) {
          array_paste[index] =  array_paste[index].split("\t")
          for (let index_col = 0 , len_col = array_paste[0].length ;  index_col < len_col; index_col++) {
         
            Data[vi_tri_o_truoc[0] + index + i_array_2d ][vi_tri_o_truoc[1] + index_col + j_array_2d] = JSON.parse(array_paste[index][index_col]) ;
            console.log(vi_tri_o_truoc[0] + index + i_array_2d,vi_tri_o_truoc[1] + index_col + j_array_2d );
            console.log( Data[vi_tri_o_truoc[0] + index + i_array_2d ][vi_tri_o_truoc[1] + index_col + j_array_2d]);
            text_formular[vi_tri_o_truoc[0] + index  + i_array_2d][vi_tri_o_truoc[1] + index_col + j_array_2d] = array_paste[index][index_col] ;
          }

        }
       

         // hiện dữ liệu lên khung nhìn

         
      

         for (let index = 0; index <= (limit_view ); index++) {
                      
       
         
          for (let index_j = 0; index_j <=(limit_col_view ) ; index_j++) {
           
          
            a.current.children[index + 1].children[index_j+1].innerHTML = Data[index +i_array_2d][index_j +j_array_2d];
          }
        }  


      
       
        
      }
      
      );
   
    
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////

  let trang_thai_fill = false ;
 let kieu_fill  ;

  function fill(event) {

    let data_array_2d = [] ;
    let text_inclue_Data ;
    let keo_doc ;
  let keo_ngang ;


  keo_doc = mien_select_array_2d[2] - mien_select_array_2d[0] ; 
  keo_ngang = mien_select_array_2d[3] - mien_select_array_2d[1]   ;
 
    let text = text_formular[vi_tri_click_in_Data[0]][vi_tri_click_in_Data[1]]  ;
    console.log(text);
    let text_replace ;
    let kq ;
   
    let text_cong_thuc_cell_next ;

    if (text  === null) {  text_inclue_Data = false ;} else { text_inclue_Data = (text.indexOf("Data") !== -1) ; }


          // tiến hành fill vào mảng data_array_2d
                  if (  ( text  === null )||  text_inclue_Data === false   ) {
                    for (let index_ngang = 0; index_ngang <= keo_doc; index_ngang++) {
                      let data_array_col = [] ;
                      for (let index_doc = 0; index_doc <= keo_ngang; index_doc++) {
                        data_array_col.push(text) ;
                      }
                
                    // lặp qua các cell theo dòng đẩy vào mảng data_array_2d
                    data_array_2d.push(data_array_col) ;
                
                }}else{

                  text_replace = text.replaceAll('Data', '|_|Data');
                      // tạo mảng lưu trữ text công thức viết
                  kq = text_replace.split('|_|')  ;

                  for (let index_ngang = 0; index_ngang <= keo_doc; index_ngang++) {
                    let data_array_col = [] ;
                    for (let index_doc = 0; index_doc <= keo_ngang; index_doc++) {
                        // fill xong thì lưu vào mảng text_cong_thuc_cell_next
                        text_cong_thuc_cell_next = kq.map(i => {
                          
                            console.log(i);
                          // trong mảng kq tiến hành fill từng item nếu thoả mãn điều kiện
                          // trước tiên kiểm tra item có thoả mãn điều kiện không
                          // hàm match trả về 1 phần item thoả mãn điều kiện
                          // i_row là:                 (Data$[0]
                          // i_col là phần còn lại:    $[1])
                          let i_row = i.match(/.*Data\$?\[[0-9]+\]/i) ;
                          
                          //  x(?!y)	Chỉ khớp x nếu ngay sau x không phải là y
                          // (?!\[|\$)  khớp nếu ngay sau không phải là [ hoặc $
                          let i_col = i.match(/\$?\[[0-9]+\](?!\[|\$).*/i) ;

                           // nếu không match được thì i_row === null
                            // néu item tức i chứa Data tức macth được trả về mảng khác null thì tiến hành fill 
                            // ngược lại i không  chứa data thì trả về i để sau đó join lại
                          if (i_row != null) { 
                            console.log(i_row, i_col );
                            // kiểm tra trước row có ký tự $ không
                            let co_dinh_row = /\$/i.test(i_row[0])
                            // kiểm tra trước cột có kí tự $ không
                            let co_dinh_col = /\$/i.test(i_col[0])
                          
  
                            if (co_dinh_col === false) {
  
  
                              // đâ thoả mãn điều kiện tiến hành fill    
  
                                let text_moi = i_col[0].match(/[0-9]+/i)[0] * 1 + index_doc
  
                                let i_col_replace = i_col[0].replace(/[0-9]+/i, text_moi)
  
                                i_col = i_col_replace
                            }
  
                            if (co_dinh_col === true) {
                                i_col = i_col
                            }
  
                            // trước ròng không có ký tự $ thì fill +1 dòng
                            if (co_dinh_row === false) {
  
                                // đâ thoả mãn điều kiện tiến hành fill  
                                let text_moi = i_row[0].match(/[0-9]+/i)[0] * 1 + index_ngang
                            
  
                                let i_replace = i_row[0].replace(/[0-9]+/i, text_moi) + i_col
  
                                return i_replace
                            }
  
                            if (co_dinh_row === true) {
                                return i_row + i_col
                            }

                          } else {
                            return i
                        }
                         
                      })


                          // text_cong_thuc_cell_next.join('') là fill xong 1 cell
                          // lặp qua các cell theo cột đẩy vào mảng data_array_col
                          data_array_col.push(text_cong_thuc_cell_next.join(''))



                          
                    }



              // lặp qua các cell theo dòng đẩy vào mảng data_array_2d
              data_array_2d.push(data_array_col) ;


              }



                }




   


   
   console.log(data_array_2d);

     let i_array_2d =parseInt((a.current.children[0 + 1].children[0].innerHTML));  
     let j_array_2d =parseInt((a.current.children[0].children[0 + 1].innerHTML)); 
     

// lặp trong mảng data_array_2d lấy công thức push vào formular
                   for (let index = 0 , len = keo_doc  ;  index <= len; index++) {
                   
                     for (let index_col = 0 , len_col = keo_ngang  ;  index_col <= len_col; index_col++) {
                          // bỏ qua cell đầu tiên
                              if (index === 0 && index_col === 0) {
                              
                              }
                              else{
                                          // index_  là thứ tự công thức đó trong  formular
                                        let index_ = index_formular[vi_tri_o_truoc[0] + i_array_2d + index][vi_tri_o_truoc[1] + j_array_2d + index_col] ;
                                        // index_!== null  tức là ta fill vào ô đã có công thức rồi
                                        if (index_!== null ) {
                                          
                                                // index_formular[vi_tri_o_truoc[0] + i_array_2d + index][vi_tri_o_truoc[1] + j_array_2d + index_col]   là vị trí index trong    formular
                                               
                                            
                                          // push công thức mới vào vị trí cũ
                                                       if (text === null) {

                                                          // nếu fill ô chỉ chứa giá trị là null thì ghi giá trị vào Data
                                                          Data[vi_tri_o_truoc[0] + i_array_2d + index][vi_tri_o_truoc[1] + j_array_2d + index_col] = null;
                                                          console.log( Data[vi_tri_o_truoc[0] + i_array_2d + index][vi_tri_o_truoc[1] + j_array_2d + index_col]);
                                                          text_formular[vi_tri_o_truoc[0] + i_array_2d + index ][vi_tri_o_truoc[1] + j_array_2d + index_col] = null ;
                                                        delete  formular[index_] ;

                                                       }
                                                       else if (text.slice(0,1)!=="=" && text.slice(0,1)!=="+" ) {

                                                        // nếu fill ô chỉ chứa giá trị thì ghi giá trị vào Data
                                                        Data[vi_tri_o_truoc[0] + i_array_2d + index][vi_tri_o_truoc[1] + j_array_2d + index_col] = + data_array_2d[index][index_col] ;
                                                        console.log( Data[vi_tri_o_truoc[0] + i_array_2d + index][vi_tri_o_truoc[1] + j_array_2d + index_col]);
                                                        text_formular[vi_tri_o_truoc[0] + i_array_2d + index ][vi_tri_o_truoc[1] + j_array_2d + index_col] =data_array_2d[index][index_col] ;
                                                      delete  formular[index_] ;
                                                    
                                                      }else if ((text.slice(0,1)==="=" && text.slice(0,1)==="+" )&& text_chi_chua_value_hoac_cong_thuc === true) {
                                                        // nếu fill ô chứa công thức mà trong công thức không có chứa Data thì tính công thức rồi ghi vào Data
                                                        Data[vi_tri_o_truoc[0] + i_array_2d + index][vi_tri_o_truoc[1] + j_array_2d + index_col] = eval(data_array_2d[index][index_col] );                                                     
                                                       text_formular[vi_tri_o_truoc[0] + i_array_2d + index ][vi_tri_o_truoc[1] + j_array_2d + index_col] =data_array_2d[index][index_col] ;
                                                       delete  formular[index_] ;
                                                       // nếu fill ô chứa công thức mà trong công thức chứa   Data thì push vào formular
                                                      } else {
                                                        formular[index_]  = eval("(function(){return "+  "Data["+(vi_tri_o_truoc[0] + i_array_2d + index)+"]["+(vi_tri_o_truoc[1] + j_array_2d + index_col )+"]" +" = " + data_array_2d[index][index_col].replaceAll('$', '') +  ";})") ;
                                                        // tính toán lại công thức mới ghi
                                                        formular[index_]();
                                                        text_formular[vi_tri_o_truoc[0] + i_array_2d + index ][vi_tri_o_truoc[1] + j_array_2d + index_col] =data_array_2d[index][index_col] ;
                                                      
                                                      }

                                         
                                        } else {
                                          // dữ liệu fill vào ô chưa viết công thức nên chỉ push công thức mới vào formular không phải xoá công thức cũ

                                                    if (text === null) {
                                                       // nếu fill ô chỉ chứa giá trị là null thì ghi giá trị vào Data
                                                     

                                                    }
                                                    else if  (text.slice(0,1)!=="=" && text.slice(0,1)!=="+" ) {
                                                      // nếu fill ô chỉ chứa giá trị thì ghi giá trị vào Data
                                                      Data[vi_tri_o_truoc[0] + i_array_2d + index][vi_tri_o_truoc[1] + j_array_2d + index_col] =+ data_array_2d[index][index_col] ;
                                                      text_formular[vi_tri_o_truoc[0] + i_array_2d + index ][vi_tri_o_truoc[1] + j_array_2d + index_col] =data_array_2d[index][index_col] ;
                                                    
                                                    }else if ((text.slice(0,1)==="=" && text.slice(0,1)==="+" )&& text_chi_chua_value_hoac_cong_thuc === true) {
                                                        // nếu fill ô chứa công thức mà trong công thức không có chứa Data thì tính công thức rồi ghi vào Data
                                                      Data[vi_tri_o_truoc[0] + i_array_2d + index][vi_tri_o_truoc[1] + j_array_2d + index_col] = eval(data_array_2d[index][index_col] );
                                                      text_formular[vi_tri_o_truoc[0] + i_array_2d + index ][vi_tri_o_truoc[1] + j_array_2d + index_col] =data_array_2d[index][index_col] ;
                                                    
                                                    } else {
                                                       // nếu fill ô chứa công thức mà trong công thức chứa   Data thì push vào formular
                                                      formular.push(eval("(function(){return "+  "Data["+(vi_tri_o_truoc[0] + i_array_2d + index)+"]["+(vi_tri_o_truoc[1] + j_array_2d + index_col )+"]" +" = " + data_array_2d[index][index_col].replaceAll('$', '') +  ";})")  ) 
                                                        // tính toán lại công thức mới ghi
                                                      
                                                        formular[formular.length-1]();
                                                      index_formular[vi_tri_o_truoc[0] + i_array_2d + index ][vi_tri_o_truoc[1] + j_array_2d + index_col]  = formular.length - 1 ;
                                                      text_formular[vi_tri_o_truoc[0] + i_array_2d + index ][vi_tri_o_truoc[1] + j_array_2d + index_col] =data_array_2d[index][index_col] ;
                                                      
                                                    }          
                                        }
                                   
                               
                                   
                              };

                       
                     } 
                   }   
                   
                       let _len = formular.length ;
                    
                      // tính toán lại tất cả các công thức đã viết
                    
                      for (let index = 0; index < _len ; index++) { if (formular[index] !== undefined) { formular[index]()} ; }
                    
                    // hiện thị giá trị đã tính toán lên trang web bảng tính
                    for (let index = 0; index <= (limit_view ); index++) {
                      for (let index_j = 0; index_j <=(limit_col_view ) ; index_j++) {
                     
                        a.current.children[index + 1].children[index_j+1].innerHTML = Data[index +i_array_2d][index_j +j_array_2d];
                      }
                    }  


                   
                   


    
}



//  vd: chạy fuction fill        console.log(fill('1 + (Data[600][10]) + (Data[1][20])', 4, 3))
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function fill_21(event) {

  console.log(mien_select_array_2d);

  let keo_doc ;
  let keo_ngang ;
  let n_fill ;

  keo_doc = 0 ;
  keo_ngang = mien_select_array_2d[3] - mien_select_array_2d[1]   ;
  n_fill = mien_select_array_2d[2] - mien_select_array_2d[0] ;
      
  
  let text_inclue_Data = [] ;
  let data_array_2d = [] ;

// thực hiện hàm fill    n   lần
  for (let index = 0; index <= n_fill; index++) {

// tiến hành fill từng  cột cell một
   
             
    let text = text_formular[vi_tri_click_in_Data[0 ] + index ][vi_tri_click_in_Data[1]  ] ;
  console.log(text);
  let text_replace ;
  let kq ;
   
  let text_cong_thuc_cell_next ;
 
  if (text  === null) {  text_inclue_Data[index] = false ;} else { text_inclue_Data[index] = (text.indexOf("Data") !== -1) ; }
 

  if (  ( text  === null )||  text_inclue_Data[index] === false   ) {
    for (let index_ngang = 0; index_ngang <= keo_doc; index_ngang++) {
      let data_array_col = [] ;
      for (let index_doc = 0; index_doc <= keo_ngang; index_doc++) {
        data_array_col.push(text) ;
       }

    // lặp qua các cell theo dòng đẩy vào mảng data_array_2d
    data_array_2d.push(data_array_col) ;

}
  }else{

    text_replace = text.replaceAll('Data', '|_|Data');
         // tạo mảng lưu trữ text công thức viết
     kq = text_replace.split('|_|')  ;

     for (let index_ngang = 0; index_ngang <= keo_doc; index_ngang++) {
      let data_array_col = [] ;
      for (let index_doc = 0; index_doc <= keo_ngang; index_doc++) {
          // fill xong thì lưu vào mảng text_cong_thuc_cell_next
          text_cong_thuc_cell_next = kq.map(i => {
            

            // trong mảng kq tiến hành fill từng item nếu thoả mãn điều kiện
            // trước tiên kiểm tra item có thoả mãn điều kiện không
            // hàm match trả về 1 phần item thoả mãn điều kiện
            // i_row là:                 (Data$[0]
            // i_col là phần còn lại:    $[1])
            let i_row = i.match(/.*Data\$?\[[0-9]+\]/i) ;
            //  x(?!y)	Chỉ khớp x nếu ngay sau x không phải là y
              // (?!\[|\$)  khớp nếu ngay sau không phải là [ hoặc $
            let i_col = i.match(/\$?\[[0-9]+\](?!\[|\$).*/i) ;

               // nếu không match được thì i_row === null
              // néu item tức i chứa Data tức macth được trả về mảng khác null thì tiến hành fill 
              // ngược lại i không  chứa data thì trả về i để sau đó join lại

            if (i_row != null) { 
               // kiểm tra trước row có ký tự $ không
            let co_dinh_row = /\$/i.test(i_row[0])
            // kiểm tra trước cột có kí tự $ không
            let co_dinh_col = /\$/i.test(i_col[0])
          

            if (co_dinh_col === false) {


              // đâ thoả mãn điều kiện tiến hành fill    

                let text_moi = i_col[0].match(/[0-9]+/i)[0] * 1 + index_doc

                let i_col_replace = i_col[0].replace(/[0-9]+/i, text_moi)

                i_col = i_col_replace
            }

            if (co_dinh_col === true) {
                i_col = i_col
            }

            // trước ròng không có ký tự $ thì fill +1 dòng
            if (co_dinh_row === false) {

                // đâ thoả mãn điều kiện tiến hành fill  
                let text_moi = i_row[0].match(/[0-9]+/i)[0] * 1 + index_ngang
            

                let i_replace = i_row[0].replace(/[0-9]+/i, text_moi) + i_col

                return i_replace
            }

            if (co_dinh_row === true) {
                return i_row + i_col
            }
            } else {
              return i
          }
              
           
        })


            // text_cong_thuc_cell_next.join('') là fill xong 1 cell
            // lặp qua các cell theo cột đẩy vào mảng data_array_col
            data_array_col.push(text_cong_thuc_cell_next.join(''))



            
      }



// lặp qua các cell theo dòng đẩy vào mảng data_array_2d
data_array_2d.push(data_array_col) ;


}



  }


  
  }


      console.log(data_array_2d);

   
      let i_array_2d =parseInt((a.current.children[0 + 1].children[0].innerHTML));  
      let j_array_2d =parseInt((a.current.children[0].children[0 + 1].innerHTML)); 
      
 
 // lặp trong mảng data_array_2d lấy công thức push vào formular
 

                    for (let index = 0  ;  index <= n_fill; index++) {
                     
                      for (  let index_col  = 1  ;   index_col <= keo_ngang; index_col++) {

                       // index_  là thứ tự công thức đó trong  formular
                       let index_ = index_formular[vi_tri_o_truoc[0] + i_array_2d + index][vi_tri_o_truoc[1] + j_array_2d + index_col] ;
                       console.log(index,  index_col);
                   
                       // index_!== null  tức là ta fill vào ô đã có công thức rồi
                       if (index_!== null ) {
                         
                               // index_formular[vi_tri_o_truoc[0] + i_array_2d + index][vi_tri_o_truoc[1] + j_array_2d + index_col]   là vị trí index trong    formular
                              
                           
                         // push công thức mới vào vị trí cũ
                                      if (data_array_2d[index][index_col] === null) {

                                         // nếu fill ô chỉ chứa giá trị là null thì ghi giá trị vào Data
                                         Data[vi_tri_o_truoc[0] + i_array_2d + index][vi_tri_o_truoc[1] + j_array_2d + index_col] = null;
                                         console.log( Data[vi_tri_o_truoc[0] + i_array_2d + index][vi_tri_o_truoc[1] + j_array_2d + index_col]);
                                         text_formular[vi_tri_o_truoc[0] + i_array_2d + index ][vi_tri_o_truoc[1] + j_array_2d + index_col] = null ;
                                       delete  formular[index_] ;

                                       console.log('aaaaaaaaaaaaaaaaaaaaaaaa');

                                      }
                                      else if (data_array_2d[index][index_col].slice(0,1)!=="=" && data_array_2d[index][index_col].slice(0,1)!=="+" ) {

                                       // nếu fill ô chỉ chứa giá trị thì ghi giá trị vào Data
                                       Data[vi_tri_o_truoc[0] + i_array_2d + index][vi_tri_o_truoc[1] + j_array_2d + index_col] = + data_array_2d[index][index_col] ;
                                       console.log( Data[vi_tri_o_truoc[0] + i_array_2d + index][vi_tri_o_truoc[1] + j_array_2d + index_col]);
                                       text_formular[vi_tri_o_truoc[0] + i_array_2d + index ][vi_tri_o_truoc[1] + j_array_2d + index_col] =data_array_2d[index][index_col] ;
                                     delete  formular[index_] ;
                                     console.log('bbbbbbbbbbbbbbbbbbbbbbbbb');
                                   
                                     }else {

                                                   if ( text_inclue_Data[index] ) {
                                                    formular[index_]  = eval("(function(){return "+  "Data["+(vi_tri_o_truoc[0] + i_array_2d + index)+"]["+(vi_tri_o_truoc[1] + j_array_2d + index_col )+"]" +" = " + data_array_2d[index][index_col].replaceAll('$', '') +  ";})") ;
                                                    // tính toán lại công thức mới ghi
                                                    formular[index_]();
                                                    text_formular[vi_tri_o_truoc[0] + i_array_2d + index ][vi_tri_o_truoc[1] + j_array_2d + index_col] =data_array_2d[index][index_col] ;
                                                    console.log('DataDataData---change');

                                                   } else {
                                                    // nếu fill ô chứa công thức mà trong công thức không có chứa Data thì tính công thức rồi ghi vào Data
                                                    Data[vi_tri_o_truoc[0] + i_array_2d + index][vi_tri_o_truoc[1] + j_array_2d + index_col] = eval(data_array_2d[index][index_col] );                                                     
                                                    text_formular[vi_tri_o_truoc[0] + i_array_2d + index ][vi_tri_o_truoc[1] + j_array_2d + index_col] =data_array_2d[index][index_col] ;
                                                    delete  formular[index_] ;
                                                    // nếu fill ô chứa công thức mà trong công thức chứa   Data thì push vào formular
                                                    console.log('ccccccccccccccccccccccccccc');
                                                   
                                                   }

                                     }

                        
                       } else {
                         // dữ liệu fill vào ô chưa viết công thức nên chỉ push công thức mới vào formular không phải xoá công thức cũ
                                  
                                   if (data_array_2d[index][index_col] === null) {
                                      // nếu fill ô chỉ chứa giá trị là null thì ghi giá trị vào Data
                                    
                                      console.log('11111111111111111111111111111111111');

                                   }
                                   else if  (data_array_2d[index][index_col].slice(0,1)!=="=" && data_array_2d[index][index_col].slice(0,1)!=="+" ) {
                                     // nếu fill ô chỉ chứa giá trị thì ghi giá trị vào Data
                                     Data[vi_tri_o_truoc[0] + i_array_2d + index][vi_tri_o_truoc[1] + j_array_2d + index_col] =+ data_array_2d[index][index_col] ;
                                     text_formular[vi_tri_o_truoc[0] + i_array_2d + index ][vi_tri_o_truoc[1] + j_array_2d + index_col] =data_array_2d[index][index_col] ;
                                     console.log('22222222222222222222222222222222');
                                   }else {



                                                             if ( text_inclue_Data[index] ) {

                                                             // nếu fill ô chứa công thức mà trong công thức chứa   Data thì push vào formular
                                                             formular.push(eval("(function(){return "+  "Data["+(vi_tri_o_truoc[0] + i_array_2d + index)+"]["+(vi_tri_o_truoc[1] + j_array_2d + index_col )+"]" +" = " + data_array_2d[index][index_col].replaceAll('$', '') +  ";})")  ) 
                                                               // tính toán lại công thức mới ghi
                                                             
                                                               formular[formular.length-1]();
                                                             index_formular[vi_tri_o_truoc[0] + i_array_2d + index ][vi_tri_o_truoc[1] + j_array_2d + index_col]  = formular.length - 1 ;
                                                             text_formular[vi_tri_o_truoc[0] + i_array_2d + index ][vi_tri_o_truoc[1] + j_array_2d + index_col] =data_array_2d[index][index_col] ;
                                                             console.log('DataDataDataDataData');



                                                           } else {

                                                            
                                                               // nếu fill ô chứa công thức mà trong công thức không có chứa Data thì tính công thức rồi ghi vào Data
                                                               Data[vi_tri_o_truoc[0] + i_array_2d + index][vi_tri_o_truoc[1] + j_array_2d + index_col] = eval(data_array_2d[index][index_col] );
                                                               text_formular[vi_tri_o_truoc[0] + i_array_2d + index ][vi_tri_o_truoc[1] + j_array_2d + index_col] =data_array_2d[index][index_col] ;
                                                               console.log('33333333333333333333333333333333333');


                                                           }     


                                   }     
                       }
                     
                        
                      } 
                    }   
                    
                        let _len = formular.length ;
                     
                       // tính toán lại tất cả các công thức đã viết
                     
                       for (let index = 0; index < _len ; index++) { if (formular[index] !== undefined) { formular[index]()} ; }
                     
                     // hiện thị giá trị đã tính toán lên trang web bảng tính
                     for (let index = 0; index <= (limit_view ); index++) {
                       for (let index_j = 0; index_j <=(limit_col_view ) ; index_j++) {
                      
                         a.current.children[index + 1].children[index_j+1].innerHTML = Data[index +i_array_2d][index_j +j_array_2d];
                       }
                     }  
 
 


}




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // khi di chuyển scroll đến vị trí cuối nếu để scroll động scrollHeight sẽ tự động tăng kích thước.
  // cố định scrollHeight thì mới scroll đến cuối được.
  // cố định scrollHeight bằng mã if ( Math.round(_table.scrollTop) >= data_lenght - 100*20 )
  // hoặc để chiều dài bar_scroll + scrollTop bé hơn scrollHeight (data.lenght  10000 trở lên thì được)
  let table_excel_height = window.innerHeight - 87.742 -60 ;
  let table_excel_width = window.innerWidth -350 ;

 // ở zoom 100 % 1 click scroll ở chrome di chuyển 40 pixcel 
 let zoom = window.devicePixelRatio;
  let click_scroll_dichuyen = 40/zoom ;
// 20, 85 là chiều rộng và dài của ô excel lúc khởi tạo
// chú ý phải để data_lenght , data_col_lenght lớn hơn limit_scroll*height cell,  limit_scroll_col*width cell
  let data_lenght = (row  ) *click_scroll_dichuyen ; 
  let data_col_lenght = (col  ) *click_scroll_dichuyen ; 

var width_bar_reference_col ;
var vi_tri_khung_nhin_truoc_scroll = [null, null] ;

  function _onScroll(event) {
  
    let vi_tri_cat  ;
let vi_tri_cat_col  ;
let _table  = table_excel.current;
 var di_chuyen  = _table.scrollTop  ; 
 var di_chuyen_col =_table.scrollLeft; 
 console.log('_onScroll-----------------------'+ di_chuyen);

        vi_tri_cat = Math.round(di_chuyen/ click_scroll_dichuyen) ; 
        vi_tri_cat_col =  Math.round(di_chuyen_col/ click_scroll_dichuyen) ; 
   
    let  vi_tri_cat_truoc_do =  a.current.children[0 + 1].children[0].innerHTML ; // là vị trí cắt trước đó
    let i_array_2d =parseInt((a.current.children[0 + 1].children[0].innerHTML)); 
    let j_array_2d =parseInt((a.current.children[0].children[0 + 1].innerHTML)); 


              // scrollHeight chiều cao của cả thanh scroll
                  // scrollTop khoảng cách từ top 0 đến vị trí hiện tại
                  //*******/ khi scroll nếu click khoảng cach scroll lớn hơn chiều cao của element có state height thì nó sẽ rerender lại hàm _onScroll
                  // element có 10000 dòng row_height bằng 20 thì có 200000px mỗi 1 click scroll sẽ là 40px với zoom 100% do đó vi_tri_cat sẽ chia cho số đó
              // đánh dấu vùng lựa chọn
              

           
            // dừng scroll tại vị trí muốn
       
              if (di_chuyen <=limit_scroll*click_scroll_dichuyen ) {
               
              
              
              }
              else
              {
                
                // chú ý *****
                // ở chỗ khác thì (bình thường không cần quan tâm thứ tự sắp xếp hàm scrollTop sẽ chạy đầu tiên sau đó requestAnimationFrame cuối cùng là setTimeout)
                // nhưng ở đây scrollTop sử dụng trong hàm scroll (scrollTop được tạo bởi addEventListener scroll) tức là nó phải đợi các hàm trong sự kiện scroll ở đây 
                // chạy xong thì nó mới kích hoạt hàm scrollTop nên ở đây thứ tự sẽ là requestAnimationFrame sau đó setTimeout sau đó scrollTop
                // do đó ở đây ta không dùng được    // window.requestAnimationFrame(remove_scroll); tức là đợi scrollTop scroll tới vị trí mong muốn rồi xoa bỏ lắng nghe scroll  được
                // vì  window.requestAnimationFrame sẽ chạy trước scrollTop
                // mà thay vào đó ta phải dùng  // window.requestAnimationFrame(_onScroll); hoặc có thể chỉ dùng ********   _onScroll();  
                // mục đích để khi gọi hàm _onScroll tức là sự kiện scroll được kích hoạt do đó hàm scrollTop sẽ được kích hoạt chạy luôn
                // ở đây hàm này chạy trước để quay lại vòng lặp chỗ này 1 hoặc 2 lần tuỳ ta scroll mạnh không rồi brower patting nên không bị lác.
              
                // nếu không dùng window.requestAnimationFrame(_onScroll) hoặc gọi thêm hàm _onScroll()  mà chỉ có  _table.scrollTop = data_lenght ;  sẽ bị lác vì sự kiện oncsroll sẽ bị lắng nghe rất nhiều lần rồi scrollTop mới chạy do đó sẽ được patting trước scrollTop nên gây lác
                // nếu viết thêm window.requestAnimationFrame(_onScroll) hoặc gọi thêm hàm _onScroll() thì nó sẽ kích hoạt hàm scrollTop sẽ được kích hoạt chạy luôn trước khi lắng nghe  
                // các sự kiện oncsroll khác mà hàm scrollTop chạy tốn thời gian nên các sự kiện oncsroll khác chỉ chạy thêm được 1 lần khi ta scrool mạnh thôi.
                // *** giải thích thêm 
                // sự kiện oncsroll sẽ bị lắng nghe rất nhiều lần nếu không dùng window.requestAnimationFrame(_onScroll) hoặc gọi thêm hàm _onScroll() vì
                // scrollTop là hàm bất đồng bộ sẽ bị đẩy ra để các sự kiện oncsroll được lắng nghe
                // khi oncsroll được lắng nghe nó lặp lại đoạn code này do đoạn code này trả về ngay nên trong khoảng thời gian 16ms lắng nghe và thực thi code  nó sẽ được lắng nghe rất nhiều lần
               // chú ý thêm ****
               // nếu chỉ dùng _onScroll(); thì _onScroll(); phải đặt sau  _table.scrollTop = data_lenght ;
               // vì nếu đặt trước thì sẽ tạo thành vòng lặp vô hạn nên lỗi
               // đặt sau thì _onScroll() sẽ kích hoạt lập tức scrollTop sẽ rẽ nhánh bên trên thoát khỏi vòng lặp
                _table.scrollTop = limit_scroll*click_scroll_dichuyen ;
                _onScroll();
                //hoặc ta có thể dùng window.requestAnimationFrame(_onScroll);
           
                  return di_chuyen = limit_scroll*click_scroll_dichuyen ;
               
              }

             

                 // dừng scroll tại vị trí muốn tthanh cuộn ngang
                 if ( di_chuyen_col <=limit_scroll_col*click_scroll_dichuyen) {
                 
                }
                else
                {
                
                  //hoặc ta có thể dùng window.requestAnimationFrame(_onScroll);
                  _table.scrollLeft = limit_scroll_col*click_scroll_dichuyen  ;
                  _onScroll();
                  return di_chuyen_col = limit_scroll_col*click_scroll_dichuyen ;
                }
               
          
              // vị trí cắt là  a.current.children[0 + 1].children[0].innerHTML lúc sau khi render UI xong
            
          // khi scroll xong thì thay đổi top, left width, height của a để viewport vẫn vậy     
                          Object.assign(a.current.style ,
                            { 
                            paddingTop : di_chuyen+'px' ,
                            height : (data_lenght - di_chuyen) +'px',
                            paddingLeft : (di_chuyen_col  ) +'px' ,
                            width : (data_col_lenght - di_chuyen_col) +'px'
                          }) ;
                     
                  
                  
                     
                      let  vi_tri_cat_truoc_do_col =  a.current.children[0 ].children[0 + 1].innerHTML ; // là vị trí cắt trước đó
                     
                      
  
                      // update lại width_bar_reference_col  sau khi scroll
                      width_bar_reference_col = a.current.children[0].children[0].clientWidth ;

                      var sum = 0;
                      
                      while ( a.current.children[sum + 1].children[ 0 ].getBoundingClientRect().y <= table_excel.current.clientHeight - 2 + table_excel.current.getBoundingClientRect().y) {

                        sum++;
                      }
                     
                      limit_view = sum - 1 ; 
                   

                      var sum_col = 0;
                      
                      while ( a.current.children[0].children[ sum_col + 1 ].getBoundingClientRect().x <= table_excel.current.getBoundingClientRect().x +  table_excel.current.clientWidth - 2) {

                        sum_col++;
                      }
                     
                      limit_col_view = sum_col - 1 ; 
                  
                            // xoá _this.onkeydown ở vị trí trước đi
                            try {
                              a.current.children[vi_tri_o_truoc[0] + 1].children[vi_tri_o_truoc[1]+1].onkeydown = null  ;
                              console.log(vi_tri_o_truoc[0]  ,vi_tri_o_truoc[1] , "onKeyDown = null " );
                            } catch (error) {
                              // bỏ qua lỗi
                            }
                           

                         // cập nhật lại dữ liệu khi scroll -- bước1
                         for (let index = 0; index <= limit_view ; index++) {
                      
                          a.current.children[index + 1].children[0].innerHTML = index + vi_tri_cat;
                         
                          for (let index_j = 0; index_j <= limit_col_view  ; index_j++) {
                                      if (index === 0) { a.current.children[0].children[index_j+1].innerHTML = index_j + vi_tri_cat_col; }

                                          

                                        // với  cell hiện lên trang web bảng tính thì ta duyệt từ cuối tới đầu dòng đó để xác định zIndex cho cell đó
                                        let max_zindex  = limit_col_view + 1;
                                                  
                                        for (let x = limit_col_view ; x >= 0 ; x--) {

                                          if (Data[index + vi_tri_cat][x  + vi_tri_cat_col] === null) {

                                            a.current.children[index + 1].children[x+1].style.zIndex = x ;
                                          
                                          }else{
                                            a.current.children[index + 1].children[x+1].style.zIndex = max_zindex ;
                                            max_zindex = x ;
                                          } 
                                        }


                      
                                        if ( Data[index + vi_tri_cat][index_j + vi_tri_cat_col] === null) {
                                                      
                                                 
                                      a.current.children[index + 1].children[index_j+1].innerHTML = null ;
                                  
                                        }else{

                                          
                                      a.current.children[index + 1].children[index_j+1].innerHTML = ` <div    style="  position:absolute;      background: inherit;   height: inherit ;   white-space: nowrap;   pointer-events: none;   "> ${ Data[index + vi_tri_cat  ][index_j + vi_tri_cat_col]  }  </div>`;
                                  
                                               
                                        }
       
                        
                        }
                        }  




                        // các cell bị ẩn bên trái trục
                        // tìm các cell cell bị ẩn bên trái trục gần nhất để hiện dữ liệu lên div show các cell ẩn
                      // sau đó di chuyển div đó phù hợp với khung nhìn
                        for (let index = 0; index <= limit_view ; index++) {
                          let sum_col_hide = 1 ;
                          for (let x = vi_tri_cat_col - 1 ; x >= 0 ; x--) {
                            a.current.children[ index + 1].children[limit_col+1].style.visibility = "hidden";
                          
  
                            if (Data[index + vi_tri_cat ][x ] === null) {
  
                          sum_col_hide = sum_col_hide + 1 ;
                            
                            }else{
                              a.current.children[ index + 1].children[limit_col+1].style.visibility = "visible";
                              // div đó hiện dữ liệu
                              a.current.children[ index + 1].children[limit_col+1].innerHTML = Data[index + vi_tri_cat][x]  ;
                              // di chuyển div đó phù hợp với khung nhìn
                              a.current.children[ index + 1].children[limit_col+1].style.left = (-tro_ve_vi_tri_begin -sum_col_hide*85) + 'px' ;
                                        // xác dịnh zindex cho div đó
                                        for (let x = 0 ; x <= limit_col_view ; x++) {
                                          if (Data[index + vi_tri_cat][x  + vi_tri_cat_col] === null) {

                                          
                                          
                                          }else{
                                            a.current.children[ index + 1].children[limit_col+1].style.zIndex = x ;
                                            break ;
                                          } 

                                        }

                              break ;
                            } 
  
                          }
                        }
                       
                       
                       


                    //Bước 2:  nếu công thức chưa hoàn thành(xuất hiện thẻ input)

                    if (xuat_hien_the_input) {
                      console.log(     'xuat_hien_the_input--' +  xuat_hien_the_input ) ;
                      change_input_scroll(vi_tri_o_truoc[0],vi_tri_o_truoc[1],vi_tri_o_truoc[0]-(vi_tri_cat - vi_tri_cat_truoc_do),(vi_tri_o_truoc[1]-(vi_tri_cat_col - vi_tri_cat_truoc_do_col))); 
                         
                    }
                    else

                    {

                        // Bước 2: nếu sau khi scroll vị trí tô màu update nằm trong khung nhìn thì tô màu lại ngược lại thì không tô màu lại
                        console.log('key_enter:   ',vi_tri_o_truoc[0],vi_tri_o_truoc[1],vi_tri_o_truoc[0]-vi_tri_cat + vi_tri_cat_truoc_do,vi_tri_o_truoc[1]-vi_tri_cat_col + vi_tri_cat_truoc_do_col ) ;
                            // set địa chỉ ô click  sau hành động trên
                           dia_chi_o_click(vi_tri_o_truoc[0]+ i_array_2d,vi_tri_o_truoc[1] + j_array_2d,(vi_tri_o_truoc[0]-(vi_tri_cat - vi_tri_cat_truoc_do)) ,(vi_tri_o_truoc[1]-(vi_tri_cat_col - vi_tri_cat_truoc_do_col)) ) ;
                           key_enter(vi_tri_o_truoc[0],vi_tri_o_truoc[1],vi_tri_o_truoc[0]-(vi_tri_cat - vi_tri_cat_truoc_do),(vi_tri_o_truoc[1]-(vi_tri_cat_col - vi_tri_cat_truoc_do_col)) );
                        console.log(vi_tri_click_in_Data);
                        console.log(vi_tri_o_truoc)
                       
                      }


                      console.log("---------/////////////////////////////////////////////////////////////--------------------------");

                      console.log(vi_tri_o_truoc);
   
                     
                     
                      // bước 3 : vẽ lại muền select



                      if (position_mouse_brower === 'ouside_brower') {
                        console.log('position_mouse_brower = ouside_brower');
                    
                     
                        let x = vi_tri_o_truoc[0];
                        let y = vi_tri_o_truoc[1] ;
                        let i = mien_select[2] ;
                        let j = mien_select[3] ;

                        console.log(x ,y,i,j);
                       

                        if (x <  0) { x = 0 }
                        if (y <  0) { y = 0 }
            
                        if (x >  limit_view - 1) { x =  limit_view - 1}
                        if (y >  limit_col_view) {y =  limit_col_view}
                        if (i >  limit_view - 1) { i =  limit_view - 1}
                        if (j >  limit_col_view) {j =  limit_col_view}


                        _onMouseEnter_not_event(x, y, i ,j )  ;

                     
                        
                       }
                       if (position_mouse_brower === undefined) {


                            console.log('position_mouse_brower === undefined');
                            console.log(mien_select_array_2d );
                           

                            mien_select[2] = vi_tri_o_truoc[0] +  mien_select_array_2d[2] -  mien_select_array_2d[0]  ;
                            mien_select[3]   = vi_tri_o_truoc[1] +  mien_select_array_2d[3] -  mien_select_array_2d[1]   ;
                           

                            let x = vi_tri_o_truoc[0];
                            let y = vi_tri_o_truoc[1] ;
                            let i = mien_select[2] ;
                            let j = mien_select[3] ;

                            console.log(x ,y,i,j);

                            if (i <  0 && x <  0) {  return   Object.assign(canvas_.current.style ,{display : "none"}) ;}
                            if (j <  0 && y <  0) { return    Object.assign(canvas_.current.style ,{display : "none"}) ; }
                            if (x >  limit_view - 1&& i > limit_view - 1 ) { return   Object.assign(canvas_.current.style ,{display : "none"}) ;}
                            if (y >  limit_col_view && j > limit_col_view) {return   Object.assign(canvas_.current.style ,{display : "none"}) ; }
                            if (x <  0) { x = 0 }
                            if (y <  0) { y = 0 }
                          
                            if (  x >  0 && i <  0) { i = 0 }
                            if (  y >  0 && j <  0) { j = 0 }


                          
                            if (i >  limit_view - 1) { i =  limit_view - 1}
                            if (j >  limit_col_view) {j =  limit_col_view}
                          _onMouseEnter_not_event(x, y,i , j, false)  ;
                      
                          
                       
                       }
                       if (position_mouse_brower === 'on_thanh_dia_chi_onMouseDown') {


                        console.log('position_mouse_brower === on_thanh_dia_chi_onMouseDown');
                        console.log(mien_select_array_2d );
                        mien_select[2] = vi_tri_o_truoc[0] +  mien_select_array_2d[2] -  mien_select_array_2d[0]  ;
                        mien_select[3]   = vi_tri_o_truoc[1] +  mien_select_array_2d[3] -  mien_select_array_2d[1]   ;
                        let x = vi_tri_o_truoc[0];
                        let y = vi_tri_o_truoc[1] ;
                        let i = mien_select[2] ;
                        let j = mien_select[3] ;
                        if (x <  0) { x = 0 }
                        if (y <  0) { y = 0 }
                        if (i >  limit_view - 1) { i =  limit_view - 1}
                        if (j >  limit_col_view) {j =  limit_col_view}
                        if (i <  0) { i =  0}
                        if (j <  0) {j =  0}
                        console.log(x,y,i,j);

                      
                      _onMouseEnter_not_event(x, y,i , j, false)  ;
                  
                   
                   }


                   // Bước 4: di chuyển thumb trên thanh scroll bar tự tạo
             
                  ref_thumb_col.current.style.top = table_excel.current.scrollTop/((limit_scroll+1)*click_scroll_dichuyen)*ref_track_col.current.getBoundingClientRect().height +20+ "px"  ;
                  ref_thumb.current.style.left = table_excel.current.scrollLeft/((limit_scroll_col+1)*click_scroll_dichuyen)*ref_track.current.getBoundingClientRect().width + 20+"px"  ; 





  }






    //////////////////////////////////////////////////////////////////////////////////////////////
    var mouse_Y ;
    var mouse_X ;
    var myInterval ;
  var myInterval_0 ;
  var position_mouse_brower ;
  var i_truyen ;
  var j_truyen ;

  function _onMouseMove (event) {
    
        // event.persist();    dùng để biến  sự kiện trên react  thành sự kiện gốc trên dom  vd: onMouseEnter  thành  onmouseenter
      // react thiết lập event.buttons bằng null : không điều khiển nút chuột để tăng hiệu suất. Để thiết lập event.buttons như javascript gốc cần chạy hàm event.persist();
        

event.persist();

        document.onmouseup = function () {
          clearTimeout(myInterval_0);
          clearTimeout(myInterval);
          position_mouse_brower = undefined ;
          trang_thai_fill = false ;
          if (kieu_fill === 1 ) {
            console.log('------------------------fill kieu 1');
            fill();
          }
          if (kieu_fill === 21 ) {
            console.log('------------------------fill kieu 21');
            fill_21();
          }

          if (kieu_fill === 22 ) {
            console.log('------------------------fill kieu 22');
            fill_22();
          }
         


        }

      

        document.onmousemove = function (event_window ) {

          // console.log('document++++++++++onmousemove');
          
          var table_excel_scrollTop = table_excel.current.scrollTop ;
          var table_excel_scrollLeft = table_excel.current.scrollLeft ;
          clearTimeout(myInterval_0);
          clearTimeout(myInterval);
          position_mouse_brower = undefined ;
        mouse_Y = event_window.clientY
        mouse_X = event_window.clientX
      

// vẽ biểu tượng fill

        var x_r0c0 = a.current.children[mien_select_quy_ve[0] +1 ].children[mien_select_quy_ve[1]+1].getBoundingClientRect().x;

              
        var x_r0c1 = a.current.children[mien_select_quy_ve[2] +1 ].children[mien_select_quy_ve[3]+1+1].getBoundingClientRect().x;



        var y_r0c0 = a.current.children[mien_select_quy_ve[0] +1 ].children[mien_select_quy_ve[1]+1].getBoundingClientRect().y;

        var y_r1c0 = a.current.children[mien_select_quy_ve[2] +1+1 ].children[mien_select_quy_ve[1]+1].getBoundingClientRect().y;  


        let ty_le_canvas_width = table_excel_width/(x_r0c1 - x_r0c0 - 4);
        let ty_le_canvas_height = table_excel_height/(y_r1c0 - y_r0c0 - 4);

          // nếu trạng thái fill = true tức là đã vẽ rồi không cần vẽ lại nữa
        if ( trang_thai_fill === true&&  event_window.buttons === 1 ) {
          
        }else{
          // vẽ khi vị trí mouse nằm ở góc cuối miền lựa chọn
          if ((mouse_X >   x_r0c1  - 14)&& (mouse_X <=x_r0c1 )   && (mouse_Y >   y_r1c0  - 14)&& (mouse_Y <=y_r1c0 ) &&  event_window.buttons !== 1    &&  ((mien_select_array_2d[1]===  mien_select_array_2d[3]) ||  (mien_select_array_2d[0]===  mien_select_array_2d[2]))) {
          
           
          
           
              console.log('ve-------------------move');

              var  ctx = canvas_.current.getContext("2d");
                // xoá biểu tượng fill đã xuất hiện khi move mouse
            console.log('xoá biểu tượng fill');
    
            ctx.clearRect(0, 0, canvas_.current.width, canvas_.current.height) ;

              // vẽ lại biểu tượng fill
              console.log('vẽ lại biểu tượng fill');
              ctx.beginPath();
                  
              ctx.fillRect(ty_le_canvas_width*(x_r0c1 - x_r0c0 - 4) -10*ty_le_canvas_width, ty_le_canvas_height*(y_r1c0 - y_r0c0 - 4) - 10*ty_le_canvas_height, 10*ty_le_canvas_width, 10*ty_le_canvas_height);
              ctx.globalAlpha = 0.3;
                ctx.closePath();


                trang_thai_fill = true  ;
                if ( mien_select_array_2d[0]===  mien_select_array_2d[2] &&  mien_select_array_2d[1]===  mien_select_array_2d[3] ) {
                 kieu_fill = 1 ;
                 console.log('ve-------------------move-- kieu_fill = 1');
               
                } else {

                            if (mien_select_array_2d[1]===  mien_select_array_2d[3]) { 
                              kieu_fill = 21 ;
                              console.log('ve-------------------move-- kieu_fill = 21');

                            } else { 
                              kieu_fill = 22 ;
                              console.log('ve-------------------move-- kieu_fill = 22');
                              
                            }
                  
                }
       
          
        
            
          }else{
            kieu_fill = undefined ;
            trang_thai_fill = false  ;
            canvas_.current.getContext("2d").clearRect(0, 0, canvas_.current.width, canvas_.current.height) ;
          }

        }


            

// cuộn cả 2 thanh khi bên ngoài brower vị trí mouse ngoài phía dưới bên phải -----------------------------------------------------------------
        if (
          event_window.buttons == 1 && select_range_excel === true&&
          (mouse_Y >table_excel.current.getBoundingClientRect().y +  table_excel.current.clientHeight &&
          mouse_X > table_excel.current.getBoundingClientRect().x + table_excel.current.clientWidth)
        
        ) {
          console.log('cuộn cả 2 thanh khi bên ngoài brower vị trí mouse ngoài phía dưới bên phải');
          position_mouse_brower = 'ouside_brower';
          myInterval_0 =  setTimeout(function doSomething() {
            table_excel.current.scrollTo(table_excel_scrollLeft + click_scroll_dichuyen ,table_excel_scrollTop  + click_scroll_dichuyen )
            table_excel_scrollTop += click_scroll_dichuyen ; 
            table_excel_scrollLeft += click_scroll_dichuyen ;
            myInterval =   setTimeout(doSomething, 10);
        }, 10);
          


        } 
// cuộn cả 2 thanh khi bên ngoài brower vị trí mouse ngoài phía dưới bên trái -----------------------------------------------------------------
          else if (event_window.buttons == 1 &&select_range_excel === true&&
             mouse_Y > (table_excel.current.getBoundingClientRect().y + table_excel.current.clientHeight  )&&  mouse_X < (table_excel.current.getBoundingClientRect().x + width_bar_reference_col)) {
          
              console.log('cuộn cả 2 thanh khi bên ngoài brower vị trí mouse ngoài phía dưới bên trái ');
              position_mouse_brower = 'ouside_brower';
            myInterval_0 =   setTimeout(function doSomething() {
              table_excel.current.scrollTo(table_excel_scrollLeft - click_scroll_dichuyen ,table_excel_scrollTop  + click_scroll_dichuyen )
              table_excel_scrollTop += click_scroll_dichuyen ; 
              table_excel_scrollLeft -= click_scroll_dichuyen ;
              myInterval = setTimeout(doSomething, 10);
          }, 10);
                                      
                                                                
                            
        
          
        
          } 
// cuộn cả 2 thanh khi bên ngoài brower vị trí mouse ngoài góc trên bên trái----------------------------------------------------------------------------------
        else if (
          event_window.buttons == 1 &&select_range_excel === true&&
        (mouse_Y < (table_excel.current.getBoundingClientRect().y + 21) &&
          mouse_X < (table_excel.current.getBoundingClientRect().x + width_bar_reference_col))

        ) {

        
          console.log('cuộn cả 2 thanh khi bên ngoài brower vị trí mouse ngoài góc trên bên trái');
          position_mouse_brower = 'ouside_brower';
          myInterval_0 =   setTimeout(function doSomething() {
            table_excel.current.scrollTo(table_excel_scrollLeft - click_scroll_dichuyen ,   table_excel_scrollTop- click_scroll_dichuyen )
            table_excel_scrollTop -= click_scroll_dichuyen ; 
            table_excel_scrollLeft -= click_scroll_dichuyen ; 
            myInterval = setTimeout(doSomething, 10);
        }, 10);



        
        }
// cuộn cả 2 thanh khi bên ngoài brower vị trí mouse ngoài phía trên bên phải -----------------------------------------------------------------
        else if (event_window.buttons == 1 &&select_range_excel === true&&
           mouse_Y < (table_excel.current.getBoundingClientRect().y + 21)&& mouse_X > table_excel.current.getBoundingClientRect().x + table_excel.current.clientWidth) {
        
        console.log('cuộn cả 2 thanh khi bên ngoài brower vị trí mouse ngoài phía trên bên phải');
        position_mouse_brower = 'ouside_brower';
        myInterval_0 =   setTimeout(function doSomething() {
          table_excel.current.scrollTo(table_excel_scrollLeft + click_scroll_dichuyen ,table_excel_scrollTop  - click_scroll_dichuyen )
          table_excel_scrollTop -= click_scroll_dichuyen ; 
          table_excel_scrollLeft += click_scroll_dichuyen ;
          myInterval = setTimeout(doSomething, 10);
        }, 10);
                                  
                                                              
                          



        } 
// cuộn thanh dọc khi vị trí mouse nằm dưới brower
        else if (event_window.buttons == 1 &&select_range_excel === true&&
           mouse_Y > (table_excel.current.getBoundingClientRect().y + table_excel.current.clientHeight  )) {
          
          console.log('cuộn thanh dọc khi vị trí mouse nằm dưới brower');

          position_mouse_brower = 'ouside_brower';
          
          myInterval_0 =   setTimeout(function doSomething() {

            table_excel.current.scrollTop =  table_excel_scrollTop + click_scroll_dichuyen;
            table_excel_scrollTop += click_scroll_dichuyen ; 
            myInterval = setTimeout(doSomething, 10);
        }, 10);
                                        // setTimeout ở đây để vẽ lại chạy sau các hàm khi scroll
                                          setTimeout(() => {



                                            var index = 1;
                              
                                            while ( a.current.children[limit_view].children[ index + 1 ].getBoundingClientRect().x <= mouse_X && index <= limit_col_view   ) {
                      
                                              index++;
                                            }
                      
                      
                                              var elem_i = limit_view -1 ;
                                      
                                              var elem_j = index - 1 ;
                                              // chỉ vẽ lại khi vị trí chuột tới ô khác tương ứng
                                              
                                            if (event_window.buttons == 1 && i_truyen != elem_i || j_truyen != elem_j) { 
                                              console.log('vẽ lại----------');
                                              console.log(vi_tri_o_truoc[0], vi_tri_o_truoc[1], elem_i, elem_j);
                                            i_truyen = elem_i ;j_truyen = elem_j ;    

                                            let x = vi_tri_o_truoc[0];
                                            let y = vi_tri_o_truoc[1] ;
                                          
                                            if (x <  0) { x = 0 }
                                            if (y <  0) { y = 0 }
                                
                                            if (x >  limit_view - 1) { x =  limit_view - 1}
                                            if (y >  limit_col_view) {y =  limit_col_view}
                
                                            _onMouseEnter(event,x, y, elem_i, elem_j) ; 
                                            }
                                            
                                            
                                          }, 0);
                                                                
                            

        

        } 
// cuộn thanh ngang khi vị trí mouse nằm ngoài bên phải brower
        else if (event_window.buttons == 1 &&select_range_excel === true&&
           mouse_X > (table_excel.current.getBoundingClientRect().x + table_excel.current.clientWidth) ) {
          
          console.log('cuộn thanh ngang khi vị trí mouse nằm ngoài bên phải brower');

          position_mouse_brower = 'ouside_brower';
          
          myInterval_0 =   setTimeout(function doSomething() {
            table_excel.current.scrollLeft = table_excel_scrollLeft + click_scroll_dichuyen;
            table_excel_scrollLeft += click_scroll_dichuyen ; 
            myInterval =  setTimeout(doSomething, 10);
        }, 10);

                              // setTimeout ở đây để vẽ lại chạy sau các hàm khi scroll
                            setTimeout(() => {
                              var index = 1;
                            
                              while ( a.current.children[index].children[ 0].getBoundingClientRect().y <= mouse_Y && index <= limit_view ) {
          
                                index++;
                              }
          
                              
                                var elem_i = index  - 1 ;
                                var elem_j = limit_col_view ;

                          
                                // chỉ vẽ lại khi vị trí chuột tới ô khác tương ứng
                                
                                if (event_window.buttons == 1 && i_truyen != elem_i || j_truyen != elem_j) {
                                  i_truyen = elem_i ;j_truyen = elem_j ; 
                                  let x = vi_tri_o_truoc[0];
                                  let y = vi_tri_o_truoc[1] ;
                                
                                  if (x <  0) { x = 0 }
                                  if (y <  0) { y = 0 }
                      
                                  if (x >  limit_view - 1) { x =  limit_view - 1}
                                  if (y >  limit_col_view) {y =  limit_col_view}

                                  _onMouseEnter(event,x, y, elem_i, elem_j) ; 
                                    
                                    }
                              
          
                              
                            }, 0);
                          



        
        }

 // cuộn thanh doc khi vị trí mouse nằm ngoài bên trên brower
        else if (event_window.buttons == 1 && select_range_excel === true&&
          mouse_Y < (table_excel.current.getBoundingClientRect().y + 21)) {
          
          console.log('cuộn thanh doc khi vị trí mouse nằm ngoài bên trên brower');
          position_mouse_brower = 'ouside_brower';
          myInterval_0 =   setTimeout(function doSomething() {
            table_excel.current.scrollTop = table_excel_scrollTop - click_scroll_dichuyen;
            table_excel_scrollTop -= click_scroll_dichuyen ; 
            myInterval =  setTimeout(doSomething, 10);
        }, 10);

                        
                            // setTimeout ở đây để vẽ lại chạy sau các hàm khi scroll
                          setTimeout(() => {
                            var index = 1;
                        
                            while ( a.current.children[limit_view].children[ index + 1 ].getBoundingClientRect().x <= mouse_X) {
            
                              index++;
                            }
            
                            
                              var elem_i = 0  ;
                              var elem_j = index - 1 ;
                              // chỉ vẽ lại khi vị trí chuột tới ô khác tương ứng
                              
                            if (event_window.buttons == 1 && i_truyen != elem_i || j_truyen != elem_j) {
                              i_truyen = elem_i ;j_truyen = elem_j ;   
                              let x = vi_tri_o_truoc[0];
                              let y = vi_tri_o_truoc[1] ;
                            
                              if (x <  0) { x = 0 }
                              if (y <  0) { y = 0 }
                  
                              if (x >  limit_view - 1) { x =  limit_view - 1}
                              if (y >  limit_col_view) {y =  limit_col_view}

                              _onMouseEnter(event,x, y, elem_i, elem_j) ; 
                              }
                            
                          }, 0);
                      





        }
// cuộn thanh ngang khi vị trí mouse nằm ngoài bên trái brower
        else if (event_window.buttons == 1 &&select_range_excel === true&&
           mouse_X < (table_excel.current.getBoundingClientRect().x + width_bar_reference_col)) {
          
          console.log('cuộn thanh ngang khi vị trí mouse nằm ngoài bên trái brower');
          position_mouse_brower = 'ouside_brower';
          myInterval_0 =  setTimeout(function doSomething() {
            table_excel.current.scrollLeft = table_excel_scrollLeft - click_scroll_dichuyen;
            table_excel_scrollLeft -= click_scroll_dichuyen ;
            myInterval =  setTimeout(doSomething, 10);
              }, 10);

                          // setTimeout ở đây để vẽ lại chạy sau các hàm khi scroll
                        setTimeout(() => {
                          var index = 1;
                        
                          while ( a.current.children[index].children[ 0].getBoundingClientRect().y <= mouse_Y) {
          
                            index++;
                          }
          
                          
                            var elem_i = index - 1 ;
          
                            // chỉ vẽ lại khi vị trí chuột tới ô khác tương ứng
                            
                          if (event_window.buttons == 1 && i_truyen != elem_i ) {
                            i_truyen = elem_i ; 
                            let x = vi_tri_o_truoc[0];
                            let y = vi_tri_o_truoc[1] ;
                          
                            if (x <  0) { x = 0 }
                            if (y <  0) { y = 0 }
                
                            if (x >  limit_view - 1) { x =  limit_view - 1}
                            if (y >  limit_col_view) {y =  limit_col_view}

                          
                                _onMouseEnter(event,x, y , elem_i, 0) ; 
                              }
                          
                        }, 0);
                      


          
        }


            
          }


}


    //////////////////////////////////////////////////////////////////////////////////////////////////////
    // phải thêm sự kiện _onMouseOut  ở đây vì sự kiện _onMouseMove khi di chuyển chuột vói tốc độ nhanh quá sẽ không bắt kịp do vậy thêm _onMouseOut để bắt 1 lần nữa.
    function _onMouseOut(event) { 
  
      _onMouseMove(event) ;
    }

  



   ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function css() {
     
     
      
     
      return {
        //verticalAlign: "top" căn theo cạnh top khối của element cha, nếu trong cha có nhiều anh em thì căn tiếp theo top khối của anh em trước nó
        textarea: {verticalAlign: "top",  marginLeft : "5px", marginRight : "5px", border: "1px solid #ccc", flexGrow: 1, width: `50px` , height: "50px", resize: "none" },
        thanh_dia_chi : {marginLeft : "5px",marginTop : "10px",verticalAlign: "top", backgroundColor: "white", height:  `30px` , padding:"5px", width : `50px`,flexGrow: 0 ,  border: "1px solid #ccc"},
        //overflow: "auto" : Khi chiều cao của box không đủ chứa text, thì thanh scroll sẽ tự động hiển thị ; Khi sử dụng thành phần này sẽ xuất hiện thanh scroll dọc
      
        table_excel: {    height: `${table_excel_height}px`, width :  `${table_excel_width}px`,      overflow: 'scroll',  position: 'relative',},

        bar_reference_row : {   backgroundColor: "#d8dcd6", borderBottomStyle: "none", textAlign: "center" ,        border: "1px ridge #ccc", minWidth: "35px", height: "20px", display: "table-cell",  borderRightStyle: 'none', borderTopStyle: 'none', }  ,

        bar_reference_col : {  position: 'relative', zIndex: 100,    width: "auto" , textAlign: "center",  paddingLeft : "4px" , paddingRight : "4px",  backgroundColor: "#d8dcd6", borderBottomStyle: "none", textAlign: "center" ,        border: "1px ridge #ccc",  height: "20px", display: "table-cell" ,  borderRightStyle: 'none', borderTopStyle: 'none', }  ,
        row_excel: { display: "table-row" },
        col_excel: {    position: 'relative',  backgroundColor: "white" ,  border: "1px ridge #ccc", width: "35px", height: "20px", display: "table-cell", paddingLeft: "4px", paddingRight : "4px",  borderRightStyle: 'none', borderTopStyle: 'none', },

       
        click: { backgroundColor: "moccasin" , outline: 'none', },
        remove_click: {  backgroundColor: "white" },

        input_focus: {   height: "inherit", paddingLeft: "4px", display: 'inline-block', position: 'absolute', zIndex: 100 ,  outlineWidth: "0px", border: "0px", backgroundColor: "moccasin" },

        select: { backgroundColor: "moccasin"   ,  },
        remove_select: { backgroundColor: "" },


        canvas_ : {  position: "absolute", display : "inline-block",  border: "2px solid #00A170",  borderRight: '2px solid #00A170' , },
      
        button : { border: "1px solid #00A170" ,  padding : '2px',   margin : '2px'},
        file : { display: 'none' ,  zIndex: 200 ,   backgroundColor: '#FFFFF7', position: "absolute",  width : '500px' ,  height: '500px' ,  border: "2px solid #00A170", }

      }
    }

    var css = css();

/////////////////////////////////////////////////////////////////////////////////////////////////////
   
// bắt sự kiện onMouseMove  và onMouseOut ở đây chứ không để ở table_excel vì có ưu điểm
// sự kiện cha lắng nghe onMouseMove  không bị thẻ con canvas che mất nên toạ độ nhận được chính xác và nhạy (nhanh) hơn để ở table_excel
// để ở table_excel bị canvas che mất nên ra khỏi canvas mới nhận toạ độ và kích hoạt lắng nghe sự kiện nên chậm. Khi người dùng dùng chuột với tốc độ cực kỳ nhanh nó sẽ khồng lắng nghe kịp
// ta thêm sụ kiện onMouseOut để bắt tiếp 1 lần nữa => di chuyển chuột siêu nhanh vẫn lắng nghe kịp
      return (
      
        <div   onMouseMove ={(event) => { _onMouseMove(event)    }} onMouseOut ={(event) => { _onMouseOut(event)    }}  ref={ ref_0  } style={{  position: "relative"}}  > 
         
          <canvas  ref={ canvas_  } width = {table_excel_width} height={ table_excel_height}  style={{display : "none" ,  zIndex: 100,}}    ></canvas>  
        
    <div ref={ table_excel  }   style={css.table_excel}    >
   
       <div  style={{ height : `${data_lenght }px` ,width : `${data_col_lenght }px`,  }}  ref={ a  }  >
                            
                         
                          <div style={  css.row_excel}  > <div    style={ css.bar_reference_col} ></div> {Data_show_0[0].map((cell, j) => { return <div   style={css.bar_reference_row} >{j }</div>})}  </div> 
                        
                          {Data_show_0.map((row, i) => {
                            return (

                              <div  style={  css.row_excel}    >

                            <div style={ css.bar_reference_col }  >{i }</div> {row.map((cell, j) => {   

                      return <div style={ css.col_excel } 
                          
                      onMouseDown={(event)=>{var _this =  a.current.children[i + 1].children[j+1]; return _onMouseDown(_this, i, j, event)}} 

                      onMouseEnter={(event)=>{    if (select_range_excel === true) {  clearTimeout(myInterval_0); clearTimeout(myInterval); let a_1 = vi_tri_o_truoc[0]; let b_1 = vi_tri_o_truoc[1] ; if (a_1 <  0) { a_1 = 0 } ; if (b_1 <  0) { b_1 = 0 } ; if (a_1 >  limit_view - 1) { a_1 =  limit_view - 1} ;  if (b_1 >  limit_col_view) {b_1 =  limit_col_view} ;_onMouseEnter(event,a_1, b_1,i,j)  }    }  } 
                      // biến onKeyDown mặc định là false
                      onKeyDown={(event)=>{ if(onKeyDown){}else{_onKeyDown(event,i,j)}  }}
                      > {cell}  </div>
                                })}   
                                 {/* div này để show data bị ẩn bên trái trục */}
                                 <div style={ {  zIndex: limit_col_view,  position: "relative", display : "inline-block",  backgroundColor: "white"}} ></div>

                              </div> 

                            );
                          })}    
                          
                </div>   



    </div>

    {/* bar_scroll_row */}
    <div  style={ { border: "1px ridge #ccc", top: -17,  display: 'flex', position: 'relative', width: table_excel_width -17, }} > 
                            <img  src = "/10/static/SVG/left-chevron-svgrepo-com.svg" style={ {  background: '#000', width: 20, height: 15,}}  onMouseDown={(event)=>{ return button_bar_scroll_left_click(event) }}  /> 
                            <div ref={ ref_thumb  } style={ {    width: 15, height: 15, background: '#5f88c1', position: 'absolute', left: 20,}}  onMouseDown={(event)=>{  if (event.buttons === 1) { move_thumb = true ; x_thumb = event.clientX ; left_thumb = ref_thumb.current.getBoundingClientRect().left - ref_track.current.getBoundingClientRect().left  ; } }}   onDragStart={(event)=> event.preventDefault()} > </div> 
                            <div  ref={ ref_track  } style={ {    width: '100%', height: 15,  backgroundImage: 'linear-gradient(#A9A9A9, #D3D3D3)',  }}  onDragStart={(event)=> event.preventDefault()}  > </div> 
                            <img  src = "/10/static/SVG/right-chevron-svgrepo-com.svg"  style={ {  background: '#000', width: 20, height: 15,}} onMouseDown={(event)=>{ return button_bar_scroll_right_click(event) }}  /> 

                        
    </div>


       {/* bar_scroll_col */}
   <div  style={ {  border: "1px ridge #ccc",   height: table_excel_height ,  position: 'absolute', left: table_excel_width -17  ,   top: 0  }}   > 
                              <img  src = "/10/static/SVG/up-chevron-svgrepo-com.svg" style={ {  background: '#000', width: 15, height: 20,}}  onMouseDown={(event)=>{ return button_bar_scroll_top_click(event) }} /> 
                                <div ref={ ref_thumb_col  } style={ {    width: 15, height: 15, background: '#5f88c1', position: 'absolute',}} onMouseDown={(event)=>{  if (event.buttons === 1) { move_thumb_col = true ; y_thumb = event.clientY ; top_thumb = ref_thumb_col.current.getBoundingClientRect().top - ref_track_col.current.getBoundingClientRect().top  ; } }}   onDragStart={(event)=> event.preventDefault()} > </div> 
                                <div  ref={ ref_track_col  } style={ {    width: 15, height: table_excel_height - 40-17,   backgroundImage: 'linear-gradient(to right, #BEBEBE , #E8E8E8)',   }}  onDragStart={(event)=> event.preventDefault()}  > </div> 
                            <img  src = "/10/static/SVG/down-chevron-svgrepo-com.svg"  style={ {  background: '#000', width: 15, height: 20,}}  onMouseDown={(event)=>{ return button_bar_scroll_bottom_click(event) }} /> 
                            
   </div>                   
   
   
   

</div> 
          
       
          
       
      
      );






    };
    