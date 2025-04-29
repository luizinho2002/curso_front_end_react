const prompt = require("readline-sync");

let i;

// expressão 1: inicialização da variável de controle
// expressão 2: condição de permanência do for
// expressão 3: o incremento da variável de controle

// for (expressao1; expressao2; expressao3) {
//   // O escopo do for
// }

for (i = 0; i <= 5; i++) {
  console.log(i);
}

// Limpando o console
console.clear();

// Exemplo

// let maiorNumero = 0;
// let numeroInformado;

// for (let i = 0; i < 5; i++) {
//   numeroInformado = Number(prompt.question("Informe um numero positivo: "));

//   if (numeroInformado > maiorNumero) {
//     maiorNumero = numeroInformado;
//   }
// }

// console.log("Maior numero:", maiorNumero);

// * Exemplo: percorrendo strings utilizando for

const nome = "Luiz";

for (let i = 0; i < nome.length; i++) {
  console.log(nome[i]);

  if (i === 4) {
    break;
  }
}

console.clear();

// * ARRAYS

const notasDoAluno = [10, 8, 5];
const pessoa = ["Luiz", 23, 1.77, true];

console.log(notasDoAluno);
console.log(pessoa);

console.log(pessoa[1]);
