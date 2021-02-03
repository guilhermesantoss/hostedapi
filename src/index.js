const express = require('express');
const app = express();
const importData = require('./data.json');

let port = process.env.PORT || 3000;

app.get('/', (request, response) => {
  response.send('Hello World!!!');
});

app.get('/players', (request, response) => {
  response.send(importData);
});

app.listen(port, () => {
  console.log(`Servidor online no seguinte endereço: http://localhost:${port}`);
});