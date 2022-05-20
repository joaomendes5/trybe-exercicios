// ----------------------------------------------------------------------------------------------------- //
//------------ Conteúdo Array ------------ //
console.log(" ")
console.log("-----------------------------")
console.log("- Conteúdo - Array")
console.log(" ")
console.log("---------Exercício 01--------")
console.log("-----------------------------")
console.log(" ")
// ____________________Exercício [ 01 ]________________________ //
// Obtenha o valor "Serviços" do array menu1:
let menu1 = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu1[1];

console.log(menuServices);
// ---------Resposta----------//
console.log(" ")
console.log("---------Exercício 02--------")
console.log("-----------------------------")
console.log(" ")
// ____________________Exercício [ 02 ]________________________ //
//Procure o índice do valor "Portfólio" do array menu2:

let menu2 = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu2.indexOf("Portfólio");

console.log(indexOfPortfolio);

// ---------Resposta----------//
console.log(" ")
console.log("---------Exercício 03--------")
console.log("-----------------------------")
console.log(" ")
// ____________________Exercício [ 03 ]________________________ //
//Adicione o valor "Contato" no final do array menu:
let menu3 = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu3.push("Contato")

console.log(menu3);



console.log(" ");
console.log("-------------FIM-------------");
console.log(" ");
// ---------Resposta---------- //



//------------ Conteúdo For ------------
console.log(" ")
console.log("-----------------------------")
console.log("- Conteúdo - For")
console.log(" ")
console.log("---------Exercício 01--------")
console.log("-----------------------------")
console.log(" ")
//Exercício 1
//Utilize o for para imprimir os elementos 
//da lista groceryList com o console.log():
//let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

//Resposta-----------------------//
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for (let index = 0; index < groceryList.length; index += 1 ) {
    console.log(groceryList[index]);
}


//------------ Conteúdo For/of ------------
console.log(" ")
console.log("-----------------------------")
console.log("- Conteúdo - For/of")
console.log(" ")
console.log("---------Exercício 01--------")
console.log("-----------------------------")
console.log(" ")
//Exercício 1
//Utilize o for/of para imprimir os elementos da 
//lista names com o console.log():
//let names = ['João', 'Maria', 'Antônio', 'Margarida'];

//Resposta-----------------------//
let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let nomesSeparados of names ) {
    console.log(nomesSeparados);
}