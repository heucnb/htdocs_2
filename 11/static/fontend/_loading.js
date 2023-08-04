function _loading(x,y,width, height, key) {
  let duong_kinh = Math.min(width, height);
  let center = x+ width/2 - duong_kinh/2 ;

  let _div = document.createElement("div");


  // getElementsByTagName sẽ lấy ra một mảng tag name phù hợp không giống by id lấy ra 1 cái 
  let body = document.getElementsByTagName("body");
  body[0].appendChild(_div);


  _div.style.zIndex = "10000";

   
  document._loading = {} ;

  document._loading[key] = _div ;



  function Loading() {
 
  
    return ( <div className={' absolute  rounded-full border-4 border-solid border-green-600 border-r-transparent align-[-0.125em]   '  } style={  {  left: center , top: y , width: duong_kinh, height: duong_kinh,  animation: 'animate 2s linear infinite', }  } > </div>
       
       

     );

    
  }
   
  
    
    return   ReactDOM.render( <Loading />  ,  _div ) ;
     
  }


  // để bỏ loading dùng

 // let node = document._loading[key] ;
 // node.remove();

  


