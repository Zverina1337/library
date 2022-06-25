#include <iostream>
#include <string>
#include <vector>
using namespace std;


struct Dates {
	vector <int> years = {2020,2021}; // массив-вектор в котором 1 значение это начало года 2 это конец года
	vector <string> months = {"May","June"}; // массив-вектор в котором 1 значение это начало мес€ца 2 это конец мес€ца
	string showDates() { // функци€ дл€ того чтобы показать все даты имеющиес€ в массивах
		for (int i = 0; i < months.size(); i++)
		{
			cout << i << ": " << months[i] << " " << years[i] << endl; 
		}
		return "";
	}
	int task() { // это функци€ самого задани€
		setlocale(LC_ALL, "Russian");
		vector <string> all_months = {"january","february","march",
									"april","may","june","july","august","september","october","november","december" }; // массив всех мес€цев
		string month = ""; // наш мес€ц который укажет пользователь
		string year = ""; // наш год который укажет пользователь
		int ind_month1 = 0; // индификатор начального мес€ца (months[0])
		int ind_month2 = 0; // индификатор конечного мес€ца (months[1])
		int ind_month_user = 0; // индификатор мес€ца пользовател€
		cout << "¬ведите дату[EN] в формате [ћес€ц √од]: ";
		cin >> month >> year;
		cout << endl;
		////////////////////////////////////////// все эти циклы служат дл€ того чтобы им€ мес€ца поставить в нижний регистр с помощью функции tolower котора€ используетс€ преимущественно дл€ !CHAR!
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
		////////////////////////////////////////// вот здесь происходит вс€ маги€ мы находим определЄнный мес€ц из всех мес€цов и запоминаем их индекс
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
		////////////////////////////////////////// вот здесь мы сравниваем индексы получившихс€ мес€цев и выводим сообщение функци€ stoi используетс€ дл€ перевода из STRING в INT
		cout << "Ёто индификатор мес€ца начального" << ind_month1 <<  "Ёто индификатор мес€ца конечного" << ind_month2 << "Ёто индификатор мес€ца который написал пользователь" << ind_month_user << endl;
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
} Dates; // пишут так дл€ обращени€ к структуре из вне

int main() {
	Dates.showDates(); // вызов функции котора€ находитс€ внутри структуры Dates
	Dates.task(); // вызов функции котора€ находитс€ внутри структуры Dates
	return 0;
}