const CambioEstadoRT = require("./CambioEstadoRT")
const Mantenimiento = require("./Mantenimiento")

module.exports = class RecursoTecnologico {
   id
   //Atributos propios
   numeroRT
   fechaAlta
   imagenes
   periodicidadMantenimientoPrev
   duracionMantenimientoPrev
   fraccionHorarioTurnos

   //Atributos puntero
   turnos
   cambioEstadoRT
   // disponibilidad
   mantenimientos
   modeloDelRT
   tipoDeRT

   constructor({
      id,
      numeroRT,
      fechaAlta,
      imagenes,
      periodicidadMantenimientoPrev,
      duracionMantenimientoPrev,
      fraccionHorarioTurnos,
      turnos,
      cambioEstadoRT,
      // disponibilidad,
      mantenimientos,
      modeloDelRT,
      tipoDeRT,
   }) {
      this.id = id
      this.numeroRT = numeroRT
      this.fechaAlta = fechaAlta
      this.imagenes = imagenes
      this.periodicidadMantenimientoPrev = periodicidadMantenimientoPrev
      this.duracionMantenimientoPrev = duracionMantenimientoPrev
      this.fraccionHorarioTurnos = fraccionHorarioTurnos
      this.turnos = turnos
      this.cambioEstadoRT = cambioEstadoRT
      // this.disponibilidad = disponibilidad
      this.mantenimientos = mantenimientos ?? []
      this.modeloDelRT = modeloDelRT
      this.tipoDeRT = tipoDeRT
   }


   //metodos 

   obtenerReservasTurnos = (fechaInicio, fechaFin) => {
      const resultado = []
      for (const turno of this.turnos) {
         if (
            turno.fechaHoraInicio >= fechaInicio &&
            turno.fechaHoraInicio <= fechaFin &&
            turno.esCancelable()
         )
            resultado.push(turno)

      }
      return resultado
   }

   esRecursoDisponible = () => {
      const actual = this.cambioEstadoRT.find(cambio => cambio.esActual())
      return actual.esDisponible()
   }

   crearMantenimiento = ({
      id,
      fechaInicio,
      fechaInicioPrevista,
      fechaFin,
      motivoMantenimiento,

      estadoRTMantenimientoCorrectivo
   }) => {

      //crear mantenimiento nuevo
      this.mantenimientos.push(new Mantenimiento({
         id,
         fechaInicio,
         fechaInicioPrevista,
         fechaFin,
         motivoMantenimiento,
      }))

      //cambio de estado
      const actual = this.cambioEstadoRT.find(cambio => cambio.esActual())
      actual.setFechaHoraHasta(new Date())

      const index = db.CambioEstadoRT.push(new CambioEstadoRT({
         id: db.CambioEstadoRT.length,
         fechaHoraDesde: new Date(),
         estado: estadoRTMantenimientoCorrectivo,
      }))
      this.cambioEstadoRT.push(db.CambioEstadoRT[index - 1])

   }

   cancelarTurnos = (turnosCancelables, estadoCanceladoXMantenimientoCorrectivo) => {

      const turnosACancelar = this.turnos.filter(t => turnosCancelables.find(t2 => t2.id === t.id))

      for (const turno of turnosACancelar) {
         turno.cancelar(estadoCanceladoXMantenimientoCorrectivo)
      }

   }

   //getters and setters
   getNumeroRT = () => this.numeroRT
   setNumeroRT = (value) => this.numeroRT = value

   getFechaAlta = () => this.fechaAlta
   setFechaAlta = (value) => this.fechaAlta = value

   getImagenes = () => this.imagenes
   setImagenes = (value) => this.imagenes = value

   getPeriodicidadMantenimientoPrev = () => this.periodicidadMantenimientoPrev
   setPeriodicidadMantenimientoPrev = (value) => this.periodicidadMantenimientoPrev = value

   getDuracionMantenimientoPrev = () => this.duracionMantenimientoPrev
   setDuracionMantenimientoPrev = (value) => this.duracionMantenimientoPrev = value

   getFraccionHorarioTurnos = () => this.fraccionHorarioTurnos
   setFraccionHorarioTurnos = (value) => this.fraccionHorarioTurnos = value

   getTurnos = () => this.turnos
   setTurnos = (value) => this.turnos = value

   getCambioEstadoRT = () => this.cambioEstadoRT
   setCambioEstadoRT = (value) => this.cambioEstadoRT = value

   // getDisponibilidad = () => this.disponibilidad
   // setDisponibilidad = (value) => this.disponibilidad = value

   getMantenimientos = () => this.mantenimientos
   setMantenimientos = (value) => this.mantenimientos = value

   getModeloDelRT = () => this.modeloDelRT
   setModeloDelRT = (value) => this.modeloDelRT = value

   getTipoDeRT = () => this.tipoDeRT
   setTipoDeRT = (value) => this.tipoDeRT = value

}