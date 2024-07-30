# CRUD Contacts Management

This project implements a simple CRUD (Create, Read, Update, Delete) application for managing contacts. Below is a detailed explanation of each component and how to set up and run the application.

## Getting Started

### Prerequisites

- Node.js installed
- A terminal or command prompt to run the script

### Installation

1. Clone this repository:
    ```bash
    git clone <repository_url>
    ```

2. Navigate to the project directory:
    ```bash
    cd <project_directory>
    ```

3. Install the required dependencies (if any).

## Project Structure

The project consists of the following main files:

- `inicio.js`: The entry point of the application.
- `adicionarContato.js`: Script to add new contacts.
- `listarContato.js`: Script to list all contacts.
- `atualizarContato.js`: Script to update existing contacts.
- `removerContato.js`: Script to remove contacts.

## Scripts

### 1. `inicio.js`

This script initializes the application and sets up the global variables.

```javascript
global.prompt = require('prompt-sync')();
global.contatos = [];
global.menuPrincipal = menuPrincipal;

function menuPrincipal() {
    console.log("1. Adicionar Contato");
    console.log("2. Listar Contatos cadastrados");
    console.log("3. Atualizar Contato existentes");
    console.log("4. Remover Contato");
    console.log("5. Sair");

    let escolha = parseInt(prompt("Escolha uma opção: "));

    switch (escolha) {
        case 1:
            adicionarContato();
            break;
        case 2:
            listarContatos();
            break;
        case 3:
            atualizarContato(listarContatos);
            break;
        case 4:
            removerContato(listarContatos);
            break;
        case 5:
            console.log("Saindo...");
            process.exit();
        default:
            console.log("Opção inválida, tente novamente.");
            menuPrincipal();
    }
}

menuPrincipal();´´´

function adicionarContato() {
    let id = contatos.length + 1;
    let nome = prompt('Qual o nome do contato?');
    let telefone = prompt('Qual o telefone do contato?');
    let email = prompt('Qual o email do contato?');
    contatos.push({ id, nome, telefone, email });
    console.log('Contato adicionado com sucesso, retornando para o menu...');
    menuPrincipal();
}

module.exports = { adicionarContato };

function listarContatos() {
    if (contatos.length === 0) {
        console.log('Não há contatos salvos! Retornando...');
    } else {
        contatos.forEach(contact => {
            console.log(`ID: ${contact.id}, Nome: ${contact.nome}, Telefone: ${contact.telefone}, Email: ${contact.email}`);
        });
    }
    menuPrincipal();
}

module.exports = { listarContatos };

function atualizarContato(callback) {
    callback();
    let selecao = parseInt(prompt('Qual contato gostaria de atualizar?'));
    let id = contatos[selecao - 1].id;
    let nome = prompt('Qual o nome do contato?');
    let telefone = prompt('Qual o telefone do contato?');
    let email = prompt('Qual o email do contato?');
    contatos[selecao - 1] = { id, nome, telefone, email };
    console.log("Contato atualizado com sucesso, retornando ao menu...");
    menuPrincipal();
}

module.exports = { atualizarContato };

function removerContato(callback) {
    callback();
    let selecao = parseInt(prompt('Qual contato gostaria de remover?')) - 1;
    contatos.splice(selecao, 1);
    console.log("Contato removido com sucesso, retornando ao menu...");
    menuPrincipal();
}

module.exports = { removerContato };

## How to Use
Run the inicio.js script to start the application:

bash
Copiar código
node inicio.js
Follow the on-screen prompts to manage your contacts:

Add new contacts
List existing contacts
Update contacts
Remove contacts
Exit the application
License
This project is licensed under the MIT License - see the LICENSE.md file for details.
