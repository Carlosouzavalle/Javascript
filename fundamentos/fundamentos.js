// //object, arrray, null
// var meuObjeto = {};
// var meuArray = [];
// var meuNull = null; //para iniciar uma variavel sem valor
// var meuUndefined = undefined; //se uma variavel não tem valor ela começa undefined

// console.log(typeof meuObjeto);
// console.log(typeof meuArray);
// console.log(typeof meuNull);

// //O javascript interpreta varios dados como object 

// const meuNumero = "123";

// const meuNovoNumero = Number(meuNumero);

// //O number pega o content da variavel e se for possivel ele converte

// console.log(typeof meuNumero);
// console.log(typeof meuNovoNumero);

// // estruturas de condição if, else, else if


// const idadeUsuario = 16;

// if(idadeUsuario < 14) 
// {
//     console.log("criança");
// } 
// else if(idadeUsuario < 18) {
//     console.log("adolecente");
// }
// else {
//     console.log("Pode passar");
// }

// //SWITCH    

// const fruta = "manga";

// switch(fruta) {
//     case "banana":
//         console.log("banana é a fruta");
//         break;
//     case "manga":
//         console.log("manga é a fruta");
//         break;  
//     default: 
//         console.log("fruta não encontrada");
// }

// //LAÇOS DE REPETIÇÃO

// //contador, condição de limite, incremento
// for(let i = 0; i < 5; i++) {
//     console.log("o valor de pedidos é " + i);
// } 


// //WHILE 
// let k = 0;

// while (k < 5) {
//     console.log("foram vendidos " + k)
//     k++;
// }


// //do while
// let j = 0;

// do {

//     console.log("mais coisas foram vendidas " + j)
//     j++

// } while(j < 5);

// //function
// // function name(arg1, arg2) { corpo }

// function cumprimentar(nome) {
//     console.log("Olá " + nome);
// }
// cumprimentar("Carlos");

// //escopo de variaveis

// let cor = "azul";
// //let cor = "preto";
// /* obs: duas variaveis de mesmo nome não podem existir 
// no mesmo local */

// function mostraCor() {
//     let cor = "verde";
//     console.log(cor);
// }

// console.log(cor);
// mostraCor();

// //hoisting = içamento

// testeHoisting(); // isso aqui em outra linguagens não existe

// function testeHoisting()
// {
//     console.log("Deu tudo certo!");
// }

// arrow function

// const testeArrow = () => console.log("Arrow function");
// testeArrow()

// truty and falsy

// const minhaVariavel = ""; // falsy

// if (minhaVariavel) {
//     console.log("é verdadeiro");
// } else {
//     console.log("é falso");
// }
// const minhaVariave2 = "um texto"; // truthy

// if (minhaVariave2) {
//     console.log("é verdadeiro 2");
// } else {
//     console.log("é falso 2");
// }


// const numeros = [1, 2, 3, 4, 5];

// console.log(numeros)
// console.log(numeros[0]) // o indice sempre começa em 0 
// console.log(numeros[2]) 
// numeros.push(6) // novo numero adicionado
// console.log(numeros)
// numeros.pop() // excluir o ultimo numero
// console.log(numeros)

// string 
//concatenação = +
// const string1 = "Um texto";
// const string2 = string1 + " muito legal";
// console.log(string2)

// //interpolação

// const string3 = `${string2} como você esta?`
// console.log(string3)
// console.log(string3.toUpperCase())
// console.log(string3.toLowerCase())

//data e hora 

// const agora = Date()
// console.log(agora)

// const natal = new Date(2023, 11, 25)
// console.log(natal)

//Math
console.log(Math.PI);
console.log(Math.round(3.6)); //arredonda um numero
console.log(Math.sqrt(16)) // raiz quadrada
console.log(Math.pow(2, 3)) //potencia o primeiro é a base e o segundo o expoente

