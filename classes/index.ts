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
    // readonly rodas = 4

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

// getters

class pessoa {
    nome
    sobrenome

    constructor(nome: string, sobrenome: string) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    get mostrarNome() {
        return this.nome + " " + this.sobrenome
    }
}
                                                                //get e set não precisam utilizar constructor
const leonardoPernomian = new pessoa("Leonardo", "Pernomian")

console.log(leonardoPernomian.nome)

console.log(leonardoPernomian.mostrarNome)

// setters

class Coordenadas {
    x!: number
    y!: number

    set fillx(x: number) {
        if(x === 0) {
            return
        }

        this.x = x
        console.log("x inserido com sucesso")
    }

    set filly(y: number) {
        if(y === 0) {
            return
        }

        this.y = y
        console.log("y inserido com sucesso")
    }

    get pegarcoord() {
        return `X: ${this.x} Y: ${this.y}`
    }
}

const minhaCoord = new Coordenadas()

minhaCoord.fillx = 30
minhaCoord.filly = 10

console.log(minhaCoord)

console.log(minhaCoord.pegarcoord)

// implements

interface mostraTitulo {
    TituloItem(): string
}

class blogPost implements mostraTitulo {
    title 

    constructor(title: string) {
        this.title = title
    }

    TituloItem(): string {
        return `o titulo do post é ${this.title}`
    }
}

const novoPost = new blogPost("ola")
console.log(novoPost.TituloItem())

// override

class Base {
    algumMetodo() {
        console.log("teste")
    }

}

class Novo extends Base {
    algumMetodo(): void {
        console.log("testando 2")
    }
}

const meuObjeto = new Novo()
meuObjeto.algumMetodo()


// visibilidade

// PUBLIC: PODE ACESSADO DE QUALQUER LUGAR
// PROTECTED: ACESSIVAL APENAS A SUBCLASSE DA CLASSE DO METODO
// PRIVATE: APENAS A CLASSE QUE DECLAROU O METODO PODE ACESSAR

// public

class C {
    public x = 10
}

class D extends C {
    
}


const imprimaC = new C()

const imprimaD = new D()

console.log(imprimaC.x)
console.log(imprimaD.x)

// protect

class A {
    protected x = 10

    protected MetodoProtegido(){
        console.log("este é um metodo protegido")
    }
}

class B extends A {
    mostraX() {
        console.log(`o x é ${this.x}`)
    }

    MostraMetodoProtegido() {
        this.MetodoProtegido()
    }
}

const InstanciaX = new B()
// console.log(mostraX.x)
InstanciaX.mostraX()
InstanciaX.MostraMetodoProtegido()

// privado

class ClassePrivada {
    private nome = "Leozik"

    mostrarNome() {
        return this.nome
    }

    private MetodoPrivado() {
        console.log("este é um metodo privado que só pode ser acessado por outro metodo da classe")
    }

    MostrarMetodoPrivado() {
        this.MetodoPrivado()
    }

}

const TestePrivado = new ClassePrivada()

console.log(TestePrivado.mostrarNome())
TestePrivado.MostrarMetodoPrivado()

// class classeTeste extends ClassePrivada {
//     mostrarAlgo() {
//         this.MetodoPrivado()
//     }
// }

// static members

class StaticMembers {
    static prop = "teste1"

    static StaticMethod() {
        console.log("teste com metodo")
    }
}

console.log(StaticMembers.prop)
StaticMembers.StaticMethod()

// generic class

class ClasseGenerica<Gen1, Gen2> {
    primeiro
    segundo

    constructor(primeiro: Gen1, segundo: Gen2) {
        this.primeiro = primeiro
        this.segundo = segundo

    }

    get MostrarPrimerio() {
        return `o primeiro é ${this.primeiro}`
    }
}

const NovoTeste = new ClasseGenerica("caixa","surpresa")
console.log(NovoTeste)
console.log(NovoTeste.MostrarPrimerio)

// parameters propriedades

class PropriedadesComParametros {
    constructor(public nome: string, private idade: number) {
        this.nome = nome
        this.idade = idade
    }

    get mostrarIdade() {
        return this.idade
    }



}

const novaPessoa = new PropriedadesComParametros("Leo", 19)

console.log(novaPessoa.nome)
// console.log(novaPessoa.idade)

console.log(novaPessoa.mostrarIdade)

// generic classes

const Classe1 = class<Gen1> {
    nome

    constructor(nome: string) {
        this.nome = nome
    }
}

const pessoas = new Classe1("leo")
console.log(pessoas)

// abstract class

abstract class ClasseAbstrata { // PARECIDO COM A SINTAXE DA INTERFACE, POREM O ABSTRACT A GNT HERDA
    abstract mostrarNome(): void
}

// const novoObj = new ClasseAbstrata()

class ExemploAbstrato extends ClasseAbstrata {
    nome: string


    constructor(nome: string) {
        super()

        this.nome = nome

    }

    mostrarNome() {
        console.log(this.nome)
    }
}

const novoExemploAbstrato = new ExemploAbstrato("leo")

novoExemploAbstrato.mostrarNome();
