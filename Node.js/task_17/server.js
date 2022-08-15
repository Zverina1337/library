import express from 'express';
import cookieParser from 'cookie-parser';
import expressHandlebars from 'express-Handlebars';
const handlebars = expressHandlebars.create({
    defaultLayout : "main",
    extname : "hbs"
});

const app = express();
let secret = "qwerty";
app.use(cookieParser(secret));
app.engine("hbs", handlebars.engine);
app.set("view engine", "hbs");

app.get('/', (req,res)=>{
    res.render("home", {title : "Home"});
});
app.get('/page:num', (req,res)=>{
    if(req.params.num == "1"){
        console.log(req.cookies);
        res.cookie("id" ,"1234141");
    }
    else if(req.params.num == "2"){
        console.log(req.cookies);
    }
    else if(req.params.num == "3"){
        res.clearCookie('id');
    }
    res.render(req.params.num, {title : "Page " + req.params.num});
});

app.get("/secure-page",(req,res)=>{
    res.cookie("id", "123",{
        path : "/secure-page"
    })
    res.render("securePage",{title : "Secure Page", cookie : req.cookies})
});
app.listen(3000);