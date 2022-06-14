module.exports = class AsignacionCientificoDelCI {
   //Atributos propios
   fechaDesde
   fechaHasta
   turnos
   personalCientifico


   constructor({
      fechaDesde,
      fechaHasta,
      turnos,
      personalCientifico,

   }) {
      this.fechaDesde = fechaDesde
      this.fechaHasta = fechaHasta
      this.turnos = turnos
      this.personalCientifico = personalCientifico

   }


   //metodos 
   contieneTurnoId = turnoId => !!this.turnos.find(t => t.id === turnoId)

   obtenerMailYNombre = () => {
      return this.personalCientifico.obtenerMailYNombre()
   }








}