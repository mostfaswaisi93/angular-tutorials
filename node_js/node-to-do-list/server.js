require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const taskController = require('./controllers/taskController');

var app = express();

app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts/'
}));

app.listen(3000, () => {
    console.log('Express server started at port: 3000');
});

app.use('/task', taskController);