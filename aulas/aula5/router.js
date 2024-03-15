// Importando o módulo express
const express = require("express");

// Criando uma nova instância do router
const router = express.Router();

// Manipulando a solicitação GET para o caminho "/produtos"
router.get("/produtos", function(req, res) {
    // Resposta enviada como um objeto JSON contendo um array vazio
    res.json([]);
});

// Exportando o router para ser usado em outros módulos
module.exports = router;