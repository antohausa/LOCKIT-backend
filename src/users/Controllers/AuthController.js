import * as svc from '../Services/UserService.js'

export const createToken = async (id) => {
    try{
   
       return jwt.sign({id}, 'secretkey', 
       /*{
       res.json({token}) }*/)
    }
    catch(err){
        res.status(500).send ({err})
    }
}
export const login = async (verifyToken, req, res) => {
    try {
        const {username,contrasenia} = req.body;
        const user = await svc.login(username, contrasenia);
        const token = createToken(user._id);
        //const expireTime= 3*24*60*60;
        if (user == null) {
            return res.status(404).send(`no encontrado`)
        } else {
            // return res.status(200).send(username)
            res.cookie('jtw',token, {httpOnly:true})
            res.stauts(200).json({user: user._id})
            
        }

    } catch (err) {
        res.status(500).send({
            err
        })
    }
}

export const verifyToken = async (req, res, next) => {
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
}