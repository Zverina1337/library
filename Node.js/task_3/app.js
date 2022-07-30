const fs = require('fs');
const path = require('path');

// let numbers = [];
// let files = ['f1.txt','f2.txt','f3.txt','f4.txt','f5.txt'];
// for(let file of files){
//     numbers.push(fs.promises.readFile(path.resolve(__dirname, file),"utf8"));
// }
// Promise.all(numbers).then(arr =>{
//     let sum = 0;
//     arr.forEach(el =>{
//         sum += Number(el);
//     })
//     fs.promises.writeFile(path.resolve(__dirname,"sum.txt"),String(sum));
// });

// async function func(){
//     try {
//         let file1_data = await Number(fs.readFile(path.resolve(__dirname,"file1.txt"),"utf8",(err)=>{err : console.log(err)}));
//         let file2_data = await Number(fs.readFile(path.resolve(__dirname,"file2.txt"),"utf8",(err)=>{err : console.log(err)}));
//         await fs.writeFile(path.resolve(__dirname,"answer.txt"), String(file1_data + file2_data), (err, data)=>{
//             if(err){
//                 throw err;
//             }
//             console.log(data);
//         });
//     }catch(err){
//         throw err;
//     }
// } 
// func();

let files = ["num1.txt","num2.txt","num3.txt","num4.txt","num5.txt"];

async function func1(file){
        await fs.writeFile(path.resolve(__dirname,file),String(Math.round(Math.random() * 100)), err => {if(err){console.log(err)}})
}
let sum = 0;
async function func2(file){
    let data = await fs.readFile(path.resolve(__dirname,file),"utf8",(err,data) => {     
        if(err){
            console.log(err)
        }
        sum += Number(data);
        console.log(sum);
        fs.writeFile(path.resolve(__dirname,"answer.txt"), String(sum),(err) =>{if(err){console.log(err)}});
});
    return await data;
}
for(let file of files){   
    func1(file);
    func2(file);
}
