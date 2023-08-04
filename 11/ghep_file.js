const express = require("express");
var babel = require("@babel/core");
var UglifyJS = require("uglify-js");
const app = express();
const fs = require('fs');
const path = require('path');
function ghep_file(){
    const Folder = './static/fontend';
    function get_all_path_in_folder(folder) {

     let ket_qua = [] ;
     // let ket_qua_end = [] ;
               function get_all_path_in_folder_run(srcDir) {
          
               var list =  fs.readdirSync(srcDir) ;
          
               var src;
               list.forEach(function(file) {
                    src = srcDir + '/' + file;
               
               
                    var stat = fs.statSync(src);
                    if (stat && stat.isDirectory()) {
                    // hàm đệ quy
              
                    get_all_path_in_folder_run(src) ;
                    } else{
          
                    ket_qua.push(src);
                    }
               });
          
               return ket_qua ;
          
          }

          return get_all_path_in_folder_run(folder)

     
    }
   

 let array_path = get_all_path_in_folder(Folder) ;
 let all_path_js = [] ;

 for (let index = 0 , len = array_path.length ; index < len ; index++) { 
     if (path.extname(array_path[index]) === ".js" && array_path[index] !== './static/fontend/index.js' ){
          all_path_js.push(array_path[index]);
     }

  }

  all_path_js.push('./static/fontend/index.js');









 console.log(all_path_js);
  
    var fileData = [];

     
    for (let index = 0,  len = all_path_js.length; index <len ; index++) {
         // đọc data các file 
    
        fileData.push(fs.readFileSync(all_path_js[index] , 'utf8'));
   }

  

     
      var file = "";
      for (let index = 0; index < fileData.length; index++) {
           file = file + fileData[index];   
      }


    
    console.log('ok');
    // convert string jsx của react thành javascript với babel

// cách 1 sử dụng hàm đòng bộ --------------------------------------------------------------
 let data_convert =   babel.transformSync(file,
     {
          babelrc: true,
          filename: '.babelrc',

          });

// console.log(data_convert);



fs.writeFileSync("./static/index_ghep_file.js", data_convert.code, { flag: 'w+' });


/// cách 2 sử dụng hàm bất đòng bộ --------------------------------------------------------------
//     babel.transform(file,
//      {
//           babelrc: true,
//           filename: '.babelrc',
        
//           },
         
//        function(err, result) {

         
//           fs.writeFile('./static/index_ghep_file.js', result.code, { flag: 'w+' }, err => {  console.log(err);});
//    });


    
               
};



var start = new Date().getTime();
console.time();
ghep_file();
console.timeEnd();

  // hiện thông báo lên màn hình
  const notifier = require('node-notifier');
  var end = new Date().getTime();
  var time = end - start;
  notifier.notify( Intl.DateTimeFormat('vi-VN', {  hour: '2-digit',  minute: '2-digit',  second: '2-digit' }).format( new Date())  + '----' + time  );
    
 
app.listen(7000, () => console.log(   Intl.DateTimeFormat('vi-VN', {  hour: '2-digit',  minute: '2-digit',  second: '2-digit' }).format( new Date()) ));

// chạy command line trong node js
//------
// const { exec } = require("child_process");

// exec("./node_modules/.bin/babel ./static/index_ghep_file.js > ./static/index_product_babel.js", (error, stdout, stderr) => {
//     if (error) {
//         console.log(`error: ${error.message}`);
//         return;
//     }
//     if (stderr) {
//         console.log(`stderr: ${stderr}`);
//         return;
//     }
//     console.log(`stdout: ${stdout}`);
// });