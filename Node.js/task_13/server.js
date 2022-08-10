import expressHandlebars from 'express-handlebars';
const handlebars = expressHandlebars.create({
	defaultLayout: 'main', 
	extname: 'hbs'
});

import express from 'express';
let app = express();

app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');

app.get("/",(req,res)=>{
    res.render("page1",{title: "page1",
    products : ['prod1', 'prod2', 'prod3'],
        amount: 10,
        
        product: {
            name: 'prod',
            cost: 1000,
            amount: 5
        },
            show1: true,
            show2: false,
            show3: true,
        
    });
});

app.listen(3000);