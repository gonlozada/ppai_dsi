module.exports = class Turno {
   //Atributos propios
   #fechaGeneracion
   #diaSemana
   #fechaHoraInicio
   #fechaHoraFin

   //Atributos puntero
   #cambioEstadoTurno


   constructor(
      fechaGeneracion,
      diaSemana,
      fechaHoraInicio,
      fechaHoraFin,
      cambioEstadoTurno
   ) {
      this.#fechaGeneracion = fechaGeneracion
      this.#diaSemana = diaSemana
      this.#fechaHoraInicio = fechaHoraInicio
      this.#fechaHoraFin = fechaHoraFin
      this.#cambioEstadoTurno = cambioEstadoTurno
   }


   //metodos 
   mostrarTurno = () => {

   }
   estoyDisponible = () => {

   }


   //getters and setters
   getFechaGeneracion = () => this.#fechaGeneracion
   setFechaGeneracion = (value) => this.#fechaGeneracion = value

   getDiaSemana = () => this.#diaSemana
   setDiaSemana = (value) => this.#diaSemana = value

   getFechaHoraInicio = () => this.#fechaHoraInicio
   setFechaHoraInicio = (value) => this.#fechaHoraInicio = value

   getFechaHoraFin = () => this.#fechaHoraFin
   setFechaHoraFin = (value) => this.#fechaHoraFin = value

   getCambioEstadoTurno = () => this.#cambioEstadoTurno
   setCambioEstadoTurno = (value) => this.#cambioEstadoTurno = value










}