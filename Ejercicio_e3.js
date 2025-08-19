// 1 Función anónima asignada a una variable

const sumar = function(a, b) {
return a + b;
};
 console.log(sumar(5, 3));


// 2 Función con asignación de nombre

function sumar (a, b) {
return a + b;
};
console.log(sumar(3, 4));

// 3 Sintaxis Normal 

const multiplicar = function(a, b) {
return a * b;
};


// Funcion flecha
const multiplicarFlecha = (a, b) => a * b;

// Funcion flecha completa
const multiplicarFlechaCompleta = (a, b) => {
    return a * b;
}
console.log(multiplicar(2, 3));
console.log(multiplicarFlecha(2, 3));
console.log(multiplicarFlechaCompleta(2, 3));

// Estructura de control anidadas 

const edad = 21 ;
const tieneID = true;

if (edad >= 18) {
  if (tieneID) {
    console.log("Acceso permitido");
  } else {
    console.log("Necesitas identificación");
  }
} else {
  console.log("Eres menor de edad");
}





