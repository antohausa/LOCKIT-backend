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
    let result=null
    console.log(pool);
    try {


    result = await pool.query('SELECT * FROM usuarios;')
        return result.rows;
    }
    catch (err) {
        console.log(err)
        return err
    }
}





export const createUser = async (nombre, apellido, mail, contrasenia, telefono, fechaNac, fkRol, username) => {
    //let filasAfectadas = 0;
    /*const result = await pool.query('SELECT "idRol" FROM roles WHERE nombre=$1',[user.rol])
    console.log(result.rows)
*/
       // console.log(user)
     //   const { nombre, apellido, mail, contrasenia, telefono, fechaNac, fkRol, username } = user

        try {
            let result=null

            result = await pool.query(`INSERT INTO usuarios (nombre, apellido, mail, contrasenia, telefono, fechanac, fkrol, username)
                                                VALUES ('${nombre}', '${apellido}', '${mail}', '${contrasenia}', '${telefono}', '${fechaNac}','${fkRol}', '${username}') RETURNING *`);

                return result.rows[0].idUsuarios
                
        }
        catch (err) {
            
            console.log(err)
            throw err 
        }

}

export const login = async (username,contrasenia) => {
    let rta = null;
    console.log(username, contrasenia);
    try{
        let result = null
        
        result = await pool.query(`SELECT * FROM usuarios WHERE contrasenia='${contrasenia}' AND username='${username}'`);      
     
        let rta = result.rows;
console.log(rta)
        if (result.rowCount == 1) {
            return rta;
        } 
        else {
            return rta = null;
        }

    }
    catch (err) {
        return err
    }

}



export const getUserByUsername = async (username) => {
    let result=null
    console.log(pool);
    try {


    result = await pool.query(`SELECT "idUsuarios" FROM usuarios WHERE username='${username}';`)
        return result.rows;
    }
    catch (err) {
        console.log(err)
        return err
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