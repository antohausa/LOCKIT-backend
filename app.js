import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import UserRouter from './src/users/Routes/UserRoute.js'
import ProviderRouter from './src/providers/Routes/ProviderRoutes.js'

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
app.use("/api/providers", ProviderRouter)

export default app