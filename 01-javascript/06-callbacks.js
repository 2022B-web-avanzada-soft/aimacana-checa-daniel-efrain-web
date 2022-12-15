const fs = require('fs'); // file system
                          // Importar modulo fs
// 06-ejemplo.txt -> Hola

// 1) Leer archivo:06-ejemplo.txt,
// luego imprimir en consola
// 2) Despues del paso 1, Leer archivo:01-variables.js
// , luego imprimir en consola
// 3) Crear un nuevo archivo llamaddo 06-nuevo-archivo.txt
// con el contenido de los otros dos archivos.


console.log('PRIMERO');
fs.readFile(
    './06-ejemplo.txt', // Nombre o path del archivo
    'utf-8', // codificacion
    (errorLecturaPrimerArchivo, contenidoPrimerArchivo) => { // Callback
        if(errorLecturaPrimerArchivo){
            console.error('ERROR LEYENDO ARCHIVO',errorLecturaPrimerArchivo);
        }else{
            console.log('Contenido: ', contenidoPrimerArchivo);
        }
    }
);

console.log('TERCERO');


fs.readFile(
    './01-variables.js', // Nombre o path del archivo
    'utf-8', // codificacion
    (errorLecturaPrimerArchivo, contenidoPrimerArchivo) => { // Callback
        if(errorLecturaPrimerArchivo){
            console.error('ERROR LEYENDO ARCHIVO',errorLecturaPrimerArchivo);
        }else{
            console.log('Contenido: ', contenidoPrimerArchivo);
        }
    }
)



fs.writeFile(
    './06-nuevo-archivo.txt',
    './06-ejemplo.txt',
    (errorLecturaPrimerArchivo, contenidoArchivo)=>{
         console.log(contenidoArchivo)
    }
    );

