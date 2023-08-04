<!DOCTYPE html>
<html>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<head>

<style>
._shadow{
			box-sizing: border-box;
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
         }

 /* ngăn chặn anh huong thao tac copy tren trinh duyet */
      /* How to disable selection of text on a web page */
/* hoặc */
/* window.addEventListener("contextmenu", e => e.preventDefault()); */
body{
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          -o-user-select: none;
           user-select: none;
		   vertical-align:top;		

         }
* {
  box-sizing: border-box;
}		 



input {
 width: 180px;  
}
button {
 width: 180px;  
}




.mystyle_1 {
 
 background-color: red;
  animation-name: example;
  animation-duration: 2s;

}

@keyframes example {
  0%   {background-color: red;}
  25%  {background-color: yellow;}
 
}


.mystyle_2 {
 
 background-color: red;
  animation-name: example_2;
  animation-duration: 2s;

}

@keyframes example_2 {
  0%   {background-color: red;}
  25%  {background-color: yellow;}
 
}



@keyframes animate
{
  0%
  {
    transform:rotate(45deg);
  }
  100%
  {
    transform:rotate(405deg);
  }
}
	




#id_td_khoa_ngay_nhap_du_lieu {
 border: 0px solid black;	 
 text-align: right;
 width: 80px;
}
#id_td_them_user {
 border: 0px solid black;	 
 text-align: right;
 width: 80px;
}

</style>
 <link rel="stylesheet" href="/10/static/style_converted.css">
<!-- tải bất đồng bộ xong, eval() script xong mới load dom phía sau tiếp -->
<script type="text/javascript" src="CDN/jquery-3.1.0.min.js"></script>
<script type="text/javascript" src="CDN/tailwindcss.com3.2.4.js"></script>
<script type="text/javascript" src="CDN/react.development.min.js"></script>
<script type="text/javascript" src="CDN/react-dom.development.min.js"></script>

</head>

<body  >

<div  id="root"></div>

</body>
</html>

<script id="script_root" >


let arrayjavascript_3 ;
 

 let gobal_post = "";
 let gobal_post_month = "";
 let gobal_tim_kiem_sua_xoa = "";
 let  mystyle_array =["mystyle_1", "mystyle_2"];
 let click_xoa = 0 ;
 let  array_chuong_thit ;
 let id_click;

