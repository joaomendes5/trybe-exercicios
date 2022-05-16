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

let eImpar = false

if (numero1_09 % 2 !== 0 ||
    numero2_09 % 2 !== 0 ||
    numero3_09 % 2 !== 0
    ) {
        eImpar = true
    };
console.log(eImpar + " - sobre o impar ou par da 09")




console.log(" ");
console.log("-------------FIM-------------");
console.log(" ");
// ---------Resposta----------//

// -----------------------------------------------------------------------------------------------------

// ____________________Exercício [ 10 ]________________________ //
// Escreva um programa que se inicie com dois valores 
//em duas constantes diferentes: o custo de um produto e 
//seu valor de venda. A partir dos valores, calcule quanto 
//de lucro (valor de venda descontado o custo do produto) 
//a empresa terá ao vender mil desses produtos.

// Atente que, sobre o custo do produto, incide um imposto de 20%.

// Seu programa também deve emitir uma mensagem de erro 
//e encerrar caso algum dos seus valores de entrada seja menor que zero.

// O lucro de um produto é o resultado da subtração do 
//valor de venda pelo custo do mesmo, 
//sendo que o imposto de 20% também faz parte do valor de custo.

// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)

// ---------Resposta----------//
console.log(" ");
console.log("---------Exercício 10--------");
console.log(" ");

let valorCusto = -52
let valorVenda = 143

let valorImposto = valorCusto * 0.2
let valorCustoTotal = valorCusto + valorImposto
let valorLucro = valorVenda - valorCustoTotal

let valorLucro_1000un = valorLucro * 1000
if( valorCusto < 0 || valorVenda < 0) {
    console.log("Algum dos valores está errado!!")
} else {
    console.log(valorLucro_1000un)
}


//quer saber:
//valorLucro * 1000 vendas
//valorImposto = (valorCusto * 1.2)
//Emitir mensagem de erro se valores de entrada sejam < 0
//valorLucro = valorVenda - valorCustoTotal
//valorCustoTotal = valorCusto + valorImposto

// ------------ RESPOSTA DO GABARITO ----------
console.log(" ");
console.log(" RESPOSTA DO GABARITO - Usando (if) ");
console.log(" ");

if (valorCusto >= 0 && valorVenda >= 0) {
    const valorCustoTotal = valorCusto * 1.2;
    const valorLucro_1000un = (valorVenda - valorCustoTotal) * 1000;
    console.log(valorLucro_1000un);
  } else {
    console.log("Error, os valores não podem ser negativos");
  };

console.log(" ");
console.log("-------------FIM-------------");
console.log(" ");
// ---------Resposta----------//

// -----------------------------------------------------------------------------------------------------

// ____________________Exercício [ 11 ]________________________ //
// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu 
//salário bruto o INSS e o IR. Faça um programa que, 
//dado um salário bruto, calcule o líquido a ser recebido.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. 
//Para as faixas de impostos, use as seguintes referências:

// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88


// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
// Exemplo: Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
// 
// => O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. 
//    O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.

// => Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
// => Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, 
//    sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
// 
//      => R$ 2.670,00: salário com INSS já deduzido;
//      => 7.5%: alíquota de imposto de renda;
//      => R$ 142,80 parcela a se deduzir do imposto.
// 
// => Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
// => O último cálculo para conseguir o salário líquido é 
//          R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
// 
//                      => Resultado: R$ 2.612,55.
//
// => Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?

// ---------Resposta----------//
console.log(" ");
console.log("---------Exercício 11--------");
console.log(" ");
let salarioBruto = 3000
let salarioINSS = 0
let salarioIR = 0
let salarioLiquido = 0

if (salarioBruto <= 1556.94) {
    salarioINSS = salarioBruto * 0.92
} else if (salarioBruto <= 2594.92) {
    salarioINSS = salarioBruto * 0.91
} else if (salarioBruto <= 5189.82) {
    salarioINSS = salarioBruto * 0.89
} else {
    salarioINSS = salarioBruto - 570.88
}

if (salarioINSS <= 1903.98) {
    salarioIR = salarioINSS
} else if (salarioINSS <= 2826.65) {
    salarioIR = salarioINSS - (-1 * ((salarioINSS * 0.075) + 142.8))
} else if (salarioINSS <= 3751.05) {
    salarioIR = salarioINSS - (-1 * ((salarioINSS * 0.15) + 354.80))
} else if (salarioINSS <= 2826.65) {
    salarioIR = salarioINSS - (-1 * ((salarioINSS * 0.225) + 636.13))
} else {
    salarioIR = salarioINSS - (-1 * ((salarioINSS * 0.275) + 869.36))
}
console.log("O salário, suado e muito trabalhado, depois de todos dos descontos para nada é " + salarioIR )

// ------------ RESPOSTA DO GABARITO ----------
console.log(" ");
console.log(" RESPOSTA DO GABARITO - Usando (alíquotas como variáveis) ");
console.log(" ");


let aliquotINSS;
let aliquotIR;

const grossSalary = 2000.00;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
}

const baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalary * 0.275) - 869.36;
};

console.log("Salário: " + (baseSalary - aliquotIR));


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