#include <iostream>
#include <fstream>
#include <string>
#include <vector>
using namespace std;

vector <string> view_db() {
	ifstream file("data.txt");
	string buff;
	vector <string> data;
	int count_lines = 0;
	int count_words = 0;
	int i = 0;
	cout << endl;
	if (file.is_open()) {
		cout << "file open" << endl;
		while (!file.eof())
		{
			i++;
			if (i == 4)
			{
				count_lines++;
				i = 0;
			}
			file >> buff;
			data.push_back(buff);
		}
		data.resize(data.size() - 1);
		for (int i = 0; i < data.size(); i++)
		{
			count_words++;
			cout << data[i] << " ";
			if (count_words == 4)
			{
				cout << endl;
				count_words = 0;
			}
		}
		file.close();
		return data;
		data.clear();
	}
	else if (!(file.is_open())) {
		cout << "file is not open" << endl;
		return data;
		data.clear();
	}
}
string edit_str(vector <string> data) {
	vector <string> ids;
	vector <string> surnames;
	vector <string> names;
	vector <string> numbers;
	vector <string> temp;
	vector <string> new_data;

	// декомпонируем элементы базы данных

	for (int i = 0; i < data.size(); i++) {
		if (i % 4 == 0) {
			ids.push_back(data[i]);
		}
		else if (i % 2 != 0 and i != 0) {
			surnames.push_back(data[i]);
			for (int j = 0; j < surnames.size(); j++) {
				temp.push_back(surnames[j]);
			}
			surnames.clear();
		}
		else if (i % 2 == 0) {
			names.push_back(data[i]);
		}

	}
	for (int i = 0; i < temp.size(); i++) {
		if (i % 2 == 0) {
			surnames.push_back(temp[i]);
		}
		if (i % 2 != 0) {
			numbers.push_back(temp[i]);
		}
	}
	temp.clear();
	cout << endl;

	int id = -1;
	string value = "";
	string new_value = "";
	cout << "Напишите id строки: ";
	cin >> id;

	cout << "Что вы хотите изменить?" << endl;
	cout << "Имя - 0" << endl;
	cout << "Фамилия - 1" << endl;
	cout << "Номер - 2" << endl;
	cin >> value;
	cout << endl;

	if (value == "0") {
		cout << "Старое имя: " << names[id] << endl;
		cout << "Новое имя: ";
		cin >> new_value;
		names[id] = new_value;

		if (names[id] == new_value) {
			cout << "Редактирование выполнено успешно" << endl;
			cout << names[id] << endl;
		}
	}
	if (value == "1") {
		cout << "Старая фамилия: " << surnames[id] << endl;
		cout << "Новая фамилия: ";
		cin >> new_value;
		surnames[id] = new_value;

		if (surnames[id] == new_value) {
			cout << "Редактирование выполнено успешно" << endl;
			cout << surnames[id] << endl;
		}
	}
	if (value == "2") {
		cout << "Старый номер: " << numbers[id] << endl;
		cout << "Новый номер: ";
		cin >> new_value;
		numbers[id] = new_value;

		if (numbers[id] == new_value) {
			cout << endl;
			cout << "Редактирование выполнено успешно" << endl;
			cout << numbers[id] << endl;
		}
	}
	for (int i = 0; i < ids.size(); i++)
	{
		new_data.push_back(ids[i]);
		new_data.push_back(surnames[i]);
		new_data.push_back(names[i]);
		new_data.push_back(numbers[i]);
	}
	cout << endl;
	int count_words = 0;
	for (int i = 0; i < new_data.size(); i++)
	{
		cout << new_data[i] << " ";
		count_words++;
		if (count_words == 4)
		{
			cout << endl;
			count_words = 0;
		}
	}

	count_words = 0;
	ofstream file("data.txt");
	for (int i = 0; i < new_data.size(); i++)
	{
		file << new_data[i] << " ";
		count_words++;
		if (count_words == 4)
		{
			file << "\n";
			count_words = 0;
		}
	}
	file.close();
	cout << endl;

	ids.clear();
	surnames.clear();
	names.clear();
	numbers.clear();
	new_data.clear();

	return "";
}

