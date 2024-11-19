const mysql = require('mysql');

const conexion= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_db'
});

conexion.connect((error)=>{
    if(error){
        console.error('The error is '+error)
        return;
    }
    console.log('Succesfully connected with db')

});

module.exports=conexion;