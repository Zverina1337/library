str1 = "Lorem ipsum dolor sit amet".lower()
list = []
all_num = 0
letters = 0
any_num = 0

for letter in str1:
    all_num += 1
    if letter.isalpha():
        letters += 1
        list.append(letter)
    else:
        any_num += 1
with open("data.txt","w",encoding="utf-8") as f1:
    f1.write("Исходная строка: " + str1 +"\n")
    f1.write("Все символы: " + str(all_num) + "\n") 
    f1.write("Все буквы: " + str(letters) + "\n") 
    f1.write("Другие символы: " + str(any_num) + "\n") 
    f1.write("Кол-во встречающихся символов в строке: " + "\n")
    n = 0
    for letter in str1:
        for symbol in list:
            if(letter == symbol):
                n += 1
        if letter != " ":
            f1.write(letter + ":" + str(n) + "\n")
        n = 0
 