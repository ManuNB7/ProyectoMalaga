import { Rest } from '../service/rest.js'

export class ModeloAutor {
    listaAutores = new Array()
    constructor () {
      
    }
    static guardarAutor(nuevoAutor,callback) {
      Rest.post('https://migueljaque.com/fanlib/v1/autor', nuevoAutor, callback)
    }

    static borrarAutor(id,callback){
      Rest.delete('https://migueljaque.com/fanlib/v1/autor'+id,callback)
    }

    static actualizarAutor(params) {
      Rest.put('https://migueljaque.com/fanlib/v1/autor/', params, this.resultadoAJAX);
    }

    static listarAutor(url,callback){
      Rest.get(url, callback);
    }
    static actualizarLista(){
      Rest.get('https://migueljaque.com/fanlib/v1/autor/', (respuesta) => {
        this.listaAutores = new Array()
        respuesta.forEach(elemento => {
          this.listaAutores.push([elemento.nombre,elemento.id])
       });
    });
      console.log(this.listaAutores)
    }
}