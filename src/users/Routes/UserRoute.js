import { Router } from 'express'
import * as con from '../Controllers/UserController.js'

const router = Router()

router.get("/", (req, res) => {
    res.send("OMG HI ANTO!!!!!!")
})

router.get('/getUsers', con.getUsers)
router.post('/createUser', con.createUser)

export default router;
