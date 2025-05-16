const pessoa = {
  nome: "Luiz",
  idade: 22,
  altura: 1.77,
};

// Desestruturação ou spread (operator)
const pessoaComPeso = {
  ...pessoa,
  peso: 70,
};

console.log(pessoaComPeso);
