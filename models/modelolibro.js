// En el archivo modelo_libro.js

export class ModeloLibro {
  constructor() {
    // Inicializa las propiedades del modelo de libros, si es necesario.
  }

  /**
   * Obtiene la lista de libros desde el servidor.
   * @returns {Promise<Array>} - Promesa que resuelve a un array de libros.
   */
  obtenerLibros() {
    return fetch('https://migueljaque.com/fanlib/v1/obra')
      .then(respuesta => respuesta.json())
      .then(libros => {
        return libros;
      })
      .catch(error => {
        console.error('Error al obtener la lista de libros:', error);
        throw error; // Puedes manejar el error según tus necesidades.
      });
  }

  /**
   * Realiza una solicitud POST para guardar un nuevo libro en el servidor.
   * @param {Object} nuevoLibro - Datos del nuevo libro a guardar.
   * @returns {Promise<boolean>} - Promesa que resuelve a true si la operación fue exitosa.
   */
  guardarLibro(nuevoLibro) {
    const opciones = {
      method: 'POST',
      body: JSON.stringify(nuevoLibro),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    return fetch('https://migueljaque.com/fanlib/v1/obra', opciones)
      .then(respuesta => respuesta.json())
      .then(resultado => {
        return true;
      })
      .catch(error => {
        console.error('Error al guardar el libro:', error);
        throw error;
      });
  }

  // Puedes agregar más métodos según las operaciones que necesites realizar con los libros.
}
