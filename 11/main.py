from flask import Flask, request, render_template, session, redirect 
import os
import win32com.client
xl = win32com.client.gencache.EnsureDispatch('Excel.Application')

try:
  wb_opening = xl.Workbooks('1.xlsm')
  wb_opening.Close(SaveChanges=False)
except:
  print("--------------------------------")


path_excel =  os.path.join(os.path.dirname(__file__), "excel-python","1.xlsm")

xl.Workbooks.Open(path_excel)
xl.Visible = True

app = Flask(__name__)

# CORS(app)


@app.route("/",methods = ['POST', 'GET'])
def ghep_phoi():
    trai = request.form['post_trai']
    nai = request.form['post1']
    sum_nai = request.form['sum']
    # chạy marco trong excel với 2 parameters
    # với excel có marco không thể có 2 file trùng tên mở cùng 1 lúc được
    # do vậy chạy marco ở đây đối với excel không cần đường dẫn
    # nó sẽ tham chiếu tới file excel đang mở, tới Module1.macro1
    xl.Application.Run('1.xlsm!Module1.run_sql_1', trai , nai,sum_nai)
    # nếu ta mở sẵn file excel thì không cần save rồi quit tốc độ sẽ nhanh hơn
    # wb.Save()
    # xl.Application.Quit()
 
    # lựa chọn wb trên Application excel đang mở sẵn
    wb = xl.Workbooks('1.xlsm')
    ws = wb.Worksheets('data')
    cell_end = str(ws.Range('Z2'))
    
    # trả về giá trị đã tính toán từ file excel
    return str(ws.Range(cell_end))



@app.route("/thit_12",methods = ['POST', 'GET'])
def thit_12():
    cong_ty = request.form['post8']
    year = request.form['post1']
    xl.Application.Run('1.xlsm!Module1.thit_12_thang', cong_ty , year)

    wb = xl.Workbooks('1.xlsm')
    ws = wb.Worksheets('thit_12_thang')
   
    return str(ws.Range('AC4:AT17'))

@app.route("/thit",methods = ['POST', 'GET'])
def thit():
    cong_ty = request.form['post8']
    year = request.form['post1']
    thang = request.form['post2']
    xl.Application.Run('1.xlsm!Module1.thit_chuong', cong_ty , year, thang)

    wb = xl.Workbooks('1.xlsm')
    ws = wb.Worksheets('thit_chuong')
    cell_end = str(ws.Range('AF3'))
    
    # trả về giá trị đã tính toán từ file excel
    return str(ws.Range(cell_end))
@app.route("/thit_dien_bien",methods = ['POST', 'GET'])
def thit_dien_bien():
    cong_ty = request.form['post8']
    year = request.form['post1']
    dieu_kien = request.form['post2']
    xl.Application.Run('1.xlsm!Module1.thit_dien_bien', cong_ty , year, dieu_kien)

    wb = xl.Workbooks('1.xlsm')
    ws = wb.Worksheets('thit_dien_bien')
    cell_end = str(ws.Range('AA1'))
    
    # trả về giá trị đã tính toán từ file excel
    return str(ws.Range(cell_end))







# dự án 1
@app.route('/uploader', methods = ['GET', 'POST'])
def upload_file():
    if request.method == 'POST': 
        f = request.files['file_gui']
        name_full = f.filename
        f.save(os.path.join('upload', name_full))
        name =  os.path.splitext(name_full)[0]
        xl.Application.Run('1.xlsm!Module2.save_pdf', name_full,name )
        return os.path.basename(os.path.dirname(__file__))+ "/upload/"+name+".pdf"
  
# @cross_origin("http://localhost:5000")


if __name__ == "__main__":
#   win32com là tác vụ nặng ta phải tắt đa nhiệm bằng lệnh threaded=False thì mới chạy được  
    app.run(threaded=False)
   

   

