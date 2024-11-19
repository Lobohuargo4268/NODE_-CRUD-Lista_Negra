const conexion=require('../database/db');

exports.save=(req, res) => {
    conexion.query('SELECT COUNT(*) AS count FROM users', (err, rows) => {
        /* var count = rows[0].count;
        count++;
        const id = count; */
        const user = req.body.user;
        const rol = req.body.rol;
    conexion.query('INSERT INTO users SET ?', {/* id:id, */ user:user, rol:rol},(error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })
    })

}
exports.update=(req, res) => {
    const id=req.body.id;
    const user = req.body.user;
    const rol = req.body.rol;
    conexion.query('UPDATE users SET ? WHERE id=?',[{user:user, rol:rol}, id],(error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })
}