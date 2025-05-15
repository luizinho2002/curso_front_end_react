const pessoas = [
  {
    nome: "Pessoa 1",
    idade: 22,
  },
  {
    nome: "Pessoa 2",
    idade: 21,
  },
  {
    nome: "Pessoa 3",
    idade: 46,
  },
];

const pessoaEncontrada = pessoas.find(() => pessoa.idade > 40);

// console.clear();
console.log(pessoaEncontrada);