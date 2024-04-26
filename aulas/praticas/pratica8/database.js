const { MongoClient } = require("mongodb");

const url = "mongodb+srv://Pietro:Foxtrot172@cluster0.xjgvkma.mongodb.net/";
const client = new MongoClient(url);

async function conectarDb() {
  await client.connect();
  console.log('Conectado com sucesso')
}

module.exports = conectarDb
