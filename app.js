const express = require('express');


//create app instance:
const app = express();

//Register view engine:
app.set('view engine', 'ejs')

app.use((req, res, next)=>{
    console.log("Middleware");
    next();
})

app.get('/', (req, res)=>{
    const people = [
        {
            name: 'Paul',
            age: 25,
        },
        {
            name: 'Paul',
            age: 25,
        },
        {
            name: 'Raymond',
            age: 25,
        }
    ]
    res.render('index', { title: 'Home', people});
});

app.get('/about', (req, res)=>{
    res.render('about', { title: 'About'});
});


app.use((req, res)=>{
    res.render('404', {title: '404'});
})

app.listen(3000);