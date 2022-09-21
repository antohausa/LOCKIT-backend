import { Router } from 'express'
import * as con from '../Controllers/LockerController.js'

const LockerRouter = Router()

LockerRouter.get("/", (req, res) => {
    res.send("OMG HI ANTO!!!!!!")
})

LockerRouter.get('/getLockers', con.getLockers)
LockerRouter.get('/getActivo/:idTienda', con.getActivo)
LockerRouter.get('/:idTienda', con.getById)
LockerRouter.get('/reservar/:idTienda', con.reservar)

//ProviderRouter.post('/createProvider', con.createProvider)

export default LockerRouter;
