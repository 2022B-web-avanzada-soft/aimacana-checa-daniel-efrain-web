//04-funciones.js

function soloNumeros(a,b,c){
    return a-b+c; // valor a devolver

}

//JS permite el uso de funciones sin validaciones
//Es decir se puede enviar como parámetros cualquier valor porque js no es fuertemente tipado

function soloLetras(a,b,c) { // sin return devolvemos: undefined
    console.log(a,b,c);
}

//Funciones nombreadas - named functions

function funcionNombrada(){

}

//Funciones anonimas - Anonymous Functions

const funcionSinNombre1 = function (){};
const funcionSinNombre2 = function (){};
let funcionSinNombre3 = function (){};

[].forEach(function (){});
funcionSinNombre1();
funcionSinNombre2();
funcionSinNombre3();

//Funciones anónimas - Fat arrow Functions
const funcionFatArrow1 = () => {};
let funcionFatArrow2 = () => {};
var funcionFatArrow3 = () => {};
[].forEach(() => {});
funcionFatArrow1();
funcionFatArrow2();
funcionFatArrow3();

const funcionArrow4 = () => {};
const funcionArrow5 = (parametro) => {
    return parametro + 1;
};

const funcionArrow6 = (parametro) => parametro + 1; //Una solo línea, Omitir return, Omitir llaves
const funcionArrow7 = parametro => parametro + 1; // Solo si tenemos un paramtro omitimos parentesis

const funcionArrow8 = (numUno, numDos, numTres) => numUno + numDos + numTres;

//... => parametros infinitos => Llegan en un arreglo de paramtros
// solo podemos tener un parametro infinito por función

function sumarNumeros(a,b,c, ...todosNumeros){ // Parametros Infinitos [1,4,5,6,7]
    let total = 0;
    todosNumeros.forEach(
        (valorActual)=>{
            total = total + valorActual;
        }
    );

    // return todosNumeros.reduce((a,v) => a + v, 0);
}

sumarNumeros(1,2,3,4,5,6);