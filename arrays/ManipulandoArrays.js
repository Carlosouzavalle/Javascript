// const frutas = ["Maça", "Laranja"]

// frutas.unshift("Uva"); // Adiciona um elemento no começo do array
// console.log(frutas)
// frutas.shift(); 
// console.log(frutas) // Remove o primeiro elemento


// map, filter, reduce -> arrow function

const numeros = [1, 2, 3, 4, 5, 6]
const numeroPar = numeros.find((num) => num % 2 === 0)
//find só retorna o primeiro elemento do critério
console.log(numeroPar)


const numerosPares = numeros.filter((num) => num % 2 === 0)
console.log(numerosPares)
// filter ele vai filtrar todos os elementos que corespondem