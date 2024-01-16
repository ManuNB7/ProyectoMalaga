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

        this.tituloInput = document.getElementById('tituloInput');
        this.fechaPublicacionInput = document.getElementById('fechaPublicacionInput');
        this.resenaInput = document.getElementById('resenaInput');
        this.generoInput = document.getElementById('generoInput');
        this.portadaInput = document.getElementById('portadaInput');
    }
    irAutor = () => {
        this.controlador.irAVista(this.controlador.vistaAltaAutor)
    }

    /**
     * Valida los campos del formulario
     */
    validar = () => {
        let sw = true;
        const hoy = new Date();
        const fechaPublicacion = new Date(this.fechaPublicacionInput.value);
        if(!hoy>fechaPublicacion){
            sw=false;
            this.fechaPublicacionInput.style.borderColor = 'red';
        }
        const extensionesPermitidas = ['jpg', 'jpeg', 'png', 'gif'];
        //pop() devuelve el último elemento del array
        const extension = archivo.name.split('.').pop().toLowerCase();
        if(!this.portadaInput.value || extensionesPermitidas.includes(extension)){
            sw=false;
            this.portadaInput.style.borderColor = 'red';
        }
        if(!this.tituloInput.value){
            sw=false;
            this.tituloInput.style.borderColor = 'red';
        }

        if(sw){
            this.fechaPublicacionInput.style.borderColor = 'green';
            this.portadaInput.style.borderColor = 'green';
            this.tituloInput.style.borderColor = 'green';
        }
        return sw;
    }

    /**
     * Solicita al servidor la creación del libro
     */
    insertar = (event) => {
        event.preventDefault()
        if(this.validar){
            let titulo = this.tituloInput.value;
            let fechaPublicacion = this.fechaPublicacionInput.value;
            let resena = this.resenaInput.value;
            let genero = this.generoInput.value;
            
            let foto = this.portadaInput.files[0];
        
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
}