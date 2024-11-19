const express = require('express');
const crud = express();

crud.set('view engine', 'ejs');

crud.use(express.urlencoded({extended:false}));
/* crud.use(express(json)); */

crud.use('/',require('./router'));
crud.listen(5000, ()=>{
    console.log('SERVER running in http://localhost:5000');
});
