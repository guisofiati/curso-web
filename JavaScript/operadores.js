const a = [x, y] = [7, '7']
console.log(x == y) // Só compara se valor é igual
console.log(x === y) // Compara se o tipo e valor são iguais

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(6.1))
console.log(resultado(7.1))