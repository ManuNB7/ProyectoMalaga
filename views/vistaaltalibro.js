import { Vista } from './vista.js'
import { Rest } from '../service/rest.js'
export class VistaAltaLibro extends Vista{
    constructor (controlador,base) {
        super(controlador,base)
        this.base=base
        this.controlador = controlador
        
        this.btnaltaautor = document.getElementById("btnaltaautores")
        this.btnenviar = document.getElementById("enviarlibro")

        this.btnaltaautor.onclick = this.irAutor
        this.btnenviar.onclick = this.insertar

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
    insertar = (event) => {
        event.preventDefault()
        let titulo = document.getElementById('tituloInput').value;
        let fechaPublicacion = document.getElementById('fechaPublicacionInput').value;
        let resena = document.getElementById('resenaInput').value;
        let genero = document.getElementById('generoInput').value;
        
        let portada = document.getElementById('portadaInput');
        let foto = portada.files[0];
    
        let reader = new FileReader();
        // Leer la imagen como base64
        reader.readAsDataURL(foto);

        reader.onload = function (e) {
            // e.target.result contiene el contenido en base64
            let fotoBase64 = e.target.result;
            const params = {
                "titulo": titulo,
                "fechaPublicacion": fechaPublicacion,
                "resena": resena,
                "portada": foto,
                "genero": genero
            };
            const url = 'libros.php';
            //Rest.post(url,params, this.resultadoAJAX);
            console.log(params)
        }
    }

    resultadoAJAX = (objeto) => {
        console.log(objeto);
    }
}