import { VistaAltaLibro } from './views/vistaaltalibro.js'
import { VistaAltaAutor } from './views/vistaaltaautor.js'
import { VistaListarLibro } from './views/vistalistarlibro.js'
import { VistaListarAutor } from './views/vistalistarautor.js'
import { VistaEditarObra } from './views/vistaeditarobra.js'
import { VistaEditarAutor } from './views/vistaeditarautor.js'
import { VistaInicio } from './views/vistainicio.js'
import { ModeloLibro } from './models/modelolibro.js'
import { ModeloAutor } from './models/modeloautor.js'

class Controlador {
  constructor() {
      const divinicio = document.getElementById("vistainicio");  
      const divaltaautor = document.getElementById("vistaaltaautor");
      const divaltalibro = document.getElementById("vistaaltalibro");
      const divlistarautor = document.getElementById("vistalistarautor");
      const divlistarlibro = document.getElementById("vistalistarlibro");
      const diveditarobra = document.getElementById("vistaeditarobra");
      const diveditarautor = document.getElementById("vistaeditarautor");
      

      this.vistaInicio = new VistaInicio(this, divinicio);
      this.vistaAltaAutor = new VistaAltaAutor(this, divaltaautor);
      this.vistaAltaLibro = new VistaAltaLibro(this, divaltalibro);
      this.vistaListarAutor = new VistaListarAutor(this, divlistarautor);
      this.vistaListarLibro = new VistaListarLibro(this, divlistarlibro);
      this.vistaEditarObra = new VistaEditarAutor(this, diveditarobra);
      this.vistaEditarAutor = new VistaEditarAutor(this, diveditarautor);
      this.modeloAutor = new ModeloAutor();
      this.modeloLibro = new ModeloLibro();

      this.vistas = [this.vistaAltaAutor, this.vistaAltaLibro, this.vistaListarAutor, this.vistaListarLibro,this.vistaInicio,this.vistaEditarAutor,this.vistaEditarObra];

      this.vistaListarAutor.cargarDatosSelect();
      
      // Establecer cookie al cargar la página
      this.establecerCookieUltimaVisita();

      this.mostrarInformacionUltimaVisitaEnVistas();

      this.irAVista(this.vistaInicio)
  }

  ocultarVistas() {
      this.vistas.forEach(vista => {
          vista.mostrar(false);
      });
  }

  // Método para establecer la cookie de última visita
  establecerCookieUltimaVisita() {
    console.log("Método establecerCookieUltimaVisita llamado");
    // Obtener la fecha y hora actual
    const fechaHoraActual = new Date();
    // Convertir a cadena en formato ISO
    const cadenaFechaHora = fechaHoraActual.toLocaleString();

    // Crear la cookie
    document.cookie = "ultimaVisita=" + cadenaFechaHora + "; path=/; SameSite=None; Secure";
  }

  // Método para mostrar la información de la última visita en cada vista
  mostrarInformacionUltimaVisitaEnVistas() {
    // Leer la cookie
    const ultimaVisita = document.cookie
      .split('; ')
      .find(row => row.startsWith('ultimaVisita='))
      .split('=')[1];

    // Mostrar la información en cada vista
    this.vistas.forEach(vista => {
      vista.mostrarInformacionUltimaVisita(ultimaVisita);
    });
  }

  irAVista(vista) {
      this.ocultarVistas();
      vista.mostrar(true);
      if(vista==this.vistaListarLibro){
        this.vistaListarLibro.llamadaAJAX()
      }
      if(vista==this.vistaListarAutor){
        this.vistaListarAutor.llamadaAJAX()
      }
      if(vista==this.vistaAltaLibro){
        this.vistaAltaLibro.actualizarSelect()
      }
      // Mostrar la información de la última visita al cambiar de vista
      
  }
  
}




window.onload = () => new Controlador();