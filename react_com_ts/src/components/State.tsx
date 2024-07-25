import React from 'react'
import { useState, ChangeEvent } from 'react'



const State = () => {

    const [texto, setTexto] = useState<string | null>('testando hook')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
       setTexto(e.target.value)

    }

  return (
    <div>
        <p>o texto é {texto}</p>
        <input type="text" onChange={handleChange} />
    </div>
  )
}

export default State