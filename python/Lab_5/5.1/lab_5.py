import numpy as np

f1 = open("file1.txt","w")
f1.write("Hi  how arr yuy qrq   qwe rw   qwre qwerwqr qwerqwq   qwerqw qw   qwer  12 12   12 43 4324234")
f1 = open("file1.txt")
str1 = str(f1.read())
f1.close
str_new = ""
print(str1)
def inputStr(str):
    global str_new
    if(str[0] != " "):
        if(len(str) < 256):
            i = 0
            for i in range(len(str)):
                if(str[i] == " " and str[i + 1] == " "):
                    str_new = str_new + ""
                else:
                    str_new = str_new + str[i]
            print(str_new)
        else:
            print("[ОШИБКА] Данная строка имеет больше 256 символов")
    else:
            print("[ОШИБКА] Данная строка имеет в начале пробел")        
    return str_new

str_new = inputStr(str1)

with open("file2.txt","w") as f2:
    f2.write(str_new)
f2.close