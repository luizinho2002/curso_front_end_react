// Definição da função
function saudacao(nomeDoEstudante, curso = "Front-end em React") {
  // template string || template literals
  return `Olá, ${nomeDoEstudante}! Seja bem-vindo(a) ao curso de ${curso}!`;
}

const mensagemDaSaudacao = saudacao("Luiz", "Back-end em Node.js"); // Chamada da função saudacao

console.log(mensagemDaSaudacao);

// * Exemplo 2

console.clear();

function somar(x, y) {
  return x + y;
}

const resultado = somar(2, 3);

console.log(resultado);
console.log(resultado / 10);

console.clear();

// --------------------------------------------------
// Funções Anônimas

const dobroDoNumero = function (numero) {
  return numero * 2;
};

const dobro = dobroDoNumero(2);
console.log(dobro);

console.clear();

// -------------------------------------------
// ARROW FUNCTIONS: Função Seta

const subtrair = (numero1, numero2) => {
  if (x < 0) console.log("O número 1 é negativo");

  return numero1 - numero2;
};

const multiplicar = (numero1, numero2) => numero1 * numero2;

const triploDoNumero = (numero) => numero * 3;
