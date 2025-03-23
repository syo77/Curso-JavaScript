/*
Crie uma função que multiplique duas matrizes 2x2 (duas matrizes com 2 linhas e 2 colunas).
*/

const lerlinha = require('readline')

const rl = lerlinha.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Digite os elementos da matriz 1: ', (mtz1) => {   

    let matriz1 = mtz1.split(" ")
    console.log(matriz1)

    rl.question('Digite os elementos da matriz 2: ', (mtz2) => {
        
        let matriz2 = mtz2.split(" ")
        console.log(matriz2)

        let elm1 = Number(matriz1[0])*Number(matriz2[0]) + Number(matriz1[1])*Number(matriz2[2])
        let elm2 = Number(matriz1[0])*Number(matriz2[1]) + Number(matriz1[1])*Number(matriz2[3])

        let elm3 = Number(matriz1[2])*Number(matriz2[0]) + Number(matriz1[3])*Number(matriz2[2])
        let elm4 = Number(matriz1[2])*Number(matriz2[1]) + Number(matriz1[3])*Number(matriz2[3])

        let matriz_final = [elm1, elm2, elm3, elm4]

        console.log(`A matriz final é: ${matriz_final}`)

        rl.close()
    })

})




