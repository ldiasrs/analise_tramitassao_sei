
const isStatusPresent = (itemStatus, allStatusAsStr) => {
    const status = allStatusAsStr.split(",").map((s) => s.trim().toUpperCase())
    return itemStatus && status.includes(itemStatus.toUpperCase())
}

const isDesfechoLiberado = (desfecho) => {
    return isStatusPresent(desfecho, process.env.BPA_ALVARA_DESFECHO_STATUS)
}

const isTipoDeProcessoLicenciamentoSanitario= (tipo) => {
    return isStatusPresent(tipo, process.env.BPA_ALVARA_TIPO_PROCESSO_STATUS)
}

const isTipoDeProcessCadastro= (tipo) => {
    return isStatusPresent(tipo, process.env.CADASTRO_TIPO_DE_PROCESSO_STATUS)
}

const isTipoDeProcessoAberturaDePAS= (tipo) => {
    return isStatusPresent(tipo, process.env.PAS_TIPO_DE_PROCESSO_STATUS)
}

export const relatorioTransmissoes = (tramitassoes) => {
   const alvaraLiberados = []
   const PASAbertos = []
   let totalAlvaraLiberados = 0
   let totalPASAbertos = 0
   let exclusaoCadastroEstabelecimento=0
   let totalCadastroEstabelecimentoSujeitosAVigilanciaSanitaria=0
   tramitassoes.forEach(t => {
    if (isTipoDeProcessCadastro(t.tipo)) {
        totalCadastroEstabelecimentoSujeitosAVigilanciaSanitaria =+ t.quantidade
    }
    if (isTipoDeProcessoLicenciamentoSanitario(t.tipo)) {
        if (isDesfechoLiberado(t.desfecho)) {
            totalAlvaraLiberados += t.quantidade
            alvaraLiberados.push(t)
        }
        if (isDesfechoLiberado(t.desfechoExtra)) {
            totalAlvaraLiberados += t.quantidadeExtra
        }
    }
    if (isTipoDeProcessoAberturaDePAS(t.tipo)) {
        PASAbertos.push(t)
        PASAbertos+= t.quantidade
    }
   });

   return {
    totalAlvaraLiberados,
    totalPASAbertos,
    totalCadastroEstabelecimentoSujeitosAVigilanciaSanitaria,
    exclusaoCadastroEstabelecimento
   }
}

