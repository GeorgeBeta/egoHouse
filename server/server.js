const express = require('express');
const bodyPaser = require('body-parser');

const app = express();
require('./config/config');
app.use(bodyPaser.urlencoded({ extended: false }));
app.use(require('./routes/route.usuario'));

app.get('/', function(req, res) {
    res.json('Hola Reservas');
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando por el puerto', process.env.PORT);
});