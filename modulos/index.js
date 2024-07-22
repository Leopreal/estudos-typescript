"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const greeting_1 = __importDefault(require("./greeting"));
(0, greeting_1.default)();
// import de variaveis
const variavel_1 = require("./variavel");
console.log(variavel_1.x);
// multiplas exportações 
const multiplas_1 = require("./multiplas");
const multiplas_2 = require("./multiplas");
const multiplas_3 = require("./multiplas");
console.log(multiplas_1.xix, multiplas_2.y);
(0, multiplas_3.minhaFunção)();
// alias
const mudarnome_1 = require("./mudarnome");
console.log(mudarnome_1.algumNome);
// importar tudo
const numeros = __importStar(require("./numeros"));
console.log(numeros);
const numero1 = numeros.n1;
console.log(numero1);
class Pedreiro {
    constructor(nome, senha) {
        this.nome = nome;
        this.senha = senha;
    }
}
const joao = new Pedreiro("Joao", "1d113");
console.log(joao);
