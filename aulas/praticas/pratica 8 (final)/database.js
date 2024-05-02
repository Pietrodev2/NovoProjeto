const { MongoClient } = require("mongodb");

const url = "mongodb+srv://Pietro:Foxtrot172@cluster0.xjgvkma.mongodb.net/"

let db = null;

async function conectarDb() {
  if (db == null) {
    const client = new MongoClient(url);
    await client.connect();
    db = client.db("Agenda");
  }
  return db;
}
 module.exports = conectarDb