
    function Scroll_bar_row(props) {
        let dom = props.value.dom ;
        let click_scroll_dichuyen = props.value.click_scroll_dichuyen ;
        let limit_scroll_col = props.value.limit_scroll_col ;
        let limit_col_view = props.value.limit_col_view ;
      
               
                var ref_track = useRef(null) ;
                var ref_thumb = useRef(null) ;
                    function button_right_click(event) {
                        let  move = (ref_track.current.getBoundingClientRect().width)/(limit_scroll_col+3)
                        if (ref_thumb.current.offsetLeft<=ref_track.current.getBoundingClientRect().width -move ) {
                            ref_thumb.current.style.left =ref_thumb.current.offsetLeft +  move+ "px"  ; 
                      
                            dom.scrollLeft = dom.scrollLeft + click_scroll_dichuyen  ; 
                            
                        }
                      
                        
                    }
               
                 return (  
            
                    <div className={` mt-8 bg-red-400  flex  relative`}  > 
                            <div className={` w-5 h-3 bg-black `} >  </div>  
                            <div ref={ ref_thumb  } className={` left-5 w-5 h-3 bg-orange-400 absolute `} > </div> 
                            <div  ref={ ref_track  } className={` w-5/6 bg-green-400   `} > </div> 
                            <div   className={` w-5 h-3 bg-black `}   onMouseDown={(event)=>{ return button_right_click(event) }}   > </div> 
                        
                     </div>
              
            
                 );
     

                 }
