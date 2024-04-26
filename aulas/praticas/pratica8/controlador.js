const Contato = require('./modelo');

function adicionarContato(nome, email, telefone) {
  const contato = new Contato(nome, email, telefone);
  contato.inserir();
}

function buscarContato(nome) {
  const contato = new Contato(nome);
  contato.buscar();
}

function atualizarContato(nome, email, telefone) {
  const contato = buscarContato(nome);
  if (contato) {
    contato.email = email;
    contato.telefone = telefone;
    contato.alterar();
  }
}

function removerContato(nome) {
  const contato = buscarContato(nome);
  if (contato) {
    contato.deletar();
  }
}

module.exports = controlador