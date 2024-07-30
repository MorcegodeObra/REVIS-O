function removerContato(callback){
    callback()
    let selecao = parseInt(prompt('Qual contato gostaria de remover??'))-1
    contatos.splice(selecao,1)
    console.log("Contato atualizado com sucesso retornando ao menu...")
    menuPrincipal()
}
module.exports = {removerContato}