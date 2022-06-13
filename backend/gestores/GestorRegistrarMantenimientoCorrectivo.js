const db = require('../db')

module.exports = class GestorRegistrarMantenimientoCorrectivo {
   usuarioActual
   recursos

   constructor() {

   }

   //metodos 
   opcionRegistrarRTEnMantenimientoCorrectivo = () => {
      this.usuarioActual = this.getUsuarioSesionActual()
      this.recursos = this.buscarRTs()

      return this.recursos
   }

   getUsuarioSesionActual = () => {
      return db.SesionActual.getUsuario()
   }

   buscarRTs = () => {
      for (const ART of db.AsignacionResponsableTecnicoRT) {
         if (ART.esAsignacionUsuario(this.usuarioActual)) {
            if (ART.esVigente()) {
               const recursos = ART
                  .obtenerRT()
                  .filter(RT => RT.esRecursoDisponible())//filtrado por estado disponible
               return recursos
            }
         }

      }
   }


}