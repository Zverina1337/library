import math
import types

def square(a,b,c):
    D = b**2 - 4 * a * c
    if D > 0:
        x1 = round((-b - math.sqrt(D))/2 * a,2)
        x2 = round((-b + math.sqrt(D))/2 * a,2)
        print(x1,x2)
    elif D == 0:
        x = round(-b/2 * a,2)
        print(x)
    elif D < 0:
        print('Korney net')

def square1(a,b,c):
        if type(a) == int and type(b) == int and type(c) == int:
            square(a,b,c)
        elif type(a) != int or type(b) != int or type(c) != int:
            try:
                square(int(float(str(a))),int(float(str(b))),int(float(str(c))))
            except:
                if(type(a) == str or type(b) == str or type(c) == str):
                    print("Please, input numbers")
                    square1(input(),input(),input())

print("Input a,b,c")
square1(input(),input(),input())