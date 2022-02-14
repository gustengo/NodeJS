const fs = require('fs');
  
fs.appendFile("new-file.txt", "\n y esto lo agrego con un append", (error) => {
  if (error) {
    console.log("no se pudo");
    return
  }
  fs.readFile('new-file.txt', 'utf8' , (error, dato) => {
    if (error) {
      console.log("No se pudo")
      return
    }
    console.log(dato)
  })

});