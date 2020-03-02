const express = require('express');
const bodyPaser = require('body-parser');
const mysql = require('mysql');

const app = express();
require('./config/config');
app.use(bodyPaser.urlencoded({ extended: false }));

// Conectar la Badse de datos
const connection = mysql.createConnection({
    host: process.env.RDS_HOSTNAME,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    port: process.env.RDS_PORT
});

connection.connect(function(err) {
    if (err) {
        console.error('Conexión a la base de datos fallida: ' + err.stack);
        return;
    }
    connection.query('CREATE DATABASE IF NOT EXISTS egoHouse;');
    connection.query('USE egoHouse;');
    let cadena = 'CREATE TABLE IF NOT EXISTS usuario(id int NOT NULL AUTO_INCREMENT, ' +
        'usuario varchar(30), ' +
        'password varchar(255), ' +
        'email varchar(255), ' +
        'role varchar(10), ' +
        'estado boolean, ' +
        'fechaAlta datetime, ' +
        'PRIMARY KEY(id));';
    console.log(cadena);
    connection.query(cadena, function(error, result, fields) {
        if (err) throw err;
        console.log(result);
    });
    console.log('Base de Datos Conectada.');
    connection.end();
});


app.get('/', function(req, res) {
    res.json('Hola Reservas');
});

app.get('/usuario', function(req, res) {
    res.json('Devuelve DATOS usuario');
});

app.post('/usuario/', function(req, res) {
    let body = req.body;
    if (body.nombre === undefined) {
        res.status(400).json({
            Ok: false,
            mensaje: 'El nombre es necesario'
        })
    } else {
        res.json({
            user: req.body
        });
    }
});

app.put('/usuario/:id', function(req, res) {
    res.send(req.params.id);
});

app.delete('/usuario/:id', function(req, res) {
    res.send(req.params.id);
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando por el puerto', process.env.PORT);
});