// ----------------------------------------
// --------------EXERCICIO 01--------------
// 1 - Crie um objeto player contendo 
//     as variáveis listadas abaixo.
// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };
console.log(" ")
console.log("-----EXERCICIO 01------")
console.log(" ")

let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

let player = {
    name : "Marta",
    lastName : 'Silva',
    age : 34,
    medals : {
        golden : 2, 
        silver : 3 
    },
};

console.log(" ") + console.log(player)
console.log(" ") + console.table(player)

console.log(" ")
console.log("----------FIM----------")
console.log(" ")
// ----------------------------------------
// --------------EXERCICIO 02--------------
// 2 - Acesse as chaves name, lastName e age 
//     e concatene as suas informações para imprimir 
//     no console uma mensagem no seguinte formato: 
//   "A jogadora Marta Silva tem 34 anos de idade".
console.log(" ")
console.log("-----EXERCICIO 02------")
console.log(" ")

console.log(" A jogadora " + player["name"] + " " + player["lastName"] + " tem " + player["age"] + " de idade." )



console.log(" ")
console.log("----------FIM----------")
console.log(" ")
// ----------------------------------------
// --------------EXERCICIO 03--------------
// 3 - Adicione ao objeto a chave bestInTheWorld
//     e atribua a esta chave um array contendo 
//     as datas em que a jogadora Marta foi considerada
//     a melhor do mundo.
console.log(" ")
console.log("-----EXERCICIO 03------")
console.log(" ")

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
console.log(" " + player.bestInTheWorld)

console.log(" ")
console.log("----------FIM----------")
console.log(" ")

// ----------------------------------------
// --------------EXERCICIO 04--------------
// 4 - Acesse a chave bestInTheWorld e faça 
//     um console.log no seguinte formato: 
//     "A jogadora Marta Silva foi eleita a 
//       melhor do mundo por 6 vezes".

console.log(" ")
console.log("-----EXERCICIO 04------")
console.log(" ")

console.log(" A jogadora " + player["name"] + " " + player["lastName"] + 
" foi eleita a melhor do mundo por " + player["bestInTheWorld"].length + " vezes.");

console.log(" ")
console.log("----------FIM----------")
console.log(" ")

// ----------------------------------------
// --------------EXERCICIO 05--------------
// 5 - Acesse a chave medals e faça um console.log
//     no seguinte formato: "A jogadora possui 2 
//     medalhas de ouro e 3 medalhas de prata".

console.log(" ")
console.log("-----EXERCICIO 05------")
console.log(" ")

console.log("A jogadora possui " + player.medals.golden + " medalhas de ouro e " + player.medals.silver + " medalhas de prata")

console.log(" ")
console.log("----------FIM----------")
console.log(" ")





// ----------------------------------------
// --------------EXERCICIO XX--------------
console.log(" ")
console.log("-----EXERCICIO XX------")
console.log(" ")


console.log(" ")
console.log("----------FIM----------")
console.log(" ")