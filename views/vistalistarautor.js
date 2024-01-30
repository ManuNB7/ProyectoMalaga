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

            const favoritoImg = document.createElement('img');
            favoritoImg.src = "img/noFavorito.png";
            favoritoImg.onclick = this.marcarFavorito(autor.id, favoritoImg);
            contAutor.appendChild(favoritoImg);
        
            // Asignar una función onclick con el ID del autor
            btnBorrar.onclick = () => {
                this.eliminar(autorId)
                this.controlador.irAVista(this.controlador.vistaListarAutor)
            };
            
            btnEditar.onclick = () => {
              this.cargarDatosAutor(autor)
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
        ModeloAutor.borrarAutor('/'+autorId,this.llamadaAJAX)
    };

    eliminarMultiple = () => {
        const autores = document.getElementsByClassName('multiple');
        const checkboxes = Array.from(autores);
        const checkboxesSeleccionados = [];
        let ids='';
        checkboxes.forEach(autor => {
          if(autor.checked){
            checkboxesSeleccionados.push(autor);
          }
        })
        checkboxesSeleccionados.forEach(autor => {
          ids=ids+'/'+autor.value;
        })
        ModeloAutor.borrarAutor(ids,this.llamadaAJAX);
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
    marcarFavorito = (id, imagen) => {
      let valorCookie = this.obtenerValorCookie('autoresFavoritos');
      if(valorCookie){
        let array = JSON.parse(valorCookie);
        array.push(id);
        this.crearCookie('autoresFavoritos',array,1);
      }
      else{
        let array = [id];
        this.crearCookie('autoresFavoritos',array,1);
      }
      imagen.src = 'img/favorito.png';
    };

    obtenerValorCookie(nombre) {
      const cookies = document.cookie.split(';'); // Obtener todas las cookies como una cadena de texto y dividirlas en un array
      for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim(); // Quitar espacios en blanco al inicio y al final de la cookie
        if (cookie.indexOf(nombre + "=") === 0) { // Buscar la cookie por su nombre
            return cookie.substring(nombre.length + 1, cookie.length); // Devolver el valor de la cookie
        }
      }
      return null; // Devolver null si no se encuentra la cookie
    }

    crearCookie(nombre, array, diasExpiracion) {
      let fechaExpiracion = new Date();
      fechaExpiracion.setTime(fechaExpiracion.getTime() + (diasExpiracion * 24 * 60 * 60 * 1000));
      let expiracion = "expires=" + fechaExpiracion.toUTCString();
      let arrayString = JSON.stringify(array); // Convertir el array a cadena de texto JSON
      document.cookie = nombre + "=" + arrayString + ";" + expiracion + ";path=/";
  }

    cargarDatosAutor = (datosAutor) => {
      // Asignar los valores a los campos del formulario
      document.getElementById('idAutorInputE').value = datosAutor.id;
      document.getElementById('nombreInputE').value = datosAutor.nombre;
      document.getElementById('fechanacimientoInputE').value = datosAutor.fecha_nac;
      document.getElementById('fechafallecimientoInputE').value = datosAutor.fecha_muerte;
      document.getElementById('nacionalidadInputE').value = datosAutor.nacionalidad;
      document.getElementById('biografiaInputE').value = datosAutor.biografia;
      document.getElementById('imagenAutorE').setAttribute('src', 'data:image/png;base64,'+datosAutor.foto);
      document.getElementById('imagenAutorImputE')
  }

    llamadaAJAX = () => {
        ModeloAutor.listarAutor('https://migueljaque.com/fanlib/v1/autor', this.listar);
    }
    
    cargarDatosSelect= () =>{
      ModeloAutor.actualizarLista();
    }

    mostrarInformacionUltimaVisita(ultimaVisita) {
        const infoUltimaVisita = document.getElementById('infoUltimaVisita');
        if (infoUltimaVisita) {
          infoUltimaVisita.textContent = "Última visita: " + ultimaVisita;
        }
      }
}