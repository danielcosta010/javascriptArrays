/* const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

notas.forEach((nota, indice) => {
  somaDasNotas += nota;
  console.log(indice);
});

let media =somaDasNotas / notas.length;

console.log(`A media das notas é: ${media}`);
 */


//const api = fetch('https://api.github.com/users/danielcosta010');

async function teste () {
  const api = await fetch('https://api.github.com/users/danielcosta010');
  const apiConvertida = api.json();

  console.log(apiConvertida);

}

teste()
