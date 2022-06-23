import express from 'express'
import bodyParser from 'body-parser'
import router from './src/users/Routes/UserRoute.js'

const app = express()

app.use(router)
app.use(bodyParser.json())

export default app