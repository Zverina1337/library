let today_h1 = document.getElementById("today");
let weekend_h1 = document.getElementById("weekend");
let time_to_weekend = document.getElementById("time_to_weekend");

let date = new Date;
let today = date.getDay();
let time = -(today - 7);
today_h1.innerText = "Текущий день недели равен: " + String(today);

if (today === 0 || today === 6){
    weekend_h1.innerText = "Данный день является выходным";
}else{
    weekend_h1.innerText = "Данный день не является выходным";
}

time_to_weekend.innerText = "Осталось до воскресения дней: " + String(time);