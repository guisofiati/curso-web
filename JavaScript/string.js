const escola = 'cod3r';
            //  01234

console.log(escola.charAt(3))
console.log(escola.charAt(4))
console.log(escola.charAt(5))

// Ver unicode do char
console.log(escola.charCodeAt(1))

// Ver o lugar em que o r esta
console.log(escola.indexOf('r'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola))
console.log('Escola ' + escola + "!")

console.log(escola.replace(3, 'e'))
console.log('Ana Maria Pedro Joao'.split(' '))