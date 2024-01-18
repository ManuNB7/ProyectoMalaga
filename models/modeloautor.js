import { Rest } from '../service/rest.js'

export class ModeloAutor {
    constructor () {
      
    }
    static guardarAutor(nuevoAutor) {
      Rest.post('https://migueljaque.com/fanlib/v1/autor', nuevoAutor, this.resultadoAJAX)
    }
    static borrarAutor(id){
      Rest.delete('https://migueljaque.com/fanlib/v1/autor/'+id,this.resultadoAJAX)
    }

    static actualizarAutor(idAutor, params) {
      Rest.put(`https://migueljaque.com/fanlib/v1/autor/`,+idAutor, params, this.resultadoAJAX);
    }
}