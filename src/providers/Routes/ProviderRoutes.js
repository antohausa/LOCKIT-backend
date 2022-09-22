import { Router } from 'express'
import * as con from '../Controllers/ProviderController.js'

const ProviderRouter = Router()

ProviderRouter.get("/", (req, res) => {
    res.send("OMG HI ANTO!!!!!!")
})

ProviderRouter.get('/getProviders', con.getProviders)
ProviderRouter.post('/createProvider', con.createProvider)
ProviderRouter.get('/getByBarrio/:barrio', con.getByBarrio)
ProviderRouter.get('/getByUser/:user', con.getByUser)
ProviderRouter.get('/getResenia/:idTienda', con.getResenia)



export default ProviderRouter;
