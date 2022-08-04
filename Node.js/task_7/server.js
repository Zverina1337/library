const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer(async (req, res) =>{
    let text;
    let status;
    let pathFile = 'public' + req.url;

    try{
        if((await fs.promises.stat(pathFile)).isDirectory){
            pathFile += "/index.html";
        }
        text = await fs.promises.readFile(pathFile,"utf8");
        status = 200;
    }catch(err){
        text = await fs.promises.readFile(path.resolve(__dirname,"public","404.html"),"utf8");
        status = 404;
    }

    res.writeHead(status,"Content-Type","text/html");
    res.write(text);
    res.end();
}).listen(3000);