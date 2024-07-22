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
    // readonly rodas = 4
    constructor(nome) {
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
// getters
class pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    get mostrarNome() {
        return this.nome + " " + this.sobrenome;
    }
}
//get e set não precisam utilizar constructor
const leonardoPernomian = new pessoa("Leonardo", "Pernomian");
console.log(leonardoPernomian.nome);
console.log(leonardoPernomian.mostrarNome);
// setters
class Coordenadas {
    set fillx(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log("x inserido com sucesso");
    }
    set filly(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
        console.log("y inserido com sucesso");
    }
    get pegarcoord() {
        return `X: ${this.x} Y: ${this.y}`;
    }
}
const minhaCoord = new Coordenadas();
minhaCoord.fillx = 30;
minhaCoord.filly = 10;
console.log(minhaCoord);
console.log(minhaCoord.pegarcoord);
class blogPost {
    constructor(title) {
        this.title = title;
    }
    TituloItem() {
        return `o titulo do post é ${this.title}`;
    }
}
const novoPost = new blogPost("ola");
console.log(novoPost.TituloItem());
// override
class Base {
    algumMetodo() {
        console.log("teste");
    }
}
class Novo extends Base {
    algumMetodo() {
        console.log("testando 2");
    }
}
const meuObjeto = new Novo();
meuObjeto.algumMetodo();
// visibilidade
// PUBLIC: PODE ACESSADO DE QUALQUER LUGAR
// PROTECTED: ACESSIVAL APENAS A SUBCLASSE DA CLASSE DO METODO
// PRIVATE: APENAS A CLASSE QUE DECLAROU O METODO PODE ACESSAR
// public
class C {
    constructor() {
        this.x = 10;
    }
}
class D extends C {
}
const imprimaC = new C();
const imprimaD = new D();
console.log(imprimaC.x);
console.log(imprimaD.x);
// protect
class A {
    constructor() {
        this.x = 10;
    }
    MetodoProtegido() {
        console.log("este é um metodo protegido");
    }
}
class B extends A {
    mostraX() {
        console.log(`o x é ${this.x}`);
    }
    MostraMetodoProtegido() {
        this.MetodoProtegido();
    }
}
const InstanciaX = new B();
// console.log(mostraX.x)
InstanciaX.mostraX();
InstanciaX.MostraMetodoProtegido();
// privado
class ClassePrivada {
    constructor() {
        this.nome = "Leozik";
    }
    mostrarNome() {
        return this.nome;
    }
    MetodoPrivado() {
        console.log("este é um metodo privado que só pode ser acessado por outro metodo da classe");
    }
    MostrarMetodoPrivado() {
        this.MetodoPrivado();
    }
}
const TestePrivado = new ClassePrivada();
console.log(TestePrivado.mostrarNome());
TestePrivado.MostrarMetodoPrivado();
// class classeTeste extends ClassePrivada {
//     mostrarAlgo() {
//         this.MetodoPrivado()
//     }
// }
// static members
class StaticMembers {
    static StaticMethod() {
        console.log("teste com metodo");
    }
}
StaticMembers.prop = "teste1";
console.log(StaticMembers.prop);
StaticMembers.StaticMethod();
// generic class
class ClasseGenerica {
    constructor(primeiro, segundo) {
        this.primeiro = primeiro;
        this.segundo = segundo;
    }
    get MostrarPrimerio() {
        return `o primeiro é ${this.primeiro}`;
    }
}
const NovoTeste = new ClasseGenerica("caixa", "surpresa");
console.log(NovoTeste);
console.log(NovoTeste.MostrarPrimerio);
// parameters propriedades
class PropriedadesComParametros {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.nome = nome;
        this.idade = idade;
    }
    get mostrarIdade() {
        return this.idade;
    }
}
const novaPessoa = new PropriedadesComParametros("Leo", 19);
console.log(novaPessoa.nome);
// console.log(novaPessoa.idade)
console.log(novaPessoa.mostrarIdade);
// generic classes
const Classe1 = class {
    constructor(nome) {
        this.nome = nome;
    }
};
const pessoas = new Classe1("leo");
console.log(pessoas);
// abstract class
class ClasseAbstrata {
}
// const novoObj = new ClasseAbstrata()
class ExemploAbstrato extends ClasseAbstrata {
    constructor(nome) {
        super();
        this.nome = nome;
    }
    mostrarNome() {
        console.log(this.nome);
    }
}
const novoExemploAbstrato = new ExemploAbstrato("leo");
novoExemploAbstrato.mostrarNome();
