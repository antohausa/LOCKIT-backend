import * as svc from '../services/usersService.js'
import userDTO from '../models/User.js'

export const getUsers = async (req, res) => {
    try {
        const users = await svc.getAll();
        res.status(200).send(users)
    }
    catch (err) {
        res.status(500).send({ err })
    }

};

export const userExistsByUsername = async (req, res) => {
    try {
        const user = await svc.userExistsByUsername();
        res.status(200).send(user)
    }
    catch (err) {
        res.status(500).send({ err })
    }

};

export const createUser = async (req, res) => {

    try {
        const {nombre, apellido, mail, contrasenia, telefono, fechaNac, fkRol, username} = req.body
        
        console.log(nombre, apellido, mail, contrasenia, telefono, fechaNac, fkRol, username)
       // let newUser = new userDTO(nombre, apellido, mail, contrasenia, telefono, fechaNac, fkRol, username);

        const userCreated = await svc.createUser(nombre, apellido, mail, contrasenia, telefono, fechaNac, fkRol, username);
        res.status(200).send(userCreated)
    }
    catch (err) {
        res.status(500).send({ err })
    }

};













//res.send(JSON.stringify({'HOLA':'haaaaaa'}))
    //res.send(all)
    //req users to service
/*catch (err){
    console.log("ERROR! I'm sorry!!!!!!!")
    throw err;
    
}*/