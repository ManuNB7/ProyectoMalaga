export class Rest {
  token = 'XoutELXK4h';

  static get(url, callback) {
    const opciones = {
      mode: 'cors',
      headers: {
        'Fanlibtoken': 'testToken'
      }
    };

    fetch(url, opciones)
      .then(respuesta => respuesta.json())
      .then(objeto => {
        if (callback) { callback(objeto); }
      })
      .catch(error => {
        console.error('Error en la solicitud GET:', error);
      });
  }

  static getBusqueda(url, params, callback) {
    let paramsGET;
    for (const param in params) {
      paramsGET += encodeURI(param) + '=';
      paramsGET += encodeURI(params[param]) + '&';
    }
    const opciones = {
      mode: 'cors',
      headers: {
        'Fanlibtoken': 'testToken'
      }
    };

    fetch(url+'?'+paramsGET, opciones)
      .then(respuesta => respuesta.json())
      .then(objeto => {
        if (callback) { callback(objeto); }
      })
      .catch(error => {
        console.error('Error en la solicitud GET:', error);
      });
  }

  static post(url, params, callback) {
    const parametros = new FormData();
    for (const param in params) {
      parametros.append(param, params[param]);
    }
    const opciones = {
      method: 'POST',
      body: parametros,
      mode: 'cors',
      headers: {
        'Fanlibtoken': 'testToken'
      }
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
    const parametros = new FormData();
    for (const param in params) {
      parametros.append(param, params[param]);
    }
    const opciones = {
      method: 'PUT',
      body: parametros,
      headers: {
        'Fanlibtoken': 'testToken'
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

  //PARA EL BORRADO MÚLTIPLE
  /*static delete(url, params, callback) {
    const opciones = {
      mode: 'cors',
      headers: {
        'Fanlibtoken': 'testToken'
      }
    };
    fetch(url+'?'+encodeURI(params), opciones)
      .then(respuesta => respuesta.json())
      .then(objeto => {
        if (callback) { callback(objeto); }
      })
      .catch(error => {
        console.error('Error en la solicitud DELETE:', error);
      });
  }

  static postBorrarLibros(url, librosIds, callback) {
    const opciones = {
        method: 'POST',
        body: JSON.stringify({ librosIds: librosIds }),
        headers: {
            'Fanlibtoken': 'testToken'
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
            if (callback) {
                callback(objeto);
            }
        })
        .catch(error => {
            console.error('Error en la solicitud POST:', error);
        });
    }*/


}