// load hết dom xong mới tải 
window.onload = function()
{
  var newScript_1 = document.createElement("script");
   script_root.appendChild(newScript_1);
 newScript_1.src ="10/static/index_ghep_file.js";
 // load hết index_ghep_file.js xong mới post server kiểm tra đăng nhập và lấy cấu hình
 newScript_1.onload = function(){
  $.post("main.php", {}, function(data){
   
  data = data.trim(); if (data.slice(0, 8) ==="<script>") {
    let data_1 = data.slice(8, -9);
    console.log(data_1);
    
     eval(data_1) ;

     
     
     console.log( arrayjavascript_3);
        if(arrayjavascript_3[0]!=="error")
        {
         document.getElementById('id_td_1').innerHTML="Đăng nhập - " + arrayjavascript_3[0][0];
        //----------------------------------
        //tải cáu hình chuòng thịt cho công ty
         array_chuong_thit = JSON.parse(arrayjavascript_3[0][6]) ;
         console.log( array_chuong_thit);
      //------------------------------------------------------
      
     
        // This will return an array with strings "1", "2", etc.
        document.array_option = arrayjavascript_3[0][2].split(",");
        console.log(document.array_option);
        
        document.array_option_ten_day_du = arrayjavascript_3[0][3].split(",");
        console.log(document.array_option_ten_day_du);
        ReactDOM.unmountComponentAtNode(id_select); 
        ReactDOM.render( /*#__PURE__*/React.createElement(Select_list, { value: { trai_value:  document.array_option , trai_ten_day_du: document.array_option_ten_day_du } }), id_select);


         // kiểm tra xem có được quyền thêm người dùng và khóa dữ liệu không
                var quyen_them_nguoi_dung_va_khoa_ngay_sua_du_lieu = arrayjavascript_3[0][4] ;
                if(quyen_them_nguoi_dung_va_khoa_ngay_sua_du_lieu==1)
                {
                 document.getElementById('id_td_20').style.display = 'inline';   
                 document.getElementById('id_khoa_ngay_nhap_du_lieu').style.display= 'inline';  
                }
                else
                {
                   document.getElementById('id_td_20').style.display= 'none'; 
                    document.getElementById('id_khoa_ngay_nhap_du_lieu').style.display= 'none'; 
                }
        
    
        }

    // sau đó tiếp tục gán các sự kiện lên dom --------------------------------------------------------------------------------------------------
    
    let	id_nhan_index  =  document.getElementById('id_nhan_index') ;
        
       
       
        /*đăng ký*/
        
        $(document).ready(function(){
            $("#id_td_0").click(function(){
               
              ReactDOM.render( /*#__PURE__*/React.createElement(Dang_ky, null), id_nhan_index);
                
                
            
            });
        });
        
            
        
        /*đăng nhập*/
        
        $(document).ready(function(){
            $("#id_td_1").click(function(){
              
              
                if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
            {
                
              ReactDOM.render( /*#__PURE__*/React.createElement(Login, null), id_nhan_index);
            
            }
            else
            {
              ReactDOM.render( /*#__PURE__*/React.createElement(Logout, null), id_nhan_index);
                
            }
                
                
            
            });
        });
        
        /*phối*/

        id_td_2.onclick = function () {
            ReactDOM.unmountComponentAtNode(id_nhan_index); 
                
                if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
                {
                    ReactDOM.unmountComponentAtNode(id_nhan_index); 
                 _alert("Bạn phải đăng nhập trước đã")
                }
                else
                {
                    var dem_string = id_8.value;	
                    let check = dem_string.includes("td_");
                
                    if (
                    check ||
                    id_8.value == null || id_8.value == ""
                        ) 
                    {
                        ReactDOM.unmountComponentAtNode(id_nhan_index); 
                    return   _alert('Bạn phải chọn công ty để nhập dữ liệu hoặc lỗi chọn công ty có chứa *') 
                    }
            
                   
                    
                
            
                ReactDOM.render(React.createElement(Phoi, null), id_nhan_index);
                gobal_tim_kiem_sua_xoa = "phoi"  ;  
                id_click = id_td_2 ;
                
                }
                
            
        }
    
     
        
        /* đẻ*/
        id_td_13.onclick = function () {
            
            if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
            {
                ReactDOM.unmountComponentAtNode(id_nhan_index); 
                _alert('Bạn phải đăng nhập trước đã')
        
            }
            else
            {
                
                var dem_string = id_8.value;	
                let check = dem_string.includes("td_");
            
                if (
                check ||
                id_8.value == null || id_8.value == ""
                    ) 
                {
                    ReactDOM.unmountComponentAtNode(id_nhan_index); 
                return    _alert('Bạn phải chọn công ty để nhập dữ liệu hoặc lỗi chọn công ty có chứa *') 
                }
             
                 ReactDOM.render(React.createElement(De, null), id_nhan_index);
                 gobal_tim_kiem_sua_xoa = "de"  ;  
                 id_click = id_td_13 ; 
            }
            

        }
    
      
        
        /* cai sữa*/

        id_td_3.onclick = function () {
            
            if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
            {
                ReactDOM.unmountComponentAtNode(id_nhan_index); 
                _alert('Bạn phải đăng nhập trước đã')
            }
            else
            {
                
                var dem_string = id_8.value;	
                let check = dem_string.includes("td_");
              
                if (
                    check ||
                id_8.value == null || id_8.value == ""
                    ) 
                {
                    ReactDOM.unmountComponentAtNode(id_nhan_index); 
                return    _alert('Bạn phải chọn công ty để nhập dữ liệu hoặc lỗi chọn công ty có chứa *') 
                }
               
                ReactDOM.render(React.createElement(Cai_sua, null), id_nhan_index);
                gobal_tim_kiem_sua_xoa = "cai_sua"  ; 
                id_click = id_td_13 ;
            

            }
            
            
        }
    
       
        
        /* heo vấn đề*/
        id_td_4.onclick = function () {
            
                
            if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
            {
                ReactDOM.unmountComponentAtNode(id_nhan_index); 
                _alert('Bạn phải đăng nhập trước đã')
            }
            else
            {
                
                var dem_string = id_8.value;	
                let check = dem_string.includes("td_");
            
                if (
                check ||
                id_8.value == null || id_8.value == ""
                    ) 
                {
                    ReactDOM.unmountComponentAtNode(id_nhan_index); 
                return    _alert('Bạn phải chọn công ty để nhập dữ liệu hoặc lỗi chọn công ty có chứa *') 
                }
               
                ReactDOM.render(React.createElement(Heo_van_de, null), id_nhan_index);
                gobal_tim_kiem_sua_xoa = "van_de"  ; 
                id_click = id_td_4 ;
    
            }
    
    
            
        }
        
     
        
        /* heo nái chết loại*/
        id_td_5.onclick = function () {
            
            if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
            {
                ReactDOM.unmountComponentAtNode(id_nhan_index); 
                _alert('Bạn phải đăng nhập trước đã')
            }
            else
            {
                
                var dem_string = id_8.value;	
                let check = dem_string.includes("td_");
            
                if (
                check ||
                id_8.value == null || id_8.value == ""
                    ) 
                {
                    ReactDOM.unmountComponentAtNode(id_nhan_index); 
                return     _alert('Bạn phải chọn công ty để nhập dữ liệu hoặc lỗi chọn công ty có chứa *') 
                }
               
                ReactDOM.render(React.createElement(Nai_chet, null), id_nhan_index);
        
                gobal_tim_kiem_sua_xoa = "nai_chet_loai"  ; 
                id_click = id_td_5 ;
            }
            
            
            
        }
        
       
        
        /* heo con chết loại*/
        id_td_6.onclick = function () {
            
            if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
            {
                ReactDOM.unmountComponentAtNode(id_nhan_index); 
                _alert('Bạn phải đăng nhập trước đã')
            }
            else
            {
                
                var dem_string = id_8.value;	
                let check = dem_string.includes("td_");
            
                if (
                check ||
                id_8.value == null || id_8.value == ""
                    ) 
                {
                    ReactDOM.unmountComponentAtNode(id_nhan_index); 
                return    _alert('Bạn phải chọn công ty để nhập dữ liệu hoặc lỗi chọn công ty có chứa *') 
                }
                
                ReactDOM.render(React.createElement(Heo_con_chet, null), id_nhan_index);
                gobal_tim_kiem_sua_xoa = "con_chet_loai"  ; 
                id_click = id_td_6 ;
            }
            
        }
        
       
        
        
        /* hậu bị*/
        id_td_7.onclick = function () {
            
            if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
            {
                ReactDOM.unmountComponentAtNode(id_nhan_index); 
                _alert('Bạn phải đăng nhập trước đã')
            }
            else
            {
                
                var dem_string = id_8.value;	
                let check = dem_string.includes("td_");
            
                if (
                check ||
                id_8.value == null || id_8.value == ""
                    ) 
                {
                    ReactDOM.unmountComponentAtNode(id_nhan_index); 
                return    _alert('Bạn phải chọn công ty để nhập dữ liệu hoặc lỗi chọn công ty có chứa *') 
                }
        
                  ReactDOM.unmountComponentAtNode(id_nhan_index);  
                ReactDOM.render(React.createElement(Hau_bi, null), id_nhan_index);
                gobal_tim_kiem_sua_xoa = "hau_bi"  ; 
                id_click = id_td_7 ;
            }
            
            
        }
        
      
        
        /* đực */
        id_td_8.onclick = function () {
            
            if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
            {
                ReactDOM.unmountComponentAtNode(id_nhan_index); 
                _alert('Bạn phải đăng nhập trước đã')
            }
            else
            {
                
                var dem_string = id_8.value;	
                let check = dem_string.includes("td_");
            
                if (
                check ||
                id_8.value == null || id_8.value == ""
                    ) 
                {
                    ReactDOM.unmountComponentAtNode(id_nhan_index); 
                return     _alert('Bạn phải chọn công ty để nhập dữ liệu hoặc lỗi chọn công ty có chứa *') 
                }
        
                ReactDOM.unmountComponentAtNode(id_nhan_index);  
                ReactDOM.render(React.createElement(Duc, null), id_nhan_index);
                gobal_tim_kiem_sua_xoa = "duc"  ; 
                id_click = id_td_8 ;
        
            }
            
            
        }
        
      
        
        
        /*báo cáo tháng*/
        id_td_10.onclick = function () {
            
                
            if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
            {
                ReactDOM.unmountComponentAtNode(id_nhan_index); 
                _alert('Bạn phải đăng nhập trước đã')
            }
            else
            {
                try { Table_hieu_2.remove_EventListener(); } catch (error) { }
                ReactDOM.unmountComponentAtNode(id_nhan_index);  	
        gobal_post_month = "fuction_thang__from_bao_cao_thang.php" ;	 
        gobal_post = "fuction_tuan__from_bao_cao_thang.php" ;
        ReactDOM.render(React.createElement(from_bao_cao_thang, null), id_nhan_index);

        id_click = id_td_10 ;
            }
                
                
            
        }
        
       
        
        /*báo cáo tháng phối*/
        id_td_12.onclick = function () {
            
                
            if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
            {
                ReactDOM.unmountComponentAtNode(id_nhan_index); 
                _alert('Bạn phải đăng nhập trước đã')
            }
            else
            {
                try { Table_hieu_2.remove_EventListener(); } catch (error) { }
                ReactDOM.unmountComponentAtNode(id_nhan_index);  	
                gobal_post_month = "fuction_thang__from_bao_cao_tinh_theo_phoi.php" ;	
                gobal_post = "fuction_tuan__from_bao_cao_tinh_theo_phoi.php" ;
        ReactDOM.render(React.createElement(from_bao_cao_thang, null), id_nhan_index);
        id_click = id_td_12 ;
                    
            }
                
                
            
        }
        
       
        
        
        
        
        
        
        /*theo dõi tỷ lệ phối*/
        id_td_9.onclick = function () {
            
            if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
            {
                ReactDOM.unmountComponentAtNode(id_nhan_index); 
                _alert('Bạn phải đăng nhập trước đã')
            }
            else
            {
                try { Table_hieu_2.remove_EventListener(); } catch (error) { }
                ReactDOM.unmountComponentAtNode(id_nhan_index);  	
                gobal_post_month = "fuction_thang--from_theo_doi_ty_le_phoi.php" ;	
                gobal_post = "fuction_tuan--from_theo_doi_ty_le_phoi.php" ;
        ReactDOM.render(React.createElement(from_bao_cao_thang, null), id_nhan_index);
        id_click = id_td_9 ;
            }
                
            
        }
        
       
        
        /*tra lý lịch*/
        id_td_14.onclick = function () {
            
                
            if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
            {
                ReactDOM.unmountComponentAtNode(id_nhan_index); 
                _alert('Bạn phải đăng nhập trước đã')
            }
            else
            {
    
                var dem_string = id_8.value;	
                let check = dem_string.includes("td_");
            
                if (
                check ||
                id_8.value == null || id_8.value == ""
                    ) 
                {
                    ReactDOM.unmountComponentAtNode(id_nhan_index); 
                return     _alert('Bạn phải chọn công ty để nhập dữ liệu hoặc lỗi chọn công ty có chứa *') 
                }
         
                ReactDOM.unmountComponentAtNode(id_nhan_index);  
                ReactDOM.render(React.createElement(Tra_ly_lich, null), id_nhan_index);
                id_click = id_td_14 ;
                    
                    
            }
                
               
            
        }
        
    
        /*chọn đực phối*/
        id_td_15.onclick = function () {
            
            if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
            {
                ReactDOM.unmountComponentAtNode(id_nhan_index); 
                _alert('Bạn phải đăng nhập trước đã')
            }
            else
            {
    
                var dem_string = id_8.value;	
                let check = dem_string.includes("td_");
            
                if (
                check ||
                id_8.value == null || id_8.value == ""
                    ) 
                {
                    ReactDOM.unmountComponentAtNode(id_nhan_index); 
                return     _alert('Bạn phải chọn công ty để nhập dữ liệu hoặc lỗi chọn công ty có chứa *') 
                }
    
    
                ReactDOM.unmountComponentAtNode(id_nhan_index);  
                ReactDOM.render(React.createElement(Ghep_phoi, null), id_nhan_index);
                id_click = id_td_15 ;
    
    
            }
                
               
            
        }
        
       
        
        /*Xem danh sách đàn nái, đực*/
        id_td_16.onclick = function () {
            
            if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
            {
                ReactDOM.unmountComponentAtNode(id_nhan_index); 
                _alert('Bạn phải đăng nhập trước đã')
            }
            else
            {
    
                var dem_string = id_8.value;	
                let check = dem_string.includes("td_");
            
                if (
                check ||
                id_8.value == null || id_8.value == ""
                    ) 
                {
                    ReactDOM.unmountComponentAtNode(id_nhan_index); 
                return     _alert('Bạn phải chọn công ty để nhập dữ liệu hoặc lỗi chọn công ty có chứa *') 
                }
                ReactDOM.unmountComponentAtNode(id_nhan_index); 
            ReactDOM.render(React.createElement(Danh_sach_heo, null), id_nhan_index);
            id_click = id_td_16 ;
    
                    
            }
                
                
            
        }
        
     
        
        // Báo cáo đóng chuồng heo thịt
        id_td_17.onclick = function () {
            
            if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
                {
                    ReactDOM.unmountComponentAtNode(id_nhan_index); 
                    _alert('Bạn phải đăng nhập trước đã') ;
                }
                else
                {
    
                    var dem_string = id_8.value;	
                    let check = dem_string.includes("td_");
                
                    if (
                    check ||
                    id_8.value == null || id_8.value == ""
                        ) 
                    {
                        ReactDOM.unmountComponentAtNode(id_nhan_index); 
                    return     _alert('Bạn phải chọn công ty để nhập dữ liệu hoặc lỗi chọn công ty có chứa *') 
                    }
    
    
                    ReactDOM.unmountComponentAtNode(id_nhan_index);  
                    ReactDOM.render(React.createElement(from_bao_cao_thang_thit, null), id_nhan_index);

                    id_click = id_td_17 ;
        
        
                }
                    
                 
            
        }
    
      
        
        // Báo cáo diễn biến chuồng heo thịt
        id_td_18.onclick = function () {
            
            if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
                {
                    ReactDOM.unmountComponentAtNode(id_nhan_index); 
                    _alert('Bạn phải đăng nhập trước đã')
                }
                else
                {
    
                    var dem_string = id_8.value;	
                    let check = dem_string.includes("td_");
                
                    if (
                    check ||
                    id_8.value == null || id_8.value == ""
                        ) 
                    {
                        ReactDOM.unmountComponentAtNode(id_nhan_index); 
                    return     _alert('Bạn phải chọn công ty để nhập dữ liệu hoặc lỗi chọn công ty có chứa *') 
                    }
    
    
                    ReactDOM.unmountComponentAtNode(id_nhan_index);  
                    ReactDOM.render(React.createElement(from_dien_bien_thit, null), id_nhan_index);
                    id_click = id_td_18 ;
        
        
                }
                 
            
        }
    
     
    
        // Cấu hình danh mục chuồng
        id_td_19.onclick = function () {
            
            if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
                {
                    ReactDOM.unmountComponentAtNode(id_nhan_index); 
                    _alert('Bạn phải đăng nhập trước đã')
                }
                else
                {
    
                    var dem_string = id_8.value;	
                    let check = dem_string.includes("td_");
                
                    if (
                    check ||
                    id_8.value == null || id_8.value == ""
                        ) 
                    {
                    ReactDOM.unmountComponentAtNode(id_nhan_index);   
                    return     _alert('Bạn phải chọn công ty để nhập dữ liệu hoặc lỗi chọn công ty có chứa *') 
                    }
    
                    ReactDOM.unmountComponentAtNode(id_nhan_index); 
    
                    ReactDOM.render( /*#__PURE__*/React.createElement(Setup_chuong, { value: { data: false } }), id_nhan_index);
                        id_click = id_td_19 ;
        
                }
                 
            
        }
    
     
        
        /*Quản lý user*/
        id_td_20.onclick = function () {
            
            if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
            {
                ReactDOM.unmountComponentAtNode(id_nhan_index); 
                _alert('Bạn phải đăng nhập trước đã')
            }
            else
            {
               
      
                ReactDOM.unmountComponentAtNode(id_nhan_index); 
    
                ReactDOM.render( /*#__PURE__*/React.createElement(Add_user, null), id_nhan_index);
                    id_click = id_td_20 ;
    
    
            }
                
                
            
        }

           /*Nhập heo thịt*/
           id_td_21.onclick = function () {
            
            if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
            {
                ReactDOM.unmountComponentAtNode(id_nhan_index); 
                _alert('Bạn phải đăng nhập trước đã')
            }
            else
            {
               
      
                ReactDOM.unmountComponentAtNode(id_nhan_index); 
    
                ReactDOM.render( /*#__PURE__*/React.createElement(Thit_nhap, null), id_nhan_index);

                    id_click = id_td_21 ;
    
    
            }
                
                
            
        }
        
        
      
        
        /*Khóa ngày sửa dữ liệu*/
        id_khoa_ngay_nhap_du_lieu.onclick = function () {
            
            if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
            {
                ReactDOM.unmountComponentAtNode(id_nhan_index); 
                _alert('Bạn phải đăng nhập trước đã')
            }
            else
            {
                
                var dem_string = id_8.value;	
            let check = dem_string.includes("td_");
            if (
                check 
                ) 
                {
                    ReactDOM.unmountComponentAtNode(id_nhan_index); 
                 return _alert('Để khóa ngày sửa dữ liệu phải chọn từng công ty riêng. Không được chọn công ty có chứa * ')  ;
                } 
                
             
    
            $.post("from_khoa_ngay_nhap_du_lieu.php", {post8:id_8.value }, function(data){
                    $("#id_nhan_index").html(data);	});	
            }
                
               
            
        }
        
      
    
    
    ; }
  else{ console.log(data); }

  });


 }

};

 
</script>
