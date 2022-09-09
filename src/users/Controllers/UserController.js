import * as svc from '../Services/UserService.js'
// import userDTO from '../models/User.js'
import jwt from "jsonwebtoken"


export const getUsers = async (req, res) => {
    try {
        const users = await svc.getAll();
        console.log(users)
        res.status(200).send(users)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }

};


export const getUserByUsername = async (req, res) => {
    try {
        console.log("hola")
        const username = req.params.username;

        const id = await svc.getUserByUsername(username);
        res.status(200).send(id)
    } catch (err) {
        res.status(500).send({ err })
    }

}

export const login = async (req, res) => {

    console.clear()

    try {
        const { username, contrasenia } = req.body;
        const user = await svc.login(username, contrasenia);

        const userSign = { user: user }

        if (user == null) {
            return res.status(404).send(`no encontrado`)
        } else {

            jwt.sign({ userSign }, 'secretkey', (err, token) => {

                res.status(200).send({ token })
            })
        }

    } catch (err) {
        res.status(500).send({
            err
        })
    }
}

export const createUser = async (req, res) => {

    try {
        const {
            nombre,
            apellido,
            mail,
            contrasenia,
            telefono,
            fechaNac,
            fkRol,
            username
        } = req.body

        // let newUser = new userDTO(nombre, apellido, mail, contrasenia, telefono, fechaNac, fkRol, username);
        const userCreated = await svc.createUser(nombre, apellido, mail, contrasenia, telefono, fechaNac, fkRol, username);


        res.sendStatus(201).send(userCreated)

    } catch (err) {
        res.status(500).send({
            err
        })
    }

};
/*export const takeToken =async (req, res, next)=>{
   try{
    const bearerHeader = req.headers['token'];
    console.log("estoy aca")
    console.log(bearerHeader);
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else{
        res.sendStatus(403)
    }
}
catch (err) {
    res.status(500).send({
        err
    })
}

}

export const verifyToken = async (req, res, next) => {
    try {
        const bearerHeader = req.headers['token'];
        console.log("hola")
        console.log(bearerHeader)
        jwt.verify(bearerHeader, 'secretkey', (err, authData) => {
            if (err) {
                res.status(403).json(err);
            } else {
                next();
            }
        })
        console.log("termine")
    }
    catch (err) {
        res.status(500).send({
            err
        })
    }
}
*/

/*export const verifyToken = async (req, res, next) => {
    try {
        const bearerHeader = req.headers['authorization']
        if (typeof bearerHeader !== 'undefined'){}

    else {
        res.sendStatus(403)
    }
    }
        catch (err) {
            res.status(500).send({
                err
            })
        }
}*/


// export default class UserController {
//     static async getUsers(req, res)
//     {
//         try {
//             const users = await svc.getAll();
//             res.status(200).send(users)
//         }
//         catch (err) {
//             res.status(500).send({ err })
//         }
//     }

//     static async userExistsByUsername(req, res) {
//         try {
//             const user = await svc.userExistsByUsername();
//             res.status(200).send(user)
//         }
//         catch (err) {
//             res.status(500).send({ err })
//         }
//     }

//     static async createUser(req, res){
//         try
//         {
//             const {nombre, apellido, mail, contrasenia, telefono, fechaNac, fkRol, username} = req.body

//             console.log(nombre, apellido, mail, contrasenia, telefono, fechaNac, fkRol, username)
//            // let newUser = new userDTO(nombre, apellido, mail, contrasenia, telefono, fechaNac, fkRol, username);

//             const userCreated = await svc.createUser(nombre, apellido, mail, contrasenia, telefono, fechaNac, fkRol, username);
//             res.status(200).send(userCreated)
//         }
//         catch (err) {
//             res.status(500).send({ err })
//         }
//     }
// }









//res.send(JSON.stringify({'HOLA':'haaaaaa'}))
//res.send(all)
//req users to service
/*catch (err){
    console.log("ERROR! I'm sorry!!!!!!!")
    throw err;
    
}*/