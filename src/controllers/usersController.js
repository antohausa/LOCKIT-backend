import * as svc from '../services/usersService.js'

export const getUsers = async (req, res) => {
   
    console.log("aca tenes los usuarios")
    const all = await svc.getAll();
    res.send(all)
    
};

export const createUsers = async (req, res) => {
    console.log("creado con exito. slds")
    //save users to service
};













//res.send(JSON.stringify({'HOLA':'haaaaaa'}))
    //res.send(all)
    //req users to service
    /*catch (err){
        console.log("ERROR! I'm sorry!!!!!!!")
        throw err;
        
    }*/