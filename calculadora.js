const readLine = require("readline")

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function menu() {
    rl.question("=== Bem-vindo à calculadora com JavaScript! ===\n O que deseja?\n (1) Calcular \n (2) Sair \n", (entrada) => {
            const num = Number(entrada)

            switch (num) {
                case 1:
                    calcular()
                    break

                case 2:
                    console.log("\nAté mais!\n")
                    rl.close()
                    break

                default:
                    console.log("\nOpção inválida!\n")
                    menu()
            }
        }
    )
}

function calcular() {
    rl.question("\nDigite o primeiro número: ", (n1) => {
        rl.question("Digite a operação (+, -, x, /): ", (op) => {
            rl.question("Digite o segundo número: ", (n2) => {

                const num1 = Number(n1)
                const num2 = Number(n2)

                if (isNaN(num1) || isNaN(num2)) {
                    console.log("\nDigite apenas números!\n")
                    return menu()
                }

                let resultado

                switch (op) {
                    case "x":
                        resultado = num1 * num2
                        break

                    case "+":
                        resultado = num1 + num2
                        break

                    case "-":
                        resultado = num1 - num2
                        break

                    case "/":
                        if (num2 === 0) {
                            console.log("\nDivisão por zero não é permitida!\n")
                            return menu()
                        }
                        resultado = num1 / num2
                        break

                    default:
                        console.log("\nOperação inválida!\n")
                        return menu()
                }

                console.log(`\nResultado: ${resultado}`)
                menu()
            })
        })
    })
}

menu()