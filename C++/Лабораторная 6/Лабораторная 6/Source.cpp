#include <iostream>
#include <vector>
#include <string>
using namespace std;
int const str = 4; // ����������� ����������� �������� ������
int const �olumn = 5; // ����������� ����������� �������� �������
int const* iStr = &str; // ��������� ������
int const* iColumn = &�olumn; // ��������� �������

int **find_min_el(int array[str][�olumn]) {
	int iValue = 0; // ����� �������� �������
	for (int* i = &iValue; *i < *iStr; (*(i))++)
	{
		int jValue = 0;
		for (int* j = &jValue; *j < *iColumn; (*(j))++)
		{
			cout << array[*i][*j] << " ";
		}
		cout << endl;

	}
	iValue = 0;
	int sortedArray[str][�olumn] = {}; // ������������ ��� �������� �� �������� ������� � ��� ������� ����� ������������
	for (int* i = &iValue; *i < *iStr; (*(i))++)
	{
		int jValue = 0;
		for (int* j = &jValue; *j < *iColumn; (*(j))++)
		{
			sortedArray[*i][*j] =  array[*i][*j];
		}
	}
	iValue = 0;
	int buff = 0; // ��������� �� ��������
	for (int* i = &iValue; *i < *iStr; (*(i))++)
	{
		int kValue = 1;
		for (int* k = &kValue; *k < *iColumn; (*(k))++)
		{
			int jValue = 0;
			for (int* j = &jValue; *j < *iColumn; (*(j))++)
			{
				if (sortedArray[*i][*j] > sortedArray[*i][*k])
				{
					buff = sortedArray[*i][*j];
					sortedArray[*i][*j] = sortedArray[*i][*k];
					sortedArray[*i][*k] = buff;
				}
			}
			
		}
		cout << endl;

	}
	iValue = 0;
	// ������� ��������������� ������ �� �������
	for (int* i = &iValue; *i < *iStr; (*(i))++)
	{
		int jValue = 0;
		for (int* j = &jValue; *j < *iColumn; (*(j))++)
		{
			cout << sortedArray[*i][*j] << " ";
		}
		cout << endl;

	}
	iValue = 0;
	cout << endl;
	string str1 = ""; // ������ � ������� �� ����� ��������� �������
	vector <string> min_values; // ������ ���� ����� ��������� �������
	for (int* i = &iValue; *i < *iStr; (*(i))++) // ��������� ��� �������� � ���������� � ������
	{
		int jValue = 0;
		for (int* j = &jValue; *j < *iColumn; (*(j))++)
		{
			if (sortedArray[*i][0] == array[*i][*j]) {
				str1 = to_string(*i) + " " + to_string(*j);
				min_values.push_back(str1);
			};
		}
		cout << endl;

	}

	for (int i = 0; i < min_values.size(); i++) // ������� ������
	{
		cout << min_values[i] << ",";
	}


	return 0;
}

int main() {
	int array[str][�olumn] = {
		{2,1,3,7,6},
		{6,5,4,42,5},
		{1,9,8,3,6},
		{4,2,4,3,1},
	};
	find_min_el(array);
	return 0;
}