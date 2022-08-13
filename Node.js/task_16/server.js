import express from "express";
import expressHandlebars from "express-Handlebars";
import bodyParser from 'body-parser';
const handlebars = expressHandlebars.create({
    defaultLayout : "main",
    extname : "hbs"
});

const app = express();
app.engine("hbs", handlebars.engine);
app.set("view engine", "hbs");

app.use(bodyParser.urlencoded({extended: true}));
app.get("/",(req,res)=>{
    res.render("page1", {title : "page1"});
});
app.get("/:form",(req,res)=>{
    res.render(req.params.form, {title : req.params.form});
});
app.post("/:form",(req,res)=>{
    let answer = "";
    if(req.params.form == "form1"){
        answer = Math.round(req.body.degs * 1.8 + 32) + " F*";
    } else if(req.params.form == "form2"){
        let fact = 1;
        for(let i = 1;i <= Number(req.body.num);i++){
            fact *= i;
        }
        answer = fact;
    }  else if(req.params.form == "form3"){
        let arr = [];
        let num = Number(req.body.num);
        for(let i = 1;i <= num;i++){
            if(num % i == 0){
                arr.push(i); 
            }
        }
        answer = arr;
    }   else if(req.params.form == "form4"){
        let arr = [];
        let num1 = Number(req.body.num1);
        let num2 = Number(req.body.num2);
        function splitters(num){
            let arr = [];
            for(let i = 1;i <= num;i++){
                if(num % i == 0){
                    arr.push(i); 
                }
            }
            return arr;
        }
        for(let arrNum1 of splitters(num1)){
            for(let arrNum2 of splitters(num2)){
                if(arrNum1 == arrNum2){
                    arr.push(arrNum1);
                }
            }
        }
        answer = arr;
    }
    if((typeof answer) == "number"){
        res.render(req.params.form, {title : req.params.form, answer : String(answer)});
    }else{
        res.render(req.params.form, {title : req.params.form, answer : answer});
    }
});

app.listen(3000);