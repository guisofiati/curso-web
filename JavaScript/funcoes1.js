/// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
//NaN pois falta 1 argumento que da undefined
imprimirSoma(2)
//Ignora os outros 2 argumentos
imprimirSoma(2,3,4,5)
//NaN
imprimirSoma()

//Função com retorno
function somar(a, b = 0) {
    return a + b
}

console.log(somar(2,3))
console.log(somar(2))

//NaN
console.log(somar())


