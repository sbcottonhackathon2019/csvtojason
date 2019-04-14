import * as fse from 'fs-extra'

const csv = require('csvtojson')
fse.readFile('./testdata/csv/Lottery.csv').then(data => {
  csv({})
    .fromString(data.toString())
    .then((csvRow: any) => {
      console.log(csvRow) // => [["1","2","3"], ["4","5","6"], ["7","8","9"]]
    })
})

export async function parseCSV(item: Buffer) {
  return new Promise((resolve, reject) => {
    csv()
      .fromString(item.toString())
      .then((result: any) => {
        resolve(result)
      })
      .catch((err: any) => {
        resolve(err)
      })
  })
}
