/*
Classificação de Idades
Objetivo:
Criar um algoritmo que receba um array de pessoas e suas idades,
separando-as em maiores de idade (>= 18) e menores de idade (< 18).
Calcular também a média das idades de cada grupo.
Instruções:
 - Declare um array com nomes de pessoas e outro com suas idades.
 - Percorra os arrays com um laço for ou forEach e verifique a idade de cada pessoa.
 - Separe em dois arrays distintos e calcule a soma das idades de cada grupo.
 - De cada grupo, exiba os nomes das pessoas, o total de pessoas e a média de idade.
*/
 
const pessoas = ["Thorfinn", "Tauan", "Enzo", "João", "Lázaro", "Lorenzo"]
const idades = [22, 17, 50, 10, 67, 18]

let somaMaior = 0
let somaMenor = 0

const menor = []
const maior = []

idades.forEach((idade, indice) => {
    if (idade>=18) {
        maior.push(pessoas[indice])
        somaMaior += idade

    } else {
        menor.push(pessoas[indice])
        somaMenor += idade
    }
})

const mediaMenores = somaMenor / menor.length
const mediaMaiores = somaMaior / maior.length

console.log(`\n===== MAIORES DE IDADE =====\n- Soma das idades: ${somaMaior}\n- Pessoas: ${maior}\n- Média das idades: ${mediaMaiores}\n- Total de pessoas: ${maior.length}`)
console.log(`\n===== MENORES DE IDADE =====\n- Soma das idades: ${somaMenor}\n- Pessoas: ${menor}\n- Média das idades: ${mediaMenores}\n- Total de pessoas: ${menor.length}\n`)