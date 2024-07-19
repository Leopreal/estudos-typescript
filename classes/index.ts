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
