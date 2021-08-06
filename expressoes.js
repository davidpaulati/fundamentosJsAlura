//forma classica de escrever função
// function minhaFuncao(param) {
// bloco de código
// }

// minhaFuncao(param);


//expressão de função

// const soma = function(num1,num2){
//     return num1 + num2;

// }
// console.log(soma(4,5));
//-----------------------------

//diferença principal:HOISING
//funções e var são "listadas" no topo do arquivo
console.log(apresentar())
function apresentar(){
    return "olá";
}

//testando o hoisting = elevação
console.log(soma(1,1))
const soma = function(num1, num2) {
    return num1 + num2;
}

