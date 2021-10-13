
const proxy = (location.host.match(/(localhost|test)/g)) ? 'https://infinite-eyrie-11636.herokuapp.com/' : ''

const fetchOptions = {
  method: 'GET',
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
}

let scrap = {
  get: (url, callback) => {
    .then(function(response) {
    fetch(proxy + url, fetchOptions)
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