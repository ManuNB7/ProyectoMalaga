import { Vista } from './vista.js'
import { Rest } from '../service/rest.js'

export class VistaEditarAutor extends Vista {
    // ...
  
    
    mostrarInformacionUltimaVisita(ultimaVisita) {
        const infoUltimaVisita = document.getElementById('infoUltimaVisita');
        if (infoUltimaVisita) {
          infoUltimaVisita.textContent = "Última visita: " + ultimaVisita;
        }
      }
  }