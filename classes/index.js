"use strict";
// CLASSES
class User {
}
const leon = new User();
console.log(leon);
leon.idade = 19;
console.log(leon);
// constructor
class NovoUsuario {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
const joao = new NovoUsuario("joao", 18);
console.log(joao);
// usando o readonly
class Carro {
    constructor(nome) {
        this.rodas = 4;
        this.nome = nome;
    }
}
const gol = new Carro("GOl");
console.log(gol);
// gol.rodas = 5
// heranças e super
class Maquinas {
    constructor(nome) {
        this.nome = nome;
    }
}
const trator = new Maquinas("trator");
class MaquinaMatadora extends Maquinas {
    constructor(nome, armas) {
        super(nome);
        this.armas = armas;
    }
}
const destruidos = new MaquinaMatadora("Destruidor", 4);
console.log(trator);
console.log(destruidos);
class anao {
    constructor(nome) {
        this.nome = nome;
    }
    saudacao() {
        console.log("executando um metodo em uma classe");
    }
}
const jimmy = new anao("Jimmy");
console.log(jimmy.nome);
jimmy.saudacao();
// metodo this
class caminhao {
    constructor(modelo, cavalos) {
        this.modelo = modelo;
        this.cavalos = cavalos;
    }
    exibirDetalhes() {
        console.log(`o modelo do caminhao é ${this.modelo} e ele tem ${this.cavalos}`);
    }
}
const caminhao1 = new caminhao("Volvo", 500);
const caminhao2 = new caminhao("Mercedes", 600);
caminhao1.exibirDetalhes();
caminhao2.exibirDetalhes();
