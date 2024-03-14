// Importando o módulo express, que fornece um framework minimalista e flexível para Node.js
const express = require("express");

// Importando o arquivo routerProdutos.js, onde provavelmente está definido o roteador de rotas relacionadas a produtos
const routerProdutos = require('./router');

// Inicializando o aplicativo Express
const app = express();

// Utilizando o roteador de produtos no aplicativo
app.use(routerProdutos);

// Definindo a porta do servidor
// O servidor será iniciado nesta porta quando chamar o método listen()
const port = 3000;

// Iniciando o servidor na porta definida
app.listen(port, function () {
  console.log("API está ON! O servidor foi iniciado na porta " + port);
});

// Exportando a instância do aplicativo Express
// Isso permite que o arquivo seja requisitado por outros módulos do Node.js
module.exports = app;
