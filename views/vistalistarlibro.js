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

  eliminar = () => {
    // Implementa la lógica para eliminar libros.
  }

  irAAutores = () => {
    // Implementa el cambio de vista a la lista de autores.
  }

  marcarFavorito = () => {
    // Implementa la lógica para marcar/desmarcar un libro como favorito.
  }

  llamadaAJAX = () => {
    const params = {};
    const url = 'https://migueljaque.com/fanlib/v1/autor';
    Rest.get(url, params, this.resultadoAJAX);
  }

  resultadoAJAX = (objeto) => {
    console.log(objeto);
  }
}