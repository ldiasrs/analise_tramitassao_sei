import moment from 'moment';
import readXlsxFile from 'read-excel-file/node'

export const parseData = async (filePath) => {
  const rows = await readXlsxFile(filePath);
  rows.splice(0, 2);
  const tramitassoes = rows.filter((row) => row[2]).map((row) => {
    let dataEntrada = 'INVALIDA'
    try {
      dataEntrada = moment(new Date(row[2]))
    } catch (error) {
      console.log(`ERRO DATA ERRADA: ${row[2]} LINHA: ${row}`)
    }
    return {
      bpa: row[0], 
      rg: row[1], 
      dataEntrada,
      numeroProcesso: row[3], 
      tipo: row[4], 
      numeroAI: row[5], 
      cnpj: row[6], 
      razaoSocial: row[7], 
      nomeFantasia: row[8], 
      endereco: row[9], 
      obs: row[10], 
      desfecho: row[11], 
      quantidade: row[12], 
      mesAno: row[13], 
      desfechoExtra: row[14], 
      quantidadeExtra: row[15],
    } 
  })
  return tramitassoes
}
