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
        let result = await pool.query('SELECT * FROM lockers;')
        console.log(result);
        await pool.end()

        return result.rows;

    }
    catch (err) {
        console.log(err)
        return err
    }
}

export const getById = async (idTienda) => {
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
export const getActivo = async (idTienda) => {
    try {
        await pool.connect();
        let result = await pool.query(`SELECT "idLocker", l."fkTienda", "activo" , "fkCliente" FROM Lockers l INNER JOIN Tiendas t ON l."fkTienda"= t."idTienda" WHERE activo = true AND t."idTienda"=${idTienda}`)
        return result.rowCount
    }
    catch (err) {
        console.log(err)
        return err
    }
}

export const getAvailability = async (idTienda) => {
    try {
        await pool.connect();
        let small_availability = await pool.query(`SELECT "idLocker", l."fkTienda", "activo" FROM Lockers l INNER JOIN Tiendas t ON l."fkTienda"= t."idTienda" WHERE activo = false AND l."fk_tipoLocker"=${0} AND t."idTienda"=${idTienda}`)
        let medium_availability = await pool.query(`SELECT "idLocker", l."fkTienda", "activo" FROM Lockers l INNER JOIN Tiendas t ON l."fkTienda"= t."idTienda" WHERE activo = false AND l."fk_tipoLocker"=${1} AND t."idTienda"=${idTienda}`)
        let large_availability = await pool.query(`SELECT "idLocker", l."fkTienda", "activo" FROM Lockers l INNER JOIN Tiendas t ON l."fkTienda"= t."idTienda" WHERE activo = false AND l."fk_tipoLocker"=${2} AND t."idTienda"=${idTienda}`)
        
       let availabilityToCheck = [small_availability.rowCount, medium_availability.rowCount, large_availability.rowCount]
       let availability=[]
       for (let i=0;i<=2;i++){
            if (availabilityToCheck[i]>0){
                availability.push(i)
            }
            console.log(availability)
        }
        return availability
    }
    catch (err) {
        console.log(err)
        return err
    }
}

export const reservar = async (idTienda, tipoLocker) => {
    try {
        await pool.connect();
        let result1 = await pool.query(`SELECT "idLocker" FROM Lockers l INNER JOIN Tiendas t ON l."fkTienda"= t."idTienda" WHERE activo = false AND "fk_tipoLocker"=${tipoLocker} AND t."idTienda"=${idTienda}`)
        if (result1.rowCount == 0) {
            return null
        }
        else {
            let locker = result1.rows[0].idLocker
            let result = await pool.query(`UPDATE public.lockers
            SET "activo"=true
            WHERE "idLocker"=${locker};`)
            return locker
        }

    }
    catch (err) {
        console.log(err)
        return err
    }
}