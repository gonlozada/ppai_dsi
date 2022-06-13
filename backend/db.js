const moment = require('moment');

const AsignacionResponsableTecnicoRT = require('./classes/AsignacionResponsableTecnicoRT')
const CambioEstadoRT = require('./classes/CambioEstadoRT')
const CambioEstadoTurno = require('./classes/CambioEstadoTurno')
const Estado = require('./classes/Estado')
const PersonalCientifico = require('./classes/PersonalCientifico')
const TipoRecursoTecnologico = require('./classes/TipoRecursoTecnologico')
const RecursoTecnologico = require('./classes/RecursoTecnologico')
const Session = require('./classes/Session')
const Turno = require('./classes/Turno')
const Usuario = require('./classes/Usuario')


const db = {
   SesionActual: undefined,
   CambioEstadoRT: [],
   CambioEstadoTurno: [],
   Estado: [],
   PersonalCientifico: [],
   TipoRecursoTecnologico: [],
   RecursoTecnologico: [],
   Turno: [],
   Usuario: [],
   AsignacionResponsableTecnicoRT: [],
}



//Usuario----------------------------------------------------------------------
//new
db.Usuario.push(
   new Usuario({
      usuario: "Test",
      clave: "Test",
      habilitado: true
   })
)
//Personal Cientifico----------------------------------------------------------------------
//new
db.PersonalCientifico.push(
   new PersonalCientifico({
      id: db.PersonalCientifico.length,
      legajo: 65329,
      nombre: "John",
      apellido: "Doe",
      numeroDocumento: "14000012",
      correoElectronicoInstitucional: "johndoe@frc.utn.edu.ar",
      correoElectronicoPersonal: "johndoe@gmail.com",
      telefonoCelular: "3517890990",
      usuario: db.Usuario[0]
   })
)
//Sessiones----------------------------------------------------------------------
//new
db.SesionActual =
   new Session({
      id: 0,
      fechaHoraDesde: new Date(),
      usuario: db.Usuario[0]
   })


//Estados----------------------------------------------------------------------
//new
db.Estado.push(
   new Estado({
      id: db.Estado.length,
      nombre: "Disponible",
      ambito: "RecursoTecnologico"
   })
)
//new
db.Estado.push(
   new Estado({
      id: db.Estado.length,
      nombre: "ConIngresoEnMantenimientoCorrectivo",
      ambito: "RecursoTecnologico",
   })
)
//new
db.Estado.push(
   new Estado({
      id: db.Estado.length,
      nombre: "Confirmada",
      ambito: "Turno",
   })
)

//new
db.Estado.push(
   new Estado({
      id: db.Estado.length,
      nombre: "PendienteConfirmacion",
      ambito: "Turno",
   })
)
//new
db.Estado.push(
   new Estado({
      id: db.Estado.length,
      nombre: "CanceladoPorMantenimientoCorrectivo",
      ambito: "Turno",
   })
)


//Turnos----------------------------------------------------------------------
//new
db.CambioEstadoTurno.push(
   new CambioEstadoTurno({
      id: db.CambioEstadoTurno.length,
      fechaHoraDesde: new Date(),
      estado: db.Estado[2]
   })
)
db.Turno.push(
   new Turno({
      id: db.Turno.length,
      fechaGeneracion: new Date(),
      diaSemana: moment().isoWeekday(),
      fechaHoraInicio: moment("17:00:00", "HH:mm:ss").toDate(),
      fechaHoraFin: moment("20:00:00", "HH:mm:ss").toDate(),
      cambioEstadoTurno: db.CambioEstadoTurno.length - 1
   })
)

//new
db.CambioEstadoTurno.push(
   new CambioEstadoTurno({
      id: db.CambioEstadoTurno.length,
      fechaHoraDesde: new Date(),
      estado: db.Estado[3]
   })
)
db.Turno.push(
   new Turno({
      id: db.Turno.length,
      fechaGeneracion: new Date(),
      diaSemana: moment().isoWeekday(),
      fechaHoraInicio: moment("20:00:00", "HH:mm:ss").toDate(),
      fechaHoraFin: moment("22:00:00", "HH:mm:ss").toDate(),
      cambioEstadoTurno: db.CambioEstadoTurno.length - 1
   })
)


//Tipo Recursos Tecnologicos----------------------------------------------------------------------
//new
db.TipoRecursoTecnologico.push(
   new TipoRecursoTecnologico({
      id: db.TipoRecursoTecnologico.length,
      nombre: "TipoRT A"
   })
)
//new
db.TipoRecursoTecnologico.push(
   new TipoRecursoTecnologico({
      id: db.TipoRecursoTecnologico.length,
      nombre: "TipoRT B"
   })
)
//Recursos Tecnologicos----------------------------------------------------------------------
//new
db.CambioEstadoRT.push(
   new CambioEstadoRT({
      id: db.CambioEstadoRT.length,
      fechaHoraDesde: new Date(),
      estado: db.Estado[0]
   })
)
db.RecursoTecnologico.push(
   new RecursoTecnologico({
      id: db.RecursoTecnologico.length,
      numeroRT: db.RecursoTecnologico.length,
      fechaAlta: new Date(),
      fraccionHorarioTurnos: 60,
      turnos: [db.Turno[0]],
      tipoDeRT: [db.TipoRecursoTecnologico[0]],
      cambioEstadoRT: [db.CambioEstadoRT[db.CambioEstadoRT.length - 1]],
   })
)

//new
db.CambioEstadoRT.push(
   new CambioEstadoRT({
      id: db.CambioEstadoRT.length,
      fechaHoraDesde: new Date(),
      estado: db.Estado[0]
   })
)
db.RecursoTecnologico.push(
   new RecursoTecnologico({
      id: db.RecursoTecnologico.length,
      numeroRT: db.RecursoTecnologico.length,
      fechaAlta: new Date(),
      fraccionHorarioTurnos: 60,
      turnos: [db.Turno[1]],
      tipoDeRT: [db.TipoRecursoTecnologico[0]],
      cambioEstadoRT: [db.CambioEstadoRT[db.CambioEstadoRT.length - 1]],
   })
)

//Asignacion Responsable TecnicoRTs----------------------------------------------------------------------
//new
db.AsignacionResponsableTecnicoRT.push(
   new AsignacionResponsableTecnicoRT({
      id: db.AsignacionResponsableTecnicoRT.length,
      fechaDesde: new Date(),
      usuario: db.Usuario[0],
      recursos: db.RecursoTecnologico //todos
   })
)
module.exports = db