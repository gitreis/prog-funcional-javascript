// Função processArray para transformar uma lista de números
function processArray(lista, funcaoTransformacao) {
  return lista.map(funcaoTransformacao);
}

// Função para transformar uma palavra em maiúsculas
function transformarEmMaiusculas(palavra) {
  return palavra.toUpperCase();
}

// Função para transformar uma palavra em minúsculas
function transformarEmMinusculas(palavra) {
  return palavra.toLowerCase();
}

// Exemplo de uso:
const numeros = [1, 2, 3, 4, 5];
const palavras = ["Maçã", "Banana", "Pera", "Morango"];

const numerosDobrados = processArray(numeros, numero => numero * 2);
console.log("Números dobrados:", numerosDobrados);

const palavrasMaiusculas = processArray(palavras, transformarEmMaiusculas);
console.log("Palavras em maiúsculas:", palavrasMaiusculas);

const palavrasMinusculas = processArray(palavras, transformarEmMinusculas);
console.log("Palavras em minúsculas:", palavrasMinusculas);
