let text = "Javascipt is super cool"
let result = text.indexOf("super")
console.log(result) 

/*
    ele consegue indentificar se uma palavra existe em uma lista nos retornando 
    um indice
*/

let text2 = "Hello world, welcome to the universe."
result2 = text2.indexOf("u", 5) // encronte o "U" e comece no indice 5 
// ele vai dar a volta e voltar pro "U" nos entregando o indice 28
console.log(result2)