function App(props) {

    function remove_color_click(dom) {
        const collection = document.getElementById(dom).children;

        for (let i = 0; i < collection.length; i++) {
        collection[i].style.color = "black";
        // document.getElementById(dom).style.borderLeft  = "thin solid rgb(14 165 233)";
        // document.getElementById(dom).style.borderTop  = "thin solid rgb(14 165 233)";
        // document.getElementById(dom).style.borderBottom   = "thin solid rgb(14 165 233)";
        }
  
    }

       useEffect(() => {  

       
          
        
       }, []);
    
	
    return ( <div  className={` text-base  flex  h-screen flex-col `} >  
<div className={`  flex bg-green-400 justify-between items-start p-1`} > 

                <div className={` flex  `} >  
                <img id="id_hide" src="logo2.jpg" alt=""  className={` h-6 `} />
                <div  > Tập Đoàn DABACO Việt Nam  </div>
                </div>
             
                <div  id="id_select" >   </div>
              
                <input id="id_khoa_ngay_nhap_du_lieu" type="button" value="Khóa ngày sủa dữ liệu"/>	

</div>
<div  className={` flex flex-row  grow bg-orange-200  _shadow `} >


            <div id="id_menu"  className={`  flex-shrink-0 w-[210px] h-full `}  >
                <div id="id_td_0" className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50 `}  onClick={(event)=>{ remove_color_click('id_menu'); event.target.style.color =  "blue"; }} >Đăng ký</div>

                <div id="id_td_1"  className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50 `} onClick={(event)=>{ remove_color_click('id_menu'); event.target.style.color =  "blue"; }} >Đăng nhập</div>

                <div id="id_td_2" className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50 `} onClick={(event)=>{ remove_color_click('id_menu'); event.target.style.color =  "blue"; }} >Phối</div>

                <div id="id_td_13" className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50 `} onClick={(event)=>{ remove_color_click('id_menu'); event.target.style.color =  "blue"; }} >Đẻ</div>

                <div id="id_td_3"  className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50 `} onClick={(event)=>{ remove_color_click('id_menu'); event.target.style.color =  "blue"; }}>Cai sữa</div>
                <div id="id_td_4"  className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50 `} onClick={(event)=>{ remove_color_click('id_menu'); event.target.style.color =  "blue"; }}>Heo vấn đề</div>


                <div id="id_td_5" className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50 `} onClick={(event)=>{ remove_color_click('id_menu'); event.target.style.color =  "blue"; }} >Heo nái chết loại</div>

                <div id="id_td_6" className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50 `} onClick={(event)=>{ remove_color_click('id_menu'); event.target.style.color =  "blue"; }} >Heo con chết loại</div>

                <div id="id_td_7" className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50 `} onClick={(event)=>{ remove_color_click('id_menu'); event.target.style.color =  "blue"; }} >Heo Hậu bị</div>

                <div id="id_td_8" className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50 `} onClick={(event)=>{ remove_color_click('id_menu'); event.target.style.color =  "blue"; }} >Heo Đực</div>
               
                <div id="id_td_25" className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50 `} onClick={(event)=>{ remove_color_click('id_menu'); event.target.style.color =  "blue"; }} >Xuất heo con</div>

                <div id="id_td_9" className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50 flex flex-nowrap 	text-align: center`} onClick={(event)=>{ remove_color_click('id_menu'); event.target.style.color =  "blue"; }} >  <img className={` w-5 h-5 justify-center items-center`} src = "10/static/SVG/calculator-svgrepo-com.svg"   />
               Báo cáo tỷ lệ phối</div>

                <div id="id_td_10" className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50 flex flex-nowrap 	text-align: center`} onClick={(event)=>{ remove_color_click('id_menu'); event.target.style.color =  "blue"; }} > <img className={` w-5 h-5 justify-center items-center `} src = "10/static/SVG/calculator-svgrepo-com.svg"   />Báo cáo tháng</div>

                <div id="id_td_12"  className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50 flex flex-nowrap 	text-align: center`} onClick={(event)=>{ remove_color_click('id_menu'); event.target.style.color =  "blue"; }} > <img className={`w-5 h-5 justify-center items-center `} src = "10/static/SVG/calculator-svgrepo-com.svg"   />Báo cáo 41 chỉ tiêu</div>

                <div  id="id_td_14" className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50 `} onClick={(event)=>{ remove_color_click('id_menu'); event.target.style.color =  "blue"; }} >Tra lý lịch</div>

                <div  id="id_td_15" className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50 `} onClick={(event)=>{ remove_color_click('id_menu'); event.target.style.color =  "blue"; }}>Ghép phối tránh cận huyết</div>

                <div  id="id_td_16" className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50 `} onClick={(event)=>{ remove_color_click('id_menu'); event.target.style.color =  "blue"; }} >Xem danh sách đàn heo</div>

                <div  id="id_td_17" className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50  flex flex-nowrap 	text-align: center`} onClick={(event)=>{ remove_color_click('id_menu'); event.target.style.color =  "blue"; }}> <img className={` w-5 h-5 justify-center items-center `} src = "10/static/SVG/calculator-svgrepo-com.svg"   />BC đóng chuồng heo thịt</div>
                <div  id="id_td_18" className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50 flex flex-nowrap 	text-align: center`} onClick={(event)=>{ remove_color_click('id_menu'); event.target.style.color =  "blue"; }}> <img className={` w-5 h-5 justify-center items-center`} src = "10/static/SVG/calculator-svgrepo-com.svg"   />BC diễn biến đàn heo thịt</div>
                <div  id="id_td_19" className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50 `} onClick={(event)=>{ remove_color_click('id_menu'); event.target.style.color =  "blue"; }}>Cấu hình chuồng</div>
                <div  id="id_td_23" className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50 `} onClick={(event)=>{ remove_color_click('id_menu'); event.target.style.color =  "blue"; }}>Cấu hình kho Cám</div>
                <div  id="id_td_24" className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50 `} onClick={(event)=>{ remove_color_click('id_menu'); event.target.style.color =  "blue"; }}>Cấu hình kho Thuốc</div>
                <div  id="id_td_20" className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50 `} onClick={(event)=>{ remove_color_click('id_menu'); event.target.style.color =  "blue"; }}>Quản lý User</div>
                <div  id="id_td_21" className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50 `} onClick={(event)=>{ remove_color_click('id_menu'); event.target.style.color =  "blue"; }}>Nhập heo thịt</div>
                <div  id="id_td_22" className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50 `} onClick={(event)=>{ remove_color_click('id_menu'); event.target.style.color =  "blue"; }}>Quản lý cám</div>
                <div  id="id_td_22_con"  ></div>                     
            </div>
            <div className={` flex h-full grow  bg-gray-100 text-sm `}  id="id_nhan_index"  >-------------------</div>	

</div>	

    </div>
     
     

    );


   } ;