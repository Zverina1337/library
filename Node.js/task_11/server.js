import express from 'express';
import expressHandlebars  from 'express-handlebars';
const handlebars = expressHandlebars.create({
    defaultLayout: 'main', 
	extname: 'hbs'
});
const app = express();
app.engine('hbs',handlebars.engine);
app.set('view engine', 'hbs');