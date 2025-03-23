/*
Crie uma função que converta uma temperatura em Celsius para Fahrenheit. A fórmula para conversão é:
Fahrenheit = (Celsius * 9/5) + 32
*/

const lerlinha = require('readline')

const rl = lerlinha.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Digite um número em graus celsius: ', (celsius) => {   

    let fahrenheit = (Number(celsius) * (9/5)) + 32

    console.log(`Resposta: ${celsius}° Celsius são aproximadamente ${fahrenheit}° Fahrenheit`)


    rl.close()
})
