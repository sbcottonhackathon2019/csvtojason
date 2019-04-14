const parser = require('html-to-json')
import * as fse from 'fs-extra'

fse.readFile('./testdata/html/testA.html').then(data => {
  //console.log(data.toString());
  let htmlstr = data.toString()

  parser.parse(
    htmlstr,
    {
      text: function($doc: any) {
        return $doc.find('H1').text()
      }
    },
    function(err: any, result: any) {
      console.log(result)
    }
  )
})
