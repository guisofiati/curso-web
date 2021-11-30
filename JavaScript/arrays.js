const valores = [7.7, 1.0, 6.3, 9.3]

console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)

console.log(valores.length)

//Adicionar
valores.push({id: 3}, false, null, 'teste', "teste2")
console.log(valores)

//Exclui ultima posição
valores.pop()
console.log(valores)

delete valores[0]
console.log(valores)

console.log(typeof valores)