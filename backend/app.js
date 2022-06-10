const express = require('express');
const cors = require('cors');
require('dotenv').config();
const moment = require('moment');

const RecursoTecnologico = require('./classes/RecursoTecnologico')
const CambioEstadoTurno = require('./classes/CambioEstadoTurno')
const Turno = require('./classes/Turno')
const Estado = require('./classes/Estado')

//Logica de backend

const RT = new RecursoTecnologico()
console.log(RT.getNumeroRT())





//Servidor
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// CORS implemented so that we don't get errors when trying to access the server from a different server location
app.use(cors());


app.get('/', (req, res) => {
   res.json({
      message: "I am alive"
   })

})



const port = process.env.PORT || 8085;

app.listen(port, () => console.log(`Server running on port ${port}, http://localhost:${port}`));