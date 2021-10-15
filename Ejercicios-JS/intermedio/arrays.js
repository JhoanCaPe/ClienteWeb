//Algunos ejemplos de declaración de arrays:

var empty = [];
 
var numbers = [
    'zero', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine'
];
 
empty[1]        // undefined
numbers[1]      // 'one'
 
empty.length    // 0
numbers.length  // 10

// Pueden contener elementos de distinto tipo
var misc = [
    'string', 98.6, true, false, null, undefined,
    ['nested', 'array'], {object: true}, NaN,
    Infinity
];

//propiedad length
misc.length

/**
 * 
 * Muestra los números pares del siguiente array
 * [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
 */


 var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

 for (var i = 0; i < numeros.length; i += 1) {
     if (numeros[i] % 2 === 0) {
         console.log('El numero ' + numeros[i] + " es par.")
     }
 }


 /*
 Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para 
 obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado 
 de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 36.000 veces esta operación.
 */ 
 