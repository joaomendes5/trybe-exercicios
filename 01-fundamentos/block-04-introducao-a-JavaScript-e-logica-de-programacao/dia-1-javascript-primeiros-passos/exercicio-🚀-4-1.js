// ____________________Exercício [ 1 ]________________________ //
// Faça cinco programas, um para cada operação aritmética básica. 
// Seu programa deve ter duas constantes, a e b, 
// definidas no começo com os valores que serão operados. 
// 
// Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)
// ---------Resposta----------//

const a1 = 43;
const b1 = 187;

console.log("---------Exercício 01--------");
console.log("Adição= " + (a1 + b1));
console.log("Subtração= " + (a1 - b1));
console.log("Multiplicação= " + (a1 * b1));
console.log("Divisão= " + (a1 / b1));
console.log("Módulo= " + (a1 % b1));
console.log("-------------FIM-------------");
console.log(" ");

// ---------Resposta----------//

// -----------------------------------------------------------------------------------------------------

// ____________________Exercício [ 2 ]________________________ //
//Faça um programa que retorne o maior de dois números. 
//Defina no começo do programa duas constantes 
// com os valores que serão comparados.
 
// ---------Resposta----------//

const a2 = 98;
const b2 = 430;

console.log("---------Exercício 02--------");
if (a2 > b2) {
    console.log("O maior valor é " + (a2) + " que é a constantate [a2]");
} else {
    console.log("O maior valor é " + (b2) + " que é a constantate [b2]");
};
console.log("-------------FIM-------------");
console.log(" ");
// ---------Resposta----------//

// -----------------------------------------------------------------------------------------------------

// ____________________Exercício [ 3 ]________________________ //
// Faça um programa que retorne o maior de três números. 
// Defina, no começo do programa, três constantes 
//  com os valores que serão comparados.

// ---------Resposta----------//
const a3 = 74;
const b3 = 85;
const c3 = -28;

console.log("---------Exercício 03--------");
if (a3 > b3 && a3 > c3) {
    console.log('O maior númeiro é: ' + a3 + ' (a3)');
} else if (b3 > a3 && b3 > c3 ) {
    console.log('O maior númeiro é: ' + b3 + ' (b3)');
} else {
    console.log('O maior númeiro é: ' + c3 + ' (c3)');
};
console.log("-------------FIM-------------");
console.log(" ");
// ---------Resposta----------//

// -----------------------------------------------------------------------------------------------------

// ____________________Exercício [ 4 ]________________________ //
// Faça um programa que, dado um valor definido numa constante,
//  retorne "positive" se esse valor for positivo, [> 0]
// "negative" se for negativo e [< 0]
// "zero", caso contrário. --  [= 0]

// ---------Resposta----------//

const a4 = -4;

console.log("---------Exercício 04--------");
if (a4 > 0) {
    console.log('a4 é positive');
} else if (a4 < 0) {
    console.log('a4 é negative');
} else {
    console.log('a4 é zero');
};
console.log("-------------FIM-------------");
console.log(" ");
// ---------Resposta----------//

// __________________🚀 Exercício [ 4 ] 🚀________________________ //
// 🚀 Faça um programa que defina três constantes 
//com os valores dos três ângulos internos de um triângulo.  OK
//Retorne true se os ângulos representarem os ângulos de um triângulo 
//e false, caso contrário. 
//Se algum ângulo for inválido o programa deve 
//retornar uma mensagem de erro.

const angulo1 = 78;
const angulo2 = 45;
const angulo3 = -90;

console.log("---------🚀 Exercício 05 🚀--------");
console.log(" ");
//  \/\/\/\/\/\/\/ JOAO QUE FEZ \/\/\/\/\/\/\/\/\
// if ((angulo1 + angulo2 + angulo3) == 180 ) {
//     console.log('Ângulos do triângulo estão ok!!')
// } else {
//     console.log("Ângulos do triângulo FALSE!!");
// }

// No gabarito estava mais completo, segue abaixo

let somaDosAngulos = angulo1 + angulo2 + angulo3;
let todosOsAngulosSaoPositivos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

if (todosOsAngulosSaoPositivos) {
    if (somaDosAngulos === 180)
    console.log('Ângulos do triângulo estão ok!!')
} else {
    console.log("Ângulos do triângulo FALSE!!");
}

console.log(" ");
console.log("------------🚀 FIM 🚀------------");
console.log(" ");
