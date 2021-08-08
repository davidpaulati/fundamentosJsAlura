//4 – Peça ao usuário para digitar várias idades. Exiba quantas pessoas são maior de idade (18 anos) e quantas são menores.

let idades = [5, 6, 17, 22, 23, 4, 19, 30];
let cont = 0;
for(let i = 0; i < idades.length; i++){
    if(idades[i] >= 18){
        cont = cont + 1;
    }
}

console.log(`temos ${cont} pessoas maiores de idade`);