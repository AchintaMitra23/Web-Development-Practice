var http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Welcome Back Achinta');
    res.end();
}).listen(9000);