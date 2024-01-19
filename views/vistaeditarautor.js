import { Vista } from './vista.js'
import { ModeloAutor } from '../models/modeloautor.js'

export class VistaEditarAutor extends Vista {
    constructor(controlador, base) {
        super(controlador, base);
        this.base = base;
        this.controlador = controlador;

        this.btnenviar = document.getElementById("enviarautor2");

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

      // Obtener los valores de los campos del formulario
      let id = document.getElementById('idAutorInputE').value;
      let nombre = document.getElementById('nombreInputE').value;
      let fechanacimiento = document.getElementById('fechanacimientoInputE').value;
      let fechafallecimiento = document.getElementById('fechafallecimientoInputE').value;
      let nacionalidad = document.getElementById('nacionalidadInputE').value;
      let biografia = document.getElementById('biografiaInputE').value;

      // Obtener la imagen en base64
      let imagenautorInput = document.getElementById('imagenautorInputE');
      let fotoBase64 = null;

      if (imagenautorInput.files.length > 0 && this.validar()) {
          const file = imagenautorInput.files[0];
          const reader = new FileReader();

          reader.onload = () => {
              fotoBase64 = reader.result.split(',')[1];

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

              ModeloAutor.actualizarAutor(params);
              this.controlador.irAVista(this.controlador.vistaListarAutor)
          };

          reader.readAsDataURL(file);
      }
    }

    mostrarInformacionUltimaVisita(ultimaVisita) {
        const infoUltimaVisita = document.getElementById('infoUltimaVisita');
        if (infoUltimaVisita) {
            infoUltimaVisita.textContent = "Última visita: " + ultimaVisita;
        }
    }
}
