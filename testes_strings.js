const lerlinha = require('readline')

const rl = lerlinha.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Digite uma palavra: ', (plv) => {

    var palavra = plv
    console.log(`Palavra: ${palavra}`)
    var plv_split = palavra.split("")
    console.log(`Palavra separada em array: ${plv_split}`)
    var plv_invertida = plv_split.reverse()
    console.log(`Palavra invertida: ${plv_invertida}`)
    var plv_juntada = plv_invertida.join("")
    console.log(`Palavra juntada novamente: ${plv_juntada}`)    

    rl.close()
})