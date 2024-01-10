import { VistaAltaLibro } from './views/vistaaltalibro.js'
import { VistaAltaAutor } from './views/vistaaltaautor.js'
import { VistaListarLibro } from './views/vistalistarlibro.js'
import { VistaListarAutor } from './views/vistalistarautor.js'
import { ModeloLibro } from './models/modelolibro.js'
import { ModeloAutor } from './models/modeloautor.js'
class Controlador{
    constructor(){
      const divaltaautor = document.getElementById("vistaaltaautor")
      const divaltalibro = document.getElementById("vistaaltalibro")
      const divlistarautor = document.getElementById("vistalistarautor")
      const divlistarlibro = document.getElementById("vistalistarlibro")
      
      this.vistaAltaAutor = new VistaAltaLibro(this,divaltaautor)       
      this.vistaAltaLibro = new VistaAltaAutor(this,divaltalibro)
      this.vistaListarAutor = new VistaListarLibro(this,divlistarautor)       
      this.vistaListarLibro = new VistaListarAutor(this,divlistarlibro)
      this.modeloAutor = new ModeloAutor()
      this.modeloLibro = new ModeloLibro()

      this.vistas = [this.vistaAltaAutor,this.vistaAltaLibro,this.vistaListarAutor,this.vistaListarLibro]

      this.irAVista(this.vistaAltaAutor)
    }
    ocultarVistas () {
      this.vistas.forEach(vista => {
        vista.mostrar(false)
      })
    }
    irAVista (vista) {
      this.ocultarVistas()
      vista.mostrar(true)
    }
}
window.onload = () => new Controlador()