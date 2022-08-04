const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express');
let obj = {
	'/page1': '1',
	'/page2': '2',
	'/page3': '3',
}
// http.createServer((req, res) =>{
//     let text;
//     let status;
//     switch(req.url){
//         case("/"):
//             text = "main page";
//             status = 200;
//             break;
//         case("/page1"):
//             text = obj['/page1'];
//             status = 200;
//             break;
//         case("/page2"):
//             text = obj['/page2'];
//             status = 200;
//             break;
//         case("/page3"):
//             text = obj['/page3'];
//             status = 200;
//             break;
//         default:
//             text = "Page not found";
//             status = 404;
//             break;
//     }
//     res.writeHead(status,"Content-type","text/html");
//     res.write(text);
//     res.end();
// }).listen(3000);

// http.createServer((req,res) =>{
//     let links = Object.keys(obj);
//     let text;
//     let status;

//     console.log(links[0]);
//     if(req.url == links[0]){
//         text = obj[links[0]];
//         status = 200;
//     }else
//     if(req.url == links[1]){
//         text = obj[links[1]];
//         status = 200;
//     }else
//     if(req.url == links[2]){
//         text = obj[links[2]];
//         status = 200;
//     }else{
//         text = "Page not found";
//         status = 404;
//     }
//     res.writeHead(status,"Content-type","text/html");
//     res.write(text);
//     res.end();
// }).listen(3000);

let obj1 = {
	'/page1': 'file1.html',
	'/page2': 'file2.html',
	'/page3': 'file3.html',
}
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
http.createServer(async (req,res) =>{
    let links = Object.keys(obj1);
    let text;
    let status;
    if(req.url == links[0]){
        text = await fs.promises.readFile(path.resolve(__dirname, obj1[links[0]]));
        status = 200;
    }else if(req.url == links[1]){
        text = await fs.promises.readFile(path.resolve(__dirname, obj1[links[1]]));
        status = 200;
    }
    else if(req.url == links[2]){
        text = await fs.promises.readFile(path.resolve(__dirname, obj1[links[2]]));
        status = 200;
    }else{
        text = "Page not found";
        status = 404;
    }
    res.writeHead(status,"Content-Type","text/html","stylesheet");
    res.write(text);
    res.end();
}).listen(3000);