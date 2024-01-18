import { Vista } from './vista.js'
import { ModeloAutor } from '../models/modeloautor.js'

export class VistaEditarAutor extends Vista {
    constructor(controlador, base) {
        super(controlador, base);
        this.base = base;
        this.controlador = controlador;

        //this.btnmodautor = document.getElementById("btnmodautor");
        this.btnenviar = document.getElementById("enviarautor2");

        //this.btnmodautor.onclick = this.irLibro;
        this.btnenviar.onclick = this.insertar;
    }

    irLibro = () => {
        this.controlador.irAVista(this.controlador.vistaEditarAutor);
    }

    cargarDatosAutor = (datosAutor) => {
        // Asignar los valores a los campos del formulario
        document.getElementById('idInput').value = datosAutor.id;
        document.getElementById('nombreInput').value = datosAutor.nombre;
        document.getElementById('fechanacimientoInput').value = datosAutor.fecha_nac;
        document.getElementById('fechafallecimientoInput').value = datosAutor.fecha_muerte;
        document.getElementById('nacionalidadInput').value = datosAutor.nacionalidad;
        document.getElementById('biografiaInput').value = datosAutor.biografia;
    }

    /**
     * Solicita al servidor la creación o modificación del autor
     */
    insertar = (event) => {
      event.preventDefault();

      // HAY QUE OBTENER EL ID
      let id = "";

      // Obtener los valores de los campos del formulario
      let nombre = document.getElementById('nombreInput').value;
      let fechanacimiento = document.getElementById('fechanacimientoInput').value;
      let fechafallecimiento = document.getElementById('fechafallecimientoInput').value;
      let nacionalidad = document.getElementById('nacionalidadInput').value;
      let biografia = document.getElementById('biografiaInput').value;

      // Obtener la imagen en base64
      let imagenautorInput = document.getElementById('imagenautorInput');
      let fotoBase64 = null;

      if (imagenautorInput.files.length > 0 && this.validar()) {
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

              // Verificar si se proporciona un ID de autor
              if (id) {
                  // Es una modificación, llamar al método de actualización
                  this.actualizarAutor(id, params);
              } else {
                  // Es una creación, llamar al método de creación
                  this.crearNuevoAutor(params);
              }
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
