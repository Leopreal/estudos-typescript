"use strict";
const x = 10;
const numeroparastring = x.toString();
const imprimirmeunumero = `Meu numero: ${numeroparastring}`;
console.log(imprimirmeunumero);
function Pessoa(pessoa1) {
    console.log("Nome do caba: " + pessoa1.nome);
    console.log("Idade do caba: " + pessoa1.idade);
}
const InfPessoa = { nome: "Leo", idade: 19 };
Pessoa(InfPessoa);
function advancedGreeting(firstname, lastname) {
    if (lastname !== undefined) {
        return `olá ${firstname} ${lastname}`;
    }
    return `ola ${firstname}`;
}
console.log(advancedGreeting("Leo", "Pernomian"));
// Union type
function showBalance(balance) {
    console.log(`o balanço é ${balance}`);
}
showBalance(500);
showBalance("hibgsauogb");
function saudacao(saud) {
    if (typeof saud === "boolean") {
        console.log("esta saudação é um booleano");
    }
    else if (typeof saud === "string") {
        console.log("esta saudacao é uma string");
    }
}
saudacao(true);
saudacao("jgknagja");
function identificacao(id) {
    console.log(`o id é ${id}`);
}
identificacao(72562);
identificacao("augbaj");
function showName(obj) {
    console.log(`${obj.firstName} ${obj.lastName}`);
}
const MeuNome = {
    firstName: "Leo",
    lastName: "Pernomian"
};
showName(MeuNome);
function showDirections(directions) {
    console.log(`A direção é ${directions}`);
}
showDirections("right");
// non-null
const p = document.getElementById("algum-p");
console.log(p.innerText); // força o elemento a ser validado
function operacoes(arr, operacoes) {
    if (operacoes) {
        if (operacoes === "soma") {
            const soma = arr.reduce((i, total) => i + total);
            console.log(soma);
        }
        else if (operacoes === "multi") {
            const multi = arr.reduce((i, total) => i * total);
            console.log(multi);
        }
    }
    else {
        console.log("operação nao definida");
    }
}
operacoes([1, 2, 3], "soma");
operacoes([1, 4, 3], "multi");
// istance of
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name); // envia o metodo para a classe pai
    }
}
const leo = new User("Leo");
const paulo = new SuperUser("Paulo");
console.log(leo);
console.log(paulo);
function Userdisplay(user) {
    if (user instanceof SuperUser) {
        console.log(`ola ${user.name} vc é um super usuario!`);
    }
    else if (user instanceof User) {
        console.log(`ola ${user.name} vc é um usuario comum`);
    }
}
Userdisplay(paulo);
Userdisplay(leo);
// desafio
function receberdados(star) {
    if (!star) {
        console.log("valor n encontrado ");
        return;
    }
    switch (star) {
        case 1:
            console.log("voce deu 1");
            break;
        case 2:
            console.log("voce deu 2");
            break;
        case 3:
            console.log("voce deu 3");
            break;
        case 4:
            console.log("voce deu 4");
            break;
        case 5:
            console.log("voce deu 5");
            break;
    }
}
receberdados(false);
receberdados(1);
function troca(a, b) {
    let x;
    let y;
    x = a;
    y = b;
    a = y;
    b = x;
    console.log(a, b);
}
troca(10, 20);
