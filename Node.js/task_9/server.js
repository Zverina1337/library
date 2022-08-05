const express = require('express');
const app = express();
const Path = require("path");

app.get("/",(req, res)=>{
    res.type("text/html");
    res.send("<h1>Hello world!</h1>");
});
app.get("/pages/1",(req,res)=>{
    let path = __dirname + req.url + ".html";
    res.sendFile(path);
});

app.get("/pages/2",(req,res)=>{
    let path = __dirname + req.url + ".html";
    res.sendFile(path);
});

app.get("/pages/3",(req,res)=>{
    let path = __dirname + req.url + ".html";
    res.sendFile(path);
});
app.use(express.static(__dirname + '/public/'));


app.listen(3000);