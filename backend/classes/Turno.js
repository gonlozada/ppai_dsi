module.exports = class Turno {
   id
   //Atributos propios
   fechaGeneracion
   diaSemana
   fechaHoraInicio
   fechaHoraFin

   //Atributos puntero
   cambioEstadoTurno


   constructor({
      id,
      fechaGeneracion,
      diaSemana,
      fechaHoraInicio,
      fechaHoraFin,
      cambioEstadoTurno
   }) {
      this.id = id
      this.fechaGeneracion = fechaGeneracion
      this.diaSemana = diaSemana
      this.fechaHoraInicio = fechaHoraInicio
      this.fechaHoraFin = fechaHoraFin
      this.cambioEstadoTurno = cambioEstadoTurno
   }


   //metodos 
   mostrarTurno = () => {

   }
   estoyDisponible = () => {

   }
   esCancelable = () => {
      const actual = this.cambioEstadoTurno.find(cambio => cambio.esActual())
      return actual.esCancelable()
   }
   obtenerDatos = () => {
      return {
         id: this.id,
         fechaGeneracion: this.fechaGeneracion,
         diaSemana: this.diaSemana,
         fechaHoraInicio: this.fechaHoraInicio,
         fechaHoraFin: this.fechaHoraFin,
      }
   }

   //getters and setters
   getFechaGeneracion = () => this.fechaGeneracion
   setFechaGeneracion = (value) => this.fechaGeneracion = value

   getDiaSemana = () => this.diaSemana
   setDiaSemana = (value) => this.diaSemana = value

   getFechaHoraInicio = () => this.fechaHoraInicio
   setFechaHoraInicio = (value) => this.fechaHoraInicio = value

   getFechaHoraFin = () => this.fechaHoraFin
   setFechaHoraFin = (value) => this.fechaHoraFin = value

   getCambioEstadoTurno = () => this.cambioEstadoTurno
   setCambioEstadoTurno = (value) => this.cambioEstadoTurno = value










}