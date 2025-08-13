// 1 Declara una variable nombre y asígnale tu nombre. Muestra su valor en consola.

let nombre = 'Brandon Ocon';
  console.log(nombre);

// 2 Declara dos variables edad y ciudad y muéstralas juntas en un solo console.log.

let edad = 22;
let ciudad = 'Juigalpa';
  console.log(`edad: ${edad}, ciudad: ${ciudad}`);

// 3 Declara una constante PI con el valor 3.1416 y muéstrala en consola.

const PI = 3.1416;
  console.log("Valor de PI es " +  PI);

  // 4 Declara tres variables con valores numéricos y calcula su promedio.

  let a = 10;
  let b = 20;
  let c = 30;
  let promedio = (a + b + c) / 3;
  console.log(`El promedio de ${a}, ${b} y ${c} es: ${promedio}`);

  // 5 Declara una variable esMayorDeEdad con un valor booleano y muéstrala.

let esMayorDeEdad = true;
  console.log(`Es mayor de edad: ${esMayorDeEdad}`);

  // 6 Declara dos números y muestra su suma.

let num1 = 15;
let num2 = 25;  
let suma = num1 + num2;
  console.log(num1 + num2);

// 7 Declara dos números y muestra su resta, multiplicación y división.

let num3 = 50;
let num4 = 10;  
let resta = num3 - num4;
let multiplicacion = num3 * num4;
let division = num3 / num4;
  console.log(`Resta: ${resta}, Multiplicación: ${multiplicacion}, División: ${division}`);

  // 8 Declara dos números y muestra el resultado de elevar el primero al segundo.

let base = 2;
let exponente = 3;  
let potencia = Math.pow(base, exponente);
  console.log(`${base} elevado a ${exponente} es: ${potencia}`);

  // 9 Declara una variable precio y otra descuento (en %) y calcula el precio final.
let precio = 100;
let descuento = 20;
let precioFinal = precio - (precio * (descuento / 100));
  console.log(`El precio final después de un descuento del ${descuento}% es: ${precioFinal}`);

  // 10 Usando un for, muestra en consola los números del 1 al 10.

for (let i = 1; i <= 10; i++) 
    console.log(i);

// 11 Usando un for, muestra en consola la tabla de multiplicar del 5.
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// 12 Usando un while, muestra en consola los números pares del 2 al 20.

let num = 2;
while (num <= 20) {
    console.log(num);
    num += 2;
} 

// 13 Crea una función saludar que reciba un nombre y muestre un saludo.
function saludar(nombre) {
    console.log("Hola, " + nombre + " ¡Bienvenido!");
}

// Ejemplo de uso:
saludar("Brandon");

// 14 Crea una función sumar que reciba dos números y retorne su suma.

function sumar(num1, num2) {
    return num1 + num2;
} 
let resultadoSuma = sumar(10, 5);
console.log(`La suma es: ${resultadoSuma}`);

// 15 Crea una función esPar que reciba un número y retorne true si es par, false si no lo es.

function esPar(numero) {
    return numero % 2 === 0;
}
let numero = 5;
if (esPar(numero)) {
    console.log(`${numero} es un número par.`);
}
else {
    console.log(`${numero} es un número impar.`);
} 

// 16 Crea una función areaRectangulo que reciba base y altura y retorne su área.

function areaRectangulo(base, altura) {
    return base * altura;
}
let baseRectangulo = 5;
let alturaRectangulo = 10;  
let area = areaRectangulo(baseRectangulo, alturaRectangulo);
  console.log(`El área del rectángulo es: ${area}`);

// 17 Crea una función flecha multiplicar que reciba dos números y retorne su producto.

const multiplicar = (num1, num2) => num1 * num2;
let numA = 4;
let numB = 6;
let resultadoMultiplicacion = multiplicar(numA, numB);
  console.log(`El producto de ${numA} x ${numB} es: ${resultadoMultiplicacion}`);
