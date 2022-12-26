const alunos = ['João', 'Marina', 'Carlos', 'Fernanda', 'Daniel'];
const mediaAlunos = [8, 9 , 7, 10, 6];

const listasDeNotasEAlunos = [alunos, mediaAlunos];

// includes sempre retorna booleano
// indexOff retorna um numero

/* function verificaAluno(nome) {
  if(listasDeNotasEAlunos[0].includes(nome)) {
    let indice = listasDeNotasEAlunos[0].indexOf(nome)
    return listasDeNotasEAlunos[0][indice] + ', sua média é ' + listasDeNotasEAlunos[1][indice]
  } else {
    return 'O aluno não esta cadastrado'
  }
}

console.log(verificaAluno('Fernanda'));

let achaIndice = alunos.indexOf('Fernanda');
console.log(`Seu índice é: ${achaIndice} `); */






function achaAlunosEMedias(aluno) {
  if(listasDeNotasEAlunos[0].includes(aluno)) {
    const [alunos, medias] = listasDeNotasEAlunos;

    const indice = alunos.indexOf(aluno);
    const mediaAluno = medias[indice];
    
    console.log(`${aluno} sua média é: ${mediaAluno}`);
  } else console.log('Aluno não encontrado');
}

achaAlunosEMedias('Carlos')


