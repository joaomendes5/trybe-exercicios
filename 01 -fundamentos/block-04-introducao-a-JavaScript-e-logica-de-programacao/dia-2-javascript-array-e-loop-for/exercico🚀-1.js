//Leia atentamente os enunciados e faça o que se pede! 
//Iremos utilizar esse array para realizar os exercícios do 1 ao 7:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// => [1] Nesse primeiro exercício, percorra o array 
//        imprimindo todos os valores nele contidos 
//        com a função console.log();

// ---------Resposta----------//
console.log(" ");
console.log("---------Exercício 01✅--------");
console.log(" ");

for (let i1 = 0; i1 < numbers.length; i1 += 1) {
    console.log(numbers[i1])
}


console.log("  ");
console.log("-------------FIM-------------");
console.log(" ");
// ---------Resposta---------- //

// => [2] Para o segundo exercício, some todos os 
//        valores contidos no array e imprima o resultado;

// ---------Resposta----------//
console.log(" ");
console.log("---------Exercício 02 ✅ --------");
console.log(" ");

let soma2 = 0

for (let i2 = 0; i2 < numbers.length; i2 +=1){
    soma2 += numbers[i2]
}

console.log("A soma de todos dos valores é: " + soma2)


console.log("  ");
console.log("-------------FIM-------------");
console.log(" ");
// ---------Resposta---------- //

// => [3] Para o terceiro exercício, calcule e imprima 
//        a média aritmética dos valores contidos no array;
//          =>  A média aritmética é o resultado da soma 
//              de todos os elementos divido pelo número 
//              total de elementos.

// ---------Resposta----------//
console.log(" ");
console.log("---------Exercício 03 ✅ --------");
console.log(" ");

let mediaNumeros = soma2 / (numbers.length)

console.log("A media dos valores é: " + mediaNumeros)


console.log(" ");
console.log("-------------FIM-------------");
console.log(" ");
// ---------Resposta---------- //

// => [4] Com o mesmo código do exercício anterior, 
//        caso o valor final seja maior que 20, 
//        imprima a mensagem: "valor maior que 20". 
//        Caso não seja, imprima a mensagem: 
//            "valor menor ou igual a 20";

// ---------Resposta----------//
console.log(" ");
console.log("---------Exercício 04 ✅--------");
console.log(" ");

if (mediaNumeros > 20) {
    console.log("valor maior que 20")
} else {
    console.log("valor menor ou igual a 20")
}



console.log(" ");
console.log("-------------FIM-------------");
console.log(" ");
// ---------Resposta---------- //

// => [5] 🚀 Utilizando for, descubra qual o maior 🚀
//        🚀 valor contido no array e imprima-o;   🚀

// ---------Resposta----------//
console.log(" ");
console.log("🚀---------🚀 Exercício 05 🚀--------🚀");
console.log(" ");

var maiorNumero = 0

for ( let i5 = 0; i5 < numbers.length; i5 += 1) {
    if ( numbers[i5] > maiorNumero) {
        maiorNumero = numbers[i5];
    }
}

console.log("O maior número é: " + maiorNumero)


console.log(" ");
console.log("-------------FIM-------------");
console.log(" ");
// ---------Resposta---------- //

// => [6] Descubra quantos valores ímpares existem no array 
//        e imprima o resultado. Caso não exista nenhum, 
//        imprima a mensagem: "nenhum valor ímpar encontrado";

// ---------Resposta----------//
console.log(" ");
console.log("❗️❓ ---------Exercício 06--------");
console.log(" ");
console.log(" não estou conseguindo!!! ");
console.log(" ");

let quantidadeImpar = 0;
// let quantidadePar

for ( let i6 = 0; i6 < numbers.length; i6 += 1) {
    if (numbers[i6] % 2 !== 0) {
    quantidadeImpar += 1;
    } 
}

    if (quantidadeImpar === 0) {
    console.log(" Tem " + quantidadeImpar + " números ímpares")
    } else {
    console.log(" nenhum valor ímpar encontrado")
    }
    // console.log(quantidadePar)


console.log(" ");
console.log("-------------FIM-------------");
console.log(" ");
// ---------Resposta---------- //

// => [7] Utilizando for, descubra qual o menor valor 
//        contido no array e imprima-o;

// ---------Resposta----------//
console.log(" ");
console.log("❗️❓ ---------Exercício 07--------");
console.log(" ");
console.log(" não estou conseguindo!!! ");
console.log(" ");

// --------Comentario no gabarito-----------
// =>   O valor da variável smallestNumber poderia ser qualquer um,
//      desde que fosse maior que o maior número do array numbers. 
//      Caso atribuíssemos o valor 1 para a variável, nosso algoritmo estaria errado,
//      pois ele nunca acharia um número menor que 1 no array. 
//      Para resolver esse problema vamos iniciar a variavel com o primeiro valor do array. 
//      Dessa forma podemos pular a posição 0 e iniciar com index = 1

let menorNumero = numbers[0]

for (let i7 = 1; i7 < numbers.length; i7 += 1) {
  if (numbers[i7] < menorNumero) {
    menorNumero = numbers[i7];
  }
}
console.log(" O menor número é " + menorNumero)

console.log(" ");
console.log("-------------FIM-------------");
console.log(" ");
// ---------Resposta---------- //

// => [8] Utilizando for, crie um array que vá de 1 até 25
//        e imprima o resultado;

// ---------Resposta----------//
console.log(" ");
console.log("❗️ ---------Exercício 08--------");
console.log(" ");

let numbers08 = [] // tinha que ser um array vazio, para poder colocar valores dentro

for (let i8 = 1; i8 <= 25; i8 += 1) {
    numbers08.push(i8);
}
console.log(" Segue lista com 25 números")
console.log(' ' + numbers08)


console.log(" ");
console.log("-------------FIM-------------");
console.log(" ");
// ---------Resposta---------- //

// => [9] Utilizando o array criado no exercício anterior 
//        imprima o resultado da divisão de cada um dos
//        elementos por 2.

// ---------Resposta----------//
console.log(" ");
console.log("---------Exercício 09--------");
console.log(" ");

let resultadoDivisao09 = [];

for ( let i9 = 0; i9 < numbers08.length; i9 += 1 ) {
    resultadoDivisao09.push(numbers08[i9] / 2)
};

console.log(" O resultado da divisão de todos os números por 2 é: ")
console.log(" " + resultadoDivisao09)

console.log(" ");
console.log("-------------FIM-------------");
console.log(" ");
// ---------Resposta---------- //

// --------------------------------BÔNUS---------------------------------------------------------------------
console.log(" ");
console.log("---------BÔNUS--------");
console.log(" ");
// ____________________Exercício [ 1 ]________________________ //
//Ordene o array numbers em ordem crescente e imprima seus valores;

// ---------Resposta----------//
console.log(" ");
console.log("---------Exercício 01--------");
console.log(" ");

console.log(" ");
console.log(" Minha resposta - pesquisei na internet ");
console.log(" ");

numbers.sort((a, b) => a - b);
console.log(numbers)

console.log(" ");
console.log(" ----Gabarito---- ");
console.log(" ");

let numbers01 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let ib1 = 1; ib1 < numbers01.length; ib1 += 1) {
  for (let secondIndex = 0; secondIndex < ib1; secondIndex += 1) {
    if (numbers01[ib1] < numbers01[secondIndex]) {
      let position = numbers01[ib1];
      numbers01[ib1] = numbers01[secondIndex];
      numbers01[secondIndex] = position;
    }
  }
}

console.log(numbers);

console.log(" ");
console.log("-------------FIM-------------");
console.log(" ");
// ---------Resposta----------//