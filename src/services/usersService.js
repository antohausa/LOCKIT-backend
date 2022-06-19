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

export const createUser = async () => {
    let filasAfectadas = 0;
        try {
            await pool.connect();
            
            let result = await pool.request()
                .input("nombre", sql.VarChar, pizza.nombre)
                .input("libreGluten", sql.Bit, pizza.libreGluten)
                .input("importe", sql.Decimal(10, 2), pizza.importe)
                .input("descripcion", sql.VarChar, pizza.descripcion)
                .query('INSERT INTO usuarios ("", "", "", "") VALUES ($1, $2, $3, $4');
                
                return result.rowsAffected
        }
        catch (err) {
            throw err
        }

}













/*(err, res) => {

            /*for (let row of res.rows) {
                              
                var all = JSON.stringify(row)
                                
            }
            */
           
           //return res
           //pool.end();