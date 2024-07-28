// console.log("teste")


// iniciando o express

import { error } from 'console'
import express, {NextFunction, Request, response, Response} from 'express'
import { prependOnceListener, resourceUsage } from 'process'

const app = express()

// rota com POST

app.use(express.json())

// middleware para todas as rotas
function mostrarRota(requisicao: Request, resposta: Response, proximo: NextFunction) {
    console.log(requisicao.path)
    proximo()
}

app.use(mostrarRota)

app.get("/", (requisicao, resposta) => {
    return resposta.send('ola')
})

// rota com post

app.post("/api/product", (requisicao, resposta) => {
    console.log(requisicao.body)

    return resposta.send("produto adicionado")
}) 

app.all("/api/product/check", (requisicao, resposta) => {
    // requisicao.metrod = VERBO HTTP(GET, POST, PUT)

    if(requisicao.method === "POST") {
         
        return resposta.send("inseriu algo")

    } else if(requisicao.method === "GET") {

        return resposta.send("leu algo")

    } else {

        resposta.send("nao podemos realizar essa operacao")

    }
})

// interface do express

app.get("/api/interfaces", (requisicao: Request, resposta: Response) => { // eu tipo para o ts me auxiliar

    // return requisicao.send()
        return resposta.send("esta funcionando")
})

app.get("/api/json", (requisicao: Request, resposta: Response) => {
    return resposta.json({
        nome: "Camiseta",
        preco: 30.00,
        cor: "azul",
        tamanho: ["P", "M", "G"]
    })
})

app.get("/api/product/:id", (requisicao: Request, resposta: Response) => {

    console.log(requisicao.params)

    const id = requisicao.params.id

    if(id === "1") {
        const produto = {
            id: 1,
            nome: "boné",
            preco: 10.00
        }
        return resposta.json(produto) // encapsulando a variavel no metodo json
    } else if(id === "2") {
        const produto2 = {
            id: 2,
            nome: "calça",
            preco: 32.00
        }
        return resposta.json(produto2)
    } else {
        return resposta.send("produto nao encontrado")
    }

    resposta.send("produto nao encontrado")

})

app.get("/api/product/:id/review/:reviewId", (requisicao: Request, resposta: Response) => {

    console.log(requisicao.params)

    const Idproduto = requisicao.params.id
    const Idreview = requisicao.params.reviewId

    return(resposta.send(`acessando a review ${Idreview} do produto ${Idproduto}`))

})


// router handler

function getUser(requisicao: Request, resposta: Response) {
    console.log(`o id do usuario é ${requisicao.params.id}`)

    return resposta.send("usuario encontrado!")
}

app.get("/api/user/:id", getUser)

// midware

function verificaUsuario(requisicao: Request, resposta: Response, proximo: NextFunction) {
    if(requisicao.params.id === "1") {
        console.log("Usuario administrativo!")
        proximo()
    } else {
        console.log("usuario nao adm")
    }
}

app.get("/api/user/:id/acess", verificaUsuario, (requisicao: Request, resposta: Response) => {
    return resposta.json({msg: "bem vindo a central administrativa"})
})


// requisicao e resposta em generics

app.get("/api/user/:id/detalhes/:nome", 
    (
        requisiscao: Request<{id: string; nome: string}>, 
        resposta: Response<{status: boolean}>
    ) => {
        console.log(`ID: ${requisiscao.params.id}`)
        console.log(`nome: ${requisiscao.params.nome}`)

        return resposta.json({status: true})

})

app.get("/api/error", (requisicao: Request, repsosta: Response) => {
    try {
        // logica
        throw new Error("ERRO")
    } catch (error: any) {
        repsosta.statusCode = 500

        repsosta.json({mensagem: error.message})
    }
})

app.listen(300, () => {
    console.log('funcionando')
})