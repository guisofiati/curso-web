//Hoisting = Içamento, ato de içar, jogar pra cima

console.log('a = ', a)
var a = 2
console.log('a = ', a)

/**
 * Em tése aconteceu isso (por debaixo dos panos):
 * 
 * var a;
 * console.log('a = ', a)
 * a = 2;
 * console.log('a = ', a)
 * 
 * Se comentasse o sentença ' var a = 2 ' vai dar erro pois 'a' não vai existir.
 * 
 */