"use strict";
function greeting(name) {
    return `ola ${name}`;
}
function pregreeting(f, usernamer) {
    console.log("preparando a funcao");
    const greet = f(usernamer);
    console.log(greet);
}
pregreeting(greeting, "Leo");
function Generic(arr) {
    return arr[0];
}
console.log(Generic([1, 2, 3]));
console.log(Generic(["a", "b", "x"]));
function juncaoObjetos(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const novoObjeto = juncaoObjetos({ name: "leo" }, { idade: 19, profissao: "programador" });
console.log(novoObjeto);
function maiorNumero(a, b) {
    let Maior;
    if (+a > +b) {
        Maior = a;
    }
    else {
        Maior = b;
    }
    return Maior;
}
console.log(maiorNumero(5, 3));
function juntarNumerosEstrings(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(juntarNumerosEstrings([1, 2, 3], [4, 5, 6]));
console.log(juntarNumerosEstrings([1, 2, 3], ["kjganga", "jgnaga"])); // faz com que se una dois tipos em arrays
// parametros default
function somaPadrao(n, m = 10) {
    return n + m;
}
console.log(somaPadrao(10, 10));
console.log(somaPadrao(10, 2));
// tipo unknown
function fazAlgo(x) {
    if (Array.isArray(x)) {
        console.log(x.length);
    }
    else if (typeof x === "number") {
        console.log("X é um número");
    }
}
fazAlgo([376383, 2, 3]);
fazAlgo(7528652);
// tipo never
function mensagemErro(msg) {
    throw new Error(msg);
}
// mensagemErro("ocorreu um erro!")
// usando o rest
function somandoVariosValores(...n) {
    return n.reduce((number, soma) => soma + number);
}
console.log(somandoVariosValores(1, 2, 3));
// destruction
function detalhesProdutos({ name, preço }) {
    return `O produto ${name} custa ${preço}`;
}
const camisa = { name: "Camisa", preço: 13.99 };
console.log(detalhesProdutos(camisa));
