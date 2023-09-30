class carro {
    constructor(c_marca, c_tipo) 
    {
        this.marca = c_marca
        if(c_tipo == 1)
        {
            this.tipo = "Esportivo"
            this.velo_max = 300

        } else if (c_tipo == 2) {
            this.tipo = "Utilitario"
            this.velo_max = 100
        }
        else if (c_tipo == 3) {
            this.tipo = "Passeio"
            this.velo_max = 160
        } else {
            this.tipo = "Militar"
            this.velo_max = 180
        }
    }

    getNome() 
    {
        return this.marca
    }

    getTipo()
    {
        return this.tipo
    }
    
    getVelMax()
    {
        return this.velo_max
    }

    getInfo()
    {
        return [this.marca, this.tipo, this.velo_max]
    }

    setMarca(marca)
    {
        this.marca = marca
    }

    info() // aqui criamos um metodo
    {
        console.log(`Nome:  ${this.marca}`)
        console.log(`Nome:  ${this.tipo}`)
        console.log(`Nome:  ${this.velo_max}`)
        console.log("------------------------------")
    }
}

let c1 = new carro("Rapidão", 1)
let c2 = new carro("Super luxo", 2)
let c3 = new carro("Bombadão", 6)
let c4 = new carro("Carrego Tudo", 3)

// console.log(c1.marca)
// console.log(c2.marca)
// console.log(c3.marca)
// console.log(c4.marca)

c1.info()
c2.info()
console.log(c1.getNome())
console.log(c1.getInfo())

// todos os get retornanm um dado especifico
// getInfo vai nos retorna um array

c1.setMarca("Volkswagen") // setamos uma nova marca, mais poderia ser outro dado
console.log(c1)