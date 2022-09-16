import { Router } from 'express'
import * as con from '../Controllers/ReservasController.js'

const ReservaRouter = Router()

ReservaRouter.get("/", (req, res) => {
    res.send("OMG HI ANTO!!!!!!")
})

ReservaRouter.get('/getLockers', con.getReservas)


//ProviderRouter.post('/createProvider', con.createProvider)

export default LockerRouter;
