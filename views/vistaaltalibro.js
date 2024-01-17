import { Vista } from './vista.js'
import { Rest } from '../service/rest.js'
export class VistaAltaLibro extends Vista{
    constructor (controlador,base) {
        super(controlador,base)
        this.base=base;
        this.controlador = controlador;
        
        this.btnaltaautor = document.getElementById("btnaltaautores");
        this.btnenviar = document.getElementById("enviarlibro");

        this.btnaltaautor.onclick = this.irAutor;
        this.btnenviar.onclick = this.insertar;
    }
    irAutor = () => {
        this.controlador.irAVista(this.controlador.vistaAltaAutor)
    }

    /**
     * Valida los campos del formulario
     */
    validar(){
        const tituloInput = document.getElementById('tituloInput');
        const fechaPublicacionInput = document.getElementById('fechaPublicacionInput');
        const portadaInput = document.getElementById('portadaInput');

        let sw = true;
        const hoy = new Date();
        const fechaPublicacion = new Date(fechaPublicacionInput.value);
        if(!(hoy>fechaPublicacion)){
            sw=false;
            fechaPublicacionInput.style.borderColor = 'red';
        }
        if(!portadaInput.value){
            sw=false;
            portadaInput.style.borderColor = 'red';
        }
        if(!tituloInput.value){
            sw=false;
            tituloInput.style.borderColor = 'red';
        }
        return sw;
    }

    /**
     * Solicita al servidor la creación del libro
     */
    insertar = (event) => {
        const tituloInput = document.getElementById('tituloInput');
        const fechaPublicacionInput = document.getElementById('fechaPublicacionInput');
        const resenaInput = document.getElementById('resenaInput');
        const generoInput = document.getElementById('generoInput');
        const portadaInput = document.getElementById('portadaInput');
        let foto = portadaInput.files[0];

        event.preventDefault()

        if(this.validar()){
            let titulo = tituloInput.value;
            let fechaPublicacion = fechaPublicacionInput.value;
            let resena = resenaInput.value;
            let genero = generoInput.value;

            this.borrarDatos();
        
            let reader = new FileReader();
            // Leer la imagen como base64
            reader.readAsDataURL(foto);
    
            reader.onload = function (contenidoFoto) {
                // e.target.result contiene el contenido en base64
                let fotoBase64 = contenidoFoto.target.result;
                const params = {
                    "autor_obra":1,
                    "titulo": titulo,
                    "fecha_publicacion": fechaPublicacion,
                    "resena": resena,
                    "portada": fotoBase64,
                    "genero": parseInt(genero),
                };
                const url = 'https://migueljaque.com/fanlib/v1/obra';
                Rest.post(url, params, this.resultadoAJAX);
            }
        }
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

    borrarDatos(){
        const tituloInput = document.getElementById('tituloInput');
        const fechaPublicacionInput = document.getElementById('fechaPublicacionInput');
        const resenaInput = document.getElementById('resenaInput');
        const generoInput = document.getElementById('generoInput');
        const portadaInput = document.getElementById('portadaInput');

        tituloInput.value='';
        fechaPublicacionInput.value='';
        resenaInput.value='';
        generoInput.value='';
        portadaInput.value='';
    
        fechaPublicacionInput.style.borderColor = 'gray';
        portadaInput.style.borderColor = 'gray';
        tituloInput.style.borderColor = 'gray';
        resenaInput.style.borderColor = 'gray';
        generoInput.style.borderColor = 'gray';
    }
}