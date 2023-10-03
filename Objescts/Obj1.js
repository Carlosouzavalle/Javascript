//usando o literal parafazer objos 
let cliente = {
    nome: "Carlos",
    segundoNome: "Eduardo",
    telefone: 123456789,


    nome_completo: function() {
        return this.nome + " " + this.segundoNome
    }
}

console.log(cliente.nome)
console.log(cliente.nome_completo())