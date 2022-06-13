module.exports = class Estado {
   id
   //Atributos propios
   nombre
   descripcion
   ambito
   esReservable
   esCancelable

   constructor({
      id,
      nombre,
      descripcion,
      ambito,
      esReservable,
      esCancelable,
   }) {
      this.id = id
      this.nombre = nombre
      this.descripcion = descripcion
      this.ambito = ambito
      this.esReservable = esReservable
      this.esCancelable = esCancelable
   }


   //metodos 
   mostrarEstado = () => {

   }
   esDisponible = () => {
      return this.nombre === "Disponible"
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