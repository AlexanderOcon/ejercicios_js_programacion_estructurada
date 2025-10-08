// Ejercicios E15.js - Algoritmos de Búsqueda

// Nombre: {Brandon Alexander Hermida Ocon}

// -------------------------------------------------//

function Busquedalineal(arr, valor) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === valor) {
      return i; // devuelve el Índice donde se encontró
    }
  }
  return -1; // no se encontró
}

let numeros = [8, 3, 10, 5, 2];
console.log(Busquedalineal(numeros, 10 )); // 2
console.log(Busquedalineal(numeros, 7)); // -1

// -------------------------------------------------//
function BusquedaBinaria(arr, valor) {  
  let inicio = 0;
  let fin = arr.length - 1;

  while (inicio <= fin) {
    let medio = Math.floor((inicio + fin) / 2);

    if (arr[medio] === valor) {
      return medio; // devuelve el Índice donde se encontró
    } else {  
      
      if (arr[medio] < valor) {
        inicio = medio + 1;
      } else {
        fin = medio - 1;
      }
    }
  }
  return -1; // no se encontró
}

let numeros2 = [2, 5, 8, 10, 15, 20]; // arreglo ordenado
console.log(BusquedaBinaria(numeros2, 10)); // 3
console.log(BusquedaBinaria(numeros2, 7)); // -1

// ----------------------------------------------------------- //


function busquedaLineal2(arr, valor) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === valor) {
      return i; // devuelve el Índice donde se encontró
    } 
  }
  return -1;
}

let letras = ['a', 'c', 'd', 'f', 'g'];
console.log(busquedaLineal2(letras, 'f')); // 3
console.log(busquedaLineal2(letras, 'b')); // -1

// ------------------------------------------------------------------------------------------- //

const productos = [
{ id: 1, nombre: "Laptop", categoria: "Electronica", precio: 1200, stock: 10 }, 
{ id: 2, nombre: "Celular", categoria: "Electrónica", precio: 800, stock: 25 },
{ id: 3, nombre: "Teclado", categoria: "Accesorios", precio: 50, stock: 100 },
{ id: 4, nombre: "Mouse", categoria: "Accesorios", precio: 30, stock: 150 }, 
{ id: 5, nombre: "Monitor", categoria: "Electrónica", precio: 300, stock: 20 },
{ id: 6, nombre: "Silla Gamer", categoria: "Muebles", precio: 250, stock: 5 },
{ id: 7, nombre: "Escritorio", categoria: "Muebles", precio: 400, stock: 8 }, 
{ id: 8, nombre: "Audifonos", categoria: "Accesorios", precio: 70, stock: 60 },
{ id: 9, nombre: "Tablet", categoria: "Electrónica", precio: 600, stock: 12 },
{ id: 10, nombre: "Impresora", categoria: "Electrónica", precio: 200, stock: 15 }, 
{ id: 11, nombre: "Cámara", categoria: "Electrónica", precio: 1800, stock: 7 },
{ id: 12, nombre: "Smartwatch", categoria: "Electrónica", precio: 250, stock: 18 },
{ id: 13, nombre: "Parlante", categoria: "Accesorios", precio: 120, stock: 30 },
{ id: 14, nombre: "Microondas", categoria: "Electrodomésticos", precio: 180, stock: 12 }, 
{ id: 15, nombre: "Refrigeradora", categoria: "Electrodomésticos", precio: 900, stock: 4 }, 
{ id: 16, nombre: "Lavadora", categoria: "Electrodomésticos", precio: 700, stock: 6 }, 
{ id: 17, nombre: "Secadora", categoria: "Electrodomésticos", precio: 650, stock: 3 }, 
{ id: 18, nombre: "Cafetera", categoria: "Electrodomésticos", precio: 90, stock: 25 }, 
{ id: 19, nombre: "Ventilador", categoria: "Electrodomésticos", precio: 60, stock: 40 }, 
{ id: 20, nombre: "Licuadora", categoria: "Electrodomésticos", precio: 110, stock: 22 }, 
{ id: 21, nombre: "Cama", categoria: "Muebles", precio: 800, stock: 2 },
{ id: 22, nombre: "Ropero", categoria: "Muebles", precio: 500, stock: 3 }, 
{ id: 23, nombre: "Estufa", categoria: "Electrodomésticos", precio: 750, stock: 5 }, 
{ id: 24, nombre: "Horno", categoria: "Electrodomésticos", precio: 400, stock: 6 }, 
{ id: 25, nombre: "Lampara", categoria: "Accesorios", precio: 45, stock: 50 }, 
{ id: 26, nombre: "Router", categoria: "Electrónica", precio: 130, stock: 20 }, 
{ id: 27, nombre: "Disco Duro", categoria: "Electrónica", precio: 150, stock: 35 }, 
{ id: 28, nombre: "Memoria USB", categoria: "Accesorios", precio: 25, stock: 200 }, 
{ id: 29, nombre: "Cargador", categoria: "Accesorios", precio: 35, stock: 90 }, 
{ id: 38, nombre: "Proyector", categoria: "Electrónica", precio: 600, stock: 4 } 

];


