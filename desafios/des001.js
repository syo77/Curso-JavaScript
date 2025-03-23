const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o primeiro número: ', (numero1) => {

    let num1 = Number(numero1)

    rl.question('Digite o segundo número: ', (numero2) => {

        let num2 = Number(numero2)
        soma = num1 + num2

        console.log(`\nO primeiro número é: ${num1}\n`)
        console.log(`O segundo número é: ${num2}\n`)
        console.log(`A soma entre eles é igual a ${soma}\n`)

        rl.close();

    });
});





// rl.question('Digite seu nome: ', (nome) => {
//     console.log(`Olá, ${nome}!`);
//     rl.close();
// });

// var numero1 = prompt('Digite o primeiro número')
// var numero2 = prompt('Digite o segundo número')
// soma = numero1 + numero2

// console.log(soma)