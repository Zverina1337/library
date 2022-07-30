let i = 0;
// setInterval(function() {
//     console.log(i++);
// }, 1000);

const fs = require('fs');
const path = require('path');
let arr = ["text1.txt","text2.txt"];
let sum = 0;
for(let el of arr){
    let text = fs.readFileSync(path.resolve(__dirname, el),"utf8")
    sum += Number(text);
    console.log(sum);
}

let obj = {
	'file1.txt': 'text1',
	'file2.txt': 'text2',
	'file3.txt': 'text3',
}
for(let i = 0; i < Object.keys(obj).length;i++){
    fs.writeFileSync(path.resolve(__dirname, Object.keys(obj)[i]),Object.values(obj)[i]);
}

fs.writeFileSync(path.resolve(__dirname,"readme.txt"),"task_1");

setInterval(function() {
    fs.appendFileSync(path.resolve(__dirname,"readme.txt"),"!");
},5000);


let num = fs.readFileSync(path.resolve(__dirname,"text1.txt"),"utf8");
num++;
fs.writeFileSync(path.resolve(__dirname,"text1.txt"),String(num));