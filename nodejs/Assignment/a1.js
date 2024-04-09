const http = require('http');
const server = http.createServer((req, res) => {

    const url = req.url;
    if (url ==='/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title> First-Assignment</title></head>');
        res.write('<body> <form action="/create-user" method="POST"><input type="text" name ="username"><button type ="submit">SEND</button></form></body>');
        res.write('</html>');
       return  res.end();
    }
    if (url ==='/users'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title> user</title></head>');
        res.write('<body><ul> <li>user 1</li><li>user 2</li></ul></body>');
        res.write('</html>');
       return res.end();
    }
if (url === '/create-user'){
    const body =[];
    req.on('data',chunk =>{
        body.push(chunk);

    });
    req.on('end',() =>{
const parsedBody =Buffer.concat(body).toString();
console.log(parsedBody.split('=')[1]);
    });
    res.statusCode=302;
    res.setHeader('Location','/');
res.end();
}    

});
server.listen(5000);