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
                        resolve(contenidoPrimerArchivo)
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

// ejercicio08('./06-ejemplo.txt', ':) lo logramos')
//     .then()
//     .catch()

// ASYNC AWAIT
// REGLAS
// 1) Estar dentro de una función (nombrada o anónima)
// 2) AGREGAR la palabra 'async' antes de la declaración de la función
// 3) Agregar la palabra await antes de la declaración de una promesa.
async function asyncAwaitUno(path, nuevoContenido){
    //Si sabemos que en la promesa va a haber un reject usamos try and catch
    try{
        const respuestaContenidoArchivoOriginal = await promesaLeer(path);
        await escribirArchivo(path, respuestaContenidoArchivoOriginal + nuevoContenido);

    }catch (error){
        console.error(error);
    }
}
const asyncAwaitDos = function (){}

const asyncAwaitTres = ()=>{}

asyncAwaitUno('./06-ejemplo.txt', 'lo logramos :)')