const express = require("express");

const controllerProdutos = require("../controllers/controller_produtos");

const router = express.Router();

router.post("/", (req, res) => res.status(201).json({}));

module.exports = router;
