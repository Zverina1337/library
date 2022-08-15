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
    }else if(req.params.form == "form5"){
        let arr = [];
        let a = Number(req.body.num1);
        let b = Number(req.body.num2);
        let c = Number(req.body.num3);
        let D = Math.pow(b,2) - 4 * a * c;
        let x1, x2;
        if(D > 0){
            x1 =(-b + Math.sqrt(D))/(2*a);
            x2 = (-b - Math.sqrt(D))/(2*a);
            arr.push(x1.toFixed(1), x2.toFixed(1));
            answer = arr;
        }else if(D == 0){
            x1 = -b/2*a;
            answer = x1.toFixed(1);
        }else{
            answer = 0;
        }
    }else if(req.params.form == "form6"){
        let arr = [Number(req.body.num1), Number(req.body.num2), Number(req.body.num3)];
        function getMaxOfArray(numArray) {
            return Math.max.apply(null, numArray);
          }
        let max = getMaxOfArray(arr);
        arr.splice(arr.indexOf(max));
        let sum = Math.pow(arr[0],2) + Math.pow(arr[1],2);
        if(Math.pow(max,2) == sum,2){
            answer = "Да";
        }else{
            answer = "Нет";
        }
    }else if(req.params.form == "form7"){
        let birthday = new Date(req.body.date);
        let now = new Date();
        let arr = [];
        let days = 0;
        if(now.getFullYear % 4 == 0){
            arr = [30, 29, 31, 30, 31, 30, 31, 30, 31, 30, 31, 31];
            days = 366;
            console.log("Високосный");
        }else{
            arr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            days = 365;
            console.log(" Не високосный"); 
        }
        let countDays = 0;
        for(let i = birthday.getMonth();i < now.getMonth();i++){
            countDays += arr[i];
        }
        days -= countDays; 

        answer = days;
    }else if(req.params.form == "form8"){
        let text = req.body.text;
        let words = text.split(" ");
        let letters = 0;
        for (let letter of text){
            if(letter.match(/\w/)){
                letters++;
            }
        }

        answer = `Кол-во букв: ${letters}, Кол-во слов: ${words.length}`
    }else if(req.params.form == "form9"){
        let text = req.body.text;
        let letters = [];
        let percents = [];
        let full_arr = [];
        let percent = 1;
        for (let letter of text){
            if(letter.match(/\w/)){
                letters.push(letter.toLowerCase());
            }
        }

        for (let i = 0;i < letters.length;i++){
            percent = 1;
            for (let j = 0;j < letters.length;j++){
                if(letters[i] === letters[j]){
                    percent++;
                }
            }
            percent--;
            percents.push(String((percent / letters.length) * 100) + " %");
        }
        for (let i = 0; i < letters.length;i++){
            full_arr.push(letters[i] + " : " + percents[i]);
        }
        answer = full_arr;
    }

    if((typeof answer) == "number"){
        res.render(req.params.form, {title : req.params.form, answer : String(answer)});
    }else{
        res.render(req.params.form, {title : req.params.form, answer : answer});
    }
});

app.listen(3000);