// 05-destruccturación.js
// Destruccturación de Objetos -> El orden si importa

const adrian = {
    nombre: 'Adrian',
};

const carolina = {
    nombre: 'Carolina',
    apellido: 'Eguez',
};

const adrianCarolina = { // Crea una nueva REFERENCIA (VALOR)
     ...carolina, // El orden es importante especialmente para propiedades que se repiten
    ...adrian,    // El último ser remplaza
};

console.log('adrianCarolina', adrianCarolina);


// Destruccturación de arreglos
const arregloUno = [1,2,3,4,5];
const arregloDos = [6,7,8,9,10];
const superArreglo = [
    ...arregloUno,
    ...arregloDos,
]; // [1,2,3,4,5,6,7,8,9,10]

console.log(superArreglo);  
