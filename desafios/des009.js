/*
Crie uma função que calcule o n-ésimo número de Fibonacci. Lembre-se que a sequência de Fibonacci é formada pela soma dos dois números anteriores. Exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, ....
*/

const lerlinha = require('readline')

const rl = lerlinha.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Digite um número para a sequência de fibonacci: ', (num) => {   

    var numero = num
    let elm1 = 0
    let elm2 = 1
    let temp

    for (let i = 2; i <= numero; i++) {
        temp = elm1 + elm2
        elm1 = elm2
        elm2 = temp
    }

    console.log(`O "${numero}º" elemento da sequência de fibonacci é: ${elm2}`)

    rl.close()
})