<!DOCTYPE html>
<html>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<head>

<style>
._shadow{
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
         }


.menu {
vertical-align:top;		
}
.menu table td{
color: black;	
border: 1px solid DarkGray;
background-color: AntiqueWhite;
height: 20px;
width: 170px; 
}




.with_bao_cao_tuan .menu table {
    border: 1px solid White;
color: black;	
background-color: White;
padding-right: 50px;
padding-bottom: 800px;
}
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung{
color: black;	
border: 2px solid White;
background-color: White;

}

.form_nhập_dữ_liệu {
padding:5px 0px 0px 20px;      /*padding phải đặt trước căn lề mới có tác dụng*/	
vertical-align:top;	
}
.form_nhập_dữ_liệu .fieldset_chung{
color: black;	
border: 2px solid #1E90FF;
background-color: LightBlue;

}
.form_nhập_dữ_liệu .fieldset_chung table td{
vertical-align:top;	
}

.form_nhập_dữ_liệu .fieldset_chung table td input{
border: 1px solid #1E90FF;
}

.form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu td{
vertical-align:top;	
border: 1px solid #1E90FF;
  font-size: 14px;
}

.fieldset_chung .table_nhận_dữ_liệu td{
vertical-align:top;	
border: 1px solid #1E90FF;
  font-size: 14px;
}
.danh_sach_dan_heo td{
vertical-align:top;	
border: 1px solid #1E90FF;
  font-size: 16px;
  background-color: White;
  height: 18px;
}


/*tô màu cho td nhận dữ liệu*/	
.form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct tr:nth-child(2),
.form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct tr:nth-child(9),
.form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct tr:nth-child(15),
.form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct tr:nth-child(27),
.form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct tr:nth-child(33)
{
color: red;	
}

/*tô màu cho td nhận dữ liệu*/	
.form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(2),
.form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(9),
.form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(17),
.form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(28),
.form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(34)
{
color: red;	
}

/*căn lề td nhận dữ liệu*/	

.form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table_ty_le_phoi td
{
 text-align: right;
}

/*tô màu cho td nhận dữ liệu*/	

.form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct tr:nth-child(1) td:nth-child(1),
.form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct tr:nth-child(1) td:nth-child(2),
.form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct tr:nth-child(1) td:nth-child(3),
.form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct tr:nth-child(1) td:nth-child(4),
.form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct tr:nth-child(1) td:nth-child(5),
.form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct tr:nth-child(1) td:nth-child(6),
.form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct tr:nth-child(1) td:nth-child(7),
.form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct tr:nth-child(1) td:nth-child(8),
.form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct tr:nth-child(1) td:nth-child(9),
.form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct tr:nth-child(1) td:nth-child(10),
.form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct tr:nth-child(1) td:nth-child(11),
.form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct tr:nth-child(1) td:nth-child(12),
.form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct tr:nth-child(1) td:nth-child(13),
.form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct tr:nth-child(1) td:nth-child(14)
{
    
  position: -webkit-sticky; /* Safari */  
 position: sticky;
  top: 0;
  background: LightBlue;  
}

/*tô màu cho td nhận dữ liệu*/	



.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(1) td:nth-child(2),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(1) td:nth-child(3),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(1) td:nth-child(4),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(1) td:nth-child(5),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(1) td:nth-child(6),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(1) td:nth-child(7),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(1) td:nth-child(8),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(1) td:nth-child(9),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(1) td:nth-child(10),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(1) td:nth-child(11),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(1) td:nth-child(12),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(1) td:nth-child(13),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(1) td:nth-child(14),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(1) td:nth-child(15),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(1) td:nth-child(16),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(1) td:nth-child(17),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(1) td:nth-child(18),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(1) td:nth-child(19),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(1) td:nth-child(20),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(1) td:nth-child(21),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(1) td:nth-child(22),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(1) td:nth-child(23),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(1) td:nth-child(24),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(1) td:nth-child(25),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(1) td:nth-child(26),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(1) td:nth-child(27),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(1) td:nth-child(28),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(1) td:nth-child(29),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(1) td:nth-child(30),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(1) td:nth-child(31),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(1) td:nth-child(32),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(1) td:nth-child(33),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(1) td:nth-child(34),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(1) td:nth-child(35),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(1) td:nth-child(36),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(1) td:nth-child(37),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(1) td:nth-child(38),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(1) td:nth-child(39),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(1) td:nth-child(40),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(1) td:nth-child(41),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(1) td:nth-child(42),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(1) td:nth-child(43),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(1) td:nth-child(44),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(1) td:nth-child(45),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(1) td:nth-child(46),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(1) td:nth-child(47),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(1) td:nth-child(48),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(1) td:nth-child(49),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(1) td:nth-child(50),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(1) td:nth-child(51),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(1) td:nth-child(52),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(1) td:nth-child(53),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(1) td:nth-child(54)

