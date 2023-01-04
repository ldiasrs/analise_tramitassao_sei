import { parseData } from "./parser.js";
import { relatorioTransmissoes } from "./report.js";
import dotenv from 'dotenv';
import moment from "moment";
import { buildHtml } from "./htmlBuilder.js";

dotenv.config()
const periodoInicio = moment.utc(process.env.PERIODO_FILTRO_INICIAL)
const periodoFim = moment.utc(process.env.PERIODO_FILTRO_FINAL)
console.log(`\n#################################################################`) 
console.log(`- Arquivo: ${process.env.INPUT_FILE}`) 
console.log(`- Periodo: ${periodoInicio} - ${periodoFim}`) 
console.log(`###################################################################`) 
const transmissoes = await parseData(process.env.INPUT_FILE)
const transmissoesFiltradas = transmissoes
    .filter(t => 
        (t.dataEntrada.isSameOrAfter(periodoInicio)
        && t.dataEntrada.isBefore(periodoFim)))
    .filter(t => !t.bpa)
const relatorio = relatorioTransmissoes(transmissoesFiltradas)
buildHtml({...relatorio, periodoInicio, periodoFim})