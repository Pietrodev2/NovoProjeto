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