const prompt = require("readline-sync");

const idade = Number(prompt.question("Qual eh a sua idade?"));

// const ehMaiorDeIdade = idade >= 18;

// Estrutura condicional: if/else

if (idade >= 18) {
  console.log("Você eh maior de idade!");
} else {
  console.log("Você eh menor de idade.");
}

const mediaDoAluno = 7.8;

// Média >= 7 -> APROVADO
// Média < 7 e Média >= 5 -> PROVA FINAL
// Média < 5 -> REPROVADO

if (mediaDoAluno >= 7) {
  console.log("APROVADO!");
  console.log("PARABÉNS! 😁👍");
} else if (mediaDoAluno >= 5) {
  console.log("PROVA FINAL");
} else {
  console.log("REPROVADO");
}

// 1. Preciso ser maior de idade
// 2. Preciso ter uma CNH (PPD)

const idadeDoMotorista = 18;
const temCNH = false;

if (idadeDoMotorista >= 18 && temCNH) {
  console.log("Você pode dirigir!");
} else {
  console.log("Voce NÃO pode dirigir!");
}
