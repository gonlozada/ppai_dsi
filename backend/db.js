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
const Modelo = require('./classes/Modelo')
const Marca = require('./classes/Marca')
const AsignacionCientificoDelCI = require('./classes/AsignacionCientificoDelCI')


const db = {
   SesionActual: undefined,
   AsignacionCientificoDelCI: [],
   CambioEstadoRT: [],
   CambioEstadoTurno: [],
   Estado: [],
   PersonalCientifico: [],
   TipoRecursoTecnologico: [],
   Modelo: [],
   Marca: [],
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
db.Usuario.push(
   new Usuario({
      usuario: "Test2",
      clave: "Test2",
      habilitado: true
   })
)
db.Usuario.push(
   new Usuario({
      usuario: "Test3",
      clave: "Test3",
      habilitado: true
   })
)
//Personal Cientifico----------------------------------------------------------------------
//new
db.PersonalCientifico.push(
   new PersonalCientifico({
      id: db.PersonalCientifico.length,
      legajo: 12123,
      nombre: "John",
      apellido: "Doe",
      numeroDocumento: "14000012",
      correoElectronicoInstitucional: "johndoe@frc.utn.edu.ar",
      correoElectronicoPersonal: "johndoe@gmail.com",
      telefonoCelular: "3517890990",
      usuario: db.Usuario[0]
   })
)

db.PersonalCientifico.push(
   new PersonalCientifico({
      id: db.PersonalCientifico.length,
      legajo: 65329,
      nombre: "Gonzalo",
      apellido: "Lozada",
      numeroDocumento: "14000015",
      correoElectronicoInstitucional: "gonlozada@frc.utn.edu.ar",
      correoElectronicoPersonal: "gonlozada@gmail.com",
      telefonoCelular: "3517890193",
      usuario: db.Usuario[1]
   })
)

db.PersonalCientifico.push(
   new PersonalCientifico({
      id: db.PersonalCientifico.length,
      legajo: 85319,
      nombre: "Marcos",
      apellido: "Doe",
      numeroDocumento: "16040015",
      correoElectronicoInstitucional: "marcos@frc.utn.edu.ar",
      correoElectronicoPersonal: "marcos@gmail.com",
      telefonoCelular: "3516890493",
      usuario: db.Usuario[2]
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
      cambioEstadoTurno: [db.CambioEstadoTurno[db.CambioEstadoTurno.length - 1]]
   })
)

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
      fechaHoraInicio: moment("20:00:00", "HH:mm:ss").toDate(),
      fechaHoraFin: moment("22:00:00", "HH:mm:ss").toDate(),
      cambioEstadoTurno: [db.CambioEstadoTurno[db.CambioEstadoTurno.length - 1]]
   })
)

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
      fechaHoraInicio: moment("16:00:00", "HH:mm:ss").add(3, 'days').toDate(),
      fechaHoraFin: moment("20:00:00", "HH:mm:ss").add(3, 'days').toDate(),
      cambioEstadoTurno: [db.CambioEstadoTurno[db.CambioEstadoTurno.length - 1]]
   })
)

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
      fechaHoraInicio: moment("20:00:00", "HH:mm:ss").add(3, 'days').toDate(),
      fechaHoraFin: moment("23:00:00", "HH:mm:ss").add(3, 'days').toDate(),
      cambioEstadoTurno: [db.CambioEstadoTurno[db.CambioEstadoTurno.length - 1]]
   })
)

//AsignacionCientificoDelCI----------------------------------------------------------------------
//new

db.AsignacionCientificoDelCI.push(
   new AsignacionCientificoDelCI({
      fechaDesde: moment().add(-1, 'day'),
      fechaHasta: moment().add(2, 'day'),
      turnos: [db.Turno[0], db.Turno[1]],
      personalCientifico: db.PersonalCientifico[1]
   })
)
db.AsignacionCientificoDelCI.push(
   new AsignacionCientificoDelCI({
      fechaDesde: moment().add(2, 'day'),
      fechaHasta: moment().add(4, 'day'),
      turnos: [db.Turno[2], db.Turno[3]],
      personalCientifico: db.PersonalCientifico[2]
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

//
db.Modelo.push(
   new Modelo({
      id: db.Modelo.length,
      nombre: "ModeloRT_1",
   })
)
db.Modelo.push(
   new Modelo({
      id: db.Modelo.length,
      nombre: "ModeloRT_2",
   })
)
db.Modelo.push(
   new Modelo({
      id: db.Modelo.length,
      nombre: "ModeloRT_3",
   })
)
db.Modelo.push(
   new Modelo({
      id: db.Modelo.length,
      nombre: "ModeloRT_4",
   })
)
db.Modelo.push(
   new Modelo({
      id: db.Modelo.length,
      nombre: "ModeloRT_5",
   })
)
db.Marca.push(
   new Marca({
      nombre: "Marca_1",
      modelos: [db.Modelo[0], db.Modelo[1]]//todos  
   })
)
db.Marca.push(
   new Marca({
      nombre: "Marca_2",
      modelos: [db.Modelo[2], db.Modelo[3]]//todos  
   })
)
db.Marca.push(
   new Marca({
      nombre: "Marca_3",
      modelos: [db.Modelo[4]]//todos  
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
      numeroRT: 1000 + db.RecursoTecnologico.length * 4,
      fechaAlta: new Date(),
      fraccionHorarioTurnos: 60,
      turnos: [db.Turno[0], db.Turno[1], db.Turno[2]],
      tipoDeRT: db.TipoRecursoTecnologico[0],
      cambioEstadoRT: [db.CambioEstadoRT[db.CambioEstadoRT.length - 1]],
      modeloDelRT: db.Modelo[0]
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
      numeroRT: 1000 + db.RecursoTecnologico.length * 4,
      fechaAlta: new Date(),
      fraccionHorarioTurnos: 60,
      turnos: [db.Turno[3]],
      tipoDeRT: db.TipoRecursoTecnologico[0],
      cambioEstadoRT: [db.CambioEstadoRT[db.CambioEstadoRT.length - 1]],
      modeloDelRT: db.Modelo[1]
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
      numeroRT: 1000 + db.RecursoTecnologico.length * 4,
      fechaAlta: new Date(),
      fraccionHorarioTurnos: 60,
      turnos: [db.Turno[4]],
      tipoDeRT: db.TipoRecursoTecnologico[1],
      cambioEstadoRT: [db.CambioEstadoRT[db.CambioEstadoRT.length - 1]],
      modeloDelRT: db.Modelo[2]
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
      numeroRT: 1000 + db.RecursoTecnologico.length * 4,
      fechaAlta: new Date(),
      fraccionHorarioTurnos: 60,
      turnos: [db.Turno[1]],
      tipoDeRT: db.TipoRecursoTecnologico[1],
      cambioEstadoRT: [db.CambioEstadoRT[db.CambioEstadoRT.length - 1]],
      modeloDelRT: db.Modelo[3]
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
      numeroRT: 1000 + db.RecursoTecnologico.length * 4,
      fechaAlta: new Date(),
      fraccionHorarioTurnos: 60,
      turnos: [db.Turno[3]],
      tipoDeRT: db.TipoRecursoTecnologico[1],
      cambioEstadoRT: [db.CambioEstadoRT[db.CambioEstadoRT.length - 1]],
      modeloDelRT: db.Modelo[4]
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