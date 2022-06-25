file = open("data.txt","r",encoding="utf-8")
str1 = file.read().split()
file.close()

surname = []
salary = []
gender = []
index = 1
for data in str1:
    if index == 1: 
       surname.append(data)
       index = 2
       
    elif index == 2:
        salary.append(data)
        index = 3

    elif index == 3:
        gender.append(data)
        index = 1

salary1 = salary.copy()
man_max_index = 0
woman_max_index = 0
for value_s in salary1:
    max_salary = max(salary1)
    if value_s == max_salary and gender[salary1.index(value_s)] == "ж":
        woman_max_index = salary1.index(value_s)
        salary1.pop(woman_max_index)
    else:
        continue

for value_s in salary1:
    max_salary = max(salary1)
    if value_s == max_salary and gender[salary1.index(value_s)] == "м":
        man_max_index = salary.index(value_s)
    else:
        continue
   
print(surname[man_max_index],":",salary[man_max_index])
print(surname[woman_max_index],":",salary[woman_max_index],"\n")
salary1.clear()

man_average = 0
woman_average = 0
man_count = 0
woman_count = 0
gender1 = gender.copy()
salary1 = salary.copy()
for value in gender:
    if value == "м":
        man_count += 1
        man_average += int(salary1[gender1.index(value)])
        salary1.pop(gender1.index(value))  
        gender1.pop(gender1.index(value))
    else:
        woman_count += 1

for value in salary1:
    woman_average += int(value)

print("Среднее у м:",int(man_average/man_count))
print("Среднее у ж:",int(woman_average/woman_count))