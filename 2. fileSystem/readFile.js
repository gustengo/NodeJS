const fs = require('fs')

fs.readFile('/Users/RODRIGUEZ/Documents/ejemplos/nodejs/2. fileSystem/new-file.txt', 'utf8' , (error,dato) => {
  if (error) {
    console.log("No se pudo")
    return
  }
  console.log(dato)
})