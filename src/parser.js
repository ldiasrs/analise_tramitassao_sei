import readXlsxFile from 'read-excel-file/node'

export const parseData = (filePath) => {
  const data = []
  readXlsxFile(filePath).then((rows) => {
    const t = {
      bpa: rows[2][0], 
      rg: rows[2][1], 
      dataEntrada: rows[2][2], 
      numeroProcesso: rows[2][3], 
      tipo: rows[2][4], 
      numeroAI: rows[2][5], 
      cnpj: rows[2][6], 
      razaoSocial: rows[2][7], 
      nomeFantasia: rows[2][8], 
      endereco: rows[2][9], 
      obs: rows[2][10], 
      desfecho: rows[2][11], 
      quantidade: rows[2][12], 
      mesAno: rows[2][13], 
      desfechoExtra: rows[2][14], 
      quantidadeExtra: rows[2][15], 
    }
    data.push(t)
    console.log(t)
  })
  console.log(data)
}
