import React from 'react'

interface Props {
    nome: string
    idade: number
    listaNotas: string[]
}

const Desestruturando = ({nome, idade, listaNotas}: Props) => {
  return (
    <div>
        <h2>{nome}</h2>
        <h2>{idade}</h2>
        <h2>{listaNotas}</h2>

    </div>
  )
}

export default Desestruturando