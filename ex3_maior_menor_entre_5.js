//3 – Peça ao usuário para digitar 5 números em uma caixa de texto. Verifique qual é o maior número e exiba-o.

let valores = [2,3,6,11,5];
let maior = Math.max.apply(null, valores);
let menor = Math.min.apply(null, valores);

// for(let i = 0; i < valores.length; i++){
//     console.log(valores[i]);

// }

console.log(`O maior valor  = ${maior}`);
console.log(`O menor valor  = ${menor}`);