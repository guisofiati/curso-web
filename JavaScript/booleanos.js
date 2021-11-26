let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1 
console.log(!!isAtivo)

console.log('Valores verdadeiros')
console.log(!!3)
console.log(!!-5)
console.log(!!' ')
console.log(!!'teste')
console.log(!!{})
console.log(!![])
console.log(!!Infinity)
console.log(!!isAtivo == true)

console.log('Valores verdadeiros')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!isAtivo == false)

console.log('Finalizando')
console.log('' || null || 0 || ' ')
console.log('' || null || 0 || 'ops')

let nomeNull = ''
console.log(nomeNull || 'Desconhecido')

let nome = "Lucas"
console.log(nome || 'Desconhecido')