{
    
  position: -webkit-sticky; /* Safari */  
 position: sticky;
  top:65px;
  background: LightBlue;  
}


/*tô màu cho td nhận dữ liệu*/	



.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(2) td:nth-child(1),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(3) td:nth-child(1),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(4) td:nth-child(1),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(5) td:nth-child(1),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(6) td:nth-child(1),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(7) td:nth-child(1),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(8) td:nth-child(1),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(9) td:nth-child(1),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(10) td:nth-child(1),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(11) td:nth-child(1),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(12) td:nth-child(1),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(13) td:nth-child(1),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(14) td:nth-child(1),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(15) td:nth-child(1),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(16) td:nth-child(1),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(17) td:nth-child(1),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(18) td:nth-child(1),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(19) td:nth-child(1),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(20) td:nth-child(1),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(21) td:nth-child(1),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(22) td:nth-child(1),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(23) td:nth-child(1),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(24) td:nth-child(1),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(25) td:nth-child(1),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(26) td:nth-child(1),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(27) td:nth-child(1),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(28) td:nth-child(1),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(29) td:nth-child(1),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(30) td:nth-child(1),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(31) td:nth-child(1),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(32) td:nth-child(1),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(33) td:nth-child(1),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(34) td:nth-child(1),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(35) td:nth-child(1),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(36) td:nth-child(1),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(37) td:nth-child(1),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(38) td:nth-child(1),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(39) td:nth-child(1),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(40) td:nth-child(1),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(41) td:nth-child(1),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(42) td:nth-child(1),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(43) td:nth-child(1),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(44) td:nth-child(1),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(45) td:nth-child(1),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(46) td:nth-child(1),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(47) td:nth-child(1),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(48) td:nth-child(1),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(49) td:nth-child(1),
.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(50) td:nth-child(1)


{
position: -webkit-sticky; /* Safari */
 position: sticky;
    left: 200px;
  background: LightBlue;  
  z-index: 5;
}

.with_bao_cao_tuan .form_nhập_dữ_liệu .fieldset_chung table td table.table_nhận_dữ_liệu.table41ct2 tr:nth-child(1) td:nth-child(1)
{
 position: -webkit-sticky; /* Safari */   
 position: sticky;
    top: 65px;
     left: 200px;
    z-index: 6;
  background: LightBlue;  
}


#id_with_200

{

 position: relative;
   top: 20px; 
    
}



.with_bao_cao_tuan #table--index

{

 position: fixed;
   top: 25px; 
    left: 0px;
    z-index: 5;

}

.with_bao_cao_tuan .tra_bao_cao_tuan

{

 position: fixed;
   top: 25px; 
    left: 200px;
    z-index: 6;
   
 padding-bottom: 20px;
 background: White;  
 width: 100%;
}

.with_bao_cao_tuan .fieldset_chung
{
 
  
    padding-left: 170px;
   
}


.class_no
{

}


.form_nhập_dữ_liệu .fieldset_chung legend input {
 border-radius: 25px;
border: 1px solid #1E90FF;
background-color: AntiqueWhite;
font-size: 16px;
font-family: "Times New Roman";
font-style: italic ;
pointer-events: none;         /* Không cho click vào button thẻ input html  */
}


.form_nhập_dữ_liệu .fieldset_from_login{
color: black;	
border: 1px solid #1E90FF;	
background-color: LightBlue;
}

.form_nhập_dữ_liệu .fieldset_from_login td.center{
text-align: center;
}
.form_nhập_dữ_liệu .fieldset_from_login input{
border: 1px solid #1E90FF;
}



