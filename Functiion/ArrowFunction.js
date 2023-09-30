// Arrow Function

let funcao = (argumentos) => expressao
/* essa maneira de escrever a função aceita os argumentos 
depois avalia a espressçao do lado e retorna o resultado 
*/

let funcaO = function(a,b,c) {
    return a + b + c
}
// função normal

//Arrow function na pratica
let adicao = (a,b,c) => a + b + c
console.log(adicao(2,3,1)) 

// Uma função que sem parametro
let aviso = () => "Esta mensagem é um aviso"

let saudar = (nome) => {
    let saudacao = "Bom dia"
    return `${saudacao}, ${nome}`
}
console.log(saudar("Carlos"))