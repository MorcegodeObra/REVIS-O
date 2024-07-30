function atualizarContato(callback){
    callback()
    let selecao = parseInt(prompt('Qual contato gostaria de atualizar??'))
    let id = contatos[selecao-1].id
    let nome = prompt('Qual o nome do contato?')
    let telefone = prompt('Qual o telefone do contato?')
    let email = prompt('Qual o email do contato?')
    contatos[selecao-1]={id,nome,telefone,email}
    console.log("Contato atualizado com sucesso retornando ao menu...")
    menuPrincipal()
}
module.exports = {atualizarContato}