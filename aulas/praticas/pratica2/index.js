const readline = require("readline-sync");

const contatoControlador = require("./controlador");

function menu() {
  console.log("1. Adicionar Contato");
  console.log("2. Listar Contato ");
  console.log("3. Buscar Contato");
  console.log("4. Atualizar Contato");
  console.log("5. Remover Contato");
  console.log("6. Sair");
}

function escolherOpcao(opcao) {
  switch (opcao) {
    case "1":
      const nome = readline.question(" nome: ");
      const email = readline.question(" email: ");
      const telefone = readline.question(" telefone: ");
      break;

    case "2":
     console.log(contatoControlador.listarContatos())
    break;
    
    case "3":
    const nomeBuscar = readline.question("Digite o nome para buscar")
    console.log(contatoControlador.buscarContato(nomeBuscar))
    break;

    case "4":
    const nomeAtualizar = readline.question("Nome do contato para atualizar")
    const novoEmail = readline.question("Novo email")
    const novoTelefone = readline.question("Novo telefone")
    console.log(contatoControlador.atualizarContato(nomeAtualizar, novoEmail, novoTelefone))
    break;


  }
}

function main() {
    while (true) {
      menu();
      const opcao = readline.question("entre com uma opcao: ");
      escolherOpcao(opcao);
    }
  }
  
  main();