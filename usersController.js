import getAll from './usersService.js'

export const getUsers = async (req, res) => {
    console.log("aca tenes los usuarios")
    const all = await getAll();
    
    res.json(all)
    //req users to service
};

export const createUsers = async (req, res) => {
    console.log("creado con exito. slds")
    //save users to service
};

