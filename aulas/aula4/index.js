const express = require("express");

const app = express();

app.use(espress.json());

app.use(function (req, res, next) {
  console.log("Data: ", new Date());
  console.log(req.url);
  console.log(req.method);
  console.log(req.headers);
  console.log(req.params);
  console.log(req.body);
  next();
});

app.get("/", function (req, res) {
  res.send("Olá");
});

app.post("/", function (req, res) {
  res.status(201).send("Criou com sucesso né safado");
});

app.put("/", function (req, res) {
  res.json({ status: "200", message: "sucesso porra" });
});

app.delete("/", function (req, res) {
  res.status(204).end();
});

app.listen(3000, function () {
  console.log("API está ON!");
});
