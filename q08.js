const fs = require('fs');

function contarPalavrasEmArquivo(caminhoArquivo) {
  const conteudo = fs.readFileSync(caminhoArquivo, 'utf8');
  const palavras = conteudo.split(/\s+/).filter(Boolean); // Divide o conteúdo em palavras e remove espaços em branco vazios
  return palavras.length;
}

// Exemplo de uso:
const caminhoDoArquivo = 'arquivo_de_texto.txt';
const numeroDePalavras = contarPalavrasEmArquivo(caminhoDoArquivo);
console.log(`Número de palavras no arquivo: ${numeroDePalavras}`);


const fs = require('fs');

function filtrarEGravarArquivoJSON(caminhoEntrada, caminhoSaida, condicao) {
  const conteudoEntrada = fs.readFileSync(caminhoEntrada, 'utf8');
  const dados = JSON.parse(conteudoEntrada);
  const dadosFiltrados = dados.filter(condicao);
  const dadosFiltradosJSON = JSON.stringify(dadosFiltrados, null, 2);

  fs.writeFileSync(caminhoSaida, dadosFiltradosJSON, 'utf8');
}

// Exemplo de uso:
const caminhoArquivoEntrada = 'dados.json';
const caminhoArquivoSaida = 'dados_filtrados.json';

const condicao = (objeto) => objeto.idade > 30; // Exemplo de condição (filtrar objetos com idade > 30)
filtrarEGravarArquivoJSON(caminhoArquivoEntrada, caminhoArquivoSaida, condicao);
