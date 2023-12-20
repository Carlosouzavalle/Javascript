let nomes = ['joao', 'ana', 'carlos']

for (let key of nomes) {
    console.log(key)
}
// do arrays nomes a cada vistoria retira um nome e imprimir


// ele não vai aos valores e sim as chaves
for (key2 in nomes) {
    console.log(nomes[key2])
}