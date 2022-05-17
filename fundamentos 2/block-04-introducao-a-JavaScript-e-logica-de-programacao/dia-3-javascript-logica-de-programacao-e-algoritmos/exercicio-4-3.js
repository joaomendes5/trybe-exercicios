// ----------------------------------------------------------------------------------------------------- //

// ____________________Exercício [ 01 ]________________________ //
//
//  ==> 1- O fatorial é a multiplicação de um número natural pelos 
//          seus antecessores, exceto o zero. Por exemplo:
//          O fatorial é representado pelo sinal !
//          4! = 4 x 3 x 2 x 1 = 24
//          Com base nessas informações, crie um algoritmo que 
//          retorne o fatorial de 10.


// ---------Resposta----------//
console.log(" ");
console.log("0️⃣1️⃣---------Exercício 01--------");
console.log(" ");

let fatorial = 1

for (let i01 = 10; i01 > 0; i01 -= 1) {
    fatorial *= i01;
}
console.log(fatorial)

console.log(" ");
console.log("-------------FIM-------------");
console.log(" ");
// ---------Resposta----------//

// ----------------------------------------------------------------------------------------------------- //

// ____________________Exercício [ 02 ]________________________ //
// ==> 2- Agora, desenvolva um algoritmo que é capaz de inverter 
//      uma palavra. Por exemplo, a palavra "banana" seria invertida
//      para "ananab". Utilize a string abaixo como exemplo, 
//      depois troque por outras para verificar se seu algoritmo 
//      está funcionando corretamente.

//              let word = 'tryber';

// ---------Resposta----------//
console.log(" ");
console.log("0️⃣2️⃣---------Exercício 02--------");
console.log(" ");

let word02 = 'tryber';
let word02Invertida = word02.split("").reverse().join("");

console.log(" A string invertida ficou assim: " + word02Invertida)

console.log(" ");
console.log("-------------FIM-------------");
console.log(" ");
// ---------Resposta----------//

// ----------------------------------------------------------------------------------------------------- //

// ____________________Exercício [ 03 ]________________________ //
//  ==> 3- Considere o array de strings abaixo:
//    let array = ['java', 'javascript', 'python', 'html', 'css'];
//         Escreva dois algoritmos: um que retorne a maior 
//         palavra deste array e outro que retorne a menor. 
//         Considere o número de caracteres de cada palavra.

// ---------Resposta----------//
console.log(" ");
console.log("---------Exercício 03--------");
console.log(" ");

let lista03 = ['java', 'javascript', 'python', 'html', 'css'];

//um que retorne a maior palavra deste array
let maiorPalavra03 = lista03[0];

for ( let i03 = 0; i03 < lista03.length; i03 += 1) {
    if (lista03[i03].length > maiorPalavra03.length)
    maiorPalavra03 = lista03[i03]
}
console.log(" A maior palavra é " + maiorPalavra03)

//outro que retorne a menor
let menorPalavra03 = lista03[0]
for ( let i03 = 0; i03 < lista03.length; i03 += 1) {
    if (lista03[i03].length < menorPalavra03.length)
    menorPalavra03 = lista03[i03]
}

console.log(" A maior palavra é " + menorPalavra03)

console.log(" ");
console.log("-------------FIM-------------");
console.log(" ");
// ---------Resposta----------//


// ----------------------------------------------------------------------------------------------------- //

// ____________________Exercício [ 04 ]________________________ //
// ==> 4- Um número primo é aquele divisível apenas por 1 e 
//      por ele mesmo. Sabendo disso, escreva um algoritmo 
//      que retorne o maior número primo entre 0 e 50.

// ---------Resposta----------//
console.log(" ");
console.log("---------Exercício 04--------");
console.log(" ");

let maiorPrimo = [ ]
let numerosPrimos = []

for (let i04 = 0; i04 <= 50; i04 += 1) {
    numerosPrimos.push(i04)
}
// for (let i_divisor = 2; i_divisor < numerosPrimos.length; i_divisor += 1) {
//     if (numerosPrimos[i04] % numerosPrimos[i_divisor] === 0){
//         maiorPrimo.push([i_divisor])
//     }
// } 
// 
console.log(maiorPrimo)
console.log(numerosPrimos)


// let biggestPrimeNumber = 0;

// for (let currentNumber = 0; currentNumber <= 50; currentNumber += 1) {
//   let isPrime = true;
//   for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
//     if (currentNumber % currentDivisor === 0) {
//       isPrime = false;
//     }
//   }
//   if (isPrime) {
//     biggestPrimeNumber = currentNumber;
//   }
// }

// console.log(biggestPrimeNumber);


console.log(" ");
console.log("-------------FIM-------------");
console.log(" ");
// ---------Resposta----------//


// ----------------------------------------------------------------------------------------------------- //

// ____________________Exercício [ XX ]________________________ //


// ---------Resposta----------//
console.log(" ");
console.log("---------Exercício XX--------");
console.log(" ");




console.log(" ");
console.log("-------------FIM-------------");
console.log(" ");
// ---------Resposta----------//
