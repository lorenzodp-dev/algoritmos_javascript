const arrayProdutos = [
    "Camisa Polo",
    "Garrafa Térmica",
    "Baralho COPAG",
    "Caderno de couro",
    "Teclado de escritório",
];

for(let item = 0; item < arrayProdutos.length; item++) {
    console.log(`${item} - ${arrayProdutos[item]}`)
}

arrayProdutos.forEach((produto, indice) => {
    console.log(`${indice} - ${produto}`)
})

console.log(`Total de produtos: ${arrayProdutos.length}`)