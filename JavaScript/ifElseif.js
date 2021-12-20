Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (notas) {
    if (notas.entre(9, 10)) {
        console.log('Quadro de honra')
    } else if (notas.entre(7, 8.99)) {
        console.log('Aprovado')
    } else if (notas.entre(4, 6.99)) {
        console.log('Recuperação')
    } else if (notas.entre(0, 3.99)) {
        console.log('Reprovado')
    } else {
        console.log('Nota inválida')
    }
}

imprimirResultado(10)
imprimirResultado(7.5)
imprimirResultado(5.5)
imprimirResultado(2)
imprimirResultado(-1)