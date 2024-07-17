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


// type params

function pegarChave<T, K extends keyof T>(obj: T, key: K) {
    // return `A chave ${key} está presente no objeto e tem valor de ${obj[key]}`
}

const servidor = {
    hr: '2TB',
    ram: '32GB'
}

console.log(pegarChave(servidor, 'ram'))

// keyof type operator

type Pessoa = {nome: string, idade: number, temCNH: boolean}

type P = keyof Pessoa // representa todas as chaves do obj

function mostrarNome(obj: Pessoa, nome: P): string { // o nome puxa o tipo do tipo pessoa
    return `${obj[nome]}`
}

const leozik: Pessoa = {
    nome: 'Leo',
    idade: 19,
    temCNH: true
}

console.log(mostrarNome(leozik, 'nome'))

// typeof types

const qualquerNome: string = 'leo'

const qualquerNome2: typeof qualquerNome = 'mateus'

const qualquerNome3: typeof qualquerNome2 = 'lucas'


// indexed acess type

type Caminhao = {km: number, kg: number, descrisao: string}


type km = Caminhao['km'] // representa apenas uma acha ao obj

const novoCaminhao: Caminhao = {
    km: 1000,
    kg: 1000,
    descrisao: 'teste'
}

function exibirKM(km: km) {
    console.log(`o caminhao tem ${km} Km`)
}

exibirKM(novoCaminhao.km)


// condicional types

interface A {}

interface B extends A {}

type meuTipo = B extends A ? number : string

const minhaVar: meuTipo = 16
// const minhaVar2: meuTipo = 'bafa'


// template literal types

type teste1 = "text"

type outroTipo = teste1


const testando: outroTipo = "text"



