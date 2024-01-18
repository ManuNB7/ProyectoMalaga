import { Vista } from './vista.js'
import { ModeloAutor } from '../models/modeloautor.js'

export class VistaEditarAutor extends Vista {
    /*constructor (controlador,base) {
      super(controlador,base)
      this.base=base
      this.controlador = controlador

      this.btnmodautor = document.getElementById("btnmodautor")
      this.btnenviar = document.getElementById("enviarmodautor")
      
      this.btnmodautor.onclick = this.irLibro
      this.btnenviar.onclick = this.insertar
  }

  irLibro = () => {
    this.controlador.irAVista(this.controlador.vistaEditarAutor)
  }*/
  /**
     * Solicita al servidor la creación del autor
     */
  insertar = (event) => {
    event.preventDefault();

    let nombre = document.getElementById('nombreInput').value=id;
    let fechanacimiento = document.getElementById('fechanacimientoInput').value=id;
    let fechafallecimiento = document.getElementById('fechafallecimientoInput').value=id;
    let nacionalidad = document.getElementById('nacionalidadInput').value=id;
    let biografia = document.getElementById('biografiaInput').value=id;

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

            ModeloAutor.guardarAutor(params);
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