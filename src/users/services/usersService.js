import 'dotenv/config';
import express from 'express';
import pkg from 'pg';

//setteo env
const { Pool } = pkg;

const pool = new Pool(
    {
        
        connectionString: 'postgres://ldkxvkhnzuyofk:06c1add682312a8f434ff678aad0ff5213fa9aa4a8fbee09969b7225f58f2d23@ec2-52-86-115-245.compute-1.amazonaws.com:5432/d2r57ekn4ogjs5',
        ssl: {
            rejectUnauthorized: false
        }
    })



//getALLLLLLLLLLLLL
export const getAll = async () => {

    try {
       /* let conex = await */pool.connect();

      //  let result = await 
        let result = await pool.query('SELECT * FROM usuarios;')
        return result.rows;
        
    }

    catch (err) {
        throw err
    }
}

export const createUser = async (user) => {
    //let filasAfectadas = 0;
    /*const result = await pool.query('SELECT "idRol" FROM roles WHERE nombre=$1',[user.rol])
    console.log(result.rows)
*/

        try {
            await pool.connect();
            
         
            let result = await pool.request().query('INSERT INTO usuarios ("nombre", "apellido", "mail", "contrasenia", "telefono", "fechaNac", "fkRol", "username") VALUES ($1,$2,$3,$4,$5,$5,$6,$7,$8)', [

                    user.nombre,
                    user.apellido,
                    user.mail,
                    user.contrasenia,
                    user.telefono,
                    user.fechaNac,
                    user.fkRol,
                    user.username
                
                ]);
                
                return result.rowsAffected
        }
        catch (err) {
            throw err
        }

}










//.query('INSERT INTO usuarios ("nombre", "apellido", "mail", "contrasenia", "telefono", "fechNac", "fkRol", "username") VALUES (@nombre, @apellido, @mail, @contrasenia, @telefono, @fechNac, @fkRol, @username)');


/*(err, res) => {

            /*for (let row of res.rows) {
                              
                var all = JSON.stringify(row)
                                
            }
            */
           
           //return res
           //pool.end();

           /*.input("nombre", user.nombre)
                .input("apellido", user.apellido)
                .input("mail", user.mail)
                .input("contrasenia", user.contrasenia)
                .input("telefono", user.telefono)
                .input("fechNac", user.fechNac)
                .input("fkRol", user.fkRol)
                .input("username", user.username)
                */