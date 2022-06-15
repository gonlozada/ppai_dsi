
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

      return this.agruparPersonalCientifico()
   }

   agruparPersonalCientifico = () => {
      const grupos = this.turnosCancelables.reduce((acc, curr) => {
         acc[curr.personalCientifico.nombre] = [...(acc[curr.personalCientifico.nombre] ?? []), curr]
         return acc
      }, {})

      return grupos
   }

   tomarConfirmacion = ({ notifEmail, notifWhatsapp }) => {
      this.crearMantenimiento()

      //Usar webservice aca para enviar notificaciones

      return { message: "Notificaciones enviadas con exito" }
   }

   crearMantenimiento = () => {
      let estadoRTMantenimientoCorrectivo
      let estadoCanceladoXMantenimientoCorrectivo

      for (const estado of db.Estado) {
         if (estado.esAmbitoRecurso()) {
            if (estado.esConIngresoAMantCorrectivo()) {
               estadoRTMantenimientoCorrectivo = estado
            }
         }


         if (estado.esAmbitoTurno())
            if (estado.esCanceladoXMantenimientoCorrectivo())
               estadoCanceladoXMantenimientoCorrectivo = estado

      }

      if (!estadoRTMantenimientoCorrectivo)
         throw new Error("estadoRTMantenimientoCorrectivo not found")

      if (!estadoCanceladoXMantenimientoCorrectivo)
         throw new Error("estadoCanceladoXMantenimientoCorrectivo not found")

      this.recursoSeleccionado.crearMantenimiento({
         id: db.Mantenimiento.length,
         fechaInicio: new Date(),
         fechaInicioPrevista: new Date(),
         fechaFin: this.fechaFinMantenimiento,
         motivoMantenimiento: this.razon,
         estadoRTMantenimientoCorrectivo
      })


      this.recursoSeleccionado.cancelarTurnos(this.turnosCancelables, estadoCanceladoXMantenimientoCorrectivo)

      this.finCU()
   }

   finCU = () => {
      console.log("Fin CU 36")
   }
}