legend {
  padding: 5px  ;
}


input[type="date"] {
 width: 125px;  
}

input[type="text"] {
 width: 125px;  
}
input[type="password"] {
 width: 125px;  
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






.with_bao_cao_tuan .form_trang_chu {        /* đinh dạng báo cáo tuần*/
 width: 400%;
 
}




.with_bao_cao_thang .form_trang_chu {      /* đinh dạng báo cáo tháng*/
  width: 100%; 

}








.footer {

   border: 0px solid black;	 
  text-align: left;
  font-size: 10px;
  padding: 0px;
  background-color: DarkGray;
  color: black;
 position: fixed;
  bottom: 0;
  width: 100%;
  height: 20px;
  left: 0;
   z-index: 6;
}


.header {
  position: fixed;   
	
text-align: left;
padding:0px 0px 0px 0px;
background-color: #1E90FF;
color: white;
width: 100%;
height: 20px;
  left: 0;  
  top: 0;
  
  z-index: 6;
  
  
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
<!-- tải xong chạy script xong mới load dom tiếp -->
<script type="text/javascript" src="CDN/jquery-3.1.0.min.js"></script>
<script id="script_root" >
// load hết dom xong mới tải react
   var newScript_1 = document.createElement("script");
   var newScript_2 = document.createElement("script");
   var newScript_3 = document.createElement("script");
  

   var newScript_end = document.createElement("script");
   script_root.appendChild(newScript_1);
   script_root.appendChild(newScript_2);
   script_root.appendChild(newScript_3);

   script_root.appendChild(newScript_end);
let sum_script_dowload = 0;
// các file này tải bất đồng bộ
 newScript_1.src ="CDN/tailwindcss.com3.2.4.js";
 newScript_2.src = "CDN/react.development.min.js";
 newScript_3.src = "CDN/react-dom.development.min.js";

// // sau khi tải xong file trên mới tải file cuối index_ghep_file.js
 newScript_1.onload = function () { sum_script_dowload = sum_script_dowload + 1; if (sum_script_dowload === 3) { newScript_end.src = "10/static/index_ghep_file.js"; } };
 newScript_2.onload = function () { sum_script_dowload = sum_script_dowload + 1; if (sum_script_dowload === 3) { newScript_end.src = "10/static/index_ghep_file.js"; } };
 newScript_3.onload = function () { sum_script_dowload = sum_script_dowload + 1; if (sum_script_dowload === 3) { newScript_end.src = "10/static/index_ghep_file.js"; } };
 
 
</script>

</head>

<body  >
<div  id="root"></div>
<script>
<?php

// kiểm tra đăng nhập
// kết nối csdl	

include "setup/fuction_ket_noi_csdl.php";
// header("Content-type: text/html; charset=utf-8"); // thêm tiếng việt mới lấy được câu lệnh sql đã chạy
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
mysqli_set_charset($conn, 'UTF8'); // thêm tiếng việt mới lấy được câu lệnh sql đã chạy


// Check connection
if (isset($_COOKIE['username_cookie'])) {
	$sql = "select * from login where username='".$_COOKIE["username_cookie"]."'and password='".$_COOKIE["password_cookie"]."'";
	


$result = mysqli_query($conn, $sql);
$cout = mysqli_num_rows($result);
$arraymysql = [];

for ($x = 0; $x < $cout; $x++) {
    $arraymysql[$x] = mysqli_fetch_row($result) ;
  }
  
 

		if($cout==1)
		{
			//thêm kí tự @ vào trước dòng lệnh bị warning (để tắt warning đi).
			@ setcookie("username_cookie",$_COOKIE['username_cookie'], time() + (86400 * 5), "/");
			//thêm kí tự @ vào trước dòng lệnh bị warning (để tắt warning đi).
			@ setcookie("password_cookie", $_COOKIE['password_cookie'], time() + (86400 * 5), "/");	
	
		}
	}
?>
</script>

 <table  class="header"  > 		
	<tr>
	<td width = "20"  > <img  id="id_hide" src="show_hide.png" alt=""  height="15"  > </td>    <td  >Tập Đoàn DABACO Việt Nam</td>	<td  ><select id="id_8" > <td id="id_td_them_user" ><input id="id_them_user" type="button" value="Thêm người dùng"></td><td id="id_td_khoa_ngay_nhap_du_lieu" ><input id="id_khoa_ngay_nhap_du_lieu" type="button" value="Khóa ngày sủa dữ liệu"></td>
																																		</select></td>	
																																			
														
																	
																																			
	</tr>
</table>




 
 <div id="id_with_200">
 

<!--tạo table 1 dòng  2 cột  chứa table menu và dữ liệu trả về-->
<table id="table--menu" > 																					
	<tr>																				
		<td class="menu" >  <table  id="table--index"  > 
		                                    <tr  >
											<td id="id_td_0"  >Đăng ký</td>
											</tr>
											<tr  >
											<tr  >
											<td id="id_td_1"  >Đăng nhập</td>
											</tr>
											<tr  >
											<td id="id_td_2"  >Nhập Phối</td>
											</tr>
											<tr  >
											<td id="id_td_13"  >Nhập Đẻ</td>
											</tr>
											<tr  >
											<td id="id_td_3"  >Nhập Cai sữa</td>
											</tr>
											<tr  >
											<td id="id_td_4"  >Nhập heo vấn đề </td>
											</tr>
											<tr  >
											<td id="id_td_5"  >Nhập Heo nái chết loại</td>
											</tr>
											<tr  >
											<td id="id_td_6"  >Nhập Heo con chết loại</td>
											</tr>
											<tr  >
											<td id="id_td_7"  >Nhập Heo Hậu bị</td>
											</tr>
											<tr  >
											<td id="id_td_8"  >Nhập Heo Đực</td>
											</tr>
											<tr  >
											<td id="id_td_9"  >Theo dõi tỷ lệ phối</td>
											</tr>
											<tr  >
											<td class="style_bao_cao" id="id_td_10"  >Báo cáo theo ngày, tháng</td>
											</tr>
										
											<tr  >
											<td class="style_bao_cao" id="id_td_12"  >Báo cáo tháng theo phối</td>
											</tr>
											<tr  >
											<td  id="id_td_14"  >Tra lý lịch</td>
											</tr>
												<tr  >
											<td  id="id_td_15" >Chọn đực phối</td>
											</tr>
											<tr  >
											<td  id="id_td_16"  >Xem danh sách đàn heo</td>
											</tr>		
											<tr  >
											<td  id="id_td_17"  >test</td>
											</tr>		
											
											</table></td>
							
	
																												<td id="id_nhan--index" class="form_nhập_dữ_liệu" > </td>	
	</tr>																											
																																																
</table>	
	


</div>	

	
		

<!--thêm br để footer luôn ở dưới không chạm vào bảng, tùy vào chiều cao footer mà thêm nhiều hay ít br -->
</br></br>
<table class="footer"  > 	
	<tr >
	<td rowspan="2" width = "25" ><img src="logo2.jpg" alt=""  height="20"  ></td> <td  >35 Ly Thai To Street - Bac Ninh City - Bac Ninh Province - Viet Nam</td> 
	</tr>
	<tr>
																	  <td  > Tel: +84 (241) 3826077 - 3895111. Fax: +84 (241) 3826095 - 3821377</td>                                        
	</tr>	
</table>	
  


		
</body>
</html>
<script>

 
var arrayjavascript_1 = <?php if (isset($cout)) {echo json_encode($cout);	} else {echo json_encode("");}?>;
  
var arrayjavascript_2 = <?php if (isset($_COOKIE['username_cookie'])) { echo json_encode($_COOKIE['username_cookie']);} else {echo json_encode("");}?>;


	if( arrayjavascript_1 == 1)
	{
	 document.getElementById('id_td_1').innerHTML="Đăng nhập - " + arrayjavascript_2;
	 var arrayjavascript_3 = <?php if (isset($arraymysql)) {echo json_encode($arraymysql);	} else {echo json_encode("");}?>;  
	
    var array_option = new Array();
    // This will return an array with strings "1", "2", etc.
    array_option = arrayjavascript_3[0][2].split(",");
    array_option_ten_day_du = arrayjavascript_3[0][3].split(",");


	   var select = document.getElementById("id_8") ;
       for(var i = 0; i < array_option.length; i++)
             {
                 var option = document.createElement("OPTION"),
                 txt = document.createTextNode(array_option_ten_day_du[i]);
                 option.appendChild(txt);
                 
                option.setAttribute("value",array_option[i]);
          
           
                 select.insertBefore(option,select.lastChild);
             }
	 // kiểm tra xem có được quyền thêm người dùng và khóa dữ liệu không
	        var quyen_them_nguoi_dung_va_khoa_ngay_sua_du_lieu = arrayjavascript_3[0][4] ;
	        if(quyen_them_nguoi_dung_va_khoa_ngay_sua_du_lieu==1)
	        {
	         document.getElementById('id_them_user').style.display = 'inline';   
	         document.getElementById('id_khoa_ngay_nhap_du_lieu').style.display= 'inline';  
	        }
	        else
	        {
	           document.getElementById('id_them_user').style.display= 'none'; 
	            document.getElementById('id_khoa_ngay_nhap_du_lieu').style.display= 'none'; 
	        }
	

	}
/*đăng ký*/

$(document).ready(function(){
	$("#id_td_0").click(function(){
	document.getElementById("id_nhan--index").innerHTML =  "<progress ></progress>"; 		
		
	     document.getElementById("id_with_200").className = "class_no";
		$.post("from_dang_ky.php", {}, function(data){
			$("#id_nhan--index").html(data);	});
	
		
		
	
	});
});

	

/*đăng nhập*/

$(document).ready(function(){
	$("#id_td_1").click(function(){
	document.getElementById("id_nhan--index").innerHTML =  "<progress ></progress>"; 		
		if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
	{
		 document.getElementById("id_with_200").className = "class_no";
		$.post("from_login.php", {}, function(data){
			$("#id_nhan--index").html(data);	});
	}
	else
	{
	     document.getElementById("id_with_200").className = "class_no";
		$.post("from_logout.php", {}, function(data){
			$("#id_nhan--index").html(data);	});
	}
		
		
	
	});
});

/*phối*/
let from_phoi ; 	
$(document).ready(function(){
	$("#id_td_2").click(function(){
		
		
	if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
	{
	 document.getElementById('id_nhan--index').innerHTML = "Bạn phải đăng nhập trước đã";	
	}
	else
	{
	    var dem_string = $("#id_8").val();	
        var count_dem_string = dem_string.length;
	
	    if (
		count_dem_string > 50 ||
		$("#id_8").val() == null || $("#id_8").val() == ""
	    	) 
		{
        return     document.getElementById('id_nhan--index').innerHTML="Bạn phải chọn công ty để nhập dữ liệu hoặc lỗi chọn công ty có chứa *";
        }

	    
	    
	document.getElementById("id_with_200").className = "class_no";
	document.getElementById("id_nhan--index").innerHTML =  "<progress ></progress>"; 
		
	ReactDOM.render(React.createElement(Phoi, null), document.getElementById('id_nhan--index'));
		
		// if (from_phoi!== undefined) {
		// 	$("#id_nhan--index").html(from_phoi);
		// } else {
		// 	$.post("from_phoi.php", {post8:$("#id_8").val()}, function(data){ from_phoi = data  ; $("#id_nhan--index").html(from_phoi);	});
			
		// }	
	
		
	
	}
	
	
	});
});

/* đẻ*/
let from_de ; 
$(document).ready(function(){
	$("#id_td_13").click(function(){
		
		
	if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
	{
	 document.getElementById('id_nhan--index').innerHTML = "Bạn phải đăng nhập trước đã";	
	}
	else
	{
	    
	    var dem_string = $("#id_8").val();	
        var count_dem_string = dem_string.length;
	
	    if (
		count_dem_string > 50 ||
		$("#id_8").val() == null || $("#id_8").val() == ""
	    	) 
		{
        return     document.getElementById('id_nhan--index').innerHTML="Bạn phải chọn công ty để nhập dữ liệu hoặc lỗi chọn công ty có chứa *";
        }
	     document.getElementById("id_with_200").className = "class_no";
	document.getElementById("id_nhan--index").innerHTML =  "<progress ></progress>"; 
	if (from_de!== undefined) {
			$("#id_nhan--index").html(from_de);
		} else {
			$.post("from_de.php", {post8:$("#id_8").val()}, function(data){ from_de = data  ; $("#id_nhan--index").html(from_de);	});
			
		}



	}
	
	
	});
});

/* cai sữa*/
let from_cai_sua ; 
$(document).ready(function(){
	$("#id_td_3").click(function(){
		
		
	if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
	{
	 document.getElementById('id_nhan--index').innerHTML = "Bạn phải đăng nhập trước đã";	
	}
	else
	{
	    
	    var dem_string = $("#id_8").val();	
        var count_dem_string = dem_string.length;
	
	    if (
		count_dem_string > 50 ||
		$("#id_8").val() == null || $("#id_8").val() == ""
	    	) 
		{
        return     document.getElementById('id_nhan--index').innerHTML="Bạn phải chọn công ty để nhập dữ liệu hoặc lỗi chọn công ty có chứa *";
        }
	     document.getElementById("id_with_200").className = "class_no";
		document.getElementById("id_nhan--index").innerHTML =  "<progress ></progress>"; 	
		if (from_cai_sua!== undefined) {
			$("#id_nhan--index").html(from_cai_sua);
		} else {
			$.post("from_cai_sua.php", {post8:$("#id_8").val()}, function(data){ from_cai_sua = data  ; $("#id_nhan--index").html(from_cai_sua);	});
			
		}	

	
	}
	
	
	});
});


/* heo vấn đề*/

$(document).ready(function(){
	$("#id_td_4").click(function(){
		
		
	if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
	{
	 document.getElementById('id_nhan--index').innerHTML = "Bạn phải đăng nhập trước đã";	
	}
	else
	{
	    
	    var dem_string = $("#id_8").val();	
        var count_dem_string = dem_string.length;
	
	    if (
		count_dem_string > 50 ||
		$("#id_8").val() == null || $("#id_8").val() == ""
	    	) 
		{
        return     document.getElementById('id_nhan--index').innerHTML="Bạn phải chọn công ty để nhập dữ liệu hoặc lỗi chọn công ty có chứa *";
        }
	     document.getElementById("id_with_200").className = "class_no";
	document.getElementById("id_nhan--index").innerHTML =  "<progress ></progress>"; 	
	$.post("from_heo_van_de.php", {post8:$("#id_8").val()}, function(data){
		$("#id_nhan--index").html(data);	});
	}
	
	
	});
});

/* heo nái chết loại*/

$(document).ready(function(){
	$("#id_td_5").click(function(){
		
		
	if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
	{
	 document.getElementById('id_nhan--index').innerHTML = "Bạn phải đăng nhập trước đã";	
	}
	else
	{
	    
	    var dem_string = $("#id_8").val();	
        var count_dem_string = dem_string.length;
	
	    if (
		count_dem_string > 50 ||
		$("#id_8").val() == null || $("#id_8").val() == ""
	    	) 
		{
        return     document.getElementById('id_nhan--index').innerHTML="Bạn phải chọn công ty để nhập dữ liệu hoặc lỗi chọn công ty có chứa *";
        }
	     document.getElementById("id_with_200").className = "class_no";
document.getElementById("id_nhan--index").innerHTML =  "<progress ></progress>"; 			
	$.post("from_heo_nai_chet_loai.php", {post8:$("#id_8").val()}, function(data){
		$("#id_nhan--index").html(data);	});
	}
	
	
	});
});

/* heo con chết loại*/

$(document).ready(function(){
	$("#id_td_6").click(function(){
		
		
	if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
	{
	 document.getElementById('id_nhan--index').innerHTML = "Bạn phải đăng nhập trước đã";	
	}
	else
	{
	    
	    var dem_string = $("#id_8").val();	
        var count_dem_string = dem_string.length;
	
	    if (
		count_dem_string > 50 ||
		$("#id_8").val() == null || $("#id_8").val() == ""
	    	) 
		{
        return     document.getElementById('id_nhan--index').innerHTML="Bạn phải chọn công ty để nhập dữ liệu hoặc lỗi chọn công ty có chứa *";
        }
	     document.getElementById("id_with_200").className = "class_no";
	document.getElementById("id_nhan--index").innerHTML =  "<progress ></progress>"; 	
	$.post("from_heo_con_chet.php", {post8:$("#id_8").val()}, function(data){
		$("#id_nhan--index").html(data);	});
	}
	
	
	});
});


/* hậu bị*/

$(document).ready(function(){
	$("#id_td_7").click(function(){
		
		
	if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
	{
	 document.getElementById('id_nhan--index').innerHTML = "Bạn phải đăng nhập trước đã";	
	}
	else
	{
	    
	    var dem_string = $("#id_8").val();	
        var count_dem_string = dem_string.length;
	
	    if (
		count_dem_string > 50 ||
		$("#id_8").val() == null || $("#id_8").val() == ""
	    	) 
		{
        return     document.getElementById('id_nhan--index').innerHTML="Bạn phải chọn công ty để nhập dữ liệu hoặc lỗi chọn công ty có chứa *";
        }
	     document.getElementById("id_with_200").className = "class_no";
	document.getElementById("id_nhan--index").innerHTML =  "<progress ></progress>"; 	
	$.post("from_hau_bi.php", {post8:$("#id_8").val()}, function(data){
		$("#id_nhan--index").html(data);	});
	}
	
	
	});
});


/* đực */

$(document).ready(function(){
	$("#id_td_8").click(function(){
		
		
	if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
	{
	 document.getElementById('id_nhan--index').innerHTML = "Bạn phải đăng nhập trước đã";	
	}
	else
	{
	    
	    var dem_string = $("#id_8").val();	
        var count_dem_string = dem_string.length;
	
	    if (
		count_dem_string > 50 ||
		$("#id_8").val() == null || $("#id_8").val() == ""
	    	) 
		{
        return     document.getElementById('id_nhan--index').innerHTML="Bạn phải chọn công ty để nhập dữ liệu hoặc lỗi chọn công ty có chứa *";
        }
	     document.getElementById("id_with_200").className = "class_no";
document.getElementById("id_nhan--index").innerHTML =  "<progress ></progress>"; 			
	$.post("from_heo_duc.php", {post8:$("#id_8").val()}, function(data){
		$("#id_nhan--index").html(data);	});
	}
	
	
	});
});




/*báo cáo tháng*/

$(document).ready(function(){
	$("#id_td_10").click(function(){
		
		if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
	{
	 document.getElementById('id_nhan--index').innerHTML = "Bạn phải đăng nhập trước đã";	
	}
	else
	{
	     document.getElementById("id_with_200").className = "class_no";
document.getElementById("id_nhan--index").innerHTML =  "<progress ></progress>"; 			
	$.post("from_bao_cao_thang.php", {}, function(data){
			$("#id_nhan--index").html(data);	});
	}
		
		
	
	});
});

/*báo cáo tháng phối*/

$(document).ready(function(){
	$("#id_td_12").click(function(){
		
		if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
	{
	 document.getElementById('id_nhan--index').innerHTML = "Bạn phải đăng nhập trước đã";	
	}
	else
	{
	     document.getElementById("id_with_200").className = "class_no";
	document.getElementById("id_nhan--index").innerHTML =  "<progress ></progress>"; 	
	$.post("from_bao_cao_tinh_theo_phoi.php", {}, function(data){
			$("#id_nhan--index").html(data);	});
			
			
			
	}
		
		
	
	});
});







/*theo dõi tỷ lệ phối*/

$(document).ready(function(){
	$("#id_td_9").click(function(){
		
		if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
	{
	 document.getElementById('id_nhan--index').innerHTML = "Bạn phải đăng nhập trước đã";	
	}
	else
	{
	     document.getElementById("id_with_200").className = "class_no";
	document.getElementById("id_nhan--index").innerHTML =  "<progress ></progress>"; 	
	$.post("from_theo_doi_ty_le_phoi.php", {}, function(data){
			$("#id_nhan--index").html(data);	});
			
			
			
	}
		
		
	
	});
});

/*tra lý lịch*/

$(document).ready(function(){
	$("#id_td_14").click(function(){
		
		if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
	{
	 document.getElementById('id_nhan--index').innerHTML = "Bạn phải đăng nhập trước đã";	
	}
	else
	{
	     document.getElementById("id_with_200").className = "class_no";
	document.getElementById("id_nhan--index").innerHTML =  "<progress ></progress>"; 	
	$.post("from_tra_ly_lich.php", {}, function(data){
			$("#id_nhan--index").html(data);	});
			
			
			
	}
		
		
	
	});
});

/*chọn được phối*/

$(document).ready(function(){
	$("#id_td_15").click(function(){
		
		if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
	{
	 document.getElementById('id_nhan--index').innerHTML = "Bạn phải đăng nhập trước đã";	
	}
	else
	{

//--------------------------- truyền biến sang app script theo phương pháp doGet	    
var select_id_8 = document.getElementById('id_8'); 
// lấy text của option của select html
var trai = select_id_8.options[select_id_8.selectedIndex].text;   
var ma_trai = select_id_8.value ;	    
const nextURL = 'https://script.google.com/macros/s/AKfycbwjx_VZLp4bGa_2jBdZCkEcNrbevvXzqfuSnEDoOk0/dev?'+ trai+'_-_' +ma_trai;

// This will create a new entry in the browser's history, reloading afterwards
window.location.href = nextURL;
	}
		
		
	
	});
});


/*Xem danh sách đàn nái, đực*/

$(document).ready(function(){
	$("#id_td_16").click(function(){
		
		if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
	{
	 document.getElementById('id_nhan--index').innerHTML = "Bạn phải đăng nhập trước đã";	
	}
	else
	{
	     document.getElementById("id_with_200").className = "class_no";
	document.getElementById("id_nhan--index").innerHTML =  "<progress ></progress>"; 	
	$.post("from_xem_danh_sach_dan_nai_duc.php", {}, function(data){
			$("#id_nhan--index").html(data);	});	
	}
		
		
	
	});
});


$(document).ready(function(){
	$("#id_td_17").click(function(){

		// $.post("10.php", {}, function(data){
		// 	$("#id_nhan--index").html(data);	});	

	ReactDOM.render(React.createElement(Table_hieu_2,  null), document.getElementById('id_nhan--index'));		

		
	// ReactDOM.render(React.createElement(Table,  { value: { data :  [[1,2,3,4,5,6],[10,11,12,13,14,15,16]]}}), document.getElementById('id_nhan--index'));
		
		
	
	});
});


/*Thêm user*/

$(document).ready(function(){
	$("#id_them_user").click(function(){
		
		if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
	{
	 document.getElementById('id_nhan--index').innerHTML = "Bạn phải đăng nhập trước đã";	
	}
	else
	{
	     document.getElementById("id_with_200").className = "class_no";
	document.getElementById("id_nhan--index").innerHTML =  "<progress ></progress>"; 	
	$.post("from_them_user.php", {}, function(data){
			$("#id_nhan--index").html(data);	});	
	}
		
		
	
	});
});

/*Khóa ngày sửa dữ liệu*/

$(document).ready(function(){
	$("#id_khoa_ngay_nhap_du_lieu").click(function(){
		
		if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
	{
	 document.getElementById('id_nhan--index').innerHTML = "Bạn phải đăng nhập trước đã";	
	}
	else
	{
	    var dem_string = $("#id_8").val();	
	var count_dem_string = dem_string.length;
	if (
		count_dem_string > 50 
		) 
		{
         return   document.getElementById('id_nhan--index').innerHTML="Để khóa ngày sửa dữ liệu phải chọn từng công ty riêng. Không được chọn công ty có chứa * ";
        } 
	    
	     document.getElementById("id_with_200").className = "class_no";
	document.getElementById("id_nhan--index").innerHTML =  "<progress ></progress>"; 	
	$.post("from_khoa_ngay_nhap_du_lieu.php", {post8:$("#id_8").val() }, function(data){
			$("#id_nhan--index").html(data);	});	
	}
		
		
	
	});
});


/*show_hide thanh menu web*/
var show_hide = 1 ;
$(document).ready(function(){
	$("#id_hide").click(function(){
		
	if(show_hide==1)
	{
		 document.getElementById('table--index').style.display= 'none';
		 show_hide = 0;
	}
	else
	{
		 document.getElementById('table--index').style.display= 'inline';
		 show_hide = 1;
	}
	
		 
	});
});



</script>