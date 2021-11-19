let a = 7;
let b = 94;

/*
    Errado
    a = b;
    b = a;
*/

let temp = a;
a = b;
b = temp;

console.log(a);
console.log(b);