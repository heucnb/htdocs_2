function App(props) {
  useEffect(() => {}, []);
  return /*#__PURE__*/React.createElement("div", {
    id: "id_app"
  }, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement("div", {
    id: "id_header_mobi",
    className: " z-50 "
  }, "   "), /*#__PURE__*/React.createElement(Form_nhap, null));
}
;
function Form_nhap() {
  useEffect(() => {
    $.post("fuction_product.php", {
      post8: ""
    }, function (data) {
      let width_table = document.getElementById('id_nhan').getBoundingClientRect().width;
      let height_table = document.getElementById('id_nhan').getBoundingClientRect().height;
      data = data.trim();
      if (data.slice(0, 8) === '<' + 'script>') {
        let data_1 = data.slice(8, -9);
        eval(data_1);
        return ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));
      }
      console.log(JSON.parse(data));
      ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan'));
      ReactDOM.render(React.createElement(Img_product, {
        value: {
          data: JSON.parse(data)
        }
      }), document.getElementById('id_nhan'));
    });
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    id: "id_main",
    className: `grid  grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-10 items-start  `
  }, /*#__PURE__*/React.createElement("div", {
    className: ` grid-cols-1 `
  }, /*#__PURE__*/React.createElement("div", {
    className: ` mt-2  w-10 `
  }, " --- "), /*#__PURE__*/React.createElement("div", {
    className: ` hidden sm:grid sm:grid-cols-1  sm:visible   `
  }, /*#__PURE__*/React.createElement("div", {
    className: ` mt-2   `
  }, " Ngu\u1ED3n nh\u1EADp: "), /*#__PURE__*/React.createElement("input", {
    id: "id_ma_chung_tu_nhap"
  })), /*#__PURE__*/React.createElement("div", {
    className: ` mt-2 w-10  `
  }, " --- ")), /*#__PURE__*/React.createElement("div", {
    id: "id_nhan",
    className: ` text-sm grow ml-1 `
  }));
}
; // tính tổng bỏ qua dòng đầu tiên
function sum(array) {
  let total = 0;
  for (var i = 1; i < array.length; i++) total += array[i];
  return total;
}
function getCookie(name) {
  // Split cookie string and get all individual name=value pairs in an array
  var cookieArr = document.cookie.split(";");

  // Loop through the array elements
  for (var i = 0; i < cookieArr.length; i++) {
    var cookiePair = cookieArr[i].split("=");

    /* Removing whitespace at the beginning of the cookie name
    and compare it with the given string */
    if (name == cookiePair[0].trim()) {
      // Decode the cookie value and return
      return decodeURIComponent(cookiePair[1]);
    }
  }

  // Return null if not found
  return null;
}

//-------------------------------------------------------------------------------------------------------------
function path_match(string) {
  if (string.slice(-1) === '/') {
    return string.slice(0, -1);
  } else {
    return string;
  }
}

