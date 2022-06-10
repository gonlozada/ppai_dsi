module.exports = class CambioEstadoRT {
   //Atributos propios
   #fechaHoraDesde
   #fechaHoraHasta

   //Atributos puntero
   #estado


   constructor(
      fechaHoraDesde,
      fechaHoraHasta,
      estado
   ) {
      this.#fechaHoraDesde = fechaHoraDesde
      this.#fechaHoraHasta = fechaHoraHasta
      this.#estado = estado
   }


   //metodos 
   mostrarCambioEstadoRT = () => {

   }

   //getters and setters
   getFechaHoraDesde = () => this.#fechaHoraDesde
   setFechaHoraDesde = (value) => this.#fechaHoraDesde = value

   getFechaHoraHasta = () => this.#fechaHoraHasta
   setFechaHoraHasta = (value) => this.#fechaHoraHasta = value

   getEstado = () => this.#estado
   setEstado = (value) => this.#estado = value










}