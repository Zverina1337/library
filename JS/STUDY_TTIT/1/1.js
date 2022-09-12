// 1
alert("Я, JAVASCRIPT!");
// 2 ./2.js
// 3 
let name = "Джон";
let admin = name;
alert(admin);
// 4 
let Earth = 'Earth';
let user = ""
// 5 
let username = prompt('Как вас зовут?');
alert(`Ваще имя ${username}`)
// 6
let answer = prompt('Какое оффициальное название JS?');
if(answer == 'ECMAScript'){
    alert('Верно!')
}else{
    alert('Не знаете? ECMAScript!');
}
// 7
let num = Number(prompt('Число?'));
if(num > 0){
    alert(1);
}else if(num < 0){
    alert(-1);
}else{
    alert(0);
}
// 8
let a = 0;
let b = 0;
let result = (a + b == 0) ? 'Мало' : 'Много';
// 9
let age = 0;
if(age >= 14 && age <= 90){
    console.log('cool');
}
// 10
let login = prompt('Log in');

if(login == 'Админ'){
    password = prompt("Password: ");
    if(password == 'Я главный'){
        alert('Здравствуйте!');
    }else if (password == null){
        alert("Отменено");
    }else{
        alert('Неверный пароль!');
    }
}else if(login == null){
    alert("Отменено")
}else{
    alert('Я вас не знаю!');
}
// 11
let nums = [2,3,4,5,6,7,8,9,10];
for(let num of nums){
    if(num % 2 == 0){
        console.log(num);
    }
}
// 12
let i = 0;

while(i < 3){
    console.log(`number ${i}`);
    i++;
}

// 13

function recourse(){
    let num = prompt('Напишите число большее 100.');
    if(num <= 100){
        recourse();
    }
}
recourse();

// 14

function primeNums(num){
    for(let i = 2; i <= num;i++){
        if(num % i !== 0){
            console.log(num);
        }
    }
}

let number = prompt('Введите число');
primeNums(number);

// 15

const n = Number(prompt('Введите число между 0 и 3', ''));

switch(n){
    case 0: {
        alert('Вы ввели число 1');
        break;
    }
    case 1: {
        alert('Вы ввели число 1');
        break;
    }
    case 3 || 2: {
        alert('Вы ввели число 1');
        break;
    }
}

// 16

function min(a,b){
    return console.log(Math.min(a,b));
}

let a_ = prompt("Введите число a");
let b_ = prompt("Введите число b");

min(a_,b_);

// 17

function pow(a, n = 2){
    return console.log(Math.pow(a,n));
}
let num_ = prompt('Введите число');
let n_ = prompt(`Введите степень числа ${num_}`);

pow(num_, n_);

// 18

let ask = (question, yes, no) => {
    if (confirm(question)) yes()
    else no();
 }
ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
 );
 