// Condicionais:

// Crie uma função chamada maiorNumero que recebe dois números como argumentos e retorna o maior deles.
// Crie uma função chamada idadePermitida que recebe a idade como argumento e retorna "Permitido" se a idade for maior ou igual a 18, caso contrário retorna "Não permitido".


function maiorNumero(a , b) {
    if(a > b) 
        {
            console.log(`O numero ${a} é maior que ${b}`)
        } else {
            console.log(`Ele não é maior`)
        }
}

//console.log(maiorNumero()); // Chama a função com os valores padrão
console.log(maiorNumero(5, 3)); // Chama a função com os valores específicos