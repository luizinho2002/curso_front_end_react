const prompt = require("readline-sync");

// * Exemplo 01

// let saldo = Number(prompt.question("Qual eh o seu saldo? "));

// while (saldo < 0) {
//   saldo = Number(
//     prompt.question("Saldo invalido! Por favor, informe novamente: ")
//   );
// }

// console.log(saldo);

// * Exemplo 02

// let notaDoAluno = Number(prompt.question("Informe a nota do aluno: "));

// let somaDasNotas = 0; // Acumulador
// let qtdNotasValidas = 0; // Acumulador (Quantidade de notas válidas digitiadas)

// while (notaDoAluno >= 0) {
//   somaDasNotas += notaDoAluno; // Incrementando o acumulador (somaDasNotas)
//   qtdNotasValidas++; // Pós-incremento

//   notaDoAluno = Number(prompt.question("Informe a proxima nota: "));
// }

// console.log(somaDasNotas);
// console.log(qtdNotasValidas);

// console.log("Média das notas dos alunos =", somaDasNotas / qtdNotasValidas);

// * Exemplo 03

// Math.random() -> entre 0 e 1
// const numeroSorteado = parseInt(Math.random() * 10);

// let qtdDeTentativas = 0;

// let numeroDoUsuario = Number(
//   prompt.question("Informe um numero entre 0 e 10: ")
// );

// while (numeroSorteado !== numeroDoUsuario) {
//   console.log("Você errou o numero! Tente novamente...");
//   numeroDoUsuario = Number(prompt.question("Informe um numero entre 0 e 10: "));
// }

// console.log("Parabens! Você acertou! O numero era", numeroSorteado);

// Loop com contador

// let contador = 0;

// while (contador <= 5) {
//   console.log(contador);
//   contador++;

//   if (contador === 2) {
//     continue;
//   }
//   console.log("Depois do if...");
// }

// console.log("Fim da contagem");

// * DO-WHILE

let saldo; // undefined

do {
  saldo = Number(prompt.question("Informe um saldo valido: "));
} while (saldo < 0);

console.log(saldo);