const readline = require('readline-sync');
const contatoControlador = require('./controlador');

function menu() {
  console.log('1. Adicionar contato');
  console.log('2. Buscar contato');
  console.log('3. Atualizar contato');
  console.log('4. Remover contato');
  console.log('5. Sair');
}

function escolherOpcao(opcao) {
  switch (opcao) {
    case '1':
      const nomeAdicionar = readline.question('Digite o nome do contato: ');
      const emailAdicionar = readline.question('Digite o email do contato: ');
      const telefoneAdicionar = readline.question('Digite o telefone do contato: ');
      contatoControlador.adicionarContato(nomeAdicionar, emailAdicionar, telefoneAdicionar);
      break;
    case '2':
      const nomeBuscar = readline.question('Digite o nome do contato: ');
      const contatoBuscado = contatoControlador.buscarContato(nomeBuscar);
      console.log(`Nome: ${contatoBuscado.nome}, Email: ${contatoBuscado.email}, Telefone: ${contatoBuscado.telefone}`);
      break;
    case '3':
      const nomeAtualizar = readline.question('Digite o nome do contato: ');
      const emailAtualizar = readline.question('Digite o email do contato: ');
      const telefoneAtualizar = readline.question('Digite o telefone do contato: ');
      contatoControlador.atualizarContato(nomeAtualizar, emailAtualizar, telefoneAtualizar);
      break;
    case '4':
      const nomeRemover = readline.question('Digite o nome do contato: ');
      contatoControlador.removerContato(nomeRemover);
      break;
    case '5':
      process.exit();
      break;
    default:
      console.log('Opção inválida');
  }
}

function main() {
  while (true) {
    menu();
    const opcao = readline.question('Escolha uma opção: ');
    escolherOpcao(opcao);
  }
}

main();