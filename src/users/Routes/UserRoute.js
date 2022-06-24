import { Router } from 'express'
import * as con from '../Controllers/UserController.js'

const UserRouter = Router()

UserRouter.get("/", (req, res) => {
    res.send("OMG HI ANTO!!!!!!")
})

UserRouter.get('/getUsers', con.getUsers)
UserRouter.post('/createUser', con.createUser)

export default UserRouter;
