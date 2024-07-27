// console.log("teste")


// iniciando o express

import express, {Request, Response} from 'express'
import { prependOnceListener, resourceUsage } from 'process'

const app = express()

// rota com POST

app.use(express.json())

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

app.listen(300, () => {
    console.log('funcionando')
})