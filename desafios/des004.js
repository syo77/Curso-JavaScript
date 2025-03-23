const lerlinha = require('readline')

const rl = lerlinha.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Digite a palavra desejada: ', (plv) => {
    let palavra = plv
    let qtd_vogais = 0

    for (let i = 0; i < palavra.length; i++) {
        if ('aeiouAEIOU'.includes(palavra[i])) {
            qtd_vogais += 1
        }
    }
    console.log(`A quantidade de vogais é: ${qtd_vogais}`)
    rl.close()
})