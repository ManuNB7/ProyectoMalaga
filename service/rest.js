export class Rest {
  token = 'XoutELXK4h';
  
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
        body: parametros,
        headers:{
          'Access-Control-Allow-Origin':'*',
          'Fanlibtoken':'testToken'
        }
      }
      fetch(url, opciones)
      .then(respuesta => {
        if(callback){callback()}
      })
    }

    static put (url, params){
        const parametros = new FormData()
        for (const param in params){
          parametros.append(param,params[param])
        }
        const opciones = {
          method: 'PUT',
          body: parametros,
          headers:{
            'Access-Control-Allow-Origin':'*',
            'Fanlibtoken':'testToken'
          }
        }
        fetch(url, opciones)
        .then(respuesta => {
          if(callback){callback()}
        })
    }
}