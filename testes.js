let numero1 = prompt('Digite o primeiro número')
let numero2 = prompt('Digite o segundo número')

if (numero1 == '') {
    numero1 = 0
}

if (numero2 == '') {
    numero2 = 0
}

let soma = Number(numero1) + Number(numero2)

window.document.getElementById('numero1').innerHTML = `O primeiro número é: ${numero1}`
let paragrafo_num2 = window.document.getElementById('numero2')
paragrafo_num2.innerHTML = `O segundo número é: ${numero2}`
let paragrafo_soma = window.document.getElementById('soma')
paragrafo_soma.innerHTML = `A soma entre eles é: ${soma}`
