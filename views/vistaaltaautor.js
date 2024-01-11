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
    
        let fotoInput = document.getElementById('fotoInput');
        let fotoFile = fotoInput.files[0];
    
        let reader = new FileReader();
        
        // Leer la imagen como base64
        reader.readAsDataURL(fotoFile);

        reader.onload = function (e) {
            // e.target.result contiene el contenido en base64
            let fotoBase64 = e.target.result;
    
            // Continuar con la lógica de la solicitud AJAX
            const params = {
                "nombre": nombre,
                "fechanacimiento": fechanacimiento,
                "fechafallecimiento": fechafallecimiento,
                "nacionalidad": nacionalidad,
                "biografia": biografia,
                "foto": fotoBase64
            };
            const url = 'libros.php';
    
            // Rest.post(url, params, this.resultadoAJAX);
            console.log(params);
        };
    
      
    }
    
    resultadoAJAX = (objeto) => {
        console.log(objeto);
    }
}