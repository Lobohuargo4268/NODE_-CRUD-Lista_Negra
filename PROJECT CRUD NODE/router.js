const express = require('express');
const router = express.Router();
/* Conexion con la base de datos */
const conexion = require('./database/db');
/* LLamar a la pagina principal en el caso de que no haya error */
router.get('/', (req, res)=>{
    conexion.query('SELECT * FROM users',(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('index_demo',{results:results});
        }
    })
})
/* Referencia a la funcion 'create' para mostrar la pagina de agregar nuevos elementos */
router.get('/create', (req, res)=>{
        res.render('create');
})
/* Referencia a la funcion 'edit' para mostrar la pagina de editar elementos existentes */
router.get('/edit/:id', (req, res)=>{
    const id = req.params.id;
    conexion.query('SELECT * FROM users WHERE id=?',[id],(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('edit',{user:results[0]});
        }
    })
})
/* Llama la funcion */
router.get('/delete/:id',(req,res)=>{
    const id= req.params.id;
    conexion.query('DELETE FROM users WHERE id=?',[id],(error,results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/');
        }
    })
})
/* Remite a 'crudcontrl' para enviar los datos a la db y retorna a la pagina principal */
const crudcontrl=require('./controllers/crudcontrl');
/* Referencia la funcion '/save' para guardar la informacion nueva de registro */
router.post('/save',crudcontrl.save);
/* Referencia la funcion '/update' para guardar la informacion modificada */
router.post('/update',crudcontrl.update);
/* Se exporta para poder ser recibido por otras funciones */
module.exports=router;