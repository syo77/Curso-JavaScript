const lerlinha = require('readline')

const rl = lerlinha.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Digite a sua mensagem: ', (msg) => {   

    let mensagem = msg.split(" ")
    console.log(`Na sua mensagem, a quantidade de palavras digitadas é igual a: " ${mensagem.length} "`)

    rl.close()
})