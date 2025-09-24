// Ejercicios E11

// Ejemplos 

// Arreglo de números
let numeros = [5, 2, 9, 1, 7];

// Orden ascendente
numeros.sort((a, b) => a - b);
console.log(numeros); // [1, 2, 5, 7, 9]

// Orden descendente
numeros.sort((a, b) => b - a); 
console.log(numeros); // [9, 7, 5, 2, 1]

// Arreglo de cadenas
let frutas = ["banana", "manzana", "naranja", "uva"];
frutas.sort(); // Orden alfabético por defecto
console.log(frutas); // ["banana", "manzana", "naranja", "uva"]

// Orden alfabético inverso
frutas.sort((a, b) => b.localeCompare(a));
console.log(frutas); // ["uva", "naranja", "manzana", "banana"]


let personas = [
    { nombre: "Ana", edad: 28 },
    { nombre: "Luis", edad: 22 },
    { nombre: "Carlos", edad: 35 },
    { nombre: "Marta", edad: 30 }
];

// Ordenar por edad ascendente
personas.sort((a, b) => a.edad - b.edad);
console.log(personas);
// [
//  { nombre: "Luis", edad: 22 }, 
//  { nombre: "Ana", edad: 28 }, 
//  { nombre: "Marta", edad: 30 }, 
//  { nombre: "Carlos", edad: 35 } 
// ]

// Ordenar por nombre alfabéticamente
personas.sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log(personas);
// [
//  { nombre: "Ana", edad: 28 }, 
//  { nombre: "Carlos", edad: 35 },
//  { nombre: "Luis", edad: 22 }, 
//  { nombre: "Marta", edad: 30 } 
// ]  

let numero = [1,2,3,4,5];
numero.reverse();
console.log(numero); // [5,4,3,2,1]

let palabras = ["Hola","Mundo","JavaScript"];
palabras.reverse();
console.log(palabras); // ["JavaScript","Mundo","Hola"]

let persona = [
    { nombre: "Ana", edad: 28 },
    { nombre: "Luis", edad: 22 },
    { nombre: "Carlos", edad: 35 },
    { nombre: "Marta", edad: 30 }
];

persona.reverse();
console.log(persona);
// [  
//  { nombre: "Marta", edad: 30 },
//  { nombre: "Carlos", edad: 35 },
//  { nombre: "Luis", edad: 22 }, 
//  { nombre: "Ana", edad: 28 } 
// ]

// Ejercicos Practicos 

// 1 Dado un arreglo de números [10, 3, 8, 1, 6],ordénalo en orden ascendente utilizando el método sort().

let arreglo1 = [10, 3, 8, 1, 6];
arreglo1.sort((a, b) => a - b);
console.log(arreglo1); // [1, 3, 6, 8, 10]

// 2 Dado un arreglo de cadenas ["perro", "gato", "elefante", "ardilla"], ordénalo alfabéticamente sin modificar el arreglo original.

let arreglo2 = ["perro", "gato", "elefante", "ardilla"];
arreglo2.sort();
console.log(arreglo2); 

// 3 Dado un arreglo de objetos [{ nombre: "Luis", puntaje: 85 }, { nombre: "Marta",puntaje: 92 }, { nombre: "Sofía", puntaje: 78 }], ordénalo por puntaje en orden descendente.

let arreglo3 = [
    { nombre: "Luis", puntaje: 85 },
    { nombre: "Marta", puntaje: 92 },
    { nombre: "Sofía", puntaje: 78 }
];
arreglo3.sort((a, b) => b.puntaje - a.puntaje);
console.log(arreglo3);
// [ 
//  { nombre: "Marta", puntaje: 92 }, 
//  { nombre: "Luis", puntaje: 85 }, 
//  { nombre: "Sofía", puntaje: 78 } 
// ]

// 4 Dado un arreglo de números [4, 9, 2, 7, 5], invierte su orden utilizando el método reverse().

let arreglo4 = [4, 9, 2, 7, 5];
arreglo4.reverse();
console.log(arreglo4); // [5, 7, 2, 9, 4]

// Dado un arreglo de objetos [{ producto: "Laptop", precio: 1200 }, { producto:"Teléfono", precio: 800 }, { producto: "Tableta", precio: 600 }], ordénalo por precio en orden ascendente sin modificar el arreglo original.

let arreglo5 = [
    { producto: "Laptop", precio: 1200 },
    { producto: "Teléfono", precio: 800 },
    { producto: "Tableta", precio: 600 }
];
arreglo5.sort((a, b) => a.precio - b.precio);
console.log(arreglo5);

// Dado un arreglo de cadenas ["manzana", "banana", "kiwi", "fresa"], invierte su orden y luego ordénalo alfabéticamente.
let arreglo6 = ["manzana", "banana", "kiwi", "fresa"];
arreglo6.reverse(); // cambiar el reverse a sort
console.log(arreglo6);