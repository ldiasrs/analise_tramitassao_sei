
const getStatusAlvaras = () => {
    const row = process.env.STATUS_ALVARAS
    return row.split(",").map((s) => s.trim().toUpperCase())
}

export const relatorioTransmissoes = (tramitassoes) => {
   const statusAlvaras = getStatusAlvaras()
   const alvaraLiberados = []
   const PASAbertos = []
   let totalAlvaraLiberados = 0
   tramitassoes.forEach(t => {
        if (t.desfecho && statusAlvaras.includes(t.desfecho.toUpperCase())) {
            totalAlvaraLiberados += t.quantidade
            alvaraLiberados.push(t)
        }
        if (t.desfechoExtra && statusAlvaras.includes(t.desfechoExtra.toUpperCase())) {
            totalAlvaraLiberados += t.quantidadeExtra
        }
   });

   return {
    // alvaraLiberados,
    // PASAbertos,
    totalAlvaraLiberados,
    totalPASAbertos: PASAbertos.length
   }
}

