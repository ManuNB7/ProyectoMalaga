import { Vista } from './vista.js'
import { Rest } from '../service/rest.js'
import { ModeloAutor } from '../models/modeloautor.js'
export class VistaListarAutor extends Vista{
    constructor (controlador,base) {
        super(controlador,base)
        this.base=base;
        this.controlador = controlador;

        this.btnlistarlibro = document.getElementById("btnlistarlibros");
        this.btnlistarlibro.onclick = this.irALibros;

        this.btnBorrarMultiple = document.getElementById("btnBorrarMultipleAutor");
        this.btnBorrarMultiple.onclick = this.eliminarMultiple;
    }

    /**
     * Obtiene la lista de autores y la muestra
     */
    listar = (datosAutores) => {
        const contenedor = document.getElementById('contenedorAutor');
        
        //vaciar el contenedor de todos los autores
        contenedor.innerHTML = '';

        datosAutores.forEach(autor => {
            let nombre = autor.nombre;
            let fechaNac = autor.fecha_nac;
            let fechaMuerte = autor.fecha_muerte;
            let nacionalidad = autor.nacionalidad;
            let img = autor.foto;
            let autorId = autor.id; // Obtener el ID del autor
        
            const contAutor = document.createElement('div');
            contAutor.setAttribute('class', 'contenedor');
            
            // Asignar el ID proporcionado por autor.id
            contAutor.setAttribute('id', autorId);
        
            const nombreP = document.createElement('p');
            nombreP.textContent = nombre;
            contAutor.appendChild(nombreP);
        
            const fechasP = document.createElement('p');
            fechasP.textContent = fechaNac + ' ' + fechaMuerte;
            contAutor.appendChild(fechasP);
        
            const nacionalidadP = document.createElement('p');
            nacionalidadP.textContent = nacionalidad;
            contAutor.appendChild(nacionalidadP);
        
            const fotoImg = document.createElement('img');
            fotoImg.setAttribute('src', 'data:image/png;base64,'+img); // Asignar la fuente de la imagen
            contAutor.appendChild(fotoImg);
        
            const btnBorrar = document.createElement("button");
            btnBorrar.textContent = "Borrar";

            const btnEditar = document.createElement("button");
            btnEditar.textContent = "Editar";

            const checkBorrar = document.createElement("input");
            checkBorrar.type = 'checkbox';
            checkBorrar.value = autor.id;
            checkBorrar.classList.add("multiple");
            contAutor.appendChild(checkBorrar);
        
            // Asignar una función onclick con el ID del autor
            btnBorrar.onclick = () => {
                this.eliminar(autorId)
                this.controlador.irAVista(this.controlador.vistaListarAutor)
            };
            
            btnEditar.onclick = () => {
              this.controlador.irAVista(this.controlador.vistaEditarAutor, { idAutor: autorId });
          };
        
            contAutor.appendChild(btnBorrar);

            contAutor.appendChild(btnEditar);
        
            contenedor.appendChild(contAutor);
            
        });
    };
    /**
     * Muestra los autores que cumplen con el criterio de búsqueda
     * Tendrá su input con button para buscar.
     */
    buscar = () => {};

    /**
     * Elimina el autor seleccionado y todos sus libros.
     */
    eliminar = (autorId) => {
        ModeloAutor.borrarAutor(autorId)
    };

    eliminarMultiple = () => {
        const autores = document.getElementsByClassName('multiple');
        const checkboxes = Array.from(autores);
        const checkboxesSeleccionados = [];
        checkboxes.forEach(autor => {
          if(autor.checked){
            checkboxesSeleccionados.push(autor);
          }
        })
        checkboxesSeleccionados.forEach(autor => {
          ModeloAutor.borrarAutor(autor.value);
        })
            
      }

    /**
     * Solicita al Controlador el cambio de vista a listar libros
     */
    irALibros = () => {
        this.controlador.irAVista(this.controlador.vistaListarLibro);
    };

    /**
     * Marca y desmarca el autor como favorito del usuario
     */
    marcarFavorito = () => {};

    llamadaAJAX = () => {
        const url = 'https://migueljaque.com/fanlib/v1/autor';
        Rest.get(url, this.listar);
    }

    mostrarInformacionUltimaVisita(ultimaVisita) {
        const infoUltimaVisita = document.getElementById('infoUltimaVisita');
        if (infoUltimaVisita) {
          infoUltimaVisita.textContent = "Última visita: " + ultimaVisita;
        }
      }
}