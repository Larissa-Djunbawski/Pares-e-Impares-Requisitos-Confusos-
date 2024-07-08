const prompt = require('prompt-sync')();

const parOuImpar = require("./index.js")

const numero = +(prompt("Digite um número para verificar se o mesmo é par ou impar"))

let retorno = parOuImpar.ParImpar(numero)

console.log(retorno)
