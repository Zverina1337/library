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