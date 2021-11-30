//Declarada mas não inicializada
let valor
console.log(valor)

valor = null // ausência de valor
console.log(valor)
//console.log(valor.toString()) // Erro pois é null

const produto = {}

//Vai vir undefined, pois produto existe, mas preço não
console.log(produto.preco)

//Da erro, pois preco nem existe
//console.log(produto.preco.a)

console.log(produto)

produto.preco = 3.50
console.log(produto)