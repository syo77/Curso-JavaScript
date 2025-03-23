/*
Crie uma função que conte o número de consoantes em uma palavra ou frase fornecida pelo usuário. A função deve ser sensível a maiúsculas e minúsculas.
*/

const lerlinha = require('readline')

const rl = lerlinha.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Digite uma palavra: ', (plv) => {
    let palavra_inteira = plv.trim()
    let arrpalavra = palavra_inteira.split(/\s+/)
    let qtd_consoantes = 0

    for (let i = 0; i < arrpalavra.length; i++) {
        for (let l = 0; l < arrpalavra[i].length; l++) {
            if (arrpalavra[i][l].match(/[a-zA-Z]/) && !'aeiouAEIOU'.includes(arrpalavra[i][l])) {
                // console.log(arrpalavra[i][l])
                qtd_consoantes += 1
            }
        }
    }
    
    // for (var i = 0; i < palavra.length; i++) {
    //     if (!'aeiouAEIOU'.includes(palavra[i])) {
    //         qtd_consoantes += 1
    //     }
    // }

    console.log(`A quantidade de consoantes é: ${qtd_consoantes}`)

    rl.close()
})