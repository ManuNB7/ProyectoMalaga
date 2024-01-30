import { Vista } from './vista.js'
import { ModeloAutor } from '../models/modeloautor.js'

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
    validar = () => {
        return true
    }

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
    
        // Obtener la imagen en base64
        let imagenautorInput = document.getElementById('imagenautorInput');
        let fotoBase64 = null;
    
        if (imagenautorInput.files.length > 0 &&    this.validar()) {
            const file = imagenautorInput.files[0];
            const reader = new FileReader();
    
            reader.onload = () => {
                fotoBase64 = reader.result.split(',')[1];
    
                // Continuar con la lógica de la solicitud AJAX
                const params = {
                    "nombre": nombre,
                    "fecha_nac": fechanacimiento,
                    "fecha_muerte": fechafallecimiento,
                    "nacionalidad": nacionalidad,
                    "biografia": biografia,
                    "foto": fotoBase64
                };
    
                ModeloAutor.guardarAutor(params,this.irListar);
            };
    
            reader.readAsDataURL(file);
        } 
    }
    irlistar = () =>{
        this.controlador.irAVista(this.controlador.vistaListarAutor);
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