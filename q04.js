function curryingSoma(a) {
  return function(b) {
    return a + b;
  };
}

// Uso da função de currying em duas etapas
const somar5 = curryingSoma(5);
const resultado = somar5(3); // Isso resultará em 8
console.log(resultado);

function composicao(funcao1, funcao2) {
  return function(arg) {
    const resultadoFuncao1 = funcao1(arg);
    const resultadoFinal = funcao2(resultadoFuncao1);
    return resultadoFinal;
  };
}

// Exemplo de uso da função de composição
function dobro(numero) {
  return numero * 2;
}

function adicionarCinco(numero) {
  return numero + 5;
}

const composicaoDobroEAdicao = composicao(dobro, adicionarCinco);
const resultadoComposicao = composicaoDobroEAdicao(3); // Primeiro dobro e depois adicione 5
console.log(resultadoComposicao); // Saída: 11
