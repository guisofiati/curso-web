let tipo1 = 'JavaScript';
let tipo2 = 3.151659;
let tipo3 = 10;

console.log(tipo1)
console.log(tipo2)
console.log(tipo3)
console.log(typeof tipo1)
console.log(typeof tipo2)
console.log(typeof tipo3)

console.log('***********')

const peso1 = 1.0;
const peso2 = Number('2.1');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.878;
const avaliacao2 = 6.565;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

//Quantas casas depois da virgula vai ter
console.log(media.toFixed(2));

console.log(media.toString());

//Transforma para binário
console.log(media.toString(2));

console.log(typeof media);
console.log(typeof Number);

console.log('***********')

console.log(7 / 0);
console.log("10" / 2);
console.log("10.1" / 2);
console.log("Teste" / 2);
console.log(0.1 + 0.2);
//console.log(10.toString())
console.log((10.34).toFixed(2))