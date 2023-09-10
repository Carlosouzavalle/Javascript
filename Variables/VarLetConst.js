// Variables
// var nome = "valor"
var minhaVariavel = "Hello world";
console.log(minhaVariavel);

/*
Var its the old way to writte a variable then we have a
new maners Let and Const  
*/

let nome = 'Carlos';
console.log(nome)

// Another way

const nome2 = "Bia"
console.log(nome2)

/*
    But there are some difference amoung it. that its Const is a value 
    that you dont change for example const name = "Carlos" 
    you dont change your name in a important account.
*/

{
    let color = "Blue"
    console.log(color)
}

let color = "Yelow"
console.log(color)
color = "Black"
console.log(color)
/*
    As can you see i can writte a variable with the same name in diffenret locals
    that its nice and we can change the value too
    But const dont allow us do that fot example
*/

const fruit = "Apple"
console.log(fruit)
// fruit = "Orange"
console.log(fruit)

// We can change const value