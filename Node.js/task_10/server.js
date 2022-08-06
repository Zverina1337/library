const { constants } = require('buffer');
const express = require('express');
const { fstat } = require('fs');
const app = express();
const fs = require('fs');
// app.get('/:num',(req, res)=>{
//     let str = String(Math.pow(req.params.num,2));
//     res.send(str);
// });
// app.get('/:num1:num2:num3',(req, res)=>{
//     let str = String(Number(req.params.num1) + Number(req.params.num2) + Number(req.params.num3));
//     res.send(str);
// });
// app.get("/:data",(req,res)=>{
//     if(/\d{4}\-\d{2}\-\d{2}/.test(req.params.data)){
//         res.send(req.params.data);
//     }else{
//         res.status(404).send("Page not found");
//     }
// });
// let users = ['user1', 'user2', 'user3', 'user4', 'user5'];

// app.get("/:num",(req,res)=>{
//     if(users[req.params.num]){
//         res.send(users[req.params.num]);
//     }else{
//         res.status(404).send("Page not found");
//     }
    
// });
// let users = [
// 	{
// 		name: 'user1',
// 		age:  31,
// 	},
// 	{
// 		name: 'user2',
// 		age:  32,
// 	},
// 	{
// 		name: 'user3',
// 		age:  33,
// 	},
// ];
// // app.get("/:id:field",(req,res)=>{
//     let user = users[req.params.id];
//     res.send(String(user[req.params.field]));
// });

// app.get("/pages/:num",(req,res)=>{
//     let path = __dirname + "/pages/" + req.params.num + ".html";
//     fs.promises.access(path,constants.F_OK).then(()=>{
//         res.sendFile(path);
//     }).catch(()=>{
//         res.status(404).send("Page not found");
//     });
// });
// const cityRouter = express.Router();
// const countryRouter = express.Router();
// cityRouter.get('/city/show/:id', function(req, res) {
//     res.send(req.url);	
// });
// cityRouter.get('/city/edit/:id', function(req, res) {
//     res.send(req.url);	
// });
// countryRouter.get('/country/list', function(req, res) {
//     res.send(req.url);	
// });
// countryRouter.get('/country/show/:id', function(req, res) {
//     res.send(req.url);	
// });
// countryRouter.get('/country/edit/:id', function(req, res) {
//     res.send(req.url);
// });
// app.use("/city/", cityRouter);
// app.use("/country/", countryRouter);
app.listen(3000);