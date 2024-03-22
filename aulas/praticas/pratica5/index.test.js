const supertest = require("supertest");

const app = require("./index");

const request = supertest(app);

test("Deve retornar status 200 e um JSON no GET", async function () {
    const response = await request.get("/produtos");
    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
  });

  test("Deve retornar status 200 e um JSON no GET /produtos/1", async function () {
    const response = await request.get("/produtos/1");
    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
  });

  test("Deve retornar status 404 e um JSON no GET /produtos/100", async function () {
    const response = await request.get("/produtos/100");
    expect(response.status).toBe(404);
    expect(response.headers["content-type"]).toMatch(/json/);
  });

  test("Deve adicionar um produto com POST e retornar status 201 e um JSON", async function () {
    const response = await request.post("/produtos").send({ "nome": "uva", "preco": 20.00 });
    expect(response.status).toBe(201);
    expect(response.headers["content-type"]).toMatch(/json/);
  });

  test("Deve retornar status 422 e um JSON quando o POST /produtos não tiver um JSON", async function () {
    const response = await request.post("/produtos");
    expect(response.status).toBe(422);
    expect(response.headers["content-type"]).toMatch(/json/);
  });

  test("Deve atualizar um produto com PUT e retornar status 200 e um JSON", async function () {
    const response = await request.put("/produtos/1").send({ "nome": "uva verde", "preco": 18.00 });
    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
  });

  test("Deve retornar status 404 e um JSON quando o PUT /produtos/100 não encontrar o produto", async function () {
    const response = await request.put("/produtos/100").send({ "nome": "uva verde", "preco": 18.00 });
    expect(response.status).toBe(404);
    expect(response.headers["content-type"]).toMatch(/json/);
  });

  test("Deve deletar um produto com DELETE e retornar status 204 e sem conteúdo", async function () {
    const response = await request.delete("/produtos/1");
    expect(response.status).toBe(204);
    expect(response.text).toBe("");
  });

  test("Deve retornar status 404 e um JSON quando o DELETE /produtos/100 não encontrar o produto", async function () {
    const response = await request.delete("/produtos/100");
    expect(response.status).toBe(404);
    expect(response.headers["content-type"]).toMatch(/json/);
  });