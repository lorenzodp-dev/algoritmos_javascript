process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"

import { writeFile } from 'fs/promises'

async function listarBancos() {
    try {
        const resposta = await fetch("https://brasilapi.com.br/api/banks/v1")
        const listaDeBancos = await resposta.json()

        await gerarMarkdown(listaDeBancos)

        console.log("Lista processada com sucesso!")
    } catch (error) {
        console.error(error.message)
    }
}

async function gerarMarkdown(listaDeBancos) {
    try {
        let markdown = "# Lista de Bancos Presentes no Brasil\n\n"

        markdown += "| Código | Nome |\n"
        markdown += "|---|---|\n"

        listaDeBancos.forEach((objBanco) => {
            markdown += `| ${objBanco.code || "-"} | ${objBanco.name} |\n`
        })

        await writeFile("bancos.md", markdown, "utf-8", (error) => {
            console.error("Erro ao gerar arquivo!")
        })

        console.log("Arquivo bancos.md gerado com sucesso!")
    } catch (error) {
        console.error(error.message)
    }
}

listarBancos()