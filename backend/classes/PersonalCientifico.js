module.exports = class PersonalCientifico {
   id
   //Atributos propios
   legajo
   nombre
   apellido
   numeroDocumento
   correoElectronicoInstitucional
   correoElectronicoPersonal
   telefonoCelular
   usuario

   constructor({
      id,
      legajo,
      nombre,
      apellido,
      numeroDocumento,
      correoElectronicoInstitucional,
      correoElectronicoPersonal,
      telefonoCelular,
      usuario
   }) {
      this.id = id
      this.legajo = legajo
      this.nombre = nombre
      this.apellido = apellido
      this.numeroDocumento = numeroDocumento
      this.correoElectronicoInstitucional = correoElectronicoInstitucional
      this.correoElectronicoPersonal = correoElectronicoPersonal
      this.telefonoCelular = telefonoCelular
      this.usuario = usuario
   }


   //metodos 
   mostrarPersonalCientifico = () => {

   }
   inhabilitarUsuario = () => {

   }
   habilitarUsuario = () => {

   }
   tengoUsuarioHabilitado = () => {

   }
   mostrarMisNovedades = () => {

   }
   //getters and setters










}