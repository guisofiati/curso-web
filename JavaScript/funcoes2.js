// Função em variável (função anonima, sem nome)
const soma = function (a, b) {
    console.log(a + b)
}

soma(2,3)

//Arrow function
const subtracao = (a, b) => {
    return a - b
}

console.log(subtracao(3, 2))

// Retorno implícito
const multiplicacao = (a, b) => (a * b)
console.log(multiplicacao(5, 3))

// Função de 1 parâmetro
const imprimir = a => console.log(a)
imprimir('Legal')