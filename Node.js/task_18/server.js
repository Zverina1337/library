import express from 'express';
import expressHandlebars from 'express-handlebars';
import cookieParser from 'cookie-parser';
import expressSession from 'express-session';

const handlebars = expressHandlebars.create({
    defaultLayout : "main",
    extname : "hbs"
});
const app = express();
let secret = "qwerty1234";
app.engine("hbs",handlebars.engine);
app.set('view engine', "hbs");
app.use(cookieParser(secret));
app.use(expressSession({secret : secret}));

app.get("/",(req,res)=>{
    res.render("home", {title : "Home"});
    req.session.num = "4123";
});
app.get("/page:num",(req,res)=>{
    res.render("page" + req.params.num, {title : "Page " + req.params.num});
    if(req.params.num == "1"){
        req.session.test = 'abcde';
    }else if(req.params.num == "2"){
        console.log(req.session.test);
    }else{
        delete req.session.test;
    }
    console.log(req.session.num);

});
app.listen(3000);