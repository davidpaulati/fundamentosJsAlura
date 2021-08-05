function soma(numero1, numero2) {
   return numero1 + numero2;
}

function multiplica(numero1 = 1, numero2 =1) {
    return numero1 * numero2;
}

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade}`
}

// console.log(soma(3,3));
// console.log(nomeIdade("David", 30));
console.log(multiplica(soma(4, 5), soma(3, 3)));