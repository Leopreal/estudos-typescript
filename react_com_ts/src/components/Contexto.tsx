import React, {useContext} from 'react'

import { AppContexto } from '../App'



const Contexto = () => {

    const detalhes = useContext(AppContexto)

  return (
    <>
    {detalhes && 
        <div>
            <h2>
                Linguagem: {detalhes.linguagem}
                <h4>Framework: {detalhes.framework}</h4>
                <h4>Projetos: {detalhes.projetos}</h4>
            </h2>
        </div>
    }
    </>
  )
}

export default Contexto