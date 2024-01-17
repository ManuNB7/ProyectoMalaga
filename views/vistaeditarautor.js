import { Vista } from './vista.js'
import { ModeloAutor } from '../models/modeloautor.js'

export class VistaEditarAutor extends Vista {
    /*constructor (controlador,base) {
      super(controlador,base)
      this.base=base
      this.controlador = controlador

      this.btnmodautor = document.getElementById("btnmodautor")
      this.btnenviar = document.getElementById("enviarmodautor")
      
      this.btnmodautor.onclick = this.irLibro
      this.btnenviar.onclick = this.insertar
  }

  irLibro = () => {
    this.controlador.irAVista(this.controlador.vistaEditarAutor)
  }*/
  
    
    mostrarInformacionUltimaVisita(ultimaVisita) {
        const infoUltimaVisita = document.getElementById('infoUltimaVisita');
        if (infoUltimaVisita) {
          infoUltimaVisita.textContent = "Última visita: " + ultimaVisita;
        }
      }
  }