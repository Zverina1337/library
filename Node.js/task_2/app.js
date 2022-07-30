const fs = require("fs");
const path = require("path");

// fs.readFile(path.resolve(__dirname,"file.txt"),"utf8", (err, data) => {
//     if (err){
//         throw err;
//     }
//     console.log(Math.pow(data, 2));
// });
// for(let i = 1;i <= 10;i++){
//     fs.writeFile(path.join((__dirname, String(i) + ".txt")),String(i), (err, data) =>{
//         if (err){
//             throw err;
//         }
//         console.log(`Файл ${i} создан`);
//     }); 
// }

// fs.promises.readFile(path.resolve(__dirname, "file.txt"),"utf8").then(data => {
//     let sum = 0;
//     for (let i = 0;i < data.length;i++ ){
//         sum += Number(data[i]);
//     }
//     console.log(sum);
// }).catch(err => {
//     console.log(err);
// })

// fs.promises.readFile(path.resolve(__dirname, "numbers.txt"),"utf8").then(data =>{
//     let arr = data.split(",");
//     return arr;
// }).then(arr =>{
//     for (let el of arr){
//         fs.promises.writeFile(path.resolve(__dirname, el + ".txt"), String(el))
//     }
// }).catch(err =>{
//     console.log(`Ошибка при чтении файла`)
// })


