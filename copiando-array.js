const notas = [7, 7, 8, 9];

//Desta maneira os dois arrays são alterados
const novasNotas = notas;

novasNotas.push(10);
console.log(`Estas são as notas originais sem o spread operator ${notas}`);
console.log(`Estas são as novas notas ${novasNotas}`);

// O método para copiar arrays sem alterar o array original é o espalhamento [...notas]
const novasNotasEspalhadas = [5, ...notas, 12];
novasNotasEspalhadas.push(25);

console.log(`Estas são as notas originais com spread operator ${notas}`);
console.log(`Estas são as notas espalhadas ${novasNotasEspalhadas}`);


const arrayOriginal = [7, 7, 8, 9];

function alteraArray(array) {
  array.push(11);

  console.log(`array do parâmetro é ${array}`);
  console.log(`arrayOriginal é ${arrayOriginal}`);
}

alteraArray([...arrayOriginal]);