export class Rest {
    static get (url, params, callback) {
      let paramsGET = '?'
      for (const param in params) {
        paramsGET += param + '='
        paramsGET += params[param] + '&'
      }
      fetch(encodeURI(url + paramsGET.substring(0, paramsGET.length - 1)))
        .then(respuesta => respuesta.json())
        .then(objeto => {
          if (callback) { callback(objeto) }
        })
    }
  
    static post (url, params) {
      const parametros = new FormData()
      for (const param in params) {
        parametros.append(param, params[param])
      }
      const opciones = {
        method: 'POST',
        body: parametros
      }
      fetch(url, opciones)
      .then(objeto => {
        if (callback) { callback(objeto) }
      })
    }

    static put (url, params){
        const parametros = new FormData()
    }
}