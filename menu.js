const {adicionarContato} = require('./adicionarContato');
const {listarContatos} = require('./listarContato');
const {atualizarContato} = require('./atualizarContato');
const {removerContato} = require('./removerContato');

function menuPrincipal(){
    console.log(`Sejá bem vindo ao sistema,abaixo estão as funcionalidades em funcionamento:
        1.Adicionar contato;
        2.Listar Contatos cadastrados;
        3.Atualizar contato existentes;
        4.Remover contatos;
        5.Sair.`);
        let escolha = prompt('Qual função gostaria de realizar?');
        switch(escolha){
        case '1':
        adicionarContato();
        break
        case '2':
        listarContatos();
        menuPrincipal();
        break
        case '3':
        atualizarContato(listarContatos);
        break
        case '4':
        removerContato(listarContatos);
        break
        case '5':
        break;
        default:
        console.log("Não consegui entender reiniciando o menu...");
        menuPrincipal();
        };
};
module.exports = {menuPrincipal};