var express = require('express');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();

app.use('./public', express.static(path.joint(__dirname, 'public')));
app.use('./uploads', express.static(path.joint(__dirname, 'uploads')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

var port = 3000;

app.listen(port, function() {
    console.log('Listening on port ' + port);
});