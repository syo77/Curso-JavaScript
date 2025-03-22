const lerlinha = require('readline')

const rl = lerlinha.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Digite o número para fatorial: ', (fat) => {

    var fatorial = Number(fat)

    for (var i = fat-1; i > 1; i--) {
        fatorial *= i
    }

    console.log(`O número ${fat} fatorial é igual a: ${fatorial}`)

    rl.close()
})