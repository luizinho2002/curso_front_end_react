// Fetch API

fetch("https://viacep.com.br/ws/01001000/json/")
  .then((resposta) => {
    resposta.json().then((dados) => console.log(dados));
  })
  .catch((erro) => {
    console.log(erro);
  });

// then / catch

// async / await
