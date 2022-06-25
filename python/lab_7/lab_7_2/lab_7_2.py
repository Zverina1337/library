from itertools import count


file = open("data.txt","r",encoding="utf-8")
data = file.read()
file.close()

data.split()
num = []
A = []
B = []
time_A = []
time_B = []
n = 1

for value in data.lower().split():
    if n == 1:
        num.append(value)
        n = 2
    elif n == 2:
        A.append(value)
        n = 3
    elif n == 3:
        B.append(value)
        n = 4
    elif n == 4:
        time_A.append(value)
        n = 5
    elif n == 5:
        time_B.append(value)
        n = 1

ind = None
while True:
    value = input()
    if value == "-":
        break
    else:
        for i in num:
            for j in B:
                if value.lower() == j:
                    ind = B.index(j)
                if value == i:
                    ind = num.index(i)
        try:
            print(num[ind],A[ind].title(),B[ind].title(),time_A[ind],time_B[ind])
        except:
            print("[ОШИБКА] Некорректное значение")
        
        ind = None
        
         
                

   