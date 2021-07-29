// // no ES5
// var alunos = [
//     {nome:'joão', idade:15},
//     {nome:'josé', idade:18},
//     {nome:'maria', idade:20}
// ];

// var alunosDeMaior = [];
// for(var i = 0; i < alunos.length; i++){
//     if(alunos[i].idade >= 18) {
//         alunosDeMaior.push(alunos[i]);
//     }
// }

// console.log(alunosDeMaior);


//método Filter
const alunos = [
    {nome:'joão', idade:15},
    {nome:'josé', idade:18},
    {nome:'maria', idade:20}
];

let alunosDeMaior = alunos.filter(function(aluno){
    return aluno.idade >= 18;
});

console.log(alunosDeMaior);