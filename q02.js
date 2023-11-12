function calcularSoma(lista) {
  return lista.reduce((acumulador, elemento) => acumulador + elemento, 0);
}

// Exemplo de uso:
const lista = [1, 2, 3, 4, 5];
const soma = calcularSoma(lista);
console.log("Soma dos elementos:", soma); // Saída: 15


function encontrarMaiorNumero(lista) {
  if (lista.length === 0) {
    return undefined; // Retorna undefined se a lista estiver vazia
  }

  return lista.reduce((maior, elemento) => (elemento > maior ? elemento : maior), lista[0]);
}

// Exemplo de uso:
const listaNumeros = [7, 3, 12, 9, 5, 20];
const maiorNumero = encontrarMaiorNumero(listaNumeros);
console.log("Maior número:", maiorNumero); // Saída: 20
