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
