const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.set('views', './views');
app.set('view engine', 'ejs');

const memberAPI = express.Router();
const adminAPI = express.Router();

app.get('/', function(req,res) {
    res.render('pages/four', {
        tagline: "Page four"
    });
});


app.get('/basicform', function(req,res) {
    res.render('pages/five');
});

app.post('/basicform', function(req,res) {
 console.log(req.body.inputEmail3 + ", " + req.body.inputPassword3);
 res.send('Login successful');
});

memberAPI.get('/', function(req, res) {
    res.send('Member page!');
});

memberAPI.get('/profile', function(req, res) {
    res.send('Member profile page!');
});

memberAPI.get('/changpassword', function(req, res) {
    res.send('Member change password page!');
});

adminAPI.get('/', function(req, res) {
    res.send('Admin page!');
});

app.use('/api/member', memberAPI);

app.use('/api/admin', adminAPI);

app.use(express.static(__dirname + '/public'));

app.listen(8080);