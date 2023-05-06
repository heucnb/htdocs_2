from flask import Flask, request, render_template, session, redirect
import win32com.client
xl = win32com.client.Dispatch("Excel.Application")  #instantiate excel app
# mở sẵn file excel
# xl.Workbooks.Open(r'C:\Users\hieu\Desktop\100\excel\1.xlsm')

app = Flask(__name__)
# CORS(app)


@app.route("/",methods = ['POST', 'GET'])
def hello():
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

# @cross_origin("http://localhost:5000")
# def get_10():
     
    
#     id = request.args.get('id')
#     return (id) 

if __name__ == "__main__":
#   win32com là tác vụ nặng ta phải tắt đa nhiệm bằng lệnh threaded=False thì mới chạy được  
    app.run(threaded=False)
   

   

