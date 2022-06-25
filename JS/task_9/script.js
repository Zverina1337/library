console.log(new Date().getDate(),new Date().getMonth(),new Date().getFullYear());

let date = new Date;

function addZero(num) {
    if (num >= 0 && num <= 9) {
        return '0' + num;
    } else {
        return num;
    }
}
console.log(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " "
            + addZero(date.getDate()) + "." + addZero(date.getMonth() + 1) + "." + addZero(date.getFullYear()));

let ymd = "2022-01-30";
let dmy = ymd.split("-").reverse().join(".");
console.log(dmy);