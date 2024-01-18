// En el archivo modelo_libro.js
import { Rest } from '../service/rest.js'

export class ModeloLibro {
  constructor() {
    // Inicializa las propiedades del modelo de libros, si es necesario.
  }

  mostrarInformacionUltimaVisita(ultimaVisita) {
    const infoUltimaVisita = document.getElementById('infoUltimaVisita');
    if (infoUltimaVisita) {
      infoUltimaVisita.textContent = "Última visita: " + ultimaVisita;
    }
  }

  static borrarObra(id){
    Rest.delete('https://migueljaque.com/fanlib/v1/obra/'+id,this.resultadoAJAX)
  }

}