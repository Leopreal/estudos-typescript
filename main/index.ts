function greeting(name: string) {
    return `ola ${name}`
}


function pregreeting(f: (name: string) => string, usernamer: string) {
    console.log("preparando a funcao")

    const greet = f(usernamer)

    console.log(greet)

}
pregreeting(greeting, "Leo")


function Generic<T>(arr: T[]): T { // recebe um valor genérico 
    return arr[0]
}

console.log(Generic([1,2,3]))
console.log(Generic(["a", "b", "x"]))


function juncaoObjetos<U, T>(obj1 : U, obj2: T) {
    return {
        ...obj1,
        ...obj2
    }
}

const novoObjeto = juncaoObjetos({name: "leo"}, {idade: 19, profissao: "programador"})

console.log(novoObjeto)


function maiorNumero<T extends number | string>(a: T, b: T): T {
    let Maior: T

    if(+a > +b) {
        Maior = a
    } else {
        Maior = b
    }
    


    return Maior
}

console.log(maiorNumero(5,3))


function juntarNumerosEstrings<T>(arr1: T[], arr2: T[]) {
    return arr1.concat(arr2)
}

console.log(juntarNumerosEstrings([1,2,3], [4,5,6]))
console.log(juntarNumerosEstrings<number | string>([1,2,3], ["kjganga", "jgnaga"])) // faz com que se una dois tipos em arrays


// parametros default

function somaPadrao(n: number, m = 10) {
    return n + m
}

console.log(somaPadrao(10, 10))
console.log(somaPadrao(10, 2))


// tipo unknown

function fazAlgo(x: unknown) {
    if(Array.isArray(x)) {
        console.log(x.length)
    } else if(typeof x === "number") {
        console.log("X é um número")
    }
}

fazAlgo([376383,2,3])
fazAlgo(7528652)


// tipo never

function mensagemErro(msg: string): never {
    throw new Error(msg)
}

// mensagemErro("ocorreu um erro!")

// usando o rest

function somandoVariosValores(...n: number[]){
    return n.reduce((number, soma) => soma + number)
}


console.log(somandoVariosValores(1,2,3))


// destruction

function detalhesProdutos({name, preço}: {name: string, preço: number}):string{
    return `O produto ${name} custa ${preço}`
}

const camisa = {name: "Camisa", preço: 13.99}

console.log(detalhesProdutos(camisa))