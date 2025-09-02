// Crear una función flecha que reciba un arreglo y uno o más elementos, losañada al final del arreglo y devuelva el nuevo arreglo.
const agregarAlFinal = (arreglo, ...elementos) => {
    return [...arreglo, ...elementos];
}
let numeros = [1, 2, 3];
let nuevosNumeros = agregarAlFinal(numeros, 4, 5, 6);
console.log(nuevosNumeros); // [1, 2, 3, 4, 5, 6]

// Crear una función flecha que reciba un arreglo y uno o más elementos, los añada al inicio del arreglo y devuelva el nuevo arreglo.
const agregarAlInicio = (arreglo, ...elementos) => {
    return [...elementos, ...arreglo];
}
let letras = ['b', 'c', 'd'];
let nuevasLetras = agregarAlInicio(letras, 'a');
console.log(nuevasLetras); // ['a', 'b', 'c', 'd'] 'v', 'x']
let frutas = ['manzana', 'banana', 'naranja'];
let cadenaFrutas = frutas.join(' - ');
console.log(cadenaFrutas); // 'manzana - banana - naranja'

// Crear una función flecha que reciba un arreglo, elimine y devuelva el último elemento del arreglo.
const eliminarUltimo = (arreglo) => {
    let nuevoArreglo = [...arreglo];
    let ultimoElemento = nuevoArreglo.pop();
    return { nuevoArreglo, ultimoElemento };
}
let colores = ['rojo', 'verde', 'azul'];
let resultadoPop = eliminarUltimo(colores);
console.log(resultadoPop.nuevoArreglo); // ['rojo', 'verde']
console.log(resultadoPop.ultimoElemento); // 'azul'

// Crear una función flecha que reciba un arreglo, elimine y devuelva el primer elemento del arreglo.
const eliminarPrimero = (arreglo) => {
    let nuevoArreglo = [...arreglo];
    let primerElemento = nuevoArreglo.shift();
    return { nuevoArreglo, primerElemento };
}
let animales = ['perro', 'gato', 'pez'];
let resultadoShift = eliminarPrimero(animales);
console.log(resultadoShift.nuevoArreglo); // ['gato', 'pez']
console.log(resultadoShift.primerElemento); // 'perro'

// Crear una función flecha que reciba un arreglo, un elemento y opcionalmente un índice de inicio, y devuelva el índice de la primera aparición del elemento o -1 si no lo encuentra.
const buscarIndice = (arreglo, elemento, inicio = 0) => {
    return arreglo.indexOf(elemento, inicio);
} 
let numeros2 = [10, 20, 30, 20, 40];
let indice1 = buscarIndice(numeros2, 20); // 1
let indice2 = buscarIndice(numeros2, 20, 2); // 3
console.log(indice1); // 1
console.log(indice2); // 3

// Crear una función flecha que reciba un arreglo y devuelva la cantidad de elementos en el arreglo.
const contarElementos = (arreglo) => {
    return arreglo.length;
}
let arreglo = [1, 2, 3, 4, 5];
let cantidad = contarElementos(arreglo);
console.log(cantidad); // 5 

// Crear una función flecha que reciba un arreglo de números y los ordene en orden ascendente usando una función comparadora.
const ordenarAscendente = (arreglo) => {
    return [...arreglo].sort((a, b) => a - b);
} 
let numeros3 = [3, 1, 4, 2];
let numerosOrdenados = ordenarAscendente(numeros3);
console.log(numerosOrdenados); // [1, 2, 3, 4]  

// Crear una función flecha que reciba un arreglo y un separador, y devuelva una cadena con los elementos del arreglo unidos por el separador.
const unirConSeparador = (arreglo, separador = ',') => {
    return arreglo.join(separador);
}
let caracteres = ['a', 'b', 'c', 'd'];  
let cadenaCaracteres = unirConSeparador(caracteres, ' - ');
console.log(cadenaCaracteres); // 'a - b - c - d'

// Crear una función flecha que reciba uno o más arreglos y/o elementos, y devuelva un nuevo arreglo con todos los elementos combinados.
const combinarElementos = (...elementos) => {
    return elementos.flat();
}
let arreglo1 = [1, 2];
let arreglo2 = [3, 4];
let combinado = combinarElementos(arreglo1, arreglo2, 5, 6);
console.log(combinado); // [1, 2, 3, 4, 5, 6],  'v', 'x']

// Crear una función flecha que reciba un arreglo y una función callback, y ejecute la función por cada elemento del arreglo sin devolver un nuevo arreglo.
const ejecutarPorCadaElemento = (arreglo, callback) => {
    arreglo.forEach(callback);
} 
let frutas1 = ['manzana', 'banana', 'naranja'];
ejecutarPorCadaElemento(frutas1, (frutas1, indice) => {
    console.log(`Fruta en índice ${indice}: ${frutas1}`);
});

//Crear una función flecha que reciba un arreglo y una función callback, y devuelva un nuevo arreglo con los resultados de aplicar la función a cada elemento.
const mapearElementos = (arreglo, callback) => {
    return arreglo.map(callback);
} 
let numeros4 = [1, 2, 3];
let dobles = mapearElementos(numeros4, x => x * 2);
console.log(dobles); // [2, 4, 6]

// Crear una función flecha que reciba un arreglo, una función callback y opcionalmente un valor inicial, y reduzca el arreglo a un solo valor aplicando la función acumuladora.
const reducirElementos = (arreglo, callback, inicial) => {
    if (inicial !== undefined) {
        return arreglo.reduce(callback, inicial);
    } else {
        return arreglo.reduce(callback);
    }
}
let numeros5 = [1, 2, 3, 4];
let suma = reducirElementos(numeros5, (acum, val) => acum + val, 0);
console.log(suma); // 10