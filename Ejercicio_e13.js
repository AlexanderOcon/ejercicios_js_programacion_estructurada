// Ejemplos de Clase Practica e13

// Ejercicio 1

const numeros = [1, 2, 3, 4, 5];

const suma = numeros.reduce((acc, num) => acc + num, 0);

console.log(suma); // 15


const productos = [
{ nombre: "Camisa", precio: 20 },
{ nombre: "Pantalón", precio: 30 },
{ nombre: "Zapatos", precio: 50 }
];

const total = productos.reduce((acc, prod) => acc + prod.precio, 0);

console.log(total); // 100

// Ejercicio 2

const nombres = ["Ana", "Luis", "Pedro", "María"];

const encontrado = nombres.find(nombre => nombre.startsWith("P"));

console.log(encontrado); // "Pedro"

const usuarios = [
{ id: 1, nombre: "Carlos" },
{ id: 2, nombre: "Lucía" },
{ id: 3, nombre: "Marta" }
];

const usuario = usuarios.find(u => u.id === 2);

console.log(usuario); // { id: 2, nombre: "Lucía" }

// Ejercicio 3

const edades = [18, 22, 30, 25];

const todosMayores = edades.every(edad => edad >= 18);

console.log(todosMayores); // true

const tareas = [
{ nombre: "Estudiar", completada: true },
{ nombre: "Ejercicio", completada: true },
{ nombre: "Leer", completada: false }
];

const todasCompletas = tareas.every(t => t.completada === true);

console.log(todasCompletas); // false

// Ejercicio 4

const notas = [5, 8, 9, 3];

const hayReprobados = notas.some(nota => nota < 6);

console.log(hayReprobados); // true

const inventario = [
{ producto: "Manzanas", cantidad: 0 },
{ producto: "Naranjas", cantidad: 10 },
{ producto: "Peras", cantidad: 3 }
];

const agotado = inventario.some(item => item.cantidad === 0);

console.log(agotado); // true

// Ejercicio 5

const numero = [5, 10, 15, 20, 25];

const mayoresQue15 = numero.filter(num => num > 15);

console.log(mayoresQue15); // [20, 25]


const empleados = [
{ nombre: "Ana", puesto: "Desarrolladora" },
{ nombre: "Luis", puesto: "Diseñador" },
{ nombre: "Marta", puesto: "Desarrolladora" }
];

const desarrolladores = empleados.filter(e => e.puesto === "Desarrolladora");

console.log(desarrolladores);
// [
// { nombre: "Ana", puesto: "Desarrolladora" },
// { nombre: "Marta", puesto: "Desarrolladora" }
// ]

// Ejercicios de arreglos y evaluación
// ---------------------------------------------------------------------------------------- //
// Empleando el arreglo de objetos adjunto, resuelva los siguientes enunciados:

//1. Obtén un nuevo arreglo con todas las personas cuya edad sea mayor o igual a 18 años.
const personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Luis", edad: 17 },
    { nombre: "Pedro", edad: 30 },
    { nombre: "María", edad: 15 },
    { nombre: "Lucía", edad: 40 },
    { nombre: "Jorge", edad: 18 }
];
const mayoresDeEdad = personas.filter(persona => persona.edad >= 18);
console.log(mayoresDeEdad);

// 2. Encuentra la primera persona en el arreglo cuyo nombre comience con la letra "L".
const personaConL = personas.find(persona => persona.nombre.startsWith("L"));
console.log(personaConL);

// 3. Calcula la suma total de las edades de todas las personas en el arreglo.

const sumaEdades = personas.reduce((acc, persona) => acc + persona.edad, 0);
console.log(sumaEdades);

// 4. Verifica si todas las personas en el arreglo son mayores o iguales a 15 años.
const todosMayores15 = personas.every(persona => persona.edad >= 15);
console.log(todosMayores15);
// 5. Comprueba si existe al menos una persona en el arreglo que tenga 40 años
const hayAlguienCon40 = personas.some(persona => persona.edad === 40);
console.log(hayAlguienCon40);