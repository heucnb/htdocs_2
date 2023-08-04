function Upload(props) {
   let ref_FileInput =  useRef(null) ;
   let ref_Upload =  useRef(null) ;  
  
   useEffect( async() => {

      $("#hh").click(function (event) {

         console.log('88888888888888888888888888');
         console.log(event);
         
         
         
      })

      //--------------------------------------
      


      ref_FileInput.current.onchange = async function upload_file(event) {
         console.log('---------------------------upload');
         
          // lấy nhiều file
           let files = event.target.files;
         console.log(files[0].name);
           let data = new FormData();
           data.append('file_gui',files[0]);
          
            console.log(data);



         let host = window.location.hostname ;

         const rect = id_list_upload.getBoundingClientRect();
         _loading(rect.left,rect.top,80, 80, "load_1")


      $.post("/python/uploader", data , function(data){
             
         console.log('upload xong');
         let node = document._loading["load_1"] ;
         node.remove();
                  

         let _div = document.createElement("div");
         id_list_upload.appendChild(_div);
         _div.textContent = files[0].name ;
  
         window.open("http://"+host + "/" + data.trim(), "_blank");
                           });
          
   
       }





      },[]);
  



     return (  
      <div ref = { ref_Upload } onClick={()=>{ ref_FileInput.current.click(); }} className={`hover:bg-sky-700 border rounded   bg-sky-500 overflow-hidden whitespace-nowrap m-0 pr-2 pl-2 text-center text-base border-solid p-0 flex ${tb('','flex-wrap')} items-center border-yellow-900`}    >
     <img className={`${tb('w-5 h-5 pr-1', 'w-8 h-4 mt-1 pr-1 self-end ')}`}  src = "static/SVG/file_upload.svg" /> 
     <div  className={` ${tb('','')}   text-black `}    >  Chọn file </div> 

     {/* nếu chọn nhiều file thì trong input thêm: multiple */}
      <input type="file"  ref={ref_FileInput}  style={{display: 'none'}} />
     
  </div> 
     );

 
    } ;