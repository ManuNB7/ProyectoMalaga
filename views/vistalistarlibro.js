import { Vista } from './vista.js';
import { Rest } from '../service/rest.js';
import { ModeloLibro } from '../models/modelolibro.js';  // Importa el modelo de libros

export class VistaListarLibro extends Vista {
  constructor(controlador, base) {
    super(controlador, base);
    this.base = base;
    this.controlador = controlador;

    this.btnlistarautor = document.getElementById("btnlistarautores");
    this.btnlistarautor.onclick = this.irAAutores;

    // Crea una instancia del ModeloLibro
    this.modeloLibro = new ModeloLibro();
  }
  
  listar = (datosLibros) => {
    const cuerpoTablaLibros = document.getElementById("contenedorLibros");

    // Verificar si el elemento existe antes de intentar acceder a él
    if (!cuerpoTablaLibros) {
        console.error("Elemento cuerpoTablaLibros no encontrado.");
        return;
    }

    // Limpiar la tabla antes de agregar nuevos datos
    cuerpoTablaLibros.innerHTML = "";

    // Verificar si hay libros para mostrar
    if (datosLibros.length === 0) {
        const mensajeNoLibros = document.createElement("p");
        mensajeNoLibros.textContent = "No hay libros disponibles.";
        cuerpoTablaLibros.appendChild(mensajeNoLibros);
        return;
    }

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
    this.controlador.irAVista(this.controlador.vistaListarAutor);
  }

  marcarFavorito = () => {
    // Implementa la lógica para marcar/desmarcar un libro como favorito.
  }

  // Después de realizar la llamada AJAX en tu método llamadaAJAX:
  llamadaAJAX = () => {
    const url = 'https://migueljaque.com/fanlib/v1/obra';
    Rest.get(url, this.resultadoAJAX);
  }

  resultadoAJAX = (obras) => {
    try {
        // Llama al método listar para mostrar las obras en la tabla
        this.listar(obras);

        // Muestra las obras en el contenedorLibros
        const contenedorLibros = document.getElementById("contenedorLibros");
        obras.forEach(libro => {
            const divLibro = document.createElement("div");
            divLibro.classList.add("contenedor");
            
            const pTitulo = document.createElement("p");
            pTitulo.textContent = libro.titulo;
            divLibro.appendChild(pTitulo);
            
            const imgPortada = document.createElement("img");
            imgPortada.src = libro.portada; // Ajusta esto según cómo estén estructurados los datos
            divLibro.appendChild(imgPortada);
            
            contenedorLibros.appendChild(divLibro);
        });

        // Deja la línea que imprime en la consola si la necesitas
        console.log(obras);
    } catch (error) {
        console.error('Error al parsear la respuesta JSON:', error);
    }
  }
  
}