function checkAfternoon(){
    let now = new Date;
    let date1 = new Date(now.getFullYear(),now.getMonth(),now.getDate(),now.getHours());
    let date2 = new Date(now.getFullYear(),now.getMonth(),now.getDate(),12);

    if (date1 > date2){
        console.log("Полдень уже позади");
    }else{
        console.log("Полдень ещё не наступил");
    }
}
checkAfternoon();

function checkHalfMonth(){
    let now = new Date;
    let date1 = new Date(now.getFullYear(),now.getMonth(),now.getDate());
    let date2 = new Date(now.getFullYear(),now.getMonth(),15);

    if (date1 > date2){
        console.log("Пол месяца уже прошло");
    }else{
        console.log("Пол месяца ещё не прошло");
    }
}
checkHalfMonth();

function checkHoliday(){
    let now  = new Date();
    let date = new Date(now.getFullYear(), 2, 8); // текущий год
    let nextYear = new Date(now.getFullYear() + 1, 2, 8)
    let diff = date - now; // разница

    if (diff > 0) {
        console.log(Math.round(diff / (1000 * 60 * 60 * 24)));
    } else if (diff === 0) {
        console.log("Сегодня 8 марта");
    } else if(diff < 0){
       diff = nextYear - now;
       console.log(Math.round(diff / (1000 * 60 * 60 * 24)));
    }
}
checkHoliday();

function checkMyBirthday(){
    let now = new Date;
    let myBirthday = new Date(now.getFullYear(),2,1);
    let currentDate = new Date(now.getFullYear(),now.getMonth(),now.getDate());
    let nextYear = new Date(now.getFullYear() + 1,2,1);
    let diff = myBirthday  - currentDate;

    if (diff > 0) {
        console.log(Math.round(diff / (1000 * 60 * 60 * 24)));
    } else if (diff === 0) {
        console.log("Сегодня день рождения!");
    } else if(diff < 0){
        diff = nextYear - now;
        console.log(Math.round(diff / (1000 * 60 * 60 * 24)));
    }
}
checkMyBirthday();

function checkBirthday(month,day){
    let now = new Date;
    if(month === 2 && day === 29){
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
    let myBirthday = new Date(now.getFullYear(),month,day);
    let currentDate = new Date(now.getFullYear(),now.getMonth(),now.getDate());
    let nextYear = new Date(now.getFullYear() + 1,2,1);
    let diff = myBirthday  - currentDate;

    if (diff > 0) {
        console.log(Math.round(diff / (1000 * 60 * 60 * 24)));
    } else if (diff === 0) {
        console.log("Сегодня день рождения!");
    } else if(diff < 0){
        diff = nextYear - now;
        console.log(Math.round(diff / (1000 * 60 * 60 * 24)));
    }
}
checkBirthday();