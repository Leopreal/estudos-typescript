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