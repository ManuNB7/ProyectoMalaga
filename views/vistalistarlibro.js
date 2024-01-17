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
    datosLibros.forEach(obra => {

      let obraId = obra.id; // Obtener el ID de la obra
      const divLibro = document.createElement("div");
      divLibro.classList.add("contenedor");
      
      const pTitulo = document.createElement("p");
      pTitulo.textContent = obra.titulo;
      divLibro.appendChild(pTitulo);

      const resena = document.createElement("p");
      resena.textContent = obra.resena;
      divLibro.appendChild(resena);
      
      const imgPortada = document.createElement("img");
      imgPortada.src = obra.portada; // Ajusta esto según cómo estén estructurados los datos
      divLibro.appendChild(imgPortada);
      
      const btnBorrar = document.createElement("button");
      btnBorrar.textContent = "Borrar";
      divLibro.appendChild(btnBorrar);

      // Asignar una función onclick con el ID del autor
      btnBorrar.onclick = () => {
        this.eliminar(obraId)
        this.controlador.irAVista(this.controlador.vistaListarLibro)
    };

      divLibro.appendChild(btnBorrar);

      contenedorLibros.appendChild(divLibro);
    });
}

  buscar = () => {
    // Implementa la lógica para buscar libros.
  }

  eliminar = () => {
    // Implementa la lógica para eliminar obras.
    ModeloLibro.borrarAutor(obraId)
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
    Rest.get(url, this.listar);
  }

  

  mostrarInformacionUltimaVisita(ultimaVisita) {
    const infoUltimaVisita = document.getElementById('infoUltimaVisita');
    if (infoUltimaVisita) {
      infoUltimaVisita.textContent = "Última visita: " + ultimaVisita;
    }
  }

}