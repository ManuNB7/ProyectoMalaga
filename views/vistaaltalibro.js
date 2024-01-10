import { Vista } from './vista.js'
export class VistaAltaLibro extends Vista{
    constructor (controlador,base) {
        super(controlador,base)
        this.base=base
        this.controlador = controlador
        
        this.btnaltaautor = document.getElementById("btnaltaautores")
        this.btnaltaautor.onclick = this.irAutor

    }
    irAutor = () => {
        this.controlador.irAVista(this.controlador.vistaAltaAutor)
    }

    /**
     * Valida los campos del formulario
     */
    validar = () => {}

    /**
     * Solicita al servidor la creación del libro
     */
    insertar = () => {}
}