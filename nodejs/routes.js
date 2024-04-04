const fs = require('fs');



    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><form action ="/message" method="POST"><input type ="text" name ="message"><button type="submit">submit</button></form></body>');
        res.write('</html>');
          return res.end();
    }
    // process.exit();
if(url==='/message' && method ==='POST'){
    const body =[];
    req.on('data',(chunk)=>{
        console.log(chunk);
        body.push(chunk);

    });
    req.on('end',() =>{
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split('=')[1];
        fs.writeFileSync('message.txt',message);

    });
 
    res.statusCode=302;
    res.setHeader('Location','/');
    return res.end();

}
res.setHeader('Content-type','text/html');
res.write('<html>');
res.write('<head><title> My first node server </title><head>');
res.write('<body style ="color:red;"> <h1> hello welome </h1> </body>');
res.write('</html>');
res.end();
});