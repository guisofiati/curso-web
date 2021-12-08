function tratarErroELancar(erro) {
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'Mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        Date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally { //Sempre será executado, mesmo dando erro no try
        console.log('Executado')
    }
}

const obj = { nome: 'Roberto'}
imprimirNomeGritado(obj)