// Exercicios de fundamentos 

// Exercício 1: Olá, Mundo!
//Criar um script que imprima "Olá, Mundo!" no console
// console.log("Olá Mundo");





// Exercício 2: Conversão de tipo
// Dado o valor de uma string "1234", converta-o em um número e exiba o tipo no console
// const valor = "1234";
// MeuNovoValor = Number(valor);
// console.log(typeof MeuNovoValor);





// Exercicio 3: Manipulação de strings 
// Dado uma string "Javascript é incrível", escreva o código que conte quantos caracteres tem e quantas palavras existem na frase
// const ValorString = "Javascript é incrível";
// const NumeroDeCaracteres = ValorString.length;
// const NumeroDePalavras = ValorString.split(" ").length;
// console.log(`O numero de caracteres é ${NumeroDeCaracteres} 
// e o numero de palavras é ${NumeroDePalavras}`)
/* Split é um metodo que divide uma string em palavras e 
entregar uma lista de palavras que tem na string */


// Exercicio 4: Loops e Array 
// Crie um array com cinco nomes. use um loop for para imprimir cada nome

// const nomes = ['Carlos', 'Bruna', 'Patrick', 'Bia', 'Barbara'];

// for(let i = 0; i < nomes.length; i++)
// {
//     console.log(nomes[i])
// }


// let n = 0
// while(n < nomes.length)
// {
//     console.log(nomes[n])
//     n++
// }

// Exercicio 5: Funções, Strings e Math
// Crie uma função que aceita uma string representando um horário no formato de 24 horas
// ex: "14:30". A função deve retorna uma string que converta o horario para o formato de 12 hora
// ex: "2:30 PM"
// Use o objeto Math para auxiliar nesta conversão. certifique-se de que sua função 
// lida corretamente com horários na meia-noite e no meio-dia.

function converterHorario(horario24) {
    const hora = horario24.split(":")[0]
    const minuto = horario24.split(":")[1]

    // 15 / 12 = 3, 23 % 12 = 11
    // falsy 12 % 12 = 0 => 12
    const hora12 = hora % 12 || 12

    let periodo = "AM"

    if(hora > 12) {
        periodo = "PM"
    }

    console.log(`${hora12}:${minuto} ${periodo}`)
}
converterHorario("15:16")
converterHorario("09:46")
converterHorario("21:12")