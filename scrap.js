
const ifCORS = (location.host === 'localhost') ? 'https://infinite-eyrie-11636.herokuapp.com/' : ''

let scrap = {
  get: (url, callback) => {
    fetch(ifCORS + url, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
    .then(function(response) {
      // Sucesso!
      return response.text()
    })
    .then(function(html) {
      // Converte a string HTML em um objeto document
      let parser = new DOMParser()
      let doc = parser.parseFromString(html, 'text/html')

      if (callback !== undefined) {
        callback(doc)
      }
      else {
        console.error('Você precisa definir uma função callback, amigo.');
      }
    })
    .catch(function(err) {
      // Erro
      console.error('Traz a cloropina pro pai. :(', err)
    })
  }
}