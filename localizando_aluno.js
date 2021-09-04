const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const mediasDosalunos = [10, 7, 9, 6];

//includes -> booleano
//indexof -> retorna um indice no caso aqui 1
let listaDeNotasEAlunos = [alunos, mediasDosalunos];

const exibeNomeeNota = (nomeDoAluno) => {
    if(listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0][indice]+ ', sua media = ' + listaDeNotasEAlunos[1][indice];
    } else {
        return 'Aluno não está cadastrado';
    }
}

console.log(exibeNomeeNota('Juliana'))