#include <iostream>
#include <cstdlib>
using namespace std;


int main() {
	int str = 0;
	int column = 0;
	int i, j, *arr;
	int** array;
	setlocale(LC_ALL, "rus");
	cout << "Введите кол-во строк: ";
	cin >> str;
	cout << "Введите кол-во столбцов: ";
	cin >> column;

	array = (int**)malloc(str * column * sizeof(int*));
	arr = (int*)malloc(str * column * sizeof(int));
	
	for (i = 0; i < str; i++)
	{
		arr[i] = (int*)malloc(str[&i] * sizeof(int));
		for (j = 0; j < column; j++)
		{
			arr[i] = rand() % 10;
			cout << arr[i] << " ";
		}
		cout << endl;
	}
	sortArray(arr, str, column);
}
int** sortArray(int array[], int str, int column) {
	// i = строка
	// j = столбик

	int iValue = 0;
	int* iStr = &str;
	int* iColumn = &column;

	// сортировка
	int type = 0;
	for (int* i = &iValue; *i < *iStr; (*(i))++)
	{
		int kValue = 1;
		for (int* k = &kValue; *k < *iColumn; (*(k))++)
		{
			int jValue = 0;
			for (int* j = &jValue; *j < *iColumn; (*(j))++)
			{
				if (array[0][*j] > array[0][*k])
				{
					int nValue = 0;
					for (int* n = &nValue; *n < *iStr; (*(n))++)
					{
						type = array[*n][*j];
						array[*n][*j] = array[*n][*k];
						array[*n][*k] = type;
					}
				}
			}
		}
		cout « endl;
	}
	iValue = 0;

	// вывод значений "После"
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

	return 0;
}
