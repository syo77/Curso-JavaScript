/*
Faça um programa que calcule a média de uma lista de números fornecida pelo usuário. O número de elementos deve ser informado também.
*/

const lerlinha = require('readline')

const rl = lerlinha.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Digite uma lista de números (separados por espaço): ', (lst) => {
 
    let lista = lst.split(" ")
    let soma = 0
    for (let i = 0; i < lista.length; i++) {
        soma += Number(lista[i])
    }
    let media = soma / lista.length

    console.log(`Os números fornecidos foram: ${lista}`)
    console.log(`A média entre eles é igual a: ${media}`)

    rl.close()

});
