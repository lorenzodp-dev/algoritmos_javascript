process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"

import { writeFile } from 'fs/promises'

async function listarFeriados() {
    const resposta = await fetch("https://brasilapi.com.br/api/feriados/v1/2026")
    const convert = await resposta.json()

    await gerarMarkdown(convert)
    /*convert.forEach(dia => {
        console.log(`Comemoração: ${dia.name} | Dia: ${dia.date}`)
    })*/
}

async function gerarMarkdown(convert) {
    try {
        let markdown = "# Lista de Feriados de 2026 no Brasil\n\n"

        markdown += "| Dia | Comemoração |\n"
        markdown += "|---|---|\n"

        convert.forEach((dia) => {
            markdown += `| ${dia.date} | ${dia.name} |\n`
        })

        await writeFile("feriados.md", markdown, "utf-8", (error) => {
            console.error("Erro ao gerar arquivo!")
        })

        console.log("Arquivo feriados.md gerado com sucesso!")
    } catch (error) {
        console.error(error.message)
    }
}

listarFeriados()