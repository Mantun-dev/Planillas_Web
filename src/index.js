const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const Swal = require('sweetalert2');



require('dotenv').config();

const app = express();

// Settings
app.set('port', process.env.PORT || 5000);
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');


// View routes
app.use(require('./routes/index.routes'));


// Public
app.use(express.static(path.join(__dirname, '../dist')));

app.use(express.static(path.join(__dirname, '../dist/assets/js/sweetalert')));


// Starting
app.listen(app.get('port'), () => {
    console.log('Server is on port', app.get('port'));
});