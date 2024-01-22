export class Rest {
  token = 'XoutELXK4h';

  static get(url, callback) {
    const opciones = {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin':'*',
        'Fanlibtoken': 'XoutELXK4h'
      }
    };
  
    fetch(url, opciones)
      .then(respuesta => {
        if (!respuesta.ok) {
          throw new Error(`HTTP error! Status: ${respuesta.status}`);
        }
        return respuesta.json();  
      })
      .then(objeto => {
        if (callback) { callback(objeto); }
      })
      .catch(error => {
        console.error('Error en la solicitud GET:', error);
      });
  }

  static post(url, params, callback) {
    const opciones = {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'Fanlibtoken': 'XoutELXK4h'
      },
    };
    fetch(url, opciones)
      .then(respuesta => {
        if (callback) { callback(); }
      })
      .catch(error => {
        console.error('Error en la solicitud POST:', error);
      });
  }

  static put(url, params, callback) {
    const opciones = {
      method: 'PUT',
      body: JSON.stringify(params),
      headers: {
        'Fanlibtoken': 'XoutELXK4h'
      }
    };

    fetch(url, opciones)
      .then(respuesta => {
        if (callback) { callback(); }
      })
      .catch(error => {
        console.error('Error en la solicitud PUT:', error);
      });
  }
  
  static delete(url, callback) {
    const opciones = {
      method: 'DELETE',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Fanlibtoken': 'XoutELXK4h'
      }
    };

    fetch(url, opciones)
      .then(respuesta => {
        if (callback) { callback(); }
      })
      .catch(error => {
        console.log('Error en la solicitud DELETE:', error);
      });
  }
}