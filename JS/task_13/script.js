let date1 = new Date(2000,8,1);
let date2 = new Date(2010,1,15);

console.log(Math.round((date2 - date1) / (1000 * 60 * 60 * 24 * 30 * 12)));

function checkDays(year,month){
    let date = new Date(year,month,0);
    console.log(date.getDate());
    console.log(date.getDay());
}
checkDays(2022,1);
function checkYear(year){
    let date = new Date(year,2,0);

    if (date.getDate() === 29){
        console.log(true);
    }else {
        console.log(false);
    }
}
checkYear(2021);

