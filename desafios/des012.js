/*
Faça um programa que calcule a média de uma lista de números fornecida pelo usuário. O número de elementos deve ser informado também.
*/

const lerlinha = require('readline')

const rl = lerlinha.createInterface({
    input: process.stdin,
    output: process.stdout
})

let numeros = []; // Array para armazenar os números fornecidos

function perguntarNumero() {
    rl.question('Digite um número (ou pressione Enter para finalizar): ', (input) => {
        if (input === '') {
            // Calcula a média
            let soma = 0;
            for (let i = 0; i < numeros.length; i++) {
                soma += numeros[i];
            }
            const media = soma / numeros.length;
            console.log(`A média dos números é: ${media}`);
            rl.close();
        } else {
            numeros.push(parseFloat(input)); // Adiciona o número ao array
            perguntarNumero(); // Chama a função novamente para continuar pedindo números
        }
    });
}

perguntarNumero(); // Inicia o processo