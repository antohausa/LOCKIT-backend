import { Router } from 'express'
import * as con from '../Controller/ReservaController.js'

const ReservaRouter = Router()

ReservaRouter.get("/", (req, res) => {
    res.send("OMG HI ANTO!!!!!!")
})

ReservaRouter.get('/getReservas', con.getReservas)
ReservaRouter.get('/getReservaById/:id', con.getReservaById)
ReservaRouter.get('/getInfoById/:id', con.getInfoById)
ReservaRouter.post('/createReserva', con.createReserva)

//ProviderRouter.post('/createProvider', con.createProvider)

export default ReservaRouter;
