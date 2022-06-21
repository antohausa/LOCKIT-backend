import * as svc from '../services/usersService.js'

export const getUsers = async (req, res) => {
    try {
        const users = await svc.getAll();
        res.status(200).send(users)
    }
    catch (err) {
        res.status(500).send({ err })
    }

};

export const createUser = async (req, res) => {

    try {
        const newUser = req.body
        const userCreated = await svc.createUser(newUser);
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