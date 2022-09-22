import { Router } from 'express'
import * as con from '../Controllers/LockerController.js'

const LockerRouter = Router()

LockerRouter.get("/", (req, res) => {
    res.send("OMG HI ANTO!!!!!!")
})

LockerRouter.get('/getLockers', con.getLockers)
LockerRouter.get('/getActivo/:idTienda', con.getActivo)
LockerRouter.get('/getbyid/:idTienda', con.getById)
LockerRouter.get('/availability/:idTienda', con.availability)
LockerRouter.post('/reservar/:idTienda', con.reservar)

//ProviderRouter.post('/createProvider', con.createProvider)

export default LockerRouter;
