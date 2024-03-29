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
        let result = await pool.query('SELECT * FROM tiendas;')
        return result.rows;
    }
    catch (err) {
        console.log(err)
        return err
    }
}

export const getById = async (usuario) => {
    try {
        
       // const idTienda = parseInt(request.params.idTienda)
        let result = await pool.query(`SELECT * FROM tiendas INNER JOIN usuarios ON tiendas."fk_usuario"= usuarios."idUsuarios" WHERE tiendas."fk_usuario" = ${usuario} `,)
        return result.rows[0];
    }
    catch (err) {
        console.log(err)
        return err
    }
}

export const createProvider = async (provider) => {

    try {
        //const dias =["lunes","martes","miercoles","jueves","viernes","sabado","domingo"]

        console.log(provider)
     

        /*const tienda = await pool.query(`INSERT INTO Tiendas (nombre, apellido, mail, contrasenia, telefono, fechanac, fkrol, username)
                                                 VALUES ('${nombre_titular}', '${apellido_titular}', '${dni_titular}', '${mail_interno}',
                                                '${telefono_interno}', '${razon_social}','${cuit}', '${nombre_tienda}','${direccion}',
                                                '${ciudad}', '${cp}', '${mail_publico}', '${telefono_publico}', '${descripcion}', 
                                                '${seguridad}', '${veinticuatrohs}', '${tipo_locker}','${precio}','${descuento}', ${barrio}', '${fk_usuario}')`);
        */
    let result=null;
    result = await pool.query (`INSERT INTO Tiendas(
                            nombre_titular, apellido_titular, dni_titular, mail_interno, telefono_interno, razon_social, cuit, nombre_tienda, direccion, ciudad, cp, mail_publico, telefono_publico, descripcion, seguridad, veinticuatrohs, tipo_locker, precio, descuento, barrio, fk_usuario)
                            VALUES ('${provider.nombre_titular}', '${provider.apellido_titular}', '${provider.dni_titular}', '${provider.mail_interno}',
                            '${provider.telefono_interno}', '${provider.razon_social}','${provider.cuit}', '${provider.nombre_tienda}','${provider.direccion}',
                            '${provider.ciudad}', '${provider.cp}', '${provider.mail_publico}', '${provider.telefono_publico}', '${provider.descripcion}', 
                            ${provider.seguridad}, ${provider.veinticuatrohs}, ${provider.tipo_locker},${provider.precio},${provider.descuento}, '${provider.barrio}', ${provider.fk_usuario})`);  

                

                            const result2 = await pool.query(`SELECT "idTienda" FROM public.tiendas WHERE cuit='${provider.cuit}'`)
/*
                            const id=result2.rows[0].idTienda
                            dias.forEach(async (dia) => {
                                const result3 = await pool.query (`INSERT INTO public.horarios(
                                    "fkTienda", "fkDia", apertura, cierre)
                                    VALUES (${id}, ${dia}, ${provider.horarios.{dia}}, ?);`)
                              })
                    
                               
*/
                            
/*                                     
        //from here tengo el ID TIENDA
        const imgs = await pool.query(`INSERT INTO imagenes (img1, img2, img3, img4, logo, portada)
                                                VALUES ('${img1}', '${img2}', '${img3}', '${img4}','${logo}', '${idTienda}','${portada}')`);


        for (let i = 0; i < dias.length(); i++) {
            const horariosSubidos = await pool.query(`INSERT INTO horarios(
               "fkTienda", "fkDia", apertura, cierre)
                VALUES ('${idTienda}','${i}', @apertura,@cierre);`)
        }
*/        
        // pool.end()
        return result.rowCount

    }
    catch (err) {

        console.log(err)
        throw err
    }

}


export const getByBarrio = async (barrio) => {
    let result=null
    try {


    result = await pool.query(`SELECT * FROM Tiendas WHERE  Lower(barrio) like '${barrio}'  ;`)
    console.log(result)
        return result.rows;
    }
    catch (err) {
        console.log(err)
        return err
    }
}

export const getResenia = async (idTienda) => {
    try{
        let result = await pool.query(`SELECT "idResenia", "fkTienda", "fkUsuario", estrellas, comentario, fecha FROM public."Resenias" r INNER JOIN Tiendas t ON r."fkTienda" = t."idTienda" WHERE "idTienda"=${idTienda}`)
        return result.rows;
    }
    catch(err){
        console.log(err)
        return err
    }
}