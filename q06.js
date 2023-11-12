function filtrarPessoasComMaisDe30Anos(pessoas) {
  const pessoasComMaisDe30 = [];
  
  for (const pessoa of pessoas) {
    if (pessoa.idade > 30) {
      pessoasComMaisDe30.push(pessoa);
    }
  }
  
  return pessoasComMaisDe30;
}

// Exemplo de uso:
const pessoas = [
  { nome: "João", idade: 25 },
  { nome: "Maria", idade: 35 },
  { nome: "Pedro", idade: 28 },
  { nome: "Ana", idade: 40 }
];

const pessoasMaisDe30 = filtrarPessoasComMaisDe30Anos(pessoas);
console.log(pessoasMaisDe30);
