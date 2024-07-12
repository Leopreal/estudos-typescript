const x: number = 10;

const numeroparastring = x.toString();

const imprimirmeunumero: string = `Meu numero: ${numeroparastring}`;

console.log(imprimirmeunumero);

function Pessoa(pessoa1: {nome: string, idade: number}) {
    console.log("Nome do caba: " + pessoa1.nome)
    console.log("Idade do caba: " + pessoa1.idade)
}

    const InfPessoa = {nome: "Leo", idade: 19}

Pessoa(InfPessoa)

function advancedGreeting(firstname: string, lastname?: string){
    if(lastname !== undefined) {
        return `olá ${firstname} ${lastname}`
    }
    return `ola ${firstname}`
}

console.log(advancedGreeting("Leo","Pernomian"))

// Union type

function showBalance(balance: string | number) {
    console.log(`o balanço é ${balance}`)
}

showBalance(500)
showBalance("hibgsauogb")


function saudacao(saud: boolean | string) {
    if(typeof saud === "boolean"){
        console.log("esta saudação é um booleano")
    } else if(typeof saud === "string") {
        console.log("esta saudacao é uma string")
    }
}

saudacao(true)
saudacao("jgknagja")


// type alias

type ID = string | number

function identificacao(id: ID) {
    console.log(`o id é ${id}`)
}

identificacao(72562)
identificacao("augbaj")


interface Nome {
    firstName: string
    lastName: string
}

function showName(obj: Nome) {
    console.log(`${obj.firstName} ${obj.lastName}`)
}

const MeuNome: Nome = {
    firstName: "Leo",
    lastName: "Pernomian"
}

showName(MeuNome)


function showDirections(directions: "right" | "left") { // USADO PARA RESTRINGIR A VARIAVEL DE RECEBER APENAS DOIS VALORES
    console.log(`A direção é ${directions}`)
}

showDirections("right")

// non-null

const p = document.getElementById("algum-p")

console.log(p!.innerText) // força o elemento a ser validado


function operacoes(arr: number[], operacoes?: string | undefined) {
    if(operacoes) {
        if(operacoes === "soma") {
            const soma = arr.reduce((i, total) => i + total)
            console.log(soma)
        } else if(operacoes === "multi") {
            const multi = arr.reduce((i, total) => i * total)
            console.log(multi)
        }
    } else {
        console.log("operação nao definida")
    }
}

operacoes([1,2,3], "soma")
operacoes([1,4,3], "multi")


// istance of

class User {
    name

    constructor(name: string) {
        this.name = name
    }
}

class SuperUser extends User {
    constructor(name: string) {
        super(name) // envia o metodo para a classe pai
    }
}

const leo = new User("Leo")
const paulo = new SuperUser("Paulo")

console.log(leo)
console.log(paulo)

function Userdisplay(user: object) {
    if(user instanceof SuperUser) {
        console.log(`ola ${user.name} vc é um super usuario!`)
    } else if (user instanceof User) {
        console.log(`ola ${user.name} vc é um usuario comum`)
    }
}

Userdisplay(paulo)
Userdisplay(leo)


// desafio

function receberdados(star: number | boolean) {
    

    if (!star) {
        console.log("valor n encontrado ")
        return
    } 
    switch (star) {
        case 1: 
        console.log("voce deu 1") 
        break
        case 2: 
        console.log("voce deu 2") 
        break
        case 3:
        console.log("voce deu 3") 
        break
        case 4: 
        console.log("voce deu 4") 
        break
        case 5: 
        console.log("voce deu 5") 
        break
    }
    
}
receberdados(false)
receberdados(1)


function troca(a: number,b: number) {
    let x: number
    let y: number

    x = a
    y = b

    a = y
    b = x

    console.log(a,b)
}

troca(10,20)






