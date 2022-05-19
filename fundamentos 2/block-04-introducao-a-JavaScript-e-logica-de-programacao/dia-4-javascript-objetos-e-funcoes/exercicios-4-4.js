console.log(" ")
console.log("Parte I - Objetos e For/In")
console.log(" ")
// ----------------------------------------
// --------------Informação--------------
//Usando o objeto abaixo, faça os exercícios a seguir:
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

console.log(" ")
console.log("        |----|")
console.log("        | 01 |")
console.log("        |----|")
console.log(" ")
// ----------------------------------------
// --------------EXERCICIO 01--------------
// 1 - Imprima no console uma mensagem de 
//     boas-vindas para a personagem acima, 
//     incluindo seu nome. Valor esperado no 
//     console:

//            Bem-vinda, Margarida

for(let i in info){
    console.log(" Bem vinda, " + info.personagem);
}

console.log(" ")
console.log("----------FIM----------")
console.log(" ")

console.log(" ")
console.log("        |----|")
console.log("        | 02 |")
console.log("        |----|")
console.log(" ")
// ----------------------------------------
// --------------EXERCICIO 02--------------
// 2 - Insira no objeto uma nova propriedade 
//     com o nome de chave 'recorrente' e 
//     o valor 'Sim' e, em seguida, imprima 
//     o objeto no console. Valor esperado 
//     no console:

//   {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: 'Sim'
//   }

info.recorrente = "Sim"
console.log(info)

console.log(" ")
console.log("----------FIM----------")
console.log(" ")

console.log(" ")
console.log("        |----|")
console.log("        | 03 |")
console.log("        |----|")
console.log(" ")
// ----------------------------------------
// --------------EXERCICIO 03--------------
// 3 - Faça um for/in que mostre todas as 
//     chaves do objeto. Valor esperado no 
//     console:

//      personagem
//      origem
//      nota
//      recorrente

for(let i in info){
    console.log(" " + i);
}


console.log(" ")
console.log("----------FIM----------")
console.log(" ")

console.log(" ")
console.log("        |----|")
console.log("        | 04 |")
console.log("        |----|")
console.log(" ")
// ----------------------------------------
// --------------EXERCICIO 04--------------
// 4 - Faça um novo for/in, mas agora mostre 
//     todos os valores das chaves do objeto. 
//     Valor esperado no console:

// Margarida
// Pato Donald
// Namorada do personagem principal nos quadrinhos do Pato Donald
// Sim

for(let i in info){
    console.log(" " + info[i]);
}



console.log(" ")
console.log("----------FIM----------")
console.log(" ")

console.log(" ")
console.log("        |----|")
console.log("        | 05 |")
console.log("        |----|")
console.log(" ")
// ----------------------------------------
// --------------EXERCICIO 05--------------
// 5 - Agora, defina um segundo objeto com 
//     a mesma estrutura (as mesmas chaves) 
//     do primeiro e os seguintes valores: 
//     'Tio Patinhas', 'Christmas on Bear Mountain, 
//     Dell's Four Color Comics #178', 'O último MacPatinhas',
//     'Sim'. Então, imprima os valores de cada
//     objeto juntos de acordo com cada uma
//     das chaves. Valor esperado no console:


 let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
  };

  for (let i in info) {
    if (
      i === 'recorrente' &&
      info[i] === 'Sim' &&
      info2[i] === 'Sim'
    ) {
      console.log(' Ambos recorrentes');
    } else {
      console.log(" " + info[i] + ' e ' + info2[i]);
    }
  }

console.log(" ")
console.log("----------FIM----------")
console.log(" ")

console.log(" ")
console.log("        |----|")
console.log("        | 06 |")
console.log("        |----|")
console.log(" ")
// ----------------------------------------
// --------------EXERCICIO 06--------------
//🚀 6 - Acesse as chaves nome, sobrenome e
//      titulo, que está dentro da chave livrosFavoritos,
//      e faça um console.log no seguinte formato: 
//      "O livro favorito de Julia Pessoa se chama 
//      'O Pior Dia de Todos'".
//      Usando o objeto abaixo:
//    
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

console.log(" O livro favorito de " + leitor.nome + 
leitor.sobrenome + " se chama " + leitor.livrosFavoritos[0]["titulo"])