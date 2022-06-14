const db = require('../db')

module.exports = class GestorRegistrarMantenimientoCorrectivo {
   usuarioActual
   recursos
   recursoSeleccionado
   fechaFinMantenimiento
   razon
   turnosCancelables

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

               for (const r of recursos)
                  r.marca = db.Marca.find(m => m.contieneModelo(r.modeloDelRT.nombre))
               return recursos.reduce((acc, curr) => {
                  acc[curr.tipoDeRT.nombre] = [...(acc[curr.tipoDeRT.nombre] ?? []), curr]
                  return acc
               }, {})
            }
         }

      }
   }

   tomarDatosMantenimiento = (datos) => {
      this.recursoSeleccionado = db.RecursoTecnologico.find(r => r.id === datos.recursoSeleccionado)
      this.fechaInicioMantenimiento = new Date()
      this.fechaFinMantenimiento = new Date(datos.fechaFinMantenimiento)
      this.razon = datos.razon

      return this.buscarReservasTurnos()
   }

   buscarReservasTurnos = () => {
      this.turnosCancelables = this.recursoSeleccionado.obtenerReservasTurnos(this.fechaInicioMantenimiento, this.fechaFinMantenimiento)
      return this.buscarDatosTurnosC()

   }

   buscarDatosTurnosC = () => {
      for (const index in this.turnosCancelables) {
         //obtengo todos los datos del turno y los seteo en una variable temporal llamada datos para el front-end
         this.turnosCancelables[index] = this.turnosCancelables[index].obtenerDatos()

         //busco el cientifico asignado al CI que contiene este turno de esta iteracion
         const asignacionCientificoDelCI = db.AsignacionCientificoDelCI.find(a => a.contieneTurnoId(this.turnosCancelables[index].id))

         //le anido los datos de su personal cientifico
         this.turnosCancelables[index].personalCientifico = asignacionCientificoDelCI.obtenerMailYNombre()

      }

      return this.agruparPC()
   }

   agruparPC = () => {
      const grupos = this.turnosCancelables.reduce((acc, curr) => {
         acc[curr.personalCientifico.nombre] = curr
         return acc
      }, {})

      return grupos
   }
}