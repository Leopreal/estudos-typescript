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
// fusca.rodas = 5
