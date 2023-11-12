function comprimentoDasStrings(listaDeStrings) {
  return listaDeStrings.map(string => string.length);
}

// Exemplo de uso:
const listaDeStrings = ["Maçã", "Banana", "Pera", "Morango"];
const comprimentos = comprimentoDasStrings(listaDeStrings);
console.log(comprimentos); // Saída: [5, 6, 4, 7]

function capitalizarPrimeiraLetraDeCadaPalavra(frase) {
  const palavras = frase.split(" ");
  const palavrasCapitalizadas = palavras.map(palavra => {
    const primeiraLetra = palavra.charAt(0).toUpperCase();
    const restoDaPalavra = palavra.slice(1).toLowerCase();
    return primeiraLetra + restoDaPalavra;
  });
  return palavrasCapitalizadas.join(" ");
}

// Exemplo de uso:
const frase = "este exercício faz parte da aula de linguagem de programação e paradigmas.";
const fraseCapitalizada = capitalizarPrimeiraLetraDeCadaPalavra(frase);
console.log(fraseCapitalizada); // Saída: "Este Exercíco Faz Parte Da Aula De Linguagem De Progamação E Paradigmas."
