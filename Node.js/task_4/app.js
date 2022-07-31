const fs = require('fs');
fs.promises.access("text.txt",fs.constants.F_OK).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})

let readableStream = fs.createReadStream("data.txt",'utf8');

// readableStream.on('data',(chunk)=>{
//     console.log(chunk);
// })

let writeableStream = fs.createWriteStream('writeme.txt');

// let i = 0;
// while(i <= 10000000){
//     writeableStream.write("\n" + String(i++));
// }

readableStream.pipe(writeableStream);