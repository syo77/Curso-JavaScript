/*
Crie uma função que verifique se uma palavra é um palíndromo (ou seja, se ela pode ser lida da mesma forma de trás para frente). Exemplo: "arara", "radar".
*/

const lerlinha = require('readline')

const rl = lerlinha.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Digite uma palavra: ', (plv) => {

    var palavra = plv
    var plv_invertida = palavra.split("").reverse().join("")

    if (palavra === plv_invertida) {
        console.log(`A palavra "${palavra}" é um palíndromo!`)
    } else {
        console.log(`A palavra "${palavra}" não é um palíndromo!`)
    }

    rl.close()
})