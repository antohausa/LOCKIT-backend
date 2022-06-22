import router from './src/users/routes/usersRoute.js'
import express from 'express';
import bodyParser from 'body-parser';

//const express = require("express");
const app = express();
app.use(bodyParser.json()); // Middleware to enable cookies

const PORT = process.env.PORT || 5000;

console.log(process.env);

app.get('/', function (req, res) {
    res.send('hola!!!!!!!!!');
});

app.use('/api', router);

app.listen(PORT, () => {
    console.log(`El servidor está inicializado en el puerto ${PORT}`);
});
