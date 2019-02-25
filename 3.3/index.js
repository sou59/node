const express = require('express');
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

const memberAPI = express.Router();
const adminAPI = express.Router();

app.get('/', function(req,res) {
    res.render('pages/three', {
        tagline: "Page three"
    });
});
console.log(adminAPI);

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