// const http = require('http');

// const fs = require('fs');
// const server = http.createServer((req,res)=>{
//     fs.writeFileSync('hello.txt',' node.js');
// });

// server.listen(5000);

var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
}).listen(8080);