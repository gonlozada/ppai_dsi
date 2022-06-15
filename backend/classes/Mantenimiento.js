module.exports = class AsignacionResponsableTecnicoRT {
   id
   //Atributos propios
   fechaInicio
   fechaInicioPrevista
   fechaFin
   motivoMantenimiento


   constructor({
      id,
      fechaInicio,
      fechaInicioPrevista,
      fechaFin,
      motivoMantenimiento
   }) {
      this.id = id
      this.fechaInicio = fechaInicio
      this.fechaInicioPrevista = fechaInicioPrevista
      this.fechaFin = fechaFin
      this.motivoMantenimiento = motivoMantenimiento
   }


   //metodos 

   //getters and setters
   getFechaInicio = () => this.fechaInicio
   setFechaInicio = (value) => this.fechaInicio = value

   getFechaInicioPrevista = () => this.fechaInicioPrevista
   setFechaInicioPrevista = (value) => this.fechaInicioPrevista = value

   getFechaFin = () => this.fechaFin
   setFechaFin = (value) => this.fechaFin = value

   getMotivoMantenimiento = () => this.motivoMantenimiento
   setMotivoMantenimiento = (value) => this.motivoMantenimiento = value












}