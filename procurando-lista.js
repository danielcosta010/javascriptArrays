const alunos = ['João', 'Marina', 'Carlos', 'Fernanda', 'Daniel'];
const mediaAlunos = [8, 9 , 7, 10, 6];

const listasDeNotasEAlunos = [alunos, mediaAlunos];

// includes sempre retorna booleano
// indeOff retorna um numero

function verificaAluno(nome) {
  if(listasDeNotasEAlunos[0].includes(nome)) {
    let indice = listasDeNotasEAlunos[0].indexOf(nome)
    return listasDeNotasEAlunos[0][indice] + ', sua média é ' + listasDeNotasEAlunos[1][indice]
  } else {
    return 'O aluno não esta cadastrado'
  }
}

console.log(verificaAluno('João'));

let achaIndice = alunos.indexOf('João');
console.log(achaIndice);