import express from 'express';
import expressHandlebars  from 'express-handlebars';
const handlebars = expressHandlebars.create({
    defaultLayout: 'main', 
	extname: 'hbs'
});
const app = express();
app.engine('hbs',handlebars.engine);
app.set('view engine', 'hbs');

// app.get("/page:page", (req,res)=>{
//     try{
//        res.render(req.params.page); 
//     }catch{
//         res.status(404).render("404");
//     }
// });

app.listen(3000);