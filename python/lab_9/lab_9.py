import pandas as pd
df = pd.read_csv('data.txt',names=['Артикул','Название','Цена','Кол-во товара','Краткое описание'])
print(df)
value = input()
print(df[df['Артикул'] == value])
