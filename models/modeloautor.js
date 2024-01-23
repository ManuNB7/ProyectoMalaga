import { Rest } from '../service/rest.js'

export class ModeloAutor {
    listaAutores = new Array()
    constructor () {
      
    }
    static guardarAutor(nuevoAutor) {
      Rest.post('https://migueljaque.com/fanlib/v1/autor', nuevoAutor, this.resultadoAJAX)
    }

    static borrarAutor(id){
      Rest.delete('https://migueljaque.com/fanlib/v1/autor/'+id,this.resultadoAJAX)
    }

    static actualizarAutor(params) {
      Rest.put('https://migueljaque.com/fanlib/v1/autor/', params, this.resultadoAJAX);
    }

    static listarAutor(){
      Rest.get(url, this.listar);
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