import { Router } from 'express'
import * as con from '../Controllers/UserController.js'

const UserRouter = Router();

UserRouter.get("/", (req, res) => {
    res.send("OMG HI ANTO!!!!!!")
})

UserRouter.get('/getusers', con.getUsers)
UserRouter.post('/createuser', con.createUser)
UserRouter.get('/:username', con.getUserByUsername)
UserRouter.post('/login', con.login)
UserRouter.post('/me', con.me)

export default UserRouter;
