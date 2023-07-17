// HTTP module:
const http = require('node:http');

const port = process.env.PORT || 3000;

const server = http.createServer((response, request) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    // response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('<h1>Allah is the most Powerfull</h1>');
});

server.listen(port, () => {
    console.log('Server is Listening on port ', port);
});