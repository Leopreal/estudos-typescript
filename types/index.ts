// constrainst em generic

function mostrarNomeDoProduo<T extends {nome: string}>(obj: T) {
    return `O nome do produto é ${obj.nome}`
}

const primeiroProd = {nome: "teste", preco: 19.99}
// ignora todos as outras propriedades e só exibe a obrigatoria

console.log(mostrarNomeDoProduo(primeiroProd))


// generics com interfaces

interface meuObjeto<generico1, generico2, generico3> {
    nome: string,
    rodas: generico1,
    motor: generico2,
    cor: generico3
}

type carro = meuObjeto<number, number, string>
type caneta = meuObjeto<boolean, boolean, string>

const carro1: carro = {nome: "Pegout", rodas: 4, motor: 1.0, cor: "verde"}
const caneta1: caneta = {nome: "minha caneta", rodas: false, motor: false, cor: "azul"}

console.log(carro1);
console.log(caneta1)
