let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
let [name,surname,department,position,salary] = arr;
console.log(name,surname,department,position,salary);

function func() {
    return ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
}

let [name1,surname1,department1,position1,salary1] = func();
console.log(name1,surname1,department1,position1,salary1);

let arr2 = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

let [name2,surname2,...info] = arr2;

console.log(name2,surname2,...info);
let arr3 = ['Иван', 'Иванов', 'отдел разработки', 'программист'];

let [name3,surname3,position3 = "джуниор"] = arr3;
console.log(name3,surname3,position3);

function getYear(){
    return (new Date).getFullYear();
}

function getMonth(){
    return (new Date).getMonth();
}
let arr4 = [];
let [year = getYear(), month = getMonth(), day] = arr4;
console.log(year,month,day);

let options = {
    color: 'red',
    width:  400,
    height: 500,
};

let {color,width,height} = options;
console.log(color,width,height);

let {color: c,width: w, height: h} = options;
console.log(c,w,h);

let options2 = {
    width1:  400,
    height1: 500,
};

let {color1 = 'black',width1,height1} = options2;
console.log(color1,width1,height1);

function func1([name,surname,department,position,salary]) {
    console.log(name,surname,department,position,salary);
}

func1( ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000] );

function func2 ([name,surname,...info]){
    console.log(name,surname,...info);
}
func2(['Иван', 'Иванов', 'отдел разработки', 'программист', 2000]);

function func3([name,surname,department,position = 'джуниор']){
    console.log(name,surname,department,position);
}
func3(['Иван', 'Иванов', 'отдел разработки', 'программист']);

function func4(department, [name,surname], [year,month,day]){
    console.log(department,name,surname,year,month,day);
}
func4('отдел разработки', ['Иван', 'Иванов'], [2018, 12, 31]);

function func5({color,width,height}){
    console.log(color,width,height);
}
func5({color: 'red', width: 400, height: 500});

function func6({color = "black",width,height}){
    console.log(color,width,height);
}
func6({color: 'red', width: 400, height: 500});