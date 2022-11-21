//03-operadores.js
const arreglo = [
    {
        id: 1,
        nombre: 'Adrian',
        nota: 5
    },
    {
        id: 2,
        nombre: 'Vicente',
        nota: 8
    },
    {
        id: 3,
        nombre: 'Carolina',
        nota: 14
    },
    {
        id: 4,
        nombre: 'Wendy',
        nota: 16
    },
    {
        id: 5,
        nombre: 'Andrea',
        nota: 19
    },
    {
        id: 6,
        nombre: 'Pamela',
        nota: 19
    },
    {
        id: 7,
        nombre: 'Cristian',
        nota: 20
    },
    {
        id: 8,
        nombre: 'Daniel',
        nota: 19
    },
    {
        id: 9,
        nombre: 'Lilly',
        nota: 14
    },
    {
        id: 10,
        nombre: 'Ramiro',
        nota: 12
    }
];

//Funciones como parametros
//FIND
//enviamos una expresion -> TRUTY FALSY
//devuelve el primero que cumpla esa condicion

const respuestaFind = arreglo
    .find(
        function (valorActual, indiceActual,arregloCompleto){
            console.log('valorActual', valorActual);
            console.log('indiceActual', indiceActual);
            console.log('arregloCompleto', arregloCompleto);
            // return valorActual.nombre === "Cristian"  //Expresion = = =
            return valorActual.nota < 5;

        }
    );

console.log('respuestaFind', respuestaFind);

//FINDINDEX
const respuestaFindIndex = arreglo
    .findIndex(
        function (valorActual, indiceActual,arregloCompleto){
            console.log('valorActual', valorActual);
            console.log('indiceActual', indiceActual);
            console.log('arregloCompleto', arregloCompleto);
            // return valorActual.nombre === "Cristian"  //Expresion = = =
            return valorActual.nombre === "Cristian";

        }
    );

console.log('respuestaFindIndex', respuestaFind); //Indice - > 6 // No encuentra -> -1







//FOR EACH
//Itera el arreglo

const respuestaForEach = arreglo
    .forEach(
        function (valorActual, indiceActual, arregloCompleto){
            console.log('valorActual', valorActual);
        }
    );

console.log('respuestaForEach', respuestaForEach); //undefined


//MAP (MODIFICAR O MUTAR el arreglo y devuelve un nuevo arreglo)
//Enviamos los datos del nuevo arreglo
//Devuelve el nuevo arreglo

const respuestaMap = arreglo
    .map(
        (valorActual, indiceActual, arregloCompleto) => {
            const notaActual = valorActual.nota +1;
            const nuevoElemento = {
                id: valorActual.id,
                nombre: valorActual.nombre,
                nota: notaActual,
                estaAprobado: notaActual > 14,
                casado: false,
            };
            return nuevoElemento;
        }
    )

console.log('respuestaMap', respuestaMap);
console.log('arreglo', arreglo);
