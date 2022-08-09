import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import UserRouter from './src/users/Routes/UserRoute.js'
import ProviderRouter from './src/providers/Routes/ProviderRoutes.js'
import LockerRouter from './src/lockers/Routes/LockerRoutes.js'
//import AuthRouter from './src/users/Routes/AuthRoute.js'
const app = express()
/*
export const CorsOptions = {
    origin: 'http://localhost:5000',
    cors: true,
    credentials: true,
}
*/
//app.use(cors(CorsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use('/api/users', UserRouter)
app.use('/api/providers', ProviderRouter)
app.use('/api/lockers', LockerRouter)
//app.use('/api/auth', AuthRouter)

export default app