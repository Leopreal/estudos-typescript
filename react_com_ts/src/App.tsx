import React, {createContext  } from 'react';
import './App.css';

import PrimeroComponente from './components/PrimeiroComponente'

import SegundoComponente from './components/SegundoComponente';

import Desestruturando, {Categoria} from './components/Desestruturando';

import State from './components/State';

import Contexto from './components/Contexto';


 // types
 type textoOuNulo = string | null

 // context
 interface Contexto {
  linguagem: string
  framework: string
  projetos: number
 }

 export const AppContexto = createContext<Contexto | null>(null)

function App() {
  // variaveis
  const nome: string = "leo"
  const idade: number = 19
  const estaTrabalhando: boolean = true

  // funcoes
  const mostraNome = (nome: string): string => {
    return `ola ${nome}`
  }

 // type
 const meuTexto: textoOuNulo = "tem texto"
 let meuSegundoTexto: textoOuNulo = null

  // meuSegundoTexto = "teste"

  const ValorDoContexto: Contexto = {
    linguagem: "JS",
    framework: "react",
    projetos: 5
  }

  return (
    <AppContexto.Provider value={ValorDoContexto}>
    <div className="App">
      <h1>typescript com react</h1>
      <h2>Nome: {nome}</h2>
      <h2>Idade: {idade}</h2>
      {estaTrabalhando && (<p>esta trabalhando</p>)}
      <h2>{mostraNome(nome)}</h2>
      <PrimeroComponente />

      <SegundoComponente nome='Leo'/>

      <Desestruturando 
      nome='leo2' 
      idade={23} 
      listaNotas={['fazer tal coisa', 'fazer outra coisa']} 
      categoria={Categoria.JS}/>
      <Desestruturando 
      nome='teste1' 
      idade={23} 
      listaNotas={['', 'fazer outra coisa']} 
      categoria={Categoria.TS}/>
      <State />
      {
        meuTexto &&
        <p>Teste1</p>
      }
      {
        meuSegundoTexto && 
        <p>teste2</p>
      }
      <Contexto />
      
    </div>
    </AppContexto.Provider>
  );
}

export default App;
