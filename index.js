'use strict';

const app = require('express')();
app.set('port', (process.env.PORT || 5000));

app.get('/',(req,res)=>{
    res.send('Heroku Up and Running!');
});
app.listen(app.get('port'),(err)=>{
    if(err){
        console.log('Error',err);
    }
    console.log('Server Up and running ar port: ',app.get('port'));
});