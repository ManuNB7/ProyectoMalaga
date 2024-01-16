import { Vista } from './vista.js'
import { Rest } from '../service/rest.js'
export class VistaAltaAutor extends Vista{
    constructor (controlador,base) {
        super(controlador,base)
        this.base=base
        this.controlador = controlador

        this.btnaltalibro = document.getElementById("btnaltalibros")
        this.btnenviar = document.getElementById("enviarautor")
        
        this.btnaltalibro.onclick = this.irLibro
        this.btnenviar.onclick = this.insertar

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
    insertar = (event) => {
        event.preventDefault();
    
        let nombre = document.getElementById('nombreInput').value;
        let fechanacimiento = document.getElementById('fechanacimientoInput').value;
        let fechafallecimiento = document.getElementById('fechafallecimientoInput').value;
        let nacionalidad = document.getElementById('nacionalidadInput').value;
        let biografia = document.getElementById('biografiaInput').value;

        // Continuar con la lógica de la solicitud AJAX
        const params = {
            "nombre": nombre,
            "fecha_nac": fechanacimiento,
            "fecha_muerte": fechafallecimiento,
            "nacionalidad": nacionalidad,
            "biografia": biografia,
            "foto": "aaaa"
        };
        const url = 'https://migueljaque.com/fanlib/v1/autor';
        Rest.post(url, params, this.resultadoAJAX);
    }
    
    resultadoAJAX = (objeto) => {
        console.log(objeto);
        
    }

    mostrarInformacionUltimaVisita(ultimaVisita) {
        const infoUltimaVisita = document.getElementById('infoUltimaVisita');
        if (infoUltimaVisita) {
          infoUltimaVisita.textContent = "Última visita: " + ultimaVisita;
        }
      }
}