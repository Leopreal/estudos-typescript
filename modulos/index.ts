import FunçãoGreeting from "./greeting";

FunçãoGreeting()

// import de variaveis

import { x } from "./variavel";

console.log(x)

// multiplas exportações 

import { xix } from "./multiplas";
import { y } from "./multiplas";

import { minhaFunção } from "./multiplas";

console.log(xix, y)
minhaFunção()

// alias

import { algumNome as nome } from "./mudarnome";

console.log(nome)

// importar tudo

import * as numeros from './numeros'

console.log(numeros)

const numero1 = numeros.n1

console.log(numero1)

// importando tipos

import { User } from "./meutipo";    

class Pedreiro implements User {
    nome: string;
    senha: string;

    constructor(nome: string, senha: string) {
        this.nome = nome
        this.senha = senha
    }
}

const joao = new Pedreiro("Joao","1d113")

console.log(joao)
