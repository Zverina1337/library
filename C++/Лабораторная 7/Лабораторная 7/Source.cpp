#include <iostream>
#include <string>
#include <vector>
using namespace std;


struct Dates {
	vector <int> years = {2020,2021}; // ������-������ � ������� 1 �������� ��� ������ ���� 2 ��� ����� ����
	vector <string> months = {"May","June"}; // ������-������ � ������� 1 �������� ��� ������ ������ 2 ��� ����� ������
	string showDates() { // ������� ��� ���� ����� �������� ��� ���� ��������� � ��������
		for (int i = 0; i < months.size(); i++)
		{
			cout << i << ": " << months[i] << " " << years[i] << endl; 
		}
		return "";
	}
	int task() { // ��� ������� ������ �������
		setlocale(LC_ALL, "Russian");
		vector <string> all_months = {"january","february","march",
									"april","may","june","july","august","september","october","november","december" }; // ������ ���� �������
		string month = ""; // ��� ����� ������� ������ ������������
		string year = ""; // ��� ��� ������� ������ ������������
		int ind_month1 = 0; // ����������� ���������� ������ (months[0])
		int ind_month2 = 0; // ����������� ��������� ������ (months[1])
		int ind_month_user = 0; // ����������� ������ ������������
		cout << "������� ����[EN] � ������� [����� ���]: ";
		cin >> month >> year;
		cout << endl;
		////////////////////////////////////////// ��� ��� ����� ������ ��� ���� ����� ��� ������ ��������� � ������ ������� � ������� ������� tolower ������� ������������ ��������������� ��� !CHAR!
		for (int i = 0; i < month.length(); i++)
		{
			month[i] = tolower(month[i]); 
		}
		for (int i = 0; i < months[0].length(); i++)
		{
			months[0][i] = tolower(months[0][i]); 
		}
		for (int i = 0; i < months[1].length(); i++)
		{
			months[1][i] = tolower(months[1][i]); 
		}
		//////////////////////////////////////////
		////////////////////////////////////////// ��� ����� ���������� ��� ����� �� ������� ����������� ����� �� ���� ������� � ���������� �� ������
		for (int i = 0; i < all_months.size(); i++)
		{
			if (all_months[i] == month) {
				ind_month_user = i + 1;
			}
			if (all_months[i] == months[0]) {
				ind_month1 = i + 1;
			}
			if (all_months[i] == months[1]) {
				ind_month2 = i + 1;
			}

		}
		//////////////////////////////////////////
		////////////////////////////////////////// ��� ����� �� ���������� ������� ������������ ������� � ������� ��������� ������� stoi ������������ ��� �������� �� STRING � INT
		cout << "��� ����������� ������ ����������" << ind_month1 <<  "��� ����������� ������ ���������" << ind_month2 << "��� ����������� ������ ������� ������� ������������" << ind_month_user << endl;
		if (stoi(year) >= years[0] and stoi(year) <= years[1])
		{
			if (ind_month_user >= ind_month1 and ind_month_user <= ind_month2)
			{
				cout << "YES" << endl;
			}
		}
		//////////////////////////////////////////
		return 0;
	}
} Dates; // ����� ��� ��� ��������� � ��������� �� ���

int main() {
	Dates.showDates(); // ����� ������� ������� ��������� ������ ��������� Dates
	Dates.task(); // ����� ������� ������� ��������� ������ ��������� Dates
	return 0;
}