# Scrap.js
Web Scraping via client-side

----

## Como usar

Baixe o arquivo `scrap.js` e o inclua em seu HTML:

```html
<script src="scrap.js"></script>
```

Chame o método `scrap.get` com os parâmetros `url` e `callback`:

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