// --------------------------------------------------------------------------------------------- //

// Crea una función que reciba un arreglo de objetos y busque un producto por nombre (por ejemplo, &quot;Monitor&quot;), usando búsqueda lineal.
function buscarProductoPorNombre(arr, nombre) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].nombre === nombre) {
      return arr[i]; // devuelve el objeto del producto encontrado
    }
  }
  return null; // no se encontró
}
console.log(buscarProductoPorNombre(productos, "Monitor"));
console.log(buscarProductoPorNombre(productos, "Cama"));
console.log(buscarProductoPorNombre(productos, "Televisor")); // no existe

// Crea una función que reciba un arreglo de objetos y busque todos los productos de una categoría específica (por ejemplo, &quot;Electrodomésticos&quot;), usando búsqueda lineal.

function buscarProductosPorCategoria(arr, categoria) {
  let resultados = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].categoria === categoria) {
      resultados.push(arr[i]); // agrega el producto encontrado al arreglo de resultados
    }
  }
  return resultados; // devuelve el arreglo de productos encontrados
}
console.log(buscarProductosPorCategoria(productos, "Electrodomésticos"));
console.log(buscarProductosPorCategoria(productos, "Muebles"));
console.log(buscarProductosPorCategoria(productos, "Ropa")); // no existe

// Crea una función que reciba un arreglo de objetos y busque un producto con un precio exacto (por ejemplo, 600), usando búsqueda lineal.

function buscarProductoPorPrecio(arr, precio) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].precio === precio) {
      return arr[i]; // devuelve el objeto del producto encontrado
    }
  }
  return null; // no se encontró
}
console.log(buscarProductoPorPrecio(productos, 600));
console.log(buscarProductoPorPrecio(productos, 250));
console.log(buscarProductoPorPrecio(productos, 9999)); // no existe

// Crea una función que reciba un arreglo de objetos y busque todos los productos cuyo precio esté dentro de un rango (por ejemplo, entre 100 y 500), usando búsqueda lineal.

function buscarProductosPorRangoDePrecio(arr, precioMin, precioMax) {
  let resultados = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].precio >= precioMin && arr[i].precio <= precioMax) {
      resultados.push(arr[i]); // agrega el producto encontrado al arreglo de resultados
    }
  }
  return resultados; // devuelve el arreglo de productos encontrados
}
console.log(buscarProductosPorRangoDePrecio(productos, 100, 500));
console.log(buscarProductosPorRangoDePrecio(productos, 200, 800));
console.log(buscarProductosPorRangoDePrecio(productos, 1000, 2000)); // no existe

