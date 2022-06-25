#include <iostream>
#include <fstream>
#include <string>
#include <set>
#include <iterator>
using namespace std;

// нужно добавить полный путь к файлу file.txt чтобы всё работало 

string freq(string str) {
	set <char> unique_symbols;
	multiset <char> symbols;
	multiset <char> :: iterator ms;
	string new_str;
	// меняем размер строки и превращаем её в набор букв
	for (int i = 0; i < str.length(); i++)
	{
		if (str[i] != ' ' && str[i] != ',' && str[i] != '!' && str[i] != '?' && str[i] != '.')
		{
			new_str += str[i];
		}
	}
	cout << "Набор букв в тексте: " << new_str << endl;
	cout << "Размер набора букв: " << new_str.length() << "\n\n";
	for (int i = 0; i < new_str.length(); i++)
	{
		unique_symbols.insert(new_str[i] = tolower(new_str[i]));
		symbols.insert(new_str[i] = tolower(new_str[i]));
	}
	
	copy(symbols.begin(), symbols.end(), ostream_iterator<char>(cout << endl));
	copy(unique_symbols.begin(), unique_symbols.end(), ostream_iterator<char>(cout << endl));

	int count = 0;
	for (set <char> ::iterator s = unique_symbols.begin(); s != unique_symbols.end(); s++)
	{	
		cout << symbols.count(*s) << " ";
		cout << *s << endl;
	}

	return "";
}

string getString() {
	setlocale(LC_ALL, "rus");
	char somestr[50] = {};
	ifstream file("file.txt");

	if (file.is_open())
	{
		cout << "Файл открыт\n\n";
		file.getline(somestr, 50);
	}
	else {
		cout << "Файл не открыт\n\n";
	}
	string new_str(somestr, sizeof(somestr));
	cout << "___________________________________________" << "\n\n";
	cout << "Наша строка: " << new_str << "\n";
	cout << "___________________________________________" << "\n\n";
	return new_str;
}

int main() {
	string str = getString();
	freq(str);
	return 0;
}