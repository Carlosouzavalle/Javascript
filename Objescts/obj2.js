let nacionalidade = "Brasil" //coputed propety

const cliente = {
    nome: "Carlos",
    segundo_nome: "Eduardo",
    email: "basyudgua@gmail.com",
    "Tipo Cliente": "VIP", // isso aqui esta certo e funciona sem nenhum problema

    [nacionalidade]: "pt"
}

console.log(cliente.nome)
console.log(cliente["segundo_nome"])
// as duas maneiras acima estão corretas
cliente.telefone = 123456789
console.log(cliente.telefone)
console.log(cliente.email)
delete cliente.email
console.log(cliente.email)
console.log(cliente["Tipo Cliente"])
console.log(cliente.Brasil)