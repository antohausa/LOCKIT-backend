import getAll from './usersService.js'

export const getUsers = async (req, res) => {
    try{
    console.log("aca tenes los usuarios")
    const all = await getAll();
    
    //res.send(JSON.stringify({'HOLA':'haaaaaa'}))
    //res.send(all)
   // res.send("CONCHA DE TU HERMANA")
    //req users to service
    }
    catch (err){
        console.log("ERROR! I'm sorry!!!!!!!")
        throw err;
        
    }
};

export const createUsers = async (req, res) => {
    console.log("creado con exito. slds")
    //save users to service
};

