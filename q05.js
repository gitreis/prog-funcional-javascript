function calcularFatorial(numero) {
  if (numero <= 1) {
    return 1;
  } else {
    return numero * calcularFatorial(numero - 1);
  }
}

// Exemplo de uso:
const numero = 5;
const fatorial = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é ${fatorial}`); // Saída: O fatorial de 5 é 120


function calcularFibonacci(n) {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return calcularFibonacci(n - 1) + calcularFibonacci(n - 2);
  }
}

// Exemplo de uso:
const n = 7;
const termoFibonacci = calcularFibonacci(n);
console.log(`O ${n}-ésimo termo da sequência de Fibonacci é ${termoFibonacci}`);
