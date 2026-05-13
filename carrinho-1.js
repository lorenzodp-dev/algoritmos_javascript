function calcularPedido(valorPedido, percentualCupom, valorFrete) {
    if (percentualCupom < 0 || percentualCupom > 100) {
        console.log("Erro: o percentual do cupom deve estar entre 0 e 100.")
        return
    }

    const desconto = valorPedido * (percentualCupom / 100)
    const valorFinal = (valorPedido - desconto) + valorFrete

    return {
        valorFinal,
        desconto
    }
}

const pedidoOriginal = 450.89
const cupom = 15
const frete = 0

const resultado = calcularPedido(pedidoOriginal, cupom, frete)

const { valorFinal, desconto } = resultado

console.log(`=== Resumo do Pedido ===`)
console.log(`Valor original:  R$ ${pedidoOriginal.toFixed(2)}`)
console.log(`Cupom (${cupom}%):    - R$ ${desconto.toFixed(2)}`)
console.log(`Valor final:     R$ ${valorFinal.toFixed(2)}`)