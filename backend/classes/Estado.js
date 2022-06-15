module.exports = class Estado {
   id
   //Atributos propios
   nombre
   descripcion
   ambito

   constructor({
      id,
      nombre,
      descripcion,
      ambito,
   }) {
      this.id = id
      this.nombre = nombre
      this.descripcion = descripcion
      this.ambito = ambito
   }


   //metodos 
   mostrarEstado = () => {

   }
   esDisponible = () => {
      return this.nombre === "Disponible"
   }

   esCancelable = () => {
      return ["Confirmada", "PendienteConfirmacion"].includes(this.nombre)
   }

   esAmbitoRecurso = () => {
      return this.ambito === 'RecursoTecnologico'
   }
   esConIngresoAMantCorrectivo = () => {
      return this.nombre === "ConIngresoEnMantenimientoCorrectivo"
   }
   esAmbitoTurno = () => {
      return this.ambito === 'Turno'
   }
   esCanceladoXMantenimientoCorrectivo = () => {
      return this.nombre === "CanceladoPorMantenimientoCorrectivo"
   }
   //getters and setters
   getNombre = () => this.nombre
   setNombre = (value) => this.nombre = value

   getDescripcion = () => this.descripcion
   setDescripcion = (value) => this.descripcion = value

   getAmbito = () => this.ambito
   setAmbito = (value) => this.ambito = value

   getEsReservable = () => this.esReservable
   setEsReservable = (value) => this.esReservable = value

   getEsCancelable = () => this.esCancelable
   setEsCancelable = (value) => this.esCancelable = value












}