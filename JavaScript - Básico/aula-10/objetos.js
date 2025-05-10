// Object Literal

const array = ["Luiz", 22, 1.77, true];

const pessoa = {
  nome: "Luiz",
  idade: 22,
  altura: 1.77,
  programador: true,
  hobbies: ["Ouvir música", "Academia", "Ler", "Assistir Séries"],
  imprimirAlgo: () => {
    console.log("Chamou a função!");
  },
};

console.log(pessoa);
console.clear();

console.log(pessoa.nome);
console.log(pessoa.hobbies);
console.log(pessoa["idade"]);

pessoa.profissao = "Desenvolvedor";

pessoa.nome = "Luiz Santos";

console.log(pessoa);

delete pessoa.altura;

console.log(pessoa);

console.clear();

pessoa.imprimirAlgo();

const idade = 22;
const altura = 1.77;

const objeto = {
  idade,
  altura,
};

console.log(objeto);
console.clear();

const { nome, hobbies } = pessoa;

console.log(nome);
console.log(hobbies);
console.log(pessoa);
