import express from "express";
import expressHandlebars from "express-handlebars";

const handlebars = expressHandlebars.create({
    defaultLayout: "main",
    extname : "hbs",
    helpers : {
        getDate: function(){
            let date = new Date();
            let hour = date.getHours();
            let min = date.getMinutes();
            let sec = date.getSeconds();

            return hour + "." + min + "." + sec;
        },
        square : function(num){
            return Math.sqrt(num);
        },
        round : function(num){
            return num.toFixed(1);
        },
        sum : function(...nums){
            let sum = 0;
            for(let i = 0;i < nums.length - 1;i++){
                sum += nums[i]; 
            }
            return sum;
        },
        Upper : function(str){
            return str.charAt(0).toUpperCase() + str.slice(1);
        },
        // formatDate : function(){
        //     let arrDate = this.split("-");
        //     return arrDate[2] + "-" + arrDate[1] + "-" + arrDate[0];
        // },
        getDay : function(date){
            let newDate = new Date(date.split("-"));
            let days = ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"];
            return days[newDate.getDay()];
        }
    }
});

const app = express();
app.engine("hbs", handlebars.engine);
app.set('view engine', 'hbs');

app.get("/",(req, res)=>{
    res.render("page1",{
        layout : "not_main",
        dates : ["2020-12-02", "2022-02-22", "2021-04-12"],
    });
});
app.listen(3000);