string delete_value_db(vector <string> data) {
	vector <string> ids;
	vector <string> temp;
	vector <string> new_data;
	string value = "";
	int begin = 0;
	for (int i = 0; i < data.size(); i++) {
		if (i % 4 == 0) {
			ids.push_back(data[i]);
		}
	}
	cout << "Чтобы удалить строку, просто впишите его id" << endl;
	cin >> value;
	for (int i = 0; i < data.size(); i++)
	{
		if (data[i] == value) {
			begin = i;
		}
	}

	for (int i = 0; i < ids.size() - 1; i++)
	{
		temp.push_back(to_string(i));
	}
	ids.clear();
	for (int i = 0; i < temp.size(); i++)
	{
		ids.push_back(temp[i]);
	}
	int count_words = 0;
	int j = 0;
	for (int i = 0; i < data.size(); i++)
	{
		if (i != begin && i != begin + 1 && i != begin + 2 && i != begin + 3)
		{
			if (count_words == 4 || count_words == 0)
			{
				new_data.push_back(ids[j]);
				count_words = 0;
				j++;
			}
			else {
				new_data.push_back(data[i]);
			}
			count_words++;
		}
	}
	cout << endl;
	count_words = 0;
	for (int i = 0; i < new_data.size(); i++)
	{
		cout << new_data[i] << " ";
		count_words++;
		if (count_words == 4)
		{
			cout << endl;
			count_words = 0;
		}
	}
	ofstream file("data.txt");
	for (int i = 0; i < new_data.size(); i++)
	{
		file << new_data[i] << " ";
		count_words++;
		if (count_words == 4)
		{
			file << "\n";
			count_words = 0;
		}
	}
	file.close();
	ids.clear();
	new_data.clear();
	cout << endl;
	return "";
}
string add_value_db(vector <string> data) {
	string surname = "";
	string name = "";
	string number = "";
	vector <string> new_data;
	vector <string> ids;

	cout << "Для того, чтобы добавить новую строку справочника запишите данные" << endl;
	cout << "Имя: ";
	cin >> name;
	cout << "Фамилия: ";
	cin >> surname;
	cout << "Номер: ";
	cin >> number;

	for (int i = 0; i < data.size(); i++) {
		if (i % 4 == 0) {
			ids.push_back(data[i]);
		}
	}
	for (int i = 0; i < data.size(); i++)
	{
		new_data.push_back(data[i]);
	}
	new_data.push_back(to_string(ids.size()));
	new_data.push_back(surname);
	new_data.push_back(name);
	new_data.push_back(number);

	int count_words = 0;

	for (int i = 0; i < new_data.size(); i++)
	{
		cout << new_data[i] << " ";
		count_words++;
		if (count_words == 4)
		{
			cout << endl;
			count_words = 0;
		}
	}

	ofstream file("data.txt");
	for (int i = 0; i < new_data.size(); i++)
	{
		file << new_data[i] << " ";
		count_words++;
		if (count_words == 4)
		{
			file << "\n";
			count_words = 0;
		}
	}
	file.close();
	ids.clear();
	new_data.clear();
	cout << endl;
	return "";
}
string search_value_db(vector <string> data) {
	vector <string> ids;
	vector <string> surnames;
	vector <string> names;
	vector <string> numbers;
	vector <string> temp;
	vector <string> new_data;

	// декомпонируем элементы базы данных

	for (int i = 0; i < data.size(); i++) {
		if (i % 4 == 0) {
			ids.push_back(data[i]);
		}
		else if (i % 2 != 0 and i != 0) {
			surnames.push_back(data[i]);
			for (int j = 0; j < surnames.size(); j++) {
				temp.push_back(surnames[j]);
			}
			surnames.clear();
		}
		else if (i % 2 == 0) {
			names.push_back(data[i]);
		}

	}
	for (int i = 0; i < temp.size(); i++) {
		if (i % 2 == 0) {
			surnames.push_back(temp[i]);
		}
		if (i % 2 != 0) {
			numbers.push_back(temp[i]);
		}
	}
	temp.clear();
	cout << endl;

	string value = "";
	cout << "Введите значение, которое вы хотите найти" << endl;
	cin >> value;
	for (int i = 0; i < ids.size(); i++)
	{
		if (value == ids[i] || value == surnames[i] || value == names[i] || value == numbers[i]) {
			cout << ids[i] << " " << surnames[i] << " " << names[i] << " " << numbers[i] << endl;
		}
	}
	return "";
}
int manage_db() {
	cout << endl;
	setlocale(LC_ALL, "rus");
	string value;
	cout << "Для того чтобы работать со справочником, вам необходимо вписать значение в консоль" << endl;
	cout << "Список значений:" << endl;
	cout << "Просмотр справочника - 1" << endl;
	cout << "Редактирование строки справочника - 2" << endl;
	cout << "Удалить строку справочника - 3" << endl;
	cout << "Поиск строки справочника - 4" << endl;
	cout << "Добавить строку справочника - 5" << endl;
	cout << "Выйти - [Любое другое значение]" << endl;
	cin >> value;

	if (value == "1")
	{
		view_db();
		manage_db();
	}
	if (value == "2")
	{
		edit_str(view_db());
		manage_db();
	}
	if (value == "3")
	{
		delete_value_db(view_db());
		manage_db();
	}
	if (value == "4")
	{
		search_value_db(view_db());
		manage_db();
	}
	if (value == "5") {
		add_value_db(view_db());
		manage_db();
	}
	return 0;
}
int main() {
	manage_db();
}