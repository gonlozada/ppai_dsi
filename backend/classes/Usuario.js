module.exports = class Usuario {
   //Atributos propios
   usuario
   clave
   habilitado


   constructor({
      usuario,
      clave,
      habilitado,
   }) {
      this.clave = clave
      this.habilitado = habilitado
      this.usuario = usuario
   }


   //metodos 

   //getters and setters
   getClave = () => this.clave
   setClave = (value) => this.clave = value

   getHabilitado = () => this.habilitado
   setHabilitado = (value) => this.habilitado = value

   getUsuario = () => this.usuario
   setUsuario = (value) => this.usuario = value










}