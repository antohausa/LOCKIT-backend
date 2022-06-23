import { Router } from 'express'
import UserController from '../Controllers/UserController.js'

const router = Router()

router.get("/", (req, res) => {
    res.send("OMG HI ANTO")
})

router.get('/api/getUsers', UserController.getUsers)
router.post('/api/createUser', UserController.createUser)

export default router;
