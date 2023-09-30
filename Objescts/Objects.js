class person {
  // ele é o metodo que é chmado toda vez que a gente instancia um novo objeto dessa classe
  constructor(pnome) 
  {
      // this.nome = 'Carlos'
      this.nome = pnome
  }
}

let p1 = new person("Carlos")
let p2 = new person("Bruno")
let p3 = new person("Bia")
/* note que não há nada entre parenteses em person(), porque ele faz uma referencia direta
ao parentese do construtor da class, se o nosso construtor não recebe nenhum parametro
ao instancia a class você não vai passar parametro também  */

console.log(p1.nome)

/* Imprimindo no console teremos como resposta "Carlos", mais pq? toda vez que eu utilizo o operador
new eu estou instanciando um novo objeto da class person ou seja ele vai lá na memoria cria uma caixa
do tipo pessoa com o nome da variavel p1 do tipo peson no construtor criamos uma variavel chamada "nome" 
e passamos o valor "Carlos" com this.nome ele cria a propriedade "nome" e atribui o valor "person"
quando fizemos "p1.nome" ele foi na propriedade nome e pegou seu valor o contrutor foi executado 
quando eu acionei o new
*/
console.log(p2.nome)
console.log(p3.nome)
/* 

*/
