module.exports = class AsignacionResponsableTecnicoRT {
   id
   //Atributos propios
   fechaDesde
   fechaHasta

   //Atributos puntero
   recursos
   usuario


   constructor({
      id,
      fechaDesde,
      fechaHasta,
      usuario,
      recursos
   }) {
      this.id = id
      this.fechaDesde = fechaDesde
      this.fechaHasta = fechaHasta
      this.usuario = usuario
      this.recursos = recursos
   }


   //metodos 
   mostrarResponsableTecnicoRT = () => {

   }

   misRT = () => {

   }

   esAsignacionUsuario = usuario => {
      return this.usuario.usuario == usuario.usuario
   }

   esVigente = () => {
      return !this.fechaHasta
   }
   //getters and setters
   getFechaDesde = () => this.fechaDesde
   setFechaDesde = (value) => this.fechaDesde = value

   getFechaHasta = () => this.fechaHasta
   setFechaHasta = (value) => this.fechaHasta = value

   getUsuario = () => this.usuario
   setUsuario = (value) => this.usuario = value

   obtenerRT = () => this.recursos
   setRecursos = (value) => this.recursos = value










}