function fibonacci(n) {
    if (n === 0) {
        return 0
    }

    if (n === 1) {
        return 1
    }

    if (n >= 2) {
        return fibonacci(n-1) + fibonacci(n-2)
    }
}

const lerlinha = require('readline')

const rl = lerlinha.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Número para sequência de fibonacci: ', (num) => {   

    console.log(`O "${num}º" elemento da sequência de fibonacci é: ${fibonacci(num)}`)

    rl.close()
})