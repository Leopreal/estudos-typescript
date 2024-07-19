// CLASSES

class User {
    nome!: string
    idade!: number
}

const leon = new User()

console.log(leon)

leon.idade = 19

console.log(leon)


// constructor

class NovoUsuario {
    nome
    idade

    constructor(nome: string, idade: number) {
        this.nome = nome
        this.idade = idade
    }

}

const joao = new NovoUsuario("joao", 18)

console.log(joao)

// usando o readonly

class Carro {
    nome
    readonly rodas = 4

    constructor(nome: string) {
        this.nome = nome
    }
}

const gol = new Carro("GOl")

console.log(gol)

// gol.rodas = 5

// heranças e super

class Maquinas {
    nome

    constructor(nome: string) {
        this.nome = nome
    }
}


const trator = new Maquinas("trator")

class MaquinaMatadora extends Maquinas {
    armas

    constructor(nome: string, armas: number) {
        super(nome)
        this.armas = armas
    }
}

const destruidos = new MaquinaMatadora("Destruidor", 4)

console.log(trator)
console.log(destruidos)


class anao {
    nome

    constructor(nome: string) {
        this.nome = nome
    }

    saudacao() {
        console.log("executando um metodo em uma classe")
    }
}

const jimmy = new anao("Jimmy")

console.log(jimmy.nome)

jimmy.saudacao()


// metodo this

class caminhao {
    modelo
    cavalos

    constructor(modelo: string, cavalos: number) {
        this.modelo = modelo
        this.cavalos = cavalos
    }

    exibirDetalhes() {
        console.log(`o modelo do caminhao é ${this.modelo} e ele tem ${this.cavalos}`)
    }
}

const caminhao1 = new caminhao("Volvo", 500)
const caminhao2 = new caminhao("Mercedes", 600)

caminhao1.exibirDetalhes()
caminhao2.exibirDetalhes()