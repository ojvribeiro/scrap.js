# Scrap.js

Web Scraping via client-side

----

## Como usar

Baixe o arquivo `scrap.js` e o inclua em seu HTML:

```html
<script src="scrap.js"></script>
```

## scrap.get

Chame o método `scrap.get` com os parâmetros `url` e `callback` para fazer a requisição do DOM de uma página da web:

```js
scrap.get(url, callback)
```

onde:

- `url` é uma string com a URL do site que você quer extrair o conteúdo;

- `callback` é uma função executada assim que obtiver a resposta. Adicione um parâmetro `response` (ou `res`) para capturar a resposta e armazenar como quiser.

Exemplo:

```js
scrap.get('https://bredi.com.br/', (res) => {
  // Faça o que quiser com a response...
  const myDocument = res

  // Por exemplo, extrair todas as imagens e armazenar numa array...
  let pageImages = []

  myDocument.querySelectorAll('img').forEach((el) => {
    pageImages.push(el.src)
  })

  console.log(pageLinks)
})
```

## scrap.getHTML

O método `scrap.getHTML` captura um elemento específico de uma página da web. Ele recebe um parâmetro, que é o objeto com as opções do Scrap.

Option     | Value
-----------|-----------------------------------------------------------
`url`      | Qualquer URL começando com `http://` ou `https://`
`element`  | String com o seletor do elemento que você quer receber
`callback` | Função a ser executada após o sucesso na requisição

Exemplo:

```js
scrap.getHTML({
  url: 'https://bredi.com.br/',
  element: '#portfolio article',
  callback: (res) => {
    // Insere o resultado em um elemento dentro da sua página
    document.querySelector('#app').innerHTML = res
  }
})
```
