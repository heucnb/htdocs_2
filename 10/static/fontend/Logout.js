function Logout() {
  
    
     function dang_xuat(event) {
       $.post("fuction_logout.php", { }, function(data){
 
 
        var select = document.getElementById("id_8") ;
        var select_length = select.length;
         
        
        for (var i=0; i <= select_length ; i++)
        {
          select.remove(select.i);
        }
        document.getElementById('id_td_1').innerHTML="Đăng nhập" ;	
        ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index')); 
    
        
         document.getElementById('id_them_user').style.display= 'none'; 
         document.getElementById('id_khoa_ngay_nhap_du_lieu').style.display= 'none'; 
                  
       
       });
       
     }
 
        useEffect(() => {    
 
           }, []);
     
     
     
 
 
     
       
     return (  <div className={`w-full gap-3 flex flex-col justify-center items-center`}>
      
         <div className={` w-3/4 flex items-center  font-medium`} > Đăng xuất </div>
         
         <div className={` _shadow rounded w-3/4  bg-sky-500 hover:bg-sky-700 h-8 flex items-center justify-center pl-2  font-medium `}  onClick={(event)=>{ dang_xuat() }} >  Đăng xuất </div>
         
 
      
 
        
       </div>
     );
 
    } ;
    