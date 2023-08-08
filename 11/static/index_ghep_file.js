function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function App(props) {
  useEffect(() => {}, []);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: ` flex w-40  `
  }, " ", /*#__PURE__*/React.createElement(Upload, null), " "), /*#__PURE__*/React.createElement("div", {
    id: "id_list_upload"
  }, " "), /*#__PURE__*/React.createElement("div", {
    id: "hh"
  }, "  hhhhhhhhhhhhh "));
}
;
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
function Upload(props) {
  let ref_FileInput = useRef(null);
  let ref_Upload = useRef(null);
  useEffect( /*#__PURE__*/_asyncToGenerator(function* () {
    $(document).ready(function () {
      $("#hh").click(function (event) {
        console.log('88888888888888888888888888');
        console.log(event);
      });
    });

    //--------------------------------------

    ref_FileInput.current.onchange = /*#__PURE__*/function () {
      var _upload_file = _asyncToGenerator(function* (event) {
        console.log('---------------------------upload');

        // lấy nhiều file
        let files = event.target.files;
        console.log(files[0].name);
        let host = window.location.hostname;
        const rect = id_list_upload.getBoundingClientRect();
        _loading(rect.left, rect.top, 80, 80, "load_1");
        $.post("/python/uploader", {
          file_gui: files[0]
        }, function (data) {
          console.log('upload xong');
          let node = document._loading["load_1"];
          node.remove();
          let _div = document.createElement("div");
          id_list_upload.appendChild(_div);
          _div.textContent = files[0].name;
          window.open("http://" + host + "/" + data.trim(), "_blank");
        });
      });
      function upload_file(_x) {
        return _upload_file.apply(this, arguments);
      }
      return upload_file;
    }();
  }), []);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref_Upload,
    onClick: () => {
      ref_FileInput.current.click();
    },
    className: `hover:bg-sky-700 border rounded   bg-sky-500 overflow-hidden whitespace-nowrap m-0 pr-2 pl-2 text-center text-base border-solid p-0 flex ${tb('', 'flex-wrap')} items-center border-yellow-900`
  }, /*#__PURE__*/React.createElement("img", {
    className: `${tb('w-5 h-5 pr-1', 'w-8 h-4 mt-1 pr-1 self-end ')}`,
    src: "static/SVG/file_upload.svg"
  }), /*#__PURE__*/React.createElement("div", {
    className: ` ${tb('', '')}   text-black `
  }, "  Ch\u1ECDn file "), /*#__PURE__*/React.createElement("input", {
    type: "file",
    ref: ref_FileInput,
    style: {
      display: 'none'
    }
  }));
}
;
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

// để bỏ loading dùng

// let node = document._loading[key] ;
// node.remove();

function _rename(para) {
  let _div = document.createElement("div");
  // getElementsByTagName sẽ lấy ra một mảng tag name phù hợp không giống by id lấy ra 1 cái 
  let body = document.getElementsByTagName("body");
  body[0].appendChild(_div);
  _div.style.zIndex = "10000";
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

        //       let array_chuong_thit_truoc_sua = JSON.parse(JSON.stringify(array_chuong_thit));
        //       array_chuong_thit[para[1]][1][para[2]][para[3]] = ref_0.current.textContent ;
        //       console.log(array_chuong_thit);

        //       ReactDOM.unmountComponentAtNode(_div);

        //       ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  
        //       ReactDOM.render(<Setup_chuong value={{data :  array_chuong_thit   }} /> 
        //       ,document.getElementById('id_nhan_index'));

        //       let dom_array_chuong_thit = id_nhan_index.children[0];

        //       let dom_vi_tri_rename = dom_array_chuong_thit.children[para[1]].children[1].children[para[2]].children[para[3]] ;

        //       const rect = dom_vi_tri_rename.getBoundingClientRect();

        //       let key = '' +para[1] + '_'+ para[2]+ '_'+ para[3] ;

        //       _loading(rect.left, rect.top, rect.width,rect.height, key);
        //       // ta phải gán biến node ở đây vì ReactDOM.unmountComponentAtNode không thể truy cập được node được lưu trong một obj phức tạp gồm nhiều obj con lồng nhau
        //       let node = document._loading[key] ;

        //           $.post("sua_chuong_thit.php",  {post1:JSON.stringify(array_chuong_thit) , post8:id_8.value}, function(data){

        // data = data.trim(); if (data.slice(0, 8) ==="<script>") {  let data_1 = data.slice(8, -9); eval(data_1) ; return  ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  }

        //             if (data.trim() === "ok") { ReactDOM.unmountComponentAtNode( node);  node.remove(); } else {
        //               console.log(data);
        //               ReactDOM.unmountComponentAtNode( node);  node.remove();
        //                _alert("Có lỗi mạng");
        //                ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan_index'));  
        //                ReactDOM.render(<Setup_chuong value={{data :  array_chuong_thit_truoc_sua   }} /> 
        //                ,document.getElementById('id_nhan_index'));

        //            }

        //          });
      };
      ref_detele.current.onclick = function click_ok(event) {
        // ReactDOM.unmountComponentAtNode(_div);
        //   console.log('detele click');
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
    }, "  Ch\u1EC9nh s\u1EEDa th\xF4ng tin chu\u1ED3ng  "), /*#__PURE__*/React.createElement("div", {
      ref: ref_0,
      contentEditable: "true",
      className: 'mx-5  mt-2 p-2 w-full border border-solid border-emerald-400  focus:border-2 focus:border-solid focus:border-emerald-600 outline-0  '
    }, para[0]), /*#__PURE__*/React.createElement("div", {
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