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

export const getAll = async () => {
    try {
        await pool.connect();
        let result = await pool.query('SELECT * FROM reservas;')
        console.log(result);
        await pool.end()
        
        return result.rows;

    }
    catch (err) {
        console.log(err)
        return err
    }
}

export const getReservaById = async (id) => {
    let result=null

    try {

       await pool.connect();

    result = await pool.query(`SELECT * FROM reservas WHERE idReserva='${id}';`)
    await pool.end();
    return result.rows[0];
    }
    catch (err) {
        console.log(err)
        return err
    }
}



export const createReserva = async (idUser, duracion, lockerReservado) => {
    try {
        
        await pool.connect();
        let result = await pool.query(`INSERT INTO public.reservas("fkCliente", "fkLocker", "fechaInicio", "fechaFin", monto, activa)
            VALUES (${idUser}, ${lockerReservado}, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP + interval '${duracion} hours', 680, true) RETURNING "idReserva"`)
        
        
        return result.rows[0].idReserva;


    }
    catch (err) {
        console.log(err)
        return err
    }
}

/*export const getById = async (idTienda) => {
    try {
        await pool.connect();
       // const idTienda = parseInt(request.params.idTienda)
        let result = await pool.query(`SELECT "idLocker", "fkTienda", activo, "fkCliente"
        FROM lockers l INNER JOIN tiendas ti ON l."fkTienda"= ti."idTienda"  WHERE "idTienda"=${idTienda}; `)
        return result.rows;
    }
    catch (err) {
        console.log(err)
        return err
    }


  
} 
*/