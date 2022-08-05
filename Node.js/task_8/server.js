const express = require("express");
const app = express();
const PORT = 3000;

// app.get('/', (req,res)=>{
//     res.send("Hello World!");
// });
// app.get('/1/', (req,res)=>{
//     res.send("Hello World!1");
// });
// app.get('/2/', (req,res)=>{
//     res.send("Hello World!2");
// });
// app.get('/3/', (req,res)=>{
//     res.send("Hello World!3");
// });
// app.get('/4/', (req,res)=>{
//     res.send("Hello World!4");
// });

// app.get("/",function(req,res){
//     console.log(req.path);
//     console.log(req.url);
//     console.log(req.originalUrl);
//     console.log(req.query);
//     console.log(req.protocol);
//     console.log(req.secure);
//     console.log(req.headers);
//     console.log(req.acceptsLanguages);
//     console.log(req.ip);
//     res.send("Hello World!");
// });

app.get("/json",(req,res)=>{
    let json = {
        "name": "task_8",
        "version": "1.0.0",
        "description": "",
        "main": "server.js",
        "scripts": {
          "test": "echo \"Error: no test specified\" && exit 1",
          "start": "nodemon server.js"
        }}
    res.type("application/json");
    res.send(json);
});

app.use((req,res)=>{
    res.status(404).send("Page not Found");
});

app.listen(PORT,function (){
    console.log(`Server listening on ${PORT}`);
});