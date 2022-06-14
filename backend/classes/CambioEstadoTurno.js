module.exports = class CambioEstadoTurno {
   id

   //Atributos propios
   fechaHoraDesde
   fechaHoraHasta

   //Atributos puntero
   estado


   constructor({
      id,
      fechaHoraDesde,
      fechaHoraHasta,
      estado
   }) {
      this.id = id
      this.fechaHoraDesde = fechaHoraDesde
      this.fechaHoraHasta = fechaHoraHasta
      this.estado = estado
   }


   //metodos 

   esActual = () => {
      return !this.fechaHoraHasta
   }
   esCancelable = () => {
      return this.estado.esCancelable()
   }

   //getters and setters
   getFechaHoraDesde = () => this.fechaHoraDesde
   setFechaHoraDesde = (value) => this.fechaHoraDesde = value

   getFechaHoraHasta = () => this.fechaHoraHasta
   setFechaHoraHasta = (value) => this.fechaHoraHasta = value

   getEstado = () => this.estado
   setEstado = (value) => this.estado = value










}