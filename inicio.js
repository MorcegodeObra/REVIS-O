const { menuPrincipal } = require('./menu');
const prompt = require('prompt-sync')();

let contatos = [
    { id: 1, nome: 'Alice', telefone: '1234-5678', email: 'alice@example.com' },
    { id: 2, nome: 'Bob', telefone: '8765-4321', email: 'bob@example.com' },
    { id: 3, nome: 'Carol', telefone: '5678-1234', email: 'carol@example.com' }
  ];

  global.prompt = prompt
  global.contatos = contatos
  global.menuPrincipal = menuPrincipal
  
  menuPrincipal();