// convert string to obj: JSON.parse(string_obj);  string to array: string_aray.split(' |_| ');
// vd obj :  JSON.stringify(obj); number:  number.toString(); array: array.join(' |_| '); // 'Wind |_| Water'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function select_icon_from_file_name(file_name) {
  extension = file_name.slice((Math.max(0, file_name.lastIndexOf(".")) || Infinity) + 1);
  switch (extension) {
    case '':
      return "/node/static/SVG/folder.svg";
    case 'jpg':
      return "/node/static/SVG/file_image.svg";
    case 'png':
      return "/node/static/SVG/file_image.svg";
    case 'git':
      return "/node/static/SVG/file_image.svg";
    case 'js':
      return "/node/static/SVG/file_js.svg";
    case 'json':
      return "/node/static/SVG/file_json.svg";
    default:
      return "/node/static/SVG/file_document.svg";
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function convert_text_to_pixcel(text, font_size) {
  return text.length * (font_size / 2);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function convert_file_name_to_type(file_name) {
  // (Math.max(0, file_name.lastIndexOf(".")) trả về 0 
  // thì (Math.max(0, file_name.lastIndexOf(".")) || Infinity  sẽ là 0 || Infinity 
  // do 0 Logical operators sẽ convert thành False nên False || Infinity  sẽ trả về Infinity
  // chú ý tên file là .sdgdf sẽ trả về "" do file_name.lastIndexOf(".") trả về 0
  let extension = file_name.slice((Math.max(0, file_name.lastIndexOf(".")) || Infinity) + 1);
  let array_type = ["text/plain", "text/html", " text/csv", "text/pdf ", " video/mp4", " video/mpeg", "application/zip", "application/msword", " application/vnd.ms-excel", " image/jpg", " image/png"];
  let array_extension = ["text", "html", "csv", "pdf", "mp4", "mpeg", "zip", "doc", "xlsx", "jpg", "png"];
  // nếu  tìm thấy thì trả về  type phù hợp        
  for (let index = 0, len = array_extension.length; index < len; index++) {
    if (array_extension[index] === extension) {
      return array_type[index];
    }
  }
  // nếu không tìm thấy thì trả về  "text/plain"
  return array_type[0];
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// trên Dom dùng onMouseOver để lắng nghe
function hover(event, object_style, object_style_leave, dom) {
  Object.assign(dom.style, object_style);
  dom.onmouseleave = function (event) {
    Object.assign(dom.style, object_style_leave);
  };
}

///////////////////////////////////////////////////////////////////////////////////////////////////////

function _alert(componet_react) {
  let _div = document.createElement("div");
  // getElementsByTagName sẽ lấy ra một mảng tag name phù hợp không giống by id lấy ra 1 cái 
  let body = document.getElementsByTagName("body");
  body[0].appendChild(_div);
  _div.style.zIndex = "10000";
  function Alert() {
    let ref_thoat = useRef(null);
    useEffect(() => {
      ref_thoat.current.focus();
    }, []);
    return /*#__PURE__*/React.createElement("div", {
      className: 'absolute flex  w-full h-full top-0 left-0 bg-slate-400 bg-opacity-50',
      style: {
        zIndex: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: 'flex flex-wrap absolute rounded border border-solid border-slate-400 bg-amber-400  _shadow ',
      style: {
        top: '10%',
        left: '30%',
        zIndex: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: `mx-5 mt-2 w-full`
    }, " ", componet_react, " "), /*#__PURE__*/React.createElement("div", {
      className: ' my-2 w-full flex justify-end'
    }, /*#__PURE__*/React.createElement("input", {
      type: "button",
      value: "Tho\xE1t",
      ref: ref_thoat,
      className: 'mx-10  text-white rounded w-16 flex justify-center bg-sky-500 hover:bg-sky-700 _shadow',
      onClick: () => {
        ReactDOM.unmountComponentAtNode(_div);
        _div.remove();
      }
    }))));
  }
  return ReactDOM.render( /*#__PURE__*/React.createElement(Alert, null), _div);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//****** childNodes[0] lấy text trong div chú ý remove space ********
// remove space trong div dom mới hoạt động đúng được
//sự khác nhau giữa children và childNodes. Kết quả trả về của childNodes là một NodeList, object này chứa tất cả những thứ như elements, text và comments, space trong div ở file code của ta chứ không phải web hiển thị
function get_selection(dom, begin, end) {
  let range = new Range();
  range.setStart(dom.childNodes[0], begin);
  range.setEnd(dom.childNodes[0], end);
  document.getSelection().removeAllRanges();
  document.getSelection().addRange(range);
}

//--------------------------------------------------------------------------------------
function google_login(client_id, in_dom) {
  return new Promise(function (resolve, reject) {
    var newScript = document.createElement("script");
    in_dom.appendChild(newScript);
    newScript.src = "/node/static/CDN/accounts.google.com_gsi_client.js";
    // khi tải xong file thì chạy function sau
    newScript.onload = function () {
      function handleCredentialResponse(response) {
        function parseJwt(token) {
          var base64Url = token.split('.')[1];
          var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
          var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          }).join(''));
          return JSON.parse(jsonPayload);
        }
        ;
        resolve(parseJwt(response.credential));
      }
      google.accounts.id.initialize({
        client_id: client_id,
        callback: handleCredentialResponse
      });
      google.accounts.id.renderButton(in_dom, {
        theme: "outline",
        size: "large"
      } // customization attributes
      );

      google.accounts.id.prompt(); // also display the One Tap dialog
    };
  });
}

//-------------------------------------------------------------------------------------

function Select_thang() {
  return /*#__PURE__*/React.createElement("select", {
    style: {
      color: "black"
    },
    className: `focus:outline-0 w-full  `
  }, /*#__PURE__*/React.createElement("option", {
    style: {
      color: "black"
    },
    value: ""
  }, "Tra theo th\xE1ng"), /*#__PURE__*/React.createElement("option", {
    style: {
      color: "black"
    },
    value: "00-01"
  }, "Th\xE1ng 1"), /*#__PURE__*/React.createElement("option", {
    style: {
      color: "black"
    },
    value: "00-02"
  }, "Th\xE1ng 2"), /*#__PURE__*/React.createElement("option", {
    style: {
      color: "black"
    },
    value: "00-03"
  }, "Th\xE1ng 3"), /*#__PURE__*/React.createElement("option", {
    style: {
      color: "black"
    },
    value: "00-04"
  }, "Th\xE1ng 4"), /*#__PURE__*/React.createElement("option", {
    style: {
      color: "black"
    },
    value: "00-05"
  }, "Th\xE1ng 5"), /*#__PURE__*/React.createElement("option", {
    style: {
      color: "black"
    },
    value: "00-06"
  }, "Th\xE1ng 6"), /*#__PURE__*/React.createElement("option", {
    style: {
      color: "black"
    },
    value: "00-07"
  }, "Th\xE1ng 7"), /*#__PURE__*/React.createElement("option", {
    style: {
      color: "black"
    },
    value: "00-08"
  }, "Th\xE1ng 8"), /*#__PURE__*/React.createElement("option", {
    style: {
      color: "black"
    },
    value: "00-09"
  }, "Th\xE1ng 9"), /*#__PURE__*/React.createElement("option", {
    style: {
      color: "black"
    },
    value: "00-10"
  }, "Th\xE1ng 10"), /*#__PURE__*/React.createElement("option", {
    style: {
      color: "black"
    },
    value: "00-11"
  }, "Th\xE1ng 11"), /*#__PURE__*/React.createElement("option", {
    style: {
      color: "black"
    },
    value: "00-12"
  }, "Th\xE1ng 12"));
}
//-------------------------------------------------------------------------------------

function Select_nam() {
  let ref_select_year = useRef(null);
  useEffect(() => {
    let n = new Date().getFullYear();
    ref_select_year.current.children[0].innerHTML = n;
    ref_select_year.current.children[0].value = n;
    ref_select_year.current.onclick = function () {
      for (let index = 0; index < 20; index++) {
        ref_select_year.current.children[index].innerHTML = n - index;
        ref_select_year.current.children[index].value = n - index;
      }
    };
  }, []);
  return /*#__PURE__*/React.createElement("select", {
    ref: ref_select_year,
    style: {
      color: "black"
    },
    className: `focus:outline-0 w-full  `
  }, /*#__PURE__*/React.createElement("option", {
    style: {
      color: "black"
    },
    value: "1"
  }, "11"), /*#__PURE__*/React.createElement("option", {
    style: {
      color: "black"
    },
    value: "2"
  }, "12"), /*#__PURE__*/React.createElement("option", {
    style: {
      color: "black"
    },
    value: "3"
  }, "13"), /*#__PURE__*/React.createElement("option", {
    style: {
      color: "black"
    },
    value: ""
  }, "11"), /*#__PURE__*/React.createElement("option", {
    style: {
      color: "black"
    },
    value: ""
  }, "11"), /*#__PURE__*/React.createElement("option", {
    style: {
      color: "black"
    },
    value: ""
  }, "11"), /*#__PURE__*/React.createElement("option", {
    style: {
      color: "black"
    },
    value: ""
  }, "11"), /*#__PURE__*/React.createElement("option", {
    style: {
      color: "black"
    },
    value: ""
  }, "11"), /*#__PURE__*/React.createElement("option", {
    style: {
      color: "black"
    },
    value: ""
  }, "11"), /*#__PURE__*/React.createElement("option", {
    style: {
      color: "black"
    },
    value: ""
  }, "11"), /*#__PURE__*/React.createElement("option", {
    style: {
      color: "black"
    },
    value: ""
  }, "11"), /*#__PURE__*/React.createElement("option", {
    style: {
      color: "black"
    },
    value: ""
  }, "11"), /*#__PURE__*/React.createElement("option", {
    style: {
      color: "black"
    },
    value: ""
  }, "11"), /*#__PURE__*/React.createElement("option", {
    style: {
      color: "black"
    },
    value: ""
  }, "11"), /*#__PURE__*/React.createElement("option", {
    style: {
      color: "black"
    },
    value: ""
  }, "11"), /*#__PURE__*/React.createElement("option", {
    style: {
      color: "black"
    },
    value: ""
  }, "11"), /*#__PURE__*/React.createElement("option", {
    style: {
      color: "black"
    },
    value: ""
  }, "11"), /*#__PURE__*/React.createElement("option", {
    style: {
      color: "black"
    },
    value: ""
  }, "11"), /*#__PURE__*/React.createElement("option", {
    style: {
      color: "black"
    },
    value: ""
  }, "11"), /*#__PURE__*/React.createElement("option", {
    style: {
      color: "black"
    },
    value: ""
  }, "11"));
}

//--------------------------------------------------------------------------------------------------
function Select_tuan() {
  return /*#__PURE__*/React.createElement("select", {
    style: {
      color: "black"
    },
    className: ` w-full focus:outline-0 `
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    style: {
      color: "black"
    }
  }, "Tra theo tu\u1EA7n"), /*#__PURE__*/React.createElement("option", {
    value: "01-00",
    style: {
      color: "black"
    }
  }, "Tu\u1EA7n 1"), /*#__PURE__*/React.createElement("option", {
    value: "02-00",
    style: {
      color: "black"
    }
  }, "Tu\u1EA7n 2"), /*#__PURE__*/React.createElement("option", {
    value: "03-00",
    style: {
      color: "black"
    }
  }, "Tu\u1EA7n 3"), /*#__PURE__*/React.createElement("option", {
    value: "04-00",
    style: {
      color: "black"
    }
  }, "Tu\u1EA7n 4"), /*#__PURE__*/React.createElement("option", {
    value: "05-00",
    style: {
      color: "black"
    }
  }, "Tu\u1EA7n 5"), /*#__PURE__*/React.createElement("option", {
    value: "06-00",
    style: {
      color: "black"
    }
  }, "Tu\u1EA7n 6"), /*#__PURE__*/React.createElement("option", {
    value: "07-00",
    style: {
      color: "black"
    }
  }, "Tu\u1EA7n 7"), /*#__PURE__*/React.createElement("option", {
    value: "08-00",
    style: {
      color: "black"
    }
  }, "Tu\u1EA7n 8"), /*#__PURE__*/React.createElement("option", {
    value: "09-00",
    style: {
      color: "black"
    }
  }, "Tu\u1EA7n 9"), /*#__PURE__*/React.createElement("option", {
    value: "10-00",
    style: {
      color: "black"
    }
  }, "Tu\u1EA7n 10"), /*#__PURE__*/React.createElement("option", {
    value: "11-00",
    style: {
      color: "black"
    }
  }, "Tu\u1EA7n 11"), /*#__PURE__*/React.createElement("option", {
    value: "12-00",
    style: {
      color: "black"
    }
  }, "Tu\u1EA7n 12"), /*#__PURE__*/React.createElement("option", {
    value: "13-00",
    style: {
      color: "black"
    }
  }, "Tu\u1EA7n 13"), /*#__PURE__*/React.createElement("option", {
    value: "14-00",
    style: {
      color: "black"
    }
  }, "Tu\u1EA7n 14"), /*#__PURE__*/React.createElement("option", {
    value: "15-00",
    style: {
      color: "black"
    }
  }, "Tu\u1EA7n 15"), /*#__PURE__*/React.createElement("option", {
    value: "16-00",
    style: {
      color: "black"
    }
  }, "Tu\u1EA7n 16"), /*#__PURE__*/React.createElement("option", {
    value: "17-00",
    style: {
      color: "black"
    }
  }, "Tu\u1EA7n 17"), /*#__PURE__*/React.createElement("option", {
    value: "18-00",
    style: {
      color: "black"
    }
  }, "Tu\u1EA7n 18"), /*#__PURE__*/React.createElement("option", {
    value: "19-00",
    style: {
      color: "black"
    }
  }, "Tu\u1EA7n 19"), /*#__PURE__*/React.createElement("option", {
    value: "20-00",
    style: {
      color: "black"
    }
  }, "Tu\u1EA7n 20"), /*#__PURE__*/React.createElement("option", {
    value: "21-00",
    style: {
      color: "black"
    }
  }, "Tu\u1EA7n 21"), /*#__PURE__*/React.createElement("option", {
    value: "22-00",
    style: {
      color: "black"
    }
  }, "Tu\u1EA7n 22"), /*#__PURE__*/React.createElement("option", {
    value: "23-00",
    style: {
      color: "black"
    }
  }, "Tu\u1EA7n 23"), /*#__PURE__*/React.createElement("option", {
    value: "24-00",
    style: {
      color: "black"
    }
  }, "Tu\u1EA7n 24"), /*#__PURE__*/React.createElement("option", {
    value: "25-00",
    style: {
      color: "black"
    }
  }, "Tu\u1EA7n 25"), /*#__PURE__*/React.createElement("option", {
    value: "26-00",
    style: {
      color: "black"
    }
  }, "Tu\u1EA7n 26"), /*#__PURE__*/React.createElement("option", {
    value: "27-00",
    style: {
      color: "black"
    }
  }, "Tu\u1EA7n 27"), /*#__PURE__*/React.createElement("option", {
    value: "28-00",
    style: {
      color: "black"
    }
  }, "Tu\u1EA7n 28"), /*#__PURE__*/React.createElement("option", {
    value: "29-00",
    style: {
      color: "black"
    }
  }, "Tu\u1EA7n 29"), /*#__PURE__*/React.createElement("option", {
    value: "30-00",
    style: {
      color: "black"
    }
  }, "Tu\u1EA7n 30"), /*#__PURE__*/React.createElement("option", {
    value: "31-00",
    style: {
      color: "black"
    }
  }, "Tu\u1EA7n 31"), /*#__PURE__*/React.createElement("option", {
    value: "32-00",
    style: {
      color: "black"
    }
  }, "Tu\u1EA7n 32"), /*#__PURE__*/React.createElement("option", {
    value: "33-00",
    style: {
      color: "black"
    }
  }, "Tu\u1EA7n 33"), /*#__PURE__*/React.createElement("option", {
    value: "34-00",
    style: {
      color: "black"
    }
  }, "Tu\u1EA7n 34"), /*#__PURE__*/React.createElement("option", {
    value: "35-00",
    style: {
      color: "black"
    }
  }, "Tu\u1EA7n 35"), /*#__PURE__*/React.createElement("option", {
    value: "36-00",
    style: {
      color: "black"
    }
  }, "Tu\u1EA7n 36"), /*#__PURE__*/React.createElement("option", {
    value: "37-00",
    style: {
      color: "black"
    }
  }, "Tu\u1EA7n 37"), /*#__PURE__*/React.createElement("option", {
    value: "38-00",
    style: {
      color: "black"
    }
  }, "Tu\u1EA7n 38"), /*#__PURE__*/React.createElement("option", {
    value: "39-00",
    style: {
      color: "black"
    }
  }, "Tu\u1EA7n 39"), /*#__PURE__*/React.createElement("option", {
    value: "40-00",
    style: {
      color: "black"
    }
  }, "Tu\u1EA7n 40"), /*#__PURE__*/React.createElement("option", {
    value: "41-00",
    style: {
      color: "black"
    }
  }, "Tu\u1EA7n 41"), /*#__PURE__*/React.createElement("option", {
    value: "42-00",
    style: {
      color: "black"
    }
  }, "Tu\u1EA7n 42"), /*#__PURE__*/React.createElement("option", {
    value: "43-00",
    style: {
      color: "black"
    }
  }, "Tu\u1EA7n 43"), /*#__PURE__*/React.createElement("option", {
    value: "44-00",
    style: {
      color: "black"
    }
  }, "Tu\u1EA7n 44"), /*#__PURE__*/React.createElement("option", {
    value: "45-00",
    style: {
      color: "black"
    }
  }, "Tu\u1EA7n 45"), /*#__PURE__*/React.createElement("option", {
    value: "46-00",
    style: {
      color: "black"
    }
  }, "Tu\u1EA7n 46"), /*#__PURE__*/React.createElement("option", {
    value: "47-00",
    style: {
      color: "black"
    }
  }, "Tu\u1EA7n 47"), /*#__PURE__*/React.createElement("option", {
    value: "48-00",
    style: {
      color: "black"
    }
  }, "Tu\u1EA7n 48"), /*#__PURE__*/React.createElement("option", {
    value: "49-00",
    style: {
      color: "black"
    }
  }, "Tu\u1EA7n 49"), /*#__PURE__*/React.createElement("option", {
    value: "50-00",
    style: {
      color: "black"
    }
  }, "Tu\u1EA7n 50"), /*#__PURE__*/React.createElement("option", {
    value: "51-00",
    style: {
      color: "black"
    }
  }, "Tu\u1EA7n 51"), /*#__PURE__*/React.createElement("option", {
    value: "52-00",
    style: {
      color: "black"
    }
  }, "Tu\u1EA7n 52"), /*#__PURE__*/React.createElement("option", {
    value: "53-00",
    style: {
      color: "black"
    }
  }, "Tu\u1EA7n 53"));
}

