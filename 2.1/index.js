const http = require('http');
const url = require('url');

const httpServer = http.createServer((req,res) => {
    var queryObject = url.parse(req.url, true).query;
    var greeting = queryObject.greeting || 'Default greeting';

    res.end('This is my first node app' + greeting);
});

httpServer.listen(8000, function() {
    console.log('Server listening on port 8000');
});
