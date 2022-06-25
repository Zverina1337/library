#include <iostream>
#include <vector>
#include <string>
using namespace std;
int const str = 4; // изначальные константные значения строки
int const сolumn = 5; // изначальные константные значения столбца
int const* iStr = &str; // указатели строки
int const* iColumn = &сolumn; // указатели столбца

int **find_min_el(int array[str][сolumn]) {
	int iValue = 0; // вывод обычного массива
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
	int sortedArray[str][сolumn] = {}; // перекидываем все значения из обычного массива в тот который будет отсортирован
	for (int* i = &iValue; *i < *iStr; (*(i))++)
	{
		int jValue = 0;
		for (int* j = &jValue; *j < *iColumn; (*(j))++)
		{
			sortedArray[*i][*j] =  array[*i][*j];
		}
	}
	iValue = 0;
	int buff = 0; // сортируем по пузырьку
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
	// выводим отсортированный массив по строкам
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
	string str1 = ""; // строка в которую мы будем склеивать индексы
	vector <string> min_values; // массив куда будем скидывать индексы
	for (int* i = &iValue; *i < *iStr; (*(i))++) // склеиваем все значения и засовываем в массив
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

	for (int i = 0; i < min_values.size(); i++) // выводим массив
	{
		cout << min_values[i] << ",";
	}


	return 0;
}

int main() {
	int array[str][сolumn] = {
		{2,1,3,7,6},
		{6,5,4,42,5},
		{1,9,8,3,6},
		{4,2,4,3,1},
	};
	find_min_el(array);
	return 0;
}