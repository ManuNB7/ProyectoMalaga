import { Vista } from './vista.js';
export class VistaInicio extends Vista{
    constructor (controlador,base) {
        super(controlador,base)
        this.base=base
        this.controlador = controlador
    }
}