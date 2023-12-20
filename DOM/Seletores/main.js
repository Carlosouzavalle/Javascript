// console.log(document.getElementById("titulo"))
// console.log(document.getElementById("titulo").innerText)

document.getElementById("titulo").innerText = 'Novo Titulo' 
// Com o innerText podemos alterar nosso conteudo dentro do elemento
//aqui vai buscar pelo id que passamos para a tag html

// console.log(document.getElementsByName('text_usuario'))
// document.getElementsByName('text_usuario')[0].value = 'Carlos'

console.log(document.getElementsByTagName('h3'))
document.getElementsByTagName('h3')[1].innerText = 'Texto 2'
//aqui vai buscar pela tag de html

document.getElementsByClassName('cor_texto')
// o elemento que tiver essa class vai obter esta cor