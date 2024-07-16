// 1 - object literals

interface Produto {
    nome: string,
    preco: number,
    estaDisponivel: boolean
}


function mostrarProduto(produto: Produto) {
    if(produto.estaDisponivel === true) {
        console.log(`O seu produto se chama ${produto.nome} e custa R$${produto.preco}`)
        console.log("produto disponivel")
    } else {
        console.log("produto nao disponivel")
    }
}

const camiseta:Produto = {
    nome: "camiseta",
    preco: 19.99,
    estaDisponivel: true,
}

mostrarProduto(camiseta)
mostrarProduto({nome: "tenis", preco: 190, estaDisponivel: false})


// objetos com propriedades opcionais


interface Usuario {
    email: string,
    chave?: string
}

function mostrarUsuarios(usuario: Usuario){
    console.log(`o usuario tem este email: ${usuario.email} e nao tem chave`);
    if(usuario.chave){
        console.log(`o usuario tem chave de: ${usuario.chave}`)
    }
    
}

const usuario1: Usuario = {
    email: "leo@email.com",
}

const usuario2: Usuario = {
    email: "jgnsjgs@on3n.com",
    chave: "adm"
}


mostrarUsuarios(usuario1)
mostrarUsuarios(usuario2)

// read-only

interface Carro {
    marca: string,
    readonly rodas: number
}

const fusca: Carro = {
    marca: "VW",
    rodas: 4
}

console.log(fusca)

// fusca.rodas = 5

// 4 - index signature

interface objetoCoordenadas {
    [index: string]: number
}

const coords: objetoCoordenadas = {
    x: 15
}

coords.y = 10

console.log(coords)


// 5 - heranças com interfaces

interface humano {
    nome: string,
    idade: number
}

interface superHumano extends humano {
    superPoderes: string[]
}

const leo:humano = {
    nome: "leo",
    idade: 19
}

const superLeo: superHumano = {
    nome: "super leo",
    idade: 19,
    superPoderes: ["telepatia", "super força"]
}


console.log(leo)
console.log(superLeo)
console.log(superLeo.superPoderes[1])


// 6 - intercection types

interface cara {
    nome: string
}

interface arma {
    tipo: string,
    calibre: number
}

type caraComArma = cara & arma

const leonardo: caraComArma = {
    nome: "leo",
    tipo: "Doze",
    calibre: 12
}

console.log(leonardo)


// 7 - read-only com arrays
let meuArray: ReadonlyArray<string> = ["tomate", "laranja", "uva"] // read-only com array somente de strings

meuArray.forEach((item) => { // METODO FOREACH PARA PERCORRER OS ELEMENTOS DO ARRAY POR MEIO DO "ITEM"
    console.log("Fruta: " + item)
})


meuArray.map((item) => {
    return `Fruta: ${item}`
})

console.log(meuArray)


// 8 - tuplas

type tresNumero = [number, number, number]

const teste: tresNumero = [1,2,3]


console.log(teste)


type nomeEidade = [string, number]

const alguem: nomeEidade = ["leo", 19]

console.log(alguem[0])


// read-only com tuplas

function mostrarValores(numeros: readonly [number, number]) {
    // numeros[0] = 10
    console.log(numeros[0])
    console.log(numeros[1])

}

mostrarValores([1,2])