let date = new Date(2025, 0, 1, 0, 0, 0);
console.log(date.getTime());

let date1 = new Date(1988,3,1);
let date2 = new Date(2000,0,10);

let timestamp = Math.floor((date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24));
console.log(timestamp + " Суток");

let now = new Date();
let birthday = new Date(2004,4,30);

let diff = Math.floor((now.getTime() - birthday.getTime()) / (1000 * 60 * 60 * 24 * 30));
console.log(diff + " Месяцев");