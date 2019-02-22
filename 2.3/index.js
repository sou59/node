var express = require('express');
var app = express();
var url = require('url');

var bodyParser = require('body-parser');
var morgan = require('morgan');

app.get('/', (req,res) => {
    var queryObject = url.parse(req.url, true).query;
    var greeting = queryObject.greeting || ' Default greeting';

    res.send('This is my second node app.' + greeting);
});

app.listen(8080, function() {
    console.log('Server listening on port 8080');
});
