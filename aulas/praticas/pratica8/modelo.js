const { conectarDb } = require("./database");


const db = conectarDb();

const collection = db.collection("contatos");

class Contato {
    constructor(nome, email, telefone) {
      this.id = null;
      this.nome = nome;
      this.email = email;
      this.telefone = telefone;
    }
  
    inserir() {
      const result = collection.insertOne({ nome: this.nome, email: this.email, telefone: this.telefone });
      this.id = result.ops[0]._id;
    }
  
    alterar() {
      collection.updateOne({ _id: this.id }, { $set: { nome: this.nome, email: this.email, telefone: this.telefone } });
    }
  
    deletar() {
      collection.deleteOne({ _id: this.id });
    }
  
    buscar() {
      const result = collection.findOne({ nome: this.nome });
      this.id = result._id;
      this.nome = result.nome;
      this.email = result.email;
      this.telefone = result.telefone;
    }
  }
  module.exports = Contato