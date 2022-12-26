let nomes = ['ana Julia', 'Caio vinicius', 'BIA silva'];

const nomesAtualizados = nomes.map(nome => nome.toUpperCase());

console.log(nomesAtualizados);

const nome = "Alura";
let nomeMaiusculas = "";

// Multiplica por 10 função map
const arrayNums = [1, 2, 3, 4];

function multiplicaPorDez(daniel) {
  return daniel * 10
};
const arraySomada = arrayNums.map(multiplicaPorDez);

console.log(arraySomada);

const arraySomada2 = arrayNums.map(num => num * 10)

console.log(arraySomada2);

// Altera notas 

const notas = [10, 9.5, 8, 7, 8.5];

const notasAtualizadas = notas.map(nota => nota + 1 >= 10? 10 : nota + 1);
console.log(notasAtualizadas);