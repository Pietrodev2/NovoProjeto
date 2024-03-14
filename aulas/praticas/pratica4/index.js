const express = require("express");

const app = express();

app.listen(3000, function () {
  console.log("API está ON!");
});

app.get("/", function (req, res) {
    res.send("Você fez uma requisição GET");
});

app.post("/", function (req, res) {
  res.status(201).send("Você fez uma requisição POST");
});

app.put("/", function (req, res) {
  res.json({ status: "200", message: "Sucesso" });
});

app.delete("/", function (req, res) {
  res.status(204).end();
});

module.exports = app;
