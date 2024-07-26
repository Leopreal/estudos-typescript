import React from 'react'

interface Props {
    nome: string
    idade: number
    listaNotas: string[]
    // enum

    categoria: Categoria
}

export enum Categoria {
  JS = 'JavaScript',
  TS = 'TypeScript',
  P = 'Python'
}

const Desestruturando = ({nome, idade, listaNotas, categoria}: Props) => {
  return (
    <div>
        <h2>{nome}</h2>
        <h2>{idade}</h2>
        <h2>{listaNotas}</h2>
        <h2>{categoria}</h2>

    </div>
  )
}

export default Desestruturando