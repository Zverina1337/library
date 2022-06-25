from cProfile import label
from turtle import color
import matplotlib.pyplot as plt
import numpy as np
import math 

def taylor(x, n):
    y = 0; # Начало суммы
    sign = 1; # Знак первого члена ряда
    term = x; # Первый член ряда
    for i in range(1, n):
        # Прибавляем член к ряду
        y = y + sign*term; 
        # Вычисляем следующий член ряда
        sign = - sign;
        denom = (2*i)*(2*i+1);
        term = term * x*x/denom;
    return y;

x = np.arange(-9,9,0.1)
y_sin = []
y_cos = []
taylor10 = taylor(x, 10)
taylor100 = taylor(x, 100)
for i in x:
    y_sin.append(math.sin(i))
    y_cos.append(math.cos(i))

plt.plot(x,y_cos,label="math.cos")
plt.plot(x,taylor10,label="taylor(10)",linestyle="dashed")
plt.plot(x,y_sin,label="math.sin",color="red")
plt.plot(x,taylor100,label="taylor(100)",linestyle="dashed")
plt.legend(loc="lower left")
plt.show()
