import { Vista } from './vista.js';
import { Rest } from '../service/rest.js';

export class VistaListarLibro extends Vista {
  constructor(controlador, base) {
    super(controlador, base);
    this.base = base;
    this.controlador = controlador;

    this.btnlistarautor = document.getElementById("btnlistarautores");
    this.btnlistarautor.onclick = this.irListaAutor;
  }

  irListaAutor = () => {
    this.controlador.irAVista(this.controlador.vistaListarAutor);
  }

  listar = () => {
    // Implementa la lógica para obtener y mostrar la lista de libros.
  }

  buscar = () => {
    // Implementa la lógica para buscar libros.
  }

  /*eliminar = () => {
    // Implementa la lógica para eliminar libros.
    document.getElementById('btnBorrarLibros').addEventListener('click', function() {
      const librosSeleccionados = obtenerLibrosSeleccionados();
      if (librosSeleccionados.length > 0) {
          borrarLibros(librosSeleccionados);
      } else {
          alert('Selecciona al menos un libro para borrar.');
      }
    });
    
    function obtenerLibrosSeleccionados() {
        const checkboxes = document.querySelectorAll('.checkbox-libro:checked');
        const librosSeleccionados = Array.from(checkboxes).map(checkbox => checkbox.dataset.id);
        return librosSeleccionados;
    }
    
    function borrarLibros(librosIds) {
        // Realiza la llamada AJAX para borrar los libros en el servidor
        const urlBorrarLibros = 'https://migueljaque.com/fanlib/v1/obra';
        const params = { librosIds: librosIds };
    
        Rest.post(urlBorrarLibros, params, function() {
            console.log('Libros borrados exitosamente.');
        });
    }
  
  }*/

  irAAutores = () => {
    // Implementa el cambio de vista a la lista de autores.
  }

  marcarFavorito = () => {
    // Implementa la lógica para marcar/desmarcar un libro como favorito.
  }

  llamadaAJAX = () => {
    const params = {};
    const url = 'https://migueljaque.com/fanlib/v1/obra';
    Rest.get(url, params, this.resultadoAJAX);
  }

  resultadoAJAX = (objeto) => {
    console.log(objeto);
  }
}