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

console.log(pessoa[0]);

pessoa[3] = false;

console.log(pessoa);

console.clear();
console.log(pessoa.length);
console.log(notasDoAluno.length);

console.clear();

// Fatiamento de arrays
const numeros = [40, 34, 67, 89, 23, 10];

console.log(numeros.slice(0, 2));
console.log(numeros.slice(2));

console.clear();

// Adicionando elementos no final do array
numeros.push(0);
console.log(numeros);

// Adicionar elemento no início do array
console.clear();
numeros.unshift(-1);
console.log(numeros);

// Remover o elemento que está no final do array
console.clear();
numeros.pop(); // Remove o elemento 0 (do final)
console.log(numeros);

// Remover o primeiro elemento do array
console.clear();
numeros.shift();
console.log(numeros);

// Será que o elemento 20 existe no array numeros?
console.clear();
console.log(numeros.includes(20));
console.log(numeros.includes(10));

if (numeros.includes(20)) {
  console.log("Opa! Existe o número 10 dentro do array numeros!");
} else {
  console.log("Não existe o número 20 no array numeros.");
}

const existeONumero20 = includes(20);
