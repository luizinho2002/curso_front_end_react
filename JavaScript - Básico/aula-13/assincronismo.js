const fs = require("fs");

// * 1. Callbacks

// console.log("ANTES da função de ler o arquivo...");

// // Função assíncrona (ler um arquivo leva um tempo)
// fs.readFile("arquivo.txt", (erro, conteudoDoArquivo) => {
//   if (erro) {
//     console.log("Ocorreu um erro ao tentar ler o arquivo:", erro);
//   } else {
//     console.log(String(conteudoDoArquivo));
//   }
// });

// console.log("DEPOIS da função de ler o arquivo...");

// * Exemplo 2: setTimeout(função que cria um timer)

// console.log("ANTES do setTimeout...");

// setTimeout(() => {
//   console.log("Isso aqui vai ser executado após 2 segundos!");
// }, 2 * 1000);

// console.log("DEPOIS do setTimeout...");

// * 2. Promises (promessas)

// console.log("Antes da criação da promise...");

function lerArquivoPromise() {
  return new Promise((resolve, reject) => {
    fs.readFile("arquivo.txt", (erro, conteudoDoArquivo) => {
      if (erro) {
        reject("Ocorreu um erro ao tentar ler o arquivo:", erro);
      } else {
        resolve(String(conteudoDoArquivo));
      }
    });
  });
}

// lerAqruivoPromise()
//   .then((retornoDoResolveDaPromise) => {
//     console.log("Deu certo:", retornoDoResolveDaPromise);
//   })
//   .catch((erro) => {
//     console.log("Deu ruim", erro);
//   })
//   .finally(() => {
//     console.log(
//       "Isso aqui vai ser executado independete do sucesso ou fracasso da promessa, no final dela."
//     );
//   });

// * 3. async/await

async function leituraDeDados() {
  console.log("Isso é executado ANTES da promise ser resolvida");

  try {
    const dadosDoArquivoLido = await lerArquivoPromise(); // espera a promessa ser resolvida para avançar no código

    console.log(dadosDoArquivoLido);
    console.log("Isso é executado DEPOIS da promise ser resolvida");
  } catch (erro) {
    console.log("Isso aqui é executado depois da promise (com erro).");
  } finally {
    console.log("Dentro do finally!");
  }
}

leituraDeDados();
