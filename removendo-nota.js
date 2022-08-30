const notas = [10, 7, 8, 5, 10];
notas.pop()

console.log(notas);

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(`A média é ${media}`);


const arrayVazia = [,,,];
console.log(arrayVazia.length);
arrayVazia.push(50)
console.log(arrayVazia);
console.log(arrayVazia.length);

const jantarDeHoje = ['🍔', '🌭', '🍕'];
jantarDeHoje.pop();
jantarDeHoje.pop();

jantarDeHoje.push('🍳')
jantarDeHoje.push('🥗')
jantarDeHoje.push('🍏')

console.log(jantarDeHoje);

