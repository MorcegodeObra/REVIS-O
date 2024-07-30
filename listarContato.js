  function listarContatos() {
    if(contatos==""){
        console.log('Não há contatos salvos! Retornando...');
        menuPrincipal();
    }else{
        contatos.forEach(contatos => {
        console.log(`ID: ${contatos.id}, Nome: ${contatos.nome}, Telefone: ${contatos.telefone}, Email: ${contatos.email}`);
        });
    }
  };
  module.exports = {listarContatos}