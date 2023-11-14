# You can access passed arguments with $n where n is the argument number  1, 2, 3, .... You pass the arguments just like you would with any other command.
#  vd: ở CMD viết "C:\Program Files\Git\git-bash.exe"  "C:\xampp\htdocs\10\bash_script.sh" 10



cd /c/xampp/htdocs/$1
if [ $2 -eq 1 ]
then
npx nodemon ghep_file.js --legacy-watch --watch static/fontend  --watch ghep_file.js
fi
if [ $2 -eq 2 ]
then

python main.py

fi

if [ $2 -eq 3 ]
then



fi
