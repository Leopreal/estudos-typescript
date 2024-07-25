import React from 'react'

interface Props {
    nome: string
}

const SegundoComponente = (props: Props) => {
  return (
    <div>
        <p>Segundo componente</p>
        <p>{props.nome}</p>
    </div>
  )
}

export default SegundoComponente