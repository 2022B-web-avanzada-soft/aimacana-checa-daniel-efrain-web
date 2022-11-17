//Mutables(reasignadas)
var numeroUno = 1;
let numeroDos = 2;
numeroUno = 12;
numeroDos = 8;
numeroUno = true;
numeroDos = false;

//Inmutables ()
const configuracionArchivos = 'PDF'
//Vamos a preferir CONST -> LET > nunca VAR!

//Tipos de variables (primitivas)
const numero = 1;// number
const sueldo = 1.2;// number
const texto = 'Adrian';// String ""
const apellido= 'Eguez';// string
const booleano = true;// boolean
const hijos = null;// object
const zapatos = undefined;// undefined

console.log(typeof numero);
console.log(typeof sueldo);
console.log(typeof texto);
console.log(typeof apellido);
console.log(typeof booleano);
console.log(typeof hijos);
console.log(typeof zapatos);

//Truty Falsy
if(""){ //Falso
    console.log("String vacio es verdadero")
}else{
    console.log("String vacio es falso")
}

if("daniel"){ //Verdadero
    console.log("String lleno es verdadero")
}else{
    console.log("String lleno es falso")
}

if(-1){ //Verdadero
    console.log("-1 Verdadero")
}else{
    console.log("-1 Falso")
}

if(0){ //Falso
    console.log("0 Verdadero")
}else{
    console.log("0 Falso")
}

if(1){ //Verdadero
    console.log("1 Verdadero")
}else{
    console.log("1 Falso")
}

if(null){ //Falso
    console.log("null Verdadero")
}else{
    console.log("null Falso")
}

if(undefined){ //Falso
    console.log("Null Verdadero")
}else{
    console.log("Undefined Falso")
}

//Orden ed importancia
// 1) "const"
// 2) "let"
// 3) X -> "var"

const daniel = {
    "nombre": "Daniel",
    "apellido": "Aimacaña",
    edad: 22,
    hijos: null,
    zapatos: undefined,
    casado: false,
    ropa: {
        color: "cafe",
        talla: 38,
    },
    mascotas: ["Hela","Bongo"]
};
console.log(daniel);
console.log(daniel.mascotas);
console.log(daniel["mascotas"]);
daniel.nombre = "Reno";
console.log(daniel.nombre);
daniel.sueldo;
console.log(daniel.sueldo);
daniel.sueldo = 500;
console.log(daniel.sueldo);
daniel["gastos"] = 200;
console.log(daniel.gastos);
console.log(daniel);
//Borrar el valor de una propiedad
daniel.apellido = undefined;
console.log(daniel);
console.log(Object.keys(daniel));
console.log(Object.values(daniel));

//Delete la llave y el valor dentro del objeto
delete daniel.apellido;
console.log(daniel);
console.log(Object.keys(daniel));


// Variables por valor o referencia
// Variables por valor en JS son las primitivas: number, string, boolean
let danieEdad = 22;
let edadJuan = danieEdad; //Guardamos una primitiva en otra variable
                            //Variables por valor

console.log(danieEdad);//22
console.log(edadJuan);//22
danieEdad = +1;
console.log(danieEdad);//23
console.log(edadJuan);//22



// Variable spor Referencia
let notas = {
    total: 10
};

let notasSegundBimestre = notas; //Igualando la referencia

notasSegundBimestre.total = notasSegundBimestre.total + 1;
console.log(notas);
console.log(notasSegundBimestre);

// Como clonar objetos
let notasTercerBimestre = Object.assign({}, notas);
//Object.assign([], aarreglo)

notasTercerBimestre.total = notasTercerBimestre.total + 1;

console.log('notas', notas);
console.log('notasSegundoBimestre', notasSegundBimestre);
console.log('notasTercerBimestre', notasSegundBimestre);












