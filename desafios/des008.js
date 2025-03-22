/*
Faça um programa que receba um número inteiro e calcule a soma de todos os números ÍMPARES de 1 até esse número.
*/

const lerlinha = require('readline')

const rl = lerlinha.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Digite um número: ', (num) => {   

    var numero = Number(num)
    var soma = 0
    var string_soma = `A soma é:`

    for (var i = 1; i <= numero; i++) {
        if (i % 2 !== 0) {
            soma += i
            if (i === 1) {
                string_soma += ` ${i}`
            }
            else if (i <= numero) {
                string_soma += ` + ${i}`
            }
        }
    }
    console.log(string_soma)
    console.log(`O valor final da soma é: ${soma}`)

    rl.close()
})