function calcularQuadrados(listaDeNumeros) {
  return listaDeNumeros.map(numero => numero * numero);
}

// Exemplo de uso:
const listaDeNumeros = [1, 2, 3, 4, 5];
const quadrados = calcularQuadrados(listaDeNumeros);
console.log(quadrados); // Saída: [1, 4, 9, 16, 25]


function filtrarNumerosPares(listaDeNumeros) {
  return listaDeNumeros.filter(numero => numero % 2 === 0);
}

// Exemplo de uso:
const numerosPares = filtrarNumerosPares(listaDeNumeros);
console.log(numerosPares); // Saída: [2, 4, 6, 8]
