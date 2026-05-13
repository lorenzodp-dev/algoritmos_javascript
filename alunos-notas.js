const alunos = ["Ana", "João", "Maria", "Aisha", "Edwin", "Artur", "Luis", "Jó"]
const notas = [8.5, 4.0, 7.0, 9.2, 5.5, 6.8, 10.0, 6.7]

const aprovados = []
const reprovados = []

alunos.forEach((aluno, index) => {
    if (notas[index] >= 7) {
        aprovados.push(aluno)
    } else {
        reprovados.push(aluno)
    }
})

console.log(`Alunos aprovados: \n- Total: ${aprovados.length}`)
aprovados.forEach((ap) => {
    console.log(` • ${ap}`)
})

console.log(`Reprovados: \n- Total: ${reprovados.length}`)
reprovados.forEach((rp) => {
    console.log(` • ${rp}`)
})