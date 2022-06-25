#include <iostream>
#include <string>
#include <vector>
using namespace std;

int transformInfo(vector <string> values, string value) {
	setlocale(LC_ALL, "Russian");
	for (int i = 0; i < values.size(); i++)
	{
		cout << value << values[i] << " ";
	}
	cout << endl;
	return 0;
}

int countOfVillagers(vector <string> info,vector <string> infoHome, string num_house) {
	setlocale(LC_ALL, "Russian");

	int countOfMans = 0;
	int countOfWomans = 0;
	for (int j = 0; j < infoHome.size(); j++)
	{
		if (infoHome[j] == num_house)
		{
			for (int i = 0; i < info.size(); i++)
			{
				if (info[i] == "m" || info[i] == "M" || info[i] == "М" || info[i] == "м")
				{
					countOfMans++;
				}
				else if (info[i] == "w" || info[i] == "W" || info[i] == "Ж" || info[i] == "ж") {
					countOfWomans++;
				}
			}
		}
		else {
			cout << "Такой дом не найден" << endl;
		}
	}
	cout << "Количество мужчин: " << countOfMans;
	cout << "Количество женщин: " << countOfWomans;
	return 0;
}
struct form {
	vector <string> name;
	vector <string> surname; 
	vector <string> patronymic;
	vector <string> street;
	vector <string> home;
	vector <string> num_flat;
	vector <string> gender;
	vector <string> age;
	
	int showInfo() {
		transformInfo(name, "Имя: ");
		transformInfo(surname,"Фамилия: ");
		transformInfo(patronymic, "Отчество: ");
		transformInfo(street, "Улица: ");
		transformInfo(home, "Дом: ");
		transformInfo(num_flat, "Номер квартиры: ");
		transformInfo(gender, "Пол: ");
		transformInfo(age, "Возраст: ");
		cout << endl;

		return 0;
	}
	int showCountOfVillagers() {
		string num_house = "";
		cout << "Введите номер дома, в котором вы хотите узнать кол-во людей разных полов: ";
		cin >> num_house;
		cout << endl;

		countOfVillagers(gender, home, num_house);
		cout << endl;

		return 0;
	}
} form;

string getInfoForForm() {
	setlocale(LC_ALL, "Russian");
	string booly = "";
	string value = "";

	cout << "Введите ФИО: ";
	cin >> value;
	form.name.push_back(value);
	value = "";

	cin >> value;
	form.surname.push_back(value);
	value = "";

	cin >> value;
	form.patronymic.push_back(value);
	value = "";
	cout << endl;

	cout << "Введите улицу: ";
	cin >> value;
	form.street.push_back(value);
	value = "";
	cout << endl;

	cout << "Введите номер дом: ";
	cin >> value;
	form.home.push_back(value);
	value = "";
	cout << endl;

	cout << "Введите номер квартиры: ";
	cin >> value;
	form.num_flat.push_back(value);
	value = "";
	cout << endl;

	cout << "Введите свой пол: ";
	cin >> value;
	form.gender.push_back(value);
	value = "";
	cout << endl;

	cout << "Введите возраст: ";
	cin >> value;
	form.age.push_back(value);
	value = "";
	cout << endl;

	cout << "Вписать ещё значения? Y/N";
	cout << endl;
	cin >> booly;

	if (booly == "Y" || booly == "y")
	{
		getInfoForForm();
		return "";
	}
	else if (booly == "N" || booly == "n") {
		form.showInfo();
		return "";
	}
};
int main() {
	setlocale(LC_ALL, "Russian");
	getInfoForForm();
	form.showCountOfVillagers();
	return 0;
}
