// Definição da função
function saudacao(nomeDoEstudante, curso) {
  // template string || template literals
  return `Olá, ${nomeDoEstudante}! Seja bem-vindo(a) ao curso de ${curso}!`;
}

const mensagemDaSaudacao = saudacao("Luiz", "Front-end em React"); // Chamada da função saudacao

console.log(mensagemDaSaudacao);
