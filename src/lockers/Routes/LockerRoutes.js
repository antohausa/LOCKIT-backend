import { Router } from 'express'
import * as con from '../Controllers/LockerController.js'

const LockerRouter = Router()

LockerRouter.get("/", (req, res) => {
    res.send("OMG HI ANTO!!!!!!")
})

LockerRouter.get('/getLockers', con.getLockers)
//ProviderRouter.post('/createProvider', con.createProvider)

export default LockerRouter;
