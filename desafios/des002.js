const lerlinha = require('readline')

const rl = lerlinha.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Digite o número: ', (numero) => {
    var num = numero
    var parimpar = ''

    if (num % 2 === 0) {
        parimpar = 'par'
    } else {
        parimpar = 'ímpar'
    }

    console.log(`O número é ${parimpar}`)

    rl.close()
})