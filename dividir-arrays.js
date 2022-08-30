const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjore', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabella', 'Vinicius', 'Renan', 'Renata', 'Dayse', 'Camilo'];

const sala1 = nomes.slice(0, nomes.length/2);
const sala2 = nomes.slice(nomes.length/2);

console.log('Tamanho do array:', nomes.length);
console.log(`Alunos da sala 1: ${sala1}`);
console.log(`Alunos da sala 1: ${sala2}`);