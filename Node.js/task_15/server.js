import express from "express";
import expressHandlebars from 'express-handlebars';
const handlebars = expressHandlebars.create(
    {
        defaultLayout : "main",
        extname : "hbs",
    }
);

const app = express();
app.engine("hbs",handlebars.engine);
app.set("view engine","hbs");

app.get("/",(req, res)=>{
    res.render("page1",{
        title : "Page1"
    });
});
// app.get("/form/",(req,res)=>{
//     let sum = 0;
//     let arr = Object.values(req.query);
//     for(let num of arr){
//         sum += Number(num);
//     }
//     res.render("page1",{
//         answer : String(sum),
//     });
// });

app.get("/form1/",(req,res)=>{
    res.render("page1",{
        query : req.query
    })
});
app.listen(3000);