const Contato = require("./modelo.js");

const contatos = [];

function adicionarContato(nome, email, telefone) {
  const novoContato = new Contato("Pietro", "pietro@gmail.com", "61991516865");
  contatos.push(novoContato);
}

function listarContatos() {
  return contatos;
}

function buscarContato(nome) {
 return contatos.find((buscou) => buscou.nome === nome);
}

function atualizarContato(nome, email, telefone) {
  const contato = buscarContato(nome);
  if (contato) {
    contato.email = email;
    contato.telefone = telefone;
  }
}

function removerContato(nome) {
  const contato = contato.findIndex((contato) => contato.nome === nome);
  if (posicao >= 0) {
    contatos.splice(posicao, 1);
  }
}
module.exports = {
  adicionarContato,
  listarContatos,
  buscarContato,
  atualizarContato,
  removerContato,
};
