function dividir(a, b) {
    if (b === 0) {
      throw new Error("Não é possível dividir por zero.");
    }
    return a / b;
  }
  
  try {
    let resultado = dividir(10, 0);
    console.log("O resultado da divisão é: " + resultado);
  } catch (erro) {
    console.error("Ocorreu um erro: " + erro.message);
  }