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
