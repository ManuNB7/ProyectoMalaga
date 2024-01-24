import { Vista } from './vista.js'
import { ModeloAutor } from '../models/modeloautor.js'
import { ModeloLibro } from '../models/modelolibro.js'

export class VistaEditarObra extends Vista {
    constructor(controlador, base) {
        super(controlador, base);
        this.base = base;
        this.controlador = controlador;

        this.btnenviar = document.getElementById("enviarlibro2");

        this.btnenviar.onclick = this.insertar;
    }

    irLibro = () => {
        this.controlador.irAVista(this.controlador.vistaEditarAutor);
    }

    /**
     * Valida los campos del formulario
     */
    validar = () => {
      return true
  }

    /**
     * Solicita al servidor la creación o modificación del autor
     */
    insertar = (event) => {
        event.preventDefault();

        let id = document.getElementById('idObraInputE').value;
        let tituloInput = document.getElementById('tituloInputE').value;
        let fechaPublicacionInput = document.getElementById('fechaPublicacionInputE').value;
        let resenaInput = document.getElementById('resenaInputE').value;
        let generoInput = document.getElementById('generoInputE').value;
        let portadaInput = document.getElementById('portadaInputE').value;
        let autorSelect = document.getElementById('AutorSelectE').value;
        let imgPortada = document.getElementById('imagenObraE').src;

        // Obtener la imagen en base64
        let imagenautorInput = document.getElementById('imagenAutorInputE');
        let fotoBase64 = null;

        if(imagenautorInput.value){
            if (imagenautorInput.files.length > 0 && this.validar()) {
                const file = imagenautorInput.files[0];
                const reader = new FileReader();
    
                reader.onload = () => {
                    fotoBase64 = reader.result.split(',')[1];
                };
                reader.readAsDataURL(file);
            }
        }
        else{
            fotoBase64=imgPortada.split(',')[1];
        }
      // Continuar con la lógica de la solicitud AJAX
        const params = {
            "id": id,
            "nombre": nombre,
            "fecha_nac": fechanacimiento,
            "fecha_muerte": fechafallecimiento,
            "nacionalidad": nacionalidad,
            "biografia": biografia,
            "foto": fotoBase64
        };

        ModeloLibro.actualizarAutor(params);
        this.controlador.irAVista(this.controlador.vistaListarLibro)
    }

    mostrarInformacionUltimaVisita(ultimaVisita) {
        const infoUltimaVisita = document.getElementById('infoUltimaVisita');
        if (infoUltimaVisita) {
            infoUltimaVisita.textContent = "Última visita: " + ultimaVisita;
        }
    }
}
