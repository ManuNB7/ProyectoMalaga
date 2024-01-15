import { VistaAltaLibro } from './views/vistaaltalibro.js'
import { VistaAltaAutor } from './views/vistaaltaautor.js'
import { VistaListarLibro } from './views/vistalistarlibro.js'
import { VistaListarAutor } from './views/vistalistarautor.js'
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
      

      this.vistaInicio = new VistaInicio(this, divinicio);
      this.vistaAltaAutor = new VistaAltaAutor(this, divaltaautor);
      this.vistaAltaLibro = new VistaAltaLibro(this, divaltalibro);
      this.vistaListarAutor = new VistaListarAutor(this, divlistarautor);
      this.vistaListarLibro = new VistaListarLibro(this, divlistarlibro);
      this.modeloAutor = new ModeloAutor();
      this.modeloLibro = new ModeloLibro();

      this.vistas = [this.vistaAltaAutor, this.vistaAltaLibro, this.vistaListarAutor, this.vistaListarLibro,this.vistaInicio];

      this.irAVista(this.vistaInicio)
  }

  ocultarVistas() {
      this.vistas.forEach(vista => {
          vista.mostrar(false);
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
  }
}

window.onload = () => new Controlador();