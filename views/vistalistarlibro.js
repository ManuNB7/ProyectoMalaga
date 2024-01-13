import { Vista } from './vista.js';
import { Rest } from '../service/rest.js';
import { ModeloLibro } from '../models/modelolibro.js';  // Importa el modelo de libros

export class VistaListarLibro extends Vista {
  constructor(controlador, base) {
    super(controlador, base);
    this.base = base;
    this.controlador = controlador;

    this.btnlistarautor = document.getElementById("btnlistarautores");
    this.btnlistarautor.onclick = this.irListaAutor;

    // Crea una instancia del ModeloLibro
    this.modeloLibro = new ModeloLibro();
  }

  irListaAutor = () => {
    this.controlador.irAVista(this.controlador.vistaListarAutor);
  }

  listar = (datosLibros) => {
    const cuerpoTablaLibros = document.getElementById("cuerpoTablaLibros");

    // Limpiar la tabla antes de agregar nuevos datos
    cuerpoTablaLibros.innerHTML = "";

    // Iterar sobre los datos y agregar filas a la tabla
    datosLibros.forEach(libro => {
      const fila = document.createElement("tr");

      // Agregar celdas con los datos del libro
      const celdaTitulo = document.createElement("td");
      celdaTitulo.textContent = libro.titulo;
      fila.appendChild(celdaTitulo);

      const celdaFecha = document.createElement("td");
      celdaFecha.textContent = libro.fechaPublicacion;
      fila.appendChild(celdaFecha);

      const celdaResena = document.createElement("td");
      celdaResena.textContent = libro.resena;
      fila.appendChild(celdaResena);

      // Agregar más celdas según las propiedades del libro

      // Agregar la fila a la tabla
      cuerpoTablaLibros.appendChild(fila);
    });
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
    const url = 'https://migueljaque.com/fanlib/v1/obra';
    Rest.get(url, params, this.resultadoAJAX);

  }

  resultadoAJAX = (objeto) => {
    try {
      console.log(objeto);
    } catch (error) {
      console.error('Error al parsear la respuesta JSON:', error);
    }
  }
}