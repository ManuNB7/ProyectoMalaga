import { Vista } from './vista.js'
export class VistaAltaAutor extends Vista{
    constructor (controlador,base) {
        super(controlador,base)
        this.base=base
        this.controlador = controlador

        this.btnaltalibro = document.getElementById("btnaltalibros")
        this.btnaltalibro.onclick = this.irLibro

    }
    irLibro = () => {
        this.controlador.irAVista(this.controlador.vistaAltaLibro)
    }

    /**
     * Valida los campos del formulario
     */
    validar = () => {}

    /**
     * Solicita al servidor la creación del autor
     */
    insertar = () => {}
}