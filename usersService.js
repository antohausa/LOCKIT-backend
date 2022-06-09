import config from './dbconfig.js';

import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    user: 'ldkxvkhnzuyofk',
    host: 'ec2-52-86-115-245.compute-1.amazonaws.com',
    database: 'd2r57ekn4ogjs5',
    password: '06c1add682312a8f434ff678aad0ff5213fa9aa4a8fbee09969b7225f58f2d23',
    port: 5432,
  })

//getALLLLLLLLLLLLL
const getAll = async () => {
    const answ = null;
    pool.connect();

    pool.query('SELECT * FROM dias;', (err, res) => {
        pool.connect();
        if (err) throw err;
        for (let row of res.rows) {
            answ = JSON.stringify(row)

        }
        client.end();
    });

    return answ
}

export default getAll;
