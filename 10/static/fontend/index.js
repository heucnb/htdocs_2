
const { useState , useRef, useEffect  } = React ;
let path_name = window.location.pathname ; 
let font_size = 16;
let isMobile = window.matchMedia("only screen and (max-width: 480px)").matches;



if (isMobile) {font_size = 14 } ;
function tb(string_pc, string_mobi) {
    if (isMobile) {
        return string_mobi ; 
    } else {
        return string_pc ; 
    }
   
    
}
ReactDOM.render(React.createElement(App, null), document.getElementById('root'));


// Router();



