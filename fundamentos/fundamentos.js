// Fundmaentos
// var nome = "valor"
var minhaVariavel = "Hello world";
console.log(minhaVariavel);

//Variaveis e tipos de dados
var meuNUmero = 10; //numerico
var meuNUmero2 = "10"; //texto

console.log(meuNUmero + 2);  // soma
console.log(meuNUmero2 + 3); // concatenação
console.log(typeof meuNUmero2);
// typeof indentifica o tipo de dado


//bolean dois valores true e false 
var cafe = true; // false
console.log(cafe);
console.log(typeof cafe);

//object, arrray, null
var meuObjeto = {};
var meuArray = [];
var meuNull = null; //para iniciar uma variavel sem valor
var meuUndefined = undefined; //se uma variavel não tem valor ela começa undefined

console.log(typeof meuObjeto);
console.log(typeof meuArray);
console.log(typeof meuNull);

//O javascript interpreta varios dados como object 

const meuNumero = "123";

const meuNovoNumero = Number(meuNumero);

//O number pega o content da variavel e se for possivel ele converte

console.log(typeof meuNumero);
console.log(typeof meuNovoNumero);

// estruturas de condição if, else, else if


const idadeUsuario = 16;

if(idadeUsuario < 14) 
{
    console.log("criança");
} 
else if(idadeUsuario < 18) {
    console.log("adolecente");
}
else {
    console.log("Pode passar");
}

//SWITCH    

const fruta = "manga";

switch(fruta) {
    case "banana":
        console.log("banana é a fruta");
        break;
    case "manga":
        console.log("manga é a fruta");
        break;  
    default: 
        console.log("fruta não encontrada");
}

//LAÇOS DE REPETIÇÃO

//contador, condição de limite, incremento
for(let i = 0; i < 5; i++) {
    console.log("o valor de pedidos é " + i);
} 


//WHILE 
let k = 0;

while (k < 5) {
    console.log("foram vendidos " + k)
    k++;
}


//do while
let j = 0;

do {

    console.log("mais coisas foram vendidas " + j)
    j++

} while(j < 5);