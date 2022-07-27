const {series, parallel, src, dest} = require('gulp');
let cleanJS = require('gulp-uglify');
function today_day(cb){
    let day = new Date();
    console.log(day.getDate());
    cb();
}
function today_month(cb){
    let arr = ["January","February","March","April","May","June","July","August","September","November","December"];
    let month = new Date().getMonth();
    console.log(arr[month]);
    cb();
}
function today_year(cb){
    let year = new Date().getFullYear();
    console.log(year);
    cb();
}
exports.day = today_day;
exports.month = today_month;
exports.year = today_year;

function copy(cb){
    return src("css/style.css")
    .pipe(dest("css"));
}

exports.copy_style = copy;

function cleanJs(cb){
    return src("gulpfile.js")
    .pipe(cleanJS())
    .pipe(dest('./'));
}
exports.cleanJs = cleanJs;