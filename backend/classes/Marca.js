module.exports = class Marca {
   nombre
   modelos


   constructor({
      nombre,
      modelos,

   }) {
      this.nombre = nombre
      this.modelos = modelos

   }


   //metodos 
   getNombre = () => this.nombre
   setNombre = (value) => this.nombre = value

   getModelos = () => this.modelos
   setModelos = (value) => this.modelos = value

   contieneModelo = nombreModelo => !!this.modelos.find(m => m.nombre === nombreModelo)








}