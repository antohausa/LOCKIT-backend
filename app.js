import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import router from './src/users/Routes/UserRoute.js'

const app = express()

export const CorsOptions = {
    origin: 'http://localhost:3000',
    cors: true,
    credentials: true,
}

app.use(cors(CorsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api', router)

export default app