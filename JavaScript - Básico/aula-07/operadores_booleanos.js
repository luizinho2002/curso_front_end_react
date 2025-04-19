// Operadores Booleanos: Comparações

const numero1 = 10;
const numero2 = 12;

console.log(numero1 == numero2);
console.log(numero1 === numero2);
console.log(numero1 === "10");

console.log(numero1 >= numero2);

const idadePessoa1 = 15;
const idadePessoa2 = 30;

console.log(idadePessoa1 >= 18 && idadePessoa2 >= 18);

console.log(idadePessoa1 >= 18 || idadePessoa2 >= 18);

console.log(!true);

console.log(!(idadePessoa1 >= 18)); // Retorna verdadeiro se a pessoa for menor de idade
