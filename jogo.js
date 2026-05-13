const readline = require("readline")
const rl = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout,
    }
)

const MIN = 0;
const MAX = 100;
const numeroAleatorio = Math.floor(Math.random() * 101);

let tentativas = 0;

function perguntar() {
    rl.question("Informe um número entre 0 e 100: ", (entrada) => {
        tentativas++

        const chute = Number(entrada) 

        if (!isNaN(chute) && entrada.trim() !== "") { 

            if (chute < MIN || chute > MAX) {
                console.log("Entrada inválida! O número deve estar entre 0 e 100.")
                return perguntar()
            }

            if (chute < numeroAleatorio) {
                console.log("Muito baixo! Tente novamente: ")
                perguntar()
            } else if (chute > numeroAleatorio) {
                console.log("Muito alto! Tente novamente: ")
                perguntar()
            } else {
                console.log(`Parabéns, você acertou o número! Tentativas: ${tentativas}!`)
                rl.close()
            }
        } else {
            console.log("Entrada inválida! Escreva apenas números válidos!")
            perguntar()
        }
    })
}

perguntar()