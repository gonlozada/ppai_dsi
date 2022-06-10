module.exports = class Estado {
   //Atributos propios
   #nombre
   #descripcion
   #ambito
   #esReservable
   #esCancelable

   constructor(
      nombre,
      descripcion,
      estado,
      ambito,
      esReservable,
      esCancelable,
   ) {
      this.#nombre = nombre
      this.#descripcion = descripcion
      this.#estado = estado
      this.#ambito = ambito
      this.#esReservable = esReservable
      this.#esCancelable = esCancelable
   }


   //metodos 
   mostrarEstado = () => {

   }

   //getters and setters
   getNombre = () => this.#nombre
   setNombre = (value) => this.#nombre = value

   getDescripcion = () => this.#descripcion
   setDescripcion = (value) => this.#descripcion = value

   getAmbito = () => this.#ambito
   setAmbito = (value) => this.#ambito = value

   getEsReservable = () => this.#esReservable
   setEsReservable = (value) => this.#esReservable = value

   getEsCancelable = () => this.#esCancelable
   setEsCancelable = (value) => this.#esCancelable = value












}