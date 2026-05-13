const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function menuPrincipal() {
    rl.question("\nO que queres fazer? \n 1 - Calcular \n 2 - Sair\n", (entrada) => {
        switch (entrada.trim()) {
            case "1":
                console.log("\nChamando o sistema para o cálculo...\n");
                coletaCalc();
                break;
            case "2":
                console.log("\nAté mais!\n");
                rl.close();
                break;
            default:
                console.log("Erro! Digite novamente.\n");
                menuPrincipal();
        }
    });
}

function coletaCalc() {
    rl.question("Qual o valor do produto? : ", (valor) => {
        rl.question("Qual o valor a ser descontado (em %)? : ", (desconto) => {
            
            const v = parseFloat(valor);
            const p = parseFloat(desconto);

            if (isNaN(v) || isNaN(p)) {
                console.log("\n[!] Por favor, digite números válidos.");
            } else if (p <= 100 && v >= 1 && p >= 1){
                const valorDescontado = (v * p) / 100;
                const valorFinal = v - valorDescontado;

                console.log(`\n------------------------------\nDesconto: R$ ${valorDescontado.toFixed(2)}\nValor final: R$ ${valorFinal.toFixed(2)}\n------------------------------`);
            } else {
                console.log("Valor errado!")
                coletaCalc()
            }

            return menuPrincipal(); 
        });
    });
}

menuPrincipal();