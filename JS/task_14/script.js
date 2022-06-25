function checkDate(year,month,day){
    let date = new Date(year,month,day);
    if(date.getFullYear() === year && date.getMonth() === month && date.getDate() === day){
        console.log("Дата корректна");
    }else{
        console.log("Дата не корректна");
    }
}
checkDate(2025, 0, 31);

function checkDay(){
    let now = new Date;
    let date = new Date(now.getFullYear(),0,0);
    console.log(date.getDay());
}
checkDay();

function checkDay2(){
    let now = new Date;
    let date = new Date(now.getFullYear(),now.getMonth(),1);
    console.log(date.getDay());
}
checkDay2();
function checkDay3(){
    let now = new Date;
    let date = new Date(now.getFullYear() + 1,0,31);
    console.log(date.getDay());
}
checkDay3();

function checkDay4(){
    let now = new Date;
    let date = new Date(now.getFullYear() + 1,now.getMonth(),now.getDate());
    console.log(date.getDay());
}
checkDay4();

function checkDay5(){
    let now = new Date;
    let date = new Date(now.getFullYear() - 1,now.getMonth(),now.getDate());
    console.log(date.getDay());
}
checkDay5();

function checkDay6(){
    let now = new Date;
    let date = new Date(now.getFullYear(),now.getMonth() - 1,now.getDate());
    console.log(date.getDay());
}
checkDay6();

function checkCountDays(){
    let now = new Date;
    let date1 = new Date(now.getFullYear(),0,1);
    let date2 = new Date(now.getFullYear(),8,10);

    let diff = (date2 - date1) / (1000 * 60 * 60 * 24);
    console.log(diff);
}
checkCountDays();
function checkCountDays2(){
    let now = new Date;
    let date1 = new Date(now.getFullYear(),now.getMonth(),20);
    let date2 = new Date(now.getFullYear(),now.getMonth() + 1,10);

    let diff = (date2 - date1) / (1000 * 60 * 60 * 24);
    console.log(diff);
}
checkCountDays2();

function checkCountHours(){
    let now = new Date;
    let date1 = new Date(now.getFullYear(),now.getMonth(),now.getDate() - 1,12);
    let date2 = new Date(now.getFullYear(),now.getMonth(),now.getDate(),now.getHours());

    let diff = (date2 - date1) / (1000 * 60 * 60);
    console.log(diff);
}
checkCountHours();

function checkCountHours2(){
    let now = new Date;
    let date1 = new Date(now.getFullYear(),now.getMonth(),now.getDate(),0);
    let date2 = new Date(now.getFullYear(),now.getMonth(),now.getDate(),now.getHours());

    let diff = (date2 - date1) / (1000 * 60 * 60);
    console.log(diff);
}
checkCountHours2();

function checkCountHours3(){
    let now = new Date;
    let date1 = new Date(now.getFullYear(),now.getMonth(),now.getDate(),now.getHours());
    let date2 = new Date(now.getFullYear(),now.getMonth(),now.getDate(),24);

    let diff = (date2 - date1) / (1000 * 60 * 60);
    console.log(diff);
}
checkCountHours3();

function checkMonth(){
    let now = new Date;
    for (let year = 2000;year <= now.getFullYear();year++){
        let date = new Date(year,0,1);
        if(date.getDay() === 6 || date.getDay() === 0){
            console.log(year);
        }
    }
}
checkMonth();