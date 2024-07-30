function adicionarContato(){
    let id = contatos.length+1
    let nome = prompt('Qual o nome do contato?')
    let telefone = prompt('Qual o telefone do contato?')
    let email = prompt('Qual o email do contato?')
    contatos.push({id,nome,telefone,email})
    console.log('Contato adicionado con sucesso,retornando para o menu...')
    menuPrincipal()
}
module.exports = {adicionarContato}