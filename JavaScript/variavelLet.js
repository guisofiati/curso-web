var escopo1 = 1 

{
    var escopo1 = 2
    console.log('dentro =', escopo1)
}

console.log('fora =', escopo1)

let escopo2 = 1 

{
    let escopo2 = 2
    console.log('dentro =', escopo2)
}

console.log('fora =', escopo2)