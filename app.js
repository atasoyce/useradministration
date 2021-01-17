const express = require('express');
const hbs = require('hbs');
const router = require('./router');


let app = express();

app.set('view engine', 'hbs');
app.use(express.static("public"));



app.get('/', router.start);

app.get('/login', router.login);

app.get('/register', router.register);


app.listen(80, () => {
    console.log("Server started and listen on Port 80" );
});

