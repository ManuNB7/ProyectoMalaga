// En el archivo modelo_libro.js
import { Rest } from '../service/rest.js'

export class ModeloLibro {
  constructor() {
    // Inicializa las propiedades del modelo de libros, si es necesario.
  }

  static guardarObra(nuevaObra) {
    Rest.post('https://migueljaque.com/fanlib/v1/obra', nuevaObra, this.resultadoAJAX)
  }

  static borrarObra(id){
    Rest.delete('https://migueljaque.com/fanlib/v1/obra/'+id,this.resultadoAJAX)
  }

}