import React from 'react';
import './App.css';
import PrimeroComponente from './components/PrimeiroComponente'

function App() {
  // variaveis
  const nome: string = "leo"
  const idade: number = 19
  const estaTrabalhando: boolean = true

  // funcoes
  const mostraNome = (nome: string): string => {
    return `ola ${nome}`
  }

  return (
    <div className="App">
      <h1>typescript com react</h1>
      <h2>Nome: {nome}</h2>
      <h2>Idade: {idade}</h2>
      {estaTrabalhando && (<p>esta trabalhando</p>)}
      <h2>{mostraNome(nome)}</h2>
      <PrimeroComponente />
    </div>
  );
}

export default App;
