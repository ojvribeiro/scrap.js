
const proxy = (location.host.match(/(localhost|test)/g)) ? 'https://infinite-eyrie-11636.herokuapp.com/' : ''

const fetchOptions = {
  method: 'GET',
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
}

let scrap = {
  get: (url, callback) => {
    fetch(proxy + url, fetchOptions)
    .then((res) => {
      // Sucesso!
      return res.text()
    })
    .then((html) => {
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
    .catch((err) => {
      // Erro
      console.error('Traz a cloropina pro pai. :(', err)
    })
  }



  getHTML: (props) => {
    console.log('Buscando elemento...')
    
    fetch(proxy + props.url, fetchOptions)
    .then((res) => {
      // Sucesso!
      return res.text()
    })
    .then((html) => {
      // Converte a string HTML em um objeto document
      let parser = new DOMParser()
      let doc = parser.parseFromString(html, 'text/html')
      
      let htmlString = doc.querySelectorAll(props.element)[0].innerHTML
      
      if (props.callback !== undefined) {
        console.log('Aí sim, meu patrão! :D')
        
        props.callback(htmlString)
      }
      else {
        console.error('Você precisa definir uma função callback. Aí você me quebra.');
      }
    })
    .catch((err) => {
      // Erro
      console.error('Traz a cloropina pro pai. :(', err)
    })
  },
}