
'''
# Вводим число
print('Vvedite chislo')
n = input()
m = int(n)
answer = 0 # ответ
strm = str(m)

if(len(strm) == 2): # условие для подсчёта длины строки и соответственного выбора коэффициента
    first_symbol = int(strm[0]) * 10
else:
    first_symbol = int(strm[0])

comp = first_symbol

if(m % 2 != 0 and m != 11 and m < 2 + comp): # условие для проверки на "год"
    answer = strm + " god"
if(m > 1 + comp and m < 5 + comp and len(strm) == 2): # условие для проверки на "года"
    answer = strm + " goda"
if(m > 1 and m < 5 and len(strm) != 2): # условие для проверки на "лет"
    answer = strm + " goda"
if(m < 21): # условие для правильной постановки коэффициента
    if(m > 4): # условие для проверки на "лет"
        answer = strm + " let"
if(m > 21):
    if(m > 4 + comp):
        answer = strm + " let"

print(n)
print(answer)
print(first_symbol)
'''

print('Vvedite chislo')
numbers_str = input()
numbers = list(numbers_str)
sum_num = 0

for i in numbers:
    sum_num += i
    print(sum_num)
