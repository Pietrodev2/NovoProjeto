// Importando as bibliotecas necessárias
const supertest = require("supertest");
const app = require("./index");

// Criando uma nova instância de supertest, passando a app como parâmetro
const request = supertest(app);

// Suite de teste para a requisição "GET" no /produtos endpoint
test("Deve retornar status 200 e um JSON no GET", async function () {
  // Enviando a requisição "GET" para o endpoint /produtos
  const response = await request.get("/produtos");

  // Verificando se o código de status da resposta é igual a 200
  expect(response.status).toBe(200);

  // Verificando se o tipo de conteúdo da resposta é JSON
  expect(response.headers["content-type"]).toMatch(/json/);
});

test("Deve retornar status 200 e um JSON no GET id", async function () {
  const response = await request.get("/produtos/1");
  expect(response.status).toBe(200);
  expect(response.headers["content-type"]).toMatch(/json/);
});

test("Deve retornar status 404 e um JSON no GET id", async function () {
  const response = await request.get("/produtos/100");
  expect(response.status).toBe(404);
  expect(response.headers["content-type"]).toMatch(/json/);
});

test("Deve retornar status 201 e um JSON no POST", async function () {
  const response = await request
    .post("/produtos")
    .send({ nome: "Banana", preco: 15.0 });
  expect(response.status).toBe(201);
  expect(response.headers["content-type"]).toMatch(/json/);
});

test("Deve retornar status 422 e um JSON no POST", async function () {
  const response = await request.post("/produtos");
  expect(response.status).toBe(422);
  expect(response.headers["content-type"]).toMatch(/json/);
});

test("Deve retornar status 200 e um JSON no PUT", async function () {
  const response = await request
    .put("/produtos/1")
    .send({ nome: "Banana prata", preco: 18.0 });
  expect(response.status).toBe(200);
  expect(response.headers["content-type"]).toMatch(/json/);
});

test("Deve retornar status 404 e um JSON no get id", async function () {
  const response = await request.put("/produtos/100");
  expect(response.status).toBe(404);
  expect(response.headers["content-type"]).toMatch(/json/);
});

test("Deve retornar status 204 e sem BODY no DELETE", async function () {
  const response = await request.delete("/produtos/1");
  expect(response.status).toBe(204);
  expect(response.body).toEqual({})
});

test("Deve retornar status 404 e um JSON no DELETE", async function () {
  const response = await request.delete("/produtos/100");
  expect(response.status).toBe(404);
  expect(response.headers["content-type"]).toMatch(/json/);
});
