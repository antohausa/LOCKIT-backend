import router from './usersRoute.js'
import express from 'express';
import bodyParser from 'body-parser';

//const express = require("express");
const app = express();
app.use(bodyParser.json()); // Middleware to enable cookies


app.get('/', function (req, res) {
    res.send('hola!!!!!!!!!');
});

app.use('/hola', router);



app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});
