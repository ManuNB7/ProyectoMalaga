import { Vista } from './vista.js'
export class VistaListarAutor extends Vista{
    constructor (controlador,base) {
        super(controlador,base)
        this.base=base
        this.controlador = controlador

        this.btnlistarlibro = document.getElementById("btnlistarlibros")
        this.btnlistarlibro.onclick = this.irListaLibro

    }
    irListaLibro = () => {
        this.controlador.irAVista(this.controlador.vistaListarLibro)
    }
    /**
     * Obtiene la lista de autores y la muestra
     */
    listar = () => {};

    /**
     * Muestra los autores que cumplen con el criterio de búsqueda
     * Tendrá su input con button para buscar.
     */
    buscar = () => {};

    /**
     * Elimina el autor seleccionado y todos sus libros.
     */
    eliminar = () => {};

    /**
     * Solicita al Controlador el cambio de vista a listar libros
     */
    irALibros = () => {};

    /**
     * Marca y desmarca el autor como favorito del usuario
     */
    marcarFavorito = () => {};
}