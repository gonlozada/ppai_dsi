const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./db')

const GestorRegistrarMantenimientoCorrectivo = require('./gestores/GestorRegistrarMantenimientoCorrectivo')

//Logica de backend

const gestor = new GestorRegistrarMantenimientoCorrectivo()

//Servidor
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// CORS implemented so that we don't get errors when trying to access the server from a different server location
app.use(cors());


app.get('/', (req, res) => {
   res.json(db)
})

app.get('/opcionRegistrarRTEnMantenimientoCorrectivo', (req, res) => {

   const resp = gestor.opcionRegistrarRTEnMantenimientoCorrectivo()

   res.json(resp)
})



const port = process.env.PORT || 8085;

app.listen(port, () => console.log(`Server running on port ${port}, http://localhost:${port}`));