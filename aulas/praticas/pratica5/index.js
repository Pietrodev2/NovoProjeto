const express = require("express");

const routerProdutos = require("./router");

const app = express();

app.use(express.json());

app.use(routerProdutos);

const port = 4000;

app.listen(port, function () {
  console.log("API está ON! O servidor foi iniciado na porta " + port);
});

module.exports = app;