//---------------------------------------------------------------------------------------------------------------
// function loại bỏ dấu tiếng việt
function removeAccents(str) {
  //đổi chữ hoa thành chữ thường
  str = str.toLowerCase();
  // loại bỏ dấu tiếng việt
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D');
}

//----------------------------------------------------------------------------------------------------
function array2d_to_1d(array2d) {
  let array_1d = [];
  for (let i = 0, len = array2d.length; i < len; i++) {
    for (let j = 0, len_j = array2d[i].length; j < len_j; j++) {
      array_1d.push(array2d[i][j]);
    }
  }
  return array_1d;
}

//----------------------------------------------------------------------------------------------------
function combobox_(id, array) {
  function handleChange(e) {
    console.log('handle change called');
    console.log(e.target.value);
    let array_result_new = array.filter(check_item_in_array_get_true);
    function check_item_in_array_get_true(item) {
      console.log(item);
      console.log('---------------  ' + item.toString());
      return removeAccents(item.toString()).indexOf(removeAccents(e.target.value)) !== -1;
    }
    ReactDOM.unmountComponentAtNode(id_Combox);
    ReactDOM.render( /*#__PURE__*/React.createElement(Combox, {
      value: {
        data: array_result_new
      }
    }), id_Combox);
  }
  function Combox(props) {
    let props_array = props.value.data;
    console.log(props_array);
    let ref_select = useRef(null);
    useEffect(() => {
      ref_select.current.onscroll = function (event) {
        console.log('Combox onscroll---------------');
        document.getElementById(id).turnoff_blur = false;
        document.getElementById(id).focus();
      };
      //-------------------------------------------------------------------------------------------------     
      ref_select.current.onmousedown = function (event) {
        console.log('Combox cha onmousedown---------------');
        document.getElementById(id).turnoff_blur = true;
      };
      //--------------------------------------------------------------------
      ref_select.current.onblur = function (event) {
        console.log('Combox cha onblur---------------');
        ReactDOM.unmountComponentAtNode(id_Combox);
      };
      let len = props_array.length;
      if (len >= 1) {
        for (let index = 0; index < len; index++) {
          ref_select.current.children[index].onmousedown = function (event) {
            console.log('Combox con onmousedown---------------');
            console.log(props_array);
            console.log(index);
            document.getElementById(id).value = props_array[index];
            ReactDOM.unmountComponentAtNode(id_Combox);
          };
        }
      }
    }, []);
    return /*#__PURE__*/React.createElement("div", {
      ref: ref_select,
      className: `border border-sky-500 top-0 left-0 w-full h-24 overflow-y-scroll  bg-slate-100   flex flex-col relative justify-start items-start _shadow mt-1 z-40 `
    }, props_array.map((i, index) => {
      return /*#__PURE__*/React.createElement("button", {
        type: "button",
        className: `whitespace-nowrap hover:bg-gray-400 hover:bg-opacity-50 w-full pl-2 flex items-start  justify-start `
      }, props_array[index]);
    }));
  }
  ;
  useEffect(() => {
    document.getElementById(id).onmousedown = function (e) {
      document.getElementById(id).turnoff_blur = false;
      ReactDOM.render( /*#__PURE__*/React.createElement(Combox, {
        value: {
          data: array
        }
      }), id_Combox);
      document.getElementById(id).addEventListener("blur", myFunction_2);
      function myFunction_2(e) {
        if (document.getElementById(id).turnoff_blur === false) {
          console.log('blur------------------');
          ReactDOM.unmountComponentAtNode(id_Combox);
          document.getElementById(id).removeEventListener("blur", myFunction_2);
        }
      }
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: `relative  `
  }, /*#__PURE__*/React.createElement("input", {
    id: id,
    onChange: e => {
      return handleChange(e);
    },
    className: `w-full p-1 text-black border border-sky-500 `
  }), /*#__PURE__*/React.createElement("button", {
    id: "id_Combox",
    className: `absolute w-full flex flex-col  `
  }, "  "));
}

//----------------------------------------------------------------------------------------------------
function combobox_2(id, array) {
  function handleChange(e) {
    console.log('handle change called');
    console.log(e.target.value);
    ReactDOM.unmountComponentAtNode(id_Combox);
    ReactDOM.render( /*#__PURE__*/React.createElement(Combox_2, {
      value: {
        data: array
      }
    }), id_Combox);
  }
  function Combox_2(props) {
    let props_array = props.value.data;
    console.log(props_array);
    let ref_select = useRef(null);
    useEffect(() => {
      ref_select.current.onscroll = function (event) {
        console.log('Combox onscroll---------------');
        document.getElementById(id).turnoff_blur = false;
        document.getElementById(id).focus();
      };
      //-------------------------------------------------------------------------------------------------     
      ref_select.current.onmousedown = function (event) {
        console.log('Combox cha onmousedown---------------');
        document.getElementById(id).turnoff_blur = true;
      };
      //--------------------------------------------------------------------
      ref_select.current.onblur = function (event) {
        console.log('Combox cha onblur---------------');
        ReactDOM.unmountComponentAtNode(id_Combox);
      };
      let len = props_array.length;
      if (len >= 1) {
        for (let index = 0; index < len; index++) {
          ref_select.current.children[index].onmousedown = function (event) {
            console.log('Combox con onmousedown---------------');
            console.log(props_array);
            console.log(index);
            document.getElementById(id).value = props_array[index];
            ReactDOM.unmountComponentAtNode(id_Combox);
          };
        }
      }
    }, []);
    return /*#__PURE__*/React.createElement("div", {
      ref: ref_select,
      style: {
        width: `220px`
      },
      className: `top-0 left-0 w-full   bg-slate-100  relative  z-40 `
    }, props_array.map((row, index) => {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          display: "table-row"
        },
        className: `whitespace-nowrap  hover:bg-gray-400 hover:bg-opacity-50  `
      }, row.map((cell, j) => {
        return /*#__PURE__*/React.createElement("div", {
          style: {
            width: `73px`,
            whiteSpace: 'nowrap',
            position: 'relative',
            backgroundColor: "white",
            border: "1px ridge #ccc",
            display: "table-cell",
            padding: "1px"
          }
        }, " ", cell, "  ");
      }));
    }));
  }
  ;
  useEffect(() => {
    document.getElementById(id).onmousedown = function (e) {
      document.getElementById(id).turnoff_blur = false;
      ReactDOM.render( /*#__PURE__*/React.createElement(Combox_2, {
        value: {
          data: array
        }
      }), id_Combox);

      // document.getElementById(id).addEventListener("blur",  myFunction_2   );

      // function myFunction_2(e) {

      // if (document.getElementById(id).turnoff_blur === false) {
      // console.log('blur------------------');

      // ReactDOM.unmountComponentAtNode(id_Combox) ;
      // document.getElementById(id).removeEventListener("blur", myFunction_2);
      // }

      // }
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: `relative `
  }, /*#__PURE__*/React.createElement("input", {
    id: id,
    onChange: e => {
      return handleChange(e);
    },
    className: `w-full p-1 text-black border border-gray-300 `
  }), /*#__PURE__*/React.createElement("div", {
    id: "id_Combox",
    className: `absolute w-full flex flex-col `
  }, "  "));
}
function Header(props) {
  useEffect(() => {
    id_nav_menu.onclick = function (e) {
      ReactDOM.render(React.createElement(Header_mobi), id_header_mobi);
      console.log(id_app.children[2]);
    };
  }, []);
  return /*#__PURE__*/React.createElement("header", {
    id: "id_header",
    className: "border-b bg-white font-sans min-h-[60px] px-4 sm:px-10 py-3  tracking-wide relative z-50"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center sm:gap-x-10  gap-x-2 "
  }, "  ", /*#__PURE__*/React.createElement("a", {
    href: "javascript:void(0)"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://readymadeui.com/readymadeui.svg",
    alt: "logo",
    className: "w-12 sm:w-24"
  })), /*#__PURE__*/React.createElement("div", {
    id: "id_nav",
    className: " flex gap-x-4"
  }, /*#__PURE__*/React.createElement("button", {
    id: "id_nav_menu",
    className: "md:hidden"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "w-7 h-7",
    fill: "#000",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }))), /*#__PURE__*/React.createElement("ul", {
    className: "flex gap-x-4 md:gap-x-10 "
  }, /*#__PURE__*/React.createElement("li", {
    className: ""
  }, /*#__PURE__*/React.createElement("a", {
    href: "javascript:void(0)",
    className: "hover:text-[#007bff] text-[15px] text-[#007bff] block font-bold"
  }, "Home")), /*#__PURE__*/React.createElement("li", {
    className: ""
  }, /*#__PURE__*/React.createElement("a", {
    href: "javascript:void(0)",
    className: "hover:text-[#007bff] text-gray-600 font-bold text-[15px] lg:hover:fill-[#007bff] block"
  }, "Pages")), /*#__PURE__*/React.createElement("li", {
    className: ""
  }, /*#__PURE__*/React.createElement("a", {
    href: "javascript:void(0)",
    className: "hover:text-[#007bff] text-gray-600 font-bold text-[15px] lg:hover:fill-[#007bff] block"
  }, "Blog")), /*#__PURE__*/React.createElement("li", {
    className: "  max-md:hidden "
  }, /*#__PURE__*/React.createElement("a", {
    href: "javascript:void(0)",
    className: "hover:text-[#007bff] text-gray-600 font-bold text-[15px] block"
  }, "Team")), /*#__PURE__*/React.createElement("li", {
    className: "  max-md:hidden "
  }, /*#__PURE__*/React.createElement("a", {
    href: "javascript:void(0)",
    className: "hover:text-[#007bff] text-gray-600 font-bold text-[15px] block"
  }, "About")), /*#__PURE__*/React.createElement("li", {
    className: "  max-md:hidden "
  }, /*#__PURE__*/React.createElement("a", {
    href: "javascript:void(0)",
    className: "hover:text-[#007bff] text-gray-600 font-bold text-[15px] block"
  }, "Contact")), /*#__PURE__*/React.createElement("li", {
    className: " max-md:hidden "
  }, /*#__PURE__*/React.createElement("a", {
    href: "javascript:void(0)",
    className: "hover:text-[#007bff] text-gray-600 font-bold text-[15px] block"
  }, "Source")))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center ml-auto space-x-8"
  }, /*#__PURE__*/React.createElement("span", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20px",
    height: "20px",
    className: "cursor-pointer fill-[#000] hover:fill-[#007bff] inline-block",
    viewBox: "0 0 512 512"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0",
    "data-original": "#000000"
  })), /*#__PURE__*/React.createElement("span", {
    className: "absolute left-auto -ml-1 -top-1 rounded-full bg-red-500 px-1 py-0 text-xs text-white"
  }, "4")), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20px",
    className: "cursor-pointer fill-[#000] hover:fill-[#007bff] inline-block",
    viewBox: "0 0 371.263 371.263"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M305.402 234.794v-70.54c0-52.396-33.533-98.085-79.702-115.151.539-2.695.838-5.449.838-8.204C226.539 18.324 208.215 0 185.64 0s-40.899 18.324-40.899 40.899c0 2.695.299 5.389.778 7.964-15.868 5.629-30.539 14.551-43.054 26.647-23.593 22.755-36.587 53.354-36.587 86.169v73.115c0 2.575-2.096 4.731-4.731 4.731-22.096 0-40.959 16.647-42.995 37.845-1.138 11.797 2.755 23.533 10.719 32.276 7.904 8.683 19.222 13.713 31.018 13.713h72.217c2.994 26.887 25.869 47.905 53.534 47.905s50.54-21.018 53.534-47.905h72.217c11.797 0 23.114-5.03 31.018-13.713 7.904-8.743 11.797-20.479 10.719-32.276-2.036-21.198-20.958-37.845-42.995-37.845a4.704 4.704 0 0 1-4.731-4.731zM185.64 23.952c9.341 0 16.946 7.605 16.946 16.946 0 .778-.12 1.497-.24 2.275-4.072-.599-8.204-1.018-12.336-1.138-7.126-.24-14.132.24-21.078 1.198-.12-.778-.24-1.497-.24-2.275.002-9.401 7.607-17.006 16.948-17.006zm0 323.358c-14.431 0-26.527-10.3-29.342-23.952h58.683c-2.813 13.653-14.909 23.952-29.341 23.952zm143.655-67.665c.479 5.15-1.138 10.12-4.551 13.892-3.533 3.773-8.204 5.868-13.353 5.868H59.89c-5.15 0-9.82-2.096-13.294-5.868-3.473-3.772-5.09-8.743-4.611-13.892.838-9.042 9.282-16.168 19.162-16.168 15.809 0 28.683-12.874 28.683-28.683v-73.115c0-26.228 10.419-50.719 29.282-68.923 18.024-17.425 41.498-26.887 66.528-26.887 1.198 0 2.335 0 3.533.06 50.839 1.796 92.277 45.929 92.277 98.325v70.54c0 15.809 12.874 28.683 28.683 28.683 9.88 0 18.264 7.126 19.162 16.168z",
    "data-original": "#000000"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "bg-gray-100 border border-transparent focus-within:border-blue-500 focus-within:bg-transparent flex px-6 rounded-full h-10 lg:w-2/4 mt-3 mx-auto "
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 192.904 192.904",
    width: "16px",
    className: "fill-gray-600 mr-3 rotate-90"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"
  })), /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: "Search...",
    className: "w-full outline-none bg-transparent text-gray-600 font-semibold text-[15px]"
  })));
}
;
function Header_mobi(props) {
  return /*#__PURE__*/React.createElement("ul", {
    className: " absolute z-50 grid  grid-cols-1  gap-2 w-full  items-start  bg-white p-5"
  }, /*#__PURE__*/React.createElement("li", {
    className: ""
  }, /*#__PURE__*/React.createElement("a", {
    href: "javascript:void(0)",
    className: "hover:text-[#007bff] text-[15px] text-[#007bff] block font-bold"
  }, "Home")), /*#__PURE__*/React.createElement("li", {
    className: ""
  }, /*#__PURE__*/React.createElement("a", {
    href: "javascript:void(0)",
    className: "hover:text-[#007bff] text-gray-600 font-bold text-[15px] lg:hover:fill-[#007bff] block"
  }, "Pages")), /*#__PURE__*/React.createElement("li", {
    className: ""
  }, /*#__PURE__*/React.createElement("a", {
    href: "javascript:void(0)",
    className: "hover:text-[#007bff] text-gray-600 font-bold text-[15px] lg:hover:fill-[#007bff] block"
  }, "Blog")), /*#__PURE__*/React.createElement("li", {
    className: " "
  }, /*#__PURE__*/React.createElement("a", {
    href: "javascript:void(0)",
    className: "hover:text-[#007bff] text-gray-600 font-bold text-[15px] block"
  }, "Team")), /*#__PURE__*/React.createElement("li", {
    className: "  "
  }, /*#__PURE__*/React.createElement("a", {
    href: "javascript:void(0)",
    className: "hover:text-[#007bff] text-gray-600 font-bold text-[15px] block"
  }, "About")), /*#__PURE__*/React.createElement("li", {
    className: "  "
  }, /*#__PURE__*/React.createElement("a", {
    href: "javascript:void(0)",
    className: "hover:text-[#007bff] text-gray-600 font-bold text-[15px] block"
  }, "Contact")), /*#__PURE__*/React.createElement("li", {
    className: "  "
  }, /*#__PURE__*/React.createElement("a", {
    href: "javascript:void(0)",
    className: "hover:text-[#007bff] text-gray-600 font-bold text-[15px] block"
  }, "Source")));
}
;
function Img_product(props) {
  //   let table_excel_height = props.value.height  ;
  //   let table_excel_width = props.value.width  ;
  let data_2d = props.value.data;
  var countjavascript = data_2d.length;
  var coloumsjavascript = data_2d[countjavascript - 1].length;
  return /*#__PURE__*/React.createElement("section", {
    className: "container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0"
  }, /*#__PURE__*/React.createElement("section", {
    className: "p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start "
  }, data_2d.map((row, i) => {
    return /*#__PURE__*/React.createElement("div", {
      className: "bg-white"
    }, /*#__PURE__*/React.createElement("section", {
      className: "p-5 py-10 bg-purple-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer"
    }, /*#__PURE__*/React.createElement("img", {
      src: "admin/productimages/" + row[0] + "/" + row[4],
      alt: "Front of men's Basic Tee in black.",
      className: "h-full w-full object-cover object-center lg:h-full lg:w-full"
    }), /*#__PURE__*/React.createElement("h1", {
      className: "text-3xl my-5"
    }, row[3]), /*#__PURE__*/React.createElement("p", {
      className: "mb-5"
    }, row[11]), /*#__PURE__*/React.createElement("h2", {
      className: "font-semibold mb-5"
    }, row[8]), /*#__PURE__*/React.createElement(Rating, null), /*#__PURE__*/React.createElement("button", {
      className: "p-2 px-6 bg-purple-500 text-white rounded-md hover:bg-purple-600"
    }, "Add To Cart")));
  })));
}
;
function Rating(props) {
  //   let data_2d = props.value.data ;
  //   var countjavascript = data_2d.length ;
  //   var coloumsjavascript = data_2d[countjavascript-1].length ; 

  return /*#__PURE__*/React.createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "w-4 h-4 text-yellow-300 me-1",
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 22 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
  })), /*#__PURE__*/React.createElement("p", {
    className: "ms-2 text-sm font-bold "
  }, "4.95"), /*#__PURE__*/React.createElement("span", {
    className: "w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "text-sm font-medium text-gray-900 underline hover:no-underline "
  }, "73 reviews"));
}
;
function Table(props) {
  let table_excel_height = props.value.height;
  let table_excel_width = props.value.width;
  let data_2d = props.value.data;
  var countjavascript = data_2d.length;
  var coloumsjavascript = data_2d[countjavascript - 1].length;
  // xem có chuyển dòng thành cột không

  if (props.value.convert == true) {
    // chuyển dòng thành cột

    let data_2d_nguoc = new Array(coloumsjavascript).fill(null).map(i => i = new Array(countjavascript).fill(null));
    for (var c = 0; c < coloumsjavascript; c++) {
      for (var r = 0; r < countjavascript; r++) {
        data_2d_nguoc[c][r] = data_2d[r][c];
      }
    }
    return /*#__PURE__*/React.createElement("div", {
      id: "id_table"
      //  style={  {  height: `${table_excel_height}px`, width :  `${table_excel_width}px`,      overflow: 'scroll',  position: 'relative',} } 
    }, data_2d_nguoc.map((row, i) => {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          display: "table-row"
        }
      }, row.map((cell, j) => {
        return /*#__PURE__*/React.createElement("div", {
          style: {
            whiteSpace: 'nowrap',
            position: 'relative',
            backgroundColor: "white",
            border: "1px ridge #ccc",
            height: "20px",
            display: "table-cell",
            paddingLeft: "4px",
            paddingRight: "4px",
            borderRightStyle: function () {
              if (j === data_2d[0].length - 1) {
                return 'ridge';
              } else {
                return 'none';
              }
            }(),
            borderTopStyle: function () {
              if (i === 0) {
                return 'ridge';
              } else {
                return 'none';
              }
            }()
          }
        }, " ", function () {
          if (+cell === 0) {
            return "";
          } else {
            return cell;
          }
        }(), "  ");
      }));
    }));
  } else {
    return /*#__PURE__*/React.createElement("div", {
      id: "id_table",
      style: {
        height: `${table_excel_height}px`,
        width: `${table_excel_width}px`,
        overflow: 'scroll',
        position: 'relative'
      }
    }, data_2d.map((row, i) => {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          display: "table-row"
        }
      }, row.map((cell, j) => {
        return /*#__PURE__*/React.createElement("div", {
          style: {
            whiteSpace: 'nowrap',
            position: 'relative',
            backgroundColor: "white",
            border: "1px ridge #ccc",
            height: "20px",
            display: "table-cell",
            paddingLeft: "4px",
            paddingRight: "4px",
            borderRightStyle: function () {
              if (j === data_2d[0].length - 1) {
                return 'ridge';
              } else {
                return 'none';
              }
            }(),
            borderTopStyle: function () {
              if (i === 0) {
                return 'ridge';
              } else {
                return 'none';
              }
            }()
          }
        }, " ", function () {
          if (+cell === 0) {
            return "";
          } else {
            return cell;
          }
        }(), "  ");
      }));
    }));
  }
}
;
function _0() {
  return /*#__PURE__*/React.createElement("div", {
    className: '  absolute  rounded-full border-4 border-solid border-green-600 border-r-transparent align-[-0.125em]   ',
    style: {
      left: center,
      top: y,
      width: duong_kinh,
      height: duong_kinh,
      animation: 'animate 2s linear infinite'
    }
  }, " ");
}
function _loading(x, y, width, height, key) {
  let duong_kinh = Math.min(width, height);
  let center = x + width / 2 - duong_kinh / 2;
  let _div = document.createElement("div");

  // getElementsByTagName sẽ lấy ra một mảng tag name phù hợp không giống by id lấy ra 1 cái 
  let body = document.getElementsByTagName("body");
  body[0].appendChild(_div);
  _div.style.zIndex = "10000";
  document._loading = {};
  document._loading[key] = _div;
  function Loading() {
    return /*#__PURE__*/React.createElement("div", {
      className: ' absolute  rounded-full border-4 border-solid border-green-600 border-r-transparent align-[-0.125em]   ',
      style: {
        left: center,
        top: y,
        width: duong_kinh,
        height: duong_kinh,
        animation: 'animate 2s linear infinite'
      }
    }, " ");
  }
  return ReactDOM.render( /*#__PURE__*/React.createElement(Loading, null), _div);
}
function _rename(kiem_tra, para) {
  let _div = document.createElement("div");
  // getElementsByTagName sẽ lấy ra một mảng tag name phù hợp không giống by id lấy ra 1 cái 
  let body = document.getElementsByTagName("body");
  body[0].appendChild(_div);
  _div.style.zIndex = "10000";
  let name_change_old;
  if (kiem_tra === 1) {
    name_change_old = para[0];
  } else {
    name_change_old = array_chuong_thit[para[1]][0];
  }
  ;
  function Rename() {
    let ref_0 = useRef(null);
    let ref_cancel = useRef(null);
    let ref_ok = useRef(null);
    let ref_detele = useRef(null);
    useEffect(() => {
      let len = ref_0.current.textContent.length;
      get_selection(ref_0.current, 0, len);
      //------------------------------------------------------------------------------------
      ref_0.current.onmousedown = function click_rename(event) {
        document.getSelection().removeAllRanges();
      };
      ref_cancel.current.onclick = function click_cancel(event) {
        ReactDOM.unmountComponentAtNode(_div);
      };
      ref_ok.current.onclick = function click_ok(event) {
        if (kiem_tra === 1) {
          // nếu tên của chuồng thêm vào trùng với tên của chuồng trước đó thì thông báo lỗi

          for (let i = 0, len = array_chuong_thit[para[1]][1].length; i < len; i++) {
            for (let j = 0, len_j = array_chuong_thit[para[1]][1][i].length; j < len_j; j++) {
              if (ref_0.current.textContent === array_chuong_thit[para[1]][1][i][j]) {
                return _alert("Tên chuồng này đã có rồi");
              }
            }
          }
          array_chuong_thit[para[1]][1][para[2]][para[3]] = ref_0.current.textContent;
        }
        if (kiem_tra === 0) {
          // nếu tên của khu thêm vào trùng với tên của khu trước đó thì thông báo lỗi

          let sum_chi_nhanh = array_chuong_thit.length;
          for (let index = 0, len = sum_chi_nhanh; index < len; index++) {
            if (ref_0.current.textContent === array_chuong_thit[index][0]) {
              return _alert("Tên chi nhánh này đã có rồi");
            }
          }
          array_chuong_thit[para[1]][0] = ref_0.current.textContent;
        }

        //-----------------------------------------------------------------------------------------------------------

        let khu = para[1] + 1 + "." + array_chuong_thit[para[1]][0];
        let chuong = para[2] * 6 + (para[3] + 1) + "." + array_chuong_thit[para[1]][1][para[2]][para[3]];
        let array_chuong = [];
        let array_khu = [];
        for (let index = 0, len = array_chuong_thit.length; index < len; index++) {
          // chuyển mảng 2 chiều thành 1 chiều
          array_chuong[index] = array2d_to_1d(array_chuong_thit[index][1]);
          array_khu[index] = array_chuong_thit[index][0];
        }
        let array_khu_data = array_chuong.map((i, index) => {
          return i.map((j, index_j) => {
            return j = array_khu[index];
          });
        });
        $.post("sua_chuong_thit.php", {
          post1: JSON.stringify(array2d_to_1d(array_chuong)),
          post2: JSON.stringify(array2d_to_1d(array_khu_data)),
          post8: id_8.value,
          post9: para[5],
          post10: para[6],
          post11: khu,
          post12: chuong,
          post13: array_chuong_thit[0][2]
        }, function (data) {
          data = data.trim();
          if (data.slice(0, 8) === "<script>") {
            let data_1 = data.slice(8, -9);
            eval(data_1);
            return ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));
          }
          if (data.trim().slice(0, 2) !== "ok") {
            _alert(data);
          } else {
            // lưu cấu hình chuồng vào local storage
            array_chuong_thit[0][2] = data.split("|_|")[1];
            localStorage.setItem('chuong', JSON.stringify(array_chuong_thit));
            ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));
            ReactDOM.unmountComponentAtNode(_div);
            _div.remove();
            ReactDOM.render( /*#__PURE__*/React.createElement(Setup_chuong, {
              value: {
                data: array_chuong_thit
              }
            }), document.getElementById('id_nhan_index'));
            _alert("Cập nhật thành công");
          }
        });
      };
      //-----------------------------------------------------------------------------------------------------------------------------------------------------------
      ref_detele.current.onclick = function click_ok(event) {
        ReactDOM.unmountComponentAtNode(_div);
        console.log('detele click');
        let array_chuong_thit_truoc_delete = JSON.parse(JSON.stringify(array_chuong_thit));
        // nếu detele chuồng------------------------------------------------------------------------------
        if (kiem_tra === 1) {
          let row_end = array_chuong_thit[para[1]][1].length;
          let col_end = array_chuong_thit[para[1]][1][row_end - 1].length;
          let chuong_end = array_chuong_thit[para[1]][1][row_end - 1][col_end - 1];
          if (para[2] !== row_end - 1 || para[3] !== col_end - 1) {
            return _alert("Bạn phải xoá chuồng " + chuong_end + " trước");
          }

          // xoá chuồng cuối cùng của dòng
          array_chuong_thit[para[1]][1][row_end - 1].pop();
          // chuồng cuối cùng ở vị trí index_j = 0 thì phải xoá thêm dòng đó nữa
          if (array_chuong_thit[para[1]][1][row_end - 1].length === 0) {
            array_chuong_thit[para[1]][1].pop();
          }
          // chuồng cuối cùng ở vị trí index_i =0, index_j =0 thì phải xoá thêm chi nhánh
          if (array_chuong_thit[para[1]][1].length === 0) {
            array_chuong_thit.pop();
          }

          //-----------------------------------------------------------------------------------------------------------

          let khu = "|_|xoa";
          let chuong = "|_|xoa";
          let array_chuong = [];
          let array_khu = [];
          for (let index = 0, len = array_chuong_thit.length; index < len; index++) {
            // chuyển mảng 2 chiều thành 1 chiều
            array_chuong[index] = array2d_to_1d(array_chuong_thit[index][1]);
            array_khu[index] = array_chuong_thit[index][0];
          }
          let array_khu_data = array_chuong.map((i, index) => {
            return i.map((j, index_j) => {
              return j = array_khu[index];
            });
          });
          $.post("sua_chuong_thit.php", {
            post1: JSON.stringify(array2d_to_1d(array_chuong)),
            post2: JSON.stringify(array2d_to_1d(array_khu_data)),
            post8: id_8.value,
            post9: para[5],
            post10: para[6],
            post11: khu,
            post12: chuong,
            post13: array_chuong_thit[0][2]
          }, function (data) {
            data = data.trim();
            if (data.slice(0, 8) === "<script>") {
              let data_1 = data.slice(8, -9);
              eval(data_1);
              return ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));
            }
            if (data.trim().slice(0, 2) !== "ok") {
              ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));
              ReactDOM.render( /*#__PURE__*/React.createElement(Setup_chuong, {
                value: {
                  data: array_chuong_thit_truoc_delete
                }
              }), document.getElementById('id_nhan_index'));
              _alert(data);
            } else {
              // lưu cấu hình chuồng vào local storage

              array_chuong_thit[0][2] = data.split("|_|")[1];
              localStorage.setItem('chuong', JSON.stringify(array_chuong_thit));
              ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));
              ReactDOM.unmountComponentAtNode(_div);
              _div.remove();
              ReactDOM.render( /*#__PURE__*/React.createElement(Setup_chuong, {
                value: {
                  data: array_chuong_thit
                }
              }), document.getElementById('id_nhan_index'));
              _alert("Cập nhật thành công");
            }
          });
        }
        // nếu detele chi nhánh------------------------------------------------------------------------------
        if (kiem_tra === 0) {
          let sum_chi_nhanh = array_chuong_thit.length;
          if (para[1] !== sum_chi_nhanh - 1) {
            return _alert("Bạn phải xoá chi nhánh: " + array_chuong_thit[sum_chi_nhanh - 1][0] + " trước");
          }
          return _alert("Bạn phải xoá hết các chuồng trong chi nhánh: " + array_chuong_thit[para[1]][0] + " trước");
        }
      };
    }, []);
    return /*#__PURE__*/React.createElement("div", {
      className: 'absolute flex justify-center items-center align-middle w-full h-full top-0 left-0 bg-slate-400 bg-opacity-50'
    }, /*#__PURE__*/React.createElement("div", {
      className: ' _shadow rounded w-1/2 bg-white  '
    }, /*#__PURE__*/React.createElement("div", {
      className: 'flex flex-wrap'
    }, /*#__PURE__*/React.createElement("div", {
      className: `mx-5 mt-2 w-full`
    }, "  Ch\u1EC9nh s\u1EEDa t\xEAn  "), /*#__PURE__*/React.createElement("div", {
      ref: ref_0,
      contentEditable: "true",
      className: 'mx-5  mt-2 p-2 w-full border border-solid border-emerald-400  focus:border-2 focus:border-solid focus:border-emerald-600 outline-0  '
    }, name_change_old), /*#__PURE__*/React.createElement("div", {
      className: ' my-2 w-full flex justify-end'
    }, /*#__PURE__*/React.createElement("div", {
      ref: ref_cancel,
      className: `mx-10 rounded w-20 flex justify-center bg-stone-200 hover:bg-stone-400 _shadow`
    }, "  Cancel "), /*#__PURE__*/React.createElement("div", {
      ref: ref_ok,
      className: 'mx-10 rounded w-20 flex justify-center bg-sky-500 hover:bg-sky-700 _shadow'
    }, "  Rename "), /*#__PURE__*/React.createElement("div", {
      ref: ref_detele,
      className: 'mx-10 rounded w-20 flex justify-center _shadow'
    }, "  ", /*#__PURE__*/React.createElement(Button_detele, null), " ")))));
  }
  return ReactDOM.render( /*#__PURE__*/React.createElement(Rename, null), _div);
}
const {
  useState,
  useRef,
  useEffect
} = React;
let path_name = window.location.pathname;
let font_size = 14;
let isMobile = window.matchMedia("only screen and (max-width: 480px)").matches;
if (isMobile) {
  font_size = 12;
}
;
function tb(string_pc, string_mobi) {
  if (isMobile) {
    return string_mobi;
  } else {
    return string_pc;
  }
}
ReactDOM.render(React.createElement(App, null), document.getElementById('root'));

// Router();