export class Rest {
  token = 'XoutELXK4h';

  static get(url, params, callback) {
    let paramsGET = '?';
    for (const param in params) {
      paramsGET += param + '=';
      paramsGET += params[param] + '&';
    }
    const opciones = {
      mode: 'cors',
      headers: {
        'Fanlibtoken': 'testToken'
      }
    };

    fetch(encodeURI(url + paramsGET.substring(0, paramsGET.length - 1)), opciones)
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
}