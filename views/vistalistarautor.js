import { Vista } from './vista.js'
import { Rest } from '../service/rest.js'
export class VistaListarAutor extends Vista{
    constructor (controlador,base) {
        super(controlador,base)
        this.base=base;
        this.controlador = controlador;

        this.btnlistarlibro = document.getElementById("btnlistarlibros");
        this.btnlistarlibro.onclick = this.irALibros;

    }
    /**
     * Obtiene la lista de autores y la muestra
     */
    listar = (datosAutores) => {
        const contenedor = document.getElementById('contenedorAutor');
        //vaciar el contenedor de todos los autores
        contenedor.innerHTML = '';

        datosAutores.forEach(autor =>{
            let nombre = autor.nombre;
            let fechaNac = autor.fecha_nac;
            let fechaMuerte = autor.fecha_muerte;
            let nacionalidad = autor.nacionalidad;

            const contAutor = document.createElement('div');

            const nombreP = document.createElement('p');
            nombreP.textContent = nombre;
            contAutor.appendChild(nombreP);

            const fechasP = document.createElement('p');
            fechasP.textContent = fechaNac+' '+fechaMuerte;
            contAutor.appendChild(fechasP);

            const nacionalidadP = document.createElement('p');
            nacionalidadP.textContent = nacionalidad;
            contAutor.appendChild(nacionalidadP);
            


            contenedor.appendChild(contAutor);
        })
    };

    /**
     * Muestra los autores que cumplen con el criterio de búsqueda
     * Tendrá su input con button para buscar.
     */
    buscar = () => {};

    /**
     * Elimina el autor seleccionado y todos sus libros.
     */
    eliminar = () => {};

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
}