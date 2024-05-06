const express= require('express');

const app = express();
// app.use((req,res,next)=>{
//     console.log('first middleware');
//     next();

// });
// app.use((req,res,next)=>{
//     console.log('second middleware');
//     res.send('<p> Assigmnet solved by falcon</p>')
  
//     next();

// });
app.use('/',(req,res,next)=>{
    console.log('/ misleware');
    res.send('<p>first middle</p>');

});
app.use('/users',(req,res,next)=>{
    console.log('/users misleware');
    res.send('<p>first in the house middle</p>');

});
app.listen(3000);