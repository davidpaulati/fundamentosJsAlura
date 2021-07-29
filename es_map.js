// var numeros = [1,2,3];
// var dobro = [];
// for(var i = 0; i < numeros.length; i++){
//     dobro.push(numeros[i] * 2);
// }

// console.log(numeros);//[1,2,3]
// console.log(dobro);//[2,4,6]

//usando o map
let numeros = [1,2,3];
let dobro = numeros.map(function(numero){
    return numero * 2;
});

console.log(numeros);
console.log(dobro);