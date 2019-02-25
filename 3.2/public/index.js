const express = require('express');

const app = express();

const memberApi = express.Router();

const adminAPI = express.Router();

memberApi.get('/', function(req, res) {
    res.send('Member page!');
});

memberApi.get('/profile', function(req, res) {
    res.send('Member profile page!');
});

memberApi.get('/changpassword', function(req, res) {
    res.send('Member change password page!');
});

adminAPI.get('/', function(req, res) {
    res.send('Admin page!');
});

app.use('/api/member', memberAPI);

app.use('/api/admin', adminAPI);

app.use(express.static(__dirname + '/public'));

app.listen(8080);