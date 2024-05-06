const http = require('http');
const express = require('express');
const app = express();
app.use('/add-product',(req,res,next)=>{   // midle wae function in express j
    console.log('in the middlewave');
    res.send('<h1>Hello from express</h1>')
   //..
});
// app.use((req,res,next)=>{
//     console.log('in the middlewave');
//     next();  //allows to request to continue to the next middleware in line 
// });
app.use('/',(req,res,next)=>{
    console.log('in the middlewave');
    res.send('<h1>Hello from express</h1>')
   //..
});


const server = http.createServer(app);
server.listen(3000);