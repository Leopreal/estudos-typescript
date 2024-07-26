// console.log("teste")


// iniciando o express

import express from 'express'

const app = express()

app.get("/", (requisicao, resposta) => {
    return resposta.send('ola')
})

app.listen(300, () => {
    console.log('funcionando')
})