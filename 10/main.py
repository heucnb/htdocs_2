from flask import Flask, request, render_template, session, redirect 
# argparse: For parsing command-line arguments.
import argparse
import os
import win32com.client

xl = win32com.client.DispatchEx("Excel.Application")  #instantiate excel app
xl_2 = win32com.client.DispatchEx("Excel.Application")  #instantiate 2 excel app
# xl_3 = win32com.client.Dispatch("Excel.Application")  #instantiate excel app
# xl_4 = win32com.client.Dispatch("Excel.Application")  #instantiate excel app
# xl_5 = win32com.client.Dispatch("Excel.Application")  #instantiate excel app

# đóng file excel sau đó mở lại
try:
  wb_opening = xl.Workbooks('1.xlsm')
  wb_opening.Close(SaveChanges=False)
  path_excel =  os.path.join(os.path.dirname(__file__), "excel-python","1.xlsm")
  xl.Workbooks.Open(path_excel)
  xl.Visible = True

#   wb_2_opening = xl_2.Workbooks('2.xlsm')
#   wb_2_opening.Close(SaveChanges=False)
#   path_excel_2 =  os.path.join(os.path.dirname(__file__), "excel-python","2.xlsm")
#   xl_2.Workbooks.Open(path_excel_2)
#   xl_2.Visible = True

except:
    path_excel =  os.path.join(os.path.dirname(__file__), "excel-python","1.xlsm")
    xl.Workbooks.Open(path_excel)
    xl.Visible = True
    # xl_2.Workbooks.Open(path_excel)
    # xl_2.Visible = True

    # path_excel_2 =  os.path.join(os.path.dirname(__file__), "excel-python","2.xlsm")
    # xl_2.Workbooks.Open(path_excel_2)
    # xl_2.Visible = True

finally:
    app = Flask(__name__)
    # CORS(app)
    
    pid = os.getpid() 
    print(pid)  
    wb = xl.Workbooks('1.xlsm')
    ws = wb.Worksheets('setup')
    ws.Cells(1,8).Value = pid     

    
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
        cell_end = str(ws.Range('AB1'))
        
        # trả về giá trị đã tính toán từ file excel
        return str(ws.Range(cell_end))







    # dự án 1
    @app.route('/uploader', methods = ['GET', 'POST'])
    def upload_file():
        if request.method == 'POST':  
            f = request.files['file']
            name_full = f.filename
            print(name_full)
            f.save(name_full) 
            name =  os.path.splitext(name_full)[0]
            xl.Application.Run('1.xlsm!Module2.save_pdf', name_full,name )
            return redirect("/10/"+name+".pdf")

    @app.route('/hh', methods = ['GET', 'POST'])
    def hh():
        return 'hhhhhh----'
    
    # @cross_origin("http://localhost:5000")


    if __name__ == "__main__":
        parser = argparse.ArgumentParser(description='Run a Flask app with a specified port.')
        parser.add_argument('--port', type=int, default=5000, help='Port number to run the app on.')
        args = parser.parse_args()


    #   win32com là tác vụ nặng ta phải tắt đa nhiệm bằng lệnh threaded=False thì mới chạy được  
        app.run(threaded=False, port=args.port )
    

    

