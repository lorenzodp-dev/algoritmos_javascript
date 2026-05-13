// Variáveis em JS

const nome = "Luís"         // Não altera de valor
let cidade = "Limeira"      // Pode alterar de valor
cidade = "Campinas"
// nome = "Aisha" => erro!

const idade = 25
let situacao = true
let resultado = null
let salario = 1525.90
var endereco = "Rua tal"

// console.log(typeof nome)
// console.log(typeof cidade)
// console.log(typeof idade)
// console.log(typeof situacao)
// console.log(typeof resultado)
// console.log(typeof salario)
// console.log(typeof cargo)

/*
JavaScript usa TIPAGEM DINÂMICA => tipo de uma variável = valor que ela recebe
                                => É reconhecido nativamente pelo navegador
                                => É interpretado (interpretador: front é o navegador e back é o node.js)
                                => Convenção de escrita:
                                        - camelCase: variáveis, objeto e funções                // nome, nomeAluno, nomeDoGrupo, nomeDoGrupoAmigo, nomeDoGrupoAmigoEInimigo
                                        - PascalCase: classes e métodos (POO)                   // MinhaClasse, FazerAlgumaCoisa
                                        - kebab-case: nomes de arquivo (exceto para classes)    // meu-arquivo.js, minhas-anotacoes.docx
                                        - UPPERCASE: usado para constantes                      // PI, JSON




*/


function parImparTernario(numero) {
    const restoDaDivisao = numero % 2

    let retorno = ``

    restoDaDivisao == 0
    restoDaDivisao ? retorno = `O número ${numero} é par` : retorno = `O número ${numero} é ímpar`

    return retorno
};

// console.log(parImparTernario(48))

function tabuada() {
    for (let n = 1; n < 11; n++) {
        console.log(`\nTabuada do ${n} \n`)
        for (let y = 1; y < 11; y++) {
            let result = y * n
            // console.log(n + "x" + y + "=", result) // Concatenação
            console.log(`${n} x ${y} = ${result}`) // Interpolação
        }
    }
};

tabuada()