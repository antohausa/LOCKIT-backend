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
const getAll = async () => {

    try {
       /* let conex = await */pool.connect();

      //  let result = await 
        let result = pool.query('SELECT * FROM dias;') 
        return result
        
    }

    catch (err) {
        throw err
    }
}

export default getAll;















/*(err, res) => {

            /*for (let row of res.rows) {
                              
                var all = JSON.stringify(row)
                                
            }
            */
           
           //return res
           //pool.end();