// Crea una función que reciba un arreglo de objetos y busque los productos con stock menor a un valor dado (por ejemplo, 10), usando búsqueda lineal.

function buscarProductosPorStock(arr, stockMax) {
  let resultados = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].stock < stockMax) {
      resultados.push(arr[i]); // agrega el producto encontrado al arreglo de resultados
    }
  }
  return resultados; // devuelve el arreglo de productos encontrados
}
console.log(buscarProductosPorStock(productos, 10));
console.log(buscarProductosPorStock(productos, 5));
console.log(buscarProductosPorStock(productos, 1)); // no existe

// Crea una función que reciba un arreglo de objetos y busque un producto por su ID usando búsqueda binaria (el arreglo debe estar ordenado por id).

function buscarProductoPorId(arr, id) {
  let inicio = 0;
  let fin = arr.length - 1;

  while (inicio <= fin) {
    let medio = Math.floor((inicio + fin) / 2);

    if (arr[medio].id === id) {
      return arr[medio]; // devuelve el objeto del producto encontrado
    }

    if (arr[medio].id < id) {
      inicio = medio + 1;

    } else {
      fin = medio - 1;
    }
  }
  return null; // no se encontró
}

console.log(buscarProductoPorId(productos, 10));
console.log(buscarProductoPorId(productos, 1));
console.log(buscarProductoPorId(productos, 99)); // no existe

// Crea una función que reciba un arreglo de objetos y busque un producto por precio usando búsqueda binaria (el arreglo debe estar ordenado por precio).

function buscarProductoPorPrecioBinario(arr, precio) {
  let inicio = 0;
  let fin = arr.length - 1; 

  while (inicio <= fin) {
    let medio = Math.floor((inicio + fin) / 2);

    if (arr[medio].precio === precio) {
      return arr[medio]; // devuelve el objeto del producto encontrado
    }

    if (arr[medio].precio < precio) {
      inicio = medio + 1;

    }else {
      fin = medio - 1;
    }
  }
  return null; // no se encontró
}
console.log(buscarProductoPorPrecioBinario(productos, 600));  
console.log(buscarProductoPorPrecioBinario(productos, 250));
console.log(buscarProductoPorPrecioBinario(productos, 9999)); // no existe


// Crea una función que reciba un arreglo de objetos y busque un producto por nombre usando búsqueda binaria (el arreglo debe estar ordenado alfabéticamente por nombre).

function buscarProductoPorNombreBinario(arr, nombre) {
  let inicio = 0;
  let fin = arr.length - 1;

  while (inicio <= fin) {
    let medio = Math.floor((inicio + fin) / 2);

    if (arr[medio].nombre === nombre) {
      return arr[medio]; // devuelve el objeto del producto encontrado
    }

    if (arr[medio].nombre < nombre) {
      inicio = medio + 1;

    } else {
      fin = medio - 1;
    }
  }
  return null; // no se encontró
}
console.log(buscarProductoPorNombreBinario(productos, "Monitor"));
console.log(buscarProductoPorNombreBinario(productos, "Cama"));
console.log(buscarProductoPorNombreBinario(productos, "Televisor")); // no existe

// Crea una función que reciba un arreglo de objetos y compare el tiempo de ejecución entre búsqueda lineal y binaria al buscar un mismo producto.

// No le entendi a este ejercicio :c

// Crea una función que reciba un arreglo de objetos y verifique si un producto con un nombre dado existe o no en el arreglo, devolviendo true o false (búsqueda lineal).

function existeProductoPorNombre(arr, nombre) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].nombre === nombre) {
      return true; // el producto existe
    }
  } 
  return false; // el producto no existe
}
console.log(existeProductoPorNombre(productos, "Monitor")); // true
console.log(existeProductoPorNombre(productos, "Cama")); // true
console.log(existeProductoPorNombre(productos, "Televisor")); // false













































// Nombre: {Brandon Alexander Hermida Ocon}
// Firma antiplagio 