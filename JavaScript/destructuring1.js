const pessoa = {
    nome: 'Ana',
    idade: 19,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, statusPessoa = true } = pessoa
console.log(sobrenome, statusPessoa)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)