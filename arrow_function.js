//Arrow function = flecha
const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;
//console.log(soma(5,5));

//Arrow function com mais de 1 linha de instrução
const somaNumerosPequenos = (num1, num2) => {
    if (num1 || num2 > 10) {
        return "somente números de 1 a 9"
    } else {
        return num1 + num2;
    }
}
//Hoisting: arow function se comporta como expressão 


console.log(somaNumerosPequenos(6,1))