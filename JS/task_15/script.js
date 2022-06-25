function checkSecBeginDay(){
    let now = new Date;
    let date1 = new Date(now.getFullYear(),now.getMonth(),now.getDate(),0,0,0);
    let date2 = new Date(now.getFullYear(),now.getMonth(),now.getDate(),now.getHours(),now.getMinutes(),now.getSeconds());

    let diff = (date2 - date1) / (1000);
    console.log(diff);
}
checkSecBeginDay();

function checkSecEndDay(){
    let now = new Date;
    let date1 = new Date(now.getFullYear(),now.getMonth(),now.getDate(),now.getHours(),now.getMinutes(),now.getSeconds());
    let date2 = new Date(now.getFullYear(),now.getMonth(),now.getDate(),24);

    let diff = (date2 - date1) / 1000;
    console.log(diff);
}
checkSecEndDay();

function checkNewYear(){
    let now = new Date;
    let date1 = new Date(now.getFullYear(),11,31);
    let date2 = new Date(now.getFullYear(),now.getMonth(),now.getDate());

    let diff = (date1 - date2) / (1000 * 60 * 60 * 24);
    console.log(diff);
}
checkNewYear();

function checkCountFridays(){
    let now = new Date;
    let year = now.getFullYear();
    let fridayCount = 0;
    for(let month = 0;month < 11;month++){
        let days = new Date(year,month + 1,0);
        for (let day = 1;day < days.getDate();day++){
            let friday = new Date(year,month,day);
            if(day === 13 && friday.getDay() === 5){
                fridayCount++;
                console.log(friday);
            }
        }
    }
    console.log(fridayCount);
}
checkCountFridays();

function checkYear(){
    let now = new Date;
    let date = new Date(now.getFullYear(),now.getMonth() - 3);
    console.log(date.getFullYear());
}
checkYear();

function checkLastDay(){
    let now = new Date;
    let date = new Date(now.getFullYear(),now.getMonth(),0);

    console.log(date.getDay());
}
checkLastDay();

function checkLeapYear(){
    let now = new Date;
    let date = new Date(2020,2,0);
    if (date.getDate() === 29){
        console.log(date.getFullYear() + " год является високосным");
    }else{
        console.log(date.getFullYear() + " год не является високосным");
    }
    console.log(date.getDate());

}
checkLeapYear();

function checkPastLeapYear(){
    let now = new Date;
    let thisYear = now.getFullYear();
    let leapYear = 0;
    let i = 5;

    for(let year = thisYear;i > 0;year--){
        console.log(year);
        let currentYear = new Date(year,2,0);
        if(currentYear.getDate() === 29){
            leapYear = currentYear.getFullYear();
            console.log(leapYear + " является предыдущим високосным годом");
            break;
        }
    }
}
checkPastLeapYear();

function checkNextLeapYear(){
    let now = new Date;
    let thisYear = now.getFullYear();
    let leapYear = 0;
    let i = 0;

    for(let year = thisYear;i < 5;year++){
        console.log(year);
        let currentYear = new Date(year,2,0);
        if(currentYear.getDate() === 29){
            leapYear = currentYear.getFullYear();
            console.log(leapYear + " является следующим високосным годом");
            break;
        }
    }

}
checkNextLeapYear();