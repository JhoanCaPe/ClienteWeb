//Creacion de objetos
//La mas habitual, usando un literal
const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

console.log(person1.firstName);
console.log(person1["firstName"]);

//Estas dos siguientes no se usan mucho
const person2 = {};
  person2.firstName = "John";
  person2.lastName = "Doe";
  person2.age = 50;
  person2.eyeColor = "blue";

const person3 = new Object();
  person3.firstName = "John";
  person3.lastName = "Doe";
  person3.age = 50;
  person3.eyeColor = "blue";

//Cuidado, los objetos en javascript son siempre referencias, no valores, son mutables:
const person = {
    firstName:"John",
    lastName:"Doe",
    age:50, 
    eyeColor:"blue"
  }
  
  const x = person;
  x.age = 10;      // Will change both x.age and person.age

  console.log(person.age);
  console.log(x.age);
  
/**
 * 
 * Imaginemos que vamos a desarrollar un juego, 
 * y debemos crear un objeto "Jugador" que tenga una propiedad "fuerza" 
 * que inicialmente tenga el valor 1, un método "incrementarFuerza" que 
 * nos permita incrementar en 1 la fuerza del jugador y un método
 * "consultarFuerza" que nos muestre un mensaje con la fuerza del jugador.
 * 
 */

const jugador = { 
  fuerza: 1,
  incrementarFuerza: function(){
    this.fuerza +=1;
  },
  consultarFuerza: function(){
    return "Tu fuerza es de " + this.fuerza;
  }
}
 
console.log(jugador.consultarFuerza());  // Tu fuerza es de 1
jugador.incrementarFuerza();
console.log(jugador.consultarFuerza());  // Tu fuerza es de 2


/*
* Uso del objeto Date
* Escribe un script que imprima un mensaje con la fecha de hoy con el siguiente formato.
* Hola, hoy es 22 de Abril de 2020
*/

var months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];;
var today = new Date();

var year = today.getFullYear();
var month = today.getMonth();
var day = today.getDate();

var message = "Hola, hoy es " + day + " de " + months[month] + " del " + year;

console.log(message);

/*
* Uso de la clase Math
* Escribe una función que reciba un número por parámetro y devuelva otro número aleatorio
* entre cero y el número del parametro.
* Ejemplo:
* calcularAleatorio(10) // Devuelve un número aleatorio entre cero y 10.
*/


function calcularAleatorio(numero) {
    return Math.round(Math.random() * numero);
}


console.log(calcularAleatorio(10));
console.log(calcularAleatorio(10));
console.log(calcularAleatorio(10));
console.log(calcularAleatorio(10));

