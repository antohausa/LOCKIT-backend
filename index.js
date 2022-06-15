import router from './users/routes/usersRoute.js'
import express from 'express';
import bodyParser from 'body-parser';

//const express = require("express");
const app = express();
app.use(bodyParser.json()); // Middleware to enable cookies

const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('hola!!!!!!!!!');
});

app.use('/api', router);



app.listen(PORT, () => {
    console.log(`El servidor está inicializado en el puerto ${PORT}`);
});
