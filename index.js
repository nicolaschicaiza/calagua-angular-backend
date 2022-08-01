const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

// Cramos el serviodr
const app = express();


// Conectamos a la DB
conectarDB();
app.use(cors());

app.use(express.json());

app.use('/api/estaciones', require('./routes/estacion'));
app.use('/api/sensores', require('./routes/sensor'));


app.listen(4000, () => {
    console.log('El servidor esta corriendo perfectamente');
})

// Definimos ruta principal
// app.get('/', (req, res) => {
    // res.send("Hola Mundo");
// })
//
