const mysql = require('mysql');
require('../config/config');

// Crear una conexión a la Base de datos
const connection = mysql.createPool({
    host: process.env.RDS_HOSTNAME,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    port: process.env.RDS_PORT,
    database: process.env.RDS_DATABASE
});

console.log('Base de Datos Conectada.');

// connection.connect(function(err) {
//     if (err) {
//         console.error('Conexión a la base de datos fallida: ' + err.stack);
//         return;
//     }
//     //connection.query('CREATE DATABASE IF NOT EXISTS egoHouse;');
//     connection.query('USE egoHouse;');
//     console.log('Base de Datos Conectada.');
//     // connection.end();
// });

// open the MySQL connection
// connection.connect(error => {
//     if (error) throw error;
//     console.log('Base de Datos Conectada con Éxito.');
// });

module.exports = connection;