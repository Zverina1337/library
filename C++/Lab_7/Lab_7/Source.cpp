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
				if (info[i] == "m" || info[i] == "M" || info[i] == "�" || info[i] == "�")
				{
					countOfMans++;
				}
				else if (info[i] == "w" || info[i] == "W" || info[i] == "�" || info[i] == "�") {
					countOfWomans++;
				}
			}
		}
		else {
			cout << "����� ��� �� ������" << endl;
		}
	}
	cout << "���������� ������: " << countOfMans;
	cout << "���������� ������: " << countOfWomans;
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
		transformInfo(name, "���: ");
		transformInfo(surname,"�������: ");
		transformInfo(patronymic, "��������: ");
		transformInfo(street, "�����: ");
		transformInfo(home, "���: ");
		transformInfo(num_flat, "����� ��������: ");
		transformInfo(gender, "���: ");
		transformInfo(age, "�������: ");
		cout << endl;

		return 0;
	}
	int showCountOfVillagers() {
		string num_house = "";
		cout << "������� ����� ����, � ������� �� ������ ������ ���-�� ����� ������ �����: ";
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

	cout << "������� ���: ";
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

	cout << "������� �����: ";
	cin >> value;
	form.street.push_back(value);
	value = "";
	cout << endl;

	cout << "������� ����� ���: ";
	cin >> value;
	form.home.push_back(value);
	value = "";
	cout << endl;

	cout << "������� ����� ��������: ";
	cin >> value;
	form.num_flat.push_back(value);
	value = "";
	cout << endl;

	cout << "������� ���� ���: ";
	cin >> value;
	form.gender.push_back(value);
	value = "";
	cout << endl;

	cout << "������� �������: ";
	cin >> value;
	form.age.push_back(value);
	value = "";
	cout << endl;

	cout << "������� ��� ��������? Y/N";
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
