const http = require('http');
const httpServer = http.createServer((req,res) => {
    res.end('This is my first node app');
});