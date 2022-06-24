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
            let result = await pool.query('SELECT * FROM tiendas;')
            return result.rows;
        }
        catch (err) {
            console.log(err)
            return err
        }
    }

    export const createProvider = async (nombre_titular, apellido_titular, 
        dni_titular, mail_interno, telefono_interno, razon_social, cuit, nombre_tienda, direccion, ciudad, cp, 
        mail_publico, telefono_publico, logo, portada, img1, img2, img3, img4, descripcion, seguridad, veinticuatrohs, 
        tipo_locker, precio, descuento, barrio, fk_usuario, horarios) => {
    
        try {
            await pool.connect();
            let result=null

         
            result = await pool.query(`INSERT INTO usuarios (nombre, apellido, mail, contrasenia, telefono, fechanac, fkrol, username)
                                                VALUES ('${nombre_titular}', '${apellido_titular}', '${dni_titular}', '${mail_interno}',
                                                '${telefono_interno}', '${razon_social}','${cuit}', '${nombre_tienda}','${direccion}',
                                                '${ciudad}', '${cp}', '${mail_publico}', '${telefono_publico}', '${descripcion}', 
                                                '${seguridad}', '${veinticuatrohs}', '${tipo_locker}','${precio}','${descuento}', ${barrio}', '${fk_usuario}')`);
                
                return result.rowCount
                
        }
        catch (err) {
            
            console.log(err)
            throw err 
        }

}
