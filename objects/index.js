"use strict";
// 1 - object literals
function mostrarProduto(produto) {
    if (produto.estaDisponivel === true) {
        console.log(`O seu produto se chama ${produto.nome} e custa R$${produto.preco}`);
        console.log("produto disponivel");
    }
    else {
        console.log("produto nao disponivel");
    }
}
const camiseta = {
    nome: "camiseta",
    preco: 19.99,
    estaDisponivel: true,
};
mostrarProduto(camiseta);
mostrarProduto({ nome: "tenis", preco: 190, estaDisponivel: false });
function mostrarUsuarios(usuario) {
    console.log(`o usuario tem este email: ${usuario.email} e nao tem chave`);
    if (usuario.chave) {
        console.log(`o usuario tem chave de: ${usuario.chave}`);
    }
}
const usuario1 = {
    email: "leo@email.com",
};
const usuario2 = {
    email: "jgnsjgs@on3n.com",
    chave: "adm"
};
mostrarUsuarios(usuario1);
mostrarUsuarios(usuario2);
const fusca = {
    marca: "VW",
    rodas: 4
};
console.log(fusca);
const coords = {
    x: 15
};
coords.y = 10;
console.log(coords);
const leo = {
    nome: "leo",
    idade: 19
};
const superLeo = {
    nome: "super leo",
    idade: 19,
    superPoderes: ["telepatia", "super força"]
};
console.log(leo);
console.log(superLeo);
console.log(superLeo.superPoderes[1]);
const leonardo = {
    nome: "leo",
    tipo: "Doze",
    calibre: 12
};
console.log(leonardo);
// 7 - read-only com arrays
let meuArray = ["tomate", "laranja", "uva"]; // read-only com array somente de strings
meuArray.forEach((item) => {
    console.log("Fruta: " + item);
});
meuArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(meuArray);
const teste = [1, 2, 3];
console.log(teste);
const alguem = ["leo", 19];
console.log(alguem[0]);
// read-only com tuplas
function mostrarValores(numeros) {
    // numeros[0] = 10
    console.log(numeros[0]);
    console.log(numeros[1]);
}
mostrarValores([1, 2]);
