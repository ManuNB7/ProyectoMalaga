import { Vista } from './vista.js'
import { Rest } from '../service/rest.js'
export class VistaListarLibro extends Vista{
    constructor (controlador,base) {
        super(controlador,base)
        this.base=base
        this.controlador = controlador

        this.btnlistarautor = document.getElementById("btnlistarautores")
        this.btnlistarautor.onclick = this.irListaAutor
    }
    irListaAutor = () => {
        this.controlador.irAVista(this.controlador.vistaListarAutor)
    }
    /**
     * Obtiene la lista de libros y lo muestra
     */
    listar = () => {}

    /**
     * Muestra los libros que cumplen con el criterio de búsqueda
     * Tendrá su input con button para buscar.
     */
    buscar = () => {}

    /**
     * Eliminar el libro seleccionado
     */
    eliminar = () => {}

    /**
     * Cambio de vista por Controlador a la lista de autores
     */
    irAAutores = () => {}

    /**
     * Marca y desmarca el libro como favorito del usuario
     */
    marcarFavorito = () => {}

    llamadaAJAX = () => {
        const params = {};
        const url = 'https://migueljaque.com/fanlib/v1/autor&#39';
        Rest.get(url, params, this.resultadoAJAX);
    }
    resultadoAJAX = (objeto) => {
        console.log(objeto);
    }
}