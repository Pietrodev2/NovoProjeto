// Importando o módulo express
const express = require("express");

// Criando uma nova instância do router
const router = express.Router();

// Manipulando a solicitação GET para o caminho "/produtos"
router.get("/produtos", function (req, res) {
  // Resposta enviada como um objeto JSON contendo um array vazio
  res.json([]);
});

router.get("/produtos/:produtoId", function (req, res) {
  if (req.params.produtoId == 1) {
    res.json({}); // 200 e JSON
  } else {
    res.status(404).json({ msg: "Produto nao encontrado" });
  }
});

router.post("/produtos", function (req, res) {
  if (req.body && req.body.nome && req.body.preco) {
    res.status(201).json({});
  } else {
    res.status(422).json({ msg: "Nome e/ou preço di produto obrigatórios" });
  }
});

router.put("/produtos/:produtoId", function (req, res) {
  if (req.params.produtoId == 1) {
    res.json({});
  } else {
    res.status(404).json({ msg: "produto não encontrado" });
  }
});

router.delete("/produtos/:produtoId", function (req, res) {
  if (req.params.produtoId == 1) {
    res.status(204).end();
  } else {
    res.status(404).json({ msg: "Produto não encontrado" });
  }
});

// Exportando o router para ser usado em outros módulos
module.exports = router;
