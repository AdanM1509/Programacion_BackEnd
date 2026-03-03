//Adan Adair Moo Noh//

//modulosNode.js//

/*Desafío 1: Modifica el código para que, después de escribir el archivo, lo lea
automáticamente usando fs. readFile() y muestre su contenido en la consola.*/


const fs = require('fs'); // Importa la herramienta de sistema de archivos

fs.writeFile('archivo.txt', 'Hola desde NodeJS', (err) => {
    if (err) throw err;
    console.log('El archivo ha sido creado con éxito.');

//Este apartado hace que se lea el resultado y se muestre en la terminal o consola//
    fs.readFile('archivo.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log('Contenido del archivo:');
        console.log(data);
    });
});