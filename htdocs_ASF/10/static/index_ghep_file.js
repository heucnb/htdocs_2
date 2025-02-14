function App(props) {
  useEffect(() => {}, []);
  return /*#__PURE__*/React.createElement("div", {
    className: ` text-base  flex  h-screen flex-col `
  }, /*#__PURE__*/React.createElement(Form_nhap, null));
}
;
function Form_nhap() {
  useEffect(() => {
    id_gui.onclick = function () {};
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: `flex flex-col w-full h-full  bg-gray-100  `
  }, /*#__PURE__*/React.createElement("div", {
    className: `ml-1 border-b border-sky-500 mr-1`
  }, " Nh\u1EADp d\u1EEF li\u1EC7u "), /*#__PURE__*/React.createElement("div", {
    className: ` flex grow  mt-2 `
  }, /*#__PURE__*/React.createElement("div", {
    className: ` flex flex-col  shrink-0 ml-2 `
  }, /*#__PURE__*/React.createElement("div", {
    className: ` mt-2    `
  }, " T\xEAn tr\u1EA1i + t\xEAn chu\u1ED3ng + t\xEAn l\xF4:   "), combobox_("id_array", ["chuồng 1", "chuồng 2", "chuồng3"]), /*#__PURE__*/React.createElement("div", {
    className: ` mt-2   `
  }, " Ng\xE0y nh\u1EADp: "), /*#__PURE__*/React.createElement("input", {
    id: "id_ngay",
    type: "date",
    className: `p-1  border border-sky-500 `
  }), /*#__PURE__*/React.createElement("div", {
    id: "id_from",
    className: ` flex flex-col  `
  }, /*#__PURE__*/React.createElement("div", {
    className: ` mt-2   `
  }, " Ngu\u1ED3n nh\u1EADp: "), /*#__PURE__*/React.createElement("input", {
    id: "id_ma_chung_tu_nhap",
    className: ` p-1 border border-sky-500 `
  }), /*#__PURE__*/React.createElement("div", {
    className: ` mt-2   `
  }, " S\u1ED1 l\u01B0\u1EE3ng: "), /*#__PURE__*/React.createElement("input", {
    id: "id_so_luong",
    className: `p-1  border border-sky-500 `
  }), /*#__PURE__*/React.createElement("div", {
    className: ` mt-2   `
  }, " \u0110\u01A1n v\u1ECB t\xEDnh: "), /*#__PURE__*/React.createElement("input", {
    id: "id_don_vi_tinh",
    value: "Kg",
    className: `p-1  border border-sky-500 `
  }), /*#__PURE__*/React.createElement("div", {
    className: ` mt-2   `
  }, " T\u1ED5ng s\u1ED1 ti\u1EC1n: "), /*#__PURE__*/React.createElement("input", {
    id: "id_tong_so_tien",
    className: `p-1  border border-sky-500 `
  }), /*#__PURE__*/React.createElement("div", {
    className: ` mt-2   `
  }, " Ng\xE0y h\u1EBFt h\u1EA1n: "), /*#__PURE__*/React.createElement("input", {
    id: "id_hsd",
    type: "date",
    className: `p-1  border border-sky-500 `
  })), /*#__PURE__*/React.createElement("input", {
    type: "button",
    value: "C\u1EADp nh\u1EADt",
    id: "id_gui",
    className: ` mt-2 mb-2  _shadow rounded   bg-sky-500 hover:bg-sky-700 h-8 flex items-center justify-center pl-2  font-medium `
  })), /*#__PURE__*/React.createElement("div", {
    id: "id_nhan",
    className: ` text-sm grow ml-1 `
  })));
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
function _rename_user(para, row, i) {
  let _div = document.createElement("div");
  // getElementsByTagName sẽ lấy ra một mảng tag name phù hợp không giống by id lấy ra 1 cái 
  let body = document.getElementsByTagName("body");
  body[0].appendChild(_div);
  _div.style.zIndex = "10000";
  function Rename_user() {
    let ref_0 = useRef(null);
    let ref_cancel = useRef(null);
    let ref_ok = useRef(null);
    useEffect(() => {
      let len = ref_0.current.textContent.length;
      get_selection(ref_0.current, 0, len);
      //------------------------------------------------------------------------------------
      ref_0.current.onmousedown = function click_rename(event) {
        document.getSelection().removeAllRanges();
      };
      ref_cancel.current.onclick = function click_cancel(event) {
        ReactDOM.unmountComponentAtNode(_div);
        _div.remove();
      };
      ref_ok.current.onclick = function click_ok(event) {
        let row_old = row.concat();
        row[para] = ref_0.current.textContent;
        $.post("edit_user.php", {
          post1: JSON.stringify(row_old),
          post2: JSON.stringify(row),
          post8: id_8.value
        }, function (data) {
          data = data.trim();
          if (data.slice(0, 8) === "<script>") {
            let data_1 = data.slice(8, -9);
            eval(data_1);
            return ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));
          }
          if (data.trim() === "ok") {
            ReactDOM.unmountComponentAtNode(_div);
            _div.remove();
            id_table.children[i].children[para + 1].textContent = row[para];
            let len = id_table.children.length;
            if (para === 2) {
              for (let index = 1; index < len; index++) {
                id_table.children[index].children[para + 1].textContent = row[para];
              }
              id_8.options[0].text = row[para];
            }
            if (para === 0 && i === 1) {
              document.getElementById('id_td_1').innerHTML = "Đăng nhập - " + row[para];
            }
          } else {
            ReactDOM.unmountComponentAtNode(_div);
            _div.remove();
            _alert("Có lỗi");
          }
        });

        //   let array_chuong_thit_truoc_sua = JSON.parse(JSON.stringify(array_chuong_thit));
        //   array_chuong_thit[para[1]][1][para[2]][para[3]] = ref_0.current.textContent ;
        //   console.log(array_chuong_thit);

        //   ReactDOM.unmountComponentAtNode(_div);

        //   ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  
        //   ReactDOM.render(<Setup_chuong value={{data :  array_chuong_thit   }} /> 
        //   ,document.getElementById('id_nhan_index'));

        //   let dom_array_chuong_thit = id_nhan_index.children[0];

        //   let dom_vi_tri_rename = dom_array_chuong_thit.children[para[1]].children[1].children[para[2]].children[para[3]] ;

        //   const rect = dom_vi_tri_rename.getBoundingClientRect();

        //   let key = '' +para[1] + '_'+ para[2]+ '_'+ para[3] ;

        //   _loading(rect.left, rect.top, rect.width,rect.height, key);
        //   // ta phải gán biến node ở đây vì ReactDOM.unmountComponentAtNode không thể truy cập được node được lưu trong một obj phức tạp gồm nhiều obj con lồng nhau
        //   let node = document._loading[key] ;

        //       $.post("sua_chuong_thit.php",  {post1:JSON.stringify(array_chuong_thit) , post8:id_8.value}, function(data){

        //         if (data.trim() === "ok") { ReactDOM.unmountComponentAtNode( node);  node.remove(); } else {
        //           console.log(data);
        //           ReactDOM.unmountComponentAtNode( node);  node.remove();
        //            _alert("Có lỗi mạng");
        //            ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  
        //            ReactDOM.render(<Setup_chuong value={{data :  array_chuong_thit_truoc_sua   }} /> 
        //            ,document.getElementById('id_nhan_index'));

        //        }

        //      });
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
    }, "  Ch\u1EC9nh s\u1EEDa th\xF4ng tin  "), /*#__PURE__*/React.createElement("div", {
      ref: ref_0,
      contentEditable: "true",
      className: 'mx-5  mt-2 p-2 w-full border border-solid border-emerald-400  focus:border-2 focus:border-solid focus:border-emerald-600 outline-0  '
    }, row[para]), /*#__PURE__*/React.createElement("div", {
      className: ' my-2 w-full flex justify-end'
    }, /*#__PURE__*/React.createElement("div", {
      ref: ref_cancel,
      className: `mx-10 rounded w-20 flex justify-center bg-stone-200 hover:bg-stone-400 _shadow`
    }, "  Cancel "), /*#__PURE__*/React.createElement("div", {
      ref: ref_ok,
      className: 'mx-10 rounded w-20 flex justify-center bg-sky-500 hover:bg-sky-700 _shadow'
    }, "  OK ")))));
  }
  return ReactDOM.render( /*#__PURE__*/React.createElement(Rename_user, null), _div);
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