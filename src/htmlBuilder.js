import { readFileSync } from "fs"
import moment from "moment"
import { writeFile } from "./commons.js"

export const buildHtml = (report) => {
    const filePath = `./relatorios/relatorio-vigi-${moment().format("DD-MM-YYYY-HH-mm-ss")}.html`
    let html = readFileSync("src/reportTemplate.html")+""
    html = html.replace("#totalAlvaraLiberados", report.totalAlvaraLiberados)
    html = html.replace("#totalPASAbertos", report.totalPASAbertos)
    html = html.replace("#totalCadastroEstabelecimentoSujeitosAVigilanciaSanitaria", report.totalCadastroEstabelecimentoSujeitosAVigilanciaSanitaria)
    html = html.replace("#exclusaoCadastroEstabelecimento", report.exclusaoCadastroEstabelecimento)
    html = html.replace("#exclusaoCadastroEstabelecimento", report.exclusaoCadastroEstabelecimento)
    html = html.replace("#geradoDate", moment())
    html = html.replace("#periodo", `${report.periodoInicio.format('DD-MM-YYYY')} - ${report.periodoFim.format('DD-MM-YYYY')}`)
    writeFile(filePath, html)
}