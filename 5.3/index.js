var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use(express.static(__dirname + '/public'));

app.get('/v1/contact', function(req, res) {
    var data = {
        contactId: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@DOMMatrixReadOnly.com',
        phone: '987654'
    };

    res.send(data);
});

app.get('/v1/contact/:contactId', function(req, res) {
    var data = {
        contactId: 2,
        firstName: 'Taylor',
        lastName: 'Swift',
        email: 'taylor.swift@DOMMatrixReadOnly.com',
        phone: '111333'
    };

    res.send(data);
});

app.post('/v1/contact', function(req,res) {
    res.send(req.body);
});

app.put('/v1/contact/:contactId', function(req,res) {
    res.send(req.body);
});

app.delete('/v1/contact/:contactId', function(req, res) {
    res.send({ message: 'Record deleted.'});
});


app.listen(8000);
