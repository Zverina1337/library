from ast import If


f1 = open("file.txt","r",encoding="utf-8")
string = str(f1.read());
f1.close
i = 0
with open("text.txt","w") as f2:
    f2.write("")
    f2.close
for word in string.split(" "):
    i += 1
    if(i >= 1 and i <= 21):
        with open("text.txt","a",encoding="utf-8") as f2:
            f2.write(word + "\n")
            print(word)
            f2.close
