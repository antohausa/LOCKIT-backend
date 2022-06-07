import router from './usersRoute.js'
import express from 'express';

//const express = require("express");
const app = express();

app.get('/', function (req, res) {
    res.send('Saludos desde express');
});

app.use('/hola', router);

app.get('/s', function (req, res) {
    res.send('Saludos desde la puta q te pario');
});

app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});