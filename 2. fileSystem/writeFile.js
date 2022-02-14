const fs = require('fs');
fs.writeFile('new-file.txt', 'Esto es el contenido', 'utf-8', (error) => {
    if(error){
        console.log("No se pudo");
        return;
    }
    console.log("Si se pudo");
});