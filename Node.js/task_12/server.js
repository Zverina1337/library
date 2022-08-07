import express from 'express';
import expressHandlebars  from 'express-handlebars';
const handlebars = expressHandlebars.create({
    defaultLayout: 'main', 
	extname: 'hbs'
});
const app = express();
app.engine('hbs',handlebars.engine);
app.set('view engine', 'hbs');
let titles = {
	index:    'главная страница',
	about:    'о нас',
	conctacts: 'контакты',
	price:    'наш прайс'
}
let titles_keys = Object.keys(titles);
app.get('/', (req,res)=>{
    res.render("page1", {texta1 : titles[titles_keys[0]], texta2 : titles[titles_keys[1]], texta3 : titles[titles_keys[2]], texta4 : titles[titles_keys[3]],
                        href1 : titles_keys[0], href2 : titles_keys[1], href3 : titles_keys[2], href4 : titles_keys[3], });
});

app.get("/index",(req,res)=>{
    res.render("index",{title : titles[titles_keys[0]]});
});
app.get("/about",(req,res)=>{
    res.render("index",{title : titles[titles_keys[1]]});
});
app.get("/conctacts",(req,res)=>{
    res.render("index",{title : titles[titles_keys[2]]});
});
app.get("/price",(req,res)=>{
    res.render("index",{title : titles[titles_keys[3]]});
});
app.listen(3000);