"use strict";
// constrainst em generic
function mostrarNomeDoProduo(obj) {
    return `O nome do produto é ${obj.nome}`;
}
const primeiroProd = { nome: "teste", preco: 19.99 };
// ignora todos as outras propriedades e só exibe a obrigatoria
console.log(mostrarNomeDoProduo(primeiroProd));
const carro1 = { nome: "Pegout", rodas: 4, motor: 1.0, cor: "verde" };
const caneta1 = { nome: "minha caneta", rodas: false, motor: false, cor: "azul" };
console.log(carro1);
console.log(caneta1);
// type params
function pegarChave(obj, key) {
    // return `A chave ${key} está presente no objeto e tem valor de ${obj[key]}`
}
const servidor = {
    hr: '2TB',
    ram: '32GB'
};
console.log(pegarChave(servidor, 'ram'));
function mostrarNome(obj, nome) {
    return `${obj[nome]}`;
}
const leozik = {
    nome: 'Leo',
    idade: 19,
    temCNH: true
};
console.log(mostrarNome(leozik, 'nome'));
// typeof types
const qualquerNome = 'leo';
const qualquerNome2 = 'mateus';
const qualquerNome3 = 'lucas';
const novoCaminhao = {
    km: 1000,
    kg: 1000,
    descrisao: 'teste'
};
function exibirKM(km) {
    console.log(`o caminhao tem ${km} Km`);
}
exibirKM(novoCaminhao.km);
const minhaVar = 16;
const testando = "text";
