// 08-promesas
/*
* Una función que acepte como parmetro una variable
* del 'path' del archivo y otra variable con el "contenidoArchivo"
* Utilizar el módulo 'fs' para leer el archivo en ese 'path' y aniadir el
* "contenidoArchivo" a ese archivo*/

const fs = require('fs'); // file system

function promesaLeer(path) { // f -> Promesa
    const miPrimerPromesa = new Promise(
        (resolve, reject) => {
            fs.readFile(
                path, // Nombre o path del archivo
                'utf-8', // codificacion
                (errorLecturaPrimerArchivo, contenidoPrimerArchivo) => { // Callback
                    if(errorLecturaPrimerArchivo){
                        reject(console.error('ERROR LEYENDO ARCHIVO',errorLecturaPrimerArchivo));
                    }else{
                        console.log('Contenido: ', contenidoPrimerArchivo);
                        resolve(path);
                    }
                }
            )
        }
    );
    return miPrimerPromesa
}

function escribirArchivo(path, contenidoArchivo) {
    return new Promise((res) => res(fs.writeFile(
        path,
        contenidoArchivo,
        (errorLecturaPrimerArchivo, contenidoArchivo)=>{
            console.log(contenidoArchivo)
        })))

}

function ejercicio08(path, contenidoArchivo){
    return promesaLeer(path)
        .then((algo) => {
            return escribirArchivo(path, algo + contenidoArchivo)
        })
}

ejercicio08('./06-ejemplo.txt', ':) lo logramos')
    .then()
    .catch()

