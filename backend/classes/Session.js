module.exports = class Session {
   id

   //Atributos propios
   fechaHoraDesde
   fechaHoraHasta

   //Atributos puntero
   usuario


   constructor({
      id,
      fechaHoraDesde,
      fechaHoraHasta,
      usuario
   }) {
      this.id = id
      this.fechaHoraDesde = fechaHoraDesde
      this.fechaHoraHasta = fechaHoraHasta
      this.usuario = usuario
   }


   //metodos 

   //getters and setters
   getFechaHoraDesde = () => this.fechaHoraDesde
   setFechaHoraDesde = (value) => this.fechaHoraDesde = value

   getFechaHoraHasta = () => this.fechaHoraHasta
   setFechaHoraHasta = (value) => this.fechaHoraHasta = value

   getUsuario = () => this.usuario
   setUsuario = (value) => this.usuario = value










}