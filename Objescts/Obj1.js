//usando o literal parafazer objos 
let cliente = {
    nome: "Carlos",
    segundoNome: "Eduardo",
    telefone: 123456789,


    nome_completo: function() {
        return this.nome + " " + this.segundoNome
    }, // essa virgula aqui é nescessaria para separar os codigos
 
    alterar_nome: function(novo_nome) {
        this.nome = novo_nome
    }
}

console.log(cliente.nome)
console.log(cliente.nome_completo())
cliente.alterar_nome("Cadu")
console.log(cliente.nome_completo())

