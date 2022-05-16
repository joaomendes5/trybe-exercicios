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

console.log(" ");
console.log("---------Exercício 01--------");
console.log(" ");

console.log("Adição= " + (a1 + b1));
console.log("Subtração= " + (a1 - b1));
console.log("Multiplicação= " + (a1 * b1));
console.log("Divisão= " + (a1 / b1));
console.log("Módulo= " + (a1 % b1));

console.log(" ");
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

console.log(" ");
console.log("---------Exercício 02--------");
console.log(" ");

if (a2 > b2) {
    console.log("O maior valor é " + (a2) + " que é a constantate [a2]");
} else {
    console.log("O maior valor é " + (b2) + " que é a constantate [b2]");
};

console.log(" ");
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

console.log(" ");
console.log("---------Exercício 03--------");
console.log(" ");

if (a3 > b3 && a3 > c3) {
    console.log('O maior númeiro é: ' + a3 + ' (a3)');
} else if (b3 > a3 && b3 > c3 ) {
    console.log('O maior númeiro é: ' + b3 + ' (b3)');
} else {
    console.log('O maior númeiro é: ' + c3 + ' (c3)');
};

console.log(" ");
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
console.log(" ");
if (a4 > 0) {
    console.log('a4 é positive');
} else if (a4 < 0) {
    console.log('a4 é negative');
} else {
    console.log('a4 é zero');
};

console.log(" ");
console.log("-------------FIM-------------");
console.log(" ");
// ---------Resposta----------//

// -----------------------------------------------------------------------------------------------------

// __________________🚀 Exercício [ 5 ] 🚀________________________ //
// 🚀 Faça um programa que defina três constantes 
//com os valores dos três ângulos internos de um triângulo.  OK
//Retorne true se os ângulos representarem os ângulos de um triângulo 
//e false, caso contrário. 
//Se algum ângulo for inválido o programa deve 
//retornar uma mensagem de erro.

// ---------Resposta----------//

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

// ---------Resposta----------//

// -----------------------------------------------------------------------------------------------------

// ____________________Exercício [ 6 ]________________________ //

// Escreva um programa que receba o nome de uma peça de xadrez 
// e retorne os movimentos que ela faz.

// ---------Resposta----------//
console.log(" ");
console.log("---------Exercício 06--------");
console.log(" ");

const pecaDeXadrex = 'Cavalo'

switch (pecaDeXadrex.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
}

console.log(" ");
console.log("-------------FIM-------------");
console.log(" ");
// ---------Resposta----------//

// -----------------------------------------------------------------------------------------------------

// ____________________Exercício [ 7 ]________________________ //
// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) 
// em conceitos de A a F. 
// Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem  < 50  -> F
// O programa deve retornar uma mensagem de erro e 
// encerrar se a nota passada for menor que 0 ou maior que 100.

// ---------Resposta----------//
console.log(" ");
console.log("---------Exercício 07--------");
console.log(" ");

const nota = 101
if (nota < 0 || nota > 100) {
    console.log("ATENÇÃO NOTA INSERIDA FOI ERRADA")
// }
// if (nota >= 90){
//     console.log("Sua nota é [A]") 
// Tem que colocar primerios o do erro. PERGUNTAR O PORQUE
} else if (nota >= 80) {
    console.log("Sua nota é [B]")
} else if (nota >= 70) {
    console.log("Sua nota é [C]")
} else if (nota >= 60) {
    console.log("Sua nota é [D]")
} else if (nota >= 50) {
    console.log("Sua nota é [E]")
} else if (nota < 0 || nota > 100) {
    console.log("ATENÇÃO NOTA INSERIDA FOI ERRADA")
} else {
    console.log("Sua nota é [F]")
}

console.log(" ");
console.log("-------------FIM-------------");
console.log(" ");
// ---------Resposta----------//

// -----------------------------------------------------------------------------------------------------

// __________________🚀 Exercício [ 8 ] 🚀______________________ //
// 🚀 Escreva um programa que defina três números em constantes 
// e retorne true se pelo menos uma das três for par. 
// Caso contrário, ele retorna false.
// Bonus: use somente um if.

// ---------Resposta----------//
console.log(" ");
console.log("---------🚀 Exercício 08 🚀--------");
console.log(" ");

const numero1_08 = 15
const numero2_08 = 7823
const numero3_08 = 9

if (numero1_08 % 2 === 0 || numero2_08 % 2 === 0 || numero3_08 % 2 === 0 ) {
    console.log("Tem pelo menos um número é par ai!!")
} else {
    console.log("Tem par aqui não, é tudo impar viu!!")
}

// ------------ RESPOSTA DO GABARITO ----------
console.log(" ");
console.log(" RESPOSTA DO GABARITO - Usando (Tipo boolean) ");
console.log(" ");
let isEven = false;

if ((numero1_08 % 2 === 0 || numero2_08 % 2 === 0 || numero3_08 % 2 === 0)) {
    isEven = true;
};

console.log(isEven);


console.log(" ");
console.log("-------------🚀 FIM 🚀-------------");
console.log(" ");
// ---------Resposta----------//

// -----------------------------------------------------------------------------------------------------

// ____________________Exercício [ 9 ]________________________ //
// Escreva um programa que defina três números em constantes
// e retorne true se pelo menos uma das três for ímpar. 
//Caso contrário, ele retorna false.
// Bonus: use somente um if.

// ---------Resposta----------//
console.log(" ");
console.log("---------Exercício 09--------");
console.log(" ");

const numero1_09 = 8
const numero2_09 = 782
const numero3_09 = 56


console.log(" ");
console.log("-------------FIM-------------");
console.log(" ");
// ---------Resposta----------//